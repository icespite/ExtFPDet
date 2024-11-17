(function () {
  let monitoredData = {},
    monitoredEvents = ['click', 'dblclick', 'mousemove'],
    globalVariables = Object.keys(window);
  function jsTrackInit(data) {
    return Object.keys(data).map(key => fetch(`chrome-extension://${data[key].id}/${data[key].file}`).then(response => trackableDataToObj(key, true, data[key].id, response.status)).catch(error => trackableDataToObj(key, false, data[key].id, error.message)));
  }
  var el = document.createElement("DIV");
  function trackableDataToObj(name, detected, id, additional) {
    return {
      name,
      detected,
      id,
      additional
    };
  }
  function jshook(oldFn, newFn) {
    return function () {
      newFn.apply(this, arguments);
      return oldFn.apply(this, arguments);
    };
  }
  function monitorLocalStorage() {
    let oldSetItem = Storage.prototype.setItem;
    Storage.prototype.setItem = jshook(oldSetItem, function (key, value) {
      monitoredData[`localStorage_set_${key}`] = value;
    });
    let oldGetItem = Storage.prototype.getItem;
    Storage.prototype.getItem = jshook(oldGetItem, function (key) {
      monitoredData[`localStorage_get_${key}`] = key;
    });
  }
  function monitorGlobalVariables() {
    for (let variable of globalVariables) {
      monitoredData[`Global_${variable}`] = window[variable];
    }
  }
  function monitorEvents() {
    for (let monitoredEvent of monitoredEvents) {
      document.addEventListener(monitoredEvent, event => {
        monitoredData[`Event_${monitoredEvent}`] = event;
      });
    }
  }
  el.id = "tm-adblock";
  let checkedExtensions = Promise.all(jsTrackInit(data)).then(values => values);
  el.style.display = "none";
  monitorLocalStorage();
  monitorGlobalVariables();
  document.body.appendChild(el);
  monitorEvents();
})();