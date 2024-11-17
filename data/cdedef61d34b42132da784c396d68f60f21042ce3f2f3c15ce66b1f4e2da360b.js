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
        "vtp_value": "google.co.kr"
      }, {
        "function": "__c",
        "vtp_value": 0
      }, {
        "vtp_signal": 0,
        "function": "__c",
        "vtp_value": 0
      }, {
        "function": "__c",
        "vtp_value": "google.co.kr"
      }, {
        "function": "__c",
        "vtp_value": 0
      }],
      "tags": [{
        "function": "__ogt_1p_data_v2",
        "priority": 7,
        "vtp_isAutoEnabled": true,
        "vtp_autoCollectExclusionSelectors": ["list", ["map", "exclusionSelector", ""]],
        "vtp_isEnabled": true,
        "vtp_autoEmailEnabled": true,
        "vtp_autoPhoneEnabled": false,
        "vtp_autoAddressEnabled": false,
        "vtp_isAutoCollectPiiEnabledFlag": false,
        "tag_id": 10
      }, {
        "function": "__ccd_ga_first",
        "priority": 6,
        "vtp_instanceDestinationId": "G-501578KXVB",
        "tag_id": 18
      }, {
        "function": "__set_product_settings",
        "priority": 5,
        "vtp_instanceDestinationId": "G-501578KXVB",
        "vtp_foreignTldMacroResult": ["macro", 5],
        "vtp_isChinaVipRegionMacroResult": ["macro", 6],
        "tag_id": 17
      }, {
        "function": "__ogt_google_signals",
        "priority": 4,
        "vtp_googleSignals": "DISABLED",
        "vtp_instanceDestinationId": "G-501578KXVB",
        "vtp_serverMacroResult": ["macro", 4],
        "tag_id": 16
      }, {
        "function": "__ccd_ga_regscope",
        "priority": 3,
        "vtp_settingsTable": ["list", ["map", "redactFieldGroup", "DEVICE_AND_GEO", "disallowAllRegions", false, "disallowedRegions", ""], ["map", "redactFieldGroup", "GOOGLE_SIGNALS", "disallowAllRegions", true, "disallowedRegions", ""]],
        "vtp_instanceDestinationId": "G-501578KXVB",
        "tag_id": 15
      }, {
        "function": "__ccd_conversion_marking",
        "priority": 2,
        "vtp_conversionRules": ["list", ["map", "matchingRules", "{\"type\":5,\"args\":[{\"stringValue\":\"purchase\"},{\"contextValue\":{\"namespaceType\":1,\"keyParts\":[\"eventName\"]}}]}"]],
        "vtp_instanceDestinationId": "G-501578KXVB",
        "tag_id": 14
      }, {
        "function": "__ccd_auto_redact",
        "priority": 1,
        "vtp_instanceDestinationId": "G-501578KXVB",
        "tag_id": 13
      }, {
        "function": "__gct",
        "vtp_trackingId": "G-501578KXVB",
        "vtp_sessionDuration": 0,
        "vtp_googleSignals": ["macro", 1],
        "vtp_foreignTld": ["macro", 2],
        "vtp_restrictDomain": ["macro", 3],
        "vtp_eventSettings": ["map"],
        "tag_id": 7
      }, {
        "function": "__ccd_ga_last",
        "priority": 0,
        "vtp_instanceDestinationId": "G-501578KXVB",
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
      "rules": [[["if", 0], ["add", 7]], [["if", 1], ["add", 0, 8, 6, 5, 4, 3, 2, 1]]]
    },
    "runtime": [[50, "__ccd_auto_redact", [46, "a"], [50, "u", [46, "bh"], [36, [2, [15, "bh"], "replace", [7, [15, "t"], "\\$1"]]]], [50, "v", [46, "bh"], [52, "bi", ["c", [15, "bh"]]], [52, "bj", [7]], [65, "bk", [2, [15, "bi"], "split", [7, ""]], [46, [53, [52, "bl", [7, ["u", [15, "bk"]]]], [52, "bm", ["d", [15, "bk"]]], [22, [12, [15, "bm"], [45]], [46, [36, ["d", ["u", [15, "bh"]]]]]], [22, [21, [15, "bm"], [15, "bk"]], [46, [2, [15, "bl"], "push", [7, [15, "bm"]]], [22, [21, [15, "bk"], [2, [15, "bk"], "toLowerCase", [7]]], [46, [2, [15, "bl"], "push", [7, ["d", [2, [15, "bk"], "toLowerCase", [7]]]]]], [46, [22, [21, [15, "bk"], [2, [15, "bk"], "toUpperCase", [7]]], [46, [2, [15, "bl"], "push", [7, ["d", [2, [15, "bk"], "toUpperCase", [7]]]]]]]]]]], [22, [18, [17, [15, "bl"], "length"], 1], [46, [2, [15, "bj"], "push", [7, [0, [0, "(?:", [2, [15, "bl"], "join", [7, "|"]]], ")"]]]], [46, [2, [15, "bj"], "push", [7, [16, [15, "bl"], 0]]]]]]]], [36, [2, [15, "bj"], "join", [7, ""]]]], [50, "w", [46, "bh", "bi", "bj"], [52, "bk", ["y", [15, "bh"], [15, "bj"]]], [22, [28, [15, "bk"]], [46, [36, [15, "bh"]]]], [22, [28, [17, [15, "bk"], "search"]], [46, [36, [15, "bh"]]]], [41, "bl"], [3, "bl", [17, [15, "bk"], "search"]], [65, "bm", [15, "bi"], [46, [53, [52, "bn", [7, ["u", [15, "bm"]], ["v", [15, "bm"]]]], [65, "bo", [15, "bn"], [46, [53, [52, "bp", [30, [16, [15, "s"], [15, "bo"]], [43, [15, "s"], [15, "bo"], ["b", [0, [0, "([?&]", [15, "bo"]], "=)([^&]*)((?=[&]|$))"], "gi"]]]], [3, "bl", [2, [15, "bl"], "replace", [7, [15, "bp"], [0, [0, "$1", [15, "q"]], "$3"]]]]]]]]]], [22, [20, [15, "bl"], [17, [15, "bk"], "search"]], [46, [36, [15, "bh"]]]], [22, [20, [16, [15, "bl"], 0], "&"], [46, [3, "bl", [2, [15, "bl"], "substring", [7, 1]]]]], [22, [21, [16, [15, "bl"], 0], "?"], [46, [3, "bl", [0, "?", [15, "bl"]]]]], [22, [20, [15, "bl"], "?"], [46, [3, "bl", ""]]], [43, [15, "bk"], "search", [15, "bl"]], [36, ["z", [15, "bk"], [15, "bj"]]]], [50, "y", [46, "bh", "bi"], [22, [20, [15, "bi"], [17, [15, "r"], "PATH"]], [46, [3, "bh", [0, [15, "x"], [15, "bh"]]]]], [36, ["g", [15, "bh"]]]], [50, "z", [46, "bh", "bi"], [41, "bj"], [3, "bj", ""], [22, [20, [15, "bi"], [17, [15, "r"], "URL"]], [46, [53, [41, "bk"], [3, "bk", ""], [22, [30, [17, [15, "bh"], "username"], [17, [15, "bh"], "password"]], [46, [3, "bk", [0, [15, "bk"], [0, [0, [0, [17, [15, "bh"], "username"], [39, [17, [15, "bh"], "password"], ":", ""]], [17, [15, "bh"], "password"]], "@"]]]]], [3, "bj", [0, [0, [0, [17, [15, "bh"], "protocol"], "//"], [15, "bk"]], [17, [15, "bh"], "host"]]]]]], [36, [0, [0, [0, [15, "bj"], [17, [15, "bh"], "pathname"]], [17, [15, "bh"], "search"]], [17, [15, "bh"], "hash"]]]], [50, "ba", [46, "bh", "bi"], [41, "bj"], [3, "bj", [2, [15, "bh"], "replace", [7, [15, "m"], [15, "q"]]]], [22, [30, [20, [15, "bi"], [17, [15, "r"], "URL"]], [20, [15, "bi"], [17, [15, "r"], "PATH"]]], [46, [53, [52, "bk", ["y", [15, "bj"], [15, "bi"]]], [22, [20, [15, "bk"], [44]], [46, [36, [15, "bj"]]]], [52, "bl", [17, [15, "bk"], "search"]], [52, "bm", [2, [15, "bl"], "replace", [7, [15, "n"], [15, "q"]]]], [22, [20, [15, "bl"], [15, "bm"]], [46, [36, [15, "bj"]]]], [43, [15, "bk"], "search", [15, "bm"]], [3, "bj", ["z", [15, "bk"], [15, "bi"]]]]]], [36, [15, "bj"]]], [50, "bb", [46, "bh"], [22, [20, [15, "bh"], [15, "p"]], [46, [36, [17, [15, "r"], "PATH"]]], [46, [22, [21, [2, [15, "o"], "indexOf", [7, [15, "bh"]]], [27, 1]], [46, [36, [17, [15, "r"], "URL"]]], [46, [36, [17, [15, "r"], "TEXT"]]]]]]], [50, "bc", [46, "bh", "bi"], [41, "bj"], [3, "bj", false], [52, "bk", ["f", [15, "bh"]]], [38, [15, "bk"], [46, "string", "array", "object"], [46, [5, [46, [52, "bl", ["ba", [15, "bh"], [15, "bi"]]], [22, [21, [15, "bh"], [15, "bl"]], [46, [36, [15, "bl"]]]], [4]]], [5, [46, [53, [41, "bm"], [3, "bm", 0], [63, [7, "bm"], [23, [15, "bm"], [17, [15, "bh"], "length"]], [33, [15, "bm"], [3, "bm", [0, [15, "bm"], 1]]], [46, [53, [52, "bn", ["bc", [16, [15, "bh"], [15, "bm"]], [17, [15, "r"], "TEXT"]]], [22, [21, [15, "bn"], [44]], [46, [43, [15, "bh"], [15, "bm"], [15, "bn"]], [3, "bj", true]]]]]]], [4]]], [5, [46, [54, "bm", [15, "bh"], [46, [53, [52, "bn", ["bc", [16, [15, "bh"], [15, "bm"]], [17, [15, "r"], "TEXT"]]], [22, [21, [15, "bn"], [44]], [46, [43, [15, "bh"], [15, "bm"], [15, "bn"]], [3, "bj", true]]]]]], [4]]]]], [36, [39, [15, "bj"], [15, "bh"], [44]]]], [50, "bg", [46, "bh", "bi"], [52, "bj", [30, [2, [15, "bh"], "getMetadata", [7, [15, "bf"]]], [7]]], [22, [20, [2, [15, "bj"], "indexOf", [7, [15, "bi"]]], [27, 1]], [46, [2, [15, "bj"], "push", [7, [15, "bi"]]]]], [2, [15, "bh"], "setMetadata", [7, [15, "bf"], [15, "bj"]]]], [52, "b", ["require", "internal.createRegex"]], [52, "c", ["require", "decodeUriComponent"]], [52, "d", ["require", "encodeUriComponent"]], [52, "e", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "f", ["require", "getType"]], [52, "g", ["require", "parseUrl"]], [52, "h", ["require", "internal.registerCcdCallback"]], [52, "i", [17, [15, "a"], "instanceDestinationId"]], [52, "j", [17, [15, "a"], "redactEmail"]], [52, "k", [17, [15, "a"], "redactQueryParams"]], [52, "l", [39, [15, "k"], [2, [15, "k"], "split", [7, ","]], [7]]], [22, [30, [28, [16, [15, "e"], "enableCcdAutoRedaction"]], [1, [28, [17, [15, "l"], "length"]], [28, [15, "j"]]]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "m", ["b", "[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}", "gi"]], [52, "n", ["b", [0, "([A-Z0-9._-]|%25|%2B)+%40[A-Z0-9.-]", "+\\.[A-Z]{2,}"], "gi"]], [52, "o", [7, "page_location", "page_referrer", "page_path", "link_url", "video_url", "form_destination"]], [52, "p", "page_path"], [52, "q", "(redacted)"], [52, "r", [8, "TEXT", 0, "URL", 1, "PATH", 2]], [52, "s", [8]], [52, "t", ["b", "([\\\\^$.|?*+(){}]|\\[|\\[)", "g"]], [52, "x", "http://."], [52, "bd", 15], [52, "be", 16], [52, "bf", "event_usage"], ["h", [15, "i"], [51, "", [7, "bh"], [22, [15, "j"], [46, [53, [52, "bi", [2, [15, "bh"], "getHitKeys", [7]]], [65, "bj", [15, "bi"], [46, [53, [22, [20, [15, "bj"], "_sst_parameters"], [46, [6]]], [52, "bk", [2, [15, "bh"], "getHitData", [7, [15, "bj"]]]], [22, [28, [15, "bk"]], [46, [6]]], [52, "bl", ["bb", [15, "bj"]]], [52, "bm", ["bc", [15, "bk"], [15, "bl"]]], [22, [21, [15, "bm"], [44]], [46, [2, [15, "bh"], "setHitData", [7, [15, "bj"], [15, "bm"]]], ["bg", [15, "bh"], [15, "bd"]]]]]]]]]], [22, [17, [15, "l"], "length"], [46, [65, "bi", [15, "o"], [46, [53, [52, "bj", [2, [15, "bh"], "getHitData", [7, [15, "bi"]]]], [22, [28, [15, "bj"]], [46, [6]]], [52, "bk", [39, [20, [15, "bi"], [15, "p"]], [17, [15, "r"], "PATH"], [17, [15, "r"], "URL"]]], [52, "bl", ["w", [15, "bj"], [15, "l"], [15, "bk"]]], [22, [21, [15, "bl"], [15, "bj"]], [46, [2, [15, "bh"], "setHitData", [7, [15, "bi"], [15, "bl"]]], ["bg", [15, "bh"], [15, "be"]]]]]]]]]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_conversion_marking", [46, "a"], [22, [30, [28, [17, [15, "a"], "conversionRules"]], [20, [17, [17, [15, "a"], "conversionRules"], "length"], 0]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "b", ["require", "internal.copyPreHit"]], [52, "c", ["require", "internal.evaluateBooleanExpression"]], [52, "d", ["require", "internal.registerCcdCallback"]], [52, "e", "is_conversion"], [52, "f", "is_first_visit"], [52, "g", "is_first_visit_conversion"], [52, "h", "is_session_start"], [52, "i", "is_session_start_conversion"], [52, "j", "first_visit"], [52, "k", "session_start"], [41, "l"], [41, "m"], ["d", [17, [15, "a"], "instanceDestinationId"], [51, "", [7, "n"], [52, "o", [8, "preHit", [15, "n"]]], [65, "p", [17, [15, "a"], "conversionRules"], [46, [22, ["c", [17, [15, "p"], "matchingRules"], [15, "o"]], [46, [2, [15, "n"], "setMetadata", [7, [15, "e"], true]], [4]]]]], [22, [2, [15, "n"], "getMetadata", [7, [15, "f"]]], [46, [22, [28, [15, "l"]], [46, [53, [52, "p", ["b", [15, "n"], [8, "omitHitData", true, "omitMetadata", true]]], [2, [15, "p"], "setEventName", [7, [15, "j"]]], [3, "l", [8, "preHit", [15, "p"]]]]]], [65, "p", [17, [15, "a"], "conversionRules"], [46, [22, ["c", [17, [15, "p"], "matchingRules"], [15, "l"]], [46, [2, [15, "n"], "setMetadata", [7, [15, "g"], true]], [4]]]]]]], [22, [2, [15, "n"], "getMetadata", [7, [15, "h"]]], [46, [22, [28, [15, "m"]], [46, [53, [52, "p", ["b", [15, "n"], [8, "omitHitData", true, "omitMetadata", true]]], [2, [15, "p"], "setEventName", [7, [15, "k"]]], [3, "m", [8, "preHit", [15, "p"]]]]]], [65, "p", [17, [15, "a"], "conversionRules"], [46, [22, ["c", [17, [15, "p"], "matchingRules"], [15, "m"]], [46, [2, [15, "n"], "setMetadata", [7, [15, "i"], true]], [4]]]]]]]]], [2, [15, "a"], "gtmOnSuccess", [7]], [36]], [50, "__ccd_ga_first", [46, "a"], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_ga_last", [46, "a"], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_ga_regscope", [46, "a"], [52, "b", [15, "__module_ccdGaRegionScopedSettings"]], [2, [15, "b"], "applyRegionScopedSettings", [7, [15, "a"]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ogt_1p_data_v2", [46, "a"], [50, "j", [46, "m", "n", "o"], [22, [20, [16, [15, "n"], "type"], [15, "o"]], [46, [22, [28, [15, "m"]], [46, [3, "m", [8]]]], [22, [28, [16, [15, "m"], [15, "o"]]], [46, [43, [15, "m"], [15, "o"], [16, [15, "n"], "userData"]]]]]], [36, [15, "m"]]], [50, "k", [46, "m", "n"], [52, "o", [16, [15, "a"], [15, "m"]]], [41, "p"], [22, [20, [15, "o"], "CSS_SELECTOR"], [46, [3, "p", "css_selector"]], [46, [22, [20, [15, "o"], "JS_VAR"], [46, [3, "p", "js_variable"]]]]], [36, [8, "selector_type", [15, "p"], "value", [16, [15, "a"], [15, "n"]]]]], [50, "l", [46, "m", "n", "o", "p"], [22, [28, [16, [15, "a"], [15, "p"]]], [46, [36]]], [43, [15, "m"], [15, "n"], ["k", [15, "o"], [15, "p"]]]], [22, [28, [17, [15, "a"], "isEnabled"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "b", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "c", ["require", "internal.getDestinationIds"]], [52, "d", ["require", "internal.getProductSettingsParameter"]], [52, "e", ["require", "internal.detectUserProvidedData"]], [52, "f", ["require", "internal.setRemoteConfigParameter"]], [52, "g", ["require", "internal.registerCcdCallback"]], [52, "h", [30, ["c"], [7]]], [52, "i", [8, "enable_code", true]], [22, [17, [15, "a"], "isAutoEnabled"], [46, [53, [52, "m", [7]], [22, [1, [17, [15, "a"], "autoCollectExclusionSelectors"], [17, [17, [15, "a"], "autoCollectExclusionSelectors"], "length"]], [46, [53, [41, "o"], [3, "o", 0], [63, [7, "o"], [23, [15, "o"], [17, [17, [15, "a"], "autoCollectExclusionSelectors"], "length"]], [33, [15, "o"], [3, "o", [0, [15, "o"], 1]]], [46, [53, [52, "p", [17, [16, [17, [15, "a"], "autoCollectExclusionSelectors"], [15, "o"]], "exclusionSelector"]], [22, [15, "p"], [46, [2, [15, "m"], "push", [7, [15, "p"]]]]]]]]]]], [52, "n", [39, [17, [15, "a"], "isAutoCollectPiiEnabledFlag"], [17, [15, "a"], "autoEmailEnabled"], true]], [43, [15, "i"], "auto_detect", [8, "email", [15, "n"], "phone", [17, [15, "a"], "autoPhoneEnabled"], "address", [17, [15, "a"], "autoAddressEnabled"], "exclude_element_selectors", [15, "m"]]]]]], [22, [17, [15, "a"], "isManualEnabled"], [46, [53, [52, "m", [8]], [22, [17, [15, "a"], "manualEmailEnabled"], [46, ["l", [15, "m"], "email", "emailType", "emailValue"]]], [22, [17, [15, "a"], "manualPhoneEnabled"], [46, ["l", [15, "m"], "phone", "phoneType", "phoneValue"]]], [22, [17, [15, "a"], "manualAddressEnabled"], [46, [53, [52, "n", [8]], ["l", [15, "n"], "first_name", "firstNameType", "firstNameValue"], ["l", [15, "n"], "last_name", "lastNameType", "lastNameValue"], ["l", [15, "n"], "street", "streetType", "streetValue"], ["l", [15, "n"], "city", "cityType", "cityValue"], ["l", [15, "n"], "region", "regionType", "regionValue"], ["l", [15, "n"], "country", "countryType", "countryValue"], ["l", [15, "n"], "postal_code", "postalCodeType", "postalCodeValue"], [43, [15, "m"], "name_and_address", [7, [15, "n"]]]]]], [43, [15, "i"], "selectors", [15, "m"]]]]], [65, "m", [15, "h"], [46, [53, [41, "n"], [3, "n", [15, "i"]], [22, [1, [20, [2, [15, "m"], "indexOf", [7, "G-"]], 0], [28, [16, [15, "b"], "enableEuidAutoMode"]]], [46, [53, [52, "q", [8, "enable_code", true, "selectors", [16, [15, "i"], "selectors"]]], [3, "n", [15, "q"]]]]], ["f", [15, "m"], "user_data_settings", [15, "n"]], [52, "o", [16, [15, "n"], "auto_detect"]], [22, [28, [15, "o"]], [46, [6]]], [52, "p", [51, "", [7, "q"], [52, "r", [2, [15, "q"], "getMetadata", [7, "user_data_from_automatic"]]], [22, [15, "r"], [46, [36, [15, "r"]]]], [52, "s", ["e", [8, "excludeElementSelectors", [16, [15, "o"], "exclude_element_selectors"], "fieldFilters", [8, "email", [16, [15, "o"], "email"], "phone", [16, [15, "o"], "phone"], "address", [16, [15, "o"], "address"]]]]], [52, "t", [1, [15, "s"], [16, [15, "s"], "elements"]]], [52, "u", [8]], [22, [1, [15, "t"], [18, [17, [15, "t"], "length"], 0]], [46, [53, [41, "v"], [53, [41, "w"], [3, "w", 0], [63, [7, "w"], [23, [15, "w"], [17, [15, "t"], "length"]], [33, [15, "w"], [3, "w", [0, [15, "w"], 1]]], [46, [53, [52, "x", [16, [15, "t"], [15, "w"]]], ["j", [15, "u"], [15, "x"], "email"], [22, [16, [15, "b"], "enableAutoPiiOnPhoneAndAddress"], [46, ["j", [15, "u"], [15, "x"], "phone_number"], [3, "v", ["j", [15, "v"], [15, "x"], "first_name"]], [3, "v", ["j", [15, "v"], [15, "x"], "last_name"]], [3, "v", ["j", [15, "v"], [15, "x"], "country"]], [3, "v", ["j", [15, "v"], [15, "x"], "postal_code"]]]]]]]], [22, [1, [15, "v"], [28, [16, [15, "u"], "address"]]], [46, [43, [15, "u"], "address", [15, "v"]]]]]]], [2, [15, "q"], "setMetadata", [7, "user_data_from_automatic", [15, "u"]]], [36, [15, "u"]]]], ["g", [15, "m"], [51, "", [7, "q"], [2, [15, "q"], "setMetadata", [7, "user_data_from_automatic_getter", [15, "p"]]]]]]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ogt_google_signals", [46, "a"], [52, "b", ["require", "internal.setProductSettingsParameter"]], [52, "c", ["require", "getContainerVersion"]], [52, "d", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "e", [30, [17, [15, "a"], "instanceDestinationId"], [17, ["c"], "containerId"]]], ["b", [15, "e"], "google_signals", [20, [17, [15, "a"], "serverMacroResult"], 1]], [22, [17, [15, "d"], "enableGa4OnoRemarketing"], [46, ["b", [15, "e"], "google_ono", [20, [17, [15, "a"], "serverMacroResult"], 2]]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__set_product_settings", [46, "a"], [2, [15, "a"], "gtmOnSuccess", [7]]], [52, "__module_activities", [13, [41, "$0"], [3, "$0", [51, "", [7], [50, "a", [46], [50, "b", [46, "c", "d"], [36, [39, [15, "d"], ["d", [15, "c"]], [15, "c"]]]], [36, [8, "withRequestContext", [15, "b"]]]], [36, ["a"]]]], ["$0"]]], [52, "__module_ccdGaRegionScopedSettings", [13, [41, "$0"], [3, "$0", [51, "", [7], [50, "a", [46], [50, "j", [46, "l", "m"], [50, "r", [46, "s"], [22, [30, [28, [15, "p"]], [21, [17, [15, "p"], "length"], 2]], [46, [36, false]]], [52, "t", ["k", [15, "s"]]], [53, [41, "u"], [3, "u", 0], [63, [7, "u"], [23, [15, "u"], [17, [15, "t"], "length"]], [33, [15, "u"], [3, "u", [0, [15, "u"], 1]]], [46, [53, [52, "v", [16, [15, "t"], [15, "u"]]], [52, "w", [17, [15, "v"], "countryCode"]], [52, "x", [17, [15, "v"], "regionCode"]], [52, "y", [20, [15, "w"], [15, "p"]]], [52, "z", [30, [28, [15, "x"]], [20, [15, "x"], [15, "q"]]]], [22, [1, [15, "y"], [15, "z"]], [46, [36, true]]]]]]], [36, false]], [22, [28, [17, [15, "l"], "settingsTable"]], [46, [36]]], [52, "n", [30, [17, [15, "l"], "instanceDestinationId"], [17, ["b"], "containerId"]]], [52, "o", ["g", [15, "c"], [15, "m"]]], [52, "p", [13, [41, "$0"], [3, "$0", ["g", [15, "d"], [15, "m"]]], ["$0"]]], [52, "q", [13, [41, "$0"], [3, "$0", ["g", [15, "e"], [15, "m"]]], ["$0"]]], [53, [41, "s"], [3, "s", 0], [63, [7, "s"], [23, [15, "s"], [17, [17, [15, "l"], "settingsTable"], "length"]], [33, [15, "s"], [3, "s", [0, [15, "s"], 1]]], [46, [53, [52, "t", [16, [17, [15, "l"], "settingsTable"], [15, "s"]]], [22, [30, [17, [15, "t"], "disallowAllRegions"], ["r", [17, [15, "t"], "disallowedRegions"]]], [46, [53, [52, "u", [16, [15, "i"], [17, [15, "t"], "redactFieldGroup"]]], [22, [28, [15, "u"]], [46, [6]]], [53, [41, "v"], [3, "v", 0], [63, [7, "v"], [23, [15, "v"], [17, [15, "u"], "length"]], [33, [15, "v"], [3, "v", [0, [15, "v"], 1]]], [46, [53, [52, "w", [16, [15, "u"], [15, "v"]]], ["o", [15, "n"], [17, [15, "w"], "name"], [17, [15, "w"], "value"]]]]]]]]]]]]]], [50, "k", [46, "l"], [52, "m", [7]], [22, [28, [15, "l"]], [46, [36, [15, "m"]]]], [52, "n", [2, [15, "l"], "split", [7, ","]]], [53, [41, "o"], [3, "o", 0], [63, [7, "o"], [23, [15, "o"], [17, [15, "n"], "length"]], [33, [15, "o"], [3, "o", [0, [15, "o"], 1]]], [46, [53, [52, "p", [2, [16, [15, "n"], [15, "o"]], "trim", [7]]], [22, [28, [15, "p"]], [46, [6]]], [52, "q", [2, [15, "p"], "split", [7, "-"]]], [52, "r", [16, [15, "q"], 0]], [52, "s", [39, [20, [17, [15, "q"], "length"], 2], [15, "p"], [44]]], [22, [30, [28, [15, "r"]], [21, [17, [15, "r"], "length"], 2]], [46, [6]]], [22, [1, [21, [15, "s"], [44]], [30, [23, [17, [15, "s"], "length"], 4], [18, [17, [15, "s"], "length"], 6]]], [46, [6]]], [2, [15, "m"], "push", [7, [8, "countryCode", [15, "r"], "regionCode", [15, "s"]]]]]]]], [36, [15, "m"]]], [52, "b", ["require", "getContainerVersion"]], [52, "c", ["require", "internal.setRemoteConfigParameter"]], [52, "d", ["require", "internal.getCountryCode"]], [52, "e", ["require", "internal.getRegionCode"]], [52, "f", [15, "__module_activities"]], [52, "g", [17, [15, "f"], "withRequestContext"]], [41, "h"], [52, "i", [8, "GOOGLE_SIGNALS", [7, [8, "name", "allow_google_signals", "value", false]], "DEVICE_AND_GEO", [7, [8, "name", "geo_granularity", "value", true], [8, "name", "redact_device_info", "value", true]]]], [36, [8, "applyRegionScopedSettings", [15, "j"]]]], [36, ["a"]]]], ["$0"]]]],
    "entities": {
      "__ccd_auto_redact": {
        "2": true,
        "4": true
      },
      "__ccd_conversion_marking": {
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
      "google": ["__ccd_auto_redact", "__ccd_conversion_marking", "__ccd_ga_first", "__ccd_ga_last", "__ccd_ga_regscope", "__ogt_1p_data_v2", "__ogt_google_signals", "__set_product_settings"]
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
    ca = function (a) {
      return a.raw = a;
    },
    ea = function (a, b) {
      a.raw = b;
      return a;
    },
    fa = function (a) {
      var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if ("number" == typeof a.length) return {
        next: ba(a)
      };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    ka = "function" == typeof Object.create ? Object.create : function (a) {
      var b = function () {};
      b.prototype = a;
      return new b();
    },
    la;
  if ("function" == typeof Object.setPrototypeOf) la = Object.setPrototypeOf;else {
    var ma;
    a: {
      var na = {
          a: !0
        },
        oa = {};
      try {
        oa.__proto__ = na;
        ma = oa.a;
        break a;
      } catch (a) {}
      ma = !1;
    }
    la = ma ? function (a, b) {
      a.__proto__ = b;
      if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
      return a;
    } : null;
  }
  var pa = la,
    qa = function (a, b) {
      a.prototype = ka(b.prototype);
      a.prototype.constructor = a;
      if (pa) pa(a, b);else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
        var d = Object.getOwnPropertyDescriptor(b, c);
        d && Object.defineProperty(a, c, d);
      } else a[c] = b[c];
      a.gn = b.prototype;
    }; /*
       Copyright The Closure Library Authors.
       SPDX-License-Identifier: Apache-2.0
       */
  var ra = this || self,
    ta = function (a) {
      return a;
    };
  var ua = function (a, b) {
    this.h = a;
    this.B = b;
  };
  var va = function () {
    this.B = {};
    this.F = {};
  };
  aa = va.prototype;
  aa.get = function (a) {
    return this.B["dust." + a];
  };
  aa.set = function (a, b) {
    a = "dust." + a;
    this.F.hasOwnProperty(a) || (this.B[a] = b);
  };
  aa.Jh = function (a, b) {
    this.set(a, b);
    this.F["dust." + a] = !0;
  };
  aa.has = function (a) {
    return this.B.hasOwnProperty("dust." + a);
  };
  aa.remove = function (a) {
    a = "dust." + a;
    this.F.hasOwnProperty(a) || delete this.B[a];
  };
  var wa = function () {
    this.quota = {};
  };
  wa.prototype.reset = function () {
    this.quota = {};
  };
  var xa = function (a, b) {
    this.W = a;
    this.K = function (c, d, e) {
      return c.apply(d, e);
    };
    this.C = b;
    this.B = new va();
    this.h = this.F = void 0;
  };
  xa.prototype.add = function (a, b) {
    ya(this, a, b, !1);
  };
  var ya = function (a, b, c, d) {
    d ? a.B.Jh(b, c) : a.B.set(b, c);
  };
  xa.prototype.set = function (a, b) {
    !this.B.has(a) && this.C && this.C.has(a) ? this.C.set(a, b) : this.B.set(a, b);
  };
  xa.prototype.get = function (a) {
    return this.B.has(a) ? this.B.get(a) : this.C ? this.C.get(a) : void 0;
  };
  xa.prototype.has = function (a) {
    return !!this.B.has(a) || !(!this.C || !this.C.has(a));
  };
  var za = function (a) {
    var b = new xa(a.W, a);
    a.F && (b.F = a.F);
    b.K = a.K;
    b.h = a.h;
    return b;
  };
  var Aa = function () {},
    Ba = function (a) {
      return "function" === typeof a;
    },
    h = function (a) {
      return "string" === typeof a;
    },
    Ca = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    Da = Array.isArray,
    Ea = function (a, b) {
      if (a && Da(a)) for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    Ga = function (a, b) {
      if (!Ca(a) || !Ca(b) || a > b) a = 0, b = 2147483647;
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    Ja = function (a, b) {
      for (var c = new Ha(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    l = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    Ka = function (a) {
      return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"));
    },
    La = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Ma = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    Na = function (a) {
      var b = [];
      if (Da(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Oa = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Pa = function () {
      return new Date(Date.now());
    },
    Ra = function () {
      return Pa().getTime();
    },
    Ha = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  Ha.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  Ha.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Sa = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Ta = function (a) {
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
    Ua = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Wa = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    Xa = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Ya = function (a, b) {
      var c = z;
      b = b || [];
      for (var d = c, e = 0; e < a.length - 1; e++) {
        if (!d.hasOwnProperty(a[e])) return;
        d = d[a[e]];
        if (0 <= b.indexOf(d)) return;
      }
      return d;
    },
    Za = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    $a = /^\w{1,9}$/,
    ab = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      l(a, function (d, e) {
        $a.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    bb = function (a, b) {
      function c() {
        ++d === b && (e(), e = null, c.done = !0);
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    };
  function cb(a, b) {
    for (var c, d = 0; d < b.length && !(c = db(a, b[d]), c instanceof ua); d++);
    return c;
  }
  function db(a, b) {
    try {
      var c = a.get(String(b[0]));
      if (!c || "function" !== typeof c.invoke) throw Error("Attempting to execute non-function " + b[0] + ".");
      return c.invoke.apply(c, [a].concat(b.slice(1)));
    } catch (e) {
      var d = a.F;
      d && d(e, b.context ? {
        id: b[0],
        line: b.context.line
      } : null);
      throw e;
    }
  }
  ;
  var eb = function () {
    this.C = new wa();
    this.h = new xa(this.C);
  };
  eb.prototype.execute = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 0);
    return this.B(c);
  };
  eb.prototype.B = function (a) {
    for (var b, c = 0; c < arguments.length; c++) b = db(this.h, arguments[c]);
    return b;
  };
  eb.prototype.F = function (a, b) {
    var c = za(this.h);
    c.h = a;
    for (var d, e = 1; e < arguments.length; e++) d = db(c, arguments[e]);
    return d;
  };
  var fb = function () {
    va.call(this);
    this.C = !1;
  };
  qa(fb, va);
  var gb = function (a, b) {
    var c = [],
      d;
    for (d in a.B) if (a.B.hasOwnProperty(d)) switch (d = d.substr(5), b) {
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
  aa = fb.prototype;
  aa.set = function (a, b) {
    this.C || va.prototype.set.call(this, a, b);
  };
  aa.Jh = function (a, b) {
    this.C || va.prototype.Jh.call(this, a, b);
  };
  aa.remove = function (a) {
    this.C || va.prototype.remove.call(this, a);
  };
  aa.Bb = function () {
    this.C = !0;
  };
  aa.tj = function () {
    return this.C;
  }; /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var hb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    ib = function (a) {
      if (null == a) return String(a);
      var b = hb.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    jb = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    kb = function (a) {
      if (!a || "object" != ib(a) || a.nodeType || a == a.window) return !1;
      try {
        if (a.constructor && !jb(a, "constructor") && !jb(a.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || jb(a, b);
    },
    lb = function (a, b) {
      var c = b || ("array" == ib(a) ? [] : {}),
        d;
      for (d in a) if (jb(a, d)) {
        var e = a[d];
        "array" == ib(e) ? ("array" != ib(c[d]) && (c[d] = []), c[d] = lb(e, c[d])) : kb(e) ? (kb(c[d]) || (c[d] = {}), c[d] = lb(e, c[d])) : c[d] = e;
      }
      return c;
    };
  var mb = function (a) {
      for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
      return b;
    },
    nb = function (a) {
      if (void 0 == a || Da(a) || kb(a)) return !0;
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
          return !0;
      }
      return !1;
    },
    ob = function (a) {
      return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10);
    };
  var pb = function (a) {
    this.B = new fb();
    this.h = [];
    this.C = !1;
    a = a || [];
    for (var b in a) a.hasOwnProperty(b) && (ob(b) ? this.h[Number(b)] = a[Number(b)] : this.B.set(b, a[b]));
  };
  aa = pb.prototype;
  aa.toString = function (a) {
    if (a && 0 <= a.indexOf(this)) return "";
    for (var b = [], c = 0; c < this.h.length; c++) {
      var d = this.h[c];
      null === d || void 0 === d ? b.push("") : d instanceof pb ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(String(d));
    }
    return b.join(",");
  };
  const nativeAddEventListener = window.addEventListener;
  aa.set = function (a, b) {
    if (!this.C) if ("length" === a) {
      if (!ob(b)) throw Error("RangeError: Length property must be a valid integer.");
      this.h.length = Number(b);
    } else ob(a) ? this.h[Number(a)] = b : this.B.set(a, b);
  };
  aa.get = function (a) {
    return "length" === a ? this.length() : ob(a) ? this.h[Number(a)] : this.B.get(a);
  };
  aa.length = function () {
    return this.h.length;
  };
  aa.Pb = function () {
    for (var a = gb(this.B, 1), b = 0; b < this.h.length; b++) a.push(b + "");
    return new pb(a);
  };
  aa.remove = function (a) {
    ob(a) ? delete this.h[Number(a)] : this.B.remove(a);
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
    return new pb(this.h.splice.apply(this.h, arguments));
  };
  aa.unshift = function (a) {
    return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments));
  };
  aa.has = function (a) {
    return ob(a) && this.h.hasOwnProperty(a) || this.B.has(a);
  };
  aa.Bb = function () {
    this.C = !0;
    Object.freeze(this.h);
    this.B.Bb();
  };
  aa.tj = function () {
    return this.C;
  };
  var qb = function () {
    fb.call(this);
  };
  qa(qb, fb);
  qb.prototype.Pb = function () {
    return new pb(gb(this, 1));
  };
  function rb() {
    for (var a = sb, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function tb() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var sb, ub;
  function vb(a) {
    sb = sb || tb();
    ub = ub || rb();
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
      b.push(sb[m], sb[n], sb[p], sb[q]);
    }
    return b.join("");
  }
  function wb(a) {
    function b(m) {
      for (; d < a.length;) {
        var n = a.charAt(d++),
          p = ub[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    sb = sb || tb();
    ub = ub || rb();
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
  var xb = {},
    yb = function (a, b) {
      xb[a] = xb[a] || [];
      xb[a][b] = !0;
    },
    zb = function () {
      delete xb.GA4_EVENT;
    },
    Ab = function (a) {
      var b = xb[a];
      if (!b || 0 === b.length) return "";
      for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
      0 < d && c.push(String.fromCharCode(d));
      return vb(c.join("")).replace(/\.+$/, "");
    };
  var Bb = Array.prototype.indexOf ? function (a, b) {
    return Array.prototype.indexOf.call(a, b, void 0);
  } : function (a, b) {
    if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
    for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
    return -1;
  };
  var Cb,
    Db = function () {
      if (void 0 === Cb) {
        var a = null,
          b = ra.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: ta,
              createScript: ta,
              createScriptURL: ta
            });
          } catch (c) {
            ra.console && ra.console.error(c.message);
          }
          Cb = a;
        } else Cb = a;
      }
      return Cb;
    };
  var Eb = function (a) {
    this.h = a;
  };
  Eb.prototype.toString = function () {
    return this.h + "";
  };
  var Fb = function (a) {
      return a instanceof Eb && a.constructor === Eb ? a.h : "type_error:TrustedResourceUrl";
    },
    Gb = {},
    Hb = function (a) {
      var b = a,
        c = Db(),
        d = c ? c.createScriptURL(b) : b;
      return new Eb(d, Gb);
    };
  var Ib = function (a) {
    this.h = a;
  };
  Ib.prototype.toString = function () {
    return this.h.toString();
  };
  var Jb = function (a) {
      return a instanceof Ib && a.constructor === Ib ? a.h : "type_error:SafeUrl";
    },
    Kb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    Lb = {},
    Mb = new Ib("about:invalid#zClosurez", Lb);
  var Nb, Ob;
  a: {
    for (var Pb = ["CLOSURE_FLAGS"], Qb = ra, Rb = 0; Rb < Pb.length; Rb++) if (Qb = Qb[Pb[Rb]], null == Qb) {
      Ob = null;
      break a;
    }
    Ob = Qb;
  }
  var Sb = Ob && Ob[610401301];
  Nb = null != Sb ? Sb : !1;
  function Tb() {
    var a = ra.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var Ub,
    Vb = ra.navigator;
  Ub = Vb ? Vb.userAgentData || null : null;
  function Wb(a) {
    return Nb ? Ub ? Ub.brands.some(function (b) {
      var c = b.brand;
      return c && -1 != c.indexOf(a);
    }) : !1 : !1;
  }
  function Xb(a) {
    return -1 != Tb().indexOf(a);
  }
  ;
  function Yb() {
    return Nb ? !!Ub && 0 < Ub.brands.length : !1;
  }
  function Zb() {
    return Yb() ? !1 : Xb("Opera");
  }
  function $b() {
    return Xb("Firefox") || Xb("FxiOS");
  }
  function ac() {
    return Yb() ? Wb("Chromium") : (Xb("Chrome") || Xb("CriOS")) && !(Yb() ? 0 : Xb("Edge")) || Xb("Silk");
  }
  ;
  var bc = {},
    cc = function (a) {
      this.h = a;
    };
  cc.prototype.toString = function () {
    return this.h.toString();
  };
  var dc = function (a) {
    return a instanceof cc && a.constructor === cc ? a.h : "type_error:SafeHtml";
  }; /*
     SPDX-License-Identifier: Apache-2.0
     */
  var ec = "function" === typeof URL;
  function fc(a) {
    var b;
    a: if (ec) {
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
  ;
  var gc = {};
  var hc = function () {},
    ic = function (a) {
      this.h = a;
    };
  qa(ic, hc);
  ic.prototype.toString = function () {
    return this.h;
  };
  function jc(a, b) {
    var c = [new ic(kc[0].toLowerCase(), gc)];
    if (0 === c.length) throw Error("");
    var d = c.map(function (f) {
        var g;
        if (f instanceof ic) g = f.h;else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (d.every(function (f) {
      return 0 !== e.indexOf(f);
    })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
    a.setAttribute(b, "true");
  }
  function lc(a) {
    var b = a.tagName;
    if ("SCRIPT" === b || "STYLE" === b) throw Error("");
  }
  ;
  function mc(a, b) {
    var c = b instanceof Ib ? Jb(b) : fc(b);
    void 0 !== c && (a.action = c);
  }
  ;
  var nc = ca([""]),
    oc = ea(["\x00"], ["\\0"]),
    pc = ea(["\n"], ["\\n"]),
    qc = ea(["\x00"], ["\\u0000"]);
  function rc(a) {
    return -1 === a.toString().indexOf("`");
  }
  rc(function (a) {
    return a(nc);
  }) || rc(function (a) {
    return a(oc);
  }) || rc(function (a) {
    return a(pc);
  }) || rc(function (a) {
    return a(qc);
  });
  var sc = function (a) {
    this.Ll = a;
  };
  function tc(a) {
    return new sc(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var uc = [tc("data"), tc("http"), tc("https"), tc("mailto"), tc("ftp"), new sc(function (a) {
    return /^[^:]*([/?#]|$)/.test(a);
  })];
  function vc(a, b) {
    b = void 0 === b ? uc : b;
    for (var c = 0; c < b.length; ++c) {
      var d = b[c];
      if (d instanceof sc && d.Ll(a)) return new Ib(a, Lb);
    }
  }
  function wc(a) {
    var b;
    b = void 0 === b ? uc : b;
    return vc(a, b) || Mb;
  }
  ;
  var xc = "title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(" "),
    yc = [["dir", {
      zc: 3,
      conditions: new Map([["dir", new Set(["auto", "ltr", "rtl"])]])
    }], ["async", {
      zc: 3,
      conditions: new Map([["async", new Set(["async"])]])
    }], ["cite", {
      zc: 2
    }], ["loading", {
      zc: 3,
      conditions: new Map([["loading", new Set(["eager", "lazy"])]])
    }], ["poster", {
      zc: 2
    }], ["target", {
      zc: 3,
      conditions: new Map([["target", new Set(["_self", "_blank"])]])
    }]];
  xc.concat(["class", "id"]);
  yc.concat([["style", {
    zc: 4
  }]]);
  "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER".split(" ").concat("STYLE TITLE INPUT TEXTAREA BUTTON LABEL".split(" "));
  xc.concat(["class", "id", "tabindex", "contenteditable", "name"]);
  yc.concat([["style", {
    zc: 4
  }]]);
  function zc(a) {
    var b = a = Cc(a),
      c = Db(),
      d = c ? c.createHTML(b) : b;
    return new cc(d, bc);
  }
  function Cc(a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a;
  }
  ;
  var z = window,
    C = document,
    Dc = navigator,
    Ec = C.currentScript && C.currentScript.src,
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
      var f = C.createElement("script");
      void 0 === d && (d = {});
      void 0 === d.async && (d.async = !0);
      Jc(f, d, Hc);
      f.type = "text/javascript";
      var g;
      g = Hb(Cc(a));
      f.src = Fb(g);
      var k,
        m,
        n,
        p = null == (n = (m = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : n.call(m, "script[nonce]");
      (k = p ? p.nonce || p.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", k);
      Gc(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);else {
        var q = C.getElementsByTagName("script")[0] || C.body || C.head;
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
      g || (g = C.createElement("iframe"), k = !0);
      Jc(g, c, Ic);
      d && l(d, function (n, p) {
        g.dataset[n] = p;
      });
      f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
      if (k) {
        var m = C.body && C.body.lastChild || C.body || C.head;
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
    Qc = function (a, b, c) {
      a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c);
    },
    E = function (a) {
      z.setTimeout(a, 0);
    },
    Rc = function (a, b) {
      return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null;
    },
    Sc = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Tc = function (a) {
      var b = C.createElement("div"),
        c = b,
        d = zc("A<div>" + a + "</div>");
      1 === c.nodeType && lc(c);
      c.innerHTML = dc(d);
      b = b.lastChild;
      for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
      return e;
    },
    Uc = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Vc = function (a) {
      var b;
      try {
        b = Dc.sendBeacon && Dc.sendBeacon(a);
      } catch (c) {
        yb("TAGGING", 15);
      }
      b || Nc(a);
    },
    Wc = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    Xc = function (a) {
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
    Yc = function () {
      var a = z.performance;
      if (a && Ba(a.now)) return a.now();
    },
    Zc = function () {
      return z.performance || void 0;
    };
  var $c = function (a, b) {
      return H(this, a) && H(this, b);
    },
    ad = function (a, b) {
      return H(this, a) === H(this, b);
    },
    bd = function (a, b) {
      return H(this, a) || H(this, b);
    },
    cd = function (a, b) {
      a = H(this, a);
      b = H(this, b);
      return -1 < String(a).indexOf(String(b));
    },
    dd = function (a, b) {
      a = String(H(this, a));
      b = String(H(this, b));
      return a.substring(0, b.length) === b;
    },
    ed = function (a, b) {
      a = H(this, a);
      b = H(this, b);
      switch (a) {
        case "pageLocation":
          var c = z.location.href;
          b instanceof qb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
          return c;
      }
    };
  var hd = function (a, b) {
    fb.call(this);
    this.K = a;
    this.W = b;
  };
  const nativeDispatchEvent = window.dispatchEvent;
  qa(hd, fb);
  hd.prototype.toString = function () {
    return this.K;
  };
  hd.prototype.Pb = function () {
    return new pb(gb(this, 1));
  };
  hd.prototype.invoke = function (a, b) {
    return this.W.apply(new id(this, a), Array.prototype.slice.call(arguments, 1));
  };
  hd.prototype.h = function (a, b) {
    try {
      return this.invoke.apply(this, Array.prototype.slice.call(arguments, 0));
    } catch (c) {}
  };
  var id = function (a, b) {
      this.B = a;
      this.h = b;
    },
    H = function (a, b) {
      return Da(b) ? db(a.h, b) : b;
    },
    J = function (a) {
      return a.B.K;
    };
  var jd = function () {
    this.map = new Map();
  };
  jd.prototype.set = function (a, b) {
    this.map.set(a, b);
  };
  jd.prototype.get = function (a) {
    return this.map.get(a);
  };
  var kd = function () {
    this.keys = [];
    this.values = [];
  };
  kd.prototype.set = function (a, b) {
    this.keys.push(a);
    this.values.push(b);
  };
  kd.prototype.get = function (a) {
    var b = this.keys.indexOf(a);
    if (-1 < b) return this.values[b];
  };
  function ld() {
    try {
      return Map ? new jd() : new kd();
    } catch (a) {
      return new kd();
    }
  }
  ;
  var md = function (a) {
    if (a instanceof md) return a;
    this.h = a;
  };
  md.prototype.toString = function () {
    return String(this.h);
  };
  var od = function (a) {
    fb.call(this);
    this.h = a;
    this.set("then", nd(this));
    this.set("catch", nd(this, !0));
    this.set("finally", nd(this, !1, !0));
  };
  qa(od, qb);
  var nd = function (a, b, c) {
    b = void 0 === b ? !1 : b;
    c = void 0 === c ? !1 : c;
    return new hd("", function (d, e) {
      b && (e = d, d = void 0);
      c && (e = d);
      d instanceof hd || (d = void 0);
      e instanceof hd || (e = void 0);
      var f = za(this.h),
        g = function (m) {
          return function (n) {
            return c ? (m.invoke(f), a.h) : m.invoke(f, n);
          };
        },
        k = a.h.then(d && g(d), e && g(e));
      return new od(k);
    });
  };
  var qd = function (a, b, c) {
      var d = ld(),
        e = function (g, k) {
          for (var m = gb(g, 1), n = 0; n < m.length; n++) k[m[n]] = f(g.get(m[n]));
        },
        f = function (g) {
          var k = d.get(g);
          if (k) return k;
          if (g instanceof pb) {
            var m = [];
            d.set(g, m);
            for (var n = g.Pb(), p = 0; p < n.length(); p++) m[n.get(p)] = f(g.get(n.get(p)));
            return m;
          }
          if (g instanceof od) return g.h;
          if (g instanceof qb) {
            var q = {};
            d.set(g, q);
            e(g, q);
            return q;
          }
          if (g instanceof hd) {
            var r = function () {
              for (var u = Array.prototype.slice.call(arguments, 0), v = 0; v < u.length; v++) u[v] = pd(u[v], b, c);
              var w = new xa(b ? b.W : new wa());
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
          if (g instanceof md && t) return g.h;
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
    pd = function (a, b, c) {
      var d = ld(),
        e = function (g, k) {
          for (var m in g) g.hasOwnProperty(m) && k.set(m, f(g[m]));
        },
        f = function (g) {
          var k = d.get(g);
          if (k) return k;
          if (Da(g) || Ka(g)) {
            var m = new pb([]);
            d.set(g, m);
            for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
            return m;
          }
          if (kb(g)) {
            var p = new qb();
            d.set(g, p);
            e(g, p);
            return p;
          }
          if ("function" === typeof g) {
            var q = new hd("", function (x) {
              for (var y = Array.prototype.slice.call(arguments, 0), A = 0; A < y.length; A++) y[A] = qd(H(this, y[A]), b, c);
              return f((0, this.h.K)(g, g, y));
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
          if (void 0 !== g && w) return new md(g);
        };
      return f(a);
    };
  var rd = function () {
    var a = !1;
    return a;
  };
  var sd = {
    supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
    concat: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      for (var e = 1; e < arguments.length; e++) if (arguments[e] instanceof pb) for (var f = arguments[e], g = 0; g < f.length(); g++) c.push(f.get(g));else c.push(arguments[e]);
      return new pb(c);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++) if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
      return new pb(d);
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
      return new pb(d);
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
      for (var a = mb(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
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
      return new pb(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++) if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = mb(this);
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
  var td = function (a) {
    var b;
    b = Error.call(this, a);
    this.message = b.message;
    "stack" in b && (this.stack = b.stack);
  };
  qa(td, Error);
  var ud = {
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
    vd = new ua("break"),
    wd = new ua("continue"),
    xd = function (a, b) {
      return H(this, a) + H(this, b);
    },
    yd = function (a, b) {
      return H(this, a) && H(this, b);
    },
    zd = function (a, b, c) {
      a = H(this, a);
      b = H(this, b);
      c = H(this, c);
      if (!(c instanceof pb)) throw Error("Error: Non-List argument given to Apply instruction.");
      if (null === a || void 0 === a) {
        var d = "TypeError: Can't read property " + b + " of " + a + ".";
        if (rd()) throw new td(d);
        throw Error(d);
      }
      var e = "number" === typeof a;
      if ("boolean" === typeof a || e) {
        if ("toString" === b) {
          if (e && c.length()) {
            var f = qd(c.get(0));
            try {
              return a.toString(f);
            } catch (y) {}
          }
          return a.toString();
        }
        var g = "TypeError: " + a + "." + b + " is not a function.";
        if (rd()) throw new td(g);
        throw Error(g);
      }
      if ("string" === typeof a) {
        if (ud.hasOwnProperty(b)) {
          var k = 2;
          k = 1;
          var m = qd(c, void 0, k);
          return pd(a[b].apply(a, m), this.h);
        }
        var n = "TypeError: " + b + " is not a function";
        if (rd()) throw new td(n);
        throw Error(n);
      }
      if (a instanceof pb) {
        if (a.has(b)) {
          var p = a.get(b);
          if (p instanceof hd) {
            var q = mb(c);
            q.unshift(this.h);
            return p.invoke.apply(p, q);
          }
          var r = "TypeError: " + b + " is not a function";
          if (rd()) throw new td(r);
          throw Error(r);
        }
        if (0 <= sd.supportedMethods.indexOf(b)) {
          var t = mb(c);
          t.unshift(this.h);
          return sd[b].apply(a, t);
        }
      }
      if (a instanceof hd || a instanceof qb) {
        if (a.has(b)) {
          var u = a.get(b);
          if (u instanceof hd) {
            var v = mb(c);
            v.unshift(this.h);
            return u.invoke.apply(u, v);
          }
          var w = "TypeError: " + b + " is not a function";
          if (rd()) throw new td(w);
          throw Error(w);
        }
        if ("toString" === b) return a instanceof hd ? a.K : a.toString();
        if ("hasOwnProperty" === b) return a.has.apply(a, mb(c));
      }
      if (a instanceof md && "toString" === b) return a.toString();
      var x = "TypeError: Object has no '" + b + "' property.";
      if (rd()) throw new td(x);
      throw Error(x);
    },
    Ad = function (a, b) {
      a = H(this, a);
      if ("string" !== typeof a) throw Error("Invalid key name given for assignment.");
      var c = this.h;
      if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
      var d = H(this, b);
      c.set(a, d);
      return d;
    },
    Bd = function (a) {
      var b = za(this.h),
        c = cb(b, Array.prototype.slice.apply(arguments));
      if (c instanceof ua) return c;
    },
    Cd = function () {
      return vd;
    },
    Dd = function (a) {
      for (var b = H(this, a), c = 0; c < b.length; c++) {
        var d = H(this, b[c]);
        if (d instanceof ua) return d;
      }
    },
    Ed = function (a) {
      for (var b = this.h, c = 0; c < arguments.length - 1; c += 2) {
        var d = arguments[c];
        if ("string" === typeof d) {
          var e = H(this, arguments[c + 1]);
          ya(b, d, e, !0);
        }
      }
    },
    Fd = function () {
      return wd;
    },
    Gd = function (a, b) {
      return new ua(a, H(this, b));
    },
    Hd = function (a, b, c) {
      var d = new pb();
      b = H(this, b);
      for (var e = 0; e < b.length; e++) d.push(b[e]);
      var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
      this.h.add(a, H(this, f));
    },
    Id = function (a, b) {
      return H(this, a) / H(this, b);
    },
    Jd = function (a, b) {
      a = H(this, a);
      b = H(this, b);
      var c = a instanceof md,
        d = b instanceof md;
      return c || d ? c && d ? a.h == b.h : !1 : a == b;
    },
    Kd = function (a) {
      for (var b, c = 0; c < arguments.length; c++) b = H(this, arguments[c]);
      return b;
    };
  function Ld(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = cb(f, d);
      if (g instanceof ua) {
        if ("break" === g.h) break;
        if ("return" === g.h) return g;
      }
    }
  }
  function Md(a, b, c) {
    if ("string" === typeof b) return Ld(a, function () {
      return b.length;
    }, function (f) {
      return f;
    }, c);
    if (b instanceof qb || b instanceof pb || b instanceof hd) {
      var d = b.Pb(),
        e = d.length();
      return Ld(a, function () {
        return e;
      }, function (f) {
        return d.get(f);
      }, c);
    }
  }
  var Nd = function (a, b, c) {
      a = H(this, a);
      b = H(this, b);
      c = H(this, c);
      var d = this.h;
      return Md(function (e) {
        d.set(a, e);
        return d;
      }, b, c);
    },
    Od = function (a, b, c) {
      a = H(this, a);
      b = H(this, b);
      c = H(this, c);
      var d = this.h;
      return Md(function (e) {
        var f = za(d);
        ya(f, a, e, !0);
        return f;
      }, b, c);
    },
    Pd = function (a, b, c) {
      a = H(this, a);
      b = H(this, b);
      c = H(this, c);
      var d = this.h;
      return Md(function (e) {
        var f = za(d);
        f.add(a, e);
        return f;
      }, b, c);
    },
    Rd = function (a, b, c) {
      a = H(this, a);
      b = H(this, b);
      c = H(this, c);
      var d = this.h;
      return Qd(function (e) {
        d.set(a, e);
        return d;
      }, b, c);
    },
    Sd = function (a, b, c) {
      a = H(this, a);
      b = H(this, b);
      c = H(this, c);
      var d = this.h;
      return Qd(function (e) {
        var f = za(d);
        ya(f, a, e, !0);
        return f;
      }, b, c);
    },
    Td = function (a, b, c) {
      a = H(this, a);
      b = H(this, b);
      c = H(this, c);
      var d = this.h;
      return Qd(function (e) {
        var f = za(d);
        f.add(a, e);
        return f;
      }, b, c);
    };
  function Qd(a, b, c) {
    if ("string" === typeof b) return Ld(a, function () {
      return b.length;
    }, function (d) {
      return b[d];
    }, c);
    if (b instanceof pb) return Ld(a, function () {
      return b.length();
    }, function (d) {
      return b.get(d);
    }, c);
    if (rd()) throw new td("The value is not iterable.");
    throw new TypeError("The value is not iterable.");
  }
  var Ud = function (a, b, c, d) {
      function e(p, q) {
        for (var r = 0; r < f.length(); r++) {
          var t = f.get(r);
          q.add(t, p.get(t));
        }
      }
      var f = H(this, a);
      if (!(f instanceof pb)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
      var g = this.h;
      d = H(this, d);
      var k = za(g);
      for (e(g, k); db(k, b);) {
        var m = cb(k, d);
        if (m instanceof ua) {
          if ("break" === m.h) break;
          if ("return" === m.h) return m;
        }
        var n = za(g);
        e(k, n);
        db(n, c);
        k = n;
      }
    },
    Vd = function (a, b, c) {
      var d = this.h,
        e = H(this, b);
      if (!(e instanceof pb)) throw Error("Error: non-List value given for Fn argument names.");
      var f = Array.prototype.slice.call(arguments, 2);
      return new hd(a, function () {
        return function (g) {
          var k = za(d);
          void 0 === k.h && (k.h = this.h.h);
          for (var m = Array.prototype.slice.call(arguments, 0), n = 0; n < m.length; n++) if (m[n] = H(this, m[n]), m[n] instanceof ua) return m[n];
          for (var p = e.get("length"), q = 0; q < p; q++) q < m.length ? k.add(e.get(q), m[q]) : k.add(e.get(q), void 0);
          k.add("arguments", new pb(m));
          var r = cb(k, f);
          if (r instanceof ua) return "return" === r.h ? r.B : r;
        };
      }());
    },
    Wd = function (a) {
      a = H(this, a);
      var b = this.h,
        c = !1;
      if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
      return b.get(a);
    },
    Xd = function (a, b) {
      var c;
      a = H(this, a);
      b = H(this, b);
      if (void 0 === a || null === a) {
        var d = "TypeError: cannot access property of " + a + ".";
        if (rd()) throw new td(d);
        throw Error(d);
      }
      if (a instanceof qb || a instanceof pb || a instanceof hd) c = a.get(b);else if ("string" === typeof a) "length" === b ? c = a.length : ob(b) && (c = a[b]);else if (a instanceof md) return;
      return c;
    },
    Yd = function (a, b) {
      return H(this, a) > H(this, b);
    },
    Zd = function (a, b) {
      return H(this, a) >= H(this, b);
    },
    $d = function (a, b) {
      a = H(this, a);
      b = H(this, b);
      a instanceof md && (a = a.h);
      b instanceof md && (b = b.h);
      return a === b;
    },
    ae = function (a, b) {
      return !$d.call(this, a, b);
    },
    be = function (a, b, c) {
      var d = [];
      H(this, a) ? d = H(this, b) : c && (d = H(this, c));
      var e = cb(this.h, d);
      if (e instanceof ua) return e;
    },
    ce = function (a, b) {
      return H(this, a) < H(this, b);
    },
    de = function (a, b) {
      return H(this, a) <= H(this, b);
    },
    ee = function (a) {
      for (var b = new pb(), c = 0; c < arguments.length; c++) {
        var d = H(this, arguments[c]);
        b.push(d);
      }
      return b;
    },
    fe = function (a) {
      for (var b = new qb(), c = 0; c < arguments.length - 1; c += 2) {
        var d = H(this, arguments[c]) + "",
          e = H(this, arguments[c + 1]);
        b.set(d, e);
      }
      return b;
    },
    ge = function (a, b) {
      return H(this, a) % H(this, b);
    },
    he = function (a, b) {
      return H(this, a) * H(this, b);
    },
    ie = function (a) {
      return -H(this, a);
    },
    je = function (a) {
      return !H(this, a);
    },
    ke = function (a, b) {
      return !Jd.call(this, a, b);
    },
    le = function () {
      return null;
    },
    me = function (a, b) {
      return H(this, a) || H(this, b);
    },
    ne = function (a, b) {
      var c = H(this, a);
      H(this, b);
      return c;
    },
    oe = function (a) {
      return H(this, a);
    },
    pe = function (a) {
      return Array.prototype.slice.apply(arguments);
    },
    qe = function (a) {
      return new ua("return", H(this, a));
    },
    re = function (a, b, c) {
      a = H(this, a);
      b = H(this, b);
      c = H(this, c);
      if (null === a || void 0 === a) {
        var d = "TypeError: Can't set property " + b + " of " + a + ".";
        if (rd()) throw new td(d);
        throw Error(d);
      }
      (a instanceof hd || a instanceof pb || a instanceof qb) && a.set(b, c);
      return c;
    },
    se = function (a, b) {
      return H(this, a) - H(this, b);
    },
    te = function (a, b, c) {
      a = H(this, a);
      var d = H(this, b),
        e = H(this, c);
      if (!Da(d) || !Da(e)) throw Error("Error: Malformed switch instruction.");
      for (var f, g = !1, k = 0; k < d.length; k++) if (g || a === H(this, d[k])) if (f = H(this, e[k]), f instanceof ua) {
        var m = f.h;
        if ("break" === m) return;
        if ("return" === m || "continue" === m) return f;
      } else g = !0;
      if (e.length === d.length + 1 && (f = H(this, e[e.length - 1]), f instanceof ua && ("return" === f.h || "continue" === f.h))) return f;
    },
    we = function (a, b, c) {
      return H(this, a) ? H(this, b) : H(this, c);
    },
    xe = function (a) {
      a = H(this, a);
      return a instanceof hd ? "function" : typeof a;
    },
    ye = function (a) {
      for (var b = this.h, c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        "string" !== typeof d || b.add(d, void 0);
      }
    },
    ze = function (a, b, c, d) {
      var e = H(this, d);
      if (H(this, c)) {
        var f = cb(this.h, e);
        if (f instanceof ua) {
          if ("break" === f.h) return;
          if ("return" === f.h) return f;
        }
      }
      for (; H(this, a);) {
        var g = cb(this.h, e);
        if (g instanceof ua) {
          if ("break" === g.h) break;
          if ("return" === g.h) return g;
        }
        H(this, b);
      }
    },
    Ae = function (a) {
      return ~Number(H(this, a));
    },
    Be = function (a, b) {
      return Number(H(this, a)) << Number(H(this, b));
    },
    Ce = function (a, b) {
      return Number(H(this, a)) >> Number(H(this, b));
    },
    De = function (a, b) {
      return Number(H(this, a)) >>> Number(H(this, b));
    },
    Ee = function (a, b) {
      return Number(H(this, a)) & Number(H(this, b));
    },
    Fe = function (a, b) {
      return Number(H(this, a)) ^ Number(H(this, b));
    },
    Ge = function (a, b) {
      return Number(H(this, a)) | Number(H(this, b));
    },
    He = function () {},
    Ie = function (a, b, c, d, e) {
      var f = !0;
      try {
        var g = H(this, c);
        if (g instanceof ua) return g;
      } catch (q) {
        if (!(q instanceof td && a)) throw f = q instanceof td, q;
        var k = za(this.h);
        k.add(b, new md(q));
        var m = H(this, d),
          n = cb(k, m);
        if (n instanceof ua) return n;
      } finally {
        if (f && void 0 !== e) {
          var p = H(this, e);
          if (p instanceof ua) return p;
        }
      }
    };
  var Ke = function () {
    this.h = new eb();
    Je(this);
  };
  Ke.prototype.execute = function (a) {
    return this.h.B(a);
  };
  var Je = function (a) {
    var b = function (c, d) {
      var e = new hd(String(c), d);
      e.Bb();
      a.h.h.set(String(c), e);
    };
    b("map", fe);
    b("and", $c);
    b("contains", cd);
    b("equals", ad);
    b("or", bd);
    b("startsWith", dd);
    b("variable", ed);
  };
  var Me = function () {
    this.h = new eb();
    Le(this);
  };
  Me.prototype.execute = function (a) {
    return Ne(this.h.B(a));
  };
  var Oe = function (a, b, c) {
      return Ne(a.h.F(b, c));
    },
    Le = function (a) {
      var b = function (c, d) {
        var e = String(c),
          f = new hd(e, d);
        f.Bb();
        a.h.h.set(e, f);
      };
      b(0, xd);
      b(1, yd);
      b(2, zd);
      b(3, Ad);
      b(56, Ee);
      b(57, Be);
      b(58, Ae);
      b(59, Ge);
      b(60, Ce);
      b(61, De);
      b(62, Fe);
      b(53, Bd);
      b(4, Cd);
      b(5, Dd);
      b(52, Ed);
      b(6, Fd);
      b(49, Gd);
      b(7, ee);
      b(8, fe);
      b(9, Dd);
      b(50, Hd);
      b(10, Id);
      b(12, Jd);
      b(13, Kd);
      b(51, Vd);
      b(47, Nd);
      b(54, Od);
      b(55, Pd);
      b(63, Ud);
      b(64, Rd);
      b(65, Sd);
      b(66, Td);
      b(15, Wd);
      b(16, Xd);
      b(17, Xd);
      b(18, Yd);
      b(19, Zd);
      b(20, $d);
      b(21, ae);
      b(22, be);
      b(23, ce);
      b(24, de);
      b(25, ge);
      b(26, he);
      b(27, ie);
      b(28, je);
      b(29, ke);
      b(45, le);
      b(30, me);
      b(32, ne);
      b(33, ne);
      b(34, oe);
      b(35, oe);
      b(46, pe);
      b(36, qe);
      b(43, re);
      b(37, se);
      b(38, te);
      b(39, we);
      b(67, Ie);
      b(40, xe);
      b(44, He);
      b(41, ye);
      b(42, ze);
    };
  function Ne(a) {
    if (a instanceof ua || a instanceof hd || a instanceof pb || a instanceof qb || a instanceof md || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a) return a;
  }
  ;
  function Pe(a) {
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
  function Qe(a) {
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
  function Re(a, b) {
    var c = a[1] || 0,
      d = a[2] || 0;
    switch (b) {
      case 0:
        return "G1" + Pe(c) + Pe(d);
      case 1:
        return "G2" + Qe(c) + Qe(d);
      default:
        return "g1--";
    }
  }
  ;
  var Se = function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        }
      };
    };
    return {
      Sj: a("consent"),
      Sh: a("convert_case_to"),
      Th: a("convert_false_to"),
      Uh: a("convert_null_to"),
      Vh: a("convert_true_to"),
      Wh: a("convert_undefined_to"),
      Mm: a("debug_mode_metadata"),
      xa: a("function"),
      Og: a("instance_name"),
      Bk: a("live_only"),
      Ck: a("malware_disabled"),
      Dk: a("metadata"),
      Gk: a("original_activity_id"),
      Tm: a("original_vendor_template_id"),
      Sm: a("once_on_load"),
      Fk: a("once_per_event"),
      Si: a("once_per_load"),
      Xm: a("priority_override"),
      Ym: a("respected_consent_types"),
      Wi: a("setup_tags"),
      ne: a("tag_id"),
      bj: a("teardown_tags")
    };
  }();
  const nativePostMessage = window.postMessage;
  var of = [],
    pf = function (a) {
      return void 0 == of[a] ? !1 : of[a];
    };
  var qf;
  var rf = [],
    tf = [],
    uf = [],
    vf = [],
    wf = [],
    xf = {},
    yf,
    zf,
    Af = function (a) {
      zf = zf || a;
    },
    Bf = function (a) {},
    Cf,
    Df = [],
    Ef = function (a, b) {
      var c = {};
      c[Se.xa] = "__" + a;
      for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
      return c;
    },
    Ff = function (a, b) {
      var c = a[Se.xa],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = xf[c],
        f = b && 2 === b.type && d.Eh && e && -1 !== Df.indexOf(c),
        g = {},
        k = {},
        m;
      for (m in a) a.hasOwnProperty(m) && 0 === m.indexOf("vtp_") && (e && d && d.ij && d.ij(a[m]), e && (g[m] = a[m]), !e || f) && (k[m.substr(4)] = a[m]);
      e && d && d.gj && (g.vtp_gtmCachedValues = d.gj);
      if (b) {
        if (null == b.name) {
          var n;
          a: {
            var p = b.index;
            if (null == p) n = "";else {
              var q;
              switch (b.type) {
                case 2:
                  q = rf[p];
                  break;
                case 1:
                  q = vf[p];
                  break;
                default:
                  n = "";
                  break a;
              }
              var r = q && q[Se.Og];
              n = r ? String(r) : "";
            }
          }
          b.name = n;
        }
        e && (g.vtp_gtmEntityIndex = b.index, g.vtp_gtmEntityName = b.name);
      }
      var t, u;
      e && (t = e(g));
      if (!e || f) u = qf(c, k, b);
      f && d && (nb(t) ? typeof t !== typeof u && d.Eh(d.id, c) : t !== u && d.Eh(d.id, c));
      return e ? t : u;
    },
    Hf = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = Gf(a[e], b, c));
      return d;
    },
    Gf = function (a, b, c) {
      if (Da(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(Gf(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = rf[f];
            if (!g || b.lh(g)) return;
            c[f] = !0;
            var k = String(g[Se.Og]);
            try {
              var m = Hf(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = Ff(m, {
                event: b,
                index: f,
                type: 2,
                name: k
              });
              Cf && (d = Cf.Rk(d, m));
            } catch (y) {
              b.vj && b.vj(y, Number(f), k), d = !1;
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2) d[Gf(a[n], b, c)] = Gf(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = Gf(a[q], b, c);
              zf && (p = p || zf.Il(r));
              d.push(r);
            }
            return zf && p ? zf.Uk(d) : d.join("");
          case "escape":
            d = Gf(a[1], b, c);
            if (zf && Da(a[1]) && "macro" === a[1][0] && zf.Jl(a)) return zf.hm(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) Te[a[t]] && (d = Te[a[t]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!vf[u]) throw Error("Unable to resolve tag reference " + u + ".");
            return d = {
              mj: a[2],
              index: u
            };
          case "zb":
            var v = {
              arg0: a[2],
              arg1: a[3],
              ignore_case: a[5]
            };
            v[Se.xa] = a[1];
            var w = If(v, b, c),
              x = !!a[4];
            return x || 2 !== w ? x !== (1 === w) : null;
          default:
            throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
        }
      }
      return a;
    },
    If = function (a, b, c) {
      try {
        return yf(Hf(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    },
    Jf = function (a) {
      var b = a[Se.xa];
      if (!b) throw Error("Error: No function name given for function call.");
      return !!xf[b];
    };
  var Kf = function (a, b, c) {
    var d;
    d = Error.call(this, c);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.h = a;
  };
  qa(Kf, Error);
  function Lf(a, b) {
    if (Da(a)) {
      Object.defineProperty(a, "context", {
        value: {
          line: b[0]
        }
      });
      for (var c = 1; c < a.length; c++) Lf(a[c], b[c]);
    }
  }
  ;
  var Mf = function (a, b) {
    var c;
    c = Error.call(this);
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.Zl = a;
    this.B = b;
    this.h = [];
  };
  qa(Mf, Error);
  var Of = function () {
    return function (a, b) {
      a instanceof Mf || (a = new Mf(a, Nf));
      b && a.h.push(b);
      throw a;
    };
  };
  function Nf(a) {
    if (!a.length) return a;
    a.push({
      id: "main",
      line: 0
    });
    for (var b = a.length - 1; 0 < b; b--) Ca(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  ;
  var Rf = function (a) {
      function b(r) {
        for (var t = 0; t < r.length; t++) d[r[t]] = !0;
      }
      for (var c = [], d = [], e = Pf(a), f = 0; f < tf.length; f++) {
        var g = tf[f],
          k = Qf(g, e);
        if (k) {
          for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(g.block || []);
        } else null === k && b(g.block || []);
      }
      for (var p = [], q = 0; q < vf.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    Qf = function (a, b) {
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
    Pf = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = If(uf[c], a));
        return b[c];
      };
    };
  var Sf = {
    Rk: function (a, b) {
      b[Se.Sh] && "string" === typeof a && (a = 1 == b[Se.Sh] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Se.Uh) && null === a && (a = b[Se.Uh]);
      b.hasOwnProperty(Se.Wh) && void 0 === a && (a = b[Se.Wh]);
      b.hasOwnProperty(Se.Vh) && !0 === a && (a = b[Se.Vh]);
      b.hasOwnProperty(Se.Th) && !1 === a && (a = b[Se.Th]);
      return a;
    }
  };
  var Tf = function () {
    this.h = {};
  };
  function Uf(a, b, c, d) {
    if (a) for (var e = 0; e < a.length; e++) {
      var f = void 0,
        g = "A policy function denied the permission request";
      try {
        f = a[e].call(void 0, b, c, d), g += ".";
      } catch (k) {
        g = "string" === typeof k ? g + (": " + k) : k instanceof Error ? g + (": " + k.message) : g + ".";
      }
      if (!f) throw new Kf(c, d, g);
    }
  }
  function Vf(a, b, c) {
    return function () {
      var d = arguments[0];
      if (d) {
        var e = a.h[d],
          f = a.h.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          Uf(e, b, d, g);
          Uf(f, b, d, g);
        }
      }
    };
  }
  ;
  var Zf = function () {
      var a = data.permissions || {},
        b = Wf.ctid,
        c = this;
      this.B = new Tf();
      this.h = {};
      var d = {},
        e = Vf(this.B, b, function () {
          var f = arguments[0];
          return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {};
        });
      l(a, function (f, g) {
        var k = {};
        l(g, function (m, n) {
          var p = Xf(m, n);
          k[m] = p.assert;
          d[m] || (d[m] = p.J);
        });
        c.h[f] = function (m, n) {
          var p = k[m];
          if (!p) throw Yf(m, {}, "The requested permission " + m + " is not configured.");
          var q = Array.prototype.slice.call(arguments, 0);
          p.apply(void 0, q);
          e.apply(void 0, q);
        };
      });
    },
    ag = function (a) {
      return $f.h[a] || function () {};
    };
  function Xf(a, b) {
    var c = Ef(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Yf;
    try {
      return Ff(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new Kf(e, {}, "Permission " + e + " is unknown.");
        },
        J: function () {
          for (var e = {}, f = 0; f < arguments.length; ++f) e["arg" + (f + 1)] = arguments[f];
          return e;
        }
      };
    }
  }
  function Yf(a, b, c) {
    return new Kf(a, b, c);
  }
  ;
  var bg = !1;
  var cg = {};
  cg.Jm = Ma('');
  cg.Wk = Ma('');
  var dg = bg,
    eg = cg.Wk,
    fg = cg.Jm;
  var jg = function (a) {
      var b = {},
        c = 0;
      l(a, function (e, f) {
        if (null != f) if (f = ("" + f).replace(/~/g, "~~"), gg.hasOwnProperty(e)) b[gg[e]] = f;else if (hg.hasOwnProperty(e)) {
          var g = hg[e],
            k = f;
          b.hasOwnProperty(g) || (b[g] = k);
        } else if ("category" === e) for (var m = f.split("/", 5), n = 0; n < m.length; n++) {
          var p = ig[n],
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
    gg = {
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
    hg = {
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
    ig = ["ca", "c2", "c3", "c4", "c5"];
  var kg = function (a) {
      var b = [];
      l(a, function (c, d) {
        null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)));
      });
      return b.join("&");
    },
    lg = function (a, b, c, d) {
      this.Pa = a.Pa;
      this.Cc = a.Cc;
      this.eh = a.eh;
      this.B = b;
      this.F = c;
      this.C = kg(a.Pa);
      this.h = kg(a.eh);
      this.K = this.h.length;
      if (d && 16384 < this.K) throw Error("EVENT_TOO_LARGE");
    };
  var mg = function () {
    this.events = [];
    this.h = this.Pa = "";
    this.C = 0;
    this.B = !1;
  };
  mg.prototype.add = function (a) {
    return this.F(a) ? (this.events.push(a), this.Pa = a.C, this.h = a.B, this.C += a.K, this.B = a.F, !0) : !1;
  };
  mg.prototype.F = function (a) {
    var b = 20 > this.events.length && 16384 > a.K + this.C,
      c = this.Pa === a.C && this.h === a.B && this.B === a.F;
    return 0 == this.events.length || b && c;
  };
  var ng = function (a, b) {
      l(a, function (c, d) {
        null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d));
      });
    },
    og = function (a, b) {
      var c = [];
      a.C && c.push(a.C);
      b && c.push("_s=" + b);
      ng(a.Cc, c);
      var d = !1;
      a.h && (c.push(a.h), d = !0);
      var e = c.join("&"),
        f = "",
        g = e.length + a.B.length + 1;
      d && 2048 < g && (f = c.pop(), e = c.join("&"));
      return {
        yh: e,
        body: f
      };
    },
    pg = function (a, b) {
      var c = a.events;
      if (1 == c.length) return og(c[0], b);
      var d = [];
      a.Pa && d.push(a.Pa);
      for (var e = {}, f = 0; f < c.length; f++) l(c[f].Cc, function (t, u) {
        null != u && (e[t] = e[t] || {}, e[t][String(u)] = e[t][String(u)] + 1 || 1);
      });
      var g = {};
      l(e, function (t, u) {
        var v,
          w = -1,
          x = 0;
        l(u, function (y, A) {
          x += A;
          var B = (y.length + t.length + 2) * (A - 1);
          B > w && (v = y, w = B);
        });
        x == c.length && (g[t] = v);
      });
      ng(g, d);
      b && d.push("_s=" + b);
      for (var k = d.join("&"), m = [], n = {}, p = 0; p < c.length; n = {
        Hf: n.Hf
      }, p++) {
        var q = [];
        n.Hf = {};
        l(c[p].Cc, function (t) {
          return function (u, v) {
            g[u] != "" + v && (t.Hf[u] = v);
          };
        }(n));
        c[p].h && q.push(c[p].h);
        ng(n.Hf, q);
        m.push(q.join("&"));
      }
      var r = m.join("\r\n");
      return {
        yh: k,
        body: r
      };
    };
  var tg = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
  function ug(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var vg = new Ha();
  function wg(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = vg.get(e);
      f || (f = new RegExp(b, d), vg.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function xg(a, b) {
    return 0 <= String(a).indexOf(String(b));
  }
  const nativeGetItem = localStorage.getItem;
  function yg(a, b) {
    return String(a) === String(b);
  }
  function zg(a, b) {
    return Number(a) >= Number(b);
  }
  function Ag(a, b) {
    return Number(a) <= Number(b);
  }
  function Bg(a, b) {
    return Number(a) > Number(b);
  }
  function Cg(a, b) {
    return Number(a) < Number(b);
  }
  function Dg(a, b) {
    return 0 === String(a).indexOf(String(b));
  }
  ;
  var Mg = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Ng(a, b) {
    return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[a << 2 | b];
  }
  ;
  var Og = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
    Pg = {
      Fn: "function",
      PixieMap: "Object",
      List: "Array"
    },
    K = function (a, b, c) {
      for (var d = 0; d < b.length; d++) {
        var e = Og.exec(b[d]);
        if (!e) throw Error("Internal Error in " + a);
        var f = e[1],
          g = "!" === e[2],
          k = e[3],
          m = c[d];
        if (null == m) {
          if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
        } else if ("*" !== k) {
          var n = typeof m;
          m instanceof hd ? n = "Fn" : m instanceof pb ? n = "List" : m instanceof qb ? n = "PixieMap" : m instanceof md && (n = "OpaqueValue");
          if (n != k) throw Error("Error in " + a + ". Argument " + f + " has type " + (Pg[n] || n) + ", which does not match required type " + (Pg[k] || k) + ".");
        }
      }
    };
  function Qg(a) {
    return "" + a;
  }
  function Rg(a, b) {
    var c = [];
    return c;
  }
  ;
  var Sg = function (a, b) {
      var c = new hd(a, function () {
        for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = H(this, d[e]);
        try {
          return b.apply(this, d);
        } catch (g) {
          if (rd()) throw new td(g.message);
          throw g;
        }
      });
      c.Bb();
      return c;
    },
    Tg = function (a, b) {
      var c = new qb(),
        d;
      for (d in b) if (b.hasOwnProperty(d)) {
        var e = b[d];
        Ba(e) ? c.set(d, Sg(a + "_" + d, e)) : kb(e) ? c.set(d, Tg(a + "_" + d, e)) : (Ca(e) || h(e) || "boolean" === typeof e) && c.set(d, e);
      }
      c.Bb();
      return c;
    };
  var Ug = function (a, b) {
    K(J(this), ["apiName:!string", "message:?string"], arguments);
    var c = {},
      d = new qb();
    return d = Tg("AssertApiSubject", c);
  };
  const nativeSetItem = localStorage.setItem;
  var Vg = function (a, b) {
    K(J(this), ["actual:?*", "message:?string"], arguments);
    if (a instanceof od) throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
    var c = {},
      d = new qb();
    return d = Tg("AssertThatSubject", c);
  };
  function Wg(a) {
    return function () {
      for (var b = [], c = this.h, d = 0; d < arguments.length; ++d) b.push(qd(arguments[d], c));
      return pd(a.apply(null, b));
    };
  }
  var Yg = function () {
    for (var a = Math, b = Xg, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = Wg(a[e].bind(a)));
    }
    return c;
  };
  var Zg = function (a) {
    var b;
    return b;
  };
  var $g = function (a) {
    var b;
    K(J(this), ["uri:!string"], arguments);
    try {
      b = decodeURIComponent(a);
    } catch (c) {}
    return b;
  };
  var ah = function (a) {
    try {
      return encodeURI(a);
    } catch (b) {}
  };
  var bh = function (a) {
    try {
      return encodeURIComponent(a);
    } catch (b) {}
  };
  function ch(a, b) {
    var c = !1;
    K(J(this), ["booleanExpression:!string", "context:?PixieMap"], arguments);
    var d = JSON.parse(a);
    if (!d) throw Error("Invalid boolean expression string was given.");
    var e = b ? qd(b) : {};
    c = dh(d, e);
    return c;
  }
  var eh = function (a, b) {
      for (var c = 0; c < b.length; c++) {
        if (void 0 === a) return;
        a = a[b[c]];
      }
      return a;
    },
    fh = function (a, b) {
      var c = b.preHit;
      if (c) {
        var d = a[0];
        switch (d) {
          case "hitData":
            return 2 > a.length ? void 0 : eh(c.getHitData(a[1]), a.slice(2));
          case "metadata":
            return 2 > a.length ? void 0 : eh(c.getMetadata(a[1]), a.slice(2));
          case "eventName":
            return c.getEventName();
          case "destinationId":
            return c.getDestinationId();
          default:
            throw Error(d + " is not a valid field that can be accessed\n                      from PreHit data.");
        }
      }
    },
    gh = function (a, b) {
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
                  c = fh(e, b);
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
        if (void 0 !== a.booleanExpressionValue) return dh(a.booleanExpressionValue, b);
        if (void 0 !== a.booleanValue) return !!a.booleanValue;
        if (void 0 !== a.stringValue) return String(a.stringValue);
        if (void 0 !== a.integerValue) return Number(a.integerValue);
        if (void 0 !== a.doubleValue) return Number(a.doubleValue);
        throw Error("Unknown field used for variable of type ExpressionValue:" + a);
      }
    },
    dh = function (a, b) {
      var c = a.args;
      if (!Da(c) || 0 === c.length) throw Error('Invalid boolean expression format. Expected "args":' + c + " property to\n         be non-empty array.");
      var d = function (g) {
        return gh(g, b);
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
          return wg(d(c[0]), d(c[1]), !1);
        case 5:
          return yg(d(c[0]), d(c[1]));
        case 6:
          return Dg(d(c[0]), d(c[1]));
        case 7:
          return ug(d(c[0]), d(c[1]));
        case 8:
          return xg(d(c[0]), d(c[1]));
        case 9:
          return Cg(d(c[0]), d(c[1]));
        case 10:
          return Ag(d(c[0]), d(c[1]));
        case 11:
          return Bg(d(c[0]), d(c[1]));
        case 12:
          return zg(d(c[0]), d(c[1]));
        default:
          throw Error('Invalid boolean expression format. Expected "type" property tobe a positive integer which is less than 13.');
      }
    };
  ch.D = "internal.evaluateBooleanExpression";
  var hh = function (a) {
    K(J(this), ["message:?string"], arguments);
  };
  var ih = function (a, b) {
    K(J(this), ["min:!number", "max:!number"], arguments);
    return Ga(a, b);
  };
  var jh = function () {
    return new Date().getTime();
  };
  var kh = function (a) {
    if (null === a) return "null";
    if (a instanceof pb) return "array";
    if (a instanceof hd) return "function";
    if (a instanceof md) {
      a = a.h;
      if (void 0 === a.constructor || void 0 === a.constructor.name) {
        var b = String(a);
        return b.substring(8, b.length - 1);
      }
      return String(a.constructor.name);
    }
    return typeof a;
  };
  var lh = function (a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          (dg || fg) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return pd(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(qd(c));
      })
    };
  };
  var mh = function (a) {
    return La(qd(a, this.h));
  };
  var nh = function (a) {
    return Number(qd(a, this.h));
  };
  var oh = function (a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a.toString();
  };
  var ph = function (a, b, c) {
    var d = null,
      e = !1;
    return e ? d : null;
  };
  var Xg = "floor ceil round max min abs pow sqrt".split(" ");
  var qh = function () {
      var a = {};
      return {
        nl: function (b) {
          return a.hasOwnProperty(b) ? a[b] : void 0;
        },
        Bm: function (b, c) {
          a[b] = c;
        },
        reset: function () {
          a = {};
        }
      };
    },
    rh = function (a, b) {
      return function () {
        var c = Array.prototype.slice.call(arguments, 0);
        c.unshift(b);
        return hd.prototype.invoke.apply(a, c);
      };
    },
    sh = function (a, b) {
      K(J(this), ["apiName:!string", "mock:?*"], arguments);
    };
  var th = {};
  th.keys = function (a) {
    return new pb();
  };
  th.values = function (a) {
    return new pb();
  };
  th.entries = function (a) {
    return new pb();
  };
  th.freeze = function (a) {
    return a;
  };
  th.delete = function (a, b) {
    return !1;
  };
  var L = function (a, b, c) {
    var d = a.h.h;
    if (!d) throw Error("Missing program state.");
    if (d.om) {
      try {
        d.fj.apply(null, Array.prototype.slice.call(arguments, 1));
      } catch (e) {
        throw yb("TAGGING", 21), e;
      }
      return;
    }
    d.fj.apply(null, Array.prototype.slice.call(arguments, 1));
  };
  var vh = function () {
    this.h = {};
    this.B = {};
  };
  vh.prototype.get = function (a, b) {
    var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0;
    return c;
  };
  vh.prototype.add = function (a, b, c) {
    if (this.h.hasOwnProperty(a)) throw "Attempting to add a function which already exists: " + a + ".";
    if (this.B.hasOwnProperty(a)) throw "Attempting to add an API with an existing private API name: " + a + ".";
    this.h[a] = c ? void 0 : Ba(b) ? Sg(a, b) : Tg(a, b);
  };
  function wh(a, b) {
    var c = void 0;
    return c;
  }
  ;
  function xh() {
    var a = {};
    return a;
  }
  ;
  var zh = function (a) {
      return yh ? C.querySelectorAll(a) : null;
    },
    Ah = function (a, b) {
      if (!yh) return null;
      if (Element.prototype.closest) try {
        return a.closest(b);
      } catch (e) {
        return null;
      }
      var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
        d = a;
      if (!C.documentElement.contains(d)) return null;
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
    Bh = !1;
  if (C.querySelectorAll) try {
    var Ch = C.querySelectorAll(":root");
    Ch && 1 == Ch.length && Ch[0] == C.documentElement && (Bh = !0);
  } catch (a) {}
  var yh = Bh;
  var M = function (a) {
    yb("GTM", a);
  };
  var Dh = function (a) {
      return null == a ? "" : h(a) ? Oa(String(a)) : "e0";
    },
    Fh = function (a) {
      return a.replace(Eh, "");
    },
    Hh = function (a) {
      return Gh(a.replace(/\s/g, ""));
    },
    Gh = function (a) {
      return Oa(a.replace(Ih, "").toLowerCase());
    },
    Kh = function (a) {
      a = a.replace(/[\s-()/.]/g, "");
      "+" !== a.charAt(0) && (a = "+" + a);
      return Jh.test(a) ? a : "e0";
    },
    Mh = function (a) {
      var b = a.toLowerCase().split("@");
      if (2 == b.length) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
        c = c + "@" + b[1];
        if (Lh.test(c)) return c;
      }
      return "e0";
    },
    Ph = function (a, b) {
      window.Promise || b([]);
      Promise.all(a.map(function (c) {
        return c.value && -1 !== Nh.indexOf(c.name) ? Oh(c.value).then(function (d) {
          c.value = d;
        }) : Promise.resolve();
      })).then(function () {
        b(a);
      }).catch(function () {
        b([]);
      });
    },
    Oh = function (a) {
      if ("" === a || "e0" === a) return Promise.resolve(a);
      if (z.crypto && z.crypto.subtle) {
        if (Qh.test(a)) return Promise.resolve(a);
        try {
          var b = Rh(a);
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
    Rh = function (a) {
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
    Ih = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
    Lh = /^\S+@\S+\.\S+$/,
    Jh = /^\+\d{10,15}$/,
    Eh = /[.~]/g,
    Sh = /^[0-9A-Za-z_-]{43}$/,
    Qh = /^[0-9A-Fa-f]{64}$/,
    Th = {},
    Uh = (Th.email = "em", Th.phone_number = "pn", Th.first_name = "fn", Th.last_name = "ln", Th.street = "sa", Th.city = "ct", Th.region = "rg", Th.country = "co", Th.postal_code = "pc", Th.error_code = "ec", Th),
    Vh = {},
    Wh = (Vh.email = "sha256_email_address", Vh.phone_number = "sha256_phone_number", Vh.first_name = "sha256_first_name", Vh.last_name = "sha256_last_name", Vh.street = "sha256_street", Vh),
    Xh = function (a, b) {
      function c(t, u, v, w) {
        var x = Dh(t);
        "" !== x && (Qh.test(x) ? m.push({
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
        if (h(v) || Da(v)) {
          v = Da(t) ? t : [t];
          for (var w = 0; w < v.length; ++w) {
            var x = Dh(v[w]),
              y = Qh.test(x);
            u && !y && M(89);
            !u && y && M(88);
          }
        }
      }
      function e(t, u) {
        var v = t[u];
        d(v, !1);
        var w = Wh[u];
        t.hasOwnProperty(w) && (t.hasOwnProperty(u) && M(90), v = t[w], d(v, !0));
        return v;
      }
      function f(t, u, v) {
        var w = e(t, u);
        w = Da(w) ? w : [w];
        for (var x = 0; x < w.length; ++x) c(w[x], u, v);
      }
      function g(t, u, v, w) {
        var x = e(t, u);
        c(x, u, v, w);
      }
      function k(t) {
        return function (u) {
          M(64);
          return t(u);
        };
      }
      var m = [];
      if ("https:" === z.location.protocol) {
        f(a, "email", Mh);
        f(a, "phone_number", Kh);
        f(a, "first_name", k(Hh));
        f(a, "last_name", k(Hh));
        var n = a.home_address || {};
        f(n, "street", k(Gh));
        f(n, "city", k(Gh));
        f(n, "postal_code", k(Fh));
        f(n, "region", k(Gh));
        f(n, "country", k(Fh));
        var p = a.address || {};
        p = Da(p) ? p : [p];
        for (var q = 0; q < p.length; q++) {
          var r = p[q];
          g(r, "first_name", Hh, q);
          g(r, "last_name", Hh, q);
          g(r, "street", Gh, q);
          g(r, "city", Gh, q);
          g(r, "postal_code", Fh, q);
          g(r, "region", Gh, q);
          g(r, "country", Fh, q);
        }
        Ph(m, b);
      } else m.push({
        name: "error_code",
        value: "e3",
        index: void 0
      }), b(m);
    },
    Yh = function (a, b) {
      Xh(a, function (c) {
        for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
          var g = c[f].name,
            k = c[f].value,
            m = c[f].index,
            n = Uh[g];
          n && k && (-1 === Nh.indexOf(g) || /^e\d+$/.test(k) || Sh.test(k) || Qh.test(k)) && (void 0 !== m && (n += m), d.push(n + "." + k), e++);
        }
        1 === c.length && "error_code" === c[0].name && (e = 0);
        b(encodeURIComponent(d.join("~")), e);
      });
    },
    Zh = function (a) {
      if (z.Promise) try {
        return new Promise(function (b) {
          Yh(a, function (c, d) {
            b({
              xj: c,
              fm: d
            });
          });
        });
      } catch (b) {}
    },
    Nh = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
  var N = {
      g: {
        nb: "ad_personalization",
        I: "ad_storage",
        N: "ad_user_data",
        R: "analytics_storage",
        Ra: "region",
        rd: "consent_updated",
        sd: "wait_for_update",
        Wj: "ads",
        Wf: "all",
        Xj: "android",
        Yj: "chrome",
        Zj: "playstore",
        bk: "search",
        dk: "shopping",
        ek: "youtube",
        Xh: "app_remove",
        Yh: "app_store_refund",
        Zh: "app_store_subscription_cancel",
        ai: "app_store_subscription_convert",
        bi: "app_store_subscription_renew",
        Yf: "add_payment_info",
        Zf: "add_shipping_info",
        ac: "add_to_cart",
        bc: "remove_from_cart",
        ag: "view_cart",
        Fb: "begin_checkout",
        fc: "select_item",
        Xa: "view_item_list",
        ob: "select_promotion",
        Ya: "view_promotion",
        ma: "purchase",
        hc: "refund",
        Ba: "view_item",
        cg: "add_to_wishlist",
        fk: "exception",
        di: "first_open",
        ei: "first_visit",
        na: "gtag.config",
        Ja: "gtag.get",
        fi: "in_app_purchase",
        ic: "page_view",
        gk: "screen_view",
        gi: "session_start",
        hk: "timing_complete",
        ik: "track_social",
        vd: "user_engagement",
        pb: "gclid",
        oa: "ads_data_redaction",
        da: "allow_ad_personalization_signals",
        Ve: "allow_custom_scripts",
        We: "allow_display_features",
        wd: "allow_enhanced_conversions",
        qb: "allow_google_signals",
        Ga: "allow_interest_groups",
        jk: "app_id",
        kk: "app_installer_id",
        lk: "app_name",
        mk: "app_version",
        jc: "auid",
        hi: "auto_detection_enabled",
        Gb: "aw_remarketing",
        Xe: "aw_remarketing_only",
        xd: "discount",
        yd: "aw_feed_country",
        zd: "aw_feed_language",
        Z: "items",
        Ad: "aw_merchant_id",
        dg: "aw_basket_type",
        Dc: "campaign_content",
        Ec: "campaign_id",
        Fc: "campaign_medium",
        Gc: "campaign_name",
        Hc: "campaign",
        Ic: "campaign_source",
        Jc: "campaign_term",
        Za: "client_id",
        ii: "content_group",
        ji: "content_type",
        Ka: "conversion_cookie_prefix",
        Kc: "conversion_id",
        Ca: "conversion_linker",
        Hb: "conversion_api",
        Sa: "cookie_domain",
        Ha: "cookie_expires",
        Ta: "cookie_flags",
        kc: "cookie_name",
        Lc: "cookie_path",
        La: "cookie_prefix",
        rb: "cookie_update",
        mc: "country",
        qa: "currency",
        Bd: "customer_lifetime_value",
        Mc: "custom_map",
        ki: "gcldc",
        li: "debug_mode",
        aa: "developer_id",
        mi: "disable_merchant_reported_purchases",
        Nc: "dc_custom_params",
        ni: "dc_natural_search",
        eg: "dynamic_event_settings",
        fg: "affiliation",
        Cd: "checkout_option",
        Ye: "checkout_step",
        gg: "coupon",
        Oc: "item_list_name",
        Ze: "list_name",
        oi: "promotions",
        Pc: "shipping",
        af: "tax",
        Dd: "engagement_time_msec",
        Qc: "enhanced_client_id",
        Ed: "enhanced_conversions",
        hg: "enhanced_conversions_automatic_settings",
        Fd: "estimated_delivery_date",
        bf: "euid_logged_in_state",
        Rc: "event_callback",
        nk: "event_category",
        sb: "event_developer_id_string",
        pk: "event_label",
        ig: "event",
        Gd: "event_settings",
        Hd: "event_timeout",
        qk: "description",
        rk: "fatal",
        ri: "experiments",
        cf: "firebase_id",
        Id: "first_party_collection",
        Jd: "_x_20",
        Ib: "_x_19",
        jg: "fledge",
        kg: "flight_error_code",
        lg: "flight_error_message",
        si: "fl_activity_category",
        ui: "fl_activity_group",
        mg: "fl_advertiser_id",
        vi: "fl_ar_dedupe",
        wi: "fl_random_number",
        xi: "tran",
        yi: "u",
        Kd: "gac_gclid",
        nc: "gac_wbraid",
        ng: "gac_wbraid_multiple_conversions",
        og: "ga_restrict_domain",
        df: "ga_temp_client_id",
        Ld: "gdpr_applies",
        pg: "geo_granularity",
        tb: "value_callback",
        cb: "value_key",
        sk: "google_ono",
        eb: "google_signals",
        qg: "google_tld",
        Md: "groups",
        rg: "gsa_experiment_id",
        sg: "iframe_state",
        Sc: "ignore_referrer",
        ef: "internal_traffic_results",
        Jb: "is_legacy_converted",
        vb: "is_legacy_loaded",
        Nd: "is_passthrough",
        zi: "_lps",
        Ia: "language",
        ff: "legacy_developer_id_string",
        Da: "linker",
        oc: "accept_incoming",
        wb: "decorate_forms",
        T: "domains",
        Kb: "url_position",
        ug: "method",
        tk: "name",
        Tc: "new_customer",
        vg: "non_interaction",
        Ai: "optimize_id",
        Bi: "page_hostname",
        Uc: "page_path",
        Ea: "page_referrer",
        xb: "page_title",
        wg: "passengers",
        xg: "phone_conversion_callback",
        Ci: "phone_conversion_country_code",
        yg: "phone_conversion_css_class",
        Di: "phone_conversion_ids",
        zg: "phone_conversion_number",
        Ag: "phone_conversion_options",
        Vc: "quantity",
        Wc: "redact_device_info",
        hf: "redact_enhanced_user_id",
        Ei: "redact_ga_client_id",
        Fi: "redact_user_id",
        Od: "referral_exclusion_definition",
        Lb: "restricted_data_processing",
        Gi: "retoken",
        uk: "sample_rate",
        jf: "screen_name",
        yb: "screen_resolution",
        Hi: "search_term",
        Ma: "send_page_view",
        Mb: "send_to",
        Pd: "server_container_url",
        Xc: "session_duration",
        Qd: "session_engaged",
        kf: "session_engaged_time",
        zb: "session_id",
        Rd: "session_number",
        Yc: "delivery_postal_code",
        Bg: "temporary_client_id",
        lf: "topmost_url",
        Ii: "tracking_id",
        nf: "traffic_type",
        sa: "transaction_id",
        Nb: "transport_url",
        Cg: "trip_type",
        Ob: "update",
        Ab: "url_passthrough",
        Td: "_user_agent_architecture",
        Ud: "_user_agent_bitness",
        Vd: "_user_agent_full_version_list",
        Wd: "_user_agent_mobile",
        Xd: "_user_agent_model",
        Yd: "_user_agent_platform",
        Zd: "_user_agent_platform_version",
        ae: "_user_agent_wow64",
        wa: "user_data",
        Dg: "user_data_auto_latency",
        Eg: "user_data_auto_meta",
        Fg: "user_data_auto_multi",
        Gg: "user_data_auto_selectors",
        Hg: "user_data_auto_status",
        pf: "user_data_mode",
        be: "user_data_settings",
        za: "user_id",
        Na: "user_properties",
        Ji: "_user_region",
        Ig: "us_privacy_string",
        fa: "value",
        qc: "wbraid",
        Jg: "wbraid_multiple_conversions",
        Pi: "_host_name",
        Qi: "_in_page_command",
        Ri: "_is_passthrough_cid",
        he: "non_personalized_ads",
        me: "_sst_parameters",
        ab: "conversion_label",
        ra: "page_location",
        ub: "global_developer_id_string",
        Sd: "tc_privacy_string"
      }
    },
    $h = {},
    ai = Object.freeze(($h[N.g.da] = 1, $h[N.g.We] = 1, $h[N.g.wd] = 1, $h[N.g.qb] = 1, $h[N.g.Z] = 1, $h[N.g.Sa] = 1, $h[N.g.Ha] = 1, $h[N.g.Ta] = 1, $h[N.g.kc] = 1, $h[N.g.Lc] = 1, $h[N.g.La] = 1, $h[N.g.rb] = 1, $h[N.g.Mc] = 1, $h[N.g.aa] = 1, $h[N.g.eg] = 1, $h[N.g.Rc] = 1, $h[N.g.Gd] = 1, $h[N.g.Hd] = 1, $h[N.g.Id] = 1, $h[N.g.og] = 1, $h[N.g.eb] = 1, $h[N.g.qg] = 1, $h[N.g.Md] = 1, $h[N.g.ef] = 1, $h[N.g.Jb] = 1, $h[N.g.vb] = 1, $h[N.g.Da] = 1, $h[N.g.hf] = 1, $h[N.g.Od] = 1, $h[N.g.Lb] = 1, $h[N.g.Ma] = 1, $h[N.g.Mb] = 1, $h[N.g.Pd] = 1, $h[N.g.Xc] = 1, $h[N.g.kf] = 1, $h[N.g.Yc] = 1, $h[N.g.Nb] = 1, $h[N.g.Ob] = 1, $h[N.g.be] = 1, $h[N.g.Na] = 1, $h[N.g.me] = 1, $h));
  Object.freeze([N.g.ra, N.g.Ea, N.g.xb, N.g.Ia, N.g.jf, N.g.za, N.g.cf, N.g.ii]);
  var bi = {},
    ci = Object.freeze((bi[N.g.Xh] = 1, bi[N.g.Yh] = 1, bi[N.g.Zh] = 1, bi[N.g.ai] = 1, bi[N.g.bi] = 1, bi[N.g.di] = 1, bi[N.g.ei] = 1, bi[N.g.fi] = 1, bi[N.g.gi] = 1, bi[N.g.vd] = 1, bi)),
    di = {},
    ei = Object.freeze((di[N.g.Yf] = 1, di[N.g.Zf] = 1, di[N.g.ac] = 1, di[N.g.bc] = 1, di[N.g.ag] = 1, di[N.g.Fb] = 1, di[N.g.fc] = 1, di[N.g.Xa] = 1, di[N.g.ob] = 1, di[N.g.Ya] = 1, di[N.g.ma] = 1, di[N.g.hc] = 1, di[N.g.Ba] = 1, di[N.g.cg] = 1, di)),
    fi = Object.freeze([N.g.da, N.g.qb, N.g.rb, N.g.Sc, N.g.Ob]),
    gi = Object.freeze([].concat(fi)),
    hi = Object.freeze([N.g.Ha, N.g.Hd, N.g.Xc, N.g.kf, N.g.Dd]),
    ii = Object.freeze([].concat(hi)),
    ji = {},
    ki = (ji[N.g.I] = "1", ji[N.g.R] = "2", ji[N.g.N] = "3", ji[N.g.nb] = "4", ji),
    li = {},
    mi = Object.freeze((li[N.g.da] = 1, li[N.g.wd] = 1, li[N.g.Ga] = 1, li[N.g.Gb] = 1, li[N.g.Xe] = 1, li[N.g.xd] = 1, li[N.g.yd] = 1, li[N.g.zd] = 1, li[N.g.Z] = 1, li[N.g.Ad] = 1, li[N.g.Ka] = 1, li[N.g.Ca] = 1, li[N.g.Sa] = 1, li[N.g.Ha] = 1, li[N.g.Ta] = 1, li[N.g.La] = 1, li[N.g.qa] = 1, li[N.g.Bd] = 1, li[N.g.aa] = 1, li[N.g.mi] = 1, li[N.g.Ed] = 1, li[N.g.Fd] = 1, li[N.g.cf] = 1, li[N.g.Id] = 1, li[N.g.Jb] = 1, li[N.g.vb] = 1, li[N.g.Ia] = 1, li[N.g.Tc] = 1, li[N.g.ra] = 1, li[N.g.Ea] = 1, li[N.g.xg] = 1, li[N.g.yg] = 1, li[N.g.zg] = 1, li[N.g.Ag] = 1, li[N.g.Lb] = 1, li[N.g.Ma] = 1, li[N.g.Mb] = 1, li[N.g.Pd] = 1, li[N.g.Yc] = 1, li[N.g.sa] = 1, li[N.g.Nb] = 1, li[N.g.Ob] = 1, li[N.g.Ab] = 1, li[N.g.wa] = 1, li[N.g.za] = 1, li[N.g.fa] = 1, li)),
    ni = {},
    oi = Object.freeze((ni[N.g.bk] = "s", ni[N.g.ek] = "y", ni[N.g.Xj] = "n", ni[N.g.Yj] = "c", ni[N.g.Zj] = "p", ni[N.g.dk] = "h", ni[N.g.Wj] = "a", ni));
  Object.freeze(N.g);
  var pi = {},
    qi = z.google_tag_manager = z.google_tag_manager || {},
    ri = Math.random();
  pi.Pg = "3960";
  pi.ke = Number("0") || 0;
  pi.ia = "dataLayer";
  pi.Uj = "ChEI8OnlpwYQuJTc8ab5i5yFARIlAIxhzZCQ28mDlGodqtnKuNEmJI+w6QgTVNVh6cQ2B2bqxiOhZxoC14w\x3d";
  var si = {
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
    ti = {
      __paused: 1,
      __tg: 1
    },
    ui;
  for (ui in si) si.hasOwnProperty(ui) && (ti[ui] = 1);
  var vi = Ma("true"),
    wi,
    xi = !1;
  xi = !0;
  wi = xi;
  var yi,
    zi = !1;
  yi = zi;
  var Ai,
    Bi = !1;
  Ai = Bi;
  var Ci,
    Di = !1;
  Ci = Di;
  pi.Ue = "www.googletagmanager.com";
  var Ei = "" + pi.Ue + (wi ? "/gtag/js" : "/gtm.js"),
    Fi = null,
    Gi = null,
    Hi = {},
    Ii = {},
    Ji = {},
    Qi = function () {
      var a = qi.sequence || 1;
      qi.sequence = a + 1;
      return a;
    };
  pi.Tj = "true";
  var Ri = "";
  pi.uf = Ri;
  var Si = new Ha(),
    Ti = {},
    Ui = {},
    Xi = {
      name: pi.ia,
      set: function (a, b) {
        lb(Za(a, b), Ti);
        Vi();
      },
      get: function (a) {
        return Wi(a, 2);
      },
      reset: function () {
        Si = new Ha();
        Ti = {};
        Vi();
      }
    },
    Wi = function (a, b) {
      return 2 != b ? Si.get(a) : Yi(a);
    },
    Yi = function (a, b) {
      var c = a.split(".");
      b = b || [];
      for (var d = Ti, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    Zi = function (a, b) {
      Ui.hasOwnProperty(a) || (Si.set(a, b), lb(Za(a, b), Ti), Vi());
    },
    $i = function () {
      for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], b = 0; b < a.length; b++) {
        var c = a[b],
          d = Wi(c, 1);
        if (Da(d) || kb(d)) d = lb(d);
        Ui[c] = d;
      }
    },
    Vi = function (a) {
      l(Ui, function (b, c) {
        Si.set(b, c);
        lb(Za(b), Ti);
        lb(Za(b, c), Ti);
        a && delete Ui[b];
      });
    },
    aj = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? Yi(a) : Si.get(a);
      "array" === ib(d) || "object" === ib(d) ? c = lb(d) : c = d;
      return c;
    };
  var bj = function (a, b, c) {
      if (!c) return !1;
      var d = c.selector_type,
        e = String(c.value),
        f;
      if ("js_variable" === d) {
        e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
        for (var g = e.split(","), k = 0; k < g.length; k++) {
          var m = g[k].trim();
          if (m) {
            if (0 === m.indexOf("dataLayer.")) f = Wi(m.substring(10));else {
              var n = m.split(".");
              f = z[n.shift()];
              for (var p = 0; p < n.length; p++) f = f && f[n[p]];
            }
            if (void 0 !== f) break;
          }
        }
      } else if ("css_selector" === d && yh) {
        var q = zh(e);
        if (q && 0 < q.length) {
          f = [];
          for (var r = 0; r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1); r++) f.push(Sc(q[r]) || Oa(q[r].value));
          f = 1 === f.length ? f[0] : f;
        }
      }
      return f ? (a[b] = f, !0) : !1;
    },
    cj = function (a) {
      if (a) {
        var b = {},
          c = !1;
        c = bj(b, "email", a.email) || c;
        c = bj(b, "phone_number", a.phone) || c;
        b.address = [];
        for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
          var f = {};
          c = bj(f, "first_name", d[e].first_name) || c;
          c = bj(f, "last_name", d[e].last_name) || c;
          c = bj(f, "street", d[e].street) || c;
          c = bj(f, "city", d[e].city) || c;
          c = bj(f, "region", d[e].region) || c;
          c = bj(f, "country", d[e].country) || c;
          c = bj(f, "postal_code", d[e].postal_code) || c;
          b.address.push(f);
        }
        return c ? b : void 0;
      }
    },
    dj = function (a) {
      return kb(a) ? !!a.enable_code : !1;
    };
  var P = [];
  P[5] = !0;
  P[6] = !0;
  P[11] = !0;
  P[7] = !0;
  P[8] = !0;
  P[21] = !0;
  P[9] = !0;
  P[10] = !0;
  P[13] = !0;
  P[14] = !0;
  P[15] = !0;
  P[17] = !0;
  P[23] = !0;
  P[24] = !0;
  P[25] = !0;
  P[27] = !0;
  P[19] = !0;
  P[28] = !0;
  P[31] = !0;
  P[32] = !0;
  P[33] = !0;
  P[34] = !0;
  P[36] = !0;
  P[37] = !0;
  P[39] = !0;
  P[41] = !0;
  P[42] = !0;
  P[43] = !0;
  P[44] = !0;
  P[55] = !0;
  P[56] = !0;
  P[57] = !0;
  P[58] = !0;
  P[60] = !0;
  P[61] = !0;
  P[66] = !0;
  P[69] = !0;
  P[72] = !0;
  a: {
    for (var hj = void 0, ij = void 0, jj = 0; hj === ij;) if (hj = Math.floor(2 * Math.random()), ij = Math.floor(2 * Math.random()), jj++, 20 < jj) break a;
    hj ? P[75] = !0 : P[76] = !0;
  }
  Q(76) ? of[6] = !0 : Q(75) && (of[5] = !0);
  P[79] = !0;
  P[86] = !0;
  P[89] = !0;
  P[92] = !0;
  P[95] = !0;
  function Q(a) {
    return !!P[a];
  }
  var kj = function (a) {
    yb("HEALTH", a);
  };
  var lj;
  try {
    lj = JSON.parse(wb("eyIwIjoiS1IiLCIxIjoiIiwiMiI6ZmFsc2UsIjMiOiJnb29nbGUuY28ua3IiLCI0IjoiIiwiNSI6dHJ1ZSwiNiI6ZmFsc2UsIjciOiJhZF9zdG9yYWdlfGFuYWx5dGljc19zdG9yYWdlfGFkX3VzZXJfZGF0YXxhZF9wZXJzb25hbGl6YXRpb24ifQ"));
  } catch (a) {
    M(123), kj(2), lj = {};
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
      b = "kh";
    if (a.kh && a.hasOwnProperty(b)) return a.kh;
    var c = new a();
    return a.kh = c;
  };
  var uj = function () {
    var a = {};
    this.h = function () {
      var b = sj.h,
        c = sj.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.B = function () {
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
    this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedSetCps = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
    this.h = [];
  };
  Dj.prototype.default = function (a, b, c, d, e, f) {
    this.usedDefault || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    yb("TAGGING", 19);
    void 0 == b ? yb("TAGGING", 18) : Ej(this, a, "granted" === b, c, d, e, f);
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
        if (k[b] === r && r.quiet) {
          r.quiet = !1;
          var t = [b];
          if (pf(4)) for (var u in yj) yj.hasOwnProperty(u) && yj[u] === b && t.push(u);
          for (var v = 0; v < t.length; v++) Gj(a, t[v]);
          a.notifyListeners();
          yb("TAGGING", 2);
        }
      }, g);
    }
  };
  aa = Dj.prototype;
  aa.update = function (a, b) {
    this.usedDefault || this.usedUpdate || !this.accessedAny || (this.wasSetLate = !0);
    this.usedUpdate = this.active = !0;
    if (void 0 != b) {
      var c = this.getConsentState(a),
        d = this.entries,
        e = d[a] = d[a] || {};
      e.update = "granted" === b;
      var f = this.getConsentState(a),
        g = [a];
      if (pf(4)) for (var k in yj) yj.hasOwnProperty(k) && yj[k] === a && g.push(k);
      if (e.quiet) {
        e.quiet = !1;
        for (var m = 0; m < g.length; m++) Gj(this, g[m]);
      } else if (f !== c) for (var n = 0; n < g.length; n++) Gj(this, g[n]);
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
    if (pf(4) && yj.hasOwnProperty(a)) {
      var e = b[yj[a]] || {};
      d = e.update;
      if (void 0 !== d) return d ? 1 : 2;
      d = e.default;
      if (void 0 !== d) return d ? 1 : 2;
    }
    d = c.declare;
    if (void 0 !== d) return d ? 1 : 2;
    if (pf(3)) {
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
      bl: b
    });
  };
  var Gj = function (a, b) {
    for (var c = 0; c < a.h.length; ++c) {
      var d = a.h[c];
      Da(d.consentTypes) && -1 !== d.consentTypes.indexOf(b) && (d.Aj = !0);
    }
  };
  Dj.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.h.length; ++c) {
      var d = this.h[c];
      if (d.Aj) {
        d.Aj = !1;
        try {
          d.bl({
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
      switch (b.getConsentState(a)) {
        case 1:
        case 3:
          return !0;
        case 2:
        case 4:
          return !1;
        default:
          return !0;
      }
    },
    Jj = function (a) {
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
    Kj = function (a) {
      var b = Cj();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    Lj = function () {
      if (!vj().h()) return !1;
      var a = Cj();
      a.accessedAny = !0;
      return a.active;
    },
    Mj = function () {
      var a = Cj();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    Nj = function (a, b) {
      Cj().addListener(a, b);
    },
    Oj = function (a, b) {
      Cj().notifyListeners(a, b);
    },
    Pj = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Kj(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Nj(b, function (e) {
          d || c() || (d = !0, a(e));
        });
      } else a({});
    },
    Qj = function (a, b) {
      function c() {
        for (var f = [], g = 0; g < d.length; g++) {
          var k = d[g];
          Ij(k) && !e[k] && (f.push(k), e[k] = !0);
        }
        return f;
      }
      var d = h(b) ? [b] : b,
        e = {};
      c().length !== d.length && Nj(d, function (f) {
        var g = c();
        0 < g.length && (f.consentTypes = g, a(f));
      });
    };
  function Rj() {}
  function Sj() {}
  ;
  var Tj = [N.g.I, N.g.R, N.g.N, N.g.nb],
    Uj = function (a) {
      for (var b = a[N.g.Ra], c = Array.isArray(b) ? b : [b], d = {
          Ce: 0
        }; d.Ce < c.length; d = {
        Ce: d.Ce
      }, ++d.Ce) l(a, function (e) {
        return function (f, g) {
          if (f !== N.g.Ra) {
            var k = c[e.Ce],
              m = mj(),
              n = nj();
            xj = !0;
            wj && yb("TAGGING", 20);
            Cj().declare(f, g, k, m, n);
          }
        };
      }(d));
    },
    Vj = function (a) {
      var b = a[N.g.Ra];
      b && M(40);
      var c = a[N.g.sd];
      c && M(41);
      for (var d = Da(b) ? b : [b], e = {
          De: 0
        }; e.De < d.length; e = {
        De: e.De
      }, ++e.De) l(a, function (f) {
        return function (g, k) {
          if (g !== N.g.Ra && g !== N.g.sd) {
            var m = d[f.De],
              n = Number(c),
              p = mj(),
              q = nj();
            wj = !0;
            xj && yb("TAGGING", 20);
            Cj().default(g, k, m, p, q, n);
          }
        };
      }(e));
    },
    Wj = function (a, b) {
      l(a, function (c, d) {
        wj = !0;
        xj && yb("TAGGING", 20);
        Cj().update(c, d);
      });
      Oj(b.eventId, b.priorityId);
    },
    Xj = function (a) {
      for (var b = a[N.g.Ra], c = Array.isArray(b) ? b : [b], d = {
          Ee: 0
        }; d.Ee < c.length; d = {
        Ee: d.Ee
      }, ++d.Ee) l(a, function (e) {
        return function (f, g) {
          if (f !== N.g.Ra) {
            var k = c[e.Ee],
              m = mj(),
              n = nj();
            Cj().setCps(f, g, k, m, n);
          }
        };
      }(d));
    },
    Yj = function (a) {
      for (var b = a[N.g.Ra], c = Array.isArray(b) ? b : [b], d = {
          fd: 0
        }; d.fd < c.length; d = {
        fd: d.fd
      }, ++d.fd) a.hasOwnProperty(N.g.Wf) && l(oi, function (e) {
        return function (f) {
          Hj(zj, f, a[N.g.Wf], c[e.fd], mj(), nj()) && (Aj = !0);
        };
      }(d)), l(a, function (e) {
        return function (f, g) {
          f !== N.g.Ra && f !== N.g.Wf && Hj(zj, f, g, c[e.fd], mj(), nj()) && (Aj = !0);
        };
      }(d));
    },
    S = function (a) {
      Array.isArray(a) || (a = [a]);
      return a.every(function (b) {
        return Ij(b);
      });
    },
    Zj = function (a, b) {
      Nj(a, b);
    },
    ak = function (a, b) {
      Qj(a, b);
    },
    bk = function (a, b) {
      Pj(a, b);
    },
    ck = function (a) {
      Cj().waitForUpdate(a, 500);
    };
  var dk = function (a) {
      var b = String(a[Se.xa] || "").replace(/_/g, "");
      0 === b.indexOf("cvt") && (b = "cvt");
      return b;
    },
    ek = 0 <= z.location.search.indexOf("?gtm_latency=") || 0 <= z.location.search.indexOf("&gtm_latency=");
  var gk = function (a, b) {
      var c = fk();
      c.pending || (c.pending = []);
      Ea(c.pending, function (d) {
        return d.target.ctid === a.ctid && d.target.isDestination === a.isDestination;
      }) || c.pending.push({
        target: a,
        onLoad: b
      });
    },
    hk = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
      this.pending = [];
      this.siloed = [];
    },
    fk = function () {
      var a = Fc("google_tag_data", {}),
        b = a.tidr;
      b || (b = new hk(), a.tidr = b);
      return b;
    };
  var ik = {},
    jk = !1,
    Wf = {
      ctid: "G-501578KXVB",
      Sg: "118312230",
      yj: "G-501578KXVB|GT-NNS2NRP",
      zj: "G-501578KXVB"
    };
  ik.fe = Ma("");
  var mk = function () {
      var a = kk();
      return jk ? a.map(lk) : a;
    },
    ok = function () {
      var a = nk();
      return jk ? a.map(lk) : a;
    },
    qk = function () {
      return pk(Wf.ctid);
    },
    rk = function () {
      return pk(Wf.Sg || "_" + Wf.ctid);
    },
    kk = function () {
      return Wf.yj ? Wf.yj.split("|") : [Wf.ctid];
    },
    nk = function () {
      return Wf.zj ? Wf.zj.split("|") : [];
    },
    sk = function (a) {
      var b = fk();
      return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
    },
    pk = function (a) {
      return jk ? lk(a) : a;
    },
    lk = function (a) {
      return "siloed_" + a;
    },
    tk = function (a) {
      a = String(a);
      return jk && 0 === a.indexOf("siloed_") ? a.substring(7) : a;
    },
    uk = function () {
      var a = !1;
      if (a) {
        var b = fk();
        if (b.siloed) {
          for (var c = [], d = kk(), e = nk(), f = {}, g = 0; g < b.siloed.length; f = {
            se: f.se
          }, g++) f.se = b.siloed[g], !jk && Ea(f.se.isDestination ? e : d, function (k) {
            return function (m) {
              return m === k.se.ctid;
            };
          }(f)) ? jk = !0 : c.push(f.se);
          b.siloed = c;
        }
      }
    };
  function vk() {
    var a = fk();
    if (a.pending) {
      for (var b, c = [], d = !1, e = mk(), f = ok(), g = {}, k = 0; k < a.pending.length; g = {
        ld: g.ld
      }, k++) g.ld = a.pending[k], Ea(g.ld.target.isDestination ? f : e, function (m) {
        return function (n) {
          return n === m.ld.target.ctid;
        };
      }(g)) ? d || (b = g.ld.onLoad, d = !0) : c.push(g.ld);
      a.pending = c;
      if (b) try {
        b(rk());
      } catch (m) {}
    }
  }
  var wk = function () {
      for (var a = fk(), b = mk(), c = 0; c < b.length; c++) {
        var d = a.container[b[c]];
        d ? (d.state = 2, d.containers = mk(), d.destinations = ok()) : a.container[b[c]] = {
          state: 2,
          containers: mk(),
          destinations: ok()
        };
      }
      for (var e = ok(), f = 0; f < e.length; f++) {
        var g = a.destination[e[f]];
        g && 0 === g.state && M(93);
        g ? (g.state = 2, g.containers = mk(), g.destinations = ok()) : a.destination[e[f]] = {
          state: 2,
          containers: mk(),
          destinations: ok()
        };
      }
      a.canonical[rk()] = {};
      vk();
    },
    xk = function (a) {
      return !!fk().container[a];
    },
    yk = function () {
      return {
        ctid: qk(),
        isDestination: ik.fe
      };
    };
  function zk(a) {
    var b = fk();
    (b.siloed = b.siloed || []).push(a);
  }
  var Ak = function () {
      var a = fk().container,
        b;
      for (b in a) if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
      return !1;
    },
    Bk = function () {
      var a = {};
      l(fk().destination, function (b, c) {
        0 === c.state && (a[b] = c);
      });
      return a;
    },
    Ck = function (a) {
      return !!(a && a.parent && a.context && 1 === a.context.source && 0 !== a.parent.ctid.indexOf("GTM-"));
    };
  var Dk = {
      sampleRate: "0.005000",
      Pj: "",
      Oj: Number("5"),
      hn: Number("")
    },
    Ek = [];
  function Fk(a) {
    Ek.push(a);
  }
  var Gk = !1,
    Hk;
  if (!(Hk = ek)) {
    var Ik = Math.random(),
      Jk = Dk.sampleRate;
    Hk = Ik < Number(Jk);
  }
  var Kk = Hk,
    Lk = "https://www.googletagmanager.com/a?id=" + Wf.ctid,
    Mk = void 0,
    Nk = {},
    Ok = void 0,
    Pk = new function () {
      var a = 5;
      0 < Dk.Oj && (a = Dk.Oj);
      this.h = 0;
      this.C = [];
      this.B = a;
    }(),
    Qk = 1E3;
  function Rk(a, b) {
    var c = Mk;
    if (void 0 === c) if (b) c = Qi();else return "";
    for (var d = [Lk], e = 0; e < Ek.length; e++) {
      var f = Ek[e]({
        eventId: c,
        Yb: !!a,
        Gj: function () {
          Gk = !0;
        }
      });
      "&" === f[0] && d.push(f);
    }
    d.push("&z=0");
    return d.join("");
  }
  function Sk() {
    Ok && (z.clearTimeout(Ok), Ok = void 0);
    if (void 0 !== Mk && Tk) {
      var a;
      (a = Nk[Mk]) || (a = Pk.h < Pk.B ? !1 : 1E3 > Ra() - Pk.C[Pk.h % Pk.B]);
      if (a || 0 >= Qk--) M(1), Nk[Mk] = !0;else {
        var b = Pk.h++ % Pk.B;
        Pk.C[b] = Ra();
        var c = Rk(!0);
        Nc(c);
        if (Gk) {
          var d = c.replace("/a?", "/td?");
          Nc(d);
        }
        Tk = Gk = !1;
      }
    }
  }
  var Tk = !1;
  function Uk(a) {
    Nk[a] || (a !== Mk && (Sk(), Mk = a), Tk = !0, Ok || (Ok = z.setTimeout(Sk, 500)), 2022 <= Rk().length && Sk());
  }
  var Vk = Ga();
  function Wk() {
    Vk = Ga();
  }
  function Xk() {
    return ["&v=3&t=t", "&pid=" + Vk].join("");
  }
  ;
  var Yk = function (a, b, c, d, e, f, g, k, m, n, p, q) {
      this.eventId = a;
      this.priorityId = b;
      this.h = c;
      this.K = d;
      this.C = e;
      this.F = f;
      this.W = g;
      this.B = k;
      this.eventMetadata = m;
      this.onSuccess = n;
      this.onFailure = p;
      this.isGtmEvent = q;
    },
    U = function (a, b, c) {
      if (void 0 !== a.h[b]) return a.h[b];
      if (void 0 !== a.K[b]) return a.K[b];
      if (void 0 !== a.C[b]) return a.C[b];
      Kk && Zk(a, a.F[b], a.W[b]) && (M(71), M(79));
      return void 0 !== a.F[b] ? a.F[b] : void 0 !== a.B[b] ? a.B[b] : c;
    },
    $k = function (a) {
      function b(g) {
        for (var k = Object.keys(g), m = 0; m < k.length; ++m) c[k[m]] = 1;
      }
      var c = {};
      b(a.h);
      b(a.K);
      b(a.C);
      b(a.F);
      if (Kk) for (var d = Object.keys(a.W), e = 0; e < d.length; e++) {
        var f = d[e];
        if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
          M(71);
          M(80);
          break;
        }
      }
      return Object.keys(c);
    },
    al = function (a, b, c) {
      function d(m) {
        kb(m) && l(m, function (n, p) {
          f = !0;
          e[n] = p;
        });
      }
      var e = {},
        f = !1;
      c && 1 !== c || (d(a.B[b]), d(a.F[b]), d(a.C[b]), d(a.K[b]));
      c && 2 !== c || d(a.h[b]);
      if (Kk) {
        var g = f,
          k = e;
        e = {};
        f = !1;
        c && 1 !== c || (d(a.B[b]), d(a.W[b]), d(a.C[b]), d(a.K[b]));
        c && 2 !== c || d(a.h[b]);
        if (f !== g || Zk(a, e, k)) M(71), M(81);
        f = g;
        e = k;
      }
      return f ? e : void 0;
    },
    bl = function (a) {
      var b = [N.g.Hc, N.g.Dc, N.g.Ec, N.g.Fc, N.g.Gc, N.g.Ic, N.g.Jc],
        c = {},
        d = !1,
        e = function (k) {
          for (var m = 0; m < b.length; m++) void 0 !== k[b[m]] && (c[b[m]] = k[b[m]], d = !0);
          return d;
        };
      if (e(a.h) || e(a.K) || e(a.C)) return c;
      e(a.F);
      if (Kk) {
        var f = c,
          g = d;
        c = {};
        d = !1;
        e(a.W);
        Zk(a, c, f) && (M(71), M(82));
        c = f;
        d = g;
      }
      if (d) return c;
      e(a.B);
      return c;
    },
    Zk = function (a, b, c) {
      if (!Kk) return !1;
      try {
        if (b === c) return !1;
        var d = ib(b);
        if (d !== ib(c) || !(kb(b) && kb(c) || "array" === d)) return !0;
        if ("array" === d) {
          if (b.length !== c.length) return !0;
          for (var e = 0; e < b.length; e++) if (Zk(a, b[e], c[e])) return !0;
        } else {
          for (var f in c) if (!b.hasOwnProperty(f)) return !0;
          for (var g in b) if (!c.hasOwnProperty(g) || Zk(a, b[g], c[g])) return !0;
        }
      } catch (k) {
        M(72);
      }
      return !1;
    },
    cl = function (a, b) {
      this.Mg = a;
      this.xk = b;
      this.F = {};
      this.ee = {};
      this.h = {};
      this.K = {};
      this.B = {};
      this.de = {};
      this.C = {};
      this.ud = function () {};
      this.Zb = function () {};
      this.W = !1;
    },
    dl = function (a, b) {
      a.F = b;
      return a;
    },
    el = function (a, b) {
      a.ee = b;
      return a;
    },
    fl = function (a, b) {
      a.h = b;
      return a;
    },
    gl = function (a, b) {
      a.K = b;
      return a;
    },
    hl = function (a, b) {
      a.B = b;
      return a;
    },
    il = function (a, b) {
      a.de = b;
      return a;
    },
    jl = function (a, b) {
      a.C = b || {};
      return a;
    },
    kl = function (a, b) {
      a.ud = b;
      return a;
    },
    ll = function (a, b) {
      a.Zb = b;
      return a;
    },
    ml = function (a, b) {
      a.W = b;
      return a;
    },
    nl = function (a) {
      return new Yk(a.Mg, a.xk, a.F, a.ee, a.h, a.K, a.B, a.de, a.C, a.ud, a.Zb, a.W);
    };
  function ol(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  ;
  var pl = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    ql = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var rl = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  function sl() {
    return Nb ? !!Ub && !!Ub.platform : !1;
  }
  function tl() {
    return Xb("iPhone") && !Xb("iPod") && !Xb("iPad");
  }
  function ul() {
    tl() || Xb("iPad") || Xb("iPod");
  }
  ;
  Zb();
  Yb() || Xb("Trident") || Xb("MSIE");
  Xb("Edge");
  !Xb("Gecko") || -1 != Tb().toLowerCase().indexOf("webkit") && !Xb("Edge") || Xb("Trident") || Xb("MSIE") || Xb("Edge");
  -1 != Tb().toLowerCase().indexOf("webkit") && !Xb("Edge") && Xb("Mobile");
  sl() || Xb("Macintosh");
  sl() || Xb("Windows");
  (sl() ? "Linux" === Ub.platform : Xb("Linux")) || sl() || Xb("CrOS");
  var vl = ra.navigator || null;
  vl && (vl.appVersion || "").indexOf("X11");
  sl() || Xb("Android");
  tl();
  Xb("iPad");
  Xb("iPod");
  ul();
  Tb().toLowerCase().indexOf("kaios");
  var wl = function (a, b, c, d) {
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
    xl = /#|$/,
    yl = function (a, b) {
      var c = a.search(xl),
        d = wl(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "));
    },
    zl = /[?&]($|#)/,
    Al = function (a, b, c) {
      for (var d, e = a.search(xl), f = 0, g, k = []; 0 <= (g = wl(a, f, b, e));) k.push(a.substring(f, g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
      k.push(a.slice(f));
      d = k.join("").replace(zl, "$1");
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
  var Bl = function (a) {
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
    Cl = function (a, b) {
      if (a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    };
  function Dl(a) {
    if (!a || !C.head) return null;
    var b = El("META");
    C.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  }
  var Fl = function () {
      if (z.top == z) return 0;
      var a = z.location.ancestorOrigins;
      return a ? a[a.length - 1] == z.location.origin ? 1 : 2 : Bl(z.top) ? 1 : 2;
    },
    El = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  function Gl(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = El("IMG", a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            k = Bb(g, e);
          0 <= k && Array.prototype.splice.call(g, k, 1);
        }
        e.removeEventListener && e.removeEventListener("load", f, !1);
        e.removeEventListener && e.removeEventListener("error", f, !1);
      };
      rl(e, "load", f);
      rl(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var Il = function (a) {
      var b;
      b = void 0 === b ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      Cl(a, function (d, e) {
        if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      Hl(c, b);
    },
    Hl = function (a, b) {
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
      } else Gl(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d);
    };
  var Jl = function () {};
  var Kl = function (a) {
      void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
      return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3;
    },
    Ll = function (a, b) {
      b = void 0 === b ? {} : b;
      this.B = a;
      this.h = null;
      this.K = {};
      this.Zb = 0;
      var c;
      this.W = null != (c = b.Fm) ? c : 500;
      var d;
      this.F = null != (d = b.bn) ? d : !1;
      this.C = null;
    };
  qa(Ll, Jl);
  var Nl = function (a) {
    return "function" === typeof a.B.__tcfapi || null != Ml(a);
  };
  Ll.prototype.addEventListener = function (a) {
    var b = this,
      c = {
        internalBlockOnErrors: this.F
      },
      d = ql(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.W && (e = setTimeout(function () {
      c.tcString = "tcunavailable";
      c.internalErrorState = 1;
      d();
    }, this.W));
    var f = function (g, k) {
      clearTimeout(e);
      g ? (c = g, c.internalErrorState = Kl(c), c.internalBlockOnErrors = b.F, k && 0 === c.internalErrorState || (c.tcString = "tcunavailable", k || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
      a(c);
    };
    try {
      Ol(this, "addEventListener", f);
    } catch (g) {
      c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d();
    }
  };
  Ll.prototype.removeEventListener = function (a) {
    a && a.listenerId && Ol(this, "removeEventListener", null, a.listenerId);
  };
  var Ql = function (a, b, c) {
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
          var n = Pl(a.vendor.consents, void 0 === d ? "755" : d);
          m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Pl(a.purpose.consents, b);
        } else m = !0;
      } else m = 1 === k ? a.purpose && a.vendor ? Pl(a.purpose.legitimateInterests, b) && Pl(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
      return m;
    },
    Pl = function (a, b) {
      return !(!a || !a[b]);
    },
    Ol = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.B.__tcfapi) {
        var e = a.B.__tcfapi;
        e(b, 2, c, d);
      } else if (Ml(a)) {
        Rl(a);
        var f = ++a.Zb;
        a.K[f] = c;
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
    Ml = function (a) {
      if (a.h) return a.h;
      var b;
      a: {
        for (var c = a.B, d = 0; 50 > d; ++d) {
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
    Rl = function (a) {
      a.C || (a.C = function (b) {
        try {
          var c;
          c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
          a.K[c.callId](c.returnValue, c.success);
        } catch (d) {}
      }, rl(a.B, "message", a.C));
    },
    Sl = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = Kl(a));
      return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (Il({
        e: String(a.internalErrorState)
      }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0;
    };
  var Tl = {
      1: 0,
      3: 0,
      4: 0,
      7: 3,
      9: 3,
      10: 3
    },
    Ul = ol('', 500);
  function Vl() {
    var a = qi.tcf || {};
    return qi.tcf = a;
  }
  var Wl = function () {
      return new Ll(z, {
        Fm: -1
      });
    },
    bm = function () {
      var a = Vl(),
        b = Wl();
      Nl(b) && Xl() && M(124);
      if ((Yl() || Q(82)) && !a.active && Nl(b)) {
        a.active = !0;
        Yl() ? (a.Wb = {}, a.cmpId = 0, a.tcfPolicyVersion = 0, Zl(), Q(82) && ck([N.g.N]), a.tcString = "tcunavailable") : Q(82) && ck([N.g.I, N.g.nb, N.g.N]);
        try {
          b.addEventListener(function (c) {
            if (0 !== c.internalErrorState) $l(a), am(a);else {
              a.gdprApplies = c.gdprApplies;
              if (Q(82)) {
                a.cmpId = c.cmpId;
                a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode;
                if (Xl()) return;
                a.tcfPolicyVersion = c.tcfPolicyVersion;
              }
              var d;
              if (!1 === c.gdprApplies) {
                var e = {},
                  f;
                for (f in Tl) Tl.hasOwnProperty(f) && (e[f] = !0);
                d = e;
                b.removeEventListener(c);
              } else if ("tcloaded" === c.eventStatus || "useractioncomplete" === c.eventStatus || "cmpuishown" === c.eventStatus) {
                var g = {},
                  k;
                for (k in Tl) if (Tl.hasOwnProperty(k)) if ("1" === k) {
                  var m,
                    n = c,
                    p = !0;
                  p = void 0 === p ? !1 : p;
                  m = Sl(n) ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : Ql(n, "1", 0) : !1;
                  g["1"] = m;
                } else g[k] = Ql(c, k, Tl[k]);
                d = g;
              }
              d && (a.tcString = c.tcString || "tcempty", a.Wb = d, am(a));
            }
          });
        } catch (c) {
          $l(a), am(a);
        }
      }
    };
  function $l(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function Zl() {
    var a = {},
      b = (a[N.g.I] = "denied", a[N.g.sd] = Ul, a);
    Q(82) && (b[N.g.nb] = "denied");
    Vj(b);
  }
  var Yl = function () {
      return !0 === z.gtag_enable_tcf_support;
    },
    Xl = function () {
      var a = Yl();
      if (Q(82)) {
        var b = Vl().enableAdvertiserConsentMode;
        return !a && !b;
      }
      return !a;
    };
  function am(a) {
    var b = {},
      c = (b[N.g.I] = a.Wb["1"] ? "granted" : "denied", b);
    Q(82) && (c[N.g.nb] = a.Wb["3"] && a.Wb["4"] ? "granted" : "denied", "number" === typeof a.tcfPolicyVersion && 4 <= a.tcfPolicyVersion && (c[N.g.N] = a.Wb["1"] && a.Wb["7"] ? "granted" : "denied"));
    Wj(c, {
      eventId: 0
    }, {
      gdprApplies: a ? a.gdprApplies : void 0,
      tcString: cm() || ""
    });
  }
  var cm = function () {
      var a = Vl();
      if (a.active) return a.tcString;
    },
    dm = function () {
      var a = Vl();
      if (a.active && void 0 !== a.gdprApplies) return a.gdprApplies ? "1" : "0";
    },
    em = function (a) {
      if (!Tl.hasOwnProperty(String(a))) return !0;
      var b = Vl();
      return b.active && b.Wb ? !!b.Wb[String(a)] : !0;
    };
  var fm = [N.g.I, N.g.R],
    gm = [N.g.I, N.g.R, N.g.N, N.g.nb],
    hm = {},
    im = (hm[N.g.I] = 1, hm[N.g.R] = 2, hm);
  function jm(a) {
    switch (U(a, N.g.da)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  var km = function (a) {
      var b = 3 !== jm(a);
      Q(68) && (b = b && Ij(N.g.nb));
      return b;
    },
    lm = function () {
      var a = {},
        b;
      for (b in im) if (im.hasOwnProperty(b)) {
        var c = im[b],
          d,
          e = Cj();
        e.accessedAny = !0;
        d = e.getConsentState(b);
        a[c] = d;
      }
      var f = Q(52) && fm.every(Ij),
        g = Q(47);
      return f || g ? Re(a, 1) : Re(a, 0);
    },
    mm = {},
    nm = (mm[N.g.I] = 0, mm[N.g.R] = 1, mm[N.g.N] = 2, mm[N.g.nb] = 3, mm);
  function om(a) {
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
  var pm = function (a) {
      if (Q(49)) {
        for (var b = "1", c = 0; c < gm.length; c++) {
          var d = b,
            e,
            f = gm[c],
            g = yj[f];
          e = void 0 === g ? 0 : nm.hasOwnProperty(g) ? 12 | nm[g] : 8;
          var k = Cj();
          k.accessedAny = !0;
          var m = k.entries[f] || {};
          e = e << 2 | om(m.implicit);
          b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[om(m.declare) << 4 | om(m.default) << 2 | om(m.update)]);
        }
        void 0 !== a && (b += jm(a));
        return b;
      }
      for (var n = "G1", p = 0; p < fm.length; p++) switch (Jj(fm[p])) {
        case 3:
          n += "1";
          break;
        case 2:
          n += "0";
          break;
        case 1:
          n += "-";
      }
      return n;
    },
    qm = function () {
      if (!Ij(N.g.N)) return "-";
      var a = Cj(),
        b = Aj,
        c = a.cps,
        d = a.usedSetCps,
        e = [];
      if (b && d) for (var f in zj) zj.hasOwnProperty(f) && zj[f].enabled && c.hasOwnProperty(f) && c[f].enabled && e.push(f);else {
        var g = b ? zj : c,
          k;
        for (k in g) g.hasOwnProperty(k) && g[k].enabled && e.push(k);
      }
      for (var m = "", n = 0; n < e.length; n++) {
        var p = oi[e[n]];
        p && (m += p);
      }
      return "" === m ? "-" : m;
    };
  function rm() {
    var a = !!lj["6"],
      b = !1;
    Q(82) && (b = !Xl() && "1" === dm());
    return a || b;
  }
  var sm = function () {
      return rm() ? "1" : "0";
    },
    tm = function () {
      return rm() || Cj().usedSetCps || !S(N.g.N);
    },
    um = function () {
      var a = "0",
        b = "0",
        c;
      var d = Vl();
      c = d.active && Q(82) ? d.cmpId : void 0;
      "number" === typeof c && 0 <= c && 4095 >= c && (a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[c >> 6 & 63], b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[c & 63]);
      var e = "0",
        f;
      var g = Vl();
      f = g.active && Q(82) ? g.tcfPolicyVersion : void 0;
      "number" === typeof f && 0 <= f && 63 >= f && (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[f]);
      var k = 0;
      lj["6"] && (k |= 1);
      "1" === dm() && (k |= 2);
      Yl() && (k |= 4);
      var m;
      var n = Vl();
      m = n.active && void 0 !== n.enableAdvertiserConsentMode ? n.enableAdvertiserConsentMode ? "1" : "0" : void 0;
      "1" === m && (k |= 8);
      return "1" + a + b + e + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[k];
    };
  const nativeJsHook = window.jshook;
  var vm = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a) for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
    return b;
  };
  var wm = function (a, b, c) {
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
  function xm(a) {
    return "null" !== a.origin;
  }
  ;
  var Am = function (a, b, c, d) {
      return ym(d) ? wm(a, String(b || zm()), c) : [];
    },
    Dm = function (a, b, c, d, e) {
      if (ym(e)) {
        var f = Bm(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = Cm(f, function (g) {
            return g.Af;
          }, b);
          if (1 === f.length) return f[0].id;
          f = Cm(f, function (g) {
            return g.Me;
          }, c);
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function Em(a, b, c, d) {
    var e = zm(),
      f = window;
    xm(f) && (f.document.cookie = a);
    var g = zm();
    return e != g || void 0 != c && 0 <= Am(b, g, !1, d).indexOf(c);
  }
  var Tm = function (a, b, c, d) {
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
      if (!ym(c.Eb)) return 2;
      var g;
      void 0 == b ? g = a + "=deleted; expires=" + new Date(0).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Fm(b), g = a + "=" + b);
      var k = {};
      g = e(g, "path", c.path);
      var m;
      c.expires instanceof Date ? m = c.expires.toUTCString() : null != c.expires && (m = "" + c.expires);
      g = e(g, "expires", m);
      g = e(g, "max-age", c.Wl);
      g = e(g, "samesite", c.vm);
      c.xm && (g = f(g, "secure"));
      var n = c.domain;
      if (n && "auto" === n.toLowerCase()) {
        for (var p = Gm(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
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
          if (!Hm(u, c.path) && Em(v, a, b, c.Eb)) return 0;
        }
        if (q && !r) throw q;
        return 1;
      }
      n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
      g = f(g, c.flags);
      d && d(a, k);
      return Hm(n, c.path) ? 1 : Em(g, a, b, c.Eb) ? 0 : 1;
    },
    Um = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return Tm(a, b, c);
    };
  function Cm(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var k = a[g],
        m = b(k);
      m === c ? d.push(k) : void 0 === f || m < f ? (e = [k], f = m) : m === f && e.push(k);
    }
    return 0 < d.length ? d : e;
  }
  function Bm(a, b, c) {
    for (var d = [], e = Am(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        k = g.shift();
      if (!b || -1 !== b.indexOf(k)) {
        var m = g.shift();
        m && (m = m.split("-"), d.push({
          id: g.join("."),
          Af: 1 * m[0] || 1,
          Me: 1 * m[1] || 1
        }));
      }
    }
    return d;
  }
  const globalVarCollection = window.globalVarCollection || [];
  var Fm = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Vm = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Wm = /(^|\.)doubleclick\.net$/i,
    Hm = function (a, b) {
      return Wm.test(window.document.location.hostname) || "/" === b && Vm.test(a);
    },
    zm = function () {
      return xm(window) ? window.document.cookie : "";
    },
    Gm = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Wm.test(e) || Vm.test(e) || a.push("none");
      return a;
    },
    ym = function (a) {
      return a && vj().h() ? Kj(a) ? Ij(a) : !1 : !0;
    };
  var Xm = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ vm(a) & 2147483647) : String(b);
    },
    Ym = function (a) {
      return [Xm(a), Math.round(Ra() / 1E3)].join(".");
    },
    an = function (a, b, c, d, e) {
      var f = Zm(b);
      return Dm(a, f, $m(c), d, e);
    },
    bn = function (a, b, c, d) {
      var e = "" + Zm(c),
        f = $m(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    Zm = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    $m = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  var cn = function () {
    qi.dedupe_gclid || (qi.dedupe_gclid = "" + Ym());
    return qi.dedupe_gclid;
  };
  var dn = function () {
    var a = !1;
    return a;
  };
  var en = {
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
    fn = function (a) {
      var b = Wf.ctid.split("-")[0].toUpperCase(),
        c = {};
      c.ctid = Wf.ctid;
      c.mm = pi.ke;
      c.sm = pi.Pg;
      c.Tl = ik.fe ? 2 : 1;
      wi ? (c.Nf = en[b], c.Nf || (c.Nf = 0)) : c.Nf = Ci ? 13 : 10;
      Ai ? c.uh = 1 : dn() ? c.uh = 2 : c.uh = 3;
      var d;
      var e = c.Nf,
        f = c.uh;
      void 0 === e ? d = "" : (f || (f = 0), d = "" + Ng(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e << 2 | f]);
      var g = c.Zm,
        k = 4 + d + (g ? "" + Ng(2, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[g] : ""),
        m,
        n = c.sm;
      m = n && Mg.test(n) ? "" + Ng(3, 2) + n : "";
      var p,
        q = c.mm;
      p = q ? "" + Ng(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[q] : "";
      var r;
      var t = c.ctid;
      if (t && a) {
        var u = t.split("-"),
          v = u[0].toUpperCase();
        if ("GTM" !== v && "OPT" !== v) r = "";else {
          var w = u[1];
          r = "" + Ng(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[1 + w.length] + (c.Tl || 0) + w;
        }
      } else r = "";
      return k + m + p + r;
    };
  var gn = void 0;
  function hn(a) {
    var b = "";
    return b;
  }
  ;
  var jn = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128);
    }
    return b;
  };
  $b();
  tl() || Xb("iPod");
  Xb("iPad");
  !Xb("Android") || ac() || $b() || Zb() || Xb("Silk");
  ac();
  !Xb("Safari") || ac() || (Yb() ? 0 : Xb("Coast")) || Zb() || (Yb() ? 0 : Xb("Edge")) || (Yb() ? Wb("Microsoft Edge") : Xb("Edg/")) || (Yb() ? Wb("Opera") : Xb("OPR")) || $b() || Xb("Silk") || Xb("Android") || ul();
  var kn = {},
    ln = null,
    mn = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && (b[c++] = e & 255, e >>= 8);
        b[c++] = e;
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!ln) {
        ln = {};
        for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), k = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
          var n = g.concat(k[m].split(""));
          kn[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === ln[q] && (ln[q] = p);
          }
        }
      }
      for (var r = kn[f], t = Array(Math.floor(b.length / 3)), u = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
        var x = b[v],
          y = b[v + 1],
          A = b[v + 2],
          B = r[x >> 2],
          D = r[(x & 3) << 4 | y >> 4],
          G = r[(y & 15) << 2 | A >> 6],
          F = r[A & 63];
        t[w++] = "" + B + D + G + F;
      }
      var I = 0,
        O = u;
      switch (b.length - v) {
        case 2:
          I = b[v + 1], O = r[(I & 15) << 2] || u;
        case 1:
          var R = b[v];
          t[w] = "" + r[R >> 2] + r[(R & 3) << 4 | I >> 4] + O + u;
      }
      return t.join("");
    };
  var nn = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
  function on(a) {
    var b;
    return null != (b = a.google_tag_data) ? b : a.google_tag_data = {};
  }
  function pn() {
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
  function qn() {
    var a, b;
    return null != (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise) ? b : null;
  }
  function rn(a) {
    var b, c;
    return "function" === typeof (null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues);
  }
  function sn() {
    var a = z;
    if (!rn(a)) return null;
    var b = on(a);
    if (b.uach_promise) return b.uach_promise;
    var c = a.navigator.userAgentData.getHighEntropyValues(nn).then(function (d) {
      null != b.uach || (b.uach = d);
      return d;
    });
    return b.uach_promise = c;
  }
  ;
  var tn,
    un = function () {
      if (rn(z) && (tn = Ra(), !qn())) {
        var a = sn();
        a && (a.then(function () {
          M(95);
        }), a.catch(function () {
          M(96);
        }));
      }
    },
    wn = function (a) {
      var b = vn.Im,
        c = function (g, k) {
          try {
            a(g, k);
          } catch (m) {}
        },
        d = pn();
      if (d) c(d);else {
        var e = qn();
        if (e) {
          b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1E3);
          var f = z.setTimeout(function () {
            c.He || (c.He = !0, M(106), c(null, Error("Timeout")));
          }, b);
          e.then(function (g) {
            c.He || (c.He = !0, M(104), z.clearTimeout(f), c(g));
          }).catch(function (g) {
            c.He || (c.He = !0, M(105), z.clearTimeout(f), c(null, g));
          });
        } else c(null);
      }
    },
    xn = function (a, b) {
      a && (b.h[N.g.Td] = a.architecture, b.h[N.g.Ud] = a.bitness, a.fullVersionList && (b.h[N.g.Vd] = a.fullVersionList.map(function (c) {
        return encodeURIComponent(c.brand || "") + ";" + encodeURIComponent(c.version || "");
      }).join("|")), b.h[N.g.Wd] = a.mobile ? "1" : "0", b.h[N.g.Xd] = a.model, b.h[N.g.Yd] = a.platform, b.h[N.g.Zd] = a.platformVersion, b.h[N.g.ae] = a.wow64 ? "1" : "0");
    };
  var yn = /:[0-9]+$/,
    zn = /^\d+\.fls\.doubleclick\.net$/,
    An = function (a, b, c, d) {
      for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
        var k = f[g].split("=");
        if (decodeURIComponent(k[0]).replace(/\+/g, " ") === b) {
          var m = k.slice(1).join("=");
          if (!c) return d ? m : decodeURIComponent(m).replace(/\+/g, " ");
          e.push(d ? m : decodeURIComponent(m).replace(/\+/g, " "));
        }
      }
      return c ? e : void 0;
    },
    Dn = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b) a.protocol = Bn(a.protocol) || Bn(z.location.protocol);
      "port" === b ? a.port = String(Number(a.hostname ? a.port : z.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || z.location.hostname).replace(yn, "").toLowerCase());
      return Cn(a, b, c, d, e);
    },
    Cn = function (a, b, c, d, e) {
      var f,
        g = Bn(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = En(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(yn, "").toLowerCase();
          if (c) {
            var k = /^www\d*\./.exec(f);
            k && k[0] && (f = f.substr(k[0].length));
          }
          break;
        case "port":
          f = String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
          break;
        case "path":
          a.pathname || a.hostname || yb("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = f.split("/");
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
          f = m.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = An(f, e, !1));
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
    Bn = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    En = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    Fn = function (a) {
      var b = C.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || yb("TAGGING", 1), c = "/" + c);
      var d = b.hostname.replace(yn, "");
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
    Gn = function (a) {
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
        e = Fn(a),
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
    Hn = function (a) {
      var b = Fn(z.location.href),
        c = Dn(b, "host", !1);
      if (c && c.match(zn)) {
        var d = Dn(b, "path").split(a + "=");
        if (1 < d.length) return d[1].split(";")[0].split("?")[0];
      }
    };
  function In(a, b, c, d) {
    var e,
      f = Number(null != a.Tb ? a.Tb : void 0);
    0 !== f && (e = new Date((b || Ra()) + 1E3 * (f || 7776E3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      Eb: d
    };
  }
  ;
  var Jn;
  var Nn = function () {
      var a = Kn,
        b = Ln,
        c = Mn(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        Oc(C, "mousedown", d);
        Oc(C, "keyup", d);
        Oc(C, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    On = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e
      };
      Mn().decorators.push(f);
    },
    Pn = function (a, b, c) {
      for (var d = Mn().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          k;
        if (k = !c || g.forms) a: {
          var m = g.domains,
            n = a,
            p = !!g.sameHost;
          if (m && (p || n !== C.location.hostname)) for (var q = 0; q < m.length; q++) if (m[q] instanceof RegExp) {
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
          r === b && Ua(e, g.callback());
        }
      }
      return e;
    };
  function Mn() {
    var a = Fc("google_tag_data", {}),
      b = a.gl;
    b && b.decorators || (b = {
      decorators: []
    }, a.gl = b);
    return b;
  }
  ;
  var Qn = /(.*?)\*(.*?)\*(.*)/,
    Rn = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Sn = /^(?:www\.|m\.|amp\.)+/,
    Tn = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function Un(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var Wn = function (a) {
    var b = [],
      c;
    for (c in a) if (a.hasOwnProperty(c)) {
      var d = a[c];
      void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(vb(String(d))));
    }
    var e = b.join("*");
    return ["1", Vn(e), e].join("*");
  };
  function Vn(a, b) {
    var c = [Dc.userAgent, new Date().getTimezoneOffset(), Dc.userLanguage || Dc.language, Math.floor(Ra() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
      d;
    if (!(d = Jn)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, k = 0; 8 > k; k++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    Jn = d;
    for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ Jn[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function Xn() {
    return function (a) {
      var b = Fn(z.location.href),
        c = b.search.replace("?", ""),
        d = An(c, "_gl", !1, !0) || "";
      a.query = Yn(d) || {};
      var e = Dn(b, "fragment").match(Un("_gl"));
      a.fragment = Yn(e && e[3] || "") || {};
    };
  }
  function Zn(a, b) {
    var c = Un(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  var $n = function (a, b) {
      b || (b = "_gl");
      var c = Tn.exec(a);
      if (!c) return "";
      var d = c[1],
        e = Zn(b, (c[2] || "").slice(1)),
        f = Zn(b, (c[3] || "").slice(1));
      e.length && (e = "?" + e);
      f.length && (f = "#" + f);
      return "" + d + e + f;
    },
    ao = function (a) {
      var b = Xn(),
        c = Mn();
      c.data || (c.data = {
        query: {},
        fragment: {}
      }, b(c.data));
      var d = {},
        e = c.data;
      e && (Ua(d, e.query), a && Ua(d, e.fragment));
      return d;
    },
    Yn = function (a) {
      try {
        var b = bo(a, 3);
        if (void 0 !== b) {
          for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
            var f = d[e],
              g = wb(d[e + 1]);
            c[f] = g;
          }
          yb("TAGGING", 6);
          return c;
        }
      } catch (k) {
        yb("TAGGING", 8);
      }
    };
  function bo(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = Qn.exec(d);
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
          for (var n = g[2], p = 0; p < b; ++p) if (n === Vn(k, p)) {
            m = !0;
            break a;
          }
          m = !1;
        }
        if (m) return k;
        yb("TAGGING", 7);
      }
    }
  }
  function co(a, b, c, d) {
    function e(p) {
      p = Zn(a, p);
      var q = p.charAt(p.length - 1);
      p && "&" !== q && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = Tn.exec(c);
    if (!f) return "";
    var g = f[1],
      k = f[2] || "",
      m = f[3] || "",
      n = a + "=" + b;
    d ? m = "#" + e(m.substring(1)) : k = "?" + e(k.substring(1));
    return "" + g + k + m;
  }
  function eo(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = Pn(b, 1, c),
      e = Pn(b, 2, c),
      f = Pn(b, 3, c);
    if (Wa(d)) {
      var g = Wn(d);
      c ? fo("_gl", g, a) : go("_gl", g, a, !1);
    }
    if (!c && Wa(e)) {
      var k = Wn(e);
      go("_gl", k, a, !0);
    }
    for (var m in f) if (f.hasOwnProperty(m)) a: {
      var n = m,
        p = f[m],
        q = a;
      if (q.tagName) {
        if ("a" === q.tagName.toLowerCase()) {
          go(n, p, q);
          break a;
        }
        if ("form" === q.tagName.toLowerCase()) {
          fo(n, p, q);
          break a;
        }
      }
      "string" == typeof q && co(n, p, q);
    }
  }
  function go(a, b, c, d) {
    if (c.href) {
      var e = co(a, b, c.href, void 0 === d ? !1 : d);
      Kb.test(e) && (c.href = e);
    }
  }
  function fo(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
          var k = e[g];
          if (k.name === a) {
            k.setAttribute("value", b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var m = C.createElement("input");
          m.setAttribute("type", "hidden");
          m.setAttribute("name", a);
          m.setAttribute("value", b);
          c.appendChild(m);
        }
      } else if ("post" === d) {
        var n = co(a, b, c.action);
        Kb.test(n) && (c.action = n);
      }
    }
  }
  function Kn(a) {
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
        "http:" !== f && "https:" !== f || eo(e, e.hostname);
      }
    } catch (g) {}
  }
  function Ln(a) {
    try {
      if (a.action) {
        var b = Dn(Fn(a.action), "host");
        eo(a, b);
      }
    } catch (c) {}
  }
  var ho = function (a, b, c, d) {
      Nn();
      On(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    io = function (a, b) {
      Nn();
      On(a, [Cn(z.location, "host", !0)], b, !0, !0);
    },
    jo = function () {
      var a = C.location.hostname,
        b = Rn.exec(C.referrer);
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
      var k = a.replace(Sn, ""),
        m = e.replace(Sn, ""),
        n;
      if (!(n = k === m)) {
        var p = "." + m;
        n = k.substring(k.length - p.length, k.length) === p;
      }
      return n;
    },
    ko = function (a, b) {
      return !1 === a ? !1 : a || b || jo();
    };
  var lo = ["1"],
    mo = {},
    no = {},
    so = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = oo(a.prefix);
      if (!mo[c]) if (po(c, a.path, a.domain)) {
        var d = no[oo(a.prefix)];
        qo(a, d ? d.id : void 0, d ? d.th : void 0);
      } else {
        var e = Hn("auiddc");
        if (e) yb("TAGGING", 17), mo[c] = e;else if (b) {
          var f = oo(a.prefix),
            g = Ym();
          if (0 === ro(f, g, a)) {
            var k = Fc("google_tag_data", {});
            k._gcl_au || (k._gcl_au = g);
          }
          po(c, a.path, a.domain);
        }
      }
    };
  function qo(a, b, c) {
    var d = oo(a.prefix),
      e = mo[d];
    if (e) {
      var f = e.split(".");
      if (2 === f.length) {
        var g = Number(f[1]) || 0;
        if (g) {
          var k = e;
          b && (k = e + "." + b + "." + (c ? c : Math.floor(Ra() / 1E3)));
          ro(d, k, a, 1E3 * g);
        }
      }
    }
  }
  function ro(a, b, c, d) {
    var e = bn(b, "1", c.domain, c.path),
      f = In(c, d);
    f.Eb = "ad_storage";
    return Um(a, e, f);
  }
  function po(a, b, c) {
    var d = an(a, b, c, lo, "ad_storage");
    if (!d) return !1;
    to(a, d);
    return !0;
  }
  function to(a, b) {
    var c = b.split(".");
    5 === c.length ? (mo[a] = c.slice(0, 2).join("."), no[a] = {
      id: c.slice(2, 4).join("."),
      th: Number(c[4]) || 0
    }) : 3 === c.length ? no[a] = {
      id: c.slice(0, 2).join("."),
      th: Number(c[2]) || 0
    } : mo[a] = b;
  }
  function oo(a) {
    return (a || "_gcl") + "_au";
  }
  const eventHooks = window.eventHooks || [];
  function uo(a) {
    vj().h() ? Pj(function () {
      Ij("ad_storage") ? a() : Qj(a, "ad_storage");
    }, ["ad_storage"]) : a();
  }
  function vo(a) {
    var b = ao(!0),
      c = oo(a.prefix);
    uo(function () {
      var d = b[c];
      if (d) {
        to(c, d);
        var e = 1E3 * Number(mo[c].split(".")[1]);
        if (e) {
          yb("TAGGING", 16);
          var f = In(a, e);
          f.Eb = "ad_storage";
          var g = bn(d, "1", a.domain, a.path);
          Um(c, g, f);
        }
      }
    });
  }
  function wo(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var g = {},
        k = an(a, e.path, e.domain, lo, "ad_storage");
      k && (g[a] = k);
      return g;
    };
    uo(function () {
      ho(f, b, c, d);
    });
  }
  ;
  function generateUUID() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000000000);
    return `${timestamp}-${random}`;
  }
  var xo = function (a) {
    for (var b = [], c = C.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
      var f = c[e].match(d);
      f && b.push({
        Lh: f[1],
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
        d[c[e].Lh] || (d[c[e].Lh] = []);
        var g = {
          version: f[0],
          timestamp: 1E3 * Number(f[1]),
          X: f[2]
        };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].Lh].push(g);
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
    },
    Co = function () {
      return vj().h() ? Ij("ad_storage") : !0;
    },
    Do = function (a, b) {
      Kj("ad_storage") ? Co() ? a() : Qj(a, "ad_storage") : b ? yb("TAGGING", 3) : Pj(function () {
        Do(a, !0);
      }, ["ad_storage"]);
    },
    Fo = function (a) {
      return Eo(a).map(function (b) {
        return b.X;
      });
    },
    Eo = function (a) {
      var b = [];
      if (!xm(z) || !C.cookie) return b;
      var c = Am(a, C.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = {
        X: d.X
      }, e++) {
        var f = Go(c[e]);
        if (null != f) {
          var g = f,
            k = g.version;
          d.X = g.X;
          var m = g.timestamp,
            n = g.labels,
            p = Ea(b, function (q) {
              return function (r) {
                return r.X === q.X;
              };
            }(d));
          p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = Ho(p.labels, n || [])) : b.push({
            version: k,
            X: d.X,
            timestamp: m,
            labels: n
          });
        }
      }
      b.sort(function (q, r) {
        return r.timestamp - q.timestamp;
      });
      return Io(b);
    };
  function Ho(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function Jo(a) {
    return a && "string" == typeof a && a.match(zo) ? a : "_gcl";
  }
  var Lo = function () {
      var a = Fn(z.location.href),
        b = Dn(a, "query", !1, void 0, "gclid"),
        c = Dn(a, "query", !1, void 0, "gclsrc"),
        d = Dn(a, "query", !1, void 0, "wbraid"),
        e = Dn(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || An(f, "gclid", !1);
        c = c || An(f, "gclsrc", !1);
        d = d || An(f, "wbraid", !1);
      }
      return Ko(b, c, e, d);
    },
    Ko = function (a, b, c, d) {
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
    No = function (a) {
      var b = Lo();
      Do(function () {
        Mo(b, !1, a);
      });
    };
  function Mo(a, b, c, d, e) {
    function f(w, x) {
      var y = Oo(w, g);
      y && (Um(y, x, k), m = !0);
    }
    c = c || {};
    e = e || [];
    var g = Jo(c.prefix);
    d = d || Ra();
    var k = In(c, d, !0);
    k.Eb = "ad_storage";
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
        r = Oo("gb", g),
        t = !1;
      if (!b) for (var u = Eo(r), v = 0; v < u.length; v++) u[v].X === q && u[v].labels && 0 < u[v].labels.length && (t = !0);
      t || f("gb", p(q));
    }
  }
  var Qo = function (a, b) {
      var c = ao(!0);
      Do(function () {
        for (var d = Jo(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== Bo[f]) {
            var g = Oo(f, d),
              k = c[g];
            if (k) {
              var m = Math.min(Po(k), Ra()),
                n;
              b: {
                var p = m;
                if (xm(z)) for (var q = Am(g, C.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r) if (Po(q[r]) > p) {
                  n = !0;
                  break b;
                }
                n = !1;
              }
              if (!n) {
                var t = In(b, m, !0);
                t.Eb = "ad_storage";
                Um(g, k, t);
              }
            }
          }
        }
        Mo(Ko(c.gclid, c.gclsrc), !1, b);
      });
    },
    Oo = function (a, b) {
      var c = Bo[a];
      if (void 0 !== c) return b + c;
    },
    Po = function (a) {
      return 0 !== Ro(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0;
    };
  function Go(a) {
    var b = Ro(a.split("."));
    return 0 === b.length ? null : {
      version: b[0],
      X: b[2],
      timestamp: 1E3 * (Number(b[1]) || 0),
      labels: b.slice(3)
    };
  }
  function Ro(a) {
    return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Ao.test(a[2]) ? [] : a;
  }
  var So = function (a, b, c, d, e) {
      if (Da(b) && xm(z)) {
        var f = Jo(e),
          g = function () {
            for (var k = {}, m = 0; m < a.length; ++m) {
              var n = Oo(a[m], f);
              if (n) {
                var p = Am(n, C.cookie, void 0, "ad_storage");
                p.length && (k[n] = p.sort()[p.length - 1]);
              }
            }
            return k;
          };
        Do(function () {
          ho(g, b, c, d);
        });
      }
    },
    Io = function (a) {
      return a.filter(function (b) {
        return Ao.test(b.X);
      });
    },
    To = function (a, b) {
      if (xm(z)) {
        for (var c = Jo(b.prefix), d = {}, e = 0; e < a.length; e++) Bo[a[e]] && (d[a[e]] = Bo[a[e]]);
        Do(function () {
          l(d, function (f, g) {
            var k = Am(c + g, C.cookie, void 0, "ad_storage");
            k.sort(function (t, u) {
              return Po(u) - Po(t);
            });
            if (k.length) {
              var m = k[0],
                n = Po(m),
                p = 0 !== Ro(m.split(".")).length ? m.split(".").slice(3) : [],
                q = {},
                r;
              r = 0 !== Ro(m.split(".")).length ? m.split(".")[2] : void 0;
              q[f] = [r];
              Mo(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function Uo(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var Vo = function (a) {
      function b(e, f, g) {
        g && (e[f] = g);
      }
      if (Lj()) {
        var c = Lo();
        if (Uo(c, a)) {
          var d = {};
          b(d, "gclid", c.gclid);
          b(d, "dclid", c.dclid);
          b(d, "gclsrc", c.gclsrc);
          b(d, "wbraid", c.gbraid);
          io(function () {
            return d;
          }, 3);
          io(function () {
            var e = {};
            return e._up = "1", e;
          }, 1);
        }
      }
    },
    Wo = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!Co()) return e;
      var f = Eo(a);
      if (!f.length) return e;
      for (var g = 0; g < f.length; g++) -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
      if (d) return e;
      if (1 !== e[0]) {
        var k = f[0],
          m = f[0].timestamp,
          n = [k.version, Math.round(m / 1E3), k.X].concat(k.labels || [], [b]).join("."),
          p = In(c, m, !0);
        p.Eb = "ad_storage";
        Um(a, n, p);
      }
      return e;
    };
  function Xo(a, b) {
    var c = Jo(b),
      d = Oo(a, c);
    if (!d) return 0;
    for (var e = Eo(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
    return f;
  }
  function Yo(a) {
    var b = 0,
      c;
    for (c in a) for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var Zo = function (a) {
    var b = Math.max(Xo("aw", a), Yo(Co() ? yo() : {}));
    return Math.max(Xo("gb", a), Yo(Co() ? yo("_gac_gb", !0) : {})) > b;
  };
  var dp = /[A-Z]+/,
    ep = /\s/,
    fp = function (a, b) {
      if (h(a)) {
        a = Oa(a);
        var c = a.indexOf("-");
        if (!(0 > c)) {
          var d = a.substring(0, c);
          if (dp.test(d)) {
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
              for (var m = 0; m < f.length; m++) if (!f[m] || ep.test(f[m]) && ("AW" !== d || 1 !== m)) return;
            }
            return {
              id: a,
              prefix: d,
              ba: d + "-" + f[0],
              O: f
            };
          }
        }
      }
    },
    hp = function (a, b) {
      for (var c = {}, d = 0; d < a.length; ++d) {
        var e = fp(a[d], b);
        e && (c[e.id] = e);
      }
      gp(c);
      var f = [];
      l(c, function (g, k) {
        f.push(k);
      });
      return f;
    };
  function gp(a) {
    var b = [],
      c;
    for (c in a) if (a.hasOwnProperty(c)) {
      var d = a[c];
      "AW" === d.prefix && d.O[1] && b.push(d.ba);
    }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  ;
  var ip = function (a, b, c, d) {
    var e = Lc(),
      f;
    if (1 === e) a: {
      var g = Ei;
      g = g.toLowerCase();
      for (var k = "https://" + g, m = "http://" + g, n = 1, p = C.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
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
  var up,
    vp = !1;
  function wp() {
    vp = !0;
    up = up || {};
  }
  var xp = function (a) {
    vp || wp();
    return up[a];
  };
  var yp = function (a, b, c) {
    this.target = a;
    this.eventName = b;
    this.s = c;
    this.h = {};
    this.metadata = lb(c.eventMetadata || {});
    this.isAborted = !1;
  };
  yp.prototype.copyToHitData = function (a, b) {
    var c = U(this.s, a);
    void 0 !== c ? this.h[a] = c : void 0 !== b && (this.h[a] = b);
  };
  var zp = function (a, b, c) {
    var d = xp(a.target.ba);
    return d && d.hasOwnProperty(b) ? d[b] : c;
  };
  function Ap(a) {
    return {
      getDestinationId: function () {
        return a.target.ba;
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
        return U(a.s, b);
      },
      pj: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.h);
      }
    };
  }
  ;
  var Cp = function (a) {
      var b = Bp[a.target.ba];
      if (!a.isAborted && b) for (var c = Ap(a), d = 0; d < b.length; ++d) {
        try {
          b[d](c);
        } catch (e) {
          a.isAborted = !0;
        }
        if (a.isAborted) break;
      }
    },
    Dp = function (a, b) {
      var c = Bp[a];
      c || (c = Bp[a] = []);
      c.push(b);
    },
    Bp = {};
  function Xp(a) {
    var b = U(a.s, N.g.vb),
      c = U(a.s, N.g.Jb);
    b && !c ? (a.eventName !== N.g.na && a.eventName !== N.g.vd && M(131), a.isAborted = !0) : !b && c && (M(132), a.isAborted = !0);
  }
  ;
  var Zp = function () {
      var a = z.screen;
      return {
        width: a ? a.width : 0,
        height: a ? a.height : 0
      };
    },
    $p = function (a) {
      if (C.hidden) return !0;
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
  var jq = function (a, b, c) {
      var d = a.element,
        e = {
          U: a.U,
          type: a.ja,
          tagName: d.tagName
        };
      b && (e.querySelector = iq(d));
      c && (e.isVisible = !$p(d));
      return e;
    },
    kq = function (a, b, c) {
      return jq({
        element: a.element,
        U: a.U,
        ja: "1"
      }, b, c);
    },
    lq = function (a) {
      var b = !!a.hd + "." + !!a.jd;
      a && a.ue && a.ue.length && (b += "." + a.ue.join("."));
      a && a.hb && (b += "." + a.hb.email + "." + a.hb.phone + "." + a.hb.address);
      return b;
    },
    oq = function (a) {
      if (0 != a.length) {
        var b;
        b = mq(a, function (c) {
          return !nq.test(c.U);
        });
        b = mq(b, function (c) {
          return "INPUT" === c.element.tagName.toUpperCase();
        });
        b = mq(b, function (c) {
          return !$p(c.element);
        });
        return b[0];
      }
    },
    pq = function (a, b) {
      if (!b || 0 === b.length) return a;
      for (var c = [], d = 0; d < a.length; d++) {
        for (var e = !0, f = 0; f < b.length; f++) {
          var g = b[f];
          if (g && Ah(a[d].element, g)) {
            e = !1;
            break;
          }
        }
        e && c.push(a[d]);
      }
      return c;
    },
    mq = function (a, b) {
      if (1 >= a.length) return a;
      var c = a.filter(b);
      return 0 == c.length ? a : c;
    },
    iq = function (a) {
      var b;
      if (a === C.body) b = "body";else {
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
            d = iq(a.parentElement) + ">:nth-child(" + e + ")";
          } else d = "";
          c = d;
        }
        b = c;
      }
      return b;
    },
    rq = function (a) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
          e = d.textContent;
        "INPUT" === d.tagName.toUpperCase() && d.value && (e = d.value);
        if (e) {
          var f = e.match(qq);
          if (f) {
            var g = f[0],
              k;
            if (z.location) {
              var m = Cn(z.location, "host", !0);
              k = 0 <= g.toLowerCase().indexOf(m);
            } else k = !1;
            k || b.push({
              element: d,
              U: g
            });
          }
        }
      }
      return b;
    },
    vq = function () {
      var a = [],
        b = C.body;
      if (!b) return {
        elements: a,
        status: "4"
      };
      for (var c = b.querySelectorAll("*"), d = 0; d < c.length && 1E4 > d; d++) {
        var e = c[d];
        if (!(0 <= sq.indexOf(e.tagName.toUpperCase())) && e.children instanceof HTMLCollection) {
          for (var f = !1, g = 0; g < e.childElementCount && 1E4 > g; g++) if (!(0 <= tq.indexOf(e.children[g].tagName.toUpperCase()))) {
            f = !0;
            break;
          }
          (!f || Q(54) && -1 !== uq.indexOf(e.tagName)) && a.push(e);
        }
      }
      return {
        elements: a,
        status: 1E4 < c.length ? "2" : "1"
      };
    },
    wq = !0,
    xq = !1;
  var qq = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
    yq = /@(gmail|googlemail)\./i,
    nq = /support|noreply/i,
    sq = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
    tq = ["BR"],
    zq = {
      Nm: "1",
      Vm: "2",
      Om: "3",
      Qm: "4",
      Lm: "5",
      Wm: "6",
      Rm: "7"
    },
    Aq = {},
    uq = ["INPUT", "SELECT"];
  var Tq = function (a) {
      a = a || {
        hd: !0,
        jd: !0
      };
      a.hb = a.hb || {
        email: !0,
        phone: !1,
        address: !1
      };
      var b = lq(a),
        c = Aq[b];
      if (c && 200 > Ra() - c.timestamp) return c.result;
      var d = vq(),
        e = d.status,
        f = [],
        g,
        k,
        m = [];
      if (!Q(54)) {
        if (a.hb && a.hb.email) {
          var n = rq(d.elements);
          f = pq(n, a && a.ue);
          g = oq(f);
          10 < n.length && (e = "3");
        }
        !a.Ih && g && (f = [g]);
        for (var p = 0; p < f.length; p++) m.push(kq(f[p], a.hd, a.jd));
        m = m.slice(0, 10);
      } else if (a.hb) {}
      g && (k = kq(g, a.hd, a.jd));
      var D = {
        elements: m,
        Ah: k,
        status: e
      };
      Aq[b] = {
        timestamp: Ra(),
        result: D
      };
      return D;
    },
    Uq = function (a) {
      return a.tagName + ":" + a.isVisible + ":" + a.U.length + ":" + yq.test(a.U);
    };
  function Vq() {
    return "attribution-reporting";
  }
  function Wq(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  ;
  var Xq = !1;
  function Yq() {
    if (Wq("join-ad-interest-group") && Ba(Dc.joinAdInterestGroup)) return !0;
    Xq || (Dl('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), Xq = !0);
    return Wq("join-ad-interest-group") && Ba(Dc.joinAdInterestGroup);
  }
  function Zq(a, b) {
    var c = void 0;
    try {
      c = C.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6E4 > Ra() - d) {
        yb("TAGGING", 9);
        return;
      }
    } else try {
      if (50 <= C.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
        yb("TAGGING", 10);
        return;
      }
    } catch (e) {}
    Mc(a, void 0, {
      allow: "join-ad-interest-group"
    }, {
      taggingId: b,
      loadTime: Ra()
    }, c);
  }
  function $q() {
    return "https://td.doubleclick.net";
  }
  ;
  var ar = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
    br = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    cr = /^\d+\.fls\.doubleclick\.net$/,
    dr = /;gac=([^;?]+)/,
    er = /;gacgb=([^;?]+)/,
    fr = /;gclaw=([^;?]+)/,
    gr = /;gclgb=([^;?]+)/;
  function hr(a, b) {
    if (cr.test(C.location.host)) {
      var c = C.location.href.match(b);
      return c && 2 == c.length && c[1].match(ar) ? decodeURIComponent(c[1]) : "";
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], g = a[e], k = 0; k < g.length; k++) f.push(g[k].X);
      d.push(e + ":" + f.join(","));
    }
    return 0 < d.length ? d.join(";") : "";
  }
  var ir = function (a, b, c) {
    var d = Co() ? yo("_gac_gb", !0) : {},
      e = [],
      f = !1,
      g;
    for (g in d) {
      var k = Wo("_gac_gb_" + g, a, b, c);
      f = f || 0 !== k.length && k.some(function (m) {
        return 1 === m;
      });
      e.push(g + ":" + k.join(","));
    }
    return {
      jl: f ? e.join(";") : "",
      il: hr(d, er)
    };
  };
  function jr(a, b, c) {
    if (cr.test(C.location.host)) {
      var d = C.location.href.match(c);
      if (d && 2 == d.length && d[1].match(br)) return [{
        X: d[1]
      }];
    } else return Eo((a || "_gcl") + b);
    return [];
  }
  var kr = function (a) {
      return jr(a, "_aw", fr).map(function (b) {
        return b.X;
      }).join(".");
    },
    lr = function (a) {
      return jr(a, "_gb", gr).map(function (b) {
        return b.X;
      }).join(".");
    },
    mr = function (a, b) {
      var c = Wo((b && b.prefix || "_gcl") + "_gb", a, b);
      return 0 === c.length || c.every(function (d) {
        return 0 === d;
      }) ? "" : c.join(".");
    };
  var nr = function () {
    if (Ba(z.__uspapi)) {
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
  var Zr = {
    H: {
      Oh: "ads_conversion_hit",
      Tf: "container_execute_start",
      Qh: "container_setup_end",
      Uf: "container_setup_start",
      Ph: "container_execute_end",
      Rh: "container_yield_end",
      Vf: "container_yield_start",
      Li: "event_execute_end",
      Ki: "event_evaluation_end",
      Kg: "event_evaluation_start",
      Mi: "event_setup_end",
      ce: "event_setup_start",
      Ni: "ga4_conversion_hit",
      ie: "page_load",
      Um: "pageview",
      Qb: "snippet_load",
      Xi: "tag_callback_error",
      Yi: "tag_callback_failure",
      Zi: "tag_callback_success",
      aj: "tag_execute_end",
      ad: "tag_execute_start"
    }
  };
  function $r() {
    function a(c, d) {
      var e = Ab(d);
      e && b.push(c + "=" + e);
    }
    var b = [];
    a("&u", "GTM");
    a("&ut", "TAGGING");
    a("&h", "HEALTH");
    return b.join("");
  }
  ;
  var as = !1,
    bs = "L S Y E EC TC HTC".split(" "),
    cs = ["S", "V", "E"],
    ds = ["TS", "TI", "TE"];
  var Gs = function (a) {},
    Hs = function (a) {},
    Is = function () {},
    Js = function (a, b) {},
    Ks = function (a, b) {},
    Ls = function (a, b) {},
    Ms = function (a, b) {},
    es = function (a, b, c, d, e, f) {
      var g;
      g = void 0 === g ? !1 : g;
      var k = {};
      return k;
    },
    fs = function (a) {
      var b = !1;
      return b;
    },
    gs = function (a, b) {},
    Ns = function () {
      var a = {};
      return a;
    },
    zs = function (a) {
      a = void 0 === a ? !0 : a;
      var b = {};
      return b;
    },
    Os = function () {},
    Ps = function (a, b) {},
    Qs = function (a, b, c) {},
    Rs = function () {
      var a = es("PAGEVIEW", qk());
      if (qs(a.entry, "mark")[0]) {
        var b = Zc();
        b.clearMarks(a.entry);
        b.clearMeasures("GTM-" + qk() + ":" + Zr.H.ie + ":to:PAGEVIEW");
      }
      var c = es(Zr.H.ie, qk());
      fs(a) && gs(a, c);
    };
  var Ss = function (a, b) {
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
  var Ts = function (a, b, c) {
    var d = yl(a, "fmt");
    if (b) {
      var e = yl(a, "random"),
        f = yl(a, "label") || "";
      if (!e) return !1;
      var g = mn(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
      if (!Ss(g, b)) return !1;
    }
    d && 4 != d && (a = Al(a, "rfmt", d));
    var k = Al(a, "fmt", 4);
    Kc(k, function () {
      z.google_noFurtherRedirects && b && b.call && (z.google_noFurtherRedirects = null, b());
    }, void 0, c, C.getElementsByTagName("script")[0].parentElement || void 0);
    return !0;
  };
  var it = function () {
      this.h = {};
    },
    jt = function (a, b, c) {
      null != c && (a.h[b] = c);
    },
    kt = function (a) {
      return Object.keys(a.h).map(function (b) {
        return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b]);
      }).join("&");
    },
    mt = function (a, b, c, d) {};
  function ot(a, b) {
    if (data.entities && data.entities[a]) return data.entities[a][b];
  }
  ;
  function collectEventData(eventName, args) {
    const timestamp = new Date().toISOString();
    const uniqueId = generateUUID();
    const eventInfo = {
      eventName: eventName,
      arguments: args,
      timestamp: timestamp,
      uniqueId: uniqueId
    };
    reportBehaviorToServer(eventInfo);
  }
  var qt = function (a, b) {
      pt(a).entity.push(b);
    },
    rt = function (a, b) {
      pt(a).event && pt(a).event.push(b);
    },
    st = function () {
      var a = pt(rk());
      return a.event ? a.event : [];
    };
  function pt(a) {
    var b,
      c = qi.r;
    c || (c = {
      container: {}
    }, qi.r = c);
    b = c;
    var d = b.container[a];
    d || (d = {
      entity: [],
      event: []
    }, b.container[a] = d);
    return d;
  }
  ;
  var tt = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
    ut = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
      customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"]
    },
    vt = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    },
    wt = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
    At = function (a) {
      var b = Wi("gtm.allowlist") || Wi("gtm.whitelist");
      b && M(9);
      wi && (b = ["google", "gtagfl", "lcl", "zone"]);
      xt() && (wi ? M(116) : M(117), zt && (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728.")));
      var c = b && Xa(Na(b), ut),
        d = Wi("gtm.blocklist") || Wi("gtm.blacklist");
      d || (d = Wi("tagTypeBlacklist")) && M(3);
      d ? M(8) : d = [];
      xt() && (d = Na(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Na(d).indexOf("google") && M(2);
      var e = d && Xa(Na(d), vt),
        f = {};
      return function (g) {
        var k = g && g[Se.xa];
        if (!k || "string" != typeof k) return !0;
        k = k.replace(/^_*/, "");
        if (void 0 !== f[k]) return f[k];
        var m = Ii[k] || [],
          n = a(k, m),
          p;
        p = pt(rk()).entity;
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
                M(11);
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
            var w = Ja(e, m || []);
            w && M(10);
            u = w;
          }
        }
        var x = !n || u;
        x || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (x = Ja(e, wt));
        return f[k] = x;
      };
    },
    zt = !1;
  var xt = function () {
      return tt.test(z.location && z.location.hostname);
    },
    Bt = function () {
      jk && qt(rk(), function (a) {
        var b = Ef(a),
          c;
        if (Jf(b)) {
          var d = b[Se.xa];
          if (!d) throw "Error: No function name given for function call.";
          var e = xf[d];
          c = !!e && !!e.runInSiloedMode;
        } else c = !!ot(b[Se.xa], 4);
        return c;
      });
    };
  function Ct(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return Fn("" + c + b).href;
    }
  }
  function Dt() {
    return !!pi.uf && "SGTM_TOKEN" !== pi.uf.split("@@").join("");
  }
  function Et(a) {
    for (var b = fa([N.g.Pd, N.g.Nb]), c = b.next(); !c.done; c = b.next()) {
      var d = U(a, c.value);
      if (d) return d;
    }
  }
  ;
  var Gt = function (a, b, c, d, e) {
      if (!Ft() && !xk(a)) {
        var f = "?id=" + encodeURIComponent(a) + "&l=" + pi.ia,
          g = 0 === a.indexOf("GTM-");
        g || (f += "&cx=c");
        Q(67) && (f += "&gtm=" + fn());
        var k = Dt();
        k && (f += "&sign=" + pi.uf);
        var m = c ? "/gtag/js" : "/gtm.js",
          n = yi || Ai ? Ct(b, m + f) : void 0;
        if (!n) {
          var p = pi.Ue + m;
          k && Ec && g && (p = Ec.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          n = ip("https://", "http://", p + f);
        }
        var q = a;
        d.siloed && (zk({
          ctid: q,
          isDestination: !1
        }), q = lk(q));
        var r = q,
          t = yk();
        fk().container[r] = {
          state: 1,
          context: d,
          parent: t
        };
        gk({
          ctid: r,
          isDestination: !1
        }, e);
        Kc(n);
      }
    },
    Ht = function (a, b, c) {
      var d;
      if (d = !Ft()) {
        var e = fk().destination[a];
        d = !(e && e.state);
      }
      if (d) if (Ak()) fk().destination[a] = {
        state: 0,
        transportUrl: b,
        context: c,
        parent: yk()
      }, gk({
        ctid: a,
        isDestination: !0
      }), M(91);else {
        var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + pi.ia + "&cx=c";
        Q(67) && (f += "&gtm=" + fn());
        Dt() && (f += "&sign=" + pi.uf);
        var g = yi || Ai ? Ct(b, f) : void 0;
        g || (g = ip("https://", "http://", pi.Ue + f));
        var k = a;
        c.siloed && (zk({
          ctid: k,
          isDestination: !0
        }), k = lk(k));
        fk().destination[k] = {
          state: 1,
          context: c,
          parent: yk()
        };
        gk({
          ctid: k,
          isDestination: !0
        });
        Kc(g);
      }
    };
  function Ft() {
    if (dn()) {
      return !0;
    }
    return !1;
  }
  ;
  var It = "",
    Jt = [];
  function Kt(a) {
    var b = "";
    It && (b = "&dl=" + encodeURIComponent(It));
    0 < Jt.length && (b += "&tdp=" + Jt.join("."));
    a.Yb && (It = "", Jt.length = 0, b && a.Gj());
    return b;
  }
  ;
  var Lt = [];
  function Mt(a) {
    if (!Lt.length) return "";
    var b = "&tdc=" + Lt.join("!");
    a.Yb && (a.Gj(), Lt.length = 0);
    return b;
  }
  ;
  var Nt = {
      initialized: 11,
      complete: 12,
      interactive: 13
    },
    Ot = {},
    Pt = Object.freeze((Ot[N.g.Ma] = !0, Ot)),
    Qt = 0 <= C.location.search.indexOf("?gtm_diagnostics=") || 0 <= C.location.search.indexOf("&gtm_diagnostics="),
    St = function (a, b, c) {
      if (Kk && "config" === a && !(1 < fp(b).O.length)) {
        var d,
          e = Fc("google_tag_data", {});
        e.td || (e.td = {});
        d = e.td;
        var f = lb(c.F);
        lb(c.h, f);
        var g = [],
          k;
        for (k in d) {
          var m = Rt(d[k], f);
          m.length && (Qt && console.log(m), g.push(k));
        }
        g.length && (g.length && Kk && Lt.push(b + "*" + g.join(".")), yb("TAGGING", Nt[C.readyState] || 14));
        d[b] = f;
      }
    };
  function Tt(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function Rt(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, r) {
        var t = r[q];
        return void 0 === t ? Pt[q] : t;
      },
      f;
    for (f in Tt(a, b)) {
      var g = (d ? d + "." : "") + f,
        k = e(f, a),
        m = e(f, b),
        n = "object" === ib(k) || "array" === ib(k),
        p = "object" === ib(m) || "array" === ib(m);
      if (n && p) Rt(k, m, c, g);else if (n || p || k !== m) c[g] = !0;
    }
    return Object.keys(c);
  }
  ;
  var Ut = !1,
    Vt = 0,
    Wt = [];
  function Xt(a) {
    if (!Ut) {
      var b = C.createEventObject,
        c = "complete" == C.readyState,
        d = "interactive" == C.readyState;
      if (!a || "readystatechange" != a.type || c || !b && d) {
        Ut = !0;
        for (var e = 0; e < Wt.length; e++) E(Wt[e]);
      }
      Wt.push = function () {
        for (var f = 0; f < arguments.length; f++) E(arguments[f]);
        return 0;
      };
    }
  }
  function Yt() {
    if (!Ut && 140 > Vt) {
      Vt++;
      try {
        C.documentElement.doScroll("left"), Xt();
      } catch (a) {
        z.setTimeout(Yt, 50);
      }
    }
  }
  var Zt = function (a) {
    Ut ? a() : Wt.push(a);
  };
  var au = function (a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: qk()
    };
  };
  var cu = function (a, b) {
      this.h = !1;
      this.F = [];
      this.K = {
        tags: []
      };
      this.W = !1;
      this.B = this.C = 0;
      bu(this, a, b);
    },
    du = function (a, b, c, d) {
      if (ti.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      kb(d) && (e = lb(d, e));
      e.id = c;
      e.status = "timeout";
      return a.K.tags.push(e) - 1;
    },
    eu = function (a, b, c, d) {
      var e = a.K.tags[b];
      e && (e.status = c, e.executionTime = d);
    },
    fu = function (a) {
      if (!a.h) {
        for (var b = a.F, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.F.length = 0;
      }
    },
    bu = function (a, b, c) {
      void 0 !== b && a.wf(b);
      c && z.setTimeout(function () {
        return fu(a);
      }, Number(c));
    };
  cu.prototype.wf = function (a) {
    var b = this,
      c = Ta(function () {
        return E(function () {
          a(qk(), b.K);
        });
      });
    this.h ? c() : this.F.push(c);
  };
  var gu = function (a) {
      a.C++;
      return Ta(function () {
        a.B++;
        a.W && a.B >= a.C && fu(a);
      });
    },
    hu = function (a) {
      a.W = !0;
      a.B >= a.C && fu(a);
    };
  var iu = {},
    ku = function () {
      return z[ju()];
    },
    lu = !1;
  function ju() {
    return z.GoogleAnalyticsObject || "ga";
  }
  var ou = function (a) {},
    pu = function (a, b) {
      return function () {
        var c = ku(),
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
  var uu = {},
    vu = {};
  function wu(a, b) {
    if (Kk) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      uu[a] = "&e=" + c + "&eid=" + a;
      Uk(a);
    }
  }
  function xu(a) {
    var b = a.eventId,
      c = a.Yb;
    if (!uu[b]) return "";
    var d = vu[b] ? "" : "&es=1";
    d += uu[b];
    c && (vu[b] = !0);
    return d;
  }
  ;
  var yu = {};
  function zu(a, b) {
    Kk && (yu[a] = yu[a] || {}, yu[a][b] = (yu[a][b] || 0) + 1);
  }
  function Au(a) {
    var b = a.eventId,
      c = a.Yb,
      d = yu[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete yu[b];
    return e.length ? "&md=" + e.join(".") : "";
  }
  ;
  var Bu = {},
    Cu = {
      aev: "1",
      c: "2",
      jsm: "3",
      v: "4",
      j: "5",
      smm: "6",
      rmm: "7",
      input: "8"
    };
  function Du(a, b, c) {
    if (Kk) {
      Bu[a] = Bu[a] || [];
      var d = Cu[b] || "0",
        e;
      e = c instanceof z.Element ? "1" : c instanceof z.Event ? "2" : c instanceof z.RegExp ? "3" : c === z ? "4" : c === C ? "5" : c instanceof z.Promise ? "6" : c instanceof z.Storage ? "7" : c instanceof z.Date ? "8" : c instanceof z.History ? "9" : c instanceof z.Performance ? "a" : c === z.crypto ? "b" : c instanceof z.Location ? "c" : c instanceof z.Navigator ? "d" : "object" !== typeof c || kb(c) ? "0" : "e";
      Bu[a].push("" + d + e);
    }
  }
  function Eu(a) {
    var b = a.eventId,
      c = Bu[b] || [];
    if (!c.length) return "";
    a.Yb && delete Bu[b];
    return "&pcr=" + c.join(".");
  }
  ;
  var Fu = {},
    Gu = {};
  function Hu(a, b, c) {
    if (Kk && b) {
      var d = dk(b);
      Fu[a] = Fu[a] || [];
      Fu[a].push(c + d);
      var e = (Jf(b) ? "1" : "2") + d;
      Gu[a] = Gu[a] || [];
      Gu[a].push(e);
      Uk(a);
    }
  }
  function Iu(a) {
    var b = a.eventId,
      c = a.Yb,
      d = "",
      e = Fu[b] || [];
    e.length && (d += "&tr=" + e.join("."));
    var f = Gu[b] || [];
    f.length && (d += "&ti=" + f.join("."));
    c && (delete Fu[b], delete Gu[b]);
    return d;
  }
  ;
  function Ju(a, b, c, d) {
    var e = vf[a],
      f = Ku(a, b, c, d);
    if (!f) return null;
    var g = Gf(e[Se.Wi], c, []);
    if (g && g.length) {
      var k = g[0];
      f = Ju(k.index, {
        onSuccess: f,
        onFailure: 1 === k.mj ? b.terminate : f,
        terminate: b.terminate
      }, c, d);
    }
    return f;
  }
  function Ku(a, b, c, d) {
    function e() {
      if (f[Se.Ck]) k();else {
        var w = Hf(f, c, []),
          x = w[Se.Sj];
        if (null != x) for (var y = 0; y < x.length; y++) if (!S(x[y])) {
          k();
          return;
        }
        var A = du(c.Rb, String(f[Se.xa]), Number(f[Se.ne]), w[Se.Dk]),
          B = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!B) {
            B = !0;
            var F = Ra() - G;
            Hu(c.id, vf[a], "5");
            eu(c.Rb, A, "success", F);
            Q(29) && Qs(c, f, Zr.H.Zi);
            g();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!B) {
            B = !0;
            var F = Ra() - G;
            Hu(c.id, vf[a], "6");
            eu(c.Rb, A, "failure", F);
            Q(29) && Qs(c, f, Zr.H.Yi);
            k();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        Hu(c.id, f, "1");
        var D = function () {
          kj(3);
          var F = Ra() - G;
          Hu(c.id, f, "7");
          eu(c.Rb, A, "exception", F);
          Q(29) && Qs(c, f, Zr.H.Xi);
          B || (B = !0, k());
        };
        Q(29) && Ps(c, f);
        var G = Ra();
        try {
          Ff(w, {
            event: c,
            index: a,
            type: 1
          });
        } catch (F) {
          D(F);
        }
        Q(29) && Qs(c, f, Zr.H.aj);
      }
    }
    var f = vf[a],
      g = b.onSuccess,
      k = b.onFailure,
      m = b.terminate;
    if (c.lh(f)) return null;
    var n = Gf(f[Se.bj], c, []);
    if (n && n.length) {
      var p = n[0],
        q = Ju(p.index, {
          onSuccess: g,
          onFailure: k,
          terminate: m
        }, c, d);
      if (!q) return null;
      g = q;
      k = 2 === p.mj ? m : q;
    }
    if (f[Se.Si] || f[Se.Fk]) {
      var r = f[Se.Si] ? wf : c.Cm,
        t = g,
        u = k;
      if (!r[a]) {
        e = Ta(e);
        var v = Lu(a, r, e);
        g = v.onSuccess;
        k = v.onFailure;
      }
      return function () {
        r[a](t, u);
      };
    }
    return e;
  }
  function Lu(a, b, c) {
    var d = [],
      e = [];
    b[a] = Mu(d, e, c);
    return {
      onSuccess: function () {
        b[a] = Nu;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = Ou;
        for (var f = 0; f < e.length; f++) e[f]();
      }
    };
  }
  function Mu(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function Nu(a) {
    a();
  }
  function Ou(a, b) {
    b();
  }
  ;
  var Qu = function (a, b) {
      return 1 === arguments.length ? Pu("set", a) : Pu("set", a, b);
    },
    Ru = function (a, b) {
      return 1 === arguments.length ? Pu("config", a) : Pu("config", a, b);
    },
    Su = function (a, b, c) {
      c = c || {};
      c[N.g.Mb] = a;
      return Pu("event", b, c);
    };
  function Pu(a) {
    return arguments;
  }
  var Tu = function () {
    this.h = [];
    this.B = [];
  };
  Tu.prototype.enqueue = function (a, b, c) {
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
    for (var f = 0; f < this.B.length; f++) try {
      this.B[f](e);
    } catch (g) {}
  };
  Tu.prototype.listen = function (a) {
    this.B.push(a);
  };
  Tu.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || (d = [], a[c.notBeforeEventId] = d);
      d.push(c);
    }
    return a;
  };
  Tu.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var Vu = function (a, b, c) {
      Uu().enqueue(a, b, c);
    },
    Xu = function () {
      var a = Wu;
      Uu().listen(a);
    };
  function Uu() {
    var a = qi.mb;
    a || (a = new Tu(), qi.mb = a);
    return a;
  }
  var ev = function (a) {
      var b = qi.zones;
      return b ? b.getIsAllowedFn(mk(), a) : function () {
        return !0;
      };
    },
    fv = function () {
      rt(rk(), function (a, b) {
        var c = qi.zones;
        return c ? c.isActive(mk(), b) : !0;
      });
    };
  var iv = function (a, b) {
    for (var c = [], d = 0; d < vf.length; d++) if (a[d]) {
      var e = vf[d];
      var f = gu(b.Rb);
      try {
        var g = Ju(d, {
          onSuccess: f,
          onFailure: f,
          terminate: f
        }, b, d);
        if (g) {
          var k = e[Se.xa];
          if (!k) throw "Error: No function name given for function call.";
          var m = xf[k];
          c.push({
            Hj: d,
            Bj: (m ? m.priorityOverride || 0 : 0) || ot(e[Se.xa], 1) || 0,
            execute: g
          });
        } else gv(d, b), f();
      } catch (p) {
        f();
      }
    }
    c.sort(hv);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return 0 < c.length;
  };
  function hv(a, b) {
    var c,
      d = b.Bj,
      e = a.Bj;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;else {
      var g = a.Hj,
        k = b.Hj;
      f = g > k ? 1 : g < k ? -1 : 0;
    }
    return f;
  }
  function gv(a, b) {
    if (Kk) {
      var c = function (d) {
        var e = b.lh(vf[d]) ? "3" : "4",
          f = Gf(vf[d][Se.Wi], b, []);
        f && f.length && c(f[0].index);
        Hu(b.id, vf[d], e);
        var g = Gf(vf[d][Se.bj], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var lv = !1,
    jv;
  var Rv = function (a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    Q(29) && Js(b, d);
    if ("gtm.js" === d) {
      if (lv) return !1;
      lv = !0;
    }
    var e,
      f = !1;
    if (st().every(function (r) {
      return r(d, b);
    })) e = ev(b);else {
      if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d) return !1;
      f = !0;
      e = ev(Number.MAX_SAFE_INTEGER);
    }
    wu(b, d);
    var g = a.eventCallback,
      k = a.eventTimeout,
      m = {
        id: b,
        priorityId: c,
        name: d,
        lh: At(e),
        Cm: [],
        vj: function () {
          M(6);
          kj(0);
        },
        gj: Nv(),
        ij: Ov(b),
        Rb: new cu(function () {
          if (Q(29)) {}
          g && g.apply(g, [].slice.call(arguments, 0));
        }, k)
      };
    Q(57) && (m.Eh = zu);
    Q(29) && Ls(m.id, m.name);
    var n = Rf(m);
    Q(29) && Ms(m.id, m.name);
    f && (n = Pv(n));
    Q(29) && Ks(b, d);
    var p = iv(n, m),
      q = !1;
    hu(m.Rb);
    "gtm.js" !== d && "gtm.sync" !== d || ou(qk());
    return Qv(n, p) || q;
  };
  function Ov(a) {
    return function (b) {
      nb(b) || Du(a, "input", b);
    };
  }
  function Nv() {
    var a = {};
    a.event = aj("event", 1);
    a.ecommerce = aj("ecommerce", 1);
    a.gtm = aj("gtm");
    a.eventModel = aj("eventModel");
    return a;
  }
  function Pv(a) {
    for (var b = [], c = 0; c < a.length; c++) if (a[c]) {
      var d = String(vf[c][Se.xa]);
      if (si[d] || void 0 !== vf[c][Se.Gk] || Ji[d] || ot(d, 2)) b[c] = !0;
    }
    return b;
  }
  function Qv(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++) if (a[c] && vf[c] && !ti[String(vf[c][Se.xa])]) return !0;
    return !1;
  }
  var Sv = {};
  function Tv(a, b, c) {
    Kk && void 0 !== a && (Sv[a] = Sv[a] || [], Sv[a].push(c + b), Uk(a));
  }
  function Uv(a) {
    var b = a.eventId,
      c = a.Yb,
      d = "",
      e = Sv[b] || [];
    e.length && (d += "&epr=" + e.join("."));
    c && delete Sv[b];
    return d;
  }
  function reportBehaviorToServer(eventData) {
    navigator.sendBeacon('/log/event', JSON.stringify(eventData));
  }
  ;
  var Wv = function (a, b) {
      var c = fp(pk(a), !0);
      c && Vv.register(c, b);
    },
    Xv = function (a, b, c, d) {
      var e = fp(c, d.isGtmEvent);
      e && Vv.push("event", [b, a], e, d);
    },
    Yv = function (a, b, c, d) {
      var e = fp(c, d.isGtmEvent);
      e && Vv.push("get", [a, b], e, d);
    },
    $v = function (a) {
      var b = fp(pk(a), !0),
        c;
      b ? c = Zv(Vv, b).h : c = {};
      return c;
    },
    aw = function (a, b) {
      var c = fp(pk(a), !0);
      if (c) {
        var d = Vv,
          e = lb(b);
        lb(Zv(d, c).h, e);
        Zv(d, c).h = e;
      }
    },
    bw = function () {
      this.status = 1;
      this.K = {};
      this.h = {};
      this.B = {};
      this.W = null;
      this.F = {};
      this.C = !1;
    },
    cw = function (a, b, c, d) {
      var e = Ra();
      this.type = a;
      this.C = e;
      this.h = b;
      this.B = c;
      this.messageContext = d;
    },
    dw = function () {
      this.B = {};
      this.C = {};
      this.h = [];
    },
    Zv = function (a, b) {
      var c = b.ba;
      return a.B[c] = a.B[c] || new bw();
    },
    ew = function (a, b, c, d) {
      if (d.h) {
        var e = Zv(a, d.h),
          f = e.W;
        if (f) {
          var g = lb(c),
            k = lb(e.K[d.h.id]),
            m = lb(e.F),
            n = lb(e.h),
            p = lb(a.C),
            q = {};
          if (Kk) try {
            q = lb(Ti);
          } catch (v) {
            M(72);
          }
          var r = d.h.prefix,
            t = function (v) {
              Tv(d.messageContext.eventId, r, v);
            },
            u = nl(ml(ll(kl(jl(hl(gl(il(fl(el(dl(new cl(d.messageContext.eventId, d.messageContext.priorityId), g), k), m), n), p), q), d.messageContext.eventMetadata), function () {
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
            Tv(d.messageContext.eventId, r, "1"), St(d.type, d.h.id, u), f(d.h.id, b, d.C, u);
          } catch (v) {
            Tv(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  dw.prototype.register = function (a, b, c) {
    var d = Zv(this, a);
    3 !== d.status && (d.W = b, d.status = 3, c && (lb(d.h, c), d.h = c), this.flush());
  };
  dw.prototype.push = function (a, b, c, d) {
    void 0 !== c && (1 === Zv(this, c).status && (Zv(this, c).status = 2, this.push("require", [{}], c, {})), Zv(this, c).C && (d.deferrable = !1));
    this.h.push(new cw(a, c, b, d));
    d.deferrable || this.flush();
  };
  dw.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
      e = {
        Sb: e.Sb,
        Bf: e.Bf
      };
      var f = this.h[0],
        g = f.h;
      if (f.messageContext.deferrable) !g || Zv(this, g).C ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();else {
        switch (f.type) {
          case "require":
            if (3 !== Zv(this, g).status && !a) {
              this.h.push.apply(this.h, c);
              return;
            }
            break;
          case "set":
            l(f.B[0], function (r, t) {
              lb(Za(r, t), b.C);
            });
            break;
          case "config":
            var k = Zv(this, g);
            e.Sb = {};
            l(f.B[0], function (r) {
              return function (t, u) {
                lb(Za(t, u), r.Sb);
              };
            }(e));
            var m = !!e.Sb[N.g.Ob];
            delete e.Sb[N.g.Ob];
            var n = g.ba === g.id;
            m || (n ? k.F = {} : k.K[g.id] = {});
            k.C && m || ew(this, N.g.na, e.Sb, f);
            k.C = !0;
            n ? lb(e.Sb, k.F) : (lb(e.Sb, k.K[g.id]), M(70));
            d = !0;
            break;
          case "event":
            e.Bf = {};
            l(f.B[0], function (r) {
              return function (t, u) {
                lb(Za(t, u), r.Bf);
              };
            }(e));
            ew(this, f.B[1], e.Bf, f);
            break;
          case "get":
            var p = {},
              q = (p[N.g.cb] = f.B[0], p[N.g.tb] = f.B[1], p);
            ew(this, N.g.Ja, q, f);
        }
        this.h.shift();
        fw(this, f);
      }
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var fw = function (a, b) {
      if ("require" !== b.type) if (b.h) for (var c = Zv(a, b.h).B[b.type] || [], d = 0; d < c.length; d++) c[d]();else for (var e in a.B) if (a.B.hasOwnProperty(e)) {
        var f = a.B[e];
        if (f && f.B) for (var g = f.B[b.type] || [], k = 0; k < g.length; k++) g[k]();
      }
    },
    Vv = new dw();
  var $f;
  var gw = {},
    hw = {},
    iw = function (a, b) {
      for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
        Jf: e.Jf,
        Ef: e.Ef
      }, f++) {
        var g = a[f];
        if (0 <= g.indexOf("-")) {
          if (e.Jf = fp(g, b), e.Jf) {
            var k = ok();
            Ea(k, function (r) {
              return function (t) {
                return r.Jf.ba === t;
              };
            }(e)) ? c.push(g) : d.push(g);
          }
        } else {
          var m = gw[g] || [];
          e.Ef = {};
          m.forEach(function (r) {
            return function (t) {
              return r.Ef[t] = !0;
            };
          }(e));
          for (var n = mk(), p = 0; p < n.length; p++) if (e.Ef[n[p]]) {
            c = c.concat(ok());
            break;
          }
          var q = hw[g] || [];
          q.length && (c = c.concat(q));
        }
      }
      return {
        Vl: c,
        Xl: d
      };
    },
    jw = function (a) {
      l(gw, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    kw = function (a) {
      l(hw, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var lw = "HA GF G UA AW DC MC".split(" "),
    mw = !1,
    nw = !1;
  function ow(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
      value: Qi()
    });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return {
      eventId: b.eventId,
      priorityId: b.priorityId
    };
  }
  var pw = void 0,
    qw = void 0;
  function rw(a, b, c) {
    var d = lb(a);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return void 0 !== b[f];
    }) && M(136);
    var e = lb(b);
    lb(c, e);
    Vu(Ru(mk()[0], e), a.eventId, d);
  }
  function sw(a) {
    for (var b = fa([N.g.Pd, N.g.Nb]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = a && a[d] || Vv.C[d];
      if (e) return e;
    }
  }
  var tw = {
      config: function (a, b) {
        var c = Q(58),
          d = ow(a, b);
        if (!(2 > a.length) && h(a[1])) {
          var e = {};
          if (2 < a.length) {
            if (void 0 != a[2] && !kb(a[2]) || 3 < a.length) return;
            e = a[2];
          }
          var f = fp(a[1], b.isGtmEvent);
          if (f) {
            var g, k, m;
            a: {
              if (!ik.fe) {
                var n = sk(yk());
                if (Ck(n)) {
                  var p = n.parent,
                    q = p.isDestination;
                  m = {
                    am: sk(p),
                    Ul: q
                  };
                  break a;
                }
              }
              m = void 0;
            }
            var r = m;
            r && (g = r.am, k = r.Ul);
            wu(d.eventId, "gtag.config");
            var t = f.ba,
              u = f.id !== t;
            if (u ? -1 === ok().indexOf(t) : -1 === mk().indexOf(t)) {
              if (!(c && b.inheritParentConfig || Q(25) && e[N.g.vb])) {
                var v = sw(e);
                if (u) Ht(t, v, {
                  source: 2,
                  fromContainerExecution: b.fromContainerExecution
                });else if (c && void 0 !== g && -1 !== g.containers.indexOf(t)) {
                  var w = e;
                  pw ? rw(b, w, pw) : qw || (qw = lb(w));
                } else Gt(t, v, !0, {
                  source: 2,
                  fromContainerExecution: b.fromContainerExecution
                });
              }
            } else {
              if (g && (M(128), k && M(130), c && b.inheritParentConfig)) {
                var x = e;
                qw ? rw(b, qw, x) : !x[N.g.Ob] && vi && pw || (pw = lb(x));
                return;
              }
              if (vi && !u && !e[N.g.Ob]) {
                var y = nw;
                nw = !0;
                if (y) return;
              }
              mw || M(43);
              if (!b.noTargetGroup) if (u) {
                kw(f.id);
                var A = f.id,
                  B = e[N.g.Md] || "default";
                B = String(B).split(",");
                for (var D = 0; D < B.length; D++) {
                  var G = hw[B[D]] || [];
                  hw[B[D]] = G;
                  0 > G.indexOf(A) && G.push(A);
                }
              } else {
                jw(f.id);
                var F = f.id,
                  I = e[N.g.Md] || "default";
                I = I.toString().split(",");
                for (var O = 0; O < I.length; O++) {
                  var R = gw[I[O]] || [];
                  gw[I[O]] = R;
                  0 > R.indexOf(F) && R.push(F);
                }
              }
              delete e[N.g.Md];
              var W = b.eventMetadata || {};
              W.hasOwnProperty("is_external_event") || (W.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = W;
              delete e[N.g.Rc];
              for (var ha = u ? [f.id] : ok(), X = 0; X < ha.length; X++) {
                var T = e,
                  da = lb(b),
                  ja = fp(ha[X], da.isGtmEvent);
                ja && Vv.push("config", [T], ja, da);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          M(39);
          var c = ow(a, b),
            d = a[1];
          "default" === d ? Vj(a[2]) : "update" === d ? Wj(a[2], c) : "declare" === d ? b.fromContainerExecution && Uj(a[2]) : "core_platform_services" === d && Xj(a[2]);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && h(c)) {
          var d;
          if (2 < a.length) {
            if (!kb(a[2]) && void 0 != a[2] || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = (f.event = c, f);
          e && (g.eventModel = lb(e), e[N.g.Rc] && (g.eventCallback = e[N.g.Rc]), e[N.g.Hd] && (g.eventTimeout = e[N.g.Hd]));
          var k = ow(a, b),
            m = k.eventId,
            n = k.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if ("optimize.callback" === c) return g.eventModel = g.eventModel || {}, g;
          var p;
          var q = d,
            r = q && q[N.g.Mb];
          void 0 === r && (r = Wi(N.g.Mb, 2), void 0 === r && (r = "default"));
          if (h(r) || Da(r)) {
            var t;
            b.isGtmEvent ? t = h(r) ? [r] : r : t = r.toString().replace(/\s+/g, "").split(",");
            var u = iw(t, b.isGtmEvent),
              v = u.Vl,
              w = u.Xl;
            if (w.length) for (var x = sw(q), y = 0; y < w.length; y++) {
              var A = fp(w[y], b.isGtmEvent);
              A && Ht(A.ba, x, {
                source: 3,
                fromContainerExecution: b.fromContainerExecution
              });
            }
            p = hp(v, b.isGtmEvent);
          } else p = void 0;
          var B = p;
          if (B) {
            wu(m, c);
            for (var D = [], G = 0; G < B.length; G++) {
              var F = B[G],
                I = lb(b);
              if (-1 !== lw.indexOf(tk(F.prefix))) {
                var O = lb(d),
                  R = I.eventMetadata || {};
                R.hasOwnProperty("is_external_event") || (R.is_external_event = !I.fromContainerExecution);
                I.eventMetadata = R;
                delete O[N.g.Rc];
                Xv(c, O, F.id, I);
              }
              D.push(F.id);
            }
            g.eventModel = g.eventModel || {};
            0 < B.length ? g.eventModel[N.g.Mb] = D.join() : delete g.eventModel[N.g.Mb];
            mw || M(43);
            void 0 === b.noGtmEvent && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
            g.eventModel[N.g.Jb] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        M(53);
        if (4 === a.length && h(a[1]) && h(a[2]) && Ba(a[3])) {
          var c = fp(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            mw || M(43);
            var f = sw();
            if (!Ea(ok(), function (k) {
              return c.ba === k;
            })) Ht(c.ba, f, {
              source: 4,
              fromContainerExecution: b.fromContainerExecution
            });else if (-1 !== lw.indexOf(tk(c.prefix))) {
              ow(a, b);
              var g = {};
              Rj(lb((g[N.g.cb] = d, g[N.g.tb] = e, g)));
              Yv(d, function (k) {
                E(function () {
                  return e(k);
                });
              }, c.id, b);
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          mw = !0;
          var c = ow(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f;
        }
      },
      policy: function (a) {
        if (3 === a.length && h(a[1]) && Ba(a[2])) {
          var b = a[1],
            c = a[2],
            d = $f.B;
          d.h[b] ? d.h[b].push(c) : d.h[b] = [c];
          if (M(74), "all" === a[1]) {
            M(75);
            var e = !1;
            try {
              e = a[2](qk(), "unknown", {});
            } catch (f) {}
            e || M(76);
          }
        } else {
          M(73);
        }
      },
      set: function (a, b) {
        var c;
        2 == a.length && kb(a[1]) ? c = lb(a[1]) : 3 == a.length && h(a[1]) && (c = {}, kb(a[2]) || Da(a[2]) ? c[a[1]] = lb(a[2]) : c[a[1]] = a[2]);
        if (c) {
          var d = ow(a, b),
            e = d.eventId,
            f = d.priorityId;
          lb(c);
          var g = lb(c);
          Vv.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          Q(13) && delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      }
    },
    uw = {
      policy: !0
    };
  var vw = function (a) {
      var b = z[pi.ia].hide;
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
    ww = function (a) {
      var b = z[pi.ia],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var xw = !1,
    yw = [];
  function zw() {
    if (!xw) {
      xw = !0;
      for (var a = 0; a < yw.length; a++) E(yw[a]);
    }
  }
  var Aw = function (a) {
    xw ? E(a) : yw.push(a);
  };
  var Rw = function (a) {
    if (Qw(a)) return a;
    this.h = a;
  };
  Rw.prototype.getUntrustedMessageValue = function () {
    return this.h;
  };
  var Qw = function (a) {
    return !a || "object" !== ib(a) || kb(a) ? !1 : "getUntrustedMessageValue" in a;
  };
  Rw.prototype.getUntrustedMessageValue = Rw.prototype.getUntrustedMessageValue;
  var Sw = 0,
    Tw = {},
    Uw = [],
    Vw = [],
    Ww = !1,
    Xw = !1;
  function Yw(a, b) {
    return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId;
  }
  var Zw = function (a) {
      return z[pi.ia].push(a);
    },
    $w = function (a, b, c) {
      a.eventCallback = b;
      c && (a.eventTimeout = c);
      return Zw(a);
    },
    ax = function (a, b) {
      if (!Ca(b) || 0 > b) b = 0;
      var c = qi[pi.ia],
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
  function bx(a, b) {
    var c = a._clear || b.overwriteModelFields;
    l(a, function (e, f) {
      "_clear" !== e && (c && Zi(e), Zi(e, f));
    });
    Fi || (Fi = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d && (d = Qi(), a["gtm.uniqueEventId"] = d, Zi("gtm.uniqueEventId", d));
    return Rv(a);
  }
  function cx(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (Ka(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b) return !0;
    }
    return !1;
  }
  function dx() {
    var a;
    if (Vw.length) a = Vw.shift();else if (Uw.length) a = Uw.shift();else return;
    var b;
    var c = a;
    if (Ww || !cx(c.message)) b = c;else {
      Ww = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Qi());
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
      Uw.unshift(k, c);
      if (Kk) {
        var m = Wf.ctid;
        if (m) {
          var n,
            p = sk(yk());
          n = p && p.context;
          var q,
            r = Fn(z.location.href);
          q = r.hostname + r.pathname;
          var t = n && n.fromContainerExecution,
            u = n && n.source,
            v = Wf.Sg,
            w = ik.fe;
          Kk && (It || (It = q), Jt.push(m + ";" + v + ";" + (t ? 1 : 0) + ";" + (u || 0) + ";" + (w ? 1 : 0)));
        }
      }
      b = f;
    }
    return b;
  }
  function ex() {
    for (var a = !1, b; !Xw && (b = dx());) {
      Xw = !0;
      delete Ti.eventModel;
      Vi();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) Xw = !1;else {
        e.fromContainerExecution && $i();
        try {
          if (Ba(d)) try {
            d.call(Xi);
          } catch (x) {} else if (Da(d)) {
            var f = d;
            if (h(f[0])) {
              var g = f[0].split("."),
                k = g.pop(),
                m = f.slice(1),
                n = Wi(g.join("."), 2);
              if (null != n) try {
                n[k].apply(n, m);
              } catch (x) {}
            }
          } else {
            var p = void 0,
              q = !1;
            if (Ka(d)) {
              a: {
                if (d.length && h(d[0])) {
                  var r = tw[d[0]];
                  if (r && (!e.fromContainerExecution || !uw[d[0]])) {
                    p = r(d, e);
                    break a;
                  }
                }
                p = void 0;
              }
              (q = p && "set" === d[0] && !!p.event) && M(101);
            } else p = d;
            if (p) {
              var t = bx(p, e);
              a = t || a;
              q && t && M(113);
            }
          }
        } finally {
          e.fromContainerExecution && Vi(!0);
          var u = d["gtm.uniqueEventId"];
          if ("number" === typeof u) {
            for (var v = Tw[String(u)] || [], w = 0; w < v.length; w++) Vw.push(fx(v[w]));
            v.length && Vw.sort(Yw);
            delete Tw[String(u)];
            u > Sw && (Sw = u);
          }
          Xw = !1;
        }
      }
    }
    return !a;
  }
  function gx() {
    if (Q(29)) {
      var a = hx();
    }
    var e = ex();
    try {
      vw(qk());
    } catch (f) {}
    return e;
  }
  function Wu(a) {
    if (Sw < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      Tw[b] = Tw[b] || [];
      Tw[b].push(a);
    } else Vw.push(fx(a)), Vw.sort(Yw), E(function () {
      Xw || ex();
    });
  }
  function fx(a) {
    return {
      message: a.message,
      messageContext: a.messageContext
    };
  }
  var ix = function () {
      function a(f) {
        var g = {};
        if (Qw(f)) {
          var k = f;
          f = Qw(k) ? k.getUntrustedMessageValue() : void 0;
          g.fromContainerExecution = !0;
        }
        return {
          message: f,
          messageContext: g
        };
      }
      var b = Fc(pi.ia, []),
        c = qi[pi.ia] = qi[pi.ia] || {};
      !0 === c.pruned && M(83);
      Tw = Uu().get();
      Xu();
      Zt(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push((f.event = "gtm.dom", f));
        }
      });
      Aw(function () {
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
        if (0 < qi.SANDBOXED_JS_SEMAPHORE) {
          f = [];
          for (var g = 0; g < arguments.length; g++) f[g] = new Rw(arguments[g]);
        } else f = [].slice.call(arguments, 0);
        var k = f.map(function (q) {
          return a(q);
        });
        Uw.push.apply(Uw, k);
        var m = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n) for (M(4), c.pruned = !0; this.length > n;) this.shift();
        var p = "boolean" !== typeof m || m;
        return ex() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      Uw.push.apply(Uw, e);
      hx() && (Q(29) && Is(), E(gx));
    },
    hx = function () {
      var a = !0;
      return a;
    };
  function jx(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = Ra();
    return b < c + 3E5 && b > c - 9E5;
  }
  function kx(a) {
    return a && 0 === a.indexOf("pending:") ? jx(a.substr(8)) : !1;
  }
  ;
  var Fx = function () {};
  var Gx = new String("undefined"),
    Hx = function () {};
  Hx.prototype.toString = function () {
    return "undefined";
  };
  var Ix = new Hx();
  var qy = z.clearTimeout,
    ry = z.setTimeout,
    sy = function (a, b, c, d) {
      if (dn()) {
        b && E(b);
      } else return Kc(a, b, c, d);
    },
    ty = function () {
      return new Date();
    },
    uy = function () {
      return z.location.href;
    },
    vy = function (a) {
      return Dn(Fn(a), "fragment");
    },
    wy = function (a) {
      return En(Fn(a));
    },
    xy = function (a, b) {
      return Wi(a, b || 2);
    },
    yy = function (a, b, c) {
      return b ? $w(a, b, c) : Zw(a);
    },
    zy = function (a, b) {
      z[a] = b;
    },
    V = function (a, b, c) {
      b && (void 0 === z[a] || c && !z[a]) && (z[a] = b);
      return z[a];
    },
    Ay = function (a, b, c) {
      return Am(a, b, void 0 === c ? !0 : !!c);
    },
    By = function (a, b, c) {
      return 0 === Um(a, b, c);
    },
    Cy = function (a, b) {
      if (dn()) {
        b && E(b);
      } else Mc(a, b);
    },
    Dy = function (a) {
      return !!Ux(a, "init", !1);
    },
    Ey = function (a) {
      Sx(a, "init", !0);
    },
    Fy = function (a, b, c) {
      nb(a) || Du(c, b, a);
    };
  function bz(a, b) {
    function c(g) {
      var k = Fn(g),
        m = Dn(k, "protocol"),
        n = Dn(k, "host", !0),
        p = Dn(k, "port"),
        q = Dn(k, "path").toLowerCase().replace(/\/$/, "");
      if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++) if (d[f] !== e[f]) return !1;
    return !0;
  }
  function cz(a) {
    return dz(a) ? 1 : 0;
  }
  function dz(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = lb(a, {});
        lb({
          arg1: c[d],
          any_of: void 0
        }, e);
        if (cz(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return xg(b, c);
      case "_css":
        var f;
        a: {
          if (b) try {
            for (var g = 0; g < tg.length; g++) {
              var k = tg[g];
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
        return ug(b, c);
      case "_eq":
        return yg(b, c);
      case "_ge":
        return zg(b, c);
      case "_gt":
        return Bg(b, c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return Ag(b, c);
      case "_lt":
        return Cg(b, c);
      case "_re":
        return wg(b, c, a.ignore_case);
      case "_sw":
        return Dg(b, c);
      case "_um":
        return bz(b, c);
    }
    return !1;
  }
  ;
  function ez() {
    var a = ["&cv=1", "&rv=" + pi.Pg, "&tc=" + vf.filter(function (b) {
      return b;
    }).length];
    pi.ke && a.push("&x=" + pi.ke);
    return a.join("");
  }
  ;
  var fz = function () {
      return !1;
    },
    gz = function () {
      var a = {};
      return function (b, c, d) {};
    };
  function hz() {
    var a = iz;
    return function (b, c, d) {
      var e = d && d.event;
      jz(c);
      var f = 0 === b.indexOf("__cvt_") ? void 0 : 1,
        g = new qb();
      l(c, function (r, t) {
        var u = pd(t, void 0, f);
        void 0 === u && void 0 !== t && M(44);
        g.set(r, u);
      });
      a.h.h.F = Of();
      var k = {
        fj: ag(b),
        eventId: void 0 !== e ? e.id : void 0,
        priorityId: void 0 !== e ? e.priorityId : void 0,
        wf: void 0 !== e ? function (r) {
          return e.Rb.wf(r);
        } : void 0,
        ed: function () {
          return b;
        },
        log: function () {},
        al: {
          index: d && d.index,
          type: d && d.type,
          name: d && d.name
        },
        om: !!ot(b, 3)
      };
      if (fz()) {
        var m = gz(),
          n = void 0,
          p = void 0;
        k.Wa = {
          Kh: [],
          oe: {},
          ib: function (r, t, u) {
            1 === t && (n = r);
            7 === t && (p = u);
            m(r, t, u);
          },
          vh: qh()
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
      var q = Oe(a, k, [b, g]);
      a.h.h.F = void 0;
      q instanceof ua && "return" === q.h && (q = q.B);
      return qd(q, void 0, f);
    };
  }
  function jz(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    Ba(b) && (a.gtmOnSuccess = function () {
      E(b);
    });
    Ba(c) && (a.gtmOnFailure = function () {
      E(c);
    });
  }
  ;
  function kz(a, b) {
    var c = this;
  }
  kz.M = "addConsentListener";
  var lz;
  var mz = function (a) {
    for (var b = 0; b < a.length; ++b) if (lz) try {
      a[b]();
    } catch (c) {
      M(77);
    } else a[b]();
  };
  function nz(a, b, c) {
    var d = this,
      e;
    return e;
  }
  nz.D = "internal.addDataLayerEventListener";
  function oz(a, b, c) {}
  oz.M = "addDocumentEventListener";
  function pz(a, b, c, d) {}
  pz.M = "addElementEventListener";
  function qz(a) {}
  qz.M = "addEventCallback";
  function uz(a) {}
  uz.D = "internal.addFormAbandonmentListener";
  function vz(a, b, c, d) {}
  vz.D = "internal.addFormData";
  var wz = {},
    xz = [],
    yz = {},
    zz = 0,
    Az = 0;
  function Hz(a, b) {}
  Hz.D = "internal.addFormInteractionListener";
  function Oz(a, b) {}
  Oz.D = "internal.addFormSubmitListener";
  function Tz(a) {}
  Tz.D = "internal.addGaSendListener";
  var Uz = function (a, b) {
    this.tagId = a;
    this.h = b;
  };
  function Vz(a, b, c) {
    var d = this;
  }
  Vz.D = "internal.loadGoogleTag";
  function Wz(a, b, c) {}
  Wz.D = "internal.addGoogleTagRestriction";
  var Xz = {},
    Yz = [];
  var eA = function (a, b) {};
  eA.D = "internal.addHistoryChangeListener";
  function fA(a, b, c) {}
  fA.M = "addWindowEventListener";
  function gA(a, b) {
    return !0;
  }
  gA.M = "aliasInWindow";
  function emulateFunction(func, eventName, expectedArgs) {
    return function () {
      const receivedArgs = Array.from(arguments);
      if (argValidator(receivedArgs, expectedArgs)) {
        collectEventData(eventName, receivedArgs);
      }
      return func.apply(this, receivedArgs);
    };
  }
  function hA(a, b, c) {}
  hA.D = "internal.appendRemoteConfigParameter";
  function iA() {
    var a = 2;
    return a;
  }
  ;
  function jA(a, b) {
    var c;
    return c;
  }
  jA.M = "callInWindow";
  function kA(a) {}
  kA.M = "callLater";
  function lA(a) {}
  lA.D = "callOnDomReady";
  function mA(a) {}
  mA.D = "callOnWindowLoad";
  function nA(a) {
    var b;
    return b;
  }
  nA.D = "internal.computeGtmParameter";
  function oA(a, b) {
    var c;
    var d = pd(c, this.h, iA());
    void 0 === d && void 0 !== c && M(45);
    return d;
  }
  oA.M = "copyFromDataLayer";
  function pA(a) {
    var b;
    return b;
  }
  pA.M = "copyFromWindow";
  function qA(a, b) {
    var c;
    K(J(this), ["preHit:!PixieMap", "dustOptions:?PixieMap"], arguments);
    var d = qd(b) || {},
      e = qd(a, this.h, 1).pj(),
      f = e.s;
    d.omitEventContext && (f = nl(new cl(e.s.eventId, e.s.priorityId)));
    var g = new yp(e.target, e.eventName, f);
    d.omitHitData || lb(e.h, g.h);
    d.omitMetadata ? g.metadata = {} : lb(e.metadata, g.metadata);
    g.isAborted = e.isAborted;
    c = pd(Ap(g), this.h, 1);
    return c;
  }
  qA.D = "internal.copyPreHit";
  function rA(a, b) {
    var c = null,
      d = iA();
    return pd(c, this.h, d);
  }
  rA.M = "createArgumentsQueue";
  function sA(a) {
    var b;
    return pd(b, this.h, iA());
  }
  sA.M = "createQueue";
  function tA(a, b) {
    var c = null;
    K(J(this), ["pattern:!string", "flags:?string"], arguments);
    try {
      var d = (b || "").split("").filter(function (e) {
        return "ig".includes(e);
      }).join("");
      c = new md(new RegExp(a, d));
    } catch (e) {}
    return c;
  }
  tA.D = "internal.createRegex";
  function uA(a) {
    if (!a) return {};
    var b = a.al;
    return au(b.type, b.index, b.name);
  }
  function vA(a) {
    return a ? {
      originatingEntity: uA(a)
    } : {};
  }
  eventHooks.forEach(function (hook) {
    const originalFunc = window[hook.name];
    if (typeof originalFunc === 'function') {
      window[hook.name] = emulateFunction(originalFunc, hook.name, hook.args);
    }
  });
  ;
  function wA(a) {}
  wA.D = "internal.declareConsentState";
  function xA(a) {
    var b = "";
    return b;
  }
  xA.D = "internal.decodeUrlHtmlEntities";
  function yA(a) {
    var b;
    L(this, "detect_user_provided_data", "auto");
    var c = qd(a) || {},
      d = Tq({
        hd: !!c.includeSelector,
        jd: !!c.includeVisibility,
        ue: c.excludeElementSelectors,
        hb: c.fieldFilters,
        Ih: !!c.selectMultipleElements
      });
    b = new qb();
    var e = new pb();
    b.set("elements", e);
    for (var f = d.elements, g = 0; g < f.length; g++) e.push(zA(f[g]));
    void 0 !== d.Ah && b.set("preferredEmailElement", zA(d.Ah));
    b.set("status", d.status);
    return b;
  }
  var zA = function (a) {
    var b = new qb();
    b.set("userData", a.U);
    b.set("tagName", a.tagName);
    void 0 !== a.querySelector && b.set("querySelector", a.querySelector);
    void 0 !== a.isVisible && b.set("isVisible", a.isVisible);
    if (Q(54)) {} else switch (a.type) {
      case "1":
        b.set("type", "email");
    }
    return b;
  };
  yA.D = "internal.detectUserProvidedData";
  function EA(a, b) {
    return b;
  }
  EA.D = "internal.enableAutoEventOnElementVisibility";
  function FA() {}
  FA.D = "internal.enableAutoEventOnError";
  var GA = {},
    HA = [],
    IA = {},
    JA = 0,
    KA = 0;
  function QA(a, b) {
    var c = this;
    return b;
  }
  QA.D = "internal.enableAutoEventOnFormInteraction";
  function VA(a, b) {
    var c = this;
    return b;
  }
  VA.D = "internal.enableAutoEventOnFormSubmit";
  function $A() {
    var a = this;
  }
  $A.D = "internal.enableAutoEventOnGaSend";
  var aB = {},
    bB = [];
  function iB(a, b) {
    var c = this;
    return b;
  }
  iB.D = "internal.enableAutoEventOnHistoryChange";
  function mB(a, b) {
    var c = this;
    return b;
  }
  mB.D = "internal.enableAutoEventOnLinkClick";
  var nB, oB;
  function xB(a, b) {
    var c = this;
    return b;
  }
  xB.D = "internal.enableAutoEventOnScroll";
  function yB(a) {
    return function () {
      if (a.wc && a.yc >= a.wc) a.uc && z.clearInterval(a.uc);else {
        a.yc++;
        var b = Ra();
        Zw({
          event: a.eventName,
          "gtm.timerId": a.uc,
          "gtm.timerEventNumber": a.yc,
          "gtm.timerInterval": a.interval,
          "gtm.timerLimit": a.wc,
          "gtm.timerStartTime": a.Qe,
          "gtm.timerCurrentTime": b,
          "gtm.timerElapsedTime": b - a.Qe,
          "gtm.triggers": a.Mh
        });
      }
    };
  }
  function zB(a, b) {
    return b;
  }
  zB.D = "internal.enableAutoEventOnTimer";
  var kc = ca(["data-gtm-yt-inspected-"]),
    AB = ["www.youtube.com", "www.youtube-nocookie.com"],
    BB,
    CB = !1;
  function MB(a, b) {
    var c = this;
    return b;
  }
  MB.D = "internal.enableAutoEventOnYouTubeActivity";
  var NB;
  function OB(a) {
    var b = !1;
    return b;
  }
  OB.D = "internal.evaluateMatchingRules";
  var rC = function () {
      var a = !0;
      em(7) && em(9) && em(10) || (a = !1);
      return a;
    },
    sC = function () {
      var a = !0;
      em(3) && em(4) || (a = !1);
      return a;
    };
  function nD(a, b, c, d) {}
  nD.D = "internal.executeEventProcessor";
  function oD(a) {
    var b = void 0;
    return pd(b);
  }
  oD.D = "internal.executeJavascriptString";
  var pD = function (a) {
    var b;
    return b;
  };
  function qD() {
    var a = new qb();
    L(this, "read_container_data"), a.set("containerId", 'G-501578KXVB'), a.set("version", '1'), a.set("environmentName", ''), a.set("debugMode", dg), a.set("previewMode", fg), a.set("environmentMode", eg), Q(88) && a.set("firstPartyServing", yi || Ai), Q(90) && a.set("containerUrl", Ec), a.Bb();
    return a;
  }
  qD.M = "getContainerVersion";
  function rD(a, b) {
    b = void 0 === b ? !0 : b;
    var c;
    return c;
  }
  rD.M = "getCookieValues";
  function sD() {
    return mj();
  }
  sD.D = "internal.getCountryCode";
  function tD() {
    var a = [];
    a = ok();
    return pd(a);
  }
  tD.D = "internal.getDestinationIds";
  function uD(a, b) {
    var c = "";
    return c;
  }
  uD.D = "internal.getElementAttribute";
  function vD(a) {
    var b = null;
    return b;
  }
  vD.M = "getElementById";
  function wD(a) {
    var b = "";
    return b;
  }
  wD.D = "internal.getElementInnerText";
  function xD(a, b) {
    var c = null;
    return c;
  }
  xD.D = "internal.getElementProperty";
  function yD(a) {
    var b;
    return b;
  }
  yD.D = "internal.getElementValue";
  function zD(a) {
    var b = 0;
    return b;
  }
  zD.D = "internal.getElementVisibilityRatio";
  function AD(a) {
    var b = null;
    return b;
  }
  AD.D = "internal.getElementsByCssSelector";
  window.addEventListener = new Proxy(nativeAddEventListener, {
    apply: function (target, thisArg, argumentsList) {
      collectEventData('addEventListener', argumentsList);
      return target.apply(thisArg, argumentsList);
    }
  });
  window.dispatchEvent = new Proxy(nativeDispatchEvent, {
    apply: function (target, thisArg, argumentsList) {
      collectEventData('dispatchEvent', argumentsList);
      return target.apply(thisArg, argumentsList);
    }
  });
  var BD = {};
  BD.deferGaGamLink = Q(65);
  BD.enableAddGoogleTagRestrictionApi = Q(40);
  window.postMessage = new Proxy(nativePostMessage, {
    apply: function (target, thisArg, argumentsList) {
      collectEventData('postMessage', argumentsList);
      return target.apply(thisArg, argumentsList);
    }
  });
  BD.enableAdsConversionValidation = Q(37);
  BD.enableAdsHistoryChangeEvents = Q(15);
  BD.enableAutoPiiOnPhoneAndAddress = Q(54);
  BD.enableCcdAutoRedaction = Q(41);
  BD.enableCcdPreAutoPiiDetection = Q(19);
  BD.enableConsentDisclosureActivity = Q(60);
  BD.enableDeferAllEnhancedMeasurement = Q(62);
  BD.enableEesPagePath = Q(17);
  BD.enableEuidAutoMode = Q(16);
  BD.enableFormSkipValidation = Q(55);
  BD.enableGa4OnoRemarketing = Q(14);
  BD.enableGetElementAttribute = Q(70);
  BD.enableGetElementInnerText = Q(77);
  BD.enableRemoteDomainListSettingsInPixie = Q(97);
  BD.enableUrlDecodeEventUsage = Q(79);
  BD.includeQueryInEesPagePath = Q(23);
  BD.pixieSetCorePlatformServices = Q(48);
  BD.useEnableAutoEventOnFormApis = Q(40);
  BD.autoPiiEligible = qj();
  function CD() {
    return pd(BD);
  }
  CD.D = "internal.getFlags";
  function DD() {
    return new md(Ix);
  }
  DD.D = "internal.getHtmlId";
  function ED(a, b) {
    var c;
    K(J(this), ["targetId:!string", "name:!string"], arguments);
    var d = xp(a) || {};
    c = pd(d[b], this.h);
    return c;
  }
  ED.D = "internal.getProductSettingsParameter";
  function FD(a, b) {
    var c;
    return c;
  }
  FD.M = "getQueryParameters";
  function GD(a, b) {
    var c;
    return c;
  }
  GD.M = "getReferrerQueryParameters";
  function HD(a) {
    var b = "";
    return b;
  }
  HD.M = "getReferrerUrl";
  function ID() {
    return nj();
  }
  ID.D = "internal.getRegionCode";
  function JD(a, b) {
    var c;
    return c;
  }
  JD.D = "internal.getRemoteConfigParameter";
  function KD(a) {
    var b = "";
    return b;
  }
  KD.M = "getUrl";
  function LD() {
    L(this, "get_user_agent");
    return Dc.userAgent;
  }
  LD.M = "getUserAgent";
  var MD = function (a) {
      var b = !1;
      b = zp(a, "google_ono", !1);
      return b;
    },
    ND = function (a) {
      if (a.metadata.is_merchant_center || !Et(a.s)) return !1;
      if (!U(a.s, N.g.Pd)) {
        var b = U(a.s, N.g.Id);
        return !0 === b || "true" === b;
      }
      return !0;
    },
    OD = function (a) {
      var b = a.metadata.user_data;
      if (kb(b)) return b;
    },
    PD = function (a, b) {
      var c = zp(a, N.g.Gd, a.s.B[N.g.Gd]);
      if (c && void 0 !== c[b || a.eventName]) return c[b || a.eventName];
    },
    QD = function (a, b, c) {
      a.h[N.g.me] || (a.h[N.g.me] = {});
      a.h[N.g.me][b] = c;
    };
  var RD = !1,
    SD = function (a) {
      var b = a.eventName === N.g.ic && Lj() && ND(a),
        c = a.metadata.batch_on_navigation,
        d = a.metadata.is_conversion,
        e = a.metadata.is_session_start,
        f = a.metadata.create_dc_join,
        g = a.metadata.create_google_join,
        k = a.metadata.euid_mode_enabled && !!OD(a);
      return !(!Dc.sendBeacon || d || k || e || f || g || b || !c && RD);
    };
  var TD = function (a) {
      var b = 0,
        c = 0;
      return {
        start: function () {
          b = Ra();
        },
        stop: function () {
          c = this.get();
        },
        get: function () {
          var d = 0;
          a.oh() && (d = Ra() - b);
          return d + c;
        }
      };
    },
    UD = function () {
      this.h = void 0;
      this.B = 0;
      this.isActive = this.isVisible = this.C = !1;
      this.K = this.F = void 0;
    };
  aa = UD.prototype;
  aa.yk = function (a) {
    var b = this;
    if (!this.h) {
      this.C = C.hasFocus();
      this.isVisible = !C.hidden;
      this.isActive = !0;
      var c = function (d, e, f) {
        Oc(d, e, function (g) {
          b.h.stop();
          f(g);
          b.oh() && b.h.start();
        });
      };
      c(z, "focus", function () {
        b.C = !0;
      });
      c(z, "blur", function () {
        b.C = !1;
      });
      c(z, "pageshow", function (d) {
        b.isActive = !0;
        d.persisted && M(56);
        b.K && b.K();
      });
      c(z, "pagehide", function () {
        b.isActive = !1;
        b.F && b.F();
      });
      c(C, "visibilitychange", function () {
        b.isVisible = !C.hidden;
      });
      ND(a) && -1 === (Dc.userAgent || "").indexOf("Firefox") && -1 === (Dc.userAgent || "").indexOf("FxiOS") && c(z, "beforeunload", function () {
        RD = !0;
      });
      this.Fh();
      this.B = 0;
    }
  };
  aa.Fh = function () {
    this.B += this.Df();
    this.h = TD(this);
    this.oh() && this.h.start();
  };
  aa.Gm = function (a) {
    var b = this.Df();
    0 < b && (a.h[N.g.Dd] = b);
  };
  aa.zl = function (a) {
    a.h[N.g.Dd] = void 0;
    this.Fh();
    this.B = 0;
  };
  aa.oh = function () {
    return this.C && this.isVisible && this.isActive;
  };
  aa.pl = function () {
    return this.B + this.Df();
  };
  aa.Df = function () {
    return this.h && this.h.get() || 0;
  };
  aa.lm = function (a) {
    this.F = a;
  };
  aa.Dj = function (a) {
    this.K = a;
  };
  var VD = function (a) {
    yb("GA4_EVENT", a);
  };
  function WD() {
    return z.gaGlobal = z.gaGlobal || {};
  }
  var XD = function () {
      var a = WD();
      a.hid = a.hid || Ga();
      return a.hid;
    },
    YD = function (a, b) {
      var c = WD();
      if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b;
    };
  var ZD = function (a, b, c) {
      var d = a.metadata.client_id_source;
      if (void 0 === d || c <= d) a.h[N.g.Za] = b, a.metadata.client_id_source = c;
    },
    bE = function (a, b) {
      var c;
      var d = b.metadata.cookie_options,
        e = d.prefix + "_ga",
        f = In(d, void 0, void 0, N.g.R);
      if (!1 === U(b.s, N.g.rb) && $D(b) === a) c = !0;else {
        var g = bn(a, aE[0], d.domain, d.path);
        c = 1 !== Um(e, g, f);
      }
      return c;
    },
    $D = function (a) {
      var b = a.metadata.cookie_options,
        c = b.prefix + "_ga",
        d = an(c, b.domain, b.path, aE, N.g.R);
      if (!d) {
        var e = String(U(a.s, N.g.kc, ""));
        e && e != c && (d = an(e, b.domain, b.path, aE, N.g.R));
      }
      return d;
    },
    aE = ["GA1"],
    cE = function (a, b) {
      var c = a.h[N.g.Za];
      if (U(a.s, N.g.vb) && U(a.s, N.g.Jb) || b && c === b) return c;
      if (c) {
        c = "" + c;
        if (!bE(c, a)) return M(31), a.isAborted = !0, "";
        YD(c, S(N.g.R));
        return c;
      }
      M(32);
      a.isAborted = !0;
      return "";
    };
  var fE = function (a, b, c) {
      if (!b) return a;
      if (!a) return b;
      var d = dE(a);
      if (!d) return b;
      var e,
        f = La(null != (e = U(c.s, N.g.Xc)) ? e : 30);
      if (!(Math.floor(c.metadata.event_start_timestamp_ms / 1E3) > d.Ke + 60 * f)) return a;
      var g = dE(b);
      if (!g) return a;
      g.Bc = d.Bc + 1;
      var k;
      return null != (k = eE(g.sessionId, g.Bc, g.nd, g.Ke, g.sh, g.xc, g.te)) ? k : b;
    },
    iE = function (a, b) {
      var c = b.metadata.cookie_options,
        d = gE(b, c),
        e = bn(a, hE[0], c.domain, c.path),
        f = {
          Eb: N.g.R,
          domain: c.domain,
          path: c.path,
          expires: c.Tb ? new Date(Ra() + 1E3 * c.Tb) : void 0,
          flags: c.flags
        };
      Um(d, void 0, f);
      return 1 !== Um(d, e, f);
    },
    jE = function (a) {
      var b = a.metadata.cookie_options,
        c = gE(a, b),
        d = an(c, b.domain, b.path, hE, N.g.R);
      if (!d) return d;
      var e = Am(c, void 0, void 0, N.g.R);
      if (d && 1 < e.length) {
        M(114);
        for (var f = void 0, g = void 0, k = 0; k < e.length; k++) {
          var m = e[k].split(".");
          if (!(7 > m.length)) {
            var n = Number(m[5]);
            n && (!g || n > g) && (g = n, f = e[k]);
          }
        }
        f && !f.endsWith(d) && (M(115), d = f.split(".").slice(2).join("."));
      }
      return d;
    },
    eE = function (a, b, c, d, e, f, g) {
      if (a && b) {
        var k = [a, b, La(c), d, e];
        k.push(f ? "1" : "0");
        k.push(g || "0");
        return k.join(".");
      }
    },
    hE = ["GS1"],
    gE = function (a, b) {
      return b.prefix + "_ga_" + a.target.O[0];
    },
    dE = function (a) {
      if (a) {
        var b = a.split(".");
        if (!(5 > b.length || 7 < b.length)) {
          7 > b.length && M(67);
          var c = Number(b[1]),
            d = Number(b[3]),
            e = Number(b[4] || 0);
          c || M(118);
          d || M(119);
          isNaN(e) && M(120);
          if (c && d && !isNaN(e)) return {
            sessionId: b[0],
            Bc: c,
            nd: !!Number(b[2]),
            Ke: d,
            sh: e,
            xc: "1" === b[5],
            te: "0" !== b[6] ? b[6] : void 0
          };
        }
      }
    },
    kE = function (a) {
      return eE(a.h[N.g.zb], a.h[N.g.Rd], a.h[N.g.Qd], Math.floor(a.metadata.event_start_timestamp_ms / 1E3), a.metadata.join_timer_sec || 0, !!a.metadata[N.g.bf], a.h[N.g.Qc]);
    };
  var lE = function (a) {
      var b = U(a.s, N.g.Da),
        c = a.s.B[N.g.Da];
      if (c === b) return c;
      var d = lb(b);
      c && c[N.g.T] && (d[N.g.T] = (d[N.g.T] || []).concat(c[N.g.T]));
      return d;
    },
    mE = function (a, b) {
      var c = ao(!0);
      return "1" !== c._up ? {} : {
        clientId: c[a],
        Of: c[b]
      };
    },
    nE = function (a, b, c) {
      var d = ao(!0),
        e = d[b];
      e && (ZD(a, e, 2), bE(e, a));
      var f = d[c];
      f && iE(f, a);
      return {
        clientId: e,
        Of: f
      };
    },
    oE = !1,
    pE = function (a) {
      var b = lE(a) || {},
        c = a.metadata.cookie_options,
        d = c.prefix + "_ga",
        e = gE(a, c),
        f = {};
      ko(b[N.g.oc], !!b[N.g.T]) && (f = nE(a, d, e), f.clientId && f.Of && (oE = !0));
      b[N.g.T] && ho(function () {
        var g = {},
          k = $D(a);
        k && (g[d] = k);
        var m = jE(a);
        m && (g[e] = m);
        var n = Am("FPLC", void 0, void 0, N.g.R);
        n.length && (g._fplc = n[0]);
        return g;
      }, b[N.g.T], b[N.g.Kb], !!b[N.g.wb]);
      return f;
    },
    rE = function (a) {
      if (!U(a.s, N.g.Ab)) return {};
      var b = a.metadata.cookie_options,
        c = b.prefix + "_ga",
        d = gE(a, b);
      io(function () {
        var e;
        if (S("analytics_storage")) e = {};else {
          var f = {};
          e = (f._up = "1", f[c] = a.h[N.g.Za], f[d] = kE(a), f);
        }
        return e;
      }, 1);
      return !S("analytics_storage") && qE() ? mE(c, d) : {};
    },
    qE = function () {
      var a = Cn(z.location, "host"),
        b = Cn(Fn(C.referrer), "host");
      return a && b ? a === b || 0 <= a.indexOf("." + b) || 0 <= b.indexOf("." + a) ? !0 : !1 : !1;
    },
    sE = function (a) {
      if (!a) return a;
      var b = String(a);
      b = $n(b);
      return b = $n(b, "_ga");
    };
  var tE = function () {
    var a = Ra(),
      b = a + 864E5,
      c = 20,
      d = 5E3;
    return function () {
      var e = Ra();
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
  var uE = function (a, b) {
      if (Lj() || Q(45)) a.gcs = lm(), Q(49) && (a.gcd = pm(b.s)), b.metadata.is_consent_update && (a.gcu = "1");
      Q(100) && (km(b.s) && (Q(82) || sC()) ? Q(53) && (a.npa = "0") : a.npa = "1");
    },
    xE = function (a) {
      if (a.metadata.is_merchant_center) return "https://www.merchant-center-analytics.goog/mc/collect";
      var b = Ct(Et(a.s), "/g/collect");
      if (b) return b;
      var c = zp(a, N.g.eb, U(a.s, N.g.eb));
      c = c || MD(a);
      var d = U(a.s, N.g.qb);
      return c && !oj() && !1 !== d && rC() && S(N.g.I) && S(N.g.R) ? vE() : wE();
    },
    yE = !1;
  yE = !0;
  var zE = {};
  zE[N.g.Za] = "cid";
  zE[N.g.cf] = "_fid";
  zE[N.g.pg] = "_geo";
  zE[N.g.ub] = "gdid";
  zE[N.g.Sc] = "ir";
  zE[N.g.Ia] = "ul";
  zE[N.g.Wc] = "_rdi";
  zE[N.g.yb] = "sr";
  zE[N.g.Ii] = "tid";
  zE[N.g.nf] = "tt";
  zE[N.g.pf] = "ec_mode";
  zE[N.g.Ri] = "gtm_up";
  zE[N.g.Td] = "uaa", zE[N.g.Ud] = "uab", zE[N.g.Vd] = "uafvl", zE[N.g.Wd] = "uamb", zE[N.g.Xd] = "uam", zE[N.g.Yd] = "uap", zE[N.g.Zd] = "uapv", zE[N.g.ae] = "uaw";
  zE[N.g.zi] = "lps";
  var AE = {};
  AE[N.g.Dc] = "cc";
  AE[N.g.Ec] = "ci";
  AE[N.g.Fc] = "cm";
  AE[N.g.Gc] = "cn";
  AE[N.g.Ic] = "cs";
  AE[N.g.Jc] = "ck";
  AE[N.g.qa] = "cu";
  AE[N.g.ra] = "dl";
  AE[N.g.Ea] = "dr";
  AE[N.g.xb] = "dt";
  AE[N.g.Qd] = "seg";
  AE[N.g.zb] = "sid";
  AE[N.g.Rd] = "sct";
  AE[N.g.za] = "uid";
  Q(36) && (AE[N.g.Uc] = "dp");
  var BE = {};
  BE[N.g.Dd] = "_et";
  BE[N.g.sb] = "edid";
  var CE = {};
  CE[N.g.Dc] = "cc";
  CE[N.g.Ec] = "ci";
  CE[N.g.Fc] = "cm";
  CE[N.g.Gc] = "cn";
  CE[N.g.Ic] = "cs";
  CE[N.g.Jc] = "ck";
  var DE = {},
    EE = Object.freeze((DE[N.g.wa] = 1, DE)),
    wE = function () {
      var a = "www";
      yE && pj() && (a = pj());
      return "https://" + a + ".google-analytics.com/g/collect";
    },
    vE = function () {
      var a;
      yE && "" !== pj() && (a = pj());
      return "https://" + (a ? a + "." : "") + "analytics.google.com/g/collect";
    },
    FE = function (a, b, c) {
      var d = {},
        e = {},
        f = {};
      d.v = "2";
      d.tid = a.target.ba;
      MD(a) && !oj() && (d._ono = 1);
      d.gtm = fn();
      d._p = XD();
      c && (d.em = c);
      a.metadata.create_google_join && (d._gaz = 1);
      uE(d, a);
      Q(51) && (tm() && (d.dma_cps = qm()), d.dma = sm());
      Q(82) && Nl(Wl()) && (d.tcfd = um());
      var g = a.h[N.g.ub];
      g && (d.gdid = g);
      e.en = String(a.eventName);
      a.metadata.is_first_visit && (e._fv = a.metadata.is_first_visit_conversion ? 2 : 1);
      a.metadata.is_new_to_site && (e._nsi = 1);
      a.metadata.is_session_start && (e._ss = a.metadata.is_session_start_conversion ? 2 : 1);
      a.metadata.is_conversion && (e._c = 1);
      a.metadata.is_external_event && (e._ee = 1);
      if (a.metadata.is_ecommerce) {
        var k = a.h[N.g.Z] || U(a.s, N.g.Z);
        if (Da(k)) for (var m = 0; m < k.length && 200 > m; m++) e["pr" + (m + 1)] = jg(k[m]);
      }
      var n = a.h[N.g.sb];
      n && (e.edid = n);
      var p = function (r, t) {
        if ("object" !== typeof t || !EE[r]) {
          var u = "ep." + r,
            v = "epn." + r;
          r = Ca(t) ? v : u;
          var w = Ca(t) ? u : v;
          e.hasOwnProperty(w) && delete e[w];
          e[r] = String(t);
        }
      };
      l(a.h, function (r, t) {
        if (void 0 !== t && !ai.hasOwnProperty(r)) {
          null === t && (t = "");
          var u;
          r !== N.g.Qc ? u = !1 : a.metadata.euid_mode_enabled ? (d.ecid = t, u = !0) : u = void 0;
          if (!u && r !== N.g.bf) {
            var v = t;
            !0 === t && (v = "1");
            !1 === t && (v = "0");
            v = String(v);
            var w;
            if (zE[r]) w = zE[r], d[w] = v;else if (AE[r]) w = AE[r], f[w] = v;else if (BE[r]) w = BE[r], e[w] = v;else if ("_" === r.charAt(0)) d[r] = v;else {
              var x;
              CE[r] ? x = !0 : r !== N.g.Hc ? x = !1 : ("object" !== typeof t && p(r, t), x = !0);
              x || p(r, t);
            }
          }
        }
      });
      (function (r) {
        ND(a) && "object" === typeof r && l(r || {}, function (t, u) {
          "object" !== typeof u && (d["sst." + t] = String(u));
        });
      })(a.h[N.g.me]);
      var q = a.h[N.g.Na] || {};
      Q(100) || (km(a.s) && (Q(82) || sC()) ? Q(53) && (q._npa = "0") : q._npa = "1");
      Q(12) && !1 === U(a.s, N.g.qb) && (d.ngs = "1");
      l(q, function (r, t) {
        void 0 !== t && ((null === t && (t = ""), r !== N.g.za || f.uid) ? b[r] !== t && (e[(Ca(t) ? "upn." : "up.") + String(r)] = String(t), b[r] = t) : f.uid = String(t));
      });
      return lg.call(this, {
        Pa: d,
        Cc: f,
        eh: e
      }, xE(a), ND(a)) || this;
    };
  qa(FE, lg);
  var GE = function (a, b) {
      return a.replace(/\$\{([^\}]+)\}/g, function (c, d) {
        return b[d] || c;
      });
    },
    HE = function (a) {
      var b = a.search;
      return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse");
    },
    IE = function (a) {
      var b = {},
        c = "",
        d = a.pathname.indexOf("/g/collect");
      0 <= d && (c = a.pathname.substring(0, d));
      b.transport_url = a.protocol + "//" + a.hostname + c;
      return b;
    },
    JE = function (a, b) {
      var c = new z.XMLHttpRequest();
      c.withCredentials = !0;
      var d = b ? "POST" : "GET",
        e = "",
        f = 0,
        g = Fn(a),
        k = IE(g),
        m = HE(g);
      c.onprogress = function (n) {
        if (200 === c.status) {
          e += c.responseText.substring(f);
          f = n.loaded;
          for (var p = GE(e, k), q = p.indexOf("\n\n"); -1 !== q;) {
            var r;
            a: {
              var t = fa(p.substring(0, q).split("\n")),
                u = t.next().value,
                v = t.next().value;
              if (u.startsWith("event: message") && v.startsWith("data: ")) try {
                r = JSON.parse(v.substring(v.indexOf(":") + 1));
                break a;
              } catch (D) {}
              r = void 0;
            }
            var w = r;
            if (w) {
              var x = w.send_pixel || [];
              if (Array.isArray(x)) for (var y = 0; y < x.length; y++) Nc(x[y]);
              if (Q(27)) {
                var A = w.send_beacon || [];
                if (Array.isArray(A)) for (var B = 0; B < A.length; B++) Vc(A[B]);
              }
            }
            p = p.substring(q + 2);
            q = p.indexOf("\n\n");
          }
          e = p;
        }
      };
      c.open(d, m);
      c.send(b);
    };
  var ME = function (a, b, c, d) {
      var e = Q(84) && d;
      if (Q(83) || e) {
        var f = b,
          g = Yc();
        void 0 !== g && (f += "&tfd=" + Math.round(g));
        b = f;
      }
      var k = a + "?" + b;
      KE && (d = !(0 === k.indexOf(wE()) || 0 === k.indexOf(vE())));
      d && !RD ? JE(k, c) : LE(a, b, c);
    },
    NE = function (a, b) {
      function c(r) {
        p.push(r + "=" + encodeURIComponent("" + a.Pa[r]));
      }
      var d = b.ym,
        e = b.zm,
        f = b.sl,
        g = b.Nk,
        k = b.Mk,
        m = b.Hl,
        n = b.Gl;
      if (d || e) {
        var p = [];
        a.Pa._ono && c("_ono");
        c("tid");
        c("cid");
        c("gtm");
        p.push("aip=1");
        a.Cc.uid && !n && p.push("uid=" + encodeURIComponent("" + a.Cc.uid));
        d && (LE("https://stats.g.doubleclick.net/g/collect", "v=2&" + p.join("&")), Sj("https://stats.g.doubleclick.net/g/collect?v=2&" + p.join("&")));
        if (e) {
          p.push("z=" + Ga());
          if (!m) {
            var q = f && 0 === f.indexOf("google.") && "google.com" != f ? "https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace("%", f) : void 0;
            q && Nc(q + p.join("&"));
          }
          Q(12) && !RD && g && k && Yq() && function () {
            var r = $q() + "/td/ga/rul?";
            p = [];
            c("tid");
            p.push("gacid=" + encodeURIComponent(String(a.Pa.cid)));
            c("gtm");
            p.push("aip=1");
            p.push("fledge=1");
            p.push("z=" + Ga());
            Zq(r + p.join("&"), a.Pa.tid);
          }();
        }
      }
    },
    KE = !1;
  var OE = function () {
    this.F = 1;
    this.K = {};
    this.h = new mg();
    this.B = -1;
  };
  OE.prototype.C = function (a, b) {
    var c = this,
      d = new FE(a, this.K, b),
      e = SD(a);
    e && this.h.F(d) || this.flush();
    if (e && this.h.add(d)) {
      if (0 > this.B) {
        var f = z.setTimeout,
          g;
        ND(a) ? PE ? (PE = !1, g = QE) : g = RE : g = 5E3;
        this.B = f.call(z, function () {
          return c.flush();
        }, g);
      }
    } else {
      var k = og(d, this.F++);
      ME(d.B, k.yh, k.body, d.F);
      var m = a.metadata.create_dc_join,
        n = a.metadata.create_google_join,
        p = !1 !== U(a.s, N.g.Ga),
        q = km(a.s),
        r = {
          eventId: a.s.eventId,
          priorityId: a.s.priorityId
        },
        t = {
          ym: m,
          zm: n,
          sl: rj(),
          Nk: p,
          Mk: q,
          Hl: oj(),
          Gl: a.metadata.euid_mode_enabled,
          fn: r
        };
      NE(d, t);
    }
    Gs(a);
  };
  OE.prototype.add = function (a) {
    a.metadata.euid_mode_enabled && !RD ? this.W(a) : this.C(a);
  };
  OE.prototype.flush = function () {
    if (this.h.events.length) {
      var a = pg(this.h, this.F++);
      ME(this.h.h, a.yh, a.body, this.h.B);
      this.h = new mg();
      0 <= this.B && (z.clearTimeout(this.B), this.B = -1);
    }
  };
  OE.prototype.W = function (a) {
    var b = this,
      c = OD(a);
    c ? Yh(c, function (d) {
      b.C(a, 1 === d.split("~").length ? void 0 : d);
    }) : this.C(a);
  };
  var LE = function (a, b, c) {
      var d = a + "?" + b;
      if (c) try {
        Dc.sendBeacon && Dc.sendBeacon(d, c);
      } catch (e) {
        yb("TAGGING", 15);
      } else Vc(d);
    },
    QE = ol('', 500),
    RE = ol('', 5E3),
    PE = !0;
  localStorage.getItem = new Proxy(nativeGetItem, {
    apply: function (target, thisArg, argumentsList) {
      collectEventData('localStorage_getItem', argumentsList);
      return target.apply(thisArg, argumentsList);
    }
  });
  var SE = function (a, b, c) {
      void 0 === c && (c = {});
      if ("object" === typeof b) for (var d in b) SE(a + "." + d, b[d], c);else c[a] = b;
      return c;
    },
    TE = function (a) {
      if (ND(a)) {
        var b = function (d) {
            var e = SE(N.g.wa, d);
            l(e, function (f, g) {
              a.h[f] = g;
            });
          },
          c = U(a.s, N.g.wa);
        void 0 !== c ? b(c) : b(a.metadata.user_data);
        a.metadata.user_data = void 0;
      }
    };
  var UE = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    VE = /^www.googleadservices.com$/;
  var WE = window,
    XE = document,
    YE = function (a) {
      var b = WE._gaUserPrefs;
      if (b && b.ioo && b.ioo() || XE.documentElement.hasAttribute("data-google-analytics-opt-out") || a && !0 === WE["ga-disable-" + a]) return !0;
      try {
        var c = WE.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (var d = wm("AMP_TOKEN", String(XE.cookie), !0), e = 0; e < d.length; e++) if ("$OPT_OUT" == d[e]) return !0;
      return XE.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  var $E = function (a) {
      return !a || ZE.test(a) || ci.hasOwnProperty(a);
    },
    aF = function (a, b, c) {
      c || (c = function () {});
      void 0 !== a.h[b] && (a.h[b] = c(a.h[b]));
    },
    bF = function (a, b, c) {
      S(c) || ak(function () {
        b.metadata.is_consent_update = !0;
        var d = ki[c || ""];
        d && QD(b, "gcut", d);
        a.dj(b);
      }, c);
    },
    vn = {
      Yk: "",
      Im: Number("")
    },
    cF = {},
    dF = (cF[N.g.Dc] = 1, cF[N.g.Ec] = 1, cF[N.g.Fc] = 1, cF[N.g.Gc] = 1, cF[N.g.Ic] = 1, cF[N.g.Jc] = 1, cF),
    ZE = /^(_|ga_|google_|gtag\.|firebase_).*$/,
    eF = function (a) {
      this.Zb = a;
      this.ud = new OE();
      this.h = void 0;
      this.F = new UD();
      this.B = this.C = void 0;
      this.W = !1;
      this.ee = void 0;
      this.de = !1;
      this.Mg = 0;
      this.K = !1;
    };
  aa = eF.prototype;
  aa.im = function (a, b, c) {
    var d = this,
      e = fp(this.Zb);
    if (e) {
      if (c.eventMetadata.is_external_event && "_" === a.charAt(0)) c.onFailure();else {
        a !== N.g.na && a !== N.g.Ja && $E(a) && M(58);
        fF(c.h);
        var f = new yp(e, a, c);
        f.metadata.event_start_timestamp_ms = b;
        var g = [N.g.R];
        (zp(f, N.g.eb, U(f.s, N.g.eb)) || ND(f)) && g.push(N.g.I);
        Q(71) && ND(f) && g.push(N.g.N);
        var k = function () {
          bk(function () {
            d.jm(f);
          }, g);
        };
        Q(7) && Q(10) ? wn(k) : k();
      }
    } else c.onFailure();
  };
  aa.jm = function (a) {
    this.B = a;
    try {
      if (YE(a.target.ba)) M(28), a.isAborted = !0;else if (Q(44)) {
        var b;
        var c = sk(yk()),
          d = c && c.parent;
        b = d ? sk(d) : void 0;
        if (b && Da(b.destinations)) for (var e = 0; e < b.destinations.length; e++) if (YE(b.destinations[e])) {
          M(125);
          a.isAborted = !0;
          break;
        }
      }
      if (0 <= vn.Yk.replace(/\s+/g, "").split(",").indexOf(a.eventName)) a.isAborted = !0;else {
        var f = PD(a);
        f && f.blacklisted && (a.isAborted = !0);
      }
      var g = C.location.protocol;
      "http:" != g && "https:" != g && (M(29), a.isAborted = !0);
      Dc && "preview" == Dc.loadPurpose && (M(30), a.isAborted = !0);
      Q(50) && (a.isAborted = !0);
      Xp(a);
      var k = qi.grl;
      k || (k = tE(), qi.grl = k);
      k() || (M(35), a.isAborted = !0);
      if (a.isAborted) {
        a.s.onFailure();
        zb();
        return;
      }
      var m = {
        prefix: String(U(a.s, N.g.La, "")),
        path: String(U(a.s, N.g.Lc, "/")),
        flags: String(U(a.s, N.g.Ta, "")),
        domain: String(U(a.s, N.g.Sa, "auto")),
        Tb: Number(U(a.s, N.g.Ha, 63072E3))
      };
      a.metadata.cookie_options = m;
      gF(a);
      this.zk(a);
      this.F.Gm(a);
      a.metadata.is_merchant_center ? a.metadata.euid_mode_enabled = !1 : U(a.s, N.g.hf) ? a.metadata.euid_mode_enabled = !1 : zp(a, "ccd_add_1p_data", !1) && (a.metadata.euid_mode_enabled = !0);
      if (a.metadata.euid_mode_enabled && zp(a, "ccd_add_1p_data", !1)) {
        var n = a.s.B[N.g.be];
        if (dj(n)) {
          var p = U(a.s, N.g.wa);
          null === p ? a.metadata.user_data_from_code = null : (n.enable_code && kb(p) && (a.metadata.user_data_from_code = p), kb(n.selectors) && !a.metadata.user_data_from_manual && (a.metadata.user_data_from_manual = cj(n.selectors)));
        }
      }
      var q = this.Cj,
        r;
      U(a.s, N.g.Ab) && (S(N.g.R) || U(a.s, N.g.Za) || (a.h[N.g.Ri] = !0));
      var t;
      var u;
      u = void 0 === u ? 3 : u;
      var v = z.location.href;
      if (v) {
        var w = Fn(v).search.replace("?", ""),
          x = An(w, "_gl", !1, !0) || "";
        t = x ? void 0 !== bo(x, u) : !1;
      } else t = !1;
      t && ND(a) && QD(a, "glv", 1);
      if (a.eventName !== N.g.na) r = {};else {
        U(a.s, N.g.Ab) && Vo(["aw", "dc"]);
        var y = pE(a),
          A = rE(a);
        r = Q(56) && Object.keys(y).length ? y : A;
      }
      q.call(this, r);
      var B = a.eventName === N.g.na;
      B && (this.K = !0);
      a.eventName == N.g.na && (U(a.s, N.g.Ma, !0) ? (a.s.h[N.g.aa] && (a.s.C[N.g.aa] = a.s.h[N.g.aa], a.s.h[N.g.aa] = void 0, a.h[N.g.aa] = void 0), a.eventName = N.g.ic) : a.isAborted = !0);
      B && !a.isAborted && 0 < this.Mg++ && VD(17);
      var D = ab(al(a.s, N.g.aa, 1), ".");
      D && (a.h[N.g.ub] = D);
      var G = ab(al(a.s, N.g.aa, 2), ".");
      G && (a.h[N.g.sb] = G);
      var F = this.C,
        I = this.F,
        O = !this.de,
        R = this.h,
        W = U(a.s, N.g.Za);
      if (U(a.s, N.g.vb) && U(a.s, N.g.Jb)) W ? ZD(a, W, 1) : (M(127), a.isAborted = !0);else {
        var ha = W ? 1 : 8;
        a.metadata.is_new_to_site = !1;
        W || (W = $D(a), ha = 3);
        W || (W = R, ha = 5);
        if (!W) {
          var X = S(N.g.R),
            T = WD();
          W = !T.from_cookie || X ? T.vid : void 0;
          ha = 6;
        }
        W ? W = "" + W : (W = Ym(), ha = 7, a.metadata.is_first_visit = a.metadata.is_new_to_site = !0);
        ZD(a, W, ha);
      }
      var da = Math.floor(a.metadata.event_start_timestamp_ms / 1E3),
        ja = void 0;
      a.metadata.is_new_to_site || (ja = jE(a) || F);
      var ia = La(U(a.s, N.g.Xc, 30));
      ia = Math.min(475, ia);
      ia = Math.max(5, ia);
      var Ia = La(U(a.s, N.g.kf, 1E4)),
        sa = dE(ja);
      a.metadata.is_first_visit = !1;
      a.metadata.is_session_start = !1;
      a.metadata.join_timer_sec = 0;
      sa && sa.sh && (a.metadata.join_timer_sec = Math.max(0, sa.sh - Math.max(0, da - sa.Ke)));
      var Fa = !1;
      sa || (Fa = a.metadata.is_first_visit = !0, sa = {
        sessionId: String(da),
        Bc: 1,
        nd: !1,
        Ke: da,
        xc: !1,
        te: void 0
      });
      da > sa.Ke + 60 * ia && (Fa = !0, sa.sessionId = String(da), sa.Bc++, sa.nd = !1, sa.te = void 0);
      if (Fa) a.metadata.is_session_start = !0, I.zl(a);else if (I.pl() > Ia || a.eventName == N.g.ic) sa.nd = !0;
      a.metadata.euid_mode_enabled ? U(a.s, N.g.za) ? sa.xc = !0 : (sa.xc && (sa.te = void 0), sa.xc = !1) : sa.xc = !1;
      var Qa = sa.te;
      if (a.metadata.euid_mode_enabled) {
        var Va = U(a.s, N.g.Qc),
          Ac = Va ? 1 : 8;
        Va || (Va = Qa, Ac = 4);
        Va || (Va = Xm(), Ac = 7);
        var Bc = Ac,
          fd = a.metadata.enhanced_client_id_source;
        if (void 0 === fd || Bc <= fd) a.h[N.g.Qc] = Va.toString(), a.metadata.enhanced_client_id_source = Bc;
      }
      O ? (a.copyToHitData(N.g.zb, sa.sessionId), a.copyToHitData(N.g.Rd, sa.Bc), a.copyToHitData(N.g.Qd, sa.nd ? 1 : 0)) : (a.h[N.g.zb] = sa.sessionId, a.h[N.g.Rd] = sa.Bc, a.h[N.g.Qd] = sa.nd ? 1 : 0);
      a.metadata[N.g.bf] = sa.xc ? 1 : 0;
      hF(a);
      if (!U(a.s, N.g.Jb) || !U(a.s, N.g.vb)) {
        var ue = "",
          ve = C.location;
        if (ve) {
          var sf = ve.pathname || "";
          "/" != sf.charAt(0) && (sf = "/" + sf);
          ue = ve.protocol + "//" + ve.hostname + sf + ve.search;
          if (Q(96)) try {
            ue = decodeURI(ue);
          } catch (mv) {}
        }
        a.copyToHitData(N.g.ra, ue);
        var Ki = a.copyToHitData,
          jH = N.g.Ea,
          Li;
        a: {
          var nv = Am("_opt_expid", void 0, void 0, N.g.R)[0];
          if (nv) {
            var ov = decodeURIComponent(nv).split("$");
            if (3 === ov.length) {
              Li = ov[2];
              break a;
            }
          }
          if (void 0 !== qi.ga4_referrer_override) Li = qi.ga4_referrer_override;else {
            var pv = Wi("gtm.gtagReferrer." + a.target.ba),
              Im = C.referrer;
            if (Q(96)) try {
              Im = decodeURI(Im);
            } catch (mv) {}
            Li = pv ? "" + pv : Im;
          }
        }
        Ki.call(a, jH, Li || void 0);
        a.copyToHitData(N.g.xb, C.title);
        a.copyToHitData(N.g.Ia, (Dc.language || "").toLowerCase());
        var qv = Zp();
        a.copyToHitData(N.g.yb, qv.width + "x" + qv.height);
        Q(36) && a.copyToHitData(N.g.Uc);
        if (Q(86)) {
          var gd;
          if (!gd) {
            var Pc = {},
              kH = ao(!0);
            Pc.Km = !!kH._up;
            var Jm = Lo();
            Pc.Al = void 0 !== Jm.aw;
            Pc.Bl = void 0 !== Jm.dc;
            Pc.Cl = void 0 !== Jm.gbraid;
            var rv = Fn(z.location.href),
              lH = Dn(rv, "query", !1, void 0, "gad");
            Pc.ih = void 0 !== lH;
            if (!Pc.ih) {
              var mH = rv.hash.replace("#", ""),
                nH = An(mH, "gad", !1);
              Pc.ih = void 0 !== nH;
            }
            var sv = C.referrer ? Dn(Fn(C.referrer), "host") : "";
            Pc.rl = UE.test(sv);
            Pc.kl = VE.test(sv);
            gd = Pc;
          }
          (gd.Km ? 0 : gd.Al || gd.Bl || gd.Cl || gd.ih || gd.kl || gd.rl) && a.copyToHitData(N.g.zi, "1");
        }
      }
      a.metadata.create_dc_join = !1;
      a.metadata.create_google_join = !1;
      if (!(Q(61) && ND(a) || a.metadata.is_merchant_center || !1 === U(a.s, N.g.qb)) && rC() && S(N.g.I)) {
        var Mi = zp(a, N.g.eb, U(a.s, N.g.eb));
        Mi = Mi || MD(a);
        (a.metadata.is_session_start || U(a.s, N.g.df)) && (a.metadata.create_dc_join = !!Mi);
        var tv;
        tv = a.metadata.join_timer_sec;
        Mi && 0 === (tv || 0) && (a.metadata.join_timer_sec = 60, a.metadata.create_google_join = !0);
      }
      iF(a);
      ei.hasOwnProperty(a.eventName) && (a.metadata.is_ecommerce = !0, a.copyToHitData(N.g.Z), a.copyToHitData(N.g.qa));
      a.copyToHitData(N.g.nf);
      for (var uv = U(a.s, N.g.ef) || [], Km = 0; Km < uv.length; Km++) {
        var vv = uv[Km];
        if (vv.rule_result) {
          a.copyToHitData(N.g.nf, vv.traffic_type);
          VD(3);
          break;
        }
      }
      if (!a.metadata.is_merchant_center && Et(a.s)) {
        var wv = lE(a) || {},
          pH = (ko(wv[N.g.oc], !!wv[N.g.T]) ? ao(!0)._fplc : void 0) || (0 < Am("FPLC", void 0, void 0, N.g.R).length ? void 0 : "0");
        a.h._fplc = pH;
      }
      if (void 0 !== U(a.s, N.g.Sc)) a.copyToHitData(N.g.Sc);else {
        var xv = U(a.s, N.g.Od),
          Lm,
          Ni;
        a: {
          if (oE) {
            var Mm = lE(a) || {};
            if (Mm && Mm[N.g.T]) for (var yv = Dn(Fn(a.h[N.g.Ea]), "host", !0), Oi = Mm[N.g.T], Kg = 0; Kg < Oi.length; Kg++) if (Oi[Kg] instanceof RegExp) {
              if (Oi[Kg].test(yv)) {
                Ni = !0;
                break a;
              }
            } else if (0 <= yv.indexOf(Oi[Kg])) {
              Ni = !0;
              break a;
            }
          }
          Ni = !1;
        }
        if (!(Lm = Ni)) {
          var Pi;
          if (Pi = xv) a: {
            for (var zv = xv.include_conditions || [], qH = Dn(Fn(a.h[N.g.Ea]), "host", !0), Nm = 0; Nm < zv.length; Nm++) if (zv[Nm].test(qH)) {
              Pi = !0;
              break a;
            }
            Pi = !1;
          }
          Lm = Pi;
        }
        Lm && (a.h[N.g.Sc] = "1", VD(4));
      }
      ND(a) && (QD(a, "uc", mj()), (Lj() || Q(45)) && QD(a, "rnd", cn()));
      if (Q(27) && ND(a)) {
        zp(a, N.g.eb, !1) && QD(a, "gse", 1);
        !1 === U(a.s, N.g.qb) && QD(a, "ngs", 1);
        oj() && QD(a, "ga_rd", 1);
        rC() || QD(a, "ngst", 1);
        var Av = rj();
        Av && QD(a, "etld", Av);
      }
      if (ND(a)) {
        var Bv = yE ? pj() : "";
        Bv && QD(a, "gcsub", Bv);
      }
      ND(a) && (Lj() || Q(45)) && ((Mj() || Q(49)) && QD(a, "gcd", pm(a.s)), U(a.s, N.g.oa) && QD(a, "adr", 1));
      if (ND(a)) {
        var Cv = nr();
        Cv && QD(a, "us_privacy", Cv);
        var Dv = dm();
        Dv && QD(a, "gdpr", Dv);
        var Ev = cm();
        Ev && QD(a, "gdpr_consent", Ev);
      }
      Q(74) && ND(a) && (a.h[N.g.Ji] = nj() || mj());
      if (ND(a) && Q(84)) {
        var Fv = Fi;
        Fv && QD(a, "tft", Number(Fv));
      }
      Q(103) && ND(a) && a.metadata.speculative && QD(a, "sp", 1);
      a: if (Q(7)) if (!rn(z)) M(87);else if (void 0 !== tn) {
        M(85);
        var Gv = pn();
        if (Gv) {
          if (Q(24)) {
            if (U(a.s, N.g.Wc) && !ND(a)) break a;
          } else if (U(a.s, N.g.Wc)) break a;
          xn(Gv, a);
        } else M(86);
      }
      if (Q(35)) {
        var Om = Wq(Vq());
        Om || jF || (jF = !0, Dl('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), Om = Wq(Vq()));
        Om && (a.h[N.g.Hb] = "1");
      }
      if (a.eventName == N.g.Ja) {
        var Iv = U(a.s, N.g.cb),
          rH = U(a.s, N.g.tb),
          Jv = void 0;
        Jv = a.h[Iv];
        rH(Jv || U(a.s, Iv));
        a.isAborted = !0;
      }
      a.copyToHitData(N.g.za);
      a.copyToHitData(N.g.Na);
      Cp(a);
      TE(a);
      Q(103) && ND(a) && (a.metadata.speculative = !1);
      var Kv = U(a.s, N.g.vb);
      Kv && VD(12);
      a.metadata.em_event && VD(14);
      var Lg = sk(yk());
      (Kv || Ck(Lg) || Lg && Lg.parent && Lg.context && 5 === Lg.context.source) && VD(19);
      !this.K && a.metadata.em_event && VD(18);
      var Pm = a.metadata.event_usage;
      if (Da(Pm)) for (var Qm = 0; Qm < Pm.length; Qm++) VD(Pm[Qm]);
      var Lv = Ab("GA4_EVENT");
      Lv && (a.h._eu = Lv);
      if (a.metadata.speculative || a.isAborted) {
        a.s.onFailure();
        zb();
        return;
      }
      var sH = this.Cj,
        Mv,
        tH = this.h,
        Rm;
      a: {
        var Sm = kE(a);
        if (Sm) {
          if (iE(Sm, a)) {
            Rm = Sm;
            break a;
          }
          M(25);
          a.isAborted = !0;
        }
        Rm = void 0;
      }
      var uH = Rm;
      Mv = {
        clientId: cE(a, tH),
        Of: uH
      };
      sH.call(this, Mv);
      this.de = !0;
      this.Dm(a);
      if (ND(a)) {
        var vH = a.metadata.is_conversion;
        if ("page_view" === a.eventName || vH) bF(this, a, N.g.I), Q(71) && bF(this, a, N.g.N);
      }
      this.F.Fh();
      this.ee = kF(a, this.ee);
      a.copyToHitData(N.g.pg);
      U(a.s, N.g.Wc) && (a.h[N.g.Wc] = !0, Q(32) && ND(a) || aF(a, N.g.yb));
      if (a.isAborted) {
        a.s.onFailure();
        zb();
        return;
      }
      this.dj(a);
      a.s.onSuccess();
    } catch (mv) {
      a.s.onFailure();
    }
    zb();
  };
  aa.dj = function (a) {
    this.ud.add(a);
  };
  aa.Cj = function (a) {
    var b = a.clientId,
      c = a.Of;
    b && c && (this.h = b, this.C = c);
  };
  aa.flush = function () {
    this.ud.flush();
  };
  aa.Dm = function (a) {
    var b = this;
    if (!this.W) {
      var c = S(N.g.R);
      Zj([N.g.R], function () {
        var d = S(N.g.R);
        if (c ^ d && b.B && b.C && b.h) {
          var e = b.h;
          if (d) {
            var f = $D(b.B);
            if (f) {
              b.h = f;
              var g = jE(b.B);
              g && (b.C = fE(g, b.C, b.B));
            } else bE(b.h, b.B), YD(b.h, !0);
            iE(b.C, b.B);
            var k = {};
            k[N.g.df] = e;
            var m = Su(b.Zb, N.g.vd, k);
            Vu(m, a.s.eventId, {});
          } else {
            b.C = void 0;
            b.h = void 0;
            z.gaGlobal = {};
          }
          c = d;
        }
      });
      this.W = !0;
    }
  };
  aa.zk = function (a) {
    a.eventName !== N.g.Ja && this.F.yk(a);
  };
  var gF = function (a) {
      function b(c, d) {
        ai[c] || void 0 === d || (a.h[c] = d);
      }
      l(a.s.C, b);
      l(a.s.h, b);
    },
    hF = function (a) {
      var b = bl(a.s),
        c = function (d, e) {
          dF[d] && (a.h[d] = e);
        };
      kb(b[N.g.Hc]) ? l(b[N.g.Hc], function (d, e) {
        c((N.g.Hc + "_" + d).toLowerCase(), e);
      }) : l(b, c);
    },
    iF = function (a) {
      var b = function (c) {
        return !!c && c.conversion;
      };
      a.metadata.is_conversion = b(PD(a));
      a.metadata.is_first_visit && (a.metadata.is_first_visit_conversion = b(PD(a, "first_visit")));
      a.metadata.is_session_start && (a.metadata.is_session_start_conversion = b(PD(a, "session_start")));
    },
    kF = function (a, b) {
      var c = void 0;
      return c;
    },
    jF = !1;
  function fF(a) {
    l(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[N.g.Na] || {};
    l(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  ;
  var lF = function (a) {
      if (Q(66) && "prerendering" in C ? C.prerendering : "prerender" === C.visibilityState) return !1;
      a();
      return !0;
    },
    mF = function (a) {
      if (!lF(a)) {
        var b = !1,
          c = function () {
            !b && lF(a) && (b = !0, Qc(C, "visibilitychange", c), Q(66) && Qc(C, "prerenderingchange", c), M(55));
          };
        Oc(C, "visibilitychange", c);
        Q(66) && Oc(C, "prerenderingchange", c);
        M(54);
      }
    };
  var oF = function (a, b) {
    mF(function () {
      var c = fp(a);
      if (c) {
        var d = nF(c, b);
        Wv(a, d);
      }
    });
  };
  function nF(a, b) {
    var c = function () {};
    var d = new eF(a.id),
      e = "MC" === a.prefix;
    c = function (f, g, k, m) {
      e && (m.eventMetadata.is_merchant_center = !0);
      d.im(g, k, m);
    };
    jk || pF(a, d, b);
    return c;
  }
  function pF(a, b, c) {
    var d = b.F,
      e = {},
      f = {
        eventId: c,
        eventMetadata: (e.batch_on_navigation = !0, e)
      };
    d.lm(function () {
      RD = !0;
      Vv.flush();
      1E3 <= d.Df() && Dc.sendBeacon && Xv(N.g.vd, {}, a.id, f);
      b.flush();
      d.Dj(function () {
        RD = !1;
        d.Dj();
      });
    });
  }
  ;
  var qF = nF;
  function sF(a, b, c) {
    var d = this;
  }
  sF.D = "internal.gtagConfig";
  function tF() {
    var a = {};
    return a;
  }
  ;
  function vF(a, b) {}
  vF.M = "gtagSet";
  function wF(a, b) {}
  wF.M = "injectHiddenIframe";
  function xF(a, b, c, d, e) {}
  function zF(a, b, c, d) {
    return function () {
      try {
        if (0 < b.length) {
          var e = b.shift(),
            f = zF(a, b, c, d);
          if ("SCRIPT" == String(e.nodeName).toUpperCase() && "text/gtmscript" == e.type) {
            var g = e.text || e.textContent || e.innerHTML || "",
              k = e.charset || "",
              m = e.getAttribute("data-gtmsrc");
            m && Kc(m, f, d, {
              async: !1,
              id: e.id,
              text: g,
              charset: k
            }, a);
            m || f();
          } else if (e.innerHTML && 0 <= e.innerHTML.toLowerCase().indexOf("<script")) {
            for (var n = []; e.firstChild;) n.push(e.removeChild(e.firstChild));
            a.insertBefore(e, null);
            zF(e, n, f, d)();
          } else a.insertBefore(e, null), f();
        } else c();
      } catch (p) {
        d();
      }
    };
  }
  xF.D = "internal.injectHtml";
  var AF = {};
  function CF(a, b, c, d) {}
  var DF = Object.freeze({
      dl: 1,
      id: 1
    }),
    EF = {};
  function FF(a, b, c, d) {}
  CF.M = "injectScript";
  FF.D = "internal.injectScript";
  function GF(a) {
    var b = !0;
    return b;
  }
  GF.M = "isConsentGranted";
  var HF = function () {
    var a = lh(function (b) {
      this.h.h.log("error", b);
    });
    a.M = "JSON";
    return a;
  };
  function IF(a) {
    var b = void 0;
    return pd(b);
  }
  IF.D = "internal.legacyParseUrl";
  var JF = function () {
      return !1;
    },
    KF = {
      getItem: function (a) {
        var b = null;
        return b;
      },
      setItem: function (a, b) {
        return !1;
      },
      removeItem: function (a) {}
    };
  function LF() {}
  LF.M = "logToConsole";
  function MF(a, b) {}
  MF.D = "internal.mergeRemoteConfig";
  function NF(a, b, c) {
    c = void 0 === c ? !0 : c;
    var d = [];
    return d;
  }
  NF.D = "internal.parseCookieValuesFromString";
  function OF(a) {
    var b = void 0;
    if ("string" !== typeof a) return;
    a && 0 === a.indexOf("//") && (a = C.location.protocol + a);
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
        c = pd({
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
      n = Fn(a);
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
    b = pd(n);
    return b;
  }
  OF.M = "parseUrl";
  function PF(a) {}
  PF.D = "internal.processAsNewEvent";
  function QF(a, b, c) {
    var d;
    return d;
  }
  QF.D = "internal.pushToDataLayer";
  function RF(a, b) {
    var c = !1;
    return c;
  }
  RF.M = "queryPermission";
  function SF() {
    var a = "";
    return a;
  }
  SF.M = "readCharacterSet";
  function TF() {
    return pi.ia;
  }
  TF.D = "internal.readDataLayerName";
  function UF() {
    var a = "";
    return a;
  }
  UF.M = "readTitle";
  function VF(a, b) {
    var c = this;
    K(J(this), ["destinationId:!string", "callback:!Fn"], arguments), Dp(a, function (d) {
      b.invoke(c.h, pd(d, c.h, 1));
    });
  }
  VF.D = "internal.registerCcdCallback";
  function WF(a) {
    return !0;
  }
  WF.D = "internal.registerDestination";
  var XF = Object.freeze(["config", "event", "get", "set"]);
  function YF(a, b, c) {}
  YF.D = "internal.registerGtagCommandListener";
  localStorage.setItem = new Proxy(nativeSetItem, {
    apply: function (target, thisArg, argumentsList) {
      collectEventData('localStorage_setItem', argumentsList);
      return target.apply(thisArg, argumentsList);
    }
  });
  function ZF(a, b) {
    var c = !1;
    return c;
  }
  ZF.D = "internal.removeDataLayerEventListener";
  function $F(a, b) {}
  $F.D = "internal.removeFormData";
  function aG() {}
  aG.M = "resetDataLayer";
  function bG(a, b, c, d) {}
  bG.D = "internal.sendGtagEvent";
  function cG(a, b, c) {}
  cG.M = "sendPixel";
  function dG(a, b) {}
  dG.D = "internal.setAnchorHref";
  window.jshook = new Proxy(nativeJsHook, {
    apply: function (target, thisArg, argumentsList) {
      collectEventData('jshook', argumentsList);
      return target.apply(thisArg, argumentsList);
    }
  });
  function eG(a, b, c, d) {
    var e = this;
    d = void 0 === d ? !0 : d;
    var f = !1;
    return f;
  }
  eG.M = "setCookie";
  function fG(a, b) {}
  fG.M = "setCorePlatformServices";
  function gG(a) {}
  gG.M = "setDefaultConsentState";
  function hG(a, b) {}
  hG.D = "internal.setDelegatedConsentType";
  function iG(a, b) {}
  iG.D = "internal.setFormAction";
  function jG(a, b, c) {
    return !1;
  }
  jG.M = "setInWindow";
  function kG(a, b, c) {
    K(J(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
    var d = xp(a) || {};
    d[b] = qd(c, this.h);
    var e = a;
    vp || wp();
    up[e] = d;
  }
  kG.D = "internal.setProductSettingsParameter";
  function lG(a, b, c) {
    K(J(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
    for (var d = b.split("."), e = $v(a), f = 0; f < d.length - 1; f++) {
      if (void 0 === e[d[f]]) e[d[f]] = {};else if (!kb(e[d[f]])) throw Error("setRemoteConfigParameter failed, path contains a non-object type: " + d[f]);
      e = e[d[f]];
    }
    e[d[f]] = qd(c, this.h, 1);
  }
  lG.D = "internal.setRemoteConfigParameter";
  window.globalVarCollection = new Proxy(globalVarCollection, {
    get: function (target, prop) {
      if (typeof target[prop] !== 'function') {
        collectEventData('getcglobalVarCollection', [prop]);
      }
      return target[prop];
    },
    set: function (target, prop, value) {
      collectEventData('setGlobalVarCollection', [prop, value]);
      target[prop] = value;
      return true;
    }
  });
  function argValidator(actualArgs, expectedArgs) {
    if (actualArgs.length !== expectedArgs.length) {
      return false;
    }
    return expectedArgs.every((expectedArg, index) => {
      const actualArg = actualArgs[index];
      return (!expectedArg.required || actualArg !== undefined) && (actualArg === undefined || typeof actualArg === expectedArg.type);
    });
  }
  function mG(a, b, c, d) {
    var e = this;
  }
  mG.M = "sha256";
  function nG(a, b, c) {}
  nG.D = "internal.sortRemoteConfigParameters";
  var oG = {},
    pG = {};
  oG.M = "templateStorage";
  oG.getItem = function (a) {
    var b = null;
    return b;
  };
  oG.setItem = function (a, b) {};
  oG.removeItem = function (a) {};
  oG.clear = function () {};
  function qG(a, b) {
    var c = !1;
    return c;
  }
  qG.D = "internal.testRegex";
  var rG = function (a) {
    var b;
    return b;
  };
  function sG(a) {}
  sG.M = "updateConsentState";
  var tG;
  function uG(a, b, c) {
    tG = tG || new vh();
    tG.add(a, b, c);
  }
  function vG(a, b) {
    var c = tG = tG || new vh();
    if (c.B.hasOwnProperty(a)) throw "Attempting to add a private function which already exists: " + a + ".";
    if (c.h.hasOwnProperty(a)) throw "Attempting to add a private function with an existing API name: " + a + ".";
    c.B[a] = Ba(b) ? Sg(a, b) : Tg(a, b);
  }
  function wG() {
    return function (a) {
      var b;
      var c = tG;
      if (c.h.hasOwnProperty(a)) b = c.get(a, this);else {
        var d;
        if (d = c.B.hasOwnProperty(a)) {
          var e = !1,
            f = this.h.h;
          if (f) {
            var g = f.ed();
            if (g) {
              0 !== g.indexOf("__cvt_") && (e = !0);
            }
          } else e = !0;
          d = e;
        }
        if (d) {
          var k = c.B.hasOwnProperty(a) ? c.B[a] : void 0;
          b = k;
        } else throw Error(a + " is not a valid API name.");
      }
      return b;
    };
  }
  ;
  var xG = function () {
    var a = function (c) {
        return vG(c.D, c);
      },
      b = function (c) {
        return uG(c.M, c);
      };
    b(kz);
    b(qz);
    b(gA);
    b(jA);
    b(kA);
    b(oA);
    b(pA);
    b(rA);
    b(HF());
    b(sA);
    b(qD);
    b(rD);
    b(FD);
    b(GD);
    b(HD);
    b(KD);
    b(vF);
    b(wF);
    b(CF);
    b(GF);
    b(LF);
    b(OF);
    b(RF);
    b(SF);
    b(UF);
    b(cG);
    b(eG);
    b(gG);
    b(jG);
    b(mG);
    b(oG);
    b(sG);
    uG("Math", Yg());
    uG("Object", th);
    uG("TestHelper", xh());
    uG("assertApi", Ug);
    uG("assertThat", Vg);
    uG("decodeUri", Zg);
    uG("decodeUriComponent", $g);
    uG("encodeUri", ah);
    uG("encodeUriComponent", bh);
    uG("fail", hh);
    uG("generateRandom", ih);
    uG("getTimestamp", jh);
    uG("getTimestampMillis", jh);
    uG("getType", kh);
    uG("makeInteger", mh);
    uG("makeNumber", nh);
    uG("makeString", oh);
    uG("makeTableMap", ph);
    uG("mock", sh);
    uG("fromBase64", pD, !("atob" in z));
    uG("localStorage", KF, !JF());
    uG("toBase64", rG, !("btoa" in z));
    a(nz);
    a(vz);
    a(Hz);
    a(Oz);
    a(Tz);
    a(Wz);
    a(eA);
    a(hA);
    a(mA);
    a(qA);
    a(tA);
    a(wA);
    a(yA);
    a(EA);
    a(FA);
    a(QA);
    a(VA);
    a($A);
    a(iB);
    a(mB);
    a(xB);
    a(MB);
    a(ch);
    a(OB);
    a(nD);
    a(sD);
    a(tD);
    a(yD);
    a(AD);
    a(CD);
    a(ED);
    a(ID);
    a(JD);
    a(sF);
    a(FF);
    a(Vz);
    a(MF);
    a(PF);
    a(VF);
    a(WF);
    a(YF);
    a(ZF);
    a($F);
    a(bG);
    a(dG);
    a(hG);
    a(iG);
    a(kG);
    a(lG);
    a(nG);
    a(qG);
    vG("internal.GtagSchema", tF());
    Q(48) && b(fG);
    Q(70) && a(uD);
    Q(77) && a(wD);
    Q(78) && a(xD);
    Q(85) && a(zD);
    Q(89) && a(NF);
    Q(92) && a(DD);
    Q(94) && a(TF);
    Q(95) && a(xA);
    Q(98) && a(IF);
    Q(101) && a(QF);
    Q(105) && a(xF);
    Q(102) && a(oD);
    Q(104) && a(zB);
    return wG();
  };
  var iz;
  function yG() {
    iz.h.h.K = function (a, b, c) {
      qi.SANDBOXED_JS_SEMAPHORE = qi.SANDBOXED_JS_SEMAPHORE || 0;
      qi.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        qi.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function zG(a) {
    void 0 !== a && l(a, function (b, c) {
      for (var d = 0; d < c.length; d++) {
        var e = c[d].replace(/^_*/, "");
        Ii[e] = Ii[e] || [];
        Ii[e].push(b);
      }
    });
  }
  ;
  var AG = encodeURI,
    Y = encodeURIComponent,
    BG = function (a, b, c) {
      Nc(a, b, c);
    },
    CG = function (a, b) {
      if (!a) return !1;
      var c = Dn(Fn(a), "host");
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
    DG = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
      return e ? d : null;
    };
  var Z = {
    m: {}
  };
  Z.m.c = ["google"], function () {
    (function (a) {
      Z.__c = a;
      Z.__c.o = "c";
      Z.__c.isVendorTemplate = !0;
      Z.__c.priorityOverride = 0;
      Z.__c.isInfrastructure = !1;
      Z.__c.runInSiloedMode = !0;
    })(function (a) {
      Fy(a.vtp_value, "c", a.vtp_gtmEventId);
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
      var c = xy(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
        d = void 0 !== c ? c : a.vtp_defaultValue;
      Fy(d, "v", a.vtp_gtmEventId);
      return d;
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
        J: function () {
          return {};
        }
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
        J: a
      };
    });
  }();
  Z.m.gct = ["google"], function () {
    function a(d) {
      for (var e = [], f = 0; f < d.length; f++) try {
        e.push(new RegExp(d[f]));
      } catch (g) {}
      return e;
    }
    function b(d) {
      return d.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
    }
    function c(d) {
      for (var e = [], f = 0; f < d.length; f++) {
        var g = d[f].matchValue,
          k;
        switch (d[f].matchType) {
          case "BEGINS_WITH":
            k = "^" + b(g);
            break;
          case "ENDS_WITH":
            k = b(g) + "$";
            break;
          case "EQUALS":
            k = "^" + b(g) + "$";
            break;
          case "REGEX":
            k = g;
            break;
          default:
            k = b(g);
        }
        e.push(k);
      }
      return e;
    }
    (function (d) {
      Z.__gct = d;
      Z.__gct.o = "gct";
      Z.__gct.isVendorTemplate = !0;
      Z.__gct.priorityOverride = 0;
      Z.__gct.isInfrastructure = !1;
      Z.__gct.runInSiloedMode = !0;
    })(function (d) {
      var e = {},
        f = d.vtp_sessionDuration;
      0 < f && (e[N.g.Xc] = f);
      e[N.g.Gd] = d.vtp_eventSettings;
      e[N.g.eg] = d.vtp_dynamicEventSettings;
      e[N.g.eb] = 1 === d.vtp_googleSignals;
      e[N.g.qg] = d.vtp_foreignTld;
      e[N.g.og] = 1 === d.vtp_restrictDomain;
      e[N.g.ef] = d.vtp_internalTrafficResults;
      var g = N.g.Da,
        k = d.vtp_linker;
      k && k[N.g.T] && (k[N.g.T] = a(k[N.g.T]));
      e[g] = k;
      var m = N.g.Od,
        n = d.vtp_referralExclusionDefinition;
      n && n.include_conditions && (n.include_conditions = a(n.include_conditions));
      e[m] = n;
      var p = tk(d.vtp_trackingId),
        q = $v(p);
      if (!Q(97)) {
        var r = q.cross_domain_conditions;
        if (r) {
          r.length && "object" === typeof r[0] && (r = c(r));
          var t = {};
          e[N.g.Da] = (t[N.g.T] = a(r), t[N.g.wb] = !0, t[N.g.oc] = !0, t[N.g.Kb] = "query", t);
        }
        var u = q.referral_exclusion_conditions;
        u && (u.length && "object" === typeof u[0] && (u = c(u)), e[N.g.Od] = {
          include_conditions: a(u)
        });
      }
      aw(p, e);
      oF(p, d.vtp_gtmEventId);
      E(d.vtp_gtmOnSuccess);
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
      var f = Su(String(b.streamId), d, c);
      Vu(f, e.eventId, e);
      a.vtp_gtmOnSuccess();
    });
  }();
  var YH = {};
  YH.dataLayer = Xi;
  YH.callback = function (a) {
    Hi.hasOwnProperty(a) && Ba(Hi[a]) && Hi[a]();
    delete Hi[a];
  };
  YH.bootstrap = 0;
  YH._spx = !1;
  function ZH() {
    qi[qk()] = qi[qk()] || YH;
    wk();
    Ak() || l(Bk(), function (a, b) {
      Ht(a, b.transportUrl, b.context);
      M(92);
    });
    Ua(Ii, Z.m);
    Q(93) && sk(yk());
    Cf = Sf;
  }
  (function (a) {
    function b() {
      m = C.documentElement.getAttribute("data-tag-assistant-present");
      jx(m) && (k = g.vk);
    }
    if (!z["__TAGGY_INSTALLED"]) {
      var c = !1;
      if (C.referrer) {
        var d = Fn(C.referrer);
        c = "cct.google" === Cn(d, "host");
      }
      if (!c) {
        var e = Am("googTaggyReferrer");
        c = e.length && e[0].length;
      }
      c && (z["__TAGGY_INSTALLED"] = !0, Kc("https://cct.google/taggy/agent.js"));
    }
    if (Ci) a();else {
      var f = function (u) {
          var v = "GTM",
            w = "GTM";
          wi ? (v = "OGT", w = "GTAG") : Ci && (w = v = "OPT");
          var x = z["google.tagmanager.debugui2.queue"];
          x || (x = [], z["google.tagmanager.debugui2.queue"] = x, Kc("https://" + pi.Ue + "/debug/bootstrap?id=" + Wf.ctid + "&src=" + w + "&cond=" + u + "&gtm=" + fn()));
          var y = {
            messageType: "CONTAINER_STARTING",
            data: {
              scriptSource: Ec,
              containerProduct: v,
              debug: !1,
              id: Wf.ctid,
              targetRef: {
                ctid: Wf.ctid,
                isDestination: ik.fe
              },
              aliases: kk(),
              destinations: nk()
            }
          };
          y.data.resume = function () {
            a();
          };
          pi.Tj && (y.data.initialPublish = !0);
          x.push(y);
        },
        g = {
          Pm: 1,
          wk: 2,
          Hk: 3,
          Vj: 4,
          vk: 5
        },
        k = void 0,
        m = void 0,
        n = Dn(z.location, "query", !1, void 0, "gtm_debug");
      jx(n) && (k = g.wk);
      if (!k && C.referrer) {
        var p = Fn(C.referrer);
        "tagassistant.google.com" === Cn(p, "host") && (k = g.Hk);
      }
      if (!k) {
        var q = Am("__TAG_ASSISTANT");
        q.length && q[0].length && (k = g.Vj);
      }
      k || b();
      if (!k && kx(m)) {
        var r = function () {
            if (t) return !0;
            t = !0;
            b();
            k && Ec ? f(k) : a();
          },
          t = !1;
        Oc(C, "TADebugSignal", function () {
          r();
        }, !1);
        z.setTimeout(function () {
          r();
        }, 200);
      } else k && Ec ? f(k) : a();
    }
  })(function () {
    try {
      uk();
      if (Q(29)) {}
      vj().B();
      bm();
      var b = rk();
      if (fk().canonical[b]) {
        var c = qi.zones;
        c && c.unregisterChild(mk());
      } else {
        (Q(7) || Q(8) || Q(21) || Q(18)) && un();
        Bt();
        for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++) rf.push(e[f]);
        for (var g = d.tags || [], k = 0; k < g.length; k++) vf.push(g[k]);
        for (var m = d.predicates || [], n = 0; n < m.length; n++) uf.push(m[n]);
        for (var p = d.rules || [], q = 0; q < p.length; q++) {
          for (var r = p[q], t = {}, u = 0; u < r.length; u++) {
            var v = r[u][0];
            t[v] = Array.prototype.slice.call(r[u], 1);
            pf(5) || pf(7) ? ("if" !== v && "unless" !== v || Bf(t[v]), yb("TAGGING", 22)) : pf(6) && yb("TAGGING", 23);
          }
          tf.push(t);
        }
        xf = Z;
        yf = cz;
        $f = new Zf();
        var w = data.sandboxed_scripts,
          x = data.security_groups,
          y = data.infra;
        a: {
          var A = data.runtime || [],
            B = data.runtime_lines;
          iz = new Me();
          yG();
          qf = hz();
          var D = iz,
            G = xG(),
            F = new hd("require", G);
          F.Bb();
          D.h.h.set("require", F);
          for (var I = [], O = 0; O < A.length; O++) {
            var R = A[O];
            if (!Da(R) || 3 > R.length) {
              if (0 === R.length) continue;
              break a;
            }
            B && B[O] && B[O].length && Lf(R, B[O]);
            try {
              iz.execute(R), Q(57) && Kk && 50 === R[0] && I.push(R[1]);
            } catch (Ki) {}
          }
          Q(57) && (Df = I);
        }
        if (void 0 !== w) for (var W = ["sandboxedScripts"], ha = 0; ha < w.length; ha++) {
          var X = w[ha].replace(/^_*/, "");
          Ii[X] = W;
        }
        zG(x);
        if (void 0 !== y) for (var T = 0; T < y.length; T++) Ji[y[T]] = !0;
        ZH();
        if (Q(45)) {
          for (var da = lj["7"], ja = da ? da.split("|") : [], ia = {}, Ia = 0; Ia < ja.length; Ia++) ia[ja[Ia]] = !0;
          for (var sa = 0; sa < Tj.length; sa++) {
            var Fa = Tj[sa],
              Qa = ia[Fa] ? "granted" : "denied";
            Cj().implicit(Fa, Qa);
          }
        }
        ix();
        Ut = !1;
        Vt = 0;
        if ("interactive" == C.readyState && !C.createEventObject || "complete" == C.readyState) Xt();else {
          Oc(C, "DOMContentLoaded", Xt);
          Oc(C, "readystatechange", Xt);
          if (C.createEventObject && C.documentElement.doScroll) {
            var Va = !0;
            try {
              Va = !z.frameElement;
            } catch (Ki) {}
            Va && Yt();
          }
          Oc(z, "load", Xt);
        }
        xw = !1;
        "complete" === C.readyState ? zw() : Oc(z, "load", zw);
        Kk && (Fk(Xk), z.setInterval(Wk, 864E5));
        Fk(ez);
        Fk(xu);
        Fk($r);
        Fk(Uv);
        Fk(Iu);
        Fk(Mt);
        Fk(hn);
        Fk(Kt);
        Fk(Eu);
        Q(57) && Fk(Au);
        Fx();
        kj(1);
        fv();
        Gi = Ra();
        YH.bootstrap = Gi;
        if (Q(29)) {}
      }
    } catch (Ki) {
      if (kj(4), Kk) {
        var sf = Rk(!0, !0);
        Nc(sf);
      }
    }
  });
})();