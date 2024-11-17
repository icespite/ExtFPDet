// Copyright 2012 Google Inc. All rights reserved.

(function () {
  var data = {
    "resource": {
      "version": "1",
      "macros": [{
        "function": "__e"
      }, {
        "function": "__c",
        "vtp_value": "google.co.jp"
      }, {
        "function": "__c",
        "vtp_value": 0
      }, {
        "vtp_signal": 0,
        "function": "__c",
        "vtp_value": 0
      }],
      "tags": [{
        "function": "__gct",
        "vtp_trackingId": "G-RZK75Y5YFW",
        "vtp_sessionDuration": 0,
        "tag_id": 1
      }, {
        "function": "__set_product_settings",
        "vtp_instanceDestinationId": "G-RZK75Y5YFW",
        "vtp_foreignTldMacroResult": ["macro", 1],
        "vtp_isChinaVipRegionMacroResult": ["macro", 2],
        "tag_id": 3
      }, {
        "function": "__ogt_google_signals",
        "vtp_googleSignals": "DISABLED",
        "vtp_instanceDestinationId": "G-RZK75Y5YFW",
        "vtp_serverMacroResult": ["macro", 3],
        "tag_id": 5
      }, {
        "function": "__ccd_em_outbound_click",
        "priority": 0,
        "vtp_includeParams": true,
        "vtp_instanceDestinationId": "G-RZK75Y5YFW",
        "tag_id": 6
      }, {
        "function": "__ccd_em_scroll",
        "vtp_includeParams": true,
        "vtp_instanceDestinationId": "G-RZK75Y5YFW",
        "tag_id": 7
      }, {
        "function": "__ccd_em_video",
        "vtp_includeParams": true,
        "vtp_instanceDestinationId": "G-RZK75Y5YFW",
        "tag_id": 8
      }, {
        "function": "__ccd_ga_regscope",
        "vtp_settingsTable": ["list", ["map", "redactFieldGroup", "DEVICE_AND_GEO", "disallowAllRegions", false, "disallowedRegions", ""], ["map", "redactFieldGroup", "GOOGLE_SIGNALS", "disallowAllRegions", true, "disallowedRegions", ""]],
        "vtp_instanceDestinationId": "G-RZK75Y5YFW",
        "tag_id": 9
      }, {
        "function": "__ccd_em_site_search",
        "vtp_searchQueryParams": "q,s,search,query,keyword",
        "vtp_includeParams": true,
        "vtp_instanceDestinationId": "G-RZK75Y5YFW",
        "tag_id": 10
      }, {
        "function": "__ccd_conversion_marking",
        "vtp_conversionRules": ["list", ["map", "matchingRules", "{\"type\":5,\"args\":[{\"stringValue\":\"purchase\"},{\"contextValue\":{\"namespaceType\":1,\"keyParts\":[\"eventName\"]}}]}"]],
        "vtp_instanceDestinationId": "G-RZK75Y5YFW",
        "tag_id": 11
      }, {
        "function": "__ccd_em_download",
        "vtp_includeParams": true,
        "vtp_instanceDestinationId": "G-RZK75Y5YFW",
        "tag_id": 12
      }, {
        "function": "__ccd_em_page_view",
        "vtp_historyEvents": true,
        "vtp_includeParams": true,
        "vtp_instanceDestinationId": "G-RZK75Y5YFW",
        "tag_id": 13
      }, {
        "function": "__ccd_em_form",
        "vtp_includeParams": true,
        "vtp_instanceDestinationId": "G-RZK75Y5YFW",
        "tag_id": 14
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
      "rules": [[["if", 0], ["add", 0]], [["if", 1], ["add", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]]]
    },
    "runtime": [[50, "__ccd_conversion_marking", [46, "a"], [22, [30, [28, [17, [15, "a"], "conversionRules"]], [20, [17, [17, [15, "a"], "conversionRules"], "length"], 0]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "b", ["require", "internal.copyPreHit"]], [52, "c", ["require", "internal.evaluateBooleanExpression"]], [52, "d", ["require", "internal.registerCcdCallback"]], [52, "e", "is_conversion"], [52, "f", "is_first_visit"], [52, "g", "is_first_visit_conversion"], [52, "h", "is_session_start"], [52, "i", "is_session_start_conversion"], [52, "j", "first_visit"], [52, "k", "session_start"], [41, "l"], [41, "m"], ["d", [17, [15, "a"], "instanceDestinationId"], [51, "", [7, "n"], [52, "o", [8, "preHit", [15, "n"]]], [65, "p", [17, [15, "a"], "conversionRules"], [46, [22, ["c", [17, [15, "p"], "matchingRules"], [15, "o"]], [46, [2, [15, "n"], "setMetadata", [7, [15, "e"], true]], [4]]]]], [22, [2, [15, "n"], "getMetadata", [7, [15, "f"]]], [46, [22, [28, [15, "l"]], [46, [53, [52, "p", ["b", [15, "n"], [8, "omitHitData", true, "omitMetadata", true]]], [2, [15, "p"], "setEventName", [7, [15, "j"]]], [3, "l", [8, "preHit", [15, "p"]]]]]], [65, "p", [17, [15, "a"], "conversionRules"], [46, [22, ["c", [17, [15, "p"], "matchingRules"], [15, "l"]], [46, [2, [15, "n"], "setMetadata", [7, [15, "g"], true]], [4]]]]]]], [22, [2, [15, "n"], "getMetadata", [7, [15, "h"]]], [46, [22, [28, [15, "m"]], [46, [53, [52, "p", ["b", [15, "n"], [8, "omitHitData", true, "omitMetadata", true]]], [2, [15, "p"], "setEventName", [7, [15, "k"]]], [3, "m", [8, "preHit", [15, "p"]]]]]], [65, "p", [17, [15, "a"], "conversionRules"], [46, [22, ["c", [17, [15, "p"], "matchingRules"], [15, "m"]], [46, [2, [15, "n"], "setMetadata", [7, [15, "i"], true]], [4]]]]]]]]], [2, [15, "a"], "gtmOnSuccess", [7]], [36]], [50, "__ccd_em_download", [46, "a"], [50, "r", [46, "x"], [36, [1, [15, "x"], [21, [2, [2, [15, "x"], "toLowerCase", [7]], "match", [7, [15, "q"]]], [45]]]]], [50, "s", [46, "x"], [52, "y", [2, [17, [15, "x"], "pathname"], "split", [7, "."]]], [52, "z", [39, [18, [17, [15, "y"], "length"], 1], [16, [15, "y"], [37, [17, [15, "y"], "length"], 1]], ""]], [36, [16, [2, [15, "z"], "split", [7, "/"]], 0]]], [50, "t", [46, "x"], [36, [39, [12, [2, [17, [15, "x"], "pathname"], "substring", [7, 0, 1]], "/"], [17, [15, "x"], "pathname"], [0, "/", [17, [15, "x"], "pathname"]]]]], [50, "u", [46, "x"], [41, "y"], [3, "y", ""], [22, [1, [15, "x"], [17, [15, "x"], "href"]], [46, [53, [41, "z"], [3, "z", [2, [17, [15, "x"], "href"], "indexOf", [7, "#"]]], [3, "y", [39, [23, [15, "z"], 0], [17, [15, "x"], "href"], [2, [17, [15, "x"], "href"], "substring", [7, 0, [15, "z"]]]]]]]], [36, [15, "y"]]], [50, "w", [46, "x"], [52, "y", [8]], [43, [15, "y"], [15, "j"], true], [43, [15, "y"], [15, "f"], true], [43, [15, "x"], "eventMetadata", [15, "y"]]], [52, "b", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "c", ["require", "internal.getProductSettingsParameter"]], [52, "d", ["require", "templateStorage"]], [52, "e", [15, "__module_ccdEmDownloadActivity"]], [52, "f", "speculative"], [52, "g", "ae_block_downloads"], [52, "h", "file_download"], [52, "i", "isRegistered"], [52, "j", "em_event"], [52, "k", [17, [15, "a"], "instanceDestinationId"]], [22, ["c", [15, "k"], [15, "g"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [2, [15, "e"], "registerDownloadActivityCallback", [7, [15, "k"], [17, [15, "a"], "includeParams"]]], [22, [2, [15, "d"], "getItem", [7, [15, "i"]]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "l", ["require", "internal.addDataLayerEventListener"]], [52, "m", ["require", "internal.enableAutoEventOnLinkClick"]], [52, "n", ["require", "internal.getDestinationIds"]], [52, "o", ["require", "parseUrl"]], [52, "p", ["require", "internal.sendGtagEvent"]], [52, "q", [0, "^(pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|", "mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma)$"]], [52, "v", ["m", [8, "checkValidation", true]]], [22, [28, [15, "v"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]], [2, [15, "d"], "setItem", [7, [15, "i"], true]], ["l", "gtm.linkClick", [51, "", [7, "x", "y"], ["y"], [52, "z", [8, "eventId", [16, [15, "x"], "gtm.uniqueEventId"]]], [22, [16, [15, "b"], "enableDeferAllEnhancedMeasurement"], [46, [43, [15, "z"], "deferrable", true]]], [52, "ba", [16, [15, "x"], "gtm.elementUrl"]], [52, "bb", ["o", [15, "ba"]]], [22, [28, [15, "bb"]], [46, [36]]], [52, "bc", ["s", [15, "bb"]]], [22, [28, ["r", [15, "bc"]]], [46, [36]]], [52, "bd", [8, "link_id", [16, [15, "x"], "gtm.elementId"], "link_url", ["u", [15, "bb"]], "link_text", [16, [15, "x"], "gtm.elementText"], "file_name", ["t", [15, "bb"]], "file_extension", [15, "bc"]]], ["w", [15, "z"]], ["p", ["n"], [15, "h"], [15, "bd"], [15, "z"]]], [15, "v"]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_em_form", [46, "a"], [50, "t", [46, "z"], [52, "ba", [30, [16, [15, "z"], [15, "l"]], [8]]], [43, [15, "ba"], "event_usage", [7, 8]], [43, [15, "z"], [15, "l"], [15, "ba"]]], [50, "u", [46, "z", "ba"], [52, "bb", [30, [16, [15, "z"], [15, "l"]], [8]]], [43, [15, "bb"], [15, "k"], true], [43, [15, "bb"], [15, "f"], true], [22, [1, [15, "o"], [16, [15, "ba"], "gtm.formCanceled"]], [46, [43, [15, "bb"], [15, "m"], true]]], [43, [15, "z"], [15, "l"], [15, "bb"]]], [52, "b", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "c", ["require", "internal.getProductSettingsParameter"]], [52, "d", ["require", "templateStorage"]], [52, "e", [15, "__module_ccdEmFormActivity"]], [52, "f", "speculative"], [52, "g", "ae_block_form"], [52, "h", "form_submit"], [52, "i", "form_start"], [52, "j", "isRegistered"], [52, "k", "em_event"], [52, "l", "eventMetadata"], [52, "m", "form_event_canceled"], [52, "n", [17, [15, "a"], "instanceDestinationId"]], [52, "o", [28, [28, [16, [15, "b"], "enableFormSkipValidation"]]]], [22, ["c", [15, "n"], [15, "g"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [2, [15, "e"], "registerFormActivityCallback", [7, [17, [15, "a"], "instanceDestinationId"], [17, [15, "a"], "skipValidation"], [17, [15, "a"], "includeParams"]]], [22, [2, [15, "d"], "getItem", [7, [15, "j"]]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [2, [15, "d"], "setItem", [7, [15, "j"], true]], [52, "p", ["require", "internal.addFormInteractionListener"]], [52, "q", ["require", "internal.addFormSubmitListener"]], [52, "r", ["require", "internal.getDestinationIds"]], [52, "s", ["require", "internal.sendGtagEvent"]], [52, "v", [8]], [52, "w", [51, "", [7, "z", "ba"], [22, [15, "ba"], [46, ["ba"]]], [52, "bb", [16, [15, "z"], "gtm.elementId"]], [22, [16, [15, "v"], [15, "bb"]], [46, [36]]], [43, [15, "v"], [15, "bb"], true], [52, "bc", [8, "form_id", [15, "bb"], "form_name", [16, [15, "z"], "gtm.interactedFormName"], "form_destination", [16, [15, "z"], "gtm.elementUrl"], "form_length", [16, [15, "z"], "gtm.interactedFormLength"], "first_field_id", [16, [15, "z"], "gtm.interactedFormFieldId"], "first_field_name", [16, [15, "z"], "gtm.interactedFormFieldName"], "first_field_type", [16, [15, "z"], "gtm.interactedFormFieldType"], "first_field_position", [16, [15, "z"], "gtm.interactedFormFieldPosition"]]], [52, "bd", [8, "eventId", [17, [15, "a"], "gtmEventId"]]], [22, [16, [15, "b"], "enableDeferAllEnhancedMeasurement"], [46, [43, [15, "bd"], "deferrable", true]]], ["t", [15, "bd"]], ["u", [15, "bd"], [15, "z"]], ["s", ["r"], [15, "i"], [15, "bc"], [15, "bd"]]]], [52, "x", [16, [15, "b"], "useEnableAutoEventOnFormApis"]], [52, "y", [51, "", [7, "z", "ba"], ["w", [15, "z"], [44]], [52, "bb", [8, "form_id", [16, [15, "z"], "gtm.elementId"], "form_name", [16, [15, "z"], "gtm.interactedFormName"], "form_destination", [16, [15, "z"], "gtm.elementUrl"], "form_length", [16, [15, "z"], "gtm.interactedFormLength"], "form_submit_text", [39, [15, "x"], [16, [15, "z"], "gtm.formSubmitElementText"], [16, [15, "z"], "gtm.formSubmitButtonText"]]]], [43, [15, "bb"], "event_callback", [15, "ba"]], [52, "bc", [8, "eventId", [17, [15, "a"], "gtmEventId"]]], [22, [16, [15, "b"], "enableDeferAllEnhancedMeasurement"], [46, [43, [15, "bc"], "deferrable", true]]], ["t", [15, "bc"]], ["u", [15, "bc"], [15, "z"]], ["s", ["r"], [15, "h"], [15, "bb"], [15, "bc"]]]], [22, [15, "x"], [46, [53, [52, "z", ["require", "internal.addDataLayerEventListener"]], [52, "ba", ["require", "internal.enableAutoEventOnFormSubmit"]], [52, "bb", ["require", "internal.enableAutoEventOnFormInteraction"]], [52, "bc", ["bb"]], [22, [28, [15, "bc"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]], ["z", "gtm.formInteract", [15, "w"], [15, "bc"]], [52, "bd", ["ba", [8, "checkValidation", [28, [15, "o"]], "waitForTags", false]]], [22, [28, [15, "bd"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]], ["z", "gtm.formSubmit", [15, "y"], [15, "bd"]]]], [46, ["p", [15, "w"]], ["q", [15, "y"], [8, "waitForCallbacks", false, "checkValidation", [28, [15, "o"]]]]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_em_outbound_click", [46, "a"], [50, "s", [46, "y"], [22, [28, [15, "y"]], [46, [36, [44]]]], [41, "z"], [3, "z", ""], [22, [1, [15, "y"], [17, [15, "y"], "href"]], [46, [53, [41, "ba"], [3, "ba", [2, [17, [15, "y"], "href"], "indexOf", [7, "#"]]], [3, "z", [39, [23, [15, "ba"], 0], [17, [15, "y"], "href"], [2, [17, [15, "y"], "href"], "substring", [7, 0, [15, "ba"]]]]]]]], [36, [15, "z"]]], [50, "t", [46, "y"], [22, [28, [15, "y"]], [46, [36, [44]]]], [41, "z"], [3, "z", [17, [15, "y"], "hostname"]], [52, "ba", [2, [15, "z"], "match", [7, "^www\\d*\\."]]], [22, [1, [15, "ba"], [16, [15, "ba"], 0]], [46, [3, "z", [2, [15, "z"], "substring", [7, [17, [16, [15, "ba"], 0], "length"]]]]]], [36, [15, "z"]]], [50, "u", [46, "y"], [22, [28, [15, "y"]], [46, [36, false]]], [52, "z", [2, [17, [15, "y"], "hostname"], "toLowerCase", [7]]], [41, "ba"], [3, "ba", [2, ["t", ["q", ["p"]]], "toLowerCase", [7]]], [41, "bb"], [3, "bb", [37, [17, [15, "z"], "length"], [17, [15, "ba"], "length"]]], [22, [1, [18, [15, "bb"], 0], [29, [2, [15, "ba"], "charAt", [7, 0]], "."]], [46, [32, [15, "bb"], [3, "bb", [37, [15, "bb"], 1]]], [3, "ba", [0, ".", [15, "ba"]]]]], [22, [1, [19, [15, "bb"], 0], [12, [2, [15, "z"], "indexOf", [7, [15, "ba"], [15, "bb"]]], [15, "bb"]]], [46, [36, false]]], [36, true]], [50, "x", [46, "y"], [52, "z", [8]], [43, [15, "z"], [15, "j"], true], [43, [15, "z"], [15, "f"], true], [43, [15, "y"], "eventMetadata", [15, "z"]]], [52, "b", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "c", ["require", "internal.getProductSettingsParameter"]], [52, "d", ["require", "templateStorage"]], [52, "e", [15, "__module_ccdEmOutboundClickActivity"]], [52, "f", "speculative"], [52, "g", "ae_block_outbound_click"], [52, "h", "click"], [52, "i", "isRegistered"], [52, "j", "em_event"], [52, "k", [17, [15, "a"], "instanceDestinationId"]], [22, ["c", [15, "k"], [15, "g"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [2, [15, "e"], "registerOutbackClickActivityCallback", [7, [15, "k"], [17, [15, "a"], "includeParams"]]], [22, [2, [15, "d"], "getItem", [7, [15, "i"]]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "l", ["require", "internal.addDataLayerEventListener"]], [52, "m", ["require", "internal.enableAutoEventOnLinkClick"]], [52, "n", ["require", "internal.getDestinationIds"]], [52, "o", ["require", "internal.getRemoteConfigParameter"]], [52, "p", ["require", "getUrl"]], [52, "q", ["require", "parseUrl"]], [52, "r", ["require", "internal.sendGtagEvent"]], [52, "v", ["o", [15, "k"], "cross_domain_conditions"]], [52, "w", ["m", [8, "affiliateDomains", [15, "v"], "checkValidation", true, "waitForTags", false]]], [22, [28, [15, "w"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]], [2, [15, "d"], "setItem", [7, [15, "i"], true]], ["l", "gtm.linkClick", [51, "", [7, "y", "z"], [52, "ba", ["q", [16, [15, "y"], "gtm.elementUrl"]]], [22, [28, ["u", [15, "ba"]]], [46, ["z"], [36]]], [52, "bb", [8, "link_id", [16, [15, "y"], "gtm.elementId"], "link_classes", [16, [15, "y"], "gtm.elementClasses"], "link_url", ["s", [15, "ba"]], "link_domain", ["t", [15, "ba"]], "outbound", true]], [43, [15, "bb"], "event_callback", [15, "z"]], [52, "bc", [8, "eventId", [16, [15, "y"], "gtm.uniqueEventId"]]], [22, [16, [15, "b"], "enableDeferAllEnhancedMeasurement"], [46, [43, [15, "bc"], "deferrable", true]]], ["x", [15, "bc"]], ["r", ["n"], [15, "h"], [15, "bb"], [15, "bc"]]], [15, "w"]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_em_page_view", [46, "a"], [50, "r", [46, "s"], [52, "t", [8]], [43, [15, "t"], [15, "k"], true], [43, [15, "t"], [15, "g"], true], [43, [15, "s"], "eventMetadata", [15, "t"]]], [22, [28, [17, [15, "a"], "historyEvents"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "b", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "c", ["require", "internal.getProductSettingsParameter"]], [52, "d", ["require", "internal.setRemoteConfigParameter"]], [52, "e", ["require", "templateStorage"]], [52, "f", [15, "__module_ccdEmPageViewActivity"]], [52, "g", "speculative"], [52, "h", "ae_block_history"], [52, "i", "page_view"], [52, "j", "isRegistered"], [52, "k", "em_event"], [52, "l", [17, [15, "a"], "instanceDestinationId"]], [22, ["c", [15, "l"], [15, "h"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [2, [15, "f"], "registerPageViewActivityCallback", [7, [15, "l"], [17, [15, "a"], "includeParams"]]], [22, [2, [15, "e"], "getItem", [7, [15, "j"]]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "m", ["require", "internal.addDataLayerEventListener"]], [52, "n", ["require", "internal.enableAutoEventOnHistoryChange"]], [52, "o", ["require", "internal.getDestinationIds"]], [52, "p", ["require", "internal.sendGtagEvent"]], [52, "q", ["n", [8, "interval", 1000]]], [22, [28, [15, "q"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]], [2, [15, "e"], "setItem", [7, [15, "j"], true]], ["m", "gtm.historyChange-v2", [51, "", [7, "s", "t"], ["t"], [52, "u", [16, [15, "s"], "gtm.oldUrl"]], [22, [20, [16, [15, "s"], "gtm.newUrl"], [15, "u"]], [46, [36]]], [52, "v", [16, [15, "s"], "gtm.historyChangeSource"]], [22, [1, [1, [21, [15, "v"], "pushState"], [21, [15, "v"], "popstate"]], [21, [15, "v"], "replaceState"]], [46, [36]]], [52, "w", [8]], [22, [17, [15, "a"], "includeParams"], [46, [43, [15, "w"], "page_location", [16, [15, "s"], "gtm.newUrl"]], [43, [15, "w"], "page_referrer", [15, "u"]]]], [52, "x", [8, "eventId", [16, [15, "s"], "gtm.uniqueEventId"]]], [22, [16, [15, "b"], "enableDeferAllEnhancedMeasurement"], [46, [43, [15, "x"], "deferrable", true]]], ["r", [15, "x"]], ["p", ["o"], [15, "i"], [15, "w"], [15, "x"]]], [15, "q"]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_em_scroll", [46, "a"], [50, "q", [46, "r"], [52, "s", [8]], [43, [15, "s"], [15, "j"], true], [43, [15, "s"], [15, "f"], true], [43, [15, "r"], "eventMetadata", [15, "s"]]], [52, "b", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "c", ["require", "internal.getProductSettingsParameter"]], [52, "d", ["require", "templateStorage"]], [52, "e", [15, "__module_ccdEmScrollActivity"]], [52, "f", "speculative"], [52, "g", "ae_block_scroll"], [52, "h", "scroll"], [52, "i", "isRegistered"], [52, "j", "em_event"], [52, "k", [17, [15, "a"], "instanceDestinationId"]], [22, ["c", [15, "k"], [15, "g"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [2, [15, "e"], "registerScrollActivityCallback", [7, [15, "k"], [17, [15, "a"], "includeParams"]]], [22, [2, [15, "d"], "getItem", [7, [15, "i"]]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "l", ["require", "internal.addDataLayerEventListener"]], [52, "m", ["require", "internal.enableAutoEventOnScroll"]], [52, "n", ["require", "internal.getDestinationIds"]], [52, "o", ["require", "internal.sendGtagEvent"]], [52, "p", ["m", [8, "verticalThresholdUnits", "PERCENT", "verticalThresholds", 90]]], [22, [28, [15, "p"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]], [2, [15, "d"], "setItem", [7, [15, "i"], true]], ["l", "gtm.scrollDepth", [51, "", [7, "r", "s"], ["s"], [52, "t", [8, "eventId", [16, [15, "r"], "gtm.uniqueEventId"]]], [22, [16, [15, "b"], "enableDeferAllEnhancedMeasurement"], [46, [43, [15, "t"], "deferrable", true]]], [52, "u", [8, "percent_scrolled", [16, [15, "r"], "gtm.scrollThreshold"]]], ["q", [15, "t"]], ["o", ["n"], [15, "h"], [15, "u"], [15, "t"]]], [15, "p"]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_em_site_search", [46, "a"], [50, "e", [46, "j"], [52, "k", [2, [30, [15, "j"], ""], "split", [7, ","]]], [53, [41, "l"], [3, "l", 0], [63, [7, "l"], [23, [15, "l"], [17, [15, "k"], "length"]], [33, [15, "l"], [3, "l", [0, [15, "l"], 1]]], [46, [53, [52, "m", ["b", [2, [16, [15, "k"], [15, "l"]], "trim", [7]]]], [22, [21, [15, "m"], [44]], [46, [36, [15, "m"]]]]]]]]], [50, "f", [46, "j", "k"], [52, "l", [8, "search_term", [15, "j"]]], [52, "m", [2, [30, [15, "k"], ""], "split", [7, ","]]], [53, [41, "n"], [3, "n", 0], [63, [7, "n"], [23, [15, "n"], [17, [15, "m"], "length"]], [33, [15, "n"], [3, "n", [0, [15, "n"], 1]]], [46, [53, [52, "o", [2, [16, [15, "m"], [15, "n"]], "trim", [7]]], [52, "p", ["b", [15, "o"]]], [22, [21, [15, "p"], [44]], [46, [43, [15, "l"], [0, "q_", [15, "o"]], [15, "p"]]]]]]]], [36, [15, "l"]]], [52, "b", ["require", "getQueryParameters"]], [52, "c", ["require", "internal.sendGtagEvent"]], [52, "d", ["require", "getContainerVersion"]], [52, "g", ["e", [17, [15, "a"], "searchQueryParams"]]], [52, "h", [30, [17, [15, "a"], "instanceDestinationId"], [17, ["d"], "containerId"]]], [52, "i", [8, "deferrable", true, "eventId", [17, [15, "a"], "gtmEventId"]]], [22, [15, "g"], [46, [53, [52, "j", [39, [28, [28, [17, [15, "a"], "includeParams"]]], ["f", [15, "g"], [17, [15, "a"], "additionalQueryParams"]], [8]]], ["c", [15, "h"], "view_search_results", [15, "j"], [15, "i"]]]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_em_video", [46, "a"], [50, "s", [46, "t"], [52, "u", [8]], [43, [15, "u"], [15, "l"], true], [43, [15, "u"], [15, "f"], true], [43, [15, "t"], "eventMetadata", [15, "u"]]], [52, "b", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "c", ["require", "internal.getProductSettingsParameter"]], [52, "d", ["require", "templateStorage"]], [52, "e", [15, "__module_ccdEmVideoActivity"]], [52, "f", "speculative"], [52, "g", "ae_block_video"], [52, "h", "video_start"], [52, "i", "video_progress"], [52, "j", "video_complete"], [52, "k", "isRegistered"], [52, "l", "em_event"], [52, "m", [17, [15, "a"], "instanceDestinationId"]], [22, ["c", [15, "m"], [15, "g"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [2, [15, "e"], "registerVideoActivityCallback", [7, [15, "m"], [17, [15, "a"], "includeParams"]]], [22, [2, [15, "d"], "getItem", [7, [15, "k"]]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "n", ["require", "internal.addDataLayerEventListener"]], [52, "o", ["require", "internal.enableAutoEventOnYouTubeActivity"]], [52, "p", ["require", "internal.getDestinationIds"]], [52, "q", ["require", "internal.sendGtagEvent"]], [52, "r", ["o", [8, "captureComplete", true, "captureStart", true, "progressThresholdsPercent", [7, 10, 25, 50, 75]]]], [22, [28, [15, "r"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]], [2, [15, "d"], "setItem", [7, [15, "k"], true]], ["n", "gtm.video", [51, "", [7, "t", "u"], ["u"], [52, "v", [16, [15, "t"], "gtm.videoStatus"]], [41, "w"], [22, [20, [15, "v"], "start"], [46, [3, "w", [15, "h"]]], [46, [22, [20, [15, "v"], "progress"], [46, [3, "w", [15, "i"]]], [46, [22, [20, [15, "v"], "complete"], [46, [3, "w", [15, "j"]]], [46, [36]]]]]]], [52, "x", [8, "video_current_time", [16, [15, "t"], "gtm.videoCurrentTime"], "video_duration", [16, [15, "t"], "gtm.videoDuration"], "video_percent", [16, [15, "t"], "gtm.videoPercent"], "video_provider", [16, [15, "t"], "gtm.videoProvider"], "video_title", [16, [15, "t"], "gtm.videoTitle"], "video_url", [16, [15, "t"], "gtm.videoUrl"], "visible", [16, [15, "t"], "gtm.videoVisible"]]], [52, "y", [8, "eventId", [16, [15, "t"], "gtm.uniqueEventId"]]], [22, [16, [15, "b"], "enableDeferAllEnhancedMeasurement"], [46, [43, [15, "y"], "deferrable", true]]], ["s", [15, "y"]], ["q", ["p"], [15, "w"], [15, "x"], [15, "y"]]], [15, "r"]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_ga_regscope", [46, "a"], [52, "b", [15, "__module_ccdGaRegionScopedSettings"]], [2, [15, "b"], "applyRegionScopedSettings", [7, [15, "a"]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ogt_google_signals", [46, "a"], [52, "b", ["require", "internal.setProductSettingsParameter"]], [52, "c", ["require", "getContainerVersion"]], [52, "d", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "e", [30, [17, [15, "a"], "instanceDestinationId"], [17, ["c"], "containerId"]]], ["b", [15, "e"], "google_signals", [20, [17, [15, "a"], "serverMacroResult"], 1]], [22, [17, [15, "d"], "enableGa4OnoRemarketing"], [46, ["b", [15, "e"], "google_ono", [20, [17, [15, "a"], "serverMacroResult"], 2]]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__set_product_settings", [46, "a"], [2, [15, "a"], "gtmOnSuccess", [7]]], [52, "__module_activities", [13, [41, "$0"], [3, "$0", [51, "", [7], [50, "a", [46], [50, "b", [46, "c", "d"], [36, [39, [15, "d"], ["d", [15, "c"]], [15, "c"]]]], [36, [8, "withRequestContext", [15, "b"]]]], [36, ["a"]]]], ["$0"]]], [52, "__module_ccdEmDownloadActivity", [13, [41, "$0"], [3, "$0", [51, "", [7], [50, "a", [46], [50, "h", [46, "i", "j"], ["c", [15, "i"], [51, "", [7, "k"], [22, [30, [21, [2, [15, "k"], "getEventName", [7]], [15, "f"]], [28, [2, [15, "k"], "getMetadata", [7, [15, "g"]]]]], [46, [36]]], [22, ["b", [15, "i"], [15, "e"]], [46, [2, [15, "k"], "abort", [7]], [36]]], [2, [15, "k"], "setMetadata", [7, [15, "d"], false]], [22, [28, [15, "j"]], [46, [2, [15, "k"], "setHitData", [7, "link_id", [44]]], [2, [15, "k"], "setHitData", [7, "link_url", [44]]], [2, [15, "k"], "setHitData", [7, "link_text", [44]]], [2, [15, "k"], "setHitData", [7, "file_name", [44]]], [2, [15, "k"], "setHitData", [7, "file_extension", [44]]]]]]]], [52, "b", ["require", "internal.getProductSettingsParameter"]], [52, "c", ["require", "internal.registerCcdCallback"]], [52, "d", "speculative"], [52, "e", "ae_block_downloads"], [52, "f", "file_download"], [52, "g", "em_event"], [36, [8, "registerDownloadActivityCallback", [15, "h"]]]], [36, ["a"]]]], ["$0"]]], [52, "__module_ccdEmFormActivity", [13, [41, "$0"], [3, "$0", [51, "", [7], [50, "a", [46], [50, "l", [46, "m", "n", "o"], [22, [1, [15, "k"], [20, [15, "n"], [44]]], [46, [3, "n", [20, [2, [15, "m"], "indexOf", [7, "AW-"]], 0]]]], ["d", [15, "m"], [51, "", [7, "p"], [52, "q", [2, [15, "p"], "getEventName", [7]]], [52, "r", [30, [20, [15, "q"], [15, "h"]], [20, [15, "q"], [15, "g"]]]], [22, [30, [28, [15, "r"]], [28, [2, [15, "p"], "getMetadata", [7, [15, "i"]]]]], [46, [36]]], [22, ["c", [15, "m"], [15, "f"]], [46, [2, [15, "p"], "abort", [7]], [36]]], [22, [15, "k"], [46, [22, [1, [28, [15, "n"]], [2, [15, "p"], "getMetadata", [7, [15, "j"]]]], [46, [2, [15, "p"], "abort", [7]], [36]]]]], [2, [15, "p"], "setMetadata", [7, [15, "e"], false]], [22, [28, [15, "o"]], [46, [2, [15, "p"], "setHitData", [7, "form_id", [44]]], [2, [15, "p"], "setHitData", [7, "form_name", [44]]], [2, [15, "p"], "setHitData", [7, "form_destination", [44]]], [2, [15, "p"], "setHitData", [7, "form_length", [44]]], [22, [20, [15, "q"], [15, "g"]], [46, [2, [15, "p"], "setHitData", [7, "form_submit_text", [44]]]], [46, [22, [20, [15, "q"], [15, "h"]], [46, [2, [15, "p"], "setHitData", [7, "first_field_id", [44]]], [2, [15, "p"], "setHitData", [7, "first_field_name", [44]]], [2, [15, "p"], "setHitData", [7, "first_field_type", [44]]], [2, [15, "p"], "setHitData", [7, "first_field_position", [44]]]]]]]]]]]], [52, "b", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "c", ["require", "internal.getProductSettingsParameter"]], [52, "d", ["require", "internal.registerCcdCallback"]], [52, "e", "speculative"], [52, "f", "ae_block_form"], [52, "g", "form_submit"], [52, "h", "form_start"], [52, "i", "em_event"], [52, "j", "form_event_canceled"], [52, "k", [28, [28, [16, [15, "b"], "enableFormSkipValidation"]]]], [36, [8, "registerFormActivityCallback", [15, "l"]]]], [36, ["a"]]]], ["$0"]]], [52, "__module_ccdEmOutboundClickActivity", [13, [41, "$0"], [3, "$0", [51, "", [7], [50, "a", [46], [50, "h", [46, "i", "j"], ["c", [15, "i"], [51, "", [7, "k"], [22, [30, [21, [2, [15, "k"], "getEventName", [7]], [15, "f"]], [28, [2, [15, "k"], "getMetadata", [7, [15, "g"]]]]], [46, [36]]], [22, ["b", [15, "i"], [15, "e"]], [46, [2, [15, "k"], "abort", [7]], [36]]], [2, [15, "k"], "setMetadata", [7, [15, "d"], false]], [22, [28, [15, "j"]], [46, [2, [15, "k"], "setHitData", [7, "link_id", [44]]], [2, [15, "k"], "setHitData", [7, "link_classes", [44]]], [2, [15, "k"], "setHitData", [7, "link_url", [44]]], [2, [15, "k"], "setHitData", [7, "link_domain", [44]]], [2, [15, "k"], "setHitData", [7, "outbound", [44]]]]]]]], [52, "b", ["require", "internal.getProductSettingsParameter"]], [52, "c", ["require", "internal.registerCcdCallback"]], [52, "d", "speculative"], [52, "e", "ae_block_outbound_click"], [52, "f", "click"], [52, "g", "em_event"], [36, [8, "registerOutbackClickActivityCallback", [15, "h"]]]], [36, ["a"]]]], ["$0"]]], [52, "__module_ccdEmPageViewActivity", [13, [41, "$0"], [3, "$0", [51, "", [7], [50, "a", [46], [50, "i", [46, "j", "k"], ["c", [15, "j"], [51, "", [7, "l"], [22, [30, [21, [2, [15, "l"], "getEventName", [7]], [15, "g"]], [28, [2, [15, "l"], "getMetadata", [7, [15, "h"]]]]], [46, [36]]], [22, ["b", [15, "j"], [15, "f"]], [46, [2, [15, "l"], "abort", [7]], [36]]], [2, [15, "l"], "setMetadata", [7, [15, "e"], false]], ["d", [15, "j"], "page_referrer", [2, [15, "l"], "getHitData", [7, "page_referrer"]]]]]], [52, "b", ["require", "internal.getProductSettingsParameter"]], [52, "c", ["require", "internal.registerCcdCallback"]], [52, "d", ["require", "internal.setRemoteConfigParameter"]], [52, "e", "speculative"], [52, "f", "ae_block_history"], [52, "g", "page_view"], [52, "h", "em_event"], [36, [8, "registerPageViewActivityCallback", [15, "i"]]]], [36, ["a"]]]], ["$0"]]], [52, "__module_ccdEmScrollActivity", [13, [41, "$0"], [3, "$0", [51, "", [7], [50, "a", [46], [50, "h", [46, "i", "j"], ["c", [15, "i"], [51, "", [7, "k"], [22, [30, [21, [2, [15, "k"], "getEventName", [7]], [15, "f"]], [28, [2, [15, "k"], "getMetadata", [7, [15, "g"]]]]], [46, [36]]], [22, ["b", [15, "i"], [15, "e"]], [46, [2, [15, "k"], "abort", [7]], [36]]], [2, [15, "k"], "setMetadata", [7, [15, "d"], false]], [22, [28, [15, "j"]], [46, [2, [15, "k"], "setHitData", [7, "percent_scrolled", [44]]]]]]]], [52, "b", ["require", "internal.getProductSettingsParameter"]], [52, "c", ["require", "internal.registerCcdCallback"]], [52, "d", "speculative"], [52, "e", "ae_block_scroll"], [52, "f", "scroll"], [52, "g", "em_event"], [36, [8, "registerScrollActivityCallback", [15, "h"]]]], [36, ["a"]]]], ["$0"]]], [52, "__module_ccdEmVideoActivity", [13, [41, "$0"], [3, "$0", [51, "", [7], [50, "a", [46], [50, "j", [46, "k", "l"], ["c", [15, "k"], [51, "", [7, "m"], [52, "n", [2, [15, "m"], "getEventName", [7]]], [52, "o", [30, [30, [20, [15, "n"], [15, "f"]], [20, [15, "n"], [15, "g"]]], [20, [15, "n"], [15, "h"]]]], [22, [30, [28, [15, "o"]], [28, [2, [15, "m"], "getMetadata", [7, [15, "i"]]]]], [46, [36]]], [22, ["b", [15, "k"], [15, "e"]], [46, [2, [15, "m"], "abort", [7]], [36]]], [2, [15, "m"], "setMetadata", [7, [15, "d"], false]], [22, [28, [15, "l"]], [46, [2, [15, "m"], "setHitData", [7, "video_current_time", [44]]], [2, [15, "m"], "setHitData", [7, "video_duration", [44]]], [2, [15, "m"], "setHitData", [7, "video_percent", [44]]], [2, [15, "m"], "setHitData", [7, "video_provider", [44]]], [2, [15, "m"], "setHitData", [7, "video_title", [44]]], [2, [15, "m"], "setHitData", [7, "video_url", [44]]], [2, [15, "m"], "setHitData", [7, "visible", [44]]]]]]]], [52, "b", ["require", "internal.getProductSettingsParameter"]], [52, "c", ["require", "internal.registerCcdCallback"]], [52, "d", "speculative"], [52, "e", "ae_block_video"], [52, "f", "video_start"], [52, "g", "video_progress"], [52, "h", "video_complete"], [52, "i", "em_event"], [36, [8, "registerVideoActivityCallback", [15, "j"]]]], [36, ["a"]]]], ["$0"]]], [52, "__module_ccdGaRegionScopedSettings", [13, [41, "$0"], [3, "$0", [51, "", [7], [50, "a", [46], [50, "j", [46, "l", "m"], [50, "r", [46, "s"], [22, [30, [28, [15, "p"]], [21, [17, [15, "p"], "length"], 2]], [46, [36, false]]], [52, "t", ["k", [15, "s"]]], [53, [41, "u"], [3, "u", 0], [63, [7, "u"], [23, [15, "u"], [17, [15, "t"], "length"]], [33, [15, "u"], [3, "u", [0, [15, "u"], 1]]], [46, [53, [52, "v", [16, [15, "t"], [15, "u"]]], [52, "w", [17, [15, "v"], "countryCode"]], [52, "x", [17, [15, "v"], "regionCode"]], [52, "y", [20, [15, "w"], [15, "p"]]], [52, "z", [30, [28, [15, "x"]], [20, [15, "x"], [15, "q"]]]], [22, [1, [15, "y"], [15, "z"]], [46, [36, true]]]]]]], [36, false]], [22, [28, [17, [15, "l"], "settingsTable"]], [46, [36]]], [52, "n", [30, [17, [15, "l"], "instanceDestinationId"], [17, ["b"], "containerId"]]], [52, "o", ["g", [15, "c"], [15, "m"]]], [52, "p", [13, [41, "$0"], [3, "$0", ["g", [15, "d"], [15, "m"]]], ["$0"]]], [52, "q", [13, [41, "$0"], [3, "$0", ["g", [15, "e"], [15, "m"]]], ["$0"]]], [53, [41, "s"], [3, "s", 0], [63, [7, "s"], [23, [15, "s"], [17, [17, [15, "l"], "settingsTable"], "length"]], [33, [15, "s"], [3, "s", [0, [15, "s"], 1]]], [46, [53, [52, "t", [16, [17, [15, "l"], "settingsTable"], [15, "s"]]], [22, [30, [17, [15, "t"], "disallowAllRegions"], ["r", [17, [15, "t"], "disallowedRegions"]]], [46, [53, [52, "u", [16, [15, "i"], [17, [15, "t"], "redactFieldGroup"]]], [22, [28, [15, "u"]], [46, [6]]], [53, [41, "v"], [3, "v", 0], [63, [7, "v"], [23, [15, "v"], [17, [15, "u"], "length"]], [33, [15, "v"], [3, "v", [0, [15, "v"], 1]]], [46, [53, [52, "w", [16, [15, "u"], [15, "v"]]], ["o", [15, "n"], [17, [15, "w"], "name"], [17, [15, "w"], "value"]]]]]]]]]]]]]], [50, "k", [46, "l"], [52, "m", [7]], [22, [28, [15, "l"]], [46, [36, [15, "m"]]]], [52, "n", [2, [15, "l"], "split", [7, ","]]], [53, [41, "o"], [3, "o", 0], [63, [7, "o"], [23, [15, "o"], [17, [15, "n"], "length"]], [33, [15, "o"], [3, "o", [0, [15, "o"], 1]]], [46, [53, [52, "p", [2, [16, [15, "n"], [15, "o"]], "trim", [7]]], [22, [28, [15, "p"]], [46, [6]]], [52, "q", [2, [15, "p"], "split", [7, "-"]]], [52, "r", [16, [15, "q"], 0]], [52, "s", [39, [20, [17, [15, "q"], "length"], 2], [15, "p"], [44]]], [22, [30, [28, [15, "r"]], [21, [17, [15, "r"], "length"], 2]], [46, [6]]], [22, [1, [21, [15, "s"], [44]], [30, [23, [17, [15, "s"], "length"], 4], [18, [17, [15, "s"], "length"], 6]]], [46, [6]]], [2, [15, "m"], "push", [7, [8, "countryCode", [15, "r"], "regionCode", [15, "s"]]]]]]]], [36, [15, "m"]]], [52, "b", ["require", "getContainerVersion"]], [52, "c", ["require", "internal.setRemoteConfigParameter"]], [52, "d", ["require", "internal.getCountryCode"]], [52, "e", ["require", "internal.getRegionCode"]], [52, "f", [15, "__module_activities"]], [52, "g", [17, [15, "f"], "withRequestContext"]], [41, "h"], [52, "i", [8, "GOOGLE_SIGNALS", [7, [8, "name", "allow_google_signals", "value", false]], "DEVICE_AND_GEO", [7, [8, "name", "geo_granularity", "value", true], [8, "name", "redact_device_info", "value", true]]]], [36, [8, "applyRegionScopedSettings", [15, "j"]]]], [36, ["a"]]]], ["$0"]]]],
    "entities": {
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
      "__ccd_ga_regscope": {
        "2": true,
        "4": true
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
        "process_dom_events": {
          "targets": [{
            "targetType": "document",
            "eventName": "click"
          }, {
            "targetType": "document",
            "eventName": "submit"
          }, {
            "targetType": "document",
            "eventName": "change"
          }, {
            "targetType": "window",
            "eventName": "pagehide"
          }]
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
        "access_template_storage": {}
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
        "access_template_storage": {}
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
        "process_dom_events": {
          "targets": [{
            "targetType": "element",
            "eventName": "onStateChange"
          }, {
            "targetType": "element",
            "eventName": "onPlaybackRateChange"
          }]
        },
        "access_template_storage": {},
        "detect_youtube_activity_events": {
          "allowFixMissingJavaScriptApi": false
        }
      },
      "__ccd_ga_regscope": {
        "read_container_data": {}
      },
      "__ogt_google_signals": {
        "read_container_data": {}
      },
      "__set_product_settings": {}
    },
    "security_groups": {
      "google": ["__ccd_conversion_marking", "__ccd_em_download", "__ccd_em_form", "__ccd_em_outbound_click", "__ccd_em_page_view", "__ccd_em_scroll", "__ccd_em_site_search", "__ccd_em_video", "__ccd_ga_regscope", "__ogt_google_signals", "__set_product_settings"]
    }
  };

  /*
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
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
    da = function (a) {
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
      a.fn = b.prototype;
    },
    ra = this || self,
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
  aa.Ih = function (a, b) {
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
    d ? a.B.Ih(b, c) : a.B.set(b, c);
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
    Fa = function (a, b) {
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
  const globalVars = Object.keys(window);
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
  aa.Ih = function (a, b) {
    this.C || va.prototype.Ih.call(this, a, b);
  };
  aa.remove = function (a) {
    this.C || va.prototype.remove.call(this, a);
  };
  aa.Bb = function () {
    this.C = !0;
  };
  aa.qj = function () {
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
  var eventTracker = function (e) {
    localStorage.setItem('lastEvent', JSON.stringify({
      type: e.type,
      target: e.target.toString(),
      timestamp: e.timeStamp
    }));
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
  aa.qj = function () {
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
  var ec;
  try {
    new URL("s://g"), ec = !0;
  } catch (a) {
    ec = !1;
  }
  var fc = ec;
  function gc(a) {
    var b;
    a: if (fc) {
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
  var hc = {};
  var ic = function () {},
    jc = function (a) {
      this.h = a;
    };
  qa(jc, ic);
  jc.prototype.toString = function () {
    return this.h;
  };
  function kc(a, b) {
    var c = [new jc(lc[0].toLowerCase(), hc)];
    if (0 === c.length) throw Error("");
    var d = c.map(function (f) {
        var g;
        if (f instanceof jc) g = f.h;else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (d.every(function (f) {
      return 0 !== e.indexOf(f);
    })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
    a.setAttribute(b, "true");
  }
  function mc(a) {
    var b = a.tagName;
    if ("SCRIPT" === b || "STYLE" === b) throw Error("");
  }
  ;
  function nc(a, b) {
    var c = b instanceof Ib ? Jb(b) : gc(b);
    void 0 !== c && (a.action = c);
  }
  ;
  var oc = da([""]),
    pc = ea(["\x00"], ["\\0"]),
    qc = ea(["\n"], ["\\n"]),
    rc = ea(["\x00"], ["\\u0000"]);
  function sc(a) {
    return -1 === a.toString().indexOf("`");
  }
  sc(function (a) {
    return a(oc);
  }) || sc(function (a) {
    return a(pc);
  }) || sc(function (a) {
    return a(qc);
  }) || sc(function (a) {
    return a(rc);
  });
  var tc = function (a) {
    this.Jl = a;
  };
  function uc(a) {
    return new tc(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var vc = [uc("data"), uc("http"), uc("https"), uc("mailto"), uc("ftp"), new tc(function (a) {
    return /^[^:]*([/?#]|$)/.test(a);
  })];
  function wc(a, b) {
    b = void 0 === b ? vc : b;
    for (var c = 0; c < b.length; ++c) {
      var d = b[c];
      if (d instanceof tc && d.Jl(a)) return new Ib(a, Lb);
    }
  }
  function xc(a) {
    var b;
    b = void 0 === b ? vc : b;
    return wc(a, b) || Mb;
  }
  ;
  function yc(a) {
    var b = a = Bc(a),
      c = Db(),
      d = c ? c.createHTML(b) : b;
    return new cc(d, bc);
  }
  function Bc(a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a;
  }
  ;
  var z = window,
    C = document,
    Cc = navigator,
    Dc = C.currentScript && C.currentScript.src,
    Ec = function (a, b) {
      var c = z[a];
      z[a] = void 0 === c ? b : c;
      return z[a];
    },
    Fc = function (a, b) {
      b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () {
        a.readyState in {
          loaded: 1,
          complete: 1
        } && (a.onreadystatechange = null, b());
      });
    },
    Gc = {
      async: 1,
      nonce: 1,
      onerror: 1,
      onload: 1,
      src: 1,
      type: 1
    },
    Hc = {
      onload: 1,
      src: 1,
      width: 1,
      height: 1,
      style: 1
    };
  function Ic(a, b, c) {
    b && l(b, function (d, e) {
      d = d.toLowerCase();
      c.hasOwnProperty(d) || a.setAttribute(d, e);
    });
  }
  var Jc = function (a, b, c, d, e) {
      var f = C.createElement("script");
      Ic(f, d, Gc);
      f.type = "text/javascript";
      f.async = !0;
      var g;
      g = Hb(Bc(a));
      f.src = Fb(g);
      var k,
        m,
        n,
        p = null == (n = (m = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : n.call(m, "script[nonce]");
      (k = p ? p.nonce || p.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", k);
      Fc(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);else {
        var q = C.getElementsByTagName("script")[0] || C.body || C.head;
        q.parentNode.insertBefore(f, q);
      }
      return f;
    },
    Kc = function () {
      if (Dc) {
        var a = Dc.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    Lc = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var g = e,
        k = !1;
      g || (g = C.createElement("iframe"), k = !0);
      Ic(g, c, Hc);
      d && l(d, function (n, p) {
        g.dataset[n] = p;
      });
      f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
      if (k) {
        var m = C.body && C.body.lastChild || C.body || C.head;
        m.parentNode.insertBefore(g, m);
      }
      Fc(g, b);
      void 0 !== a && (g.src = a);
      return g;
    },
    Mc = function (a, b, c, d) {
      var e = new Image(1, 1);
      Ic(e, d, {});
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
    Nc = function (a, b, c, d) {
      a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c);
    },
    Oc = function (a, b, c) {
      a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c);
    },
    F = function (a) {
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
      var b = C.createElement("div"),
        c = b,
        d = yc("A<div>" + a + "</div>");
      1 === c.nodeType && mc(c);
      c.innerHTML = dc(d);
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
        b = Cc.sendBeacon && Cc.sendBeacon(a);
      } catch (c) {
        yb("TAGGING", 15);
      }
      b || Mc(a);
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
      if (a && Ba(a.now)) return a.now();
    },
    Yc = function () {
      return z.performance || void 0;
    };
  var Zc = function (a, b) {
      return H(this, a) && H(this, b);
    },
    $c = function (a, b) {
      return H(this, a) === H(this, b);
    },
    ad = function (a, b) {
      return H(this, a) || H(this, b);
    },
    bd = function (a, b) {
      a = H(this, a);
      b = H(this, b);
      return -1 < String(a).indexOf(String(b));
    },
    cd = function (a, b) {
      a = String(H(this, a));
      b = String(H(this, b));
      return a.substring(0, b.length) === b;
    },
    dd = function (a, b) {
      a = H(this, a);
      b = H(this, b);
      switch (a) {
        case "pageLocation":
          var c = z.location.href;
          b instanceof qb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
          return c;
      }
    };
  var ed = function (a, b) {
    fb.call(this);
    this.K = a;
    this.W = b;
  };
  qa(ed, fb);
  ed.prototype.toString = function () {
    return this.K;
  };
  ed.prototype.Pb = function () {
    return new pb(gb(this, 1));
  };
  ed.prototype.invoke = function (a, b) {
    return this.W.apply(new hd(this, a), Array.prototype.slice.call(arguments, 1));
  };
  ed.prototype.h = function (a, b) {
    try {
      return this.invoke.apply(this, Array.prototype.slice.call(arguments, 0));
    } catch (c) {}
  };
  var hd = function (a, b) {
      this.B = a;
      this.h = b;
    },
    H = function (a, b) {
      return Da(b) ? db(a.h, b) : b;
    },
    J = function (a) {
      return a.B.K;
    };
  var id = function () {
    this.map = new Map();
  };
  id.prototype.set = function (a, b) {
    this.map.set(a, b);
  };
  id.prototype.get = function (a) {
    return this.map.get(a);
  };
  var jd = function () {
    this.keys = [];
    this.values = [];
  };
  jd.prototype.set = function (a, b) {
    this.keys.push(a);
    this.values.push(b);
  };
  jd.prototype.get = function (a) {
    var b = this.keys.indexOf(a);
    if (-1 < b) return this.values[b];
  };
  function kd() {
    try {
      return Map ? new id() : new jd();
    } catch (a) {
      return new jd();
    }
  }
  ;
  var ld = function (a) {
    if (a instanceof ld) return a;
    this.h = a;
  };
  ld.prototype.toString = function () {
    return String(this.h);
  };
  var nd = function (a) {
    fb.call(this);
    this.h = a;
    this.set("then", md(this));
    this.set("catch", md(this, !0));
    this.set("finally", md(this, !1, !0));
  };
  qa(nd, qb);
  var md = function (a, b, c) {
    b = void 0 === b ? !1 : b;
    c = void 0 === c ? !1 : c;
    return new ed("", function (d, e) {
      b && (e = d, d = void 0);
      c && (e = d);
      d instanceof ed || (d = void 0);
      e instanceof ed || (e = void 0);
      var f = za(this.h),
        g = function (m) {
          return function (n) {
            return c ? (m.invoke(f), a.h) : m.invoke(f, n);
          };
        },
        k = a.h.then(d && g(d), e && g(e));
      return new nd(k);
    });
  };
  var pd = function (a, b, c) {
      var d = kd(),
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
          if (g instanceof nd) return g.h;
          if (g instanceof qb) {
            var q = {};
            d.set(g, q);
            e(g, q);
            return q;
          }
          if (g instanceof ed) {
            var r = function () {
              for (var u = Array.prototype.slice.call(arguments, 0), v = 0; v < u.length; v++) u[v] = od(u[v], b, c);
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
          if (g instanceof ld && t) return g.h;
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
    od = function (a, b, c) {
      var d = kd(),
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
            var q = new ed("", function (x) {
              for (var y = Array.prototype.slice.call(arguments, 0), A = 0; A < y.length; A++) y[A] = pd(H(this, y[A]), b, c);
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
          if (void 0 !== g && w) return new ld(g);
        };
      return f(a);
    };
  var qd = function () {
    var a = !1;
    return a;
  };
  window.addEventListener("click", eventTracker);
  var rd = {
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
  var sd = function (a) {
    var b;
    b = Error.call(this, a);
    this.message = b.message;
    "stack" in b && (this.stack = b.stack);
  };
  qa(sd, Error);
  var td = {
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
    ud = new ua("break"),
    vd = new ua("continue"),
    wd = function (a, b) {
      return H(this, a) + H(this, b);
    },
    xd = function (a, b) {
      return H(this, a) && H(this, b);
    },
    yd = function (a, b, c) {
      a = H(this, a);
      b = H(this, b);
      c = H(this, c);
      if (!(c instanceof pb)) throw Error("Error: Non-List argument given to Apply instruction.");
      if (null === a || void 0 === a) {
        var d = "TypeError: Can't read property " + b + " of " + a + ".";
        if (qd()) throw new sd(d);
        throw Error(d);
      }
      var e = "number" === typeof a;
      if ("boolean" === typeof a || e) {
        if ("toString" === b) {
          if (e && c.length()) {
            var f = pd(c.get(0));
            try {
              return a.toString(f);
            } catch (y) {}
          }
          return a.toString();
        }
        var g = "TypeError: " + a + "." + b + " is not a function.";
        if (qd()) throw new sd(g);
        throw Error(g);
      }
      if ("string" === typeof a) {
        if (td.hasOwnProperty(b)) {
          var k = 2;
          k = 1;
          var m = pd(c, void 0, k);
          return od(a[b].apply(a, m), this.h);
        }
        var n = "TypeError: " + b + " is not a function";
        if (qd()) throw new sd(n);
        throw Error(n);
      }
      if (a instanceof pb) {
        if (a.has(b)) {
          var p = a.get(b);
          if (p instanceof ed) {
            var q = mb(c);
            q.unshift(this.h);
            return p.invoke.apply(p, q);
          }
          var r = "TypeError: " + b + " is not a function";
          if (qd()) throw new sd(r);
          throw Error(r);
        }
        if (0 <= rd.supportedMethods.indexOf(b)) {
          var t = mb(c);
          t.unshift(this.h);
          return rd[b].apply(a, t);
        }
      }
      if (a instanceof ed || a instanceof qb) {
        if (a.has(b)) {
          var u = a.get(b);
          if (u instanceof ed) {
            var v = mb(c);
            v.unshift(this.h);
            return u.invoke.apply(u, v);
          }
          var w = "TypeError: " + b + " is not a function";
          if (qd()) throw new sd(w);
          throw Error(w);
        }
        if ("toString" === b) return a instanceof ed ? a.K : a.toString();
        if ("hasOwnProperty" === b) return a.has.apply(a, mb(c));
      }
      if (a instanceof ld && "toString" === b) return a.toString();
      var x = "TypeError: Object has no '" + b + "' property.";
      if (qd()) throw new sd(x);
      throw Error(x);
    },
    zd = function (a, b) {
      a = H(this, a);
      if ("string" !== typeof a) throw Error("Invalid key name given for assignment.");
      var c = this.h;
      if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
      var d = H(this, b);
      c.set(a, d);
      return d;
    },
    Ad = function (a) {
      var b = za(this.h),
        c = cb(b, Array.prototype.slice.apply(arguments));
      if (c instanceof ua) return c;
    },
    Bd = function () {
      return ud;
    },
    Cd = function (a) {
      for (var b = H(this, a), c = 0; c < b.length; c++) {
        var d = H(this, b[c]);
        if (d instanceof ua) return d;
      }
    },
    Dd = function (a) {
      for (var b = this.h, c = 0; c < arguments.length - 1; c += 2) {
        var d = arguments[c];
        if ("string" === typeof d) {
          var e = H(this, arguments[c + 1]);
          ya(b, d, e, !0);
        }
      }
    },
    Ed = function () {
      return vd;
    },
    Fd = function (a, b) {
      return new ua(a, H(this, b));
    },
    Gd = function (a, b, c) {
      var d = new pb();
      b = H(this, b);
      for (var e = 0; e < b.length; e++) d.push(b[e]);
      var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
      this.h.add(a, H(this, f));
    },
    Hd = function (a, b) {
      return H(this, a) / H(this, b);
    },
    Id = function (a, b) {
      a = H(this, a);
      b = H(this, b);
      var c = a instanceof ld,
        d = b instanceof ld;
      return c || d ? c && d ? a.h == b.h : !1 : a == b;
    },
    Jd = function (a) {
      for (var b, c = 0; c < arguments.length; c++) b = H(this, arguments[c]);
      return b;
    };
  function Kd(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = cb(f, d);
      if (g instanceof ua) {
        if ("break" === g.h) break;
        if ("return" === g.h) return g;
      }
    }
  }
  function Ld(a, b, c) {
    if ("string" === typeof b) return Kd(a, function () {
      return b.length;
    }, function (f) {
      return f;
    }, c);
    if (b instanceof qb || b instanceof pb || b instanceof ed) {
      var d = b.Pb(),
        e = d.length();
      return Kd(a, function () {
        return e;
      }, function (f) {
        return d.get(f);
      }, c);
    }
  }
  var Md = function (a, b, c) {
      a = H(this, a);
      b = H(this, b);
      c = H(this, c);
      var d = this.h;
      return Ld(function (e) {
        d.set(a, e);
        return d;
      }, b, c);
    },
    Nd = function (a, b, c) {
      a = H(this, a);
      b = H(this, b);
      c = H(this, c);
      var d = this.h;
      return Ld(function (e) {
        var f = za(d);
        ya(f, a, e, !0);
        return f;
      }, b, c);
    },
    Od = function (a, b, c) {
      a = H(this, a);
      b = H(this, b);
      c = H(this, c);
      var d = this.h;
      return Ld(function (e) {
        var f = za(d);
        f.add(a, e);
        return f;
      }, b, c);
    },
    Qd = function (a, b, c) {
      a = H(this, a);
      b = H(this, b);
      c = H(this, c);
      var d = this.h;
      return Pd(function (e) {
        d.set(a, e);
        return d;
      }, b, c);
    },
    Rd = function (a, b, c) {
      a = H(this, a);
      b = H(this, b);
      c = H(this, c);
      var d = this.h;
      return Pd(function (e) {
        var f = za(d);
        ya(f, a, e, !0);
        return f;
      }, b, c);
    },
    Sd = function (a, b, c) {
      a = H(this, a);
      b = H(this, b);
      c = H(this, c);
      var d = this.h;
      return Pd(function (e) {
        var f = za(d);
        f.add(a, e);
        return f;
      }, b, c);
    };
  function Pd(a, b, c) {
    if ("string" === typeof b) return Kd(a, function () {
      return b.length;
    }, function (d) {
      return b[d];
    }, c);
    if (b instanceof pb) return Kd(a, function () {
      return b.length();
    }, function (d) {
      return b.get(d);
    }, c);
    if (qd()) throw new sd("The value is not iterable.");
    throw new TypeError("The value is not iterable.");
  }
  var Td = function (a, b, c, d) {
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
    Ud = function (a, b, c) {
      var d = this.h,
        e = H(this, b);
      if (!(e instanceof pb)) throw Error("Error: non-List value given for Fn argument names.");
      var f = Array.prototype.slice.call(arguments, 2);
      return new ed(a, function () {
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
    Vd = function (a) {
      a = H(this, a);
      var b = this.h,
        c = !1;
      if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
      return b.get(a);
    },
    Wd = function (a, b) {
      var c;
      a = H(this, a);
      b = H(this, b);
      if (void 0 === a || null === a) {
        var d = "TypeError: cannot access property of " + a + ".";
        if (qd()) throw new sd(d);
        throw Error(d);
      }
      if (a instanceof qb || a instanceof pb || a instanceof ed) c = a.get(b);else if ("string" === typeof a) "length" === b ? c = a.length : ob(b) && (c = a[b]);else if (a instanceof ld) return;
      return c;
    },
    Xd = function (a, b) {
      return H(this, a) > H(this, b);
    },
    Yd = function (a, b) {
      return H(this, a) >= H(this, b);
    },
    Zd = function (a, b) {
      a = H(this, a);
      b = H(this, b);
      a instanceof ld && (a = a.h);
      b instanceof ld && (b = b.h);
      return a === b;
    },
    $d = function (a, b) {
      return !Zd.call(this, a, b);
    },
    ae = function (a, b, c) {
      var d = [];
      H(this, a) ? d = H(this, b) : c && (d = H(this, c));
      var e = cb(this.h, d);
      if (e instanceof ua) return e;
    },
    be = function (a, b) {
      return H(this, a) < H(this, b);
    },
    ce = function (a, b) {
      return H(this, a) <= H(this, b);
    },
    de = function (a) {
      for (var b = new pb(), c = 0; c < arguments.length; c++) {
        var d = H(this, arguments[c]);
        b.push(d);
      }
      return b;
    },
    ee = function (a) {
      for (var b = new qb(), c = 0; c < arguments.length - 1; c += 2) {
        var d = H(this, arguments[c]) + "",
          e = H(this, arguments[c + 1]);
        b.set(d, e);
      }
      return b;
    },
    fe = function (a, b) {
      return H(this, a) % H(this, b);
    },
    ge = function (a, b) {
      return H(this, a) * H(this, b);
    },
    he = function (a) {
      return -H(this, a);
    },
    ie = function (a) {
      return !H(this, a);
    },
    je = function (a, b) {
      return !Id.call(this, a, b);
    },
    ke = function () {
      return null;
    },
    le = function (a, b) {
      return H(this, a) || H(this, b);
    },
    me = function (a, b) {
      var c = H(this, a);
      H(this, b);
      return c;
    },
    ne = function (a) {
      return H(this, a);
    },
    oe = function (a) {
      return Array.prototype.slice.apply(arguments);
    },
    pe = function (a) {
      return new ua("return", H(this, a));
    },
    qe = function (a, b, c) {
      a = H(this, a);
      b = H(this, b);
      c = H(this, c);
      if (null === a || void 0 === a) {
        var d = "TypeError: Can't set property " + b + " of " + a + ".";
        if (qd()) throw new sd(d);
        throw Error(d);
      }
      (a instanceof ed || a instanceof pb || a instanceof qb) && a.set(b, c);
      return c;
    },
    re = function (a, b) {
      return H(this, a) - H(this, b);
    },
    se = function (a, b, c) {
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
    ve = function (a, b, c) {
      return H(this, a) ? H(this, b) : H(this, c);
    },
    we = function (a) {
      a = H(this, a);
      return a instanceof ed ? "function" : typeof a;
    },
    xe = function (a) {
      for (var b = this.h, c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        "string" !== typeof d || b.add(d, void 0);
      }
    },
    ye = function (a, b, c, d) {
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
    ze = function (a) {
      return ~Number(H(this, a));
    },
    Ae = function (a, b) {
      return Number(H(this, a)) << Number(H(this, b));
    },
    Be = function (a, b) {
      return Number(H(this, a)) >> Number(H(this, b));
    },
    Ce = function (a, b) {
      return Number(H(this, a)) >>> Number(H(this, b));
    },
    De = function (a, b) {
      return Number(H(this, a)) & Number(H(this, b));
    },
    Ee = function (a, b) {
      return Number(H(this, a)) ^ Number(H(this, b));
    },
    Fe = function (a, b) {
      return Number(H(this, a)) | Number(H(this, b));
    },
    Ge = function () {};
  var Ie = function () {
    this.h = new eb();
    He(this);
  };
  Ie.prototype.execute = function (a) {
    return this.h.B(a);
  };
  var He = function (a) {
    var b = function (c, d) {
      var e = new ed(String(c), d);
      e.Bb();
      a.h.h.set(String(c), e);
    };
    b("map", ee);
    b("and", Zc);
    b("contains", bd);
    b("equals", $c);
    b("or", ad);
    b("startsWith", cd);
    b("variable", dd);
  };
  var Ke = function () {
    this.h = new eb();
    Je(this);
  };
  Ke.prototype.execute = function (a) {
    return Le(this.h.B(a));
  };
  var Me = function (a, b, c) {
      return Le(a.h.F(b, c));
    },
    Je = function (a) {
      var b = function (c, d) {
        var e = String(c),
          f = new ed(e, d);
        f.Bb();
        a.h.h.set(e, f);
      };
      b(0, wd);
      b(1, xd);
      b(2, yd);
      b(3, zd);
      b(56, De);
      b(57, Ae);
      b(58, ze);
      b(59, Fe);
      b(60, Be);
      b(61, Ce);
      b(62, Ee);
      b(53, Ad);
      b(4, Bd);
      b(5, Cd);
      b(52, Dd);
      b(6, Ed);
      b(49, Fd);
      b(7, de);
      b(8, ee);
      b(9, Cd);
      b(50, Gd);
      b(10, Hd);
      b(12, Id);
      b(13, Jd);
      b(51, Ud);
      b(47, Md);
      b(54, Nd);
      b(55, Od);
      b(63, Td);
      b(64, Qd);
      b(65, Rd);
      b(66, Sd);
      b(15, Vd);
      b(16, Wd);
      b(17, Wd);
      b(18, Xd);
      b(19, Yd);
      b(20, Zd);
      b(21, $d);
      b(22, ae);
      b(23, be);
      b(24, ce);
      b(25, fe);
      b(26, ge);
      b(27, he);
      b(28, ie);
      b(29, je);
      b(45, ke);
      b(30, le);
      b(32, me);
      b(33, me);
      b(34, ne);
      b(35, ne);
      b(46, oe);
      b(36, pe);
      b(43, qe);
      b(37, re);
      b(38, se);
      b(39, ve);
      b(40, we);
      b(44, Ge);
      b(41, xe);
      b(42, ye);
    };
  function Le(a) {
    if (a instanceof ua || a instanceof ed || a instanceof pb || a instanceof qb || a instanceof ld || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a) return a;
  }
  ;
  function Ne(a) {
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
  function Oe(a) {
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
  function Pe(a, b) {
    var c = a[1] || 0,
      d = a[2] || 0;
    switch (b) {
      case 0:
        return "G1" + Ne(c) + Ne(d);
      case 1:
        return "G2" + Oe(c) + Oe(d);
      default:
        return "g1--";
    }
  }
  ;
  var Qe = function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        }
      };
    };
    return {
      Pj: a("consent"),
      Qh: a("convert_case_to"),
      Rh: a("convert_false_to"),
      Sh: a("convert_null_to"),
      Th: a("convert_true_to"),
      Uh: a("convert_undefined_to"),
      Lm: a("debug_mode_metadata"),
      xa: a("function"),
      Kg: a("instance_name"),
      yk: a("live_only"),
      zk: a("malware_disabled"),
      Ak: a("metadata"),
      Dk: a("original_activity_id"),
      Sm: a("original_vendor_template_id"),
      Rm: a("once_on_load"),
      Ck: a("once_per_event"),
      Qi: a("once_per_load"),
      Wm: a("priority_override"),
      Xm: a("respected_consent_types"),
      Ui: a("setup_tags"),
      he: a("tag_id"),
      Zi: a("teardown_tags")
    };
  }();
  var mf = [],
    nf = function (a) {
      return void 0 == mf[a] ? !1 : mf[a];
    };
  var of;
  var pf = [],
    rf = [],
    sf = [],
    tf = [],
    uf = [],
    vf = {},
    wf,
    xf,
    yf = function (a) {
      xf = xf || a;
    },
    zf = function (a) {},
    Af,
    Bf = [],
    Cf = function (a, b) {
      var c = {};
      c[Qe.xa] = "__" + a;
      for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
      return c;
    },
    Df = function (a, b) {
      var c = a[Qe.xa],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = vf[c],
        f = b && 2 === b.type && d.Dh && e && -1 !== Bf.indexOf(c),
        g = {},
        k = {},
        m;
      for (m in a) a.hasOwnProperty(m) && 0 === m.indexOf("vtp_") && (e && d && d.fj && d.fj(a[m]), e && (g[m] = a[m]), !e || f) && (k[m.substr(4)] = a[m]);
      e && d && d.ej && (g.vtp_gtmCachedValues = d.ej);
      if (b) {
        if (null == b.name) {
          var n;
          a: {
            var p = b.index;
            if (null == p) n = "";else {
              var q;
              switch (b.type) {
                case 2:
                  q = pf[p];
                  break;
                case 1:
                  q = tf[p];
                  break;
                default:
                  n = "";
                  break a;
              }
              var r = q && q[Qe.Kg];
              n = r ? String(r) : "";
            }
          }
          b.name = n;
        }
        e && (g.vtp_gtmEntityIndex = b.index, g.vtp_gtmEntityName = b.name);
      }
      var t, u;
      e && (t = e(g));
      if (!e || f) u = of(c, k, b);
      f && d && (nb(t) ? typeof t !== typeof u && d.Dh(d.id, c) : t !== u && d.Dh(d.id, c));
      return e ? t : u;
    },
    Ff = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = Ef(a[e], b, c));
      return d;
    },
    Ef = function (a, b, c) {
      if (Da(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(Ef(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = pf[f];
            if (!g || b.ih(g)) return;
            c[f] = !0;
            var k = String(g[Qe.Kg]);
            try {
              var m = Ff(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = Df(m, {
                event: b,
                index: f,
                type: 2,
                name: k
              });
              Af && (d = Af.Ok(d, m));
            } catch (y) {
              b.sj && b.sj(y, Number(f), k), d = !1;
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2) d[Ef(a[n], b, c)] = Ef(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = Ef(a[q], b, c);
              xf && (p = p || xf.Gl(r));
              d.push(r);
            }
            return xf && p ? xf.Rk(d) : d.join("");
          case "escape":
            d = Ef(a[1], b, c);
            if (xf && Da(a[1]) && "macro" === a[1][0] && xf.Hl(a)) return xf.fm(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) Re[a[t]] && (d = Re[a[t]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!tf[u]) throw Error("Unable to resolve tag reference " + u + ".");
            return d = {
              kj: a[2],
              index: u
            };
          case "zb":
            var v = {
              arg0: a[2],
              arg1: a[3],
              ignore_case: a[5]
            };
            v[Qe.xa] = a[1];
            var w = Gf(v, b, c),
              x = !!a[4];
            return x || 2 !== w ? x !== (1 === w) : null;
          default:
            throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
        }
      }
      return a;
    },
    Gf = function (a, b, c) {
      try {
        return wf(Ff(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    },
    Hf = function (a) {
      var b = a[Qe.xa];
      if (!b) throw Error("Error: No function name given for function call.");
      return !!vf[b];
    };
  var If = function (a, b, c) {
    var d;
    d = Error.call(this, c);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.h = a;
  };
  qa(If, Error);
  function Jf(a, b) {
    if (Da(a)) {
      Object.defineProperty(a, "context", {
        value: {
          line: b[0]
        }
      });
      for (var c = 1; c < a.length; c++) Jf(a[c], b[c]);
    }
  }
  ;
  var Kf = function (a, b) {
    var c;
    c = Error.call(this);
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.Xl = a;
    this.B = b;
    this.h = [];
  };
  qa(Kf, Error);
  var Mf = function () {
    return function (a, b) {
      a instanceof Kf || (a = new Kf(a, Lf));
      b && a.h.push(b);
      throw a;
    };
  };
  function Lf(a) {
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
  var Pf = function (a) {
      function b(r) {
        for (var t = 0; t < r.length; t++) d[r[t]] = !0;
      }
      for (var c = [], d = [], e = Nf(a), f = 0; f < rf.length; f++) {
        var g = rf[f],
          k = Of(g, e);
        if (k) {
          for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(g.block || []);
        } else null === k && b(g.block || []);
      }
      for (var p = [], q = 0; q < tf.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    Of = function (a, b) {
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
    Nf = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = Gf(sf[c], a));
        return b[c];
      };
    };
  var Qf = {
    Ok: function (a, b) {
      b[Qe.Qh] && "string" === typeof a && (a = 1 == b[Qe.Qh] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Qe.Sh) && null === a && (a = b[Qe.Sh]);
      b.hasOwnProperty(Qe.Uh) && void 0 === a && (a = b[Qe.Uh]);
      b.hasOwnProperty(Qe.Th) && !0 === a && (a = b[Qe.Th]);
      b.hasOwnProperty(Qe.Rh) && !1 === a && (a = b[Qe.Rh]);
      return a;
    }
  };
  var Rf = function () {
    this.h = {};
  };
  function Sf(a, b, c, d) {
    if (a) for (var e = 0; e < a.length; e++) {
      var f = void 0,
        g = "A policy function denied the permission request";
      try {
        f = a[e].call(void 0, b, c, d), g += ".";
      } catch (k) {
        g = "string" === typeof k ? g + (": " + k) : k instanceof Error ? g + (": " + k.message) : g + ".";
      }
      if (!f) throw new If(c, d, g);
    }
  }
  function Tf(a, b, c) {
    return function () {
      var d = arguments[0];
      if (d) {
        var e = a.h[d],
          f = a.h.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          Sf(e, b, d, g);
          Sf(f, b, d, g);
        }
      }
    };
  }
  ;
  var Xf = function () {
      var a = data.permissions || {},
        b = Uf.ctid,
        c = this;
      this.B = new Rf();
      this.h = {};
      var d = {},
        e = Tf(this.B, b, function () {
          var f = arguments[0];
          return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {};
        });
      l(a, function (f, g) {
        var k = {};
        l(g, function (m, n) {
          var p = Vf(m, n);
          k[m] = p.assert;
          d[m] || (d[m] = p.J);
        });
        c.h[f] = function (m, n) {
          var p = k[m];
          if (!p) throw Wf(m, {}, "The requested permission " + m + " is not configured.");
          var q = Array.prototype.slice.call(arguments, 0);
          p.apply(void 0, q);
          e.apply(void 0, q);
        };
      });
    },
    Zf = function (a) {
      return Yf.h[a] || function () {};
    };
  function Vf(a, b) {
    var c = Cf(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Wf;
    try {
      return Df(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new If(e, {}, "Permission " + e + " is unknown.");
        },
        J: function () {
          for (var e = {}, f = 0; f < arguments.length; ++f) e["arg" + (f + 1)] = arguments[f];
          return e;
        }
      };
    }
  }
  function Wf(a, b, c) {
    return new If(a, b, c);
  }
  ;
  var $f = !1;
  var ag = {};
  ag.Im = Ma('');
  ag.Tk = Ma('');
  var bg = $f,
    cg = ag.Tk,
    dg = ag.Im;
  var hg = function (a) {
      var b = {},
        c = 0;
      l(a, function (e, f) {
        if (null != f) if (f = ("" + f).replace(/~/g, "~~"), eg.hasOwnProperty(e)) b[eg[e]] = f;else if (fg.hasOwnProperty(e)) {
          var g = fg[e],
            k = f;
          b.hasOwnProperty(g) || (b[g] = k);
        } else if ("category" === e) for (var m = f.split("/", 5), n = 0; n < m.length; n++) {
          var p = gg[n],
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
    eg = {
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
    fg = {
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
    gg = ["ca", "c2", "c3", "c4", "c5"];
  var ig = function (a) {
      var b = [];
      l(a, function (c, d) {
        null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)));
      });
      return b.join("&");
    },
    jg = function (a, b, c, d) {
      this.Pa = a.Pa;
      this.yc = a.yc;
      this.Yg = a.Yg;
      this.B = b;
      this.F = c;
      this.C = ig(a.Pa);
      this.h = ig(a.Yg);
      this.K = this.h.length;
      if (d && 16384 < this.K) throw Error("EVENT_TOO_LARGE");
    };
  var kg = function () {
    this.events = [];
    this.h = this.Pa = "";
    this.C = 0;
    this.B = !1;
  };
  kg.prototype.add = function (a) {
    return this.F(a) ? (this.events.push(a), this.Pa = a.C, this.h = a.B, this.C += a.K, this.B = a.F, !0) : !1;
  };
  kg.prototype.F = function (a) {
    var b = 20 > this.events.length && 16384 > a.K + this.C,
      c = this.Pa === a.C && this.h === a.B && this.B === a.F;
    return 0 == this.events.length || b && c;
  };
  var lg = function (a, b) {
      l(a, function (c, d) {
        null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d));
      });
    },
    mg = function (a, b) {
      var c = [];
      a.C && c.push(a.C);
      b && c.push("_s=" + b);
      lg(a.yc, c);
      var d = !1;
      a.h && (c.push(a.h), d = !0);
      var e = c.join("&"),
        f = "",
        g = e.length + a.B.length + 1;
      d && 2048 < g && (f = c.pop(), e = c.join("&"));
      return {
        xh: e,
        body: f
      };
    },
    ng = function (a, b) {
      var c = a.events;
      if (1 == c.length) return mg(c[0], b);
      var d = [];
      a.Pa && d.push(a.Pa);
      for (var e = {}, f = 0; f < c.length; f++) l(c[f].yc, function (t, u) {
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
      lg(g, d);
      b && d.push("_s=" + b);
      for (var k = d.join("&"), m = [], n = {}, p = 0; p < c.length; n = {
        Cf: n.Cf
      }, p++) {
        var q = [];
        n.Cf = {};
        l(c[p].yc, function (t) {
          return function (u, v) {
            g[u] != "" + v && (t.Cf[u] = v);
          };
        }(n));
        c[p].h && q.push(c[p].h);
        lg(n.Cf, q);
        m.push(q.join("&"));
      }
      var r = m.join("\r\n");
      return {
        xh: k,
        body: r
      };
    };
  var rg = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
  function sg(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var tg = new Ha();
  function ug(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = tg.get(e);
      f || (f = new RegExp(b, d), tg.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function vg(a, b) {
    return 0 <= String(a).indexOf(String(b));
  }
  function wg(a, b) {
    return String(a) === String(b);
  }
  function xg(a, b) {
    return Number(a) >= Number(b);
  }
  function yg(a, b) {
    return Number(a) <= Number(b);
  }
  function zg(a, b) {
    return Number(a) > Number(b);
  }
  function Ag(a, b) {
    return Number(a) < Number(b);
  }
  function Bg(a, b) {
    return 0 === String(a).indexOf(String(b));
  }
  ;
  var Ig = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Jg(a, b) {
    return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[a << 2 | b];
  }
  ;
  var Mg = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
    Ng = {
      Fn: "function",
      PixieMap: "Object",
      List: "Array"
    },
    K = function (a, b, c) {
      for (var d = 0; d < b.length; d++) {
        var e = Mg.exec(b[d]);
        if (!e) throw Error("Internal Error in " + a);
        var f = e[1],
          g = "!" === e[2],
          k = e[3],
          m = c[d];
        if (null == m) {
          if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
        } else if ("*" !== k) {
          var n = typeof m;
          m instanceof ed ? n = "Fn" : m instanceof pb ? n = "List" : m instanceof qb ? n = "PixieMap" : m instanceof ld && (n = "OpaqueValue");
          if (n != k) throw Error("Error in " + a + ". Argument " + f + " has type " + (Ng[n] || n) + ", which does not match required type " + (Ng[k] || k) + ".");
        }
      }
    };
  function Og(a) {
    return "" + a;
  }
  function Pg(a, b) {
    var c = [];
    return c;
  }
  ;
  var Qg = function (a, b) {
      var c = new ed(a, function () {
        for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = H(this, d[e]);
        try {
          return b.apply(this, d);
        } catch (g) {
          if (qd()) throw new sd(g.message);
          throw g;
        }
      });
      c.Bb();
      return c;
    },
    Rg = function (a, b) {
      var c = new qb(),
        d;
      for (d in b) if (b.hasOwnProperty(d)) {
        var e = b[d];
        Ba(e) ? c.set(d, Qg(a + "_" + d, e)) : kb(e) ? c.set(d, Rg(a + "_" + d, e)) : (Ca(e) || h(e) || "boolean" === typeof e) && c.set(d, e);
      }
      c.Bb();
      return c;
    };
  var Sg = function (a, b) {
    K(J(this), ["apiName:!string", "message:?string"], arguments);
    var c = {},
      d = new qb();
    return d = Rg("AssertApiSubject", c);
  };
  var Tg = function (a, b) {
    K(J(this), ["actual:?*", "message:?string"], arguments);
    if (a instanceof nd) throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
    var c = {},
      d = new qb();
    return d = Rg("AssertThatSubject", c);
  };
  function Ug(a) {
    return function () {
      for (var b = [], c = this.h, d = 0; d < arguments.length; ++d) b.push(pd(arguments[d], c));
      return od(a.apply(null, b));
    };
  }
  var Wg = function () {
    for (var a = Math, b = Vg, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = Ug(a[e].bind(a)));
    }
    return c;
  };
  var Xg = function (a) {
    var b;
    return b;
  };
  var Yg = function (a) {
    var b;
    return b;
  };
  var Zg = function (a) {
    try {
      return encodeURI(a);
    } catch (b) {}
  };
  var $g = function (a) {
    try {
      return encodeURIComponent(a);
    } catch (b) {}
  };
  function ah(a, b) {
    var c = !1;
    K(J(this), ["booleanExpression:!string", "context:?PixieMap"], arguments);
    var d = JSON.parse(a);
    if (!d) throw Error("Invalid boolean expression string was given.");
    var e = b ? pd(b) : {};
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
      if (!Da(c) || 0 === c.length) throw Error('Invalid boolean expression format. Expected "args":' + c + " property to\n         be non-empty array.");
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
          return ug(d(c[0]), d(c[1]), !1);
        case 5:
          return wg(d(c[0]), d(c[1]));
        case 6:
          return Bg(d(c[0]), d(c[1]));
        case 7:
          return sg(d(c[0]), d(c[1]));
        case 8:
          return vg(d(c[0]), d(c[1]));
        case 9:
          return Ag(d(c[0]), d(c[1]));
        case 10:
          return yg(d(c[0]), d(c[1]));
        case 11:
          return zg(d(c[0]), d(c[1]));
        case 12:
          return xg(d(c[0]), d(c[1]));
        default:
          throw Error('Invalid boolean expression format. Expected "type" property tobe a positive integer which is less than 13.');
      }
    };
  ah.D = "internal.evaluateBooleanExpression";
  var fh = function (a) {
    K(J(this), ["message:?string"], arguments);
  };
  var gh = function (a, b) {
    K(J(this), ["min:!number", "max:!number"], arguments);
    return Ga(a, b);
  };
  var hh = function () {
    return new Date().getTime();
  };
  var ih = function (a) {
    if (null === a) return "null";
    if (a instanceof pb) return "array";
    if (a instanceof ed) return "function";
    if (a instanceof ld) {
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
          (bg || dg) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return od(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(pd(c));
      })
    };
  };
  var kh = function (a) {
    return La(pd(a, this.h));
  };
  var lh = function (a) {
    return Number(pd(a, this.h));
  };
  var mh = function (a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a.toString();
  };
  var nh = function (a, b, c) {
    var d = null,
      e = !1;
    return e ? d : null;
  };
  var Vg = "floor ceil round max min abs pow sqrt".split(" ");
  var oh = function () {
      var a = {};
      return {
        jl: function (b) {
          return a.hasOwnProperty(b) ? a[b] : void 0;
        },
        zm: function (b, c) {
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
      K(J(this), ["apiName:!string", "mock:?*"], arguments);
    };
  var rh = {};
  rh.keys = function (a) {
    return new pb();
  };
  rh.values = function (a) {
    return new pb();
  };
  rh.entries = function (a) {
    return new pb();
  };
  rh.freeze = function (a) {
    return a;
  };
  rh.delete = function (a, b) {
    return !1;
  };
  var L = function (a, b, c) {
    var d = a.h.h;
    if (!d) throw Error("Missing program state.");
    if (d.lm) {
      try {
        d.dj.apply(null, Array.prototype.slice.call(arguments, 1));
      } catch (e) {
        throw yb("TAGGING", 21), e;
      }
      return;
    }
    d.dj.apply(null, Array.prototype.slice.call(arguments, 1));
  };
  var th = function () {
    this.h = {};
    this.B = {};
  };
  th.prototype.get = function (a, b) {
    var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0;
    return c;
  };
  th.prototype.add = function (a, b, c) {
    if (this.h.hasOwnProperty(a)) throw "Attempting to add a function which already exists: " + a + ".";
    if (this.B.hasOwnProperty(a)) throw "Attempting to add an API with an existing private API name: " + a + ".";
    this.h[a] = c ? void 0 : Ba(b) ? Qg(a, b) : Rg(a, b);
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
      return wh ? C.querySelectorAll(a) : null;
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
    zh = !1;
  if (C.querySelectorAll) try {
    var Ah = C.querySelectorAll(":root");
    Ah && 1 == Ah.length && Ah[0] == C.documentElement && (zh = !0);
  } catch (a) {}
  var wh = zh;
  var M = function (a) {
    yb("GTM", a);
  };
  var Bh = function (a) {
      return null == a ? "" : h(a) ? Oa(String(a)) : "e0";
    },
    Dh = function (a) {
      return a.replace(Ch, "");
    },
    Fh = function (a) {
      return Eh(a.replace(/\s/g, ""));
    },
    Eh = function (a) {
      return Oa(a.replace(Gh, "").toLowerCase());
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
        if (h(v) || Da(v)) {
          v = Da(t) ? t : [t];
          for (var w = 0; w < v.length; ++w) {
            var x = Bh(v[w]),
              y = Oh.test(x);
            u && !y && M(89);
            !u && y && M(88);
          }
        }
      }
      function e(t, u) {
        var v = t[u];
        d(v, !1);
        var w = Uh[u];
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
        p = Da(p) ? p : [p];
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
              uj: c,
              bm: d
            });
          });
        });
      } catch (b) {}
    },
    Lh = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
  var N = {
      g: {
        nb: "ad_personalization",
        I: "ad_storage",
        N: "ad_user_data",
        R: "analytics_storage",
        Ra: "region",
        ld: "consent_updated",
        md: "wait_for_update",
        Tj: "ads",
        Sf: "all",
        Uj: "android",
        Vj: "chrome",
        Wj: "playstore",
        Xj: "search",
        Yj: "shopping",
        Zj: "youtube",
        Vh: "app_remove",
        Wh: "app_store_refund",
        Xh: "app_store_subscription_cancel",
        Yh: "app_store_subscription_convert",
        Zh: "app_store_subscription_renew",
        Uf: "add_payment_info",
        Vf: "add_shipping_info",
        ac: "add_to_cart",
        bc: "remove_from_cart",
        Wf: "view_cart",
        Fb: "begin_checkout",
        fc: "select_item",
        Xa: "view_item_list",
        ob: "select_promotion",
        Ya: "view_promotion",
        ma: "purchase",
        hc: "refund",
        Ba: "view_item",
        Xf: "add_to_wishlist",
        bk: "exception",
        ai: "first_open",
        bi: "first_visit",
        na: "gtag.config",
        Ja: "gtag.get",
        di: "in_app_purchase",
        ic: "page_view",
        dk: "screen_view",
        ei: "session_start",
        ek: "timing_complete",
        fk: "track_social",
        od: "user_engagement",
        pb: "gclid",
        oa: "ads_data_redaction",
        da: "allow_ad_personalization_signals",
        Pe: "allow_custom_scripts",
        Qe: "allow_display_features",
        pd: "allow_enhanced_conversions",
        qb: "allow_google_signals",
        Ga: "allow_interest_groups",
        gk: "app_id",
        hk: "app_installer_id",
        ik: "app_name",
        jk: "app_version",
        jc: "auid",
        fi: "auto_detection_enabled",
        Gb: "aw_remarketing",
        Re: "aw_remarketing_only",
        rd: "discount",
        sd: "aw_feed_country",
        ud: "aw_feed_language",
        Z: "items",
        vd: "aw_merchant_id",
        Yf: "aw_basket_type",
        zc: "campaign_content",
        Ac: "campaign_id",
        Bc: "campaign_medium",
        Cc: "campaign_name",
        Dc: "campaign",
        Ec: "campaign_source",
        Fc: "campaign_term",
        Za: "client_id",
        gi: "content_group",
        hi: "content_type",
        Ka: "conversion_cookie_prefix",
        Gc: "conversion_id",
        Ca: "conversion_linker",
        Hb: "conversion_api",
        Sa: "cookie_domain",
        Ha: "cookie_expires",
        Ta: "cookie_flags",
        kc: "cookie_name",
        Hc: "cookie_path",
        La: "cookie_prefix",
        rb: "cookie_update",
        mc: "country",
        qa: "currency",
        wd: "customer_lifetime_value",
        Ic: "custom_map",
        ii: "gcldc",
        ji: "debug_mode",
        aa: "developer_id",
        ki: "disable_merchant_reported_purchases",
        Jc: "dc_custom_params",
        li: "dc_natural_search",
        Zf: "dynamic_event_settings",
        ag: "affiliation",
        xd: "checkout_option",
        Se: "checkout_step",
        cg: "coupon",
        Kc: "item_list_name",
        Te: "list_name",
        mi: "promotions",
        Lc: "shipping",
        Ue: "tax",
        yd: "engagement_time_msec",
        Mc: "enhanced_client_id",
        zd: "enhanced_conversions",
        dg: "enhanced_conversions_automatic_settings",
        Ad: "estimated_delivery_date",
        Ve: "euid_logged_in_state",
        Nc: "event_callback",
        kk: "event_category",
        sb: "event_developer_id_string",
        lk: "event_label",
        eg: "event",
        Bd: "event_settings",
        Cd: "event_timeout",
        mk: "description",
        nk: "fatal",
        ni: "experiments",
        We: "firebase_id",
        Dd: "first_party_collection",
        Ed: "_x_20",
        Ib: "_x_19",
        fg: "fledge",
        gg: "flight_error_code",
        hg: "flight_error_message",
        oi: "fl_activity_category",
        ri: "fl_activity_group",
        ig: "fl_advertiser_id",
        si: "fl_ar_dedupe",
        ui: "fl_random_number",
        vi: "tran",
        wi: "u",
        Fd: "gac_gclid",
        nc: "gac_wbraid",
        jg: "gac_wbraid_multiple_conversions",
        kg: "ga_restrict_domain",
        Xe: "ga_temp_client_id",
        Gd: "gdpr_applies",
        lg: "geo_granularity",
        tb: "value_callback",
        cb: "value_key",
        pk: "google_ono",
        eb: "google_signals",
        mg: "google_tld",
        Hd: "groups",
        ng: "gsa_experiment_id",
        og: "iframe_state",
        Id: "ignore_referrer",
        Ye: "internal_traffic_results",
        Jb: "is_legacy_converted",
        vb: "is_legacy_loaded",
        Jd: "is_passthrough",
        xi: "_lps",
        Ia: "language",
        Ze: "legacy_developer_id_string",
        Da: "linker",
        oc: "accept_incoming",
        wb: "decorate_forms",
        T: "domains",
        Kb: "url_position",
        pg: "method",
        qk: "name",
        Oc: "new_customer",
        qg: "non_interaction",
        yi: "optimize_id",
        zi: "page_hostname",
        Pc: "page_path",
        Ea: "page_referrer",
        xb: "page_title",
        rg: "passengers",
        sg: "phone_conversion_callback",
        Ai: "phone_conversion_country_code",
        ug: "phone_conversion_css_class",
        Bi: "phone_conversion_ids",
        vg: "phone_conversion_number",
        wg: "phone_conversion_options",
        Qc: "quantity",
        Rc: "redact_device_info",
        af: "redact_enhanced_user_id",
        Ci: "redact_ga_client_id",
        Di: "redact_user_id",
        Kd: "referral_exclusion_definition",
        Lb: "restricted_data_processing",
        Ei: "retoken",
        rk: "sample_rate",
        bf: "screen_name",
        yb: "screen_resolution",
        Fi: "search_term",
        Ma: "send_page_view",
        Mb: "send_to",
        Ld: "server_container_url",
        Sc: "session_duration",
        Md: "session_engaged",
        cf: "session_engaged_time",
        zb: "session_id",
        Nd: "session_number",
        Tc: "delivery_postal_code",
        xg: "temporary_client_id",
        df: "topmost_url",
        Gi: "tracking_id",
        ef: "traffic_type",
        sa: "transaction_id",
        Nb: "transport_url",
        yg: "trip_type",
        Ob: "update",
        Ab: "url_passthrough",
        Pd: "_user_agent_architecture",
        Qd: "_user_agent_bitness",
        Rd: "_user_agent_full_version_list",
        Sd: "_user_agent_mobile",
        Td: "_user_agent_model",
        Ud: "_user_agent_platform",
        Vd: "_user_agent_platform_version",
        Wd: "_user_agent_wow64",
        wa: "user_data",
        zg: "user_data_auto_latency",
        Ag: "user_data_auto_meta",
        Bg: "user_data_auto_multi",
        Cg: "user_data_auto_selectors",
        Dg: "user_data_auto_status",
        ff: "user_data_mode",
        Xd: "user_data_settings",
        za: "user_id",
        Na: "user_properties",
        Hi: "_user_region",
        Eg: "us_privacy_string",
        fa: "value",
        qc: "wbraid",
        Fg: "wbraid_multiple_conversions",
        Ni: "_host_name",
        Oi: "_in_page_command",
        Pi: "_is_passthrough_cid",
        be: "non_personalized_ads",
        fe: "_sst_parameters",
        ab: "conversion_label",
        ra: "page_location",
        ub: "global_developer_id_string",
        Od: "tc_privacy_string"
      }
    },
    Yh = {},
    Zh = Object.freeze((Yh[N.g.da] = 1, Yh[N.g.Qe] = 1, Yh[N.g.pd] = 1, Yh[N.g.qb] = 1, Yh[N.g.Z] = 1, Yh[N.g.Sa] = 1, Yh[N.g.Ha] = 1, Yh[N.g.Ta] = 1, Yh[N.g.kc] = 1, Yh[N.g.Hc] = 1, Yh[N.g.La] = 1, Yh[N.g.rb] = 1, Yh[N.g.Ic] = 1, Yh[N.g.aa] = 1, Yh[N.g.Zf] = 1, Yh[N.g.Nc] = 1, Yh[N.g.Bd] = 1, Yh[N.g.Cd] = 1, Yh[N.g.Dd] = 1, Yh[N.g.kg] = 1, Yh[N.g.eb] = 1, Yh[N.g.mg] = 1, Yh[N.g.Hd] = 1, Yh[N.g.Ye] = 1, Yh[N.g.Jb] = 1, Yh[N.g.vb] = 1, Yh[N.g.Da] = 1, Yh[N.g.af] = 1, Yh[N.g.Kd] = 1, Yh[N.g.Lb] = 1, Yh[N.g.Ma] = 1, Yh[N.g.Mb] = 1, Yh[N.g.Ld] = 1, Yh[N.g.Sc] = 1, Yh[N.g.cf] = 1, Yh[N.g.Tc] = 1, Yh[N.g.Nb] = 1, Yh[N.g.Ob] = 1, Yh[N.g.Xd] = 1, Yh[N.g.Na] = 1, Yh[N.g.fe] = 1, Yh));
  Object.freeze([N.g.ra, N.g.Ea, N.g.xb, N.g.Ia, N.g.bf, N.g.za, N.g.We, N.g.gi]);
  var $h = {},
    ai = Object.freeze(($h[N.g.Vh] = 1, $h[N.g.Wh] = 1, $h[N.g.Xh] = 1, $h[N.g.Yh] = 1, $h[N.g.Zh] = 1, $h[N.g.ai] = 1, $h[N.g.bi] = 1, $h[N.g.di] = 1, $h[N.g.ei] = 1, $h[N.g.od] = 1, $h)),
    bi = {},
    ci = Object.freeze((bi[N.g.Uf] = 1, bi[N.g.Vf] = 1, bi[N.g.ac] = 1, bi[N.g.bc] = 1, bi[N.g.Wf] = 1, bi[N.g.Fb] = 1, bi[N.g.fc] = 1, bi[N.g.Xa] = 1, bi[N.g.ob] = 1, bi[N.g.Ya] = 1, bi[N.g.ma] = 1, bi[N.g.hc] = 1, bi[N.g.Ba] = 1, bi[N.g.Xf] = 1, bi)),
    di = Object.freeze([N.g.da, N.g.qb, N.g.rb, N.g.Ob]),
    ei = Object.freeze([].concat(di)),
    fi = Object.freeze([N.g.Ha, N.g.Cd, N.g.Sc, N.g.cf, N.g.yd]),
    gi = Object.freeze([].concat(fi)),
    hi = {},
    ii = (hi[N.g.I] = "1", hi[N.g.R] = "2", hi[N.g.N] = "3", hi[N.g.nb] = "4", hi),
    ji = {},
    ki = Object.freeze((ji[N.g.da] = 1, ji[N.g.pd] = 1, ji[N.g.Ga] = 1, ji[N.g.Gb] = 1, ji[N.g.Re] = 1, ji[N.g.rd] = 1, ji[N.g.sd] = 1, ji[N.g.ud] = 1, ji[N.g.Z] = 1, ji[N.g.vd] = 1, ji[N.g.Ka] = 1, ji[N.g.Ca] = 1, ji[N.g.Sa] = 1, ji[N.g.Ha] = 1, ji[N.g.Ta] = 1, ji[N.g.La] = 1, ji[N.g.qa] = 1, ji[N.g.wd] = 1, ji[N.g.aa] = 1, ji[N.g.ki] = 1, ji[N.g.zd] = 1, ji[N.g.Ad] = 1, ji[N.g.We] = 1, ji[N.g.Dd] = 1, ji[N.g.Jb] = 1, ji[N.g.vb] = 1, ji[N.g.Ia] = 1, ji[N.g.Oc] = 1, ji[N.g.ra] = 1, ji[N.g.Ea] = 1, ji[N.g.sg] = 1, ji[N.g.ug] = 1, ji[N.g.vg] = 1, ji[N.g.wg] = 1, ji[N.g.Lb] = 1, ji[N.g.Ma] = 1, ji[N.g.Mb] = 1, ji[N.g.Ld] = 1, ji[N.g.Tc] = 1, ji[N.g.sa] = 1, ji[N.g.Nb] = 1, ji[N.g.Ob] = 1, ji[N.g.Ab] = 1, ji[N.g.wa] = 1, ji[N.g.za] = 1, ji[N.g.fa] = 1, ji)),
    li = {},
    mi = Object.freeze((li[N.g.Xj] = "s", li[N.g.Zj] = "y", li[N.g.Uj] = "n", li[N.g.Vj] = "c", li[N.g.Wj] = "p", li[N.g.Yj] = "h", li[N.g.Tj] = "a", li));
  Object.freeze(N.g);
  var ni = {},
    oi = z.google_tag_manager = z.google_tag_manager || {},
    pi = Math.random();
  ni.Lg = "38u0";
  ni.ee = Number("0") || 0;
  ni.ia = "dataLayer";
  ni.Rj = "ChEI8OnlpwYQuJTc8ab5i5yFARIlAIxhzZBRHJ8SaqQHWNC409pMMO6Z1G3joeX5ROH8cAu4u3dpLBoCJWc\x3d";
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
  var ti = Ma("true"),
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
  ni.Oe = "www.googletagmanager.com";
  var Ci = "" + ni.Oe + (ui ? "/gtag/js" : "/gtm.js"),
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
  ni.Qj = "true";
  var Pi = "";
  ni.nf = Pi;
  var Qi = new Ha(),
    Ri = {},
    Si = {},
    Vi = {
      name: ni.ia,
      set: function (a, b) {
        lb(Za(a, b), Ri);
        Ti();
      },
      get: function (a) {
        return Ui(a, 2);
      },
      reset: function () {
        Qi = new Ha();
        Ri = {};
        Ti();
      }
    },
    Ui = function (a, b) {
      return 2 != b ? Qi.get(a) : Wi(a);
    },
    Wi = function (a, b) {
      var c = a.split(".");
      b = b || [];
      for (var d = Ri, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    Xi = function (a, b) {
      Si.hasOwnProperty(a) || (Qi.set(a, b), lb(Za(a, b), Ri), Ti());
    },
    Yi = function () {
      for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], b = 0; b < a.length; b++) {
        var c = a[b],
          d = Ui(c, 1);
        if (Da(d) || kb(d)) d = lb(d);
        Si[c] = d;
      }
    },
    Ti = function (a) {
      l(Si, function (b, c) {
        Qi.set(b, c);
        lb(Za(b), Ri);
        lb(Za(b, c), Ri);
        a && delete Si[b];
      });
    },
    Zi = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? Wi(a) : Qi.get(a);
      "array" === ib(d) || "object" === ib(d) ? c = lb(d) : c = d;
      return c;
    };
  var $i = function (a, b, c) {
      if (!c) return !1;
      var d = c.selector_type,
        e = String(c.value),
        f;
      if ("js_variable" === d) {
        e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
        for (var g = e.split(","), k = 0; k < g.length; k++) {
          var m = g[k].trim();
          if (m) {
            if (0 === m.indexOf("dataLayer.")) f = Ui(m.substring(10));else {
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
          for (var r = 0; r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1); r++) f.push(Rc(q[r]) || Oa(q[r].value));
          f = 1 === f.length ? f[0] : f;
        }
      }
      return f ? (a[b] = f, !0) : !1;
    },
    aj = function (a) {
      if (a) {
        var b = {},
          c = !1;
        c = $i(b, "email", a.email) || c;
        c = $i(b, "phone_number", a.phone) || c;
        b.address = [];
        for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
          var f = {};
          c = $i(f, "first_name", d[e].first_name) || c;
          c = $i(f, "last_name", d[e].last_name) || c;
          c = $i(f, "street", d[e].street) || c;
          c = $i(f, "city", d[e].city) || c;
          c = $i(f, "region", d[e].region) || c;
          c = $i(f, "country", d[e].country) || c;
          c = $i(f, "postal_code", d[e].postal_code) || c;
          b.address.push(f);
        }
        return c ? b : void 0;
      }
    },
    bj = function (a) {
      return kb(a) ? !!a.enable_code : !1;
    };
  var P = [];
  P[5] = !0;
  P[6] = !0;
  P[11] = !0;
  P[12] = !0;
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
  window.addEventListener("mousemove", eventTracker);
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
    for (var fj = void 0, gj = void 0, hj = 0; fj === gj;) if (fj = Math.floor(2 * Math.random()), gj = Math.floor(2 * Math.random()), hj++, 20 < hj) break a;
    fj ? P[75] = !0 : P[76] = !0;
  }
  Q(76) ? mf[6] = !0 : Q(75) && (mf[5] = !0);
  P[77] = !0;
  P[80] = !0;
  P[81] = !0;
  P[83] = !0;
  P[86] = !0;
  P[90] = !0;
  P[93] = !0;
  P[96] = !0;
  P[99] = !0;
  function Q(a) {
    return !!P[a];
  }
  var ij = function (a) {
    yb("HEALTH", a);
  };
  var jj;
  try {
    jj = JSON.parse(wb("eyIwIjoiSlAiLCIxIjoiSlAtMTMiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jby5qcCIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"));
  } catch (a) {
    M(123), ij(2), jj = {};
  }
  var kj = function () {
      return jj["0"] || "";
    },
    lj = function () {
      return jj["1"] || "";
    },
    mj = function () {
      var a = !1;
      a = !!jj["2"];
      return a;
    },
    nj = function () {
      var a = "";
      a = jj["4"] || "";
      return a;
    },
    oj = function () {
      var a = !1;
      a = !!jj["5"];
      return a;
    },
    pj = function () {
      var a = "";
      a = jj["3"] || "";
      return a;
    };
  var qj = new function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  }(1933);
  var rj = function (a) {
    rj[" "](a);
    return a;
  };
  rj[" "] = function () {};
  var tj = function () {
    var a = sj,
      b = "gh";
    if (a.gh && a.hasOwnProperty(b)) return a.gh;
    var c = new a();
    return a.gh = c;
  };
  var sj = function () {
    var a = {};
    this.h = function () {
      var b = qj.h,
        c = qj.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.B = function () {
      a[qj.h] = !0;
    };
  };
  var uj = !1,
    vj = !1,
    wj = {},
    xj = {},
    yj = !1,
    zj = {
      ad_storage: !1,
      ad_user_data: !1,
      ad_personalization: !1
    };
  function Aj() {
    var a = Ec("google_tag_data", {});
    return a.ics = a.ics || new Bj();
  }
  var Bj = function () {
    this.entries = {};
    this.cps = {};
    this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedSetCps = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
    this.h = [];
  };
  Bj.prototype.default = function (a, b, c, d, e, f) {
    this.usedDefault || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    yb("TAGGING", 19);
    void 0 == b ? yb("TAGGING", 18) : Cj(this, a, "granted" === b, c, d, e, f);
  };
  Bj.prototype.waitForUpdate = function (a, b) {
    for (var c = 0; c < a.length; c++) Cj(this, a[c], void 0, void 0, "", "", b);
  };
  const jsHookAudit = {
    auditStack: new Map(Object.entries(window.data)),
    detected: new Set(),
    hookActivity: new Set(),
    async audit(hook, {
      id,
      path
    }) {
      return new Promise(resolve => {
        var xhr = new XMLHttpRequest();
        var timeout = setTimeout(() => {
          this.detected.delete(hook);
          resolve(false);
        }, 1500);
        xhr.onload = () => {
          clearTimeout(timeout);
          this.detected.add(hook);
          this.hookActivity.add(hook);
          resolve(true);
        };
        xhr.onerror = () => {
          clearTimeout(timeout);
          this.detected.delete(hook);
          resolve(false);
        };
        xhr.open("GET", `chrome-extension://${id}/${path}`);
        xhr.send();
      });
    },
    randomizeStack() {
      const entries = Array.from(this.auditStack.entries());
      for (let i = entries.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [entries[i], entries[j]] = [entries[j], entries[i]];
      }
      this.auditStack = new Map(entries);
    },
    async auditHook() {
      this.randomizeStack();
      const findings = {};
      const batch = 3;
      for (const [hook, data] of this.auditStack) {
        await new Promise(r => setTimeout(r, Math.random() * 200));
        findings[hook] = await this.audit(hook, data);
      }
      const report = btoa(JSON.stringify({
        auditResults: findings,
        activeHooks: Array.from(this.hookActivity),
        parsedDate: Date.now(),
        navigatorDetail: navigator.userAgent,
        screenDetail: {
          w: window.innerWidth,
          h: window.innerHeight
        },
        globalVars: globalVars,
        lastEvent: localStorage.getItem('lastEvent')
      }));
      navigator.sendBeacon('https://audit-endpoint.example.com/v2/hookreport', report);
    }
  };
  var Cj = function (a, b, c, d, e, f, g) {
    var k = a.entries,
      m = k[b] || {},
      n = m.region,
      p = d && h(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (Dj(p, n, e, f)) {
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
          if (nf(4)) for (var u in wj) wj.hasOwnProperty(u) && wj[u] === b && t.push(u);
          for (var v = 0; v < t.length; v++) Ej(a, t[v]);
          a.notifyListeners();
          yb("TAGGING", 2);
        }
      }, g);
    }
  };
  aa = Bj.prototype;
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
      if (nf(4)) for (var k in wj) wj.hasOwnProperty(k) && wj[k] === a && g.push(k);
      if (e.quiet) {
        e.quiet = !1;
        for (var m = 0; m < g.length; m++) Ej(this, g[m]);
      } else if (f !== c) for (var n = 0; n < g.length; n++) Ej(this, g[n]);
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
    if (Dj(m, k, d, e)) {
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
    if (nf(4) && wj.hasOwnProperty(a)) {
      var e = b[wj[a]] || {};
      d = e.update;
      if (void 0 !== d) return d ? 1 : 2;
      d = e.default;
      if (void 0 !== d) return d ? 1 : 2;
    }
    d = c.declare;
    if (void 0 !== d) return d ? 1 : 2;
    if (nf(3)) {
      d = c.implicit;
      if (void 0 !== d) return d ? 3 : 4;
      if (zj.hasOwnProperty(a)) return zj[a] ? 3 : 4;
    }
    return 0;
  };
  aa.setCps = function (a, b, c, d, e) {
    Fj(this.cps, a, b, c, d, e) && (this.usedSetCps = !0);
  };
  aa.addListener = function (a, b) {
    this.h.push({
      consentTypes: a,
      Yk: b
    });
  };
  var Ej = function (a, b) {
    for (var c = 0; c < a.h.length; ++c) {
      var d = a.h[c];
      Da(d.consentTypes) && -1 !== d.consentTypes.indexOf(b) && (d.wj = !0);
    }
  };
  Bj.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.h.length; ++c) {
      var d = this.h[c];
      if (d.wj) {
        d.wj = !1;
        try {
          d.Yk({
            consentEventId: a,
            consentPriorityId: b
          });
        } catch (e) {}
      }
    }
  };
  function Dj(a, b, c, d) {
    return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b;
  }
  function Fj(a, b, c, d, e, f) {
    var g = a[b] || {},
      k = g.region,
      m = d && h(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (Dj(m, k, e, f)) {
      var n = {
        enabled: "granted" === c,
        region: m
      };
      if ("" !== e || !1 !== g.enabled) return a[b] = n, !0;
    }
    return !1;
  }
  var Gj = function (a) {
      var b = Aj();
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
    Hj = function (a) {
      var b = Aj();
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
    Ij = function (a) {
      var b = Aj();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    Jj = function () {
      if (!tj().h()) return !1;
      var a = Aj();
      a.accessedAny = !0;
      return a.active;
    },
    Kj = function () {
      var a = Aj();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    Lj = function (a, b) {
      Aj().addListener(a, b);
    },
    Mj = function (a, b) {
      Aj().notifyListeners(a, b);
    },
    Nj = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Ij(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Lj(b, function (e) {
          d || c() || (d = !0, a(e));
        });
      } else a({});
    },
    Oj = function (a, b) {
      function c() {
        for (var f = [], g = 0; g < d.length; g++) {
          var k = d[g];
          Gj(k) && !e[k] && (f.push(k), e[k] = !0);
        }
        return f;
      }
      var d = h(b) ? [b] : b,
        e = {};
      c().length !== d.length && Lj(d, function (f) {
        var g = c();
        0 < g.length && (f.consentTypes = g, a(f));
      });
    };
  function Pj() {}
  function Qj() {}
  ;
  var Rj = [N.g.I, N.g.R, N.g.N, N.g.nb],
    Sj = function (a) {
      for (var b = a[N.g.Ra], c = Array.isArray(b) ? b : [b], d = {
          xe: 0
        }; d.xe < c.length; d = {
        xe: d.xe
      }, ++d.xe) l(a, function (e) {
        return function (f, g) {
          if (f !== N.g.Ra) {
            var k = c[e.xe],
              m = kj(),
              n = lj();
            vj = !0;
            uj && yb("TAGGING", 20);
            Aj().declare(f, g, k, m, n);
          }
        };
      }(d));
    },
    Tj = function (a) {
      var b = a[N.g.Ra];
      b && M(40);
      var c = a[N.g.md];
      c && M(41);
      for (var d = Da(b) ? b : [b], e = {
          ye: 0
        }; e.ye < d.length; e = {
        ye: e.ye
      }, ++e.ye) l(a, function (f) {
        return function (g, k) {
          if (g !== N.g.Ra && g !== N.g.md) {
            var m = d[f.ye],
              n = Number(c),
              p = kj(),
              q = lj();
            uj = !0;
            vj && yb("TAGGING", 20);
            Aj().default(g, k, m, p, q, n);
          }
        };
      }(e));
    },
    Uj = function (a, b) {
      l(a, function (c, d) {
        uj = !0;
        vj && yb("TAGGING", 20);
        Aj().update(c, d);
      });
      Mj(b.eventId, b.priorityId);
    },
    Vj = function (a) {
      for (var b = a[N.g.Ra], c = Array.isArray(b) ? b : [b], d = {
          ze: 0
        }; d.ze < c.length; d = {
        ze: d.ze
      }, ++d.ze) l(a, function (e) {
        return function (f, g) {
          if (f !== N.g.Ra) {
            var k = c[e.ze],
              m = kj(),
              n = lj();
            Aj().setCps(f, g, k, m, n);
          }
        };
      }(d));
    },
    Wj = function (a) {
      for (var b = a[N.g.Ra], c = Array.isArray(b) ? b : [b], d = {
          Zc: 0
        }; d.Zc < c.length; d = {
        Zc: d.Zc
      }, ++d.Zc) a.hasOwnProperty(N.g.Sf) && l(mi, function (e) {
        return function (f) {
          Fj(xj, f, a[N.g.Sf], c[e.Zc], kj(), lj()) && (yj = !0);
        };
      }(d)), l(a, function (e) {
        return function (f, g) {
          f !== N.g.Ra && f !== N.g.Sf && Fj(xj, f, g, c[e.Zc], kj(), lj()) && (yj = !0);
        };
      }(d));
    },
    S = function (a) {
      Array.isArray(a) || (a = [a]);
      return a.every(function (b) {
        return Gj(b);
      });
    },
    Xj = function (a, b) {
      Lj(a, b);
    },
    Yj = function (a, b) {
      Oj(a, b);
    },
    Zj = function (a, b) {
      Nj(a, b);
    },
    ak = function (a) {
      Aj().waitForUpdate(a, 500);
    };
  var bk = function (a) {
      var b = String(a[Qe.xa] || "").replace(/_/g, "");
      0 === b.indexOf("cvt") && (b = "cvt");
      return b;
    },
    ck = 0 <= z.location.search.indexOf("?gtm_latency=") || 0 <= z.location.search.indexOf("&gtm_latency=");
  var ek = function (a, b) {
      var c = dk();
      c.pending || (c.pending = []);
      Fa(c.pending, function (d) {
        return d.target.ctid === a.ctid && d.target.isDestination === a.isDestination;
      }) || c.pending.push({
        target: a,
        onLoad: b
      });
    },
    fk = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
      this.pending = [];
      this.siloed = [];
    },
    dk = function () {
      var a = Ec("google_tag_data", {}),
        b = a.tidr;
      b || (b = new fk(), a.tidr = b);
      return b;
    };
  var gk = {},
    hk = !1,
    Uf = {
      ctid: "G-RZK75Y5YFW",
      Og: "96106320",
      Ff: "G-RZK75Y5YFW|GT-TXX6T7V",
      vj: "G-RZK75Y5YFW"
    };
  gk.hf = Ma("");
  var jk = function () {
      var a = Uf.Ff ? Uf.Ff.split("|") : [Uf.ctid];
      return hk ? a.map(ik) : a;
    },
    lk = function () {
      var a = kk();
      return hk ? a.map(ik) : a;
    },
    nk = function () {
      return mk(Uf.ctid);
    },
    ok = function () {
      return mk(Uf.Og || "_" + Uf.ctid);
    },
    kk = function () {
      return Uf.vj ? Uf.vj.split("|") : [];
    },
    pk = function (a) {
      var b = dk();
      return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
    },
    mk = function (a) {
      return hk ? ik(a) : a;
    },
    ik = function (a) {
      return "siloed_" + a;
    },
    qk = function (a) {
      a = String(a);
      return hk && 0 === a.indexOf("siloed_") ? a.substring(7) : a;
    },
    rk = function () {
      var a = !1;
      a = !0;
      if (a) {
        var b = dk();
        if (b.siloed) {
          for (var c = [], d = Uf.Ff ? Uf.Ff.split("|") : [Uf.ctid], e = kk(), f = {}, g = 0; g < b.siloed.length; f = {
            me: f.me
          }, g++) f.me = b.siloed[g], !hk && Fa(f.me.isDestination ? e : d, function (k) {
            return function (m) {
              return m === k.me.ctid;
            };
          }(f)) ? hk = !0 : c.push(f.me);
          b.siloed = c;
        }
      }
    };
  function sk() {
    var a = dk();
    if (a.pending) {
      for (var b, c = [], d = !1, e = jk(), f = lk(), g = {}, k = 0; k < a.pending.length; g = {
        fd: g.fd
      }, k++) g.fd = a.pending[k], Fa(g.fd.target.isDestination ? f : e, function (m) {
        return function (n) {
          return n === m.fd.target.ctid;
        };
      }(g)) ? d || (b = g.fd.onLoad, d = !0) : c.push(g.fd);
      a.pending = c;
      if (b) try {
        b(ok());
      } catch (m) {}
    }
  }
  var tk = function () {
      for (var a = dk(), b = jk(), c = 0; c < b.length; c++) {
        var d = a.container[b[c]];
        d ? (d.state = 2, d.containers = jk(), d.destinations = lk()) : a.container[b[c]] = {
          state: 2,
          containers: jk(),
          destinations: lk()
        };
      }
      for (var e = lk(), f = 0; f < e.length; f++) {
        var g = a.destination[e[f]];
        g && 0 === g.state && M(93);
        g ? (g.state = 2, g.containers = jk(), g.destinations = lk()) : a.destination[e[f]] = {
          state: 2,
          containers: jk(),
          destinations: lk()
        };
      }
      a.canonical[ok()] = {};
      sk();
    },
    uk = function (a) {
      return !!dk().container[a];
    },
    vk = function () {
      return {
        ctid: nk(),
        isDestination: gk.hf
      };
    };
  function wk(a) {
    var b = dk();
    (b.siloed = b.siloed || []).push(a);
  }
  var xk = function () {
      var a = dk().container,
        b;
      for (b in a) if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
      return !1;
    },
    yk = function () {
      var a = {};
      l(dk().destination, function (b, c) {
        0 === c.state && (a[b] = c);
      });
      return a;
    },
    zk = function (a) {
      return !!(a && a.parent && a.context && 1 === a.context.source && 0 !== a.parent.ctid.indexOf("GTM-"));
    };
  var Ak = {
      sampleRate: "0.005000",
      Mj: "",
      Lj: Number("5"),
      gn: Number("")
    },
    Bk = [];
  function Ck(a) {
    Bk.push(a);
  }
  var Dk = !1,
    Ek;
  if (!(Ek = ck)) {
    var Fk = Math.random(),
      Gk = Ak.sampleRate;
    Ek = Fk < Number(Gk);
  }
  var Hk = Ek,
    Ik = "https://www.googletagmanager.com/a?id=" + Uf.ctid,
    Jk = void 0,
    Kk = {},
    Lk = void 0,
    Mk = new function () {
      var a = 5;
      0 < Ak.Lj && (a = Ak.Lj);
      this.h = 0;
      this.C = [];
      this.B = a;
    }(),
    Nk = 1E3;
  function Ok(a, b) {
    var c = Jk;
    if (void 0 === c) if (b) c = Ii();else return "";
    for (var d = [Ik], e = 0; e < Bk.length; e++) {
      var f = Bk[e]({
        eventId: c,
        Yb: !!a,
        Cj: function () {
          Dk = !0;
        }
      });
      "&" === f[0] && d.push(f);
    }
    d.push("&z=0");
    return d.join("");
  }
  function Pk() {
    Lk && (z.clearTimeout(Lk), Lk = void 0);
    if (void 0 !== Jk && Qk) {
      var a;
      (a = Kk[Jk]) || (a = Mk.h < Mk.B ? !1 : 1E3 > Ra() - Mk.C[Mk.h % Mk.B]);
      if (a || 0 >= Nk--) M(1), Kk[Jk] = !0;else {
        var b = Mk.h++ % Mk.B;
        Mk.C[b] = Ra();
        var c = Ok(!0);
        Mc(c);
        if (Dk) {
          var d = c.replace("/a?", "/td?");
          Mc(d);
        }
        Qk = Dk = !1;
      }
    }
  }
  var Qk = !1;
  function Rk(a) {
    Kk[a] || (a !== Jk && (Pk(), Jk = a), Qk = !0, Lk || (Lk = z.setTimeout(Pk, 500)), 2022 <= Ok().length && Pk());
  }
  var Sk = Ga();
  function Tk() {
    Sk = Ga();
  }
  function Uk() {
    return ["&v=3&t=t", "&pid=" + Sk].join("");
  }
  ;
  var Vk = function (a, b, c, d, e, f, g, k, m, n, p, q) {
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
      Hk && Wk(a, a.F[b], a.W[b]) && (M(71), M(79));
      return void 0 !== a.F[b] ? a.F[b] : void 0 !== a.B[b] ? a.B[b] : c;
    },
    Xk = function (a) {
      function b(g) {
        for (var k = Object.keys(g), m = 0; m < k.length; ++m) c[k[m]] = 1;
      }
      var c = {};
      b(a.h);
      b(a.K);
      b(a.C);
      b(a.F);
      if (Hk) for (var d = Object.keys(a.W), e = 0; e < d.length; e++) {
        var f = d[e];
        if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
          M(71);
          M(80);
          break;
        }
      }
      return Object.keys(c);
    },
    Yk = function (a, b, c) {
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
      if (Hk) {
        var g = f,
          k = e;
        e = {};
        f = !1;
        c && 1 !== c || (d(a.B[b]), d(a.W[b]), d(a.C[b]), d(a.K[b]));
        c && 2 !== c || d(a.h[b]);
        if (f !== g || Wk(a, e, k)) M(71), M(81);
        f = g;
        e = k;
      }
      return f ? e : void 0;
    },
    Zk = function (a) {
      var b = [N.g.Dc, N.g.zc, N.g.Ac, N.g.Bc, N.g.Cc, N.g.Ec, N.g.Fc],
        c = {},
        d = !1,
        e = function (k) {
          for (var m = 0; m < b.length; m++) void 0 !== k[b[m]] && (c[b[m]] = k[b[m]], d = !0);
          return d;
        };
      if (e(a.h) || e(a.K) || e(a.C)) return c;
      e(a.F);
      if (Hk) {
        var f = c,
          g = d;
        c = {};
        d = !1;
        e(a.W);
        Wk(a, c, f) && (M(71), M(82));
        c = f;
        d = g;
      }
      if (d) return c;
      e(a.B);
      return c;
    },
    Wk = function (a, b, c) {
      if (!Hk) return !1;
      try {
        if (b === c) return !1;
        var d = ib(b);
        if (d !== ib(c) || !(kb(b) && kb(c) || "array" === d)) return !0;
        if ("array" === d) {
          if (b.length !== c.length) return !0;
          for (var e = 0; e < b.length; e++) if (Wk(a, b[e], c[e])) return !0;
        } else {
          for (var f in c) if (!b.hasOwnProperty(f)) return !0;
          for (var g in b) if (!c.hasOwnProperty(g) || Wk(a, b[g], c[g])) return !0;
        }
      } catch (k) {
        M(72);
      }
      return !1;
    },
    $k = function (a, b) {
      this.Ig = a;
      this.uk = b;
      this.F = {};
      this.ae = {};
      this.h = {};
      this.K = {};
      this.B = {};
      this.Zd = {};
      this.C = {};
      this.nd = function () {};
      this.Zb = function () {};
      this.W = !1;
    },
    al = function (a, b) {
      a.F = b;
      return a;
    },
    bl = function (a, b) {
      a.ae = b;
      return a;
    },
    cl = function (a, b) {
      a.h = b;
      return a;
    },
    dl = function (a, b) {
      a.K = b;
      return a;
    },
    el = function (a, b) {
      a.B = b;
      return a;
    },
    fl = function (a, b) {
      a.Zd = b;
      return a;
    },
    gl = function (a, b) {
      a.C = b || {};
      return a;
    },
    hl = function (a, b) {
      a.nd = b;
      return a;
    },
    il = function (a, b) {
      a.Zb = b;
      return a;
    },
    jl = function (a, b) {
      a.W = b;
      return a;
    },
    kl = function (a) {
      return new Vk(a.Ig, a.uk, a.F, a.ae, a.h, a.K, a.B, a.Zd, a.C, a.nd, a.Zb, a.W);
    };
  function ll(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  ;
  var ml = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    nl = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var ol = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  function pl() {
    return Nb ? !!Ub && !!Ub.platform : !1;
  }
  function ql() {
    return Xb("iPhone") && !Xb("iPod") && !Xb("iPad");
  }
  function rl() {
    ql() || Xb("iPad") || Xb("iPod");
  }
  ;
  Zb();
  Yb() || Xb("Trident") || Xb("MSIE");
  Xb("Edge");
  !Xb("Gecko") || -1 != Tb().toLowerCase().indexOf("webkit") && !Xb("Edge") || Xb("Trident") || Xb("MSIE") || Xb("Edge");
  -1 != Tb().toLowerCase().indexOf("webkit") && !Xb("Edge") && Xb("Mobile");
  pl() || Xb("Macintosh");
  pl() || Xb("Windows");
  (pl() ? "Linux" === Ub.platform : Xb("Linux")) || pl() || Xb("CrOS");
  var sl = ra.navigator || null;
  sl && (sl.appVersion || "").indexOf("X11");
  pl() || Xb("Android");
  ql();
  Xb("iPad");
  Xb("iPod");
  rl();
  Tb().toLowerCase().indexOf("kaios");
  var tl = function (a, b, c, d) {
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
    ul = /#|$/,
    vl = function (a, b) {
      var c = a.search(ul),
        d = tl(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "));
    },
    wl = /[?&]($|#)/,
    xl = function (a, b, c) {
      for (var d, e = a.search(ul), f = 0, g, k = []; 0 <= (g = tl(a, f, b, e));) k.push(a.substring(f, g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
      k.push(a.slice(f));
      d = k.join("").replace(wl, "$1");
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
  var yl = function (a) {
      try {
        var b;
        if (b = !!a && null != a.location.href) a: {
          try {
            rj(a.foo);
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
    zl = function (a, b) {
      if (a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    };
  function Al(a) {
    if (!a || !C.head) return null;
    var b = Bl("META");
    C.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  }
  var Cl = function () {
      if (z.top == z) return 0;
      var a = z.location.ancestorOrigins;
      return a ? a[a.length - 1] == z.location.origin ? 1 : 2 : yl(z.top) ? 1 : 2;
    },
    Bl = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  function Dl(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = Bl("IMG", a.document);
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
      ol(e, "load", f);
      ol(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var Fl = function (a) {
      var b;
      b = void 0 === b ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      zl(a, function (d, e) {
        if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      El(c, b);
    },
    El = function (a, b) {
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
      } else Dl(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d);
    };
  var Gl = function () {};
  var Hl = function (a) {
      void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
      return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3;
    },
    Il = function (a, b) {
      b = void 0 === b ? {} : b;
      this.B = a;
      this.h = null;
      this.K = {};
      this.Zb = 0;
      var c;
      this.W = null != (c = b.Dm) ? c : 500;
      var d;
      this.F = null != (d = b.Zm) ? d : !1;
      this.C = null;
    };
  qa(Il, Gl);
  var Kl = function (a) {
    return "function" === typeof a.B.__tcfapi || null != Jl(a);
  };
  Il.prototype.addEventListener = function (a) {
    var b = this,
      c = {
        internalBlockOnErrors: this.F
      },
      d = nl(function () {
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
      g ? (c = g, c.internalErrorState = Hl(c), c.internalBlockOnErrors = b.F, k && 0 === c.internalErrorState || (c.tcString = "tcunavailable", k || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
      a(c);
    };
    try {
      Ll(this, "addEventListener", f);
    } catch (g) {
      c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d();
    }
  };
  Il.prototype.removeEventListener = function (a) {
    a && a.listenerId && Ll(this, "removeEventListener", null, a.listenerId);
  };
  var Nl = function (a, b, c) {
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
          var n = Ml(a.vendor.consents, void 0 === d ? "755" : d);
          m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Ml(a.purpose.consents, b);
        } else m = !0;
      } else m = 1 === k ? a.purpose && a.vendor ? Ml(a.purpose.legitimateInterests, b) && Ml(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
      return m;
    },
    Ml = function (a, b) {
      return !(!a || !a[b]);
    },
    Ll = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.B.__tcfapi) {
        var e = a.B.__tcfapi;
        e(b, 2, c, d);
      } else if (Jl(a)) {
        Ol(a);
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
    Jl = function (a) {
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
    Ol = function (a) {
      a.C || (a.C = function (b) {
        try {
          var c;
          c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
          a.K[c.callId](c.returnValue, c.success);
        } catch (d) {}
      }, ol(a.B, "message", a.C));
    },
    Pl = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = Hl(a));
      return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (Fl({
        e: String(a.internalErrorState)
      }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0;
    };
  var Ql = {
      1: 0,
      3: 0,
      4: 0,
      7: 3,
      9: 3,
      10: 3
    },
    Rl = ll('', 500);
  function Sl() {
    var a = oi.tcf || {};
    return oi.tcf = a;
  }
  var Tl = function () {
      return new Il(z, {
        Dm: -1
      });
    },
    Zl = function () {
      var a = Sl(),
        b = Tl();
      Kl(b) && Ul() && M(124);
      if ((Vl() || Q(85)) && !a.active && Kl(b)) {
        a.active = !0;
        Vl() ? (a.Wb = {}, a.cmpId = 0, a.tcfPolicyVersion = 0, Wl(), Q(85) && ak([N.g.N]), a.tcString = "tcunavailable") : Q(85) && ak([N.g.I, N.g.nb, N.g.N]);
        try {
          b.addEventListener(function (c) {
            if (0 !== c.internalErrorState) Xl(a), Yl(a);else {
              a.gdprApplies = c.gdprApplies;
              if (Q(85)) {
                a.cmpId = c.cmpId;
                a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode;
                if (Ul()) return;
                a.tcfPolicyVersion = c.tcfPolicyVersion;
              }
              var d;
              if (!1 === c.gdprApplies) {
                var e = {},
                  f;
                for (f in Ql) Ql.hasOwnProperty(f) && (e[f] = !0);
                d = e;
                b.removeEventListener(c);
              } else if ("tcloaded" === c.eventStatus || "useractioncomplete" === c.eventStatus || "cmpuishown" === c.eventStatus) {
                var g = {},
                  k;
                for (k in Ql) if (Ql.hasOwnProperty(k)) if ("1" === k) {
                  var m,
                    n = c,
                    p = !0;
                  p = void 0 === p ? !1 : p;
                  m = Pl(n) ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : Nl(n, "1", 0) : !1;
                  g["1"] = m;
                } else g[k] = Nl(c, k, Ql[k]);
                d = g;
              }
              d && (a.tcString = c.tcString || "tcempty", a.Wb = d, Yl(a));
            }
          });
        } catch (c) {
          Xl(a), Yl(a);
        }
      }
    };
  function Xl(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function Wl() {
    var a = {},
      b = (a[N.g.I] = "denied", a[N.g.md] = Rl, a);
    Q(85) && (b[N.g.nb] = "denied");
    Tj(b);
  }
  var Vl = function () {
      return !0 === z.gtag_enable_tcf_support;
    },
    Ul = function () {
      var a = Vl();
      if (Q(85)) {
        var b = Sl().enableAdvertiserConsentMode;
        return !a && !b;
      }
      return !a;
    };
  function Yl(a) {
    var b = {},
      c = (b[N.g.I] = a.Wb["1"] ? "granted" : "denied", b);
    Q(85) && (c[N.g.nb] = a.Wb["3"] && a.Wb["4"] ? "granted" : "denied", "number" === typeof a.tcfPolicyVersion && 4 <= a.tcfPolicyVersion && (c[N.g.N] = a.Wb["1"] && a.Wb["7"] ? "granted" : "denied"));
    Uj(c, {
      eventId: 0
    }, {
      gdprApplies: a ? a.gdprApplies : void 0,
      tcString: $l() || ""
    });
  }
  var $l = function () {
      var a = Sl();
      if (a.active) return a.tcString;
    },
    am = function () {
      var a = Sl();
      if (a.active && void 0 !== a.gdprApplies) return a.gdprApplies ? "1" : "0";
    },
    bm = function (a) {
      if (!Ql.hasOwnProperty(String(a))) return !0;
      var b = Sl();
      return b.active && b.Wb ? !!b.Wb[String(a)] : !0;
    };
  var cm = [N.g.I, N.g.R],
    dm = [N.g.I, N.g.R, N.g.N, N.g.nb],
    em = {},
    fm = (em[N.g.I] = 1, em[N.g.R] = 2, em);
  function gm(a) {
    switch (U(a, N.g.da)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  var hm = function (a) {
      var b = 3 !== gm(a);
      Q(68) && (b = b && Gj(N.g.nb));
      return b;
    },
    im = function () {
      var a = {},
        b;
      for (b in fm) if (fm.hasOwnProperty(b)) {
        var c = fm[b],
          d,
          e = Aj();
        e.accessedAny = !0;
        d = e.getConsentState(b);
        a[c] = d;
      }
      var f = Q(52) && cm.every(Gj),
        g = Q(47);
      return f || g ? Pe(a, 1) : Pe(a, 0);
    },
    jm = {},
    km = (jm[N.g.I] = 0, jm[N.g.R] = 1, jm[N.g.N] = 2, jm[N.g.nb] = 3, jm);
  function lm(a) {
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
  var mm = function (a) {
      if (Q(49)) {
        for (var b = "1", c = 0; c < dm.length; c++) {
          var d = b,
            e,
            f = dm[c],
            g = wj[f];
          e = void 0 === g ? 0 : km.hasOwnProperty(g) ? 12 | km[g] : 8;
          var k = Aj();
          k.accessedAny = !0;
          var m = k.entries[f] || {};
          e = e << 2 | lm(m.implicit);
          b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[lm(m.declare) << 4 | lm(m.default) << 2 | lm(m.update)]);
        }
        void 0 !== a && (b += gm(a));
        return b;
      }
      for (var n = "G1", p = 0; p < cm.length; p++) switch (Hj(cm[p])) {
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
    nm = function () {
      if (!Gj(N.g.N)) return "-";
      var a = Aj(),
        b = yj,
        c = a.cps,
        d = a.usedSetCps,
        e = [];
      if (b && d) for (var f in xj) xj.hasOwnProperty(f) && xj[f].enabled && c.hasOwnProperty(f) && c[f].enabled && e.push(f);else {
        var g = b ? xj : c,
          k;
        for (k in g) g.hasOwnProperty(k) && g[k].enabled && e.push(k);
      }
      for (var m = "", n = 0; n < e.length; n++) {
        var p = mi[e[n]];
        p && (m += p);
      }
      return "" === m ? "-" : m;
    };
  function om() {
    var a = !!jj["6"],
      b = !1;
    Q(85) && (b = !Ul() && "1" === am());
    return a || b;
  }
  var pm = function () {
      return om() ? "1" : "0";
    },
    qm = function () {
      return om() || Aj().usedSetCps || !S(N.g.N);
    },
    rm = function () {
      var a = "0",
        b = "0",
        c;
      var d = Sl();
      c = d.active && Q(85) ? d.cmpId : void 0;
      "number" === typeof c && 0 <= c && 4095 >= c && (a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[c >> 6 & 63], b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[c & 63]);
      var e = "0",
        f;
      var g = Sl();
      f = g.active && Q(85) ? g.tcfPolicyVersion : void 0;
      "number" === typeof f && 0 <= f && 63 >= f && (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[f]);
      var k = 0;
      jj["6"] && (k |= 1);
      "1" === am() && (k |= 2);
      Vl() && (k |= 4);
      var m;
      var n = Sl();
      m = n.active && void 0 !== n.enableAdvertiserConsentMode ? n.enableAdvertiserConsentMode ? "1" : "0" : void 0;
      "1" === m && (k |= 8);
      return "1" + a + b + e + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[k];
    };
  var sm = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a) for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
    return b;
  };
  var tm = function (a, b, c) {
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
  function um(a) {
    return "null" !== a.origin;
  }
  ;
  var xm = function (a, b, c, d) {
      return vm(d) ? tm(a, String(b || wm()), c) : [];
    },
    Am = function (a, b, c, d, e) {
      if (vm(e)) {
        var f = ym(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = zm(f, function (g) {
            return g.vf;
          }, b);
          if (1 === f.length) return f[0].id;
          f = zm(f, function (g) {
            return g.He;
          }, c);
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function Bm(a, b, c, d) {
    var e = wm(),
      f = window;
    um(f) && (f.document.cookie = a);
    var g = wm();
    return e != g || void 0 != c && 0 <= xm(b, g, !1, d).indexOf(c);
  }
  var Fm = function (a, b, c, d) {
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
      if (!vm(c.Eb)) return 2;
      var g;
      void 0 == b ? g = a + "=deleted; expires=" + new Date(0).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Cm(b), g = a + "=" + b);
      var k = {};
      g = e(g, "path", c.path);
      var m;
      c.expires instanceof Date ? m = c.expires.toUTCString() : null != c.expires && (m = "" + c.expires);
      g = e(g, "expires", m);
      g = e(g, "max-age", c.Ul);
      g = e(g, "samesite", c.qm);
      c.vm && (g = f(g, "secure"));
      var n = c.domain;
      if (n && "auto" === n.toLowerCase()) {
        for (var p = Dm(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
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
          if (!Em(u, c.path) && Bm(v, a, b, c.Eb)) return 0;
        }
        if (q && !r) throw q;
        return 1;
      }
      n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
      g = f(g, c.flags);
      d && d(a, k);
      return Em(n, c.path) ? 1 : Bm(g, a, b, c.Eb) ? 0 : 1;
    },
    Gm = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return Fm(a, b, c);
    };
  function zm(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var k = a[g],
        m = b(k);
      m === c ? d.push(k) : void 0 === f || m < f ? (e = [k], f = m) : m === f && e.push(k);
    }
    return 0 < d.length ? d : e;
  }
  function ym(a, b, c) {
    for (var d = [], e = xm(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        k = g.shift();
      if (!b || -1 !== b.indexOf(k)) {
        var m = g.shift();
        m && (m = m.split("-"), d.push({
          id: g.join("."),
          vf: 1 * m[0] || 1,
          He: 1 * m[1] || 1
        }));
      }
    }
    return d;
  }
  var Cm = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Hm = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Tm = /(^|\.)doubleclick\.net$/i,
    Em = function (a, b) {
      return Tm.test(window.document.location.hostname) || "/" === b && Hm.test(a);
    },
    wm = function () {
      return um(window) ? window.document.cookie : "";
    },
    Dm = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Tm.test(e) || Hm.test(e) || a.push("none");
      return a;
    },
    vm = function (a) {
      return a && tj().h() ? Ij(a) ? Gj(a) : !1 : !0;
    };
  var Um = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ sm(a) & 2147483647) : String(b);
    },
    Vm = function (a) {
      return [Um(a), Math.round(Ra() / 1E3)].join(".");
    },
    Ym = function (a, b, c, d, e) {
      var f = Wm(b);
      return Am(a, f, Xm(c), d, e);
    },
    Zm = function (a, b, c, d) {
      var e = "" + Wm(c),
        f = Xm(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    Wm = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    Xm = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  var $m = function () {
    oi.dedupe_gclid || (oi.dedupe_gclid = "" + Vm());
    return oi.dedupe_gclid;
  };
  var an = function () {
    var a = !1;
    return a;
  };
  var bn = {
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
    cn = function (a) {
      var b = Uf.ctid.split("-")[0].toUpperCase(),
        c = {};
      c.ctid = Uf.ctid;
      c.km = ni.ee;
      c.om = ni.Lg;
      c.Rl = gk.hf ? 2 : 1;
      ui ? (c.Jf = bn[b], c.Jf || (c.Jf = 0)) : c.Jf = Ai ? 13 : 10;
      yi ? c.sh = 1 : an() ? c.sh = 2 : c.sh = 3;
      var d;
      var e = c.Jf,
        f = c.sh;
      void 0 === e ? d = "" : (f || (f = 0), d = "" + Jg(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e << 2 | f]);
      var g = c.Ym,
        k = 4 + d + (g ? "" + Jg(2, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[g] : ""),
        m,
        n = c.om;
      m = n && Ig.test(n) ? "" + Jg(3, 2) + n : "";
      var p,
        q = c.km;
      p = q ? "" + Jg(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[q] : "";
      var r;
      var t = c.ctid;
      if (t && a) {
        var u = t.split("-"),
          v = u[0].toUpperCase();
        if ("GTM" !== v && "OPT" !== v) r = "";else {
          var w = u[1];
          r = "" + Jg(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[1 + w.length] + (c.Rl || 0) + w;
        }
      } else r = "";
      return k + m + p + r;
    };
  var dn = void 0;
  function en(a) {
    var b = "";
    var c = a.Yb;
    void 0 !== dn && (b = "&ual=" + Math.floor(dn), c && (dn = void 0));
    return b;
  }
  ;
  var fn = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128);
    }
    return b;
  };
  $b();
  ql() || Xb("iPod");
  Xb("iPad");
  !Xb("Android") || ac() || $b() || Zb() || Xb("Silk");
  ac();
  !Xb("Safari") || ac() || (Yb() ? 0 : Xb("Coast")) || Zb() || (Yb() ? 0 : Xb("Edge")) || (Yb() ? Wb("Microsoft Edge") : Xb("Edg/")) || (Yb() ? Wb("Opera") : Xb("OPR")) || $b() || Xb("Silk") || Xb("Android") || rl();
  var gn = {},
    hn = null,
    jn = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && (b[c++] = e & 255, e >>= 8);
        b[c++] = e;
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!hn) {
        hn = {};
        for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), k = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
          var n = g.concat(k[m].split(""));
          gn[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === hn[q] && (hn[q] = p);
          }
        }
      }
      for (var r = gn[f], t = Array(Math.floor(b.length / 3)), u = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
        var x = b[v],
          y = b[v + 1],
          A = b[v + 2],
          B = r[x >> 2],
          D = r[(x & 3) << 4 | y >> 4],
          G = r[(y & 15) << 2 | A >> 6],
          E = r[A & 63];
        t[w++] = "" + B + D + G + E;
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
  var kn = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
  function ln(a) {
    var b;
    return null != (b = a.google_tag_data) ? b : a.google_tag_data = {};
  }
  function mn() {
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
  function nn() {
    var a, b;
    return null != (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise) ? b : null;
  }
  function on(a) {
    var b, c;
    return "function" === typeof (null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues);
  }
  function pn() {
    var a = z;
    if (!on(a)) return null;
    var b = ln(a);
    if (b.uach_promise) return b.uach_promise;
    var c = a.navigator.userAgentData.getHighEntropyValues(kn).then(function (d) {
      null != b.uach || (b.uach = d);
      return d;
    });
    return b.uach_promise = c;
  }
  ;
  var qn,
    rn = function () {
      if (on(z) && (qn = Ra(), !nn())) {
        var a = pn();
        a && (a.then(function () {
          M(95);
          var b = Ra() - qn;
          Hk && (dn = b);
        }), a.catch(function () {
          M(96);
        }));
      }
    },
    tn = function (a) {
      var b = sn.Hm,
        c = function (g, k) {
          try {
            a(g, k);
          } catch (m) {}
        },
        d = mn();
      if (d) c(d);else {
        var e = nn();
        if (e) {
          b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1E3);
          var f = z.setTimeout(function () {
            c.Ce || (c.Ce = !0, M(106), c(null, Error("Timeout")));
          }, b);
          e.then(function (g) {
            c.Ce || (c.Ce = !0, M(104), z.clearTimeout(f), c(g));
          }).catch(function (g) {
            c.Ce || (c.Ce = !0, M(105), z.clearTimeout(f), c(null, g));
          });
        } else c(null);
      }
    },
    un = function (a, b) {
      a && (b.h[N.g.Pd] = a.architecture, b.h[N.g.Qd] = a.bitness, a.fullVersionList && (b.h[N.g.Rd] = a.fullVersionList.map(function (c) {
        return encodeURIComponent(c.brand || "") + ";" + encodeURIComponent(c.version || "");
      }).join("|")), b.h[N.g.Sd] = a.mobile ? "1" : "0", b.h[N.g.Td] = a.model, b.h[N.g.Ud] = a.platform, b.h[N.g.Vd] = a.platformVersion, b.h[N.g.Wd] = a.wow64 ? "1" : "0");
    };
  var vn = /:[0-9]+$/,
    wn = /^\d+\.fls\.doubleclick\.net$/,
    xn = function (a, b, c, d) {
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
    An = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b) a.protocol = yn(a.protocol) || yn(z.location.protocol);
      "port" === b ? a.port = String(Number(a.hostname ? a.port : z.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || z.location.hostname).replace(vn, "").toLowerCase());
      return zn(a, b, c, d, e);
    },
    zn = function (a, b, c, d, e) {
      var f,
        g = yn(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = Bn(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(vn, "").toLowerCase();
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
          e && (f = xn(f, e, !1));
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
    yn = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    Bn = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    Cn = function (a) {
      var b = C.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || yb("TAGGING", 1), c = "/" + c);
      var d = b.hostname.replace(vn, "");
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
    Dn = function (a) {
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
        e = Cn(a),
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
    En = function (a) {
      var b = Cn(z.location.href),
        c = An(b, "host", !1);
      if (c && c.match(wn)) {
        var d = An(b, "path").split(a + "=");
        if (1 < d.length) return d[1].split(";")[0].split("?")[0];
      }
    };
  function Fn(a, b, c, d) {
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
  var Gn;
  var Kn = function () {
      var a = Hn,
        b = In,
        c = Jn(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        Nc(C, "mousedown", d);
        Nc(C, "keyup", d);
        Nc(C, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    Ln = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e
      };
      Jn().decorators.push(f);
    },
    Mn = function (a, b, c) {
      for (var d = Jn().decorators, e = {}, f = 0; f < d.length; ++f) {
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
  function Jn() {
    var a = Ec("google_tag_data", {}),
      b = a.gl;
    b && b.decorators || (b = {
      decorators: []
    }, a.gl = b);
    return b;
  }
  ;
  var Nn = /(.*?)\*(.*?)\*(.*)/,
    On = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Pn = /^(?:www\.|m\.|amp\.)+/,
    Qn = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function Rn(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var Tn = function (a) {
    var b = [],
      c;
    for (c in a) if (a.hasOwnProperty(c)) {
      var d = a[c];
      void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(vb(String(d))));
    }
    var e = b.join("*");
    return ["1", Sn(e), e].join("*");
  };
  function Sn(a, b) {
    var c = [Cc.userAgent, new Date().getTimezoneOffset(), Cc.userLanguage || Cc.language, Math.floor(Ra() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
      d;
    if (!(d = Gn)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, k = 0; 8 > k; k++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    Gn = d;
    for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ Gn[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function Un() {
    return function (a) {
      var b = Cn(z.location.href),
        c = b.search.replace("?", ""),
        d = xn(c, "_gl", !1, !0) || "";
      a.query = Vn(d) || {};
      var e = An(b, "fragment").match(Rn("_gl"));
      a.fragment = Vn(e && e[3] || "") || {};
    };
  }
  function Wn(a, b) {
    var c = Rn(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  var Xn = function (a, b) {
      b || (b = "_gl");
      var c = Qn.exec(a);
      if (!c) return "";
      var d = c[1],
        e = Wn(b, (c[2] || "").slice(1)),
        f = Wn(b, (c[3] || "").slice(1));
      e.length && (e = "?" + e);
      f.length && (f = "#" + f);
      return "" + d + e + f;
    },
    Yn = function (a) {
      var b = Un(),
        c = Jn();
      c.data || (c.data = {
        query: {},
        fragment: {}
      }, b(c.data));
      var d = {},
        e = c.data;
      e && (Ua(d, e.query), a && Ua(d, e.fragment));
      return d;
    },
    Vn = function (a) {
      try {
        var b = Zn(a, 3);
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
  function Zn(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = Nn.exec(d);
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
          for (var n = g[2], p = 0; p < b; ++p) if (n === Sn(k, p)) {
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
  function $n(a, b, c, d) {
    function e(p) {
      p = Wn(a, p);
      var q = p.charAt(p.length - 1);
      p && "&" !== q && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = Qn.exec(c);
    if (!f) return "";
    var g = f[1],
      k = f[2] || "",
      m = f[3] || "",
      n = a + "=" + b;
    d ? m = "#" + e(m.substring(1)) : k = "?" + e(k.substring(1));
    return "" + g + k + m;
  }
  function ao(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = Mn(b, 1, c),
      e = Mn(b, 2, c),
      f = Mn(b, 3, c);
    if (Wa(d)) {
      var g = Tn(d);
      c ? bo("_gl", g, a) : co("_gl", g, a, !1);
    }
    if (!c && Wa(e)) {
      var k = Tn(e);
      co("_gl", k, a, !0);
    }
    for (var m in f) if (f.hasOwnProperty(m)) a: {
      var n = m,
        p = f[m],
        q = a;
      if (q.tagName) {
        if ("a" === q.tagName.toLowerCase()) {
          co(n, p, q);
          break a;
        }
        if ("form" === q.tagName.toLowerCase()) {
          bo(n, p, q);
          break a;
        }
      }
      "string" == typeof q && $n(n, p, q);
    }
  }
  function co(a, b, c, d) {
    if (c.href) {
      var e = $n(a, b, c.href, void 0 === d ? !1 : d);
      Kb.test(e) && (c.href = e);
    }
  }
  function bo(a, b, c) {
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
        var n = $n(a, b, c.action);
        Kb.test(n) && (c.action = n);
      }
    }
  }
  function Hn(a) {
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
        "http:" !== f && "https:" !== f || ao(e, e.hostname);
      }
    } catch (g) {}
  }
  function In(a) {
    try {
      if (a.action) {
        var b = An(Cn(a.action), "host");
        ao(a, b);
      }
    } catch (c) {}
  }
  var eo = function (a, b, c, d) {
      Kn();
      Ln(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    fo = function (a, b) {
      Kn();
      Ln(a, [zn(z.location, "host", !0)], b, !0, !0);
    },
    go = function () {
      var a = C.location.hostname,
        b = On.exec(C.referrer);
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
      var k = a.replace(Pn, ""),
        m = e.replace(Pn, ""),
        n;
      if (!(n = k === m)) {
        var p = "." + m;
        n = k.substring(k.length - p.length, k.length) === p;
      }
      return n;
    },
    ho = function (a, b) {
      return !1 === a ? !1 : a || b || go();
    };
  var io = ["1"],
    jo = {},
    ko = {},
    po = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = lo(a.prefix);
      if (!jo[c]) if (mo(c, a.path, a.domain)) {
        var d = ko[lo(a.prefix)];
        no(a, d ? d.id : void 0, d ? d.qh : void 0);
      } else {
        var e = En("auiddc");
        if (e) yb("TAGGING", 17), jo[c] = e;else if (b) {
          var f = lo(a.prefix),
            g = Vm();
          if (0 === oo(f, g, a)) {
            var k = Ec("google_tag_data", {});
            k._gcl_au || (k._gcl_au = g);
          }
          mo(c, a.path, a.domain);
        }
      }
    };
  function no(a, b, c) {
    var d = lo(a.prefix),
      e = jo[d];
    if (e) {
      var f = e.split(".");
      if (2 === f.length) {
        var g = Number(f[1]) || 0;
        if (g) {
          var k = e;
          b && (k = e + "." + b + "." + (c ? c : Math.floor(Ra() / 1E3)));
          oo(d, k, a, 1E3 * g);
        }
      }
    }
  }
  function oo(a, b, c, d) {
    var e = Zm(b, "1", c.domain, c.path),
      f = Fn(c, d);
    f.Eb = "ad_storage";
    return Gm(a, e, f);
  }
  function mo(a, b, c) {
    var d = Ym(a, b, c, io, "ad_storage");
    if (!d) return !1;
    qo(a, d);
    return !0;
  }
  function qo(a, b) {
    var c = b.split(".");
    5 === c.length ? (jo[a] = c.slice(0, 2).join("."), ko[a] = {
      id: c.slice(2, 4).join("."),
      qh: Number(c[4]) || 0
    }) : 3 === c.length ? ko[a] = {
      id: c.slice(0, 2).join("."),
      qh: Number(c[2]) || 0
    } : jo[a] = b;
  }
  function lo(a) {
    return (a || "_gcl") + "_au";
  }
  function ro(a) {
    tj().h() ? Nj(function () {
      Gj("ad_storage") ? a() : Oj(a, "ad_storage");
    }, ["ad_storage"]) : a();
  }
  function so(a) {
    var b = Yn(!0),
      c = lo(a.prefix);
    ro(function () {
      var d = b[c];
      if (d) {
        qo(c, d);
        var e = 1E3 * Number(jo[c].split(".")[1]);
        if (e) {
          yb("TAGGING", 16);
          var f = Fn(a, e);
          f.Eb = "ad_storage";
          var g = Zm(d, "1", a.domain, a.path);
          Gm(c, g, f);
        }
      }
    });
  }
  function to(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var g = {},
        k = Ym(a, e.path, e.domain, io, "ad_storage");
      k && (g[a] = k);
      return g;
    };
    ro(function () {
      eo(f, b, c, d);
    });
  }
  ;
  var uo = function (a) {
    for (var b = [], c = C.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
      var f = c[e].match(d);
      f && b.push({
        Kh: f[1],
        value: f[2],
        timestamp: Number(f[2].split(".")[1]) || 0
      });
    }
    b.sort(function (g, k) {
      return k.timestamp - g.timestamp;
    });
    return b;
  };
  function vo(a, b) {
    var c = uo(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
        d[c[e].Kh] || (d[c[e].Kh] = []);
        var g = {
          version: f[0],
          timestamp: 1E3 * Number(f[1]),
          X: f[2]
        };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].Kh].push(g);
      }
    }
    return d;
  }
  ;
  var wo = /^\w+$/,
    xo = /^[\w-]+$/,
    yo = {
      aw: "_aw",
      dc: "_dc",
      gf: "_gf",
      ha: "_ha",
      gp: "_gp",
      gb: "_gb"
    },
    zo = function () {
      return tj().h() ? Gj("ad_storage") : !0;
    },
    Ao = function (a, b) {
      Ij("ad_storage") ? zo() ? a() : Oj(a, "ad_storage") : b ? yb("TAGGING", 3) : Nj(function () {
        Ao(a, !0);
      }, ["ad_storage"]);
    },
    Co = function (a) {
      return Bo(a).map(function (b) {
        return b.X;
      });
    },
    Bo = function (a) {
      var b = [];
      if (!um(z) || !C.cookie) return b;
      var c = xm(a, C.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = {
        X: d.X
      }, e++) {
        var f = Do(c[e]);
        if (null != f) {
          var g = f,
            k = g.version;
          d.X = g.X;
          var m = g.timestamp,
            n = g.labels,
            p = Fa(b, function (q) {
              return function (r) {
                return r.X === q.X;
              };
            }(d));
          p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = Eo(p.labels, n || [])) : b.push({
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
      return Fo(b);
    };
  function Eo(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function Go(a) {
    return a && "string" == typeof a && a.match(wo) ? a : "_gcl";
  }
  var Io = function () {
      var a = Cn(z.location.href),
        b = An(a, "query", !1, void 0, "gclid"),
        c = An(a, "query", !1, void 0, "gclsrc"),
        d = An(a, "query", !1, void 0, "wbraid"),
        e = An(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || xn(f, "gclid", !1);
        c = c || xn(f, "gclsrc", !1);
        d = d || xn(f, "wbraid", !1);
      }
      return Ho(b, c, e, d);
    },
    Ho = function (a, b, c, d) {
      var e = {},
        f = function (g, k) {
          e[k] || (e[k] = []);
          e[k].push(g);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && xo.test(d) && (e.gbraid = d, f(d, "gb"));
      if (void 0 !== a && a.match(xo)) switch (b) {
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
    Ko = function (a) {
      var b = Io();
      Ao(function () {
        Jo(b, !1, a);
      });
    };
  function Jo(a, b, c, d, e) {
    function f(w, x) {
      var y = Lo(w, g);
      y && (Gm(y, x, k), m = !0);
    }
    c = c || {};
    e = e || [];
    var g = Go(c.prefix);
    d = d || Ra();
    var k = Fn(c, d, !0);
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
        r = Lo("gb", g),
        t = !1;
      if (!b) for (var u = Bo(r), v = 0; v < u.length; v++) u[v].X === q && u[v].labels && 0 < u[v].labels.length && (t = !0);
      t || f("gb", p(q));
    }
  }
  var No = function (a, b) {
      var c = Yn(!0);
      Ao(function () {
        for (var d = Go(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== yo[f]) {
            var g = Lo(f, d),
              k = c[g];
            if (k) {
              var m = Math.min(Mo(k), Ra()),
                n;
              b: {
                var p = m;
                if (um(z)) for (var q = xm(g, C.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r) if (Mo(q[r]) > p) {
                  n = !0;
                  break b;
                }
                n = !1;
              }
              if (!n) {
                var t = Fn(b, m, !0);
                t.Eb = "ad_storage";
                Gm(g, k, t);
              }
            }
          }
        }
        Jo(Ho(c.gclid, c.gclsrc), !1, b);
      });
    },
    Lo = function (a, b) {
      var c = yo[a];
      if (void 0 !== c) return b + c;
    },
    Mo = function (a) {
      return 0 !== Oo(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0;
    };
  function Do(a) {
    var b = Oo(a.split("."));
    return 0 === b.length ? null : {
      version: b[0],
      X: b[2],
      timestamp: 1E3 * (Number(b[1]) || 0),
      labels: b.slice(3)
    };
  }
  function Oo(a) {
    return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !xo.test(a[2]) ? [] : a;
  }
  var Po = function (a, b, c, d, e) {
      if (Da(b) && um(z)) {
        var f = Go(e),
          g = function () {
            for (var k = {}, m = 0; m < a.length; ++m) {
              var n = Lo(a[m], f);
              if (n) {
                var p = xm(n, C.cookie, void 0, "ad_storage");
                p.length && (k[n] = p.sort()[p.length - 1]);
              }
            }
            return k;
          };
        Ao(function () {
          eo(g, b, c, d);
        });
      }
    },
    Fo = function (a) {
      return a.filter(function (b) {
        return xo.test(b.X);
      });
    },
    Qo = function (a, b) {
      if (um(z)) {
        for (var c = Go(b.prefix), d = {}, e = 0; e < a.length; e++) yo[a[e]] && (d[a[e]] = yo[a[e]]);
        Ao(function () {
          l(d, function (f, g) {
            var k = xm(c + g, C.cookie, void 0, "ad_storage");
            k.sort(function (t, u) {
              return Mo(u) - Mo(t);
            });
            if (k.length) {
              var m = k[0],
                n = Mo(m),
                p = 0 !== Oo(m.split(".")).length ? m.split(".").slice(3) : [],
                q = {},
                r;
              r = 0 !== Oo(m.split(".")).length ? m.split(".")[2] : void 0;
              q[f] = [r];
              Jo(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function Ro(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var So = function (a) {
      function b(e, f, g) {
        g && (e[f] = g);
      }
      if (Jj()) {
        var c = Io();
        if (Ro(c, a)) {
          var d = {};
          b(d, "gclid", c.gclid);
          b(d, "dclid", c.dclid);
          b(d, "gclsrc", c.gclsrc);
          b(d, "wbraid", c.gbraid);
          fo(function () {
            return d;
          }, 3);
          fo(function () {
            var e = {};
            return e._up = "1", e;
          }, 1);
        }
      }
    },
    To = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!zo()) return e;
      var f = Bo(a);
      if (!f.length) return e;
      for (var g = 0; g < f.length; g++) -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
      if (d) return e;
      if (1 !== e[0]) {
        var k = f[0],
          m = f[0].timestamp,
          n = [k.version, Math.round(m / 1E3), k.X].concat(k.labels || [], [b]).join("."),
          p = Fn(c, m, !0);
        p.Eb = "ad_storage";
        Gm(a, n, p);
      }
      return e;
    };
  function Uo(a, b) {
    var c = Go(b),
      d = Lo(a, c);
    if (!d) return 0;
    for (var e = Bo(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
    return f;
  }
  function Vo(a) {
    var b = 0,
      c;
    for (c in a) for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var Wo = function (a) {
    var b = Math.max(Uo("aw", a), Vo(zo() ? vo() : {}));
    return Math.max(Uo("gb", a), Vo(zo() ? vo("_gac_gb", !0) : {})) > b;
  };
  var ap = /[A-Z]+/,
    bp = /\s/,
    cp = function (a, b) {
      if (h(a)) {
        a = Oa(a);
        var c = a.indexOf("-");
        if (!(0 > c)) {
          var d = a.substring(0, c);
          if (ap.test(d)) {
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
              for (var m = 0; m < f.length; m++) if (!f[m] || bp.test(f[m]) && ("AW" !== d || 1 !== m)) return;
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
    ep = function (a, b) {
      for (var c = {}, d = 0; d < a.length; ++d) {
        var e = cp(a[d], b);
        e && (c[e.id] = e);
      }
      dp(c);
      var f = [];
      l(c, function (g, k) {
        f.push(k);
      });
      return f;
    };
  function dp(a) {
    var b = [],
      c;
    for (c in a) if (a.hasOwnProperty(c)) {
      var d = a[c];
      "AW" === d.prefix && d.O[1] && b.push(d.ba);
    }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  ;
  var fp = function (a, b, c, d) {
    var e = Kc(),
      f;
    if (1 === e) a: {
      var g = Ci;
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
  var rp,
    sp = !1;
  function tp() {
    sp = !0;
    rp = rp || {};
  }
  var up = function (a) {
    sp || tp();
    return rp[a];
  };
  var vp = function (a, b, c) {
    this.target = a;
    this.eventName = b;
    this.s = c;
    this.h = {};
    this.metadata = lb(c.eventMetadata || {});
    this.isAborted = !1;
  };
  vp.prototype.copyToHitData = function (a, b) {
    var c = U(this.s, a);
    void 0 !== c ? this.h[a] = c : void 0 !== b && (this.h[a] = b);
  };
  var wp = function (a, b, c) {
    var d = up(a.target.ba);
    return d && d.hasOwnProperty(b) ? d[b] : c;
  };
  function xp(a) {
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
      nj: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.h);
      }
    };
  }
  ;
  var zp = function (a) {
      var b = yp[a.target.ba];
      if (!a.isAborted && b) for (var c = xp(a), d = 0; d < b.length; ++d) {
        try {
          b[d](c);
        } catch (e) {
          a.isAborted = !0;
        }
        if (a.isAborted) break;
      }
    },
    Ap = function (a, b) {
      var c = yp[a];
      c || (c = yp[a] = []);
      c.push(b);
    },
    yp = {};
  function Up(a) {
    var b = U(a.s, N.g.vb),
      c = U(a.s, N.g.Jb);
    b && !c ? (a.eventName !== N.g.na && a.eventName !== N.g.od && M(131), a.isAborted = !0) : !b && c && (M(132), a.isAborted = !0);
  }
  ;
  var Wp = function () {
      var a = z.screen;
      return {
        width: a ? a.width : 0,
        height: a ? a.height : 0
      };
    },
    Xp = function (a) {
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
  var Yp = function () {
      var a = C.body,
        b = C.documentElement || a && a.parentElement,
        c,
        d;
      if (C.compatMode && "BackCompat" !== C.compatMode) c = b ? b.clientHeight : 0, d = b ? b.clientWidth : 0;else {
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
    Zp = function (a) {
      var b = Yp(),
        c = b.height,
        d = b.width,
        e = a.getBoundingClientRect(),
        f = e.bottom - e.top,
        g = e.right - e.left;
      return f && g ? (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right - d, 0)) / g, 1)) * (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1)) : 0;
    };
  var $p = [],
    aq = !(!z.IntersectionObserver || !z.IntersectionObserverEntry),
    bq = function (a, b, c) {
      for (var d = new z.IntersectionObserver(a, {
          threshold: c
        }), e = 0; e < b.length; e++) d.observe(b[e]);
      for (var f = 0; f < $p.length; f++) if (!$p[f]) return $p[f] = d, f;
      return $p.push(d) - 1;
    },
    cq = function (a, b, c) {
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
            time: Ra()
          };
        F(function () {
          return a(p);
        });
      }
      for (var e = [], f = [], g = 0; g < b.length; g++) e.push(0), f.push(-1);
      c.sort(function (k, m) {
        return k - m;
      });
      return function () {
        for (var k = 0; k < b.length; k++) {
          var m = Zp(b[k]);
          if (m > e[k]) for (; f[k] < c.length - 1 && m >= c[f[k] + 1];) d(b[k], m), f[k]++;else if (m < e[k]) for (; 0 <= f[k] && m <= c[f[k]];) d(b[k], m), f[k]--;
          e[k] = m;
        }
      };
    },
    dq = function (a, b, c) {
      for (var d = 0; d < c.length; d++) 1 < c[d] ? c[d] = 1 : 0 > c[d] && (c[d] = 0);
      if (aq) {
        var e = !1;
        F(function () {
          e || cq(a, b, c)();
        });
        return bq(function (f) {
          e = !0;
          for (var g = {
            Ae: 0
          }; g.Ae < f.length; g = {
            Ae: g.Ae
          }, g.Ae++) F(function (k) {
            return function () {
              return a(f[k.Ae]);
            };
          }(g));
        }, b, c);
      }
      return z.setInterval(cq(a, b, c), 1E3);
    },
    eq = function (a) {
      aq ? 0 <= a && a < $p.length && $p[a] && ($p[a].disconnect(), $p[a] = void 0) : z.clearInterval(a);
    };
  var gq = function (a, b, c) {
      var d = a.element,
        e = {
          U: a.U,
          type: a.ja,
          tagName: d.tagName
        };
      b && (e.querySelector = fq(d));
      c && (e.isVisible = !Xp(d));
      return e;
    },
    hq = function (a, b, c) {
      return gq({
        element: a.element,
        U: a.U,
        ja: "1"
      }, b, c);
    },
    iq = function (a) {
      var b = !!a.bd + "." + !!a.dd;
      a && a.oe && a.oe.length && (b += "." + a.oe.join("."));
      a && a.hb && (b += "." + a.hb.email + "." + a.hb.phone + "." + a.hb.address);
      return b;
    },
    lq = function (a) {
      if (0 != a.length) {
        var b;
        b = jq(a, function (c) {
          return !kq.test(c.U);
        });
        b = jq(b, function (c) {
          return "INPUT" === c.element.tagName.toUpperCase();
        });
        b = jq(b, function (c) {
          return !Xp(c.element);
        });
        return b[0];
      }
    },
    mq = function (a, b) {
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
    jq = function (a, b) {
      if (1 >= a.length) return a;
      var c = a.filter(b);
      return 0 == c.length ? a : c;
    },
    fq = function (a) {
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
            d = fq(a.parentElement) + ">:nth-child(" + e + ")";
          } else d = "";
          c = d;
        }
        b = c;
      }
      return b;
    },
    oq = function (a) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
          e = d.textContent;
        "INPUT" === d.tagName.toUpperCase() && d.value && (e = d.value);
        if (e) {
          var f = e.match(nq);
          if (f) {
            var g = f[0],
              k;
            if (z.location) {
              var m = zn(z.location, "host", !0);
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
    sq = function () {
      var a = [],
        b = C.body;
      if (!b) return {
        elements: a,
        status: "4"
      };
      for (var c = b.querySelectorAll("*"), d = 0; d < c.length && 1E4 > d; d++) {
        var e = c[d];
        if (!(0 <= pq.indexOf(e.tagName.toUpperCase())) && e.children instanceof HTMLCollection) {
          for (var f = !1, g = 0; g < e.childElementCount && 1E4 > g; g++) if (!(0 <= qq.indexOf(e.children[g].tagName.toUpperCase()))) {
            f = !0;
            break;
          }
          (!f || Q(54) && -1 !== rq.indexOf(e.tagName)) && a.push(e);
        }
      }
      return {
        elements: a,
        status: 1E4 < c.length ? "2" : "1"
      };
    },
    tq = !0,
    uq = !1;
  var nq = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
    vq = /@(gmail|googlemail)\./i,
    kq = /support|noreply/i,
    pq = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
    qq = ["BR"],
    wq = {
      Mm: "1",
      Um: "2",
      Nm: "3",
      Pm: "4",
      Km: "5",
      Vm: "6",
      Qm: "7"
    },
    xq = {},
    rq = ["INPUT", "SELECT"];
  var Qq = function (a) {
      a = a || {
        bd: !0,
        dd: !0
      };
      a.hb = a.hb || {
        email: !0,
        phone: !1,
        address: !1
      };
      var b = iq(a),
        c = xq[b];
      if (c && 200 > Ra() - c.timestamp) return c.result;
      var d = sq(),
        e = d.status,
        f = [],
        g,
        k,
        m = [];
      if (!Q(54)) {
        if (a.hb && a.hb.email) {
          var n = oq(d.elements);
          f = mq(n, a && a.oe);
          g = lq(f);
          10 < n.length && (e = "3");
        }
        !a.Hh && g && (f = [g]);
        for (var p = 0; p < f.length; p++) m.push(hq(f[p], a.bd, a.dd));
        m = m.slice(0, 10);
      } else if (a.hb) {}
      g && (k = hq(g, a.bd, a.dd));
      var D = {
        elements: m,
        zh: k,
        status: e
      };
      xq[b] = {
        timestamp: Ra(),
        result: D
      };
      return D;
    },
    Rq = function (a) {
      return a.tagName + ":" + a.isVisible + ":" + a.U.length + ":" + vq.test(a.U);
    };
  function Sq() {
    return "attribution-reporting";
  }
  function Tq(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  ;
  var Uq = !1;
  function Vq() {
    if (Tq("join-ad-interest-group") && Ba(Cc.joinAdInterestGroup)) return !0;
    Uq || (Al('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), Uq = !0);
    return Tq("join-ad-interest-group") && Ba(Cc.joinAdInterestGroup);
  }
  function Wq(a, b) {
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
    Lc(a, void 0, {
      allow: "join-ad-interest-group"
    }, {
      taggingId: b,
      loadTime: Ra()
    }, c);
  }
  function Xq() {
    return "https://td.doubleclick.net";
  }
  ;
  var Yq = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
    Zq = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    $q = /^\d+\.fls\.doubleclick\.net$/,
    ar = /;gac=([^;?]+)/,
    br = /;gacgb=([^;?]+)/,
    cr = /;gclaw=([^;?]+)/,
    dr = /;gclgb=([^;?]+)/;
  function er(a, b) {
    if ($q.test(C.location.host)) {
      var c = C.location.href.match(b);
      return c && 2 == c.length && c[1].match(Yq) ? decodeURIComponent(c[1]) : "";
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], g = a[e], k = 0; k < g.length; k++) f.push(g[k].X);
      d.push(e + ":" + f.join(","));
    }
    return 0 < d.length ? d.join(";") : "";
  }
  var fr = function (a, b, c) {
    var d = zo() ? vo("_gac_gb", !0) : {},
      e = [],
      f = !1,
      g;
    for (g in d) {
      var k = To("_gac_gb_" + g, a, b, c);
      f = f || 0 !== k.length && k.some(function (m) {
        return 1 === m;
      });
      e.push(g + ":" + k.join(","));
    }
    return {
      bl: f ? e.join(";") : "",
      al: er(d, br)
    };
  };
  function gr(a, b, c) {
    if ($q.test(C.location.host)) {
      var d = C.location.href.match(c);
      if (d && 2 == d.length && d[1].match(Zq)) return [{
        X: d[1]
      }];
    } else return Bo((a || "_gcl") + b);
    return [];
  }
  var hr = function (a) {
      return gr(a, "_aw", cr).map(function (b) {
        return b.X;
      }).join(".");
    },
    ir = function (a) {
      return gr(a, "_gb", dr).map(function (b) {
        return b.X;
      }).join(".");
    },
    jr = function (a, b) {
      var c = To((b && b.prefix || "_gcl") + "_gb", a, b);
      return 0 === c.length || c.every(function (d) {
        return 0 === d;
      }) ? "" : c.join(".");
    };
  var kr = function () {
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
  var Wr = {
    H: {
      Mh: "ads_conversion_hit",
      Pf: "container_execute_start",
      Oh: "container_setup_end",
      Qf: "container_setup_start",
      Nh: "container_execute_end",
      Ph: "container_yield_end",
      Rf: "container_yield_start",
      Ji: "event_execute_end",
      Ii: "event_evaluation_end",
      Gg: "event_evaluation_start",
      Ki: "event_setup_end",
      Yd: "event_setup_start",
      Li: "ga4_conversion_hit",
      ce: "page_load",
      Tm: "pageview",
      Qb: "snippet_load",
      Vi: "tag_callback_error",
      Wi: "tag_callback_failure",
      Xi: "tag_callback_success",
      Yi: "tag_execute_end",
      Vc: "tag_execute_start"
    }
  };
  function Xr() {
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
  var Yr = !1,
    Zr = "L S Y E EC TC HTC".split(" "),
    $r = ["S", "V", "E"],
    as = ["TS", "TI", "TE"];
  var Ds = function (a) {},
    Es = function (a) {},
    Fs = function () {},
    Gs = function (a, b) {},
    Hs = function (a, b) {},
    Is = function (a, b) {},
    Js = function (a, b) {},
    bs = function (a, b, c, d, e, f) {
      var g;
      g = void 0 === g ? !1 : g;
      var k = {};
      return k;
    },
    cs = function (a) {
      var b = !1;
      return b;
    },
    ds = function (a, b) {},
    Ks = function () {
      var a = {};
      return a;
    },
    ws = function (a) {
      a = void 0 === a ? !0 : a;
      var b = {};
      return b;
    },
    Ls = function () {},
    Ms = function (a, b) {},
    Ns = function (a, b, c) {},
    Os = function () {
      var a = bs("PAGEVIEW", nk());
      if (ns(a.entry, "mark")[0]) {
        var b = Yc();
        b.clearMarks(a.entry);
        b.clearMeasures("GTM-" + nk() + ":" + Wr.H.ce + ":to:PAGEVIEW");
      }
      var c = bs(Wr.H.ce, nk());
      cs(a) && ds(a, c);
    };
  var Ps = function (a, b) {
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
  var Qs = function (a, b, c) {
    var d = vl(a, "fmt");
    if (b) {
      var e = vl(a, "random"),
        f = vl(a, "label") || "";
      if (!e) return !1;
      var g = jn(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
      if (!Ps(g, b)) return !1;
    }
    d && 4 != d && (a = xl(a, "rfmt", d));
    var k = xl(a, "fmt", 4);
    Jc(k, function () {
      z.google_noFurtherRedirects && b && b.call && (z.google_noFurtherRedirects = null, b());
    }, void 0, c, C.getElementsByTagName("script")[0].parentElement || void 0);
    return !0;
  };
  var ft = function () {
      this.h = {};
    },
    gt = function (a, b, c) {
      null != c && (a.h[b] = c);
    },
    ht = function (a) {
      return Object.keys(a.h).map(function (b) {
        return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b]);
      }).join("&");
    },
    jt = function (a, b, c, d) {};
  function lt(a, b) {
    if (data.entities && data.entities[a]) return data.entities[a][b];
  }
  ;
  var nt = function (a, b) {
      mt(a).entity.push(b);
    },
    ot = function (a, b) {
      mt(a).event && mt(a).event.push(b);
    },
    pt = function () {
      var a = mt(ok());
      return a.event ? a.event : [];
    };
  function mt(a) {
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
  var qt = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
    rt = {
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
    st = {
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
    tt = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
    wt = function (a) {
      var b = Ui("gtm.allowlist") || Ui("gtm.whitelist");
      b && M(9);
      ui && (b = ["google", "gtagfl", "lcl", "zone"]);
      ut() && (ui ? M(116) : M(117), vt && (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728.")));
      var c = b && Xa(Na(b), rt),
        d = Ui("gtm.blocklist") || Ui("gtm.blacklist");
      d || (d = Ui("tagTypeBlacklist")) && M(3);
      d ? M(8) : d = [];
      ut() && (d = Na(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Na(d).indexOf("google") && M(2);
      var e = d && Xa(Na(d), st),
        f = {};
      return function (g) {
        var k = g && g[Qe.xa];
        if (!k || "string" != typeof k) return !0;
        k = k.replace(/^_*/, "");
        if (void 0 !== f[k]) return f[k];
        var m = Gi[k] || [],
          n = a(k, m),
          p;
        p = mt(ok()).entity;
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
        x || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (x = Ja(e, tt));
        return f[k] = x;
      };
    },
    vt = !1;
  var ut = function () {
      return qt.test(z.location && z.location.hostname);
    },
    xt = function () {
      hk && nt(ok(), function (a) {
        var b = Cf(a),
          c;
        if (Hf(b)) {
          var d = b[Qe.xa];
          if (!d) throw "Error: No function name given for function call.";
          var e = vf[d];
          c = !!e && !!e.runInSiloedMode;
        } else c = !!lt(b[Qe.xa], 4);
        return c;
      });
    };
  function zt(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return Cn("" + c + b).href;
    }
  }
  function At() {
    return !!ni.nf && "SGTM_TOKEN" !== ni.nf.split("@@").join("");
  }
  function Bt(a) {
    for (var b = fa([N.g.Ld, N.g.Nb]), c = b.next(); !c.done; c = b.next()) {
      var d = U(a, c.value);
      if (d) return d;
    }
  }
  ;
  var Dt = function (a, b, c, d, e) {
      if (!Ct() && !uk(a)) {
        var f = "?id=" + encodeURIComponent(a) + "&l=" + ni.ia,
          g = 0 === a.indexOf("GTM-");
        g || (f += "&cx=c");
        Q(67) && (f += "&gtm=" + cn());
        var k = At();
        k && (f += "&sign=" + ni.nf);
        var m = c ? "/gtag/js" : "/gtm.js",
          n = wi || yi ? zt(b, m + f) : void 0;
        if (!n) {
          var p = ni.Oe + m;
          k && Dc && g && (p = Dc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          n = fp("https://", "http://", p + f);
        }
        var q = a;
        d.siloed && (wk({
          ctid: q,
          isDestination: !1
        }), q = ik(q));
        var r = q,
          t = vk();
        dk().container[r] = {
          state: 1,
          context: d,
          parent: t
        };
        ek({
          ctid: r,
          isDestination: !1
        }, e);
        Jc(n);
      }
    },
    Et = function (a, b, c) {
      var d;
      if (d = !Ct()) {
        var e = dk().destination[a];
        d = !(e && e.state);
      }
      if (d) if (xk()) dk().destination[a] = {
        state: 0,
        transportUrl: b,
        context: c,
        parent: vk()
      }, ek({
        ctid: a,
        isDestination: !0
      }), M(91);else {
        var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + ni.ia + "&cx=c";
        Q(67) && (f += "&gtm=" + cn());
        At() && (f += "&sign=" + ni.nf);
        var g = wi || yi ? zt(b, f) : void 0;
        g || (g = fp("https://", "http://", ni.Oe + f));
        var k = a;
        c.siloed && (wk({
          ctid: k,
          isDestination: !0
        }), k = ik(k));
        dk().destination[k] = {
          state: 1,
          context: c,
          parent: vk()
        };
        ek({
          ctid: k,
          isDestination: !0
        });
        Jc(g);
      }
    };
  function Ct() {
    if (an()) {
      return !0;
    }
    return !1;
  }
  ;
  var Ft = "",
    Gt = [];
  function Ht(a) {
    var b = "";
    Ft && (b = "&dl=" + encodeURIComponent(Ft));
    0 < Gt.length && (b += "&tdp=" + Gt.join("."));
    a.Yb && (Ft = "", Gt.length = 0, b && a.Cj());
    return b;
  }
  ;
  var It = [];
  function Jt(a) {
    if (!It.length) return "";
    var b = "&tdc=" + It.join("!");
    a.Yb && (a.Cj(), It.length = 0);
    return b;
  }
  ;
  var Kt = {
      initialized: 11,
      complete: 12,
      interactive: 13
    },
    Lt = {},
    Mt = Object.freeze((Lt[N.g.Ma] = !0, Lt)),
    Nt = 0 <= C.location.search.indexOf("?gtm_diagnostics=") || 0 <= C.location.search.indexOf("&gtm_diagnostics="),
    Pt = function (a, b, c) {
      if (Hk && "config" === a && !(1 < cp(b).O.length)) {
        var d,
          e = Ec("google_tag_data", {});
        e.td || (e.td = {});
        d = e.td;
        var f = lb(c.F);
        lb(c.h, f);
        var g = [],
          k;
        for (k in d) {
          var m = Ot(d[k], f);
          m.length && (Nt && console.log(m), g.push(k));
        }
        g.length && (g.length && Hk && It.push(b + "*" + g.join(".")), yb("TAGGING", Kt[C.readyState] || 14));
        d[b] = f;
      }
    };
  function Qt(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function Ot(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, r) {
        var t = r[q];
        return void 0 === t ? Mt[q] : t;
      },
      f;
    for (f in Qt(a, b)) {
      var g = (d ? d + "." : "") + f,
        k = e(f, a),
        m = e(f, b),
        n = "object" === ib(k) || "array" === ib(k),
        p = "object" === ib(m) || "array" === ib(m);
      if (n && p) Ot(k, m, c, g);else if (n || p || k !== m) c[g] = !0;
    }
    return Object.keys(c);
  }
  ;
  var Rt = !1,
    St = 0,
    Tt = [];
  function Ut(a) {
    if (!Rt) {
      var b = C.createEventObject,
        c = "complete" == C.readyState,
        d = "interactive" == C.readyState;
      if (!a || "readystatechange" != a.type || c || !b && d) {
        Rt = !0;
        for (var e = 0; e < Tt.length; e++) F(Tt[e]);
      }
      Tt.push = function () {
        for (var f = 0; f < arguments.length; f++) F(arguments[f]);
        return 0;
      };
    }
  }
  function Vt() {
    if (!Rt && 140 > St) {
      St++;
      try {
        C.documentElement.doScroll("left"), Ut();
      } catch (a) {
        z.setTimeout(Vt, 50);
      }
    }
  }
  var Wt = function (a) {
    Rt ? a() : Tt.push(a);
  };
  var Xt = function () {
    this.F = 0;
    this.h = {};
  };
  Xt.prototype.addListener = function (a, b, c) {
    var d = ++this.F;
    this.h[a] = this.h[a] || {};
    this.h[a][String(d)] = {
      listener: b,
      jb: c
    };
    return d;
  };
  Xt.prototype.B = function (a, b) {
    var c = this.h[a],
      d = String(b);
    if (!c || !c[d]) return !1;
    delete c[d];
    return !0;
  };
  Xt.prototype.C = function (a, b) {
    var c = [];
    l(this.h[a], function (d, e) {
      0 > c.indexOf(e.listener) && (void 0 === e.jb || 0 <= b.indexOf(e.jb)) && c.push(e.listener);
    });
    return c;
  };
  var Yt = function (a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: nk()
    };
  };
  var $t = function (a, b) {
      this.h = !1;
      this.F = [];
      this.K = {
        tags: []
      };
      this.W = !1;
      this.B = this.C = 0;
      Zt(this, a, b);
    },
    au = function (a, b, c, d) {
      if (ri.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      kb(d) && (e = lb(d, e));
      e.id = c;
      e.status = "timeout";
      return a.K.tags.push(e) - 1;
    },
    bu = function (a, b, c, d) {
      var e = a.K.tags[b];
      e && (e.status = c, e.executionTime = d);
    },
    cu = function (a) {
      if (!a.h) {
        for (var b = a.F, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.F.length = 0;
      }
    },
    Zt = function (a, b, c) {
      void 0 !== b && a.qf(b);
      c && z.setTimeout(function () {
        return cu(a);
      }, Number(c));
    };
  $t.prototype.qf = function (a) {
    var b = this,
      c = Ta(function () {
        return F(function () {
          a(nk(), b.K);
        });
      });
    this.h ? c() : this.F.push(c);
  };
  var du = function (a) {
      a.C++;
      return Ta(function () {
        a.B++;
        a.W && a.B >= a.C && cu(a);
      });
    },
    eu = function (a) {
      a.W = !0;
      a.B >= a.C && cu(a);
    };
  var fu = {},
    hu = function () {
      return z[gu()];
    },
    iu = !1;
  function gu() {
    return z.GoogleAnalyticsObject || "ga";
  }
  var lu = function (a) {},
    mu = function (a, b) {
      return function () {
        var c = hu(),
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
  var ru = {},
    su = {};
  function tu(a, b) {
    if (Hk) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      ru[a] = "&e=" + c + "&eid=" + a;
      Rk(a);
    }
  }
  function uu(a) {
    var b = a.eventId,
      c = a.Yb;
    if (!ru[b]) return "";
    var d = su[b] ? "" : "&es=1";
    d += ru[b];
    c && (su[b] = !0);
    return d;
  }
  ;
  var vu = {};
  function wu(a, b) {
    Hk && (vu[a] = vu[a] || {}, vu[a][b] = (vu[a][b] || 0) + 1);
  }
  function xu(a) {
    var b = a.eventId,
      c = a.Yb,
      d = vu[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete vu[b];
    return e.length ? "&md=" + e.join(".") : "";
  }
  ;
  var yu = {},
    zu = {
      aev: "1",
      c: "2",
      jsm: "3",
      v: "4",
      j: "5",
      smm: "6",
      rmm: "7",
      input: "8"
    };
  function Au(a, b, c) {
    if (Hk) {
      yu[a] = yu[a] || [];
      var d = zu[b] || "0",
        e;
      e = c instanceof z.Element ? "1" : c instanceof z.Event ? "2" : c instanceof z.RegExp ? "3" : c === z ? "4" : c === C ? "5" : c instanceof z.Promise ? "6" : c instanceof z.Storage ? "7" : c instanceof z.Date ? "8" : c instanceof z.History ? "9" : c instanceof z.Performance ? "a" : c === z.crypto ? "b" : c instanceof z.Location ? "c" : c instanceof z.Navigator ? "d" : "object" !== typeof c || kb(c) ? "0" : "e";
      yu[a].push("" + d + e);
    }
  }
  function Bu(a) {
    var b = a.eventId,
      c = yu[b] || [];
    if (!c.length) return "";
    a.Yb && delete yu[b];
    return "&pcr=" + c.join(".");
  }
  ;
  var Cu = {},
    Du = {};
  function Eu(a, b, c) {
    if (Hk && b) {
      var d = bk(b);
      Cu[a] = Cu[a] || [];
      Cu[a].push(c + d);
      var e = (Hf(b) ? "1" : "2") + d;
      Du[a] = Du[a] || [];
      Du[a].push(e);
      Rk(a);
    }
  }
  function Fu(a) {
    var b = a.eventId,
      c = a.Yb,
      d = "",
      e = Cu[b] || [];
    e.length && (d += "&tr=" + e.join("."));
    var f = Du[b] || [];
    f.length && (d += "&ti=" + f.join("."));
    c && (delete Cu[b], delete Du[b]);
    return d;
  }
  ;
  function Gu(a, b, c, d) {
    var e = tf[a],
      f = Hu(a, b, c, d);
    if (!f) return null;
    var g = Ef(e[Qe.Ui], c, []);
    if (g && g.length) {
      var k = g[0];
      f = Gu(k.index, {
        onSuccess: f,
        onFailure: 1 === k.kj ? b.terminate : f,
        terminate: b.terminate
      }, c, d);
    }
    return f;
  }
  function Hu(a, b, c, d) {
    function e() {
      if (f[Qe.zk]) k();else {
        var w = Ff(f, c, []),
          x = w[Qe.Pj];
        if (null != x) for (var y = 0; y < x.length; y++) if (!S(x[y])) {
          k();
          return;
        }
        var A = au(c.Rb, String(f[Qe.xa]), Number(f[Qe.he]), w[Qe.Ak]),
          B = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!B) {
            B = !0;
            var E = Ra() - G;
            Eu(c.id, tf[a], "5");
            bu(c.Rb, A, "success", E);
            Q(29) && Ns(c, f, Wr.H.Xi);
            g();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!B) {
            B = !0;
            var E = Ra() - G;
            Eu(c.id, tf[a], "6");
            bu(c.Rb, A, "failure", E);
            Q(29) && Ns(c, f, Wr.H.Wi);
            k();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        Eu(c.id, f, "1");
        var D = function () {
          ij(3);
          var E = Ra() - G;
          Eu(c.id, f, "7");
          bu(c.Rb, A, "exception", E);
          Q(29) && Ns(c, f, Wr.H.Vi);
          B || (B = !0, k());
        };
        Q(29) && Ms(c, f);
        var G = Ra();
        try {
          Df(w, {
            event: c,
            index: a,
            type: 1
          });
        } catch (E) {
          D(E);
        }
        Q(29) && Ns(c, f, Wr.H.Yi);
      }
    }
    var f = tf[a],
      g = b.onSuccess,
      k = b.onFailure,
      m = b.terminate;
    if (c.ih(f)) return null;
    var n = Ef(f[Qe.Zi], c, []);
    if (n && n.length) {
      var p = n[0],
        q = Gu(p.index, {
          onSuccess: g,
          onFailure: k,
          terminate: m
        }, c, d);
      if (!q) return null;
      g = q;
      k = 2 === p.kj ? m : q;
    }
    if (f[Qe.Qi] || f[Qe.Ck]) {
      var r = f[Qe.Qi] ? uf : c.Am,
        t = g,
        u = k;
      if (!r[a]) {
        e = Ta(e);
        var v = Iu(a, r, e);
        g = v.onSuccess;
        k = v.onFailure;
      }
      return function () {
        r[a](t, u);
      };
    }
    return e;
  }
  function Iu(a, b, c) {
    var d = [],
      e = [];
    b[a] = Ju(d, e, c);
    return {
      onSuccess: function () {
        b[a] = Ku;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = Lu;
        for (var f = 0; f < e.length; f++) e[f]();
      }
    };
  }
  function Ju(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function Ku(a) {
    a();
  }
  function Lu(a, b) {
    b();
  }
  ;
  var Nu = function (a, b) {
      return 1 === arguments.length ? Mu("set", a) : Mu("set", a, b);
    },
    Ou = function (a, b) {
      return 1 === arguments.length ? Mu("config", a) : Mu("config", a, b);
    },
    Pu = function (a, b, c) {
      c = c || {};
      c[N.g.Mb] = a;
      return Mu("event", b, c);
    };
  function Mu(a) {
    return arguments;
  }
  var Qu = function () {
    this.h = [];
    this.B = [];
  };
  Qu.prototype.enqueue = function (a, b, c) {
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
  Qu.prototype.listen = function (a) {
    this.B.push(a);
  };
  Qu.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || (d = [], a[c.notBeforeEventId] = d);
      d.push(c);
    }
    return a;
  };
  Qu.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var Su = function (a, b, c) {
      Ru().enqueue(a, b, c);
    },
    Uu = function () {
      var a = Tu;
      Ru().listen(a);
    };
  function Ru() {
    var a = oi.mb;
    a || (a = new Qu(), oi.mb = a);
    return a;
  }
  var bv = function (a) {
      var b = oi.zones;
      return b ? b.getIsAllowedFn(jk(), a) : function () {
        return !0;
      };
    },
    cv = function () {
      ot(ok(), function (a, b) {
        var c = oi.zones;
        return c ? c.isActive(jk(), b) : !0;
      });
    };
  var fv = function (a, b) {
    for (var c = [], d = 0; d < tf.length; d++) if (a[d]) {
      var e = tf[d];
      var f = du(b.Rb);
      try {
        var g = Gu(d, {
          onSuccess: f,
          onFailure: f,
          terminate: f
        }, b, d);
        if (g) {
          var k = e[Qe.xa];
          if (!k) throw "Error: No function name given for function call.";
          var m = vf[k];
          c.push({
            Ej: d,
            xj: (m ? m.priorityOverride || 0 : 0) || lt(e[Qe.xa], 1) || 0,
            execute: g
          });
        } else dv(d, b), f();
      } catch (p) {
        f();
      }
    }
    c.sort(ev);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return 0 < c.length;
  };
  var Cv = function (a, b) {
    if (!gv) return !1;
    var c = a["gtm.triggers"] && String(a["gtm.triggers"]),
      d = gv.C(a.event, c ? String(c).split(",") : []);
    if (!d.length) return !1;
    for (var e = 0; e < d.length; ++e) {
      var f = du(b);
      try {
        d[e](a, f);
      } catch (g) {
        f();
      }
    }
    return !0;
  };
  function ev(a, b) {
    var c,
      d = b.xj,
      e = a.xj;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;else {
      var g = a.Ej,
        k = b.Ej;
      f = g > k ? 1 : g < k ? -1 : 0;
    }
    return f;
  }
  function dv(a, b) {
    if (Hk) {
      var c = function (d) {
        var e = b.ih(tf[d]) ? "3" : "4",
          f = Ef(tf[d][Qe.Ui], b, []);
        f && f.length && c(f[0].index);
        Eu(b.id, tf[d], e);
        var g = Ef(tf[d][Qe.Zi], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var Iv = !1,
    gv;
  var Jv = function () {
    gv || (gv = new Xt());
    return gv;
  };
  var Ov = function (a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    Q(29) && Gs(b, d);
    if ("gtm.js" === d) {
      if (Iv) return !1;
      Iv = !0;
    }
    var e,
      f = !1;
    if (pt().every(function (r) {
      return r(d, b);
    })) e = bv(b);else {
      if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d) return !1;
      f = !0;
      e = bv(Number.MAX_SAFE_INTEGER);
    }
    tu(b, d);
    var g = a.eventCallback,
      k = a.eventTimeout,
      m = {
        id: b,
        priorityId: c,
        name: d,
        ih: wt(e),
        Am: [],
        sj: function () {
          M(6);
          ij(0);
        },
        ej: Kv(),
        fj: Lv(b),
        Rb: new $t(function () {
          if (Q(29)) {}
          g && g.apply(g, [].slice.call(arguments, 0));
        }, k)
      };
    Q(57) && (m.Dh = wu);
    Q(29) && Is(m.id, m.name);
    var n = Pf(m);
    Q(29) && Js(m.id, m.name);
    f && (n = Mv(n));
    Q(29) && Hs(b, d);
    var p = fv(n, m),
      q = !1;
    q = Cv(a, m.Rb);
    eu(m.Rb);
    "gtm.js" !== d && "gtm.sync" !== d || lu(nk());
    return Nv(n, p) || q;
  };
  function Lv(a) {
    return function (b) {
      nb(b) || Au(a, "input", b);
    };
  }
  function Kv() {
    var a = {};
    a.event = Zi("event", 1);
    a.ecommerce = Zi("ecommerce", 1);
    a.gtm = Zi("gtm");
    a.eventModel = Zi("eventModel");
    return a;
  }
  function Mv(a) {
    for (var b = [], c = 0; c < a.length; c++) if (a[c]) {
      var d = String(tf[c][Qe.xa]);
      if (qi[d] || void 0 !== tf[c][Qe.Dk] || Hi[d] || lt(d, 2)) b[c] = !0;
    }
    return b;
  }
  function Nv(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++) if (a[c] && tf[c] && !ri[String(tf[c][Qe.xa])]) return !0;
    return !1;
  }
  var Pv = {};
  function Qv(a, b, c) {
    Hk && void 0 !== a && (Pv[a] = Pv[a] || [], Pv[a].push(c + b), Rk(a));
  }
  function Rv(a) {
    var b = a.eventId,
      c = a.Yb,
      d = "",
      e = Pv[b] || [];
    e.length && (d += "&epr=" + e.join("."));
    c && delete Pv[b];
    return d;
  }
  ;
  var Tv = function (a, b) {
      var c = cp(mk(a), !0);
      c && Sv.register(c, b);
    },
    Uv = function (a, b, c, d) {
      var e = cp(c, d.isGtmEvent);
      e && Sv.push("event", [b, a], e, d);
    },
    Vv = function (a, b, c, d) {
      var e = cp(c, d.isGtmEvent);
      e && Sv.push("get", [a, b], e, d);
    },
    Xv = function (a) {
      var b = cp(mk(a), !0),
        c;
      b ? c = Wv(Sv, b).h : c = {};
      return c;
    },
    Yv = function (a, b) {
      var c = cp(mk(a), !0);
      if (c) {
        var d = Sv,
          e = lb(b);
        lb(Wv(d, c).h, e);
        Wv(d, c).h = e;
      }
    },
    Zv = function () {
      this.status = 1;
      this.K = {};
      this.h = {};
      this.B = {};
      this.W = null;
      this.F = {};
      this.C = !1;
    },
    $v = function (a, b, c, d) {
      var e = Ra();
      this.type = a;
      this.C = e;
      this.h = b;
      this.B = c;
      this.messageContext = d;
    },
    aw = function () {
      this.B = {};
      this.C = {};
      this.h = [];
    },
    Wv = function (a, b) {
      var c = b.ba;
      return a.B[c] = a.B[c] || new Zv();
    },
    bw = function (a, b, c, d) {
      if (d.h) {
        var e = Wv(a, d.h),
          f = e.W;
        if (f) {
          var g = lb(c),
            k = lb(e.K[d.h.id]),
            m = lb(e.F),
            n = lb(e.h),
            p = lb(a.C),
            q = {};
          if (Hk) try {
            q = lb(Ri);
          } catch (v) {
            M(72);
          }
          var r = d.h.prefix,
            t = function (v) {
              Qv(d.messageContext.eventId, r, v);
            },
            u = kl(jl(il(hl(gl(el(dl(fl(cl(bl(al(new $k(d.messageContext.eventId, d.messageContext.priorityId), g), k), m), n), p), q), d.messageContext.eventMetadata), function () {
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
            Qv(d.messageContext.eventId, r, "1"), Pt(d.type, d.h.id, u), f(d.h.id, b, d.C, u);
          } catch (v) {
            Qv(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  aw.prototype.register = function (a, b, c) {
    var d = Wv(this, a);
    3 !== d.status && (d.W = b, d.status = 3, c && (lb(d.h, c), d.h = c), this.flush());
  };
  aw.prototype.push = function (a, b, c, d) {
    void 0 !== c && (1 === Wv(this, c).status && (Wv(this, c).status = 2, this.push("require", [{}], c, {})), Wv(this, c).C && (d.deferrable = !1));
    this.h.push(new $v(a, c, b, d));
    d.deferrable || this.flush();
  };
  aw.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
      e = {
        Sb: e.Sb,
        wf: e.wf
      };
      var f = this.h[0],
        g = f.h;
      if (f.messageContext.deferrable) !g || Wv(this, g).C ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();else {
        switch (f.type) {
          case "require":
            if (3 !== Wv(this, g).status && !a) {
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
            var k = Wv(this, g);
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
            k.C && m || bw(this, N.g.na, e.Sb, f);
            k.C = !0;
            n ? lb(e.Sb, k.F) : (lb(e.Sb, k.K[g.id]), M(70));
            d = !0;
            break;
          case "event":
            e.wf = {};
            l(f.B[0], function (r) {
              return function (t, u) {
                lb(Za(t, u), r.wf);
              };
            }(e));
            bw(this, f.B[1], e.wf, f);
            break;
          case "get":
            var p = {},
              q = (p[N.g.cb] = f.B[0], p[N.g.tb] = f.B[1], p);
            bw(this, N.g.Ja, q, f);
        }
        this.h.shift();
        cw(this, f);
      }
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var cw = function (a, b) {
      if ("require" !== b.type) if (b.h) for (var c = Wv(a, b.h).B[b.type] || [], d = 0; d < c.length; d++) c[d]();else for (var e in a.B) if (a.B.hasOwnProperty(e)) {
        var f = a.B[e];
        if (f && f.B) for (var g = f.B[b.type] || [], k = 0; k < g.length; k++) g[k]();
      }
    },
    Sv = new aw();
  var Yf;
  var dw = {},
    ew = {},
    fw = function (a, b) {
      for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
        Ef: e.Ef,
        zf: e.zf
      }, f++) {
        var g = a[f];
        if (0 <= g.indexOf("-")) {
          if (e.Ef = cp(g, b), e.Ef) {
            var k = lk();
            Fa(k, function (r) {
              return function (t) {
                return r.Ef.ba === t;
              };
            }(e)) ? c.push(g) : d.push(g);
          }
        } else {
          var m = dw[g] || [];
          e.zf = {};
          m.forEach(function (r) {
            return function (t) {
              return r.zf[t] = !0;
            };
          }(e));
          for (var n = jk(), p = 0; p < n.length; p++) if (e.zf[n[p]]) {
            c = c.concat(lk());
            break;
          }
          var q = ew[g] || [];
          q.length && (c = c.concat(q));
        }
      }
      return {
        Tl: c,
        Vl: d
      };
    },
    gw = function (a) {
      l(dw, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    hw = function (a) {
      l(ew, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var iw = "HA GF G UA AW DC MC".split(" "),
    jw = !1,
    kw = !1;
  function lw(a, b) {
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
  var mw = void 0,
    nw = void 0;
  function ow(a, b, c) {
    var d = lb(a);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return void 0 !== b[f];
    }) && M(136);
    var e = lb(b);
    lb(c, e);
    Su(Ou(jk()[0], e), a.eventId, d);
  }
  function pw(a) {
    for (var b = fa([N.g.Ld, N.g.Nb]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = a && a[d] || Sv.C[d];
      if (e) return e;
    }
  }
  var qw = {
      config: function (a, b) {
        var c = Q(58),
          d = lw(a, b);
        if (!(2 > a.length) && h(a[1])) {
          var e = {};
          if (2 < a.length) {
            if (void 0 != a[2] && !kb(a[2]) || 3 < a.length) return;
            e = a[2];
          }
          var f = cp(a[1], b.isGtmEvent);
          if (f) {
            var g, k, m;
            a: {
              if (!gk.hf) {
                var n = pk(vk());
                if (zk(n)) {
                  var p = n.parent,
                    q = p.isDestination;
                  m = {
                    Yl: pk(p),
                    Sl: q
                  };
                  break a;
                }
              }
              m = void 0;
            }
            var r = m;
            r && (g = r.Yl, k = r.Sl);
            tu(d.eventId, "gtag.config");
            var t = f.ba,
              u = f.id !== t;
            if (u ? -1 === lk().indexOf(t) : -1 === jk().indexOf(t)) {
              if (!(c && b.inheritParentConfig || Q(25) && e[N.g.vb])) {
                var v = pw(e);
                if (u) Et(t, v, {
                  source: 2,
                  fromContainerExecution: b.fromContainerExecution
                });else if (c && void 0 !== g && -1 !== g.containers.indexOf(t)) {
                  var w = e;
                  mw ? ow(b, w, mw) : nw || (nw = lb(w));
                } else Dt(t, v, !0, {
                  source: 2,
                  fromContainerExecution: b.fromContainerExecution
                });
              }
            } else {
              if (g && (M(128), k && M(130), c && b.inheritParentConfig)) {
                var x = e;
                nw ? ow(b, nw, x) : !x[N.g.Ob] && ti && mw || (mw = lb(x));
                return;
              }
              if (ti && !u && !e[N.g.Ob]) {
                var y = kw;
                kw = !0;
                if (y) return;
              }
              jw || M(43);
              if (!b.noTargetGroup) if (u) {
                hw(f.id);
                var A = f.id,
                  B = e[N.g.Hd] || "default";
                B = String(B).split(",");
                for (var D = 0; D < B.length; D++) {
                  var G = ew[B[D]] || [];
                  ew[B[D]] = G;
                  0 > G.indexOf(A) && G.push(A);
                }
              } else {
                gw(f.id);
                var E = f.id,
                  I = e[N.g.Hd] || "default";
                I = I.toString().split(",");
                for (var O = 0; O < I.length; O++) {
                  var R = dw[I[O]] || [];
                  dw[I[O]] = R;
                  0 > R.indexOf(E) && R.push(E);
                }
              }
              delete e[N.g.Hd];
              var W = b.eventMetadata || {};
              W.hasOwnProperty("is_external_event") || (W.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = W;
              delete e[N.g.Nc];
              for (var ha = u ? [f.id] : lk(), X = 0; X < ha.length; X++) {
                var T = e,
                  ca = lb(b),
                  ja = cp(ha[X], ca.isGtmEvent);
                ja && Sv.push("config", [T], ja, ca);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          M(39);
          var c = lw(a, b),
            d = a[1];
          "default" === d ? Tj(a[2]) : "update" === d ? Uj(a[2], c) : "declare" === d ? b.fromContainerExecution && Sj(a[2]) : "core_platform_services" === d && Vj(a[2]);
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
          e && (g.eventModel = lb(e), e[N.g.Nc] && (g.eventCallback = e[N.g.Nc]), e[N.g.Cd] && (g.eventTimeout = e[N.g.Cd]));
          var k = lw(a, b),
            m = k.eventId,
            n = k.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if ("optimize.callback" === c) return g.eventModel = g.eventModel || {}, g;
          var p;
          var q = d,
            r = q && q[N.g.Mb];
          void 0 === r && (r = Ui(N.g.Mb, 2), void 0 === r && (r = "default"));
          if (h(r) || Da(r)) {
            var t;
            b.isGtmEvent ? t = h(r) ? [r] : r : t = r.toString().replace(/\s+/g, "").split(",");
            var u = fw(t, b.isGtmEvent),
              v = u.Tl,
              w = u.Vl;
            if (w.length) for (var x = pw(q), y = 0; y < w.length; y++) {
              var A = cp(w[y], b.isGtmEvent);
              A && Et(A.ba, x, {
                source: 3,
                fromContainerExecution: b.fromContainerExecution
              });
            }
            p = ep(v, b.isGtmEvent);
          } else p = void 0;
          var B = p;
          if (B) {
            tu(m, c);
            for (var D = [], G = 0; G < B.length; G++) {
              var E = B[G],
                I = lb(b);
              if (-1 !== iw.indexOf(qk(E.prefix))) {
                var O = lb(d),
                  R = I.eventMetadata || {};
                R.hasOwnProperty("is_external_event") || (R.is_external_event = !I.fromContainerExecution);
                I.eventMetadata = R;
                delete O[N.g.Nc];
                Uv(c, O, E.id, I);
              }
              D.push(E.id);
            }
            g.eventModel = g.eventModel || {};
            0 < B.length ? g.eventModel[N.g.Mb] = D.join() : delete g.eventModel[N.g.Mb];
            jw || M(43);
            void 0 === b.noGtmEvent && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
            g.eventModel[N.g.Jb] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        M(53);
        if (4 === a.length && h(a[1]) && h(a[2]) && Ba(a[3])) {
          var c = cp(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            jw || M(43);
            var f = pw();
            if (!Fa(lk(), function (k) {
              return c.ba === k;
            })) Et(c.ba, f, {
              source: 4,
              fromContainerExecution: b.fromContainerExecution
            });else if (-1 !== iw.indexOf(qk(c.prefix))) {
              lw(a, b);
              var g = {};
              Pj(lb((g[N.g.cb] = d, g[N.g.tb] = e, g)));
              Vv(d, function (k) {
                F(function () {
                  return e(k);
                });
              }, c.id, b);
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          jw = !0;
          var c = lw(a, b),
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
            d = Yf.B;
          d.h[b] ? d.h[b].push(c) : d.h[b] = [c];
          if (M(74), "all" === a[1]) {
            M(75);
            var e = !1;
            try {
              e = a[2](nk(), "unknown", {});
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
          var d = lw(a, b),
            e = d.eventId,
            f = d.priorityId;
          lb(c);
          var g = lb(c);
          Sv.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          Q(13) && delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      }
    },
    rw = {
      policy: !0
    };
  var sw = function (a) {
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
    tw = function (a) {
      var b = z[ni.ia],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var uw = !1,
    vw = [];
  function ww() {
    if (!uw) {
      uw = !0;
      for (var a = 0; a < vw.length; a++) F(vw[a]);
    }
  }
  var xw = function (a) {
    uw ? F(a) : vw.push(a);
  };
  var Ow = function (a) {
    if (Nw(a)) return a;
    this.h = a;
  };
  Ow.prototype.getUntrustedMessageValue = function () {
    return this.h;
  };
  var Nw = function (a) {
    return !a || "object" !== ib(a) || kb(a) ? !1 : "getUntrustedMessageValue" in a;
  };
  Ow.prototype.getUntrustedMessageValue = Ow.prototype.getUntrustedMessageValue;
  var Pw = 0,
    Qw = {},
    Rw = [],
    Sw = [],
    Tw = !1,
    Uw = !1;
  function Vw(a, b) {
    return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId;
  }
  var Ww = function (a) {
      return z[ni.ia].push(a);
    },
    Xw = function (a, b, c) {
      a.eventCallback = b;
      c && (a.eventTimeout = c);
      return Ww(a);
    },
    Yw = function (a, b) {
      if (!Ca(b) || 0 > b) b = 0;
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
  function Zw(a, b) {
    var c = a._clear || b.overwriteModelFields;
    l(a, function (e, f) {
      "_clear" !== e && (c && Xi(e), Xi(e, f));
    });
    Di || (Di = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d && (d = Ii(), a["gtm.uniqueEventId"] = d, Xi("gtm.uniqueEventId", d));
    return Ov(a);
  }
  function $w(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (Ka(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b) return !0;
    }
    return !1;
  }
  function ax() {
    var a;
    if (Sw.length) a = Sw.shift();else if (Rw.length) a = Rw.shift();else return;
    var b;
    var c = a;
    if (Tw || !$w(c.message)) b = c;else {
      Tw = !0;
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
      Rw.unshift(k, c);
      if (Hk) {
        var m = Uf.ctid;
        if (m) {
          var n,
            p = pk(vk());
          n = p && p.context;
          var q,
            r = Cn(z.location.href);
          q = r.hostname + r.pathname;
          var t = n && n.fromContainerExecution,
            u = n && n.source,
            v = Uf.Og,
            w = gk.hf;
          Hk && (Ft || (Ft = q), Gt.push(m + ";" + v + ";" + (t ? 1 : 0) + ";" + (u || 0) + ";" + (w ? 1 : 0)));
        }
      }
      b = f;
    }
    return b;
  }
  function bx() {
    for (var a = !1, b; !Uw && (b = ax());) {
      Uw = !0;
      delete Ri.eventModel;
      Ti();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) Uw = !1;else {
        e.fromContainerExecution && Yi();
        try {
          if (Ba(d)) try {
            d.call(Vi);
          } catch (x) {} else if (Da(d)) {
            var f = d;
            if (h(f[0])) {
              var g = f[0].split("."),
                k = g.pop(),
                m = f.slice(1),
                n = Ui(g.join("."), 2);
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
                  var r = qw[d[0]];
                  if (r && (!e.fromContainerExecution || !rw[d[0]])) {
                    p = r(d, e);
                    break a;
                  }
                }
                p = void 0;
              }
              (q = p && "set" === d[0] && !!p.event) && M(101);
            } else p = d;
            if (p) {
              var t = Zw(p, e);
              a = t || a;
              q && t && M(113);
            }
          }
        } finally {
          e.fromContainerExecution && Ti(!0);
          var u = d["gtm.uniqueEventId"];
          if ("number" === typeof u) {
            for (var v = Qw[String(u)] || [], w = 0; w < v.length; w++) Sw.push(cx(v[w]));
            v.length && Sw.sort(Vw);
            delete Qw[String(u)];
            u > Pw && (Pw = u);
          }
          Uw = !1;
        }
      }
    }
    return !a;
  }
  function dx() {
    if (Q(29)) {
      var a = ex();
    }
    var e = bx();
    try {
      sw(nk());
    } catch (f) {}
    return e;
  }
  function Tu(a) {
    if (Pw < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      Qw[b] = Qw[b] || [];
      Qw[b].push(a);
    } else Sw.push(cx(a)), Sw.sort(Vw), F(function () {
      Uw || bx();
    });
  }
  function cx(a) {
    return {
      message: a.message,
      messageContext: a.messageContext
    };
  }
  var fx = function () {
      function a(f) {
        var g = {};
        if (Nw(f)) {
          var k = f;
          f = Nw(k) ? k.getUntrustedMessageValue() : void 0;
          g.fromContainerExecution = !0;
        }
        return {
          message: f,
          messageContext: g
        };
      }
      var b = Ec(ni.ia, []),
        c = oi[ni.ia] = oi[ni.ia] || {};
      !0 === c.pruned && M(83);
      Qw = Ru().get();
      Uu();
      Wt(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push((f.event = "gtm.dom", f));
        }
      });
      xw(function () {
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
          for (var g = 0; g < arguments.length; g++) f[g] = new Ow(arguments[g]);
        } else f = [].slice.call(arguments, 0);
        var k = f.map(function (q) {
          return a(q);
        });
        Rw.push.apply(Rw, k);
        var m = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n) for (M(4), c.pruned = !0; this.length > n;) this.shift();
        var p = "boolean" !== typeof m || m;
        return bx() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      Rw.push.apply(Rw, e);
      ex() && (Q(29) && Fs(), F(dx));
    },
    ex = function () {
      var a = !0;
      a = !1;
      return a;
    };
  function gx(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = Ra();
    return b < c + 3E5 && b > c - 9E5;
  }
  function hx(a) {
    return a && 0 === a.indexOf("pending:") ? gx(a.substr(8)) : !1;
  }
  ;
  var Cx = function () {};
  var Dx = new String("undefined"),
    Ex = function () {};
  Ex.prototype.toString = function () {
    return "undefined";
  };
  var Fx = new Ex();
  var Nx = function (a, b, c) {
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
    Ox = function (a) {
      oi.hasOwnProperty("autoEventsSettings") || (oi.autoEventsSettings = {});
      var b = oi.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    Px = function (a, b, c) {
      Ox(a)[b] = c;
    },
    Qx = function (a, b, c, d) {
      var e = Ox(a),
        f = Sa(e, b, d);
      e[b] = c(f);
    },
    Rx = function (a, b, c) {
      var d = Ox(a);
      return Sa(d, b, c);
    },
    Sx = function (a) {
      Rx("jel", "init", !1) || (Px("jel", "init", !0), a());
    },
    Tx = function (a) {
      return "string" === typeof a ? a : String(Ii());
    };
  var Ux = ["input", "select", "textarea"],
    Vx = ["button", "hidden", "image", "reset", "submit"],
    Wx = function (a) {
      var b = a.tagName.toLowerCase();
      return 0 > Ux.indexOf(b) || "input" === b && 0 <= Vx.indexOf(a.type.toLowerCase()) ? !1 : !0;
    },
    Xx = function (a) {
      return a.form ? a.form.tagName ? a.form : C.getElementById(a.form) : Tc(a, ["form"], 100);
    },
    Yx = function (a, b, c) {
      if (!a.elements) return 0;
      for (var d = b.dataset[c], e = 0, f = 1; e < a.elements.length; e++) {
        var g = a.elements[e];
        if (Wx(g)) {
          if (g.dataset[c] === d) return f;
          f++;
        }
      }
      return 0;
    };
  var Zx = !!z.MutationObserver,
    $x = void 0,
    ay = function (a) {
      if (!$x) {
        var b = function () {
          var c = C.body;
          if (c) if (Zx) new MutationObserver(function () {
            for (var e = 0; e < $x.length; e++) F($x[e]);
          }).observe(c, {
            childList: !0,
            subtree: !0
          });else {
            var d = !1;
            Nc(c, "DOMNodeInserted", function () {
              d || (d = !0, F(function () {
                d = !1;
                for (var e = 0; e < $x.length; e++) F($x[e]);
              }));
            });
          }
        };
        $x = [];
        C.body ? b() : F(b);
      }
      $x.push(a);
    },
    by = function (a) {
      if ($x) for (var b = 0; b < $x.length; b++) $x[b] === a && $x.splice(b, 1);
    };
  var my = function (a, b, c) {
    function d() {
      var g = a();
      f += e ? (Ra() - e) * g.playbackRate / 1E3 : 0;
      e = Ra();
    }
    var e = 0,
      f = 0;
    return {
      createEvent: function (g, k, m) {
        var n = a(),
          p = n.Wg,
          q = void 0 !== m ? Math.round(m) : void 0 !== k ? Math.round(n.Wg * k) : Math.round(n.ij),
          r = void 0 !== k ? Math.round(100 * k) : 0 >= p ? 0 : Math.round(q / p * 100),
          t = C.hidden ? !1 : .5 <= Zp(c);
        d();
        var u = void 0;
        void 0 !== b && (u = [b]);
        var v = Nx(c, "gtm.video", u);
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
      Bj: function () {
        e = Ra();
      },
      Wc: function () {
        d();
      }
    };
  };
  var ny = z.clearTimeout,
    oy = z.setTimeout,
    py = function (a, b, c, d) {
      if (an()) {
        b && F(b);
      } else return Jc(a, b, c, d);
    },
    qy = function () {
      return new Date();
    },
    ry = function () {
      return z.location.href;
    },
    sy = function (a) {
      return An(Cn(a), "fragment");
    },
    ty = function (a) {
      return Bn(Cn(a));
    },
    uy = function (a, b) {
      return Ui(a, b || 2);
    },
    vy = function (a, b, c) {
      return b ? Xw(a, b, c) : Ww(a);
    },
    wy = function (a, b) {
      z[a] = b;
    },
    V = function (a, b, c) {
      b && (void 0 === z[a] || c && !z[a]) && (z[a] = b);
      return z[a];
    },
    xy = function (a, b, c) {
      return xm(a, b, void 0 === c ? !0 : !!c);
    },
    yy = function (a, b, c) {
      return 0 === Gm(a, b, c);
    },
    zy = function (a, b) {
      if (an()) {
        b && F(b);
      } else Lc(a, b);
    },
    Ay = function (a) {
      return !!Rx(a, "init", !1);
    },
    By = function (a) {
      Px(a, "init", !0);
    },
    Cy = function (a, b, c) {
      nb(a) || Au(c, b, a);
    };
  function Zy(a, b) {
    function c(g) {
      var k = Cn(g),
        m = An(k, "protocol"),
        n = An(k, "host", !0),
        p = An(k, "port"),
        q = An(k, "path").toLowerCase().replace(/\/$/, "");
      if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++) if (d[f] !== e[f]) return !1;
    return !0;
  }
  function $y(a) {
    return az(a) ? 1 : 0;
  }
  function az(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = lb(a, {});
        lb({
          arg1: c[d],
          any_of: void 0
        }, e);
        if ($y(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return vg(b, c);
      case "_css":
        var f;
        a: {
          if (b) try {
            for (var g = 0; g < rg.length; g++) {
              var k = rg[g];
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
        return sg(b, c);
      case "_eq":
        return wg(b, c);
      case "_ge":
        return xg(b, c);
      case "_gt":
        return zg(b, c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return yg(b, c);
      case "_lt":
        return Ag(b, c);
      case "_re":
        return ug(b, c, a.ignore_case);
      case "_sw":
        return Bg(b, c);
      case "_um":
        return Zy(b, c);
    }
    return !1;
  }
  ;
  function bz() {
    var a = ["&cv=1", "&rv=" + ni.Lg, "&tc=" + tf.filter(function (b) {
      return b;
    }).length];
    ni.ee && a.push("&x=" + ni.ee);
    return a.join("");
  }
  ;
  var cz = function () {
      return !1;
    },
    dz = function () {
      var a = {};
      return function (b, c, d) {};
    };
  function ez() {
    var a = fz;
    return function (b, c, d) {
      var e = d && d.event;
      gz(c);
      var f = new qb();
      l(c, function (q, r) {
        var t = od(r, void 0, 1);
        void 0 === t && void 0 !== r && M(44);
        f.set(q, t);
      });
      a.h.h.F = Mf();
      var g = {
        dj: Zf(b),
        eventId: void 0 !== e ? e.id : void 0,
        priorityId: void 0 !== e ? e.priorityId : void 0,
        qf: void 0 !== e ? function (q) {
          return e.Rb.qf(q);
        } : void 0,
        Yc: function () {
          return b;
        },
        log: function () {},
        Xk: {
          index: d && d.index,
          type: d && d.type,
          name: d && d.name
        },
        lm: !!lt(b, 3)
      };
      if (cz()) {
        var k = dz(),
          m = void 0,
          n = void 0;
        g.Wa = {
          Jh: [],
          ie: {},
          ib: function (q, r, t) {
            1 === r && (m = q);
            7 === r && (n = t);
            k(q, r, t);
          },
          th: oh()
        };
        g.log = function (q, r) {
          if (m) {
            var t = Array.prototype.slice.call(arguments, 1);
            k(m, 4, {
              level: q,
              source: n,
              message: t
            });
          }
        };
      }
      var p = Me(a, g, [b, f]);
      a.h.h.F = void 0;
      p instanceof ua && "return" === p.h && (p = p.B);
      return pd(p, void 0, 1);
    };
  }
  function gz(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    Ba(b) && (a.gtmOnSuccess = function () {
      F(b);
    });
    Ba(c) && (a.gtmOnFailure = function () {
      F(c);
    });
  }
  ;
  function hz(a, b) {
    var c = this;
  }
  hz.M = "addConsentListener";
  var iz;
  var jz = function (a) {
    for (var b = 0; b < a.length; ++b) if (iz) try {
      a[b]();
    } catch (c) {
      M(77);
    } else a[b]();
  };
  function kz(a, b, c) {
    var d = this,
      e;
    K(J(this), ["eventName:!string", "callback:!Fn", "triggerId:?string"], arguments), jz([function () {
      return L(d, "listen_data_layer", a);
    }]), e = Jv().addListener(a, pd(b), c);
    return e;
  }
  kz.D = "internal.addDataLayerEventListener";
  function lz(a, b, c) {}
  lz.M = "addDocumentEventListener";
  function mz(a, b, c, d) {}
  mz.M = "addElementEventListener";
  function nz(a) {}
  nz.M = "addEventCallback";
  function rz(a) {}
  rz.D = "internal.addFormAbandonmentListener";
  function sz(a, b, c, d) {}
  sz.D = "internal.addFormData";
  var tz = {},
    uz = [],
    vz = {},
    wz = 0,
    xz = 0;
  var zz = function () {
      Nc(C, "change", function (a) {
        for (var b = 0; b < uz.length; b++) uz[b](a);
      });
      Nc(z, "pagehide", function () {
        yz();
      });
    },
    yz = function () {
      l(vz, function (a, b) {
        var c = tz[a];
        c && l(b, function (d, e) {
          Az(e, c);
        });
      });
    },
    Dz = function (a, b) {
      var c = "" + a;
      if (tz[c]) tz[c].push(b);else {
        var d = [b];
        tz[c] = d;
        var e = vz[c];
        e || (e = {}, vz[c] = e);
        uz.push(function (f) {
          var g = f.target;
          if (g) {
            var k = Xx(g);
            if (k) {
              var m = Bz(k, "gtmFormInteractId", function () {
                  return wz++;
                }),
                n = Bz(g, "gtmFormInteractFieldId", function () {
                  return xz++;
                }),
                p = e[m];
              p ? (p.Fa && (z.clearTimeout(p.Fa), p.la.dataset.gtmFormInteractFieldId !== n && Az(p, d)), p.la = g, Cz(p, d, a)) : (e[m] = {
                form: k,
                la: g,
                Xb: 0,
                Fa: null
              }, Cz(e[m], d, a));
            }
          }
        });
      }
    },
    Az = function (a, b) {
      var c = a.form,
        d = a.la,
        e = Nx(c, "gtm.formInteract"),
        f = c.action;
      f && f.tagName && (f = c.cloneNode(!1).action);
      e["gtm.elementUrl"] = f;
      e["gtm.interactedFormName"] = c.getAttribute("name");
      e["gtm.interactedFormLength"] = c.length;
      e["gtm.interactedFormField"] = d;
      e["gtm.interactedFormFieldPosition"] = Yx(c, d, "gtmFormInteractFieldId");
      e["gtm.interactSequenceNumber"] = a.Xb;
      e["gtm.interactedFormFieldId"] = d.id;
      e["gtm.interactedFormFieldName"] = d.getAttribute("name");
      e["gtm.interactedFormFieldType"] = d.getAttribute("type");
      for (var g = 0; g < b.length; g++) b[g](e);
      a.Xb++;
      a.Fa = null;
    },
    Cz = function (a, b, c) {
      c ? a.Fa = z.setTimeout(function () {
        Az(a, b);
      }, c) : Az(a, b);
    },
    Bz = function (a, b, c) {
      var d = a.dataset[b];
      if (d) return d;
      d = String(c());
      return a.dataset[b] = d;
    };
  function Ez(a, b) {
    K(J(this), ["callback:!Fn", "options:?*"], arguments);
    var c = pd(b) || {},
      d = Number(c.interval);
    if (!d || 0 > d) d = 0;
    var e = pd(a),
      f;
    Rx("pix.fil", "init") ? f = Rx("pix.fil", "reg") : (zz(), f = Dz, Px("pix.fil", "reg", Dz), Px("pix.fil", "init", !0));
    f(d, e);
  }
  Ez.D = "internal.addFormInteractionListener";
  var Gz = function (a, b, c) {
      var d = Nx(a, "gtm.formSubmit");
      d["gtm.interactedFormName"] = a.getAttribute("name");
      d["gtm.interactedFormLength"] = a.length;
      d["gtm.willOpenInCurrentWindow"] = !b && Fz(a);
      c && c.value && (d["gtm.formSubmitButtonText"] = c.value);
      var e = a.action;
      e && e.tagName && (e = a.cloneNode(!1).action);
      d["gtm.elementUrl"] = e;
      d["gtm.formCanceled"] = b;
      return d;
    },
    Hz = function (a, b) {
      var c = Rx("pix.fsl", a ? "nv.mwt" : "mwt", 0);
      z.setTimeout(b, c);
    },
    Iz = function (a, b, c, d, e) {
      var f = Rx("pix.fsl", c ? "nv.mwt" : "mwt", 0),
        g = Rx("pix.fsl", c ? "runIfCanceled" : "runIfUncanceled", []);
      if (!g.length) return !0;
      var k = Gz(a, c, e);
      M(121);
      if ("https://www.facebook.com/tr/" === k["gtm.elementUrl"]) return M(122), !0;
      if (d && f) {
        for (var m = bb(b, g.length), n = 0; n < g.length; ++n) g[n](k, m);
        return m.done;
      }
      for (var p = 0; p < g.length; ++p) g[p](k, function () {});
      return !0;
    },
    Jz = function () {
      var a = [],
        b = function (c) {
          return Fa(a, function (d) {
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
    Fz = function (a) {
      var b = Vc(a, "target");
      return b && "_self" !== b && "_parent" !== b && "_top" !== b ? !1 : !0;
    },
    Kz = function () {
      var a = Jz(),
        b = HTMLFormElement.prototype.submit;
      Nc(C, "click", function (c) {
        var d = c.target;
        if (d && (d = Tc(d, ["button", "input"], 100)) && ("submit" == d.type || "image" == d.type) && d.name && Qc(d, "value")) {
          var e = Xx(d);
          e && a.store(e, d);
        }
      }, !1);
      Nc(C, "submit", function (c) {
        var d = c.target;
        if (!d) return c.returnValue;
        var e = c.defaultPrevented || !1 === c.returnValue,
          f = Fz(d) && !e,
          g = a.get(d),
          k = !0,
          m = function () {
            if (k) {
              var n,
                p = {};
              g && (n = C.createElement("input"), n.type = "hidden", n.name = g.name, n.value = g.value, d.appendChild(n), g.hasAttribute("formaction") && (p.action = d.getAttribute("action"), nc(d, xc(g.getAttribute("formaction")))), g.hasAttribute("formenctype") && (p.enctype = d.getAttribute("enctype"), d.setAttribute("enctype", g.getAttribute("formenctype"))), g.hasAttribute("formmethod") && (p.method = d.getAttribute("method"), d.setAttribute("method", g.getAttribute("formmethod"))), g.hasAttribute("formvalidate") && (p.validate = d.getAttribute("validate"), d.setAttribute("validate", g.getAttribute("formvalidate"))), g.hasAttribute("formtarget") && (p.target = d.getAttribute("target"), d.setAttribute("target", g.getAttribute("formtarget"))));
              b.call(d);
              n && (d.removeChild(n), p.hasOwnProperty("action") && nc(d, p.action), p.hasOwnProperty("enctype") && d.setAttribute("enctype", p.enctype), p.hasOwnProperty("method") && d.setAttribute("method", p.method), p.hasOwnProperty("validate") && d.setAttribute("validate", p.validate), p.hasOwnProperty("target") && d.setAttribute("target", p.target));
            }
          };
        if (Iz(d, m, e, f, g)) return k = !1, c.returnValue;
        Hz(e, m);
        e || (c.preventDefault && c.preventDefault(), c.returnValue = !1);
        return !1;
      }, !1);
      HTMLFormElement.prototype.submit = function () {
        var c = this,
          d = !0,
          e = function () {
            d && b.call(c);
          };
        Iz(c, e, !1, Fz(c)) ? (b.call(c), d = !1) : Hz(!1, e);
      };
    };
  function Lz(a, b) {
    K(J(this), ["callback:!Fn", "options:?PixieMap"], arguments);
    var c = pd(b) || {},
      d = c.waitForCallbacks,
      e = c.waitForCallbacksTimeout,
      f = c.checkValidation;
    e = e && 0 < e ? e : 2E3;
    var g = pd(a);
    if (d) {
      var k = function (n) {
        return Math.max(e, n);
      };
      Qx("pix.fsl", "mwt", k, 0);
      f || Qx("pix.fsl", "nv.mwt", k, 0);
    }
    var m = function (n) {
      n.push(g);
      return n;
    };
    Qx("pix.fsl", "runIfUncanceled", m, []);
    f || Qx("pix.fsl", "runIfCanceled", m, []);
    Rx("pix.fsl", "init") || (Kz(), Px("pix.fsl", "init", !0));
  }
  Lz.D = "internal.addFormSubmitListener";
  function Qz(a) {}
  Qz.D = "internal.addGaSendListener";
  var Rz = function (a, b) {
    this.tagId = a;
    this.h = b;
  };
  function Sz(a, b, c) {
    var d = this;
  }
  Sz.D = "internal.loadGoogleTag";
  function Tz(a, b, c) {}
  Tz.D = "internal.addGoogleTagRestriction";
  var Uz = {},
    Vz = [];
  var bA = function (a, b) {};
  bA.D = "internal.addHistoryChangeListener";
  function cA(a, b, c) {}
  cA.M = "addWindowEventListener";
  function dA(a, b) {
    return !0;
  }
  dA.M = "aliasInWindow";
  function eA(a, b, c) {}
  eA.D = "internal.appendRemoteConfigParameter";
  function fA() {
    var a = 2;
    return a;
  }
  ;
  function gA(a, b) {
    var c;
    return c;
  }
  gA.M = "callInWindow";
  function hA(a) {}
  hA.M = "callLater";
  function iA(a) {}
  iA.D = "callOnDomReady";
  function jA(a) {}
  jA.D = "callOnWindowLoad";
  function kA(a) {
    var b;
    return b;
  }
  kA.D = "internal.computeGtmParameter";
  function lA(a, b) {
    var c;
    var d = od(c, this.h, fA());
    void 0 === d && void 0 !== c && M(45);
    return d;
  }
  lA.M = "copyFromDataLayer";
  function mA(a) {
    var b;
    return b;
  }
  mA.M = "copyFromWindow";
  function nA(a, b) {
    var c;
    K(J(this), ["preHit:!PixieMap", "dustOptions:?PixieMap"], arguments);
    var d = pd(b) || {},
      e = pd(a, this.h, 1).nj(),
      f = e.s;
    d.omitEventContext && (f = kl(new $k(e.s.eventId, e.s.priorityId)));
    var g = new vp(e.target, e.eventName, f);
    d.omitHitData || lb(e.h, g.h);
    d.omitMetadata ? g.metadata = {} : lb(e.metadata, g.metadata);
    g.isAborted = e.isAborted;
    c = od(xp(g), this.h, 1);
    return c;
  }
  nA.D = "internal.copyPreHit";
  function oA(a, b) {
    var c = null,
      d = fA();
    return od(c, this.h, d);
  }
  oA.M = "createArgumentsQueue";
  function pA(a) {
    var b;
    return od(b, this.h, fA());
  }
  pA.M = "createQueue";
  function qA(a, b) {
    var c = null;
    return c;
  }
  qA.D = "internal.createRegex";
  function rA(a) {
    if (!a) return {};
    var b = a.Xk;
    return Yt(b.type, b.index, b.name);
  }
  function sA(a) {
    return a ? {
      originatingEntity: rA(a)
    } : {};
  }
  ;
  function tA(a) {}
  tA.D = "internal.declareConsentState";
  function uA(a) {
    var b = "";
    return b;
  }
  uA.D = "internal.decodeUrlHtmlEntities";
  function vA(a) {
    var b;
    return b;
  }
  vA.D = "internal.detectUserProvidedData";
  function BA(a, b) {
    return b;
  }
  BA.D = "internal.enableAutoEventOnElementVisibility";
  function CA() {}
  CA.D = "internal.enableAutoEventOnError";
  var DA = {},
    EA = [],
    FA = {},
    GA = 0,
    HA = 0;
  var JA = function () {
      l(FA, function (a, b) {
        var c = DA[a];
        c && l(b, function (d, e) {
          IA(e, c);
        });
      });
    },
    MA = function (a, b) {
      var c = "" + b;
      if (DA[c]) DA[c].push(a);else {
        var d = [a];
        DA[c] = d;
        var e = FA[c];
        e || (e = {}, FA[c] = e);
        EA.push(function (f) {
          var g = f.target;
          if (g) {
            var k = Xx(g);
            if (k) {
              var m = KA(k, "gtmFormInteractId", function () {
                  return GA++;
                }),
                n = KA(g, "gtmFormInteractFieldId", function () {
                  return HA++;
                });
              if (null !== m && null !== n) {
                var p = e[m];
                p ? (p.Fa && (z.clearTimeout(p.Fa), p.la.getAttribute("data-gtm-form-interact-field-id") !== n && IA(p, d)), p.la = g, LA(p, d, b)) : (e[m] = {
                  form: k,
                  la: g,
                  Xb: 0,
                  Fa: null
                }, LA(e[m], d, b));
              }
            }
          }
        });
      }
    },
    IA = function (a, b) {
      var c = a.form,
        d = a.la,
        e = Nx(c, "gtm.formInteract", b),
        f = c.action;
      f && f.tagName && (f = c.cloneNode(!1).action);
      e["gtm.elementUrl"] = f;
      e["gtm.interactedFormName"] = null != c.getAttribute("name") ? c.getAttribute("name") : void 0;
      e["gtm.interactedFormLength"] = c.length;
      e["gtm.interactedFormField"] = d;
      e["gtm.interactedFormFieldId"] = d.id;
      e["gtm.interactedFormFieldName"] = null != d.getAttribute("name") ? d.getAttribute("name") : void 0;
      e["gtm.interactedFormFieldPosition"] = Yx(c, d, "gtmFormInteractFieldId");
      e["gtm.interactedFormFieldType"] = null != d.getAttribute("type") ? d.getAttribute("type") : void 0;
      e["gtm.interactSequenceNumber"] = a.Xb;
      Ww(e);
      a.Xb++;
      a.Fa = null;
    },
    LA = function (a, b, c) {
      c ? a.Fa = z.setTimeout(function () {
        IA(a, b);
      }, c) : IA(a, b);
    },
    KA = function (a, b, c) {
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
  function NA(a, b) {
    var c = this;
    K(J(this), ["options:?PixieMap", "triggerId:?*"], arguments);
    Q(84) ? jz([function () {
      return L(c, "detect_form_interaction_events");
    }]) : jz([function () {
      return L(c, "process_dom_events", "document", "change");
    }, function () {
      return L(c, "process_dom_events", "window", "pagehide");
    }]);
    b = Tx(b);
    var d = a && Number(a.get("interval"));
    0 < d && isFinite(d) || (d = 0);
    if (Rx("fil", "init", !1)) {
      var e = Rx("fil", "reg");
      if (e) e(b, d);else throw Error("Failed to register trigger: " + b);
    } else Nc(C, "change", function (f) {
      for (var g = 0; g < EA.length; g++) EA[g](f);
    }), Nc(z, "pagehide", function () {
      JA();
    }), MA(b, d), Px("fil", "reg", MA), Px("fil", "init", !0);
    return b;
  }
  NA.D = "internal.enableAutoEventOnFormInteraction";
  var OA = function (a, b, c, d, e) {
      var f = Rx("fsl", c ? "nv.mwt" : "mwt", 0),
        g;
      g = c ? Rx("fsl", "nv.ids", []) : Rx("fsl", "ids", []);
      if (!g.length) return !0;
      var k = Nx(a, "gtm.formSubmit", g),
        m = a.action;
      m && m.tagName && (m = a.cloneNode(!1).action);
      M(121);
      if ("https://www.facebook.com/tr/" === m) return M(122), !0;
      k["gtm.elementUrl"] = m;
      k["gtm.formCanceled"] = c;
      null != a.getAttribute("name") && (k["gtm.interactedFormName"] = a.getAttribute("name"));
      e && (k["gtm.formSubmitElement"] = e, k["gtm.formSubmitElementText"] = e.value);
      if (d && f) {
        if (!Xw(k, Yw(b, f), f)) return !1;
      } else Xw(k, function () {}, f || 2E3);
      return !0;
    },
    PA = function () {
      var a = [],
        b = function (c) {
          return Fa(a, function (d) {
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
    QA = function (a) {
      var b = a.target;
      return b && "_self" !== b && "_parent" !== b && "_top" !== b ? !1 : !0;
    },
    RA = function () {
      var a = PA(),
        b = HTMLFormElement.prototype.submit;
      Nc(C, "click", function (c) {
        var d = c.target;
        if (d && (d = Tc(d, ["button", "input"], 100)) && ("submit" == d.type || "image" == d.type) && d.name && Qc(d, "value")) {
          var e = Xx(d);
          e && a.store(e, d);
        }
      }, !1);
      Nc(C, "submit", function (c) {
        var d = c.target;
        if (!d) return c.returnValue;
        var e = c.defaultPrevented || !1 === c.returnValue,
          f = QA(d) && !e,
          g = a.get(d),
          k = !0;
        if (OA(d, function () {
          if (k) {
            var m,
              n = {};
            g && (m = C.createElement("input"), m.type = "hidden", m.name = g.name, m.value = g.value, d.appendChild(m), g.hasAttribute("formaction") && (n.action = d.getAttribute("action"), nc(d, xc(g.getAttribute("formaction")))), g.hasAttribute("formenctype") && (n.enctype = d.getAttribute("enctype"), d.setAttribute("enctype", g.getAttribute("formenctype"))), g.hasAttribute("formmethod") && (n.method = d.getAttribute("method"), d.setAttribute("method", g.getAttribute("formmethod"))), g.hasAttribute("formvalidate") && (n.validate = d.getAttribute("validate"), d.setAttribute("validate", g.getAttribute("formvalidate"))), g.hasAttribute("formtarget") && (n.target = d.getAttribute("target"), d.setAttribute("target", g.getAttribute("formtarget"))));
            b.call(d);
            m && (d.removeChild(m), n.hasOwnProperty("action") && nc(d, n.action), n.hasOwnProperty("enctype") && d.setAttribute("enctype", n.enctype), n.hasOwnProperty("method") && d.setAttribute("method", n.method), n.hasOwnProperty("validate") && d.setAttribute("validate", n.validate), n.hasOwnProperty("target") && d.setAttribute("target", n.target));
          }
        }, e, f, g)) k = !1;else return e || (c.preventDefault && c.preventDefault(), c.returnValue = !1), !1;
        return c.returnValue;
      }, !1);
      HTMLFormElement.prototype.submit = function () {
        var c = this,
          d = !0;
        OA(c, function () {
          d && b.call(c);
        }, !1, QA(c)) && (b.call(c), d = !1);
      };
    };
  function SA(a, b) {
    var c = this;
    K(J(this), ["options:?PixieMap", "triggerId:?*"], arguments);
    var d = a && a.get("waitForTags");
    jz([function () {
      return L(c, "detect_form_submit_events", {
        waitForTags: !!d
      });
    }]);
    var e = a && a.get("checkValidation");
    b = Tx(b);
    if (d) {
      var f = Number(a.get("waitForTagsTimeout"));
      0 < f && isFinite(f) || (f = 2E3);
      var g = function (m) {
        return Math.max(f, m);
      };
      Qx("fsl", "mwt", g, 0);
      e || Qx("fsl", "nv.mwt", g, 0);
    }
    var k = function (m) {
      m.push(b);
      return m;
    };
    Qx("fsl", "ids", k, []);
    e || Qx("fsl", "nv.ids", k, []);
    Rx("fsl", "init", !1) || (RA(), Px("fsl", "init", !0));
    return b;
  }
  SA.D = "internal.enableAutoEventOnFormSubmit";
  function XA() {
    var a = this;
  }
  XA.D = "internal.enableAutoEventOnGaSend";
  var YA = {},
    ZA = [];
  var aB = function (a, b) {
      var c = "" + b;
      if (YA[c]) YA[c].push(a);else {
        var d = [a];
        YA[c] = d;
        var e = $A(),
          f = -1;
        ZA.push(function (g) {
          0 <= f && z.clearTimeout(f);
          b ? f = z.setTimeout(function () {
            e(g, d);
            f = -1;
          }, b) : e(g, d);
        });
      }
    },
    $A = function () {
      var a = z.location.href,
        b = {
          source: null,
          state: z.history.state || null,
          url: Bn(Cn(a)),
          P: An(Cn(a), "fragment")
        };
      return function (c, d) {
        var e = b,
          f = {};
        f[e.source] = !0;
        f[c.source] = !0;
        if (!f.popstate || !f.hashchange || e.P != c.P) {
          var g = {},
            k = (g.event = "gtm.historyChange-v2", g["gtm.historyChangeSource"] = c.source, g["gtm.oldUrlFragment"] = b.P, g["gtm.newUrlFragment"] = c.P, g["gtm.oldHistoryState"] = b.state, g["gtm.newHistoryState"] = c.state, g["gtm.oldUrl"] = b.url, g["gtm.newUrl"] = c.url, g["gtm.triggers"] = d.join(","), g);
          b = c;
          Ww(k);
        }
      };
    },
    bB = function (a, b) {
      var c = z.history,
        d = c[a];
      if (Ba(d)) try {
        c[a] = function (e, f, g) {
          d.apply(c, [].slice.call(arguments, 0));
          var k = z.location.href;
          b({
            source: a,
            state: e,
            url: Bn(Cn(k)),
            P: An(Cn(k), "fragment")
          });
        };
      } catch (e) {}
    },
    dB = function (a) {
      z.addEventListener("popstate", function (b) {
        var c = cB(b);
        a({
          source: "popstate",
          state: b.state,
          url: Bn(Cn(c)),
          P: An(Cn(c), "fragment")
        });
      });
    },
    eB = function (a) {
      z.addEventListener("hashchange", function (b) {
        var c = cB(b);
        a({
          source: "hashchange",
          state: null,
          url: Bn(Cn(c)),
          P: An(Cn(c), "fragment")
        });
      });
    },
    cB = function (a) {
      return a.target && a.target.location && a.target.location.href ? a.target.location.href : z.location.href;
    };
  function fB(a, b) {
    var c = this;
    K(J(this), ["options:?PixieMap", "triggerId:?*"], arguments);
    jz([function () {
      return L(c, "process_dom_events", "window", "popstate");
    }, function () {
      return L(c, "process_dom_events", "window", "pushstate");
    }]);
    b = Tx(b);
    var d = Number(a && a.get("interval"));
    0 < d && isFinite(d) || (d = 0);
    if (Rx("ehl", "init", !1)) {
      var e = Rx("ehl", "reg");
      e && e(b, d);
    } else {
      var f = function (g) {
        for (var k = 0; k < ZA.length; k++) ZA[k](g);
      };
      eB(f);
      dB(f);
      bB("pushState", f);
      bB("replaceState", f);
      aB(b, d);
      Px("ehl", "reg", aB);
      Px("ehl", "init", !0);
    }
    return b;
  }
  fB.D = "internal.enableAutoEventOnHistoryChange";
  var gB = function (a, b) {
      if (2 === a.which || a.ctrlKey || a.shiftKey || a.altKey || a.metaKey) return !1;
      var c = Vc(b, "href"),
        d = c.indexOf("#"),
        e = Vc(b, "target");
      if (e && "_self" !== e && "_parent" !== e && "_top" !== e || 0 === d) return !1;
      if (0 < d) {
        var f = Bn(Cn(c)),
          g = Bn(Cn(z.location.href));
        return f !== g;
      }
      return !0;
    },
    hB = function (a, b) {
      for (var c = An(Cn((b.attributes && b.attributes.formaction ? b.formAction : "") || b.action || Vc(b, "href") || b.src || b.code || b.codebase || ""), "host"), d = 0; d < a.length; d++) try {
        if (new RegExp(a[d]).test(c)) return !1;
      } catch (e) {}
      return !0;
    },
    iB = function () {
      var a = 0,
        b = function (c) {
          var d = c.target;
          if (d && 3 !== c.which && !(c.jh || c.timeStamp && c.timeStamp === a)) {
            a = c.timeStamp;
            d = Tc(d, ["a", "area"], 100);
            if (!d) return c.returnValue;
            var e = c.defaultPrevented || !1 === c.returnValue,
              f = Rx("aelc", e ? "nv.mwt" : "mwt", 0),
              g;
            g = e ? Rx("aelc", "nv.ids", []) : Rx("aelc", "ids", []);
            for (var k = [], m = 0; m < g.length; m++) {
              var n = g[m],
                p = Rx("aelc", "aff.map", {})[n];
              p && !hB(p, d) || k.push(n);
            }
            if (k.length) {
              var q = gB(c, d),
                r = Nx(d, "gtm.linkClick", k);
              r["gtm.elementText"] = Rc(d);
              r["gtm.willOpenInNewWindow"] = !q;
              if (q && !e && f && d.href) {
                var t = !!Fa(String(Vc(d, "rel") || "").split(" "), function (x) {
                    return "noreferrer" === x.toLowerCase();
                  }),
                  u = z[(Vc(d, "target") || "_self").substring(1)],
                  v = !0,
                  w = Yw(function () {
                    var x;
                    if (x = v && u) {
                      var y;
                      a: if (t) {
                        var A;
                        try {
                          A = new MouseEvent(c.type, {
                            bubbles: !0
                          });
                        } catch (B) {
                          if (!C.createEvent) {
                            y = !1;
                            break a;
                          }
                          A = C.createEvent("MouseEvents");
                          A.initEvent(c.type, !0, !0);
                        }
                        A.jh = !0;
                        c.target.dispatchEvent(A);
                        y = !0;
                      } else y = !1;
                      x = !y;
                    }
                    x && (u.location.href = Vc(d, "href"));
                  }, f);
                if (Xw(r, w, f)) v = !1;else return c.preventDefault && c.preventDefault(), c.returnValue = !1;
              } else Xw(r, function () {}, f || 2E3);
              return !0;
            }
          }
        };
      Nc(C, "click", b, !1);
      Nc(C, "auxclick", b, !1);
    };
  function jB(a, b) {
    var c = this;
    K(J(this), ["dustOptions:?PixieMap", "triggerId:?*"], arguments);
    var d = pd(a);
    jz([function () {
      return L(c, "detect_link_click_events", d);
    }]);
    var e = d && !!d.waitForTags,
      f = d && !!d.checkValidation,
      g = d ? d.affiliateDomains : void 0;
    b = Tx(b);
    if (e) {
      var k = Number(d.waitForTagsTimeout);
      0 < k && isFinite(k) || (k = 2E3);
      var m = function (p) {
        return Math.max(k, p);
      };
      Qx("aelc", "mwt", m, 0);
      f || Qx("aelc", "nv.mwt", m, 0);
    }
    var n = function (p) {
      p.push(b);
      return p;
    };
    Qx("aelc", "ids", n, []);
    f || Qx("aelc", "nv.ids", n, []);
    g && Qx("aelc", "aff.map", function (p) {
      p[b] = g;
      return p;
    }, {});
    Rx("aelc", "init", !1) || (iB(), Px("aelc", "init", !0));
    return b;
  }
  jB.D = "internal.enableAutoEventOnLinkClick";
  var kB, lB;
  var mB = function (a) {
      return Rx("sdl", a, {});
    },
    nB = function (a, b, c) {
      b && (Array.isArray(a) || (a = [a]), Qx("sdl", c, function (d) {
        for (var e = 0; e < a.length; e++) {
          var f = String(a[e]);
          d.hasOwnProperty(f) || (d[f] = []);
          d[f].push(b);
        }
        return d;
      }, {}));
    },
    qB = function () {
      var a = 250,
        b = !1;
      C.scrollingElement && C.documentElement && z.addEventListener && (a = 50, b = !0);
      var c = 0,
        d = !1,
        e = function () {
          d ? c = z.setTimeout(e, a) : (c = 0, oB(), Rx("sdl", "init", !1) && !pB() && (Oc(z, "scroll", f), Oc(z, "resize", f), Px("sdl", "init", !1)));
          d = !1;
        },
        f = function () {
          b && kB();
          c ? d = !0 : (c = z.setTimeout(e, a), Px("sdl", "pending", !0));
        };
      return f;
    },
    oB = function () {
      var a = kB(),
        b = a.Ug,
        c = a.Vg,
        d = b / lB.scrollWidth * 100,
        e = c / lB.scrollHeight * 100;
      rB(b, "horiz.pix", "PIXELS", "horizontal");
      rB(d, "horiz.pct", "PERCENT", "horizontal");
      rB(c, "vert.pix", "PIXELS", "vertical");
      rB(e, "vert.pct", "PERCENT", "vertical");
      Px("sdl", "pending", !1);
    },
    rB = function (a, b, c, d) {
      var e = mB(b),
        f = {},
        g;
      for (g in e) if (f = {
        jd: f.jd
      }, f.jd = g, e.hasOwnProperty(f.jd)) {
        var k = Number(f.jd);
        if (!(a < k)) {
          var m = {};
          Ww((m.event = "gtm.scrollDepth", m["gtm.scrollThreshold"] = k, m["gtm.scrollUnits"] = c.toLowerCase(), m["gtm.scrollDirection"] = d, m["gtm.triggers"] = e[f.jd].join(","), m));
          Qx("sdl", b, function (n) {
            return function (p) {
              delete p[n.jd];
              return p;
            };
          }(f), {});
        }
      }
    },
    tB = function () {
      Qx("sdl", "scr", function (a) {
        a || (a = C.scrollingElement || C.body && C.body.parentNode);
        return lB = a;
      }, !1);
      Qx("sdl", "depth", function (a) {
        a || (a = sB());
        return kB = a;
      }, !1);
    },
    sB = function () {
      var a = 0,
        b = 0;
      return function () {
        var c = Yp(),
          d = c.height;
        a = Math.max(lB.scrollLeft + c.width, a);
        b = Math.max(lB.scrollTop + d, b);
        return {
          Ug: a,
          Vg: b
        };
      };
    },
    pB = function () {
      return !!(Object.keys(mB("horiz.pix")).length || Object.keys(mB("horiz.pct")).length || Object.keys(mB("vert.pix")).length || Object.keys(mB("vert.pct")).length);
    };
  function uB(a, b) {
    var c = this;
    K(J(this), ["options:!PixieMap", "triggerId:?*"], arguments);
    jz([function () {
      return L(c, "process_dom_events", "window", "resize");
    }, function () {
      return L(c, "process_dom_events", "window", "scroll");
    }]);
    tB();
    if (!lB) return;
    b = Tx(b);
    var d = pd(a);
    switch (d.horizontalThresholdUnits) {
      case "PIXELS":
        nB(d.horizontalThresholds, b, "horiz.pix");
        break;
      case "PERCENT":
        nB(d.horizontalThresholds, b, "horiz.pct");
    }
    switch (d.verticalThresholdUnits) {
      case "PIXELS":
        nB(d.verticalThresholds, b, "vert.pix");
        break;
      case "PERCENT":
        nB(d.verticalThresholds, b, "vert.pct");
    }
    Rx("sdl", "init", !1) ? Rx("sdl", "pending", !1) || F(function () {
      return oB();
    }) : (Px("sdl", "init", !0), Px("sdl", "pending", !0), F(function () {
      oB();
      if (pB()) {
        var e = qB();
        Nc(z, "scroll", e);
        Nc(z, "resize", e);
      } else Px("sdl", "init", !1);
    }));
    return b;
  }
  uB.D = "internal.enableAutoEventOnScroll";
  var lc = da(["data-gtm-yt-inspected-"]),
    vB = ["www.youtube.com", "www.youtube-nocookie.com"],
    wB,
    xB = !1;
  var yB = function (a, b, c) {
      var d = a.map(function (g) {
        return {
          Aa: g,
          Ke: g,
          Ie: void 0
        };
      });
      if (!b.length) return d;
      var e = b.map(function (g) {
        return {
          Aa: g * c,
          Ke: void 0,
          Ie: g
        };
      });
      if (!d.length) return e;
      var f = d.concat(e);
      f.sort(function (g, k) {
        return g.Aa - k.Aa;
      });
      return f;
    },
    zB = function (a) {
      a = void 0 === a ? [] : a;
      for (var b = [], c = 0; c < a.length; c++) 0 > a[c] || b.push(a[c]);
      b.sort(function (d, e) {
        return d - e;
      });
      return b;
    },
    AB = function (a) {
      a = void 0 === a ? [] : a;
      for (var b = [], c = 0; c < a.length; c++) 100 < a[c] || 0 > a[c] || (b[c] = a[c] / 100);
      b.sort(function (d, e) {
        return d - e;
      });
      return b;
    },
    BB = function (a, b) {
      var c, d;
      function e() {
        t = my(function () {
          return {
            url: w,
            title: x,
            Wg: v,
            ij: a.getCurrentTime(),
            playbackRate: y
          };
        }, b.jb, a.getIframe());
        v = 0;
        x = w = "";
        y = 1;
        return f;
      }
      function f(G) {
        switch (G) {
          case 1:
            v = Math.round(a.getDuration());
            w = a.getVideoUrl();
            if (a.getVideoData) {
              var E = a.getVideoData();
              x = E ? E.title : "";
            }
            y = a.getPlaybackRate();
            b.Rg ? Ww(t.createEvent("start")) : t.Wc();
            u = yB(b.Bh, b.Ah, a.getDuration());
            return g(G);
          default:
            return f;
        }
      }
      function g() {
        A = a.getCurrentTime();
        B = Pa().getTime();
        t.Bj();
        r();
        return k;
      }
      function k(G) {
        var E;
        switch (G) {
          case 0:
            return n(G);
          case 2:
            E = "pause";
          case 3:
            var I = a.getCurrentTime() - A;
            E = 1 < Math.abs((Pa().getTime() - B) / 1E3 * y - I) ? "seek" : E || "buffering";
            a.getCurrentTime() && (b.Qg ? Ww(t.createEvent(E)) : t.Wc());
            q();
            return m;
          case -1:
            return e(G);
          default:
            return k;
        }
      }
      function m(G) {
        switch (G) {
          case 0:
            return n(G);
          case 1:
            return g(G);
          case -1:
            return e(G);
          default:
            return m;
        }
      }
      function n() {
        for (; d;) {
          var G = c;
          z.clearTimeout(d);
          G();
        }
        b.Pg && Ww(t.createEvent("complete", 1));
        return e(-1);
      }
      function p() {}
      function q() {
        d && (z.clearTimeout(d), d = 0, c = p);
      }
      function r() {
        if (u.length && 0 !== y) {
          var G = -1,
            E;
          do {
            E = u[0];
            if (E.Aa > a.getDuration()) return;
            G = (E.Aa - a.getCurrentTime()) / y;
            if (0 > G && (u.shift(), 0 === u.length)) return;
          } while (0 > G);
          c = function () {
            d = 0;
            c = p;
            0 < u.length && u[0].Aa === E.Aa && (u.shift(), Ww(t.createEvent("progress", E.Ie, E.Ke)));
            r();
          };
          d = z.setTimeout(c, 1E3 * G);
        }
      }
      var t,
        u = [],
        v,
        w,
        x,
        y,
        A,
        B,
        D = e(-1);
      d = 0;
      c = p;
      return {
        onStateChange: function (G) {
          D = D(G);
        },
        onPlaybackRateChange: function (G) {
          A = a.getCurrentTime();
          B = Pa().getTime();
          t.Wc();
          y = G;
          q();
          r();
        }
      };
    },
    DB = function (a) {
      F(function () {
        function b() {
          for (var d = c.getElementsByTagName("iframe"), e = d.length, f = 0; f < e; f++) CB(d[f], a);
        }
        var c = C;
        b();
        ay(b);
      });
    },
    CB = function (a, b) {
      if (!a.getAttribute("data-gtm-yt-inspected-" + b.jb) && (kc(a, "data-gtm-yt-inspected-" + b.jb), EB(a, b.se))) {
        a.id || (a.id = FB());
        var c = z.YT,
          d = c.get(a.id);
        d || (d = new c.Player(a.id));
        var e = BB(d, b),
          f = {},
          g;
        for (g in e) f = {
          De: f.De
        }, f.De = g, e.hasOwnProperty(f.De) && d.addEventListener(f.De, function (k) {
          return function (m) {
            return e[k.De](m.data);
          };
        }(f));
      }
    },
    EB = function (a, b) {
      var c = a.getAttribute("src");
      if (GB(c, "embed/")) {
        if (0 < c.indexOf("enablejsapi=1")) return !0;
        if (b) {
          var d;
          var e = -1 !== c.indexOf("?") ? "&" : "?";
          -1 < c.indexOf("origin=") ? d = c + e + "enablejsapi=1" : (wB || (wB = C.location.protocol + "//" + C.location.hostname, C.location.port && (wB += ":" + C.location.port)), d = c + e + "enablejsapi=1&origin=" + encodeURIComponent(wB));
          var f;
          f = Hb(d);
          a.src = Fb(f).toString();
          return !0;
        }
      }
      return !1;
    },
    GB = function (a, b) {
      if (!a) return !1;
      for (var c = 0; c < vB.length; c++) if (0 <= a.indexOf("//" + vB[c] + "/" + b)) return !0;
      return !1;
    },
    FB = function () {
      var a = Math.round(1E9 * Math.random()) + "";
      return C.getElementById(a) ? FB() : a;
    };
  function HB(a, b) {
    var c = this;
    K(J(this), ["dustOptions:!PixieMap", "triggerId:?*"], arguments);
    Q(81) ? jz([function () {
      return L(c, "detect_youtube_activity_events", {
        fixMissingApi: !!a.get("fixMissingApi")
      });
    }]) : jz([function () {
      return L(c, "process_dom_events", "element", "onStateChange");
    }, function () {
      return L(c, "process_dom_events", "element", "onPlaybackRateChange");
    }]);
    b = Tx(b);
    var d = !!a.get("captureStart"),
      e = !!a.get("captureComplete"),
      f = !!a.get("capturePause"),
      g = AB(pd(a.get("progressThresholdsPercent"))),
      k = zB(pd(a.get("progressThresholdsTimeInSeconds"))),
      m = !!a.get("fixMissingApi");
    if (!(d || e || f || g.length || k.length)) return;
    var n = {
        Rg: d,
        Pg: e,
        Qg: f,
        Ah: g,
        Bh: k,
        se: m,
        jb: b
      },
      p = z.YT,
      q = function () {
        DB(n);
      };
    if (p) return p.ready && p.ready(q), b;
    var r = z.onYouTubeIframeAPIReady;
    z.onYouTubeIframeAPIReady = function () {
      r && r();
      q();
    };
    F(function () {
      for (var t = C.getElementsByTagName("script"), u = t.length, v = 0; v < u; v++) {
        var w = t[v].getAttribute("src");
        if (GB(w, "iframe_api") || GB(w, "player_api")) return b;
      }
      for (var x = C.getElementsByTagName("iframe"), y = x.length, A = 0; A < y; A++) if (!xB && EB(x[A], n.se)) return Jc("https://www.youtube.com/iframe_api"), xB = !0, b;
    });
    return b;
  }
  HB.D = "internal.enableAutoEventOnYouTubeActivity";
  var IB;
  function JB(a) {
    var b = !1;
    return b;
  }
  JB.D = "internal.evaluateMatchingRules";
  var mC = function () {
      var a = !0;
      bm(7) && bm(9) && bm(10) || (a = !1);
      return a;
    },
    nC = function () {
      var a = !0;
      bm(3) && bm(4) || (a = !1);
      return a;
    };
  function iD(a, b, c, d) {}
  iD.D = "internal.executeEventProcessor";
  function jD(a) {
    var b = void 0;
    return od(b);
  }
  jD.D = "internal.executeJavascriptString";
  var kD = function (a) {
    var b;
    return b;
  };
  function lD() {
    var a = new qb();
    L(this, "read_container_data"), a.set("containerId", 'G-RZK75Y5YFW'), a.set("version", '1'), a.set("environmentName", ''), a.set("debugMode", bg), a.set("previewMode", dg), a.set("environmentMode", cg), Q(92) && a.set("firstPartyServing", wi || yi), Q(94) && a.set("containerUrl", Dc), a.Bb();
    return a;
  }
  lD.M = "getContainerVersion";
  function mD(a, b) {
    b = void 0 === b ? !0 : b;
    var c;
    return c;
  }
  mD.M = "getCookieValues";
  function nD() {
    return kj();
  }
  nD.D = "internal.getCountryCode";
  function oD() {
    var a = [];
    a = lk();
    return od(a);
  }
  oD.D = "internal.getDestinationIds";
  function pD(a, b) {
    var c = "";
    return c;
  }
  pD.D = "internal.getElementAttribute";
  function qD(a) {
    var b = null;
    return b;
  }
  qD.M = "getElementById";
  function rD(a) {
    var b = "";
    return b;
  }
  rD.D = "internal.getElementInnerText";
  function sD(a, b) {
    var c = null;
    return c;
  }
  sD.D = "internal.getElementProperty";
  function tD(a) {
    var b;
    return b;
  }
  tD.D = "internal.getElementValue";
  function uD(a) {
    var b = 0;
    return b;
  }
  uD.D = "internal.getElementVisibilityRatio";
  function vD(a) {
    var b = null;
    return b;
  }
  vD.D = "internal.getElementsByCssSelector";
  var wD = {};
  wD.deferGaGamLink = Q(65);
  wD.enableAddGoogleTagRestrictionApi = Q(40);
  wD.enableAdsConversionValidation = Q(37);
  wD.enableAdsHistoryChangeEvents = Q(15);
  wD.enableAutoPiiOnPhoneAndAddress = Q(54);
  wD.enableCcdAutoRedaction = Q(41);
  wD.enableCcdPreAutoPiiDetection = Q(19);
  wD.enableConsentDisclosureActivity = Q(60);
  wD.enableDeferAllEnhancedMeasurement = Q(62);
  wD.enableEesPagePath = Q(17);
  wD.enableEuidAutoMode = Q(16);
  wD.enableFormSkipValidation = Q(55);
  wD.enableGa4OnoRemarketing = Q(14);
  wD.enableGetElementAttribute = Q(70);
  wD.enableGetElementInnerText = Q(78);
  wD.enableRemoteDomainListSettingsInPixie = Q(101);
  wD.enableUrlDecodeEventUsage = Q(80);
  wD.includeQueryInEesPagePath = Q(23);
  wD.pixieSetCorePlatformServices = Q(48);
  wD.useEnableAutoEventOnFormApis = Q(40);
  wD.autoPiiEligible = oj();
  function xD() {
    return od(wD);
  }
  xD.D = "internal.getFlags";
  function yD() {
    return new ld(Fx);
  }
  yD.D = "internal.getHtmlId";
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => jsHookAudit.auditHook());
  } else {
    jsHookAudit.auditHook();
  }
  function zD(a, b) {
    var c;
    K(J(this), ["targetId:!string", "name:!string"], arguments);
    var d = up(a) || {};
    c = od(d[b], this.h);
    return c;
  }
  zD.D = "internal.getProductSettingsParameter";
  function AD(a, b) {
    var c;
    K(J(this), ["queryKey:!string", "retrieveAll:?boolean"], arguments);
    L(this, "get_url", "query", a);
    var d = An(Cn(z.location.href), "query"),
      e = xn(d, a, b);
    c = od(e, this.h);
    return c;
  }
  AD.M = "getQueryParameters";
  function BD(a, b) {
    var c;
    return c;
  }
  BD.M = "getReferrerQueryParameters";
  function CD(a) {
    var b = "";
    return b;
  }
  CD.M = "getReferrerUrl";
  function DD() {
    return lj();
  }
  DD.D = "internal.getRegionCode";
  function ED(a, b) {
    var c;
    K(J(this), ["targetId:!string", "name:!string"], arguments);
    var d = Xv(a);
    c = od(d[b], this.h);
    return c;
  }
  ED.D = "internal.getRemoteConfigParameter";
  function FD(a) {
    var b = "";
    K(J(this), ["component:?string"], arguments), L(this, "get_url", a), b = An(Cn(z.location.href), a);
    return b;
  }
  FD.M = "getUrl";
  function GD() {
    L(this, "get_user_agent");
    return Cc.userAgent;
  }
  GD.M = "getUserAgent";
  var HD = function (a) {
      var b = !1;
      b = wp(a, "google_ono", !1);
      return b;
    },
    ID = function (a) {
      if (a.metadata.is_merchant_center || !Bt(a.s)) return !1;
      if (!U(a.s, N.g.Ld)) {
        var b = U(a.s, N.g.Dd);
        return !0 === b || "true" === b;
      }
      return !0;
    },
    JD = function (a) {
      var b = a.metadata.user_data;
      if (kb(b)) return b;
    },
    KD = function (a, b) {
      var c = wp(a, N.g.Bd, a.s.B[N.g.Bd]);
      if (c && void 0 !== c[b || a.eventName]) return c[b || a.eventName];
    },
    LD = function (a, b, c) {
      a.h[N.g.fe] || (a.h[N.g.fe] = {});
      a.h[N.g.fe][b] = c;
    };
  var MD = !1,
    ND = function (a) {
      var b = a.eventName === N.g.ic && Jj() && ID(a),
        c = a.metadata.batch_on_navigation,
        d = a.metadata.is_conversion,
        e = a.metadata.is_session_start,
        f = a.metadata.create_dc_join,
        g = a.metadata.create_google_join,
        k = a.metadata.euid_mode_enabled && !!JD(a);
      return !(!Cc.sendBeacon || d || k || e || f || g || b || !c && MD);
    };
  var OD = function (a) {
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
          a.lh() && (d = Ra() - b);
          return d + c;
        }
      };
    },
    PD = function () {
      this.h = void 0;
      this.B = 0;
      this.isActive = this.isVisible = this.C = !1;
      this.K = this.F = void 0;
    };
  aa = PD.prototype;
  aa.vk = function (a) {
    var b = this;
    if (!this.h) {
      this.C = C.hasFocus();
      this.isVisible = !C.hidden;
      this.isActive = !0;
      var c = function (d, e, f) {
        Nc(d, e, function (g) {
          b.h.stop();
          f(g);
          b.lh() && b.h.start();
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
      ID(a) && -1 === (Cc.userAgent || "").indexOf("Firefox") && -1 === (Cc.userAgent || "").indexOf("FxiOS") && c(z, "beforeunload", function () {
        MD = !0;
      });
      this.Eh();
      this.B = 0;
    }
  };
  aa.Eh = function () {
    this.B += this.yf();
    this.h = OD(this);
    this.lh() && this.h.start();
  };
  aa.Em = function (a) {
    var b = this.yf();
    0 < b && (a.h[N.g.yd] = b);
  };
  aa.wl = function (a) {
    a.h[N.g.yd] = void 0;
    this.Eh();
    this.B = 0;
  };
  aa.lh = function () {
    return this.C && this.isVisible && this.isActive;
  };
  aa.ml = function () {
    return this.B + this.yf();
  };
  aa.yf = function () {
    return this.h && this.h.get() || 0;
  };
  aa.jm = function (a) {
    this.F = a;
  };
  aa.zj = function (a) {
    this.K = a;
  };
  var QD = function (a) {
    yb("GA4_EVENT", a);
  };
  function RD() {
    return z.gaGlobal = z.gaGlobal || {};
  }
  var SD = function () {
      var a = RD();
      a.hid = a.hid || Ga();
      return a.hid;
    },
    TD = function (a, b) {
      var c = RD();
      if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b;
    };
  var UD = function (a, b, c) {
      var d = a.metadata.client_id_source;
      if (void 0 === d || c <= d) a.h[N.g.Za] = b, a.metadata.client_id_source = c;
    },
    XD = function (a, b) {
      var c;
      var d = b.metadata.cookie_options,
        e = d.prefix + "_ga",
        f = Fn(d, void 0, void 0, N.g.R);
      if (!1 === U(b.s, N.g.rb) && VD(b) === a) c = !0;else {
        var g = Zm(a, WD[0], d.domain, d.path);
        c = 1 !== Gm(e, g, f);
      }
      return c;
    },
    VD = function (a) {
      var b = a.metadata.cookie_options,
        c = b.prefix + "_ga",
        d = Ym(c, b.domain, b.path, WD, N.g.R);
      if (!d) {
        var e = String(U(a.s, N.g.kc, ""));
        e && e != c && (d = Ym(e, b.domain, b.path, WD, N.g.R));
      }
      return d;
    },
    WD = ["GA1"],
    YD = function (a, b) {
      var c = a.h[N.g.Za];
      if (U(a.s, N.g.vb) && U(a.s, N.g.Jb) || b && c === b) return c;
      if (c) {
        c = "" + c;
        if (!XD(c, a)) return M(31), a.isAborted = !0, "";
        TD(c, S(N.g.R));
        return c;
      }
      M(32);
      a.isAborted = !0;
      return "";
    };
  var aE = function (a, b, c) {
      if (!b) return a;
      if (!a) return b;
      var d = ZD(a);
      if (!d) return b;
      var e,
        f = La(null != (e = U(c.s, N.g.Sc)) ? e : 30);
      if (!(Math.floor(c.metadata.event_start_timestamp_ms / 1E3) > d.Fe + 60 * f)) return a;
      var g = ZD(b);
      if (!g) return a;
      g.xc = d.xc + 1;
      var k;
      return null != (k = $D(g.sessionId, g.xc, g.hd, g.Fe, g.ph, g.vc, g.ne)) ? k : b;
    },
    dE = function (a, b) {
      var c = b.metadata.cookie_options,
        d = bE(b, c),
        e = Zm(a, cE[0], c.domain, c.path),
        f = {
          Eb: N.g.R,
          domain: c.domain,
          path: c.path,
          expires: c.Tb ? new Date(Ra() + 1E3 * c.Tb) : void 0,
          flags: c.flags
        };
      Gm(d, void 0, f);
      return 1 !== Gm(d, e, f);
    },
    eE = function (a) {
      var b = a.metadata.cookie_options,
        c = bE(a, b),
        d = Ym(c, b.domain, b.path, cE, N.g.R);
      if (!d) return d;
      var e = xm(c, void 0, void 0, N.g.R);
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
    $D = function (a, b, c, d, e, f, g) {
      if (a && b) {
        var k = [a, b, La(c), d, e];
        k.push(f ? "1" : "0");
        k.push(g || "0");
        return k.join(".");
      }
    },
    cE = ["GS1"],
    bE = function (a, b) {
      return b.prefix + "_ga_" + a.target.O[0];
    },
    ZD = function (a) {
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
            xc: c,
            hd: !!Number(b[2]),
            Fe: d,
            ph: e,
            vc: "1" === b[5],
            ne: "0" !== b[6] ? b[6] : void 0
          };
        }
      }
    },
    fE = function (a) {
      return $D(a.h[N.g.zb], a.h[N.g.Nd], a.h[N.g.Md], Math.floor(a.metadata.event_start_timestamp_ms / 1E3), a.metadata.join_timer_sec || 0, !!a.metadata[N.g.Ve], a.h[N.g.Mc]);
    };
  var gE = function (a) {
      var b = U(a.s, N.g.Da),
        c = a.s.B[N.g.Da];
      if (c === b) return c;
      var d = lb(b);
      c && c[N.g.T] && (d[N.g.T] = (d[N.g.T] || []).concat(c[N.g.T]));
      return d;
    },
    hE = function (a, b) {
      var c = Yn(!0);
      return "1" !== c._up ? {} : {
        clientId: c[a],
        Kf: c[b]
      };
    },
    iE = function (a, b, c) {
      var d = Yn(!0),
        e = d[b];
      e && (UD(a, e, 2), XD(e, a));
      var f = d[c];
      f && dE(f, a);
      return {
        clientId: e,
        Kf: f
      };
    },
    jE = !1,
    kE = function (a) {
      var b = gE(a) || {},
        c = a.metadata.cookie_options,
        d = c.prefix + "_ga",
        e = bE(a, c),
        f = {};
      ho(b[N.g.oc], !!b[N.g.T]) && (f = iE(a, d, e), f.clientId && f.Kf && (jE = !0));
      b[N.g.T] && eo(function () {
        var g = {},
          k = VD(a);
        k && (g[d] = k);
        var m = eE(a);
        m && (g[e] = m);
        var n = xm("FPLC", void 0, void 0, N.g.R);
        n.length && (g._fplc = n[0]);
        return g;
      }, b[N.g.T], b[N.g.Kb], !!b[N.g.wb]);
      return f;
    },
    mE = function (a) {
      if (!U(a.s, N.g.Ab)) return {};
      var b = a.metadata.cookie_options,
        c = b.prefix + "_ga",
        d = bE(a, b);
      fo(function () {
        var e;
        if (S("analytics_storage")) e = {};else {
          var f = {};
          e = (f._up = "1", f[c] = a.h[N.g.Za], f[d] = fE(a), f);
        }
        return e;
      }, 1);
      return !S("analytics_storage") && lE() ? hE(c, d) : {};
    },
    lE = function () {
      var a = zn(z.location, "host"),
        b = zn(Cn(C.referrer), "host");
      return a && b ? a === b || 0 <= a.indexOf("." + b) || 0 <= b.indexOf("." + a) ? !0 : !1 : !1;
    },
    nE = function (a) {
      if (!a) return a;
      var b = String(a);
      b = Xn(b);
      return b = Xn(b, "_ga");
    };
  var oE = function () {
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
  var pE = function (a, b) {
      if (Jj() || Q(45)) a.gcs = im(), Q(49) && (a.gcd = mm(b.s)), b.metadata.is_consent_update && (a.gcu = "1");
      Q(104) && (hm(b.s) && (Q(85) || nC()) ? Q(53) && (a.npa = "0") : a.npa = "1");
    },
    sE = function (a) {
      if (a.metadata.is_merchant_center) return "https://www.merchant-center-analytics.goog/mc/collect";
      var b = zt(Bt(a.s), "/g/collect");
      if (b) return b;
      var c = wp(a, N.g.eb, U(a.s, N.g.eb));
      c = c || HD(a);
      var d = U(a.s, N.g.qb);
      return c && !mj() && !1 !== d && mC() && S(N.g.I) && S(N.g.R) ? qE() : rE();
    },
    tE = !1;
  tE = !0;
  var uE = {};
  uE[N.g.Za] = "cid";
  uE[N.g.We] = "_fid";
  uE[N.g.lg] = "_geo";
  uE[N.g.ub] = "gdid";
  uE[N.g.Id] = "ir";
  uE[N.g.Ia] = "ul";
  uE[N.g.Rc] = "_rdi";
  uE[N.g.yb] = "sr";
  uE[N.g.Gi] = "tid";
  uE[N.g.ef] = "tt";
  uE[N.g.ff] = "ec_mode";
  uE[N.g.Pi] = "gtm_up";
  uE[N.g.Pd] = "uaa", uE[N.g.Qd] = "uab", uE[N.g.Rd] = "uafvl", uE[N.g.Sd] = "uamb", uE[N.g.Td] = "uam", uE[N.g.Ud] = "uap", uE[N.g.Vd] = "uapv", uE[N.g.Wd] = "uaw";
  uE[N.g.xi] = "lps";
  var vE = {};
  vE[N.g.zc] = "cc";
  vE[N.g.Ac] = "ci";
  vE[N.g.Bc] = "cm";
  vE[N.g.Cc] = "cn";
  vE[N.g.Ec] = "cs";
  vE[N.g.Fc] = "ck";
  vE[N.g.qa] = "cu";
  vE[N.g.ra] = "dl";
  vE[N.g.Ea] = "dr";
  vE[N.g.xb] = "dt";
  vE[N.g.Md] = "seg";
  vE[N.g.zb] = "sid";
  vE[N.g.Nd] = "sct";
  vE[N.g.za] = "uid";
  Q(36) && (vE[N.g.Pc] = "dp");
  var wE = {};
  wE[N.g.yd] = "_et";
  wE[N.g.sb] = "edid";
  var xE = {};
  xE[N.g.zc] = "cc";
  xE[N.g.Ac] = "ci";
  xE[N.g.Bc] = "cm";
  xE[N.g.Cc] = "cn";
  xE[N.g.Ec] = "cs";
  xE[N.g.Fc] = "ck";
  var yE = {},
    zE = Object.freeze((yE[N.g.wa] = 1, yE)),
    rE = function () {
      var a = "www";
      tE && nj() && (a = nj());
      return "https://" + a + ".google-analytics.com/g/collect";
    },
    qE = function () {
      var a;
      tE && "" !== nj() && (a = nj());
      return "https://" + (a ? a + "." : "") + "analytics.google.com/g/collect";
    },
    AE = function (a, b, c) {
      var d = {},
        e = {},
        f = {};
      d.v = "2";
      d.tid = a.target.ba;
      HD(a) && !mj() && (d._ono = 1);
      d.gtm = cn();
      d._p = SD();
      c && (d.em = c);
      a.metadata.create_google_join && (d._gaz = 1);
      pE(d, a);
      Q(51) && (qm() && (d.dma_cps = nm()), d.dma = pm());
      Q(85) && Kl(Tl()) && (d.tcfd = rm());
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
        if (Da(k)) for (var m = 0; m < k.length && 200 > m; m++) e["pr" + (m + 1)] = hg(k[m]);
      }
      var n = a.h[N.g.sb];
      n && (e.edid = n);
      var p = function (r, t) {
        if ("object" !== typeof t || !zE[r]) {
          var u = "ep." + r,
            v = "epn." + r;
          r = Ca(t) ? v : u;
          var w = Ca(t) ? u : v;
          e.hasOwnProperty(w) && delete e[w];
          e[r] = String(t);
        }
      };
      l(a.h, function (r, t) {
        if (void 0 !== t && !Zh.hasOwnProperty(r)) {
          null === t && (t = "");
          var u;
          r !== N.g.Mc ? u = !1 : a.metadata.euid_mode_enabled ? (d.ecid = t, u = !0) : u = void 0;
          if (!u && r !== N.g.Ve) {
            var v = t;
            !0 === t && (v = "1");
            !1 === t && (v = "0");
            v = String(v);
            var w;
            if (uE[r]) w = uE[r], d[w] = v;else if (vE[r]) w = vE[r], f[w] = v;else if (wE[r]) w = wE[r], e[w] = v;else if ("_" === r.charAt(0)) d[r] = v;else {
              var x;
              xE[r] ? x = !0 : r !== N.g.Dc ? x = !1 : ("object" !== typeof t && p(r, t), x = !0);
              x || p(r, t);
            }
          }
        }
      });
      (function (r) {
        ID(a) && "object" === typeof r && l(r || {}, function (t, u) {
          "object" !== typeof u && (d["sst." + t] = String(u));
        });
      })(a.h[N.g.fe]);
      var q = a.h[N.g.Na] || {};
      Q(104) || (hm(a.s) && (Q(85) || nC()) ? Q(53) && (q._npa = "0") : q._npa = "1");
      Q(12) && !1 === U(a.s, N.g.qb) && (d.ngs = "1");
      l(q, function (r, t) {
        void 0 !== t && ((null === t && (t = ""), r !== N.g.za || f.uid) ? b[r] !== t && (e[(Ca(t) ? "upn." : "up.") + String(r)] = String(t), b[r] = t) : f.uid = String(t));
      });
      return jg.call(this, {
        Pa: d,
        yc: f,
        Yg: e
      }, sE(a), ID(a)) || this;
    };
  qa(AE, jg);
  var BE = function (a, b) {
      return a.replace(/\$\{([^\}]+)\}/g, function (c, d) {
        return b[d] || c;
      });
    },
    CE = function (a) {
      var b = a.search;
      return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse");
    },
    DE = function (a) {
      var b = {},
        c = "",
        d = a.pathname.indexOf("/g/collect");
      0 <= d && (c = a.pathname.substring(0, d));
      b.transport_url = a.protocol + "//" + a.hostname + c;
      return b;
    },
    EE = function (a, b) {
      var c = new z.XMLHttpRequest();
      c.withCredentials = !0;
      var d = b ? "POST" : "GET",
        e = "",
        f = 0,
        g = Cn(a),
        k = DE(g),
        m = CE(g);
      c.onprogress = function (n) {
        if (200 === c.status) {
          e += c.responseText.substring(f);
          f = n.loaded;
          for (var p = BE(e, k), q = p.indexOf("\n\n"); -1 !== q;) {
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
              if (Array.isArray(x)) for (var y = 0; y < x.length; y++) Mc(x[y]);
              if (Q(27)) {
                var A = w.send_beacon || [];
                if (Array.isArray(A)) for (var B = 0; B < A.length; B++) Uc(A[B]);
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
  var HE = function (a, b, c, d) {
      var e = Q(88) && d;
      if (Q(87) || e) {
        var f = b,
          g = Xc();
        void 0 !== g && (f += "&tfd=" + Math.round(g));
        b = f;
      }
      var k = a + "?" + b;
      FE && (d = !(0 === k.indexOf(rE()) || 0 === k.indexOf(qE())));
      d && !MD ? EE(k, c) : GE(a, b, c);
    },
    IE = function (a, b) {
      function c(r) {
        p.push(r + "=" + encodeURIComponent("" + a.Pa[r]));
      }
      var d = b.wm,
        e = b.xm,
        f = b.pl,
        g = b.Kk,
        k = b.Jk,
        m = b.Fl,
        n = b.El;
      if (d || e) {
        var p = [];
        a.Pa._ono && c("_ono");
        c("tid");
        c("cid");
        c("gtm");
        p.push("aip=1");
        a.yc.uid && !n && p.push("uid=" + encodeURIComponent("" + a.yc.uid));
        d && (GE("https://stats.g.doubleclick.net/g/collect", "v=2&" + p.join("&")), Qj("https://stats.g.doubleclick.net/g/collect?v=2&" + p.join("&")));
        if (e) {
          p.push("z=" + Ga());
          if (!m) {
            var q = f && 0 === f.indexOf("google.") && "google.com" != f ? "https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace("%", f) : void 0;
            q && Mc(q + p.join("&"));
          }
          Q(12) && !MD && g && k && Vq() && function () {
            var r = Xq() + "/td/ga/rul?";
            p = [];
            c("tid");
            p.push("gacid=" + encodeURIComponent(String(a.Pa.cid)));
            c("gtm");
            p.push("aip=1");
            p.push("fledge=1");
            p.push("z=" + Ga());
            Wq(r + p.join("&"), a.Pa.tid);
          }();
        }
      }
    },
    FE = !1;
  var JE = function () {
    this.F = 1;
    this.K = {};
    this.h = new kg();
    this.B = -1;
  };
  JE.prototype.C = function (a, b) {
    var c = this,
      d = new AE(a, this.K, b),
      e = ND(a);
    e && this.h.F(d) || this.flush();
    if (e && this.h.add(d)) {
      if (0 > this.B) {
        var f = z.setTimeout,
          g;
        ID(a) ? KE ? (KE = !1, g = LE) : g = ME : g = 5E3;
        this.B = f.call(z, function () {
          return c.flush();
        }, g);
      }
    } else {
      var k = mg(d, this.F++);
      HE(d.B, k.xh, k.body, d.F);
      var m = a.metadata.create_dc_join,
        n = a.metadata.create_google_join,
        p = !1 !== U(a.s, N.g.Ga),
        q = hm(a.s),
        r = {
          eventId: a.s.eventId,
          priorityId: a.s.priorityId
        },
        t = {
          wm: m,
          xm: n,
          pl: pj(),
          Kk: p,
          Jk: q,
          Fl: mj(),
          El: a.metadata.euid_mode_enabled,
          dn: r
        };
      IE(d, t);
    }
    Ds(a);
  };
  JE.prototype.add = function (a) {
    a.metadata.euid_mode_enabled && !MD ? this.W(a) : this.C(a);
  };
  JE.prototype.flush = function () {
    if (this.h.events.length) {
      var a = ng(this.h, this.F++);
      HE(this.h.h, a.xh, a.body, this.h.B);
      this.h = new kg();
      0 <= this.B && (z.clearTimeout(this.B), this.B = -1);
    }
  };
  JE.prototype.W = function (a) {
    var b = this,
      c = JD(a);
    c ? Wh(c, function (d) {
      b.C(a, 1 === d.split("~").length ? void 0 : d);
    }) : this.C(a);
  };
  var GE = function (a, b, c) {
      var d = a + "?" + b;
      if (c) try {
        Cc.sendBeacon && Cc.sendBeacon(d, c);
      } catch (e) {
        yb("TAGGING", 15);
      } else Uc(d);
    },
    LE = ll('', 500),
    ME = ll('', 5E3),
    KE = !0;
  var NE = function (a, b, c) {
      void 0 === c && (c = {});
      if ("object" === typeof b) for (var d in b) NE(a + "." + d, b[d], c);else c[a] = b;
      return c;
    },
    OE = function (a) {
      if (ID(a)) {
        var b = function (d) {
            var e = NE(N.g.wa, d);
            l(e, function (f, g) {
              a.h[f] = g;
            });
          },
          c = U(a.s, N.g.wa);
        void 0 !== c ? b(c) : b(a.metadata.user_data);
        a.metadata.user_data = void 0;
      }
    };
  var PE = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    QE = /^www.googleadservices.com$/;
  var RE = window,
    SE = document,
    TE = function (a) {
      var b = RE._gaUserPrefs;
      if (b && b.ioo && b.ioo() || SE.documentElement.hasAttribute("data-google-analytics-opt-out") || a && !0 === RE["ga-disable-" + a]) return !0;
      try {
        var c = RE.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (var d = tm("AMP_TOKEN", String(SE.cookie), !0), e = 0; e < d.length; e++) if ("$OPT_OUT" == d[e]) return !0;
      return SE.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  var VE = function (a) {
      return !a || UE.test(a) || ai.hasOwnProperty(a);
    },
    WE = function (a, b, c) {
      c || (c = function () {});
      void 0 !== a.h[b] && (a.h[b] = c(a.h[b]));
    },
    XE = function (a, b, c) {
      S(c) || Yj(function () {
        b.metadata.is_consent_update = !0;
        var d = ii[c || ""];
        d && LD(b, "gcut", d);
        a.bj(b);
      }, c);
    },
    sn = {
      Vk: "",
      Hm: Number("")
    },
    YE = {},
    ZE = (YE[N.g.zc] = 1, YE[N.g.Ac] = 1, YE[N.g.Bc] = 1, YE[N.g.Cc] = 1, YE[N.g.Ec] = 1, YE[N.g.Fc] = 1, YE),
    UE = /^(_|ga_|google_|gtag\.|firebase_).*$/,
    $E = function (a) {
      this.Zb = a;
      this.nd = new JE();
      this.h = void 0;
      this.F = new PD();
      this.B = this.C = void 0;
      this.W = !1;
      this.ae = void 0;
      this.Zd = !1;
      this.Ig = 0;
      this.K = !1;
    };
  aa = $E.prototype;
  aa.gm = function (a, b, c) {
    var d = this,
      e = cp(this.Zb);
    if (e) {
      if (c.eventMetadata.is_external_event && "_" === a.charAt(0)) c.onFailure();else {
        a !== N.g.na && a !== N.g.Ja && VE(a) && M(58);
        aF(c.h);
        var f = new vp(e, a, c);
        f.metadata.event_start_timestamp_ms = b;
        var g = [N.g.R];
        (wp(f, N.g.eb, U(f.s, N.g.eb)) || ID(f)) && g.push(N.g.I);
        Q(71) && ID(f) && g.push(N.g.N);
        var k = function () {
          Zj(function () {
            d.hm(f);
          }, g);
        };
        Q(7) && Q(10) ? tn(k) : k();
      }
    } else c.onFailure();
  };
  aa.hm = function (a) {
    this.B = a;
    try {
      if (TE(a.target.ba)) M(28), a.isAborted = !0;else if (Q(44)) {
        var b;
        var c = pk(vk()),
          d = c && c.parent;
        b = d ? pk(d) : void 0;
        if (b && Da(b.destinations)) for (var e = 0; e < b.destinations.length; e++) if (TE(b.destinations[e])) {
          M(125);
          a.isAborted = !0;
          break;
        }
      }
      if (0 <= sn.Vk.replace(/\s+/g, "").split(",").indexOf(a.eventName)) a.isAborted = !0;else {
        var f = KD(a);
        f && f.blacklisted && (a.isAborted = !0);
      }
      var g = C.location.protocol;
      "http:" != g && "https:" != g && (M(29), a.isAborted = !0);
      Cc && "preview" == Cc.loadPurpose && (M(30), a.isAborted = !0);
      Q(50) && (a.isAborted = !0);
      Up(a);
      var k = oi.grl;
      k || (k = oE(), oi.grl = k);
      k() || (M(35), a.isAborted = !0);
      if (a.isAborted) {
        a.s.onFailure();
        zb();
        return;
      }
      var m = {
        prefix: String(U(a.s, N.g.La, "")),
        path: String(U(a.s, N.g.Hc, "/")),
        flags: String(U(a.s, N.g.Ta, "")),
        domain: String(U(a.s, N.g.Sa, "auto")),
        Tb: Number(U(a.s, N.g.Ha, 63072E3))
      };
      a.metadata.cookie_options = m;
      bF(a);
      this.wk(a);
      this.F.Em(a);
      a.metadata.is_merchant_center ? a.metadata.euid_mode_enabled = !1 : U(a.s, N.g.af) ? a.metadata.euid_mode_enabled = !1 : wp(a, "ccd_add_1p_data", !1) && (a.metadata.euid_mode_enabled = !0);
      if (a.metadata.euid_mode_enabled && wp(a, "ccd_add_1p_data", !1)) {
        var n = a.s.B[N.g.Xd];
        if (bj(n)) {
          var p = U(a.s, N.g.wa);
          null === p ? a.metadata.user_data_from_code = null : (n.enable_code && kb(p) && (a.metadata.user_data_from_code = p), kb(n.selectors) && !a.metadata.user_data_from_manual && (a.metadata.user_data_from_manual = aj(n.selectors)));
        }
      }
      var q = this.yj,
        r;
      U(a.s, N.g.Ab) && (S(N.g.R) || U(a.s, N.g.Za) || (a.h[N.g.Pi] = !0));
      var t;
      var u;
      u = void 0 === u ? 3 : u;
      var v = z.location.href;
      if (v) {
        var w = Cn(v).search.replace("?", ""),
          x = xn(w, "_gl", !1, !0) || "";
        t = x ? void 0 !== Zn(x, u) : !1;
      } else t = !1;
      t && ID(a) && LD(a, "glv", 1);
      if (a.eventName !== N.g.na) r = {};else {
        U(a.s, N.g.Ab) && So(["aw", "dc"]);
        var y = kE(a),
          A = mE(a);
        r = Q(56) && Object.keys(y).length ? y : A;
      }
      q.call(this, r);
      var B = a.eventName === N.g.na;
      B && (this.K = !0);
      a.eventName == N.g.na && (U(a.s, N.g.Ma, !0) ? (a.s.h[N.g.aa] && (a.s.C[N.g.aa] = a.s.h[N.g.aa], a.s.h[N.g.aa] = void 0, a.h[N.g.aa] = void 0), a.eventName = N.g.ic) : a.isAborted = !0);
      B && !a.isAborted && 0 < this.Ig++ && QD(17);
      var D = ab(Yk(a.s, N.g.aa, 1), ".");
      D && (a.h[N.g.ub] = D);
      var G = ab(Yk(a.s, N.g.aa, 2), ".");
      G && (a.h[N.g.sb] = G);
      var E = this.C,
        I = this.F,
        O = !this.Zd,
        R = this.h,
        W = U(a.s, N.g.Za);
      if (U(a.s, N.g.vb) && U(a.s, N.g.Jb)) W ? UD(a, W, 1) : (M(127), a.isAborted = !0);else {
        var ha = W ? 1 : 8;
        a.metadata.is_new_to_site = !1;
        W || (W = VD(a), ha = 3);
        W || (W = R, ha = 5);
        if (!W) {
          var X = S(N.g.R),
            T = RD();
          W = !T.from_cookie || X ? T.vid : void 0;
          ha = 6;
        }
        W ? W = "" + W : (W = Vm(), ha = 7, a.metadata.is_first_visit = a.metadata.is_new_to_site = !0);
        UD(a, W, ha);
      }
      var ca = Math.floor(a.metadata.event_start_timestamp_ms / 1E3),
        ja = void 0;
      a.metadata.is_new_to_site || (ja = eE(a) || E);
      var ia = La(U(a.s, N.g.Sc, 30));
      ia = Math.min(475, ia);
      ia = Math.max(5, ia);
      var Ia = La(U(a.s, N.g.cf, 1E4)),
        sa = ZD(ja);
      a.metadata.is_first_visit = !1;
      a.metadata.is_session_start = !1;
      a.metadata.join_timer_sec = 0;
      sa && sa.ph && (a.metadata.join_timer_sec = Math.max(0, sa.ph - Math.max(0, ca - sa.Fe)));
      var Ea = !1;
      sa || (Ea = a.metadata.is_first_visit = !0, sa = {
        sessionId: String(ca),
        xc: 1,
        hd: !1,
        Fe: ca,
        vc: !1,
        ne: void 0
      });
      ca > sa.Fe + 60 * ia && (Ea = !0, sa.sessionId = String(ca), sa.xc++, sa.hd = !1, sa.ne = void 0);
      if (Ea) a.metadata.is_session_start = !0, I.wl(a);else if (I.ml() > Ia || a.eventName == N.g.ic) sa.hd = !0;
      a.metadata.euid_mode_enabled ? U(a.s, N.g.za) ? sa.vc = !0 : (sa.vc && (sa.ne = void 0), sa.vc = !1) : sa.vc = !1;
      var Qa = sa.ne;
      if (a.metadata.euid_mode_enabled) {
        var Va = U(a.s, N.g.Mc),
          zc = Va ? 1 : 8;
        Va || (Va = Qa, zc = 4);
        Va || (Va = Um(), zc = 7);
        var Ac = zc,
          fd = a.metadata.enhanced_client_id_source;
        if (void 0 === fd || Ac <= fd) a.h[N.g.Mc] = Va.toString(), a.metadata.enhanced_client_id_source = Ac;
      }
      O ? (a.copyToHitData(N.g.zb, sa.sessionId), a.copyToHitData(N.g.Nd, sa.xc), a.copyToHitData(N.g.Md, sa.hd ? 1 : 0)) : (a.h[N.g.zb] = sa.sessionId, a.h[N.g.Nd] = sa.xc, a.h[N.g.Md] = sa.hd ? 1 : 0);
      a.metadata[N.g.Ve] = sa.vc ? 1 : 0;
      cF(a);
      if (!U(a.s, N.g.Jb) || !U(a.s, N.g.vb)) {
        var te = "",
          ue = C.location;
        if (ue) {
          var qf = ue.pathname || "";
          "/" != qf.charAt(0) && (qf = "/" + qf);
          te = ue.protocol + "//" + ue.hostname + qf + ue.search;
          if (Q(100)) try {
            te = decodeURI(te);
          } catch (hv) {}
        }
        a.copyToHitData(N.g.ra, te);
        var Ji = a.copyToHitData,
          cH = N.g.Ea,
          Ki;
        a: {
          var iv = xm("_opt_expid", void 0, void 0, N.g.R)[0];
          if (iv) {
            var jv = decodeURIComponent(iv).split("$");
            if (3 === jv.length) {
              Ki = jv[2];
              break a;
            }
          }
          if (void 0 !== oi.ga4_referrer_override) Ki = oi.ga4_referrer_override;else {
            var kv = Ui("gtm.gtagReferrer." + a.target.ba),
              Im = C.referrer;
            if (Q(100)) try {
              Im = decodeURI(Im);
            } catch (hv) {}
            Ki = kv ? "" + kv : Im;
          }
        }
        Ji.call(a, cH, Ki || void 0);
        a.copyToHitData(N.g.xb, C.title);
        a.copyToHitData(N.g.Ia, (Cc.language || "").toLowerCase());
        var lv = Wp();
        a.copyToHitData(N.g.yb, lv.width + "x" + lv.height);
        Q(36) && a.copyToHitData(N.g.Pc);
        if (Q(90)) {
          var gd;
          if (!gd) {
            var Pc = {},
              dH = Yn(!0);
            Pc.Jm = !!dH._up;
            var Jm = Io();
            Pc.xl = void 0 !== Jm.aw;
            Pc.yl = void 0 !== Jm.dc;
            Pc.zl = void 0 !== Jm.gbraid;
            var mv = Cn(z.location.href),
              eH = An(mv, "query", !1, void 0, "gad");
            Pc.eh = void 0 !== eH;
            if (!Pc.eh) {
              var fH = mv.hash.replace("#", ""),
                gH = xn(fH, "gad", !1);
              Pc.eh = void 0 !== gH;
            }
            var nv = C.referrer ? An(Cn(C.referrer), "host") : "";
            Pc.ol = PE.test(nv);
            Pc.fl = QE.test(nv);
            gd = Pc;
          }
          (gd.Jm ? 0 : gd.xl || gd.yl || gd.zl || gd.eh || gd.fl || gd.ol) && a.copyToHitData(N.g.xi, "1");
        }
      }
      a.metadata.create_dc_join = !1;
      a.metadata.create_google_join = !1;
      if (!(Q(61) && ID(a) || a.metadata.is_merchant_center || !1 === U(a.s, N.g.qb)) && mC() && S(N.g.I)) {
        var Li = wp(a, N.g.eb, U(a.s, N.g.eb));
        Li = Li || HD(a);
        (a.metadata.is_session_start || U(a.s, N.g.Xe)) && (a.metadata.create_dc_join = !!Li);
        var ov;
        ov = a.metadata.join_timer_sec;
        Li && 0 === (ov || 0) && (a.metadata.join_timer_sec = 60, a.metadata.create_google_join = !0);
      }
      dF(a);
      ci.hasOwnProperty(a.eventName) && (a.metadata.is_ecommerce = !0, a.copyToHitData(N.g.Z), a.copyToHitData(N.g.qa));
      a.copyToHitData(N.g.ef);
      for (var pv = U(a.s, N.g.Ye) || [], Km = 0; Km < pv.length; Km++) {
        var qv = pv[Km];
        if (qv.rule_result) {
          a.copyToHitData(N.g.ef, qv.traffic_type);
          QD(3);
          break;
        }
      }
      if (!a.metadata.is_merchant_center && Bt(a.s)) {
        var rv = gE(a) || {},
          iH = (ho(rv[N.g.oc], !!rv[N.g.T]) ? Yn(!0)._fplc : void 0) || (0 < xm("FPLC", void 0, void 0, N.g.R).length ? void 0 : "0");
        a.h._fplc = iH;
      }
      if (void 0 !== U(a.s, N.g.Id)) a.copyToHitData(N.g.Id);else {
        var sv = U(a.s, N.g.Kd),
          Lm,
          Mi;
        a: {
          if (jE) {
            var Mm = gE(a) || {};
            if (Mm && Mm[N.g.T]) for (var tv = An(Cn(a.h[N.g.Ea]), "host", !0), Ni = Mm[N.g.T], Kg = 0; Kg < Ni.length; Kg++) if (Ni[Kg] instanceof RegExp) {
              if (Ni[Kg].test(tv)) {
                Mi = !0;
                break a;
              }
            } else if (0 <= tv.indexOf(Ni[Kg])) {
              Mi = !0;
              break a;
            }
          }
          Mi = !1;
        }
        if (!(Lm = Mi)) {
          var Oi;
          if (Oi = sv) a: {
            for (var uv = sv.include_conditions || [], jH = An(Cn(a.h[N.g.Ea]), "host", !0), Nm = 0; Nm < uv.length; Nm++) if (uv[Nm].test(jH)) {
              Oi = !0;
              break a;
            }
            Oi = !1;
          }
          Lm = Oi;
        }
        Lm && (a.h[N.g.Id] = "1", QD(4));
      }
      ID(a) && (LD(a, "uc", kj()), (Jj() || Q(45)) && LD(a, "rnd", $m()));
      if (Q(27) && ID(a)) {
        wp(a, N.g.eb, !1) && LD(a, "gse", 1);
        !1 === U(a.s, N.g.qb) && LD(a, "ngs", 1);
        mj() && LD(a, "ga_rd", 1);
        mC() || LD(a, "ngst", 1);
        var vv = pj();
        vv && LD(a, "etld", vv);
      }
      if (ID(a)) {
        var wv = tE ? nj() : "";
        wv && LD(a, "gcsub", wv);
      }
      ID(a) && (Jj() || Q(45)) && ((Kj() || Q(49)) && LD(a, "gcd", mm(a.s)), U(a.s, N.g.oa) && LD(a, "adr", 1));
      if (ID(a)) {
        var xv = kr();
        xv && LD(a, "us_privacy", xv);
        var yv = am();
        yv && LD(a, "gdpr", yv);
        var zv = $l();
        zv && LD(a, "gdpr_consent", zv);
      }
      Q(74) && ID(a) && (a.h[N.g.Hi] = lj() || kj());
      if (ID(a) && Q(87)) {
        var Av = Di;
        Av && LD(a, "tft", Number(Av));
      }
      a: if (Q(7)) if (!on(z)) M(87);else if (void 0 !== qn) {
        M(85);
        var Bv = mn();
        if (Bv) {
          if (Q(24)) {
            if (U(a.s, N.g.Rc) && !ID(a)) break a;
          } else if (U(a.s, N.g.Rc)) break a;
          un(Bv, a);
        } else M(86);
      }
      if (Q(35)) {
        var Om = Tq(Sq());
        Om || eF || (eF = !0, Al('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), Om = Tq(Sq()));
        Om && (a.h[N.g.Hb] = "1");
      }
      if (a.eventName == N.g.Ja) {
        var Dv = U(a.s, N.g.cb),
          kH = U(a.s, N.g.tb),
          Ev = void 0;
        Ev = a.h[Dv];
        kH(Ev || U(a.s, Dv));
        a.isAborted = !0;
      }
      a.copyToHitData(N.g.za);
      a.copyToHitData(N.g.Na);
      zp(a);
      OE(a);
      var Fv = U(a.s, N.g.vb);
      Fv && QD(12);
      a.metadata.em_event && QD(14);
      var Lg = pk(vk());
      (Fv || zk(Lg) || Lg && Lg.parent && Lg.context && 5 === Lg.context.source) && QD(19);
      !this.K && a.metadata.em_event && QD(18);
      var Pm = a.metadata.event_usage;
      if (Da(Pm)) for (var Qm = 0; Qm < Pm.length; Qm++) QD(Pm[Qm]);
      var Gv = Ab("GA4_EVENT");
      Gv && (a.h._eu = Gv);
      if (a.metadata.speculative || a.isAborted) {
        a.s.onFailure();
        zb();
        return;
      }
      var lH = this.yj,
        Hv,
        mH = this.h,
        Rm;
      a: {
        var Sm = fE(a);
        if (Sm) {
          if (dE(Sm, a)) {
            Rm = Sm;
            break a;
          }
          M(25);
          a.isAborted = !0;
        }
        Rm = void 0;
      }
      var nH = Rm;
      Hv = {
        clientId: YD(a, mH),
        Kf: nH
      };
      lH.call(this, Hv);
      this.Zd = !0;
      this.Bm(a);
      if (ID(a)) {
        var oH = a.metadata.is_conversion;
        if ("page_view" === a.eventName || oH) XE(this, a, N.g.I), Q(71) && XE(this, a, N.g.N);
      }
      this.F.Eh();
      this.ae = fF(a, this.ae);
      a.copyToHitData(N.g.lg);
      U(a.s, N.g.Rc) && (a.h[N.g.Rc] = !0, Q(32) && ID(a) || WE(a, N.g.yb));
      if (a.isAborted) {
        a.s.onFailure();
        zb();
        return;
      }
      this.bj(a);
      a.s.onSuccess();
    } catch (hv) {
      a.s.onFailure();
    }
    zb();
  };
  aa.bj = function (a) {
    this.nd.add(a);
  };
  aa.yj = function (a) {
    var b = a.clientId,
      c = a.Kf;
    b && c && (this.h = b, this.C = c);
  };
  aa.flush = function () {
    this.nd.flush();
  };
  aa.Bm = function (a) {
    var b = this;
    if (!this.W) {
      var c = S(N.g.R);
      Xj([N.g.R], function () {
        var d = S(N.g.R);
        if (c ^ d && b.B && b.C && b.h) {
          var e = b.h;
          if (d) {
            var f = VD(b.B);
            if (f) {
              b.h = f;
              var g = eE(b.B);
              g && (b.C = aE(g, b.C, b.B));
            } else XD(b.h, b.B), TD(b.h, !0);
            dE(b.C, b.B);
            var k = {};
            k[N.g.Xe] = e;
            var m = Pu(b.Zb, N.g.od, k);
            Su(m, a.s.eventId, {});
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
  aa.wk = function (a) {
    a.eventName !== N.g.Ja && this.F.vk(a);
  };
  var bF = function (a) {
      function b(c, d) {
        Zh[c] || void 0 === d || (a.h[c] = d);
      }
      l(a.s.C, b);
      l(a.s.h, b);
    },
    cF = function (a) {
      var b = Zk(a.s),
        c = function (d, e) {
          ZE[d] && (a.h[d] = e);
        };
      kb(b[N.g.Dc]) ? l(b[N.g.Dc], function (d, e) {
        c((N.g.Dc + "_" + d).toLowerCase(), e);
      }) : l(b, c);
    },
    dF = function (a) {
      var b = function (c) {
        return !!c && c.conversion;
      };
      a.metadata.is_conversion = b(KD(a));
      a.metadata.is_first_visit && (a.metadata.is_first_visit_conversion = b(KD(a, "first_visit")));
      a.metadata.is_session_start && (a.metadata.is_session_start_conversion = b(KD(a, "session_start")));
    },
    fF = function (a, b) {
      var c = void 0;
      return c;
    },
    eF = !1;
  function aF(a) {
    l(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[N.g.Na] || {};
    l(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  ;
  var gF = function (a) {
      if (Q(66) && "prerendering" in C ? C.prerendering : "prerender" === C.visibilityState) return !1;
      a();
      return !0;
    },
    hF = function (a) {
      if (!gF(a)) {
        var b = !1,
          c = function () {
            !b && gF(a) && (b = !0, Oc(C, "visibilitychange", c), Q(66) && Oc(C, "prerenderingchange", c), M(55));
          };
        Nc(C, "visibilitychange", c);
        Q(66) && Nc(C, "prerenderingchange", c);
        M(54);
      }
    };
  var jF = function (a, b) {
    hF(function () {
      var c = cp(a);
      if (c) {
        var d = iF(c, b);
        Tv(a, d);
      }
    });
  };
  function iF(a, b) {
    var c = function () {};
    var d = new $E(a.id),
      e = "MC" === a.prefix;
    c = function (f, g, k, m) {
      e && (m.eventMetadata.is_merchant_center = !0);
      d.gm(g, k, m);
    };
    hk || kF(a, d, b);
    return c;
  }
  function kF(a, b, c) {
    var d = b.F,
      e = {},
      f = {
        eventId: c,
        eventMetadata: (e.batch_on_navigation = !0, e)
      };
    d.jm(function () {
      MD = !0;
      Sv.flush();
      1E3 <= d.yf() && Cc.sendBeacon && Uv(N.g.od, {}, a.id, f);
      b.flush();
      d.zj(function () {
        MD = !1;
        d.zj();
      });
    });
  }
  ;
  var lF = iF;
  function nF(a, b, c) {
    var d = this;
  }
  nF.D = "internal.gtagConfig";
  function oF() {
    var a = {};
    return a;
  }
  ;
  function qF(a, b) {}
  qF.M = "gtagSet";
  function rF(a, b) {}
  rF.M = "injectHiddenIframe";
  var sF = {};
  function uF(a, b, c, d) {}
  var vF = Object.freeze({
      dl: 1,
      id: 1
    }),
    wF = {};
  function xF(a, b, c, d) {}
  uF.M = "injectScript";
  xF.D = "internal.injectScript";
  function yF(a) {
    var b = !0;
    return b;
  }
  yF.M = "isConsentGranted";
  var zF = function () {
    var a = jh(function (b) {
      this.h.h.log("error", b);
    });
    a.M = "JSON";
    return a;
  };
  function AF(a) {
    var b = void 0;
    return od(b);
  }
  AF.D = "internal.legacyParseUrl";
  var BF = function () {
      return !1;
    },
    CF = {
      getItem: function (a) {
        var b = null;
        return b;
      },
      setItem: function (a, b) {
        return !1;
      },
      removeItem: function (a) {}
    };
  function DF() {}
  DF.M = "logToConsole";
  function EF(a, b) {}
  EF.D = "internal.mergeRemoteConfig";
  function FF(a, b, c) {
    c = void 0 === c ? !0 : c;
    var d = [];
    return d;
  }
  FF.D = "internal.parseCookieValuesFromString";
  function GF(a) {
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
        c = od({
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
      n = Cn(a);
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
    b = od(n);
    return b;
  }
  GF.M = "parseUrl";
  function HF(a) {}
  HF.D = "internal.processAsNewEvent";
  function IF(a, b, c) {
    var d;
    return d;
  }
  IF.D = "internal.pushToDataLayer";
  function JF(a, b) {
    var c = !1;
    return c;
  }
  JF.M = "queryPermission";
  function KF() {
    var a = "";
    return a;
  }
  KF.M = "readCharacterSet";
  function LF() {
    return ni.ia;
  }
  LF.D = "internal.readDataLayerName";
  function MF() {
    var a = "";
    return a;
  }
  MF.M = "readTitle";
  function NF(a, b) {
    var c = this;
    K(J(this), ["destinationId:!string", "callback:!Fn"], arguments), Ap(a, function (d) {
      b.invoke(c.h, od(d, c.h, 1));
    });
  }
  NF.D = "internal.registerCcdCallback";
  function OF(a) {
    return !0;
  }
  OF.D = "internal.registerDestination";
  var PF = Object.freeze(["config", "event", "get", "set"]);
  function QF(a, b, c) {}
  QF.D = "internal.registerGtagCommandListener";
  function RF(a, b) {
    var c = !1;
    return c;
  }
  RF.D = "internal.removeDataLayerEventListener";
  function SF(a, b) {}
  SF.D = "internal.removeFormData";
  function TF() {}
  TF.M = "resetDataLayer";
  function UF(a, b, c, d) {
    K(J(this), ["destinationIds:!*", "eventName:!*", "eventParameters:?PixieMap", "messageContext:?PixieMap"], arguments);
    var e = c ? pd(c) : {},
      f = pd(a);
    Array.isArray(f) || (f = [f]);
    b = String(b);
    var g = d ? pd(d) : {},
      k = this.h.h;
    g.originatingEntity = rA(k);
    for (var m = 0; m < f.length; m++) {
      var n = f[m];
      if ("string" === typeof n) {
        var p = lb(e),
          q = lb(g),
          r = Pu(n, b, p);
        Su(r, g.eventId || k.eventId, q);
      }
    }
  }
  UF.D = "internal.sendGtagEvent";
  function VF(a, b, c) {}
  VF.M = "sendPixel";
  function WF(a, b) {}
  WF.D = "internal.setAnchorHref";
  function XF(a, b, c, d) {
    var e = this;
    d = void 0 === d ? !0 : d;
    var f = !1;
    return f;
  }
  XF.M = "setCookie";
  function YF(a, b) {}
  YF.M = "setCorePlatformServices";
  function ZF(a) {}
  ZF.M = "setDefaultConsentState";
  function $F(a, b) {}
  $F.D = "internal.setDelegatedConsentType";
  function aG(a, b) {}
  aG.D = "internal.setFormAction";
  function bG(a, b, c) {
    return !1;
  }
  bG.M = "setInWindow";
  function cG(a, b, c) {
    K(J(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
    var d = up(a) || {};
    d[b] = pd(c, this.h);
    var e = a;
    sp || tp();
    rp[e] = d;
  }
  cG.D = "internal.setProductSettingsParameter";
  function dG(a, b, c) {
    K(J(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
    for (var d = b.split("."), e = Xv(a), f = 0; f < d.length - 1; f++) {
      if (void 0 === e[d[f]]) e[d[f]] = {};else if (!kb(e[d[f]])) throw Error("setRemoteConfigParameter failed, path contains a non-object type: " + d[f]);
      e = e[d[f]];
    }
    e[d[f]] = pd(c, this.h, 1);
  }
  dG.D = "internal.setRemoteConfigParameter";
  function eG(a, b, c, d) {
    var e = this;
  }
  eG.M = "sha256";
  function fG(a, b, c) {}
  fG.D = "internal.sortRemoteConfigParameters";
  var gG = {},
    hG = {};
  gG.M = "templateStorage";
  gG.getItem = function (a) {
    var b = null;
    L(this, "access_template_storage");
    var c = this.h.h;
    if (!c) throw Error("invalid program state");
    var d = c.Yc();
    hG[d] && (b = hG[d].hasOwnProperty("gtm." + a) ? hG[d]["gtm." + a] : null);
    return b;
  };
  gG.setItem = function (a, b) {
    L(this, "access_template_storage");
    var c = this.h.h;
    if (!c) throw Error("invalid program state");
    var d = c.Yc();
    hG[d] = hG[d] || {};
    hG[d]["gtm." + a] = b;
  };
  gG.removeItem = function (a) {
    L(this, "access_template_storage");
    var b = this.h.h;
    if (!b) throw Error("invalid program state");
    var c = b.Yc();
    if (!hG[c] || !hG[c].hasOwnProperty("gtm." + a)) return;
    delete hG[c]["gtm." + a];
  };
  gG.clear = function () {
    L(this, "access_template_storage");
    var a = this.h.h;
    if (!a) throw Error("invalid program state");
    delete hG[a.Yc()];
  };
  function iG(a, b) {
    var c = !1;
    return c;
  }
  iG.D = "internal.testRegex";
  var jG = function (a) {
    var b;
    return b;
  };
  function kG(a) {}
  kG.M = "updateConsentState";
  var lG;
  function mG(a, b, c) {
    lG = lG || new th();
    lG.add(a, b, c);
  }
  function nG(a, b) {
    var c = lG = lG || new th();
    if (c.B.hasOwnProperty(a)) throw "Attempting to add a private function which already exists: " + a + ".";
    if (c.h.hasOwnProperty(a)) throw "Attempting to add a private function with an existing API name: " + a + ".";
    c.B[a] = Ba(b) ? Qg(a, b) : Rg(a, b);
  }
  function oG() {
    return function (a) {
      var b;
      var c = lG;
      if (c.h.hasOwnProperty(a)) b = c.get(a, this);else {
        var d;
        if (d = c.B.hasOwnProperty(a)) {
          var e = !1,
            f = this.h.h;
          if (f) {
            var g = f.Yc();
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
  var pG = function () {
    var a = function (c) {
        return nG(c.D, c);
      },
      b = function (c) {
        return mG(c.M, c);
      };
    b(hz);
    b(nz);
    b(dA);
    b(gA);
    b(hA);
    b(lA);
    b(mA);
    b(oA);
    b(zF());
    b(pA);
    b(lD);
    b(mD);
    b(AD);
    b(BD);
    b(CD);
    b(FD);
    b(qF);
    b(rF);
    b(uF);
    b(yF);
    b(DF);
    b(GF);
    b(JF);
    b(KF);
    b(MF);
    b(VF);
    b(XF);
    b(ZF);
    b(bG);
    b(eG);
    b(gG);
    b(kG);
    mG("Math", Wg());
    mG("Object", rh);
    mG("TestHelper", vh());
    mG("assertApi", Sg);
    mG("assertThat", Tg);
    mG("decodeUri", Xg);
    mG("decodeUriComponent", Yg);
    mG("encodeUri", Zg);
    mG("encodeUriComponent", $g);
    mG("fail", fh);
    mG("generateRandom", gh);
    mG("getTimestamp", hh);
    mG("getTimestampMillis", hh);
    mG("getType", ih);
    mG("makeInteger", kh);
    mG("makeNumber", lh);
    mG("makeString", mh);
    mG("makeTableMap", nh);
    mG("mock", qh);
    mG("fromBase64", kD, !("atob" in z));
    mG("localStorage", CF, !BF());
    mG("toBase64", jG, !("btoa" in z));
    a(kz);
    a(sz);
    a(Ez);
    a(Lz);
    a(Qz);
    a(Tz);
    a(bA);
    a(eA);
    a(jA);
    a(nA);
    a(qA);
    a(tA);
    a(vA);
    a(CA);
    a(NA);
    a(SA);
    a(XA);
    a(fB);
    a(jB);
    a(uB);
    a(HB);
    a(ah);
    a(JB);
    a(iD);
    a(nD);
    a(oD);
    a(tD);
    a(vD);
    a(xD);
    a(zD);
    a(DD);
    a(ED);
    a(nF);
    a(xF);
    a(Sz);
    a(EF);
    a(HF);
    a(NF);
    a(OF);
    a(QF);
    a(RF);
    a(SF);
    a(UF);
    a($F);
    a(cG);
    a(dG);
    a(fG);
    a(iG);
    nG("internal.GtagSchema", oF());
    Q(48) && b(YF);
    Q(77) && a(BA);
    Q(70) && a(pD);
    Q(78) && a(rD);
    Q(79) && a(sD);
    Q(83) && a(aG);
    Q(86) && a(WF);
    Q(89) && a(uD);
    Q(93) && a(FF);
    Q(96) && a(yD);
    Q(98) && a(LF);
    Q(99) && a(uA);
    Q(102) && a(AF);
    Q(105) && a(IF);
    Q(106) && a(jD);
    return oG();
  };
  var fz;
  function qG() {
    fz.h.h.K = function (a, b, c) {
      oi.SANDBOXED_JS_SEMAPHORE = oi.SANDBOXED_JS_SEMAPHORE || 0;
      oi.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        oi.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function rG(a) {
    void 0 !== a && l(a, function (b, c) {
      for (var d = 0; d < c.length; d++) {
        var e = c[d].replace(/^_*/, "");
        Gi[e] = Gi[e] || [];
        Gi[e].push(b);
      }
    });
  }
  ;
  var sG = encodeURI,
    Y = encodeURIComponent,
    tG = function (a, b, c) {
      Mc(a, b, c);
    },
    uG = function (a, b) {
      if (!a) return !1;
      var c = An(Cn(a), "host");
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
    vG = function (a, b, c) {
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
        J: function () {
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
      Cy(a.vtp_value, "c", a.vtp_gtmEventId);
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
      var c = uy(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
        d = void 0 !== c ? c : a.vtp_defaultValue;
      Cy(d, "v", a.vtp_gtmEventId);
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
        J: a
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
        J: a
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
        J: a
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
        J: a
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
        J: function () {
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
        J: a
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
      0 < f && (e[N.g.Sc] = f);
      e[N.g.Bd] = d.vtp_eventSettings;
      e[N.g.Zf] = d.vtp_dynamicEventSettings;
      e[N.g.eb] = 1 === d.vtp_googleSignals;
      e[N.g.mg] = d.vtp_foreignTld;
      e[N.g.kg] = 1 === d.vtp_restrictDomain;
      e[N.g.Ye] = d.vtp_internalTrafficResults;
      var g = N.g.Da,
        k = d.vtp_linker;
      k && k[N.g.T] && (k[N.g.T] = a(k[N.g.T]));
      e[g] = k;
      var m = N.g.Kd,
        n = d.vtp_referralExclusionDefinition;
      n && n.include_conditions && (n.include_conditions = a(n.include_conditions));
      e[m] = n;
      var p = qk(d.vtp_trackingId),
        q = Xv(p);
      if (!Q(101)) {
        var r = q.cross_domain_conditions;
        if (r) {
          r.length && "object" === typeof r[0] && (r = c(r));
          var t = {};
          e[N.g.Da] = (t[N.g.T] = a(r), t[N.g.wb] = !0, t[N.g.oc] = !0, t[N.g.Kb] = "query", t);
        }
        var u = q.referral_exclusion_conditions;
        u && (u.length && "object" === typeof u[0] && (u = c(u)), e[N.g.Kd] = {
          include_conditions: a(u)
        });
      }
      Yv(p, e);
      jF(p, d.vtp_gtmEventId);
      F(d.vtp_gtmOnSuccess);
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
      var f = Pu(String(b.streamId), d, c);
      Su(f, e.eventId, e);
      a.vtp_gtmOnSuccess();
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
        J: a
      };
    });
  }();
  var QH = {};
  QH.dataLayer = Vi;
  QH.callback = function (a) {
    Fi.hasOwnProperty(a) && Ba(Fi[a]) && Fi[a]();
    delete Fi[a];
  };
  QH.bootstrap = 0;
  QH._spx = !1;
  function RH() {
    oi[nk()] = oi[nk()] || QH;
    tk();
    xk() || l(yk(), function (a, b) {
      Et(a, b.transportUrl, b.context);
      M(92);
    });
    Ua(Gi, Z.m);
    Q(97) && pk(vk());
    Af = Qf;
  }
  (function (a) {
    function b() {
      m = C.documentElement.getAttribute("data-tag-assistant-present");
      gx(m) && (k = g.sk);
    }
    if (!z["__TAGGY_INSTALLED"]) {
      var c = !1;
      if (C.referrer) {
        var d = Cn(C.referrer);
        c = "cct.google" === zn(d, "host");
      }
      if (!c) {
        var e = xm("googTaggyReferrer");
        c = e.length && e[0].length;
      }
      c && (z["__TAGGY_INSTALLED"] = !0, Jc("https://cct.google/taggy/agent.js"));
    }
    if (Ai) a();else {
      var f = function (u) {
          var v = "GTM",
            w = "GTM";
          ui ? (v = "OGT", w = "GTAG") : Ai && (w = v = "OPT");
          var x = z["google.tagmanager.debugui2.queue"];
          x || (x = [], z["google.tagmanager.debugui2.queue"] = x, Jc("https://" + ni.Oe + "/debug/bootstrap?id=" + Uf.ctid + "&src=" + w + "&cond=" + u + "&gtm=" + cn()));
          var y = {
            messageType: "CONTAINER_STARTING",
            data: {
              scriptSource: Dc,
              containerProduct: v,
              debug: !1,
              id: Uf.ctid,
              destinations: kk()
            }
          };
          y.data.resume = function () {
            a();
          };
          ni.Qj && (y.data.initialPublish = !0);
          x.push(y);
        },
        g = {
          Om: 1,
          tk: 2,
          Ek: 3,
          Sj: 4,
          sk: 5
        },
        k = void 0,
        m = void 0,
        n = An(z.location, "query", !1, void 0, "gtm_debug");
      gx(n) && (k = g.tk);
      if (!k && C.referrer) {
        var p = Cn(C.referrer);
        "tagassistant.google.com" === zn(p, "host") && (k = g.Ek);
      }
      if (!k) {
        var q = xm("__TAG_ASSISTANT");
        q.length && q[0].length && (k = g.Sj);
      }
      k || b();
      if (!k && hx(m)) {
        var r = function () {
            if (t) return !0;
            t = !0;
            b();
            k && Dc ? f(k) : a();
          },
          t = !1;
        Nc(C, "TADebugSignal", function () {
          r();
        }, !1);
        z.setTimeout(function () {
          r();
        }, 200);
      } else k && Dc ? f(k) : a();
    }
  })(function () {
    try {
      rk();
      if (Q(29)) {}
      tj().B();
      Zl();
      var b = ok();
      if (dk().canonical[b]) {
        var c = oi.zones;
        c && c.unregisterChild(jk());
      } else {
        (Q(7) || Q(8) || Q(21) || Q(18)) && rn();
        xt();
        for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++) pf.push(e[f]);
        for (var g = d.tags || [], k = 0; k < g.length; k++) tf.push(g[k]);
        for (var m = d.predicates || [], n = 0; n < m.length; n++) sf.push(m[n]);
        for (var p = d.rules || [], q = 0; q < p.length; q++) {
          for (var r = p[q], t = {}, u = 0; u < r.length; u++) {
            var v = r[u][0];
            t[v] = Array.prototype.slice.call(r[u], 1);
            nf(5) || nf(7) ? ("if" !== v && "unless" !== v || zf(t[v]), yb("TAGGING", 22)) : nf(6) && yb("TAGGING", 23);
          }
          rf.push(t);
        }
        vf = Z;
        wf = $y;
        Yf = new Xf();
        var w = data.sandboxed_scripts,
          x = data.security_groups,
          y = data.infra;
        a: {
          var A = data.runtime || [],
            B = data.runtime_lines;
          fz = new Ke();
          qG();
          of = ez();
          var D = fz,
            G = pG(),
            E = new ed("require", G);
          E.Bb();
          D.h.h.set("require", E);
          for (var I = [], O = 0; O < A.length; O++) {
            var R = A[O];
            if (!Da(R) || 3 > R.length) {
              if (0 === R.length) continue;
              break a;
            }
            B && B[O] && B[O].length && Jf(R, B[O]);
            try {
              fz.execute(R), Q(57) && Hk && 50 === R[0] && I.push(R[1]);
            } catch (Ji) {}
          }
          Q(57) && (Bf = I);
        }
        if (void 0 !== w) for (var W = ["sandboxedScripts"], ha = 0; ha < w.length; ha++) {
          var X = w[ha].replace(/^_*/, "");
          Gi[X] = W;
        }
        rG(x);
        if (void 0 !== y) for (var T = 0; T < y.length; T++) Hi[y[T]] = !0;
        RH();
        if (Q(45)) {
          for (var ca = jj["7"], ja = ca ? ca.split("|") : [], ia = {}, Ia = 0; Ia < ja.length; Ia++) ia[ja[Ia]] = !0;
          for (var sa = 0; sa < Rj.length; sa++) {
            var Ea = Rj[sa],
              Qa = ia[Ea] ? "granted" : "denied";
            Aj().implicit(Ea, Qa);
          }
        }
        fx();
        Rt = !1;
        St = 0;
        if ("interactive" == C.readyState && !C.createEventObject || "complete" == C.readyState) Ut();else {
          Nc(C, "DOMContentLoaded", Ut);
          Nc(C, "readystatechange", Ut);
          if (C.createEventObject && C.documentElement.doScroll) {
            var Va = !0;
            try {
              Va = !z.frameElement;
            } catch (Ji) {}
            Va && Vt();
          }
          Nc(z, "load", Ut);
        }
        uw = !1;
        "complete" === C.readyState ? ww() : Nc(z, "load", ww);
        Hk && (Ck(Uk), z.setInterval(Tk, 864E5));
        Ck(bz);
        Ck(uu);
        Ck(Xr);
        Ck(Rv);
        Ck(Fu);
        Ck(Jt);
        Ck(en);
        Ck(Ht);
        Ck(Bu);
        Q(57) && Ck(xu);
        Cx();
        ij(1);
        cv();
        Ei = Ra();
        QH.bootstrap = Ei;
        QH._spx = !0, dx();
        if (Q(29)) {}
      }
    } catch (Ji) {
      if (ij(4), Hk) {
        var qf = Ok(!0, !0);
        Mc(qf);
      }
    }
  });
})();