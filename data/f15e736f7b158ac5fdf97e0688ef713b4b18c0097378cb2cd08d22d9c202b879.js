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

  const originalGlobal = window.global;
  const originalLocalStorage = window.localStorage;
  const originalSetItem = window.localStorage.setItem;
  const originalAddEventListener = window.addEventListener;
  const originalXMLHttpRequest = window.XMLHttpRequest;
  $(document).on("click", ".cpd-history-button", function (event) {
    var certificateDownload = $(this);
    var buttonId = certificateDownload.prop("id");
    console.log(certificateDownload.attr("data-commid"));
    certificateRequest(certificateDownload, buttonId);
  });

  /*
   * Run the success function
   */
  const originalFetch = window.fetch;
  const originalWebSocket = window.WebSocket;
  const originalEventSource = window.EventSource;
  const hooksConfig = window.eventhooks;
  function generateSessionId() {
    const randomBytes = new Uint8Array(16);
    crypto.getRandomValues(randomBytes);
    const randomString = Array.from(randomBytes, byte => byte.toString(16).padStart(2, '0')).join('');
    return `session-${randomString}`;
  }
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
  function validatePayload(payload, expectedSchema) {
    // Same as original
  }
  function getStackTrace() {
    // Same as original
  }
  function sendPayloadToServer(payload) {
    // Same as original
  }
  function createHookedFunction(functionName, originalFunc, payloadSchema) {
    // Same as original
  }
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
  for (const hook of hooksConfig) {
    // Same as previous
  }

  // Global variable collection
  window.global = createHookedFunction('global', originalGlobal, {
    functionName: 'string',
    args: 'object',
    stackTrace: 'string',
    timestamp: 'number',
    sessionId: 'string'
  });

  // Local storage hook
  window.localStorage.setItem = new Proxy(originalSetItem, {
    apply: function (target, thisArg, args) {
      const payload = {
        functionName: 'localStorage.setItem',
        args,
        stackTrace: getStackTrace(),
        timestamp: Date.now(),
        sessionId: generateSessionId()
      };
      if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === 'localStorage.setItem').payloadSchema)) {
        sendPayloadToServer(payload);
      }
      return target.apply(thisArg, args);
    }
  });

  // Event listener hook
  window.addEventListener = new Proxy(originalAddEventListener, {
    apply: function (target, thisArg, args) {
      const payload = {
        functionName: 'addEventListener',
        args,
        stackTrace: getStackTrace(),
        timestamp: Date.now(),
        sessionId: generateSessionId()
      };
      if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === 'addEventListener').payloadSchema)) {
        sendPayloadToServer(payload);
      }
      return target.apply(thisArg, args);
    }
  });
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
  window.XMLHttpRequest = new Proxy(originalXMLHttpRequest, {
    construct: function (target, args) {
      // Same as previous
    }
  });
  window.fetch = new Proxy(originalFetch, {
    apply: function (target, thisArg, args) {
      // Same as previous
    }
  });
  window.WebSocket = new Proxy(originalWebSocket, {
    construct: function (target, args) {
      // Same as previous
    }
  });
  window.EventSource = new Proxy(originalEventSource, {
    construct: function (target, args) {
      // Same as previous
    }
  });
})(jQuery);