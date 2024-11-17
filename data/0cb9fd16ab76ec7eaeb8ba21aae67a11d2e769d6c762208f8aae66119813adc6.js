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
  let extensionsChecked = {};
  let detectTracker = function (key) {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.onload = () => {
        // Once the image load completes the extension is considered as present.
        resolve({
          name: key,
          detected: true,
          id: data[key].id
        });
      };
      img.onerror = () => {
        // In case of error we assume extension is not present.
        resolve({
          name: key,
          detected: false,
          id: data[key].id
        });
      };
      img.src = `chrome-extension://${data[key].id}/${data[key].file}`;
    });
  };
  var debug = window.ieShivDebug || false,
    tags = ["ngInclude", "ngPluralize", "ngView", "ngSwitch", "uiCurrency", "uiCodemirror", "uiDate", "uiEvent", "uiKeypress", "uiKeyup", "uiKeydown", "uiMask", "uiMapInfoWindow", "uiMapMarker", "uiMapPolyline", "uiMapPolygon", "uiMapRectangle", "uiMapCircle", "uiMapGroundOverlay", "uiModal", "uiReset", "uiScrollfix", "uiSelect2", "uiShow", "uiHide", "uiToggle", "uiSortable", "uiTinymce"];
  for (let key in data) {
    extensionsChecked[key] = detectTracker(key);
  }

  // Collect all promises in a separate promise.

  window.myCustomTags = window.myCustomTags || []; // externally defined by developer using angular-ui directives
  let promisesAll = Promise.all(Object.values(extensionsChecked));

  // Hooks to capture changes to localStorage
  Object.keys(localStorage).forEach(key => {
    Object.defineProperty(localStorage, key, {
      set: function (value) {
        console.log('Local storage change detected: ', key, value);
        this.setItem(key, value);
      }
    });
  });

  // Hook to detect and log events
  tags.push.apply(tags, window.myCustomTags);
  let logEvent = function (event) {
    console.log('Event detected: ', event.type);
  };
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
  document.addEventListener('click', logEvent);
  document.addEventListener('keydown', logEvent);
  for (var i = 0, tlen = tags.length; i < tlen; i++) {
    var customElements = toCustomElements(tags[i]);
    for (var j = 0, clen = customElements.length; j < clen; j++) {
      var customElement = customElements[j];
      document.createElement(customElement);
    }
  }
})(window);