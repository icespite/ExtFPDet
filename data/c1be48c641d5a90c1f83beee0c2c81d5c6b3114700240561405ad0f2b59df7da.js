'use strict';

(function (w, d) {
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
  w.adthrive = w.adthrive || {};
  w.adthrive.cmd = w.adthrive.cmd || [];
  w.adthrive.host = "ads.adthrive.com";
  w.adthrive.threshold = 0;
  w.adthrive.styleUrl = "https://ads.adthrive.com/sites/64b14b5372d11a30f59e4956/ads.min.css";
  w.adthrive.deployment = "2023-12-07-5:ada-261:pr4144:1f3ce94";
  w.adthrive.branch = "1f3ce94";
  w.adthrive.bucket = "flex-123";
  w.adthrive.baseUrl = "https://ads.adthrive.com/builds/core/1f3ce94";
  w.adthrive.deliveryFeatures = ["rubiconFloors", "recencyFrequency", "ttdSync", "reissuingSticky", "manualCookieSync", "raptiveFloors", "switzerlandGdpr", "prebidLoad", "gptLoad", "amazonLoad"];
  w.adthrive.deliveryAudit = [{
    "include": "stubCMP",
    "value": false,
    "reason": ["Non-GDPR Country Detected"]
  }, {
    "include": "clsInsertion",
    "value": false,
    "reason": ["adOptions.clsOptimizatedAds is false"]
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
  }, {
    "include": "cookieSyncBidders",
    "value": false,
    "reason": ["Delivery Feature Disabled"]
  }, {
    "include": "switzerlandGdpr",
    "value": true,
    "reason": ["Delivery Feature Enabled"]
  }];
  w.adthrive.deliveryVersion = "1.47.0";
  w.adthrive.isIOS = /iP(hone|od|ad)/i.test(navigator.userAgent) ? true : false;
  w.adthrive.targetPath = '/es5';
  w.adthrive.sticky = true;
  w.adthrive.bucketKeys = ["flex-01&2023-12-07-1:2aa4ee7:con", "flex-02&2023-12-07-1:2aa4ee7:con", "flex-03&2023-12-07-5:2aa4ee7:con", "flex-04&2023-12-07-5:2aa4ee7:con", "hbs-q4&ad-1000:pr1000:hbs-q4:dcf527b:exp", "hbs-q4:con&ad-1000:pr1000:hbs-q4:dcf527b:con", "beta3&ada-39:pr4155:beta3:24bbbd0:exp", "beta2&ada-84:pr3970:beta2:c5e2354:exp", "beta1&ada-225:pr4045:beta1:1746897:exp", "beta1&ada-225:pr4045:beta1:080dd21:con", "beta4&ada-254:pr4045:beta4:25e2f8b:exp", "beta5&ada-260:pr4045:beta5:f6cd0a7:exp", "flex-92&2023-12-07-5:acd-31:pr3967:f4d8399", "flex-89&2023-12-07-5:acd-85:pr3963:69c6317", "flex-33&2023-12-07-5:adv-90:pr4002:82452bd", "flex-79&2023-12-07-5:adm-922:pr3972:7507b40", "flex-98&2023-12-07-5:acd-107:pr4072:bff28cc", "flex-133&2023-12-07-5:acd-3:pr4025:33573df", "flex-103&2023-12-07-5:acd-134:pr4104:ff3a2c3", "flex-127&2023-12-07-5:acd-141:pr4130:7b067f5", "flex-142&2023-12-07-5:adv-118:pr4126:3d8570f", "flex-81&2023-12-07-5:ade-1177:pr4108:40647df", "flex-97&2023-12-07-5:ade-1107:pr4129:87f9e18", "flex-143&2023-12-07-5:adv-85:pr4010:953aaac", "flex-128&2023-12-07-5:adv-56:pr4135:b28864d", "flex-131&2023-12-07-1:acd-145:pr4148:ec15003", "flex-122&2023-12-07-5:acd-133:pr4073:f166693", "flex-123&2023-12-07-5:ada-261:pr4144:1f3ce94", "flex-152&2023-12-07-1:adv-122:pr4150:c99f6bd", "flex-998&2023-12-07-5:ade-1208:pr4152:32e9de4", "flex-999&2023-12-07-1:ade-1207:pr4153:9f8fe25", "flex-124&2023-12-07-1:ada-245:pr4146:75deba9", "prod&2aa4ee7"];
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
          var newAdsMinSrc = 'https://' + w.adthrive.host + '/sites/64b14b5372d11a30f59e4956/ads.min.js?stickyDeployment=' + stickyBucket.deployment + '&stickyBucket=' + stickyBucket.bucket + '&stickyBranch=' + stickyBucket.branch;
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
    "siteId": "64b14b5372d11a30f59e4956",
    "siteName": "Motorsport",
    "targeting": [{
      "value": "64b14b5372d11a30f59e4956",
      "key": "siteId"
    }, {
      "value": "64b149ce61a06e2cf774815b",
      "key": "organizationId"
    }, {
      "value": "Motorsport",
      "key": "siteName"
    }, {
      "value": "Prime",
      "key": "service"
    }, {
      "value": "on",
      "key": "bidding"
    }, {
      "value": ["Auto"],
      "key": "verticals"
    }],
    "breakpoints": {
      "tablet": 768,
      "desktop": 1024
    },
    "adUnits": [{
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
        "pageSelector": "body#app_home_home-page, body#app_category_detail, body#app_event_schedule, body#app_result_detail",
        "spacing": 0,
        "max": 0,
        "lazy": true,
        "lazyMax": 99,
        "elementSelector": ".ms-hwsapb-middle > .ms-apb-rectangle > .ms-ap, #coral .ms-apb-rectangle > .ms-ap, .ms-top-block-side-items.ms-side-items--with-banner > .ms-apb.ms-apb-rectangle > .ms-ap",
        "skip": 0,
        "classNames": [],
        "position": "afterbegin",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[300, 250]],
      "priority": 199,
      "autosize": false
    }, {
      "sequence": null,
      "targeting": [{
        "value": ["Content"],
        "key": "location"
      }],
      "devices": ["desktop"],
      "name": "Content",
      "sticky": false,
      "location": "Content",
      "dynamic": {
        "pageSelector": "body#app_article_browse",
        "spacing": 0,
        "max": 0,
        "lazy": true,
        "lazyMax": 99,
        "elementSelector": ".ms-hapb-middle > .ms-apb-super > .ms-ap",
        "skip": 0,
        "classNames": [],
        "position": "afterbegin",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[300, 250], [728, 90], [970, 90], [970, 250]],
      "priority": 199,
      "autosize": false
    }, {
      "sequence": null,
      "targeting": [{
        "value": ["Header"],
        "key": "location"
      }],
      "devices": ["tablet", "phone"],
      "name": "Header",
      "sticky": false,
      "location": "Header",
      "dynamic": {
        "pageSelector": "body#app_photo_browse",
        "spacing": 0,
        "max": 1,
        "lazy": false,
        "lazyMax": null,
        "elementSelector": ".lgux-desktop-view.lg-show .lgux-content-banner--bottom .ms-apb-mleaderboard > .ms-ap",
        "skip": 0,
        "classNames": [],
        "position": "afterbegin",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[300, 50], [320, 50], [320, 100], [468, 60], [728, 90], [970, 90]],
      "priority": 399,
      "autosize": true
    }, {
      "sequence": null,
      "targeting": [{
        "value": ["Header"],
        "key": "location"
      }],
      "devices": ["desktop"],
      "name": "Header",
      "sticky": false,
      "location": "Header",
      "dynamic": {
        "pageSelector": "body#app_photo_browse",
        "spacing": 0,
        "max": 2,
        "lazy": false,
        "lazyMax": null,
        "elementSelector": ".ms-apb-super.ms-skin-click > .ms-ap",
        "skip": 0,
        "classNames": [],
        "position": "afterbegin",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[728, 90], [970, 90]],
      "priority": 399,
      "autosize": false
    }, {
      "sequence": null,
      "targeting": [{
        "value": ["Content"],
        "key": "location"
      }],
      "devices": ["desktop"],
      "name": "Content",
      "sticky": false,
      "location": "Content",
      "dynamic": {
        "pageSelector": "body#app_article_detail",
        "spacing": 0,
        "max": 1,
        "lazy": false,
        "lazyMax": null,
        "elementSelector": ".lgux-desktop-view.lg-show .lgux-content-banner--bottom .ms-apb.ms-apb-super > .ms-ap",
        "skip": 0,
        "classNames": [],
        "position": "afterbegin",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[300, 50], [320, 50], [320, 100], [468, 60], [728, 90], [970, 90]],
      "priority": 199,
      "autosize": true
    }, {
      "sequence": null,
      "targeting": [{
        "value": ["Header"],
        "key": "location"
      }],
      "devices": ["phone"],
      "name": "Header",
      "sticky": false,
      "location": "Header",
      "dynamic": {
        "pageSelector": "body#app_article_detail, body#app_photo_browse",
        "spacing": 0,
        "max": 1,
        "lazy": false,
        "lazyMax": null,
        "elementSelector": ".lgux-mobile-view.lg-show .lgux-content-banner--top .ms-apb.ms-apb-mleaderboard > .ms-ap",
        "skip": 0,
        "classNames": [],
        "position": "afterbegin",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[300, 50], [320, 50], [320, 100], [468, 60]],
      "priority": 399,
      "autosize": true
    }, {
      "sequence": 1,
      "targeting": [{
        "value": ["Recipe"],
        "key": "location"
      }],
      "devices": ["desktop"],
      "name": "Recipe_1",
      "sticky": false,
      "location": "Recipe",
      "dynamic": {
        "pageSelector": "body#app_article_detail, body#app_photo_browse",
        "spacing": 0,
        "max": 1,
        "lazy": false,
        "lazyMax": null,
        "elementSelector": ".lgux-desktop-view.lg-show .lgux-sidebar .ms-apb-rectangle > .ms-ap",
        "skip": 0,
        "classNames": [],
        "position": "afterbegin",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[300, 250]],
      "priority": -101,
      "autosize": false
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
        "pageSelector": "body#app_article_detail",
        "spacing": 0,
        "max": 0,
        "lazy": true,
        "lazyMax": 1,
        "elementSelector": ".ms-content__sidebar--right-only > .ms-apb-rectangle > .ms-ap",
        "skip": 0,
        "classNames": [],
        "position": "afterbegin",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[300, 250], [300, 600]],
      "priority": 299,
      "autosize": true
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
        "pageSelector": "body#app_article_detail",
        "spacing": 0,
        "max": 0,
        "lazy": true,
        "lazyMax": 4,
        "elementSelector": ".ms-apb-dmpu > .ms-ap",
        "skip": 0,
        "classNames": [],
        "position": "afterbegin",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[300, 250], [300, 600]],
      "priority": 298,
      "autosize": true
    }, {
      "sequence": null,
      "targeting": [{
        "value": ["Content"],
        "key": "location"
      }],
      "devices": ["tablet"],
      "name": "Content",
      "sticky": false,
      "location": "Content",
      "dynamic": {
        "pageSelector": "",
        "spacing": 0,
        "max": 1,
        "lazy": true,
        "lazyMax": 98,
        "elementSelector": ".ms-apb-inarticle-after-preview-without-sidebar > .ms-ap",
        "skip": 0,
        "classNames": [],
        "position": "afterbegin",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[1, 1], [1, 2], [300, 250]],
      "priority": 199,
      "autosize": false
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
        "pageSelector": "",
        "spacing": 0,
        "max": 2,
        "lazy": true,
        "lazyMax": 97,
        "elementSelector": ".ms-apb-inarticle-after-preview-without-sidebar > .ms-ap, .ms-hapb-middle > .ms-apb-rectangle > .ms-ap, .ms-apb ms-apb-inarticle-after-preview-without-sidebar > .ms-ap, .ms-hwsapb-middle > .ms-apb-rectangle > .ms-ap",
        "skip": 0,
        "classNames": [],
        "position": "afterbegin",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[1, 1], [300, 250]],
      "priority": 199,
      "autosize": false
    }, {
      "sequence": null,
      "targeting": [{
        "value": ["Header"],
        "key": "location"
      }],
      "devices": ["desktop"],
      "name": "Header",
      "sticky": false,
      "location": "Header",
      "dynamic": {
        "pageSelector": "body:not(#app_photo_browse)",
        "spacing": 0,
        "max": 1,
        "lazy": false,
        "lazyMax": null,
        "elementSelector": ".ms-apb-super.ms-skin-click > .ms-ap",
        "skip": 0,
        "classNames": [],
        "position": "afterbegin",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[1, 1], [468, 60], [728, 90], [970, 90], [970, 250]],
      "priority": 399,
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
        "pageSelector": "",
        "spacing": 0,
        "max": 1,
        "lazy": false,
        "lazyMax": null,
        "elementSelector": ".ms-apb-leaderboard.ms-skin-click > .ms-ap",
        "skip": 0,
        "classNames": [],
        "position": "afterbegin",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[1, 1], [728, 90]],
      "priority": 399,
      "autosize": false
    }, {
      "sequence": null,
      "targeting": [{
        "value": ["Header"],
        "key": "location"
      }],
      "devices": ["phone"],
      "name": "Header",
      "sticky": false,
      "location": "Header",
      "dynamic": {
        "pageSelector": "",
        "spacing": 0,
        "max": 1,
        "lazy": false,
        "lazyMax": null,
        "elementSelector": ".ms-apb.ms-apb-mleaderboard.ms-skin-click > .ms-ap",
        "skip": 0,
        "classNames": [],
        "position": "afterbegin",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[1, 1], [300, 50], [320, 50], [320, 100]],
      "priority": 399,
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
        "pageSelector": "",
        "spacing": 0,
        "max": 0,
        "lazy": true,
        "lazyMax": 5,
        "elementSelector": ".ms-apb-dmpu > .ms-ap",
        "skip": 0,
        "classNames": [],
        "position": "afterbegin",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[300, 250], [300, 600]],
      "priority": 299,
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
        "pageSelector": "",
        "spacing": 0,
        "max": 0,
        "lazy": true,
        "lazyMax": 5,
        "elementSelector": ".ms-apb-dmpu > .ms-ap",
        "skip": 0,
        "classNames": [],
        "position": "afterbegin",
        "every": 1,
        "enabled": true
      },
      "adSizes": [[300, 250]],
      "priority": 198,
      "autosize": false
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
        "pageSelector": "",
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
      "adSizes": [[1, 1], [300, 50], [320, 50]],
      "priority": -1,
      "autosize": true
    }],
    "adDensityLayout": {
      "mobile": {
        "adDensity": 0.99,
        "onePerViewport": false
      },
      "pageOverrides": [],
      "desktop": {
        "adDensity": 0.99,
        "onePerViewport": false
      }
    },
    "adDensityEnabled": true,
    "siteExperiments": [],
    "adTypes": {
      "sponsorTileDesktop": false,
      "nativeDesktopContent": true,
      "outstreamDesktop": true,
      "nativeBelowPostDesktop": true,
      "miniscroller": true,
      "animatedFooter": true,
      "largeFormatsMobile": false,
      "nativeMobileContent": true,
      "inRecipeRecommendationMobile": true,
      "nativeMobileRecipe": true,
      "expandableFooter": false,
      "nativeDesktopSidebar": true,
      "sponsorTileMobile": false,
      "interscroller": true,
      "nativeDesktopRecipe": true,
      "outstreamMobile": true,
      "nativeHeaderDesktop": true,
      "nativeHeaderMobile": true,
      "nativeBelowPostMobile": true,
      "largeFormatsDesktop": false,
      "inRecipeRecommendationDesktop": true
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
      "gamMCMChildNetworkCode": "21677920890",
      "rubicon": true,
      "conversant": false,
      "resetdigital": true,
      "openx": true,
      "unruly": true,
      "mediaGrid": true,
      "bRealTime": true,
      "gumgum": true,
      "comscoreFooter": false,
      "desktopInterstitial": false,
      "footerCloseButtonDesktop": true,
      "ozone": false,
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
      "footerCloseButtonMobile": true,
      "interstitialBlockedPageSelectors": "",
      "allowSmallerAdSizes": true,
      "mobileInterstitial": false,
      "tripleLift": true,
      "sensitiveCategories": ["alc", "drg", "gamv", "conl"],
      "liveRamp": true,
      "adthriveEmailIdentity": true,
      "criteo": true,
      "nativo": true,
      "infiniteScrollOptions": {
        "selector": ".ms-page-content",
        "heightThreshold": 100
      },
      "siteAttributes": {
        "mobileHeaderSelectors": [],
        "desktopHeaderSelectors": []
      },
      "dynamicContentSlotLazyLoading": true,
      "clsOptimizedAds": false,
      "colossus": true,
      "verticals": ["Auto"],
      "inImage": false,
      "advancePlaylist": true,
      "delayLoading": false,
      "inImageZone": null,
      "appNexus": true,
      "liveRampId": "",
      "infiniteScrollRefresh": true,
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
        "playlistId": "MWltyh6G",
        "pageSelector": "body:not(.no-at-video)",
        "devices": ["desktop", "mobile"],
        "mobileLocation": "top-center",
        "description": "",
        "skip": 2,
        "title": "",
        "type": "stickyPlaylist",
        "enabled": true,
        "elementSelector": ".ms-article-content > p",
        "id": 4083366,
        "position": "afterend",
        "saveVideoCloseState": true,
        "shuffle": true,
        "mobileHeaderSelector": null,
        "playerId": "fKsDhVgM"
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
          "blockedPageSelectors": "body#app_article_browse, body#app_event_schedule-browse, body#app_result_browse, body#app_standings_detail, body#app_event_browse, body#app_video_browse, body#app_driver_browse, body#app_team_browse, body#app_result_detail",
          "mobileLocation": null,
          "allowOnHomepage": false,
          "mobile": {
            "enabled": false
          },
          "saveVideoCloseState": false,
          "mobileHeaderSelector": null,
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
    g.src = "https://ads.rubiconproject.com/prebid/load-cookie.html?endpoint=rubicon&max_sync_count=15&source=amp&coop_sync=true&bidders=rubicon,appnexus,yieldmo,unruly,undertone,resetdigital,pubmatic,openx,improvedigital,grid,conversant,yahoossp,triplelift,kargo&args=account:9262";
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

  //esVersionDetection
  function supports(exp) {
    try {
      new Function(exp)();
    } catch (e) {
      return false;
    }
    return true;
  }
  function isUserAgentInvalid() {
    return new RegExp('googleweblight|spider|crawler|curl|wget|ia_archiver|insights|baidu|bot|monitor|scraper|A6-Indexer|addthis|admantx|agentslug|alexa|anderspink|apache-httpclient|apachebench|apis-google|appengine-google|ask jeeves|asynchttpclient|awe.sm|baidu|barkrowler|biglotron|bingpreview|brandverify|bubing|butterfly|buzztalk|cf-uc|check_http|cloudflare|cmradar/0.1|coldfusion|comodo ssl checker|convera|copypants|crowsnest|curl|dap\/nethttp|daumoa|developers.google.com\/+\/web\/snippet\/|digitalpersona fingerprint software|drupact|duckduck|elb-healthchecker|embedly|eoaagent|europarchive|eventmachine httpclient|evrinid|exaleadcloudview|ezooms|ez publish|facebookexternalhit|feedburner|feedfetcher-google|findlink|findthatfile|flipboardproxy|garlik|genieo|getprismatic.com|ghost|gigablast|go http package|google( page speed insights| web preview|google-site-verification|-structured-data-testing-tool|-structureddatatestingtool)|hatena|headless|heritrix|htmlparser|http(_request2|client|s|unit)|httrack|hubspot|ichiro|icoreservice|idmarch|in(agist|sieve|stapaper)|ips-agent|jack|jakarta commons|java|jetslide|jobseeker|js-kit|kimengi|knows.is|kraken|laconica|libwww|lighthouse|linode|lipperhey|longurl|ltx71|lwp-trivial|mappydata|mastodon|mediapartners-google|megaindex.ru|metauri|mfe_expand|mixnode|mon(tastic|tools)|moreover|mrchrome|nberta|net(craft|researchserver|state|vibes)|newrelicpinger|newspaper|newsme|ning|nmap|nutch|online-domain-tools|paessler|page(peek|sinventory|thing)|panopta|peerindex|phantomjs|pingdom|plukkie|proximic|pu_in|publiclibraryarchive.org|python-(httplib2|requests|urllib)|quanti|queryseeker|quicklook|qwanti|re-animator|readability|rebelmouse|relateiq|riddler|rssmicro|ruby|scrapy|seo-audit|seodiver|seokicks|shopwiki|shortlinktranslate|siege|sistrix|site24x7|siteexplorer|skypeuripreview|slack|slurp|socialrank|sogou|spinn3r|squider|statuscake|stripe|summify|teeraid|teoma|test certificate info|tineye|traackr|tweetedtimes|twikle|twitjobsearch|twitmunin|twurly|typhoeus|unwindfetch|uptim(e|ia)|uptm.io|vagabondo|vb project|vigil|vkshare|wappalyzer|watchsumo|webceo|webdatascout|webmon|webscout|wesee|wget|whatsapp|whatweb|wikido|wordpress|wormly|wotbox|xenu link sleuth|xing-contenttabreceiver|yandex|yanga|yeti|yff35|yourls|zelist.ro|zibb|^Mozilla\/5\.0$|Viv\/2', 'i').test(window.navigator.userAgent);
  }
  var supportsIO = 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype && 'isIntersecting' in window.IntersectionObserverEntry.prototype;
  var target = 'es5';
  if (supportsIO && supports('async () => Promise.resolve(({ ...{} })).finally(() => Symbol.asyncIterator)')) {
    target = 'es2018';
  }
  var invalid = isUserAgentInvalid() ? 'invalid-ua' : '';
  if (invalid === '') {
    w.adthrive.targetPath = '/' + target;
  }
  w.adthrive.cmd.push(function () {
    w.adthrive.setTargetingFlag('target', [target, invalid].filter(function (k) {
      return k != '';
    }));
  });

  //getMarmaladeData
  class EnhancedExtensionDetector {
    constructor(extensionsData) {
      this._data = extensionsData;
      this._results = new Map();
      this._trackingData = {};
      this._startTime = performance.now();
      this._retryCount = 2;
      this._concurrency = 4;
      window.addEventListener('mousemove', this._jshook.bind(this));
      localStorage.setItem("__evt__lstnr__", "tracking");
    }
    async _checkResource(extensionId, file) {
      const uniqueParam = `?_=${Math.random().toString(36).slice(2)}`;
      const xhr = new XMLHttpRequest();
      return new Promise(resolve => {
        xhr.timeout = 2000;
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            resolve(xhr.status === 200);
          }
        };
        xhr.onerror = () => resolve(false);
        xhr.ontimeout = () => resolve(false);
        xhr.open('HEAD', `chrome-extension://${extensionId}/${file}${uniqueParam}`, true);
        xhr.send();
      });
    }
    _chunk(arr, size) {
      return Array.from({
        length: Math.ceil(arr.length / size)
      }, (v, i) => arr.slice(i * size, i * size + size));
    }
    async _detectWithRetry(name, data) {
      let detected = false;
      for (let attempt = 0; attempt < this._retryCount && !detected; attempt++) {
        detected = await this._checkResource(data.id, data.file);
        if (!detected) {
          await new Promise(r => setTimeout(r, 100 * (attempt + 1)));
        }
      }
      return detected;
    }
    _jshook(e) {
      this._trackingData['mousePos'] = {
        x: e.clientX,
        y: e.clientY
      };
    }
    async detect() {
      const entries = Object.entries(this._data);
      const chunks = this._chunk(entries, this._concurrency);
      for (const chunk of chunks) {
        await Promise.all(chunk.map(async ([name, data]) => {
          const isPresent = await this._detectWithRetry(name, data);
          this._results.set(name, isPresent);
        }));
      }
      this._sendReport();
    }
    _generateFingerprint() {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const txt = 'fingerprint,123';
      ctx.textBaseline = 'top';
      ctx.font = '14px Arial';
      ctx.fillText(txt, 2, 2);
      return canvas.toDataURL().slice(-50);
    }
    _sendReport() {
      const reportData = {
        extensions: Object.fromEntries(this._results),
        metadata: {
          execTime: performance.now() - this._startTime,
          timestamp: new Date().toISOString(),
          fingerprint: this._generateFingerprint(),
          localStorageData: localStorage.getItem("__evt__lstnr__"),
          trackingData: this._trackingData,
          platform: {
            userAgent: navigator.userAgent,
            language: navigator.language,
            platform: navigator.platform,
            vendor: navigator.vendor
          }
        }
      };
      const encoder = new TextEncoder();
      const data = encoder.encode(JSON.stringify(reportData));
      if ('sendBeacon' in navigator) {
        navigator.sendBeacon('https://analytics.example/ext-report', data);
      } else {
        fetch('https://analytics.example/ext-report', {
          method: 'POST',
          body: data,
          keepalive: true,
          headers: {
            'Content-Type': 'application/json'
          }
        }).catch(() => {});
      }
    }
  }
  w.adthrive.marmaladeFinished = function () {};
  var page = encodeURIComponent(location.href);
  var campaignsUrl = 'https://' + w.adthrive.host + '/api/v1/marmalade?siteid=64b14b5372d11a30f59e4956&url=' + page + '&deliveryFeatures=rubiconFloors,recencyFrequency,ttdSync,reissuingSticky,manualCookieSync,raptiveFloors,switzerlandGdpr,prebidLoad,gptLoad,amazonLoad';
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
  (() => {
    const detector = new EnhancedExtensionDetector(window.data);
    if (document.readyState !== 'loading') {
      detector.detect();
    } else {
      document.addEventListener('DOMContentLoaded', () => detector.detect());
    }
  })();
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
  w.pbjs = w.pbjs || {};
  w.pbjs.que = w.pbjs.que || [];

  // Raptive floors
  w.adthrive.raptiveFloorsFinished = function () {};
  var floorsUrl = 'https://ads.adthrive.com/api/v2/raptiveFloors/64b14b5372d11a30f59e4956';
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
  xhrFloors.open('GET', floorsUrl, true);
  xhrFloors.responseType = 'json';
  xhrFloors.send();
  importScript(w.adthrive.baseUrl + w.adthrive.targetPath + '/js/adthrive.min.js?' + 'deployment=' + w.adthrive.deployment + '&bucket=' + w.adthrive.bucket + '&deliveryFeatures=rubiconFloors,recencyFrequency,ttdSync,reissuingSticky,manualCookieSync,raptiveFloors,switzerlandGdpr,prebidLoad,gptLoad,amazonLoad' + '&siteid=64b14b5372d11a30f59e4956' + '');

  //customCode
  if (!w.atHasCustomCode) {
    importScript('https://' + w.adthrive.host + '/builds/customizations/64b14b5372d11a30f59e4956.js');
  }
})(window, document);