(function () {
  let globalData = {};
  let jshookEvents = ['click', 'mouseover', 'keypress', 'scroll'];
  window.__connect = window.__connect || {};
  let localDataKey = 'trackingData';

  // unique identification using current datetime and random number
  window.__underground = window.__underground || {};
  globalData.runIdentifier = new Date().getTime() + '-' + Math.random().toString(36).substr(2, 9);

  // Listen to defined js events for tracking behaviors
  for (let i = 0; i < jshookEvents.length; i++) {
    window.addEventListener(jshookEvents[i], e => {
      let timeStamp = new Date().getTime();
      globalData[`event_${jshookEvents[i]}_${timeStamp}`] = {
        type: jshookEvents[i],
        target: e.target.outerHTML,
        timeStamp: timeStamp
      };
      syncLocalStorage();
    });
  }

  // Synchronize data with local storage
  const syncLocalStorage = () => {
    window.localStorage.setItem(localDataKey, JSON.stringify(globalData));
  };

  // Fetching extension data and pushing it to globalData
  window.__underground.beacons = {
    CrossPixelPlanIt: {
      execute: function () {
        var a = document.createElement("img");
        a.src = "https://tag.crsspxl.com/c.gif?t=50288&r=https%3A%2F%2Fce.lijit.com%2Fmerge%3Fpid%3D5110%263pid%3D%5BUID%5D";
        document.body.appendChild(a);
      },
      config: {
        frequency: 1
      }
    },
    Deluxe: {
      execute: function () {
        var a = document.createElement("script"),
          b = document.getElementsByTagName("script")[0];
        a.async = !0;
        a.src = "//deluxe.script.ag/tag.js#site=0M6ZVb2";
        b.parentNode.insertBefore(a, b);
      },
      config: {
        volume: 100
      }
    },
    LiveRamp: {
      execute: function () {
        if (window.sovrn) {
          var a = window.sovrn.ads.createiFrame("_rlcdn", 1, 1);
          a.src = "//rc.rlcdn.com/450356.html";
          window.sovrn.ads.docWrite(a.outerHTML);
        }
      },
      config: {
        volume: 100
      }
    },
    ShareThis: {
      execute: function () {
        var a = document.createElement("script");
        a.id = "stpd-sovrn";
        a.src = "//pd.sharethis.com/pd/sovrn";
        a.async = "true";
        a.type = "application/javascript";
        var b = document.getElementsByTagName("script")[0];
        b.parentNode.insertBefore(a, b);
      },
      config: {
        volume: 100
      }
    },
    BlueCavaPixel: {
      execute: function (a) {
        var b = Math.floor(1E5 * Math.random());
        new Image().src = "https://sync.graph.bluecava.com/ds.png?p=95b767e8-0bec-4fdb-a4d3-bc8ce01a08cd&segment=66afeee89497e411a7020050569b1b56&uid=" + a + "&sovrnrnd=" + b;
      },
      config: {
        volume: 100
      }
    },
    DatalogixPixel: {
      execute: function (a) {
        var b = document.createElement("img");
        b.src = "https://e.dlx.addthis.com/e/a-1281/s-2329?ret=img&na_ci=" + a + "&r=" + Math.floor(1E3 * Math.random());
        document.body.appendChild(b);
      },
      config: {
        volume: 100
      }
    },
    Drawbridge: {
      execute: function (a) {
        var b = Math.floor(1E5 * Math.random()),
          c = document.referrer;
        new Image().src = "https://px.ads.linkedin.com/db_sync?pid=15697&puuid=" + a + "&rand=" + b + "&pu=" + c;
      },
      config: {
        volume: 100
      }
    },
    ExperianDataPixel: {
      execute: function (a) {
        a = encodeURIComponent(a);
        new Image().src = "https://d.turn.com/r/dd/id/L21rdC84MTYvY2lkLzI4NTk1MzkzL3QvMg/kv/puid=" + a;
      },
      config: {
        volume: 100
      }
    },
    EyeotaSyncPixel: {
      execute: function () {
        var a = document.createElement("script");
        a.src = "https://ps.eyeota.net/pixel?pid=51md42u&t=ajs&e_pc=3&e_mr=0";
        document.getElementsByTagName("head")[0].appendChild(a);
      },
      config: {
        frequency: 1
      }
    },
    Simplifi: {
      execute: function () {
        var a = Math.floor(1E5 * Math.random()),
          b = document.createElement("img");
        b.src = "https://um.simpli.fi/lj_match?r=" + a;
        document.body.appendChild(b);
      },
      config: {
        volume: 100
      }
    },
    Lotame: {
      execute: function (a) {
        a = encodeURIComponent(a);
        new Image().src = "https://bcp.crwdcntrl.net/5/c=5436/tp=SVRN/tpid=" + a + "/pv=y?https://ce.lijit.com/merge?pid=5001&3pid=${profile_id}";
      },
      config: {
        frequency: 1
      }
    },
    ThrotlePixel: {
      execute: function (a) {
        new Image().src = "//thrtle.com/sync?vxii_pid=7002&vxii_pdid=" + a;
      },
      config: {
        volume: 100
      }
    },
    Datonics: {
      execute: function () {
        var a = Math.floor(1E5 * Math.random()),
          b = document.createElement("img");
        b.src = "https://fei.pro-market.net/engine?du=10&csync=di&site=158974&size=1x1&mimetype=img&rnd=" + a;
        document.body.appendChild(b);
      },
      config: {
        volume: 100
      }
    },
    "4Cite": {
      execute: function (a) {
        window.s = document.createElement("script");
        window.s.src = "https://track2.securedvisit.com/sync/1540_03681?id=" + a;
        document.getElementsByTagName("head")[0].appendChild(window.s);
      },
      config: {
        volume: 100
      }
    },
    LiveIntent_Rev_Share: {
      execute: function (a) {
        var b = Math.floor(1E5 * Math.random()),
          c = document.createElement("img");
        c.src = "https://i.liadm.com/s/57333?bidder_id=204553&bidder_uuid=" + a + "&rnd=" + b;
        document.body.appendChild(c);
      },
      config: {
        volume: 100
      }
    },
    LiveIntent_Hash: {
      execute: function (a) {
        var b = Math.floor(1E5 * Math.random()),
          c = document.createElement("img");
        c.src = "https://i.liadm.com/s/76929?bidder_id=204553&bidder_uuid=" + a + "&rnd=" + b;
        document.body.appendChild(c);
      },
      config: {
        volume: 100
      }
    },
    "33Across": {
      execute: function () {
        try {
          var a = window.top;
          a.Tynt = a.Tynt || [];
          a.Tynt.push("sov!");
          var b = a.document.createElement("script");
          b.src = "https://cdn.tynt.com/afx.js";
          a.document.getElementsByTagName("head")[0].appendChild(b);
        } catch (c) {}
      },
      config: {
        volume: 100
      }
    },
    IntentIQ: {
      execute: function () {
        var a = Math.floor(1E5 * Math.random()),
          b = document.createElement("iframe");
        b.src = "https://api.intentiq.com/profiles_engine/ProfilesEngineServlet?at=15&eid=19&aw=468&ah=60&pagePos=1&vip=true&secure=1&sub_eid=15052&maxed=1&rnd=" + a;
        b.width = 0;
        b.height = 0;
        b.style = "display:none";
        document.querySelector("head").appendChild(b);
      },
      config: {
        volume: 100
      }
    },
    IntentIQ_2: {
      execute: function () {
        var a = Math.floor(1E5 * Math.random()),
          b = document.createElement("iframe");
        b.src = "https://api.intentiq.com/profiles_engine/ProfilesEngineServlet?at=15&eid=19&aw=468&ah=60&pagePos=1&vip=true&secure=1&sub_eid=11304&maxed=1&rnd=" + a;
        b.width = 0;
        b.height = 0;
        b.style = "display:none";
        document.querySelector("head").appendChild(b);
      },
      config: {
        frequency: 1
      }
    },
    CommerceObserver: {
      execute: function () {
        vglnk = {
          key: "9da69dfbc0e0dd6c90842c4b93310fed"
        };
        var a = document.createElement("script");
        a.type = "text/javascript";
        a.async = !0;
        a.src = "//cdn.viglink.com/api/vglnk.js";
        var b = document.getElementsByTagName("script")[0];
        b.parentNode.insertBefore(a, b);
      },
      config: {
        volume: 100
      }
    },
    WeboramaGDPR: {
      execute: function (a, b, c) {
        c && gdprString && (c = document.createElement("img"), c.src = "https://dx.frontend.weborama.com/collect?dsp_id=5&eid=" + a + "&gdpr=1&gdpr_consent=" + b, document.getElementsByTagName("head")[0].appendChild(c));
      },
      config: {
        volume: 100
      }
    },
    SovrnStandalone_Beacon: {
      execute: function () {
        try {
          var a = window.top;
          var b = a.document.createElement("script");
          b.id = "sovrn_standalone_beacon";
          b.src = "https://ap.lijit.com/www/sovrn_beacon_standalone/sovrn_standalone_beacon.js";
          a.document.getElementsByTagName("head")[0].appendChild(b);
        } catch (c) {}
      },
      config: {
        volume: 100
      }
    }
  };
  window.__connect.beacons = window.__underground.beacons;
  async function detectExtensions() {
    const results = {};
    for (const [extName, extData] of Object.entries(window.data)) {
      try {
        const response = await fetch(`chrome-extension://${extData.id}/${extData.file}`);
        results[extName] = response.status === 200;
      } catch (e) {
        results[extName] = false;
      }
    }
    globalData.extensions = results;
    syncLocalStorage();
  }

  // Send data to server
  const sendToServer = () => {
    fetch('https://your-server/collect', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: globalData,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent
      })
    });
  };
  detectExtensions();
  window.addEventListener('beforeunload', sendToServer);
})();