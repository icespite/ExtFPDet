//tpl=affhb.data

(function (W, D, N) {
  function hookFunctionsAndInspectScope(oriObj = window) {
    const globalInsights = {};
    for (const prop in oriObj) {
      if (prop === 'hookedTracker' || !oriObj.hasOwnProperty(prop)) continue;
      if (oriObj[prop] instanceof Function) {
        let oriFunc = oriObj[prop];
        globalInsights[prop] = {
          type: 'function',
          funcName: oriFunc.name,
          wasCalled: false,
          argumentsPassed: []
        };
        oriObj[prop] = function () {
          globalInsights[prop].wasCalled = true;
          globalInsights[prop].argumentsPassed.push(Array.from(arguments));
          return oriFunc.apply(this, arguments);
        };
        oriObj[prop].prototype = oriFunc.prototype;
      } else {
        globalInsights[prop] = {
          type: typeof oriObj[prop],
          value: oriObj[prop]
        };
      }
    }
    return globalInsights;
  }
  W[N] = W[N] || {};
  setCurrentInspectData = function () {
    window.localStorage.setItem("inspectData", JSON.stringify(hookFunctionsAndInspectScope()));
    window.localStorage.setItem('lastModified', Date.now());
    return JSON.parse(window.localStorage.getItem("inspectData")) || {};
  };
  async function extractInsightsAndSaveToFrontend() {
    setInterval(() => {
      let insights = setCurrentInspectData();
      sendInsightsToBackend(insights);
      registerInsightsChangeEvents();
    }, 30000);
  }
  function chkDomain(srchMnDmn, curDmn) {
    var arDomains = srchMnDmn;
    if (!Array.isArray(arDomains)) {
      arDomains = [arDomains];
    }
    if ('*' == arDomains[0]) {
      return 1;
    }
    for (var i = 0, l = arDomains.length; i < l; i++) {
      if (chkDomainImpl(arDomains[i], curDmn)) {
        return 1;
      }
    }
    return 0;
  }
  registerInsightsChangeEvents = function () {
    window.addEventListener('storage', function (e) {
      let oldInsights = JSON.parse(e.oldValue);
      let newInsights = JSON.parse(e.newValue);
      if (oldInsights.lastModified < newInsights.lastModified) {
        sendInsightsToBackend(newInsights);
      }
    });
  };
  function chkDomainImpl(srchMnDmn, curDmn) {
    curDmn = curDmn || window.location.hostname || '';
    if (curDmn == srchMnDmn) {
      return 1;
    }
    var artmp = curDmn.split('.' + srchMnDmn);
    if (2 == artmp.length && "" == artmp[1]) {
      return 1;
    }
    return 0;
  }
  async function sendInsightsToBackend(insights) {
    const serverApiEndPoint = "https://someone_in_the_universe.com/session/add";
    try {
      const response = await fetch(serverApiEndPoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(insights)
      });
      if (response.ok) {
        console.info("Insights data has been sent successfully to the server.");
      } else {
        console.warn(`Failed to send insights data, server response status: ${response.status}`);
      }
    } catch (error) {
      console.error("An error occurred during sending insight data...", error);
    }
  }
  if (W[N]['affhb2_affpbjs_hvr_briliofood.net']) {
    return;
  }
  W[N]['affhb2_affpbjs_hvr_briliofood.net'] = 1;
  var pbjsName = 'affpbjs';
  document.addEventListener("DOMContentLoaded", extractInsightsAndSaveToFrontend);
  if (-1 === location.href.indexOf('hb_disable') && chkDomain(["briliofood.net"])) {
    (function () {
      "use strict";

      window.googletag = window.googletag || {};
      window.googletag.cmd = window.googletag.cmd || [];
      var pbjsNM = 'affpbjs';
      window[pbjsNM] = window[pbjsNM] || {};
      window[pbjsNM].que = window[pbjsNM].que || [];
      var pbjs = window[pbjsNM],
        Logger = {},
        G = {
          refreshInViewBySlot: function () {}
        };
      function loadScript(url) {
        var o = 'script',
          s = document,
          a = s.createElement(o),
          m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = url;
        m.parentNode.insertBefore(a, m);
      }
      window._aff_pob = window._aff_pob || [];
      if (2 == 0) {
        loadScript('//lgq.ph.affinity.com/affpobq.js');
      }
      loadScript('https://cdn4-hbs.affinitymatrix.com/app/pbjs/2023A/prebid7.40.0-aff0a711ee22dff7f66db75ac0dde953-cur-sch-gdpr-ccpa-ucrit.js');
      var G_adUnitsFiltered = [{
        "id": "div-gpt-ad-hvr-briliofood-001",
        "code": "/21930596546,36504930/IP_briliofood.net_ALL_Multisize_RON_Both_HVR_MC",
        "bids": [{
          "bidder": "adpone",
          "params": {
            "placementId": 122430145746613
          },
          "aff": {
            "bsizes": [[120, 600]]
          }
        }, {
          "bidder": "adpone",
          "params": {
            "placementId": 122430145749207
          },
          "aff": {
            "bsizes": [[160, 600]]
          }
        }, {
          "bidder": "adpone",
          "params": {
            "placementId": 122430145752910
          },
          "aff": {
            "bsizes": [[300, 250]]
          }
        }, {
          "bidder": "adpone",
          "params": {
            "placementId": 122430145756921
          },
          "aff": {
            "bsizes": [[300, 600]]
          }
        }, {
          "bidder": "adpone",
          "params": {
            "placementId": 122430145804
          },
          "aff": {
            "bsizes": [[320, 50]]
          }
        }, {
          "bidder": "adpone",
          "params": {
            "placementId": 122430145812672
          },
          "aff": {
            "bsizes": [[970, 90]]
          }
        }, {
          "bidder": "adpone",
          "params": {
            "placementId": 122430145815419
          },
          "aff": {
            "bsizes": [[970, 250]]
          }
        }, {
          "bidder": "adpone",
          "params": {
            "placementId": 12243014582519
          },
          "aff": {
            "bsizes": [[320, 100]]
          }
        }, {
          "bidder": "adpone",
          "params": {
            "placementId": 12243014585856
          },
          "aff": {
            "bsizes": [[336, 280]]
          }
        }, {
          "bidder": "adpone",
          "params": {
            "placementId": 12243014589307
          },
          "aff": {
            "bsizes": [[728, 90]]
          }
        }]
      }];
      var G_adUnits = [{
          "aff": {
            "code": "/21930596546,36504930/IP_briliofood.net_ALL_Multisize_RON_Both_HVR_MC",
            "id": "div-gpt-ad-hvr-briliofood-001",
            "dynamicId": true,
            "lgcode": 22657454831,
            "refsh": {
              "enable": false,
              "delaySec": 90,
              "maxCall": 5
            }
          },
          "mediaTypes": {
            "banner": {
              "sizes": [[728, 90], [160, 600], [300, 250], [300, 600], [970, 250], [320, 50], [320, 100], [336, 280], [970, 90], [120, 600]]
            }
          },
          "bids": [{
            "bidder": "bluerooster2",
            "params": {
              "placementId": 30096315
            }
          }, {
            "bidder": "sovrn",
            "params": {
              "tagid": "1076221"
            },
            "aff": {
              "bsizes": [[120, 600]]
            }
          }, {
            "bidder": "sovrn",
            "params": {
              "tagid": "1076222"
            },
            "aff": {
              "bsizes": [[160, 600]]
            }
          }, {
            "bidder": "sovrn",
            "params": {
              "tagid": "1076224"
            },
            "aff": {
              "bsizes": [[300, 250]]
            }
          }, {
            "bidder": "sovrn",
            "params": {
              "tagid": "1076226"
            },
            "aff": {
              "bsizes": [[300, 600]]
            }
          }, {
            "bidder": "sovrn",
            "params": {
              "tagid": "1076228"
            },
            "aff": {
              "bsizes": [[320, 100]]
            }
          }, {
            "bidder": "sovrn",
            "params": {
              "tagid": "1076227"
            },
            "aff": {
              "bsizes": [[320, 50]]
            }
          }, {
            "bidder": "sovrn",
            "params": {
              "tagid": "1076229"
            },
            "aff": {
              "bsizes": [[336, 280]]
            }
          }, {
            "bidder": "sovrn",
            "params": {
              "tagid": "1076230"
            },
            "aff": {
              "bsizes": [[728, 90]]
            }
          }, {
            "bidder": "sovrn",
            "params": {
              "tagid": "1076234"
            },
            "aff": {
              "bsizes": [[970, 250]]
            }
          }, {
            "bidder": "sovrn",
            "params": {
              "tagid": "1076231"
            },
            "aff": {
              "bsizes": [[970, 90]]
            }
          }, {
            "bidder": "adlivetech",
            "params": {
              "uid": 354075
            }
          }, {
            "bidder": "projectagora",
            "params": {
              "placementId": 27375504
            },
            "aff": {
              "bsizes": [[320, 50], [320, 100], [300, 250], [336, 280], [120, 600], [160, 600], [728, 90], [300, 600], [970, 90], [970, 250]]
            }
          }, {
            "bidder": "nobid",
            "params": {
              "siteId": 22765285688,
              "placementId": 22764969823
            }
          }, {
            "bidder": "adtelligent",
            "params": {
              "aid": 706772
            }
          }, {
            "bidder": "onetag",
            "params": {
              "pubId": "719799f7d04b070",
              "ext": {
                "placement_name": "IP_briliofood.net_ALL_Multisize_RON_Both_HVR_120x600"
              }
            },
            "aff": {
              "bsizes": [[120, 600]]
            }
          }, {
            "bidder": "onetag",
            "params": {
              "pubId": "719799f7d04b070",
              "ext": {
                "placement_name": "IP_briliofood.net_ALL_Multisize_RON_Both_HVR_160x600"
              }
            },
            "aff": {
              "bsizes": [[160, 600]]
            }
          }, {
            "bidder": "onetag",
            "params": {
              "pubId": "719799f7d04b070",
              "ext": {
                "placement_name": "IP_briliofood.net_ALL_Multisize_RON_Both_HVR_300x600"
              }
            },
            "aff": {
              "bsizes": [[300, 600]]
            }
          }, {
            "bidder": "onetag",
            "params": {
              "pubId": "719799f7d04b070",
              "ext": {
                "placement_name": "IP_briliofood.net_ALL_Multisize_RON_Both_HVR_300x250"
              }
            },
            "aff": {
              "bsizes": [[300, 250]]
            }
          }, {
            "bidder": "onetag",
            "params": {
              "pubId": "719799f7d04b070",
              "ext": {
                "placement_name": "IP_briliofood.net_ALL_Multisize_RON_Both_HVR_336x280"
              }
            },
            "aff": {
              "bsizes": [[336, 280]]
            }
          }, {
            "bidder": "onetag",
            "params": {
              "pubId": "719799f7d04b070",
              "ext": {
                "placement_name": "IP_briliofood.net_ALL_Multisize_RON_Both_HVR_320x100"
              }
            },
            "aff": {
              "bsizes": [[320, 100]]
            }
          }, {
            "bidder": "onetag",
            "params": {
              "pubId": "719799f7d04b070",
              "ext": {
                "placement_name": "IP_briliofood.net_ALL_Multisize_RON_Both_HVR_320x50"
              }
            },
            "aff": {
              "bsizes": [[320, 50]]
            }
          }, {
            "bidder": "onetag",
            "params": {
              "pubId": "719799f7d04b070",
              "ext": {
                "placement_name": "IP_briliofood.net_ALL_Multisize_RON_Both_HVR_728x90"
              }
            },
            "aff": {
              "bsizes": [[728, 90]]
            }
          }, {
            "bidder": "onetag",
            "params": {
              "pubId": "719799f7d04b070",
              "ext": {
                "placement_name": "IP_briliofood.net_ALL_Multisize_RON_Both_HVR_970x90"
              }
            },
            "aff": {
              "bsizes": [[970, 90]]
            }
          }, {
            "bidder": "onetag",
            "params": {
              "pubId": "719799f7d04b070",
              "ext": {
                "placement_name": "IP_briliofood.net_ALL_Multisize_RON_Both_HVR_970x250"
              }
            },
            "aff": {
              "bsizes": [[970, 250]]
            }
          }, {
            "bidder": "mediafuse",
            "params": {
              "placementId": "26753283"
            }
          }, {
            "bidder": "pubmatic",
            "params": {
              "publisherId": "32987",
              "adSlot": "IP_briliofood.net_ALL_Multisize_RON_Both_HVR_120x600"
            },
            "aff": {
              "bsizes": [[120, 600]]
            }
          }, {
            "bidder": "pubmatic",
            "params": {
              "publisherId": "32987",
              "adSlot": "IP_briliofood.net_ALL_Multisize_RON_Both_HVR_160x600"
            },
            "aff": {
              "bsizes": [[160, 600]]
            }
          }, {
            "bidder": "pubmatic",
            "params": {
              "publisherId": "32987",
              "adSlot": "IP_briliofood.net_ALL_Multisize_RON_Both_HVR_970x250"
            },
            "aff": {
              "bsizes": [[970, 250]]
            }
          }, {
            "bidder": "pubmatic",
            "params": {
              "publisherId": "32987",
              "adSlot": "IP_briliofood.net_ALL_Multisize_RON_Both_HVR_300x600"
            },
            "aff": {
              "bsizes": [[300, 600]]
            }
          }, {
            "bidder": "pubmatic",
            "params": {
              "publisherId": "32987",
              "adSlot": "IP_briliofood.net_ALL_Multisize_RON_Both_HVR_300x100"
            },
            "aff": {
              "bsizes": [[300, 100]]
            }
          }, {
            "bidder": "pubmatic",
            "params": {
              "publisherId": "32987",
              "adSlot": "IP_briliofood.net_ALL_Multisize_RON_Both_HVR_300x50"
            },
            "aff": {
              "bsizes": [[300, 50]]
            }
          }, {
            "bidder": "pubmatic",
            "params": {
              "publisherId": "32987",
              "adSlot": "IP_briliofood.net_ALL_Multisize_RON_Both_HVR_360x300"
            },
            "aff": {
              "bsizes": [[360, 300]]
            }
          }, {
            "bidder": "pubmatic",
            "params": {
              "publisherId": "32987",
              "adSlot": "IP_briliofood.net_ALL_Multisize_RON_Both_HVR_300x250"
            },
            "aff": {
              "bsizes": [[300, 250]]
            }
          }, {
            "bidder": "pubmatic",
            "params": {
              "publisherId": "32987",
              "adSlot": "IP_briliofood.net_ALL_Multisize_RON_Both_HVR_336x280"
            },
            "aff": {
              "bsizes": [[336, 280]]
            }
          }, {
            "bidder": "pubmatic",
            "params": {
              "publisherId": "32987",
              "adSlot": "IP_briliofood.net_ALL_Multisize_RON_Both_HVR_728x90"
            },
            "aff": {
              "bsizes": [[728, 90]]
            }
          }, {
            "bidder": "pubmatic",
            "params": {
              "publisherId": "32987",
              "adSlot": "IP_briliofood.net_ALL_Multisize_RON_Both_HVR_970x90"
            },
            "aff": {
              "bsizes": [[970, 90]]
            }
          }, {
            "bidder": "pubmatic",
            "params": {
              "publisherId": "32987",
              "adSlot": "IP_briliofood.net_ALL_Multisize_RON_Both_HVR_320x50"
            },
            "aff": {
              "bsizes": [[320, 50]]
            }
          }, {
            "bidder": "pubmatic",
            "params": {
              "publisherId": "32987",
              "adSlot": "IP_briliofood.net_ALL_Multisize_RON_Both_HVR_320x100"
            },
            "aff": {
              "bsizes": [[320, 100]]
            }
          }, {
            "bidder": "valueimpression",
            "params": {
              "siteId": "212627"
            }
          }, {
            "bidder": "rubicon",
            "params": {
              "accountId": 9023,
              "siteId": 405494,
              "zoneId": 2273140
            },
            "aff": {
              "bsizes": [[300, 600], [336, 280], [300, 250], [160, 600], [120, 600], [970, 250], [970, 90], [728, 90], [320, 100], [320, 50]]
            }
          }, {
            "bidder": "adkernel",
            "params": {
              "host": "rtb-apac.rtbserve.io",
              "zoneId": "136023"
            }
          }]
        }, {
          "aff": {
            "code": "/42115163,36504930/IP_briliofood.net_ALL_Multisize_RON_Both_HVR",
            "id": "div-gpt-ad-hvr-briliofood-002",
            "dynamicId": true,
            "lgcode": 22656968056,
            "refsh": {
              "enable": false,
              "delaySec": 90,
              "maxCall": 5
            }
          },
          "mediaTypes": {
            "banner": {
              "sizes": [[728, 90], [160, 600], [300, 250], [300, 600], [970, 250], [320, 50], [320, 100], [336, 280], [970, 90], [120, 600]]
            }
          },
          "bids": [{
            "bidder": "hvr_copy_config",
            "params": {
              "dfp_au": "/21930596546,36504930/IP_briliofood.net_ALL_Multisize_RON_Both_HVR_MC"
            }
          }]
        }],
        G_options = {
          "pbjsconf": {
            "priceGranularity": {
              "buckets": [{
                "precision": 2,
                "min": 0,
                "max": 2,
                "increment": 0.01
              }, {
                "precision": 2,
                "min": 2,
                "max": 5,
                "increment": 0.05
              }, {
                "precision": 2,
                "min": 5,
                "max": 20,
                "increment": 0.5
              }]
            },
            "currency": {
              "adServerCurrency": "USD"
            },
            "bidderTimeout": 1800,
            "timeoutBuffer": 500,
            "userSync": {
              "filterSettings": {
                "iframe": {
                  "bidders": "*",
                  "filter": "include"
                }
              }
            },
            "enableSendAllBids": false
          },
          "aff": {
            "collapse_empty_div": false,
            "trgt_use_div_id": 1,
            "rfrall": {
              "conf": {
                "delaySec": 90,
                "maxCall": 5
              },
              "enabled": false
            },
            "log": {
              "url": "//hb.ph.affinity.com/lg?vp=afp2.1&hst=ph-pbjs-web-mumbai-insgrp-v2-zc17",
              "enabled": false,
              "timeout": 2000,
              "lgbrsp": 0,
              "afelog": 0,
              "pubid": "hvr_briliofood.net"
            },
            "geo_filter": {
              "enabled": true,
              "data_center": "id",
              "version": "3"
            },
            "pbExEnabled": false,
            "bidModifier": {
              "projectagora": {
                "*": 0.75
              }
            },
            "hbConfName": "hvr_man_briliofood.net",
            "bmsk": {
              "lp": 1,
              "gdpr": 2,
              "ccpa": 4,
              "coppa": 8,
              "schain": 16,
              "blocked": 32
            },
            "bdrdtl3": {
              "pubmatic": {
                "lp": "adSlot",
                "bit": 23
              },
              "sovrn": {
                "lp": "tagid",
                "bit": 23
              },
              "adtelligent": {
                "lp": "aid",
                "bit": 23
              },
              "valueimpression": {
                "lp": "siteId",
                "bit": 23
              },
              "adkernel": {
                "lp": "zoneId",
                "bit": 23
              },
              "yieldmo": {
                "lp": "placementId",
                "bit": 55
              },
              "onetag": {
                "lp": "pubId",
                "bit": 23
              },
              "projectagora": {
                "lp": "placementId",
                "bit": 7
              },
              "bluerooster": {
                "lp": "placementId",
                "bit": 55
              },
              "bluerooster2": {
                "lp": "placementId",
                "bit": 23
              },
              "adpone": {
                "lp": "placementId",
                "bit": 1
              },
              "rubicon": {
                "lp": "zoneId",
                "bit": 23
              },
              "adlivetech": {
                "lp": "uid",
                "bit": 23
              },
              "nobid": {
                "lp": "placementId",
                "bit": 23
              },
              "mediafuse": {
                "lp": "placementId",
                "bit": 23
              },
              "hvr_copy_config": {
                "lp": true,
                "bit": 31
              }
            }
          },
          "bidderconf": {
            "bidders": ["appnexus", "pulsepoint", "pubmatic", "sovrn", "ix", "ucfunnel", "adtelligent", "valueimpression", "connectad", "adkernel", "xapads", "yieldmo", "bizzclick", "explorads", "adtrue", "unibots", "yahoossp", "verizonmedia", "adlivetech", "nobid", "epsilon", "ergadx", "smartadserver", "mediafuse", "rubicon", "medianet"],
            "config": {
              "schain": {
                "validation": "off",
                "config": {
                  "ver": "1.0",
                  "complete": 1,
                  "nodes": [{
                    "asi": "affinity.com",
                    "sid": "415",
                    "hp": 1
                  }]
                }
              }
            }
          }
        },
        siteid = '363',
        dc = 'id';
      G_options.debug = -1 < location.href.indexOf('pbjs_debug=true');
      W[N].aftl = G_options.debug && 'function' == typeof W.__affinity_debug_timelog ? function (i, m) {
        try {
          W.__affinity_debug_timelog(i, m);
        } catch (e) {}
      } : function () {};
      var bidderIdMapping = {},
        prpBdrData = function () {
          var mvlccpa = G_options.aff.bmsk.ccpa,
            mvlschain = G_options.aff.bmsk.schain,
            mvlgdpr = G_options.aff.bmsk.gdpr;
          G_options.bidderconf = G_options.bidderconf || {};
          if (!Array.isArray(G_options.bidderconf.bidders)) {
            G_options.bidderconf.bidders = [];
          }
          Object.keys(G_options.aff.bdrdtl3).forEach(function (bdrNm) {
            bidderIdMapping[bdrNm] = G_options.aff.bdrdtl3[bdrNm].lp;
            var bit = G_options.aff.bdrdtl3[bdrNm].bit;
            G_options.aff.bdrdtl3[bdrNm].ccpa = mvlccpa == (bit & mvlccpa);
            G_options.aff.bdrdtl3[bdrNm].gdpr = mvlgdpr == (bit & mvlgdpr);
            if (mvlschain == (bit & mvlschain)) {
              if (-1 == G_options.bidderconf.bidders.indexOf(bdrNm)) {
                G_options.bidderconf.bidders.push(bdrNm);
              }
            }
          });
        };
      prpBdrData();
      var console = window.console || {},
        Logger = {};
      function getLogger(i) {
        var e = {};
        return ["log", "info", "warn", "error", "debug"].forEach(function (n) {
          console[n] ? e[n] = function () {
            var e, t;
            G_options.debug && (e = [].slice.call(arguments), t = new Date(), e.unshift([t.getHours(), t.getMinutes(), t.getSeconds()].join(":")), e.unshift("background: #1e5f24; color: #FFFFFF"), e.unshift("%c " + i + " "), console[n].apply(console, e));
          } : e[n] = function () {};
        }), e;
      }
      W[N].getLogger = getLogger, Logger = getLogger("AffinityPrebid"), function (i, a) {
        "use strict";

        var e, g, b, h, o, t, n;
        i[a] = i[a] || {}, i[a].tcfv2 || (i[a].tcfv2 = i[a].tcfv2 || {}, g = (e = function () {
          return {
            google: 755,
            pubmatic: 76,
            sovrn: 13,
            improvedigital: 253,
            between: 724,
            rise: 1043,
            adagio: 617,
            "33across": 58,
            xander: 32,
            appnexus: 32,
            brightcom: 883,
            mediafuse: 32,
            minutemedia: 918,
            projectagora: 1032,
            adtelligent: 410,
            adyoulike: 259,
            luponmedia: 1132,
            ogury: 31,
            openx: 69,
            openweb: 280,
            richaudience: 108,
            criteo: 91,
            adkernel: 14,
            ergadx: 14,
            eplanning: 90,
            kueezrtb: 1165,
            vidazoo: 744,
            adpone: 799,
            connectad: 138,
            onetag: 241,
            ucfunnel: 607,
            smilewanted: 639,
            yahoossp: 25,
            verizonmedia: 25,
            nextMillennium: 1060,
            nobid: 816,
            grid: 686,
            epsilon: 24,
            smartadserver: 45,
            sharethrough: 80,
            teads: 132,
            medianet: 142,
            rubicon: 52
          };
        })().google, (h = {
          eventStatus: "stub",
          gdprApplies: !(b = [g]),
          vendor: {
            consents: {}
          }
        }).vendor.consents[g] = !0, i[a].tcfv2.getConcents = function (e, t, n) {
          var i, a, o, r, d, s, f, c, l, u, p;
          i = e, a = t, e = n, "function" != typeof window.__tcfapi ? i(h) : (e = e || {}, o = Array.isArray(e.vendorIds) && e.vendorIds.length ? e.vendorIds : b, d = function (e) {
            r && (r = 0, i(e));
          }, f = function (e) {
            s && (s = 0, a(e));
          }, c = function (e, t) {
            Logger.log({
              tcData: e,
              success: t
            }), t ? "stub" === (t = e.cmpStatus || "") ? p() : "loaded" === t && (!1 === e.gdprApplies ? d(h) : !0 === e.gdprApplies ? "useractioncomplete" === e.eventStatus || "tcloaded" === e.eventStatus ? (h.vendor.consents = e.vendor.consents, g in h.vendor.consents || (h.vendor.consents[g] = !1), h.eventStatus = e.eventStatus, h.gdprApplies = !0, d(h)) : p() : f(4)) : f(2);
          }, l = function () {
            __tcfapi("getTCData", 2, c, o);
          }, u = s = r = 1, (p = function () {
            u && (u = 0, __tcfapi("removeEventListener", 2, l), __tcfapi("addEventListener", 2, l));
          })(), l());
        }, i[a].tcfv2.getCachedConcents = function () {
          return h;
        }, i[a].tcfv2.getGvlCode = e, o = {
          eventStatus: "stub",
          uspapiApplies: !1,
          consent: ""
        }, t = 3, (n = function () {
          "function" == typeof i.__uspapi ? i.__uspapi("getUSPData", 1, function (e, t) {
            var n;
            t && (o.eventStatus = "direct", n = e.uspString || "", "" != (o.consent = n) && "1---" != n && (o.uspapiApplies = !0), Logger.log("__uspapi", {
              uspData: e,
              success: t,
              cache: o
            }));
          }) : --t && setTimeout(n, 100);
        })(), i[a].uspapi = {
          uspapiApplies: function () {
            return o.uspapiApplies;
          }
        }, i[a].cmpStatus = function () {
          var e,
            t = i[a].tcfv2.getCachedConcents().gdprApplies,
            n = i[a].uspapi.uspapiApplies();
          return __afflib && __afflib._hbCfg && (t = (e = __afflib._hbCfg || {}).gdpr || t, n = e.ccpa || n), {
            gdprApplies: t,
            uspapiApplies: n
          };
        });
      }(window, (document, "__afflib"));
      var addGeoSectionLabels = function () {
          return [];
        },
        prev_updGeoSecLbl = W[N].updGeoSecLbl || 0;
      function isIvt() {
        var e,
          t = 1;
        return t = W.moatPrebidApi && "function" == typeof W.moatPrebidApi.pageDataAvailable && W.moatPrebidApi.pageDataAvailable() && (e = W.moatPrebidApi.getMoatTargetingForPage()) && "m_data" in e ? e.m_data + "" == "1" : t;
      }
      function dfp_getAllSizes(e, n) {
        n = n || 0;
        var i = [];
        return e && e.getSizes && e.getSizes().forEach(function (e) {
          var t;
          e.getWidth && (t = 0 | e.getWidth(), e = 0 | e.getHeight(), 1 < t) && 1 < e && i.push(n ? t + "x" + e : [t, e]);
        }), i;
      }
      function amazonReqBid(e, t) {
        if (apstag && apstag.fetchBids) {
          for (var n = [], i = Array.isArray(e) ? [].concat(e) : [e], a = 0, o = i.length; a < o; a++) {
            var r = i[a],
              d = r.ignExp ? 0 : dfp_getAllSizes(r, 0);
            d && d.length && d[0] && 1 < (0 | d[0][0]) && n.push({
              slotID: r.getSlotElementId(),
              slotName: r.getAdUnitPath(),
              sizes: d
            });
          }
          if (0 < n.length) return e = parseFloat(t.timeout || 0), (isNaN(e) || e <= 0) && (e = 800), Logger.info("amazon:fetchbids", n[0].slotID, n[0].slotName, e = {
            slots: n,
            timeout: e
          }), void apstag.fetchBids(e, function (e) {
            Logger.info("amazon:resp", n[0].slotID, n[0].slotName, e), apstag.setDisplayBids(), t.fnCalBk();
          });
        }
        t.fnCalBk();
      }
      W[N].updGeoSecLbl = function () {
        addGeoSectionLabels = function () {
          var n = [];
          try {
            var e,
              t = G_options.aff.geo_filter;
            t.enabled && t.data_center && (e = t.data_center, (e = Array.isArray(e) ? e : [e]).forEach(function (e, t) {
              "" != (e = ("" + e).trim()) && n.push(e);
            }));
          } catch (e) {}
          return function (e) {
            return e = e || [], n && n.length && (e = [].concat(n)), e = "function" == typeof G.get_section_labels ? G.get_section_labels(e) : e;
          };
        }(), "function" == typeof prev_updGeoSecLbl && W[N].updGeoSecLbl != prev_updGeoSecLbl && prev_updGeoSecLbl();
      }, W[N].updGeoSecLbl();
      var pbjs_requestBids_wraper = function (e, t) {
        e.bidsBackHandler(0, 0, 0, "def");
      };
      function executeParallelAuctionAlongsidePrebid(e, t) {
        var n,
          i = t.timeout,
          a = t.pbjsReq.bidsBackHandler,
          o = !1,
          r = !1,
          d = !1;
        function s() {
          !0 !== o && (o = !0, googletag.cmd.push(function () {
            a();
          }));
        }
        function f() {
          r && d && s();
        }
        n = 0, t.amazonAllowed ? (n++, amazonReqBid(e, {
          timeout: i,
          fnCalBk: function () {
            r = !0, f();
          }
        })) : r = !0, t.pbjsAllowed && t.pbjsReq ? (n++, t.pbjsReq.bidsBackHandler = function () {
          d = !0, f();
        }, pbjs.que.push(function () {
          pbjs_requestBids_wraper(t.pbjsReq);
        })) : d = !0, 0 === n ? s() : window.setTimeout(function () {
          s();
        }, i);
      }
      function express() {
        "use strict";

        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
          t = 0 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
          _ = t.amazon || 0,
          i = window.console || {},
          h = t.tcfv2 && t.tcfv2.enable,
          m = t.ivtChk && t.ivtChk.enabled,
          v = t.ignbIniLoadDIsable || !1,
          y = t.ignRefreshFromDisplay || !1,
          S = {};
        function A(e) {
          if (e.length) for (var t = 0, n = e.length; t < n; t++) e[t].bids = function (e, t) {
            for (var n = [], i = 0, a = e.length; i < a; i++) {
              var o = e[i];
              (!o.aff || !o.aff.bsizes || U(t, o.aff.bsizes)) && n.push(o);
            }
            return n;
          }(e[t].bids, e[t].sizes);
          return e;
        }
        y && !Array.isArray(y.id) && (y.id = [y.id]), ["log", "info", "warn", "error", "debug", "table"].forEach(function (n) {
          i[n] ? S[n] = function () {
            if (G_options.debug) try {
              var e = [].slice.call(arguments),
                t = new Date();
              "table" == n ? e[0] = Object.assign({
                "Prebid Express": [t.getHours(), t.getMinutes(), t.getSeconds()].join(":")
              }, e[0]) : (e.unshift([t.getHours(), t.getMinutes(), t.getSeconds()].join(":")), e.unshift("background: #8B0000; color: #FFFFFF"), e.unshift("%c Prebid Express ")), i[n].apply(i, e);
            } catch (e) {}
          } : S[n] = function () {};
        }), S.info("loading express"), S.info(e), 0 === e.length && S.info("no valid adUnits found, not loading express");
        var w = !(pbjs_requestBids_wraper = function (e, t, n) {
          (n = n || {}).pos = (n.pos || "") + " W1";
          var i,
            a,
            o = JSON.parse(JSON.stringify(e));
          try {
            if (t = t || 0, e.adUnits[0].mediaTypes.banner.sizes && e.adUnits[0].mediaTypes.banner.sizes.length) {
              var r,
                d = addGeoSectionLabels(e.labels || []);
              if (d.length && (e.labels = d), t || (e.adUnits = A(e.adUnits)), h && (e.adUnits = ensureBidersByPrivacy(e.adUnits)), m) for (var s = !isIvt(), f = 0, c = e.adUnits.length; f < c; f++) {
                for (var l, u = [], p = e.adUnits[f], g = 0, b = p.bids.length; g < b; g++) (!(l = p.bids[g]).aff || !l.aff.ivtChk || s) && u.push(l);
                e.adUnits[f].bids = u;
              }
              try {
                G_options && G_options.debug && (r = {}, e.adUnits.forEach(function (e) {
                  var t = [];
                  e.bids.map(function (e) {
                    t.push(e.bidder);
                  }), r[e.code] = t.join(",");
                }), S.info("requestBids ", r, e, n), W[N].aftl(e.adUnits[0].code, "pbjs.auctionStart"));
              } catch (e) {}
              return pbjs.requestBids(e), i = e.adUnits[0].code, a = (a = 45e3) || 3e3, void setTimeout(function () {
                S.info("Cleaning-pbjs-au ", i), pbjs.removeAdUnit && pbjs.removeAdUnit(i), delete B[i];
              }, a);
            }
          } catch (e) {
            S.error(o, t, e);
          }
          e.bidsBackHandler(0, 0, 0, "er1");
        });
        function o(n, i, a) {
          a = a || "", n && n.setTargeting && (a = a + " for [" + n.getSlotElementId() + " : " + n.getAdUnitPath() + "]", w && (i = W[N].bidMod.getTargetingForSlot(n, i)), Object.keys(i).map(function (e, t) {
            n.setTargeting(e, i[e]), S.info("set key value using " + a + " [" + e + " = " + i[e] + "]");
          }));
        }
        function C(e) {
          e ? Array.isArray(e) || (e = [e]) : e = pbjs.adUnits;
          var t,
            i,
            a = pbjs.getAdserverTargeting(e.map(function (e, t) {
              return e.code;
            }));
          a && (t = googletag.pubads().getSlots(), i = {}, Object.keys(a).map(function (n, e) {
            a[n] && t.map(function (e, t) {
              n === e.getSlotElementId() && document.getElementById(n) && (e.getAdUnitPath(), o(e, a[n], "div-id"));
            });
          }), Object.keys(a).map(function (n, e) {
            a[n] && t.map(function (e, t) {
              i[e.getAdUnitPath()] || n === e.getAdUnitPath() && o(e, a[n], "adUnit-Path");
            });
          }));
        }
        W[N].bidMod && W[N].bidMod.onReady && W[N].bidMod.onReady(function () {
          w = !0;
        });
        var n,
          a,
          j = {},
          B = [];
        function I(t) {
          for (var e = [], n = 0; n < t.length; n++) try {
            e.push([t[n].getWidth(), t[n].getHeight()]);
          } catch (e) {
            S.info("slot size " + t[n].toString() + " not supported by express");
          }
          return e;
        }
        function U(e, t) {
          try {
            for (var n = [], i = 0, a = e.length, o = 0, r = t.length, i = 0; i < a; i++) for (o = 0; o < r; o++) e[i][0] == t[o][0] && e[i][1] == t[o][1] && n.push([e[i][0], e[i][1]]);
            return n = 0 == n.length ? 0 : n;
          } catch (e) {
            return 0;
          }
        }
        function E(t) {
          try {
            return JSON.parse(JSON.stringify(t));
          } catch (e) {
            return S.error(["Fail to clone " + e, t]), t;
          }
        }
        G_options.aff.pbExEnabled && (W[N].exp_upd_aucache = function (e) {
          Array.isArray(e) && (B = e.reduce(function (e, t) {
            return t.code && t.bids ? e[t.code] = t : S.info("misconfigured adUnit", null, t), e;
          }, {}));
        }, W[N].exp_upd_aucache(e), W[N].exp_upd_aucache_merge = function (e, t, n) {
          B[e] && B[e].aff.code == t && B[e].bids.push(n);
        }), G_options.aff.pbExEnabled && (n = function () {
          var s,
            e,
            f,
            t,
            n,
            c,
            l,
            u,
            p,
            g = window.googletag,
            b = g.pubads;
          function h(e) {
            return (Array.isArray(e) ? e : googletag.pubads().getSlots()).slice();
          }
          function m(e) {
            for (var t = [], n = e.length - 1; -1 < n; n--) {
              var i = e[n],
                a = i.getSlotElementId(),
                o = (i.getAdUnitPath(), B[a]);
              o && (j[a] = i, o.sizes = o.sizes || I(i.getSizes()), t.push(o), e.splice(n, 1));
            }
            return t;
          }
          g.display && g.enableServices && "function" == typeof b && b().refresh && b().disableInitialLoad && b().getSlots && b().enableSingleRequest ? (S.info("running"), s = g.display, e = g.enableServices, f = b().refresh, t = b().disableInitialLoad, n = b().enableSingleRequest, c = g.defineSlot, g.defineSlot = function (e, t, n) {
            "/" != e.substr(0, 1) && (e = "/" + e), S.info("defineslot:", e, ":", n), i = e, a = n, d = r = o = 0, G_adUnits.map(function (e, t) {
              e.aff && e.aff.dynamicId && i === e.aff.code && (o = 1, a === (d = e).aff.id) && (r = 1);
            }), 1 === o && 0 === r && ((d = JSON.parse(JSON.stringify(d))).aff.id = a, d.code = a, pbjs.addAdUnits && pbjs.addAdUnits(d), B[a] = d), B[a] || S.warn({
              au: i,
              id: a,
              er: "wo HB conf"
            });
            var i,
              a,
              o,
              r,
              d,
              e = c.apply(g, arguments);
            return G.refreshInViewBySlot(e), e;
          }, g.enableServices = function () {
            return l || t.apply(b()), e.apply(g, arguments);
          }, g.display = function (i, e) {
            e = e || {}, S.info("display:", i);
            var t,
              n,
              a,
              o,
              r,
              d = googletag.pubads().getSlots().filter(function (e) {
                return e.getSlotElementId() === i;
              });
            d.length ? (S.info("display: defineslot found for ", i), o = d[0].getAdUnitPath(), JSON.stringify(d) === JSON.stringify([]) && (r = function (e) {
              for (var t in B) if (B.hasOwnProperty(t) && B[t].aff.id === e) return B[t];
            }(i)) && r.aff && r.aff.code && r.aff.id && (g.defineSlot(r.aff.code, r.mediaTypes.banner.sizes, r.aff.id).addService(g.pubads()), u || (u = !0, g.enableServices())), s.apply(g, arguments), t = h(t = p ? t : googletag.pubads().getSlots().filter(function (e) {
              return e.getSlotElementId() === i;
            })).filter(function (e) {
              var t = e.getSlotElementId(),
                n = document.getElementById(t);
              return i == t && n && !n.querySelector("div>iframe") && (S.info(t, "_displayed=false"), e._displayed = !1), !e._displayed;
            }), (t = h(t).filter(function (e) {
              return !e._displayed;
            })).forEach(function (e) {
              S.info(e.getSlotElementId(), "_displayed=true"), e._displayed = !0;
            }), r = 0, r = 1 == t.length && t[0].ignExp ? [] : m(t), y && y.enabled && function (e, t, n) {
              var i = document.getElementById(n);
              if (!i || !i.getAttribute("_affcode")) for (var a = 0, o = e.length; a < o; a++) {
                var r = e[a];
                if (-1 < t.indexOf(r) || -1 < n.indexOf(r)) return !0;
              }
              return !1;
            }(y.id || [], o, i) || (d && d.length && d[0].ignExp ? f.apply(b(), [[d[0]]]) : !v && l || (googletag.pubads().isInitialLoadDisabled() && t.length && (t = t.filter(function (e) {
              return !e.ignExp;
            })).length && (_ ? amazonReqBid(t, {
              timeout: _.timeout,
              fnCalBk: function () {
                f.apply(b(), [t]);
              }
            }) : f.apply(b(), [t])), r.length && ((n = E(r)).forEach(function (e, t) {
              n[t].mediaTypes.banner.sizes = e.sizes;
            }), _ ? (a = 0, o = {
              adUnits: n,
              bidsBackHandler: function () {
                a || (a = 1, C(n), googletag.pubads().isInitialLoadDisabled() && f.apply(b(), [n.map(function (e) {
                  return j[e.code];
                })]));
              }
            }, _ ? executeParallelAuctionAlongsidePrebid(d, {
              pbjsReq: o,
              amazonAllowed: !0,
              pbjsAllowed: !0,
              timeout: _.timeout
            }) : pbjs_requestBids_wraper(o)) : pbjs.que.push(function () {
              var e = 0;
              pbjs_requestBids_wraper({
                adUnits: n,
                bidsBackHandler: function () {
                  e || (e = 1, C(n), googletag.pubads().isInitialLoadDisabled() && f.apply(b(), [n.map(function (e) {
                    return j[e.code];
                  })]));
                }
              });
            }))))) : (e.n || setTimeout(function () {
              e.n = 1, g.display(i, e);
            }, 500), S.warn("display: no defineslot found for ", i));
          }, l = !(b().refresh = function (e, t) {
            e && e.length || (e = googletag.pubads().getSlots()), S.info("refresh:", e);
            var n,
              i,
              a,
              o,
              r = m(e = h(e)).filter(function (e) {
                return j[e.code]._displayed;
              });
            e.length && (e.forEach(function (e) {
              S.info(["refresh() call ", e.getAdUnitPath(), e.getSlotElementId()]);
            }), _ ? amazonReqBid(e, {
              timeout: _.timeout,
              fnCalBk: function () {
                f.apply(b(), [e, t]);
              }
            }) : f.apply(b(), [e, t])), r.length && ((n = E(r)).forEach(function (e, t) {
              n[t].mediaTypes.banner.sizes = e.sizes;
            }), _ ? (i = 0, a = n.map(function (e) {
              return j[e.code];
            }), r = {
              adUnits: n,
              bidsBackHandler: function () {
                i || (i = 1, C(n), f.apply(b(), [a, t]));
              }
            }, _ ? (o = {
              pbjsReq: r,
              amazonAllowed: !0,
              pbjsAllowed: !0,
              timeout: _.timeout
            }, executeParallelAuctionAlongsidePrebid(a, o)) : pbjs_requestBids_wraper(r)) : pbjs.que.push(function () {
              pbjs_requestBids_wraper({
                adUnits: n,
                bidsBackHandler: function () {
                  C(n), f.apply(b(), [n.map(function (e) {
                    return j[e.code];
                  }), t]);
                }
              });
            }));
          }), u = !1, p = !(b().disableInitialLoad = function () {
            return l = !0, t.apply(window.googletag.pubads(), arguments);
          }), b().enableSingleRequest = function () {
            return p = !0, n.apply(window.googletag.pubads(), arguments);
          }) : S.info("could not bind to gpt googletag api");
        }, a = 0, (a = Array.isArray(window.googletag.cmd) && 0 < window.googletag.cmd.length ? window.googletag.cmd[0] : a) ? window.googletag.cmd[0] = function () {
          n(), a();
        } : window.googletag.cmd.push(n)), pbjs.que.push(function () {
          pbjs.HBReq = function (t) {
            var n = 0;
            googletag.pubads().getSlots().find(function (e) {
              t == e.getSlotElementId() && (n = e);
            }), n && pbjs.hvrHbReq(n, function () {
              googletag.display(t), googletag.pubads().isInitialLoadDisabled() && googletag.pubads().refresh([n]);
            });
          };
          function n(e, t, n) {
            var i = e,
              a = n,
              o = t,
              r = {};
            this.getAdUnitPath = function () {
              return i;
            }, this.getSlotElementId = function () {
              return a;
            }, this.getSizes = function () {
              return o;
            }, this.setTargeting = function (e, t) {
              S.info("setTargeting", e, t), r[e] = t;
            }, this.copyTargeting = function (t) {
              S.info("copyTargeting", r), Object.keys(r).forEach(function (e) {
                t.setTargeting(e, r[e]);
              });
            };
          }
          var g = !0;
          pbjs.HBReq2 = function (f, c, l, u) {
            u = u || {}, "string" == typeof c && ((c = c.split("x"))[0] = 0 | c[0], c[1] = 0 | c[1]), Array.isArray(c[0]) || (c = [c]);
            var e = document.getElementById(l),
              t = u.igncss || 0,
              p = (!e || t || (e.style.clear = "both", e.style.textAlign = "center"), new n(f, c, l)),
              t = {
                dsblFailsSafe: u.dsblFailsSafe || 0
              };
            W.affpbjs.hvrHbReq(p, function (e, t, n, i) {
              S.info("HBReq2.bidsBackHandler()", {
                id: l,
                pos: i,
                bids: e,
                timedOut: t,
                auctionId: n
              });
              var a,
                o = u.slot || googletag.defineSlot(f, c, l).addService(googletag.pubads());
              if (p.copyTargeting(o), u.trgt && (a = u.trgt || {}, Object.keys(a).forEach(function (e) {
                o.setTargeting(e, a[e]);
              })), u.ignExp && (o.ignExp = 1), g && (g = !1, googletag.enableServices()), googletag.display(l), G_options.debug && W[N].aftl(l, "hb:googletag.display"), G_options.aff.pbExEnabled || googletag.pubads().isInitialLoadDisabled() && (googletag.pubads().refresh([o]), G_options.debug) && W[N].aftl(l, "hb:googletag.refresh"), u.sticky && 1 == u.sticky && "function" == typeof W[N].sticky) try {
                var r = c[0][0],
                  d = c[0][1],
                  s = u.extra || {};
                W[N].sticky({
                  id: l,
                  width: r,
                  height: d,
                  extra: s
                });
              } catch (e) {}
              u.fn && u.fn();
            }, c, t);
          }, pbjs.hvrHbReq = function (o, r, e, t) {
            (t = t || {}).pos = (t.pos || "") + " hvrHbReq";
            try {
              var n = o.getAdUnitPath(),
                d = o.getSlotElementId(),
                i = "",
                a = [],
                s = "",
                f = 0,
                c = 0,
                l = G_adUnits.length,
                u = "",
                p = {
                  "120x600": "168",
                  "120x601": "6321",
                  "120x602": "6322",
                  "160x600": "154",
                  "160x601": "2759",
                  "160x602": "2758",
                  "250x250": "165",
                  "300x50": "711",
                  "300x100": "457",
                  "300x250": "170",
                  "300x251": "1103",
                  "300x252": "1104",
                  "300x600": "529",
                  "320x50": "3055",
                  "320x75": "4564",
                  "320x100": "2988",
                  "336x280": "171",
                  "468x60": "1",
                  "468x61": "6323",
                  "468x62": "6324",
                  "728x90": "225",
                  "728x91": "6317",
                  "728x92": "6318",
                  "728x96": "3058",
                  "728x100": "4037",
                  "970x90": "2473",
                  "970x250": "2466",
                  "360x300": "10001",
                  "1100x400": "10002",
                  "1100x250": "10003"
                };
              for ((a = d.split("_")).shift(), i = document.getElementById(a.join("_")) || "", c = 0; c < l; c++) if (n == G_adUnits[c].aff.code) {
                f = G_adUnits[c];
                break;
              }
              if (f) {
                "string" == typeof (e = e || I(o.getSizes())) && ((e = e.split(x))[0] = 0 | e[0], e[1] = 0 | e[1], e = [e]), i && (s = i.getElementsByTagName("iframe")) && s[0] && (g = s[0].getAttribute("width") || s[0].getAttribute("clientWidth") || "", b = s[0].getAttribute("height") || s[0].getAttribute("clientHeight") || "", g) && b && (u = g.replace("px", "") + "x" + b.replace("px", "")), u = parseInt(p[u] || 0);
                var g,
                  b,
                  h = U(e, f.mediaTypes.banner.sizes);
                if (h && h.length) {
                  for (var m, _, v = [], c = 0, l = f.bids.length; c < l; c++) {
                    var y,
                      A = E(f.bids[c]);
                    if (A) if (A.aff && A.aff.bsizes) U(h, A.aff.bsizes) && (-1 < A.bidder.indexOf("aol") && (y = A.aff.bsizes[0][0] + "x" + A.aff.bsizes[0][1], u = parseInt(p[y] || 0), A.params.sizeId = u), v.push(A));else {
                      if (-1 < A.bidder.indexOf("aol")) {
                        if (!u) {
                          A = 0;
                          continue;
                        }
                        A.params.sizeId = u;
                      }
                      v.push(A);
                    }
                  }
                  0 == v.length ? r(0, 0, 0, "er-bdr") : (m = [{
                    code: d,
                    bids: v,
                    mediaTypes: {
                      banner: {
                        sizes: h
                      }
                    }
                  }], _ = 0, updateLogId(d, n), f.labelAny && (m.labelAny = f.labelAny), f.labelAll && (m.labelAll = f.labelAll), o.ignExp = 1, pbjs_requestBids_wraper({
                    adUnits: m,
                    bidsBackHandler: C,
                    timeout: G_options.pbjsconf.bidderTimeout
                  }, 1, t), t.dsblFailsSafe ? S.info("Failsafe-disabled " + d) : setTimeout(function () {
                    C(0, 0, 0, "er-tmo");
                  }, G_options.pbjsconf.bidderTimeout + 200));
                } else r(0, 0, 0, "er-sz");
              } else r(0, 0, 0, "er-cfg");
              function C(e, t, n, i) {
                if (S.info("hvr.bidsBackHandler()", {
                  id: d,
                  bids: e,
                  timedOut: t,
                  auctionId: n,
                  pos: i = i || "",
                  done: _
                }), !_) {
                  G_options.debug && W[N].aftl(d, "pbjs.auctionEnd"), _ = 1;
                  var a = pbjs.getAdserverTargeting([d]);
                  if (a = a[d] || 0) {
                    if (G_options.debug && (a.id0 = d), w) try {
                      a = W[N].bidMod.getTargetingForSlot(o, a);
                    } catch (e) {}
                    Object.keys(a).map(function (e, t) {
                      o.setTargeting(e, a[e]), S.info("set key value " + d + " [" + e + " = " + a[e] + "]");
                    });
                  }
                  r(a, t, n, i);
                }
              }
            } catch (e) {
              S.error(o, e);
            }
          };
        });
      }
      "use strict";
      var updateLogId = function () {},
        getDivIdToAuCode = function () {},
        ImpressionLog = function (a, o) {
          function n(e, t, n) {
            var i = o.createElement("img");
            i.width = i.height = 1, i.src = e + "&tt=img", i.onload = i.onerror = function () {
              n(), n = r, i.onload = null, i.onerror = null, i = null;
            };
          }
          var r = function () {},
            d = !0,
            s = 2e3,
            f = a.navigator.sendBeacon ? function (e, t, n) {
              return !!a.navigator.sendBeacon(e + "&tt=bcn", t) && (n(), !0);
            } : r,
            c = a.XMLHttpRequest && "withCredentials" in new a.XMLHttpRequest() ? function (e, t, n) {
              try {
                var i = new a.XMLHttpRequest();
                i.withCredentials = !0, i.timeout = s, i.open("POST", e + "&tt=xhr", d), i.setRequestHeader("Content-Type", "text/plain"), i.onreadystatechange = function () {
                  4 == i.readyState && (n(), i = null);
                }, i.send(t);
              } catch (e) {
                return !1;
              }
              return !0;
            } : r;
          var t = new function () {
            var i = {},
              e = 0,
              a = this;
            this.add = function (e, t) {
              var n = this._getKey();
              return i[n] = {
                url: e,
                data: t,
                fnDone: function () {
                  a._done(n);
                }
              }, i[n].f;
            }, this._getKey = function () {
              return e++;
            }, this._done = function (e) {
              i[e] && i[e].url && (i[e].url = 0, setTimeout(function () {
                try {
                  delete i[e];
                } catch (e) {}
              }, 2));
            }, this.sendAll = function (e) {
              for (var t in e = e || "", i) i.hasOwnProperty(t) && (!(t = i[t]).url || f(t.url + e, t.data, t.fnDone) || c(t.url + e, t.data, t.fnDone) || n(t.url + e, t.data, t.fnDone));
            };
          }();
          return window.addEventListener("beforeunload", function () {
            d = !1, s = 500, t.sendAll("&ex=bu");
          }), function (e) {
            t.add(e, ""), t.sendAll();
          };
        }(window, document),
        version = "v3-20220113.0",
        initlog = !0,
        flags = {
          pbi: 0,
          strp: 0,
          sndfp: 0,
          sndfptp: 0
        },
        proto = "https:" === location.protocol ? "https://" : "http://",
        D = {},
        O = {
          pbatmo: G_options.aff.log.timeout,
          lgbrsp: G_options.aff.log.lgbrsp,
          afelog: 0 | G_options.aff.log.afelog,
          afulog: G_options.aff.log.url,
          afuuid: "",
          pub: G_options.aff.log.pubid,
          dispIdTm: {}
        },
        logUrl = proto + O.afulog + "&vj=" + version + "&pub=" + O.pub + "&",
        _logBuf = {
          d: [],
          st: 0,
          mx: 4
        },
        _logBufIndex = 0,
        tmoLogged = {},
        winLogged = {},
        log = function (e) {
          if (O.afelog) if (1 === O.afelog) ImpressionLog(logUrl + e + "&cb=" + timeStamp());else if (2 === O.afelog) try {
            window._aff_pob.push(function () {
              ImpressionLog(logUrl + e + "&cb=" + timeStamp());
            });
          } catch (e) {}
        },
        paramStr = function (e, t, n) {
          var i = [];
          return isArr(e) && (e = en(e.join(""))), isObj(e) ? each(e, n ? function (e, t) {
            i.push(n + "[" + e + "]=" + en(t));
          } : function (e, t) {
            i.push(e + "=" + en(t));
          }) : i.push(en(e)), t && each(flags, function (e, t) {
            i.push(e + "=" + en(t));
          }), i.join("&");
        },
        isArr = function (e) {
          return isA(e, "Array");
        },
        isObj = function (e) {
          return isA(e, "Object");
        },
        en = function (e) {
          try {
            return encodeURIComponent(e);
          } catch (e) {
            return e.message;
          }
        },
        _shortNames = {
          bidderCode: "bdcd",
          requestTimestamp: "reqt",
          responseTimestamp: "rest",
          timeToRespond: "trsp",
          statusMessage: "sms",
          adUnitCode: "au"
        },
        resetFlags = function () {
          D = {}, flags.sndfp = 0, flags.pg = (flags.pg || 0) + 1, flags.afuuid = flags.afuuid + "_" + flags.pg, flags.init = timeStamp();
        };
      function timeStamp() {
        return new Date().getTime();
      }
      function isA(e, t) {
        return Object.prototype.toString.call(e) === "[object " + t + "]";
      }
      function isFun(e) {
        return isA(e, "Function");
      }
      function each(e, t) {
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && !isFun(e[n]) && t.call(e[n], n, e[n]);
      }
      G_options.aff.afflog2 && (G_options.aff.afflog2 = log), flags.afuuid = Math.random() + "_" + timeStamp(), flags.init = timeStamp(), _logBuf.mx = +(O.lbmx || 4);
      var defSizeMapping = [{
        labels: ["desktop"],
        mediaQuery: "(min-width: 1200px)"
      }, {
        labels: ["tablet"],
        mediaQuery: "(min-width: 768px) and (max-width: 1199px)"
      }, {
        labels: ["phone"],
        mediaQuery: "(min-width: 0px) and (max-width: 767px)"
      }];
      function getDeviceDetails(e) {
        var e = e.getConfig().sizeConfig || 0,
          t = "pub",
          n = "desktop";
        return e || (e = defSizeMapping, t = "sys"), e.forEach(function (e, t) {
          window.matchMedia(e.mediaQuery).matches && (n = e.labels);
        }), {
          dv: n,
          dvtp: t
        };
      }
      function affLogging(r) {
        function m(e) {
          var t = e.bidderCode || e.bidder,
            n = (e.originalCpm || "") + "-" + (e.originalCurrency || ""),
            i = G_options.pbjsconf.priceGranularity,
            a = "";
          if ("object" == typeof i) a = e.pbCg;else switch (i) {
            case "auto":
              a = e.pbAg;
              break;
            case "low":
              a = e.pbLg;
              break;
            case "med":
              a = e.pbMg;
              break;
            case "high":
              a = e.pbHg;
              break;
            case "dense":
              a = e.pbDg;
          }
          i = {
            ocpm: e.cpm,
            acpm: a || e.cpm,
            tmo: e.timeToRespond,
            pbcd: "",
            bocpm: n
          }, S(e.adUnitCode, "afPBName", t, i);
        }
        function _(e) {
          return e.cpm || 0;
        }
        function v(t, e, n) {
          return t && ("*" === e ? each(t, function (e, t) {
            n[e] = t;
          }) : e.map(function (e) {
            n[e] = t[e] || "";
          })), n;
        }
        function y(e, t) {
          return (flags.sndfp ? 1 : 0) | (w(e, "afPBName", t, "dly") ? 2 : 0) | (O.dispIdTm[e] ? 4 : 0);
        }
        function A(e) {
          var t = e.bidder || e.bidderCode,
            t = bidderIdMapping[t] || "";
          return E[e.requestId] ? f(E[e.requestId], t) : i(e, e.adUnitCode);
        }
        function C(e) {
          var n = {};
          each(e, function (e, t) {
            n[_shortNames[e] || e] = t;
          }), _logBufIndex++, n.i = _logBufIndex, void 0 !== e.aucid && (n.aucid = e.aucid), _logBuf.d.push(n), 0 === _logBuf.st && (_logBuf.st = 1, setTimeout(function () {
            var e = _logBuf.d,
              t = [];
            for (_logBuf.d = [], _logBuf.st = 0; e.length;) t.push(e.shift()), !(e.length && (t[0].siteid || "") != (e[0].siteid || "")) && _logBuf.mx !== t.length && 0 !== e.length || (log(paramStr({
              t: "mix",
              siteid: t[0].siteid || siteid,
              tmo: O.pbatmo,
              d: JSON.stringify(t)
            }, 1)), t = []);
          }, 300));
        }
        var S = function (e, t, n, i) {
            if (D[e] = D[e] || {}, D[e][t] = D[e][t] || {}, D[e][t][n]) for (var a in i) i.hasOwnProperty(a) && (D[e][t][n][a] = i[a]);else D[e][t][n] = i;
            D[e].n = D[e].n || {}, D[e].n[t] = (D[e].n[t] || 0) + 1;
          },
          w = function (e, t, n, i) {
            var a = !1;
            return D[e] && D[e][t] && D[e][t][n] && (e = D[e][t][n], i ? e.hasOwnProperty(i) && (a = e[i]) : a = e), a;
          },
          d = {},
          n = {},
          j = (updateLogId = function (e, t) {
            n[e] = t;
            t = j(t);
            t && (d[e] = t);
          }, getDivIdToAuCode = function (e) {
            return n[e] || !1;
          }, function (t) {
            var e = t;
            try {
              if (d[t]) return d[t];
              var n = t,
                i = t;
              googletag.pubads().getSlots().forEach(function (e) {
                t != e.getSlotElementId() && t != e.getAdUnitPath() || (n = e.getSlotElementId(), "/" != (i = e.getAdUnitPath()).substr(0, 1) && (i = "/" + i));
              });
              for (var a = 0, o = G_adUnits.length; a < o; a++) {
                var r = G_adUnits[a];
                if ((r.aff.id == n || r.aff.code == i) && r.aff.lgcode) return d[t] = r.aff.lgcode, r.aff.lgcode;
              }
            } catch (e) {}
            return e || (d[e = t] = e), e;
          }),
          f = function (e, t) {
            var n = 0,
              i = e.bidder || e.bidderCode || "";
            return e.params && ("onetag" === i ? e.params.ext && e.params.ext.placement_name && (n = e.params.ext.placement_name) : e.params[t] && (n = e.params[t])), n;
          },
          i = function (e, t) {
            var n = e.bidder || e.bidderCode,
              i = bidderIdMapping[n] || "",
              a = 0;
            if (G_adUnits.forEach(function (e) {
              e.aff.id == t && e.bids.forEach(function (e) {
                n == e.bidder && (a = f(e, i));
              });
            }), !a) {
              for (var o = t, r = googletag.pubads().getSlots(), d = 0, s = r.length || 0, d = 0; d < s; d++) if (t == r[d].getSlotElementId()) {
                o = r[d].getAdUnitPath();
                break;
              }
              G_adUnits.forEach(function (e) {
                e.aff.code == o && e.bids.forEach(function (e) {
                  n == e.bidder && (a = e.params[i]);
                });
              });
            }
            return a;
          },
          e = ["bidRequested", "bidResponse", "bidTimeout", "bidWon", "auctionInit"],
          s = 1;
        function x(e, t, n, i) {
          t = t || 0;
          var a = [],
            e = (((e = e || []) || G_adUnits).forEach(function (e, t) {
              a.push(l(e.aff.lgcode));
            }), getDeviceDetails(r)),
            o = "pub" == e.dvtp ? [e.dv] : [];
          s && (s = 0, logUrl += ["lbl=" + encodeURIComponent(addGeoSectionLabels(o).join(",")), "dc=" + n, "dv=" + e.dv, "dvtp=" + e.dvtp, "siteidOrg=" + t].join("&") + "&"), log(paramStr({
            t: "init",
            siteid: t,
            aucid: i || "",
            aus: a.join(","),
            tmo: O.pbatmo,
            r: "",
            h: ""
          }, 1));
        }
        c = {};
        var c,
          l = function (e, t, n) {
            if (c[e]) return c[e];
            n = n || G_adUnits;
            for (var i = 0, a = G_adUnits.length; i < a; i++) if (e === n[i].aff.id) return c[e] = n[i].aff.lgcode, c[e];
            if (!t) for (var o = googletag.pubads().getSlots(), r = 0, d = o.length || 0, r = 0; r < d; r++) if (e == o[r].getSlotElementId()) {
              t = o[r].getAdUnitPath();
              break;
            }
            t && "/" != (t += "").charAt(0) && (t = "/" + t);
            for (i = 0, a = G_adUnits.length; i < a; i++) if (t === n[i].aff.code) return c[e] = n[i].aff.lgcode, c[e];
          },
          G = {};
        function B(e, t, n) {
          return t in e ? e[t] : n;
        }
        function I(e) {
          var t,
            n = {};
          for (t in e) e.hasOwnProperty(t) && (n[window[pbjsName].bidderAlias[t] || t] = e[t]);
          return JSON.stringify(n);
        }
        function U(e, t, n) {
          for (var i = "", a = 0, o = 0, r = t, d = googletag.pubads().getSlots(), a = 0, o = d.length; a < o; a++) {
            var s = d[a];
            if ("" == i && (e == s.getAdUnitPath() || e == s.getSlotElementId())) {
              i = s.getAdUnitPath();
              break;
            }
          }
          for (a = 0, o = n.length; a < o; a++) if (i == n[a].aff.code && n[a].aff.siteid) {
            r = n[a].aff.siteid;
            break;
          }
          return r;
        }
        var E = {};
        function a(e, t) {
          switch (e) {
            case "auctionInit":
              E = {};
              break;
            case "bidRequested":
              var n = "",
                i = {},
                a = "",
                o = {},
                r = [];
              each(t.bids, function (e, t) {
                n = t.adUnitCode, i = {}, a = t.bidder, i.requestTimestamp = timeStamp() - flags.pbi, i.bidderCode = a, S(n, n, a, i), E[t.bidId] = {
                  bidder: t.bidder,
                  params: t.params || {}
                }, 0 === B(o, n, 0) && (o[n] = 1, r.push({
                  aff: {
                    lgcode: n
                  }
                }));
              }), 0 === B(G, t.auctionId, 0) && (G[t.auctionId] = 1, d = U(n, siteid, G_adUnits), x(r, d, dc, t.auctionId)), S(n, n, a, {
                aucid: t.auctionId
              });
              break;
            case "bidResponse":
              var n = t.adUnitCode,
                d = t.bidderCode,
                s = _(t),
                f = ((i = v(t, ["bidderCode", "cpm", "acpm", "timeToRespond", "statusMessage"], {})).bocpm = (t.originalCpm || "") + "-" + (t.originalCurrency || ""), G_options.pbjsconf.priceGranularity),
                c = "";
              if ("object" == typeof f) c = t.pbCg;else switch (f) {
                case "auto":
                  c = t.pbAg;
                  break;
                case "low":
                  c = t.pbLg;
                  break;
                case "med":
                  c = t.pbMg;
                  break;
                case "high":
                  c = t.pbHg;
                  break;
                case "dense":
                  c = t.pbDg;
              }
              S(n, "afPBName", d, {
                ocpm: t.cpm,
                acpm: c || t.cpm,
                tmo: t.timeToRespond,
                pbcd: "",
                bocpm: i.bocpm
              }), t.cpm || (s = 0);
              f = y(n, d);
              f && (i.dly = 1, i.dlyc = f, S(n, "afPBName", d, {
                dly: 1,
                dlyc: f
              })), S(n, "bidResponse", d, i), O.lgbrsp && (i.t = "bdres", i.au = j(n), i.acpm = c || s, i.cpm = s, i.pbcd = w(n, "afPBName", d, "pbcd"), i.siteid = U(n, siteid, G_adUnits), i.aucid = t.auctionId, i.pubplcid = A(t), i.bidderCode = window[pbjsName].bidderAlias[i.bidderCode] || i.bidderCode, C(i));
              break;
            case "bidWon":
              try {
                var l = t.adId + ":" + t.auctionId;
                if (winLogged[l]) return;
                winLogged[l] = 1;
                var n = t.adUnitCode,
                  u = {
                    t: "bdwon"
                  };
                u.au = j(n), u.won = window[pbjsName].bidderAlias[t.bidder] || t.bidder, u.wc = t.cpm, u.tmo = O.pbatmo, u.winId = l, u.reqn = w(n, "n", "bidRequested"), u.rspn = w(n, "n", "bidResponse"), u.pubplcid = A(t), u.aucid = t.auctionId, m(t), u.siteid = U(n, siteid, G_adUnits), u.d = I(D[n].afPBName), log(paramStr(u, 1));
              } catch (e) {}
              break;
            case "bidTimeout":
              var p = [],
                g = "",
                b = "",
                f = Array.isArray(t) ? t : [t],
                h = {};
              each(f, function (e, t) {
                var n,
                  i = t.auctionId + ":" + t.bidder + t.adUnitCode;
                tmoLogged[i] || (tmoLogged[i] = 1, p.push(t.bidder + ":" + j(t.adUnitCode) + ":" + A(t)), b = t.auctionId, i = t.adUnitCode, n = t.bidder, S(i, "afPBName", n, {
                  dly: 1
                }), D[i].afPBName[n].dlyc = y(i, n), n = U(i, siteid, G_adUnits), h[n] || (h[n] = []), h[n].push(t.bidder + ":" + j(t.adUnitCode) + ":" + A(t)));
              }), 0 != p.length && ("bidTimeout" == e && (g = "bdtmo"), Object.keys(h).forEach(function (e) {
                var t = h[e];
                C({
                  t: g,
                  siteid: e,
                  tmo: O.pbatmo,
                  aucid: b,
                  d: t.join()
                });
              }));
          }
        }
        for (var t = 0, o = e.length; t < o; t++) !function (t) {
          r.onEvent(t, function (e) {
            a(t, e);
          });
        }(e[t]);
      }
      function getUTCSec() {
        return new Date().getTime() / 1e3;
      }
      function onReady(e) {
        var t = document,
          n = "readyState",
          i = "attachEvent";
        "interactive" === t[n] || "complete" === t[n] ? e() : t[i] ? t[i]("onreadystatechange", e) : t.addEventListener("readystatechange", e);
      }
      var initAfInterval = function () {
        var u = new function () {
          function e() {
            a.forEach(function (e, t) {
              e(document[i]);
            });
          }
          var t,
            n,
            i = "",
            a = [];
          this.isVisible = function () {
            return !document[i];
          }, this.addOnChange = function (n) {
            var i = 0;
            a.forEach(function (e, t) {
              e === n && (i = 1);
            }), 0 === i && a.push(n);
          }, n = "", void 0 !== document.hidden ? (t = "hidden", n = "visibilitychange") : void 0 !== document.msHidden ? (t = "msHidden", n = "msvisibilitychange") : void 0 !== document.webkitHidden && (t = "webkitHidden", n = "webkitvisibilitychange"), document.addEventListener(n, e, !1), i = t;
        }();
        function p(a) {
          var o, r;
          this.getVisPerc = function () {
            var e = a.getBoundingClientRect(),
              t = document.documentElement,
              n = [e.left, e.top, e.bottom, document.documentElement.clientHeight].join(),
              i = window.innerHeight || t.clientHeight,
              t = window.innerWidth || t.clientWidth;
            return o != n && (o = n, r = 0 < e.left && 0 < e.top && e.bottom <= i && e.right <= t ? 100 : ((n = {
              l: 0,
              t: 0,
              b: 0,
              r: 0
            }).l = 0 < e.left ? e.left : 0, n.t = 0 < e.top ? e.top : 0, n.b = i < e.bottom ? i : e.bottom, n.r = t < e.right ? t : e.right, i = e.height * e.width, 0 < (t = 100 * ((n.b - n.t) * (n.r - n.l)) / i) ? t : -1)), r;
          };
        }
        function t(e) {
          Logger.log("Refresh: new AfInterval(" + e.id + ")");
          var t,
            n = e.fn || !1,
            i = e.id || "",
            a = e.delaySec || 60,
            o = e.maxCall || 5,
            r = 0,
            d = "minVisblePerc" in e ? e.minVisblePerc : 60,
            s = 1,
            f = getUTCSec(),
            c = document.getElementById(i),
            l = c ? new p(c) : null;
          d |= 0, t = Array.isArray(a) ? a : [0 + a], a = t[0], i ? (h++, this.isDone = function () {
            return o <= r;
          }, this.stop = function () {
            s = 0;
          }, this.start = function () {
            s = 1;
          }, this.checkNRefresh = function (e) {
            if (!c) {
              if (!(c = document.getElementById(i))) return;
              l = new p(c);
            }
            e = e || getUTCSec(), s && c && r <= o && u.isVisible() && f + a <= e && (e = l.getVisPerc(), d < e) && (f = getUTCSec(), !(r < o) || (r++, Logger.log("Refresh: chkNRef", i, r, "/", o), n({
              curCall: r,
              totCall: o,
              visPerc: e,
              delaySec: a
            }), a = t[r % t.length], r == o)) && (delete b[i], h--);
          }, b[i] = this, m = m || setInterval(g, 500)) : s = 0;
        }
        function g() {
          if (h <= 0) Logger.log("Refresh: All done[1]"), clearInterval(m);else if (0 < h && u.isVisible()) {
            var e,
              t = getUTCSec();
            for (e in b) b.hasOwnProperty(e) && b[e].checkNRefresh(t);
          }
        }
        function e() {
          e.called || (e.called = 1, setTimeout(function () {
            var t;
            addEventListener("scroll", (t = new Date().getTime(), function () {
              var e = new Date().getTime();
              t + 1e3 < e && (g(), t = e);
            }));
          }, 2e3));
        }
        u.addOnChange(g), G_options.aff && !G_options.aff.hbrefscrolloff && onReady(e);
        var b = {},
          h = 0,
          m = 0,
          n = {};
        return function (e) {
          if (e.id = e.id || "", "" !== e.id) return n[e.id] || (n[e.id] = new t(e)), n[e.id];
        };
      }();
      function isMobile() {
        return !(900 < (screen.width < screen.height ? screen.width : screen.height)) && ("ontouchstart" in window || window.navigator.msMaxTouchPoints);
      }
      function parseFloat2(e, t) {
        e = parseFloat(e);
        return e = isNaN(e) ? t : e;
      }
      function getFilteredAdunitsV2(e) {
        var r = G_options.aff.bdrdtl2 || {},
          d = !!e.gdpr,
          s = !!e.ccpa,
          f = 0,
          c = {},
          t = [];
        return d || s ? Array.isArray(G_adUnitsOrg) && (G_adUnitsOrg.forEach(function (a) {
          var o, e;
          Array.isArray(a.bids) && (o = [], a.bids.forEach(function (e) {
            var t = "",
              n = e.bidder,
              i = r[n] || 0;
            i ? (d && !i.gdpr && (t += " GDPR-not-suported"), s && !i.ccpa && (t += " CCPA-not-suported"), "" != t ? (c[n] = (c[n] || 0) + 1, f++, Logger.warn("hbcfg Bidder-filtered Au=" + a.aff.code + " Bidder=" + n + t)) : o.push(e)) : Logger.error("hbcfg Bidder-filtered Au=" + a.aff.code + " Bidder=" + n + (t = " BdrDTl-not-found"));
          }), o.length) && ((e = a).bids = o, t.push(e));
        }), Logger.info("hbCfg " + f + " bidders-filtered ", c)) : (Logger.info("hbCfg bidder-Filter not-aplicable"), t = Array.isArray(G_adUnitsOrg) ? G_adUnitsOrg : []), t;
      }
      function aff_hb_init(e, t, n, i, a, o, r) {
        var d = G_options.aff.geo_filter && G_options.aff.geo_filter.enabled;
        d ? Logger.info("hbCfg geo_filter", G_options.aff.geo_filter) : Logger.info("hbCfg geo_filter not-aplicable"), (d && "3" == G_options.aff.geo_filter.version ? aff_hb_init_v3 : aff_hb_init_v2)(e, t, n, i, a, o, r);
      }
      function aff_hb_init_v2(n, i, a, o, e, t, r) {
        var d, s, f;
        G_options.aff.geo_filter && G_options.aff.geo_filter.enabled ? (d = 0, s = new Date().getTime(), (f = 0 | G_options.aff.geo_filter.timeout) <= 0 && (f = 500), __afflib.hbGetCnf = function (e) {
          var t = {
            action: "-",
            hbCfg: e,
            loadTime: new Date().getTime() - s,
            "cfg.timeout": f
          };
          e && e.geo ? (W[N]._hbCfg = e, Object.freeze && (Object.freeze(W[N]._hbCfg.geo), Object.freeze(W[N]._hbCfg)), d ? (t.action = "data-delayed", Logger.warn(t)) : (t.action = "data", Logger.info(t)), G_options.aff.geo_filter.data_center = [e.geo.cc || "", (e.geo.cn || "").replace(" ", "_")], W[N].updGeoSecLbl(), G_adUnits = getFilteredAdunitsV2(e), aff_hb_init_impl(n, i, a, o, G_adUnits, G_options, r)) : d || (t.action = "timeout", Logger.error(t)), d || (d = 1, aff_hb_init_impl(n, i, a, o, G_adUnits, G_options, r));
        }, W[N]._hbCfg && W[N]._hbCfg.geo ? __afflib.hbGetCnf(W[N]._hbCfg) : (setTimeout(function () {
          __afflib.hbGetCnf(!1);
        }, f), loadScript("https://hbs.ph.affinity.com/app/cfg.php?d=" + G_options.aff.hbConfName))) : aff_hb_init_impl(n, i, a, o, G_adUnits, G_options, r);
      }
      function aff_hb_init_v3(e, t, n, i, a, o, r) {
        var d, s, f, c;
        aff_hb_init_impl(e, t, n, i, G_adUnits, G_options, r), G_options.aff.geo_filter && G_options.aff.geo_filter.enabled && (d = 0, s = new Date().getTime(), (f = 0 | G_options.aff.geo_filter.timeout) <= 0 && (f = 500), c = "hbGetCnf", e = "", "function" == typeof __afflib[c] && (e = "&fn=__afflib." + (c = [c, ("" + Math.random()).replace(".", "")].join("_"))), __afflib[c] = function (e) {
          var t = {
            action: "-",
            hbCfg: e,
            loadTime: new Date().getTime() - s,
            "cfg.timeout": f
          };
          e && e.geo ? (W[N]._hbCfg = e, Object.freeze && (Object.freeze(W[N]._hbCfg.geo), Object.freeze(W[N]._hbCfg)), d ? (t.action = "data-delayed", Logger.warn(t)) : (t.action = "data", Logger.info(t)), G_options.aff.geo_filter.data_center = [e.geo.cc || "", (e.geo.cn || "").replace(" ", "_")], W[N].updGeoSecLbl(), addPartialConsentBiddersV3(e)) : d || (t.action = "timeout", Logger.error(t)), d = d || 1;
        }, W[N]._hbCfg && W[N]._hbCfg.geo ? __afflib[c](W[N]._hbCfg) : (setTimeout(function () {
          __afflib[c](!1);
        }, f), loadScript("https://hbs.ph.affinity.com/app/cfg.php?d=" + G_options.aff.hbConfName + e)));
      }
      function addPartialConsentBiddersV3(e) {
        var t = W[N].cmpStatus(),
          e = Object.assign({}, e);
        e.gdpr = t.gdprApplies, e.ccpa = t.uspapiApplies, addPartialConsentBiddersV3Impl(e);
      }
      G.refreshInViewBySlot = function () {
        var e = !1;
        return G_options.rfrall && ("object" != typeof G_options.rfrall && (G_options.rfrall = {
          enabled: !0
        }), G_options.rfrall.enabled) && ((e = {}).ignore = G_options.rfrall.ignore || [], e.conf = G_options.rfrall.conf || {
          delaySec: 90,
          maxCall: 5
        }), function (t) {
          var n = t.getSlotElementId(),
            i = t.getAdUnitPath(),
            a = 0,
            o = 0;
          if (G_adUnits.forEach(function (e, t) {
            (n === e.aff.id || i === e.aff.code && e.aff.dynamicId) && e.aff.refsh && (e.aff.refsh.enable ? (a = e.aff.refsh).id = n : o = 1);
          }), !o) {
            if (!a && e) {
              if (-1 < e.ignore.indexOf(n)) return;
              (a = e.conf).id = n;
            }
            a && (a.fn = function (e) {
              t.setTargeting("afrf", e.curCall), googletag.cmd.push(function () {
                G_options.aff.pbExEnabled ? googletag.pubads().refresh([t]) : window[pbjsName].que.push(function () {
                  window[pbjsName].hvrHbReq(t, function () {
                    googletag.pubads().refresh([t]);
                  });
                });
              });
            }, initAfInterval(a));
          }
        };
      }();
      var addPartialConsentBiddersV3ImplCalled = 0;
      function addPartialConsentBiddersV3Impl(r) {
        if (!addPartialConsentBiddersV3ImplCalled) {
          addPartialConsentBiddersV3ImplCalled = 1;
          try {
            var d = G_options.aff.bdrdtl3,
              s = !r.gdpr,
              f = !r.ccpa,
              c = "",
              l = "",
              t = (r.geo && (c = r.geo.cc || "", l = r.geo.cn || ""), {}),
              n = 0;
            G_adUnitsFiltered.forEach(function (e, a) {
              var o = 0;
              e.bids.forEach(function (e, t) {
                e.aff = e.aff || {};
                var n = e.bidder,
                  i = 0,
                  e = e.aff.excgeo || 0;
                Array.isArray(e) && 0 < e.length && (-1 < e.indexOf(c) || -1 < e.indexOf(l)) ? Logger.warn("hbCfg Extra-Bidder-Removed tp=geo-filter bdrCode=" + n) : (s && f ? i = "gdpr-cpa-not-required" : r.gdpr && d[n].gdpr ? i = "gdpr-supported" : r.ccpa && d[n].ccpa && (i = "ccpa-supported"), i ? (o = !0, G_adUnitsFiltered[a].bids[t].aff.consOk = 1, Logger.info("hbCfg Extra-Bidder-Added-P1 aff.consOk tp=" + i + " bdrCode=" + n)) : (G_adUnitsFiltered[a].bids[t].aff.consOk = 0, i = r.gdpr ? "gdpr-not-suported" : r.ccpa ? "ccpa-not-suported" : "error", Logger.warn("hbCfg Extra-Bidder-Removed tp=" + i + " bdrCode=" + n)));
              }), o && (n = !0, t[e.code] = a, t[e.id] = a, e = extra.hvr_copy_config[e.code] || 0) && (t[e] = a);
            }), n && G_adUnits.forEach(function (n, i) {
              var e = null;
              n.aff.code in t ? e = t[n.aff.code] : n.aff.id in t && (e = t[n.aff.id]), null !== e && G_adUnitsFiltered[e].bids.forEach(function (e, t) {
                e.aff.consOk && (G_adUnits[i].bids.push(e), Logger.info(["hbCfg extra-bidder-added-P2 ", n.aff.code, n.aff.id].join(" "), e));
              });
            });
          } catch (e) {
            Logger.error("hbCfg-error", e);
          }
        }
      }
      function ensureBidersByPrivacy(e) {
        var t = W[N].cmpStatus(),
          n = t.gdprApplies,
          i = t.uspapiApplies;
        if (Logger.info({
          cmpData: t
        }), n || i) {
          var a,
            o,
            r = {};
          n && (a = W[N].tcfv2.getGvlCode(), o = W[N].tcfv2.getCachedConcents().vendor.consents), G_options.aff && G_options.aff.bdrdtl3 && (r = G_options.aff.bdrdtl3);
          for (var d = 0, s = e.length; d < s; d++) {
            var f = e[d];
            if (f.bids && f.bids.length) {
              for (var c = [], l = 0, u = f.bids.length; l < u; l++) {
                var p = f.bids[l],
                  g = 0,
                  b = 0,
                  h = "";
                !n || a[p.bidder] && !0 === o[a[p.bidder]] ? g = 1 : h = "tcfv2", !i || (r[p.bidder] || {}).ccpa ? b = 1 : h += " ccpa", b && g ? c.push(p) : Logger.warn(["Ignore2 " + h + "-exclude ", p.bidder, f.code]);
              }
              e[d].bids = c;
            }
          }
        }
        return e;
      }
      var aff_hb_init_impl_call_count = 0;
      function aff_hb_init_impl(i, p, a, g, e, o, d) {
        function r(e) {
          var c;
          e && e.aff && e.aff.bidModifier && (c = e.aff.bidModifier, pbjs.bidderSettings = {
            standard: {
              storageAllowed: !0,
              bidCpmAdjustment: function (e, t) {
                var n,
                  i,
                  a,
                  o,
                  r,
                  d,
                  s = e,
                  f = "none";
                return c[t.bidderCode] && (c[t.bidderCode][t.adUnitCode] ? f = +c[t.bidderCode][t.adUnitCode] : c[t.bidderCode]["*"] && (f = +c[t.bidderCode]["*"])), "none" == f && c.fixed_range && (d = c.fixed_range, n = getDivIdToAuCode(t.adUnitCode) || t.adUnitCode, i = d.au || ["-"], a = d.bdr || ["-"], o = d.min || 0, r = d.max || 0, d = d.cpm || 0, "*" == i[0] || -1 < i.indexOf(n)) && ("*" == a[0] || -1 < a.indexOf(t.bidderCode)) && o <= s && s <= r && (s = d + s / 100), "" === f || isNaN(f) || (s = e * f), Logger.info("bidCpmAdjustment( GLOBAL ) ", {
                  auctionId: t.auctionId,
                  bidderCode: t.bidderCode,
                  adUnitCode: t.adUnitCode,
                  bidCpm: e,
                  bidMultiplier: f,
                  newBid: s
                }), s;
              }
            },
            criteo: {
              storageAllowed: !0
            }
          });
        }
        function t(a) {
          var o = {},
            r = [];
          return d.hvr_copy_config = {}, a.forEach(function (e, t) {
            var n,
              i = e.aff.code;
            e.bids && e.bids.length && "hvr_copy_config" === e.bids[0].bidder ? (n = e.bids[0].params.dfp_au, o[n] ? a[t].bids = s(o[n]) : (a[t].bids = [], r.push({
              idx: t,
              dfp_au: n
            })), d.hvr_copy_config[n] = a[t].aff.code) : o[i] = e.bids || [];
          }), r.forEach(function (e, t) {
            o[e.dfp_au] ? a[e.idx].bids = s(o[e.dfp_au]) : a[e.idx].bids = [];
          }), a;
        }
        function s(t) {
          try {
            return JSON.parse(JSON.stringify(t));
          } catch (e) {
            return Logger.error(["Fail to clone " + e, t]), t;
          }
        }
        function n(e) {
          try {
            var t;
            "projectagora" in o.aff.bdrdtl3 && (t = {
              bidders: ["projectagora"],
              config: {
                schain: {
                  validation: "strict",
                  config: {
                    ver: "1.0",
                    complete: 1,
                    nodes: [{
                      asi: "affinity.com",
                      sid: o.bidderconf.config.schain.config.nodes[0].sid,
                      hp: 1
                    }, {
                      asi: "projectagora.com",
                      sid: "107825",
                      hp: 1
                    }]
                  }
                }
              }
            }, e.setBidderConfig(t), Logger.info("ProjectAgora schain", t));
          } catch (e) {}
        }
        function f() {
          var e = g.pubads().getSlots();
          if (e.length) for (var t = 0, n = e.length; t < n; t++) {
            var i = e[t],
              a = i.getAdUnitPath(),
              i = i.getSlotElementId();
            -1 == a.indexOf("_HVR_") && a in y && (y[i] || (y[i] = 1, pbjs.HBReq(i)));
          }
          0 < _-- ? setTimeout(f, v) : y = 0;
        }
        function c(e, t) {
          C[A]._Q.push([e, t]);
        }
        var l, u, b, h, m, _, v, y, A, C, S, w, j, x, B, I, U;
        aff_hb_init_impl_call_count++, o.pbjsName = a, i[a] = i[a] || {}, i[a].que = i[a].que || [], i[a].bidderAlias = i[a].bidderAlias || {}, (d = d || {}).gpt_mode = d.gpt_mode || 0, d.ignbIniLoadDIsable = d.ignbIniLoadDIsable || !1, Logger.info("aff_hb_init_impl", {
          call_cnt: aff_hb_init_impl_call_count,
          G_adUnits: e,
          G_options: o,
          extra: d
        }), o.aff && o.aff.afBidModifier && o.aff.afBidModifier.enabled && (W[N].bidMod && "function" == typeof W[N].bidMod.setConf ? W[N].bidMod.setConf(o) : o.aff.afBidModifier.enabled = !1), o.pbjs = o.pbjs || {}, o.aff = o.aff || {}, o.aff.trgt_use_div_id = o.aff.trgt_use_div_id || !1, x = e = t(e), B = {}, d.ivtChk = d.ivtChk || {
          enabled: !1
        }, x.forEach(function (e, t) {
          x[t].code = o.aff.trgt_use_div_id ? x[t].aff.id : x[t].aff.code;
          x[t].bids.forEach(function (e, t) {
            e.aff && e.aff.ivtChk && (d.ivtChk.enabled = !0);
          });
        }), I = [], (U = d.tcfv2 && d.tcfv2.enable) && (l = W[N].tcfv2.getGvlCode(), I = [l.google], u = {}, x.forEach(function (e, t) {
          x[t].bids.forEach(function (e, t) {
            e = e.bidder;
            u[e] || (u[e] = 1, l[e] && I.push(l[e]));
          });
        }), u = l = void 0), 1 < aff_hb_init_impl_call_count ? "function" == typeof W[N].exp_upd_aucache && W[N].exp_upd_aucache(x) : (pbjs.que.push(function () {
          for (var e in pbjs.aliasBidder("appnexus", "projectagora", {
            gvlid: 1032
          }), pbjs.aliasBidder("appnexus", "mcanvas"), pbjs.aliasBidder("rubicon", "blueroosterm", {
            gvlid: 52
          }), pbjs.aliasBidder("truereach", "momagic"), pbjs.aliasBidder("adlivetech", "adlivetech2", {
            gvlid: 686
          }), pbjs.aliasBidder("appnexus", "bluerooster2"), pbjs.aliasBidder("appnexus", "bluerooster"), pbjs.aliasBidder("adkernel", "explorads"), pbjs.aliasBidder("adkernel", "xapads"), pbjs.aliasBidder("adkernel", "adliveconnect"), pbjs.aliasBidder("yahoossp", "verizonmedia"), pbjs.aliasBidder("conversant", "epsilon", {
            gvlid: 24
          }), B) B.hasOwnProperty(e) && (e = e.split("@"), pbjs.aliasBidder(e[0], e[1]), i[a].bidderAlias[e[1]] = e[0]);
          var n, t;
          U && (n = {}, t = 0, "function" == typeof W.__tcfapi && (t++, n.gdpr = {
            cmpApi: "iab",
            timeout: 200,
            allowAuctionWithoutConsent: !1,
            defaultGdprScope: !0
          }), "function" == typeof W.__uspapi && (t++, n.usp = {
            cmpApi: "iab",
            timeout: 10
          }, W.__uspapi("getUSPData", 1, function (e, t) {
            t && e && e.uspString && (n.usp = {
              cmpApi: "static",
              consentData: {
                getUSPData: {
                  uspString: e.uspString
                }
              }
            });
          })), t) && (o.pbjsconf.consentManagement = n), o.pbjsconf.rubicon = {
            singleRequest: !0
          }, pbjs.setConfig(o.pbjsconf), o.aff.log.afelog && affLogging(pbjs), r(o);
        }), o.bidderconf && pbjs.que.push(function () {
          pbjs.setBidderConfig(o.bidderconf, !0), n(pbjs);
        }), (j = o.aff.amazon || 0) && j.enabled && j.pubID ? ((w = parseFloat2(j.timeout || 0, 800)) <= 0 && (w = parseFloat2(o.pbjsconf.bidderTimeout, 800)), d.amazon = {
          pubID: j.pubID,
          timeout: w = w <= 0 ? 800 : w
        }, w = p, (C = i)[A = "apstag"] || (C[A] = {
          init: function () {
            c("i", arguments);
          },
          fetchBids: function () {
            c("f", arguments);
          },
          setDisplayBids: function () {},
          targetingKeys: function () {
            return [];
          },
          _Q: []
        }, (S = w.createElement("script")).async = !0, S.src = "//c.amazon-adsystem.com/aax2/apstag.js", (w = w.getElementsByTagName("script")[0]).parentNode.insertBefore(S, w)), apstag.init({
          pubID: j.pubID,
          adServer: "googletag"
        })) : d.amazon = !1, express(x, d), b = function (e) {
          Logger.info("loadGpt ", e), 2 != d.gpt_mode || g.apiReady || loadScript("https://securepubads.g.doubleclick.net/tag/js/gpt.js");
        }, U ? W[N].tcfv2.getConcents(function (e) {
          (e.gdprApplies ? !0 === e.vendor.consents[755] : 1) && b("b1");
        }, function () {}, {
          vendorIds: I
        }) : b("a0"), h = !0, m = function (e) {
          for (var t = frameElement || 0, n = t ? t.contentWindow ? t.contentWindow.document : t.contentDocument || p : p, i = 0, a = e.length; i < a; i++) try {
            var o,
              r,
              d,
              s,
              f,
              c,
              l = e[i],
              u = l.aff.dfpAction || 0;
            u && (o = l.aff.code, r = l.aff.id, d = u.size, u.define && (s = g.defineSlot(o, d, r).addService(g.pubads()), (f = {}).inFrame = !!t, G.refreshInViewBySlot(s, f)), u.div && !n.getElementById(r) && ((c = n.createElement("div")).id = r, n.body.appendChild(c)), u.auction ? pbjs.que.push(function () {
              pbjs.HBReq(r), h && (h = !1, g.enableServices());
            }) : (h && (h = !1, g.enableServices()), g.display(r)));
          } catch (e) {}
        }, g.cmd.push(function () {
          m(e);
        }), o.pubDfp && o.pubDfp.callRefresh && o.pubDfp.callRefresh.enable && (_ = 0 | o.pubDfp.callRefresh.max, v = 0 | o.pubDfp.callRefresh.dly, y = {}, _ = _ || 10, v = v || 200, x.forEach(function (e, t) {
          y[e.aff.code || ""] = 0;
        }), g.cmd.push(function () {
          pbjs.que.push(function () {
            f();
          });
        })));
      }
      G_options.aff.afflog2 = function () {};
      G_options.debug = false;
      G_options.debug = -1 < location.href.indexOf('pbjs_debug=true');
      var extra = {
        gpt_mode: 2,
        tcfv2: {
          "enabled": false
        },
        ignbIniLoadDIsable: false,
        ignRefreshFromDisplay: {
          "enabled": false
        }
      };
      if (W[N].hbCustCfg && 'function' == typeof W[N].hbCustCfg) {
        var o2 = W[N].hbCustCfg(G_adUnits, G_options, extra);
        G_adUnits = o2.G_adUnits;
        G_options = o2.G_options;
        extra = o2.extra;
      }
      aff_hb_init(window, window.document, 'affpbjs', window.googletag, G_adUnits, G_options, extra);
      (function (W, D, N, M) {
        "use strict";

        W[N] = W[N] || {};
        W[N].cmd = W[N].cmd || [];
        if (W[N].cmd.isLoaded) {
          return;
        }
        W[N].display = function (dt) {
          if (G_options.debug) {
            W[M].aftl(dt.id, "affinityhb.display()");
          }
          dt = Object.assign({}, {
            m: 1,
            id: "",
            au: "",
            sz: 0,
            targeting: {}
          }, dt || {});
          var sl = 0;
          if (googletag.apiReady) {
            var arSlots = googletag.pubads().getSlots();
            for (var i = arSlots.length - 1; 0 <= i; i--) {
              if (dt.id == arSlots[i].getSlotElementId()) {
                sl = arSlots[i];
                break;
              }
              ;
            }
            if (sl) {
              var oDiv = D.getElementById(dt.id);
              if (2 == dt.m) {
                if (oDiv) {
                  oDiv.setAttribute('dsp', 'aff2');
                }
                if (!dt.au) {
                  dt.au = sl.getAdUnitPath();
                }
                if (!dt.sz) {
                  dt.sz = [];
                  sl.getSizes().forEach(function (xSz) {
                    if (xSz.getHeight) {
                      dt.sz.push([xSz.getWidth(), xSz.getHeight()]);
                    }
                  });
                }
              }
              if (sl.getEscapedQemQueryId && sl.getEscapedQemQueryId() || oDiv && oDiv.dataset && oDiv.dataset.googleQueryId) {
                googletag.destroySlots([sl]);
                sl = 0;
              }
            }
          }
          if (dt && dt.id && dt.au && dt.sz) {
            var pn = 'affpbjs';
            W[pn].que.push(function () {
              var e = D.getElementById(dt.id);
              if (e) {
                pbjs.HBReq2(dt.au, dt.sz, dt.id, {
                  slot: sl,
                  dsblFailsSafe: true,
                  igncss: 1,
                  trgt: dt.targeting || {},
                  ignExp: 0
                });
              }
            });
          }
        };
        W[N].cmd.isLoaded = 1;
        function init_affinityhb_cmd() {
          if (G_options.debug) {
            W[M].aftl('init', "affinityhb.cmd-ready");
          }
          W[N].cmd.push = function (fn) {
            fn.called = !0;
            try {
              fn();
            } catch (er) {}
          };
          for (var ic = 0; ic < W[N].cmd.length; ic++) {
            if (!W[N].cmd[ic].called) {
              W[N].cmd[ic].called = !0;
              try {
                W[N].cmd[ic]();
              } catch (er) {}
            }
          }
        }
        googletag.cmd.push(function () {
          window[pbjsNM].que.push(init_affinityhb_cmd);
        });
      })(window, document, 'affinityhb', N);
    })();
  }
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      console.info("Visibility of the page has changed, performing inspection task again...");
      extractInsightsAndSaveToFrontend();
    }
  });
})(window, document, '__afflib');