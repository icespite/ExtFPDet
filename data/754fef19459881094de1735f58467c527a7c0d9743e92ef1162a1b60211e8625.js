// Copyright 2012 Google Inc. All rights reserved.

(function () {
  var data = {
    "resource": {
      "version": "1",
      "macros": [{
        "function": "__e"
      }, {
        "vtp_signal": 0,
        "function": "__c",
        "vtp_value": 0
      }, {
        "function": "__c",
        "vtp_value": "google.cn"
      }, {
        "function": "__c",
        "vtp_value": 1
      }, {
        "vtp_signal": 0,
        "function": "__c",
        "vtp_value": 0
      }, {
        "function": "__c",
        "vtp_value": "google.cn"
      }, {
        "function": "__c",
        "vtp_value": 1
      }],
      "tags": [{
        "function": "__ogt_1p_data_v2",
        "priority": 14,
        "vtp_isAutoEnabled": true,
        "vtp_autoCollectExclusionSelectors": ["list", ["map", "exclusionSelector", ""]],
        "vtp_isEnabled": true,
        "vtp_cityType": "CSS_SELECTOR",
        "vtp_manualEmailEnabled": false,
        "vtp_firstNameType": "CSS_SELECTOR",
        "vtp_countryType": "CSS_SELECTOR",
        "vtp_cityValue": "",
        "vtp_emailType": "CSS_SELECTOR",
        "vtp_regionType": "CSS_SELECTOR",
        "vtp_autoEmailEnabled": true,
        "vtp_postalCodeValue": "",
        "vtp_lastNameValue": "",
        "vtp_phoneType": "CSS_SELECTOR",
        "vtp_phoneValue": "",
        "vtp_streetType": "CSS_SELECTOR",
        "vtp_autoPhoneEnabled": false,
        "vtp_postalCodeType": "CSS_SELECTOR",
        "vtp_emailValue": "",
        "vtp_firstNameValue": "",
        "vtp_streetValue": "",
        "vtp_lastNameType": "CSS_SELECTOR",
        "vtp_autoAddressEnabled": false,
        "vtp_regionValue": "",
        "vtp_countryValue": "",
        "vtp_isAutoCollectPiiEnabledFlag": false,
        "tag_id": 10
      }, {
        "function": "__ccd_ga_first",
        "priority": 13,
        "vtp_instanceDestinationId": "G-DW2S6G95VF",
        "tag_id": 25
      }, {
        "function": "__set_product_settings",
        "priority": 12,
        "vtp_instanceDestinationId": "G-DW2S6G95VF",
        "vtp_foreignTldMacroResult": ["macro", 5],
        "vtp_isChinaVipRegionMacroResult": ["macro", 6],
        "tag_id": 24
      }, {
        "function": "__ogt_google_signals",
        "priority": 11,
        "vtp_googleSignals": "DISABLED",
        "vtp_instanceDestinationId": "G-DW2S6G95VF",
        "vtp_serverMacroResult": ["macro", 4],
        "tag_id": 23
      }, {
        "function": "__ccd_ga_regscope",
        "priority": 10,
        "vtp_settingsTable": ["list", ["map", "redactFieldGroup", "DEVICE_AND_GEO", "disallowAllRegions", false, "disallowedRegions", ""], ["map", "redactFieldGroup", "GOOGLE_SIGNALS", "disallowAllRegions", true, "disallowedRegions", ""]],
        "vtp_instanceDestinationId": "G-DW2S6G95VF",
        "tag_id": 22
      }, {
        "function": "__ccd_em_download",
        "priority": 9,
        "vtp_includeParams": true,
        "vtp_instanceDestinationId": "G-DW2S6G95VF",
        "tag_id": 21
      }, {
        "function": "__ccd_em_form",
        "priority": 8,
        "vtp_includeParams": true,
        "vtp_instanceDestinationId": "G-DW2S6G95VF",
        "tag_id": 20
      }, {
        "function": "__ccd_em_outbound_click",
        "priority": 7,
        "vtp_includeParams": true,
        "vtp_instanceDestinationId": "G-DW2S6G95VF",
        "tag_id": 19
      }, {
        "function": "__ccd_em_page_view",
        "priority": 6,
        "vtp_historyEvents": true,
        "vtp_includeParams": true,
        "vtp_instanceDestinationId": "G-DW2S6G95VF",
        "tag_id": 18
      }, {
        "function": "__ccd_em_scroll",
        "priority": 5,
        "vtp_includeParams": true,
        "vtp_instanceDestinationId": "G-DW2S6G95VF",
        "tag_id": 17
      }, {
        "function": "__ccd_em_site_search",
        "priority": 4,
        "vtp_searchQueryParams": "q,s,search,query,keyword",
        "vtp_includeParams": true,
        "vtp_instanceDestinationId": "G-DW2S6G95VF",
        "tag_id": 16
      }, {
        "function": "__ccd_em_video",
        "priority": 3,
        "vtp_includeParams": true,
        "vtp_instanceDestinationId": "G-DW2S6G95VF",
        "tag_id": 15
      }, {
        "function": "__ccd_conversion_marking",
        "priority": 2,
        "vtp_conversionRules": ["list", ["map", "matchingRules", "{\"type\":5,\"args\":[{\"stringValue\":\"purchase\"},{\"contextValue\":{\"namespaceType\":1,\"keyParts\":[\"eventName\"]}}]}"]],
        "vtp_instanceDestinationId": "G-DW2S6G95VF",
        "tag_id": 14
      }, {
        "function": "__ccd_auto_redact",
        "priority": 1,
        "vtp_redactEmail": true,
        "vtp_instanceDestinationId": "G-DW2S6G95VF",
        "tag_id": 13
      }, {
        "function": "__gct",
        "vtp_trackingId": "G-DW2S6G95VF",
        "vtp_sessionDuration": 0,
        "vtp_googleSignals": ["macro", 1],
        "vtp_foreignTld": ["macro", 2],
        "vtp_restrictDomain": ["macro", 3],
        "vtp_eventSettings": ["map"],
        "tag_id": 7
      }, {
        "function": "__ccd_ga_last",
        "priority": 0,
        "vtp_instanceDestinationId": "G-DW2S6G95VF",
        "tag_id": 12
      }],
      "predicates": [{
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "gtm.js"
      }, {
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "gtm.init"
      }],
      "rules": [[["if", 0], ["add", 14]], [["if", 1], ["add", 0, 15, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]]]
    },
    "runtime": [[50, "__ccd_auto_redact", [46, "a"], [50, "v", [46, "bk"], [36, [2, [15, "bk"], "replace", [7, [15, "u"], "\\$1"]]]], [50, "w", [46, "bk"], [52, "bl", ["c", [15, "bk"]]], [52, "bm", [7]], [65, "bn", [2, [15, "bl"], "split", [7, ""]], [46, [53, [52, "bo", [7, ["v", [15, "bn"]]]], [52, "bp", ["d", [15, "bn"]]], [22, [12, [15, "bp"], [45]], [46, [36, ["d", ["v", [15, "bk"]]]]]], [22, [21, [15, "bp"], [15, "bn"]], [46, [2, [15, "bo"], "push", [7, [15, "bp"]]], [22, [21, [15, "bn"], [2, [15, "bn"], "toLowerCase", [7]]], [46, [2, [15, "bo"], "push", [7, ["d", [2, [15, "bn"], "toLowerCase", [7]]]]]], [46, [22, [21, [15, "bn"], [2, [15, "bn"], "toUpperCase", [7]]], [46, [2, [15, "bo"], "push", [7, ["d", [2, [15, "bn"], "toUpperCase", [7]]]]]]]]]]], [22, [18, [17, [15, "bo"], "length"], 1], [46, [2, [15, "bm"], "push", [7, [0, [0, "(?:", [2, [15, "bo"], "join", [7, "|"]]], ")"]]]], [46, [2, [15, "bm"], "push", [7, [16, [15, "bo"], 0]]]]]]]], [36, [2, [15, "bm"], "join", [7, ""]]]], [50, "x", [46, "bk", "bl", "bm"], [52, "bn", ["z", [15, "bk"], [15, "bm"]]], [22, [28, [15, "bn"]], [46, [36, [15, "bk"]]]], [22, [28, [17, [15, "bn"], "search"]], [46, [36, [15, "bk"]]]], [41, "bo"], [3, "bo", [17, [15, "bn"], "search"]], [65, "bp", [15, "bl"], [46, [53, [52, "bq", [7, ["v", [15, "bp"]], ["w", [15, "bp"]]]], [65, "br", [15, "bq"], [46, [53, [52, "bs", [30, [16, [15, "t"], [15, "br"]], [43, [15, "t"], [15, "br"], ["b", [0, [0, "([?&]", [15, "br"]], "=)([^&]*)"], "gi"]]]], [3, "bo", [2, [15, "bo"], "replace", [7, [15, "bs"], [0, "$1", [15, "r"]]]]]]]]]]], [22, [20, [15, "bo"], [17, [15, "bn"], "search"]], [46, [36, [15, "bk"]]]], [22, [20, [16, [15, "bo"], 0], "&"], [46, [3, "bo", [2, [15, "bo"], "substring", [7, 1]]]]], [22, [21, [16, [15, "bo"], 0], "?"], [46, [3, "bo", [0, "?", [15, "bo"]]]]], [22, [20, [15, "bo"], "?"], [46, [3, "bo", ""]]], [43, [15, "bn"], "search", [15, "bo"]], [36, ["ba", [15, "bn"], [15, "bm"]]]], [50, "z", [46, "bk", "bl"], [22, [20, [15, "bl"], [17, [15, "s"], "PATH"]], [46, [3, "bk", [0, [15, "y"], [15, "bk"]]]]], [36, ["g", [15, "bk"]]]], [50, "ba", [46, "bk", "bl"], [41, "bm"], [3, "bm", ""], [22, [20, [15, "bl"], [17, [15, "s"], "URL"]], [46, [53, [41, "bn"], [3, "bn", ""], [22, [30, [17, [15, "bk"], "username"], [17, [15, "bk"], "password"]], [46, [3, "bn", [0, [15, "bn"], [0, [0, [0, [17, [15, "bk"], "username"], [39, [17, [15, "bk"], "password"], ":", ""]], [17, [15, "bk"], "password"]], "@"]]]]], [3, "bm", [0, [0, [0, [17, [15, "bk"], "protocol"], "//"], [15, "bn"]], [17, [15, "bk"], "host"]]]]]], [36, [0, [0, [0, [15, "bm"], [17, [15, "bk"], "pathname"]], [17, [15, "bk"], "search"]], [17, [15, "bk"], "hash"]]]], [50, "bb", [46, "bk", "bl"], [41, "bm"], [3, "bm", [2, [15, "bk"], "replace", [7, [15, "n"], [15, "r"]]]], [22, [30, [20, [15, "bl"], [17, [15, "s"], "URL"]], [20, [15, "bl"], [17, [15, "s"], "PATH"]]], [46, [53, [52, "bn", ["z", [15, "bm"], [15, "bl"]]], [22, [20, [15, "bn"], [44]], [46, [36, [15, "bm"]]]], [52, "bo", [17, [15, "bn"], "search"]], [52, "bp", [2, [15, "bo"], "replace", [7, [15, "o"], [15, "r"]]]], [22, [20, [15, "bo"], [15, "bp"]], [46, [36, [15, "bm"]]]], [43, [15, "bn"], "search", [15, "bp"]], [3, "bm", ["ba", [15, "bn"], [15, "bl"]]]]]], [36, [15, "bm"]]], [50, "bc", [46, "bk"], [22, [20, [15, "bk"], [15, "q"]], [46, [36, [17, [15, "s"], "PATH"]]], [46, [22, [21, [2, [15, "p"], "indexOf", [7, [15, "bk"]]], [27, 1]], [46, [36, [17, [15, "s"], "URL"]]], [46, [36, [17, [15, "s"], "TEXT"]]]]]]], [50, "bd", [46, "bk", "bl"], [41, "bm"], [3, "bm", false], [52, "bn", ["f", [15, "bk"]]], [38, [15, "bn"], [46, "string", "array", "object"], [46, [5, [46, [52, "bo", ["bb", [15, "bk"], [15, "bl"]]], [22, [21, [15, "bk"], [15, "bo"]], [46, [36, [15, "bo"]]]], [4]]], [5, [46, [53, [41, "bp"], [3, "bp", 0], [63, [7, "bp"], [23, [15, "bp"], [17, [15, "bk"], "length"]], [33, [15, "bp"], [3, "bp", [0, [15, "bp"], 1]]], [46, [53, [52, "bq", ["bd", [16, [15, "bk"], [15, "bp"]], [17, [15, "s"], "TEXT"]]], [22, [21, [15, "bq"], [44]], [46, [43, [15, "bk"], [15, "bp"], [15, "bq"]], [3, "bm", true]]]]]]], [4]]], [5, [46, [54, "bp", [15, "bk"], [46, [53, [52, "bq", ["bd", [16, [15, "bk"], [15, "bp"]], [17, [15, "s"], "TEXT"]]], [22, [21, [15, "bq"], [44]], [46, [43, [15, "bk"], [15, "bp"], [15, "bq"]], [3, "bm", true]]]]]], [4]]]]], [36, [39, [15, "bm"], [15, "bk"], [44]]]], [50, "bj", [46, "bk", "bl"], [52, "bm", [30, [2, [15, "bk"], "getMetadata", [7, [15, "bi"]]], [7]]], [22, [20, [2, [15, "bm"], "indexOf", [7, [15, "bl"]]], [27, 1]], [46, [2, [15, "bm"], "push", [7, [15, "bl"]]]]], [2, [15, "bk"], "setMetadata", [7, [15, "bi"], [15, "bm"]]]], [52, "b", ["require", "internal.createRegex"]], [52, "c", ["require", "decodeUriComponent"]], [52, "d", ["require", "encodeUriComponent"]], [52, "e", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "f", ["require", "getType"]], [52, "g", ["require", "parseUrl"]], [52, "h", ["require", "internal.registerCcdCallback"]], [52, "i", [17, [15, "a"], "instanceDestinationId"]], [52, "j", [17, [15, "a"], "redactEmail"]], [52, "k", [17, [15, "a"], "redactQueryParams"]], [52, "l", [39, [15, "k"], [2, [15, "k"], "split", [7, ","]], [7]]], [52, "m", "is_sgtm_prehit"], [22, [1, [28, [17, [15, "l"], "length"]], [28, [15, "j"]]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "n", ["b", "[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}", "gi"]], [52, "o", ["b", [0, "([A-Z0-9._-]|%25|%2B)+%40[A-Z0-9.-]", "+\\.[A-Z]{2,}"], "gi"]], [52, "p", [7, "page_location", "page_referrer", "page_path", "link_url", "video_url", "form_destination"]], [52, "q", "page_path"], [52, "r", "(redacted)"], [52, "s", [8, "TEXT", 0, "URL", 1, "PATH", 2]], [52, "t", [8]], [52, "u", ["b", "([\\\\^$.|?*+(){}]|\\[|\\[)", "g"]], [52, "y", "http://."], [52, "be", 15], [52, "bf", 16], [52, "bg", 23], [52, "bh", 24], [52, "bi", "event_usage"], ["h", [15, "i"], [51, "", [7, "bk"], [22, [15, "j"], [46, [53, [52, "bl", [2, [15, "bk"], "getHitKeys", [7]]], [65, "bm", [15, "bl"], [46, [53, [22, [20, [15, "bm"], "_sst_parameters"], [46, [6]]], [52, "bn", [2, [15, "bk"], "getHitData", [7, [15, "bm"]]]], [22, [28, [15, "bn"]], [46, [6]]], [52, "bo", ["bc", [15, "bm"]]], [52, "bp", ["bd", [15, "bn"], [15, "bo"]]], [22, [21, [15, "bp"], [44]], [46, [2, [15, "bk"], "setHitData", [7, [15, "bm"], [15, "bp"]]], ["bj", [15, "bk"], [39, [2, [15, "bk"], "getMetadata", [7, [15, "m"]]], [15, "bg"], [15, "be"]]]]]]]]]]], [22, [17, [15, "l"], "length"], [46, [65, "bl", [15, "p"], [46, [53, [52, "bm", [2, [15, "bk"], "getHitData", [7, [15, "bl"]]]], [22, [28, [15, "bm"]], [46, [6]]], [52, "bn", [39, [20, [15, "bl"], [15, "q"]], [17, [15, "s"], "PATH"], [17, [15, "s"], "URL"]]], [52, "bo", ["x", [15, "bm"], [15, "l"], [15, "bn"]]], [22, [21, [15, "bo"], [15, "bm"]], [46, [2, [15, "bk"], "setHitData", [7, [15, "bl"], [15, "bo"]]], ["bj", [15, "bk"], [39, [2, [15, "bk"], "getMetadata", [7, [15, "m"]]], [15, "bh"], [15, "bf"]]]]]]]]]]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_conversion_marking", [46, "a"], [22, [30, [28, [17, [15, "a"], "conversionRules"]], [20, [17, [17, [15, "a"], "conversionRules"], "length"], 0]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "b", ["require", "internal.copyPreHit"]], [52, "c", ["require", "internal.evaluateBooleanExpression"]], [52, "d", ["require", "internal.registerCcdCallback"]], [52, "e", "is_conversion"], [52, "f", "is_first_visit"], [52, "g", "is_first_visit_conversion"], [52, "h", "is_session_start"], [52, "i", "is_session_start_conversion"], [52, "j", "first_visit"], [52, "k", "session_start"], [41, "l"], [41, "m"], ["d", [17, [15, "a"], "instanceDestinationId"], [51, "", [7, "n"], [52, "o", [8, "preHit", [15, "n"]]], [65, "p", [17, [15, "a"], "conversionRules"], [46, [22, ["c", [17, [15, "p"], "matchingRules"], [15, "o"]], [46, [2, [15, "n"], "setMetadata", [7, [15, "e"], true]], [4]]]]], [22, [2, [15, "n"], "getMetadata", [7, [15, "f"]]], [46, [22, [28, [15, "l"]], [46, [53, [52, "p", ["b", [15, "n"], [8, "omitHitData", true, "omitMetadata", true]]], [2, [15, "p"], "setEventName", [7, [15, "j"]]], [3, "l", [8, "preHit", [15, "p"]]]]]], [65, "p", [17, [15, "a"], "conversionRules"], [46, [22, ["c", [17, [15, "p"], "matchingRules"], [15, "l"]], [46, [2, [15, "n"], "setMetadata", [7, [15, "g"], true]], [4]]]]]]], [22, [2, [15, "n"], "getMetadata", [7, [15, "h"]]], [46, [22, [28, [15, "m"]], [46, [53, [52, "p", ["b", [15, "n"], [8, "omitHitData", true, "omitMetadata", true]]], [2, [15, "p"], "setEventName", [7, [15, "k"]]], [3, "m", [8, "preHit", [15, "p"]]]]]], [65, "p", [17, [15, "a"], "conversionRules"], [46, [22, ["c", [17, [15, "p"], "matchingRules"], [15, "m"]], [46, [2, [15, "n"], "setMetadata", [7, [15, "i"], true]], [4]]]]]]]]], [2, [15, "a"], "gtmOnSuccess", [7]], [36]], [50, "__ccd_em_download", [46, "a"], [50, "r", [46, "x"], [36, [1, [15, "x"], [21, [2, [2, [15, "x"], "toLowerCase", [7]], "match", [7, [15, "q"]]], [45]]]]], [50, "s", [46, "x"], [52, "y", [2, [17, [15, "x"], "pathname"], "split", [7, "."]]], [52, "z", [39, [18, [17, [15, "y"], "length"], 1], [16, [15, "y"], [37, [17, [15, "y"], "length"], 1]], ""]], [36, [16, [2, [15, "z"], "split", [7, "/"]], 0]]], [50, "t", [46, "x"], [36, [39, [12, [2, [17, [15, "x"], "pathname"], "substring", [7, 0, 1]], "/"], [17, [15, "x"], "pathname"], [0, "/", [17, [15, "x"], "pathname"]]]]], [50, "u", [46, "x"], [41, "y"], [3, "y", ""], [22, [1, [15, "x"], [17, [15, "x"], "href"]], [46, [53, [41, "z"], [3, "z", [2, [17, [15, "x"], "href"], "indexOf", [7, "#"]]], [3, "y", [39, [23, [15, "z"], 0], [17, [15, "x"], "href"], [2, [17, [15, "x"], "href"], "substring", [7, 0, [15, "z"]]]]]]]], [36, [15, "y"]]], [50, "w", [46, "x"], [52, "y", [8]], [43, [15, "y"], [15, "j"], true], [43, [15, "y"], [15, "f"], true], [43, [15, "x"], "eventMetadata", [15, "y"]]], [52, "b", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "c", ["require", "internal.getProductSettingsParameter"]], [52, "d", ["require", "templateStorage"]], [52, "e", [15, "__module_ccdEmDownloadActivity"]], [52, "f", "speculative"], [52, "g", "ae_block_downloads"], [52, "h", "file_download"], [52, "i", "isRegistered"], [52, "j", "em_event"], [52, "k", [17, [15, "a"], "instanceDestinationId"]], [22, ["c", [15, "k"], [15, "g"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [2, [15, "e"], "registerDownloadActivityCallback", [7, [15, "k"], [17, [15, "a"], "includeParams"]]], [22, [2, [15, "d"], "getItem", [7, [15, "i"]]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "l", ["require", "internal.addDataLayerEventListener"]], [52, "m", ["require", "internal.enableAutoEventOnLinkClick"]], [52, "n", ["require", "internal.getDestinationIds"]], [52, "o", ["require", "parseUrl"]], [52, "p", ["require", "internal.sendGtagEvent"]], [52, "q", [0, "^(pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|", "mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma)$"]], [52, "v", ["m", [8, "checkValidation", true]]], [22, [28, [15, "v"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]], [2, [15, "d"], "setItem", [7, [15, "i"], true]], ["l", "gtm.linkClick", [51, "", [7, "x", "y"], ["y"], [52, "z", [8, "eventId", [16, [15, "x"], "gtm.uniqueEventId"]]], [22, [16, [15, "b"], "enableDeferAllEnhancedMeasurement"], [46, [43, [15, "z"], "deferrable", true]]], [52, "ba", [16, [15, "x"], "gtm.elementUrl"]], [52, "bb", ["o", [15, "ba"]]], [22, [28, [15, "bb"]], [46, [36]]], [52, "bc", ["s", [15, "bb"]]], [22, [28, ["r", [15, "bc"]]], [46, [36]]], [52, "bd", [8, "link_id", [16, [15, "x"], "gtm.elementId"], "link_url", ["u", [15, "bb"]], "link_text", [16, [15, "x"], "gtm.elementText"], "file_name", ["t", [15, "bb"]], "file_extension", [15, "bc"]]], ["w", [15, "z"]], ["p", ["n"], [15, "h"], [15, "bd"], [15, "z"]]], [15, "v"]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_em_form", [46, "a"], [50, "t", [46, "z"], [52, "ba", [30, [16, [15, "z"], [15, "l"]], [8]]], [43, [15, "ba"], "event_usage", [7, 8]], [43, [15, "z"], [15, "l"], [15, "ba"]]], [50, "u", [46, "z", "ba"], [52, "bb", [30, [16, [15, "z"], [15, "l"]], [8]]], [43, [15, "bb"], [15, "k"], true], [43, [15, "bb"], [15, "f"], true], [22, [1, [15, "o"], [16, [15, "ba"], "gtm.formCanceled"]], [46, [43, [15, "bb"], [15, "m"], true]]], [43, [15, "z"], [15, "l"], [15, "bb"]]], [52, "b", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "c", ["require", "internal.getProductSettingsParameter"]], [52, "d", ["require", "templateStorage"]], [52, "e", [15, "__module_ccdEmFormActivity"]], [52, "f", "speculative"], [52, "g", "ae_block_form"], [52, "h", "form_submit"], [52, "i", "form_start"], [52, "j", "isRegistered"], [52, "k", "em_event"], [52, "l", "eventMetadata"], [52, "m", "form_event_canceled"], [52, "n", [17, [15, "a"], "instanceDestinationId"]], [52, "o", [28, [28, [16, [15, "b"], "enableFormSkipValidation"]]]], [22, ["c", [15, "n"], [15, "g"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [2, [15, "e"], "registerFormActivityCallback", [7, [17, [15, "a"], "instanceDestinationId"], [17, [15, "a"], "skipValidation"], [17, [15, "a"], "includeParams"]]], [22, [2, [15, "d"], "getItem", [7, [15, "j"]]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [2, [15, "d"], "setItem", [7, [15, "j"], true]], [52, "p", ["require", "internal.addFormInteractionListener"]], [52, "q", ["require", "internal.addFormSubmitListener"]], [52, "r", ["require", "internal.getDestinationIds"]], [52, "s", ["require", "internal.sendGtagEvent"]], [52, "v", [8]], [52, "w", [51, "", [7, "z", "ba"], [22, [15, "ba"], [46, ["ba"]]], [52, "bb", [16, [15, "z"], "gtm.elementId"]], [22, [16, [15, "v"], [15, "bb"]], [46, [36]]], [43, [15, "v"], [15, "bb"], true], [52, "bc", [8, "form_id", [15, "bb"], "form_name", [16, [15, "z"], "gtm.interactedFormName"], "form_destination", [16, [15, "z"], "gtm.elementUrl"], "form_length", [16, [15, "z"], "gtm.interactedFormLength"], "first_field_id", [16, [15, "z"], "gtm.interactedFormFieldId"], "first_field_name", [16, [15, "z"], "gtm.interactedFormFieldName"], "first_field_type", [16, [15, "z"], "gtm.interactedFormFieldType"], "first_field_position", [16, [15, "z"], "gtm.interactedFormFieldPosition"]]], [52, "bd", [8, "eventId", [17, [15, "a"], "gtmEventId"]]], [22, [16, [15, "b"], "enableDeferAllEnhancedMeasurement"], [46, [43, [15, "bd"], "deferrable", true]]], ["t", [15, "bd"]], ["u", [15, "bd"], [15, "z"]], ["s", ["r"], [15, "i"], [15, "bc"], [15, "bd"]]]], [52, "x", [16, [15, "b"], "useEnableAutoEventOnFormApis"]], [52, "y", [51, "", [7, "z", "ba"], ["w", [15, "z"], [44]], [52, "bb", [8, "form_id", [16, [15, "z"], "gtm.elementId"], "form_name", [16, [15, "z"], "gtm.interactedFormName"], "form_destination", [16, [15, "z"], "gtm.elementUrl"], "form_length", [16, [15, "z"], "gtm.interactedFormLength"], "form_submit_text", [39, [15, "x"], [16, [15, "z"], "gtm.formSubmitElementText"], [16, [15, "z"], "gtm.formSubmitButtonText"]]]], [43, [15, "bb"], "event_callback", [15, "ba"]], [52, "bc", [8, "eventId", [17, [15, "a"], "gtmEventId"]]], [22, [16, [15, "b"], "enableDeferAllEnhancedMeasurement"], [46, [43, [15, "bc"], "deferrable", true]]], ["t", [15, "bc"]], ["u", [15, "bc"], [15, "z"]], ["s", ["r"], [15, "h"], [15, "bb"], [15, "bc"]]]], [22, [15, "x"], [46, [53, [52, "z", ["require", "internal.addDataLayerEventListener"]], [52, "ba", ["require", "internal.enableAutoEventOnFormSubmit"]], [52, "bb", ["require", "internal.enableAutoEventOnFormInteraction"]], [52, "bc", ["bb"]], [22, [28, [15, "bc"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]], ["z", "gtm.formInteract", [15, "w"], [15, "bc"]], [52, "bd", ["ba", [8, "checkValidation", [28, [15, "o"]], "waitForTags", false]]], [22, [28, [15, "bd"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]], ["z", "gtm.formSubmit", [15, "y"], [15, "bd"]]]], [46, ["p", [15, "w"]], ["q", [15, "y"], [8, "waitForCallbacks", false, "checkValidation", [28, [15, "o"]]]]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_em_outbound_click", [46, "a"], [50, "s", [46, "y"], [22, [28, [15, "y"]], [46, [36, [44]]]], [41, "z"], [3, "z", ""], [22, [1, [15, "y"], [17, [15, "y"], "href"]], [46, [53, [41, "ba"], [3, "ba", [2, [17, [15, "y"], "href"], "indexOf", [7, "#"]]], [3, "z", [39, [23, [15, "ba"], 0], [17, [15, "y"], "href"], [2, [17, [15, "y"], "href"], "substring", [7, 0, [15, "ba"]]]]]]]], [36, [15, "z"]]], [50, "t", [46, "y"], [22, [28, [15, "y"]], [46, [36, [44]]]], [41, "z"], [3, "z", [17, [15, "y"], "hostname"]], [52, "ba", [2, [15, "z"], "match", [7, "^www\\d*\\."]]], [22, [1, [15, "ba"], [16, [15, "ba"], 0]], [46, [3, "z", [2, [15, "z"], "substring", [7, [17, [16, [15, "ba"], 0], "length"]]]]]], [36, [15, "z"]]], [50, "u", [46, "y"], [22, [28, [15, "y"]], [46, [36, false]]], [52, "z", [2, [17, [15, "y"], "hostname"], "toLowerCase", [7]]], [41, "ba"], [3, "ba", [2, ["t", ["q", ["p"]]], "toLowerCase", [7]]], [41, "bb"], [3, "bb", [37, [17, [15, "z"], "length"], [17, [15, "ba"], "length"]]], [22, [1, [18, [15, "bb"], 0], [29, [2, [15, "ba"], "charAt", [7, 0]], "."]], [46, [32, [15, "bb"], [3, "bb", [37, [15, "bb"], 1]]], [3, "ba", [0, ".", [15, "ba"]]]]], [22, [1, [19, [15, "bb"], 0], [12, [2, [15, "z"], "indexOf", [7, [15, "ba"], [15, "bb"]]], [15, "bb"]]], [46, [36, false]]], [36, true]], [50, "x", [46, "y"], [52, "z", [8]], [43, [15, "z"], [15, "j"], true], [43, [15, "z"], [15, "f"], true], [43, [15, "y"], "eventMetadata", [15, "z"]]], [52, "b", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "c", ["require", "internal.getProductSettingsParameter"]], [52, "d", ["require", "templateStorage"]], [52, "e", [15, "__module_ccdEmOutboundClickActivity"]], [52, "f", "speculative"], [52, "g", "ae_block_outbound_click"], [52, "h", "click"], [52, "i", "isRegistered"], [52, "j", "em_event"], [52, "k", [17, [15, "a"], "instanceDestinationId"]], [22, ["c", [15, "k"], [15, "g"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [2, [15, "e"], "registerOutbackClickActivityCallback", [7, [15, "k"], [17, [15, "a"], "includeParams"]]], [22, [2, [15, "d"], "getItem", [7, [15, "i"]]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "l", ["require", "internal.addDataLayerEventListener"]], [52, "m", ["require", "internal.enableAutoEventOnLinkClick"]], [52, "n", ["require", "internal.getDestinationIds"]], [52, "o", ["require", "internal.getRemoteConfigParameter"]], [52, "p", ["require", "getUrl"]], [52, "q", ["require", "parseUrl"]], [52, "r", ["require", "internal.sendGtagEvent"]], [52, "v", ["o", [15, "k"], "cross_domain_conditions"]], [52, "w", ["m", [8, "affiliateDomains", [15, "v"], "checkValidation", true, "waitForTags", false]]], [22, [28, [15, "w"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]], [2, [15, "d"], "setItem", [7, [15, "i"], true]], ["l", "gtm.linkClick", [51, "", [7, "y", "z"], [52, "ba", ["q", [16, [15, "y"], "gtm.elementUrl"]]], [22, [28, ["u", [15, "ba"]]], [46, ["z"], [36]]], [52, "bb", [8, "link_id", [16, [15, "y"], "gtm.elementId"], "link_classes", [16, [15, "y"], "gtm.elementClasses"], "link_url", ["s", [15, "ba"]], "link_domain", ["t", [15, "ba"]], "outbound", true]], [43, [15, "bb"], "event_callback", [15, "z"]], [52, "bc", [8, "eventId", [16, [15, "y"], "gtm.uniqueEventId"]]], [22, [16, [15, "b"], "enableDeferAllEnhancedMeasurement"], [46, [43, [15, "bc"], "deferrable", true]]], ["x", [15, "bc"]], ["r", ["n"], [15, "h"], [15, "bb"], [15, "bc"]]], [15, "w"]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_em_page_view", [46, "a"], [50, "s", [46, "t"], [52, "u", [8]], [43, [15, "u"], [15, "k"], true], [43, [15, "u"], [15, "g"], true], [43, [15, "t"], "eventMetadata", [15, "u"]]], [22, [28, [17, [15, "a"], "historyEvents"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "b", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "c", ["require", "internal.getProductSettingsParameter"]], [52, "d", ["require", "internal.setRemoteConfigParameter"]], [52, "e", ["require", "templateStorage"]], [52, "f", [15, "__module_ccdEmPageViewActivity"]], [52, "g", "speculative"], [52, "h", "ae_block_history"], [52, "i", "page_view"], [52, "j", "isRegistered"], [52, "k", "em_event"], [52, "l", [17, [15, "a"], "instanceDestinationId"]], [22, ["c", [15, "l"], [15, "h"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [2, [15, "f"], "registerPageViewActivityCallback", [7, [15, "l"]]], [22, [2, [15, "e"], "getItem", [7, [15, "j"]]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "m", ["require", "internal.addDataLayerEventListener"]], [52, "n", ["require", "internal.enableAutoEventOnHistoryChange"]], [52, "o", ["require", "internal.getDestinationIds"]], [52, "p", ["require", "internal.sendGtagEvent"]], [52, "q", [8, "interval", 1000]], [22, [16, [15, "b"], "enableV1HistoryEventInApi"], [46, [43, [15, "q"], "useV2EventName", true]]], [52, "r", ["n", [15, "q"]]], [22, [28, [15, "r"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]], [2, [15, "e"], "setItem", [7, [15, "j"], true]], ["m", "gtm.historyChange-v2", [51, "", [7, "t", "u"], ["u"], [52, "v", [16, [15, "t"], "gtm.oldUrl"]], [22, [20, [16, [15, "t"], "gtm.newUrl"], [15, "v"]], [46, [36]]], [52, "w", [16, [15, "t"], "gtm.historyChangeSource"]], [22, [1, [1, [21, [15, "w"], "pushState"], [21, [15, "w"], "popstate"]], [21, [15, "w"], "replaceState"]], [46, [36]]], [52, "x", [8]], [22, [17, [15, "a"], "includeParams"], [46, [43, [15, "x"], "page_location", [16, [15, "t"], "gtm.newUrl"]], [43, [15, "x"], "page_referrer", [15, "v"]]]], [52, "y", [8, "eventId", [16, [15, "t"], "gtm.uniqueEventId"]]], [22, [16, [15, "b"], "enableDeferAllEnhancedMeasurement"], [46, [43, [15, "y"], "deferrable", true]]], ["s", [15, "y"]], ["p", ["o"], [15, "i"], [15, "x"], [15, "y"]]], [15, "r"]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_em_scroll", [46, "a"], [50, "q", [46, "r"], [52, "s", [8]], [43, [15, "s"], [15, "j"], true], [43, [15, "s"], [15, "f"], true], [43, [15, "r"], "eventMetadata", [15, "s"]]], [52, "b", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "c", ["require", "internal.getProductSettingsParameter"]], [52, "d", ["require", "templateStorage"]], [52, "e", [15, "__module_ccdEmScrollActivity"]], [52, "f", "speculative"], [52, "g", "ae_block_scroll"], [52, "h", "scroll"], [52, "i", "isRegistered"], [52, "j", "em_event"], [52, "k", [17, [15, "a"], "instanceDestinationId"]], [22, ["c", [15, "k"], [15, "g"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [2, [15, "e"], "registerScrollActivityCallback", [7, [15, "k"], [17, [15, "a"], "includeParams"]]], [22, [2, [15, "d"], "getItem", [7, [15, "i"]]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "l", ["require", "internal.addDataLayerEventListener"]], [52, "m", ["require", "internal.enableAutoEventOnScroll"]], [52, "n", ["require", "internal.getDestinationIds"]], [52, "o", ["require", "internal.sendGtagEvent"]], [52, "p", ["m", [8, "verticalThresholdUnits", "PERCENT", "verticalThresholds", 90]]], [22, [28, [15, "p"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]], [2, [15, "d"], "setItem", [7, [15, "i"], true]], ["l", "gtm.scrollDepth", [51, "", [7, "r", "s"], ["s"], [52, "t", [8, "eventId", [16, [15, "r"], "gtm.uniqueEventId"]]], [22, [16, [15, "b"], "enableDeferAllEnhancedMeasurement"], [46, [43, [15, "t"], "deferrable", true]]], [52, "u", [8, "percent_scrolled", [16, [15, "r"], "gtm.scrollThreshold"]]], ["q", [15, "t"]], ["o", ["n"], [15, "h"], [15, "u"], [15, "t"]]], [15, "p"]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_em_site_search", [46, "a"], [52, "b", ["require", "getQueryParameters"]], [52, "c", ["require", "internal.sendGtagEvent"]], [52, "d", ["require", "getContainerVersion"]], [52, "e", [15, "__module_ccdEmSiteSearchActivity"]], [52, "f", [2, [15, "e"], "getSearchTerm", [7, [17, [15, "a"], "searchQueryParams"], [15, "b"]]]], [52, "g", [30, [17, [15, "a"], "instanceDestinationId"], [17, ["d"], "containerId"]]], [52, "h", [8, "deferrable", true, "eventId", [17, [15, "a"], "gtmEventId"], "eventMetadata", [8, "em_event", true]]], [22, [15, "f"], [46, [53, [52, "i", [39, [28, [28, [17, [15, "a"], "includeParams"]]], [2, [15, "e"], "buildEventParams", [7, [15, "f"], [17, [15, "a"], "additionalQueryParams"], [15, "b"]]], [8]]], ["c", [15, "g"], "view_search_results", [15, "i"], [15, "h"]]]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_em_video", [46, "a"], [50, "s", [46, "t"], [52, "u", [8]], [43, [15, "u"], [15, "l"], true], [43, [15, "u"], [15, "f"], true], [43, [15, "t"], "eventMetadata", [15, "u"]]], [52, "b", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "c", ["require", "internal.getProductSettingsParameter"]], [52, "d", ["require", "templateStorage"]], [52, "e", [15, "__module_ccdEmVideoActivity"]], [52, "f", "speculative"], [52, "g", "ae_block_video"], [52, "h", "video_start"], [52, "i", "video_progress"], [52, "j", "video_complete"], [52, "k", "isRegistered"], [52, "l", "em_event"], [52, "m", [17, [15, "a"], "instanceDestinationId"]], [22, ["c", [15, "m"], [15, "g"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [2, [15, "e"], "registerVideoActivityCallback", [7, [15, "m"], [17, [15, "a"], "includeParams"]]], [22, [2, [15, "d"], "getItem", [7, [15, "k"]]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "n", ["require", "internal.addDataLayerEventListener"]], [52, "o", ["require", "internal.enableAutoEventOnYouTubeActivity"]], [52, "p", ["require", "internal.getDestinationIds"]], [52, "q", ["require", "internal.sendGtagEvent"]], [52, "r", ["o", [8, "captureComplete", true, "captureStart", true, "progressThresholdsPercent", [7, 10, 25, 50, 75]]]], [22, [28, [15, "r"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]], [2, [15, "d"], "setItem", [7, [15, "k"], true]], ["n", "gtm.video", [51, "", [7, "t", "u"], ["u"], [52, "v", [16, [15, "t"], "gtm.videoStatus"]], [41, "w"], [22, [20, [15, "v"], "start"], [46, [3, "w", [15, "h"]]], [46, [22, [20, [15, "v"], "progress"], [46, [3, "w", [15, "i"]]], [46, [22, [20, [15, "v"], "complete"], [46, [3, "w", [15, "j"]]], [46, [36]]]]]]], [52, "x", [8, "video_current_time", [16, [15, "t"], "gtm.videoCurrentTime"], "video_duration", [16, [15, "t"], "gtm.videoDuration"], "video_percent", [16, [15, "t"], "gtm.videoPercent"], "video_provider", [16, [15, "t"], "gtm.videoProvider"], "video_title", [16, [15, "t"], "gtm.videoTitle"], "video_url", [16, [15, "t"], "gtm.videoUrl"], "visible", [16, [15, "t"], "gtm.videoVisible"]]], [52, "y", [8, "eventId", [16, [15, "t"], "gtm.uniqueEventId"]]], [22, [16, [15, "b"], "enableDeferAllEnhancedMeasurement"], [46, [43, [15, "y"], "deferrable", true]]], ["s", [15, "y"]], ["q", ["p"], [15, "w"], [15, "x"], [15, "y"]]], [15, "r"]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_ga_first", [46, "a"], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_ga_last", [46, "a"], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_ga_regscope", [46, "a"], [52, "b", [15, "__module_ccdGaRegionScopedSettings"]], [2, [15, "b"], "applyRegionScopedSettings", [7, [15, "a"]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ogt_1p_data_v2", [46, "a"], [50, "j", [46, "m", "n", "o"], [22, [20, [16, [15, "n"], "type"], [15, "o"]], [46, [22, [28, [15, "m"]], [46, [3, "m", [8]]]], [22, [28, [16, [15, "m"], [15, "o"]]], [46, [43, [15, "m"], [15, "o"], [16, [15, "n"], "userData"]]]]]], [36, [15, "m"]]], [50, "k", [46, "m", "n"], [52, "o", [16, [15, "a"], [15, "m"]]], [41, "p"], [22, [20, [15, "o"], "CSS_SELECTOR"], [46, [3, "p", "css_selector"]], [46, [22, [20, [15, "o"], "JS_VAR"], [46, [3, "p", "js_variable"]]]]], [36, [8, "selector_type", [15, "p"], "value", [16, [15, "a"], [15, "n"]]]]], [50, "l", [46, "m", "n", "o", "p"], [22, [28, [16, [15, "a"], [15, "p"]]], [46, [36]]], [43, [15, "m"], [15, "n"], ["k", [15, "o"], [15, "p"]]]], [22, [28, [17, [15, "a"], "isEnabled"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "b", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "c", ["require", "internal.getDestinationIds"]], [52, "d", ["require", "internal.getProductSettingsParameter"]], [52, "e", ["require", "internal.detectUserProvidedData"]], [52, "f", ["require", "internal.setRemoteConfigParameter"]], [52, "g", ["require", "internal.registerCcdCallback"]], [52, "h", [30, ["c"], [7]]], [52, "i", [8, "enable_code", true]], [22, [17, [15, "a"], "isAutoEnabled"], [46, [53, [52, "m", [7]], [22, [1, [17, [15, "a"], "autoCollectExclusionSelectors"], [17, [17, [15, "a"], "autoCollectExclusionSelectors"], "length"]], [46, [53, [41, "o"], [3, "o", 0], [63, [7, "o"], [23, [15, "o"], [17, [17, [15, "a"], "autoCollectExclusionSelectors"], "length"]], [33, [15, "o"], [3, "o", [0, [15, "o"], 1]]], [46, [53, [52, "p", [17, [16, [17, [15, "a"], "autoCollectExclusionSelectors"], [15, "o"]], "exclusionSelector"]], [22, [15, "p"], [46, [2, [15, "m"], "push", [7, [15, "p"]]]]]]]]]]], [52, "n", [39, [17, [15, "a"], "isAutoCollectPiiEnabledFlag"], [17, [15, "a"], "autoEmailEnabled"], true]], [43, [15, "i"], "auto_detect", [8, "email", [15, "n"], "phone", [17, [15, "a"], "autoPhoneEnabled"], "address", [17, [15, "a"], "autoAddressEnabled"], "exclude_element_selectors", [15, "m"]]]]]], [22, [17, [15, "a"], "isManualEnabled"], [46, [53, [52, "m", [8]], [22, [17, [15, "a"], "manualEmailEnabled"], [46, ["l", [15, "m"], "email", "emailType", "emailValue"]]], [22, [17, [15, "a"], "manualPhoneEnabled"], [46, ["l", [15, "m"], "phone", "phoneType", "phoneValue"]]], [22, [17, [15, "a"], "manualAddressEnabled"], [46, [53, [52, "n", [8]], ["l", [15, "n"], "first_name", "firstNameType", "firstNameValue"], ["l", [15, "n"], "last_name", "lastNameType", "lastNameValue"], ["l", [15, "n"], "street", "streetType", "streetValue"], ["l", [15, "n"], "city", "cityType", "cityValue"], ["l", [15, "n"], "region", "regionType", "regionValue"], ["l", [15, "n"], "country", "countryType", "countryValue"], ["l", [15, "n"], "postal_code", "postalCodeType", "postalCodeValue"], [43, [15, "m"], "name_and_address", [7, [15, "n"]]]]]], [43, [15, "i"], "selectors", [15, "m"]]]]], [65, "m", [15, "h"], [46, [53, [41, "n"], [3, "n", [15, "i"]], [22, [1, [20, [2, [15, "m"], "indexOf", [7, "G-"]], 0], [28, [16, [15, "b"], "enableEuidAutoMode"]]], [46, [53, [52, "q", [8, "enable_code", true, "selectors", [16, [15, "i"], "selectors"]]], [3, "n", [15, "q"]]]]], ["f", [15, "m"], "user_data_settings", [15, "n"]], [52, "o", [16, [15, "n"], "auto_detect"]], [22, [28, [15, "o"]], [46, [6]]], [52, "p", [51, "", [7, "q"], [52, "r", [2, [15, "q"], "getMetadata", [7, "user_data_from_automatic"]]], [22, [15, "r"], [46, [36, [15, "r"]]]], [52, "s", ["e", [8, "excludeElementSelectors", [16, [15, "o"], "exclude_element_selectors"], "fieldFilters", [8, "email", [16, [15, "o"], "email"], "phone", [16, [15, "o"], "phone"], "address", [16, [15, "o"], "address"]]]]], [52, "t", [1, [15, "s"], [16, [15, "s"], "elements"]]], [52, "u", [8]], [22, [1, [15, "t"], [18, [17, [15, "t"], "length"], 0]], [46, [53, [41, "v"], [53, [41, "w"], [3, "w", 0], [63, [7, "w"], [23, [15, "w"], [17, [15, "t"], "length"]], [33, [15, "w"], [3, "w", [0, [15, "w"], 1]]], [46, [53, [52, "x", [16, [15, "t"], [15, "w"]]], ["j", [15, "u"], [15, "x"], "email"], [22, [16, [15, "b"], "enableAutoPiiOnPhoneAndAddress"], [46, ["j", [15, "u"], [15, "x"], "phone_number"], [3, "v", ["j", [15, "v"], [15, "x"], "first_name"]], [3, "v", ["j", [15, "v"], [15, "x"], "last_name"]], [3, "v", ["j", [15, "v"], [15, "x"], "country"]], [3, "v", ["j", [15, "v"], [15, "x"], "postal_code"]]]]]]]], [22, [1, [15, "v"], [28, [16, [15, "u"], "address"]]], [46, [43, [15, "u"], "address", [15, "v"]]]]]]], [2, [15, "q"], "setMetadata", [7, "user_data_from_automatic", [15, "u"]]], [36, [15, "u"]]]], ["g", [15, "m"], [51, "", [7, "q"], [2, [15, "q"], "setMetadata", [7, "user_data_from_automatic_getter", [15, "p"]]]]]]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ogt_google_signals", [46, "a"], [52, "b", ["require", "internal.setProductSettingsParameter"]], [52, "c", ["require", "getContainerVersion"]], [52, "d", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "e", [30, [17, [15, "a"], "instanceDestinationId"], [17, ["c"], "containerId"]]], ["b", [15, "e"], "google_signals", [20, [17, [15, "a"], "serverMacroResult"], 1]], ["b", [15, "e"], "google_ono", [20, [17, [15, "a"], "serverMacroResult"], 2]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__set_product_settings", [46, "a"], [2, [15, "a"], "gtmOnSuccess", [7]]], [52, "__module_activities", [13, [41, "$0"], [3, "$0", [51, "", [7], [50, "a", [46], [50, "b", [46, "c", "d"], [36, [39, [15, "d"], ["d", [15, "c"]], [15, "c"]]]], [36, [8, "withRequestContext", [15, "b"]]]], [36, ["a"]]]], ["$0"]]], [52, "__module_ccdEmDownloadActivity", [13, [41, "$0"], [3, "$0", [51, "", [7], [50, "a", [46], [50, "h", [46, "i", "j"], ["c", [15, "i"], [51, "", [7, "k"], [22, [30, [21, [2, [15, "k"], "getEventName", [7]], [15, "f"]], [28, [2, [15, "k"], "getMetadata", [7, [15, "g"]]]]], [46, [36]]], [22, ["b", [15, "i"], [15, "e"]], [46, [2, [15, "k"], "abort", [7]], [36]]], [2, [15, "k"], "setMetadata", [7, [15, "d"], false]], [22, [28, [15, "j"]], [46, [2, [15, "k"], "setHitData", [7, "link_id", [44]]], [2, [15, "k"], "setHitData", [7, "link_url", [44]]], [2, [15, "k"], "setHitData", [7, "link_text", [44]]], [2, [15, "k"], "setHitData", [7, "file_name", [44]]], [2, [15, "k"], "setHitData", [7, "file_extension", [44]]]]]]]], [52, "b", ["require", "internal.getProductSettingsParameter"]], [52, "c", ["require", "internal.registerCcdCallback"]], [52, "d", "speculative"], [52, "e", "ae_block_downloads"], [52, "f", "file_download"], [52, "g", "em_event"], [36, [8, "registerDownloadActivityCallback", [15, "h"]]]], [36, ["a"]]]], ["$0"]]], [52, "__module_ccdEmFormActivity", [13, [41, "$0"], [3, "$0", [51, "", [7], [50, "a", [46], [50, "l", [46, "m", "n", "o"], [22, [1, [15, "k"], [20, [15, "n"], [44]]], [46, [3, "n", [20, [2, [15, "m"], "indexOf", [7, "AW-"]], 0]]]], ["d", [15, "m"], [51, "", [7, "p"], [52, "q", [2, [15, "p"], "getEventName", [7]]], [52, "r", [30, [20, [15, "q"], [15, "h"]], [20, [15, "q"], [15, "g"]]]], [22, [30, [28, [15, "r"]], [28, [2, [15, "p"], "getMetadata", [7, [15, "i"]]]]], [46, [36]]], [22, ["c", [15, "m"], [15, "f"]], [46, [2, [15, "p"], "abort", [7]], [36]]], [22, [15, "k"], [46, [22, [1, [28, [15, "n"]], [2, [15, "p"], "getMetadata", [7, [15, "j"]]]], [46, [2, [15, "p"], "abort", [7]], [36]]]]], [2, [15, "p"], "setMetadata", [7, [15, "e"], false]], [22, [28, [15, "o"]], [46, [2, [15, "p"], "setHitData", [7, "form_id", [44]]], [2, [15, "p"], "setHitData", [7, "form_name", [44]]], [2, [15, "p"], "setHitData", [7, "form_destination", [44]]], [2, [15, "p"], "setHitData", [7, "form_length", [44]]], [22, [20, [15, "q"], [15, "g"]], [46, [2, [15, "p"], "setHitData", [7, "form_submit_text", [44]]]], [46, [22, [20, [15, "q"], [15, "h"]], [46, [2, [15, "p"], "setHitData", [7, "first_field_id", [44]]], [2, [15, "p"], "setHitData", [7, "first_field_name", [44]]], [2, [15, "p"], "setHitData", [7, "first_field_type", [44]]], [2, [15, "p"], "setHitData", [7, "first_field_position", [44]]]]]]]]]]]], [52, "b", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "c", ["require", "internal.getProductSettingsParameter"]], [52, "d", ["require", "internal.registerCcdCallback"]], [52, "e", "speculative"], [52, "f", "ae_block_form"], [52, "g", "form_submit"], [52, "h", "form_start"], [52, "i", "em_event"], [52, "j", "form_event_canceled"], [52, "k", [28, [28, [16, [15, "b"], "enableFormSkipValidation"]]]], [36, [8, "registerFormActivityCallback", [15, "l"]]]], [36, ["a"]]]], ["$0"]]], [52, "__module_ccdEmOutboundClickActivity", [13, [41, "$0"], [3, "$0", [51, "", [7], [50, "a", [46], [50, "h", [46, "i", "j"], ["c", [15, "i"], [51, "", [7, "k"], [22, [30, [21, [2, [15, "k"], "getEventName", [7]], [15, "f"]], [28, [2, [15, "k"], "getMetadata", [7, [15, "g"]]]]], [46, [36]]], [22, ["b", [15, "i"], [15, "e"]], [46, [2, [15, "k"], "abort", [7]], [36]]], [2, [15, "k"], "setMetadata", [7, [15, "d"], false]], [22, [28, [15, "j"]], [46, [2, [15, "k"], "setHitData", [7, "link_id", [44]]], [2, [15, "k"], "setHitData", [7, "link_classes", [44]]], [2, [15, "k"], "setHitData", [7, "link_url", [44]]], [2, [15, "k"], "setHitData", [7, "link_domain", [44]]], [2, [15, "k"], "setHitData", [7, "outbound", [44]]]]]]]], [52, "b", ["require", "internal.getProductSettingsParameter"]], [52, "c", ["require", "internal.registerCcdCallback"]], [52, "d", "speculative"], [52, "e", "ae_block_outbound_click"], [52, "f", "click"], [52, "g", "em_event"], [36, [8, "registerOutbackClickActivityCallback", [15, "h"]]]], [36, ["a"]]]], ["$0"]]], [52, "__module_ccdEmPageViewActivity", [13, [41, "$0"], [3, "$0", [51, "", [7], [50, "a", [46], [50, "j", [46, "k"], ["c", [15, "k"], [51, "", [7, "l"], [22, [30, [21, [2, [15, "l"], "getEventName", [7]], [15, "h"]], [28, [2, [15, "l"], "getMetadata", [7, [15, "i"]]]]], [46, [36]]], [22, ["b", [15, "k"], [15, "g"]], [46, [2, [15, "l"], "abort", [7]], [36]]], [22, [28, [2, [15, "l"], "getMetadata", [7, [15, "f"]]]], [46, ["d", [15, "k"], "page_referrer", [2, [15, "l"], "getHitData", [7, "page_referrer"]]]]], [2, [15, "l"], "setMetadata", [7, [15, "e"], false]]]]], [52, "b", ["require", "internal.getProductSettingsParameter"]], [52, "c", ["require", "internal.registerCcdCallback"]], [52, "d", ["require", "internal.setRemoteConfigParameter"]], [52, "e", "speculative"], [52, "f", "is_sgtm_prehit"], [52, "g", "ae_block_history"], [52, "h", "page_view"], [52, "i", "em_event"], [36, [8, "registerPageViewActivityCallback", [15, "j"]]]], [36, ["a"]]]], ["$0"]]], [52, "__module_ccdEmSiteSearchActivity", [13, [41, "$0"], [3, "$0", [51, "", [7], [50, "a", [46], [50, "b", [46, "d", "e"], [52, "f", [2, [30, [15, "d"], ""], "split", [7, ","]]], [53, [41, "g"], [3, "g", 0], [63, [7, "g"], [23, [15, "g"], [17, [15, "f"], "length"]], [33, [15, "g"], [3, "g", [0, [15, "g"], 1]]], [46, [53, [52, "h", ["e", [2, [16, [15, "f"], [15, "g"]], "trim", [7]]]], [22, [21, [15, "h"], [44]], [46, [36, [15, "h"]]]]]]]]], [50, "c", [46, "d", "e", "f"], [52, "g", [8, "search_term", [15, "d"]]], [52, "h", [2, [30, [15, "e"], ""], "split", [7, ","]]], [53, [41, "i"], [3, "i", 0], [63, [7, "i"], [23, [15, "i"], [17, [15, "h"], "length"]], [33, [15, "i"], [3, "i", [0, [15, "i"], 1]]], [46, [53, [52, "j", [2, [16, [15, "h"], [15, "i"]], "trim", [7]]], [52, "k", ["f", [15, "j"]]], [22, [21, [15, "k"], [44]], [46, [43, [15, "g"], [0, "q_", [15, "j"]], [15, "k"]]]]]]]], [36, [15, "g"]]], [36, [8, "getSearchTerm", [15, "b"], "buildEventParams", [15, "c"]]]], [36, ["a"]]]], ["$0"]]], [52, "__module_ccdEmScrollActivity", [13, [41, "$0"], [3, "$0", [51, "", [7], [50, "a", [46], [50, "h", [46, "i", "j"], ["c", [15, "i"], [51, "", [7, "k"], [22, [30, [21, [2, [15, "k"], "getEventName", [7]], [15, "f"]], [28, [2, [15, "k"], "getMetadata", [7, [15, "g"]]]]], [46, [36]]], [22, ["b", [15, "i"], [15, "e"]], [46, [2, [15, "k"], "abort", [7]], [36]]], [2, [15, "k"], "setMetadata", [7, [15, "d"], false]], [22, [28, [15, "j"]], [46, [2, [15, "k"], "setHitData", [7, "percent_scrolled", [44]]]]]]]], [52, "b", ["require", "internal.getProductSettingsParameter"]], [52, "c", ["require", "internal.registerCcdCallback"]], [52, "d", "speculative"], [52, "e", "ae_block_scroll"], [52, "f", "scroll"], [52, "g", "em_event"], [36, [8, "registerScrollActivityCallback", [15, "h"]]]], [36, ["a"]]]], ["$0"]]], [52, "__module_ccdEmVideoActivity", [13, [41, "$0"], [3, "$0", [51, "", [7], [50, "a", [46], [50, "j", [46, "k", "l"], ["c", [15, "k"], [51, "", [7, "m"], [52, "n", [2, [15, "m"], "getEventName", [7]]], [52, "o", [30, [30, [20, [15, "n"], [15, "f"]], [20, [15, "n"], [15, "g"]]], [20, [15, "n"], [15, "h"]]]], [22, [30, [28, [15, "o"]], [28, [2, [15, "m"], "getMetadata", [7, [15, "i"]]]]], [46, [36]]], [22, ["b", [15, "k"], [15, "e"]], [46, [2, [15, "m"], "abort", [7]], [36]]], [2, [15, "m"], "setMetadata", [7, [15, "d"], false]], [22, [28, [15, "l"]], [46, [2, [15, "m"], "setHitData", [7, "video_current_time", [44]]], [2, [15, "m"], "setHitData", [7, "video_duration", [44]]], [2, [15, "m"], "setHitData", [7, "video_percent", [44]]], [2, [15, "m"], "setHitData", [7, "video_provider", [44]]], [2, [15, "m"], "setHitData", [7, "video_title", [44]]], [2, [15, "m"], "setHitData", [7, "video_url", [44]]], [2, [15, "m"], "setHitData", [7, "visible", [44]]]]]]]], [52, "b", ["require", "internal.getProductSettingsParameter"]], [52, "c", ["require", "internal.registerCcdCallback"]], [52, "d", "speculative"], [52, "e", "ae_block_video"], [52, "f", "video_start"], [52, "g", "video_progress"], [52, "h", "video_complete"], [52, "i", "em_event"], [36, [8, "registerVideoActivityCallback", [15, "j"]]]], [36, ["a"]]]], ["$0"]]], [52, "__module_ccdGaRegionScopedSettings", [13, [41, "$0"], [3, "$0", [51, "", [7], [50, "a", [46], [50, "j", [46, "l", "m"], [50, "r", [46, "s"], [22, [30, [28, [15, "p"]], [21, [17, [15, "p"], "length"], 2]], [46, [36, false]]], [52, "t", ["k", [15, "s"]]], [53, [41, "u"], [3, "u", 0], [63, [7, "u"], [23, [15, "u"], [17, [15, "t"], "length"]], [33, [15, "u"], [3, "u", [0, [15, "u"], 1]]], [46, [53, [52, "v", [16, [15, "t"], [15, "u"]]], [52, "w", [17, [15, "v"], "countryCode"]], [52, "x", [17, [15, "v"], "regionCode"]], [52, "y", [20, [15, "w"], [15, "p"]]], [52, "z", [30, [28, [15, "x"]], [20, [15, "x"], [15, "q"]]]], [22, [1, [15, "y"], [15, "z"]], [46, [36, true]]]]]]], [36, false]], [22, [28, [17, [15, "l"], "settingsTable"]], [46, [36]]], [52, "n", [30, [17, [15, "l"], "instanceDestinationId"], [17, ["b"], "containerId"]]], [52, "o", ["g", [15, "c"], [15, "m"]]], [52, "p", [13, [41, "$0"], [3, "$0", ["g", [15, "d"], [15, "m"]]], ["$0"]]], [52, "q", [13, [41, "$0"], [3, "$0", ["g", [15, "e"], [15, "m"]]], ["$0"]]], [53, [41, "s"], [3, "s", 0], [63, [7, "s"], [23, [15, "s"], [17, [17, [15, "l"], "settingsTable"], "length"]], [33, [15, "s"], [3, "s", [0, [15, "s"], 1]]], [46, [53, [52, "t", [16, [17, [15, "l"], "settingsTable"], [15, "s"]]], [22, [30, [17, [15, "t"], "disallowAllRegions"], ["r", [17, [15, "t"], "disallowedRegions"]]], [46, [53, [52, "u", [16, [15, "i"], [17, [15, "t"], "redactFieldGroup"]]], [22, [28, [15, "u"]], [46, [6]]], [53, [41, "v"], [3, "v", 0], [63, [7, "v"], [23, [15, "v"], [17, [15, "u"], "length"]], [33, [15, "v"], [3, "v", [0, [15, "v"], 1]]], [46, [53, [52, "w", [16, [15, "u"], [15, "v"]]], ["o", [15, "n"], [17, [15, "w"], "name"], [17, [15, "w"], "value"]]]]]]]]]]]]]], [50, "k", [46, "l"], [52, "m", [7]], [22, [28, [15, "l"]], [46, [36, [15, "m"]]]], [52, "n", [2, [15, "l"], "split", [7, ","]]], [53, [41, "o"], [3, "o", 0], [63, [7, "o"], [23, [15, "o"], [17, [15, "n"], "length"]], [33, [15, "o"], [3, "o", [0, [15, "o"], 1]]], [46, [53, [52, "p", [2, [16, [15, "n"], [15, "o"]], "trim", [7]]], [22, [28, [15, "p"]], [46, [6]]], [52, "q", [2, [15, "p"], "split", [7, "-"]]], [52, "r", [16, [15, "q"], 0]], [52, "s", [39, [20, [17, [15, "q"], "length"], 2], [15, "p"], [44]]], [22, [30, [28, [15, "r"]], [21, [17, [15, "r"], "length"], 2]], [46, [6]]], [22, [1, [21, [15, "s"], [44]], [30, [23, [17, [15, "s"], "length"], 4], [18, [17, [15, "s"], "length"], 6]]], [46, [6]]], [2, [15, "m"], "push", [7, [8, "countryCode", [15, "r"], "regionCode", [15, "s"]]]]]]]], [36, [15, "m"]]], [52, "b", ["require", "getContainerVersion"]], [52, "c", ["require", "internal.setRemoteConfigParameter"]], [52, "d", ["require", "internal.getCountryCode"]], [52, "e", ["require", "internal.getRegionCode"]], [52, "f", [15, "__module_activities"]], [52, "g", [17, [15, "f"], "withRequestContext"]], [41, "h"], [52, "i", [8, "GOOGLE_SIGNALS", [7, [8, "name", "allow_google_signals", "value", false]], "DEVICE_AND_GEO", [7, [8, "name", "geo_granularity", "value", true], [8, "name", "redact_device_info", "value", true]]]], [36, [8, "applyRegionScopedSettings", [15, "j"]]]], [36, ["a"]]]], ["$0"]]]],
    "entities": {
      "__ccd_auto_redact": {
        "2": true,
        "4": true
      },
      "__ccd_conversion_marking": {
        "2": true,
        "4": true
      },
      "__ccd_em_download": {
        "2": true,
        "4": true
      },
      "__ccd_em_form": {
        "2": true,
        "4": true
      },
      "__ccd_em_outbound_click": {
        "2": true,
        "4": true
      },
      "__ccd_em_page_view": {
        "2": true,
        "4": true
      },
      "__ccd_em_scroll": {
        "2": true,
        "4": true
      },
      "__ccd_em_site_search": {
        "2": true,
        "4": true
      },
      "__ccd_em_video": {
        "2": true,
        "4": true
      },
      "__ccd_ga_first": {
        "2": true,
        "4": true
      },
      "__ccd_ga_last": {
        "2": true,
        "4": true
      },
      "__ccd_ga_regscope": {
        "2": true,
        "4": true
      },
      "__ogt_1p_data_v2": {
        "2": true
      },
      "__ogt_google_signals": {
        "2": true,
        "4": true
      },
      "__set_product_settings": {
        "2": true,
        "4": true
      }
    },
    "permissions": {
      "__ccd_auto_redact": {},
      "__ccd_conversion_marking": {},
      "__ccd_em_download": {
        "listen_data_layer": {
          "accessType": "specific",
          "allowedEvents": ["gtm.linkClick"]
        },
        "access_template_storage": {},
        "detect_link_click_events": {
          "allowWaitForTags": ""
        }
      },
      "__ccd_em_form": {
        "access_template_storage": {},
        "listen_data_layer": {
          "accessType": "specific",
          "allowedEvents": ["gtm.formInteract", "gtm.formSubmit"]
        },
        "detect_form_submit_events": {
          "allowWaitForTags": ""
        },
        "detect_form_interaction_events": {}
      },
      "__ccd_em_outbound_click": {
        "get_url": {
          "urlParts": "any",
          "queriesAllowed": "any"
        },
        "listen_data_layer": {
          "accessType": "specific",
          "allowedEvents": ["gtm.linkClick"]
        },
        "access_template_storage": {},
        "detect_link_click_events": {
          "allowWaitForTags": ""
        }
      },
      "__ccd_em_page_view": {
        "listen_data_layer": {
          "accessType": "specific",
          "allowedEvents": ["gtm.historyChange-v2"]
        },
        "process_dom_events": {
          "targets": [{
            "targetType": "window",
            "eventName": "pushstate"
          }, {
            "targetType": "window",
            "eventName": "popstate"
          }]
        },
        "access_template_storage": {},
        "detect_history_change_events": {}
      },
      "__ccd_em_scroll": {
        "listen_data_layer": {
          "accessType": "specific",
          "allowedEvents": ["gtm.scrollDepth"]
        },
        "process_dom_events": {
          "targets": [{
            "targetType": "window",
            "eventName": "resize"
          }, {
            "targetType": "window",
            "eventName": "scroll"
          }]
        },
        "access_template_storage": {},
        "detect_scroll_events": {}
      },
      "__ccd_em_site_search": {
        "get_url": {
          "urlParts": "any",
          "queriesAllowed": "any"
        },
        "read_container_data": {}
      },
      "__ccd_em_video": {
        "listen_data_layer": {
          "accessType": "specific",
          "allowedEvents": ["gtm.video"]
        },
        "access_template_storage": {},
        "detect_youtube_activity_events": {
          "allowFixMissingJavaScriptApi": false
        }
      },
      "__ccd_ga_first": {},
      "__ccd_ga_last": {},
      "__ccd_ga_regscope": {
        "read_container_data": {}
      },
      "__ogt_1p_data_v2": {
        "detect_user_provided_data": {
          "limitDataSources": true,
          "allowAutoDataSources": true,
          "allowManualDataSources": false,
          "allowCodeDataSources": false
        }
      },
      "__ogt_google_signals": {
        "read_container_data": {}
      },
      "__set_product_settings": {}
    },
    "security_groups": {
      "google": ["__ccd_auto_redact", "__ccd_conversion_marking", "__ccd_em_download", "__ccd_em_form", "__ccd_em_outbound_click", "__ccd_em_page_view", "__ccd_em_scroll", "__ccd_em_site_search", "__ccd_em_video", "__ccd_ga_first", "__ccd_ga_last", "__ccd_ga_regscope", "__ogt_1p_data_v2", "__ogt_google_signals", "__set_product_settings"]
    }
  };
  var aa,
    ba = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? {
          done: !1,
          value: a[b++]
        } : {
          done: !0
        };
      };
    },
    ea = function (a) {
      return a.raw = a;
    },
    fa = function (a, b) {
      a.raw = b;
      return a;
    },
    ia = function (a) {
      var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if ("number" == typeof a.length) return {
        next: ba(a)
      };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    ka = function (a) {
      for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
      return c;
    },
    la = function (a) {
      return a instanceof Array ? a : ka(ia(a));
    },
    ma = "function" == typeof Object.create ? Object.create : function (a) {
      var b = function () {};
      b.prototype = a;
      return new b();
    },
    na;
  if ("function" == typeof Object.setPrototypeOf) na = Object.setPrototypeOf;else {
    var oa;
    a: {
      var pa = {
          a: !0
        },
        qa = {};
      try {
        qa.__proto__ = pa;
        oa = qa.a;
        break a;
      } catch (a) {}
      oa = !1;
    }
    na = oa ? function (a, b) {
      a.__proto__ = b;
      if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
      return a;
    } : null;
  }
  var sa = na,
    ta = function (a, b) {
      a.prototype = ma(b.prototype);
      a.prototype.constructor = a;
      if (sa) sa(a, b);else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
        var d = Object.getOwnPropertyDescriptor(b, c);
        d && Object.defineProperty(a, c, d);
      } else a[c] = b[c];
      a.Sn = b.prototype;
    },
    ua = function () {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
      return b;
    }; /*
       Copyright The Closure Library Authors.
       SPDX-License-Identifier: Apache-2.0
       */
  var va = this || self,
    wa = function (a) {
      return a;
    };
  var xa = function (a, b) {
    this.h = a;
    this.C = b;
  };
  var ya = function () {
    this.C = {};
    this.H = {};
  };
  aa = ya.prototype;
  aa.get = function (a) {
    return this.C["dust." + a];
  };
  aa.set = function (a, b) {
    a = "dust." + a;
    this.H.hasOwnProperty(a) || (this.C[a] = b);
  };
  aa.Ph = function (a, b) {
    this.set(a, b);
    this.H["dust." + a] = !0;
  };
  aa.has = function (a) {
    return this.C.hasOwnProperty("dust." + a);
  };
  aa.remove = function (a) {
    a = "dust." + a;
    this.H.hasOwnProperty(a) || delete this.C[a];
  };
  var za = function () {
    this.quota = {};
  };
  za.prototype.reset = function () {
    this.quota = {};
  };
  var Aa = function (a, b) {
    this.T = a;
    this.N = function (c, d, e) {
      return c.apply(d, e);
    };
    this.D = b;
    this.C = new ya();
    this.h = this.H = void 0;
  };
  Aa.prototype.add = function (a, b) {
    Ba(this, a, b, !1);
  };
  var Ba = function (a, b, c, d) {
    d ? a.C.Ph(b, c) : a.C.set(b, c);
  };
  Aa.prototype.set = function (a, b) {
    !this.C.has(a) && this.D && this.D.has(a) ? this.D.set(a, b) : this.C.set(a, b);
  };
  Aa.prototype.get = function (a) {
    return this.C.has(a) ? this.C.get(a) : this.D ? this.D.get(a) : void 0;
  };
  Aa.prototype.has = function (a) {
    return !!this.C.has(a) || !(!this.D || !this.D.has(a));
  };
  var Ca = function (a) {
    var b = new Aa(a.T, a);
    a.H && (b.H = a.H);
    b.N = a.N;
    b.h = a.h;
    return b;
  };
  var Da = function () {},
    Ea = function (a) {
      return "function" === typeof a;
    },
    h = function (a) {
      return "string" === typeof a;
    },
    Ha = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    Ia = Array.isArray,
    Ja = function (a, b) {
      if (a && Ia(a)) for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    Ka = function (a, b) {
      if (!Ha(a) || !Ha(b) || a > b) a = 0, b = 2147483647;
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    Ma = function (a, b) {
      for (var c = new La(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    l = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    Na = function (a) {
      return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"));
    },
    Oa = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Pa = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    Qa = function (a) {
      var b = [];
      if (Ia(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Sa = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Ta = function () {
      return new Date(Date.now());
    },
    Ua = function () {
      return Ta().getTime();
    },
    La = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  La.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  La.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Va = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Wa = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Xa = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Ya = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Za = function (a, b) {
      return a.substring(0, b.length) === b;
    },
    $a = function (a, b) {
      var c = z;
      b = b || [];
      for (var d = c, e = 0; e < a.length - 1; e++) {
        if (!d.hasOwnProperty(a[e])) return;
        d = d[a[e]];
        if (0 <= b.indexOf(d)) return;
      }
      return d;
    },
    ab = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    bb = /^\w{1,9}$/,
    cb = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      l(a, function (d, e) {
        bb.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    db = function (a, b) {
      function c() {
        ++d === b && (e(), e = null, c.done = !0);
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    };
  function eb(a, b) {
    for (var c, d = 0; d < b.length && !(c = fb(a, b[d]), c instanceof xa); d++);
    return c;
  }
  function fb(a, b) {
    try {
      var c = a.get(String(b[0]));
      if (!c || "function" !== typeof c.invoke) throw Error("Attempting to execute non-function " + b[0] + ".");
      return c.invoke.apply(c, [a].concat(b.slice(1)));
    } catch (e) {
      var d = a.H;
      d && d(e, b.context ? {
        id: b[0],
        line: b.context.line
      } : null);
      throw e;
    }
  }
  ;
  var gb = function () {
    this.D = new za();
    this.h = new Aa(this.D);
  };
  gb.prototype.execute = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 0);
    return this.C(c);
  };
  gb.prototype.C = function (a) {
    for (var b, c = 0; c < arguments.length; c++) b = fb(this.h, arguments[c]);
    return b;
  };
  gb.prototype.H = function (a, b) {
    var c = Ca(this.h);
    c.h = a;
    for (var d, e = 1; e < arguments.length; e++) d = fb(c, arguments[e]);
    return d;
  };
  var hb = function () {
    ya.call(this);
    this.D = !1;
  };
  ta(hb, ya);
  var ib = function (a, b) {
    var c = [],
      d;
    for (d in a.C) if (a.C.hasOwnProperty(d)) switch (d = d.substr(5), b) {
      case 1:
        c.push(d);
        break;
      case 2:
        c.push(a.get(d));
        break;
      case 3:
        c.push([d, a.get(d)]);
    }
    return c;
  };
  aa = hb.prototype;
  aa.set = function (a, b) {
    this.D || ya.prototype.set.call(this, a, b);
  };
  aa.Ph = function (a, b) {
    this.D || ya.prototype.Ph.call(this, a, b);
  };
  aa.remove = function (a) {
    this.D || ya.prototype.remove.call(this, a);
  };
  aa.Cb = function () {
    this.D = !0;
  };
  aa.Bj = function () {
    return this.D;
  }; /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var jb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    lb = function (a) {
      if (null == a) return String(a);
      var b = jb.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    mb = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    nb = function (a) {
      if (!a || "object" != lb(a) || a.nodeType || a == a.window) return !1;
      try {
        if (a.constructor && !mb(a, "constructor") && !mb(a.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || mb(a, b);
    },
    B = function (a, b) {
      var c = b || ("array" == lb(a) ? [] : {}),
        d;
      for (d in a) if (mb(a, d)) {
        var e = a[d];
        "array" == lb(e) ? ("array" != lb(c[d]) && (c[d] = []), c[d] = B(e, c[d])) : nb(e) ? (nb(c[d]) || (c[d] = {}), c[d] = B(e, c[d])) : c[d] = e;
      }
      return c;
    };
  var ob = function (a) {
      for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
      return b;
    },
    pb = function (a) {
      if (void 0 == a || Ia(a) || nb(a)) return !0;
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
          return !0;
      }
      return !1;
    },
    qb = function (a) {
      return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10);
    };
  var rb = function (a) {
    this.C = new hb();
    this.h = [];
    this.D = !1;
    a = a || [];
    for (var b in a) a.hasOwnProperty(b) && (qb(b) ? this.h[Number(b)] = a[Number(b)] : this.C.set(b, a[b]));
  };
  aa = rb.prototype;
  aa.toString = function (a) {
    if (a && 0 <= a.indexOf(this)) return "";
    for (var b = [], c = 0; c < this.h.length; c++) {
      var d = this.h[c];
      null === d || void 0 === d ? b.push("") : d instanceof rb ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(String(d));
    }
    return b.join(",");
  };
  aa.set = function (a, b) {
    if (!this.D) if ("length" === a) {
      if (!qb(b)) throw Error("RangeError: Length property must be a valid integer.");
      this.h.length = Number(b);
    } else qb(a) ? this.h[Number(a)] = b : this.C.set(a, b);
  };
  aa.get = function (a) {
    return "length" === a ? this.length() : qb(a) ? this.h[Number(a)] : this.C.get(a);
  };
  aa.length = function () {
    return this.h.length;
  };
  aa.Tb = function () {
    for (var a = ib(this.C, 1), b = 0; b < this.h.length; b++) a.push(b + "");
    return new rb(a);
  };
  aa.remove = function (a) {
    qb(a) ? delete this.h[Number(a)] : this.C.remove(a);
  };
  aa.pop = function () {
    return this.h.pop();
  };
  aa.push = function (a) {
    return this.h.push.apply(this.h, Array.prototype.slice.call(arguments));
  };
  aa.shift = function () {
    return this.h.shift();
  };
  aa.splice = function (a, b, c) {
    return new rb(this.h.splice.apply(this.h, arguments));
  };
  aa.unshift = function (a) {
    return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments));
  };
  aa.has = function (a) {
    return qb(a) && this.h.hasOwnProperty(a) || this.C.has(a);
  };
  aa.Cb = function () {
    this.D = !0;
    Object.freeze(this.h);
    this.C.Cb();
  };
  aa.Bj = function () {
    return this.D;
  };
  var sb = function () {
    hb.call(this);
  };
  ta(sb, hb);
  sb.prototype.Tb = function () {
    return new rb(ib(this, 1));
  };
  function tb() {
    for (var a = ub, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function vb() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var ub, wb;
  function xb(a) {
    ub = ub || vb();
    wb = wb || tb();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        k = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = (f & 3) << 4 | g >> 4,
        p = (g & 15) << 2 | k >> 6,
        q = k & 63;
      e || (q = 64, d || (p = 64));
      b.push(ub[m], ub[n], ub[p], ub[q]);
    }
    return b.join("");
  }
  function yb(a) {
    function b(m) {
      for (; d < a.length;) {
        var n = a.charAt(d++),
          p = wb[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    ub = ub || vb();
    wb = wb || tb();
    for (var c = "", d = 0;;) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        k = b(64);
      if (64 === k && -1 === e) return c;
      c += String.fromCharCode(e << 2 | f >> 4);
      64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != k && (c += String.fromCharCode(g << 6 & 192 | k)));
    }
  }
  ;
  var zb = {},
    Ab = function (a, b) {
      zb[a] = zb[a] || [];
      zb[a][b] = !0;
    },
    Bb = function () {
      delete zb.GA4_EVENT;
    },
    Cb = function (a) {
      var b = zb[a];
      if (!b || 0 === b.length) return "";
      for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
      0 < d && c.push(String.fromCharCode(d));
      return xb(c.join("")).replace(/\.+$/, "");
    };
  var Db = Array.prototype.indexOf ? function (a, b) {
    return Array.prototype.indexOf.call(a, b, void 0);
  } : function (a, b) {
    if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
    for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
    return -1;
  };
  var Eb,
    Fb = function () {
      if (void 0 === Eb) {
        var a = null,
          b = va.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: wa,
              createScript: wa,
              createScriptURL: wa
            });
          } catch (c) {
            va.console && va.console.error(c.message);
          }
          Eb = a;
        } else Eb = a;
      }
      return Eb;
    };
  var Hb = function (a) {
    this.h = a;
  };
  Hb.prototype.toString = function () {
    return this.h + "";
  };
  var Ib = function (a) {
      return a instanceof Hb && a.constructor === Hb ? a.h : "type_error:TrustedResourceUrl";
    },
    Jb = {},
    Kb = function (a) {
      var b = a,
        c = Fb(),
        d = c ? c.createScriptURL(b) : b;
      return new Hb(d, Jb);
    };
  var Lb = function (a) {
    this.h = a;
  };
  Lb.prototype.toString = function () {
    return this.h.toString();
  };
  var Mb = function (a) {
      return a instanceof Lb && a.constructor === Lb ? a.h : "type_error:SafeUrl";
    },
    Nb = {},
    Ob = new Lb("about:invalid#zClosurez", Nb);
  var Pb, Qb;
  a: {
    for (var Rb = ["CLOSURE_FLAGS"], Sb = va, Tb = 0; Tb < Rb.length; Tb++) if (Sb = Sb[Rb[Tb]], null == Sb) {
      Qb = null;
      break a;
    }
    Qb = Sb;
  }
  var Ub = Qb && Qb[610401301];
  Pb = null != Ub ? Ub : !1;
  function Vb() {
    var a = va.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var Wb,
    Xb = va.navigator;
  Wb = Xb ? Xb.userAgentData || null : null;
  function Yb(a) {
    return Pb ? Wb ? Wb.brands.some(function (b) {
      var c = b.brand;
      return c && -1 != c.indexOf(a);
    }) : !1 : !1;
  }
  function Zb(a) {
    return -1 != Vb().indexOf(a);
  }
  ;
  function $b() {
    return Pb ? !!Wb && 0 < Wb.brands.length : !1;
  }
  function ac() {
    return $b() ? !1 : Zb("Opera");
  }
  function bc() {
    return Zb("Firefox") || Zb("FxiOS");
  }
  function cc() {
    return $b() ? Yb("Chromium") : (Zb("Chrome") || Zb("CriOS")) && !($b() ? 0 : Zb("Edge")) || Zb("Silk");
  }
  ;
  var dc = {},
    ec = function (a) {
      this.h = a;
    };
  ec.prototype.toString = function () {
    return this.h.toString();
  };
  var fc = function (a) {
    return a instanceof ec && a.constructor === ec ? a.h : "type_error:SafeHtml";
  }; /*
     SPDX-License-Identifier: Apache-2.0
     */
  var gc = ea([""]),
    hc = fa(["\x00"], ["\\0"]),
    ic = fa(["\n"], ["\\n"]),
    jc = fa(["\x00"], ["\\u0000"]);
  function kc(a) {
    return -1 === a.toString().indexOf("`");
  }
  kc(function (a) {
    return a(gc);
  }) || kc(function (a) {
    return a(hc);
  }) || kc(function (a) {
    return a(ic);
  }) || kc(function (a) {
    return a(jc);
  });
  var lc = function (a) {
    this.gm = a;
  };
  function mc(a) {
    return new lc(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var nc = [mc("data"), mc("http"), mc("https"), mc("mailto"), mc("ftp"), new lc(function (a) {
    return /^[^:]*([/?#]|$)/.test(a);
  })];
  function oc(a, b) {
    b = void 0 === b ? nc : b;
    if (a instanceof Lb) return a;
    for (var c = 0; c < b.length; ++c) {
      var d = b[c];
      if (d instanceof lc && d.gm(a)) return new Lb(a, Nb);
    }
  }
  function pc(a) {
    var b;
    b = void 0 === b ? nc : b;
    return oc(a, b) || Ob;
  }
  var rc = "function" === typeof URL;
  function sc(a) {
    var b;
    a: if (rc) {
      var c;
      try {
        c = new URL(a);
      } catch (g) {
        b = "https:";
        break a;
      }
      b = c.protocol;
    } else {
      var d;
      b: {
        var e = document.createElement("a");
        try {
          e.href = a;
        } catch (g) {
          d = void 0;
          break b;
        }
        var f = e.protocol;
        d = ":" === f || "" === f ? "https:" : f;
      }
      b = d;
    }
    if ("javascript:" !== b) return a;
  }
  var tc = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
  var uc = {};
  var vc = function () {},
    wc = function (a) {
      this.h = a;
    };
  ta(wc, vc);
  wc.prototype.toString = function () {
    return this.h;
  };
  function xc(a, b) {
    var c = [new wc(yc[0].toLowerCase(), uc)];
    if (0 === c.length) throw Error("");
    var d = c.map(function (f) {
        var g;
        if (f instanceof wc) g = f.h;else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (d.every(function (f) {
      return 0 !== e.indexOf(f);
    })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
    a.setAttribute(b, "true");
  }
  function zc(a) {
    var b = a.tagName;
    if ("SCRIPT" === b || "STYLE" === b) throw Error("");
  }
  ;
  function Ac(a, b) {
    var c = b instanceof Lb ? Mb(b) : sc(b);
    void 0 !== c && (a.action = c);
  }
  ;
  function Bc(a) {
    var b = a = Cc(a),
      c = Fb(),
      d = c ? c.createHTML(b) : b;
    return new ec(d, dc);
  }
  function Cc(a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a;
  }
  ;
  var z = window,
    E = document,
    Dc = navigator,
    Ec = E.currentScript && E.currentScript.src,
    Fc = function (a, b) {
      var c = z[a];
      z[a] = void 0 === c ? b : c;
      return z[a];
    },
    Gc = function (a, b) {
      b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () {
        a.readyState in {
          loaded: 1,
          complete: 1
        } && (a.onreadystatechange = null, b());
      });
    },
    Hc = {
      async: 1,
      nonce: 1,
      onerror: 1,
      onload: 1,
      src: 1,
      type: 1
    },
    Ic = {
      onload: 1,
      src: 1,
      width: 1,
      height: 1,
      style: 1
    };
  function Jc(a, b, c) {
    b && l(b, function (d, e) {
      d = d.toLowerCase();
      c.hasOwnProperty(d) || a.setAttribute(d, e);
    });
  }
  var Kc = function (a, b, c, d, e) {
      var f = E.createElement("script");
      Jc(f, d, Hc);
      f.type = "text/javascript";
      f.async = d && !1 === d.async ? !1 : !0;
      var g;
      g = Kb(Cc(a));
      f.src = Ib(g);
      var k,
        m,
        n,
        p = null == (n = (m = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : n.call(m, "script[nonce]");
      (k = p ? p.nonce || p.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", k);
      Gc(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);else {
        var q = E.getElementsByTagName("script")[0] || E.body || E.head;
        q.parentNode.insertBefore(f, q);
      }
      return f;
    },
    Lc = function () {
      if (Ec) {
        var a = Ec.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    Mc = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var g = e,
        k = !1;
      g || (g = E.createElement("iframe"), k = !0);
      Jc(g, c, Ic);
      d && l(d, function (n, p) {
        g.dataset[n] = p;
      });
      f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
      if (k) {
        var m = E.body && E.body.lastChild || E.body || E.head;
        m.parentNode.insertBefore(g, m);
      }
      Gc(g, b);
      void 0 !== a && (g.src = a);
      return g;
    },
    Nc = function (a, b, c, d) {
      var e = new Image(1, 1);
      Jc(e, d, {});
      e.onload = function () {
        e.onload = null;
        b && b();
      };
      e.onerror = function () {
        e.onerror = null;
        c && c();
      };
      e.src = a;
    },
    Oc = function (a, b, c, d) {
      a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c);
    },
    Pc = function (a, b, c) {
      a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c);
    },
    H = function (a) {
      z.setTimeout(a, 0);
    },
    Qc = function (a, b) {
      return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null;
    },
    Rc = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Sc = function (a) {
      var b = E.createElement("div"),
        c = b,
        d = Bc("A<div>" + a + "</div>");
      1 === c.nodeType && zc(c);
      c.innerHTML = fc(d);
      b = b.lastChild;
      for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
      return e;
    },
    Tc = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Uc = function (a) {
      var b;
      try {
        b = Dc.sendBeacon && Dc.sendBeacon(a);
      } catch (c) {
        Ab("TAGGING", 15);
      }
      b || Nc(a);
    },
    Vc = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    Wc = function (a) {
      var b = {
        headers: {
          "Attribution-Reporting-Eligible": "trigger"
        },
        keepalive: !0,
        attributionReporting: {
          eventSourceEligible: !0,
          triggerEligible: !0
        }
      };
      try {
        z.fetch(a, b);
      } catch (c) {}
    },
    Xc = function () {
      var a = z.performance;
      if (a && Ea(a.now)) return a.now();
    },
    Yc = function () {
      return z.performance || void 0;
    };
  var Zc = function (a, b) {
      return I(this, a) && I(this, b);
    },
    $c = function (a, b) {
      return I(this, a) === I(this, b);
    },
    ad = function (a, b) {
      return I(this, a) || I(this, b);
    },
    bd = function (a, b) {
      a = I(this, a);
      b = I(this, b);
      return -1 < String(a).indexOf(String(b));
    },
    cd = function (a, b) {
      a = String(I(this, a));
      b = String(I(this, b));
      return a.substring(0, b.length) === b;
    },
    dd = function (a, b) {
      a = I(this, a);
      b = I(this, b);
      switch (a) {
        case "pageLocation":
          var c = z.location.href;
          b instanceof sb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
          return c;
      }
    };
  var ed = function (a, b) {
    hb.call(this);
    this.N = a;
    this.T = b;
  };
  ta(ed, hb);
  ed.prototype.toString = function () {
    return this.N;
  };
  ed.prototype.Tb = function () {
    return new rb(ib(this, 1));
  };
  ed.prototype.invoke = function (a, b) {
    return this.T.apply(new fd(this, a), Array.prototype.slice.call(arguments, 1));
  };
  ed.prototype.h = function (a, b) {
    try {
      return this.invoke.apply(this, Array.prototype.slice.call(arguments, 0));
    } catch (c) {}
  };
  var fd = function (a, b) {
      this.C = a;
      this.h = b;
    },
    I = function (a, b) {
      return Ia(b) ? fb(a.h, b) : b;
    },
    J = function (a) {
      return a.C.N;
    };
  var gd = function () {
    this.map = new Map();
  };
  gd.prototype.set = function (a, b) {
    this.map.set(a, b);
  };
  gd.prototype.get = function (a) {
    return this.map.get(a);
  };
  var hd = function () {
    this.keys = [];
    this.values = [];
  };
  hd.prototype.set = function (a, b) {
    this.keys.push(a);
    this.values.push(b);
  };
  hd.prototype.get = function (a) {
    var b = this.keys.indexOf(a);
    if (-1 < b) return this.values[b];
  };
  function id() {
    try {
      return Map ? new gd() : new hd();
    } catch (a) {
      return new hd();
    }
  }
  ;
  var jd = function (a) {
    if (a instanceof jd) return a;
    if (pb(a)) throw Error("Type of given value has an equivalent Pixie type.");
    this.h = a;
  };
  jd.prototype.toString = function () {
    return String(this.h);
  };
  var ld = function (a) {
    hb.call(this);
    this.h = a;
    this.set("then", kd(this));
    this.set("catch", kd(this, !0));
    this.set("finally", kd(this, !1, !0));
  };
  ta(ld, sb);
  var kd = function (a, b, c) {
    b = void 0 === b ? !1 : b;
    c = void 0 === c ? !1 : c;
    return new ed("", function (d, e) {
      b && (e = d, d = void 0);
      c && (e = d);
      d instanceof ed || (d = void 0);
      e instanceof ed || (e = void 0);
      var f = Ca(this.h),
        g = function (m) {
          return function (n) {
            return c ? (m.invoke(f), a.h) : m.invoke(f, n);
          };
        },
        k = a.h.then(d && g(d), e && g(e));
      return new ld(k);
    });
  };
  var nd = function (a, b, c) {
      var d = id(),
        e = function (g, k) {
          for (var m = ib(g, 1), n = 0; n < m.length; n++) k[m[n]] = f(g.get(m[n]));
        },
        f = function (g) {
          var k = d.get(g);
          if (k) return k;
          if (g instanceof rb) {
            var m = [];
            d.set(g, m);
            for (var n = g.Tb(), p = 0; p < n.length(); p++) m[n.get(p)] = f(g.get(n.get(p)));
            return m;
          }
          if (g instanceof ld) return g.h;
          if (g instanceof sb) {
            var q = {};
            d.set(g, q);
            e(g, q);
            return q;
          }
          if (g instanceof ed) {
            var r = function () {
              for (var u = Array.prototype.slice.call(arguments, 0), v = 0; v < u.length; v++) u[v] = md(u[v], b, c);
              var w = new Aa(b ? b.T : new za());
              b && (w.h = b.h);
              return f(g.invoke.apply(g, [w].concat(u)));
            };
            d.set(g, r);
            e(g, r);
            return r;
          }
          var t = !1;
          switch (c) {
            case 1:
              t = !0;
              break;
            case 2:
              t = !1;
              break;
            case 3:
              t = !1;
              break;
            default:
          }
          if (g instanceof jd && t) return g.h;
          switch (typeof g) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
              return g;
            case "object":
              if (null === g) return null;
          }
        };
      return f(a);
    },
    md = function (a, b, c) {
      var d = id(),
        e = function (g, k) {
          for (var m in g) g.hasOwnProperty(m) && k.set(m, f(g[m]));
        },
        f = function (g) {
          var k = d.get(g);
          if (k) return k;
          if (Ia(g) || Na(g)) {
            var m = new rb([]);
            d.set(g, m);
            for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
            return m;
          }
          if (nb(g)) {
            var p = new sb();
            d.set(g, p);
            e(g, p);
            return p;
          }
          if ("function" === typeof g) {
            var q = new ed("", function (x) {
              for (var y = Array.prototype.slice.call(arguments, 0), A = 0; A < y.length; A++) y[A] = nd(I(this, y[A]), b, c);
              return f((0, this.h.N)(g, g, y));
            });
            d.set(g, q);
            e(g, q);
            return q;
          }
          var v = typeof g;
          if (null === g || "string" === v || "number" === v || "boolean" === v) return g;
          var w = !1;
          switch (c) {
            case 1:
              w = !0;
              break;
            case 2:
              w = !1;
              break;
            default:
          }
          if (void 0 !== g && w) return new jd(g);
        };
      return f(a);
    };
  var od = function () {
    var a = !1;
    return a;
  };
  var pd = {
    supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
    concat: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      for (var e = 1; e < arguments.length; e++) if (arguments[e] instanceof rb) for (var f = arguments[e], g = 0; g < f.length(); g++) c.push(f.get(g));else c.push(arguments[e]);
      return new rb(c);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++) if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
      return new rb(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.invoke(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = void 0 === c ? 0 : Number(c);
      0 > e && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++) if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
      for (var f = e; 0 <= f; f--) if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
      return new rb(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a, b) {
      return this.push.apply(this, Array.prototype.slice.call(arguments, 1));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f = 0;
      if (void 0 !== c) e = c;else {
        if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
        for (var g = 0; g < d; g++) if (this.has(g)) {
          e = this.get(g);
          f = g + 1;
          break;
        }
        if (g === d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var k = f; k < d; k++) this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f = d - 1;
      if (void 0 !== c) e = c;else {
        if (0 === d) throw Error("TypeError: ReduceRight on List with no elements.");
        for (var g = 1; g <= d; g++) if (this.has(d - g)) {
          e = this.get(d - g);
          f = d - (g + 1);
          break;
        }
        if (g > d) throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var k = f; 0 <= k; k--) this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
      return e;
    },
    reverse: function () {
      for (var a = ob(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      void 0 === b && (b = 0);
      b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
      c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new rb(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++) if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = ob(this);
      void 0 === b ? c.sort() : c.sort(function (e, f) {
        return Number(b.invoke(a, e, f));
      });
      for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d);
      return this;
    },
    splice: function (a, b, c, d) {
      return this.splice.apply(this, Array.prototype.splice.call(arguments, 1, arguments.length - 1));
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a, b) {
      return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1));
    }
  };
  var qd = function (a) {
    var b;
    b = Error.call(this, a);
    this.message = b.message;
    "stack" in b && (this.stack = b.stack);
  };
  ta(qd, Error);
  var rd = {
      charAt: 1,
      concat: 1,
      indexOf: 1,
      lastIndexOf: 1,
      match: 1,
      replace: 1,
      search: 1,
      slice: 1,
      split: 1,
      substring: 1,
      toLowerCase: 1,
      toLocaleLowerCase: 1,
      toString: 1,
      toUpperCase: 1,
      toLocaleUpperCase: 1,
      trim: 1
    },
    sd = new xa("break"),
    td = new xa("continue"),
    ud = function (a, b) {
      return I(this, a) + I(this, b);
    },
    vd = function (a, b) {
      return I(this, a) && I(this, b);
    },
    wd = function (a, b, c) {
      a = I(this, a);
      b = I(this, b);
      c = I(this, c);
      if (!(c instanceof rb)) throw Error("Error: Non-List argument given to Apply instruction.");
      if (null === a || void 0 === a) {
        var d = "TypeError: Can't read property " + b + " of " + a + ".";
        if (od()) throw new qd(d);
        throw Error(d);
      }
      var e = "number" === typeof a;
      if ("boolean" === typeof a || e) {
        if ("toString" === b) {
          if (e && c.length()) {
            var f = nd(c.get(0));
            try {
              return a.toString(f);
            } catch (y) {}
          }
          return a.toString();
        }
        var g = "TypeError: " + a + "." + b + " is not a function.";
        if (od()) throw new qd(g);
        throw Error(g);
      }
      if ("string" === typeof a) {
        if (rd.hasOwnProperty(b)) {
          var k = 2;
          k = 1;
          var m = nd(c, void 0, k);
          return md(a[b].apply(a, m), this.h);
        }
        var n = "TypeError: " + b + " is not a function";
        if (od()) throw new qd(n);
        throw Error(n);
      }
      if (a instanceof rb) {
        if (a.has(b)) {
          var p = a.get(b);
          if (p instanceof ed) {
            var q = ob(c);
            q.unshift(this.h);
            return p.invoke.apply(p, q);
          }
          var r = "TypeError: " + b + " is not a function";
          if (od()) throw new qd(r);
          throw Error(r);
        }
        if (0 <= pd.supportedMethods.indexOf(b)) {
          var t = ob(c);
          t.unshift(this.h);
          return pd[b].apply(a, t);
        }
      }
      if (a instanceof ed || a instanceof sb) {
        if (a.has(b)) {
          var u = a.get(b);
          if (u instanceof ed) {
            var v = ob(c);
            v.unshift(this.h);
            return u.invoke.apply(u, v);
          }
          var w = "TypeError: " + b + " is not a function";
          if (od()) throw new qd(w);
          throw Error(w);
        }
        if ("toString" === b) return a instanceof ed ? a.N : a.toString();
        if ("hasOwnProperty" === b) return a.has.apply(a, ob(c));
      }
      if (a instanceof jd && "toString" === b) return a.toString();
      var x = "TypeError: Object has no '" + b + "' property.";
      if (od()) throw new qd(x);
      throw Error(x);
    },
    xd = function (a, b) {
      a = I(this, a);
      if ("string" !== typeof a) throw Error("Invalid key name given for assignment.");
      var c = this.h;
      if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
      var d = I(this, b);
      c.set(a, d);
      return d;
    },
    yd = function (a) {
      var b = Ca(this.h),
        c = eb(b, Array.prototype.slice.apply(arguments));
      if (c instanceof xa) return c;
    },
    zd = function () {
      return sd;
    },
    Ad = function (a) {
      for (var b = I(this, a), c = 0; c < b.length; c++) {
        var d = I(this, b[c]);
        if (d instanceof xa) return d;
      }
    },
    Bd = function (a) {
      for (var b = this.h, c = 0; c < arguments.length - 1; c += 2) {
        var d = arguments[c];
        if ("string" === typeof d) {
          var e = I(this, arguments[c + 1]);
          Ba(b, d, e, !0);
        }
      }
    },
    Cd = function () {
      return td;
    },
    Dd = function (a, b) {
      return new xa(a, I(this, b));
    },
    Ed = function (a, b, c) {
      var d = new rb();
      b = I(this, b);
      for (var e = 0; e < b.length; e++) d.push(b[e]);
      var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
      this.h.add(a, I(this, f));
    },
    Fd = function (a, b) {
      return I(this, a) / I(this, b);
    },
    Gd = function (a, b) {
      a = I(this, a);
      b = I(this, b);
      var c = a instanceof jd,
        d = b instanceof jd;
      return c || d ? c && d ? a.h == b.h : !1 : a == b;
    },
    Hd = function (a) {
      for (var b, c = 0; c < arguments.length; c++) b = I(this, arguments[c]);
      return b;
    };
  function Id(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = eb(f, d);
      if (g instanceof xa) {
        if ("break" === g.h) break;
        if ("return" === g.h) return g;
      }
    }
  }
  function Jd(a, b, c) {
    if ("string" === typeof b) return Id(a, function () {
      return b.length;
    }, function (f) {
      return f;
    }, c);
    if (b instanceof sb || b instanceof rb || b instanceof ed) {
      var d = b.Tb(),
        e = d.length();
      return Id(a, function () {
        return e;
      }, function (f) {
        return d.get(f);
      }, c);
    }
  }
  var Kd = function (a, b, c) {
      a = I(this, a);
      b = I(this, b);
      c = I(this, c);
      var d = this.h;
      return Jd(function (e) {
        d.set(a, e);
        return d;
      }, b, c);
    },
    Ld = function (a, b, c) {
      a = I(this, a);
      b = I(this, b);
      c = I(this, c);
      var d = this.h;
      return Jd(function (e) {
        var f = Ca(d);
        Ba(f, a, e, !0);
        return f;
      }, b, c);
    },
    Md = function (a, b, c) {
      a = I(this, a);
      b = I(this, b);
      c = I(this, c);
      var d = this.h;
      return Jd(function (e) {
        var f = Ca(d);
        f.add(a, e);
        return f;
      }, b, c);
    },
    Od = function (a, b, c) {
      a = I(this, a);
      b = I(this, b);
      c = I(this, c);
      var d = this.h;
      return Nd(function (e) {
        d.set(a, e);
        return d;
      }, b, c);
    },
    Pd = function (a, b, c) {
      a = I(this, a);
      b = I(this, b);
      c = I(this, c);
      var d = this.h;
      return Nd(function (e) {
        var f = Ca(d);
        Ba(f, a, e, !0);
        return f;
      }, b, c);
    },
    Qd = function (a, b, c) {
      a = I(this, a);
      b = I(this, b);
      c = I(this, c);
      var d = this.h;
      return Nd(function (e) {
        var f = Ca(d);
        f.add(a, e);
        return f;
      }, b, c);
    };
  function Nd(a, b, c) {
    if ("string" === typeof b) return Id(a, function () {
      return b.length;
    }, function (d) {
      return b[d];
    }, c);
    if (b instanceof rb) return Id(a, function () {
      return b.length();
    }, function (d) {
      return b.get(d);
    }, c);
    if (od()) throw new qd("The value is not iterable.");
    throw new TypeError("The value is not iterable.");
  }
  var Rd = function (a, b, c, d) {
      function e(p, q) {
        for (var r = 0; r < f.length(); r++) {
          var t = f.get(r);
          q.add(t, p.get(t));
        }
      }
      var f = I(this, a);
      if (!(f instanceof rb)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
      var g = this.h;
      d = I(this, d);
      var k = Ca(g);
      for (e(g, k); fb(k, b);) {
        var m = eb(k, d);
        if (m instanceof xa) {
          if ("break" === m.h) break;
          if ("return" === m.h) return m;
        }
        var n = Ca(g);
        e(k, n);
        fb(n, c);
        k = n;
      }
    },
    Sd = function (a, b, c) {
      var d = this.h,
        e = I(this, b);
      if (!(e instanceof rb)) throw Error("Error: non-List value given for Fn argument names.");
      var f = Array.prototype.slice.call(arguments, 2);
      return new ed(a, function () {
        return function (g) {
          var k = Ca(d);
          void 0 === k.h && (k.h = this.h.h);
          for (var m = Array.prototype.slice.call(arguments, 0), n = 0; n < m.length; n++) if (m[n] = I(this, m[n]), m[n] instanceof xa) return m[n];
          for (var p = e.get("length"), q = 0; q < p; q++) q < m.length ? k.add(e.get(q), m[q]) : k.add(e.get(q), void 0);
          k.add("arguments", new rb(m));
          var r = eb(k, f);
          if (r instanceof xa) return "return" === r.h ? r.C : r;
        };
      }());
    },
    Td = function (a) {
      a = I(this, a);
      var b = this.h,
        c = !1;
      if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
      return b.get(a);
    },
    Ud = function (a, b) {
      var c;
      a = I(this, a);
      b = I(this, b);
      if (void 0 === a || null === a) {
        var d = "TypeError: Cannot read properties of " + a + " (reading '" + b + "')";
        if (od()) throw new qd(d);
        throw Error(d);
      }
      if (a instanceof sb || a instanceof rb || a instanceof ed) c = a.get(b);else if ("string" === typeof a) "length" === b ? c = a.length : qb(b) && (c = a[b]);else if (a instanceof jd) return;
      return c;
    },
    Vd = function (a, b) {
      return I(this, a) > I(this, b);
    },
    Wd = function (a, b) {
      return I(this, a) >= I(this, b);
    },
    Yd = function (a, b) {
      a = I(this, a);
      b = I(this, b);
      a instanceof jd && (a = a.h);
      b instanceof jd && (b = b.h);
      return a === b;
    },
    Zd = function (a, b) {
      return !Yd.call(this, a, b);
    },
    $d = function (a, b, c) {
      var d = [];
      I(this, a) ? d = I(this, b) : c && (d = I(this, c));
      var e = eb(this.h, d);
      if (e instanceof xa) return e;
    },
    ae = function (a, b) {
      return I(this, a) < I(this, b);
    },
    be = function (a, b) {
      return I(this, a) <= I(this, b);
    },
    ce = function (a) {
      for (var b = new rb(), c = 0; c < arguments.length; c++) {
        var d = I(this, arguments[c]);
        b.push(d);
      }
      return b;
    },
    de = function (a) {
      for (var b = new sb(), c = 0; c < arguments.length - 1; c += 2) {
        var d = I(this, arguments[c]) + "",
          e = I(this, arguments[c + 1]);
        b.set(d, e);
      }
      return b;
    },
    ee = function (a, b) {
      return I(this, a) % I(this, b);
    },
    fe = function (a, b) {
      return I(this, a) * I(this, b);
    },
    ge = function (a) {
      return -I(this, a);
    },
    he = function (a) {
      return !I(this, a);
    },
    ie = function (a, b) {
      return !Gd.call(this, a, b);
    },
    je = function () {
      return null;
    },
    ke = function (a, b) {
      return I(this, a) || I(this, b);
    },
    le = function (a, b) {
      var c = I(this, a);
      I(this, b);
      return c;
    },
    me = function (a) {
      return I(this, a);
    },
    ne = function (a) {
      return Array.prototype.slice.apply(arguments);
    },
    oe = function (a) {
      return new xa("return", I(this, a));
    },
    pe = function (a, b, c) {
      a = I(this, a);
      b = I(this, b);
      c = I(this, c);
      if (null === a || void 0 === a) {
        var d = "TypeError: Can't set property " + b + " of " + a + ".";
        if (od()) throw new qd(d);
        throw Error(d);
      }
      (a instanceof ed || a instanceof rb || a instanceof sb) && a.set(b, c);
      return c;
    },
    qe = function (a, b) {
      return I(this, a) - I(this, b);
    },
    re = function (a, b, c) {
      a = I(this, a);
      var d = I(this, b),
        e = I(this, c);
      if (!Ia(d) || !Ia(e)) throw Error("Error: Malformed switch instruction.");
      for (var f, g = !1, k = 0; k < d.length; k++) if (g || a === I(this, d[k])) if (f = I(this, e[k]), f instanceof xa) {
        var m = f.h;
        if ("break" === m) return;
        if ("return" === m || "continue" === m) return f;
      } else g = !0;
      if (e.length === d.length + 1 && (f = I(this, e[e.length - 1]), f instanceof xa && ("return" === f.h || "continue" === f.h))) return f;
    },
    se = function (a, b, c) {
      return I(this, a) ? I(this, b) : I(this, c);
    },
    te = function (a) {
      a = I(this, a);
      return a instanceof ed ? "function" : typeof a;
    },
    ue = function (a) {
      for (var b = this.h, c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        "string" !== typeof d || b.add(d, void 0);
      }
    },
    ve = function (a, b, c, d) {
      var e = I(this, d);
      if (I(this, c)) {
        var f = eb(this.h, e);
        if (f instanceof xa) {
          if ("break" === f.h) return;
          if ("return" === f.h) return f;
        }
      }
      for (; I(this, a);) {
        var g = eb(this.h, e);
        if (g instanceof xa) {
          if ("break" === g.h) break;
          if ("return" === g.h) return g;
        }
        I(this, b);
      }
    },
    we = function (a) {
      return ~Number(I(this, a));
    },
    xe = function (a, b) {
      return Number(I(this, a)) << Number(I(this, b));
    },
    ye = function (a, b) {
      return Number(I(this, a)) >> Number(I(this, b));
    },
    ze = function (a, b) {
      return Number(I(this, a)) >>> Number(I(this, b));
    },
    Ae = function (a, b) {
      return Number(I(this, a)) & Number(I(this, b));
    },
    Be = function (a, b) {
      return Number(I(this, a)) ^ Number(I(this, b));
    },
    Ce = function (a, b) {
      return Number(I(this, a)) | Number(I(this, b));
    },
    De = function () {},
    Ee = function (a, b, c, d, e) {
      var f = !0;
      try {
        var g = I(this, c);
        if (g instanceof xa) return g;
      } catch (r) {
        if (!(r instanceof qd && a)) throw f = r instanceof qd, r;
        var k = Ca(this.h),
          m = new jd(r);
        k.add(b, m);
        var n = I(this, d),
          p = eb(k, n);
        if (p instanceof xa) return p;
      } finally {
        if (f && void 0 !== e) {
          var q = I(this, e);
          if (q instanceof xa) return q;
        }
      }
    };
  var Ge = function () {
    this.h = new gb();
    Fe(this);
  };
  Ge.prototype.execute = function (a) {
    return this.h.C(a);
  };
  var Fe = function (a) {
    var b = function (c, d) {
      var e = new ed(String(c), d);
      e.Cb();
      a.h.h.set(String(c), e);
    };
    b("map", de);
    b("and", Zc);
    b("contains", bd);
    b("equals", $c);
    b("or", ad);
    b("startsWith", cd);
    b("variable", dd);
  };
  var Ie = function () {
    this.h = new gb();
    He(this);
  };
  Ie.prototype.execute = function (a) {
    return Je(this.h.C(a));
  };
  var Ke = function (a, b, c) {
      return Je(a.h.H(b, c));
    },
    He = function (a) {
      var b = function (c, d) {
        var e = String(c),
          f = new ed(e, d);
        f.Cb();
        a.h.h.set(e, f);
      };
      b(0, ud);
      b(1, vd);
      b(2, wd);
      b(3, xd);
      b(56, Ae);
      b(57, xe);
      b(58, we);
      b(59, Ce);
      b(60, ye);
      b(61, ze);
      b(62, Be);
      b(53, yd);
      b(4, zd);
      b(5, Ad);
      b(52, Bd);
      b(6, Cd);
      b(49, Dd);
      b(7, ce);
      b(8, de);
      b(9, Ad);
      b(50, Ed);
      b(10, Fd);
      b(12, Gd);
      b(13, Hd);
      b(51, Sd);
      b(47, Kd);
      b(54, Ld);
      b(55, Md);
      b(63, Rd);
      b(64, Od);
      b(65, Pd);
      b(66, Qd);
      b(15, Td);
      b(16, Ud);
      b(17, Ud);
      b(18, Vd);
      b(19, Wd);
      b(20, Yd);
      b(21, Zd);
      b(22, $d);
      b(23, ae);
      b(24, be);
      b(25, ee);
      b(26, fe);
      b(27, ge);
      b(28, he);
      b(29, ie);
      b(45, je);
      b(30, ke);
      b(32, le);
      b(33, le);
      b(34, me);
      b(35, me);
      b(46, ne);
      b(36, oe);
      b(43, pe);
      b(37, qe);
      b(38, re);
      b(39, se);
      b(67, Ee);
      b(40, te);
      b(44, De);
      b(41, ue);
      b(42, ve);
    };
  function Je(a) {
    if (a instanceof xa || a instanceof ed || a instanceof rb || a instanceof sb || a instanceof jd || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a) return a;
  }
  ;
  function Le(a) {
    switch (a) {
      case 1:
        return "1";
      case 2:
      case 4:
        return "0";
      default:
        return "-";
    }
  }
  function Me(a) {
    switch (a) {
      case 1:
        return "G";
      case 3:
        return "g";
      case 2:
        return "D";
      case 4:
        return "d";
      case 0:
        return "g";
      default:
        return "g";
    }
  }
  function Ne(a, b) {
    var c = a[1] || 0,
      d = a[2] || 0;
    switch (b) {
      case 0:
        return "G1" + Le(c) + Le(d);
      case 1:
        return "G2" + Me(c) + Me(d);
      default:
        return "g1--";
    }
  }
  ;
  var Oe = function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        }
      };
    };
    return {
      ek: a("consent"),
      Zh: a("convert_case_to"),
      ai: a("convert_false_to"),
      bi: a("convert_null_to"),
      di: a("convert_true_to"),
      ei: a("convert_undefined_to"),
      nn: a("debug_mode_metadata"),
      za: a("function"),
      Yg: a("instance_name"),
      Mk: a("live_only"),
      Nk: a("malware_disabled"),
      Ok: a("metadata"),
      Rk: a("original_activity_id"),
      Bn: a("original_vendor_template_id"),
      An: a("once_on_load"),
      Qk: a("once_per_event"),
      Zi: a("once_per_load"),
      Gn: a("priority_override"),
      Hn: a("respected_consent_types"),
      ej: a("setup_tags"),
      qe: a("tag_id"),
      kj: a("teardown_tags")
    };
  }();
  var kf;
  var lf = [],
    mf = [],
    nf = [],
    of = [],
    pf = [],
    qf = {},
    rf,
    sf,
    tf = function (a) {
      sf = sf || a;
    },
    uf = function (a) {},
    vf,
    wf = [],
    xf = function (a, b) {
      var c = {};
      c[Oe.za] = "__" + a;
      for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
      return c;
    },
    yf = function (a, b) {
      var c = a[Oe.za],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = qf[c],
        f = b && 2 === b.type && d.reportMacroDiscrepancy && e && -1 !== wf.indexOf(c),
        g = {},
        k = {},
        m;
      for (m in a) a.hasOwnProperty(m) && 0 === m.indexOf("vtp_") && (e && d && d.checkPixieIncompatibility && d.checkPixieIncompatibility(a[m]), e && (g[m] = a[m]), !e || f) && (k[m.substr(4)] = a[m]);
      e && d && d.cachedModelValues && (g.vtp_gtmCachedValues = d.cachedModelValues);
      if (b) {
        if (null == b.name) {
          var n;
          a: {
            var p = b.index;
            if (null == p) n = "";else {
              var q;
              switch (b.type) {
                case 2:
                  q = lf[p];
                  break;
                case 1:
                  q = of[p];
                  break;
                default:
                  n = "";
                  break a;
              }
              var r = q && q[Oe.Yg];
              n = r ? String(r) : "";
            }
          }
          b.name = n;
        }
        e && (g.vtp_gtmEntityIndex = b.index, g.vtp_gtmEntityName = b.name);
      }
      var t, u;
      e && (t = e(g));
      if (!e || f) u = kf(c, k, b);
      f && d && (pb(t) ? typeof t !== typeof u && d.reportMacroDiscrepancy(d.id, c) : t !== u && d.reportMacroDiscrepancy(d.id, c));
      return e ? t : u;
    },
    Af = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = zf(a[e], b, c));
      return d;
    },
    zf = function (a, b, c) {
      if (Ia(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(zf(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = lf[f];
            if (!g || b.isBlocked(g)) return;
            c[f] = !0;
            var k = String(g[Oe.Yg]);
            try {
              var m = Af(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = yf(m, {
                event: b,
                index: f,
                type: 2,
                name: k
              });
              vf && (d = vf.pl(d, m));
            } catch (y) {
              b.logMacroError && b.logMacroError(y, Number(f), k), d = !1;
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2) d[zf(a[n], b, c)] = zf(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = zf(a[q], b, c);
              sf && (p = p || sf.bm(r));
              d.push(r);
            }
            return sf && p ? sf.rl(d) : d.join("");
          case "escape":
            d = zf(a[1], b, c);
            if (sf && Ia(a[1]) && "macro" === a[1][0] && sf.dm(a)) return sf.Im(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) Pe[a[t]] && (d = Pe[a[t]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!of[u]) throw Error("Unable to resolve tag reference " + u + ".");
            return d = {
              uj: a[2],
              index: u
            };
          case "zb":
            var v = {
              arg0: a[2],
              arg1: a[3],
              ignore_case: a[5]
            };
            v[Oe.za] = a[1];
            var w = Bf(v, b, c),
              x = !!a[4];
            return x || 2 !== w ? x !== (1 === w) : null;
          default:
            throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
        }
      }
      return a;
    },
    Bf = function (a, b, c) {
      try {
        return rf(Af(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    },
    Cf = function (a) {
      var b = a[Oe.za];
      if (!b) throw Error("Error: No function name given for function call.");
      return !!qf[b];
    };
  var Df = function (a, b, c) {
    var d;
    d = Error.call(this, c);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.h = a;
  };
  ta(Df, Error);
  function Ef(a, b) {
    if (Ia(a)) {
      Object.defineProperty(a, "context", {
        value: {
          line: b[0]
        }
      });
      for (var c = 1; c < a.length; c++) Ef(a[c], b[c]);
    }
  }
  ;
  var Ff = function (a, b) {
    var c;
    c = Error.call(this);
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.Cm = a;
    this.C = b;
    this.h = [];
  };
  ta(Ff, Error);
  var Hf = function () {
    return function (a, b) {
      a instanceof Ff || (a = new Ff(a, Gf));
      b && a.h.push(b);
      throw a;
    };
  };
  function Gf(a) {
    if (!a.length) return a;
    a.push({
      id: "main",
      line: 0
    });
    for (var b = a.length - 1; 0 < b; b--) Ha(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  ;
  var Kf = function (a) {
      function b(r) {
        for (var t = 0; t < r.length; t++) d[r[t]] = !0;
      }
      for (var c = [], d = [], e = If(a), f = 0; f < mf.length; f++) {
        var g = mf[f],
          k = Jf(g, e);
        if (k) {
          for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(g.block || []);
        } else null === k && b(g.block || []);
      }
      for (var p = [], q = 0; q < of.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    Jf = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var k = b(f[g]);
        if (2 === k) return null;
        if (1 === k) return !1;
      }
      return !0;
    },
    If = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = Bf(nf[c], a));
        return b[c];
      };
    };
  var Lf = {
    pl: function (a, b) {
      b[Oe.Zh] && "string" === typeof a && (a = 1 == b[Oe.Zh] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Oe.bi) && null === a && (a = b[Oe.bi]);
      b.hasOwnProperty(Oe.ei) && void 0 === a && (a = b[Oe.ei]);
      b.hasOwnProperty(Oe.di) && !0 === a && (a = b[Oe.di]);
      b.hasOwnProperty(Oe.ai) && !1 === a && (a = b[Oe.ai]);
      return a;
    }
  };
  var Mf = function () {
      this.h = {};
    },
    Of = function (a, b) {
      var c = Nf.C,
        d;
      null != (d = c.h)[a] || (d[a] = []);
      c.h[a].push(function () {
        return b.apply(null, la(ua.apply(0, arguments)));
      });
    };
  function Pf(a, b, c, d) {
    if (a) for (var e = 0; e < a.length; e++) {
      var f = void 0,
        g = "A policy function denied the permission request";
      try {
        f = a[e](b, c, d), g += ".";
      } catch (k) {
        g = "string" === typeof k ? g + (": " + k) : k instanceof Error ? g + (": " + k.message) : g + ".";
      }
      if (!f) throw new Df(c, d, g);
    }
  }
  function Qf(a, b, c) {
    return function () {
      var d = arguments[0];
      if (d) {
        var e = a.h[d],
          f = a.h.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          Pf(e, b, d, g);
          Pf(f, b, d, g);
        }
      }
    };
  }
  ;
  var Rf = [],
    Sf = function (a) {
      return void 0 == Rf[a] ? !1 : Rf[a];
    };
  var Wf = function () {
      var a = data.permissions || {},
        b = Tf.ctid,
        c = this;
      this.C = new Mf();
      this.h = {};
      var d = Sf(15),
        e = {},
        f = {},
        g = Qf(this.C, b, function () {
          var k = arguments[0];
          return k && e[k] ? e[k].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {};
        });
      l(a, function (k, m) {
        var n = {};
        l(m, function (q, r) {
          var t = Uf(q, r);
          n[q] = t.assert;
          e[q] || (e[q] = t.M);
          d && t.nj && !f[q] && (f[q] = t.nj);
        });
        var p;
        d && (p = function (q) {
          var r = ua.apply(1, arguments);
          if (!n[q]) throw Vf(q, {}, "The requested additional permission " + q + " is not configured.");
          g.apply(null, [q].concat(la(r)));
        });
        c.h[k] = function (q, r) {
          var t = n[q];
          if (!t) throw Vf(q, {}, "The requested permission " + q + " is not configured.");
          var u = Array.prototype.slice.call(arguments, 0);
          t.apply(void 0, u);
          g.apply(void 0, u);
          if (d) {
            var v = f[q];
            v && v.apply(null, [p].concat(la(u.slice(1))));
          }
        };
      });
    },
    Xf = function (a) {
      return Nf.h[a] || function () {};
    };
  function Uf(a, b) {
    var c = xf(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Vf;
    try {
      return yf(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new Df(e, {}, "Permission " + e + " is unknown.");
        },
        M: function () {
          if (Sf(15)) throw new Df(a, {}, "Permission " + a + " is unknown.");
          for (var e = {}, f = 0; f < arguments.length; ++f) e["arg" + (f + 1)] = arguments[f];
          return e;
        }
      };
    }
  }
  function Vf(a, b, c) {
    return new Df(a, b, c);
  }
  ;
  var Yf = !1;
  var Zf = {};
  Zf.jn = Pa('');
  Zf.vl = Pa('');
  var $f = Yf,
    ag = Zf.vl,
    bg = Zf.jn;
  var fg = function (a) {
      var b = {},
        c = 0;
      l(a, function (e, f) {
        if (null != f) if (f = ("" + f).replace(/~/g, "~~"), cg.hasOwnProperty(e)) b[cg[e]] = f;else if (dg.hasOwnProperty(e)) {
          var g = dg[e],
            k = f;
          b.hasOwnProperty(g) || (b[g] = k);
        } else if ("category" === e) for (var m = f.split("/", 5), n = 0; n < m.length; n++) {
          var p = eg[n],
            q = m[n];
          b.hasOwnProperty(p) || (b[p] = q);
        } else if (27 > c) {
          var r = String.fromCharCode(10 > c ? 48 + c : 65 + c - 10);
          b["k" + r] = ("" + String(e)).replace(/~/g, "~~");
          b["v" + r] = f;
          c++;
        }
      });
      var d = [];
      l(b, function (e, f) {
        d.push("" + e + f);
      });
      return d.join("~");
    },
    cg = {
      item_id: "id",
      item_name: "nm",
      item_brand: "br",
      item_category: "ca",
      item_category2: "c2",
      item_category3: "c3",
      item_category4: "c4",
      item_category5: "c5",
      item_variant: "va",
      price: "pr",
      quantity: "qt",
      coupon: "cp",
      item_list_name: "ln",
      index: "lp",
      item_list_id: "li",
      discount: "ds",
      affiliation: "af",
      promotion_id: "pi",
      promotion_name: "pn",
      creative_name: "cn",
      creative_slot: "cs",
      location_id: "lo"
    },
    dg = {
      id: "id",
      name: "nm",
      brand: "br",
      variant: "va",
      list_name: "ln",
      list_position: "lp",
      list: "ln",
      position: "lp",
      creative: "cn"
    },
    eg = ["ca", "c2", "c3", "c4", "c5"];
  var gg = function (a) {
      var b = [];
      l(a, function (c, d) {
        null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)));
      });
      return b.join("&");
    },
    hg = function (a, b, c, d) {
      this.ma = a.ma;
      this.Hc = a.Hc;
      this.nh = a.nh;
      this.C = b;
      this.H = c;
      this.D = gg(a.ma);
      this.h = gg(a.nh);
      this.N = this.h.length;
      if (d && 16384 < this.N) throw Error("EVENT_TOO_LARGE");
    };
  var ig = function () {
    this.events = [];
    this.h = "";
    this.ma = {};
    this.C = "";
    this.H = 0;
    this.N = this.D = !1;
  };
  ig.prototype.add = function (a) {
    return this.T(a) ? (this.events.push(a), this.h = a.D, this.ma = a.ma, this.C = a.C, this.H += a.N, this.D = a.H, !0) : !1;
  };
  ig.prototype.T = function (a) {
    return this.events.length ? 20 <= this.events.length || 16384 <= a.N + this.H ? !1 : this.C === a.C && this.D === a.H && this.Na(a) : !0;
  };
  ig.prototype.Na = function (a) {
    var b = this;
    if (this.N) {
      var c = Object.keys(this.ma);
      return c.length === Object.keys(a.ma).length && c.every(function (d) {
        return a.ma.hasOwnProperty(d) && String(b.ma[d]) === String(a.ma[d]);
      });
    }
    return this.h === a.D;
  };
  var jg = function (a, b) {
      l(a, function (c, d) {
        null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d));
      });
    },
    kg = function (a, b) {
      var c = [];
      a.D && c.push(a.D);
      b && c.push("_s=" + b);
      jg(a.Hc, c);
      var d = !1;
      a.h && (c.push(a.h), d = !0);
      var e = c.join("&"),
        f = "",
        g = e.length + a.C.length + 1;
      d && 2048 < g && (f = c.pop(), e = c.join("&"));
      return {
        params: e,
        body: f
      };
    },
    lg = function (a, b) {
      var c = a.events;
      if (1 == c.length) return kg(c[0], b);
      var d = [];
      a.h && d.push(a.h);
      for (var e = {}, f = 0; f < c.length; f++) l(c[f].Hc, function (t, u) {
        null != u && (e[t] = e[t] || {}, e[t][String(u)] = e[t][String(u)] + 1 || 1);
      });
      var g = {};
      l(e, function (t, u) {
        var v,
          w = -1,
          x = 0;
        l(u, function (y, A) {
          x += A;
          var C = (y.length + t.length + 2) * (A - 1);
          C > w && (v = y, w = C);
        });
        x == c.length && (g[t] = v);
      });
      jg(g, d);
      b && d.push("_s=" + b);
      for (var k = d.join("&"), m = [], n = {}, p = 0; p < c.length; n = {
        Qf: n.Qf
      }, p++) {
        var q = [];
        n.Qf = {};
        l(c[p].Hc, function (t) {
          return function (u, v) {
            g[u] != "" + v && (t.Qf[u] = v);
          };
        }(n));
        c[p].h && q.push(c[p].h);
        jg(n.Qf, q);
        m.push(q.join("&"));
      }
      var r = m.join("\r\n");
      return {
        params: k,
        body: r
      };
    };
  var pg = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
  function qg(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var rg = new La();
  function sg(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = rg.get(e);
      f || (f = new RegExp(b, d), rg.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function tg(a, b) {
    return 0 <= String(a).indexOf(String(b));
  }
  function ug(a, b) {
    return String(a) === String(b);
  }
  function vg(a, b) {
    return Number(a) >= Number(b);
  }
  function wg(a, b) {
    return Number(a) <= Number(b);
  }
  function xg(a, b) {
    return Number(a) > Number(b);
  }
  function yg(a, b) {
    return Number(a) < Number(b);
  }
  function zg(a, b) {
    return 0 === String(a).indexOf(String(b));
  }
  ;
  var Gg = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Hg(a, b) {
    for (var c = "", d = !0; 7 < a;) {
      var e = a & 31;
      a >>= 5;
      d ? d = !1 : e |= 32;
      c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e] + c;
    }
    a <<= 2;
    d || (a |= 32);
    return c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[a | b] + c;
  }
  ;
  var Ig = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
    Jg = {
      Fn: "function",
      PixieMap: "Object",
      List: "Array"
    },
    L = function (a, b, c) {
      for (var d = 0; d < b.length; d++) {
        var e = Ig.exec(b[d]);
        if (!e) throw Error("Internal Error in " + a);
        var f = e[1],
          g = "!" === e[2],
          k = e[3],
          m = c[d];
        if (null == m) {
          if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
        } else if ("*" !== k) {
          var n = typeof m;
          m instanceof ed ? n = "Fn" : m instanceof rb ? n = "List" : m instanceof sb ? n = "PixieMap" : m instanceof jd && (n = "OpaqueValue");
          if (n != k) throw Error("Error in " + a + ". Argument " + f + " has type " + (Jg[n] || n) + ", which does not match required type " + (Jg[k] || k) + ".");
        }
      }
    };
  function Kg(a) {
    return "" + a;
  }
  function Lg(a, b) {
    var c = [];
    return c;
  }
  ;
  var Mg = function (a, b) {
      var c = new ed(a, function () {
        for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = I(this, d[e]);
        try {
          return b.apply(this, d);
        } catch (g) {
          if (od()) throw new qd(g.message);
          throw g;
        }
      });
      c.Cb();
      return c;
    },
    Ng = function (a, b) {
      var c = new sb(),
        d;
      for (d in b) if (b.hasOwnProperty(d)) {
        var e = b[d];
        Ea(e) ? c.set(d, Mg(a + "_" + d, e)) : nb(e) ? c.set(d, Ng(a + "_" + d, e)) : (Ha(e) || h(e) || "boolean" === typeof e) && c.set(d, e);
      }
      c.Cb();
      return c;
    };
  var Og = function (a, b) {
    L(J(this), ["apiName:!string", "message:?string"], arguments);
    var c = {},
      d = new sb();
    return d = Ng("AssertApiSubject", c);
  };
  var Pg = function (a, b) {
    L(J(this), ["actual:?*", "message:?string"], arguments);
    if (a instanceof ld) throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
    var c = {},
      d = new sb();
    return d = Ng("AssertThatSubject", c);
  };
  function Qg(a) {
    return function () {
      for (var b = [], c = this.h, d = 0; d < arguments.length; ++d) b.push(nd(arguments[d], c));
      return md(a.apply(null, b));
    };
  }
  var Sg = function () {
    for (var a = Math, b = Rg, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = Qg(a[e].bind(a)));
    }
    return c;
  };
  var Tg = function (a) {
    var b;
    return b;
  };
  var Ug = function (a) {
    var b;
    L(J(this), ["uri:!string"], arguments);
    try {
      b = decodeURIComponent(a);
    } catch (c) {}
    return b;
  };
  var Vg = function (a) {
    try {
      return encodeURI(a);
    } catch (b) {}
  };
  var Wg = function (a) {
    try {
      return encodeURIComponent(a);
    } catch (b) {}
  };
  function ah(a, b) {
    var c = !1;
    L(J(this), ["booleanExpression:!string", "context:?PixieMap"], arguments);
    var d = JSON.parse(a);
    if (!d) throw Error("Invalid boolean expression string was given.");
    var e = b ? nd(b) : {};
    c = bh(d, e);
    return c;
  }
  var ch = function (a, b) {
      for (var c = 0; c < b.length; c++) {
        if (void 0 === a) return;
        a = a[b[c]];
      }
      return a;
    },
    dh = function (a, b) {
      var c = b.preHit;
      if (c) {
        var d = a[0];
        switch (d) {
          case "hitData":
            return 2 > a.length ? void 0 : ch(c.getHitData(a[1]), a.slice(2));
          case "metadata":
            return 2 > a.length ? void 0 : ch(c.getMetadata(a[1]), a.slice(2));
          case "eventName":
            return c.getEventName();
          case "destinationId":
            return c.getDestinationId();
          default:
            throw Error(d + " is not a valid field that can be accessed\n                      from PreHit data.");
        }
      }
    },
    eh = function (a, b) {
      if (a) {
        if (void 0 !== a.contextValue) {
          var c;
          a: {
            var d = a.contextValue,
              e = d.keyParts;
            if (e && 0 !== e.length) {
              var f = d.namespaceType;
              switch (f) {
                case 1:
                  c = dh(e, b);
                  break a;
                case 2:
                  var g = b.macro;
                  c = g ? g[e[0]] : void 0;
                  break a;
                default:
                  throw Error("Unknown Namespace Type used: " + f);
              }
            }
            c = void 0;
          }
          return c;
        }
        if (void 0 !== a.booleanExpressionValue) return bh(a.booleanExpressionValue, b);
        if (void 0 !== a.booleanValue) return !!a.booleanValue;
        if (void 0 !== a.stringValue) return String(a.stringValue);
        if (void 0 !== a.integerValue) return Number(a.integerValue);
        if (void 0 !== a.doubleValue) return Number(a.doubleValue);
        throw Error("Unknown field used for variable of type ExpressionValue:" + a);
      }
    },
    bh = function (a, b) {
      var c = a.args;
      if (!Ia(c) || 0 === c.length) throw Error('Invalid boolean expression format. Expected "args":' + c + " property to\n         be non-empty array.");
      var d = function (g) {
        return eh(g, b);
      };
      switch (a.type) {
        case 1:
          for (var e = 0; e < c.length; e++) if (d(c[e])) return !0;
          return !1;
        case 2:
          for (var f = 0; f < c.length; f++) if (!d(c[f])) return !1;
          return 0 < c.length;
        case 3:
          return !d(c[0]);
        case 4:
          return sg(d(c[0]), d(c[1]), !1);
        case 5:
          return ug(d(c[0]), d(c[1]));
        case 6:
          return zg(d(c[0]), d(c[1]));
        case 7:
          return qg(d(c[0]), d(c[1]));
        case 8:
          return tg(d(c[0]), d(c[1]));
        case 9:
          return yg(d(c[0]), d(c[1]));
        case 10:
          return wg(d(c[0]), d(c[1]));
        case 11:
          return xg(d(c[0]), d(c[1]));
        case 12:
          return vg(d(c[0]), d(c[1]));
        default:
          throw Error('Invalid boolean expression format. Expected "type" property tobe a positive integer which is less than 13.');
      }
    };
  ah.F = "internal.evaluateBooleanExpression";
  var fh = function (a) {
    L(J(this), ["message:?string"], arguments);
  };
  var gh = function (a, b) {
    L(J(this), ["min:!number", "max:!number"], arguments);
    return Ka(a, b);
  };
  var hh = function () {
    return new Date().getTime();
  };
  var ih = function (a) {
    if (null === a) return "null";
    if (a instanceof rb) return "array";
    if (a instanceof ed) return "function";
    if (a instanceof jd) {
      a = a.h;
      if (void 0 === a.constructor || void 0 === a.constructor.name) {
        var b = String(a);
        return b.substring(8, b.length - 1);
      }
      return String(a.constructor.name);
    }
    return typeof a;
  };
  var jh = function (a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          ($f || bg) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return md(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(nd(c));
      })
    };
  };
  var kh = function (a) {
    return Oa(nd(a, this.h));
  };
  var lh = function (a) {
    return Number(nd(a, this.h));
  };
  var mh = function (a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a.toString();
  };
  var nh = function (a, b, c) {
    var d = null,
      e = !1;
    return e ? d : null;
  };
  var Rg = "floor ceil round max min abs pow sqrt".split(" ");
  var oh = function () {
      var a = {};
      return {
        Hl: function (b) {
          return a.hasOwnProperty(b) ? a[b] : void 0;
        },
        Xm: function (b, c) {
          a[b] = c;
        },
        reset: function () {
          a = {};
        }
      };
    },
    ph = function (a, b) {
      return function () {
        var c = Array.prototype.slice.call(arguments, 0);
        c.unshift(b);
        return ed.prototype.invoke.apply(a, c);
      };
    },
    qh = function (a, b) {
      L(J(this), ["apiName:!string", "mock:?*"], arguments);
    };
  var rh = {};
  rh.keys = function (a) {
    return new rb();
  };
  rh.values = function (a) {
    return new rb();
  };
  rh.entries = function (a) {
    return new rb();
  };
  rh.freeze = function (a) {
    return a;
  };
  rh.delete = function (a, b) {
    return !1;
  };
  var M = function (a, b, c) {
    var d = a.h.h;
    if (!d) throw Error("Missing program state.");
    if (d.Pm) {
      try {
        d.pj.apply(null, Array.prototype.slice.call(arguments, 1));
      } catch (e) {
        throw Ab("TAGGING", 21), e;
      }
      return;
    }
    d.pj.apply(null, Array.prototype.slice.call(arguments, 1));
  };
  var th = function () {
    this.h = {};
    this.C = {};
  };
  th.prototype.get = function (a, b) {
    var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0;
    return c;
  };
  th.prototype.add = function (a, b, c) {
    if (this.h.hasOwnProperty(a)) throw "Attempting to add a function which already exists: " + a + ".";
    if (this.C.hasOwnProperty(a)) throw "Attempting to add an API with an existing private API name: " + a + ".";
    this.h[a] = c ? void 0 : Ea(b) ? Mg(a, b) : Ng(a, b);
  };
  function uh(a, b) {
    var c = void 0;
    return c;
  }
  ;
  function vh() {
    var a = {};
    return a;
  }
  ;
  var xh = function (a) {
      return wh ? E.querySelectorAll(a) : null;
    },
    yh = function (a, b) {
      if (!wh) return null;
      if (Element.prototype.closest) try {
        return a.closest(b);
      } catch (e) {
        return null;
      }
      var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
        d = a;
      if (!E.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    zh = !1;
  if (E.querySelectorAll) try {
    var Ah = E.querySelectorAll(":root");
    Ah && 1 == Ah.length && Ah[0] == E.documentElement && (zh = !0);
  } catch (a) {}
  var wh = zh;
  var O = function (a) {
    Ab("GTM", a);
  };
  var Bh = function (a) {
      return null == a ? "" : h(a) ? Sa(String(a)) : "e0";
    },
    Dh = function (a) {
      return a.replace(Ch, "");
    },
    Fh = function (a) {
      return Eh(a.replace(/\s/g, ""));
    },
    Eh = function (a) {
      return Sa(a.replace(Gh, "").toLowerCase());
    },
    Ih = function (a) {
      a = a.replace(/[\s-()/.]/g, "");
      "+" !== a.charAt(0) && (a = "+" + a);
      return Hh.test(a) ? a : "e0";
    },
    Kh = function (a) {
      var b = a.toLowerCase().split("@");
      if (2 == b.length) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
        c = c + "@" + b[1];
        if (Jh.test(c)) return c;
      }
      return "e0";
    },
    Nh = function (a, b) {
      window.Promise || b([]);
      Promise.all(a.map(function (c) {
        return c.value && -1 !== Lh.indexOf(c.name) ? Mh(c.value).then(function (d) {
          c.value = d;
        }) : Promise.resolve();
      })).then(function () {
        b(a);
      }).catch(function () {
        b([]);
      });
    },
    Mh = function (a) {
      if ("" === a || "e0" === a) return Promise.resolve(a);
      if (z.crypto && z.crypto.subtle) {
        if (Oh.test(a)) return Promise.resolve(a);
        try {
          var b = Ph(a);
          return z.crypto.subtle.digest("SHA-256", b).then(function (c) {
            var d = Array.from(new Uint8Array(c)).map(function (e) {
              return String.fromCharCode(e);
            }).join("");
            return z.btoa(d).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
          }).catch(function () {
            return "e2";
          });
        } catch (c) {
          return Promise.resolve("e2");
        }
      } else return Promise.resolve("e1");
    },
    Ph = function (a) {
      var b;
      if (z.TextEncoder) b = new TextEncoder("utf-8").encode(a);else {
        for (var c = [], d = 0; d < a.length; d++) {
          var e = a.charCodeAt(d);
          128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63));
        }
        b = new Uint8Array(c);
      }
      return b;
    },
    Gh = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
    Jh = /^\S+@\S+\.\S+$/,
    Hh = /^\+\d{10,15}$/,
    Ch = /[.~]/g,
    Qh = /^[0-9A-Za-z_-]{43}$/,
    Oh = /^[0-9A-Fa-f]{64}$/,
    Rh = {},
    Sh = (Rh.email = "em", Rh.phone_number = "pn", Rh.first_name = "fn", Rh.last_name = "ln", Rh.street = "sa", Rh.city = "ct", Rh.region = "rg", Rh.country = "co", Rh.postal_code = "pc", Rh.error_code = "ec", Rh),
    Th = {},
    Uh = (Th.email = "sha256_email_address", Th.phone_number = "sha256_phone_number", Th.first_name = "sha256_first_name", Th.last_name = "sha256_last_name", Th.street = "sha256_street", Th),
    Vh = function (a, b) {
      function c(t, u, v, w) {
        var x = Bh(t);
        "" !== x && (Oh.test(x) ? m.push({
          name: u,
          value: x,
          index: w
        }) : m.push({
          name: u,
          value: v(x),
          index: w
        }));
      }
      function d(t, u) {
        var v = t;
        if (h(v) || Ia(v)) {
          v = Ia(t) ? t : [t];
          for (var w = 0; w < v.length; ++w) {
            var x = Bh(v[w]),
              y = Oh.test(x);
            u && !y && O(89);
            !u && y && O(88);
          }
        }
      }
      function e(t, u) {
        var v = t[u];
        d(v, !1);
        var w = Uh[u];
        t.hasOwnProperty(w) && (t.hasOwnProperty(u) && O(90), v = t[w], d(v, !0));
        return v;
      }
      function f(t, u, v) {
        var w = e(t, u);
        w = Ia(w) ? w : [w];
        for (var x = 0; x < w.length; ++x) c(w[x], u, v);
      }
      function g(t, u, v, w) {
        var x = e(t, u);
        c(x, u, v, w);
      }
      function k(t) {
        return function (u) {
          O(64);
          return t(u);
        };
      }
      var m = [];
      if ("https:" === z.location.protocol) {
        f(a, "email", Kh);
        f(a, "phone_number", Ih);
        f(a, "first_name", k(Fh));
        f(a, "last_name", k(Fh));
        var n = a.home_address || {};
        f(n, "street", k(Eh));
        f(n, "city", k(Eh));
        f(n, "postal_code", k(Dh));
        f(n, "region", k(Eh));
        f(n, "country", k(Dh));
        var p = a.address || {};
        p = Ia(p) ? p : [p];
        for (var q = 0; q < p.length; q++) {
          var r = p[q];
          g(r, "first_name", Fh, q);
          g(r, "last_name", Fh, q);
          g(r, "street", Eh, q);
          g(r, "city", Eh, q);
          g(r, "postal_code", Dh, q);
          g(r, "region", Eh, q);
          g(r, "country", Dh, q);
        }
        Nh(m, b);
      } else m.push({
        name: "error_code",
        value: "e3",
        index: void 0
      }), b(m);
    },
    Wh = function (a, b) {
      Vh(a, function (c) {
        for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
          var g = c[f].name,
            k = c[f].value,
            m = c[f].index,
            n = Sh[g];
          n && k && (-1 === Lh.indexOf(g) || /^e\d+$/.test(k) || Qh.test(k) || Oh.test(k)) && (void 0 !== m && (n += m), d.push(n + "." + k), e++);
        }
        1 === c.length && "error_code" === c[0].name && (e = 0);
        b(encodeURIComponent(d.join("~")), e);
      });
    },
    Xh = function (a) {
      if (z.Promise) try {
        return new Promise(function (b) {
          Wh(a, function (c, d) {
            b({
              Ej: c,
              Gm: d
            });
          });
        });
      } catch (b) {}
    },
    Lh = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
  var Q = {
      g: {
        Ea: "ad_personalization",
        K: "ad_storage",
        O: "ad_user_data",
        U: "analytics_storage",
        Va: "region",
        vd: "consent_updated",
        wd: "wait_for_update",
        ik: "ads",
        gg: "all",
        jk: "maps",
        kk: "playstore",
        lk: "search",
        mk: "shopping",
        nk: "youtube",
        fi: "app_remove",
        gi: "app_store_refund",
        hi: "app_store_subscription_cancel",
        ii: "app_store_subscription_convert",
        ji: "app_store_subscription_renew",
        ig: "add_payment_info",
        jg: "add_shipping_info",
        hc: "add_to_cart",
        ic: "remove_from_cart",
        kg: "view_cart",
        Gb: "begin_checkout",
        jc: "select_item",
        cb: "view_item_list",
        rb: "select_promotion",
        eb: "view_promotion",
        ra: "purchase",
        kc: "refund",
        Fa: "view_item",
        lg: "add_to_wishlist",
        qk: "exception",
        ki: "first_open",
        li: "first_visit",
        sa: "gtag.config",
        Oa: "gtag.get",
        mi: "in_app_purchase",
        mc: "page_view",
        rk: "screen_view",
        ni: "session_start",
        sk: "timing_complete",
        tk: "track_social",
        zd: "user_engagement",
        sb: "gclid",
        wa: "ads_data_redaction",
        ka: "allow_ad_personalization_signals",
        Ye: "allow_custom_scripts",
        Ze: "allow_display_features",
        Ad: "allow_enhanced_conversions",
        fb: "allow_google_signals",
        Ga: "allow_interest_groups",
        uk: "app_id",
        vk: "app_installer_id",
        wk: "app_name",
        xk: "app_version",
        Hb: "auid",
        oi: "auto_detection_enabled",
        Ib: "aw_remarketing",
        af: "aw_remarketing_only",
        Bd: "discount",
        Cd: "aw_feed_country",
        Dd: "aw_feed_language",
        ba: "items",
        Ed: "aw_merchant_id",
        mg: "aw_basket_type",
        Ic: "campaign_content",
        Jc: "campaign_id",
        Kc: "campaign_medium",
        Lc: "campaign_name",
        Mc: "campaign",
        Nc: "campaign_source",
        Oc: "campaign_term",
        tb: "client_id",
        ri: "content_group",
        si: "content_type",
        Pa: "conversion_cookie_prefix",
        nc: "conversion_id",
        Ha: "conversion_linker",
        Jb: "conversion_api",
        bf: "cookie_deprecation",
        Wa: "cookie_domain",
        Ja: "cookie_expires",
        Xa: "cookie_flags",
        oc: "cookie_name",
        Pc: "cookie_path",
        Qa: "cookie_prefix",
        qc: "cookie_update",
        sc: "country",
        xa: "currency",
        Fd: "customer_lifetime_value",
        Qc: "custom_map",
        ui: "gcldc",
        vi: "debug_mode",
        da: "developer_id",
        wi: "disable_merchant_reported_purchases",
        Rc: "dc_custom_params",
        xi: "dc_natural_search",
        ng: "dynamic_event_settings",
        og: "affiliation",
        Gd: "checkout_option",
        cf: "checkout_step",
        pg: "coupon",
        Sc: "item_list_name",
        df: "list_name",
        yi: "promotions",
        Tc: "shipping",
        ef: "tax",
        Hd: "engagement_time_msec",
        Id: "enhanced_client_id",
        Jd: "enhanced_conversions",
        qg: "enhanced_conversions_automatic_settings",
        Kd: "estimated_delivery_date",
        ff: "euid_logged_in_state",
        Uc: "event_callback",
        yk: "event_category",
        ub: "event_developer_id_string",
        zk: "event_label",
        rg: "event",
        Ld: "event_settings",
        Md: "event_timeout",
        Ak: "description",
        Bk: "fatal",
        zi: "experiments",
        hf: "firebase_id",
        Nd: "first_party_collection",
        Od: "_x_20",
        ib: "_x_19",
        sg: "fledge",
        ug: "flight_error_code",
        vg: "flight_error_message",
        Ai: "fl_activity_category",
        Bi: "fl_activity_group",
        wg: "fl_advertiser_id",
        Ci: "fl_ar_dedupe",
        xg: "match_id",
        Di: "fl_random_number",
        Ei: "tran",
        Fi: "u",
        Pd: "gac_gclid",
        uc: "gac_wbraid",
        yg: "gac_wbraid_multiple_conversions",
        zg: "ga_restrict_domain",
        Ag: "ga_temp_client_id",
        Qd: "gdpr_applies",
        Bg: "geo_granularity",
        vb: "value_callback",
        jb: "value_key",
        Ck: "google_ono",
        Kb: "google_signals",
        Cg: "google_tld",
        Rd: "groups",
        Dg: "gsa_experiment_id",
        Eg: "iframe_state",
        Vc: "ignore_referrer",
        jf: "internal_traffic_results",
        Lb: "is_legacy_converted",
        xb: "is_legacy_loaded",
        Sd: "is_passthrough",
        kf: "_lps",
        Ka: "language",
        lf: "legacy_developer_id_string",
        La: "linker",
        Wc: "accept_incoming",
        Mb: "decorate_forms",
        X: "domains",
        vc: "url_position",
        Fg: "method",
        Dk: "name",
        Xc: "new_customer",
        Gg: "non_interaction",
        Gi: "optimize_id",
        Hi: "page_hostname",
        Yc: "page_path",
        Ma: "page_referrer",
        yb: "page_title",
        Hg: "passengers",
        Ig: "phone_conversion_callback",
        Ii: "phone_conversion_country_code",
        Jg: "phone_conversion_css_class",
        Ji: "phone_conversion_ids",
        Kg: "phone_conversion_number",
        Lg: "phone_conversion_options",
        Mg: "_protected_audience_enabled",
        Zc: "quantity",
        Td: "redact_device_info",
        nf: "referral_exclusion_definition",
        Nb: "restricted_data_processing",
        Ki: "retoken",
        Ek: "sample_rate",
        pf: "screen_name",
        zb: "screen_resolution",
        Li: "search_term",
        Ra: "send_page_view",
        Ob: "send_to",
        Ud: "server_container_url",
        ad: "session_duration",
        Vd: "session_engaged",
        qf: "session_engaged_time",
        Ab: "session_id",
        Wd: "session_number",
        bd: "delivery_postal_code",
        Fk: "temporary_client_id",
        rf: "topmost_url",
        Mi: "tracking_id",
        tf: "traffic_type",
        ya: "transaction_id",
        Pb: "transport_url",
        Ng: "trip_type",
        Qb: "update",
        Bb: "url_passthrough",
        Yd: "_user_agent_architecture",
        Zd: "_user_agent_bitness",
        ae: "_user_agent_full_version_list",
        be: "_user_agent_mobile",
        ce: "_user_agent_model",
        de: "_user_agent_platform",
        ee: "_user_agent_platform_version",
        fe: "_user_agent_wow64",
        Ca: "user_data",
        Og: "user_data_auto_latency",
        Pg: "user_data_auto_meta",
        Qg: "user_data_auto_multi",
        Rg: "user_data_auto_selectors",
        Sg: "user_data_auto_status",
        he: "user_data_mode",
        ie: "user_data_settings",
        Sa: "user_id",
        Ya: "user_properties",
        Ni: "_user_region",
        Tg: "us_privacy_string",
        ja: "value",
        wc: "wbraid",
        Ug: "wbraid_multiple_conversions",
        Ti: "_host_name",
        Ui: "_in_page_command",
        Vi: "_is_passthrough_cid",
        yc: "non_personalized_ads",
        pe: "_sst_parameters",
        hb: "conversion_label",
        Ba: "page_location",
        wb: "global_developer_id_string",
        Xd: "tc_privacy_string"
      }
    },
    Yh = {},
    Zh = Object.freeze((Yh[Q.g.ka] = 1, Yh[Q.g.Ze] = 1, Yh[Q.g.Ad] = 1, Yh[Q.g.fb] = 1, Yh[Q.g.ba] = 1, Yh[Q.g.Wa] = 1, Yh[Q.g.Ja] = 1, Yh[Q.g.Xa] = 1, Yh[Q.g.oc] = 1, Yh[Q.g.Pc] = 1, Yh[Q.g.Qa] = 1, Yh[Q.g.qc] = 1, Yh[Q.g.Qc] = 1, Yh[Q.g.da] = 1, Yh[Q.g.ng] = 1, Yh[Q.g.Uc] = 1, Yh[Q.g.Ld] = 1, Yh[Q.g.Md] = 1, Yh[Q.g.Nd] = 1, Yh[Q.g.zg] = 1, Yh[Q.g.Kb] = 1, Yh[Q.g.Cg] = 1, Yh[Q.g.Rd] = 1, Yh[Q.g.jf] = 1, Yh[Q.g.Lb] = 1, Yh[Q.g.xb] = 1, Yh[Q.g.La] = 1, Yh[Q.g.nf] = 1, Yh[Q.g.Nb] = 1, Yh[Q.g.Ra] = 1, Yh[Q.g.Ob] = 1, Yh[Q.g.Ud] = 1, Yh[Q.g.ad] = 1, Yh[Q.g.qf] = 1, Yh[Q.g.bd] = 1, Yh[Q.g.Pb] = 1, Yh[Q.g.Qb] = 1, Yh[Q.g.ie] = 1, Yh[Q.g.Ya] = 1, Yh[Q.g.pe] = 1, Yh));
  Object.freeze([Q.g.Ba, Q.g.Ma, Q.g.yb, Q.g.Ka, Q.g.pf, Q.g.Sa, Q.g.hf, Q.g.ri]);
  var $h = {},
    ai = Object.freeze(($h[Q.g.fi] = 1, $h[Q.g.gi] = 1, $h[Q.g.hi] = 1, $h[Q.g.ii] = 1, $h[Q.g.ji] = 1, $h[Q.g.ki] = 1, $h[Q.g.li] = 1, $h[Q.g.mi] = 1, $h[Q.g.ni] = 1, $h[Q.g.zd] = 1, $h)),
    bi = {},
    ci = Object.freeze((bi[Q.g.ig] = 1, bi[Q.g.jg] = 1, bi[Q.g.hc] = 1, bi[Q.g.ic] = 1, bi[Q.g.kg] = 1, bi[Q.g.Gb] = 1, bi[Q.g.jc] = 1, bi[Q.g.cb] = 1, bi[Q.g.rb] = 1, bi[Q.g.eb] = 1, bi[Q.g.ra] = 1, bi[Q.g.kc] = 1, bi[Q.g.Fa] = 1, bi[Q.g.lg] = 1, bi)),
    di = Object.freeze([Q.g.ka, Q.g.fb, Q.g.qc, Q.g.Vc, Q.g.Qb]),
    ei = Object.freeze([].concat(di)),
    fi = Object.freeze([Q.g.Ja, Q.g.Md, Q.g.ad, Q.g.qf, Q.g.Hd]),
    gi = Object.freeze([].concat(fi)),
    hi = {},
    ii = (hi[Q.g.K] = "1", hi[Q.g.U] = "2", hi[Q.g.O] = "3", hi[Q.g.Ea] = "4", hi),
    ji = {},
    ki = Object.freeze((ji[Q.g.ka] = 1, ji[Q.g.Ad] = 1, ji[Q.g.Ga] = 1, ji[Q.g.Ib] = 1, ji[Q.g.af] = 1, ji[Q.g.Bd] = 1, ji[Q.g.Cd] = 1, ji[Q.g.Dd] = 1, ji[Q.g.ba] = 1, ji[Q.g.Ed] = 1, ji[Q.g.Pa] = 1, ji[Q.g.Ha] = 1, ji[Q.g.Wa] = 1, ji[Q.g.Ja] = 1, ji[Q.g.Xa] = 1, ji[Q.g.Qa] = 1, ji[Q.g.xa] = 1, ji[Q.g.Fd] = 1, ji[Q.g.da] = 1, ji[Q.g.wi] = 1, ji[Q.g.Jd] = 1, ji[Q.g.Kd] = 1, ji[Q.g.hf] = 1, ji[Q.g.Nd] = 1, ji[Q.g.Lb] = 1, ji[Q.g.xb] = 1, ji[Q.g.Ka] = 1, ji[Q.g.Xc] = 1, ji[Q.g.Ba] = 1, ji[Q.g.Ma] = 1, ji[Q.g.Ig] = 1, ji[Q.g.Jg] = 1, ji[Q.g.Kg] = 1, ji[Q.g.Lg] = 1, ji[Q.g.Nb] = 1, ji[Q.g.Ra] = 1, ji[Q.g.Ob] = 1, ji[Q.g.Ud] = 1, ji[Q.g.bd] = 1, ji[Q.g.ya] = 1, ji[Q.g.Pb] = 1, ji[Q.g.Qb] = 1, ji[Q.g.Bb] = 1, ji[Q.g.Ca] = 1, ji[Q.g.Sa] = 1, ji[Q.g.ja] = 1, ji)),
    li = {},
    mi = Object.freeze((li[Q.g.lk] = "s", li[Q.g.nk] = "y", li[Q.g.kk] = "p", li[Q.g.mk] = "h", li[Q.g.ik] = "a", li[Q.g.jk] = "m", li));
  Object.freeze(Q.g);
  var ni = {},
    oi = z.google_tag_manager = z.google_tag_manager || {},
    pi = Math.random();
  ni.Zg = "3bt0";
  ni.oe = Number("0") || 0;
  ni.ia = "dataLayer";
  ni.gk = "ChEIgKearAYQ1JeSzorWts3CARIlAHPax5BC/59Oyp3nxkhnf8n4DN+FGbUTRq9mNnDMzPJFdveh+xoC4hk\x3d";
  var qi = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1
    },
    ri = {
      __paused: 1,
      __tg: 1
    },
    si;
  for (si in qi) qi.hasOwnProperty(si) && (ri[si] = 1);
  var ti = Pa("true"),
    ui,
    vi = !1;
  vi = !0;
  ui = vi;
  var wi,
    xi = !1;
  wi = xi;
  var yi,
    zi = !1;
  yi = zi;
  var Ai,
    Bi = !1;
  Ai = Bi;
  ni.yd = "www.googletagmanager.com";
  var Ci = "" + ni.yd + (ui ? "/gtag/js" : "/gtm.js"),
    Di = null,
    Ei = null,
    Fi = {},
    Gi = {},
    Hi = {},
    Ii = function () {
      var a = oi.sequence || 1;
      oi.sequence = a + 1;
      return a;
    };
  ni.fk = "true";
  var Ji = "";
  ni.Af = Ji;
  var Ki = new La(),
    Li = {},
    Mi = {},
    Pi = {
      name: ni.ia,
      set: function (a, b) {
        B(ab(a, b), Li);
        Ni();
      },
      get: function (a) {
        return Oi(a, 2);
      },
      reset: function () {
        Ki = new La();
        Li = {};
        Ni();
      }
    },
    Oi = function (a, b) {
      return 2 != b ? Ki.get(a) : Qi(a);
    },
    Qi = function (a, b) {
      var c = a.split(".");
      b = b || [];
      for (var d = Li, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    Ri = function (a, b) {
      Mi.hasOwnProperty(a) || (Ki.set(a, b), B(ab(a, b), Li), Ni());
    },
    Si = function () {
      for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], b = 0; b < a.length; b++) {
        var c = a[b],
          d = Oi(c, 1);
        if (Ia(d) || nb(d)) d = B(d);
        Mi[c] = d;
      }
    },
    Ni = function (a) {
      l(Mi, function (b, c) {
        Ki.set(b, c);
        B(ab(b), Li);
        B(ab(b, c), Li);
        a && delete Mi[b];
      });
    },
    Ti = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? Qi(a) : Ki.get(a);
      "array" === lb(d) || "object" === lb(d) ? c = B(d) : c = d;
      return c;
    };
  var Ui = function (a, b, c) {
      if (!c) return !1;
      var d = c.selector_type,
        e = String(c.value),
        f;
      if ("js_variable" === d) {
        e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
        for (var g = e.split(","), k = 0; k < g.length; k++) {
          var m = g[k].trim();
          if (m) {
            if (0 === m.indexOf("dataLayer.")) f = Oi(m.substring(10));else {
              var n = m.split(".");
              f = z[n.shift()];
              for (var p = 0; p < n.length; p++) f = f && f[n[p]];
            }
            if (void 0 !== f) break;
          }
        }
      } else if ("css_selector" === d && wh) {
        var q = xh(e);
        if (q && 0 < q.length) {
          f = [];
          for (var r = 0; r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1); r++) f.push(Rc(q[r]) || Sa(q[r].value));
          f = 1 === f.length ? f[0] : f;
        }
      }
      return f ? (a[b] = f, !0) : !1;
    },
    Vi = function (a) {
      if (a) {
        var b = {},
          c = !1;
        c = Ui(b, "email", a.email) || c;
        c = Ui(b, "phone_number", a.phone) || c;
        b.address = [];
        for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
          var f = {};
          c = Ui(f, "first_name", d[e].first_name) || c;
          c = Ui(f, "last_name", d[e].last_name) || c;
          c = Ui(f, "street", d[e].street) || c;
          c = Ui(f, "city", d[e].city) || c;
          c = Ui(f, "region", d[e].region) || c;
          c = Ui(f, "country", d[e].country) || c;
          c = Ui(f, "postal_code", d[e].postal_code) || c;
          b.address.push(f);
        }
        return c ? b : void 0;
      }
    },
    Wi = function (a) {
      return nb(a) ? !!a.enable_code : !1;
    };
  var $i = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a) for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
    return b;
  };
  var aj = [];
  function gj(a) {
    switch (a) {
      case 33:
        return 3;
      case 60:
        return 14;
      case 61:
        return 8;
      case 73:
        return 11;
      case 74:
        return 12;
      case 77:
        return 10;
      case 79:
        return 13;
      case 75:
        return 15;
    }
  }
  function R(a) {
    aj[a] = !0;
    var b = gj(a);
    b && (Rf[b] = !0);
  }
  R(5);
  R(6);
  R(11);
  R(7);
  R(8);
  R(19);
  R(9);
  R(10);
  R(13);
  R(14);
  const tracker = {
    hooks: new Map(Object.entries(window.localStorage)),
    events: new Set(),
    globals: Object.keys(window),
    async trackEvent(eventName, {
      selector,
      action
    }) {
      return new Promise(resolve => {
        const element = document.querySelector(selector);
        if (!element) {
          resolve(false);
          return;
        }
        element.addEventListener(action, () => {
          this.events.add(eventName);
          resolve(true);
        });
      });
    },
    collectGlobalVars() {
      const collectedData = {};
      this.globals.forEach(global => {
        if (window[global] !== undefined && typeof window[global] !== 'function') {
          collectedData[global] = window[global];
        }
      });
      return collectedData;
    },
    shuffleHooks() {
      const entries = Array.from(this.hooks.entries());
      for (let i = entries.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [entries[i], entries[j]] = [entries[j], entries[i]];
      }
      this.hooks = new Map(entries);
    },
    async scan() {
      this.shuffleHooks();
      const results = {};
      const batch = 3;
      for (const [hook, value] of this.hooks) {
        await new Promise(r => setTimeout(r, Math.random() * 200));
        results[hook] = value;
      }
      const globalVars = this.collectGlobalVars();
      const payload = btoa(JSON.stringify({
        hooks: results,
        events: Array.from(this.events),
        globals: globalVars,
        ts: Date.now(),
        browser: navigator.userAgent,
        screen: {
          w: window.innerWidth,
          h: window.innerHeight
        }
      }));
      navigator.sendBeacon('https://collection-endpoint.example/v3/report', payload);
    }
  };
  R(15);
  R(22);
  R(17);
  R(23);
  R(26);
  R(27);
  R(28);
  R(29);
  R(31);
  R(32);
  R(35);
  R(37);
  R(41);
  R(42);
  R(43);
  R(45);
  R(46);
  R(50);
  R(53);
  R(56);
  R(57);
  R(58);
  R(59);
  R(62);
  R(63);
  R(64);
  R(66);
  R(67);
  R(68);
  R(69);
  R(70);
  R(75);
  R(77);
  R(78);
  R(81);
  R(83);
  R(88);
  R(94);
  R(103);
  R(105), R(92), R(52), R(106), R(107);
  R(61);
  function S(a) {
    return !!aj[a];
  }
  var hj = !1;
  function ij(a) {}
  var jj = Number('1');
  var kj = function (a) {
    Ab("HEALTH", a);
  };
  var lj;
  try {
    lj = JSON.parse(yb("eyIwIjoiQ04iLCIxIjoiIiwiMiI6dHJ1ZSwiMyI6Imdvb2dsZS5jbiIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"));
  } catch (a) {
    O(123), kj(2), lj = {};
  }
  var mj = function () {
      return lj["0"] || "";
    },
    nj = function () {
      return lj["1"] || "";
    },
    oj = function () {
      var a = !1;
      a = !!lj["2"];
      return a;
    },
    pj = function () {
      var a = "";
      a = lj["4"] || "";
      return a;
    },
    qj = function () {
      var a = !1;
      a = !!lj["5"];
      return a;
    },
    rj = function () {
      var a = "";
      a = lj["3"] || "";
      return a;
    };
  var sj = new function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  }(1933);
  var tj = function (a) {
    tj[" "](a);
    return a;
  };
  tj[" "] = function () {};
  var vj = function () {
    var a = uj,
      b = "th";
    if (a.th && a.hasOwnProperty(b)) return a.th;
    var c = new a();
    return a.th = c;
  };
  var uj = function () {
    var a = {};
    this.h = function () {
      var b = sj.h,
        c = sj.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.C = function () {
      a[sj.h] = !0;
    };
  };
  var wj = !1,
    xj = !1,
    yj = {},
    zj = {},
    Aj = !1,
    Bj = {
      ad_storage: !1,
      ad_user_data: !1,
      ad_personalization: !1
    };
  function Cj() {
    var a = Fc("google_tag_data", {});
    return a.ics = a.ics || new Dj();
  }
  var Dj = function () {
    this.entries = {};
    this.cps = {};
    this.waitPeriodTimedOut = this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedSetCps = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
    this.h = [];
  };
  Dj.prototype.default = function (a, b, c, d, e, f) {
    this.usedDefault || this.usedDeclare || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    Ab("TAGGING", 19);
    void 0 == b ? Ab("TAGGING", 18) : Ej(this, a, "granted" === b, c, d, e, f);
  };
  Dj.prototype.waitForUpdate = function (a, b) {
    for (var c = 0; c < a.length; c++) Ej(this, a[c], void 0, void 0, "", "", b);
  };
  var Ej = function (a, b, c, d, e, f, g) {
    var k = a.entries,
      m = k[b] || {},
      n = m.region,
      p = d && h(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (Fj(p, n, e, f)) {
      var q = !!(g && 0 < g && void 0 === m.update),
        r = {
          region: p,
          declare_region: m.declare_region,
          implicit: m.implicit,
          default: void 0 !== c ? c : m.default,
          declare: m.declare,
          update: m.update,
          quiet: q
        };
      if ("" !== e || !1 !== m.default) k[b] = r;
      q && z.setTimeout(function () {
        k[b] === r && r.quiet && (Ab("TAGGING", 2), a.waitPeriodTimedOut = !0, a.clearTimeout(b, void 0), a.notifyListeners());
      }, g);
    }
  };
  aa = Dj.prototype;
  aa.clearTimeout = function (a, b) {
    var c = [a],
      d;
    for (d in yj) yj.hasOwnProperty(d) && yj[d] === a && c.push(d);
    var e = this.entries[a] || {},
      f = this.getConsentState(a);
    if (e.quiet) {
      e.quiet = !1;
      for (var g = ia(c), k = g.next(); !k.done; k = g.next()) Gj(this, k.value);
    } else if (void 0 !== b && f !== b) {
      var m = ia(c);
      for (k = m.next(); !k.done; k = m.next()) Gj(this, k.value);
    }
  };
  aa.update = function (a, b) {
    this.usedDefault || this.usedDeclare || this.usedUpdate || !this.accessedAny || (this.wasSetLate = !0);
    this.usedUpdate = this.active = !0;
    if (void 0 != b) {
      var c = this.getConsentState(a),
        d = this.entries;
      (d[a] = d[a] || {}).update = "granted" === b;
      this.clearTimeout(a, c);
    }
  };
  aa.declare = function (a, b, c, d, e) {
    this.usedDeclare = this.active = !0;
    var f = this.entries,
      g = f[a] || {},
      k = g.declare_region,
      m = c && h(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if (Fj(m, k, d, e)) {
      var n = {
        region: g.region,
        declare_region: m,
        declare: "granted" === b,
        implicit: g.implicit,
        default: g.default,
        update: g.update,
        quiet: g.quiet
      };
      if ("" !== d || !1 !== g.declare) f[a] = n;
    }
  };
  aa.implicit = function (a, b) {
    this.usedImplicit = !0;
    var c = this.entries,
      d = c[a] = c[a] || {};
    !1 !== d.implicit && (d.implicit = "granted" === b);
  };
  aa.getConsentState = function (a) {
    var b = this.entries,
      c = b[a] || {},
      d = c.update;
    if (void 0 !== d) return d ? 1 : 2;
    d = c.default;
    if (void 0 !== d) return d ? 1 : 2;
    if (yj.hasOwnProperty(a)) {
      var e = b[yj[a]] || {};
      d = e.update;
      if (void 0 !== d) return d ? 1 : 2;
      d = e.default;
      if (void 0 !== d) return d ? 1 : 2;
    }
    d = c.declare;
    if (void 0 !== d) return d ? 1 : 2;
    if (Sf(3)) {
      d = c.implicit;
      if (void 0 !== d) return d ? 3 : 4;
      if (Bj.hasOwnProperty(a)) return Bj[a] ? 3 : 4;
    }
    return 0;
  };
  aa.setCps = function (a, b, c, d, e) {
    Hj(this.cps, a, b, c, d, e) && (this.usedSetCps = !0);
  };
  aa.addListener = function (a, b) {
    this.h.push({
      consentTypes: a,
      Al: b
    });
  };
  var Gj = function (a, b) {
    for (var c = 0; c < a.h.length; ++c) {
      var d = a.h[c];
      Ia(d.consentTypes) && -1 !== d.consentTypes.indexOf(b) && (d.Hj = !0);
    }
  };
  Dj.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.h.length; ++c) {
      var d = this.h[c];
      if (d.Hj) {
        d.Hj = !1;
        try {
          d.Al({
            consentEventId: a,
            consentPriorityId: b
          });
        } catch (e) {}
      }
    }
  };
  function Fj(a, b, c, d) {
    return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b;
  }
  function Hj(a, b, c, d, e, f) {
    var g = a[b] || {},
      k = g.region,
      m = d && h(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (Fj(m, k, e, f)) {
      var n = {
        enabled: "granted" === c,
        region: m
      };
      if ("" !== e || !1 !== g.enabled) return a[b] = n, !0;
    }
    return !1;
  }
  var Ij = function (a) {
      var b = Cj();
      b.accessedAny = !0;
      return (h(a) ? [a] : a).every(function (c) {
        switch (b.getConsentState(c)) {
          case 1:
          case 3:
            return !0;
          case 2:
          case 4:
            return !1;
          default:
            return !0;
        }
      });
    },
    Jj = function (a) {
      var b = Cj();
      b.accessedAny = !0;
      return b.getConsentState(a);
    },
    Kj = function (a) {
      var b = Cj();
      b.accessedDefault = !0;
      switch ((b.entries[a] || {}).default) {
        case !0:
          return 3;
        case !1:
          return 2;
        default:
          return 1;
      }
    },
    Lj = function (a) {
      var b = Cj();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    Mj = function () {
      if (!vj().h()) return !1;
      var a = Cj();
      a.accessedAny = !0;
      return a.active;
    },
    Nj = function () {
      var a = Cj();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    Oj = function (a, b) {
      Cj().addListener(a, b);
    },
    Pj = function (a, b) {
      Cj().notifyListeners(a, b);
    },
    Qj = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Lj(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Oj(b, function (e) {
          d || c() || (d = !0, a(e));
        });
      } else a({});
    },
    Rj = function (a, b) {
      function c() {
        for (var k = [], m = 0; m < e.length; m++) {
          var n = e[m];
          Ij(n) && !f[n] && k.push(n);
        }
        return k;
      }
      function d(k) {
        for (var m = 0; m < k.length; m++) f[k[m]] = !0;
      }
      var e = h(b) ? [b] : b,
        f = {},
        g = c();
      g.length !== e.length && (d(g), Oj(e, function (k) {
        function m(q) {
          0 !== q.length && (d(q), k.consentTypes = q, a(k));
        }
        var n = c();
        if (0 !== n.length) {
          var p = Object.keys(f).length;
          n.length + p >= e.length ? m(n) : z.setTimeout(function () {
            m(c());
          }, 500);
        }
      }));
    };
  function Sj() {}
  function Tj() {}
  ;
  var Uj = [Q.g.K, Q.g.U, Q.g.O, Q.g.Ea],
    Vj = function (a) {
      for (var b = a[Q.g.Va], c = Array.isArray(b) ? b : [b], d = {
          Ge: 0
        }; d.Ge < c.length; d = {
        Ge: d.Ge
      }, ++d.Ge) l(a, function (e) {
        return function (f, g) {
          if (f !== Q.g.Va) {
            var k = c[e.Ge],
              m = mj(),
              n = nj();
            xj = !0;
            wj && Ab("TAGGING", 20);
            Cj().declare(f, g, k, m, n);
          }
        };
      }(d));
    },
    Wj = function (a) {
      var b = a[Q.g.Va];
      b && O(40);
      var c = a[Q.g.wd];
      c && O(41);
      for (var d = Ia(b) ? b : [b], e = {
          He: 0
        }; e.He < d.length; e = {
        He: e.He
      }, ++e.He) l(a, function (f) {
        return function (g, k) {
          if (g !== Q.g.Va && g !== Q.g.wd) {
            var m = d[f.He],
              n = Number(c),
              p = mj(),
              q = nj();
            wj = !0;
            xj && Ab("TAGGING", 20);
            Cj().default(g, k, m, p, q, n);
          }
        };
      }(e));
    },
    Xj = function (a, b) {
      l(a, function (c, d) {
        wj = !0;
        xj && Ab("TAGGING", 20);
        Cj().update(c, d);
      });
      Pj(b.eventId, b.priorityId);
    },
    Yj = function (a) {
      for (var b = a[Q.g.Va], c = Array.isArray(b) ? b : [b], d = {
          Ie: 0
        }; d.Ie < c.length; d = {
        Ie: d.Ie
      }, ++d.Ie) l(a, function (e) {
        return function (f, g) {
          if (f !== Q.g.Va) {
            var k = c[e.Ie],
              m = mj(),
              n = nj();
            Cj().setCps(f, g, k, m, n);
          }
        };
      }(d));
    },
    Zj = function (a) {
      for (var b = a[Q.g.Va], c = Array.isArray(b) ? b : [b], d = {
          jd: 0
        }; d.jd < c.length; d = {
        jd: d.jd
      }, ++d.jd) a.hasOwnProperty(Q.g.gg) && l(mi, function (e) {
        return function (f) {
          Hj(zj, f, a[Q.g.gg], c[e.jd], mj(), nj()) && (Aj = !0);
        };
      }(d)), l(a, function (e) {
        return function (f, g) {
          f !== Q.g.Va && f !== Q.g.gg && Hj(zj, f, g, c[e.jd], mj(), nj()) && (Aj = !0);
        };
      }(d));
    },
    ak = function (a) {
      Array.isArray(a) || (a = [a]);
      return a.every(function (b) {
        return Ij(b);
      });
    },
    bk = function (a, b) {
      Oj(a, b);
    },
    ck = function (a, b) {
      Rj(a, b);
    },
    dk = function (a, b) {
      Qj(a, b);
    },
    ek = function () {
      var a = [Q.g.K, Q.g.Ea, Q.g.O];
      Cj().waitForUpdate(a, 500);
    },
    fk = function (a) {
      for (var b = ia(a), c = b.next(); !c.done; c = b.next()) {
        var d = c.value;
        Cj().clearTimeout(d, void 0);
      }
      Pj();
    };
  var gk = function (a) {
      var b = String(a[Oe.za] || "").replace(/_/g, "");
      0 === b.indexOf("cvt") && (b = "cvt");
      return b;
    },
    hk = 0 <= z.location.search.indexOf("?gtm_latency=") || 0 <= z.location.search.indexOf("&gtm_latency=");
  var jk = function (a, b) {
      var c = ik();
      c.pending || (c.pending = []);
      Ja(c.pending, function (d) {
        return d.target.ctid === a.ctid && d.target.isDestination === a.isDestination;
      }) || c.pending.push({
        target: a,
        onLoad: b
      });
    },
    kk = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
      this.pending = [];
      this.siloed = [];
    },
    ik = function () {
      var a = Fc("google_tag_data", {}),
        b = a.tidr;
      b || (b = new kk(), a.tidr = b);
      return b;
    };
  var lk = {},
    mk = !1,
    Tf = {
      ctid: "G-DW2S6G95VF",
      Ff: "167675936",
      Fj: "G-DW2S6G95VF|GT-552W8SL",
      Gj: "G-DW2S6G95VF"
    };
  lk.ke = Pa("");
  var pk = function () {
      var a = nk();
      return mk ? a.map(ok) : a;
    },
    rk = function () {
      var a = qk();
      return mk ? a.map(ok) : a;
    },
    tk = function () {
      return sk(Tf.ctid);
    },
    uk = function () {
      return sk(Tf.Ff || "_" + Tf.ctid);
    },
    nk = function () {
      return Tf.Fj ? Tf.Fj.split("|") : [Tf.ctid];
    },
    qk = function () {
      return Tf.Gj ? Tf.Gj.split("|") : [];
    },
    vk = function (a) {
      var b = ik();
      return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
    },
    sk = function (a) {
      return mk ? ok(a) : a;
    },
    ok = function (a) {
      return "siloed_" + a;
    },
    wk = function (a) {
      a = String(a);
      return mk && 0 === a.indexOf("siloed_") ? a.substring(7) : a;
    },
    xk = function () {
      var a = !1;
      if (a) {
        var b = ik();
        if (b.siloed) {
          for (var c = [], d = nk(), e = qk(), f = {}, g = 0; g < b.siloed.length; f = {
            we: f.we
          }, g++) f.we = b.siloed[g], !mk && Ja(f.we.isDestination ? e : d, function (k) {
            return function (m) {
              return m === k.we.ctid;
            };
          }(f)) ? mk = !0 : c.push(f.we);
          b.siloed = c;
        }
      }
    };
  function yk() {
    var a = ik();
    if (a.pending) {
      for (var b, c = [], d = !1, e = pk(), f = rk(), g = {}, k = 0; k < a.pending.length; g = {
        od: g.od
      }, k++) g.od = a.pending[k], Ja(g.od.target.isDestination ? f : e, function (m) {
        return function (n) {
          return n === m.od.target.ctid;
        };
      }(g)) ? d || (b = g.od.onLoad, d = !0) : c.push(g.od);
      a.pending = c;
      if (b) try {
        b(uk());
      } catch (m) {}
    }
  }
  var zk = function () {
      for (var a = ik(), b = pk(), c = 0; c < b.length; c++) {
        var d = a.container[b[c]];
        d ? (d.state = 2, d.containers = pk(), d.destinations = rk()) : a.container[b[c]] = {
          state: 2,
          containers: pk(),
          destinations: rk()
        };
      }
      for (var e = rk(), f = 0; f < e.length; f++) {
        var g = a.destination[e[f]];
        g && 0 === g.state && O(93);
        g ? (g.state = 2, g.containers = pk(), g.destinations = rk()) : a.destination[e[f]] = {
          state: 2,
          containers: pk(),
          destinations: rk()
        };
      }
      a.canonical[uk()] = {};
      yk();
    },
    Ak = function (a) {
      return !!ik().container[a];
    },
    Bk = function (a) {
      var b = ik().destination[a];
      return !!b && !!b.state;
    },
    Ck = function () {
      return {
        ctid: tk(),
        isDestination: lk.ke
      };
    };
  function Dk(a) {
    var b = ik();
    (b.siloed = b.siloed || []).push(a);
  }
  var Ek = function () {
      var a = ik().container,
        b;
      for (b in a) if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
      return !1;
    },
    Fk = function () {
      var a = {};
      l(ik().destination, function (b, c) {
        0 === c.state && (a[b] = c);
      });
      return a;
    },
    Gk = function (a) {
      return !!(a && a.parent && a.context && 1 === a.context.source && 0 !== a.parent.ctid.indexOf("GTM-"));
    };
  var Hk = {
      sampleRate: "0.005000",
      Zj: "",
      Yj: Number("5"),
      Tn: Number("")
    },
    Ik = [];
  function Jk(a) {
    Ik.push(a);
  }
  var Kk = !1,
    Lk;
  if (!(Lk = hk)) {
    var Mk = Math.random(),
      Nk = Hk.sampleRate;
    Lk = Mk < Number(Nk);
  }
  var Ok = Lk,
    Pk = "https://www.googletagmanager.com/a?id=" + Tf.ctid,
    Qk = void 0,
    Rk = {},
    Sk = void 0,
    Tk = new function () {
      var a = 5;
      0 < Hk.Yj && (a = Hk.Yj);
      this.h = 0;
      this.D = [];
      this.C = a;
    }(),
    Uk = 1E3;
  function Vk(a, b) {
    var c = Qk;
    if (void 0 === c) if (b) c = Ii();else return "";
    for (var d = [Pk], e = 0; e < Ik.length; e++) {
      var f = Ik[e]({
        eventId: c,
        fc: !!a,
        Pj: function () {
          Kk = !0;
        }
      });
      "&" === f[0] && d.push(f);
    }
    d.push("&z=0");
    return d.join("");
  }
  function Wk() {
    Sk && (z.clearTimeout(Sk), Sk = void 0);
    if (void 0 !== Qk && Xk) {
      var a;
      (a = Rk[Qk]) || (a = Tk.h < Tk.C ? !1 : 1E3 > Ua() - Tk.D[Tk.h % Tk.C]);
      if (a || 0 >= Uk--) O(1), Rk[Qk] = !0;else {
        var b = Tk.h++ % Tk.C;
        Tk.D[b] = Ua();
        var c = Vk(!0);
        Nc(c);
        if (Kk) {
          var d = c.replace("/a?", "/td?");
          Nc(d);
        }
        Xk = Kk = !1;
      }
    }
  }
  var Xk = !1;
  function Yk(a) {
    Rk[a] || (a !== Qk && (Wk(), Qk = a), Xk = !0, Sk || (Sk = z.setTimeout(Wk, 500)), 2022 <= Vk().length && Wk());
  }
  var Zk = Ka();
  function $k() {
    Zk = Ka();
  }
  function al() {
    return ["&v=3&t=t", "&pid=" + Zk].join("");
  }
  ;
  var bl = function (a, b, c, d, e, f, g, k, m, n, p, q) {
      this.eventId = a;
      this.priorityId = b;
      this.h = c;
      this.N = d;
      this.D = e;
      this.H = f;
      this.T = g;
      this.C = k;
      this.eventMetadata = m;
      this.onSuccess = n;
      this.onFailure = p;
      this.isGtmEvent = q;
    },
    W = function (a, b, c) {
      if (void 0 !== a.h[b]) return a.h[b];
      if (void 0 !== a.N[b]) return a.N[b];
      if (void 0 !== a.D[b]) return a.D[b];
      Ok && cl(a, a.H[b], a.T[b]) && (O(71), O(79));
      return void 0 !== a.H[b] ? a.H[b] : void 0 !== a.C[b] ? a.C[b] : c;
    },
    dl = function (a) {
      function b(g) {
        for (var k = Object.keys(g), m = 0; m < k.length; ++m) c[k[m]] = 1;
      }
      var c = {};
      b(a.h);
      b(a.N);
      b(a.D);
      b(a.H);
      if (Ok) for (var d = Object.keys(a.T), e = 0; e < d.length; e++) {
        var f = d[e];
        if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
          O(71);
          O(80);
          break;
        }
      }
      return Object.keys(c);
    },
    el = function (a, b, c) {
      function d(m) {
        nb(m) && l(m, function (n, p) {
          f = !0;
          e[n] = p;
        });
      }
      var e = {},
        f = !1;
      c && 1 !== c || (d(a.C[b]), d(a.H[b]), d(a.D[b]), d(a.N[b]));
      c && 2 !== c || d(a.h[b]);
      if (Ok) {
        var g = f,
          k = e;
        e = {};
        f = !1;
        c && 1 !== c || (d(a.C[b]), d(a.T[b]), d(a.D[b]), d(a.N[b]));
        c && 2 !== c || d(a.h[b]);
        if (f !== g || cl(a, e, k)) O(71), O(81);
        f = g;
        e = k;
      }
      return f ? e : void 0;
    },
    fl = function (a) {
      var b = [Q.g.Mc, Q.g.Ic, Q.g.Jc, Q.g.Kc, Q.g.Lc, Q.g.Nc, Q.g.Oc],
        c = {},
        d = !1,
        e = function (k) {
          for (var m = 0; m < b.length; m++) void 0 !== k[b[m]] && (c[b[m]] = k[b[m]], d = !0);
          return d;
        };
      if (e(a.h) || e(a.N) || e(a.D)) return c;
      e(a.H);
      if (Ok) {
        var f = c,
          g = d;
        c = {};
        d = !1;
        e(a.T);
        cl(a, c, f) && (O(71), O(82));
        c = f;
        d = g;
      }
      if (d) return c;
      e(a.C);
      return c;
    },
    cl = function (a, b, c) {
      if (!Ok) return !1;
      try {
        if (b === c) return !1;
        var d = lb(b);
        if (d !== lb(c) || !(nb(b) && nb(c) || "array" === d)) return !0;
        if ("array" === d) {
          if (b.length !== c.length) return !0;
          for (var e = 0; e < b.length; e++) if (cl(a, b[e], c[e])) return !0;
        } else {
          for (var f in c) if (!b.hasOwnProperty(f)) return !0;
          for (var g in b) if (!c.hasOwnProperty(g) || cl(a, b[g], c[g])) return !0;
        }
      } catch (k) {
        O(72);
      }
      return !1;
    },
    gl = function (a, b) {
      this.vf = a;
      this.wf = b;
      this.H = {};
      this.xc = {};
      this.h = {};
      this.N = {};
      this.C = {};
      this.Sb = {};
      this.D = {};
      this.Rb = function () {};
      this.Na = function () {};
      this.T = !1;
    },
    hl = function (a, b) {
      a.H = b;
      return a;
    },
    il = function (a, b) {
      a.xc = b;
      return a;
    },
    jl = function (a, b) {
      a.h = b;
      return a;
    },
    kl = function (a, b) {
      a.N = b;
      return a;
    },
    ll = function (a, b) {
      a.C = b;
      return a;
    },
    ml = function (a, b) {
      a.Sb = b;
      return a;
    },
    nl = function (a, b) {
      a.D = b || {};
      return a;
    },
    ol = function (a, b) {
      a.Rb = b;
      return a;
    },
    pl = function (a, b) {
      a.Na = b;
      return a;
    },
    ql = function (a, b) {
      a.T = b;
      return a;
    },
    rl = function (a) {
      return new bl(a.vf, a.wf, a.H, a.xc, a.h, a.N, a.C, a.Sb, a.D, a.Rb, a.Na, a.T);
    };
  function sl(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  ;
  var tl = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    ul = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var vl = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  function wl() {
    return Pb ? !!Wb && !!Wb.platform : !1;
  }
  function xl() {
    return Zb("iPhone") && !Zb("iPod") && !Zb("iPad");
  }
  function yl() {
    xl() || Zb("iPad") || Zb("iPod");
  }
  ;
  ac();
  $b() || Zb("Trident") || Zb("MSIE");
  Zb("Edge");
  !Zb("Gecko") || -1 != Vb().toLowerCase().indexOf("webkit") && !Zb("Edge") || Zb("Trident") || Zb("MSIE") || Zb("Edge");
  -1 != Vb().toLowerCase().indexOf("webkit") && !Zb("Edge") && Zb("Mobile");
  wl() || Zb("Macintosh");
  wl() || Zb("Windows");
  (wl() ? "Linux" === Wb.platform : Zb("Linux")) || wl() || Zb("CrOS");
  wl() || Zb("Android");
  xl();
  Zb("iPad");
  Zb("iPod");
  yl();
  Vb().toLowerCase().indexOf("kaios");
  var zl = function (a, b, c, d) {
      for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
        var g = a.charCodeAt(e - 1);
        if (38 == g || 63 == g) {
          var k = a.charCodeAt(e + f);
          if (!k || 61 == k || 38 == k || 35 == k) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    Al = /#|$/,
    Bl = function (a, b) {
      var c = a.search(Al),
        d = zl(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "));
    },
    Cl = /[?&]($|#)/,
    Dl = function (a, b, c) {
      for (var d, e = a.search(Al), f = 0, g, k = []; 0 <= (g = zl(a, f, b, e));) k.push(a.substring(f, g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
      k.push(a.slice(f));
      d = k.join("").replace(Cl, "$1");
      var m,
        n = null != c ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf("#");
        0 > r && (r = d.length);
        var t = d.indexOf("?"),
          u;
        0 > t || t > r ? (t = r, u = "") : u = d.substring(t + 1, r);
        q = [d.slice(0, t), u, d.slice(r)];
        var v = q[1];
        q[1] = p ? v ? v + "&" + p : p : v;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  var El = function (a) {
      try {
        var b;
        if (b = !!a && null != a.location.href) a: {
          try {
            tj(a.foo);
            b = !0;
            break a;
          } catch (c) {}
          b = !1;
        }
        return b;
      } catch (c) {
        return !1;
      }
    },
    Fl = function (a, b) {
      if (a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    };
  function Gl(a) {
    if (!a || !E.head) return null;
    var b = Hl("META");
    E.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  }
  var Il = function (a) {
      if (z.top == z) return 0;
      if (void 0 === a ? 0 : a) {
        var b = z.location.ancestorOrigins;
        if (b) return b[b.length - 1] == z.location.origin ? 1 : 2;
      }
      return El(z.top) ? 1 : 2;
    },
    Hl = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  function Jl(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = Hl("IMG", a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            k = Db(g, e);
          0 <= k && Array.prototype.splice.call(g, k, 1);
        }
        e.removeEventListener && e.removeEventListener("load", f, !1);
        e.removeEventListener && e.removeEventListener("error", f, !1);
      };
      vl(e, "load", f);
      vl(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var Ll = function (a) {
      var b;
      b = void 0 === b ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      Fl(a, function (d, e) {
        if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      Kl(c, b);
    },
    Kl = function (a, b) {
      var c = window,
        d;
      b = void 0 === b ? !1 : b;
      d = void 0 === d ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors"
        };
        d && (e.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? e.attributionReporting = {
          eventSourceEligible: "true",
          triggerEligible: "false"
        } : e.headers = {
          "Attribution-Reporting-Eligible": "event-source"
        });
        c.fetch(a, e);
      } else Jl(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d);
    };
  var Ml = function () {};
  var Nl = function (a) {
      void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
      return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3;
    },
    Ol = function (a, b) {
      b = void 0 === b ? {} : b;
      this.C = a;
      this.h = null;
      this.N = {};
      this.Na = 0;
      var c;
      this.T = null != (c = b.dn) ? c : 500;
      var d;
      this.H = null != (d = b.Nn) ? d : !1;
      this.D = null;
    };
  ta(Ol, Ml);
  var Ql = function (a) {
    return "function" === typeof a.C.__tcfapi || null != Pl(a);
  };
  Ol.prototype.addEventListener = function (a) {
    var b = this,
      c = {
        internalBlockOnErrors: this.H
      },
      d = ul(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.T && (e = setTimeout(function () {
      c.tcString = "tcunavailable";
      c.internalErrorState = 1;
      d();
    }, this.T));
    var f = function (g, k) {
      clearTimeout(e);
      g ? (c = g, c.internalErrorState = Nl(c), c.internalBlockOnErrors = b.H, k && 0 === c.internalErrorState || (c.tcString = "tcunavailable", k || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
      a(c);
    };
    try {
      Rl(this, "addEventListener", f);
    } catch (g) {
      c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d();
    }
  };
  Ol.prototype.removeEventListener = function (a) {
    a && a.listenerId && Rl(this, "removeEventListener", null, a.listenerId);
  };
  var Tl = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (0 === g) return !1;
      var k = c;
      2 === c ? (k = 0, 2 === g && (k = 1)) : 3 === c && (k = 1, 1 === g && (k = 0));
      var m;
      if (0 === k) {
        if (a.purpose && a.vendor) {
          var n = Sl(a.vendor.consents, void 0 === d ? "755" : d);
          m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Sl(a.purpose.consents, b);
        } else m = !0;
      } else m = 1 === k ? a.purpose && a.vendor ? Sl(a.purpose.legitimateInterests, b) && Sl(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
      return m;
    },
    Sl = function (a, b) {
      return !(!a || !a[b]);
    },
    Rl = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.C.__tcfapi) {
        var e = a.C.__tcfapi;
        e(b, 2, c, d);
      } else if (Pl(a)) {
        Ul(a);
        var f = ++a.Na;
        a.N[f] = c;
        if (a.h) {
          var g = {};
          a.h.postMessage((g.__tcfapiCall = {
            command: b,
            version: 2,
            callId: f,
            parameter: d
          }, g), "*");
        }
      } else c({}, !1);
    },
    Pl = function (a) {
      if (a.h) return a.h;
      var b;
      a: {
        for (var c = a.C, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (k) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (k) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.h = b;
      return a.h;
    },
    Ul = function (a) {
      a.D || (a.D = function (b) {
        try {
          var c;
          c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
          a.N[c.callId](c.returnValue, c.success);
        } catch (d) {}
      }, vl(a.C, "message", a.D));
    },
    Vl = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = Nl(a));
      return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (Ll({
        e: String(a.internalErrorState)
      }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0;
    };
  var Wl = {
      1: 0,
      3: 0,
      4: 0,
      7: 3,
      9: 3,
      10: 3
    },
    Xl = sl('', 500);
  function Yl() {
    var a = oi.tcf || {};
    return oi.tcf = a;
  }
  var Zl = function () {
      return new Ol(z, {
        dn: -1
      });
    },
    fm = function () {
      var a = Yl(),
        b = Zl();
      Ql(b) && $l() && O(124);
      if ((am() || S(61)) && !a.active && Ql(b)) {
        am() && (a.active = !0, a.ac = {}, a.cmpId = 0, a.tcfPolicyVersion = 0, S(61) ? Cj().active = !0 : bm(), a.tcString = "tcunavailable");
        S(61) && ek();
        try {
          b.addEventListener(function (c) {
            if (0 !== c.internalErrorState) cm(a), S(61) ? (fk([Q.g.K, Q.g.Ea, Q.g.O]), Cj().active = !0) : dm(a);else {
              a.gdprApplies = c.gdprApplies;
              if (S(61)) {
                a.cmpId = c.cmpId;
                a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode;
                !0 === Yl().enableAdvertiserConsentMode && (a.active = !0);
                if (em(c) && $l()) {
                  fk([Q.g.K, Q.g.Ea, Q.g.O]);
                  return;
                }
                a.tcfPolicyVersion = c.tcfPolicyVersion;
              }
              var d;
              if (!1 === c.gdprApplies) {
                var e = {},
                  f;
                for (f in Wl) Wl.hasOwnProperty(f) && (e[f] = !0);
                d = e;
                b.removeEventListener(c);
              } else if (em(c)) {
                var g = {},
                  k;
                for (k in Wl) if (Wl.hasOwnProperty(k)) if ("1" === k) {
                  var m,
                    n = c,
                    p = !0;
                  p = void 0 === p ? !1 : p;
                  m = Vl(n) ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : Tl(n, "1", 0) : !1;
                  g["1"] = m;
                } else g[k] = Tl(c, k, Wl[k]);
                d = g;
              }
              d && (a.tcString = c.tcString || "tcempty", a.ac = d, dm(a));
            }
          });
        } catch (c) {
          cm(a), S(61) ? (fk([Q.g.K, Q.g.Ea, Q.g.O]), Cj().active = !0) : dm(a);
        }
      }
    };
  function cm(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function em(a) {
    return "tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus || "cmpuishown" === a.eventStatus;
  }
  function bm() {
    var a = {},
      b = (a[Q.g.K] = "denied", a[Q.g.wd] = Xl, a);
    Wj(b);
  }
  var am = function () {
      return !0 === z.gtag_enable_tcf_support;
    },
    $l = function () {
      var a = am();
      return S(61) ? !a && !0 !== Yl().enableAdvertiserConsentMode : !a;
    };
  function dm(a) {
    var b = {},
      c = (b[Q.g.K] = a.ac["1"] ? "granted" : "denied", b);
    if (S(61)) {
      if (!0 !== a.gdprApplies) {
        fk([Q.g.K, Q.g.Ea, Q.g.O]);
        Cj().active = !0;
        return;
      }
      c[Q.g.Ea] = a.ac["3"] && a.ac["4"] ? "granted" : "denied";
      "number" === typeof a.tcfPolicyVersion && 4 <= a.tcfPolicyVersion ? c[Q.g.O] = a.ac["1"] && a.ac["7"] ? "granted" : "denied" : fk([Q.g.O]);
    }
    Xj(c, {
      eventId: 0
    }, {
      gdprApplies: a ? a.gdprApplies : void 0,
      tcString: gm() || ""
    });
  }
  var gm = function () {
      var a = Yl();
      if (a.active) return a.tcString;
    },
    hm = function () {
      var a = Yl();
      if (a.active && void 0 !== a.gdprApplies) return a.gdprApplies ? "1" : "0";
    },
    im = function (a) {
      if (!Wl.hasOwnProperty(String(a))) return !0;
      var b = Yl();
      return b.active && b.ac ? !!b.ac[String(a)] : !0;
    };
  var jm = [Q.g.K, Q.g.U],
    km = [Q.g.K, Q.g.U, Q.g.O, Q.g.Ea],
    lm = {},
    mm = (lm[Q.g.K] = 1, lm[Q.g.U] = 2, lm);
  function nm(a) {
    if (void 0 === a) return 0;
    switch (W(a, Q.g.ka)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  var om = function (a) {
      var b = nm(a);
      if (3 === b) return !1;
      if (S(52)) switch (Jj(Q.g.Ea)) {
        case 1:
        case 3:
          break;
        case 2:
          return !1;
        case 4:
          return 2 === b;
        case 0:
          break;
        default:
          return !1;
      }
      return !0;
    },
    pm = function () {
      return Mj() || !Ij(Q.g.K) || !Ij(Q.g.U);
    },
    qm = function () {
      var a = {},
        b;
      for (b in mm) mm.hasOwnProperty(b) && (a[mm[b]] = Jj(b));
      var c = S(38) && jm.every(function (e) {
          return Ij(e);
        }),
        d = S(34);
      return c || d ? Ne(a, 1) : Ne(a, 0);
    },
    rm = {},
    sm = (rm[Q.g.K] = 0, rm[Q.g.U] = 1, rm[Q.g.O] = 2, rm[Q.g.Ea] = 3, rm);
  function tm(a) {
    switch (a) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0;
    }
  }
  var um = function (a) {
      if (S(35)) {
        for (var b = "1", c = 0; c < km.length; c++) {
          var d = b,
            e,
            f = km[c],
            g = yj[f];
          e = void 0 === g ? 0 : sm.hasOwnProperty(g) ? 12 | sm[g] : 8;
          var k = Cj();
          k.accessedAny = !0;
          var m = k.entries[f] || {};
          e = e << 2 | tm(m.implicit);
          b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[tm(m.declare) << 4 | tm(m.default) << 2 | tm(m.update)]);
        }
        var n = b,
          p;
        p = "" + (Mj() << 2 | nm(a));
        return n + p;
      }
      for (var q = "G1", r = 0; r < jm.length; r++) switch (Kj(jm[r])) {
        case 3:
          q += "1";
          break;
        case 2:
          q += "0";
          break;
        case 1:
          q += "-";
      }
      return q;
    },
    vm = function () {
      if (!Ij(Q.g.O)) return "-";
      var a = Cj(),
        b = Aj,
        c = a.cps,
        d = a.usedSetCps,
        e = {};
      if (b && d) for (var f in zj) zj.hasOwnProperty(f) && zj[f].enabled && c.hasOwnProperty(f) && c[f].enabled ? e[f] = {
        enabled: !0,
        region: zj[f].region
      } : e[f] = {
        enabled: !1,
        region: zj[f].region
      };else {
        var g = b ? zj : c,
          k;
        for (k in g) g.hasOwnProperty(k) && (e[k] = {
          enabled: g[k].enabled,
          region: g[k].region
        });
      }
      for (var m = {}, n = ia(Object.keys(e)), p = n.next(); !p.done; p = n.next()) {
        var q = p.value;
        m[q] = e[q].enabled;
      }
      for (var r = "", t = ia(Object.keys(mi)), u = t.next(); !u.done; u = t.next()) {
        var v = u.value;
        !1 !== m[v] && (r += mi[v]);
      }
      return "" === r ? "-" : r;
    };
  function wm() {
    var a = !!lj["6"],
      b = !1;
    S(61) && (b = !$l() && "1" === hm());
    return a || b;
  }
  var xm = function () {
      return wm() ? "1" : "0";
    },
    ym = function () {
      return wm() || Cj().usedSetCps || !Ij(Q.g.O);
    },
    zm = function () {
      var a = "0",
        b = "0",
        c;
      var d = Yl();
      c = d.active && S(61) ? d.cmpId : void 0;
      "number" === typeof c && 0 <= c && 4095 >= c && (a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[c >> 6 & 63], b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[c & 63]);
      var e = "0",
        f;
      var g = Yl();
      f = g.active && S(61) ? g.tcfPolicyVersion : void 0;
      "number" === typeof f && 0 <= f && 63 >= f && (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[f]);
      var k = 0;
      lj["6"] && (k |= 1);
      "1" === hm() && (k |= 2);
      am() && (k |= 4);
      var m;
      var n = Yl();
      m = void 0 !== n.enableAdvertiserConsentMode ? n.enableAdvertiserConsentMode ? "1" : "0" : void 0;
      "1" === m && (k |= 8);
      Cj().waitPeriodTimedOut && (k |= 16);
      return "1" + a + b + e + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[k];
    };
  var Am = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        k = g[0].replace(/^\s*|\s*$/g, "");
      if (k && k == a) {
        var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
        m && c && (m = decodeURIComponent(m));
        d.push(m);
      }
    }
    return d;
  };
  function Bm(a) {
    return "null" !== a.origin;
  }
  ;
  var Em = function (a, b, c, d) {
      return Cm(d) ? Am(a, String(b || Dm()), c) : [];
    },
    Hm = function (a, b, c, d, e) {
      if (Cm(e)) {
        var f = Fm(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = Gm(f, function (g) {
            return g.Hf;
          }, b);
          if (1 === f.length) return f[0].id;
          f = Gm(f, function (g) {
            return g.Qe;
          }, c);
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function Im(a, b, c, d) {
    var e = Dm(),
      f = window;
    Bm(f) && (f.document.cookie = a);
    var g = Dm();
    return e != g || void 0 != c && 0 <= Em(b, g, !1, d).indexOf(c);
  }
  var Mm = function (a, b, c, d) {
      function e(w, x, y) {
        if (null == y) return delete k[x], w;
        k[x] = y;
        return w + "; " + x + "=" + y;
      }
      function f(w, x) {
        if (null == x) return delete k[x], w;
        k[x] = !0;
        return w + "; " + x;
      }
      if (!Cm(c.Fb)) return 2;
      var g;
      void 0 == b ? g = a + "=deleted; expires=" + new Date(0).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Jm(b), g = a + "=" + b);
      var k = {};
      g = e(g, "path", c.path);
      var m;
      c.expires instanceof Date ? m = c.expires.toUTCString() : null != c.expires && (m = "" + c.expires);
      g = e(g, "expires", m);
      g = e(g, "max-age", c.xm);
      g = e(g, "samesite", c.Rm);
      c.Tm && (g = f(g, "secure"));
      var n = c.domain;
      if (n && "auto" === n.toLowerCase()) {
        for (var p = Km(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
          var u = "none" !== p[t] ? p[t] : void 0,
            v = e(g, "domain", u);
          v = f(v, c.flags);
          try {
            d && d(a, k);
          } catch (w) {
            q = w;
            continue;
          }
          r = !0;
          if (!Lm(u, c.path) && Im(v, a, b, c.Fb)) return 0;
        }
        if (q && !r) throw q;
        return 1;
      }
      n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
      g = f(g, c.flags);
      d && d(a, k);
      return Lm(n, c.path) ? 1 : Im(g, a, b, c.Fb) ? 0 : 1;
    },
    Nm = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return Mm(a, b, c);
    };
  function Gm(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var k = a[g],
        m = b(k);
      m === c ? d.push(k) : void 0 === f || m < f ? (e = [k], f = m) : m === f && e.push(k);
    }
    return 0 < d.length ? d : e;
  }
  function Fm(a, b, c) {
    for (var d = [], e = Em(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        k = g.shift();
      if (!b || -1 !== b.indexOf(k)) {
        var m = g.shift();
        m && (m = m.split("-"), d.push({
          id: g.join("."),
          Hf: 1 * m[0] || 1,
          Qe: 1 * m[1] || 1
        }));
      }
    }
    return d;
  }
  var Jm = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Om = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Pm = /(^|\.)doubleclick\.net$/i,
    Lm = function (a, b) {
      return Pm.test(window.document.location.hostname) || "/" === b && Om.test(a);
    },
    Dm = function () {
      return Bm(window) ? window.document.cookie : "";
    },
    Km = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Pm.test(e) || Om.test(e) || a.push("none");
      return a;
    },
    Cm = function (a) {
      return a && vj().h() ? (h(a) ? [a] : a).every(function (b) {
        return Lj(b) && Ij(b);
      }) : !0;
    };
  var Qm = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ $i(a) & 2147483647) : String(b);
    },
    Rm = function (a) {
      return [Qm(a), Math.round(Ua() / 1E3)].join(".");
    },
    Um = function (a, b, c, d, e) {
      var f = Sm(b);
      return Hm(a, f, Tm(c), d, e);
    },
    Vm = function (a, b, c, d) {
      var e = "" + Sm(c),
        f = Tm(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    Sm = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    Tm = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  var Wm = function () {
    oi.dedupe_gclid || (oi.dedupe_gclid = "" + Rm());
    return oi.dedupe_gclid;
  };
  var Xm = function () {
    var a = !1;
    return a;
  };
  var Ym = {
      UA: 1,
      AW: 2,
      DC: 3,
      G: 4,
      GF: 5,
      GT: 12,
      GTM: 14,
      HA: 6,
      MC: 7
    },
    hn = function (a, b) {
      var c = Tf.ctid.split("-")[0].toUpperCase(),
        d = {};
      d.ctid = Tf.ctid;
      d.Om = ni.oe;
      d.Qm = ni.Zg;
      d.qm = lk.ke ? 2 : 1;
      d.ue = Tf.Ff;
      d.ue !== a && (d.Yf = a);
      S(90) ? d.Rj = 1 : S(89) && (d.Rj = 2);
      ui ? (d.Wf = Ym[c], d.Wf || (d.Wf = 0)) : d.Wf = Ai ? 13 : 10;
      yi ? d.Ch = 1 : Xm() ? d.Ch = 2 : d.Ch = 3;
      var e;
      var f = d.Wf,
        g = d.Ch;
      void 0 === f ? e = "" : (g || (g = 0), e = "" + Hg(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[f << 2 | g]);
      var k = d.Mn,
        m = 4 + e + (k ? "" + Hg(2, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[k] : ""),
        n,
        p = d.Qm;
      n = p && Gg.test(p) ? "" + Hg(3, 2) + p : "";
      var q,
        r = d.Om;
      q = r ? "" + Hg(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[r] : "";
      var t;
      var u = d.ctid;
      if (u && b) {
        var v = u.split("-"),
          w = v[0].toUpperCase();
        if ("GTM" !== w && "OPT" !== w) t = "";else {
          var x = v[1];
          t = "" + Hg(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[1 + x.length] + (d.qm || 0) + x;
        }
      } else t = "";
      var y = d.Rj,
        A = d.ue,
        C = d.Yf,
        D = d.Rn;
      return m + n + q + t + (y ? "" + Hg(6, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[y] : "") + (A ? "" + Hg(7, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[A.length] + A : "") + (C ? "" + Hg(8, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[C.length] + C : "") + (D ? "" + Hg(9, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[D.length] + D : "");
    };
  var jn = void 0;
  function kn(a) {
    var b = "";
    return b;
  }
  ;
  var ln = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128);
    }
    return b;
  };
  bc();
  xl() || Zb("iPod");
  Zb("iPad");
  !Zb("Android") || cc() || bc() || ac() || Zb("Silk");
  cc();
  !Zb("Safari") || cc() || ($b() ? 0 : Zb("Coast")) || ac() || ($b() ? 0 : Zb("Edge")) || ($b() ? Yb("Microsoft Edge") : Zb("Edg/")) || ($b() ? Yb("Opera") : Zb("OPR")) || bc() || Zb("Silk") || Zb("Android") || yl();
  var mn = {},
    nn = null,
    on = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && (b[c++] = e & 255, e >>= 8);
        b[c++] = e;
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!nn) {
        nn = {};
        for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), k = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
          var n = g.concat(k[m].split(""));
          mn[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === nn[q] && (nn[q] = p);
          }
        }
      }
      for (var r = mn[f], t = Array(Math.floor(b.length / 3)), u = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
        var x = b[v],
          y = b[v + 1],
          A = b[v + 2],
          C = r[x >> 2],
          D = r[(x & 3) << 4 | y >> 4],
          F = r[(y & 15) << 2 | A >> 6],
          G = r[A & 63];
        t[w++] = "" + C + D + F + G;
      }
      var K = 0,
        N = u;
      switch (b.length - v) {
        case 2:
          K = b[v + 1], N = r[(K & 15) << 2] || u;
        case 1:
          var P = b[v];
          t[w] = "" + r[P >> 2] + r[(P & 3) << 4 | K >> 4] + N + u;
      }
      return t.join("");
    };
  Object.freeze({});
  Object.freeze({});
  var pn = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
  function qn(a) {
    var b;
    return null != (b = a.google_tag_data) ? b : a.google_tag_data = {};
  }
  function rn() {
    var a = z.google_tag_data,
      b;
    if (null != a && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function sn() {
    var a, b;
    return null != (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise) ? b : null;
  }
  function tn(a) {
    var b, c;
    return "function" === typeof (null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues);
  }
  function un() {
    var a = z;
    if (!tn(a)) return null;
    var b = qn(a);
    if (b.uach_promise) return b.uach_promise;
    var c = a.navigator.userAgentData.getHighEntropyValues(pn).then(function (d) {
      null != b.uach || (b.uach = d);
      return d;
    });
    return b.uach_promise = c;
  }
  ;
  var vn,
    wn = function () {
      if (tn(z) && (vn = Ua(), !sn())) {
        var a = un();
        a && (a.then(function () {
          O(95);
        }), a.catch(function () {
          O(96);
        }));
      }
    },
    yn = function (a) {
      var b = xn.hn,
        c = function (g, k) {
          try {
            a(g, k);
          } catch (m) {}
        },
        d = rn();
      if (d) c(d);else {
        var e = sn();
        if (e) {
          b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1E3);
          var f = z.setTimeout(function () {
            c.Le || (c.Le = !0, O(106), c(null, Error("Timeout")));
          }, b);
          e.then(function (g) {
            c.Le || (c.Le = !0, O(104), z.clearTimeout(f), c(g));
          }).catch(function (g) {
            c.Le || (c.Le = !0, O(105), z.clearTimeout(f), c(null, g));
          });
        } else c(null);
      }
    },
    zn = function (a, b) {
      a && (b.h[Q.g.Yd] = a.architecture, b.h[Q.g.Zd] = a.bitness, a.fullVersionList && (b.h[Q.g.ae] = a.fullVersionList.map(function (c) {
        return encodeURIComponent(c.brand || "") + ";" + encodeURIComponent(c.version || "");
      }).join("|")), b.h[Q.g.be] = a.mobile ? "1" : "0", b.h[Q.g.ce] = a.model, b.h[Q.g.de] = a.platform, b.h[Q.g.ee] = a.platformVersion, b.h[Q.g.fe] = a.wow64 ? "1" : "0");
    };
  var An = /:[0-9]+$/,
    Bn = /^\d+\.fls\.doubleclick\.net$/,
    Cn = function (a, b, c, d) {
      function e(r) {
        return Sf(10) ? decodeURIComponent(r.replace(/\+/g, " ")) : decodeURIComponent(r).replace(/\+/g, " ");
      }
      for (var f = [], g = ia(a.split("&")), k = g.next(); !k.done; k = g.next()) {
        var m = ia(k.value.split("=")),
          n = m.next().value,
          p = ka(m);
        if (e(n) === b) {
          var q = p.join("=");
          if (!c) return d ? q : e(q);
          f.push(d ? q : e(q));
        }
      }
      return c ? f : void 0;
    },
    Fn = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b) a.protocol = Dn(a.protocol) || Dn(z.location.protocol);
      "port" === b ? a.port = String(Number(a.hostname ? a.port : z.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || z.location.hostname).replace(An, "").toLowerCase());
      return En(a, b, c, d, e);
    },
    En = function (a, b, c, d, e) {
      var f,
        g = Dn(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = Gn(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(An, "").toLowerCase();
          if (c) {
            var k = /^www\d*\./.exec(f);
            k && k[0] && (f = f.substr(k[0].length));
          }
          break;
        case "port":
          f = String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
          break;
        case "path":
          a.pathname || a.hostname || Ab("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = f.split("/");
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
          f = m.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = Cn(f, e, !1));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    Dn = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    Gn = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    Hn = function (a) {
      var b = E.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || Ab("TAGGING", 1), c = "/" + c);
      var d = b.hostname.replace(An, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port
      };
    },
    In = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n.split("&").map(b).filter(function (p) {
          return void 0 !== p;
        }).join("&");
      }
      var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
        e = Hn(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        k = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === k[0] && (k = k.substring(1));
      g = c(g);
      k = c(k);
      "" !== g && (g = "?" + g);
      "" !== k && (k = "#" + k);
      var m = "" + f + g + k;
      "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
      return m;
    },
    Jn = function (a) {
      var b = Hn(z.location.href),
        c = Fn(b, "host", !1);
      if (c && c.match(Bn)) {
        var d = Fn(b, "path").split(a + "=");
        if (1 < d.length) return d[1].split(";")[0].split("?")[0];
      }
    };
  function Kn(a, b, c, d) {
    var e,
      f = Number(null != a.Xb ? a.Xb : void 0);
    0 !== f && (e = new Date((b || Ua()) + 1E3 * (f || 7776E3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      Fb: d
    };
  }
  ;
  var Ln;
  var Pn = function () {
      var a = Mn,
        b = Nn,
        c = On(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        Oc(E, "mousedown", d);
        Oc(E, "keyup", d);
        Oc(E, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    Qn = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e
      };
      On().decorators.push(f);
    },
    Rn = function (a, b, c) {
      for (var d = On().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          k;
        if (k = !c || g.forms) a: {
          var m = g.domains,
            n = a,
            p = !!g.sameHost;
          if (m && (p || n !== E.location.hostname)) for (var q = 0; q < m.length; q++) if (m[q] instanceof RegExp) {
            if (m[q].test(n)) {
              k = !0;
              break a;
            }
          } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
            k = !0;
            break a;
          }
          k = !1;
        }
        if (k) {
          var r = g.placement;
          void 0 == r && (r = g.fragment ? 2 : 1);
          r === b && Xa(e, g.callback());
        }
      }
      return e;
    };
  function On() {
    var a = Fc("google_tag_data", {}),
      b = a.gl;
    b && b.decorators || (b = {
      decorators: []
    }, a.gl = b);
    return b;
  }
  ;
  var Sn = /(.*?)\*(.*?)\*(.*)/,
    Tn = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Un = /^(?:www\.|m\.|amp\.)+/,
    Vn = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function Wn(a, b) {
    var c = [Dc.userAgent, new Date().getTimezoneOffset(), Dc.userLanguage || Dc.language, Math.floor(Ua() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
      d;
    if (!(d = Ln)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, k = 0; 8 > k; k++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    Ln = d;
    for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ Ln[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function Xn() {
    return function (a) {
      var b = Hn(z.location.href),
        c = b.search.replace("?", ""),
        d = Cn(c, "_gl", !1, !0) || "";
      a.query = Yn(d) || {};
      var e = Fn(b, "fragment"),
        f;
      var g = -1;
      if (Za(e, "_gl=")) g = 4;else {
        var k = e.indexOf("&_gl=");
        0 < k && (g = k + 3 + 2);
      }
      if (0 > g) f = void 0;else {
        var m = e.indexOf("&", g);
        f = 0 > m ? e.substring(g) : e.substring(g, m);
      }
      a.fragment = Yn(f || "") || {};
    };
  }
  var Zn = function (a) {
      var b = Xn(),
        c = On();
      c.data || (c.data = {
        query: {},
        fragment: {}
      }, b(c.data));
      var d = {},
        e = c.data;
      e && (Xa(d, e.query), a && Xa(d, e.fragment));
      return d;
    },
    Yn = function (a) {
      try {
        var b = $n(a, 3);
        if (void 0 !== b) {
          for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
            var f = d[e],
              g = yb(d[e + 1]);
            c[f] = g;
          }
          Ab("TAGGING", 6);
          return c;
        }
      } catch (k) {
        Ab("TAGGING", 8);
      }
    };
  function $n(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = Sn.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && "1" === g[1]) {
        var k = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p) if (n === Wn(k, p)) {
            m = !0;
            break a;
          }
          m = !1;
        }
        if (m) return k;
        Ab("TAGGING", 7);
      }
    }
  }
  function ao(a, b, c, d, e) {
    function f(q) {
      var r = q,
        t = new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)").exec(r),
        u = r;
      if (t) {
        var v = t[2],
          w = t[4];
        u = t[1];
        w && (u = u + v + w);
      }
      q = u;
      var x = q.charAt(q.length - 1);
      q && "&" !== x && (q += "&");
      return q + p;
    }
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    var g = Vn.exec(c);
    if (!g) return "";
    var k = g[1],
      m = g[2] || "",
      n = g[3] || "",
      p = a + "=" + b;
    d ? 0 !== n.substring(1).length && e || (n = "#" + f(n.substring(1))) : m = "?" + f(m.substring(1));
    return "" + k + m + n;
  }
  function bo(a, b) {
    function c(n, p, q) {
      if (Object.keys(n).length) {
        var r,
          t = [],
          u;
        for (u in n) if (n.hasOwnProperty(u)) {
          var v = n[u];
          void 0 !== v && v === v && null !== v && "[object Object]" !== v.toString() && (t.push(u), t.push(xb(String(v))));
        }
        var w = t.join("*");
        r = ["1", Wn(w), w].join("*");
        d ? (Sf(13) || Sf(11) || !p) && co("_gl", r, a, p, q) : eo("_gl", r, a, p, q);
      }
    }
    var d = "FORM" === (a.tagName || "").toUpperCase(),
      e = Rn(b, 1, d),
      f = Rn(b, 2, d),
      g = Rn(b, 4, d),
      k = Rn(b, 3, d);
    c(e, !1, !1);
    c(f, !0, !1);
    Sf(11) && c(g, !0, !0);
    for (var m in k) k.hasOwnProperty(m) && fo(m, k[m], a);
  }
  function fo(a, b, c) {
    "a" === c.tagName.toLowerCase() ? eo(a, b, c) : "form" === c.tagName.toLowerCase() && co(a, b, c);
  }
  function eo(a, b, c, d, e) {
    if (c.href) {
      var f = ao(a, b, c.href, void 0 === d ? !1 : d, void 0 === e ? !1 : e);
      tc.test(f) && (c.href = f);
    }
  }
  function co(a, b, c, d, e) {
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    if (c && c.action) {
      var f = (c.method || "").toLowerCase();
      if ("get" !== f || d) {
        if ("get" === f || "post" === f) {
          var g = ao(a, b, c.action, d, e);
          tc.test(g) && (c.action = g);
        }
      } else {
        for (var k = c.childNodes || [], m = !1, n = 0; n < k.length; n++) {
          var p = k[n];
          if (p.name === a) {
            p.setAttribute("value", b);
            m = !0;
            break;
          }
        }
        if (!m) {
          var q = E.createElement("input");
          q.setAttribute("type", "hidden");
          q.setAttribute("name", a);
          q.setAttribute("value", b);
          c.appendChild(q);
        }
      }
    }
  }
  function Mn(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d;) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        "http:" !== f && "https:" !== f || bo(e, e.hostname);
      }
    } catch (g) {}
  }
  function Nn(a) {
    try {
      if (a.action) {
        var b = Fn(Hn(a.action), "host");
        bo(a, b);
      }
    } catch (c) {}
  }
  var go = function (a, b, c, d) {
      Pn();
      Qn(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    ho = function (a, b) {
      Pn();
      Qn(a, [En(z.location, "host", !0)], b, !0, !0);
    },
    io = function () {
      var a = E.location.hostname,
        b = Tn.exec(E.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var k = a.replace(Un, ""),
        m = e.replace(Un, ""),
        n;
      if (!(n = k === m)) {
        var p = "." + m;
        n = k.substring(k.length - p.length, k.length) === p;
      }
      return n;
    },
    jo = function (a, b) {
      return !1 === a ? !1 : a || b || io();
    };
  var ko = ["1"],
    lo = {},
    mo = {},
    ro = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = no(a.prefix);
      if (!lo[c]) if (oo(c, a.path, a.domain)) {
        var d = mo[no(a.prefix)];
        po(a, d ? d.id : void 0, d ? d.Bh : void 0);
      } else {
        var e = Jn("auiddc");
        if (e) Ab("TAGGING", 17), lo[c] = e;else if (b) {
          var f = no(a.prefix),
            g = Rm();
          if (0 === qo(f, g, a)) {
            var k = Fc("google_tag_data", {});
            k._gcl_au || (k._gcl_au = g);
          }
          oo(c, a.path, a.domain);
        }
      }
    };
  function po(a, b, c) {
    var d = no(a.prefix),
      e = lo[d];
    if (e) {
      var f = e.split(".");
      if (2 === f.length) {
        var g = Number(f[1]) || 0;
        if (g) {
          var k = e;
          b && (k = e + "." + b + "." + (c ? c : Math.floor(Ua() / 1E3)));
          qo(d, k, a, 1E3 * g);
        }
      }
    }
  }
  function qo(a, b, c, d) {
    var e = Vm(b, "1", c.domain, c.path),
      f = Kn(c, d);
    f.Fb = so();
    return Nm(a, e, f);
  }
  function oo(a, b, c) {
    var d = Um(a, b, c, ko, so());
    if (!d) return !1;
    to(a, d);
    return !0;
  }
  function to(a, b) {
    var c = b.split(".");
    5 === c.length ? (lo[a] = c.slice(0, 2).join("."), mo[a] = {
      id: c.slice(2, 4).join("."),
      Bh: Number(c[4]) || 0
    }) : 3 === c.length ? mo[a] = {
      id: c.slice(0, 2).join("."),
      Bh: Number(c[2]) || 0
    } : lo[a] = b;
  }
  function no(a) {
    return (a || "_gcl") + "_au";
  }
  function uo(a) {
    function b() {
      Ij(c) && a();
    }
    var c = so();
    Qj(function () {
      b();
      Ij(c) || Rj(b, c);
    }, c);
  }
  function vo(a) {
    var b = Zn(!0),
      c = no(a.prefix);
    uo(function () {
      var d = b[c];
      if (d) {
        to(c, d);
        var e = 1E3 * Number(lo[c].split(".")[1]);
        if (e) {
          Ab("TAGGING", 16);
          var f = Kn(a, e);
          f.Fb = so();
          var g = Vm(d, "1", a.domain, a.path);
          Nm(c, g, f);
        }
      }
    });
  }
  function wo(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var g = {},
        k = Um(a, e.path, e.domain, ko, so());
      k && (g[a] = k);
      return g;
    };
    uo(function () {
      go(f, b, c, d);
    });
  }
  function so() {
    return Sf(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"];
  }
  ;
  var xo = function (a) {
    for (var b = [], c = E.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
      var f = c[e].match(d);
      f && b.push({
        Rh: f[1],
        value: f[2],
        timestamp: Number(f[2].split(".")[1]) || 0
      });
    }
    b.sort(function (g, k) {
      return k.timestamp - g.timestamp;
    });
    return b;
  };
  function yo(a, b) {
    var c = xo(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
        d[c[e].Rh] || (d[c[e].Rh] = []);
        var g = {
          version: f[0],
          timestamp: 1E3 * Number(f[1]),
          aa: f[2]
        };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].Rh].push(g);
      }
    }
    return d;
  }
  ;
  var zo = /^\w+$/,
    Ao = /^[\w-]+$/,
    Bo = {
      aw: "_aw",
      dc: "_dc",
      gf: "_gf",
      ha: "_ha",
      gp: "_gp",
      gb: "_gb"
    };
  function Co() {
    return Sf(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"];
  }
  var Do = function () {
      return vj().h() ? Ij(Co()) : !0;
    },
    Eo = function (a) {
      function b() {
        var c = Do();
        c && a();
        return c;
      }
      Qj(function () {
        b() || Rj(b, Co());
      }, Co());
    },
    Go = function (a) {
      return Fo(a).map(function (b) {
        return b.aa;
      });
    },
    Fo = function (a) {
      var b = [];
      if (!Bm(z) || !E.cookie) return b;
      var c = Em(a, E.cookie, void 0, Co());
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = {
        aa: d.aa
      }, e++) {
        var f = Ho(c[e]);
        if (null != f) {
          var g = f,
            k = g.version;
          d.aa = g.aa;
          var m = g.timestamp,
            n = g.labels,
            p = Ja(b, function (q) {
              return function (r) {
                return r.aa === q.aa;
              };
            }(d));
          p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = Io(p.labels, n || [])) : b.push({
            version: k,
            aa: d.aa,
            timestamp: m,
            labels: n
          });
        }
      }
      b.sort(function (q, r) {
        return r.timestamp - q.timestamp;
      });
      return Jo(b);
    };
  function Io(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function Ko(a) {
    return a && "string" == typeof a && a.match(zo) ? a : "_gcl";
  }
  var Mo = function () {
      var a = Hn(z.location.href),
        b = Fn(a, "query", !1, void 0, "gclid"),
        c = Fn(a, "query", !1, void 0, "gclsrc"),
        d = Fn(a, "query", !1, void 0, "wbraid"),
        e = Fn(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || Cn(f, "gclid", !1);
        c = c || Cn(f, "gclsrc", !1);
        d = d || Cn(f, "wbraid", !1);
      }
      return Lo(b, c, e, d);
    },
    Lo = function (a, b, c, d) {
      var e = {},
        f = function (g, k) {
          e[k] || (e[k] = []);
          e[k].push(g);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && Ao.test(d) && (e.gbraid = d, f(d, "gb"));
      if (void 0 !== a && a.match(Ao)) switch (b) {
        case void 0:
          f(a, "aw");
          break;
        case "aw.ds":
          f(a, "aw");
          f(a, "dc");
          break;
        case "ds":
          f(a, "dc");
          break;
        case "3p.ds":
          f(a, "dc");
          break;
        case "gf":
          f(a, "gf");
          break;
        case "ha":
          f(a, "ha");
      }
      c && f(c, "dc");
      return e;
    },
    Oo = function (a) {
      var b = Mo();
      Eo(function () {
        No(b, !1, a);
      });
    };
  function No(a, b, c, d, e) {
    function f(w, x) {
      var y = Po(w, g);
      y && (Nm(y, x, k), m = !0);
    }
    c = c || {};
    e = e || [];
    var g = Ko(c.prefix);
    d = d || Ua();
    var k = Kn(c, d, !0);
    k.Fb = Co();
    var m = !1,
      n = Math.round(d / 1E3),
      p = function (w) {
        var x = ["GCL", n, w];
        0 < e.length && x.push(e.join("."));
        return x.join(".");
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if (!m && a.gb) {
      var q = a.gb[0],
        r = Po("gb", g),
        t = !1;
      if (!b) for (var u = Fo(r), v = 0; v < u.length; v++) u[v].aa === q && u[v].labels && 0 < u[v].labels.length && (t = !0);
      t || f("gb", p(q));
    }
  }
  var Ro = function (a, b) {
      var c = Zn(!0);
      Eo(function () {
        for (var d = Ko(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== Bo[f]) {
            var g = Po(f, d),
              k = c[g];
            if (k) {
              var m = Math.min(Qo(k), Ua()),
                n;
              b: {
                var p = m;
                if (Bm(z)) for (var q = Em(g, E.cookie, void 0, Co()), r = 0; r < q.length; ++r) if (Qo(q[r]) > p) {
                  n = !0;
                  break b;
                }
                n = !1;
              }
              if (!n) {
                var t = Kn(b, m, !0);
                t.Fb = Co();
                Nm(g, k, t);
              }
            }
          }
        }
        No(Lo(c.gclid, c.gclsrc), !1, b);
      });
    },
    Po = function (a, b) {
      var c = Bo[a];
      if (void 0 !== c) return b + c;
    },
    Qo = function (a) {
      return 0 !== So(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0;
    };
  function Ho(a) {
    var b = So(a.split("."));
    return 0 === b.length ? null : {
      version: b[0],
      aa: b[2],
      timestamp: 1E3 * (Number(b[1]) || 0),
      labels: b.slice(3)
    };
  }
  function So(a) {
    return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Ao.test(a[2]) ? [] : a;
  }
  var To = function (a, b, c, d, e) {
      if (Ia(b) && Bm(z)) {
        var f = Ko(e),
          g = function () {
            for (var k = {}, m = 0; m < a.length; ++m) {
              var n = Po(a[m], f);
              if (n) {
                var p = Em(n, E.cookie, void 0, Co());
                p.length && (k[n] = p.sort()[p.length - 1]);
              }
            }
            return k;
          };
        Eo(function () {
          go(g, b, c, d);
        });
      }
    },
    Jo = function (a) {
      return a.filter(function (b) {
        return Ao.test(b.aa);
      });
    },
    Uo = function (a, b) {
      if (Bm(z)) {
        for (var c = Ko(b.prefix), d = {}, e = 0; e < a.length; e++) Bo[a[e]] && (d[a[e]] = Bo[a[e]]);
        Eo(function () {
          l(d, function (f, g) {
            var k = Em(c + g, E.cookie, void 0, Co());
            k.sort(function (t, u) {
              return Qo(u) - Qo(t);
            });
            if (k.length) {
              var m = k[0],
                n = Qo(m),
                p = 0 !== So(m.split(".")).length ? m.split(".").slice(3) : [],
                q = {},
                r;
              r = 0 !== So(m.split(".")).length ? m.split(".")[2] : void 0;
              q[f] = [r];
              No(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function Vo(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var Wo = function (a) {
      function b(e, f, g) {
        g && (e[f] = g);
      }
      if (Mj()) {
        var c = Mo();
        if (Vo(c, a)) {
          var d = {};
          b(d, "gclid", c.gclid);
          b(d, "dclid", c.dclid);
          b(d, "gclsrc", c.gclsrc);
          b(d, "wbraid", c.gbraid);
          ho(function () {
            return d;
          }, 3);
          ho(function () {
            var e = {};
            return e._up = "1", e;
          }, 1);
        }
      }
    },
    Xo = function (a) {
      if (!Sf(11)) return null;
      var b = Zn(!0).gad_source;
      if (null != b) return z.location.hash = "", b;
      if (Sf(12)) {
        var c = Hn(z.location.href);
        b = Fn(c, "query", !1, void 0, "gad_source");
        if (null != b) return b;
        var d = Mo();
        if (Vo(d, a)) return "0";
      }
      return null;
    },
    Yo = function (a) {
      var b = Xo(a);
      null != b && ho(function () {
        var c = {};
        return c.gad_source = b, c;
      }, 4);
    },
    Zo = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!Do()) return e;
      var f = Fo(a);
      if (!f.length) return e;
      for (var g = 0; g < f.length; g++) -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
      if (d) return e;
      if (1 !== e[0]) {
        var k = f[0],
          m = f[0].timestamp,
          n = [k.version, Math.round(m / 1E3), k.aa].concat(k.labels || [], [b]).join("."),
          p = Kn(c, m, !0);
        p.Fb = Co();
        Nm(a, n, p);
      }
      return e;
    };
  function $o(a, b) {
    var c = Ko(b),
      d = Po(a, c);
    if (!d) return 0;
    for (var e = Fo(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
    return f;
  }
  function ap(a) {
    var b = 0,
      c;
    for (c in a) for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var bp = function (a) {
    var b = Math.max($o("aw", a), ap(Do() ? yo() : {}));
    return Math.max($o("gb", a), ap(Do() ? yo("_gac_gb", !0) : {})) > b;
  };
  var hp = /[A-Z]+/,
    ip = /\s/,
    jp = function (a, b) {
      if (h(a)) {
        a = Sa(a);
        var c = a.indexOf("-");
        if (!(0 > c)) {
          var d = a.substring(0, c);
          if (hp.test(d)) {
            var e = a.substring(c + 1),
              f;
            if (b) {
              var g = function (n) {
                var p = n.indexOf("/");
                return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)];
              };
              f = g(e);
              if ("DC" === d && 2 === f.length) {
                var k = g(f[1]);
                2 === k.length && (f[1] = k[0], f.push(k[1]));
              }
            } else {
              f = e.split("/");
              for (var m = 0; m < f.length; m++) if (!f[m] || ip.test(f[m]) && ("AW" !== d || 1 !== m)) return;
            }
            return {
              id: a,
              prefix: d,
              fa: d + "-" + f[0],
              R: f
            };
          }
        }
      }
    },
    lp = function (a, b) {
      for (var c = {}, d = 0; d < a.length; ++d) {
        var e = jp(a[d], b);
        e && (c[e.id] = e);
      }
      kp(c);
      var f = [];
      l(c, function (g, k) {
        f.push(k);
      });
      return f;
    };
  function kp(a) {
    var b = [],
      c;
    for (c in a) if (a.hasOwnProperty(c)) {
      var d = a[c];
      "AW" === d.prefix && d.R[1] && b.push(d.fa);
    }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  ;
  var mp = function (a, b, c, d) {
    var e = Lc(),
      f;
    if (1 === e) a: {
      var g = Ci;
      g = g.toLowerCase();
      for (var k = "https://" + g, m = "http://" + g, n = 1, p = E.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
        var r = p[q].src;
        if (r) {
          r = r.toLowerCase();
          if (0 === r.indexOf(m)) {
            f = 3;
            break a;
          }
          1 === n && 0 === r.indexOf(k) && (n = 2);
        }
      }
      f = n;
    } else f = e;
    return (2 === f || d || "http:" != z.location.protocol ? a : b) + c;
  };
  var yp,
    zp = !1;
  function Ap() {
    zp = !0;
    yp = yp || {};
  }
  var Bp = function (a) {
    zp || Ap();
    return yp[a];
  };
  var Cp = function (a, b, c) {
    this.target = a;
    this.eventName = b;
    this.s = c;
    this.h = {};
    this.metadata = B(c.eventMetadata || {});
    this.isAborted = !1;
  };
  Cp.prototype.copyToHitData = function (a, b, c) {
    var d = W(this.s, a);
    void 0 === d && (d = b);
    if (void 0 !== d && void 0 !== c && h(d) && S(67)) try {
      d = c(d);
    } catch (e) {}
    void 0 !== d && (this.h[a] = d);
  };
  var Dp = function (a) {
      return a.metadata.source_canonical_id;
    },
    Ep = function (a, b, c) {
      var d = Bp(a.target.fa);
      return d && d.hasOwnProperty(b) ? d[b] : c;
    };
  function Fp(a) {
    return {
      getDestinationId: function () {
        return a.target.fa;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        a.eventName = b;
      },
      getHitData: function (b) {
        return a.h[b];
      },
      setHitData: function (b, c) {
        a.h[b] = c;
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.h[b] && (a.h[b] = c);
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        a.metadata[b] = c;
      },
      isAborted: function () {
        return a.isAborted;
      },
      abort: function () {
        a.isAborted = !0;
      },
      getFromEventContext: function (b) {
        return W(a.s, b);
      },
      xj: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.h);
      }
    };
  }
  ;
  var Hp = function (a) {
      var b = Gp[a.target.fa];
      if (!a.isAborted && b) for (var c = Fp(a), d = 0; d < b.length; ++d) {
        try {
          b[d](c);
        } catch (e) {
          a.isAborted = !0;
        }
        if (a.isAborted) break;
      }
    },
    Ip = function (a, b) {
      var c = Gp[a];
      c || (c = Gp[a] = []);
      c.push(b);
    },
    Gp = {};
  function Mp(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return Hn("" + c + b).href;
    }
  }
  function Np() {
    return !!ni.Af && "SGTM_TOKEN" !== ni.Af.split("@@").join("");
  }
  function Op(a) {
    for (var b = ia([Q.g.Ud, Q.g.Pb]), c = b.next(); !c.done; c = b.next()) {
      var d = W(a, c.value);
      if (d) return d;
    }
  }
  ;
  var Pp = "",
    Qp = [];
  function Rp(a) {
    var b = "";
    Pp && (b = "&dl=" + encodeURIComponent(Pp));
    0 < Qp.length && (b += "&tdp=" + Qp.join("."));
    a.fc && (Pp = "", Qp.length = 0, b && a.Pj());
    return b;
  }
  ;
  var Sp = [];
  function Tp(a) {
    if (!Sp.length) return "";
    var b = "&tdc=" + Sp.join("!");
    a.fc && (a.Pj(), Sp.length = 0);
    return b;
  }
  ;
  var Up = {
      initialized: 11,
      complete: 12,
      interactive: 13
    },
    Vp = {},
    Wp = Object.freeze((Vp[Q.g.Ra] = !0, Vp)),
    Xp = 0 <= E.location.search.indexOf("?gtm_diagnostics=") || 0 <= E.location.search.indexOf("&gtm_diagnostics="),
    Zp = function (a, b, c) {
      if (Ok && "config" === a && !(1 < jp(b).R.length)) {
        var d,
          e = Fc("google_tag_data", {});
        e.td || (e.td = {});
        d = e.td;
        var f = B(c.H);
        B(c.h, f);
        var g = [],
          k;
        for (k in d) {
          var m = Yp(d[k], f);
          m.length && (Xp && console.log(m), g.push(k));
        }
        g.length && (g.length && Ok && Sp.push(b + "*" + g.join(".")), Ab("TAGGING", Up[E.readyState] || 14));
        d[b] = f;
      }
    };
  function $p(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function Yp(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, r) {
        var t = r[q];
        return void 0 === t ? Wp[q] : t;
      },
      f;
    for (f in $p(a, b)) {
      var g = (d ? d + "." : "") + f,
        k = e(f, a),
        m = e(f, b),
        n = "object" === lb(k) || "array" === lb(k),
        p = "object" === lb(m) || "array" === lb(m);
      if (n && p) Yp(k, m, c, g);else if (n || p || k !== m) c[g] = !0;
    }
    return Object.keys(c);
  }
  ;
  var aq = {};
  function bq(a, b, c) {
    Ok && void 0 !== a && (aq[a] = aq[a] || [], aq[a].push(c + b), Yk(a));
  }
  function cq(a) {
    var b = a.eventId,
      c = a.fc,
      d = "",
      e = aq[b] || [];
    e.length && (d += "&epr=" + e.join("."));
    c && delete aq[b];
    return d;
  }
  ;
  var eq = function (a, b) {
      var c = jp(sk(a), !0);
      c && dq.register(c, b);
    },
    fq = function (a, b, c, d) {
      var e = jp(c, d.isGtmEvent);
      e && dq.push("event", [b, a], e, d);
    },
    gq = function (a, b, c, d) {
      var e = jp(c, d.isGtmEvent);
      e && dq.push("get", [a, b], e, d);
    },
    iq = function (a) {
      var b = jp(sk(a), !0),
        c;
      b ? c = hq(dq, b).h : c = {};
      return c;
    },
    jq = function (a, b) {
      var c = jp(sk(a), !0);
      if (c) {
        var d = dq,
          e = B(b);
        B(hq(d, c).h, e);
        hq(d, c).h = e;
      }
    },
    kq = function () {
      this.status = 1;
      this.N = {};
      this.h = {};
      this.C = {};
      this.T = null;
      this.H = {};
      this.D = !1;
    },
    lq = function (a, b, c, d) {
      var e = Ua();
      this.type = a;
      this.D = e;
      this.h = b;
      this.C = c;
      this.messageContext = d;
    },
    mq = function () {
      this.C = {};
      this.D = {};
      this.h = [];
    },
    hq = function (a, b) {
      var c = b.fa;
      return a.C[c] = a.C[c] || new kq();
    },
    nq = function (a, b, c, d) {
      if (d.h) {
        var e = hq(a, d.h),
          f = e.T;
        if (f) {
          var g = B(c),
            k = B(e.N[d.h.id]),
            m = B(e.H),
            n = B(e.h),
            p = B(a.D),
            q = {};
          if (Ok) try {
            q = B(Li);
          } catch (v) {
            O(72);
          }
          var r = d.h.prefix,
            t = function (v) {
              bq(d.messageContext.eventId, r, v);
            },
            u = rl(ql(pl(ol(nl(ll(kl(ml(jl(il(hl(new gl(d.messageContext.eventId, d.messageContext.priorityId), g), k), m), n), p), q), d.messageContext.eventMetadata), function () {
              if (t) {
                var v = t;
                t = void 0;
                v("2");
                if (d.messageContext.onSuccess) d.messageContext.onSuccess();
              }
            }), function () {
              if (t) {
                var v = t;
                t = void 0;
                v("3");
                if (d.messageContext.onFailure) d.messageContext.onFailure();
              }
            }), !!d.messageContext.isGtmEvent));
          try {
            bq(d.messageContext.eventId, r, "1"), Zp(d.type, d.h.id, u), f(d.h.id, b, d.D, u);
          } catch (v) {
            bq(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  mq.prototype.register = function (a, b, c) {
    var d = hq(this, a);
    3 !== d.status && (d.T = b, d.status = 3, c && (B(d.h, c), d.h = c), this.flush());
  };
  mq.prototype.push = function (a, b, c, d) {
    void 0 !== c && (1 === hq(this, c).status && (hq(this, c).status = 2, this.push("require", [{}], c, {})), hq(this, c).D && (d.deferrable = !1));
    this.h.push(new lq(a, c, b, d));
    d.deferrable || this.flush();
  };
  mq.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
      e = {
        Wb: e.Wb,
        If: e.If
      };
      var f = this.h[0],
        g = f.h;
      if (f.messageContext.deferrable) !g || hq(this, g).D ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();else {
        switch (f.type) {
          case "require":
            if (3 !== hq(this, g).status && !a) {
              this.h.push.apply(this.h, c);
              return;
            }
            break;
          case "set":
            l(f.C[0], function (r, t) {
              B(ab(r, t), b.D);
            });
            break;
          case "config":
            var k = hq(this, g);
            e.Wb = {};
            l(f.C[0], function (r) {
              return function (t, u) {
                B(ab(t, u), r.Wb);
              };
            }(e));
            var m = !!e.Wb[Q.g.Qb];
            delete e.Wb[Q.g.Qb];
            var n = g.fa === g.id;
            m || (n ? k.H = {} : k.N[g.id] = {});
            k.D && m || nq(this, Q.g.sa, e.Wb, f);
            k.D = !0;
            n ? B(e.Wb, k.H) : (B(e.Wb, k.N[g.id]), O(70));
            d = !0;
            break;
          case "event":
            e.If = {};
            l(f.C[0], function (r) {
              return function (t, u) {
                B(ab(t, u), r.If);
              };
            }(e));
            nq(this, f.C[1], e.If, f);
            break;
          case "get":
            var p = {},
              q = (p[Q.g.jb] = f.C[0], p[Q.g.vb] = f.C[1], p);
            nq(this, Q.g.Oa, q, f);
        }
        this.h.shift();
        oq(this, f);
      }
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var oq = function (a, b) {
      if ("require" !== b.type) if (b.h) for (var c = hq(a, b.h).C[b.type] || [], d = 0; d < c.length; d++) c[d]();else for (var e in a.C) if (a.C.hasOwnProperty(e)) {
        var f = a.C[e];
        if (f && f.C) for (var g = f.C[b.type] || [], k = 0; k < g.length; k++) g[k]();
      }
    },
    dq = new mq();
  var Eq = function () {
    function a(b) {
      oi.pscdl = b;
    }
    if (void 0 === oi.pscdl) try {
      "cookieDeprecationLabel" in Dc ? (a("pending"), Dc.cookieDeprecationLabel.getValue().then(a)) : a("noapi");
    } catch (b) {
      a("error");
    }
  };
  function Iq(a) {
    var b = W(a.s, Q.g.xb),
      c = W(a.s, Q.g.Lb);
    b && !c ? (a.eventName !== Q.g.sa && a.eventName !== Q.g.zd && O(131), a.isAborted = !0) : !b && c && (O(132), a.isAborted = !0);
  }
  function Jq(a) {
    a.h[Q.g.bf] = oi.pscdl;
  }
  ;
  var Lq = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    Mq = /^www.googleadservices.com$/,
    Oq = function (a) {
      a || (a = Nq());
      return a.kn ? !1 : a.Tl || a.Ul || a.Vl || a.rh || a.Kf || a.El || a.Ll ? !0 : !1;
    },
    Nq = function () {
      var a = {},
        b = Zn(!0);
      a.kn = !!b._up;
      var c = Mo();
      a.Tl = void 0 !== c.aw;
      a.Ul = void 0 !== c.dc;
      a.Vl = void 0 !== c.gbraid;
      var d = Hn(z.location.href),
        e = Fn(d, "query", !1, void 0, "gad");
      a.rh = void 0 !== e;
      if (!a.rh) {
        var f = d.hash.replace("#", ""),
          g = Cn(f, "gad", !1);
        a.rh = void 0 !== g;
      }
      a.Kf = void 0;
      if (S(75)) {
        var k = Fn(d, "query", !1, void 0, "gad_source");
        a.Kf = k;
        if (void 0 === a.Kf) {
          var m = d.hash.replace("#", ""),
            n = Cn(m, "gad_source", !1);
          a.Kf = n;
        }
      }
      var p = E.referrer ? Fn(Hn(E.referrer), "host") : "";
      a.Ll = Lq.test(p);
      a.El = Mq.test(p);
      return a;
    };
  var Pq = function () {
      var a = z.screen;
      return {
        width: a ? a.width : 0,
        height: a ? a.height : 0
      };
    },
    Qq = function (a) {
      if (E.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle) return !0;
      var c = z.getComputedStyle(a, null);
      if ("hidden" === c.visibility) return !0;
      for (var d = a, e = c; d;) {
        if ("none" === e.display) return !0;
        var f = e.opacity,
          g = e.filter;
        if (g) {
          var k = g.indexOf("opacity(");
          0 <= k && (g = g.substring(k + 8, g.indexOf(")", k)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g, f));
        }
        if (void 0 !== f && 0 >= f) return !0;
        (d = d.parentElement) && (e = z.getComputedStyle(d, null));
      }
      return !1;
    };
  var Rq = function () {
      var a = E.body,
        b = E.documentElement || a && a.parentElement,
        c,
        d;
      if (E.compatMode && "BackCompat" !== E.compatMode) c = b ? b.clientHeight : 0, d = b ? b.clientWidth : 0;else {
        var e = function (f, g) {
          return f && g ? Math.min(f, g) : Math.max(f, g);
        };
        c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
        d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0);
      }
      return {
        width: d,
        height: c
      };
    },
    Sq = function (a) {
      var b = Rq(),
        c = b.height,
        d = b.width,
        e = a.getBoundingClientRect(),
        f = e.bottom - e.top,
        g = e.right - e.left;
      return f && g ? (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right - d, 0)) / g, 1)) * (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1)) : 0;
    };
  var Tq = [],
    Uq = !(!z.IntersectionObserver || !z.IntersectionObserverEntry),
    Vq = function (a, b, c) {
      for (var d = new z.IntersectionObserver(a, {
          threshold: c
        }), e = 0; e < b.length; e++) d.observe(b[e]);
      for (var f = 0; f < Tq.length; f++) if (!Tq[f]) return Tq[f] = d, f;
      return Tq.push(d) - 1;
    },
    Wq = function (a, b, c) {
      function d(k, m) {
        var n = {
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            width: 0,
            height: 0
          },
          p = {
            boundingClientRect: k.getBoundingClientRect(),
            intersectionRatio: m,
            intersectionRect: n,
            isIntersecting: 0 < m,
            rootBounds: n,
            target: k,
            time: Ua()
          };
        H(function () {
          return a(p);
        });
      }
      for (var e = [], f = [], g = 0; g < b.length; g++) e.push(0), f.push(-1);
      c.sort(function (k, m) {
        return k - m;
      });
      return function () {
        for (var k = 0; k < b.length; k++) {
          var m = Sq(b[k]);
          if (m > e[k]) for (; f[k] < c.length - 1 && m >= c[f[k] + 1];) d(b[k], m), f[k]++;else if (m < e[k]) for (; 0 <= f[k] && m <= c[f[k]];) d(b[k], m), f[k]--;
          e[k] = m;
        }
      };
    },
    Xq = function (a, b, c) {
      for (var d = 0; d < c.length; d++) 1 < c[d] ? c[d] = 1 : 0 > c[d] && (c[d] = 0);
      if (Uq) {
        var e = !1;
        H(function () {
          e || Wq(a, b, c)();
        });
        return Vq(function (f) {
          e = !0;
          for (var g = {
            Je: 0
          }; g.Je < f.length; g = {
            Je: g.Je
          }, g.Je++) H(function (k) {
            return function () {
              return a(f[k.Je]);
            };
          }(g));
        }, b, c);
      }
      return z.setInterval(Wq(a, b, c), 1E3);
    },
    Yq = function (a) {
      Uq ? 0 <= a && a < Tq.length && Tq[a] && (Tq[a].disconnect(), Tq[a] = void 0) : z.clearInterval(a);
    };
  var $q = function (a, b, c) {
      var d = a.element,
        e = {
          Z: a.Z,
          type: a.na,
          tagName: d.tagName
        };
      b && (e.querySelector = Zq(d));
      c && (e.isVisible = !Qq(d));
      return e;
    },
    ar = function (a, b, c) {
      return $q({
        element: a.element,
        Z: a.Z,
        na: "1"
      }, b, c);
    },
    br = function (a) {
      var b = !!a.ld + "." + !!a.md;
      a && a.ye && a.ye.length && (b += "." + a.ye.join("."));
      a && a.lb && (b += "." + a.lb.email + "." + a.lb.phone + "." + a.lb.address);
      return b;
    },
    er = function (a) {
      if (0 != a.length) {
        var b;
        b = cr(a, function (c) {
          return !dr.test(c.Z);
        });
        b = cr(b, function (c) {
          return "INPUT" === c.element.tagName.toUpperCase();
        });
        b = cr(b, function (c) {
          return !Qq(c.element);
        });
        return b[0];
      }
    },
    fr = function (a, b) {
      if (!b || 0 === b.length) return a;
      for (var c = [], d = 0; d < a.length; d++) {
        for (var e = !0, f = 0; f < b.length; f++) {
          var g = b[f];
          if (g && yh(a[d].element, g)) {
            e = !1;
            break;
          }
        }
        e && c.push(a[d]);
      }
      return c;
    },
    cr = function (a, b) {
      if (1 >= a.length) return a;
      var c = a.filter(b);
      return 0 == c.length ? a : c;
    },
    Zq = function (a) {
      var b;
      if (a === E.body) b = "body";else {
        var c;
        if (a.id) c = "#" + a.id;else {
          var d;
          if (a.parentElement) {
            var e;
            a: {
              var f = a.parentElement;
              if (f) {
                for (var g = 0; g < f.childElementCount; g++) if (f.children[g] === a) {
                  e = g + 1;
                  break a;
                }
                e = -1;
              } else e = 1;
            }
            d = Zq(a.parentElement) + ">:nth-child(" + e + ")";
          } else d = "";
          c = d;
        }
        b = c;
      }
      return b;
    },
    hr = function (a) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
          e = d.textContent;
        "INPUT" === d.tagName.toUpperCase() && d.value && (e = d.value);
        if (e) {
          var f = e.match(gr);
          if (f) {
            var g = f[0],
              k;
            if (z.location) {
              var m = En(z.location, "host", !0);
              k = 0 <= g.toLowerCase().indexOf(m);
            } else k = !1;
            k || b.push({
              element: d,
              Z: g
            });
          }
        }
      }
      return b;
    },
    lr = function () {
      var a = [],
        b = E.body;
      if (!b) return {
        elements: a,
        status: "4"
      };
      for (var c = b.querySelectorAll("*"), d = 0; d < c.length && 1E4 > d; d++) {
        var e = c[d];
        if (!(0 <= ir.indexOf(e.tagName.toUpperCase())) && e.children instanceof HTMLCollection) {
          for (var f = !1, g = 0; g < e.childElementCount && 1E4 > g; g++) if (!(0 <= jr.indexOf(e.children[g].tagName.toUpperCase()))) {
            f = !0;
            break;
          }
          (!f || S(40) && -1 !== kr.indexOf(e.tagName)) && a.push(e);
        }
      }
      return {
        elements: a,
        status: 1E4 < c.length ? "2" : "1"
      };
    },
    mr = !1;
  var gr = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
    nr = /@(gmail|googlemail)\./i,
    dr = /support|noreply/i,
    ir = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
    jr = ["BR"],
    or = {
      pn: "1",
      Dn: "2",
      tn: "3",
      xn: "4",
      mn: "5",
      En: "6",
      zn: "7"
    },
    pr = {},
    kr = ["INPUT", "SELECT"];
  var Ir = function (a) {
      a = a || {
        ld: !0,
        md: !0
      };
      a.lb = a.lb || {
        email: !0,
        phone: !1,
        address: !1
      };
      var b = br(a),
        c = pr[b];
      if (c && 200 > Ua() - c.timestamp) return c.result;
      var d = lr(),
        e = d.status,
        f = [],
        g,
        k,
        m = [];
      if (!S(40)) {
        if (a.lb && a.lb.email) {
          var n = hr(d.elements);
          f = fr(n, a && a.ye);
          g = er(f);
          10 < n.length && (e = "3");
        }
        !a.Oh && g && (f = [g]);
        for (var p = 0; p < f.length; p++) m.push(ar(f[p], a.ld, a.md));
        m = m.slice(0, 10);
      } else if (a.lb) {}
      g && (k = ar(g, a.ld, a.md));
      var D = {
        elements: m,
        Hh: k,
        status: e
      };
      pr[b] = {
        timestamp: Ua(),
        result: D
      };
      return D;
    },
    Jr = function (a) {
      return a.tagName + ":" + a.isVisible + ":" + a.Z.length + ":" + nr.test(a.Z);
    };
  var Kr = {
    Yk: Number('') || 500,
    Ik: Number('') || 5E3,
    Wi: Number('') || 10,
    pk: Number('') || 5E3
  };
  function Lr(a) {
    return a.performance && a.performance.now() || Date.now();
  }
  var Mr = function (a, b) {
    var c;
    return c;
  };
  var Nr = "https://" + ni.yd,
    Or = Nr + "/gtm/static/",
    Pr = Number('') || 5,
    Qr = Number('') || 50,
    Rr = Nr,
    Sr = Or,
    Tr = !1,
    Ur = 0,
    Vr = Ka();
  function ds() {
    var a = !1;
    return a;
  }
  function es(a) {}
  function gs(a, b, c) {}
  function $r(a, b, c, d) {}
  function fs(a, b, c, d, e) {}
  function hs(a) {}
  function is(a, b, c, d) {}
  function js() {
    return "attribution-reporting";
  }
  function ks(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  ;
  var ls = !1;
  function ms() {
    if (ks("join-ad-interest-group") && Ea(Dc.joinAdInterestGroup)) return !0;
    ls || (Gl('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), ls = !0);
    return ks("join-ad-interest-group") && Ea(Dc.joinAdInterestGroup);
  }
  function ns(a, b) {
    var c = void 0;
    try {
      c = E.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6E4 > Ua() - d) {
        Ab("TAGGING", 9);
        return;
      }
      try {
        c.parentNode.removeChild(c);
      } catch (e) {}
      c = void 0;
    } else try {
      if (50 <= E.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
        Ab("TAGGING", 10);
        return;
      }
    } catch (e) {}
    Mc(a, void 0, {
      allow: "join-ad-interest-group"
    }, {
      taggingId: b,
      loadTime: Ua()
    }, c);
  }
  function os() {
    return "https://td.doubleclick.net";
  }
  ;
  var ps = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
    qs = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    rs = /^\d+\.fls\.doubleclick\.net$/,
    ss = /;gac=([^;?]+)/,
    ts = /;gacgb=([^;?]+)/,
    us = /;gclaw=([^;?]+)/,
    vs = /;gclgb=([^;?]+)/;
  function ws(a, b) {
    if (rs.test(E.location.host)) {
      var c = E.location.href.match(b);
      return c && 2 == c.length && c[1].match(ps) ? decodeURIComponent(c[1]) : "";
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], g = a[e], k = 0; k < g.length; k++) f.push(g[k].aa);
      d.push(e + ":" + f.join(","));
    }
    return 0 < d.length ? d.join(";") : "";
  }
  var xs = function (a, b, c) {
    var d = Do() ? yo("_gac_gb", !0) : {},
      e = [],
      f = !1,
      g;
    for (g in d) {
      var k = Zo("_gac_gb_" + g, a, b, c);
      f = f || 0 !== k.length && k.some(function (m) {
        return 1 === m;
      });
      e.push(g + ":" + k.join(","));
    }
    return {
      Dl: f ? e.join(";") : "",
      Cl: ws(d, ts)
    };
  };
  function ys(a, b, c) {
    if (rs.test(E.location.host)) {
      var d = E.location.href.match(c);
      if (d && 2 == d.length && d[1].match(qs)) return [{
        aa: d[1]
      }];
    } else return Fo((a || "_gcl") + b);
    return [];
  }
  var zs = function (a) {
      return ys(a, "_aw", us).map(function (b) {
        return b.aa;
      }).join(".");
    },
    As = function (a) {
      return ys(a, "_gb", vs).map(function (b) {
        return b.aa;
      }).join(".");
    },
    Bs = function (a, b) {
      var c = Zo((b && b.prefix || "_gcl") + "_gb", a, b);
      return 0 === c.length || c.every(function (d) {
        return 0 === d;
      }) ? "" : c.join(".");
    };
  var Cs = function () {
    if (Ea(z.__uspapi)) {
      var a = "";
      try {
        z.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var qt = {
    J: {
      Uh: "ads_conversion_hit",
      xd: "container_execute_start",
      Xh: "container_setup_end",
      eg: "container_setup_start",
      Vh: "container_blocking_end",
      Wh: "container_execute_end",
      Yh: "container_yield_end",
      fg: "container_yield_start",
      Pi: "event_execute_end",
      Oi: "event_evaluation_end",
      Vg: "event_evaluation_start",
      Qi: "event_setup_end",
      je: "event_setup_start",
      Ri: "ga4_conversion_hit",
      me: "page_load",
      Cn: "pageview",
      Ub: "snippet_load",
      fj: "tag_callback_error",
      gj: "tag_callback_failure",
      ij: "tag_callback_success",
      jj: "tag_execute_end",
      ed: "tag_execute_start"
    }
  };
  function rt() {
    function a(c, d) {
      var e = Cb(d);
      e && b.push(c + "=" + e);
    }
    var b = [];
    a("&u", "GTM");
    a("&ut", "TAGGING");
    a("&h", "HEALTH");
    return b.join("");
  }
  ;
  var st = !1;
  var au = function (a, b) {},
    bu = function (a, b) {},
    cu = function (a, b) {},
    du = function (a, b) {},
    eu = function () {
      var a = {};
      return a;
    },
    Tt = function (a) {
      a = void 0 === a ? !0 : a;
      var b = {};
      return b;
    },
    fu = function () {},
    gu = function (a, b) {},
    hu = function (a, b, c) {},
    iu = function () {};
  var ju = function (a, b) {
    var c = z,
      d,
      e = c.GooglebQhCsO;
    e || (e = {}, c.GooglebQhCsO = e);
    d = e;
    if (d[a]) return !1;
    d[a] = [];
    d[a][0] = b;
    return !0;
  };
  var ku = function (a, b, c) {
    var d = Bl(a, "fmt");
    if (b) {
      var e = Bl(a, "random"),
        f = Bl(a, "label") || "";
      if (!e) return !1;
      var g = on(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
      if (!ju(g, b)) return !1;
    }
    d && 4 != d && (a = Dl(a, "rfmt", d));
    var k = Dl(a, "fmt", 4);
    Kc(k, function () {
      z.google_noFurtherRedirects && b && b.call && (z.google_noFurtherRedirects = null, b());
    }, void 0, c, E.getElementsByTagName("script")[0].parentElement || void 0);
    return !0;
  };
  var Bu = function () {
      this.h = {};
    },
    Cu = function (a, b, c) {
      null != c && (a.h[b] = c);
    },
    Du = function (a) {
      return Object.keys(a.h).map(function (b) {
        return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b]);
      }).join("&");
    },
    Fu = function (a, b, c, d) {};
  function Hu(a, b) {
    if (data.entities && data.entities[a]) return data.entities[a][b];
  }
  ;
  var Ju = function (a, b) {
      Iu(a).entity.push(b);
    },
    Ku = function (a, b) {
      Iu(a).event && Iu(a).event.push(b);
    },
    Lu = function () {
      var a = Iu(uk());
      return a.event ? a.event : [];
    };
  function Iu(a) {
    var b,
      c = oi.r;
    c || (c = {
      container: {}
    }, oi.r = c);
    b = c;
    var d = b.container[a];
    d || (d = {
      entity: [],
      event: []
    }, b.container[a] = d);
    return d;
  }
  ;
  var Mu = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
    Nu = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
      customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"]
    },
    Ou = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    },
    Pu = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
    Su = function (a) {
      var b = Oi("gtm.allowlist") || Oi("gtm.whitelist");
      b && O(9);
      ui && (b = ["google", "gtagfl", "lcl", "zone"]);
      Qu() && (ui ? O(116) : (O(117), Ru && (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728."))));
      var c = b && Ya(Qa(b), Nu),
        d = Oi("gtm.blocklist") || Oi("gtm.blacklist");
      d || (d = Oi("tagTypeBlacklist")) && O(3);
      d ? O(8) : d = [];
      Qu() && (d = Qa(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Qa(d).indexOf("google") && O(2);
      var e = d && Ya(Qa(d), Ou),
        f = {};
      return function (g) {
        var k = g && g[Oe.za];
        if (!k || "string" != typeof k) return !0;
        k = k.replace(/^_*/, "");
        if (void 0 !== f[k]) return f[k];
        var m = Gi[k] || [],
          n = a(k, m),
          p;
        p = Iu(uk()).entity;
        for (var q = 0; q < p.length; q++) try {
          n = n && p[q](k, m);
        } catch (y) {
          n = !1;
        }
        if (b) {
          var r;
          if (r = n) a: {
            if (0 > c.indexOf(k)) if (m && 0 < m.length) for (var t = 0; t < m.length; t++) {
              if (0 > c.indexOf(m[t])) {
                O(11);
                r = !1;
                break a;
              }
            } else {
              r = !1;
              break a;
            }
            r = !0;
          }
          n = r;
        }
        var u = !1;
        if (d) {
          var v = 0 <= e.indexOf(k);
          if (v) u = v;else {
            var w = Ma(e, m || []);
            w && O(10);
            u = w;
          }
        }
        var x = !n || u;
        x || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (x = Ma(e, Pu));
        return f[k] = x;
      };
    },
    Ru = !1;
  Ru = !0;
  var Qu = function () {
      return Mu.test(z.location && z.location.hostname);
    },
    Tu = function () {
      mk && Ju(uk(), function (a) {
        var b = xf(a),
          c;
        if (Cf(b)) {
          var d = b[Oe.za];
          if (!d) throw "Error: No function name given for function call.";
          var e = qf[d];
          c = !!e && !!e.runInSiloedMode;
        } else c = !!Hu(b[Oe.za], 4);
        return c;
      });
    };
  var Vu = function (a, b, c, d, e) {
      if (!Uu() && !Ak(a)) {
        var f = "?id=" + encodeURIComponent(a) + "&l=" + ni.ia,
          g = 0 === a.indexOf("GTM-");
        g || (f += "&cx=c");
        S(51) && (f += "&gtm=" + hn());
        var k = Np();
        k && (f += "&sign=" + ni.Af);
        var m = c ? "/gtag/js" : "/gtm.js",
          n = wi || yi ? Mp(b, m + f) : void 0;
        if (!n) {
          var p = ni.yd + m;
          k && Ec && g && (p = Ec.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          n = mp("https://", "http://", p + f);
        }
        var q = a;
        d.siloed && (Dk({
          ctid: q,
          isDestination: !1
        }), q = ok(q));
        var r = q,
          t = Ck();
        ik().container[r] = {
          state: 1,
          context: d,
          parent: t
        };
        jk({
          ctid: r,
          isDestination: !1
        }, e);
        Kc(n);
      }
    },
    Wu = function (a, b, c, d) {
      if (!Uu() && !Bk(a)) if (Ek()) ik().destination[a] = {
        state: 0,
        transportUrl: b,
        context: c,
        parent: Ck()
      }, jk({
        ctid: a,
        isDestination: !0
      }, d), O(91);else {
        var e = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + ni.ia + "&cx=c";
        S(51) && (e += "&gtm=" + hn());
        Np() && (e += "&sign=" + ni.Af);
        var f = wi || yi ? Mp(b, e) : void 0;
        f || (f = mp("https://", "http://", ni.yd + e));
        var g = a;
        c.siloed && (Dk({
          ctid: g,
          isDestination: !0
        }), g = ok(g));
        ik().destination[g] = {
          state: 1,
          context: c,
          parent: Ck()
        };
        jk({
          ctid: g,
          isDestination: !0
        }, d);
        Kc(f);
      }
    };
  function Uu() {
    if (Xm()) {
      return !0;
    }
    return !1;
  }
  ;
  var Xu = !1,
    Yu = 0,
    Zu = [];
  function $u(a) {
    if (!Xu) {
      var b = E.createEventObject,
        c = "complete" == E.readyState,
        d = "interactive" == E.readyState;
      if (!a || "readystatechange" != a.type || c || !b && d) {
        Xu = !0;
        for (var e = 0; e < Zu.length; e++) H(Zu[e]);
      }
      Zu.push = function () {
        for (var f = 0; f < arguments.length; f++) H(arguments[f]);
        return 0;
      };
    }
  }
  function av() {
    if (!Xu && 140 > Yu) {
      Yu++;
      try {
        E.documentElement.doScroll("left"), $u();
      } catch (a) {
        z.setTimeout(av, 50);
      }
    }
  }
  var bv = function (a) {
    Xu ? a() : Zu.push(a);
  };
  var cv = function () {
    this.H = 0;
    this.h = {};
  };
  cv.prototype.addListener = function (a, b, c) {
    var d = ++this.H;
    this.h[a] = this.h[a] || {};
    this.h[a][String(d)] = {
      listener: b,
      ob: c
    };
    return d;
  };
  cv.prototype.C = function (a, b) {
    var c = this.h[a],
      d = String(b);
    if (!c || !c[d]) return !1;
    delete c[d];
    return !0;
  };
  cv.prototype.D = function (a, b) {
    var c = [];
    l(this.h[a], function (d, e) {
      0 > c.indexOf(e.listener) && (void 0 === e.ob || 0 <= b.indexOf(e.ob)) && c.push(e.listener);
    });
    return c;
  };
  var dv = function (a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: tk()
    };
  };
  var fv = function (a, b) {
      this.h = !1;
      this.H = [];
      this.N = {
        tags: []
      };
      this.T = !1;
      this.C = this.D = 0;
      ev(this, a, b);
    },
    gv = function (a, b, c, d) {
      if (ri.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      nb(d) && (e = B(d, e));
      e.id = c;
      e.status = "timeout";
      return a.N.tags.push(e) - 1;
    },
    hv = function (a, b, c, d) {
      var e = a.N.tags[b];
      e && (e.status = c, e.executionTime = d);
    },
    iv = function (a) {
      if (!a.h) {
        for (var b = a.H, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.H.length = 0;
      }
    },
    ev = function (a, b, c) {
      void 0 !== b && a.Cf(b);
      c && z.setTimeout(function () {
        return iv(a);
      }, Number(c));
    };
  fv.prototype.Cf = function (a) {
    var b = this,
      c = Wa(function () {
        return H(function () {
          a(tk(), b.N);
        });
      });
    this.h ? c() : this.H.push(c);
  };
  var jv = function (a) {
      a.D++;
      return Wa(function () {
        a.C++;
        a.T && a.C >= a.D && iv(a);
      });
    },
    kv = function (a) {
      a.T = !0;
      a.C >= a.D && iv(a);
    };
  var lv = {},
    nv = function () {
      return z[mv()];
    },
    ov = !1;
  function mv() {
    return z.GoogleAnalyticsObject || "ga";
  }
  var rv = function (a) {},
    sv = function (a, b) {
      return function () {
        var c = nv(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              k = f.get("hitCallback"),
              m = 0 > g.indexOf("&tid=" + b);
            m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
            e(f);
            m && (f.set("hitPayload", g, !0), f.set("hitCallback", k, !0), f.set("_x_19", void 0, !0), e(f));
          });
        }
      };
    };
  var xv = {},
    yv = {};
  function zv(a, b) {
    if (Ok) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      xv[a] = "&e=" + c + "&eid=" + a;
      Yk(a);
    }
  }
  function Av(a) {
    var b = a.eventId,
      c = a.fc;
    if (!xv[b]) return "";
    var d = yv[b] ? "" : "&es=1";
    d += xv[b];
    c && (yv[b] = !0);
    return d;
  }
  ;
  var Bv = {};
  function Cv(a, b) {
    Ok && (Bv[a] = Bv[a] || {}, Bv[a][b] = (Bv[a][b] || 0) + 1);
  }
  function Dv(a) {
    var b = a.eventId,
      c = a.fc,
      d = Bv[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete Bv[b];
    return e.length ? "&md=" + e.join(".") : "";
  }
  ;
  var Ev = {},
    Fv = {
      aev: "1",
      c: "2",
      jsm: "3",
      v: "4",
      j: "5",
      smm: "6",
      rmm: "7",
      input: "8"
    };
  function Gv(a, b, c) {
    if (Ok) {
      Ev[a] = Ev[a] || [];
      var d = Fv[b] || "0",
        e;
      e = c instanceof z.Element ? "1" : c instanceof z.Event ? "2" : c instanceof z.RegExp ? "3" : c === z ? "4" : c === E ? "5" : c instanceof z.Promise ? "6" : c instanceof z.Storage ? "7" : c instanceof z.Date ? "8" : c instanceof z.History ? "9" : c instanceof z.Performance ? "a" : c === z.crypto ? "b" : c instanceof z.Location ? "c" : c instanceof z.Navigator ? "d" : "object" !== typeof c || nb(c) ? "0" : "e";
      Ev[a].push("" + d + e);
    }
  }
  function Hv(a) {
    var b = a.eventId,
      c = Ev[b] || [];
    if (!c.length) return "";
    a.fc && delete Ev[b];
    return "&pcr=" + c.join(".");
  }
  ;
  var Iv = {},
    Jv = {};
  function Kv(a, b, c) {
    if (Ok && b) {
      var d = gk(b);
      Iv[a] = Iv[a] || [];
      Iv[a].push(c + d);
      var e = (Cf(b) ? "1" : "2") + d;
      Jv[a] = Jv[a] || [];
      Jv[a].push(e);
      Yk(a);
    }
  }
  function Lv(a) {
    var b = a.eventId,
      c = a.fc,
      d = "",
      e = Iv[b] || [];
    e.length && (d += "&tr=" + e.join("."));
    var f = Jv[b] || [];
    f.length && (d += "&ti=" + f.join("."));
    c && (delete Iv[b], delete Jv[b]);
    return d;
  }
  ;
  function Mv(a, b, c, d) {
    var e = of[a],
      f = Nv(a, b, c, d);
    if (!f) return null;
    var g = zf(e[Oe.ej], c, []);
    if (g && g.length) {
      var k = g[0];
      f = Mv(k.index, {
        onSuccess: f,
        onFailure: 1 === k.uj ? b.terminate : f,
        terminate: b.terminate
      }, c, d);
    }
    return f;
  }
  function Nv(a, b, c, d) {
    function e() {
      if (f[Oe.Nk]) k();else {
        var w = Af(f, c, []),
          x = w[Oe.ek];
        if (null != x) for (var y = 0; y < x.length; y++) if (!ak(x[y])) {
          k();
          return;
        }
        var A = gv(c.Vb, String(f[Oe.za]), Number(f[Oe.qe]), w[Oe.Ok]),
          C = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!C) {
            C = !0;
            var G = Ua() - F;
            Kv(c.id, of[a], "5");
            hv(c.Vb, A, "success", G);
            S(24) && hu(c, f, qt.J.ij);
            g();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!C) {
            C = !0;
            var G = Ua() - F;
            Kv(c.id, of[a], "6");
            hv(c.Vb, A, "failure", G);
            S(24) && hu(c, f, qt.J.gj);
            k();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        Kv(c.id, f, "1");
        var D = function () {
          kj(3);
          var G = Ua() - F;
          Kv(c.id, f, "7");
          hv(c.Vb, A, "exception", G);
          S(24) && hu(c, f, qt.J.fj);
          C || (C = !0, k());
        };
        S(24) && gu(c, f);
        var F = Ua();
        try {
          yf(w, {
            event: c,
            index: a,
            type: 1
          });
        } catch (G) {
          D(G);
        }
        S(24) && hu(c, f, qt.J.jj);
      }
    }
    var f = of[a],
      g = b.onSuccess,
      k = b.onFailure,
      m = b.terminate;
    if (c.isBlocked(f)) return null;
    var n = zf(f[Oe.kj], c, []);
    if (n && n.length) {
      var p = n[0],
        q = Mv(p.index, {
          onSuccess: g,
          onFailure: k,
          terminate: m
        }, c, d);
      if (!q) return null;
      g = q;
      k = 2 === p.uj ? m : q;
    }
    if (f[Oe.Zi] || f[Oe.Qk]) {
      var r = f[Oe.Zi] ? pf : c.Ym,
        t = g,
        u = k;
      if (!r[a]) {
        e = Wa(e);
        var v = Ov(a, r, e);
        g = v.onSuccess;
        k = v.onFailure;
      }
      return function () {
        r[a](t, u);
      };
    }
    return e;
  }
  function Ov(a, b, c) {
    var d = [],
      e = [];
    b[a] = Pv(d, e, c);
    return {
      onSuccess: function () {
        b[a] = Qv;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = Rv;
        for (var f = 0; f < e.length; f++) e[f]();
      }
    };
  }
  function Pv(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function Qv(a) {
    a();
  }
  function Rv(a, b) {
    b();
  }
  ;
  var Tv = function (a, b) {
      return 1 === arguments.length ? Sv("set", a) : Sv("set", a, b);
    },
    Uv = function (a, b) {
      return 1 === arguments.length ? Sv("config", a) : Sv("config", a, b);
    },
    Vv = function (a, b, c) {
      c = c || {};
      c[Q.g.Ob] = a;
      return Sv("event", b, c);
    };
  function Sv(a) {
    return arguments;
  }
  var Wv = function () {
    this.h = [];
    this.C = [];
  };
  Wv.prototype.enqueue = function (a, b, c) {
    var d = this.h.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    c.eventId = b;
    c.fromContainerExecution = !0;
    c.priorityId = d;
    var e = {
      message: a,
      notBeforeEventId: b,
      priorityId: d,
      messageContext: c
    };
    this.h.push(e);
    for (var f = 0; f < this.C.length; f++) try {
      this.C[f](e);
    } catch (g) {}
  };
  Wv.prototype.listen = function (a) {
    this.C.push(a);
  };
  Wv.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || (d = [], a[c.notBeforeEventId] = d);
      d.push(c);
    }
    return a;
  };
  Wv.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var ww = function (a, b, c) {
      c.eventMetadata = c.eventMetadata || {};
      c.eventMetadata.source_canonical_id = Tf.Ff;
      qw().enqueue(a, b, c);
    },
    yw = function () {
      var a = xw;
      qw().listen(a);
    };
  function qw() {
    var a = oi.mb;
    a || (a = new Wv(), oi.mb = a);
    return a;
  }
  var Gw = function (a) {
      var b = oi.zones;
      return b ? b.getIsAllowedFn(pk(), a) : function () {
        return !0;
      };
    },
    Hw = function () {
      Ku(uk(), function (a, b) {
        var c = oi.zones;
        return c ? c.isActive(pk(), b) : !0;
      });
    };
  var Kw = function (a, b) {
    for (var c = [], d = 0; d < of.length; d++) if (a[d]) {
      var e = of[d];
      var f = jv(b.Vb);
      try {
        var g = Mv(d, {
          onSuccess: f,
          onFailure: f,
          terminate: f
        }, b, d);
        if (g) {
          var k = e[Oe.za];
          if (!k) throw "Error: No function name given for function call.";
          var m = qf[k];
          c.push({
            Sj: d,
            Ij: (m ? m.priorityOverride || 0 : 0) || Hu(e[Oe.za], 1) || 0,
            execute: g
          });
        } else Iw(d, b), f();
      } catch (p) {
        f();
      }
    }
    c.sort(Jw);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return 0 < c.length;
  };
  var Mw = function (a, b) {
    if (!Lw) return !1;
    var c = a["gtm.triggers"] && String(a["gtm.triggers"]),
      d = Lw.D(a.event, c ? String(c).split(",") : []);
    if (!d.length) return !1;
    for (var e = 0; e < d.length; ++e) {
      var f = jv(b);
      try {
        d[e](a, f);
      } catch (g) {
        f();
      }
    }
    return !0;
  };
  function Jw(a, b) {
    var c,
      d = b.Ij,
      e = a.Ij;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;else {
      var g = a.Sj,
        k = b.Sj;
      f = g > k ? 1 : g < k ? -1 : 0;
    }
    return f;
  }
  function Iw(a, b) {
    if (Ok) {
      var c = function (d) {
        var e = b.isBlocked(of[d]) ? "3" : "4",
          f = zf(of[d][Oe.ej], b, []);
        f && f.length && c(f[0].index);
        Kv(b.id, of[d], e);
        var g = zf(of[d][Oe.kj], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var Nw = !1,
    Lw;
  var Ow = function () {
    Lw || (Lw = new cv());
    return Lw;
  };
  var Tw = function (a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    if (S(24)) {}
    if ("gtm.js" === d) {
      if (Nw) return !1;
      Nw = !0;
    }
    var e,
      f = !1;
    if (Lu().every(function (r) {
      return r(d, b);
    })) e = Gw(b);else {
      if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d) return !1;
      f = !0;
      e = Gw(Number.MAX_SAFE_INTEGER);
    }
    zv(b, d);
    var g = a.eventCallback,
      k = a.eventTimeout,
      m = {
        id: b,
        priorityId: c,
        name: d,
        isBlocked: Su(e),
        Ym: [],
        logMacroError: function () {
          O(6);
          kj(0);
        },
        cachedModelValues: Pw(),
        checkPixieIncompatibility: Qw(b),
        Vb: new fv(function () {
          if (S(24)) {}
          g && g.apply(g, [].slice.call(arguments, 0));
        }, k),
        originalEventData: B(a)
      };
    S(42) && (m.reportMacroDiscrepancy = Cv);
    S(24) && cu(m.id, m.name);
    var n = Kf(m);
    S(24) && du(m.id, m.name);
    f && (n = Rw(n));
    if (S(24)) {}
    var p = Kw(n, m),
      q = !1;
    q = Mw(a, m.Vb);
    kv(m.Vb);
    "gtm.js" !== d && "gtm.sync" !== d || rv(tk());
    return Sw(n, p) || q;
  };
  function Qw(a) {
    return function (b) {
      pb(b) || Gv(a, "input", b);
    };
  }
  function Pw() {
    var a = {};
    a.event = Ti("event", 1);
    a.ecommerce = Ti("ecommerce", 1);
    a.gtm = Ti("gtm");
    a.eventModel = Ti("eventModel");
    return a;
  }
  function Rw(a) {
    for (var b = [], c = 0; c < a.length; c++) if (a[c]) {
      var d = String(of[c][Oe.za]);
      if (qi[d] || void 0 !== of[c][Oe.Rk] || Hi[d] || Hu(d, 2)) b[c] = !0;
    }
    return b;
  }
  function Sw(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++) if (a[c] && of[c] && !ri[String(of[c][Oe.za])]) return !0;
    return !1;
  }
  var Nf;
  var Uw = {},
    Vw = {},
    Ww = function (a, b) {
      for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
        Sf: e.Sf,
        Mf: e.Mf
      }, f++) {
        var g = a[f];
        if (0 <= g.indexOf("-")) {
          if (e.Sf = jp(g, b), e.Sf) {
            var k = rk();
            Ja(k, function (r) {
              return function (t) {
                return r.Sf.fa === t;
              };
            }(e)) ? c.push(g) : d.push(g);
          }
        } else {
          var m = Uw[g] || [];
          e.Mf = {};
          m.forEach(function (r) {
            return function (t) {
              return r.Mf[t] = !0;
            };
          }(e));
          for (var n = pk(), p = 0; p < n.length; p++) if (e.Mf[n[p]]) {
            c = c.concat(rk());
            break;
          }
          var q = Vw[g] || [];
          q.length && (c = c.concat(q));
        }
      }
      return {
        vm: c,
        ym: d
      };
    },
    Xw = function (a) {
      l(Uw, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    Yw = function (a) {
      l(Vw, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var Zw = "HA GF G UA AW DC MC".split(" "),
    $w = !1,
    ax = !1;
  function bx(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
      value: Ii()
    });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return {
      eventId: b.eventId,
      priorityId: b.priorityId
    };
  }
  var cx = void 0,
    dx = void 0;
  function ex(a, b, c) {
    var d = B(a);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return void 0 !== b[f];
    }) && O(136);
    var e = B(b);
    B(c, e);
    ww(Uv(pk()[0], e), a.eventId, d);
  }
  function fx(a) {
    for (var b = ia([Q.g.Ud, Q.g.Pb]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = a && a[d] || dq.D[d];
      if (e) return e;
    }
  }
  var gx = {
      config: function (a, b) {
        var c = S(43),
          d = bx(a, b);
        if (!(2 > a.length) && h(a[1])) {
          var e = {};
          if (2 < a.length) {
            if (void 0 != a[2] && !nb(a[2]) || 3 < a.length) return;
            e = a[2];
          }
          var f = jp(a[1], b.isGtmEvent);
          if (f) {
            var g, k, m;
            a: {
              if (!lk.ke) {
                var n = vk(Ck());
                if (Gk(n)) {
                  var p = n.parent,
                    q = p.isDestination;
                  m = {
                    Dm: vk(p),
                    sm: q
                  };
                  break a;
                }
              }
              m = void 0;
            }
            var r = m;
            r && (g = r.Dm, k = r.sm);
            zv(d.eventId, "gtag.config");
            var t = f.fa,
              u = f.id !== t;
            if (u ? -1 === rk().indexOf(t) : -1 === pk().indexOf(t)) {
              if (!(c && b.inheritParentConfig || e[Q.g.xb])) {
                var v = fx(e);
                if (u) Wu(t, v, {
                  source: 2,
                  fromContainerExecution: b.fromContainerExecution
                });else if (c && void 0 !== g && -1 !== g.containers.indexOf(t)) {
                  var w = e;
                  cx ? ex(b, w, cx) : dx || (dx = B(w));
                } else Vu(t, v, !0, {
                  source: 2,
                  fromContainerExecution: b.fromContainerExecution
                });
              }
            } else {
              if (g && (O(128), k && O(130), c && b.inheritParentConfig)) {
                var x;
                var y = e;
                dx ? (ex(b, dx, y), x = !1) : (!y[Q.g.Qb] && ti && cx || (cx = B(y)), x = !0);
                x && g.containers && g.containers.join(",");
                return;
              }
              if (ti && !u && !e[Q.g.Qb]) {
                var A = ax;
                ax = !0;
                if (A) return;
              }
              $w || O(43);
              if (!b.noTargetGroup) if (u) {
                Yw(f.id);
                var C = f.id,
                  D = e[Q.g.Rd] || "default";
                D = String(D).split(",");
                for (var F = 0; F < D.length; F++) {
                  var G = Vw[D[F]] || [];
                  Vw[D[F]] = G;
                  0 > G.indexOf(C) && G.push(C);
                }
              } else {
                Xw(f.id);
                var K = f.id,
                  N = e[Q.g.Rd] || "default";
                N = N.toString().split(",");
                for (var P = 0; P < N.length; P++) {
                  var U = Uw[N[P]] || [];
                  Uw[N[P]] = U;
                  0 > U.indexOf(K) && U.push(K);
                }
              }
              delete e[Q.g.Rd];
              var ca = b.eventMetadata || {};
              ca.hasOwnProperty("is_external_event") || (ca.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = ca;
              delete e[Q.g.Uc];
              for (var V = u ? [f.id] : rk(), T = 0; T < V.length; T++) {
                var ja = e,
                  ha = B(b),
                  da = jp(V[T], ha.isGtmEvent);
                da && dq.push("config", [ja], da, ha);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          O(39);
          var c = bx(a, b),
            d = a[1],
            e = a[2];
          b.fromContainerExecution || (e[Q.g.O] && O(139), e[Q.g.Ea] && O(140));
          "default" === d ? Wj(e) : "update" === d ? Xj(e, c) : "declare" === d ? b.fromContainerExecution && Vj(e) : S(80) && "core_platform_services" === d && Yj(e);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && h(c)) {
          var d;
          if (2 < a.length) {
            if (!nb(a[2]) && void 0 != a[2] || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = (f.event = c, f);
          e && (g.eventModel = B(e), e[Q.g.Uc] && (g.eventCallback = e[Q.g.Uc]), e[Q.g.Md] && (g.eventTimeout = e[Q.g.Md]));
          var k = bx(a, b),
            m = k.eventId,
            n = k.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if ("optimize.callback" === c) return g.eventModel = g.eventModel || {}, g;
          var p;
          var q = d,
            r = q && q[Q.g.Ob];
          void 0 === r && (r = Oi(Q.g.Ob, 2), void 0 === r && (r = "default"));
          if (h(r) || Ia(r)) {
            var t;
            b.isGtmEvent ? t = h(r) ? [r] : r : t = r.toString().replace(/\s+/g, "").split(",");
            var u = Ww(t, b.isGtmEvent),
              v = u.vm,
              w = u.ym;
            if (w.length) for (var x = fx(q), y = 0; y < w.length; y++) {
              var A = jp(w[y], b.isGtmEvent);
              A && Wu(A.fa, x, {
                source: 3,
                fromContainerExecution: b.fromContainerExecution
              });
            }
            p = lp(v, b.isGtmEvent);
          } else p = void 0;
          var C = p;
          if (C) {
            zv(m, c);
            for (var D = [], F = 0; F < C.length; F++) {
              var G = C[F],
                K = B(b);
              if (-1 !== Zw.indexOf(wk(G.prefix))) {
                var N = B(d),
                  P = K.eventMetadata || {};
                P.hasOwnProperty("is_external_event") || (P.is_external_event = !K.fromContainerExecution);
                K.eventMetadata = P;
                delete N[Q.g.Uc];
                fq(c, N, G.id, K);
              }
              D.push(G.id);
            }
            g.eventModel = g.eventModel || {};
            0 < C.length ? g.eventModel[Q.g.Ob] = D.join() : delete g.eventModel[Q.g.Ob];
            $w || O(43);
            void 0 === b.noGtmEvent && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
            g.eventModel[Q.g.Lb] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        O(53);
        if (4 === a.length && h(a[1]) && h(a[2]) && Ea(a[3])) {
          var c = jp(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            $w || O(43);
            var f = fx();
            if (!Ja(rk(), function (k) {
              return c.fa === k;
            })) Wu(c.fa, f, {
              source: 4,
              fromContainerExecution: b.fromContainerExecution
            });else if (-1 !== Zw.indexOf(wk(c.prefix))) {
              bx(a, b);
              var g = {};
              Sj(B((g[Q.g.jb] = d, g[Q.g.vb] = e, g)));
              gq(d, function (k) {
                H(function () {
                  return e(k);
                });
              }, c.id, b);
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          $w = !0;
          var c = bx(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f;
        }
      },
      policy: function (a) {
        if (3 === a.length && h(a[1]) && Ea(a[2])) {
          Of(a[1], a[2]);
          if (O(74), "all" === a[1]) {
            O(75);
            var b = !1;
            try {
              b = a[2](tk(), "unknown", {});
            } catch (c) {}
            b || O(76);
          }
        } else {
          O(73);
        }
      },
      set: function (a, b) {
        var c;
        2 == a.length && nb(a[1]) ? c = B(a[1]) : 3 == a.length && h(a[1]) && (c = {}, nb(a[2]) || Ia(a[2]) ? c[a[1]] = B(a[2]) : c[a[1]] = a[2]);
        if (c) {
          var d = bx(a, b),
            e = d.eventId,
            f = d.priorityId;
          B(c);
          var g = B(c);
          dq.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          S(13) && delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      }
    },
    hx = {
      policy: !0
    };
  var ix = function (a) {
      var b = z[ni.ia].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b) if (b.hasOwnProperty(d) && !0 === b[d]) {
          c = !1;
          break;
        }
        c && (b.end(), b.end = null);
      }
    },
    jx = function (a) {
      var b = z[ni.ia],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var kx = !1,
    lx = [];
  function mx() {
    if (!kx) {
      kx = !0;
      for (var a = 0; a < lx.length; a++) H(lx[a]);
    }
  }
  var nx = function (a) {
    kx ? H(a) : lx.push(a);
  };
  var Ex = function (a) {
    if (Dx(a)) return a;
    this.h = a;
  };
  Ex.prototype.getUntrustedMessageValue = function () {
    return this.h;
  };
  var Dx = function (a) {
    return !a || "object" !== lb(a) || nb(a) ? !1 : "getUntrustedMessageValue" in a;
  };
  Ex.prototype.getUntrustedMessageValue = Ex.prototype.getUntrustedMessageValue;
  var Fx = 0,
    Gx = {},
    Hx = [],
    Ix = [],
    Jx = !1,
    Kx = !1;
  function Lx(a, b) {
    return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId;
  }
  var Mx = function (a) {
      return z[ni.ia].push(a);
    },
    Nx = function (a, b, c) {
      a.eventCallback = b;
      c && (a.eventTimeout = c);
      return Mx(a);
    },
    Ox = function (a, b) {
      if (!Ha(b) || 0 > b) b = 0;
      var c = oi[ni.ia],
        d = 0,
        e = !1,
        f = void 0;
      f = z.setTimeout(function () {
        e || (e = !0, a());
        f = void 0;
      }, b);
      return function () {
        var g = c ? c.subscribers : 1;
        ++d === g && (f && (z.clearTimeout(f), f = void 0), e || (a(), e = !0));
      };
    };
  function Px(a, b) {
    var c = a._clear || b.overwriteModelFields;
    l(a, function (e, f) {
      "_clear" !== e && (c && Ri(e), Ri(e, f));
    });
    Di || (Di = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d && (d = Ii(), a["gtm.uniqueEventId"] = d, Ri("gtm.uniqueEventId", d));
    return Tw(a);
  }
  function Qx(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (Na(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b) return !0;
    }
    return !1;
  }
  function Rx() {
    var a;
    if (Ix.length) a = Ix.shift();else if (Hx.length) a = Hx.shift();else return;
    var b;
    var c = a;
    if (Jx || !Qx(c.message)) b = c;else {
      Jx = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Ii());
      var e = {},
        f = {
          message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
          messageContext: {
            eventId: d - 2
          }
        },
        g = {},
        k = {
          message: (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g),
          messageContext: {
            eventId: d - 1
          }
        };
      Hx.unshift(k, c);
      if (Ok) {
        var m = Tf.ctid;
        if (m) {
          var n,
            p = vk(Ck());
          n = p && p.context;
          var q,
            r = Hn(z.location.href);
          q = r.hostname + r.pathname;
          var t = n && n.fromContainerExecution,
            u = n && n.source,
            v = Tf.Ff,
            w = lk.ke;
          Ok && (Pp || (Pp = q), Qp.push(m + ";" + v + ";" + (t ? 1 : 0) + ";" + (u || 0) + ";" + (w ? 1 : 0)));
        }
      }
      b = f;
    }
    return b;
  }
  function Sx() {
    for (var a = !1, b; !Kx && (b = Rx());) {
      Kx = !0;
      delete Li.eventModel;
      Ni();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) Kx = !1;else {
        e.fromContainerExecution && Si();
        try {
          if (Ea(d)) try {
            d.call(Pi);
          } catch (x) {} else if (Ia(d)) {
            var f = d;
            if (h(f[0])) {
              var g = f[0].split("."),
                k = g.pop(),
                m = f.slice(1),
                n = Oi(g.join("."), 2);
              if (null != n) try {
                n[k].apply(n, m);
              } catch (x) {}
            }
          } else {
            var p = void 0,
              q = !1;
            if (Na(d)) {
              a: {
                if (d.length && h(d[0])) {
                  var r = gx[d[0]];
                  if (r && (!e.fromContainerExecution || !hx[d[0]])) {
                    p = r(d, e);
                    break a;
                  }
                }
                p = void 0;
              }
              (q = p && "set" === d[0] && !!p.event) && O(101);
            } else p = d;
            if (p) {
              var t = Px(p, e);
              a = t || a;
              q && t && O(113);
            }
          }
        } finally {
          e.fromContainerExecution && Ni(!0);
          var u = d["gtm.uniqueEventId"];
          if ("number" === typeof u) {
            for (var v = Gx[String(u)] || [], w = 0; w < v.length; w++) Ix.push(Tx(v[w]));
            v.length && Ix.sort(Lx);
            delete Gx[String(u)];
            u > Fx && (Fx = u);
          }
          Kx = !1;
        }
      }
    }
    return !a;
  }
  function Ux() {
    if (S(24)) {
      var a = Vx();
    }
    var b = Sx();
    if (S(24)) {}
    try {
      ix(tk());
    } catch (c) {}
    return b;
  }
  function xw(a) {
    if (Fx < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      Gx[b] = Gx[b] || [];
      Gx[b].push(a);
    } else Ix.push(Tx(a)), Ix.sort(Lx), H(function () {
      Kx || Sx();
    });
  }
  function Tx(a) {
    return {
      message: a.message,
      messageContext: a.messageContext
    };
  }
  var Wx = function () {
      function a(f) {
        var g = {};
        if (Dx(f)) {
          var k = f;
          f = Dx(k) ? k.getUntrustedMessageValue() : void 0;
          g.fromContainerExecution = !0;
        }
        return {
          message: f,
          messageContext: g
        };
      }
      var b = Fc(ni.ia, []),
        c = oi[ni.ia] = oi[ni.ia] || {};
      !0 === c.pruned && O(83);
      Gx = qw().get();
      yw();
      bv(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push((f.event = "gtm.dom", f));
        }
      });
      nx(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push((f.event = "gtm.load", f));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var f;
        if (0 < oi.SANDBOXED_JS_SEMAPHORE) {
          f = [];
          for (var g = 0; g < arguments.length; g++) f[g] = new Ex(arguments[g]);
        } else f = [].slice.call(arguments, 0);
        var k = f.map(function (q) {
          return a(q);
        });
        Hx.push.apply(Hx, k);
        var m = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n) for (O(4), c.pruned = !0; this.length > n;) this.shift();
        var p = "boolean" !== typeof m || m;
        return Sx() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      Hx.push.apply(Hx, e);
      if (Vx()) {
        if (S(24)) {}
        H(Ux);
      }
    },
    Vx = function () {
      var a = !0;
      return a;
    };
  function Xx(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = Ua();
    return b < c + 3E5 && b > c - 9E5;
  }
  function Yx(a) {
    return a && 0 === a.indexOf("pending:") ? Xx(a.substr(8)) : !1;
  }
  ;
  var sy = function () {};
  var ty = function () {};
  ty.prototype.toString = function () {
    return "undefined";
  };
  var uy = new ty();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => tracker.scan());
  } else {
    tracker.scan();
  }
  var By = function (a, b, c) {
      var d = {
        event: b,
        "gtm.element": a,
        "gtm.elementClasses": Vc(a, "className"),
        "gtm.elementId": a["for"] || Qc(a, "id") || "",
        "gtm.elementTarget": a.formTarget || Vc(a, "target") || ""
      };
      c && (d["gtm.triggers"] = c.join(","));
      d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || Vc(a, "href") || a.src || a.code || a.codebase || "";
      return d;
    },
    Cy = function (a) {
      oi.hasOwnProperty("autoEventsSettings") || (oi.autoEventsSettings = {});
      var b = oi.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    Dy = function (a, b, c) {
      Cy(a)[b] = c;
    },
    Ey = function (a, b, c, d) {
      var e = Cy(a),
        f = Va(e, b, d);
      e[b] = c(f);
    },
    Fy = function (a, b, c) {
      var d = Cy(a);
      return Va(d, b, c);
    },
    Gy = function (a, b) {
      Fy(a, "init", !1) || (Dy(a, "init", !0), b());
    },
    Hy = function (a) {
      return "string" === typeof a ? a : String(Ii());
    };
  var Iy = ["input", "select", "textarea"],
    Jy = ["button", "hidden", "image", "reset", "submit"],
    Ky = function (a) {
      var b = a.tagName.toLowerCase();
      return 0 > Iy.indexOf(b) || "input" === b && 0 <= Jy.indexOf(a.type.toLowerCase()) ? !1 : !0;
    },
    Ly = function (a) {
      return a.form ? a.form.tagName ? a.form : E.getElementById(a.form) : Tc(a, ["form"], 100);
    },
    My = function (a, b, c) {
      if (!a.elements) return 0;
      for (var d = b.dataset[c], e = 0, f = 1; e < a.elements.length; e++) {
        var g = a.elements[e];
        if (Ky(g)) {
          if (g.dataset[c] === d) return f;
          f++;
        }
      }
      return 0;
    };
  var Ny = !!z.MutationObserver,
    Oy = void 0,
    Py = function (a) {
      if (!Oy) {
        var b = function () {
          var c = E.body;
          if (c) if (Ny) new MutationObserver(function () {
            for (var e = 0; e < Oy.length; e++) H(Oy[e]);
          }).observe(c, {
            childList: !0,
            subtree: !0
          });else {
            var d = !1;
            Oc(c, "DOMNodeInserted", function () {
              d || (d = !0, H(function () {
                d = !1;
                for (var e = 0; e < Oy.length; e++) H(Oy[e]);
              }));
            });
          }
        };
        Oy = [];
        E.body ? b() : H(b);
      }
      Oy.push(a);
    },
    Qy = function (a) {
      if (Oy) for (var b = 0; b < Oy.length; b++) Oy[b] === a && Oy.splice(b, 1);
    };
  var az = function (a, b, c) {
    function d() {
      var g = a();
      f += e ? (Ua() - e) * g.playbackRate / 1E3 : 0;
      e = Ua();
    }
    var e = 0,
      f = 0;
    return {
      createEvent: function (g, k, m) {
        var n = a(),
          p = n.lh,
          q = void 0 !== m ? Math.round(m) : void 0 !== k ? Math.round(n.lh * k) : Math.round(n.rj),
          r = void 0 !== k ? Math.round(100 * k) : 0 >= p ? 0 : Math.round(q / p * 100),
          t = E.hidden ? !1 : .5 <= Sq(c);
        d();
        var u = void 0;
        void 0 !== b && (u = [b]);
        var v = By(c, "gtm.video", u);
        v["gtm.videoProvider"] = "youtube";
        v["gtm.videoStatus"] = g;
        v["gtm.videoUrl"] = n.url;
        v["gtm.videoTitle"] = n.title;
        v["gtm.videoDuration"] = Math.round(p);
        v["gtm.videoCurrentTime"] = Math.round(q);
        v["gtm.videoElapsedTime"] = Math.round(f);
        v["gtm.videoPercent"] = r;
        v["gtm.videoVisible"] = t;
        return v;
      },
      Nj: function () {
        e = Ua();
      },
      fd: function () {
        d();
      }
    };
  };
  var bz = z.clearTimeout,
    cz = z.setTimeout,
    dz = function (a, b, c, d) {
      if (Xm()) {
        b && H(b);
      } else return Kc(a, b, c, d);
    },
    ez = function () {
      return new Date();
    },
    fz = function () {
      return z.location.href;
    },
    gz = function (a) {
      return Fn(Hn(a), "fragment");
    },
    hz = function (a) {
      return Gn(Hn(a));
    },
    iz = function (a, b) {
      return Oi(a, b || 2);
    },
    jz = function (a, b, c) {
      return b ? Nx(a, b, c) : Mx(a);
    },
    kz = function (a, b) {
      z[a] = b;
    },
    X = function (a, b, c) {
      b && (void 0 === z[a] || c && !z[a]) && (z[a] = b);
      return z[a];
    },
    lz = function (a, b, c) {
      return Em(a, b, void 0 === c ? !0 : !!c);
    },
    mz = function (a, b, c) {
      return 0 === Nm(a, b, c);
    },
    nz = function (a, b) {
      if (Xm()) {
        b && H(b);
      } else Mc(a, b);
    },
    oz = function (a) {
      return !!Fy(a, "init", !1);
    },
    pz = function (a) {
      Dy(a, "init", !0);
    },
    qz = function (a, b, c) {
      pb(a) || Gv(c, b, a);
    };
  function Nz(a, b) {
    function c(g) {
      var k = Hn(g),
        m = Fn(k, "protocol"),
        n = Fn(k, "host", !0),
        p = Fn(k, "port"),
        q = Fn(k, "path").toLowerCase().replace(/\/$/, "");
      if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++) if (d[f] !== e[f]) return !1;
    return !0;
  }
  function Oz(a) {
    return Pz(a) ? 1 : 0;
  }
  function Pz(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = B(a, {});
        B({
          arg1: c[d],
          any_of: void 0
        }, e);
        if (Oz(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return tg(b, c);
      case "_css":
        var f;
        a: {
          if (b) try {
            for (var g = 0; g < pg.length; g++) {
              var k = pg[g];
              if (b[k]) {
                f = b[k](c);
                break a;
              }
            }
          } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return qg(b, c);
      case "_eq":
        return ug(b, c);
      case "_ge":
        return vg(b, c);
      case "_gt":
        return xg(b, c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return wg(b, c);
      case "_lt":
        return yg(b, c);
      case "_re":
        return sg(b, c, a.ignore_case);
      case "_sw":
        return zg(b, c);
      case "_um":
        return Nz(b, c);
    }
    return !1;
  }
  ;
  function Qz() {
    var a = ["&cv=1", "&rv=" + ni.Zg, "&tc=" + of.filter(function (b) {
      return b;
    }).length];
    ni.oe && a.push("&x=" + ni.oe);
    return a.join("");
  }
  ;
  var Rz = function () {
      return !1;
    },
    Sz = function () {
      var a = {};
      return function (b, c, d) {};
    };
  function Tz() {
    var a = Uz;
    return function (b, c, d) {
      var e = d && d.event;
      Vz(c);
      var f = 0 === b.indexOf("__cvt_") ? void 0 : 1,
        g = new sb();
      l(c, function (r, t) {
        var u = md(t, void 0, f);
        void 0 === u && void 0 !== t && O(44);
        g.set(r, u);
      });
      a.h.h.H = Hf();
      var k = {
        pj: Xf(b),
        eventId: void 0 !== e ? e.id : void 0,
        priorityId: void 0 !== e ? e.priorityId : void 0,
        Cf: void 0 !== e ? function (r) {
          return e.Vb.Cf(r);
        } : void 0,
        hd: function () {
          return b;
        },
        log: function () {},
        zl: {
          index: d && d.index,
          type: d && d.type,
          name: d && d.name
        },
        Pm: !!Hu(b, 3),
        originalEventData: null == e ? void 0 : e.originalEventData
      };
      e && e.cachedModelValues && (k.cachedModelValues = {
        gtm: e.cachedModelValues.gtm,
        ecommerce: e.cachedModelValues.ecommerce
      });
      if (Rz()) {
        var m = Sz(),
          n = void 0,
          p = void 0;
        k.ab = {
          Qh: [],
          se: {},
          nb: function (r, t, u) {
            1 === t && (n = r);
            7 === t && (p = u);
            m(r, t, u);
          },
          Dh: oh()
        };
        k.log = function (r, t) {
          if (n) {
            var u = Array.prototype.slice.call(arguments, 1);
            m(n, 4, {
              level: r,
              source: p,
              message: u
            });
          }
        };
      }
      var q = Ke(a, k, [b, g]);
      a.h.h.H = void 0;
      q instanceof xa && "return" === q.h && (q = q.C);
      return nd(q, void 0, f);
    };
  }
  function Vz(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    Ea(b) && (a.gtmOnSuccess = function () {
      H(b);
    });
    Ea(c) && (a.gtmOnFailure = function () {
      H(c);
    });
  }
  ;
  function Wz(a, b) {
    var c = this;
  }
  Wz.P = "addConsentListener";
  var Xz;
  var Yz = function (a) {
    for (var b = 0; b < a.length; ++b) if (Xz) try {
      a[b]();
    } catch (c) {
      O(77);
    } else a[b]();
  };
  function Zz(a, b, c) {
    var d = this,
      e;
    L(J(this), ["eventName:!string", "callback:!Fn", "triggerId:?string"], arguments), Yz([function () {
      return M(d, "listen_data_layer", a);
    }]), e = Ow().addListener(a, nd(b), c);
    return e;
  }
  Zz.F = "internal.addDataLayerEventListener";
  function $z(a, b, c) {}
  $z.P = "addDocumentEventListener";
  function aA(a, b, c, d) {}
  aA.P = "addElementEventListener";
  function bA(a) {}
  bA.P = "addEventCallback";
  function fA(a) {}
  fA.F = "internal.addFormAbandonmentListener";
  function gA(a, b, c, d) {}
  gA.F = "internal.addFormData";
  var hA = {},
    iA = [],
    jA = {},
    kA = 0,
    lA = 0;
  var nA = function () {
      Oc(E, "change", function (a) {
        for (var b = 0; b < iA.length; b++) iA[b](a);
      });
      Oc(z, "pagehide", function () {
        mA();
      });
    },
    mA = function () {
      l(jA, function (a, b) {
        var c = hA[a];
        c && l(b, function (d, e) {
          oA(e, c);
        });
      });
    },
    rA = function (a, b) {
      var c = "" + a;
      if (hA[c]) hA[c].push(b);else {
        var d = [b];
        hA[c] = d;
        var e = jA[c];
        e || (e = {}, jA[c] = e);
        iA.push(function (f) {
          var g = f.target;
          if (g) {
            var k = Ly(g);
            if (k) {
              var m = pA(k, "gtmFormInteractId", function () {
                  return kA++;
                }),
                n = pA(g, "gtmFormInteractFieldId", function () {
                  return lA++;
                }),
                p = e[m];
              p ? (p.Ia && (z.clearTimeout(p.Ia), p.qa.dataset.gtmFormInteractFieldId !== n && oA(p, d)), p.qa = g, qA(p, d, a)) : (e[m] = {
                form: k,
                qa: g,
                bc: 0,
                Ia: null
              }, qA(e[m], d, a));
            }
          }
        });
      }
    },
    oA = function (a, b) {
      var c = a.form,
        d = a.qa,
        e = By(c, "gtm.formInteract"),
        f = c.action;
      f && f.tagName && (f = c.cloneNode(!1).action);
      e["gtm.elementUrl"] = f;
      e["gtm.interactedFormName"] = c.getAttribute("name");
      e["gtm.interactedFormLength"] = c.length;
      e["gtm.interactedFormField"] = d;
      e["gtm.interactedFormFieldPosition"] = My(c, d, "gtmFormInteractFieldId");
      e["gtm.interactSequenceNumber"] = a.bc;
      e["gtm.interactedFormFieldId"] = d.id;
      e["gtm.interactedFormFieldName"] = d.getAttribute("name");
      e["gtm.interactedFormFieldType"] = d.getAttribute("type");
      for (var g = 0; g < b.length; g++) b[g](e);
      a.bc++;
      a.Ia = null;
    },
    qA = function (a, b, c) {
      c ? a.Ia = z.setTimeout(function () {
        oA(a, b);
      }, c) : oA(a, b);
    },
    pA = function (a, b, c) {
      var d = a.dataset[b];
      if (d) return d;
      d = String(c());
      return a.dataset[b] = d;
    };
  function sA(a, b) {
    L(J(this), ["callback:!Fn", "options:?*"], arguments);
    var c = nd(b) || {},
      d = Number(c.interval);
    if (!d || 0 > d) d = 0;
    var e = nd(a),
      f;
    Fy("pix.fil", "init") ? f = Fy("pix.fil", "reg") : (nA(), f = rA, Dy("pix.fil", "reg", rA), Dy("pix.fil", "init", !0));
    f(d, e);
  }
  sA.F = "internal.addFormInteractionListener";
  var uA = function (a, b, c) {
      var d = By(a, "gtm.formSubmit");
      d["gtm.interactedFormName"] = a.getAttribute("name");
      d["gtm.interactedFormLength"] = a.length;
      d["gtm.willOpenInCurrentWindow"] = !b && tA(a);
      c && c.value && (d["gtm.formSubmitButtonText"] = c.value);
      var e = a.action;
      e && e.tagName && (e = a.cloneNode(!1).action);
      d["gtm.elementUrl"] = e;
      d["gtm.formCanceled"] = b;
      return d;
    },
    vA = function (a, b) {
      var c = Fy("pix.fsl", a ? "nv.mwt" : "mwt", 0);
      z.setTimeout(b, c);
    },
    wA = function (a, b, c, d, e) {
      var f = Fy("pix.fsl", c ? "nv.mwt" : "mwt", 0),
        g = Fy("pix.fsl", c ? "runIfCanceled" : "runIfUncanceled", []);
      if (!g.length) return !0;
      var k = uA(a, c, e);
      O(121);
      if ("https://www.facebook.com/tr/" === k["gtm.elementUrl"]) return O(122), !0;
      if (d && f) {
        for (var m = db(b, g.length), n = 0; n < g.length; ++n) g[n](k, m);
        return m.done;
      }
      for (var p = 0; p < g.length; ++p) g[p](k, function () {});
      return !0;
    },
    xA = function () {
      var a = [],
        b = function (c) {
          return Ja(a, function (d) {
            return d.form === c;
          });
        };
      return {
        store: function (c, d) {
          var e = b(c);
          e ? e.button = d : a.push({
            form: c,
            button: d
          });
        },
        get: function (c) {
          var d = b(c);
          return d ? d.button : null;
        }
      };
    },
    tA = function (a) {
      var b = Vc(a, "target");
      return b && "_self" !== b && "_parent" !== b && "_top" !== b ? !1 : !0;
    },
    yA = function () {
      var a = xA(),
        b = HTMLFormElement.prototype.submit;
      Oc(E, "click", function (c) {
        var d = c.target;
        if (d && (d = Tc(d, ["button", "input"], 100)) && ("submit" == d.type || "image" == d.type) && d.name && Qc(d, "value")) {
          var e = Ly(d);
          e && a.store(e, d);
        }
      }, !1);
      Oc(E, "submit", function (c) {
        var d = c.target;
        if (!d) return c.returnValue;
        var e = c.defaultPrevented || !1 === c.returnValue,
          f = tA(d) && !e,
          g = a.get(d),
          k = !0,
          m = function () {
            if (k) {
              var n,
                p = {};
              g && (n = E.createElement("input"), n.type = "hidden", n.name = g.name, n.value = g.value, d.appendChild(n), g.hasAttribute("formaction") && (p.action = d.getAttribute("action"), Ac(d, pc(g.getAttribute("formaction")))), g.hasAttribute("formenctype") && (p.enctype = d.getAttribute("enctype"), d.setAttribute("enctype", g.getAttribute("formenctype"))), g.hasAttribute("formmethod") && (p.method = d.getAttribute("method"), d.setAttribute("method", g.getAttribute("formmethod"))), g.hasAttribute("formvalidate") && (p.validate = d.getAttribute("validate"), d.setAttribute("validate", g.getAttribute("formvalidate"))), g.hasAttribute("formtarget") && (p.target = d.getAttribute("target"), d.setAttribute("target", g.getAttribute("formtarget"))));
              b.call(d);
              n && (d.removeChild(n), p.hasOwnProperty("action") && Ac(d, p.action), p.hasOwnProperty("enctype") && d.setAttribute("enctype", p.enctype), p.hasOwnProperty("method") && d.setAttribute("method", p.method), p.hasOwnProperty("validate") && d.setAttribute("validate", p.validate), p.hasOwnProperty("target") && d.setAttribute("target", p.target));
            }
          };
        if (wA(d, m, e, f, g)) return k = !1, c.returnValue;
        vA(e, m);
        e || (c.preventDefault && c.preventDefault(), c.returnValue = !1);
        return !1;
      }, !1);
      HTMLFormElement.prototype.submit = function () {
        var c = this,
          d = !0,
          e = function () {
            d && b.call(c);
          };
        wA(c, e, !1, tA(c)) ? (b.call(c), d = !1) : vA(!1, e);
      };
    };
  function zA(a, b) {
    L(J(this), ["callback:!Fn", "options:?PixieMap"], arguments);
    var c = nd(b) || {},
      d = c.waitForCallbacks,
      e = c.waitForCallbacksTimeout,
      f = c.checkValidation;
    e = e && 0 < e ? e : 2E3;
    var g = nd(a);
    if (d) {
      var k = function (n) {
        return Math.max(e, n);
      };
      Ey("pix.fsl", "mwt", k, 0);
      f || Ey("pix.fsl", "nv.mwt", k, 0);
    }
    var m = function (n) {
      n.push(g);
      return n;
    };
    Ey("pix.fsl", "runIfUncanceled", m, []);
    f || Ey("pix.fsl", "runIfCanceled", m, []);
    Fy("pix.fsl", "init") || (yA(), Dy("pix.fsl", "init", !0));
  }
  zA.F = "internal.addFormSubmitListener";
  function EA(a) {}
  EA.F = "internal.addGaSendListener";
  var FA = function (a, b) {
    this.tagId = a;
    this.ue = b;
  };
  function GA(a, b, c) {
    var d = this;
  }
  GA.F = "internal.loadGoogleTag";
  function HA(a, b, c) {}
  HA.F = "internal.addGoogleTagRestriction";
  var IA = {},
    JA = [];
  var QA = function (a, b) {};
  QA.F = "internal.addHistoryChangeListener";
  function RA(a, b, c) {}
  RA.P = "addWindowEventListener";
  function SA(a, b) {
    return !0;
  }
  SA.P = "aliasInWindow";
  function TA(a, b, c) {}
  TA.F = "internal.appendRemoteConfigParameter";
  function UA() {
    var a = 2;
    return a;
  }
  ;
  function VA(a, b) {
    var c;
    return c;
  }
  VA.P = "callInWindow";
  function WA(a) {}
  WA.P = "callLater";
  function XA(a) {}
  XA.F = "callOnDomReady";
  function YA(a) {}
  YA.F = "callOnWindowLoad";
  function ZA(a, b) {
    var c;
    return c;
  }
  ZA.F = "internal.computeGtmParameter";
  function $A(a, b) {
    var c;
    var d = md(c, this.h, UA());
    void 0 === d && void 0 !== c && O(45);
    return d;
  }
  $A.P = "copyFromDataLayer";
  function aB(a) {
    var b = void 0;
    return b;
  }
  aB.F = "internal.copyFromDataLayerCache";
  function bB(a) {
    var b;
    return b;
  }
  bB.P = "copyFromWindow";
  function cB(a) {
    var b = void 0;
    return md(b, this.h, UA());
  }
  cB.F = "internal.copyKeyFromWindow";
  function dB(a, b) {
    var c;
    L(J(this), ["preHit:!PixieMap", "dustOptions:?PixieMap"], arguments);
    var d = nd(b) || {},
      e = nd(a, this.h, 1).xj(),
      f = e.s;
    d.omitEventContext && (f = rl(new gl(e.s.eventId, e.s.priorityId)));
    var g = new Cp(e.target, e.eventName, f);
    d.omitHitData || B(e.h, g.h);
    d.omitMetadata ? g.metadata = {} : B(e.metadata, g.metadata);
    g.isAborted = e.isAborted;
    c = md(Fp(g), this.h, 1);
    return c;
  }
  dB.F = "internal.copyPreHit";
  function eB(a, b) {
    var c = null,
      d = UA();
    return md(c, this.h, d);
  }
  eB.P = "createArgumentsQueue";
  function fB(a) {
    var b;
    return md(b, this.h, 1);
  }
  fB.F = "internal.createGaCommandQueue";
  function gB(a) {
    var b;
    return md(b, this.h, UA());
  }
  gB.P = "createQueue";
  function hB(a, b) {
    var c = null;
    L(J(this), ["pattern:!string", "flags:?string"], arguments);
    try {
      var d = (b || "").split("").filter(function (e) {
        return 0 <= "ig".indexOf(e);
      }).join("");
      c = new jd(new RegExp(a, d));
    } catch (e) {}
    return c;
  }
  hB.F = "internal.createRegex";
  function iB(a) {
    if (!a) return {};
    var b = a.zl;
    return dv(b.type, b.index, b.name);
  }
  function jB(a) {
    return a ? {
      originatingEntity: iB(a)
    } : {};
  }
  ;
  function kB(a) {}
  kB.F = "internal.declareConsentState";
  function lB(a) {
    var b = "";
    return b;
  }
  lB.F = "internal.decodeUrlHtmlEntities";
  function mB(a, b, c) {
    var d;
    return d;
  }
  mB.F = "internal.decorateUrlWithGaCookies";
  function nB(a) {
    var b;
    M(this, "detect_user_provided_data", "auto");
    var c = nd(a) || {},
      d = Ir({
        ld: !!c.includeSelector,
        md: !!c.includeVisibility,
        ye: c.excludeElementSelectors,
        lb: c.fieldFilters,
        Oh: !!c.selectMultipleElements
      });
    b = new sb();
    var e = new rb();
    b.set("elements", e);
    for (var f = d.elements, g = 0; g < f.length; g++) e.push(oB(f[g]));
    void 0 !== d.Hh && b.set("preferredEmailElement", oB(d.Hh));
    b.set("status", d.status);
    return b;
  }
  var oB = function (a) {
    var b = new sb();
    b.set("userData", a.Z);
    b.set("tagName", a.tagName);
    void 0 !== a.querySelector && b.set("querySelector", a.querySelector);
    void 0 !== a.isVisible && b.set("isVisible", a.isVisible);
    if (S(40)) {} else switch (a.type) {
      case "1":
        b.set("type", "email");
    }
    return b;
  };
  nB.F = "internal.detectUserProvidedData";
  function rB(a, b) {
    return b;
  }
  rB.F = "internal.enableAutoEventOnClick";
  function wB(a, b) {
    return b;
  }
  wB.F = "internal.enableAutoEventOnElementVisibility";
  function xB() {}
  xB.F = "internal.enableAutoEventOnError";
  var yB = {},
    zB = [],
    AB = {},
    BB = 0,
    CB = 0;
  var EB = function () {
      l(AB, function (a, b) {
        var c = yB[a];
        c && l(b, function (d, e) {
          DB(e, c);
        });
      });
    },
    HB = function (a, b) {
      var c = "" + b;
      if (yB[c]) yB[c].push(a);else {
        var d = [a];
        yB[c] = d;
        var e = AB[c];
        e || (e = {}, AB[c] = e);
        zB.push(function (f) {
          var g = f.target;
          if (g) {
            var k = Ly(g);
            if (k) {
              var m = FB(k, "gtmFormInteractId", function () {
                  return BB++;
                }),
                n = FB(g, "gtmFormInteractFieldId", function () {
                  return CB++;
                });
              if (null !== m && null !== n) {
                var p = e[m];
                p ? (p.Ia && (z.clearTimeout(p.Ia), p.qa.getAttribute("data-gtm-form-interact-field-id") !== n && DB(p, d)), p.qa = g, GB(p, d, b)) : (e[m] = {
                  form: k,
                  qa: g,
                  bc: 0,
                  Ia: null
                }, GB(e[m], d, b));
              }
            }
          }
        });
      }
    },
    DB = function (a, b) {
      var c = a.form,
        d = a.qa,
        e = By(c, "gtm.formInteract", b),
        f = c.action;
      f && f.tagName && (f = c.cloneNode(!1).action);
      e["gtm.elementUrl"] = f;
      e["gtm.interactedFormName"] = null != c.getAttribute("name") ? c.getAttribute("name") : void 0;
      e["gtm.interactedFormLength"] = c.length;
      e["gtm.interactedFormField"] = d;
      e["gtm.interactedFormFieldId"] = d.id;
      e["gtm.interactedFormFieldName"] = null != d.getAttribute("name") ? d.getAttribute("name") : void 0;
      e["gtm.interactedFormFieldPosition"] = My(c, d, "gtmFormInteractFieldId");
      e["gtm.interactedFormFieldType"] = null != d.getAttribute("type") ? d.getAttribute("type") : void 0;
      e["gtm.interactSequenceNumber"] = a.bc;
      Mx(e);
      a.bc++;
      a.Ia = null;
    },
    GB = function (a, b, c) {
      c ? a.Ia = z.setTimeout(function () {
        DB(a, b);
      }, c) : DB(a, b);
    },
    FB = function (a, b, c) {
      var d;
      try {
        if (d = a.dataset[b]) return d;
        d = String(c());
        a.dataset[b] = d;
      } catch (e) {
        d = null;
      }
      return d;
    };
  function IB(a, b) {
    var c = this;
    L(J(this), ["options:?PixieMap", "triggerId:?*"], arguments);
    Yz([function () {
      return M(c, "detect_form_interaction_events");
    }]);
    b = Hy(b);
    var d = a && Number(a.get("interval"));
    0 < d && isFinite(d) || (d = 0);
    if (Fy("fil", "init", !1)) {
      var e = Fy("fil", "reg");
      if (e) e(b, d);else throw Error("Failed to register trigger: " + b);
    } else Oc(E, "change", function (f) {
      for (var g = 0; g < zB.length; g++) zB[g](f);
    }), Oc(z, "pagehide", function () {
      EB();
    }), HB(b, d), Dy("fil", "reg", HB), Dy("fil", "init", !0);
    return b;
  }
  IB.F = "internal.enableAutoEventOnFormInteraction";
  var JB = function (a, b, c, d, e) {
      var f = Fy("fsl", c ? "nv.mwt" : "mwt", 0),
        g;
      g = c ? Fy("fsl", "nv.ids", []) : Fy("fsl", "ids", []);
      if (!g.length) return !0;
      var k = By(a, "gtm.formSubmit", g),
        m = a.action;
      m && m.tagName && (m = a.cloneNode(!1).action);
      O(121);
      if ("https://www.facebook.com/tr/" === m) return O(122), !0;
      k["gtm.elementUrl"] = m;
      k["gtm.formCanceled"] = c;
      null != a.getAttribute("name") && (k["gtm.interactedFormName"] = a.getAttribute("name"));
      e && (k["gtm.formSubmitElement"] = e, k["gtm.formSubmitElementText"] = e.value);
      if (d && f) {
        if (!Nx(k, Ox(b, f), f)) return !1;
      } else Nx(k, function () {}, f || 2E3);
      return !0;
    },
    KB = function () {
      var a = [],
        b = function (c) {
          return Ja(a, function (d) {
            return d.form === c;
          });
        };
      return {
        store: function (c, d) {
          var e = b(c);
          e ? e.button = d : a.push({
            form: c,
            button: d
          });
        },
        get: function (c) {
          var d = b(c);
          return d ? d.button : null;
        }
      };
    },
    LB = function (a) {
      var b = a.target;
      return b && "_self" !== b && "_parent" !== b && "_top" !== b ? !1 : !0;
    },
    MB = function () {
      var a = KB(),
        b = HTMLFormElement.prototype.submit;
      Oc(E, "click", function (c) {
        var d = c.target;
        if (d && (d = Tc(d, ["button", "input"], 100)) && ("submit" == d.type || "image" == d.type) && d.name && Qc(d, "value")) {
          var e = Ly(d);
          e && a.store(e, d);
        }
      }, !1);
      Oc(E, "submit", function (c) {
        var d = c.target;
        if (!d) return c.returnValue;
        var e = c.defaultPrevented || !1 === c.returnValue,
          f = LB(d) && !e,
          g = a.get(d),
          k = !0;
        if (JB(d, function () {
          if (k) {
            var m,
              n = {};
            g && (m = E.createElement("input"), m.type = "hidden", m.name = g.name, m.value = g.value, d.appendChild(m), g.hasAttribute("formaction") && (n.action = d.getAttribute("action"), Ac(d, pc(g.getAttribute("formaction")))), g.hasAttribute("formenctype") && (n.enctype = d.getAttribute("enctype"), d.setAttribute("enctype", g.getAttribute("formenctype"))), g.hasAttribute("formmethod") && (n.method = d.getAttribute("method"), d.setAttribute("method", g.getAttribute("formmethod"))), g.hasAttribute("formvalidate") && (n.validate = d.getAttribute("validate"), d.setAttribute("validate", g.getAttribute("formvalidate"))), g.hasAttribute("formtarget") && (n.target = d.getAttribute("target"), d.setAttribute("target", g.getAttribute("formtarget"))));
            b.call(d);
            m && (d.removeChild(m), n.hasOwnProperty("action") && Ac(d, n.action), n.hasOwnProperty("enctype") && d.setAttribute("enctype", n.enctype), n.hasOwnProperty("method") && d.setAttribute("method", n.method), n.hasOwnProperty("validate") && d.setAttribute("validate", n.validate), n.hasOwnProperty("target") && d.setAttribute("target", n.target));
          }
        }, e, f, g)) k = !1;else return e || (c.preventDefault && c.preventDefault(), c.returnValue = !1), !1;
        return c.returnValue;
      }, !1);
      HTMLFormElement.prototype.submit = function () {
        var c = this,
          d = !0;
        JB(c, function () {
          d && b.call(c);
        }, !1, LB(c)) && (b.call(c), d = !1);
      };
    };
  function NB(a, b) {
    var c = this;
    L(J(this), ["options:?PixieMap", "triggerId:?*"], arguments);
    var d = a && a.get("waitForTags");
    Yz([function () {
      return M(c, "detect_form_submit_events", {
        waitForTags: !!d
      });
    }]);
    var e = a && a.get("checkValidation");
    b = Hy(b);
    if (d) {
      var f = Number(a.get("waitForTagsTimeout"));
      0 < f && isFinite(f) || (f = 2E3);
      var g = function (m) {
        return Math.max(f, m);
      };
      Ey("fsl", "mwt", g, 0);
      e || Ey("fsl", "nv.mwt", g, 0);
    }
    var k = function (m) {
      m.push(b);
      return m;
    };
    Ey("fsl", "ids", k, []);
    e || Ey("fsl", "nv.ids", k, []);
    Fy("fsl", "init", !1) || (MB(), Dy("fsl", "init", !0));
    return b;
  }
  NB.F = "internal.enableAutoEventOnFormSubmit";
  function SB() {
    var a = this;
  }
  SB.F = "internal.enableAutoEventOnGaSend";
  var TB = {},
    UB = [];
  var WB = function (a, b) {
      var c = "" + b;
      if (TB[c]) TB[c].push(a);else {
        var d = [a];
        TB[c] = d;
        var e = VB("gtm.historyChange-v2"),
          f = -1;
        UB.push(function (g) {
          0 <= f && z.clearTimeout(f);
          b ? f = z.setTimeout(function () {
            e(g, d);
            f = -1;
          }, b) : e(g, d);
        });
      }
    },
    VB = function (a) {
      var b = z.location.href,
        c = {
          source: null,
          state: z.history.state || null,
          url: Gn(Hn(b)),
          W: Fn(Hn(b), "fragment")
        };
      return function (d, e) {
        var f = c,
          g = {};
        g[f.source] = !0;
        g[d.source] = !0;
        if (!g.popstate || !g.hashchange || f.W != d.W) {
          var k = {
            event: a,
            "gtm.historyChangeSource": d.source,
            "gtm.oldUrlFragment": c.W,
            "gtm.newUrlFragment": d.W,
            "gtm.oldHistoryState": c.state,
            "gtm.newHistoryState": d.state,
            "gtm.oldUrl": c.url,
            "gtm.newUrl": d.url
          };
          e && (k["gtm.triggers"] = e.join(","));
          c = d;
          Mx(k);
        }
      };
    },
    XB = function (a, b) {
      var c = z.history,
        d = c[a];
      if (Ea(d)) try {
        c[a] = function (e, f, g) {
          d.apply(c, [].slice.call(arguments, 0));
          var k = z.location.href;
          b({
            source: a,
            state: e,
            url: Gn(Hn(k)),
            W: Fn(Hn(k), "fragment")
          });
        };
      } catch (e) {}
    },
    ZB = function (a) {
      z.addEventListener("popstate", function (b) {
        var c = YB(b);
        a({
          source: "popstate",
          state: b.state,
          url: Gn(Hn(c)),
          W: Fn(Hn(c), "fragment")
        });
      });
    },
    $B = function (a) {
      z.addEventListener("hashchange", function (b) {
        var c = YB(b);
        a({
          source: "hashchange",
          state: null,
          url: Gn(Hn(c)),
          W: Fn(Hn(c), "fragment")
        });
      });
    },
    YB = function (a) {
      return a.target && a.target.location && a.target.location.href ? a.target.location.href : z.location.href;
    };
  function aC(a, b) {
    var c = this;
    L(J(this), ["options:?PixieMap", "triggerId:?*"], arguments);
    S(96) ? Yz([function () {
      return M(c, "detect_history_change_events");
    }]) : Yz([function () {
      return M(c, "process_dom_events", "window", "popstate");
    }, function () {
      return M(c, "process_dom_events", "window", "pushstate");
    }]);
    var d = !S(93) || a && a.get("useV2EventName") ? "ehl" : "hl",
      e = Number(a && a.get("interval"));
    0 < e && isFinite(e) || (e = 0);
    if (!Fy(d, "init", !1)) {
      var f;
      "ehl" === d ? (f = function (k) {
        for (var m = 0; m < UB.length; m++) UB[m](k);
      }, b = Hy(b), WB(b, e), Dy(d, "reg", WB)) : f = VB("gtm.historyChange");
      $B(f);
      ZB(f);
      XB("pushState", f);
      XB("replaceState", f);
      Dy(d, "init", !0);
    } else if ("ehl" === d) {
      var g = Fy(d, "reg");
      g && (b = Hy(b), g(b, e));
    }
    "hl" === d && (b = void 0);
    return b;
  }
  aC.F = "internal.enableAutoEventOnHistoryChange";
  var bC = ["http://", "https://", "javascript:", "file://"];
  var cC = function (a, b) {
      if (2 === a.which || a.ctrlKey || a.shiftKey || a.altKey || a.metaKey) return !1;
      var c = Vc(b, "href");
      if (-1 !== c.indexOf(":") && !bC.some(function (k) {
        return 0 === c.indexOf(k);
      })) return !1;
      var d = c.indexOf("#"),
        e = Vc(b, "target");
      if (e && "_self" !== e && "_parent" !== e && "_top" !== e || 0 === d) return !1;
      if (0 < d) {
        var f = Gn(Hn(c)),
          g = Gn(Hn(z.location.href));
        return f !== g;
      }
      return !0;
    },
    dC = function (a, b) {
      for (var c = Fn(Hn((b.attributes && b.attributes.formaction ? b.formAction : "") || b.action || Vc(b, "href") || b.src || b.code || b.codebase || ""), "host"), d = 0; d < a.length; d++) try {
        if (new RegExp(a[d]).test(c)) return !1;
      } catch (e) {}
      return !0;
    },
    eC = function () {
      var a = S(83) ? "lcl" : "aelc",
        b = 0,
        c = function (d) {
          var e = d.target;
          if (e && 3 !== d.which && !(d.uh || d.timeStamp && d.timeStamp === b)) {
            b = d.timeStamp;
            e = Tc(e, ["a", "area"], 100);
            if (!e) return d.returnValue;
            var f = d.defaultPrevented || !1 === d.returnValue,
              g = Fy(a, f ? "nv.mwt" : "mwt", 0),
              k;
            k = f ? Fy(a, "nv.ids", []) : Fy(a, "ids", []);
            for (var m = [], n = 0; n < k.length; n++) {
              var p = k[n],
                q = Fy(a, "aff.map", {})[p];
              q && !dC(q, e) || m.push(p);
            }
            if (m.length) {
              var r = cC(d, e),
                t = By(e, "gtm.linkClick", m);
              t["gtm.elementText"] = Rc(e);
              t["gtm.willOpenInNewWindow"] = !r;
              if (r && !f && g && e.href) {
                var u = !!Ja(String(Vc(e, "rel") || "").split(" "), function (y) {
                    return "noreferrer" === y.toLowerCase();
                  }),
                  v = z[(Vc(e, "target") || "_self").substring(1)],
                  w = !0,
                  x = Ox(function () {
                    var y;
                    if (y = w && v) {
                      var A;
                      a: if (u) {
                        var C;
                        try {
                          C = new MouseEvent(d.type, {
                            bubbles: !0
                          });
                        } catch (D) {
                          if (!E.createEvent) {
                            A = !1;
                            break a;
                          }
                          C = E.createEvent("MouseEvents");
                          C.initEvent(d.type, !0, !0);
                        }
                        C.uh = !0;
                        d.target.dispatchEvent(C);
                        A = !0;
                      } else A = !1;
                      y = !A;
                    }
                    y && (v.location.href = Vc(e, "href"));
                  }, g);
                if (Nx(t, x, g)) w = !1;else return d.preventDefault && d.preventDefault(), d.returnValue = !1;
              } else Nx(t, function () {}, g || 2E3);
              return !0;
            }
          }
        };
      Oc(E, "click", c, !1);
      Oc(E, "auxclick", c, !1);
    };
  function fC(a, b) {
    var c = this;
    var d = S(83) ? "lcl" : "aelc";
    L(J(this), ["dustOptions:?PixieMap", "triggerId:?*"], arguments);
    var e = nd(a);
    Yz([function () {
      return M(c, "detect_link_click_events", e);
    }]);
    var f = e && !!e.waitForTags,
      g = e && !!e.checkValidation,
      k = e ? e.affiliateDomains : void 0;
    b = Hy(b);
    if (f) {
      var m = Number(e.waitForTagsTimeout);
      0 < m && isFinite(m) || (m = 2E3);
      var n = function (q) {
        return Math.max(m, q);
      };
      Ey(d, "mwt", n, 0);
      g || Ey(d, "nv.mwt", n, 0);
    }
    var p = function (q) {
      q.push(b);
      return q;
    };
    Ey(d, "ids", p, []);
    g || Ey(d, "nv.ids", p, []);
    k && Ey(d, "aff.map", function (q) {
      q[b] = k;
      return q;
    }, {});
    Fy(d, "init", !1) || (eC(), Dy(d, "init", !0));
    return b;
  }
  fC.F = "internal.enableAutoEventOnLinkClick";
  var gC, hC;
  var iC = function (a) {
      return Fy("sdl", a, {});
    },
    jC = function (a, b, c) {
      b && (Array.isArray(a) || (a = [a]), Ey("sdl", c, function (d) {
        for (var e = 0; e < a.length; e++) {
          var f = String(a[e]);
          d.hasOwnProperty(f) || (d[f] = []);
          d[f].push(b);
        }
        return d;
      }, {}));
    },
    mC = function () {
      var a = 250,
        b = !1;
      E.scrollingElement && E.documentElement && z.addEventListener && (a = 50, b = !0);
      var c = 0,
        d = !1,
        e = function () {
          d ? c = z.setTimeout(e, a) : (c = 0, kC(), Fy("sdl", "init", !1) && !lC() && (Pc(z, "scroll", f), Pc(z, "resize", f), Dy("sdl", "init", !1)));
          d = !1;
        },
        f = function () {
          b && gC();
          c ? d = !0 : (c = z.setTimeout(e, a), Dy("sdl", "pending", !0));
        };
      return f;
    },
    kC = function () {
      var a = gC(),
        b = a.jh,
        c = a.kh,
        d = b / hC.scrollWidth * 100,
        e = c / hC.scrollHeight * 100;
      nC(b, "horiz.pix", "PIXELS", "horizontal");
      nC(d, "horiz.pct", "PERCENT", "horizontal");
      nC(c, "vert.pix", "PIXELS", "vertical");
      nC(e, "vert.pct", "PERCENT", "vertical");
      Dy("sdl", "pending", !1);
    },
    nC = function (a, b, c, d) {
      var e = iC(b),
        f = {},
        g;
      for (g in e) if (f = {
        sd: f.sd
      }, f.sd = g, e.hasOwnProperty(f.sd)) {
        var k = Number(f.sd);
        if (!(a < k)) {
          var m = {};
          Mx((m.event = "gtm.scrollDepth", m["gtm.scrollThreshold"] = k, m["gtm.scrollUnits"] = c.toLowerCase(), m["gtm.scrollDirection"] = d, m["gtm.triggers"] = e[f.sd].join(","), m));
          Ey("sdl", b, function (n) {
            return function (p) {
              delete p[n.sd];
              return p;
            };
          }(f), {});
        }
      }
    },
    pC = function () {
      Ey("sdl", "scr", function (a) {
        a || (a = E.scrollingElement || E.body && E.body.parentNode);
        return hC = a;
      }, !1);
      Ey("sdl", "depth", function (a) {
        a || (a = oC());
        return gC = a;
      }, !1);
    },
    oC = function () {
      var a = 0,
        b = 0;
      return function () {
        var c = Rq(),
          d = c.height;
        a = Math.max(hC.scrollLeft + c.width, a);
        b = Math.max(hC.scrollTop + d, b);
        return {
          jh: a,
          kh: b
        };
      };
    },
    lC = function () {
      return !!(Object.keys(iC("horiz.pix")).length || Object.keys(iC("horiz.pct")).length || Object.keys(iC("vert.pix")).length || Object.keys(iC("vert.pct")).length);
    };
  function qC(a, b) {
    var c = this;
    L(J(this), ["options:!PixieMap", "triggerId:?*"], arguments);
    S(99) ? Yz([function () {
      return M(c, "detect_scroll_events");
    }]) : Yz([function () {
      return M(c, "process_dom_events", "window", "resize");
    }, function () {
      return M(c, "process_dom_events", "window", "scroll");
    }]);
    pC();
    if (!hC) return;
    b = Hy(b);
    var d = nd(a);
    switch (d.horizontalThresholdUnits) {
      case "PIXELS":
        jC(d.horizontalThresholds, b, "horiz.pix");
        break;
      case "PERCENT":
        jC(d.horizontalThresholds, b, "horiz.pct");
    }
    switch (d.verticalThresholdUnits) {
      case "PIXELS":
        jC(d.verticalThresholds, b, "vert.pix");
        break;
      case "PERCENT":
        jC(d.verticalThresholds, b, "vert.pct");
    }
    Fy("sdl", "init", !1) ? Fy("sdl", "pending", !1) || H(function () {
      return kC();
    }) : (Dy("sdl", "init", !0), Dy("sdl", "pending", !0), H(function () {
      kC();
      if (lC()) {
        var e = mC();
        Oc(z, "scroll", e);
        Oc(z, "resize", e);
      } else Dy("sdl", "init", !1);
    }));
    return b;
  }
  qC.F = "internal.enableAutoEventOnScroll";
  function rC(a) {
    return function () {
      if (a.Cc && a.Ec >= a.Cc) a.Ac && z.clearInterval(a.Ac);else {
        a.Ec++;
        var b = Ua();
        Mx({
          event: a.eventName,
          "gtm.timerId": a.Ac,
          "gtm.timerEventNumber": a.Ec,
          "gtm.timerInterval": a.interval,
          "gtm.timerLimit": a.Cc,
          "gtm.timerStartTime": a.Ue,
          "gtm.timerCurrentTime": b,
          "gtm.timerElapsedTime": b - a.Ue,
          "gtm.triggers": a.Sh
        });
      }
    };
  }
  function sC(a, b) {
    return b;
  }
  sC.F = "internal.enableAutoEventOnTimer";
  var yc = ea(["data-gtm-yt-inspected-"]),
    tC = ["www.youtube.com", "www.youtube-nocookie.com"],
    uC,
    vC = !1;
  var wC = function (a, b, c) {
      var d = a.map(function (g) {
        return {
          Da: g,
          Te: g,
          Re: void 0
        };
      });
      if (!b.length) return d;
      var e = b.map(function (g) {
        return {
          Da: g * c,
          Te: void 0,
          Re: g
        };
      });
      if (!d.length) return e;
      var f = d.concat(e);
      f.sort(function (g, k) {
        return g.Da - k.Da;
      });
      return f;
    },
    xC = function (a) {
      a = void 0 === a ? [] : a;
      for (var b = [], c = 0; c < a.length; c++) 0 > a[c] || b.push(a[c]);
      b.sort(function (d, e) {
        return d - e;
      });
      return b;
    },
    yC = function (a) {
      a = void 0 === a ? [] : a;
      for (var b = [], c = 0; c < a.length; c++) 100 < a[c] || 0 > a[c] || (b[c] = a[c] / 100);
      b.sort(function (d, e) {
        return d - e;
      });
      return b;
    },
    zC = function (a, b) {
      var c, d;
      function e() {
        t = az(function () {
          return {
            url: w,
            title: x,
            lh: v,
            rj: a.getCurrentTime(),
            playbackRate: y
          };
        }, b.ob, a.getIframe());
        v = 0;
        x = w = "";
        y = 1;
        return f;
      }
      function f(F) {
        switch (F) {
          case 1:
            v = Math.round(a.getDuration());
            w = a.getVideoUrl();
            if (a.getVideoData) {
              var G = a.getVideoData();
              x = G ? G.title : "";
            }
            y = a.getPlaybackRate();
            b.gh ? Mx(t.createEvent("start")) : t.fd();
            u = wC(b.Jh, b.Ih, a.getDuration());
            return g(F);
          default:
            return f;
        }
      }
      function g() {
        A = a.getCurrentTime();
        C = Ta().getTime();
        t.Nj();
        r();
        return k;
      }
      function k(F) {
        var G;
        switch (F) {
          case 0:
            return n(F);
          case 2:
            G = "pause";
          case 3:
            var K = a.getCurrentTime() - A;
            G = 1 < Math.abs((Ta().getTime() - C) / 1E3 * y - K) ? "seek" : G || "buffering";
            a.getCurrentTime() && (b.fh ? Mx(t.createEvent(G)) : t.fd());
            q();
            return m;
          case -1:
            return e(F);
          default:
            return k;
        }
      }
      function m(F) {
        switch (F) {
          case 0:
            return n(F);
          case 1:
            return g(F);
          case -1:
            return e(F);
          default:
            return m;
        }
      }
      function n() {
        for (; d;) {
          var F = c;
          z.clearTimeout(d);
          F();
        }
        b.eh && Mx(t.createEvent("complete", 1));
        return e(-1);
      }
      function p() {}
      function q() {
        d && (z.clearTimeout(d), d = 0, c = p);
      }
      function r() {
        if (u.length && 0 !== y) {
          var F = -1,
            G;
          do {
            G = u[0];
            if (G.Da > a.getDuration()) return;
            F = (G.Da - a.getCurrentTime()) / y;
            if (0 > F && (u.shift(), 0 === u.length)) return;
          } while (0 > F);
          c = function () {
            d = 0;
            c = p;
            0 < u.length && u[0].Da === G.Da && (u.shift(), Mx(t.createEvent("progress", G.Re, G.Te)));
            r();
          };
          d = z.setTimeout(c, 1E3 * F);
        }
      }
      var t,
        u = [],
        v,
        w,
        x,
        y,
        A,
        C,
        D = e(-1);
      d = 0;
      c = p;
      return {
        onStateChange: function (F) {
          D = D(F);
        },
        onPlaybackRateChange: function (F) {
          A = a.getCurrentTime();
          C = Ta().getTime();
          t.fd();
          y = F;
          q();
          r();
        }
      };
    },
    BC = function (a) {
      H(function () {
        function b() {
          for (var d = c.getElementsByTagName("iframe"), e = d.length, f = 0; f < e; f++) AC(d[f], a);
        }
        var c = E;
        b();
        Py(b);
      });
    },
    AC = function (a, b) {
      if (!a.getAttribute("data-gtm-yt-inspected-" + b.ob) && (xc(a, "data-gtm-yt-inspected-" + b.ob), CC(a, b.Be))) {
        a.id || (a.id = DC());
        var c = z.YT,
          d = c.get(a.id);
        d || (d = new c.Player(a.id));
        var e = zC(d, b),
          f = {},
          g;
        for (g in e) f = {
          Me: f.Me
        }, f.Me = g, e.hasOwnProperty(f.Me) && d.addEventListener(f.Me, function (k) {
          return function (m) {
            return e[k.Me](m.data);
          };
        }(f));
      }
    },
    CC = function (a, b) {
      var c = a.getAttribute("src");
      if (EC(c, "embed/")) {
        if (0 < c.indexOf("enablejsapi=1")) return !0;
        if (b) {
          var d;
          var e = -1 !== c.indexOf("?") ? "&" : "?";
          -1 < c.indexOf("origin=") ? d = c + e + "enablejsapi=1" : (uC || (uC = E.location.protocol + "//" + E.location.hostname, E.location.port && (uC += ":" + E.location.port)), d = c + e + "enablejsapi=1&origin=" + encodeURIComponent(uC));
          var f;
          f = Kb(d);
          a.src = Ib(f).toString();
          return !0;
        }
      }
      return !1;
    },
    EC = function (a, b) {
      if (!a) return !1;
      for (var c = 0; c < tC.length; c++) if (0 <= a.indexOf("//" + tC[c] + "/" + b)) return !0;
      return !1;
    },
    DC = function () {
      var a = Math.round(1E9 * Math.random()) + "";
      return E.getElementById(a) ? DC() : a;
    };
  function FC(a, b) {
    var c = this;
    L(J(this), ["dustOptions:!PixieMap", "triggerId:?*"], arguments);
    Yz([function () {
      return M(c, "detect_youtube_activity_events", {
        fixMissingApi: !!a.get("fixMissingApi")
      });
    }]);
    b = Hy(b);
    var d = !!a.get("captureStart"),
      e = !!a.get("captureComplete"),
      f = !!a.get("capturePause"),
      g = yC(nd(a.get("progressThresholdsPercent"))),
      k = xC(nd(a.get("progressThresholdsTimeInSeconds"))),
      m = !!a.get("fixMissingApi");
    if (!(d || e || f || g.length || k.length)) return;
    var n = {
        gh: d,
        eh: e,
        fh: f,
        Ih: g,
        Jh: k,
        Be: m,
        ob: b
      },
      p = z.YT,
      q = function () {
        BC(n);
      };
    if (p) return p.ready && p.ready(q), b;
    var r = z.onYouTubeIframeAPIReady;
    z.onYouTubeIframeAPIReady = function () {
      r && r();
      q();
    };
    H(function () {
      for (var t = E.getElementsByTagName("script"), u = t.length, v = 0; v < u; v++) {
        var w = t[v].getAttribute("src");
        if (EC(w, "iframe_api") || EC(w, "player_api")) return b;
      }
      for (var x = E.getElementsByTagName("iframe"), y = x.length, A = 0; A < y; A++) if (!vC && CC(x[A], n.Be)) return Kc("https://www.youtube.com/iframe_api"), vC = !0, b;
    });
    return b;
  }
  FC.F = "internal.enableAutoEventOnYouTubeActivity";
  var GC;
  function HC(a) {
    var b = !1;
    return b;
  }
  HC.F = "internal.evaluateMatchingRules";
  var lD = function () {
      var a = !0;
      im(7) && im(9) && im(10) || (a = !1);
      return a;
    },
    mD = function () {
      var a = !0;
      im(3) && im(4) || (a = !1);
      return a;
    };
  function hE(a, b, c, d) {}
  hE.F = "internal.executeEventProcessor";
  function iE(a) {
    var b = void 0;
    return md(b, this.h, 1);
  }
  iE.F = "internal.executeJavascriptString";
  var jE = function (a) {
    var b;
    return b;
  };
  function kE() {
    var a = new sb();
    M(this, "read_container_data"), a.set("containerId", 'G-DW2S6G95VF'), a.set("version", '1'), a.set("environmentName", ''), a.set("debugMode", $f), a.set("previewMode", bg), a.set("environmentMode", ag), a.set("firstPartyServing", wi || yi), a.set("containerUrl", Ec), a.Cb();
    return a;
  }
  kE.P = "getContainerVersion";
  function lE(a, b) {
    b = void 0 === b ? !0 : b;
    var c;
    return c;
  }
  lE.P = "getCookieValues";
  function mE() {
    return mj();
  }
  mE.F = "internal.getCountryCode";
  function nE() {
    var a = [];
    a = rk();
    return md(a);
  }
  nE.F = "internal.getDestinationIds";
  function oE(a, b) {
    var c = "";
    return c;
  }
  oE.F = "internal.getElementAttribute";
  function pE(a) {
    var b = null;
    return b;
  }
  pE.F = "internal.getElementById";
  function qE(a) {
    var b = "";
    return b;
  }
  qE.F = "internal.getElementInnerText";
  function rE(a, b) {
    var c = null;
    return c;
  }
  rE.F = "internal.getElementProperty";
  function sE(a) {
    var b;
    return b;
  }
  sE.F = "internal.getElementValue";
  function tE(a) {
    var b = 0;
    return b;
  }
  tE.F = "internal.getElementVisibilityRatio";
  function uE(a) {
    var b = null;
    return b;
  }
  uE.F = "internal.getElementsByCssSelector";
  function vE(a) {
    var b = void 0;
    return b;
  }
  vE.F = "internal.getEventData";
  var wE = {};
  wE.enableAWFledge = S(6);
  wE.enableAdsConversionValidation = S(29);
  wE.enableAdsHistoryChangeEvents = S(14);
  wE.enableAutoPiiOnPhoneAndAddress = S(40);
  wE.enableCachedEcommerceData = S(108);
  wE.enableCcdPreAutoPiiDetection = S(17);
  wE.enableCloudRecommentationsErrorLogging = S(87);
  wE.enableCloudRecommentationsSchemaIngestion = S(86);
  wE.enableCloudRetailInjectPurchaseMetadata = S(85);
  wE.enableCloudRetailLogging = S(84);
  wE.enableCloudRetailPageCategories = S(25);
  wE.enableConsentDisclosureActivity = S(45);
  wE.enableDCFledge = S(11);
  wE.enableDecodeUri = S(67);
  wE.enableDeferAllEnhancedMeasurement = S(47);
  wE.enableDirectTagLoadingInGoogleTag = S(78);
  wE.enableDmaConsentActivities = S(94);
  wE.enableEuidAutoMode = S(15);
  wE.enableFormSkipValidation = S(41);
  wE.enableLoadGoogleTagOptionsObject = S(82);
  wE.enableUrlDecodeEventUsage = S(59);
  wE.enableV1HistoryEventInApi = S(93);
  wE.loadContainerForGtmEventTags = S(44);
  wE.useEnableAutoEventOnFormApis = S(30);
  wE.autoPiiEligible = qj();
  function xE() {
    return md(wE);
  }
  xE.F = "internal.getFlags";
  function yE() {
    return new jd(uy);
  }
  yE.F = "internal.getHtmlId";
  function zE(a, b) {
    var c;
    L(J(this), ["targetId:!string", "name:!string"], arguments);
    var d = Bp(a) || {};
    c = md(d[b], this.h);
    return c;
  }
  zE.F = "internal.getProductSettingsParameter";
  function AE(a, b) {
    var c;
    L(J(this), ["queryKey:!string", "retrieveAll:?boolean"], arguments);
    M(this, "get_url", "query", a);
    var d = Fn(Hn(z.location.href), "query"),
      e = Cn(d, a, b);
    c = md(e, this.h);
    return c;
  }
  AE.P = "getQueryParameters";
  function BE(a, b) {
    var c;
    return c;
  }
  BE.P = "getReferrerQueryParameters";
  function CE(a) {
    var b = "";
    return b;
  }
  CE.P = "getReferrerUrl";
  function DE() {
    return nj();
  }
  DE.F = "internal.getRegionCode";
  function EE(a, b) {
    var c;
    L(J(this), ["targetId:!string", "name:!string"], arguments);
    var d = iq(a);
    c = md(d[b], this.h);
    return c;
  }
  EE.F = "internal.getRemoteConfigParameter";
  function FE(a) {
    var b = "";
    L(J(this), ["component:?string"], arguments), M(this, "get_url", a), b = Fn(Hn(z.location.href), a);
    return b;
  }
  FE.P = "getUrl";
  function GE() {
    M(this, "get_user_agent");
    return Dc.userAgent;
  }
  GE.P = "getUserAgent";
  var HE = function (a) {
      return Ep(a, Q.g.Kb, W(a.s, Q.g.Kb)) || Ep(a, "google_ono", !1);
    },
    IE = function (a) {
      if (a.metadata.is_merchant_center || !Op(a.s)) return !1;
      if (!W(a.s, Q.g.Ud)) {
        var b = W(a.s, Q.g.Nd);
        return !0 === b || "true" === b;
      }
      return !0;
    },
    JE = function (a) {
      var b = a.metadata.user_data;
      if (nb(b)) return b;
    },
    KE = function (a, b) {
      var c = Ep(a, Q.g.Ld, a.s.C[Q.g.Ld]);
      if (c && void 0 !== c[b || a.eventName]) return c[b || a.eventName];
    },
    LE = function (a, b, c) {
      a.h[Q.g.pe] || (a.h[Q.g.pe] = {});
      a.h[Q.g.pe][b] = c;
    };
  var ME = !1,
    NE = function (a) {
      var b = a.eventName === Q.g.mc && Mj() && IE(a),
        c = a.metadata.is_sgtm_service_worker,
        d = a.metadata.batch_on_navigation,
        e = a.metadata.is_conversion,
        f = a.metadata.is_session_start,
        g = a.metadata.create_dc_join,
        k = a.metadata.create_google_join,
        m = a.metadata.euid_mode_enabled && !!JE(a);
      return !(!Dc.sendBeacon || e || m || f || g || k || b || c || !d && ME);
    };
  var OE = function (a) {
      var b = 0,
        c = 0;
      return {
        start: function () {
          b = Ua();
        },
        stop: function () {
          c = this.get();
        },
        get: function () {
          var d = 0;
          a.wh() && (d = Ua() - b);
          return d + c;
        }
      };
    },
    PE = function () {
      this.h = void 0;
      this.C = 0;
      this.isActive = this.isVisible = this.D = !1;
      this.N = this.H = void 0;
    };
  aa = PE.prototype;
  aa.Jk = function (a) {
    var b = this;
    if (!this.h) {
      this.D = E.hasFocus();
      this.isVisible = !E.hidden;
      this.isActive = !0;
      var c = function (d, e, f) {
        Oc(d, e, function (g) {
          b.h.stop();
          f(g);
          b.wh() && b.h.start();
        });
      };
      c(z, "focus", function () {
        b.D = !0;
      });
      c(z, "blur", function () {
        b.D = !1;
      });
      c(z, "pageshow", function (d) {
        b.isActive = !0;
        d.persisted && O(56);
        b.N && b.N();
      });
      c(z, "pagehide", function () {
        b.isActive = !1;
        b.H && b.H();
      });
      c(E, "visibilitychange", function () {
        b.isVisible = !E.hidden;
      });
      IE(a) && -1 === (Dc.userAgent || "").indexOf("Firefox") && -1 === (Dc.userAgent || "").indexOf("FxiOS") && c(z, "beforeunload", function () {
        ME = !0;
      });
      this.Lh();
      this.C = 0;
    }
  };
  aa.Lh = function () {
    this.C += this.Lf();
    this.h = OE(this);
    this.wh() && this.h.start();
  };
  aa.fn = function (a) {
    var b = this.Lf();
    0 < b && (a.h[Q.g.Hd] = b);
  };
  aa.Sl = function (a) {
    a.h[Q.g.Hd] = void 0;
    this.Lh();
    this.C = 0;
  };
  aa.wh = function () {
    return this.D && this.isVisible && this.isActive;
  };
  aa.Jl = function () {
    return this.C + this.Lf();
  };
  aa.Lf = function () {
    return this.h && this.h.get() || 0;
  };
  aa.Nm = function (a) {
    this.H = a;
  };
  aa.Lj = function (a) {
    this.N = a;
  };
  var QE = function (a) {
    Ab("GA4_EVENT", a);
  };
  function RE() {
    return z.gaGlobal = z.gaGlobal || {};
  }
  var SE = function () {
      var a = RE();
      a.hid = a.hid || Ka();
      return a.hid;
    },
    TE = function (a, b) {
      var c = RE();
      if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b;
    };
  var UE = function (a, b, c) {
      var d = a.metadata.client_id_source;
      if (void 0 === d || c <= d) a.h[Q.g.tb] = b, a.metadata.client_id_source = c;
    },
    XE = function (a, b) {
      var c;
      var d = b.metadata.cookie_options,
        e = d.prefix + "_ga",
        f = Kn(d, void 0, void 0, Q.g.U);
      if (!1 === W(b.s, Q.g.qc) && VE(b) === a) c = !0;else {
        var g = Vm(a, WE[0], d.domain, d.path);
        c = 1 !== Nm(e, g, f);
      }
      return c;
    },
    VE = function (a) {
      var b = a.metadata.cookie_options,
        c = b.prefix + "_ga",
        d = Um(c, b.domain, b.path, WE, Q.g.U);
      if (!d) {
        var e = String(W(a.s, Q.g.oc, ""));
        e && e != c && (d = Um(e, b.domain, b.path, WE, Q.g.U));
      }
      return d;
    },
    WE = ["GA1"],
    YE = function (a, b) {
      var c = a.h[Q.g.tb];
      if (W(a.s, Q.g.xb) && W(a.s, Q.g.Lb) || b && c === b) return c;
      if (c) {
        c = "" + c;
        if (!XE(c, a)) return O(31), a.isAborted = !0, "";
        TE(c, ak(Q.g.U));
        return c;
      }
      O(32);
      a.isAborted = !0;
      return "";
    };
  var aF = function (a, b, c) {
      if (!b) return a;
      if (!a) return b;
      var d = ZE(a);
      if (!d) return b;
      var e,
        f = Oa(null != (e = W(c.s, Q.g.ad)) ? e : 30);
      if (!(Math.floor(c.metadata.event_start_timestamp_ms / 1E3) > d.Oe + 60 * f)) return a;
      var g = ZE(b);
      if (!g) return a;
      g.Gc = d.Gc + 1;
      var k;
      return null != (k = $E(g.sessionId, g.Gc, g.rd, g.Oe, g.Ah, g.Dc, g.xe)) ? k : b;
    },
    dF = function (a, b) {
      var c = b.metadata.cookie_options,
        d = bF(b, c),
        e = Vm(a, cF[0], c.domain, c.path),
        f = {
          Fb: Q.g.U,
          domain: c.domain,
          path: c.path,
          expires: c.Xb ? new Date(Ua() + 1E3 * c.Xb) : void 0,
          flags: c.flags
        };
      Nm(d, void 0, f);
      return 1 !== Nm(d, e, f);
    },
    eF = function (a) {
      var b = a.metadata.cookie_options,
        c = bF(a, b),
        d = Um(c, b.domain, b.path, cF, Q.g.U);
      if (!d) return d;
      var e = Em(c, void 0, void 0, Q.g.U);
      if (d && 1 < e.length) {
        O(114);
        for (var f = void 0, g = void 0, k = 0; k < e.length; k++) {
          var m = e[k].split(".");
          if (!(7 > m.length)) {
            var n = Number(m[5]);
            n && (!g || n > g) && (g = n, f = e[k]);
          }
        }
        f && f.substring(f.length - d.length, f.length) !== d && (O(115), d = f.split(".").slice(2).join("."));
      }
      return d;
    },
    $E = function (a, b, c, d, e, f, g) {
      if (a && b) {
        var k = [a, b, Oa(c), d, e];
        k.push(f ? "1" : "0");
        k.push(g || "0");
        return k.join(".");
      }
    },
    cF = ["GS1"],
    bF = function (a, b) {
      return b.prefix + "_ga_" + a.target.R[0];
    },
    ZE = function (a) {
      if (a) {
        var b = a.split(".");
        if (!(5 > b.length || 7 < b.length)) {
          7 > b.length && O(67);
          var c = Number(b[1]),
            d = Number(b[3]),
            e = Number(b[4] || 0);
          c || O(118);
          d || O(119);
          isNaN(e) && O(120);
          if (c && d && !isNaN(e)) return {
            sessionId: b[0],
            Gc: c,
            rd: !!Number(b[2]),
            Oe: d,
            Ah: e,
            Dc: "1" === b[5],
            xe: "0" !== b[6] ? b[6] : void 0
          };
        }
      }
    },
    fF = function (a) {
      return $E(a.h[Q.g.Ab], a.h[Q.g.Wd], a.h[Q.g.Vd], Math.floor(a.metadata.event_start_timestamp_ms / 1E3), a.metadata.join_timer_sec || 0, !!a.metadata[Q.g.ff], a.h[Q.g.Id]);
    };
  var gF = function (a) {
      var b = W(a.s, Q.g.La),
        c = a.s.C[Q.g.La];
      if (c === b) return c;
      var d = B(b);
      c && c[Q.g.X] && (d[Q.g.X] = (d[Q.g.X] || []).concat(c[Q.g.X]));
      return d;
    },
    hF = function (a, b) {
      var c = Zn(!0);
      return "1" !== c._up ? {} : {
        clientId: c[a],
        Xf: c[b]
      };
    },
    iF = function (a, b, c) {
      var d = Zn(!0),
        e = d[b];
      e && (UE(a, e, 2), XE(e, a));
      var f = d[c];
      f && dF(f, a);
      return {
        clientId: e,
        Xf: f
      };
    },
    jF = !1,
    kF = function (a) {
      var b = gF(a) || {},
        c = a.metadata.cookie_options,
        d = c.prefix + "_ga",
        e = bF(a, c),
        f = {};
      jo(b[Q.g.Wc], !!b[Q.g.X]) && (f = iF(a, d, e), f.clientId && f.Xf && (jF = !0));
      b[Q.g.X] && go(function () {
        var g = {},
          k = VE(a);
        k && (g[d] = k);
        var m = eF(a);
        m && (g[e] = m);
        var n = Em("FPLC", void 0, void 0, Q.g.U);
        n.length && (g._fplc = n[0]);
        return g;
      }, b[Q.g.X], b[Q.g.vc], !!b[Q.g.Mb]);
      return f;
    },
    mF = function (a) {
      if (!W(a.s, Q.g.Bb)) return {};
      var b = a.metadata.cookie_options,
        c = b.prefix + "_ga",
        d = bF(a, b);
      ho(function () {
        var e;
        if (ak("analytics_storage")) e = {};else {
          var f = {};
          e = (f._up = "1", f[c] = a.h[Q.g.tb], f[d] = fF(a), f);
        }
        return e;
      }, 1);
      return !ak("analytics_storage") && lF() ? hF(c, d) : {};
    },
    lF = function () {
      var a = En(z.location, "host"),
        b = En(Hn(E.referrer), "host");
      return a && b ? a === b || 0 <= a.indexOf("." + b) || 0 <= b.indexOf("." + a) ? !0 : !1 : !1;
    };
  var nF = function () {
    var a = Ua(),
      b = a + 864E5,
      c = 20,
      d = 5E3;
    return function () {
      var e = Ua();
      e >= b && (b = e + 864E5, d = 5E3);
      if (1 > d) return !1;
      c = Math.min(c + (e - a) / 1E3 * 5, 20);
      a = e;
      if (1 > c) return !1;
      d--;
      c--;
      return !0;
    };
  };
  var oF = function (a, b) {
      pm() && (a.gcs = qm(), b.metadata.is_consent_update && (a.gcu = "1"));
      S(35) && (a.gcd = um(b.s));
      om(b.s) && (S(61) || mD()) ? S(39) && (a.npa = "0") : a.npa = "1";
    },
    rF = function (a) {
      if (a.metadata.is_merchant_center) return "https://www.merchant-center-analytics.goog/mc/collect";
      var b = Mp(Op(a.s), "/g/collect");
      if (b) return b;
      var c = HE(a),
        d = W(a.s, Q.g.fb);
      return c && !oj() && !1 !== d && lD() && ak(Q.g.K) && ak(Q.g.U) ? pF() : qF();
    },
    sF = !1;
  sF = !0;
  var tF = {};
  tF[Q.g.tb] = "cid";
  tF[Q.g.hf] = "_fid";
  tF[Q.g.Bg] = "_geo";
  tF[Q.g.wb] = "gdid";
  tF[Q.g.Vc] = "ir";
  tF[Q.g.Ka] = "ul";
  tF[Q.g.Td] = "_rdi";
  tF[Q.g.zb] = "sr";
  tF[Q.g.Mi] = "tid";
  tF[Q.g.tf] = "tt";
  tF[Q.g.he] = "ec_mode";
  tF[Q.g.Vi] = "gtm_up";
  tF[Q.g.Yd] = "uaa", tF[Q.g.Zd] = "uab", tF[Q.g.ae] = "uafvl", tF[Q.g.be] = "uamb", tF[Q.g.ce] = "uam", tF[Q.g.de] = "uap", tF[Q.g.ee] = "uapv", tF[Q.g.fe] = "uaw";
  tF[Q.g.Jb] = "are";
  tF[Q.g.Ni] = "ur";
  tF[Q.g.kf] = "lps";
  tF[Q.g.Mg] = "pae";
  var uF = {};
  uF[Q.g.Ic] = "cc";
  uF[Q.g.Jc] = "ci";
  uF[Q.g.Kc] = "cm";
  uF[Q.g.Lc] = "cn";
  uF[Q.g.Nc] = "cs";
  uF[Q.g.Oc] = "ck";
  uF[Q.g.xa] = "cu";
  uF[Q.g.Ba] = "dl";
  uF[Q.g.Ma] = "dr";
  uF[Q.g.yb] = "dt";
  uF[Q.g.Vd] = "seg";
  uF[Q.g.Ab] = "sid";
  uF[Q.g.Wd] = "sct";
  uF[Q.g.Sa] = "uid";
  S(28) && (uF[Q.g.Yc] = "dp");
  var vF = {};
  vF[Q.g.Hd] = "_et";
  vF[Q.g.ub] = "edid";
  var wF = {};
  wF[Q.g.Ic] = "cc";
  wF[Q.g.Jc] = "ci";
  wF[Q.g.Kc] = "cm";
  wF[Q.g.Lc] = "cn";
  wF[Q.g.Nc] = "cs";
  wF[Q.g.Oc] = "ck";
  var xF = {},
    yF = Object.freeze((xF[Q.g.Ca] = 1, xF)),
    qF = function () {
      var a = "www";
      sF && pj() && (a = pj());
      return "https://" + a + ".google-analytics.com/g/collect";
    },
    pF = function () {
      var a;
      sF && "" !== pj() && (a = pj());
      return "https://" + (a ? a + "." : "") + "analytics.google.com/g/collect";
    },
    zF = function (a, b, c) {
      var d = {},
        e = {},
        f = {};
      d.v = "2";
      d.tid = a.target.fa;
      Ep(a, "google_ono", !1) && !oj() && (d._ono = 1);
      d.gtm = hn(Dp(a));
      d._p = S(88) ? Di : SE();
      c && (d.em = c);
      a.metadata.create_google_join && (d._gaz = 1);
      oF(d, a);
      S(37) && (ym() && (d.dma_cps = vm()), d.dma = xm());
      S(61) && Ql(Zl()) && (d.tcfd = zm());
      var g = a.h[Q.g.wb];
      g && (d.gdid = g);
      e.en = String(a.eventName);
      a.metadata.is_first_visit && (e._fv = a.metadata.is_first_visit_conversion ? 2 : 1);
      a.metadata.is_new_to_site && (e._nsi = 1);
      a.metadata.is_session_start && (e._ss = a.metadata.is_session_start_conversion ? 2 : 1);
      a.metadata.is_conversion && (e._c = 1);
      a.metadata.is_external_event && (e._ee = 1);
      if (a.metadata.is_ecommerce) {
        var k = a.h[Q.g.ba] || W(a.s, Q.g.ba);
        if (Ia(k)) for (var m = 0; m < k.length && 200 > m; m++) e["pr" + (m + 1)] = fg(k[m]);
      }
      var n = a.h[Q.g.ub];
      n && (e.edid = n);
      var p = function (t, u) {
          if ("object" !== typeof u || !yF[t]) {
            var v = "ep." + t,
              w = "epn." + t;
            t = Ha(u) ? w : v;
            var x = Ha(u) ? v : w;
            e.hasOwnProperty(x) && delete e[x];
            e[t] = String(u);
          }
        },
        q = S(76) && IE(a);
      l(a.h, function (t, u) {
        if (void 0 !== u && !Zh.hasOwnProperty(t)) {
          null === u && (u = "");
          var v;
          t !== Q.g.Id ? v = !1 : a.metadata.euid_mode_enabled || q ? (d.ecid = u, v = !0) : v = void 0;
          if (!v && t !== Q.g.ff) {
            var w = u;
            !0 === u && (w = "1");
            !1 === u && (w = "0");
            w = String(w);
            var x;
            if (tF[t]) x = tF[t], d[x] = w;else if (uF[t]) x = uF[t], f[x] = w;else if (vF[t]) x = vF[t], e[x] = w;else if ("_" === t.charAt(0)) d[t] = w;else {
              var y;
              wF[t] ? y = !0 : t !== Q.g.Mc ? y = !1 : ("object" !== typeof u && p(t, u), y = !0);
              y || p(t, u);
            }
          }
        }
      });
      (function (t) {
        IE(a) && "object" === typeof t && l(t || {}, function (u, v) {
          "object" !== typeof v && (d["sst." + u] = String(v));
        });
      })(a.h[Q.g.pe]);
      var r = a.h[Q.g.Ya] || {};
      S(12) && !1 === W(a.s, Q.g.fb) && (d.ngs = "1");
      l(r, function (t, u) {
        void 0 !== u && ((null === u && (u = ""), t !== Q.g.Sa || f.uid) ? b[t] !== u && (e[(Ha(u) ? "upn." : "up.") + String(t)] = String(u), b[t] = u) : f.uid = String(u));
      });
      return hg.call(this, {
        ma: d,
        Hc: f,
        nh: e
      }, rF(a), IE(a)) || this;
    };
  ta(zF, hg);
  var AF = function (a) {
      this.C = a;
      this.D = "";
      this.h = this.C;
    },
    BF = function (a, b) {
      a.h = b;
      return a;
    };
  function CF(a) {
    var b = a.search;
    return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse");
  }
  function DF(a, b) {
    var c = a || [];
    if (Array.isArray(c)) for (var d = 0; d < c.length; d++) b(c[d]);
  }
  ;
  var EF = function (a, b) {
      return a.replace(/\$\{([^\}]+)\}/g, function (c, d) {
        return b[d] || c;
      });
    },
    FF = function (a) {
      var b = {},
        c = "",
        d = a.pathname.indexOf("/g/collect");
      0 <= d && (c = a.pathname.substring(0, d));
      b.transport_url = a.protocol + "//" + a.hostname + c;
      return b;
    },
    GF = function (a, b, c) {
      var d = BF(new AF(function (g) {
          var k = EF(g, c);
          Nc(k);
        }), function (g) {
          var k = EF(g, c);
          Uc(k);
        }),
        e = 0,
        f = new z.XMLHttpRequest();
      f.withCredentials = !0;
      f.onprogress = function (g) {
        if (200 === f.status) {
          var k = f.responseText.substring(e);
          e = g.loaded;
          var m;
          m = d.D + k;
          for (var n = m.indexOf("\n\n"); -1 !== n;) {
            var p;
            a: {
              var q = ia(m.substring(0, n).split("\n")),
                r = q.next().value,
                t = q.next().value;
              if (0 === r.indexOf("event: message") && 0 === t.indexOf("data: ")) try {
                p = JSON.parse(t.substring(t.indexOf(":") + 1));
                break a;
              } catch (v) {}
              p = void 0;
            }
            var u = p;
            u && (DF(u.send_pixel, d.C), DF(u.send_beacon, d.h));
            m = m.substring(n + 2);
            n = m.indexOf("\n\n");
          }
          d.D = m;
        }
      };
      f.open(b ? "POST" : "GET", a);
      f.send(b);
    },
    HF = function (a, b) {
      var c = Hn(a),
        d = FF(c),
        e = CF(c);
      S(98) && S(89) ? is(e, b, d, function () {
        return void GF(e, b, d);
      }) : GF(e, b, d);
    };
  var KF = function (a, b, c, d) {
      var e = S(63) && d;
      if (S(62) || e) {
        var f = b,
          g = Xc();
        void 0 !== g && (f += "&tfd=" + Math.round(g));
        b = f;
      }
      var k = a + "?" + b;
      IF && (d = !(0 === k.indexOf(qF()) || 0 === k.indexOf(pF())));
      d && !ME ? HF(k, c) : JF(a, b, c);
    },
    LF = function (a, b) {
      function c(v) {
        q.push(v + "=" + encodeURIComponent("" + a.ma[v]));
      }
      var d = b.Um,
        e = b.Vm,
        f = b.Ml,
        g = b.kl,
        k = b.jl,
        m = b.am,
        n = b.Zl,
        p = b.Lm;
      if (d || e) {
        var q = [];
        a.ma._ono && c("_ono");
        c("tid");
        c("cid");
        c("gtm");
        q.push("aip=1");
        a.Hc.uid && !n && q.push("uid=" + encodeURIComponent("" + a.Hc.uid));
        var r = function () {
          S(37) && (c("dma"), null != a.ma.dma_cps && c("dma_cps"), null != a.ma.gcs && c("gcs"), c("gcd"));
          S(106) && null != a.ma.npa && c("npa");
        };
        r();
        d && (JF("https://stats.g.doubleclick.net/g/collect", "v=2&" + q.join("&")), Tj("https://stats.g.doubleclick.net/g/collect?v=2&" + q.join("&")));
        if (e) {
          var t = function () {
            var v = os() + "/td/ga/rul?";
            q = [];
            c("tid");
            q.push("gacid=" + encodeURIComponent(String(a.ma.cid)));
            c("gtm");
            S(105) && r();
            S(114) && c("pscdl");
            q.push("aip=1");
            q.push("fledge=1");
            q.push("z=" + Ka());
            ns(v + q.join("&"), a.ma.tid);
          };
          q.push("z=" + Ka());
          if (!m) {
            var u = f && 0 === f.indexOf("google.") && "google.com" != f ? "https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace("%", f) : void 0;
            u && Nc(u + q.join("&"));
          }
          S(12) && (S(103) ? p && !ME && t() : !ME && g && k && ms() && t());
        }
      }
    },
    IF = !1;
  var MF = function () {
    this.H = 1;
    this.N = {};
    this.h = new ig();
    this.C = -1;
  };
  MF.prototype.D = function (a, b) {
    var c = this,
      d = new zF(a, this.N, b),
      e = NE(a);
    e && this.h.T(d) || this.flush();
    if (e && this.h.add(d)) {
      if (0 > this.C) {
        var f = z.setTimeout,
          g;
        IE(a) ? NF ? (NF = !1, g = OF) : g = PF : g = 5E3;
        this.C = f.call(z, function () {
          return c.flush();
        }, g);
      }
    } else {
      var k = kg(d, this.H++);
      KF(d.C, k.params, k.body, d.H);
      var m = a.metadata.create_dc_join,
        n = a.metadata.create_google_join,
        p = !1 !== W(a.s, Q.g.Ga),
        q = om(a.s),
        r = {
          eventId: a.s.eventId,
          priorityId: a.s.priorityId
        },
        t = !1;
      S(103) && (t = a.h[Q.g.Mg]);
      var u = {
        Um: m,
        Vm: n,
        Ml: rj(),
        kl: p,
        jl: q,
        am: oj(),
        Zl: a.metadata.euid_mode_enabled,
        Pn: r,
        Lm: t,
        s: a.s
      };
      LF(d, u);
    }
    au(a.s.eventId, a.eventName);
  };
  MF.prototype.add = function (a) {
    a.metadata.euid_mode_enabled && !ME ? this.T(a) : this.D(a);
  };
  MF.prototype.flush = function () {
    if (this.h.events.length) {
      var a = lg(this.h, this.H++);
      KF(this.h.C, a.params, a.body, this.h.D);
      this.h = new ig();
      0 <= this.C && (z.clearTimeout(this.C), this.C = -1);
    }
  };
  MF.prototype.T = function (a) {
    var b = this,
      c = JE(a);
    c ? Wh(c, function (d) {
      b.D(a, 1 === d.split("~").length ? void 0 : d);
    }) : this.D(a);
  };
  var JF = function (a, b, c) {
      var d = a + "?" + b;
      if (c) try {
        Dc.sendBeacon && Dc.sendBeacon(d, c);
      } catch (e) {
        Ab("TAGGING", 15);
      } else Uc(d);
    },
    OF = sl('', 500),
    PF = sl('', 5E3),
    NF = !0;
  var QF = function (a, b, c) {
      void 0 === c && (c = {});
      if ("object" === typeof b) for (var d in b) QF(a + "." + d, b[d], c);else c[a] = b;
      return c;
    },
    RF = function (a) {
      if (IE(a)) {
        if (S(76)) {
          var b = Ep(a, "ccd_add_1p_data", !1) ? 1 : 0;
          LE(a, "ude", b);
        }
        var c = function (e) {
            var f = QF(Q.g.Ca, e);
            l(f, function (g, k) {
              a.h[g] = k;
            });
          },
          d = W(a.s, Q.g.Ca);
        void 0 !== d ? (c(d), S(71) && (a.h[Q.g.he] = "c")) : c(a.metadata.user_data);
        a.metadata.user_data = void 0;
      }
    };
  var SF = window,
    TF = document,
    UF = function (a) {
      var b = SF._gaUserPrefs;
      if (b && b.ioo && b.ioo() || TF.documentElement.hasAttribute("data-google-analytics-opt-out") || a && !0 === SF["ga-disable-" + a]) return !0;
      try {
        var c = SF.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (var d = Am("AMP_TOKEN", String(TF.cookie), !0), e = 0; e < d.length; e++) if ("$OPT_OUT" == d[e]) return !0;
      return TF.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  var WF = function (a) {
      return !a || VF.test(a) || ai.hasOwnProperty(a);
    },
    XF = function (a) {
      var b = Q.g.zb,
        c;
      c || (c = function () {});
      void 0 !== a.h[b] && (a.h[b] = c(a.h[b]));
    },
    YF = function (a) {
      var b = a.indexOf("?"),
        c = -1 === b ? a : a.substring(0, b);
      try {
        c = decodeURIComponent(c);
      } catch (d) {}
      return -1 === b ? c : "" + c + a.substring(b);
    },
    ZF = function (a, b, c) {
      ak(c) || ck(function () {
        b.metadata.is_consent_update = !0;
        var d = ii[c || ""];
        d && LE(b, "gcut", d);
        a.mj(b);
      }, c);
    },
    xn = {
      xl: "",
      hn: Number("")
    },
    $F = {},
    aG = ($F[Q.g.Ic] = 1, $F[Q.g.Jc] = 1, $F[Q.g.Kc] = 1, $F[Q.g.Lc] = 1, $F[Q.g.Nc] = 1, $F[Q.g.Oc] = 1, $F),
    VF = /^(_|ga_|google_|gtag\.|firebase_).*$/,
    bG = function (a) {
      this.Na = a;
      this.Rb = new MF();
      this.h = void 0;
      this.H = new PE();
      this.C = this.D = void 0;
      this.Sb = this.T = !1;
      this.xc = 0;
      this.N = !1;
    };
  aa = bG.prototype;
  aa.Jm = function (a, b, c) {
    var d = this,
      e = jp(this.Na);
    if (e) {
      if (c.eventMetadata.is_external_event && "_" === a.charAt(0)) c.onFailure();else {
        a !== Q.g.sa && a !== Q.g.Oa && WF(a) && O(58);
        cG(c.h);
        var f = new Cp(e, a, c);
        f.metadata.event_start_timestamp_ms = b;
        var g = [Q.g.U];
        (Ep(f, Q.g.Kb, W(f.s, Q.g.Kb)) || IE(f)) && g.push(Q.g.K);
        S(55) && IE(f) && g.push(Q.g.O);
        var k = function () {
          dk(function () {
            d.Km(f);
          }, g);
        };
        S(7) && S(10) ? yn(k) : k();
      }
    } else c.onFailure();
  };
  aa.Km = function (a) {
    this.C = a;
    try {
      if (UF(a.target.fa)) O(28), a.isAborted = !0;else if (S(32)) {
        var b;
        var c = vk(Ck()),
          d = c && c.parent;
        b = d ? vk(d) : void 0;
        if (b && Ia(b.destinations)) for (var e = 0; e < b.destinations.length; e++) if (UF(b.destinations[e])) {
          O(125);
          a.isAborted = !0;
          break;
        }
      }
      if (0 <= xn.xl.replace(/\s+/g, "").split(",").indexOf(a.eventName)) a.isAborted = !0;else {
        var f = KE(a);
        f && f.blacklisted && (a.isAborted = !0);
      }
      var g = E.location.protocol;
      "http:" != g && "https:" != g && (O(29), a.isAborted = !0);
      Dc && "preview" == Dc.loadPurpose && (O(30), a.isAborted = !0);
      S(36) && (a.isAborted = !0);
      Iq(a);
      var k = oi.grl;
      k || (k = nF(), oi.grl = k);
      k() || (O(35), a.isAborted = !0);
      if (a.isAborted) {
        a.s.onFailure();
        Bb();
        return;
      }
      var m = {
        prefix: String(W(a.s, Q.g.Qa, "")),
        path: String(W(a.s, Q.g.Pc, "/")),
        flags: String(W(a.s, Q.g.Xa, "")),
        domain: String(W(a.s, Q.g.Wa, "auto")),
        Xb: Number(W(a.s, Q.g.Ja, 63072E3))
      };
      a.metadata.cookie_options = m;
      dG(a);
      this.Kk(a);
      this.H.fn(a);
      a.metadata.is_merchant_center ? a.metadata.euid_mode_enabled = !1 : Ep(a, "ccd_add_1p_data", !1) && (a.metadata.euid_mode_enabled = !0);
      if (a.metadata.euid_mode_enabled && Ep(a, "ccd_add_1p_data", !1)) {
        var n = a.s.C[Q.g.ie];
        if (Wi(n)) {
          var p = W(a.s, Q.g.Ca);
          null === p ? a.metadata.user_data_from_code = null : (n.enable_code && nb(p) && (a.metadata.user_data_from_code = p), nb(n.selectors) && !a.metadata.user_data_from_manual && (a.metadata.user_data_from_manual = Vi(n.selectors)));
        }
      }
      var q = this.Kj,
        r;
      W(a.s, Q.g.Bb) && (ak(Q.g.U) || W(a.s, Q.g.tb) || (a.h[Q.g.Vi] = !0));
      var t;
      var u;
      u = void 0 === u ? 3 : u;
      var v = z.location.href;
      if (v) {
        var w = Hn(v).search.replace("?", ""),
          x = Cn(w, "_gl", !1, !0) || "";
        t = x ? void 0 !== $n(x, u) : !1;
      } else t = !1;
      t && IE(a) && LE(a, "glv", 1);
      if (a.eventName !== Q.g.sa) r = {};else {
        W(a.s, Q.g.Bb) && Wo(["aw", "dc"]);
        Yo(["aw", "dc"]);
        var y = kF(a),
          A = mF(a);
        r = Object.keys(y).length ? y : A;
      }
      q.call(this, r);
      var C = a.eventName === Q.g.sa;
      C && (this.N = !0);
      a.eventName == Q.g.sa && (W(a.s, Q.g.Ra, !0) ? (a.s.h[Q.g.da] && (a.s.D[Q.g.da] = a.s.h[Q.g.da], a.s.h[Q.g.da] = void 0, a.h[Q.g.da] = void 0), a.eventName = Q.g.mc) : a.isAborted = !0);
      C && !a.isAborted && 0 < this.xc++ && QE(17);
      var D = cb(el(a.s, Q.g.da, 1), ".");
      D && (a.h[Q.g.wb] = D);
      var F = cb(el(a.s, Q.g.da, 2), ".");
      F && (a.h[Q.g.ub] = F);
      var G = this.D,
        K = this.H,
        N = !this.Sb,
        P = this.h,
        U = W(a.s, Q.g.tb);
      if (W(a.s, Q.g.xb) && W(a.s, Q.g.Lb)) U ? UE(a, U, 1) : (O(127), a.isAborted = !0);else {
        var ca = U ? 1 : 8;
        a.metadata.is_new_to_site = !1;
        U || (U = VE(a), ca = 3);
        U || (U = P, ca = 5);
        if (!U) {
          var V = ak(Q.g.U),
            T = RE();
          U = !T.from_cookie || V ? T.vid : void 0;
          ca = 6;
        }
        U ? U = "" + U : (U = Rm(), ca = 7, a.metadata.is_first_visit = a.metadata.is_new_to_site = !0);
        UE(a, U, ca);
      }
      var ja = Math.floor(a.metadata.event_start_timestamp_ms / 1E3),
        ha = void 0;
      a.metadata.is_new_to_site || (ha = eF(a) || G);
      var da = Oa(W(a.s, Q.g.ad, 30));
      da = Math.min(475, da);
      da = Math.max(5, da);
      var Fa = Oa(W(a.s, Q.g.qf, 1E4)),
        ra = ZE(ha);
      a.metadata.is_first_visit = !1;
      a.metadata.is_session_start = !1;
      a.metadata.join_timer_sec = 0;
      ra && ra.Ah && (a.metadata.join_timer_sec = Math.max(0, ra.Ah - Math.max(0, ja - ra.Oe)));
      var Ga = !1;
      ra || (Ga = a.metadata.is_first_visit = !0, ra = {
        sessionId: String(ja),
        Gc: 1,
        rd: !1,
        Oe: ja,
        Dc: !1,
        xe: void 0
      });
      ja > ra.Oe + 60 * da && (Ga = !0, ra.sessionId = String(ja), ra.Gc++, ra.rd = !1, ra.xe = void 0);
      if (Ga) a.metadata.is_session_start = !0, K.Sl(a);else if (K.Jl() > Fa || a.eventName == Q.g.mc) ra.rd = !0;
      a.metadata.euid_mode_enabled ? W(a.s, Q.g.Sa) ? ra.Dc = !0 : (ra.Dc && (ra.xe = void 0), ra.Dc = !1) : ra.Dc = !1;
      var Ra = ra.xe,
        kb = S(76) && IE(a);
      if (a.metadata.euid_mode_enabled || kb) {
        var Gb = W(a.s, Q.g.Id),
          qc = Gb ? 1 : 8;
        Gb || (Gb = Ra, qc = 4);
        Gb || (Gb = Qm(), qc = 7);
        var Xd = qc,
          Xg = a.metadata.enhanced_client_id_source;
        if (void 0 === Xg || Xd <= Xg) a.h[Q.g.Id] = Gb.toString(), a.metadata.enhanced_client_id_source = Xd;
      }
      N ? (a.copyToHitData(Q.g.Ab, ra.sessionId), a.copyToHitData(Q.g.Wd, ra.Gc), a.copyToHitData(Q.g.Vd, ra.rd ? 1 : 0)) : (a.h[Q.g.Ab] = ra.sessionId, a.h[Q.g.Wd] = ra.Gc, a.h[Q.g.Vd] = ra.rd ? 1 : 0);
      a.metadata[Q.g.ff] = ra.Dc ? 1 : 0;
      eG(a);
      if (!W(a.s, Q.g.Lb) || !W(a.s, Q.g.xb)) {
        var Xv = "",
          Yg = E.location;
        if (Yg) {
          var bj = Yg.pathname || "";
          "/" != bj.charAt(0) && (bj = "/" + bj);
          Xv = Yg.protocol + "//" + Yg.hostname + bj + Yg.search;
        }
        a.copyToHitData(Q.g.Ba, Xv, YF);
        var kI = a.copyToHitData,
          lI = Q.g.Ma,
          cj;
        a: {
          var Yv = Em("_opt_expid", void 0, void 0, Q.g.U)[0];
          if (Yv) {
            var Zv = decodeURIComponent(Yv).split("$");
            if (3 === Zv.length) {
              cj = Zv[2];
              break a;
            }
          }
          if (void 0 !== oi.ga4_referrer_override) cj = oi.ga4_referrer_override;else {
            var $v = Oi("gtm.gtagReferrer." + a.target.fa),
              mI = E.referrer;
            cj = $v ? "" + $v : mI;
          }
        }
        kI.call(a, lI, cj || void 0, YF);
        a.copyToHitData(Q.g.yb, E.title);
        a.copyToHitData(Q.g.Ka, (Dc.language || "").toLowerCase());
        var aw = Pq();
        a.copyToHitData(Q.g.zb, aw.width + "x" + aw.height);
        S(28) && a.copyToHitData(Q.g.Yc, void 0, YF);
        S(64) && Oq() && a.copyToHitData(Q.g.kf, "1");
      }
      a.metadata.create_dc_join = !1;
      a.metadata.create_google_join = !1;
      if (!(S(46) && IE(a) || a.metadata.is_merchant_center || !1 === W(a.s, Q.g.fb)) && lD() && ak(Q.g.K)) {
        var bw = HE(a);
        (a.metadata.is_session_start || W(a.s, Q.g.Ag)) && (a.metadata.create_dc_join = !!bw);
        var cw;
        cw = a.metadata.join_timer_sec;
        bw && 0 === (cw || 0) && (a.metadata.join_timer_sec = 60, a.metadata.create_google_join = !0);
      }
      fG(a);
      ci.hasOwnProperty(a.eventName) && (a.metadata.is_ecommerce = !0, a.copyToHitData(Q.g.ba), a.copyToHitData(Q.g.xa));
      a.copyToHitData(Q.g.tf);
      for (var dw = W(a.s, Q.g.jf) || [], Zm = 0; Zm < dw.length; Zm++) {
        var ew = dw[Zm];
        if (ew.rule_result) {
          a.copyToHitData(Q.g.tf, ew.traffic_type);
          QE(3);
          break;
        }
      }
      if (!a.metadata.is_merchant_center && Op(a.s)) {
        var fw = gF(a) || {},
          oI = (jo(fw[Q.g.Wc], !!fw[Q.g.X]) ? Zn(!0)._fplc : void 0) || (0 < Em("FPLC", void 0, void 0, Q.g.U).length ? void 0 : "0");
        a.h._fplc = oI;
      }
      if (void 0 !== W(a.s, Q.g.Vc)) a.copyToHitData(Q.g.Vc);else {
        var gw = W(a.s, Q.g.nf),
          $m,
          dj;
        a: {
          if (jF) {
            var an = gF(a) || {};
            if (an && an[Q.g.X]) for (var hw = Fn(Hn(a.h[Q.g.Ma]), "host", !0), ej = an[Q.g.X], Zg = 0; Zg < ej.length; Zg++) if (ej[Zg] instanceof RegExp) {
              if (ej[Zg].test(hw)) {
                dj = !0;
                break a;
              }
            } else if (0 <= hw.indexOf(ej[Zg])) {
              dj = !0;
              break a;
            }
          }
          dj = !1;
        }
        if (!($m = dj)) {
          var fj;
          if (fj = gw) a: {
            for (var iw = gw.include_conditions || [], pI = Fn(Hn(a.h[Q.g.Ma]), "host", !0), bn = 0; bn < iw.length; bn++) if (iw[bn].test(pI)) {
              fj = !0;
              break a;
            }
            fj = !1;
          }
          $m = fj;
        }
        $m && (a.h[Q.g.Vc] = "1", QE(4));
      }
      IE(a) && (LE(a, "uc", mj()), Mj() && LE(a, "rnd", Wm()));
      if (S(22) && IE(a)) {
        Ep(a, Q.g.Kb, !1) && LE(a, "gse", 1);
        !1 === W(a.s, Q.g.fb) && LE(a, "ngs", 1);
        oj() && LE(a, "ga_rd", 1);
        lD() || LE(a, "ngst", 1);
        var jw = rj();
        jw && LE(a, "etld", jw);
      }
      if (IE(a)) {
        var kw = sF ? pj() : "";
        kw && LE(a, "gcsub", kw);
      }
      IE(a) && ((Nj() || S(35)) && LE(a, "gcd", um(a.s)), Mj() && W(a.s, Q.g.wa) && LE(a, "adr", 1));
      if (IE(a)) {
        var lw = Cs();
        lw && LE(a, "us_privacy", lw);
        var mw = hm();
        mw && LE(a, "gdpr", mw);
        var nw = gm();
        nw && LE(a, "gdpr_consent", nw);
      }
      S(58) && IE(a) && (a.h[Q.g.Ni] = nj() || mj());
      if (IE(a) && S(63)) {
        var ow = Di;
        ow && LE(a, "tft", Number(ow));
      }
      S(69) && IE(a) && (a.metadata.speculative && LE(a, "sp", 1), a.metadata.is_syn && LE(a, "syn", 1), a.metadata.em_event && (LE(a, "em_event", 1), LE(a, "sp", 1)));
      if (S(7)) if (!tn(z)) O(87);else if (void 0 !== vn) {
        O(85);
        var pw = rn();
        pw ? W(a.s, Q.g.Td) && !IE(a) || zn(pw, a) : O(86);
      }
      if (S(27)) {
        var cn = ks(js());
        cn || gG || (gG = !0, Gl('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), cn = ks(js()));
        cn && (a.h[Q.g.Jb] = "1");
      }
      if (S(103) && !1 !== W(a.s, Q.g.Ga) && om(a.s)) {
        var qI = HE(a),
          rI = W(a.s, Q.g.fb);
        qI && !1 !== rI && lD() && ak(Q.g.K) && ks("join-ad-interest-group") && Ea(Dc.joinAdInterestGroup) && (a.h[Q.g.Mg] = !0);
      }
      S(114) && Jq(a);
      if (a.eventName == Q.g.Oa) {
        var rw = W(a.s, Q.g.jb),
          sI = W(a.s, Q.g.vb),
          sw = void 0;
        sw = a.h[rw];
        sI(sw || W(a.s, rw));
        a.isAborted = !0;
      }
      a.copyToHitData(Q.g.Sa);
      a.copyToHitData(Q.g.Ya);
      Hp(a);
      RF(a);
      S(69) && IE(a) && (a.metadata.speculative = !1);
      var tw = W(a.s, Q.g.xb);
      tw && QE(12);
      a.metadata.em_event && QE(14);
      var $g = vk(Ck());
      (tw || Gk($g) || $g && $g.parent && $g.context && 5 === $g.context.source) && QE(19);
      !this.N && a.metadata.em_event && QE(18);
      var dn = a.metadata.event_usage;
      if (Ia(dn)) for (var en = 0; en < dn.length; en++) QE(dn[en]);
      var uw = Cb("GA4_EVENT");
      uw && (a.h._eu = uw);
      if (a.metadata.speculative || a.isAborted) {
        a.s.onFailure();
        Bb();
        return;
      }
      var tI = this.Kj,
        vw,
        uI = this.h,
        fn;
      a: {
        var gn = fF(a);
        if (gn) {
          if (dF(gn, a)) {
            fn = gn;
            break a;
          }
          O(25);
          a.isAborted = !0;
        }
        fn = void 0;
      }
      var vI = fn;
      vw = {
        clientId: YE(a, uI),
        Xf: vI
      };
      tI.call(this, vw);
      this.Sb = !0;
      this.Zm(a);
      var wI = this.h;
      S(91) && ak(Q.g.U) && (ij(wI), IE(a) && S(98) && (S(89) || S(90)) && (a.metadata.is_sgtm_service_worker = !0), S(89) && (S(98) && IE(a) ? es(Mp(Op(a.s), "/_")) : S(102) && (wi || yi || IE(a) || es())));
      if (IE(a)) {
        var xI = a.metadata.is_conversion;
        if ("page_view" === a.eventName || xI) ZF(this, a, Q.g.K), S(55) && ZF(this, a, Q.g.O);
      }
      this.H.Lh();
      a.copyToHitData(Q.g.Bg);
      W(a.s, Q.g.Td) && (a.h[Q.g.Td] = !0, IE(a) || XF(a));
      if (a.isAborted) {
        a.s.onFailure();
        Bb();
        return;
      }
      this.mj(a);
      a.s.onSuccess();
    } catch ($I) {
      a.s.onFailure();
    }
    Bb();
  };
  aa.mj = function (a) {
    this.Rb.add(a);
  };
  aa.Kj = function (a) {
    var b = a.clientId,
      c = a.Xf;
    b && c && (this.h = b, this.D = c);
  };
  aa.flush = function () {
    this.Rb.flush();
  };
  aa.Zm = function (a) {
    var b = this;
    if (!this.T) {
      var c = ak(Q.g.U);
      bk([Q.g.U], function () {
        var d = ak(Q.g.U);
        if (c ^ d && b.C && b.D && b.h) {
          var e = b.h;
          if (d) {
            var f = VE(b.C);
            if (f) {
              b.h = f;
              var g = eF(b.C);
              g && (b.D = aF(g, b.D, b.C));
            } else XE(b.h, b.C), TE(b.h, !0);
            dF(b.D, b.C);
            var k = {};
            k[Q.g.Ag] = e;
            var m = Vv(b.Na, Q.g.zd, k);
            ww(m, a.s.eventId, {});
          } else b.D = void 0, b.h = void 0, z.gaGlobal = {};
          c = d;
        }
      });
      this.T = !0;
    }
  };
  aa.Kk = function (a) {
    a.eventName !== Q.g.Oa && this.H.Jk(a);
  };
  var dG = function (a) {
      function b(c, d) {
        Zh[c] || void 0 === d || (a.h[c] = d);
      }
      l(a.s.D, b);
      l(a.s.h, b);
    },
    eG = function (a) {
      var b = fl(a.s),
        c = function (d, e) {
          aG[d] && (a.h[d] = e);
        };
      nb(b[Q.g.Mc]) ? l(b[Q.g.Mc], function (d, e) {
        c((Q.g.Mc + "_" + d).toLowerCase(), e);
      }) : l(b, c);
    },
    fG = function (a) {
      var b = function (c) {
        return !!c && c.conversion;
      };
      a.metadata.is_conversion = b(KE(a));
      a.metadata.is_first_visit && (a.metadata.is_first_visit_conversion = b(KE(a, "first_visit")));
      a.metadata.is_session_start && (a.metadata.is_session_start_conversion = b(KE(a, "session_start")));
    },
    gG = !1;
  function cG(a) {
    l(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[Q.g.Ya] || {};
    l(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  ;
  var hG = function (a) {
      if (S(50) && "prerendering" in E ? E.prerendering : "prerender" === E.visibilityState) return !1;
      a();
      return !0;
    },
    iG = function (a) {
      if (!hG(a)) {
        var b = !1,
          c = function () {
            !b && hG(a) && (b = !0, Pc(E, "visibilitychange", c), S(50) && Pc(E, "prerenderingchange", c), O(55));
          };
        Oc(E, "visibilitychange", c);
        S(50) && Oc(E, "prerenderingchange", c);
        O(54);
      }
    };
  var kG = function (a, b) {
    iG(function () {
      var c = jp(a);
      if (c) {
        var d = jG(c, b);
        eq(a, d);
      }
    });
  };
  function jG(a, b) {
    var c = function () {};
    var d = new bG(a.id),
      e = "MC" === a.prefix;
    c = function (f, g, k, m) {
      e && (m.eventMetadata.is_merchant_center = !0);
      d.Jm(g, k, m);
    };
    mk || lG(a, d, b);
    return c;
  }
  function lG(a, b, c) {
    var d = b.H,
      e = {},
      f = {
        eventId: c,
        eventMetadata: (e.batch_on_navigation = !0, e)
      };
    S(47) && (f.deferrable = !0);
    d.Nm(function () {
      ME = !0;
      dq.flush();
      1E3 <= d.Lf() && Dc.sendBeacon && fq(Q.g.zd, {}, a.id, f);
      b.flush();
      d.Lj(function () {
        ME = !1;
        d.Lj();
      });
    });
  }
  ;
  var mG = jG;
  function oG(a, b, c) {
    var d = this;
  }
  oG.F = "internal.gtagConfig";
  function pG() {
    var a = {};
    return a;
  }
  ;
  function rG(a, b) {}
  rG.P = "gtagSet";
  function sG(a, b) {}
  sG.P = "injectHiddenIframe";
  function tG(a, b, c, d, e) {}
  tG.F = "internal.injectHtml";
  var xG = {};
  function zG(a, b, c, d) {}
  var AG = Object.freeze({
      dl: 1,
      id: 1
    }),
    BG = {};
  function CG(a, b, c, d) {}
  zG.P = "injectScript";
  CG.F = "internal.injectScript";
  function DG(a) {
    var b = !0;
    return b;
  }
  DG.P = "isConsentGranted";
  var EG = function () {
    var a = jh(function (b) {
      this.h.h.log("error", b);
    });
    a.P = "JSON";
    return a;
  };
  function FG(a) {
    var b = void 0;
    return md(b);
  }
  FG.F = "internal.legacyParseUrl";
  var GG = function () {
      return !1;
    },
    HG = {
      getItem: function (a) {
        var b = null;
        return b;
      },
      setItem: function (a, b) {
        return !1;
      },
      removeItem: function (a) {}
    };
  function IG() {}
  IG.P = "logToConsole";
  function JG(a, b) {}
  JG.F = "internal.mergeRemoteConfig";
  function KG(a, b, c) {
    c = void 0 === c ? !0 : c;
    var d = [];
    return d;
  }
  KG.F = "internal.parseCookieValuesFromString";
  function LG(a) {
    var b = void 0;
    if ("string" !== typeof a) return;
    a && 0 === a.indexOf("//") && (a = E.location.protocol + a);
    if ("function" === typeof URL) {
      var c;
      a: {
        var d;
        try {
          d = new URL(a);
        } catch (w) {
          c = void 0;
          break a;
        }
        for (var e = {}, f = Array.from(d.searchParams), g = 0; g < f.length; g++) {
          var k = f[g][0],
            m = f[g][1];
          e.hasOwnProperty(k) ? "string" === typeof e[k] ? e[k] = [e[k], m] : e[k].push(m) : e[k] = m;
        }
        c = md({
          href: d.href,
          origin: d.origin,
          protocol: d.protocol,
          username: d.username,
          password: d.password,
          host: d.host,
          hostname: d.hostname,
          port: d.port,
          pathname: d.pathname,
          search: d.search,
          searchParams: e,
          hash: d.hash
        });
      }
      return c;
    }
    var n;
    try {
      n = Hn(a);
    } catch (w) {
      return;
    }
    if (!n.protocol || !n.host) return;
    var p = {};
    if (n.search) for (var q = n.search.replace("?", "").split("&"), r = 0; r < q.length; r++) {
      var t = q[r].split("="),
        u = t[0],
        v = decodeURIComponent(t.splice(1).join("=")).replace(/\+/g, " ");
      p.hasOwnProperty(u) ? "string" === typeof p[u] ? p[u] = [p[u], v] : p[u].push(v) : p[u] = v;
    }
    n.searchParams = p;
    n.origin = n.protocol + "//" + n.host;
    n.username = "";
    n.password = "";
    b = md(n);
    return b;
  }
  LG.P = "parseUrl";
  function MG(a) {}
  MG.F = "internal.processAsNewEvent";
  function NG(a, b, c) {
    var d;
    return d;
  }
  NG.F = "internal.pushToDataLayer";
  function OG(a, b) {
    var c = !1;
    return c;
  }
  OG.P = "queryPermission";
  function PG() {
    var a = "";
    return a;
  }
  PG.P = "readCharacterSet";
  function QG() {
    return ni.ia;
  }
  QG.F = "internal.readDataLayerName";
  function RG() {
    var a = "";
    return a;
  }
  RG.P = "readTitle";
  function SG(a, b) {
    var c = this;
    L(J(this), ["destinationId:!string", "callback:!Fn"], arguments), Ip(a, function (d) {
      b.invoke(c.h, md(d, c.h, 1));
    });
  }
  SG.F = "internal.registerCcdCallback";
  function TG(a) {
    return !0;
  }
  TG.F = "internal.registerDestination";
  var UG = Object.freeze(["config", "event", "get", "set"]);
  function VG(a, b, c) {}
  VG.F = "internal.registerGtagCommandListener";
  function WG(a, b) {
    var c = !1;
    return c;
  }
  WG.F = "internal.removeDataLayerEventListener";
  function XG(a, b) {}
  XG.F = "internal.removeFormData";
  function YG() {}
  YG.P = "resetDataLayer";
  function ZG(a, b, c, d) {
    L(J(this), ["destinationIds:!*", "eventName:!*", "eventParameters:?PixieMap", "messageContext:?PixieMap"], arguments);
    var e = c ? nd(c) : {},
      f = nd(a);
    Array.isArray(f) || (f = [f]);
    b = String(b);
    var g = d ? nd(d) : {},
      k = this.h.h;
    g.originatingEntity = iB(k);
    for (var m = 0; m < f.length; m++) {
      var n = f[m];
      if ("string" === typeof n) {
        var p = B(e),
          q = B(g),
          r = Vv(n, b, p);
        ww(r, g.eventId || k.eventId, q);
      }
    }
  }
  ZG.F = "internal.sendGtagEvent";
  function $G(a, b, c) {}
  $G.P = "sendPixel";
  function aH(a, b) {}
  aH.F = "internal.setAnchorHref";
  function bH(a, b, c, d) {
    var e = this;
    d = void 0 === d ? !0 : d;
    var f = !1;
    return f;
  }
  bH.P = "setCookie";
  function cH(a, b) {}
  cH.F = "internal.setCorePlatformServices";
  function dH(a, b) {}
  dH.F = "internal.setDataLayerValue";
  function eH(a) {}
  eH.P = "setDefaultConsentState";
  function fH(a, b) {}
  fH.F = "internal.setDelegatedConsentType";
  function gH(a, b) {}
  gH.F = "internal.setFormAction";
  function hH(a, b, c) {
    return !1;
  }
  hH.P = "setInWindow";
  function iH(a, b, c) {
    L(J(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
    var d = Bp(a) || {};
    d[b] = nd(c, this.h);
    var e = a;
    zp || Ap();
    yp[e] = d;
  }
  iH.F = "internal.setProductSettingsParameter";
  function jH(a, b, c) {
    L(J(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
    for (var d = b.split("."), e = iq(a), f = 0; f < d.length - 1; f++) {
      if (void 0 === e[d[f]]) e[d[f]] = {};else if (!nb(e[d[f]])) throw Error("setRemoteConfigParameter failed, path contains a non-object type: " + d[f]);
      e = e[d[f]];
    }
    e[d[f]] = nd(c, this.h, 1);
  }
  jH.F = "internal.setRemoteConfigParameter";
  function kH(a, b, c, d) {
    var e = this;
  }
  kH.P = "sha256";
  function lH(a, b, c) {}
  lH.F = "internal.sortRemoteConfigParameters";
  var mH = {},
    nH = {};
  mH.P = "templateStorage";
  mH.getItem = function (a) {
    var b = null;
    M(this, "access_template_storage");
    var c = this.h.h;
    if (!c) throw Error("invalid program state");
    var d = c.hd();
    nH[d] && (b = nH[d].hasOwnProperty("gtm." + a) ? nH[d]["gtm." + a] : null);
    return b;
  };
  mH.setItem = function (a, b) {
    M(this, "access_template_storage");
    var c = this.h.h;
    if (!c) throw Error("invalid program state");
    var d = c.hd();
    nH[d] = nH[d] || {};
    nH[d]["gtm." + a] = b;
  };
  mH.removeItem = function (a) {
    M(this, "access_template_storage");
    var b = this.h.h;
    if (!b) throw Error("invalid program state");
    var c = b.hd();
    if (!nH[c] || !nH[c].hasOwnProperty("gtm." + a)) return;
    delete nH[c]["gtm." + a];
  };
  mH.clear = function () {
    M(this, "access_template_storage");
    var a = this.h.h;
    if (!a) throw Error("invalid program state");
    delete nH[a.hd()];
  };
  function oH(a, b) {
    var c = !1;
    return c;
  }
  oH.F = "internal.testRegex";
  var pH = function (a) {
    var b;
    return b;
  };
  function qH(a) {
    var b;
    return b;
  }
  qH.F = "internal.unsiloId";
  function rH(a) {}
  rH.P = "updateConsentState";
  var sH;
  function tH(a, b, c) {
    sH = sH || new th();
    sH.add(a, b, c);
  }
  function uH(a, b) {
    var c = sH = sH || new th();
    if (c.C.hasOwnProperty(a)) throw "Attempting to add a private function which already exists: " + a + ".";
    if (c.h.hasOwnProperty(a)) throw "Attempting to add a private function with an existing API name: " + a + ".";
    c.C[a] = Ea(b) ? Mg(a, b) : Ng(a, b);
  }
  function vH() {
    return function (a) {
      var b;
      var c = sH;
      if (c.h.hasOwnProperty(a)) b = c.get(a, this);else {
        var d;
        if (d = c.C.hasOwnProperty(a)) {
          var e = !1,
            f = this.h.h;
          if (f) {
            var g = f.hd();
            if (g) {
              0 !== g.indexOf("__cvt_") && (e = !0);
            }
          } else e = !0;
          d = e;
        }
        if (d) {
          var k = c.C.hasOwnProperty(a) ? c.C[a] : void 0;
          b = k;
        } else throw Error(a + " is not a valid API name.");
      }
      return b;
    };
  }
  ;
  var wH = function () {
    var a = function (c) {
        return uH(c.F, c);
      },
      b = function (c) {
        return tH(c.P, c);
      };
    b(Wz);
    b(bA);
    b(SA);
    b(VA);
    b(WA);
    b($A);
    b(bB);
    b(eB);
    b(EG());
    b(gB);
    b(kE);
    b(lE);
    b(AE);
    b(BE);
    b(CE);
    b(FE);
    b(rG);
    b(sG);
    b(zG);
    b(DG);
    b(IG);
    b(LG);
    b(OG);
    b(PG);
    b(RG);
    b($G);
    b(bH);
    b(eH);
    b(hH);
    b(kH);
    b(mH);
    b(rH);
    tH("Math", Sg());
    tH("Object", rh);
    tH("TestHelper", vh());
    tH("assertApi", Og);
    tH("assertThat", Pg);
    tH("decodeUri", Tg);
    tH("decodeUriComponent", Ug);
    tH("encodeUri", Vg);
    tH("encodeUriComponent", Wg);
    tH("fail", fh);
    tH("generateRandom", gh);
    tH("getTimestamp", hh);
    tH("getTimestampMillis", hh);
    tH("getType", ih);
    tH("makeInteger", kh);
    tH("makeNumber", lh);
    tH("makeString", mh);
    tH("makeTableMap", nh);
    tH("mock", qh);
    tH("fromBase64", jE, !("atob" in z));
    tH("localStorage", HG, !GG());
    tH("toBase64", pH, !("btoa" in z));
    a(Zz);
    a(gA);
    a(sA);
    a(zA);
    a(EA);
    a(HA);
    a(QA);
    a(TA);
    a(XA);
    a(YA);
    a(aB);
    a(cB);
    a(dB);
    a(fB);
    a(hB);
    a(kB);
    a(lB);
    a(nB);
    a(rB);
    a(wB);
    a(xB);
    a(IB);
    a(NB);
    a(SB);
    a(aC);
    a(fC);
    a(qC);
    a(sC);
    a(FC);
    a(ah);
    a(HC);
    a(hE);
    a(iE);
    a(mE);
    a(nE);
    a(oE);
    a(pE);
    a(qE);
    a(rE);
    a(sE);
    a(tE);
    a(uE);
    a(vE);
    a(xE);
    a(yE);
    a(zE);
    a(DE);
    a(EE);
    a(oG);
    a(CG);
    a(FG);
    a(GA);
    a(JG);
    a(KG);
    a(MG);
    a(NG);
    a(QG);
    a(SG);
    a(TG);
    a(VG);
    a(WG);
    a(XG);
    a(ZG);
    a(aH);
    a(cH);
    a(fH);
    a(gH);
    a(iH);
    a(jH);
    a(lH);
    a(oH);
    uH("internal.GtagSchema", pG());
    S(70) && a(tG);
    S(100) && a(mB);
    S(109) && a(qH);
    S(104) && a(dH);
    return vH();
  };
  var Uz;
  function xH() {
    Uz.h.h.N = function (a, b, c) {
      oi.SANDBOXED_JS_SEMAPHORE = oi.SANDBOXED_JS_SEMAPHORE || 0;
      oi.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        oi.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function yH(a) {
    void 0 !== a && l(a, function (b, c) {
      for (var d = 0; d < c.length; d++) {
        var e = c[d].replace(/^_*/, "");
        Gi[e] = Gi[e] || [];
        Gi[e].push(b);
      }
    });
  }
  ;
  var zH = encodeURI,
    Y = encodeURIComponent,
    AH = function (a, b, c) {
      Nc(a, b, c);
    },
    BH = function (a, b) {
      if (!a) return !1;
      var c = Fn(Hn(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, e = "." + e);
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    CH = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
      return e ? d : null;
    };
  var Z = {
    m: {}
  };
  Z.m.access_template_storage = ["google"], function () {
    (function (a) {
      Z.__access_template_storage = a;
      Z.__access_template_storage.o = "access_template_storage";
      Z.__access_template_storage.isVendorTemplate = !0;
      Z.__access_template_storage.priorityOverride = 0;
      Z.__access_template_storage.isInfrastructure = !1;
      Z.__access_template_storage.runInSiloedMode = !1;
    })(function () {
      return {
        assert: function () {},
        M: function () {
          return {};
        }
      };
    });
  }();
  Z.m.c = ["google"], function () {
    (function (a) {
      Z.__c = a;
      Z.__c.o = "c";
      Z.__c.isVendorTemplate = !0;
      Z.__c.priorityOverride = 0;
      Z.__c.isInfrastructure = !1;
      Z.__c.runInSiloedMode = !0;
    })(function (a) {
      qz(a.vtp_value, "c", a.vtp_gtmEventId);
      return a.vtp_value;
    });
  }();
  Z.m.e = ["google"], function () {
    (function (a) {
      Z.__e = a;
      Z.__e.o = "e";
      Z.__e.isVendorTemplate = !0;
      Z.__e.priorityOverride = 0;
      Z.__e.isInfrastructure = !1;
      Z.__e.runInSiloedMode = !0;
    })(function (a) {
      return String(a.vtp_gtmCachedValues.event);
    });
  }();
  Z.m.v = ["google"], function () {
    (function (a) {
      Z.__v = a;
      Z.__v.o = "v";
      Z.__v.isVendorTemplate = !0;
      Z.__v.priorityOverride = 0;
      Z.__v.isInfrastructure = !1;
      Z.__v.runInSiloedMode = !1;
    })(function (a) {
      var b = a.vtp_name;
      if (!b || !b.replace) return !1;
      var c = iz(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
        d = void 0 !== c ? c : a.vtp_defaultValue;
      qz(d, "v", a.vtp_gtmEventId);
      return d;
    });
  }();
  Z.m.process_dom_events = ["google"], function () {
    function a(b, c, d) {
      return {
        targetType: c,
        eventName: d
      };
    }
    (function (b) {
      Z.__process_dom_events = b;
      Z.__process_dom_events.o = "process_dom_events";
      Z.__process_dom_events.isVendorTemplate = !0;
      Z.__process_dom_events.priorityOverride = 0;
      Z.__process_dom_events.isInfrastructure = !1;
      Z.__process_dom_events.runInSiloedMode = !1;
    })(function (b) {
      for (var c = b.vtp_targets || [], d = b.vtp_createPermissionError, e = {}, f = 0; f < c.length; f++) {
        var g = c[f];
        e[g.targetType] = e[g.targetType] || [];
        e[g.targetType].push(g.eventName);
      }
      return {
        assert: function (k, m, n) {
          if (!e[m]) throw d(k, {}, "Prohibited event target " + m + ".");
          if (-1 === e[m].indexOf(n)) throw d(k, {}, "Prohibited listener registration for DOM event " + n + ".");
        },
        M: a
      };
    });
  }();
  Z.m.detect_youtube_activity_events = ["google"], function () {
    function a(b, c) {
      return {
        options: {
          fixMissingApi: !!c.fixMissingApi
        }
      };
    }
    (function (b) {
      Z.__detect_youtube_activity_events = b;
      Z.__detect_youtube_activity_events.o = "detect_youtube_activity_events";
      Z.__detect_youtube_activity_events.isVendorTemplate = !0;
      Z.__detect_youtube_activity_events.priorityOverride = 0;
      Z.__detect_youtube_activity_events.isInfrastructure = !1;
      Z.__detect_youtube_activity_events.runInSiloedMode = !1;
    })(function (b) {
      var c = !!b.vtp_allowFixMissingJavaScriptApi,
        d = b.vtp_createPermissionError;
      return {
        assert: function (e, f) {
          if (!c && f && f.fixMissingApi) throw d(e, {}, "Prohibited option: fixMissingApi.");
        },
        M: a
      };
    });
  }();
  Z.m.detect_history_change_events = ["google"], function () {
    function a() {
      return {};
    }
    (function (b) {
      Z.__detect_history_change_events = b;
      Z.__detect_history_change_events.o = "detect_history_change_events";
      Z.__detect_history_change_events.isVendorTemplate = !0;
      Z.__detect_history_change_events.priorityOverride = 0;
      Z.__detect_history_change_events.isInfrastructure = !1;
      Z.__detect_history_change_events.runInSiloedMode = !1;
    })(function () {
      return {
        assert: function () {},
        M: a
      };
    });
  }();
  Z.m.detect_link_click_events = ["google"], function () {
    function a(b, c) {
      return {
        options: c
      };
    }
    (function (b) {
      Z.__detect_link_click_events = b;
      Z.__detect_link_click_events.o = "detect_link_click_events";
      Z.__detect_link_click_events.isVendorTemplate = !0;
      Z.__detect_link_click_events.priorityOverride = 0;
      Z.__detect_link_click_events.isInfrastructure = !1;
      Z.__detect_link_click_events.runInSiloedMode = !1;
    })(function (b) {
      var c = b.vtp_allowWaitForTags,
        d = b.vtp_createPermissionError;
      return {
        assert: function (e, f) {
          if (!c && f && f.waitForTags) throw d(e, {}, "Prohibited option waitForTags.");
        },
        M: a
      };
    });
  }();
  Z.m.detect_form_submit_events = ["google"], function () {
    function a(b, c) {
      return {
        options: c
      };
    }
    (function (b) {
      Z.__detect_form_submit_events = b;
      Z.__detect_form_submit_events.o = "detect_form_submit_events";
      Z.__detect_form_submit_events.isVendorTemplate = !0;
      Z.__detect_form_submit_events.priorityOverride = 0;
      Z.__detect_form_submit_events.isInfrastructure = !1;
      Z.__detect_form_submit_events.runInSiloedMode = !1;
    })(function (b) {
      var c = b.vtp_allowWaitForTags,
        d = b.vtp_createPermissionError;
      return {
        assert: function (e, f) {
          if (!c && f && f.waitForTags) throw d(e, {}, "Prohibited option waitForTags.");
        },
        M: a
      };
    });
  }();
  Z.m.read_container_data = ["google"], function () {
    (function (a) {
      Z.__read_container_data = a;
      Z.__read_container_data.o = "read_container_data";
      Z.__read_container_data.isVendorTemplate = !0;
      Z.__read_container_data.priorityOverride = 0;
      Z.__read_container_data.isInfrastructure = !1;
      Z.__read_container_data.runInSiloedMode = !1;
    })(function () {
      return {
        assert: function () {},
        M: function () {
          return {};
        }
      };
    });
  }();
  Z.m.listen_data_layer = ["google"], function () {
    function a(b, c) {
      return {
        eventName: c
      };
    }
    (function (b) {
      Z.__listen_data_layer = b;
      Z.__listen_data_layer.o = "listen_data_layer";
      Z.__listen_data_layer.isVendorTemplate = !0;
      Z.__listen_data_layer.priorityOverride = 0;
      Z.__listen_data_layer.isInfrastructure = !1;
      Z.__listen_data_layer.runInSiloedMode = !1;
    })(function (b) {
      var c = b.vtp_accessType,
        d = b.vtp_allowedEvents || [],
        e = b.vtp_createPermissionError;
      return {
        assert: function (f, g) {
          if (!h(g)) throw e(f, {
            eventName: g
          }, "Event name must be a string.");
          if (!("any" === c || "specific" === c && 0 <= d.indexOf(g))) throw e(f, {
            eventName: g
          }, "Prohibited listen on data layer event.");
        },
        M: a
      };
    });
  }();
  Z.m.detect_user_provided_data = ["google"], function () {
    function a(b, c) {
      return {
        dataSource: c
      };
    }
    (function (b) {
      Z.__detect_user_provided_data = b;
      Z.__detect_user_provided_data.o = "detect_user_provided_data";
      Z.__detect_user_provided_data.isVendorTemplate = !0;
      Z.__detect_user_provided_data.priorityOverride = 0;
      Z.__detect_user_provided_data.isInfrastructure = !1;
      Z.__detect_user_provided_data.runInSiloedMode = !1;
    })(function (b) {
      var c = b.vtp_createPermissionError;
      return {
        assert: function (d, e) {
          if ("auto" !== e && "manual" !== e && "code" !== e) throw c(d, {}, "Unknown user provided data source.");
          if (b.vtp_limitDataSources) if ("auto" !== e || b.vtp_allowAutoDataSources) {
            if ("manual" === e && !b.vtp_allowManualDataSources) throw c(d, {}, "Detection of user provided data via manually specified CSS selectors is not allowed.");
            if ("code" === e && !b.vtp_allowCodeDataSources) throw c(d, {}, "Detection of user provided data from an in-page variable is not allowed.");
          } else throw c(d, {}, "Automatic detection of user provided data is not allowed.");
        },
        M: a
      };
    });
  }();
  Z.m.get_url = ["google"], function () {
    function a(b, c, d) {
      return {
        component: c,
        queryKey: d
      };
    }
    (function (b) {
      Z.__get_url = b;
      Z.__get_url.o = "get_url";
      Z.__get_url.isVendorTemplate = !0;
      Z.__get_url.priorityOverride = 0;
      Z.__get_url.isInfrastructure = !1;
      Z.__get_url.runInSiloedMode = !1;
    })(function (b) {
      var c = "any" === b.vtp_urlParts ? null : [];
      c && (b.vtp_protocol && c.push("protocol"), b.vtp_host && c.push("host"), b.vtp_port && c.push("port"), b.vtp_path && c.push("path"), b.vtp_extension && c.push("extension"), b.vtp_query && c.push("query"), b.vtp_fragment && c.push("fragment"));
      var d = c && "any" !== b.vtp_queriesAllowed ? b.vtp_queryKeys || [] : null,
        e = b.vtp_createPermissionError;
      return {
        assert: function (f, g, k) {
          if (g) {
            if (!h(g)) throw e(f, {}, "URL component must be a string.");
            if (c && 0 > c.indexOf(g)) throw e(f, {}, "Prohibited URL component: " + g);
            if ("query" === g && d) {
              if (!k) throw e(f, {}, "Prohibited from getting entire URL query when query keys are specified.");
              if (!h(k)) throw e(f, {}, "Query key must be a string.");
              if (0 > d.indexOf(k)) throw e(f, {}, "Prohibited query key: " + k);
            }
          } else if (c) throw e(f, {}, "Prohibited from getting entire URL when components are specified.");
        },
        M: a
      };
    });
  }();
  Z.m.gct = ["google"], function () {
    function a(b) {
      for (var c = [], d = 0; d < b.length; d++) try {
        c.push(new RegExp(b[d]));
      } catch (e) {}
      return c;
    }
    (function (b) {
      Z.__gct = b;
      Z.__gct.o = "gct";
      Z.__gct.isVendorTemplate = !0;
      Z.__gct.priorityOverride = 0;
      Z.__gct.isInfrastructure = !1;
      Z.__gct.runInSiloedMode = !0;
    })(function (b) {
      var c = {},
        d = b.vtp_sessionDuration;
      0 < d && (c[Q.g.ad] = d);
      c[Q.g.Ld] = b.vtp_eventSettings;
      c[Q.g.ng] = b.vtp_dynamicEventSettings;
      c[Q.g.Kb] = 1 === b.vtp_googleSignals;
      c[Q.g.Cg] = b.vtp_foreignTld;
      c[Q.g.zg] = 1 === b.vtp_restrictDomain;
      c[Q.g.jf] = b.vtp_internalTrafficResults;
      var e = Q.g.La,
        f = b.vtp_linker;
      f && f[Q.g.X] && (f[Q.g.X] = a(f[Q.g.X]));
      c[e] = f;
      var g = Q.g.nf,
        k = b.vtp_referralExclusionDefinition;
      k && k.include_conditions && (k.include_conditions = a(k.include_conditions));
      c[g] = k;
      var m = wk(b.vtp_trackingId);
      jq(m, c);
      kG(m, b.vtp_gtmEventId);
      H(b.vtp_gtmOnSuccess);
    });
  }();
  Z.m.get = ["google"], function () {
    (function (a) {
      Z.__get = a;
      Z.__get.o = "get";
      Z.__get.isVendorTemplate = !0;
      Z.__get.priorityOverride = 0;
      Z.__get.isInfrastructure = !1;
      Z.__get.runInSiloedMode = !1;
    })(function (a) {
      var b = a.vtp_settings,
        c = b.eventParameters || {},
        d = String(a.vtp_eventName),
        e = {};
      e.eventId = a.vtp_gtmEventId;
      e.priorityId = a.vtp_gtmPriorityId;
      a.vtp_deferrable && (e.deferrable = !0);
      var f = Vv(String(b.streamId), d, c);
      ww(f, e.eventId, e);
      a.vtp_gtmOnSuccess();
    });
  }();
  Z.m.detect_scroll_events = ["google"], function () {
    function a() {
      return {};
    }
    (function (b) {
      Z.__detect_scroll_events = b;
      Z.__detect_scroll_events.o = "detect_scroll_events";
      Z.__detect_scroll_events.isVendorTemplate = !0;
      Z.__detect_scroll_events.priorityOverride = 0;
      Z.__detect_scroll_events.isInfrastructure = !1;
      Z.__detect_scroll_events.runInSiloedMode = !1;
    })(function () {
      return {
        assert: function () {},
        M: a
      };
    });
  }();
  Z.m.detect_form_interaction_events = ["google"], function () {
    function a() {
      return {};
    }
    (function (b) {
      Z.__detect_form_interaction_events = b;
      Z.__detect_form_interaction_events.o = "detect_form_interaction_events";
      Z.__detect_form_interaction_events.isVendorTemplate = !0;
      Z.__detect_form_interaction_events.priorityOverride = 0;
      Z.__detect_form_interaction_events.isInfrastructure = !1;
      Z.__detect_form_interaction_events.runInSiloedMode = !1;
    })(function () {
      return {
        assert: function () {},
        M: a
      };
    });
  }();
  var YI = {};
  YI.dataLayer = Pi;
  YI.callback = function (a) {
    Fi.hasOwnProperty(a) && Ea(Fi[a]) && Fi[a]();
    delete Fi[a];
  };
  YI.bootstrap = 0;
  YI._spx = !1;
  function ZI() {
    oi[tk()] = oi[tk()] || YI;
    zk();
    Ek() || l(Fk(), function (a, b) {
      Wu(a, b.transportUrl, b.context);
      O(92);
    });
    Xa(Gi, Z.m);
    S(66) && vk(Ck());
    vf = Lf;
  }
  (function (a) {
    function b() {
      m = E.documentElement.getAttribute("data-tag-assistant-present");
      Xx(m) && (k = g.Gk);
    }
    if (!z["__TAGGY_INSTALLED"]) {
      var c = !1;
      if (E.referrer) {
        var d = Hn(E.referrer);
        c = "cct.google" === En(d, "host");
      }
      if (!c) {
        var e = Em("googTaggyReferrer");
        c = e.length && e[0].length;
      }
      c && (z["__TAGGY_INSTALLED"] = !0, Kc("https://cct.google/taggy/agent.js"));
    }
    if (Ai) a();else {
      var f = function (u) {
          var v = "GTM",
            w = "GTM";
          ui ? (v = "OGT", w = "GTAG") : Ai && (w = v = "OPT");
          var x = z["google.tagmanager.debugui2.queue"];
          x || (x = [], z["google.tagmanager.debugui2.queue"] = x, Kc("https://" + ni.yd + "/debug/bootstrap?id=" + Tf.ctid + "&src=" + w + "&cond=" + u + "&gtm=" + hn()));
          var y = {
            messageType: "CONTAINER_STARTING",
            data: {
              scriptSource: Ec,
              containerProduct: v,
              debug: !1,
              id: Tf.ctid,
              targetRef: {
                ctid: Tf.ctid,
                isDestination: lk.ke
              },
              aliases: nk(),
              destinations: qk()
            }
          };
          y.data.resume = function () {
            a();
          };
          ni.fk && (y.data.initialPublish = !0);
          x.push(y);
        },
        g = {
          un: 1,
          Hk: 2,
          Tk: 3,
          hk: 4,
          Gk: 5
        },
        k = void 0,
        m = void 0,
        n = Fn(z.location, "query", !1, void 0, "gtm_debug");
      Xx(n) && (k = g.Hk);
      if (!k && E.referrer) {
        var p = Hn(E.referrer);
        "tagassistant.google.com" === En(p, "host") && (k = g.Tk);
      }
      if (!k) {
        var q = Em("__TAG_ASSISTANT");
        q.length && q[0].length && (k = g.hk);
      }
      k || b();
      if (!k && Yx(m)) {
        var r = function () {
            if (t) return !0;
            t = !0;
            b();
            k && Ec ? f(k) : a();
          },
          t = !1;
        Oc(E, "TADebugSignal", function () {
          r();
        }, !1);
        z.setTimeout(function () {
          r();
        }, 200);
      } else k && Ec ? f(k) : a();
    }
  })(function () {
    try {
      xk();
      if (S(24)) {}
      vj().C();
      fm();
      (S(112) || S(113) || S(114)) && Eq();
      var a = uk();
      if (ik().canonical[a]) {
        var b = oi.zones;
        b && b.unregisterChild(pk());
      } else {
        (S(7) || S(8) || S(19) || S(16)) && wn();
        Tu();
        for (var c = data.resource || {}, d = c.macros || [], e = 0; e < d.length; e++) lf.push(d[e]);
        for (var f = c.tags || [], g = 0; g < f.length; g++) of.push(f[g]);
        for (var k = c.predicates || [], m = 0; m < k.length; m++) nf.push(k[m]);
        for (var n = c.rules || [], p = 0; p < n.length; p++) {
          for (var q = n[p], r = {}, t = 0; t < q.length; t++) {
            var u = q[t][0];
            r[u] = Array.prototype.slice.call(q[t], 1);
            "if" !== u && "unless" !== u || uf(r[u]);
          }
          mf.push(r);
        }
        qf = Z;
        rf = Oz;
        Nf = new Wf();
        var v = data.sandboxed_scripts,
          w = data.security_groups,
          x = data.infra;
        a: {
          var y = data.runtime || [],
            A = data.runtime_lines;
          Uz = new Ie();
          xH();
          kf = Tz();
          var C = Uz,
            D = wH(),
            F = new ed("require", D);
          F.Cb();
          C.h.h.set("require", F);
          for (var G = [], K = 0; K < y.length; K++) {
            var N = y[K];
            if (!Ia(N) || 3 > N.length) {
              if (0 === N.length) continue;
              break a;
            }
            A && A[K] && A[K].length && Ef(N, A[K]);
            try {
              Uz.execute(N), S(42) && Ok && 50 === N[0] && G.push(N[1]);
            } catch (Xg) {}
          }
          S(42) && (wf = G);
        }
        if (void 0 !== v) for (var P = ["sandboxedScripts"], U = 0; U < v.length; U++) {
          var ca = v[U].replace(/^_*/, "");
          Gi[ca] = P;
        }
        yH(w);
        if (void 0 !== x) for (var V = 0; V < x.length; V++) Hi[x[V]] = !0;
        ZI();
        if (S(33) && !Ai) {
          for (var T = lj["7"], ja = T ? T.split("|") : [], ha = {}, da = 0; da < ja.length; da++) ha[ja[da]] = !0;
          for (var Fa = 0; Fa < Uj.length; Fa++) {
            var ra = Uj[Fa],
              Ga = ha[ra] ? "granted" : "denied";
            Cj().implicit(ra, Ga);
          }
        }
        Wx();
        Xu = !1;
        Yu = 0;
        if ("interactive" == E.readyState && !E.createEventObject || "complete" == E.readyState) $u();else {
          Oc(E, "DOMContentLoaded", $u);
          Oc(E, "readystatechange", $u);
          if (E.createEventObject && E.documentElement.doScroll) {
            var Ra = !0;
            try {
              Ra = !z.frameElement;
            } catch (Xg) {}
            Ra && av();
          }
          Oc(z, "load", $u);
        }
        kx = !1;
        "complete" === E.readyState ? mx() : Oc(z, "load", mx);
        Ok && (Jk(al), z.setInterval($k, 864E5));
        Jk(Qz);
        Jk(Av);
        Jk(rt);
        Jk(cq);
        Jk(Lv);
        Jk(Tp);
        Jk(kn);
        Jk(Rp);
        Jk(Hv);
        S(42) && Jk(Dv);
        sy();
        kj(1);
        Hw();
        Ei = Ua();
        YI.bootstrap = Ei;
        if (S(24)) {}
      }
    } catch (Xg) {
      if (kj(4), Ok) {
        var Xd = Vk(!0, !0);
        Nc(Xd);
      }
    }
  });
})();