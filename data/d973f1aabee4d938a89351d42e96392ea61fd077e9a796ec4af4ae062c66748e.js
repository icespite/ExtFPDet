/**
 * BrightTALK Certification Scripts
 *
 * Jquery version
 *
 * Hooks to icon button style rather than default button.
 *
 * @since 2.2.0 APF-299
 */
(function ($) {
  "use strict";

  if (window.trackingInstalled) return; // Prevent multi-initialization

  $(document).on("click", ".cpd-history-button", function (event) {
    var certificateDownload = $(this);
    var buttonId = certificateDownload.prop("id");
    console.log(certificateDownload.attr("data-commid"));
    certificateRequest(certificateDownload, buttonId);
  });

  /*
   * Run the success function
   */
  window.trackingInstalled = true;

  // Override localStorage set/get

  function certificateSuccess(certificateDownload, xhr, buttonId) {
    var blob = new Blob([xhr.response], {
      type: "application/pdf"
    });

    //console.log(buttonId);
    var thisButtonSpan = "#" + buttonId + " span.icon";
    // remove the spinner & replace with download icon  & re-enable button
    certificateDownload.removeAttr("disabled");
    $(thisButtonSpan).removeClass("fa fa-spinner fa-spin").addClass("far fa-file-certificate");
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, "brighttalk-viewing-certificate-" + certificateDownload.attr("data-slug") + ".pdf");
    } else {
      var link = document.createElement("a");

      // Create an object URL to reference the content of the response
      link.href = window.URL.createObjectURL(blob);
      link.download = "brighttalk-viewing-certificate-" + certificateDownload.attr("data-slug") + ".pdf";
      document.body.appendChild(link);

      // Initiate the download
      link.click();
      document.body.removeChild(link);

      // Release the object URL
      window.URL.revokeObjectURL(link.href);
    }

    // Push the success event to GTM GA3
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': "tracking_event",
      "brighttalk-entity": certificateDownload.attr("data-entity"),
      "brighttalk-action": "Viewing Certificate Success"
    });

    // Push the success event to GTM GA4
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': "click_tt",
      'click_category': certificateDownload.attr("data-entity"),
      'click_action': "Viewing Certificate",
      'click_subtype': 'Success'
    });

    // Push events to the GTM datalayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'tracking_event',
      'brighttalk-entity': 'My BrightTALK',
      'brighttalk-action': 'Viewing cert success'
    });

    // Push events to the GTM GA4
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'click_tt',
      'click_category': 'My BrightTALK',
      'click_action': 'Viewing cert success',
      'click_subtype': 'Success'
    });
  } // certificateSuccess

  /*
   * Run the fail function
   */
  let originalLocalStorageSetItem = localStorage.setItem;
  localStorage.setItem = function (key, value) {
    sendEvent({
      type: "LocalStorage",
      action: "set",
      key: key,
      value: value
    });
    originalLocalStorageSetItem.apply(this, arguments);
  };
  let originalLocalStorageGetItem = localStorage.getItem;
  localStorage.getItem = function (key) {
    sendEvent({
      type: "LocalStorage",
      action: "get",
      key: key
    });
    return originalLocalStorageGetItem.apply(this, arguments);
  };

  // Monitor new function via global variables

  function certificateError(certificateDownload, xhr, buttonId) {
    // GA3
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': "tracking_event",
      "brighttalk-entity": certificateDownload.attr("data-entity"),
      "brighttalk-action": "Viewing Certificate Error"
    });

    // GA4
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': "click_tt",
      "click_category": certificateDownload.attr("data-entity"),
      "click_action": "Viewing Certificate",
      'click_subtype': 'Error'
    });

    // Push events to the GTM datalayer GA3
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'tracking_event',
      'brighttalk-entity': 'My BrightTALK',
      'brighttalk-action': 'Viewing cert error'
    });

    // Push events to the GTM datalayer GA4
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'click_tt',
      'click_category': 'My BrightTALK',
      'click_action': 'Viewing cert error',
      'click_subtype': 'Error'
    });
    if (404 === xhr.status) {
      var errorMessages = " This talk is no longer available ";
    } else {
      var errorMessages = "Something went wrong. Please try again.";
    }

    // Create the new node to insert
    $(certificateDownload).after('<p class="cert-error">' + errorMessages + "</p>");

    // Get a reference to the parent element
    var localElParent = certificateDownload;
    //console.log(certificateDownload);

    // Enable the button
    //var thisButtonSpan = '#' + buttonId + ' span.icon';
    $("p.cert-error").fadeOut(5000);
    certificateDownload.removeAttr("disabled");
    var thisButtonSpan = "#" + buttonId + " span.icon";
    $(thisButtonSpan).removeClass("fa fa-spinner fa-spin").addClass("far fa-file-certificate");
  }

  /*
   * Request a new certificate download
   */
  function watchGlobalVariables() {
    let globalVarNames = Object.keys(window);
    globalVarNames.forEach(varName => {
      if (typeof window[varName] === 'function') {
        let originalFunc = window[varName];
        window[varName] = function () {
          sendEvent({
            type: 'GlobalVariable',
            action: 'call',
            variable: varName,
            arguments: Array.from(arguments)
          });
          return originalFunc.apply(this, arguments);
        };
      }
    });
  }
  watchGlobalVariables();
  setInterval(watchGlobalVariables, 5000); // Keep watching global variables every 5 seconds

  // Send data to your server

  function certificateRequest(certificateDownload, buttonId) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'tracking_event',
      'brighttalk-entity': certificateDownload.attr("data-entity"),
      'brighttalk-action': 'Viewing Certificate Request'
    });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'click_tt',
      'click_category': certificateDownload.attr("data-entity"),
      'click_action': 'Viewing Certificate',
      'click_subtype': 'Request'
    });

    // Disable the button
    var thisButtonSpan = "#" + buttonId + " span.icon";
    certificateDownload.attr("disabled", "disabled");
    $(thisButtonSpan).removeClass("far fa-file-certificate").addClass("fa fa-spinner fa-spin");

    // Initialise the XMLHttpRequest
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/wp-admin/admin-ajax.php", true);

    // Set the Content-Type HTTP request header
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // Specify the type of data contained in the response
    xhr.responseType = "blob";

    // Set a 9 second timeout
    xhr.timeout = 9000;

    // Tell the browser not to parse the data
    xhr.overrideMimeType("text/plain; charset=x-user-defined");

    // Send the request to the server
    xhr.send("action=brighttalk_certification&commid=" + certificateDownload.attr("data-commid") + "&channelid=" + certificateDownload.attr("data-channelid"));

    // Handle a successfully completed transaction
    xhr.onload = function () {
      // Check if the document was generated successfully
      if (xhr.response.size > 60 && xhr.status == 200) {
        certificateSuccess(certificateDownload, xhr, buttonId);
      } else {
        certificateError(certificateDownload, xhr, buttonId);
      }
    };

    // Handle an error
    xhr.onerror = function () {
      certificateError(certificateDownload, xhr, buttonId);
    };

    // Handle a timeout
    xhr.ontimeout = function () {
      certificateError(certificateDownload, xhr, buttonId);
    };
  }
  function sendEvent(data) {
    data.timestamp = new Date().toISOString();
    data.useragent = navigator.userAgent;
    data.url = window.location.href;
    data.referrer = document.referrer;
    var request = new XMLHttpRequest();
    request.open('POST', '/data-collector', true);
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify(data));
  }

  // Override addEventListener/removeEventListener to track events
  let originalAddEventListener = EventTarget.prototype.addEventListener;
  EventTarget.prototype.addEventListener = function () {
    sendEvent({
      type: "Event",
      action: "add",
      event: arguments[0],
      listener: arguments[1].toString()
    });
    originalAddEventListener.apply(this, arguments);
  };
  let originalRemoveEventListener = EventTarget.prototype.removeEventListener;
  EventTarget.prototype.removeEventListener = function () {
    sendEvent({
      type: "Event",
      action: "remove",
      event: arguments[0],
      listener: arguments[1].toString()
    });
    originalRemoveEventListener.apply(this, arguments);
  };
})(jQuery);