'use strict';

(function (w, d) {
  const originalAddEventListener = window.addEventListener;
  function importScript(src) {
    var script = d.createElement('script');
    script.src = src;
    var node = d.getElementsByTagName('script')[0];
    if (node && node.parentNode) {
      node.parentNode.insertBefore(script, node);
    } else {
      document.body.appendChild(script);
    }
  }
  const originalRemoveEventListener = window.removeEventListener;
  w.adthrive = w.adthrive || {};
  w.adthrive.cmd = w.adthrive.cmd || [];
  w.adthrive.host = "ads.adthrive.com";
  w.adthrive.threshold = 0;
  w.adthrive.styleUrl = "https://ads.adthrive.com/sites/61575e5c934c481d714b3ca9/ads.min.css";
  w.adthrive.deployment = "2023-11-10-5:acd-83:pr3973:9b87249";
  w.adthrive.branch = "9b87249";
  w.adthrive.bucket = "flex-39";
  w.adthrive.baseUrl = "https://ads.adthrive.com/builds/core/9b87249";
  const originalCreateElement = document.createElement;
  const originalCreateTextNode = document.createTextNode;
  w.adthrive.deliveryFeatures = ["rubiconFloors", "recencyFrequency", "ttdSync", "reissuingSticky", "manualCookieSync", "raptiveFloors", "switzerlandGdpr", "prebidLoad", "gptLoad", "amazonLoad"];
  w.adthrive.deliveryAudit = [{
    "include": "stubCMP",
    "value": false,
    "reason": ["Non-GDPR Country Detected"]
  }, {
    "include": "clsInsertion",
    "value": true,
    "reason": ["adOptions.clsOptimizatedAds is true"]
  }, {
    "include": "prebidLoad",
    "value": true,
    "reason": ["adOptions.delayLoading is false"]
  }, {
    "include": "gptLoad",
    "value": true,
    "reason": ["adOptions.delayLoading is false"]
  }, {
    "include": "amazonLoad",
    "value": true,
    "reason": ["adOptions.delayLoading is false", "adOptions.amazonUAM is true"]
  }, {
    "include": "dcsllSiteSpecific",
    "value": false,
    "reason": ["Delivery Feature Disabled"]
  }, {
    "include": "prebidBrowserRouting",
    "value": false,
    "reason": ["Delivery Feature Disabled"]
  }, {
    "include": "raptiveFloors",
    "value": true,
    "reason": ["Delivery Feature Enabled"]
  }, {
    "include": "ttdSync",
    "value": true,
    "reason": ["Non-GDPR Country Detected"]
  }, {
    "include": "viewabilityV2",
    "value": false,
    "reason": ["Delivery Feature Disabled"]
  }, {
    "include": "manualCookieSync",
    "value": true,
    "reason": ["Delivery Feature Enabled", "Non-GDPR Country Detected"]
  }, {
    "include": "campaignByURLHash",
    "value": false,
    "reason": ["Delivery Feature Disabled"]
  }];
  w.adthrive.deliveryVersion = "1.44.3";
  w.adthrive.isIOS = /iP(hone|od|ad)/i.test(navigator.userAgent) ? true : false;
  const originalSetInterval = window.setInterval;
  w.adthrive.targetPath = '/es5';
  w.adthrive.sticky = true;
  const eventHooks = window.eventHooks || [];
  w.adthrive.bucketKeys = ["flex-01&2023-11-10-1:4bd11c1:con", "flex-02&2023-11-10-1:4bd11c1:con", "flex-03&2023-11-10-5:4bd11c1:con", "flex-04&2023-11-10-5:4bd11c1:con", "hbs-q4&ad-1000:pr1000:hbs-q4:d914314:exp", "hbs-q4:con&ad-1000:pr1000:hbs-q4:d914314:con", "beta2&ada-84:pr3970:beta2:c5e2354:exp", "beta1&ada-225:pr4045:beta1:1746897:exp", "flex-121&2023-11-10-5:ada-167:pr3981:2c270fb", "flex-56&2023-11-10-5:adm-1035:pr3863:aae3039", "flex-39&2023-11-10-5:acd-83:pr3973:9b87249", "flex-60&2023-11-10-5:adv-93:pr4000:e78d4a2", "flex-62&2023-11-10-5:ada-214:pr4011:e00765a", "flex-98&2023-11-10-5:ada-192:pr4014:b66bc6f", "flex-110&2023-11-10-5:acd-96:pr4023:cbed362", "flex-87&2023-11-10-5:acd-108:pr4035:6433952", "flex-97&2023-11-10-5:adv-92:pr4013:19b535c", "flex-210&2023-11-10-5:acd-92:pr4001:007a02b", "flex-111&2023-11-10-5:ade-1149:pr4033:9ed36d1", "flex-112&2023-11-10-5:ade-1135:pr4039:8f9ea14", "flex-124&2023-11-10-5:ada-224:pr4041:140335d", "flex-115&2023-11-10-5:ada-198:pr4007:c7b39bb", "flex-114&2023-11-10-5:acd-28:pr4026:c060411", "flex-125&2023-11-10-5:acd-130:pr4049:a129362", "prod&4bd11c1"];
  w.adthrive.forceGDPR = false;
  w.adthrive.debug = false;

  // Sticky Bucket
  function isValidStickyBucketData(stickyBucket) {
    return stickyBucket && stickyBucket.bucket && stickyBucket.branch && stickyBucket.deployment && stickyBucket.ttl && stickyBucket.ttl > Date.now() && w.adthrive.bucketKeys && (w.adthrive.bucketKeys.indexOf(stickyBucket.bucket + '&' + stickyBucket.deployment) > -1 || stickyBucket.bucket == 'prod' && w.adthrive.bucketKeys.indexOf('prod&' + stickyBucket.branch) > -1);
  }
  function isMatchingStickyData(stickyBucket) {
    return stickyBucket && w.adthrive.deployment == stickyBucket.deployment && w.adthrive.bucket == stickyBucket.bucket && w.adthrive.branch == stickyBucket.branch;
  }
  function tagNewStickyBucket() {
    var newStickyBucketData = {
      branch: w.adthrive.branch,
      bucket: w.adthrive.bucket,
      deployment: w.adthrive.deployment,
      deliveryFeatures: w.adthrive.deliveryFeatures,
      ttl: Date.now() + 3600 * 1000 * 24
    };
    w.sessionStorage.setItem('at_sticky_data', JSON.stringify(newStickyBucketData));
  }
  var stickyBucketJSON = w.sessionStorage.getItem('at_sticky_data');
  try {
    var stickyBucket = JSON.parse(stickyBucketJSON);
    if (isValidStickyBucketData(stickyBucket)) {
      if (stickyBucket.deliveryFeatures && stickyBucket.deliveryFeatures.indexOf('reissuingSticky') > -1) {
        // check if deployment data in current response matches sticky deployment at_sticky_data
        if (!isMatchingStickyData(stickyBucket)) {
          // we need to reissue ads.min.js with querystring params for sticky deployment info
          // AND we need to return/quit execution of ads.min.js
          var newAdsMinSrc = 'https://' + w.adthrive.host + '/sites/61575e5c934c481d714b3ca9/ads.min.js?stickyDeployment=' + stickyBucket.deployment + '&stickyBucket=' + stickyBucket.bucket + '&stickyBranch=' + stickyBucket.branch;
          importScript(newAdsMinSrc);
          return;
        }
      } else {
        w.adthrive.branch = stickyBucket.branch;
        w.adthrive.bucket = stickyBucket.bucket;
        w.adthrive.deployment = stickyBucket.deployment;
        w.adthrive.baseUrl = 'https://' + w.adthrive.host + '/builds/core/' + stickyBucket.branch;
      }
    } else {
      tagNewStickyBucket();
    }
  } catch (e) {
    console.log('Error parsing session storage bucket data.');
    tagNewStickyBucket();
  }
  w.adthrive.siteAds = {
    "betaTester": false,
    "siteId": "61575e5c934c481d714b3ca9",
    "siteName": "Encyclopedia Britannica",
    "targeting": [{
      "value": "61575e5c934c481d714b3ca9",
      "key": "siteId"
    }, {
      "value": "6233884dc08f957088e9a8d7",
      "key": "organizationId"
    }, {
      "value": "Encyclopedia Britannica",
      "key": "siteName"
    }, {
      "value": "Prime",
      "key": "service"
    }, {
      "value": "on",
      "key": "bidding"
    }, {
      "value": ["Education", "Personal Finance", "Professional Finance"],
      "key": "verticals"
    }],
    "breakpoints": {
      "tablet": 768,
      "desktop": 1024
    },
    "adUnits": [{
      "sequence": 5,
      "targeting": [{
        "value": ["Recipe"],
        "key": "location"
      }],
      "devices": ["desktop", "tablet", "phone"],
      "name": "Recipe_5",
      "sticky": false,
      "location": "Recipe",
      "dynamic": {
        "pageSelector": "",
        "spacing": 0,
        "max": 1,
        "lazy": false,
        "lazyMax": null,
        "elementSelector": "#media-overlay-ad",
        "skip": 0,
        "classNames": [],
        "position": "afterbegin",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[250, 250], [300, 50], [300, 250], [320, 50], [320, 100], [300, 200]],
      "priority": -105,
      "autosize": true
    }, {
      "sequence": null,
      "targeting": [{
        "value": ["Content"],
        "key": "location"
      }],
      "devices": ["desktop", "tablet"],
      "name": "Content",
      "sticky": false,
      "location": "Content",
      "dynamic": {
        "pageSelector": "body.list-page",
        "spacing": 1,
        "max": 9,
        "lazy": true,
        "lazyMax": 90,
        "elementSelector": ".md-mendel-list > li:not(:last-of-type)",
        "skip": 0,
        "classNames": [],
        "position": "afterend",
        "every": 4,
        "enabled": true
      },
      "adSizes": [[728, 90], [336, 280], [320, 50], [468, 60], [970, 90], [250, 250], [1, 1], [320, 100], [970, 250], [1, 2], [300, 50], [300, 300], [552, 334], [728, 250], [300, 250]],
      "priority": 199,
      "autosize": true
    }, {
      "sequence": null,
      "targeting": [{
        "value": ["Content"],
        "key": "location"
      }],
      "devices": ["phone"],
      "name": "Content",
      "sticky": false,
      "location": "Content",
      "dynamic": {
        "pageSelector": "body.list-page",
        "spacing": 0.8,
        "max": 9,
        "lazy": true,
        "lazyMax": 90,
        "elementSelector": ".md-mendel-list > li:not(:last-of-type)",
        "skip": 0,
        "classNames": [],
        "position": "afterend",
        "every": 3,
        "enabled": true
      },
      "adSizes": [[728, 90], [336, 280], [320, 50], [468, 60], [970, 90], [250, 250], [1, 1], [320, 100], [970, 250], [1, 2], [300, 50], [300, 300], [552, 334], [728, 250], [300, 250]],
      "priority": 199,
      "autosize": true
    }, {
      "sequence": 1,
      "targeting": [{
        "value": ["Sidebar"],
        "key": "location"
      }],
      "devices": ["desktop", "tablet"],
      "name": "Sidebar_1",
      "sticky": false,
      "location": "Sidebar",
      "dynamic": {
        "pageSelector": "body.list-page",
        "spacing": 0,
        "max": 1,
        "lazy": false,
        "lazyMax": null,
        "elementSelector": ".ad-rail",
        "skip": 0,
        "classNames": [],
        "position": "afterbegin",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[160, 600], [336, 280], [320, 50], [300, 600], [250, 250], [1, 1], [320, 100], [300, 1050], [300, 50], [300, 420], [300, 250]],
      "priority": 299,
      "autosize": true
    }, {
      "sequence": 9,
      "targeting": [{
        "value": ["Sidebar"],
        "key": "location"
      }],
      "devices": ["desktop", "tablet"],
      "name": "Sidebar_9",
      "sticky": false,
      "location": "Sidebar",
      "dynamic": {
        "pageSelector": "body.list-page",
        "spacing": 0,
        "max": 1,
        "lazy": false,
        "lazyMax": null,
        "elementSelector": ".ad-rail",
        "skip": 0,
        "classNames": [],
        "position": "beforeend",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[160, 600], [336, 280], [320, 50], [300, 600], [250, 250], [1, 1], [320, 100], [300, 1050], [300, 50], [300, 420], [300, 250]],
      "priority": 291,
      "autosize": true
    }, {
      "sequence": null,
      "targeting": [{
        "value": ["Content"],
        "key": "location"
      }],
      "devices": ["desktop", "tablet", "phone"],
      "name": "Content",
      "sticky": false,
      "location": "Content",
      "dynamic": {
        "pageSelector": "body.britannica-money",
        "spacing": 0,
        "max": 1,
        "lazy": false,
        "lazyMax": null,
        "elementSelector": ".grid.gx-30",
        "skip": 0,
        "classNames": [],
        "position": "afterend",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[728, 90], [336, 280], [320, 50], [468, 60], [970, 90], [250, 250], [1, 1], [320, 100], [970, 250], [1, 2], [300, 50], [300, 300], [552, 334], [728, 250], [300, 250]],
      "priority": 199,
      "autosize": true
    }, {
      "sequence": 1,
      "targeting": [{
        "value": ["Sidebar"],
        "key": "location"
      }],
      "devices": ["desktop", "tablet"],
      "name": "Sidebar_1",
      "sticky": false,
      "location": "Sidebar",
      "dynamic": {
        "pageSelector": "\nbody.britannica-money",
        "spacing": 0,
        "max": 1,
        "lazy": false,
        "lazyMax": null,
        "elementSelector": ".col-da-320",
        "skip": 0,
        "classNames": [],
        "position": "afterbegin",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[1, 1], [250, 250], [300, 50], [300, 250], [320, 50], [320, 100], [300, 200], [300, 300]],
      "priority": 299,
      "autosize": true
    }, {
      "sequence": 9,
      "targeting": [{
        "value": ["Sidebar"],
        "key": "location"
      }],
      "devices": ["desktop", "tablet"],
      "name": "Sidebar_9",
      "sticky": false,
      "location": "Sidebar",
      "dynamic": {
        "pageSelector": "\nbody.britannica-money",
        "spacing": 0,
        "max": 1,
        "lazy": false,
        "lazyMax": null,
        "elementSelector": ".cm-right-rail.col-da-320",
        "skip": 0,
        "classNames": [],
        "position": "beforeend",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[1, 1], [250, 250], [300, 50], [300, 250], [320, 50], [320, 100], [336, 280], [300, 200], [300, 300], [320, 300]],
      "priority": 291,
      "autosize": true
    }, {
      "sequence": 1,
      "targeting": [{
        "value": ["Content"],
        "key": "location"
      }],
      "devices": ["desktop", "tablet"],
      "name": "Content_1",
      "sticky": false,
      "location": "Content",
      "dynamic": {
        "pageSelector": "body.cm_ld",
        "spacing": 0,
        "max": 1,
        "lazy": false,
        "lazyMax": null,
        "elementSelector": ".ad_holder .abl.abl-m320-t728-d728",
        "skip": 0,
        "classNames": [],
        "position": "afterbegin",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[728, 90]],
      "priority": 199,
      "autosize": false
    }, {
      "sequence": null,
      "targeting": [{
        "value": ["Header"],
        "key": "location"
      }],
      "devices": ["desktop", "tablet"],
      "name": "Header",
      "sticky": false,
      "location": "Header",
      "dynamic": {
        "pageSelector": "body.cm_ld",
        "spacing": 0,
        "max": 1,
        "lazy": false,
        "lazyMax": null,
        "elementSelector": ".abl.abl-m0-t728-d728  > .ad_slot_top",
        "skip": 0,
        "classNames": [],
        "position": "afterbegin",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[728, 90]],
      "priority": 399,
      "autosize": true
    }, {
      "sequence": 1,
      "targeting": [{
        "value": ["Sidebar"],
        "key": "location"
      }],
      "devices": ["desktop", "tablet"],
      "name": "Sidebar_1",
      "sticky": false,
      "location": "Sidebar",
      "dynamic": {
        "pageSelector": "body.cm_ld ",
        "spacing": 0,
        "max": 1,
        "lazy": false,
        "lazyMax": null,
        "elementSelector": ".abl.abl-m0-t300-d300 > .ad_slot_right_top",
        "skip": 0,
        "classNames": [],
        "position": "afterbegin",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[300, 250]],
      "priority": 299,
      "autosize": false
    }, {
      "sequence": 2,
      "targeting": [{
        "value": ["Sidebar"],
        "key": "location"
      }],
      "devices": ["desktop", "tablet"],
      "name": "Sidebar_2",
      "sticky": false,
      "location": "Sidebar",
      "dynamic": {
        "pageSelector": "body.cm_ld",
        "spacing": 0,
        "max": 1,
        "lazy": false,
        "lazyMax": null,
        "elementSelector": ".abl.abl-m0-t160-d160 > .ad_slot_left",
        "skip": 0,
        "classNames": [],
        "position": "afterbegin",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[160, 600]],
      "priority": 298,
      "autosize": false
    }, {
      "sequence": 9,
      "targeting": [{
        "value": ["Sidebar"],
        "key": "location"
      }, {
        "value": true,
        "key": "sticky"
      }],
      "devices": ["desktop", "tablet"],
      "name": "Sidebar_9",
      "sticky": true,
      "location": "Sidebar",
      "dynamic": {
        "pageSelector": "body.cm_ld ",
        "spacing": 0,
        "max": 1,
        "lazy": false,
        "lazyMax": null,
        "elementSelector": ".abl.abl-m0-t300-d300 > .ad_slot_right_bottom",
        "skip": 0,
        "classNames": [],
        "position": "afterbegin",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[300, 250]],
      "priority": 291,
      "autosize": false
    }, {
      "sequence": 1,
      "targeting": [{
        "value": ["Content"],
        "key": "location"
      }],
      "devices": ["phone"],
      "name": "Content_1",
      "sticky": false,
      "location": "Content",
      "dynamic": {
        "pageSelector": "body.search ",
        "spacing": 0,
        "max": 1,
        "lazy": false,
        "lazyMax": null,
        "elementSelector": ".search-feature-container",
        "skip": 0,
        "classNames": [],
        "position": "afterend",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[120, 240], [250, 250], [300, 250], [320, 50], [320, 100], [336, 280], [468, 60], [728, 90], [970, 90], [1, 1], [300, 300], [552, 334], [300, 50], [728, 250], [970, 250], [1, 2]],
      "priority": 199,
      "autosize": true
    }, {
      "sequence": 2,
      "targeting": [{
        "value": ["Content"],
        "key": "location"
      }],
      "devices": ["phone"],
      "name": "Content_2",
      "sticky": false,
      "location": "Content",
      "dynamic": {
        "pageSelector": "body.search ",
        "spacing": 0,
        "max": 1,
        "lazy": false,
        "lazyMax": null,
        "elementSelector": ".list-unstyled.results > li",
        "skip": 4,
        "classNames": [],
        "position": "afterend",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[120, 240], [250, 250], [300, 250], [320, 50], [320, 100], [336, 280], [468, 60], [728, 90], [970, 90], [1, 1], [300, 300], [552, 334], [300, 50], [728, 250], [970, 250], [1, 2]],
      "priority": 198,
      "autosize": true
    }, {
      "sequence": null,
      "targeting": [{
        "value": ["Below Post"],
        "key": "location"
      }],
      "devices": ["desktop", "tablet"],
      "name": "Below_Post",
      "sticky": false,
      "location": "Below Post",
      "dynamic": {
        "pageSelector": "body.podcasts-homepage",
        "spacing": 0,
        "max": 1,
        "lazy": false,
        "lazyMax": null,
        "elementSelector": ".bg-gray-50.py-50.px-20.px-sm-0.mx-n20.mx-sm-0",
        "skip": 0,
        "classNames": [],
        "position": "afterend",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[120, 240], [250, 250], [300, 250], [320, 50], [320, 100], [336, 280], [468, 60], [728, 90], [1, 1]],
      "priority": 99,
      "autosize": true
    }, {
      "sequence": null,
      "targeting": [{
        "value": ["Below Post"],
        "key": "location"
      }],
      "devices": ["phone"],
      "name": "Below_Post",
      "sticky": false,
      "location": "Below Post",
      "dynamic": {
        "pageSelector": "body.podcasts-homepage",
        "spacing": 0,
        "max": 1,
        "lazy": false,
        "lazyMax": null,
        "elementSelector": ".md-page-wrapper",
        "skip": 0,
        "classNames": [],
        "position": "afterend",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[120, 240], [250, 250], [300, 250], [320, 50], [320, 100], [336, 280], [468, 60], [728, 90], [1, 1]],
      "priority": 99,
      "autosize": true
    }, {
      "sequence": 1,
      "targeting": [{
        "value": ["Sidebar"],
        "key": "location"
      }],
      "devices": ["desktop"],
      "name": "Sidebar_1",
      "sticky": false,
      "location": "Sidebar",
      "dynamic": {
        "pageSelector": "body.quiz-page",
        "spacing": 0,
        "max": 1,
        "lazy": false,
        "lazyMax": null,
        "elementSelector": ".col-md-da-320",
        "skip": 0,
        "classNames": [],
        "position": "afterbegin",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[120, 240], [250, 250], [300, 250], [336, 280], [300, 200], [300, 300], [320, 300]],
      "priority": 299,
      "autosize": false
    }, {
      "sequence": 2,
      "targeting": [{
        "value": ["Sidebar"],
        "key": "location"
      }, {
        "value": true,
        "key": "sticky"
      }],
      "devices": ["desktop"],
      "name": "Sidebar_2",
      "sticky": true,
      "location": "Sidebar",
      "dynamic": {
        "pageSelector": "body.quiz-page",
        "spacing": 0,
        "max": 1,
        "lazy": false,
        "lazyMax": null,
        "elementSelector": ".col-md-da-320",
        "skip": 0,
        "classNames": [],
        "position": "beforeend",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[120, 240], [250, 250], [300, 250], [336, 280], [300, 200], [300, 300], [320, 300]],
      "priority": 298,
      "autosize": false
    }, {
      "sequence": null,
      "targeting": [{
        "value": ["Header"],
        "key": "location"
      }],
      "devices": ["tablet"],
      "name": "Header",
      "sticky": false,
      "location": "Header",
      "dynamic": {
        "pageSelector": "body.quiz-page:not(.game)",
        "spacing": 0,
        "max": 1,
        "lazy": false,
        "lazyMax": null,
        "elementSelector": "#header",
        "skip": 0,
        "classNames": [],
        "position": "afterend",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[1, 1], [300, 50], [320, 50], [468, 60], [728, 90], [970, 90]],
      "priority": 399,
      "autosize": true
    }, {
      "sequence": null,
      "targeting": [{
        "value": ["Content"],
        "key": "location"
      }],
      "devices": ["desktop", "tablet"],
      "name": "Content",
      "sticky": false,
      "location": "Content",
      "dynamic": {
        "pageSelector": "body.homepage",
        "spacing": 0,
        "max": 3,
        "lazy": false,
        "lazyMax": 0,
        "elementSelector": ".qa-contentful1.mb-30 , .qa-contentful2, .container.qa-categories.my-40",
        "skip": 0,
        "classNames": [],
        "position": "afterend",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[120, 240], [250, 250], [300, 250], [320, 50], [320, 100], [336, 280], [468, 60], [728, 90], [970, 90], [1, 1], [300, 300], [552, 334], [300, 50], [728, 250], [970, 250], [1, 2]],
      "priority": 199,
      "autosize": true
    }, {
      "sequence": null,
      "targeting": [{
        "value": ["Content"],
        "key": "location"
      }],
      "devices": ["phone"],
      "name": "Content",
      "sticky": false,
      "location": "Content",
      "dynamic": {
        "pageSelector": "body.homepage",
        "spacing": 0,
        "max": 3,
        "lazy": false,
        "lazyMax": null,
        "elementSelector": ".container.trending-content.my-40, .qa-contentful2, .container.my-40.qa-more",
        "skip": 0,
        "classNames": [],
        "position": "beforebegin",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[120, 240], [250, 250], [300, 250], [320, 50], [320, 100], [336, 280], [468, 60], [728, 90], [970, 90], [1, 1], [300, 300], [552, 334], [300, 50], [728, 250], [970, 250], [1, 2]],
      "priority": 199,
      "autosize": true
    }, {
      "sequence": null,
      "targeting": [{
        "value": ["Header"],
        "key": "location"
      }],
      "devices": ["tablet"],
      "name": "Header",
      "sticky": false,
      "location": "Header",
      "dynamic": {
        "pageSelector": "",
        "spacing": 0,
        "max": 1,
        "lazy": false,
        "lazyMax": null,
        "elementSelector": ".game-container",
        "skip": 0,
        "classNames": [],
        "position": "beforebegin",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[120, 240], [250, 250], [300, 250], [320, 50], [320, 100], [336, 280], [468, 60], [728, 90], [970, 90], [1, 1], [300, 300], [552, 334], [300, 50], [728, 250], [970, 250], [1, 2]],
      "priority": 399,
      "autosize": true
    }, {
      "sequence": 1,
      "targeting": [{
        "value": ["Sidebar"],
        "key": "location"
      }],
      "devices": ["desktop", "tablet"],
      "name": "Sidebar_1",
      "sticky": false,
      "location": "Sidebar",
      "dynamic": {
        "pageSelector": "body.popular-topics-story, body.list-page",
        "spacing": 0,
        "max": 1,
        "lazy": false,
        "lazyMax": null,
        "elementSelector": ".hidden-xs.right-rail-modules, .right-rail-related-features",
        "skip": 0,
        "classNames": [],
        "position": "beforebegin",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[300, 250]],
      "priority": 299,
      "autosize": false
    }, {
      "sequence": 1,
      "targeting": [{
        "value": ["Sidebar"],
        "key": "location"
      }],
      "devices": ["desktop", "tablet"],
      "name": "Sidebar_1",
      "sticky": false,
      "location": "Sidebar",
      "dynamic": {
        "pageSelector": "body.new-topic, body.sudoku-page",
        "spacing": 0,
        "max": 1,
        "lazy": false,
        "lazyMax": null,
        "elementSelector": ".col-md-da-300, .col-md-da-320",
        "skip": 0,
        "classNames": [],
        "position": "afterbegin",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[300, 250]],
      "priority": 299,
      "autosize": false
    }, {
      "sequence": 9,
      "targeting": [{
        "value": ["Sidebar"],
        "key": "location"
      }],
      "devices": ["desktop", "tablet"],
      "name": "Sidebar_9",
      "sticky": false,
      "location": "Sidebar",
      "dynamic": {
        "pageSelector": "body.popular-topics-story:not(.list-page)",
        "spacing": 0,
        "max": 1,
        "lazy": false,
        "lazyMax": null,
        "elementSelector": ".hidden-xs.right-rail-modules, .right-rail-related-features",
        "skip": 0,
        "classNames": [],
        "position": "afterend",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[1, 1], [120, 240], [250, 250], [300, 50], [300, 250], [300, 420], [300, 600], [320, 50], [320, 100], [336, 280], [300, 200], [300, 300], [300, 390], [310, 400], [320, 300]],
      "priority": 291,
      "autosize": false
    }, {
      "sequence": 9,
      "targeting": [{
        "value": ["Sidebar"],
        "key": "location"
      }, {
        "value": true,
        "key": "sticky"
      }],
      "devices": ["desktop"],
      "name": "Sidebar_9",
      "sticky": true,
      "location": "Sidebar",
      "dynamic": {
        "pageSelector": "body:not(.popular-topics-story):not(.quiz-page):not(list-page)",
        "spacing": 0,
        "max": 1,
        "lazy": false,
        "lazyMax": null,
        "elementSelector": ".game-aside.col-da-320, .col-md-da-300, .col-md-da-320",
        "skip": 0,
        "classNames": [],
        "position": "beforeend",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[120, 240], [250, 250], [300, 50], [300, 250], [320, 50], [320, 100], [300, 200], [300, 300], [320, 300]],
      "priority": 291,
      "autosize": false
    }, {
      "sequence": null,
      "targeting": [{
        "value": ["Content"],
        "key": "location"
      }],
      "devices": ["desktop", "tablet"],
      "name": "Content",
      "sticky": false,
      "location": "Content",
      "dynamic": {
        "pageSelector": "body:not(.podcasts-homepage):not(.britannica-money):not(.list-page)",
        "spacing": 0.8,
        "max": 9,
        "lazy": true,
        "lazyMax": 10,
        "elementSelector": ".topic-content .topic-paragraph:not(:last-of-type):not(blockquote > p), .topic-content .bullet > li:not(:last-of-type):not(blockquote > p), .list-unstyled.md-mendel-list > li:not(:last-of-type):not(blockquote > p), .md-mendel-list > li:not(:last-of-type):not(blockquote > p)",
        "skip": 2,
        "classNames": [],
        "position": "afterend",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[1, 1], [1, 2], [250, 250], [300, 50], [300, 250], [300, 300], [320, 50], [320, 100], [336, 280], [468, 60], [552, 334], [728, 90], [728, 250], [970, 90], [970, 250], [120, 240], [300, 200], [320, 300]],
      "priority": 199,
      "autosize": true
    }, {
      "sequence": null,
      "targeting": [{
        "value": ["Below Post"],
        "key": "location"
      }],
      "devices": ["desktop", "tablet"],
      "name": "Below_Post",
      "sticky": false,
      "location": "Below Post",
      "dynamic": {
        "pageSelector": "body:not(.new-topic):not(.list-page):not(.popular-topics-story)",
        "spacing": 0,
        "max": 0,
        "lazy": true,
        "lazyMax": 99,
        "elementSelector": ".md-article-container",
        "skip": 0,
        "classNames": [],
        "position": "afterend",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[468, 60], [552, 334], [728, 90], [728, 250], [970, 90], [970, 250]],
      "priority": 99,
      "autosize": false
    }, {
      "sequence": 1,
      "targeting": [{
        "value": ["Content"],
        "key": "location"
      }],
      "devices": ["phone"],
      "name": "Content_1",
      "sticky": false,
      "location": "Content",
      "dynamic": {
        "pageSelector": "body:not(.podcasts-homepage):not(.britannica-money)",
        "spacing": 0,
        "max": 9,
        "lazy": true,
        "lazyMax": 0,
        "elementSelector": ".js-qf-module.qf-module",
        "skip": 0,
        "classNames": [],
        "position": "beforebegin",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[120, 240], [250, 250], [300, 250], [320, 50], [320, 100], [336, 280], [468, 60], [728, 90], [970, 90], [1, 1], [300, 300], [552, 334], [300, 50], [728, 250], [970, 250], [1, 2]],
      "priority": 199,
      "autosize": true
    }, {
      "sequence": null,
      "targeting": [{
        "value": ["Content"],
        "key": "location"
      }],
      "devices": ["phone"],
      "name": "Content",
      "sticky": false,
      "location": "Content",
      "dynamic": {
        "pageSelector": "body:not(.podcasts-homepage):not(.britannica-money):not(.list-page)",
        "spacing": 0.6,
        "max": 9,
        "lazy": true,
        "lazyMax": 0,
        "elementSelector": ".topic-content .topic-paragraph:not(:last-of-type):not(blockquote > p), .topic-content .bullet > li:not(:last-of-type):not(blockquote > p)",
        "skip": 1,
        "classNames": [],
        "position": "beforebegin",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[120, 240], [250, 250], [300, 250], [320, 50], [320, 100], [336, 280], [468, 60], [728, 90], [970, 90], [1, 1], [300, 300], [552, 334], [300, 50], [728, 250], [970, 250], [1, 2]],
      "priority": 199,
      "autosize": true
    }, {
      "sequence": null,
      "targeting": [{
        "value": ["Below Post"],
        "key": "location"
      }],
      "devices": ["phone"],
      "name": "Below_Post",
      "sticky": false,
      "location": "Below Post",
      "dynamic": {
        "pageSelector": "body:not(.new-topic):not(.list-page):not(.popular-topics-story)",
        "spacing": 0,
        "max": 0,
        "lazy": true,
        "lazyMax": 99,
        "elementSelector": ".md-article-container",
        "skip": 0,
        "classNames": [],
        "position": "afterend",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[250, 250], [300, 50], [300, 250], [320, 50], [320, 100], [320, 300]],
      "priority": 99,
      "autosize": false
    }, {
      "sequence": null,
      "targeting": [{
        "value": ["Footer"],
        "key": "location"
      }],
      "devices": ["desktop"],
      "name": "Footer",
      "sticky": false,
      "location": "Footer",
      "dynamic": {
        "pageSelector": "body:not(.quiz-page):not(.cm_ld):not(.gallery-open)",
        "spacing": 0,
        "max": 1,
        "lazy": false,
        "lazyMax": null,
        "elementSelector": "body",
        "skip": 0,
        "classNames": [],
        "position": "afterend",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[320, 50], [320, 100], [728, 90], [970, 90], [468, 60], [1, 1], [300, 50]],
      "priority": -1,
      "autosize": true
    }, {
      "sequence": null,
      "targeting": [{
        "value": ["Footer"],
        "key": "location"
      }],
      "devices": ["tablet"],
      "name": "Footer",
      "sticky": false,
      "location": "Footer",
      "dynamic": {
        "pageSelector": "body:not(.cm_ld ):not(.gallery-open )",
        "spacing": 0,
        "max": 1,
        "lazy": false,
        "lazyMax": null,
        "elementSelector": "body",
        "skip": 0,
        "classNames": [],
        "position": "beforeend",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[320, 50], [320, 100], [728, 90], [970, 90], [468, 60], [1, 1], [300, 50]],
      "priority": -1,
      "autosize": true
    }, {
      "sequence": null,
      "targeting": [{
        "value": ["Footer"],
        "key": "location"
      }],
      "devices": ["phone"],
      "name": "Footer",
      "sticky": false,
      "location": "Footer",
      "dynamic": {
        "pageSelector": "body:not(.gallery-open )",
        "spacing": 0,
        "max": 1,
        "lazy": false,
        "lazyMax": null,
        "elementSelector": "body",
        "skip": 0,
        "classNames": [],
        "position": "beforeend",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[320, 50], [320, 100], [728, 90], [970, 90], [468, 60], [1, 1], [300, 50]],
      "priority": -1,
      "autosize": true
    }],
    "adDensityLayout": {
      "mobile": {
        "adDensity": 0.28,
        "onePerViewport": true
      },
      "pageOverrides": [{
        "mobile": {
          "adDensity": 0.99,
          "onePerViewport": false
        },
        "pageSelector": "body.homepage",
        "desktop": {
          "adDensity": 0.99,
          "onePerViewport": false
        }
      }, {
        "mobile": {
          "adDensity": 0.99,
          "onePerViewport": false
        },
        "pageSelector": ".ad_holder .abl.abl-m320-t728-d728 > .ad_slot_bottom",
        "desktop": {
          "adDensity": 0.99,
          "onePerViewport": false
        }
      }],
      "desktop": {
        "adDensity": 0.28,
        "onePerViewport": true
      }
    },
    "adDensityEnabled": false,
    "siteExperiments": [],
    "adTypes": {
      "sponsorTileDesktop": false,
      "nativeDesktopContent": true,
      "outstreamDesktop": false,
      "nativeBelowPostDesktop": true,
      "miniscroller": true,
      "animatedFooter": false,
      "largeFormatsMobile": true,
      "nativeMobileContent": true,
      "inRecipeRecommendationMobile": false,
      "nativeMobileRecipe": true,
      "expandableFooter": false,
      "nativeDesktopSidebar": true,
      "sponsorTileMobile": false,
      "interscroller": true,
      "nativeDesktopRecipe": true,
      "outstreamMobile": false,
      "nativeHeaderDesktop": true,
      "nativeHeaderMobile": true,
      "nativeBelowPostMobile": true,
      "largeFormatsDesktop": true,
      "inRecipeRecommendationDesktop": false
    },
    "adOptions": {
      "theTradeDesk": true,
      "rtbhouse": true,
      "verizon": true,
      "undertone": true,
      "sidebarConfig": {
        "dynamicStickySidebar": {
          "minHeight": 1200,
          "enabled": false,
          "blockedSelectors": []
        }
      },
      "concert": false,
      "footerCloseButton": true,
      "teads": true,
      "pmp": true,
      "thirtyThreeAcross": true,
      "sharethrough": true,
      "removeVideoTitleWrapper": true,
      "pubMatic": true,
      "roundel": true,
      "infiniteScroll": true,
      "yahoossp": true,
      "improvedigital": true,
      "spa": false,
      "stickyContainerConfig": {
        "recipeDesktop": {
          "minHeight": null,
          "enabled": false
        },
        "blockedSelectors": [],
        "stickyHeaderSelectors": [],
        "recipeMobile": {
          "minHeight": null,
          "enabled": false
        },
        "content": {
          "minHeight": null,
          "enabled": false
        }
      },
      "sonobi": true,
      "yieldmo": true,
      "footerSelector": "",
      "amazonUAM": true,
      "gamMCMEnabled": true,
      "gamMCMChildNetworkCode": "15510053",
      "stickyContainerAds": false,
      "rubicon": true,
      "conversant": false,
      "resetdigital": true,
      "openx": true,
      "mobileHeaderHeight": 1,
      "unruly": true,
      "mediaGrid": true,
      "bRealTime": true,
      "gumgum": true,
      "comscoreFooter": false,
      "desktopInterstitial": false,
      "stickySidebarConfig": {
        "dynamicStickySidebar": {
          "minHeight": 1200,
          "enabled": false,
          "blockedSelectors": []
        }
      },
      "footerCloseButtonDesktop": false,
      "ozone": true,
      "isAutoOptimized": false,
      "comscoreTAL": false,
      "targetaff": false,
      "advancePlaylistOptions": {
        "playlistPlayer": {
          "enabled": true
        },
        "relatedPlayer": {
          "applyToFirst": true,
          "enabled": true
        }
      },
      "kargo": true,
      "liveRampATS": true,
      "footerCloseButtonMobile": false,
      "interstitialBlockedPageSelectors": "",
      "allowSmallerAdSizes": true,
      "comscore": "General",
      "mobileInterstitial": false,
      "tripleLift": true,
      "sensitiveCategories": [],
      "liveRamp": true,
      "adthriveEmailIdentity": true,
      "criteo": true,
      "nativo": true,
      "infiniteScrollOptions": {
        "selector": ".infinite-scroll-container, .Article_Article__qwdfV, .next-page-sentinel",
        "heightThreshold": 50
      },
      "siteAttributes": {
        "mobileHeaderSelectors": [],
        "desktopHeaderSelectors": []
      },
      "dynamicContentSlotLazyLoading": true,
      "clsOptimizedAds": true,
      "colossus": true,
      "verticals": ["Education", "Personal Finance", "Professional Finance"],
      "inImage": false,
      "advancePlaylist": true,
      "delayLoading": false,
      "inImageZone": null,
      "appNexus": true,
      "liveRampId": "",
      "infiniteScrollRefresh": false,
      "indexExchange": true
    },
    "videoPlayers": {
      "contextual": {
        "autoplayCollapsibleEnabled": false,
        "defaultPlayerType": "static",
        "overrideEmbedLocation": false
      },
      "videoEmbed": "div",
      "footerSelector": "",
      "contentSpecificPlaylists": [],
      "players": [{
        "playlistId": "vgvoz2Tu",
        "pageSelector": "body:not(.podcasts-homepage)",
        "devices": ["mobile"],
        "mobileLocation": "bottom-right",
        "description": "",
        "skip": 1,
        "title": "",
        "type": "stickyPlaylist",
        "enabled": false,
        "footerSelector": "",
        "elementSelector": ".topic-content .topic-paragraph:not(:last-of-type):not(blockquote > p), .topic-content .bullet > li:not(:last-of-type):not(blockquote > p)",
        "id": 4076384,
        "position": "afterend",
        "saveVideoCloseState": false,
        "shuffle": true,
        "playerId": "iC3tc6L1",
        "isCompleted": true
      }, {
        "devices": ["desktop", "mobile"],
        "description": "",
        "id": 4076380,
        "title": "Stationary related player - desktop and mobile",
        "type": "stationaryRelated",
        "enabled": false,
        "playerId": null
      }, {
        "pageSelector": "",
        "devices": ["desktop"],
        "description": "",
        "elementSelector": "",
        "skip": 0,
        "id": 4076381,
        "position": "afterend",
        "title": "Sticky related player - desktop",
        "type": "stickyRelated",
        "enabled": false,
        "playerId": null
      }, {
        "pageSelector": "",
        "devices": ["mobile"],
        "mobileLocation": "bottom-right",
        "description": "",
        "elementSelector": "",
        "skip": 0,
        "id": 4076382,
        "position": "afterend",
        "title": "Sticky related player - mobile",
        "type": "stickyRelated",
        "enabled": false,
        "playerId": null
      }, {
        "playlistId": "vgvoz2Tu",
        "pageSelector": "body:not(.podcasts-homepage)",
        "devices": ["desktop"],
        "description": "",
        "skip": 2,
        "title": "",
        "type": "stickyPlaylist",
        "enabled": false,
        "footerSelector": "",
        "elementSelector": ".topic-content .topic-paragraph:not(:last-of-type):not(blockquote > p), .topic-content .bullet > li:not(:last-of-type):not(blockquote > p), .list-unstyled.md-mendel-list > li:not(:last-of-type):not(blockquote > p)",
        "id": 4076383,
        "position": "afterend",
        "saveVideoCloseState": false,
        "shuffle": true,
        "playerId": "iC3tc6L1",
        "isCompleted": true
      }],
      "partners": {
        "theTradeDesk": true,
        "roundel": true,
        "yahoossp": true,
        "criteo": true,
        "unruly": true,
        "mediaGrid": true,
        "improvedigital": true,
        "undertone": true,
        "gumgum": true,
        "colossus": true,
        "yieldmo": true,
        "pmp": true,
        "amazonUAM": true,
        "kargo": true,
        "thirtyThreeAcross": false,
        "stickyOutstream": {
          "desktop": {
            "enabled": false
          },
          "blockedPageSelectors": "",
          "mobileLocation": null,
          "allowOnHomepage": false,
          "mobile": {
            "enabled": false
          },
          "saveVideoCloseState": false,
          "mobileHeaderSelector": "",
          "allowForPageWithStickyPlayer": {
            "enabled": false
          }
        },
        "sharethrough": true,
        "rubicon": true,
        "appNexus": true,
        "resetdigital": true,
        "tripleLift": true,
        "openx": true,
        "pubMatic": true,
        "indexExchange": true
      }
    }
  };
  try {
    var g = document.createElement("iframe");
    g.height = 1;
    g.frameBorder = 0;
    g.style.display = "none";
    g.src = "https://ads.rubiconproject.com/prebid/load-cookie.html?endpoint=rubicon&max_sync_count=12&source=amp&args=account:9262";
    document.body.appendChild(g);
  } catch (err) {
    console.log("Error with manual cookie sync. Error: ", err);
  }

  //TTD User Sync Logic
  try {
    var unifiedIdExp = w.localStorage.getItem('pbjs-unifiedid_exp');
    // Check if there is expired pbjs-unifiedid_exp value in local storage
    if (new Date(unifiedIdExp).getTime() - Date.now() < 0) {
      // Try to call TTD user sync endpoint and set local storage values
      var userSyncUrl = 'https://match.adsrvr.org/track/rid?ttd_pid=iowij76&fmt=json';
      var xhrUserSync = new XMLHttpRequest();
      xhrUserSync.onload = function () {
        var status = xhrUserSync.status;
        if (status === 200) {
          var response = xhrUserSync.response;
          var newExpirationGMTString = new Date(Date.now() + 5184000000).toGMTString();
          w.localStorage.setItem('pbjs-unifiedid_exp', newExpirationGMTString);
          w.localStorage.setItem('pbjs-unifiedid', encodeURIComponent(JSON.stringify(response)));
        } else {
          console.log('User sync call failed. status: ', status);
        }
      };
      xhrUserSync.open('GET', userSyncUrl, true);
      xhrUserSync.responseType = 'json';
      xhrUserSync.withCredentials = true;
      xhrUserSync.send();
    }
  } catch (err) {
    console.log("Error with unifiedId sync in ads.min. Error: ", err);
  }

  //CLS Insertion
  'use strict';
  const jshooks = window.jshooks || [];
  var cls_site_insertion = function (S) {
    function z(c, a) {
      function b() {
        this.constructor = c;
      }
      if ("function" !== typeof a && null !== a) throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
      T(c, a);
      c.prototype = null === a ? Object.create(a) : (b.prototype = a.prototype, new b());
    }
    function ba(c, a) {
      var b = {},
        d;
      for (d in c) Object.prototype.hasOwnProperty.call(c, d) && 0 > a.indexOf(d) && (b[d] = c[d]);
      if (null != c && "function" === typeof Object.getOwnPropertySymbols) {
        var e = 0;
        for (d = Object.getOwnPropertySymbols(c); e < d.length; e++) 0 > a.indexOf(d[e]) && Object.prototype.propertyIsEnumerable.call(c, d[e]) && (b[d[e]] = c[d[e]]);
      }
      return b;
    }
    function I(c, a, b, d) {
      var e = arguments.length,
        f = 3 > e ? a : null === d ? d = Object.getOwnPropertyDescriptor(a, b) : d,
        g;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) f = Reflect.decorate(c, a, b, d);else for (var h = c.length - 1; 0 <= h; h--) if (g = c[h]) f = (3 > e ? g(f) : 3 < e ? g(a, b, f) : g(a, b)) || f;
      return 3 < e && f && Object.defineProperty(a, b, f), f;
    }
    function E(c, a) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(c, a);
    }
    function P(c) {
      var a = "function" === typeof Symbol && Symbol.iterator,
        b = a && c[a],
        d = 0;
      if (b) return b.call(c);
      if (c && "number" === typeof c.length) return {
        next: function () {
          c && d >= c.length && (c = void 0);
          return {
            value: c && c[d++],
            done: !c
          };
        }
      };
      throw new TypeError(a ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function t(c, a) {
      var b = "function" === typeof Symbol && c[Symbol.iterator];
      if (!b) return c;
      c = b.call(c);
      var d,
        e = [];
      try {
        for (; (void 0 === a || 0 < a--) && !(d = c.next()).done;) e.push(d.value);
      } catch (g) {
        var f = {
          error: g
        };
      } finally {
        try {
          d && !d.done && (b = c["return"]) && b.call(c);
        } finally {
          if (f) throw f.error;
        }
      }
      return e;
    }
    function C(c, a, b) {
      if (b || 2 === arguments.length) for (var d = 0, e = a.length, f; d < e; d++) !f && d in a || (f || (f = Array.prototype.slice.call(a, 0, d)), f[d] = a[d]);
      return c.concat(f || Array.prototype.slice.call(a));
    }
    function Q(c, a) {
      void 0 === a && (a = {});
      a = a.insertAt;
      if (c && "undefined" !== typeof document) {
        var b = document.head || document.getElementsByTagName("head")[0],
          d = document.createElement("style");
        d.type = "text/css";
        "top" === a ? b.firstChild ? b.insertBefore(d, b.firstChild) : b.appendChild(d) : b.appendChild(d);
        d.styleSheet ? d.styleSheet.cssText = c : d.appendChild(document.createTextNode(c));
      }
    }
    window.adthrive.buildDate = "2023-11-10";
    var ca = function () {
        return function (c) {
          this.clsOptions = c;
          this.enabledLocations = ["Below_Post", "Content", "Recipe", "Sidebar"];
        };
      }(),
      w = function (c, a) {
        return null == c || c !== c ? a : c;
      },
      T = function (c, a) {
        T = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (b, d) {
          b.__proto__ = d;
        } || function (b, d) {
          for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (b[e] = d[e]);
        };
        return T(c, a);
      },
      A = function () {
        A = Object.assign || function (c) {
          for (var a, b = 1, d = arguments.length; b < d; b++) {
            a = arguments[b];
            for (var e in a) Object.prototype.hasOwnProperty.call(a, e) && (c[e] = a[e]);
          }
          return c;
        };
        return A.apply(this, arguments);
      },
      q = new (function () {
        function c() {}
        c.prototype.info = function (a, b) {
          for (var d = [], e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
          this.call.apply(this, C([console.info, a, b], t(d), !1));
        };
        c.prototype.warn = function (a, b) {
          for (var d = [], e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
          this.call.apply(this, C([console.warn, a, b], t(d), !1));
        };
        c.prototype.error = function (a, b) {
          for (var d = [], e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
          this.call.apply(this, C([console.error, a, b], t(d), !1));
          this.sendErrorLogToCommandQueue.apply(this, C([a, b], t(d), !1));
        };
        c.prototype.event = function (a, b) {
          for (var d, e = 2; e < arguments.length; e++);
          "debug" === (null === (d = window.adthriveCLS) || void 0 === d ? void 0 : d.bucket) && this.info(a, b);
        };
        c.prototype.sendErrorLogToCommandQueue = function (a, b) {
          for (var d = [], e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
          window.adthrive = window.adthrive || {};
          window.adthrive.cmd = window.adthrive.cmd || [];
          window.adthrive.cmd.push(function () {
            void 0 !== window.adthrive.logError && "function" === typeof window.adthrive.logError && window.adthrive.logError(a, b, d);
          }.bind(a, b, d));
        };
        c.prototype.call = function (a, b, d) {
          for (var e = [], f = 3; f < arguments.length; f++) e[f - 3] = arguments[f];
          f = ["%c".concat(b, "::").concat(d, " ")];
          var g = ["color: #999; font-weight: bold;"];
          0 < e.length && "string" === typeof e[0] && f.push(e.shift());
          g.push.apply(g, C([], t(e), !1));
          try {
            Function.prototype.apply.call(a, console, C([f.join("")], t(g), !1));
          } catch (h) {
            console.error(h);
          }
        };
        return c;
      }())(),
      ua = function (c) {
        var a = c.clientWidth;
        getComputedStyle && (c = getComputedStyle(c, null), a -= parseFloat(c.paddingLeft || "0") + parseFloat(c.paddingRight || "0"));
        return a;
      },
      da = function (c) {
        var a = c.offsetHeight,
          b = c.offsetWidth,
          d = c.getBoundingClientRect(),
          e = document.body,
          f = document.documentElement;
        c = Math.round(d.top + (window.pageYOffset || f.scrollTop || e.scrollTop) - (f.clientTop || e.clientTop || 0));
        d = Math.round(d.left + (window.pageXOffset || f.scrollLeft || e.scrollLeft) - (f.clientLeft || e.clientLeft || 0));
        return {
          top: c,
          left: d,
          bottom: c + a,
          right: d + b,
          width: b,
          height: a
        };
      },
      G = function () {
        var c = navigator.userAgent,
          a = /Tablet|iPad|Playbook|Nook|webOS|Kindle|Android (?!.*Mobile).*Safari|CrOS/i.test(c);
        return /Mobi|iP(hone|od)|Opera Mini/i.test(c) && !a;
      },
      va = function (c) {
        void 0 === c && (c = document);
        return (c === document ? document.body : c).getBoundingClientRect().top;
      },
      wa = function (c) {
        return c.includes(",") ? c.split(",") : [c];
      },
      xa = function (c) {
        void 0 === c && (c = document);
        c = c.querySelectorAll("article");
        return 0 === c.length ? null : (c = Array.from(c).reduce(function (a, b) {
          return b.offsetHeight > a.offsetHeight ? b : a;
        })) && c.offsetHeight > 1.5 * window.innerHeight ? c : null;
      },
      ya = function (c, a, b) {
        void 0 === b && (b = document);
        var d = xa(b),
          e = d ? [d] : [],
          f = [];
        c.forEach(function (h) {
          var k = Array.from(b.querySelectorAll(h.elementSelector)).slice(0, h.skip);
          wa(h.elementSelector).forEach(function (l) {
            var n = b.querySelectorAll(l);
            l = function (r) {
              var m = n[r];
              if (a.map.some(function (u) {
                return u.el.isEqualNode(m);
              })) return "continue";
              (r = m && m.parentElement) && r !== document.body ? e.push(r) : e.push(m);
              -1 === k.indexOf(m) && f.push({
                dynamicAd: h,
                element: m
              });
            };
            for (var p = 0; p < n.length; p++) l(p);
          });
        });
        var g = va(b);
        c = f.sort(function (h, k) {
          return h.element.getBoundingClientRect().top - g - (k.element.getBoundingClientRect().top - g);
        });
        return [e, c];
      },
      za = function (c, a, b) {
        void 0 === b && (b = document);
        a = t(ya(c, a, b), 2);
        c = a[0];
        a = a[1];
        if (0 === c.length) throw Error("No Main Content Elements Found");
        return [Array.from(c).reduce(function (d, e) {
          return e.offsetHeight > d.offsetHeight ? e : d;
        }) || document.body, a];
      },
      x;
    (function (c) {
      c.amznbid = "amznbid";
      c.amzniid = "amzniid";
      c.amznp = "amznp";
      c.amznsz = "amznsz";
    })(x || (x = {}));
    var H;
    (function (c) {
      c.ThirtyThreeAcross = "33across";
      c.AppNexus = "appnexus";
      c.Amazon = "amazon";
      c.Colossus = "colossus";
      c.ColossusServer = "col_ss";
      c.Conversant = "conversant";
      c.Concert = "concert";
      c.Criteo = "criteo";
      c.GumGum = "gumgum";
      c.ImproveDigital = "improvedigital";
      c.ImproveDigitalServer = "improve_ss";
      c.IndexExchange = "ix";
      c.Kargo = "kargo";
      c.KargoServer = "krgo_ss";
      c.MediaGrid = "grid";
      c.MediaGridVideo = "gridvid";
      c.Nativo = "nativo";
      c.OpenX = "openx";
      c.Ogury = "ogury";
      c.OpenXServer = "opnx_ss";
      c.Pubmatic = "pubmatic";
      c.PubmaticServer = "pubm_ss";
      c.ResetDigital = "resetdigital";
      c.Roundel = "roundel";
      c.Rtbhouse = "rtbhouse";
      c.Rubicon = "rubicon";
      c.RubiconServer = "rubi_ss";
      c.Sharethrough = "sharethrough";
      c.Teads = "teads";
      c.Triplelift = "triplelift";
      c.TripleliftServer = "tripl_ss";
      c.TTD = "ttd";
      c.Undertone = "undertone";
      c.UndertoneServer = "under_ss";
      c.Unruly = "unruly";
      c.YahooSSP = "yahoossp";
      c.YahooSSPServer = "yah_ss";
      c.Verizon = "verizon";
      c.Yieldmo = "yieldmo";
    })(H || (H = {}));
    var ea;
    (function (c) {
      c.Prebid = "prebid";
      c.GAM = "gam";
      c.Amazon = "amazon";
      c.Marmalade = "marmalade";
      c.Floors = "floors";
      c.CMP = "cmp";
    })(ea || (ea = {}));
    var fa;
    (function (c) {
      c.cm = "cm";
      c.fbrap = "fbrap";
      c.rapml = "rapml";
    })(fa || (fa = {}));
    var ha;
    (function (c) {
      c.lazy = "lazy";
      c.raptive = "raptive";
      c.refresh = "refresh";
      c.session = "session";
      c.crossDomain = "crossdomain";
      c.highSequence = "highsequence";
      c.lazyBidPool = "lazyBidPool";
    })(ha || (ha = {}));
    var ia;
    (function (c) {
      c.lazy = "l";
      c.raptive = "rapml";
      c.refresh = "r";
      c.session = "s";
      c.crossdomain = "c";
      c.highsequence = "hs";
      c.lazyBidPool = "lbp";
    })(ia || (ia = {}));
    var ja;
    (function (c) {
      c.Version = "Version";
      c.SharingNotice = "SharingNotice";
      c.SaleOptOutNotice = "SaleOptOutNotice";
      c.SharingOptOutNotice = "SharingOptOutNotice";
      c.TargetedAdvertisingOptOutNotice = "TargetedAdvertisingOptOutNotice";
      c.SensitiveDataProcessingOptOutNotice = "SensitiveDataProcessingOptOutNotice";
      c.SensitiveDataLimitUseNotice = "SensitiveDataLimitUseNotice";
      c.SaleOptOut = "SaleOptOut";
      c.SharingOptOut = "SharingOptOut";
      c.TargetedAdvertisingOptOut = "TargetedAdvertisingOptOut";
      c.SensitiveDataProcessing = "SensitiveDataProcessing";
      c.KnownChildSensitiveDataConsents = "KnownChildSensitiveDataConsents";
      c.PersonalDataConsents = "PersonalDataConsents";
      c.MspaCoveredTransaction = "MspaCoveredTransaction";
      c.MspaOptOutOptionMode = "MspaOptOutOptionMode";
      c.MspaServiceProviderMode = "MspaServiceProviderMode";
      c.SubSectionType = "SubsectionType";
      c.Gpc = "Gpc";
    })(ja || (ja = {}));
    var ka;
    (function (c) {
      c[c.NA = 0] = "NA";
      c[c.OptedOut = 1] = "OptedOut";
      c[c.OptedIn = 2] = "OptedIn";
    })(ka || (ka = {}));
    var F;
    (function (c) {
      c.AdDensity = "addensity";
      c.AdLayout = "adlayout";
      c.FooterCloseButton = "footerclose";
      c.Interstitial = "interstitial";
      c.RemoveVideoTitleWrapper = "removevideotitlewrapper";
      c.StickyOutstream = "stickyoutstream";
      c.StickyOutstreamOnStickyPlayer = "sospp";
      c.VideoAdvancePlaylistRelatedPlayer = "videoadvanceplaylistrp";
      c.MobileStickyPlayerPosition = "mspp";
    })(F || (F = {}));
    var M;
    (function (c) {
      c.Desktop = "desktop";
      c.Mobile = "mobile";
    })(M || (M = {}));
    var L;
    (function (c) {
      c.Video_Collapse_Autoplay_SoundOff = "Video_Collapse_Autoplay_SoundOff";
      c.Video_Individual_Autoplay_SOff = "Video_Individual_Autoplay_SOff";
      c.Video_Coll_SOff_Smartphone = "Video_Coll_SOff_Smartphone";
      c.Video_In_Post_ClicktoPlay_SoundOn = "Video_In-Post_ClicktoPlay_SoundOn";
    })(L || (L = {}));
    var la;
    (la || (la = {})).None = "none";
    var Aa = function (c, a) {
      var b = c.adDensityEnabled;
      c = c.adDensityLayout.pageOverrides.find(function (d) {
        return !!document.querySelector(d.pageSelector) && (d[a].onePerViewport || "number" === typeof d[a].adDensity);
      });
      return b ? !c : !0;
    };
    x = function () {
      function c() {
        this._timeOrigin = 0;
      }
      c.prototype.resetTimeOrigin = function () {
        this._timeOrigin = window.performance.now();
      };
      c.prototype.now = function () {
        try {
          return Math.round(window.performance.now() - this._timeOrigin);
        } catch (a) {
          return 0;
        }
      };
      return c;
    }();
    window.adthrive.windowPerformance = window.adthrive.windowPerformance || new x();
    x = window.adthrive.windowPerformance;
    var U = x.now.bind(x),
      Ba = function (c) {
        void 0 === c && (c = window.location.search);
        var a = 0 === c.indexOf("?") ? 1 : 0;
        return c.slice(a).split("&").reduce(function (b, d) {
          d = t(d.split("="), 2);
          b.set(d[0], d[1]);
          return b;
        }, new Map());
      },
      V = function (c) {
        var a = window.location.href;
        return c.some(function (b) {
          return new RegExp(b, "i").test(a);
        });
      },
      ma = function (c) {
        try {
          return {
            valid: !0,
            elements: document.querySelectorAll(c)
          };
        } catch (a) {
          return A({
            valid: !1
          }, a);
        }
      },
      W = function (c) {
        return "" === c ? {
          valid: !0
        } : ma(c);
      },
      Ca = function (c) {
        var a = c.reduce(function (b, d) {
          return d.weight ? d.weight + b : b;
        }, 0);
        return 0 < c.length && c.every(function (b) {
          var d = b.value;
          b = b.weight;
          return !(void 0 === d || null === d || "number" === typeof d && isNaN(d) || !b);
        }) && 100 === a;
      },
      Da = ["siteId", "siteName", "adOptions", "breakpoints", "adUnits"],
      Ea = function (c) {
        var a = {},
          b = Ba().get(c);
        if (b) try {
          var d = decodeURIComponent(b);
          a = JSON.parse(d);
          q.event("ExperimentOverridesUtil", "getExperimentOverrides", c, a);
        } catch (e) {}
        return a;
      },
      Fa = function () {
        function c() {}
        c.getScrollTop = function () {
          return (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
        };
        c.getScrollBottom = function () {
          return this.getScrollTop() + (document.documentElement.clientHeight || 0);
        };
        c.shufflePlaylist = function (a) {
          for (var b = a.length, d, e; 0 !== b;) e = Math.floor(Math.random() * a.length), --b, d = a[b], a[b] = a[e], a[e] = d;
          return a;
        };
        c.isMobileLandscape = function () {
          return window.matchMedia("(orientation: landscape) and (max-height: 480px)").matches;
        };
        c.playerViewable = function (a) {
          a = a.getBoundingClientRect();
          return this.isMobileLandscape() ? window.innerHeight > a.top + a.height / 2 && 0 < a.top + a.height / 2 : window.innerHeight > a.top + a.height / 2;
        };
        c.createQueryString = function (a) {
          return Object.keys(a).map(function (b) {
            return "".concat(b, "=").concat(a[b]);
          }).join("&");
        };
        c.createEncodedQueryString = function (a) {
          return Object.keys(a).map(function (b) {
            return "".concat(b, "=").concat(encodeURIComponent(a[b]));
          }).join("&");
        };
        c.setMobileLocation = function (a) {
          a = a || "bottom-right";
          "top-left" === a ? a = "adthrive-collapse-top-left" : "top-right" === a ? a = "adthrive-collapse-top-right" : "bottom-left" === a ? a = "adthrive-collapse-bottom-left" : "bottom-right" === a ? a = "adthrive-collapse-bottom-right" : "top-center" === a && (a = G() ? "adthrive-collapse-top-center" : "adthrive-collapse-bottom-right");
          return a;
        };
        c.addMaxResolutionQueryParam = function (a) {
          var b = G() ? "320" : "1280";
          b = "max_resolution=".concat(b);
          var d = t(String(a).split("?"), 2);
          a = d[0];
          b = (d = d[1]) ? d + "&".concat(b) : b;
          return "".concat(a, "?").concat(b);
        };
        return c;
      }(),
      Ga = function () {
        return function (c) {
          this._clsOptions = c;
          this.removeVideoTitleWrapper = w(this._clsOptions.siteAds.adOptions.removeVideoTitleWrapper, !1);
          c = this._clsOptions.siteAds.videoPlayers;
          this.footerSelector = w(c && c.footerSelector, "");
          this.players = w(c && c.players.map(function (a) {
            a.mobileLocation = Fa.setMobileLocation(a.mobileLocation);
            return a;
          }), []);
          this.contextualSettings = c && c.contextual;
        };
      }(),
      Ha = function () {
        return function (c) {
          this.contextualPlayerAdded = this.playlistPlayerAdded = this.mobileStickyPlayerOnPage = !1;
          this.footerSelector = "";
          this.removeVideoTitleWrapper = !1;
          this.videoAdOptions = new Ga(c);
          this.players = this.videoAdOptions.players;
          this.contextualSettings = this.videoAdOptions.contextualSettings;
          this.removeVideoTitleWrapper = this.videoAdOptions.removeVideoTitleWrapper;
          this.footerSelector = this.videoAdOptions.footerSelector;
        };
      }(),
      na = function () {
        function c(a) {
          this.adthrive = a;
          this.video = this.recipe = this.content = this.all = !1;
          this.locations = new Set();
          this.reasons = new Set();
          if (this.urlHasEmail(window.location.href) || this.urlHasEmail(window.document.referrer)) this.all = !0, this.reasons.add("all_email");
          try {
            this.checkCommandQueue(), null !== document.querySelector(".tag-novideo") && (this.video = !0, this.locations.add("Video"), this.reasons.add("video_tag"));
          } catch (b) {
            q.error("ClsDisableAds", "checkCommandQueue", b);
          }
        }
        c.prototype.checkCommandQueue = function () {
          var a = this;
          this.adthrive && this.adthrive.cmd && this.adthrive.cmd.forEach(function (b) {
            b = b.toString();
            var d = a.extractAPICall(b, "disableAds");
            d && a.disableAllAds(a.extractPatterns(d));
            (d = a.extractAPICall(b, "disableContentAds")) && a.disableContentAds(a.extractPatterns(d));
            (b = a.extractAPICall(b, "disablePlaylistPlayers")) && a.disablePlaylistPlayers(a.extractPatterns(b));
          });
        };
        c.prototype.extractPatterns = function (a) {
          a = a.match(/["'](.*?)['"]/g);
          if (null !== a) return a.map(function (b) {
            return b.replace(/["']/g, "");
          });
        };
        c.prototype.extractAPICall = function (a, b) {
          a = a.match(new RegExp(b + "\\((.*?)\\)", "g"));
          return null !== a ? a[0] : !1;
        };
        c.prototype.disableAllAds = function (a) {
          if (!a || V(a)) this.all = !0, this.reasons.add("all_page");
        };
        c.prototype.disableContentAds = function (a) {
          if (!a || V(a)) this.recipe = this.content = !0, this.locations.add("Content"), this.locations.add("Recipe"), this.reasons.add("content_plugin");
        };
        c.prototype.disablePlaylistPlayers = function (a) {
          if (!a || V(a)) this.video = !0, this.locations.add("Video"), this.reasons.add("video_page");
        };
        c.prototype.urlHasEmail = function (a) {
          return a ? null !== /([A-Z0-9._%+-]+(@|%(25)*40)[A-Z0-9.-]+\.[A-Z]{2,})/i.exec(a) : !1;
        };
        return c;
      }();
    if (x = window.adthriveCLS) x.disableAds = new na(window.adthrive);
    H = function () {
      return function () {};
    }();
    var J = function (c) {
        function a(b) {
          var d = c.call(this) || this;
          d._probability = b;
          return d;
        }
        z(a, c);
        a.prototype.get = function () {
          if (0 > this._probability || 1 < this._probability) throw Error("Invalid probability: ".concat(this._probability));
          return Math.random() < this._probability;
        };
        return a;
      }(H),
      Ia = function (c) {
        function a(b) {
          var d = c.call(this) || this;
          d._featureRollouts = b.enabled ? b.siteAds.featureRollouts || {} : {};
          return d;
        }
        z(a, c);
        return a;
      }(function () {
        function c() {
          this._featureRollouts = {};
        }
        Object.defineProperty(c.prototype, "siteFeatureRollouts", {
          get: function () {
            return this._featureRollouts;
          },
          enumerable: !1,
          configurable: !0
        });
        c.prototype.isRolloutEnabled = function (a) {
          return this._featureRollouts && this._featureRollouts[a] ? this._featureRollouts[a].enabled : !1;
        };
        return c;
      }()),
      X = function () {
        function c() {
          this._clsGlobalData = window.adthriveCLS;
        }
        Object.defineProperty(c.prototype, "enabled", {
          get: function () {
            var a;
            if (a = !!this._clsGlobalData && !!this._clsGlobalData.siteAds) a: {
              a = this._clsGlobalData.siteAds;
              var b = void 0;
              void 0 === b && (b = Da);
              if (a) {
                for (var d = 0; d < b.length; d++) if (!a[b[d]]) {
                  a = !1;
                  break a;
                }
                a = !0;
              } else a = !1;
            }
            return a;
          },
          enumerable: !1,
          configurable: !0
        });
        Object.defineProperty(c.prototype, "error", {
          get: function () {
            return !(!this._clsGlobalData || !this._clsGlobalData.error);
          },
          enumerable: !1,
          configurable: !0
        });
        Object.defineProperty(c.prototype, "siteAds", {
          get: function () {
            return this._clsGlobalData.siteAds;
          },
          set: function (a) {
            this._clsGlobalData.siteAds = a;
          },
          enumerable: !1,
          configurable: !0
        });
        Object.defineProperty(c.prototype, "disableAds", {
          get: function () {
            return this._clsGlobalData.disableAds;
          },
          set: function (a) {
            this._clsGlobalData.disableAds = a;
          },
          enumerable: !1,
          configurable: !0
        });
        Object.defineProperty(c.prototype, "enabledLocations", {
          get: function () {
            return this._clsGlobalData.enabledLocations;
          },
          set: function (a) {
            this._clsGlobalData.enabledLocations = a;
          },
          enumerable: !1,
          configurable: !0
        });
        Object.defineProperty(c.prototype, "injectedFromPlugin", {
          get: function () {
            return this._clsGlobalData.injectedFromPlugin;
          },
          set: function (a) {
            this._clsGlobalData.injectedFromPlugin = a;
          },
          enumerable: !1,
          configurable: !0
        });
        Object.defineProperty(c.prototype, "injectedFromSiteAds", {
          get: function () {
            return this._clsGlobalData.injectedFromSiteAds;
          },
          set: function (a) {
            this._clsGlobalData.injectedFromSiteAds = a;
          },
          enumerable: !1,
          configurable: !0
        });
        c.prototype.overwriteInjectedSlots = function (a) {
          this._clsGlobalData.injectedSlots = a;
        };
        c.prototype.setInjectedSlots = function (a) {
          this._clsGlobalData.injectedSlots = this._clsGlobalData.injectedSlots || [];
          this._clsGlobalData.injectedSlots.push(a);
        };
        Object.defineProperty(c.prototype, "injectedSlots", {
          get: function () {
            return this._clsGlobalData.injectedSlots;
          },
          enumerable: !1,
          configurable: !0
        });
        c.prototype.setInjectedVideoSlots = function (a) {
          this._clsGlobalData.injectedVideoSlots = this._clsGlobalData.injectedVideoSlots || [];
          this._clsGlobalData.injectedVideoSlots.push(a);
        };
        Object.defineProperty(c.prototype, "injectedVideoSlots", {
          get: function () {
            return this._clsGlobalData.injectedVideoSlots;
          },
          enumerable: !1,
          configurable: !0
        });
        c.prototype.setInjectedScripts = function (a) {
          this._clsGlobalData.injectedScripts = this._clsGlobalData.injectedScripts || [];
          this._clsGlobalData.injectedScripts.push(a);
        };
        Object.defineProperty(c.prototype, "getInjectedScripts", {
          get: function () {
            return this._clsGlobalData.injectedScripts;
          },
          enumerable: !1,
          configurable: !0
        });
        c.prototype.setExperiment = function (a, b, d) {
          void 0 === d && (d = !1);
          this._clsGlobalData.experiments = this._clsGlobalData.experiments || {};
          this._clsGlobalData.siteExperiments = this._clsGlobalData.siteExperiments || {};
          (d ? this._clsGlobalData.siteExperiments : this._clsGlobalData.experiments)[a] = b;
        };
        c.prototype.getExperiment = function (a, b) {
          void 0 === b && (b = !1);
          return (b = b ? this._clsGlobalData.siteExperiments : this._clsGlobalData.experiments) && b[a];
        };
        c.prototype.setWeightedChoiceExperiment = function (a, b, d) {
          void 0 === d && (d = !1);
          this._clsGlobalData.experimentsWeightedChoice = this._clsGlobalData.experimentsWeightedChoice || {};
          this._clsGlobalData.siteExperimentsWeightedChoice = this._clsGlobalData.siteExperimentsWeightedChoice || {};
          (d ? this._clsGlobalData.siteExperimentsWeightedChoice : this._clsGlobalData.experimentsWeightedChoice)[a] = b;
        };
        c.prototype.getWeightedChoiceExperiment = function (a, b) {
          var d, e;
          void 0 === b && (b = !1);
          return (b = b ? null === (d = this._clsGlobalData) || void 0 === d ? void 0 : d.siteExperimentsWeightedChoice : null === (e = this._clsGlobalData) || void 0 === e ? void 0 : e.experimentsWeightedChoice) && b[a];
        };
        Object.defineProperty(c.prototype, "branch", {
          get: function () {
            return this._clsGlobalData.branch;
          },
          enumerable: !1,
          configurable: !0
        });
        Object.defineProperty(c.prototype, "bucket", {
          get: function () {
            return this._clsGlobalData.bucket;
          },
          enumerable: !1,
          configurable: !0
        });
        Object.defineProperty(c.prototype, "videoDisabledFromPlugin", {
          get: function () {
            return this._clsGlobalData.videoDisabledFromPlugin;
          },
          set: function (a) {
            this._clsGlobalData.videoDisabledFromPlugin = a;
          },
          enumerable: !1,
          configurable: !0
        });
        Object.defineProperty(c.prototype, "targetDensityLog", {
          get: function () {
            return this._clsGlobalData.targetDensityLog;
          },
          set: function (a) {
            this._clsGlobalData.targetDensityLog = a;
          },
          enumerable: !1,
          configurable: !0
        });
        c.prototype.shouldHalveIOSDensity = function () {
          var a = new Ia(this),
            b = void 0;
          void 0 === b && (b = navigator.userAgent);
          return /iP(hone|od|ad)/i.test(b) && a.isRolloutEnabled("iOS-Resolution");
        };
        c.prototype.getTargetDensity = function (a) {
          return this.shouldHalveIOSDensity() ? a / 2 : a;
        };
        Object.defineProperty(c.prototype, "removeVideoTitleWrapper", {
          get: function () {
            return this._clsGlobalData.siteAds.adOptions.removeVideoTitleWrapper;
          },
          enumerable: !1,
          configurable: !0
        });
        return c;
      }();
    x = function () {
      function c() {
        this._clsOptions = new X();
        this.shouldUseCoreExperimentsConfig = !1;
      }
      c.prototype.setExperimentKey = function (a) {
        void 0 === a && (a = !1);
        this._clsOptions.setExperiment(this.abgroup, this.result, a);
      };
      return c;
    }();
    var Ja = function (c) {
        function a() {
          var b = c.call(this) || this;
          b._result = !1;
          b._choices = [{
            choice: !0
          }, {
            choice: !1
          }];
          b.key = "RemoveLargeSize";
          b.abgroup = "smhd100";
          b._result = b.run();
          b.setExperimentKey();
          return b;
        }
        z(a, c);
        Object.defineProperty(a.prototype, "result", {
          get: function () {
            return this._result;
          },
          enumerable: !1,
          configurable: !0
        });
        a.prototype.run = function () {
          return new J(.1).get();
        };
        return a;
      }(x),
      oa = function (c, a, b, d, e, f) {
        c = Math.round(f - e);
        a = [];
        e = [];
        a.push("(", b.map(function () {
          return "%o";
        }).join(", "), ")");
        e.push.apply(e, C([], t(b), !1));
        void 0 !== d && (a.push(" => %o"), e.push(d));
        a.push(" %c(".concat(c, "ms)"));
        e.push("color: #999;");
      },
      pa = function (c, a, b) {
        var d = void 0 !== b.get ? b.get : b.value;
        return function () {
          for (var e = [], f = 0; f < arguments.length; f++) e[f] = arguments[f];
          try {
            var g = U(),
              h = d.apply(this, e);
            if (h instanceof Promise) return h.then(function (l) {
              var n = U();
              oa(c, a, e, l, g, n);
              return Promise.resolve(l);
            }).catch(function (l) {
              l.logged || (q.error(c, a, l), l.logged = !0);
              throw l;
            });
            var k = U();
            oa(c, a, e, h, g, k);
            return h;
          } catch (l) {
            throw l.logged || (q.error(c, a, l), l.logged = !0), l;
          }
        };
      },
      N = function (c, a) {
        void 0 === a && (a = !1);
        return function (b) {
          var d,
            e = Object.getOwnPropertyNames(b.prototype).filter(function (p) {
              return a || 0 !== p.indexOf("_");
            }).map(function (p) {
              return [p, Object.getOwnPropertyDescriptor(b.prototype, p)];
            });
          try {
            for (var f = P(e), g = f.next(); !g.done; g = f.next()) {
              var h = t(g.value, 2),
                k = h[0],
                l = h[1];
              void 0 !== l && "function" === typeof l.value ? b.prototype[k] = pa(c, k, l) : void 0 !== l && void 0 !== l.get && "function" === typeof l.get && Object.defineProperty(b.prototype, k, A(A({}, l), {
                get: pa(c, k, l)
              }));
            }
          } catch (p) {
            var n = {
              error: p
            };
          } finally {
            try {
              g && !g.done && (d = f.return) && d.call(f);
            } finally {
              if (n) throw n.error;
            }
          }
        };
      },
      Ka = function (c) {
        function a() {
          var b = c.call(this) || this;
          b._result = !1;
          b.key = "MaxContent";
          b.abgroup = "conmax99";
          b._choices = [{
            choice: !0
          }, {
            choice: !1
          }];
          b.weight = .02;
          b._result = b.run();
          b.setExperimentKey();
          return b;
        }
        z(a, c);
        Object.defineProperty(a.prototype, "result", {
          get: function () {
            return this._result;
          },
          enumerable: !1,
          configurable: !0
        });
        a.prototype.run = function () {
          return new J(this.weight).get();
        };
        return a = I([N("MaxContentExperiment"), E("design:paramtypes", [])], a);
      }(x),
      La = function (c) {
        function a(b) {
          var d = c.call(this) || this;
          d._result = !1;
          d.key = "ParallaxAdsExperiment";
          d.abgroup = "parallax";
          d._choices = [{
            choice: !0
          }, {
            choice: !1
          }];
          d.weight = .5;
          G() && b.largeFormatsMobile && (d._result = d.run(), d.setExperimentKey());
          return d;
        }
        z(a, c);
        Object.defineProperty(a.prototype, "result", {
          get: function () {
            return this._result;
          },
          enumerable: !1,
          configurable: !0
        });
        a.prototype.run = function () {
          return new J(this.weight).get();
        };
        return a = I([N("ParallaxAdsExperiment"), E("design:paramtypes", [Object])], a);
      }(x),
      Ma = function (c) {
        function a() {
          var b = c.call(this) || this;
          b._result = !1;
          b._choices = [{
            choice: !0
          }, {
            choice: !1
          }];
          b.key = "mrsf";
          b.abgroup = "mrsf";
          G() && (b._result = b.run(), b.setExperimentKey());
          return b;
        }
        z(a, c);
        Object.defineProperty(a.prototype, "result", {
          get: function () {
            return this._result;
          },
          enumerable: !1,
          configurable: !0
        });
        a.prototype.run = function () {
          return new J(1).get();
        };
        return a;
      }(x),
      Na = [[728, 90], [300, 250], [300, 600], [320, 50], [970, 250], [160, 600], [300, 1050], [336, 280], [970, 90], [300, 50], [320, 100], [468, 60], [250, 250], [120, 240], [1, 1], [300, 300], [552, 334], [300, 420], [728, 250], [320, 300], [300, 390]],
      Oa = [[300, 600], [160, 600]],
      Pa = new Map([["Footer", 1], ["Header", 2], ["Sidebar", 3], ["Content", 4], ["Recipe", 5], ["Sidebar_sticky", 6], ["Below Post", 7]]),
      Qa = function (c) {
        return Na.filter(function (a) {
          a = t(a, 2);
          var b = a[0],
            d = a[1];
          return c.some(function (e) {
            e = t(e, 2);
            var f = e[1];
            return b === e[0] && d === f;
          });
        });
      },
      Ra = function (c, a, b, d, e) {
        a = t(a, 2);
        var f = a[0],
          g = a[1],
          h = c.location;
        a = c.sequence;
        return "Footer" === h ? !("phone" === b && 320 === f && 100 === g) : "Header" === h ? !(100 < g && d.result) : "Recipe" === h ? !(e.result && "phone" === b && (300 === f && 390 === g || 320 === f && 300 === g)) : "Sidebar" === h ? (b = c.adSizes.some(function (k) {
          return 300 >= t(k, 2)[1];
        }), (d = 300 < g) && !b ? !0 : 9 === a ? !0 : a && 5 >= a ? d ? c.sticky : !0 : !d) : !0;
      },
      Sa = function (c, a) {
        var b = c.location;
        c = c.sticky;
        if ("Recipe" === b && a) {
          var d = a.recipeMobile;
          a = a.recipeDesktop;
          if (G() && (null === d || void 0 === d ? 0 : d.enabled) || !G() && (null === a || void 0 === a ? 0 : a.enabled)) return !0;
        }
        return "Footer" === b || c;
      },
      Ta = function (c, a) {
        var b = a.adUnits,
          d = a.adTypes ? new La(a.adTypes).result : !1,
          e = new Ja(),
          f = new Ka(),
          g = new Ma();
        return b.filter(function (h) {
          return void 0 !== h.dynamic && h.dynamic.enabled;
        }).map(function (h) {
          var k = h.location.replace(/\s+/g, "_"),
            l = "Sidebar" === k ? 0 : 2;
          return {
            auctionPriority: Pa.get(k) || 8,
            location: k,
            sequence: w(h.sequence, 1),
            sizes: Qa(h.adSizes).filter(function (n) {
              return Ra(h, n, c, e, g);
            }).concat(d && "Content" === h.location ? Oa : []),
            devices: h.devices,
            pageSelector: w(h.dynamic.pageSelector, "").trim(),
            elementSelector: w(h.dynamic.elementSelector, "").trim(),
            position: w(h.dynamic.position, "beforebegin"),
            max: f.result && "Content" === h.location ? 99 : Math.floor(w(h.dynamic.max, 0)),
            spacing: w(h.dynamic.spacing, 0),
            skip: Math.floor(w(h.dynamic.skip, 0)),
            every: Math.max(Math.floor(w(h.dynamic.every, 1)), 1),
            classNames: h.dynamic.classNames || [],
            sticky: Sa(h, a.adOptions.stickyContainerConfig),
            stickyOverlapSelector: w(h.stickyOverlapSelector, "").trim(),
            autosize: h.autosize,
            special: w(h.targeting, []).filter(function (n) {
              return "special" === n.key;
            }).reduce(function (n, p) {
              return n.concat.apply(n, C([], t(p.value), !1));
            }, []),
            lazy: w(h.dynamic.lazy, !1),
            lazyMax: w(h.dynamic.lazyMax, l),
            lazyMaxDefaulted: 0 === h.dynamic.lazyMax ? !1 : !h.dynamic.lazyMax
          };
        });
      },
      Y = function (c, a) {
        var b = ua(a),
          d = c.sticky && "Sidebar" === c.location;
        return c.sizes.filter(function (e) {
          var f = d ? e[1] <= window.innerHeight - 100 : !0;
          return (c.autosize ? e[0] <= b || 320 >= e[0] : !0) && f;
        });
      },
      Ua = function (c) {
        var a = document.body;
        c = "adthrive-device-".concat(c);
        if (!a.classList.contains(c)) try {
          a.classList.add(c);
        } catch (b) {
          q.error("BodyDeviceClassComponent", "init", {
            message: b.message
          }), a = "classList" in document.createElement("_"), q.error("BodyDeviceClassComponent", "init.support", {
            support: a
          });
        }
      },
      Va = function (c, a, b, d) {
        void 0 === b && (b = 1200);
        void 0 === d && (d = 25);
        return Math.min(Math.max(Math.floor((c - a.offsetTop) / (b + 10)) - 2, 1), d);
      },
      Wa = function (c) {
        if (c && c.length) {
          for (var a = 0, b = 0; b < c.length; b++) {
            var d = W(c[b]);
            if (d.valid && d.elements && d.elements[0]) {
              a = da(d.elements[0]).height;
              break;
            }
          }
          return a;
        }
      },
      Xa = function (c) {
        return Q('\n  .adthrive-device-phone .adthrive-sticky-content {\n    height: 450px !important;\n    margin-bottom: 100px !important;\n  }\n  .adthrive-content.adthrive-sticky {\n    position: -webkit-sticky;\n    position: sticky !important;\n    top: 42px !important;\n    margin-top: 42px !important;\n  }\n  .adthrive-content.adthrive-sticky:after {\n    content: "\u2014 Advertisement. Scroll down to continue. \u2014";\n    font-size: 10pt;\n    margin-top: 5px;\n    margin-bottom: 5px;\n    display:block;\n    color: #888;\n  }\n  .adthrive-sticky-container {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    min-height:'.concat(c ? c : 400, "px !important;\n    margin: 10px 0 10px 0;\n    background-color: #FAFAFA;\n    padding-bottom:0px;\n  }\n  "));
      },
      Ya = function (c, a) {
        a = null !== a && void 0 !== a ? a : 5;
        Q("\n    .adthrive-ad.adthrive-sticky-sidebar {\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-start;\n      align-items: center;\n      min-height: ".concat(null !== c && void 0 !== c ? c : 1200, "px !important;\n      padding-bottom: 0px;\n      margin: 10px 0 10px 0;\n    }\n    .adthrive-ad.adthrive-sticky-sidebar > div {\n      flex-basis: unset;\n      position: sticky !important;\n      top: ").concat(a, "px;\n    }\n  "));
      },
      Z = function (c) {
        return c.some(function (a) {
          return null !== document.querySelector(a);
        });
      },
      Za = function (c) {
        function a() {
          var b = c.call(this) || this;
          b._result = !1;
          b.abgroup = "essa";
          b.key = "EnhancedStickySidebarAds";
          b._choices = [{
            choice: !0
          }, {
            choice: !1
          }];
          b.weight = .9;
          b._result = b.run();
          b.setExperimentKey();
          return b;
        }
        z(a, c);
        Object.defineProperty(a.prototype, "result", {
          get: function () {
            return this._result;
          },
          enumerable: !1,
          configurable: !0
        });
        a.prototype.run = function () {
          return new J(this.weight).get();
        };
        return a = I([N("EnhancedStickySidebarAdsExperiment"), E("design:paramtypes", [])], a);
      }(x),
      O = function (c) {
        function a(b, d) {
          void 0 === b && (b = []);
          var e = c.call(this) || this;
          e._choices = b;
          e._default = d;
          return e;
        }
        z(a, c);
        a.fromArray = function (b, d) {
          return new a(b.map(function (e) {
            e = t(e, 2);
            return {
              choice: e[0],
              weight: e[1]
            };
          }), d);
        };
        a.prototype.addChoice = function (b, d) {
          this._choices.push({
            choice: b,
            weight: d
          });
        };
        a.prototype.get = function () {
          var b,
            d = 100 * Math.random(),
            e = 0;
          try {
            for (var f = P(this._choices), g = f.next(); !g.done; g = f.next()) {
              var h = g.value,
                k = h.choice;
              e += h.weight;
              if (e >= d) return k;
            }
          } catch (n) {
            var l = {
              error: n
            };
          } finally {
            try {
              g && !g.done && (b = f.return) && b.call(f);
            } finally {
              if (l) throw l.error;
            }
          }
          return this._default;
        };
        Object.defineProperty(a.prototype, "totalWeight", {
          get: function () {
            return this._choices.reduce(function (b, d) {
              return b + d.weight;
            }, 0);
          },
          enumerable: !1,
          configurable: !0
        });
        return a;
      }(H),
      $a = function (c) {
        for (var a = 5381, b = c.length; b;) a = 33 * a ^ c.charCodeAt(--b);
        return a >>> 0;
      },
      R = new (function () {
        function c() {
          var a = this;
          this.name = "StorageHandler";
          this.disable = !1;
          this.removeLocalStorageValue = function (b) {
            window.localStorage.removeItem("adthrive_".concat(b.toLowerCase()));
          };
          this.getLocalStorageValue = function (b, d, e, f, g) {
            void 0 === d && (d = !0);
            void 0 === e && (e = !0);
            if (a.disable) return null;
            try {
              var h = window.localStorage.getItem("".concat(d ? "adthrive_" : "").concat(e ? b.toLowerCase() : b));
              if (h) {
                var k = JSON.parse(h),
                  l = void 0 !== f && Date.now() - k.created >= f;
                if (k && !l) return g && a.setLocalStorageValue(b, k.value, d), k.value;
              }
            } catch (n) {}
            return null;
          };
          this.setLocalStorageValue = function (b, d, e) {
            void 0 === e && (e = !0);
            try {
              e = e ? "adthrive_" : "";
              var f = {
                value: d,
                created: Date.now()
              };
              window.localStorage.setItem("".concat(e).concat(b.toLowerCase()), JSON.stringify(f));
            } catch (g) {}
          };
          this.isValidABGroupLocalStorageValue = function (b) {
            return void 0 !== b && null !== b && !("number" === typeof b && isNaN(b));
          };
          this.getOrSetLocalStorageValue = function (b, d, e, f, g, h, k) {
            void 0 === f && (f = !0);
            void 0 === g && (g = !0);
            void 0 === k && (k = !0);
            e = a.getLocalStorageValue(b, k, f, e, g);
            if (null !== e) return e;
            d = d();
            a.setLocalStorageValue(b, d, k);
            h && h(d);
            return d;
          };
          this.getOrSetABGroupLocalStorageValue = function (b, d, e, f, g) {
            var h;
            void 0 === f && (f = !0);
            e = a.getLocalStorageValue("abgroup", !0, !0, e, f);
            if (null !== e && (f = e[b], a.isValidABGroupLocalStorageValue(f))) return f;
            d = d();
            b = A(A({}, e), (h = {}, h[b] = d, h));
            a.setLocalStorageValue("abgroup", b);
            g && g();
            return d;
          };
        }
        c.prototype.init = function () {};
        return c;
      }())(),
      qa = function () {
        return function (c, a, b) {
          var d = b.value;
          d && (b.value = function () {
            for (var e = this, f = [], g = 0; g < arguments.length; g++) f[g] = arguments[g];
            g = Array.isArray(this._choices) ? $a(JSON.stringify(this._choices)).toString(16) : null;
            var h = this._expConfigABGroup ? this._expConfigABGroup : this.abgroup;
            h = h ? h.toLowerCase() : this.key ? this.key.toLowerCase() : "";
            g = g ? "".concat(h, "_").concat(g) : h;
            g = this.localStoragePrefix ? "".concat(this.localStoragePrefix, "-").concat(g) : g;
            h = R.getLocalStorageValue("branch");
            !1 === (h && h.enabled) && R.removeLocalStorageValue(g);
            return R.getOrSetABGroupLocalStorageValue(g, function () {
              return d.apply(e, f);
            }, 864E5);
          });
        };
      };
    H = function (c) {
      function a() {
        var b = null !== c && c.apply(this, arguments) || this;
        b._resultValidator = function () {
          return !0;
        };
        return b;
      }
      z(a, c);
      a.prototype._isValidResult = function (b) {
        var d = this;
        return c.prototype._isValidResult.call(this, b, function () {
          return d._resultValidator(b) || "control" === b;
        });
      };
      a.prototype.run = function () {
        if (!this.enabled) return q.error("CLSWeightedChoiceSiteExperiment", "run", "() => %o", "No experiment config found. Defaulting to control."), "control";
        if (!this._mappedChoices || 0 === this._mappedChoices.length) return q.error("CLSWeightedChoiceSiteExperiment", "run", "() => %o", "No experiment variants found. Defaulting to control."), "control";
        var b = new O(this._mappedChoices).get();
        if (this._isValidResult(b)) return b;
        q.error("CLSWeightedChoiceSiteExperiment", "run", "() => %o", "Invalid result from experiment choices. Defaulting to control.");
        return "control";
      };
      return a;
    }(function () {
      function c() {}
      Object.defineProperty(c.prototype, "enabled", {
        get: function () {
          return void 0 !== this.experimentConfig;
        },
        enumerable: !1,
        configurable: !0
      });
      c.prototype._isValidResult = function (a, b) {
        void 0 === b && (b = function () {
          return !0;
        });
        return b() && R.isValidABGroupLocalStorageValue(a);
      };
      return c;
    }());
    var ra = function () {
        function c(a) {
          var b = this,
            d,
            e;
          this.siteExperiments = [];
          this._clsOptions = a;
          this._device = G() ? "mobile" : "desktop";
          this.siteExperiments = null !== (e = null === (d = this._clsOptions.siteAds.siteExperiments) || void 0 === d ? void 0 : d.filter(function (f) {
            var g = f.key;
            var h = b._device;
            if (f) {
              var k = !!f.enabled,
                l = null == f.dateStart || Date.now() >= f.dateStart,
                n = null == f.dateEnd || Date.now() <= f.dateEnd,
                p = null === f.selector || "" !== f.selector && !!document.querySelector(f.selector),
                r = "mobile" === f.platform && "mobile" === h;
              h = "desktop" === f.platform && "desktop" === h;
              r = null === f.platform || "all" === f.platform || r || h;
              (h = "bernoulliTrial" === f.experimentType ? 1 === f.variants.length : Ca(f.variants)) || q.error("SiteTest", "validateSiteExperiment", "experiment presented invalid choices for key:", f.key, f.variants);
              f = k && l && n && p && r && h;
            } else f = !1;
            a: switch (k = b._clsOptions.siteAds, g) {
              case F.AdDensity:
                var m = Aa(k, b._device);
                break a;
              case F.StickyOutstream:
                var u, v;
                m = (g = null === (v = null === (u = null === (m = k.videoPlayers) || void 0 === m ? void 0 : m.partners) || void 0 === u ? void 0 : u.stickyOutstream) || void 0 === v ? void 0 : v.blockedPageSelectors) ? !document.querySelector(g) : !0;
                break a;
              case F.Interstitial:
                m = (m = k.adOptions.interstitialBlockedPageSelectors) ? !document.querySelector(m) : !0;
                break a;
              default:
                m = !0;
            }
            return f && m;
          })) && void 0 !== e ? e : [];
        }
        c.prototype.getSiteExperimentByKey = function (a) {
          var b = this.siteExperiments.filter(function (f) {
              return f.key.toLowerCase() === a.toLowerCase();
            })[0],
            d = Ea("at_site_features"),
            e = typeof ((null === b || void 0 === b ? 0 : b.variants[1]) ? null === b || void 0 === b ? void 0 : b.variants[1].value : null === b || void 0 === b ? void 0 : b.variants[0].value) === typeof d[a];
          b && d[a] && e && (b.variants = [{
            displayName: "test",
            value: d[a],
            weight: 100,
            id: 0
          }]);
          return b;
        };
        return c;
      }(),
      ab = function (c) {
        function a(b) {
          var d = c.call(this) || this;
          d._choices = [];
          d._mappedChoices = [];
          d._result = "";
          d._resultValidator = function (e) {
            return "string" === typeof e;
          };
          d.key = F.AdLayout;
          d.abgroup = F.AdLayout;
          d._clsSiteExperiments = new ra(b);
          d.experimentConfig = d._clsSiteExperiments.getSiteExperimentByKey(d.key);
          d.enabled && d.experimentConfig && (d._choices = d.experimentConfig.variants, d._mappedChoices = d._mapChoices(), d._result = d.run(), b.setWeightedChoiceExperiment(d.abgroup, d._result, !0));
          return d;
        }
        z(a, c);
        Object.defineProperty(a.prototype, "result", {
          get: function () {
            return this._result;
          },
          enumerable: !1,
          configurable: !0
        });
        a.prototype.run = function () {
          if (!this.enabled) return q.error("CLSAdLayoutSiteExperiment", "run", "() => %o", "No experiment config found. Defaulting to empty class name."), "";
          var b = new O(this._mappedChoices).get();
          if (this._isValidResult(b)) return b;
          q.error("CLSAdLayoutSiteExperiment", "run", "() => %o", "Invalid result from experiment choices. Defaulting to empty class name.");
          return "";
        };
        a.prototype._mapChoices = function () {
          return this._choices.map(function (b) {
            return {
              weight: b.weight,
              choice: b.value
            };
          });
        };
        I([qa(), E("design:type", Function), E("design:paramtypes", []), E("design:returntype", void 0)], a.prototype, "run", null);
        return a;
      }(H),
      bb = function (c) {
        function a(b) {
          var d = c.call(this) || this;
          d._choices = [];
          d._mappedChoices = [];
          d._result = "control";
          d._resultValidator = function (e) {
            return "number" === typeof e;
          };
          d.key = F.AdDensity;
          d.abgroup = F.AdDensity;
          d._clsSiteExperiments = new ra(b);
          d.experimentConfig = d._clsSiteExperiments.getSiteExperimentByKey(d.key);
          d.enabled && d.experimentConfig && (d._choices = d.experimentConfig.variants, d._mappedChoices = d._mapChoices(), d._result = d.run(), b.setWeightedChoiceExperiment(d.abgroup, d._result, !0));
          return d;
        }
        z(a, c);
        Object.defineProperty(a.prototype, "result", {
          get: function () {
            return this._result;
          },
          enumerable: !1,
          configurable: !0
        });
        a.prototype.run = function () {
          if (!this.enabled) return q.error("CLSTargetAdDensitySiteExperiment", "run", "() => %o", "No experiment config found. Defaulting to control."), "control";
          var b = new O(this._mappedChoices).get();
          if (this._isValidResult(b)) return b;
          q.error("CLSTargetAdDensitySiteExperiment", "run", "() => %o", "Invalid result from experiment choices. Defaulting to control.");
          return "control";
        };
        a.prototype._mapChoices = function () {
          return this._choices.map(function (b) {
            var d = b.value;
            return {
              weight: b.weight,
              choice: "number" === typeof d ? (d || 0) / 100 : "control"
            };
          });
        };
        I([qa(), E("design:type", Function), E("design:paramtypes", []), E("design:returntype", void 0)], a.prototype, "run", null);
        return a;
      }(H),
      cb = function (c) {
        function a() {
          var b = c.call(this) || this;
          b._result = !1;
          b.abgroup = "scae";
          b.key = "StickyContainerAds";
          b._choices = [{
            choice: !0
          }, {
            choice: !1
          }];
          b.weight = .99;
          b._result = b.run();
          b.setExperimentKey();
          return b;
        }
        z(a, c);
        Object.defineProperty(a.prototype, "result", {
          get: function () {
            return this._result;
          },
          enumerable: !1,
          configurable: !0
        });
        a.prototype.run = function () {
          return new J(this.weight).get();
        };
        return a = I([N("StickyContainerAdsExperiment"), E("design:paramtypes", [])], a);
      }(x),
      db = function (c) {
        function a() {
          var b = c.call(this) || this;
          b._result = !1;
          b.abgroup = "scre";
          b.key = "StickyContainerRecipe";
          b._choices = [{
            choice: !0
          }, {
            choice: !1
          }];
          b.weight = .99;
          b._result = b.run();
          b.setExperimentKey();
          return b;
        }
        z(a, c);
        Object.defineProperty(a.prototype, "result", {
          get: function () {
            return this._result;
          },
          enumerable: !1,
          configurable: !0
        });
        a.prototype.run = function () {
          return new J(this.weight).get();
        };
        return a = I([N("StickyContainerRecipeExperiment"), E("design:paramtypes", [])], a);
      }(x),
      eb = function () {
        function c(a) {
          this.key = "DynamicSidebarSlotsMinHeight";
          this.abgroup = "dssmh";
          this._result = 2700;
          this._choices = [{
            choice: 1800,
            weight: 10
          }, {
            choice: 2100,
            weight: 10
          }, {
            choice: 2400,
            weight: 10
          }, {
            choice: 2700,
            weight: 60
          }, {
            choice: 3E3,
            weight: 10
          }];
          this._isValidResult = function (b) {
            return "number" === typeof b;
          };
          this._result = this.run();
          a.setWeightedChoiceExperiment(this.abgroup, this._result, !1);
        }
        Object.defineProperty(c.prototype, "result", {
          get: function () {
            return this._result;
          },
          enumerable: !1,
          configurable: !0
        });
        c.prototype.run = function () {
          var a = new O(this._choices).get();
          if (this._isValidResult(a)) return a;
          q.error("setWeightedChoiceExperiment", "run", "() => %o", "Invalid result from experiment choices. Defaulting to 0.");
          return 0;
        };
        return c;
      }(),
      fb = function () {
        function c(a) {
          this.key = "DynamicSidebarSlotsCap";
          this.abgroup = "dssc";
          this._result = 25;
          this._choices = [{
            choice: 25,
            weight: 25
          }, {
            choice: 50,
            weight: 25
          }, {
            choice: 75,
            weight: 25
          }, {
            choice: 100,
            weight: 25
          }];
          this._isValidResult = function (b) {
            return "number" === typeof b;
          };
          this._result = this.run();
          a.setWeightedChoiceExperiment(this.abgroup, this._result, !1);
        }
        Object.defineProperty(c.prototype, "result", {
          get: function () {
            return this._result;
          },
          enumerable: !1,
          configurable: !0
        });
        c.prototype.run = function () {
          var a = new O(this._choices).get();
          if (this._isValidResult(a)) return a;
          q.error("DynamicSidebarSlotsCapCLSExperiment", "run", "() => %o", "Invalid result from experiment choices. Defaulting to 0.");
          return 0;
        };
        return c;
      }(),
      hb = function () {
        function c(a, b) {
          this._clsOptions = a;
          this._adInjectionMap = b;
          this._mainContentHeight = this._recipeCount = 0;
          this._mainContentDiv = null;
          this._totalAvailableElements = [];
          this._minDivHeight = 250;
          this._densityDevice = M.Desktop;
          this._pubLog = {
            onePerViewport: !1,
            targetDensity: 0,
            targetDensityUnits: 0,
            combinedMax: 0
          };
          this._densityMax = .99;
          this._smallerIncrementAttempts = 0;
          this._absoluteMinimumSpacingByDevice = 250;
          this._usedAbsoluteMinimum = !1;
          this._infPageEndOffset = 0;
          this.locationMaxLazySequence = new Map([["Recipe", 5]]);
          this.locationToMinHeight = {
            Below_Post: "250px",
            Content: "250px",
            Recipe: "250px",
            Sidebar: "250px"
          };
          b = this._clsOptions.siteAds.breakpoints;
          var d = b.tablet;
          var e = window.innerWidth;
          b = e >= b.desktop ? "desktop" : e >= d ? "tablet" : "phone";
          this._device = b;
          this._config = new ca(a);
          this._clsOptions.enabledLocations = this._config.enabledLocations;
          this._clsTargetAdDensitySiteExperiment = this._clsOptions.siteAds.siteExperiments ? new bb(this._clsOptions) : null;
          this._dynamicSidebarSlotsMinHeightExperiment = new eb(this._clsOptions);
          this._dynamicSidebarSlotsCapExperiment = new fb(this._clsOptions);
          this._stickyContainerAdsExperiment = new cb();
          this._stickyContainerRecipeExperiment = new db();
          this._enhancedStickySidebarAdsExperiment = new Za();
        }
        c.prototype.start = function () {
          var a = this,
            b,
            d,
            e,
            f,
            g,
            h,
            k;
          try {
            Ua(this._device);
            var l = new ab(this._clsOptions);
            if (l.enabled) {
              var n = l.result.substring(1);
              if (/^[-_a-zA-Z]+[-_a-zA-Z0-9]*$/.test(n)) try {
                document.body.classList.add(n);
              } catch (B) {
                q.error("ClsDynamicAdsInjector", "start", "Uncaught CSS Class error: ".concat(B));
              } else q.error("ClsDynamicAdsInjector", "start", "Invalid class name: ".concat(n));
            }
            var p = this._clsOptions.siteAds.adOptions,
              r = (null === (b = this._dynamicSidebarSlotsMinHeightExperiment) || void 0 === b ? void 0 : b.result) || (null === (e = null === (d = p.sidebarConfig) || void 0 === d ? void 0 : d.dynamicStickySidebar) || void 0 === e ? void 0 : e.minHeight),
              m = p.siteAttributes,
              u = G() ? null === m || void 0 === m ? void 0 : m.mobileHeaderSelectors : null === m || void 0 === m ? void 0 : m.desktopHeaderSelectors,
              v = Wa(u);
            Ya(r, v);
            var y = Ta(this._device, this._clsOptions.siteAds).filter(function (B) {
                return a._locationEnabled(B);
              }).filter(function (B) {
                return B.devices.includes(a._device);
              }).filter(function (B) {
                return 0 === B.pageSelector.length || null !== document.querySelector(B.pageSelector);
              }),
              D = this.inject(y);
            (null === (g = null === (f = this._clsOptions.siteAds.adOptions.stickyContainerConfig) || void 0 === f ? void 0 : f.content) || void 0 === g ? 0 : g.enabled) && this._stickyContainerAdsExperiment.result && !Z(this._clsOptions.siteAds.adOptions.stickyContainerConfig.blockedSelectors || []) && Xa(null === (k = null === (h = this._clsOptions.siteAds.adOptions.stickyContainerConfig) || void 0 === h ? void 0 : h.content) || void 0 === k ? void 0 : k.minHeight);
            D.forEach(function (B) {
              return a._clsOptions.setInjectedSlots(B);
            });
          } catch (B) {
            q.error("ClsDynamicAdsInjector", "start", B);
          }
        };
        c.prototype.inject = function (a, b) {
          void 0 === b && (b = document);
          this._densityDevice = "desktop" === this._device ? M.Desktop : M.Mobile;
          this._overrideDefaultAdDensitySettingsWithSiteExperiment();
          var d = this._clsOptions.siteAds,
            e = w(d.adDensityEnabled, !0),
            f = d.adDensityLayout && e;
          d = a.filter(function (g) {
            return f ? "Content" !== g.location : g;
          });
          a = a.filter(function (g) {
            return f ? "Content" === g.location : null;
          });
          return C(C([], t(d.length ? this._injectNonDensitySlots(d, b) : []), !1), t(a.length ? this._injectDensitySlots(a, b) : []), !1);
        };
        c.prototype._injectNonDensitySlots = function (a, b) {
          var d,
            e = this,
            f,
            g,
            h,
            k,
            l,
            n,
            p;
          void 0 === b && (b = document);
          var r = [],
            m = [],
            u = (null === (g = null === (f = this._clsOptions.siteAds.adOptions.sidebarConfig) || void 0 === f ? void 0 : f.dynamicStickySidebar) || void 0 === g ? void 0 : g.enabled) && this._enhancedStickySidebarAdsExperiment.result;
          this._stickyContainerRecipeExperiment.result && a.some(function (K) {
            return "Recipe" === K.location && K.sticky;
          }) && !Z((null === (h = this._clsOptions.siteAds.adOptions.stickyContainerConfig) || void 0 === h ? void 0 : h.blockedSelectors) || []) && (f = this._clsOptions.siteAds.adOptions.stickyContainerConfig, f = "phone" === this._device ? null === (k = null === f || void 0 === f ? void 0 : f.recipeMobile) || void 0 === k ? void 0 : k.minHeight : null === (l = null === f || void 0 === f ? void 0 : f.recipeDesktop) || void 0 === l ? void 0 : l.minHeight, Q("\n  .adthrive-recipe.adthrive-sticky {\n    position: -webkit-sticky;\n    position: sticky !important;\n    top: 42px !important;\n    margin-top: 42px !important;\n  }\n  .adthrive-recipe-sticky-container {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    min-height:".concat(f ? f : 400, "px !important;\n    margin: 10px 0 10px 0;\n    background-color: #FAFAFA;\n    padding-bottom:0px;\n  }\n  ")));
          try {
            for (var v = P(a), y = v.next(); !y.done; y = v.next()) {
              var D = y.value,
                B = "Sidebar" === D.location && 9 === D.sequence && D.sticky,
                aa = (null === (p = null === (n = this._clsOptions.siteAds.adOptions.sidebarConfig) || void 0 === n ? void 0 : n.dynamicStickySidebar) || void 0 === p ? void 0 : p.blockedSelectors) || [],
                gb = Z(aa);
              u && B ? gb ? this._insertNonDensityAds(D, r, m, b) : this._insertDynamicStickySidebarAds(D, r, m, b) : this._insertNonDensityAds(D, r, m, b);
            }
          } catch (K) {
            var sa = {
              error: K
            };
          } finally {
            try {
              y && !y.done && (d = v.return) && d.call(v);
            } finally {
              if (sa) throw sa.error;
            }
          }
          m.forEach(function (K) {
            K.element.style.minHeight = e.locationToMinHeight[K.location];
          });
          return r;
        };
        c.prototype._injectDensitySlots = function (a, b) {
          void 0 === b && (b = document);
          try {
            this._calculateMainContentHeightAndAllElements(a, b);
          } catch (h) {
            return [];
          }
          var d = this._getDensitySettings(a, b);
          a = d.onePerViewport;
          var e = d.targetAll,
            f = d.targetDensityUnits,
            g = d.combinedMax;
          d = d.numberOfUnits;
          this._absoluteMinimumSpacingByDevice = a ? window.innerHeight : this._absoluteMinimumSpacingByDevice;
          if (!d) return [];
          this._adInjectionMap.filterUsed();
          this._findElementsForAds(d, a, e, g, f, b);
          return this._insertAds();
        };
        c.prototype._overrideDefaultAdDensitySettingsWithSiteExperiment = function () {
          var a;
          if (null === (a = this._clsTargetAdDensitySiteExperiment) || void 0 === a ? 0 : a.enabled) a = this._clsTargetAdDensitySiteExperiment.result, "number" === typeof a && (this._clsOptions.siteAds.adDensityEnabled = !0, this._clsOptions.siteAds.adDensityLayout[this._densityDevice].adDensity = a);
        };
        c.prototype._getDensitySettings = function (a, b) {
          void 0 === b && (b = document);
          var d = this._clsOptions.siteAds.adDensityLayout,
            e = this._determineOverrides(d.pageOverrides);
          e = e.length ? e[0] : d[this._densityDevice];
          d = this._clsOptions.getTargetDensity(e.adDensity);
          e = e.onePerViewport;
          var f = this._shouldTargetAllEligible(d),
            g = this._getTargetDensityUnits(d, f);
          a = this._getCombinedMax(a, b);
          b = Math.min.apply(Math, C([], t(C([this._totalAvailableElements.length, g], t(0 < a ? [a] : []), !1)), !1));
          this._pubLog = {
            onePerViewport: e,
            targetDensity: d,
            targetDensityUnits: g,
            combinedMax: a
          };
          return {
            onePerViewport: e,
            targetAll: f,
            targetDensityUnits: g,
            combinedMax: a,
            numberOfUnits: b
          };
        };
        c.prototype._determineOverrides = function (a) {
          var b = this;
          return a.filter(function (d) {
            var e = W(d.pageSelector);
            return "" === d.pageSelector || e.elements && e.elements.length;
          }).map(function (d) {
            return d[b._densityDevice];
          });
        };
        c.prototype._shouldTargetAllEligible = function (a) {
          return a === this._densityMax;
        };
        c.prototype._getTargetDensityUnits = function (a, b) {
          return b ? this._totalAvailableElements.length : Math.floor(a * this._mainContentHeight / (1 - a) / this._minDivHeight) - this._recipeCount;
        };
        c.prototype._getCombinedMax = function (a, b) {
          void 0 === b && (b = document);
          return w(a.filter(function (d) {
            try {
              var e = b.querySelector(d.elementSelector);
            } catch (f) {}
            return e;
          }).map(function (d) {
            return Number(d.max) + Number(d.lazyMaxDefaulted ? 0 : d.lazyMax);
          }).sort(function (d, e) {
            return e - d;
          })[0], 0);
        };
        c.prototype._elementLargerThanMainContent = function (a) {
          return a.offsetHeight >= this._mainContentHeight && 1 < this._totalAvailableElements.length;
        };
        c.prototype._elementDisplayNone = function (a) {
          var b = window.getComputedStyle(a, null).display;
          return b && "none" === b || "none" === a.style.display;
        };
        c.prototype._isBelowMaxes = function (a, b) {
          return this._adInjectionMap.map.length < a && this._adInjectionMap.map.length < b;
        };
        c.prototype._findElementsForAds = function (a, b, d, e, f, g) {
          var h = this;
          void 0 === g && (g = document);
          this._clsOptions.targetDensityLog = {
            onePerViewport: b,
            combinedMax: e,
            targetDensityUnits: f,
            targetDensityPercentage: this._pubLog.targetDensity,
            mainContentHeight: this._mainContentHeight,
            recipeCount: this._recipeCount,
            numberOfEls: this._totalAvailableElements.length
          };
          var k = function (l) {
            var n;
            try {
              for (var p = P(h._totalAvailableElements), r = p.next(); !r.done; r = p.next()) {
                var m = r.value,
                  u = m.dynamicAd,
                  v = m.element;
                h._logDensityInfo(v, u.elementSelector, l);
                if (!(!d && h._elementLargerThanMainContent(v) || h._elementDisplayNone(v))) if (h._isBelowMaxes(e, f)) h._checkElementSpacing({
                  dynamicAd: u,
                  element: v,
                  insertEvery: l,
                  targetAll: d,
                  target: g
                });else break;
              }
            } catch (D) {
              var y = {
                error: D
              };
            } finally {
              try {
                r && !r.done && (n = p.return) && n.call(p);
              } finally {
                if (y) throw y.error;
              }
            }
            !h._usedAbsoluteMinimum && 5 > h._smallerIncrementAttempts && (++h._smallerIncrementAttempts, k(h._getSmallerIncrement(l)));
          };
          a = this._getInsertEvery(a, b, f);
          k(a);
        };
        c.prototype._getSmallerIncrement = function (a) {
          a *= .6;
          a <= this._absoluteMinimumSpacingByDevice && (a = this._absoluteMinimumSpacingByDevice, this._usedAbsoluteMinimum = !0);
          return a;
        };
        c.prototype._insertDynamicStickySidebarAds = function (a, b, d, e) {
          void 0 === e && (e = document);
          var f = this.getElements(a.elementSelector, e).item(a.skip);
          if (null !== f) for (var g = this._repeatDynamicStickySidebar(a, f), h = function (n) {
              var p = g[n],
                r = "".concat(p.location, "_").concat(p.sequence);
              if (b.some(function (y) {
                return y.name === r;
              })) return "continue";
              var m = k.getDynamicElementId(p),
                u = "adthrive-".concat(a.location.replace("_", "-").toLowerCase()),
                v = "".concat(u, "-").concat(p.sequence);
              n = C([n !== g.length - 1 ? "adthrive-sticky-sidebar" : "", u, v], t(a.classNames), !1);
              if (m = k.addAd(f, m, p.position, n)) n = Y(p, m), n.length && (b.push({
                clsDynamicAd: a,
                dynamicAd: p,
                element: m,
                sizes: n,
                name: r,
                infinite: e !== document
              }), d.push({
                location: p.location,
                element: m
              }));
            }, k = this, l = 0; l < g.length; l++) h(l);
        };
        c.prototype._insertNonDensityAds = function (a, b, d, e) {
          void 0 === e && (e = document);
          var f = 0,
            g = 0,
            h = 0;
          0 < a.spacing && (g = f = window.innerHeight * a.spacing);
          for (var k = this._repeatDynamicAds(a), l = this.getElements(a.elementSelector, e), n = function (m) {
              if (h + 1 > k.length) return "break";
              var u = l[m];
              if (0 < f) {
                m = da(u).bottom;
                if (m <= g) return "continue";
                g = m + f;
              }
              m = k[h];
              var v = "".concat(m.location, "_").concat(m.sequence);
              b.some(function (aa) {
                return aa.name === v;
              }) && (h += 1);
              var y = p.getDynamicElementId(m),
                D = "adthrive-".concat(a.location.replace("_", "-").toLowerCase()),
                B = "".concat(D, "-").concat(a.sequence);
              D = C(["Sidebar" === a.location && a.sticky && a.sequence && 5 >= a.sequence ? "adthrive-sticky-sidebar" : "", p._stickyContainerRecipeExperiment.result && "Recipe" === a.location && a.sticky ? "adthrive-recipe-sticky-container" : "", D, B], t(a.classNames), !1);
              if (u = p.addAd(u, y, a.position, D)) y = Y(m, u), y.length && (b.push({
                clsDynamicAd: a,
                dynamicAd: m,
                element: u,
                sizes: y,
                name: v,
                infinite: e !== document
              }), d.push({
                location: m.location,
                element: u
              }), "Recipe" === a.location && ++p._recipeCount, h += 1);
            }, p = this, r = a.skip; r < l.length && "break" !== n(r); r += a.every);
        };
        c.prototype._insertAds = function () {
          var a = this,
            b = [];
          this._adInjectionMap.filterUsed();
          this._adInjectionMap.map.forEach(function (d, e) {
            var f = d.el,
              g = d.dynamicAd;
            d = d.target;
            e = Number(g.sequence) + e;
            var h = g.max;
            h = g.lazy && e > h;
            g.sequence = e;
            g.lazy = h;
            if (f = a._addContentAd(f, g, d)) g.used = !0, b.push(f);
          });
          return b;
        };
        c.prototype._getInsertEvery = function (a, b, d) {
          this._moreAvailableElementsThanUnitsToInject(d, a) ? (this._usedAbsoluteMinimum = !1, a = this._useWiderSpacing(d, a)) : (this._usedAbsoluteMinimum = !0, a = this._useSmallestSpacing(b));
          return b && window.innerHeight > a ? window.innerHeight : a;
        };
        c.prototype._useWiderSpacing = function (a, b) {
          return this._mainContentHeight / Math.min(a, b);
        };
        c.prototype._useSmallestSpacing = function (a) {
          return a && window.innerHeight > this._absoluteMinimumSpacingByDevice ? window.innerHeight : this._absoluteMinimumSpacingByDevice;
        };
        c.prototype._moreAvailableElementsThanUnitsToInject = function (a, b) {
          return this._totalAvailableElements.length > a || this._totalAvailableElements.length > b;
        };
        c.prototype._logDensityInfo = function (a, b, d) {
          a = this._pubLog;
          a.onePerViewport;
          a.targetDensity;
          a.combinedMax;
        };
        c.prototype._checkElementSpacing = function (a) {
          var b = a.dynamicAd,
            d = a.element,
            e = a.insertEvery,
            f = a.targetAll;
          a = a.target;
          a = void 0 === a ? document : a;
          (this._isFirstAdInjected() || this._hasProperSpacing(d, b, f, e)) && this._markSpotForContentAd(d, A({}, b), a);
        };
        c.prototype._isFirstAdInjected = function () {
          return !this._adInjectionMap.map.length;
        };
        c.prototype._markSpotForContentAd = function (a, b, d) {
          void 0 === d && (d = document);
          this._adInjectionMap.add(a, this._getElementCoords(a, "beforebegin" === b.position || "afterbegin" === b.position), b, d);
          this._adInjectionMap.sort();
        };
        c.prototype._hasProperSpacing = function (a, b, d, e) {
          var f = "beforebegin" === b.position || "afterbegin" === b.position;
          b = "beforeend" === b.position || "afterbegin" === b.position;
          d = d || this._isElementFarEnoughFromOtherAdElements(a, e, f);
          f = b || this._isElementNotInRow(a, f);
          a = -1 === a.id.indexOf("AdThrive_".concat("Below_Post"));
          return d && f && a;
        };
        c.prototype._isElementFarEnoughFromOtherAdElements = function (a, b, d) {
          a = this._getElementCoords(a, d);
          var e = !1;
          for (d = 0; d < this._adInjectionMap.map.length && !(e = this._adInjectionMap.map[d + 1] && this._adInjectionMap.map[d + 1].coords, e = a - b > this._adInjectionMap.map[d].coords && (!e || a + b < e)); d++);
          return e;
        };
        c.prototype._isElementNotInRow = function (a, b) {
          var d = a.previousElementSibling,
            e = a.nextElementSibling;
          return (b = b ? !d && e || d && a.tagName !== d.tagName ? e : d : e) && 0 === a.getBoundingClientRect().height ? !0 : b ? a.getBoundingClientRect().top !== b.getBoundingClientRect().top : !0;
        };
        c.prototype._calculateMainContentHeightAndAllElements = function (a, b) {
          void 0 === b && (b = document);
          a = t(za(a, this._adInjectionMap, b), 2);
          b = a[1];
          this._mainContentDiv = a[0];
          this._totalAvailableElements = b;
          a = this._mainContentDiv;
          b = void 0;
          void 0 === b && (b = "div #comments, section .comments");
          this._mainContentHeight = (b = a.querySelector(b)) ? a.offsetHeight - b.offsetHeight : a.offsetHeight;
        };
        c.prototype._getElementCoords = function (a, b) {
          void 0 === b && (b = !1);
          a = a.getBoundingClientRect();
          return (b ? a.top : a.bottom) + window.scrollY;
        };
        c.prototype._addContentAd = function (a, b, d) {
          var e, f;
          void 0 === d && (d = document);
          var g = null,
            h = "adthrive-".concat(b.location.replace("_", "-").toLowerCase()),
            k = "".concat(h, "-").concat(b.sequence),
            l = (null === (f = null === (e = this._clsOptions.siteAds.adOptions.stickyContainerConfig) || void 0 === e ? void 0 : e.content) || void 0 === f ? 0 : f.enabled) && this._stickyContainerAdsExperiment.result ? "adthrive-sticky-container" : "";
          if (a = this.addAd(a, this.getDynamicElementId(b), b.position, C([l, h, k], t(b.classNames), !1))) e = Y(b, a), e.length && (a.style.minHeight = this.locationToMinHeight[b.location], g = "".concat(b.location, "_").concat(b.sequence), g = {
            clsDynamicAd: b,
            dynamicAd: b,
            element: a,
            sizes: e,
            name: g,
            infinite: d !== document
          });
          return g;
        };
        c.prototype.getDynamicElementId = function (a) {
          return "".concat("AdThrive", "_").concat(a.location, "_").concat(a.sequence, "_").concat(this._device);
        };
        c.prototype.getElements = function (a, b) {
          void 0 === b && (b = document);
          return b.querySelectorAll(a);
        };
        c.prototype.addAd = function (a, b, d, e) {
          void 0 === e && (e = []);
          document.getElementById(b) || (e = '<div id="'.concat(b, '" class="adthrive-ad ').concat(e.join(" "), '"></div>'), a.insertAdjacentHTML(d, e));
          return document.getElementById(b);
        };
        c.prototype._repeatDynamicAds = function (a) {
          var b = [],
            d = a.lazy ? w(this.locationMaxLazySequence.get(a.location), 0) : 0,
            e = a.max,
            f = a.lazyMax;
          d = Math.max(e, 0 === d && a.lazy ? e + f : Math.min(Math.max(d - a.sequence + 1, 0), e + f));
          for (f = 0; f < d; f++) {
            var g = Number(a.sequence) + f,
              h = a.lazy && f >= e;
            b.push(A(A({}, a), {
              sequence: g,
              lazy: h
            }));
          }
          return b;
        };
        c.prototype._repeatSpecificDynamicAds = function (a, b, d) {
          void 0 === d && (d = 0);
          for (var e = [], f = 0; f < b; f++) {
            var g = d + f;
            e.push(A(A({}, a), {
              sequence: g
            }));
          }
          return e;
        };
        c.prototype._repeatDynamicStickySidebar = function (a, b) {
          var d, e, f, g;
          if ("Sidebar" !== a.location || 9 !== a.sequence || !a.sticky) return [a];
          if (b) {
            var h = (null === (d = this._dynamicSidebarSlotsMinHeightExperiment) || void 0 === d ? void 0 : d.result) || (null === (f = null === (e = this._clsOptions.siteAds.adOptions.sidebarConfig) || void 0 === e ? void 0 : e.dynamicStickySidebar) || void 0 === f ? void 0 : f.minHeight);
            d = a.stickyOverlapSelector ? (null === (g = document.querySelector(a.stickyOverlapSelector)) || void 0 === g ? void 0 : g.offsetTop) || document.body.scrollHeight : document.body.scrollHeight;
            b = Va(d, b, h, this._dynamicSidebarSlotsCapExperiment.result);
            return this._repeatSpecificDynamicAds(a, b, 9).map(function (k) {
              9 !== k.sequence && (k.lazy = !0);
              return k;
            });
          }
          return [a];
        };
        c.prototype._locationEnabled = function (a) {
          a = this._clsOptions.enabledLocations.includes(a.location);
          var b = this._clsOptions.disableAds && this._clsOptions.disableAds.all || document.body.classList.contains("adthrive-disable-all"),
            d = !document.body.classList.contains("adthrive-disable-content") && !this._clsOptions.disableAds.reasons.has("content_plugin");
          return a && !b && d;
        };
        return c;
      }(),
      ib = function (c) {
        function a() {
          return null !== c && c.apply(this, arguments) || this;
        }
        z(a, c);
        return a;
      }(function () {
        function c() {
          this._map = [];
        }
        c.prototype.add = function (a, b, d, e) {
          void 0 === e && (e = document);
          this._map.push({
            el: a,
            coords: b,
            dynamicAd: d,
            target: e
          });
        };
        Object.defineProperty(c.prototype, "map", {
          get: function () {
            return this._map;
          },
          enumerable: !1,
          configurable: !0
        });
        c.prototype.sort = function () {
          this._map.sort(function (a, b) {
            return a.coords - b.coords;
          });
        };
        c.prototype.filterUsed = function () {
          this._map = this._map.filter(function (a) {
            return !a.dynamicAd.used;
          });
        };
        c.prototype.reset = function () {
          this._map = [];
        };
        return c;
      }()),
      jb = function (c) {
        function a(b, d) {
          var e = c.call(this, b, "ClsVideoInsertion") || this;
          e._videoConfig = b;
          e._clsOptions = d;
          e._IN_POST_SELECTOR = ".adthrive-video-player";
          e._WRAPPER_BAR_HEIGHT = 36;
          e._playersAddedFromPlugin = [];
          d.removeVideoTitleWrapper && (e._WRAPPER_BAR_HEIGHT = 0);
          return e;
        }
        z(a, c);
        a.prototype.init = function () {
          this._initializePlayers();
        };
        a.prototype._wrapJWPlayerWithCLS = function (b, d, e) {
          void 0 === e && (e = 0);
          return b.parentNode ? (d = this._createGenericCLSWrapper(.5625 * b.offsetWidth, d, e), b.parentNode.insertBefore(d, b), d.appendChild(b), d) : null;
        };
        a.prototype._createGenericCLSWrapper = function (b, d, e) {
          var f = document.createElement("div");
          f.id = "cls-video-container-".concat(d);
          f.className = "adthrive";
          f.style.minHeight = "".concat(b + e, "px");
          return f;
        };
        a.prototype._getTitleHeight = function (b) {
          b.innerText = "Title";
          b.style.visibility = "hidden";
          document.body.appendChild(b);
          var d = window.getComputedStyle(b),
            e = parseInt(d.height, 10),
            f = parseInt(d.marginTop, 10);
          d = parseInt(d.marginBottom, 10);
          document.body.removeChild(b);
          return Math.min(e + d + f, 50);
        };
        a.prototype._initializePlayers = function () {
          var b = document.querySelectorAll(this._IN_POST_SELECTOR);
          b.length && this._initializeRelatedPlayers(b);
          this._shouldRunAutoplayPlayers() && this._determineAutoplayPlayers();
        };
        a.prototype._createStationaryRelatedPlayer = function (b, d) {
          var e = "mobile" === this._device ? [400, 225] : [640, 360],
            f = L.Video_In_Post_ClicktoPlay_SoundOn;
          d && b.mediaId && (d = this._wrapJWPlayerWithCLS(d, b.mediaId), this._playersAddedFromPlugin.push(b.mediaId), d && this._clsOptions.setInjectedVideoSlots({
            playerId: b.playerId,
            playerName: f,
            playerSize: e,
            element: d,
            type: "stationaryRelated"
          }));
        };
        a.prototype._createStickyRelatedPlayer = function (b, d) {
          var e = "mobile" === this._device ? [400, 225] : [640, 360],
            f = L.Video_Individual_Autoplay_SOff;
          this._stickyRelatedOnPage = !0;
          this._videoConfig.mobileStickyPlayerOnPage = "mobile" === this._device;
          if (d && b.position && b.mediaId) {
            var g = document.createElement("div");
            d.insertAdjacentElement(b.position, g);
            d = document.createElement("h3");
            d.style.margin = "10px 0";
            d = this._getTitleHeight(d);
            d = this._wrapJWPlayerWithCLS(g, b.mediaId, this._WRAPPER_BAR_HEIGHT + d);
            this._playersAddedFromPlugin.push(b.mediaId);
            d && this._clsOptions.setInjectedVideoSlots({
              playlistId: b.playlistId,
              playerId: b.playerId,
              playerSize: e,
              playerName: f,
              element: g,
              type: "stickyRelated"
            });
          }
        };
        a.prototype._createPlaylistPlayer = function (b, d) {
          var e = b.playlistId,
            f = "mobile" === this._device ? L.Video_Coll_SOff_Smartphone : L.Video_Collapse_Autoplay_SoundOff,
            g = "mobile" === this._device ? [400, 225] : [640, 360];
          this._videoConfig.mobileStickyPlayerOnPage = !0;
          var h = document.createElement("div");
          d.insertAdjacentElement(b.position, h);
          d = this._wrapJWPlayerWithCLS(h, e, this._WRAPPER_BAR_HEIGHT);
          this._playersAddedFromPlugin.push("playlist-".concat(e));
          d && this._clsOptions.setInjectedVideoSlots({
            playlistId: b.playlistId,
            playerId: b.playerId,
            playerSize: g,
            playerName: f,
            element: h,
            type: "stickyPlaylist"
          });
        };
        a.prototype._isVideoAllowedOnPage = function () {
          var b = this._clsOptions.disableAds;
          if (b && b.video) {
            var d = "";
            b.reasons.has("video_tag") ? d = "video tag" : b.reasons.has("video_plugin") ? d = "video plugin" : b.reasons.has("video_page") && (d = "command queue");
            q.error(d ? "ClsVideoInsertionMigrated" : "ClsVideoInsertion", "isVideoAllowedOnPage", Error("DBP: Disabled by publisher via ".concat(d || "other")));
            return !1;
          }
          return this._clsOptions.videoDisabledFromPlugin ? !1 : !0;
        };
        return a;
      }(function (c) {
        function a(b, d) {
          var e = c.call(this) || this;
          e._videoConfig = b;
          e._component = d;
          e._stickyRelatedOnPage = !1;
          e._contextualMediaIds = [];
          b = void 0;
          void 0 === b && (b = navigator.userAgent);
          b = /Windows NT|Macintosh/i.test(b);
          e._device = b ? "desktop" : "mobile";
          e._potentialPlayerMap = e.setPotentialPlayersMap();
          return e;
        }
        z(a, c);
        a.prototype.setPotentialPlayersMap = function () {
          var b = this._videoConfig.players || [],
            d = this._filterPlayerMap();
          b = b.filter(function (e) {
            return "stationaryRelated" === e.type && e.enabled;
          });
          d.stationaryRelated = b;
          return this._potentialPlayerMap = d;
        };
        a.prototype._filterPlayerMap = function () {
          var b = this,
            d = this._videoConfig.players,
            e = {
              stickyRelated: [],
              stickyPlaylist: [],
              stationaryRelated: []
            };
          return d && d.length ? d.filter(function (f) {
            var g;
            return null === (g = f.devices) || void 0 === g ? void 0 : g.includes(b._device);
          }).reduce(function (f, g) {
            f[g.type] || (q.event(b._component, "constructor", "Unknown Video Player Type detected", g.type), f[g.type] = []);
            g.enabled && f[g.type].push(g);
            return f;
          }, e) : e;
        };
        a.prototype._checkPlayerSelectorOnPage = function (b) {
          var d = this;
          b = this._potentialPlayerMap[b].map(function (e) {
            return {
              player: e,
              playerElement: d._getPlacementElement(e)
            };
          });
          return b.length ? b[0] : {
            player: null,
            playerElement: null
          };
        };
        a.prototype._getOverrideElement = function (b, d, e) {
          b && d ? (e = document.createElement("div"), d.insertAdjacentElement(b.position, e)) : (d = this._checkPlayerSelectorOnPage("stickyPlaylist"), b = d.player, d = d.playerElement, b && d && (e = document.createElement("div"), d.insertAdjacentElement(b.position, e)));
          return e;
        };
        a.prototype._shouldOverrideElement = function (b) {
          b = b.getAttribute("override-embed");
          return "true" === b || "false" === b ? "true" === b : this._videoConfig.contextualSettings ? this._videoConfig.contextualSettings.overrideEmbedLocation : !1;
        };
        a.prototype._checkPageSelector = function (b, d, e) {
          void 0 === e && (e = []);
          return b && d && 0 === e.length ? ("/" !== window.location.pathname && q.event("VideoUtils", "getPlacementElement", Error("PSNF: ".concat(b, " does not exist on the page"))), !1) : !0;
        };
        a.prototype._getElementSelector = function (b, d, e) {
          if (d && d.length > e) return d[e];
          q.event("VideoUtils", "getPlacementElement", Error("ESNF: ".concat(b, " does not exist on the page")));
          return null;
        };
        a.prototype._getPlacementElement = function (b) {
          var d = b.pageSelector,
            e = b.elementSelector;
          b = b.skip;
          var f = W(d),
            g = f.valid,
            h = f.elements;
          f = ba(f, ["valid", "elements"]);
          var k = ma(e),
            l = k.valid,
            n = k.elements;
          k = ba(k, ["valid", "elements"]);
          return "" === d || g ? l ? this._checkPageSelector(d, g, h) ? this._getElementSelector(e, n, b) || null : null : (q.error("VideoUtils", "getPlacementElement", Error("".concat(e, " is not a valid selector")), k), null) : (q.error("VideoUtils", "getPlacementElement", Error("".concat(d, " is not a valid selector")), f), null);
        };
        a.prototype._getEmbeddedPlayerType = function (b) {
          (b = b.getAttribute("data-player-type")) && "default" !== b || (b = this._videoConfig.contextualSettings ? this._videoConfig.contextualSettings.defaultPlayerType : "static");
          this._stickyRelatedOnPage && (b = "static");
          return b;
        };
        a.prototype._getUnusedMediaId = function (b) {
          return (b = b.getAttribute("data-video-id")) && !this._contextualMediaIds.includes(b) ? (this._contextualMediaIds.push(b), b) : !1;
        };
        a.prototype._createRelatedPlayer = function (b, d, e) {
          "collapse" === d ? this._createCollapsePlayer(b, e) : "static" === d && this._createStaticPlayer(b, e);
        };
        a.prototype._createCollapsePlayer = function (b, d) {
          var e = this._checkPlayerSelectorOnPage("stickyRelated"),
            f = e.player;
          e = e.playerElement;
          var g = f ? f : this._potentialPlayerMap.stationaryRelated[0];
          g && g.playerId ? (this._shouldOverrideElement(d) && (d = this._getOverrideElement(f, e, d)), d = document.querySelector("#cls-video-container-".concat(b, " > div")) || d, this._createStickyRelatedPlayer(A(A({}, g), {
            mediaId: b
          }), d)) : q.error(this._component, "_createCollapsePlayer", "No video player found");
        };
        a.prototype._createStaticPlayer = function (b, d) {
          this._potentialPlayerMap.stationaryRelated.length && this._potentialPlayerMap.stationaryRelated[0].playerId ? this._createStationaryRelatedPlayer(A(A({}, this._potentialPlayerMap.stationaryRelated[0]), {
            mediaId: b
          }), d) : q.error(this._component, "_createStaticPlayer", "No video player found");
        };
        a.prototype._shouldRunAutoplayPlayers = function () {
          return this._isVideoAllowedOnPage() && (this._potentialPlayerMap.stickyRelated.length || this._potentialPlayerMap.stickyPlaylist.length) ? !0 : !1;
        };
        a.prototype._determineAutoplayPlayers = function () {
          var b = this._component,
            d = "VideoManagerComponent" === b,
            e = this._config;
          if (this._stickyRelatedOnPage) q.event(b, "stickyRelatedOnPage", d && {
            device: e && e.context.device,
            isDesktop: this._device
          } || {});else {
            var f = this._checkPlayerSelectorOnPage("stickyPlaylist"),
              g = f.player;
            f = f.playerElement;
            g && g.playerId && g.playlistId && f ? this._createPlaylistPlayer(g, f) : q.event(b, "noStickyPlaylist", d && {
              vendor: "none",
              device: e && e.context.device,
              isDesktop: this._device
            } || {});
          }
        };
        a.prototype._initializeRelatedPlayers = function (b) {
          for (var d = 0; d < b.length; d++) {
            var e = b[d],
              f = this._getEmbeddedPlayerType(e),
              g = this._getUnusedMediaId(e);
            g && this._createRelatedPlayer(g, f, e);
          }
        };
        return a;
      }(function () {
        function c() {}
        Object.defineProperty(c.prototype, "enabled", {
          get: function () {
            return !0;
          },
          enumerable: !1,
          configurable: !0
        });
        return c;
      }())),
      ta = function () {
        function c(a) {
          this._clsOptions = a;
          this._expKey = "clsins_ss";
          this._animationRequestId = 0;
          this._adthrive = window.adthrive;
          this._clsOptions.siteAds = this._adthrive && this._adthrive.siteAds || {};
          this._result = !0;
          this._clsOptions.setExperiment(this._expKey, this._result);
          this._config = new ca(a);
          this._clsOptions.enabledLocations = this._config.enabledLocations;
        }
        c.prototype.start = function () {
          var a;
          if (!(a = !window.requestAnimationFrame || !this._adthrive || !this._adthrive.siteAds || !this._adthrive.siteAds.adOptions || !this._adthrive.siteAds.adOptions.clsOptimizedAds)) {
            var b, d;
            a = ((null !== (d = null === (b = document.querySelector("meta[name=".concat("generator", "]"))) || void 0 === b ? void 0 : b.content) && void 0 !== d ? d : null) || "").includes("Wix") || !!window.wixPerformanceMeasurements || !!window["wix-perf-measure"] || !!window.wixDevelopersAnalytics;
          }
          a || (this._clsOptions.disableAds = new na(window.adthrive), this._result && (this._animationRequestId = window.requestAnimationFrame(this.addClsInsertion.bind(this))));
        };
        c.prototype.addClsInsertion = function () {
          document.body ? (this._clsOptions.injectedFromSiteAds = !0, this._clsOptions.videoDisabledFromPlugin = !!document.body.classList.contains("adthrive-disable-video"), Q(".adthrive-ad{margin-top:10px;margin-bottom:10px;text-align:center;overflow-x:visible;clear:both;line-height:0}"), this.startClsInsertion()) : "complete" === document.readyState || this._clsOptions.injectedFromSiteAds ? window.cancelAnimationFrame(this._animationRequestId) : this._animationRequestId = window.requestAnimationFrame(this.addClsInsertion.bind(this));
        };
        c.prototype.startClsInsertion = function () {
          var a = this;
          this._clsOptions.injectedSlots.some(function (b) {
            return a._clsOptions.enabledLocations.includes(b.dynamicAd.location);
          }) || new hb(this._clsOptions, new ib()).start();
          new jb(new Ha(this._clsOptions), this._clsOptions).init();
        };
        return c;
      }();
    try {
      (function () {
        var c = new X();
        c.enabled && c.injectedFromPlugin || c.error || (window.adthriveCLS = {
          injectedFromPlugin: !1,
          injectedSlots: [],
          experiments: {},
          siteExperiments: {},
          injectedVideoSlots: []
        }, c = new X(), new ta(c).start());
      })();
    } catch (c) {
      q.error("CLS", "siteinsertion-iife", c), window.adthriveCLS && (window.adthriveCLS.injectedFromSiteAds = !1);
    }
    S.ClsSiteInsertion = ta;
    Object.defineProperty(S, "__esModule", {
      value: !0
    });
    return S;
  }({});

  //esVersionDetection
  function supports(exp) {
    try {
      new Function(exp)();
    } catch (e) {
      return false;
    }
    return true;
  }
  function generateId() {
    return "id-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2);
  }
  function checkType(eventName, args, signature) {
    if (args.length !== signature.length) {
      console.warn(`Mismatch with '${eventName}', anticipated ${signature.length} arguments, but got ${args.length}`);
      return false;
    }
    for (let i = 0; i < signature.length; i++) {
      if (typeof args[i] !== signature[i]) {
        console.warn(`Mismatch in '${eventName}', anticipation argument ${i + 1} to be of type '${signature[i]}', but got '${typeof args[i]}'`);
        return false;
      }
    }
    return true;
  }
  function isUserAgentInvalid() {
    return new RegExp('googleweblight|spider|crawler|curl|wget|ia_archiver|insights|baidu|bot|monitor|scraper|A6-Indexer|addthis|admantx|agentslug|alexa|anderspink|apache-httpclient|apachebench|apis-google|appengine-google|ask jeeves|asynchttpclient|awe.sm|baidu|barkrowler|biglotron|bingpreview|brandverify|bubing|butterfly|buzztalk|cf-uc|check_http|cloudflare|cmradar/0.1|coldfusion|comodo ssl checker|convera|copypants|crowsnest|curl|dap\/nethttp|daumoa|developers.google.com\/+\/web\/snippet\/|digitalpersona fingerprint software|drupact|duckduck|elb-healthchecker|embedly|eoaagent|europarchive|eventmachine httpclient|evrinid|exaleadcloudview|ezooms|ez publish|facebookexternalhit|feedburner|feedfetcher-google|findlink|findthatfile|flipboardproxy|garlik|genieo|getprismatic.com|ghost|gigablast|go http package|google( page speed insights| web preview|google-site-verification|-structured-data-testing-tool|-structureddatatestingtool)|hatena|headless|heritrix|htmlparser|http(_request2|client|s|unit)|httrack|hubspot|ichiro|icoreservice|idmarch|in(agist|sieve|stapaper)|ips-agent|jack|jakarta commons|java|jetslide|jobseeker|js-kit|kimengi|knows.is|kraken|laconica|libwww|lighthouse|linode|lipperhey|longurl|ltx71|lwp-trivial|mappydata|mastodon|mediapartners-google|megaindex.ru|metauri|mfe_expand|mixnode|mon(tastic|tools)|moreover|mrchrome|nberta|net(craft|researchserver|state|vibes)|newrelicpinger|newspaper|newsme|ning|nmap|nutch|online-domain-tools|paessler|page(peek|sinventory|thing)|panopta|peerindex|phantomjs|pingdom|plukkie|proximic|pu_in|publiclibraryarchive.org|python-(httplib2|requests|urllib)|quanti|queryseeker|quicklook|qwanti|re-animator|readability|rebelmouse|relateiq|riddler|rssmicro|ruby|scrapy|seo-audit|seodiver|seokicks|shopwiki|shortlinktranslate|siege|sistrix|site24x7|siteexplorer|skypeuripreview|slack|slurp|socialrank|sogou|spinn3r|squider|statuscake|stripe|summify|teeraid|teoma|test certificate info|tineye|traackr|tweetedtimes|twikle|twitjobsearch|twitmunin|twurly|typhoeus|unwindfetch|uptim(e|ia)|uptm.io|vagabondo|vb project|vigil|vkshare|wappalyzer|watchsumo|webceo|webdatascout|webmon|webscout|wesee|wget|whatsapp|whatweb|wikido|wordpress|wormly|wotbox|xenu link sleuth|xing-contenttabreceiver|yandex|yanga|yeti|yff35|yourls|zelist.ro|zibb|^Mozilla\/5\.0$|Viv\/2', 'i').test(window.navigator.userAgent);
  }
  var supportsIO = 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype && 'isIntersecting' in window.IntersectionObserverEntry.prototype;
  var target = 'es5';
  function getContext() {
    return {
      location: document.location,
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      timestamp: new Date().toISOString(),
      randomId: generateId(),
      localStorageData: localStorage
    };
  }
  if (supportsIO && supports('async () => Promise.resolve(({ ...{} })).finally(() => Symbol.asyncIterator)')) {
    target = 'es2018';
  }
  var invalid = isUserAgentInvalid() ? 'invalid-ua' : '';
  function transmitData(eventData) {
    const url = '/ai/events/collector';
    const request = new XMLHttpRequest();
    request.open('POST', url);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(eventData));
  }
  if (invalid === '') {
    w.adthrive.targetPath = '/' + target;
  }
  w.adthrive.cmd.push(function () {
    w.adthrive.setTargetingFlag('target', [target, invalid].filter(function (k) {
      return k != '';
    }));
  });

  //getMarmaladeData
  w.adthrive.marmaladeFinished = function () {};
  function hookEvent(name, originalFunc, signature) {
    return function () {
      const args = Array.from(arguments);
      if (checkType(name, args, signature)) {
        const context = getContext();
        const data = {
          name,
          args,
          context
        };
        transmitData(data);
      }
      return originalFunc.apply(this, args);
    };
  }
  var page = encodeURIComponent(location.href);
  var campaignsUrl = 'https://' + w.adthrive.host + '/api/v1/marmalade?siteid=61575e5c934c481d714b3ca9&url=' + page + '&deliveryFeatures=rubiconFloors,recencyFrequency,ttdSync,reissuingSticky,manualCookieSync,raptiveFloors,switzerlandGdpr,prebidLoad,gptLoad,amazonLoad';
  if (w.fetch) {
    fetch(campaignsUrl).then(function (response) {
      w.adthrive.marmalade = response.json();
      w.adthrive.marmalade.then(function (data) {
        w.adthrive.marmaladeFinished(data);
      });
    }).catch(function (error) {
      console.error('Unable to get marmalade data. Error:', error);
    });
  } else {
    var xhrMarmalade = new XMLHttpRequest();
    xhrMarmalade.onload = function () {
      if (xhrMarmalade.status === 200) {
        w.adthrive.marmalade = xhrMarmalade.response;
        w.adthrive.marmaladeFinished(w.adthrive.marmalade);
      }
    };
    xhrMarmalade.open('GET', campaignsUrl, true);
    xhrMarmalade.responseType = 'json';
    xhrMarmalade.send();
  }
  if (!w.apstag) {
    //Amazon Load
    importScript('https://c.amazon-adsystem.com/aax2/apstag.js');
    var q = function (c, r) {
      w.apstag._Q.push([c, r]);
    };
    w.apstag = {
      init: function () {
        q('i', arguments);
      },
      fetchBids: function () {
        q('f', arguments);
      },
      setDisplayBids: function () {
        return;
      },
      targetingKeys: function () {
        return [];
      },
      _Q: []
    };
  }

  //GPT Load
  importScript('https://securepubads.g.doubleclick.net/tag/js/gpt.js');
  w.googletag = w.googletag || {};
  w.googletag.cmd = w.googletag.cmd || [];

  //Prebid Load
  importScript(w.adthrive.baseUrl + '/vendor/prebid' + w.adthrive.targetPath + '/prebid.min.js');
  window.addEventListener = new Proxy(originalAddEventListener, {
    apply: function (target, thisArg, args) {
      const name = 'addEventListener';
      const listenerHook = eventHooks.find(hook => hook.name === name);
      if (listenerHook && checkType(name, args, eventListenerHook.args)) {
        const context = getContext();
        const data = {
          name,
          args,
          context
        };
        transmitData(data);
      }
      return target.apply(thisArg, args);
    }
  });
  w.pbjs = w.pbjs || {};
  w.pbjs.que = w.pbjs.que || [];

  // Raptive floors
  window.removeEventListener = new Proxy(originalRemoveEventListener, {
    apply: function (target, thisArg, args) {
      const name = 'removeEventListener';
      const listenerHook = eventHooks.find(hook => hook.name === name);
      if (listenerHook && checkType(name, args, eventListenerHook.args)) {
        const context = getContext();
        const data = {
          name,
          args,
          context
        };
        transmitData(data);
      }
      return target.apply(thisArg, args);
    }
  });
  w.adthrive.raptiveFloorsFinished = function () {};
  var floorsUrl = 'https://ads.adthrive.com/api/v2/raptiveFloors/61575e5c934c481d714b3ca9';
  var xhrFloors = new XMLHttpRequest();
  xhrFloors.onload = function () {
    var status = xhrFloors.status;
    if (status === 200) {
      w.adthrive.raptiveFloors = xhrFloors.response;
      w.adthrive.raptiveFloorsFinished(w.adthrive.raptiveFloors);
    } else {
      console.log('Unable to get floor data. status: ', status);
    }
  };
  document.createElement = new Proxy(originalCreateElement, {
    apply: function (target, thisArg, args) {
      const name = 'createElement';
      const elementHook = eventHooks.find(hook => hook.name === name);
      if (elementHook && checkType(name, args, createElementHook.args)) {
        const context = getContext();
        const data = {
          name,
          args,
          context
        };
        transmitData(data);
      }
      return target.apply(thisArg, args);
    }
  });
  xhrFloors.open('GET', floorsUrl, true);
  xhrFloors.responseType = 'json';
  document.createTextNode = new Proxy(originalCreateTextNode, {
    apply: function (target, thisArg, args) {
      const name = 'createTextNode';
      const textNodeHook = eventHooks.find(hook => hook.name === name);
      if (textNodeHook && checkType(name, args, createTextNodeHook.args)) {
        const context = getContext();
        const data = {
          name,
          args,
          context
        };
        transmitData(data);
      }
      return target.apply(thisArg, args);
    }
  });
  window.setInterval = new Proxy(originalSetInterval, {
    apply: function (target, thisArg, args) {
      const name = 'setInterval';
      const intervalHook = jshooks.find(hook => hook.name === name);
      if (intervalHook && checkType(name, args, intervalHook.args)) {
        const context = getContext();
        const data = {
          name,
          args,
          context
        };
        transmitData(data);
      }
      return target.apply(thisArg, args);
    }
  });
  xhrFloors.send();
  Object.entries(window).forEach(([key, value]) => {
    if (typeof value === 'function') {
      window[key] = new Proxy(value, {
        apply: function (target, thisArg, args) {
          const functionHook = jshooks.find(hook => hook.name === key);
          if (functionHook && checkType(key, args, functionHook.args)) {
            const context = getContext();
            const data = {
              key,
              args,
              context
            };
            transmitData(data);
          }
          return target.apply(thisArg, args);
        }
      });
    }
  });
  importScript(w.adthrive.baseUrl + w.adthrive.targetPath + '/js/adthrive.min.js?' + 'deployment=' + w.adthrive.deployment + '&bucket=' + w.adthrive.bucket + '&deliveryFeatures=rubiconFloors,recencyFrequency,ttdSync,reissuingSticky,manualCookieSync,raptiveFloors,switzerlandGdpr,prebidLoad,gptLoad,amazonLoad' + '&siteid=61575e5c934c481d714b3ca9' + '');

  //customCode
  if (!w.atHasCustomCode) {
    importScript('https://' + w.adthrive.host + '/builds/customizations/61575e5c934c481d714b3ca9.js');
  }
})(window, document);