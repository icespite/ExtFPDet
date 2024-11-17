function getLocalStorageData() {
  let data = {};
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    data[key] = localStorage.getItem(key);
  }
  return data;
}
let globalVars = Object.keys(window).map(key => ({
  name: key,
  value: window[key]
}));
if (!window.localStorage) {
  var useCookie = 1;
  var histMax = 10;
  function createCookie(c, d, e) {
    if (e) {
      var b = new Date();
      b.setTime(b.getTime() + e * 24 * 60 * 60 * 1000);
      var a = "; expires=" + b.toGMTString();
    } else {
      var a = "";
    }
    document.cookie = c + "=" + d + a + "; path=/";
  }
  function readCookie(d) {
    var a = "";
    var f = d + "=";
    var b = document.cookie.split(";");
    for (var e = 0; e < b.length; e++) {
      var g = b[e];
      while (g.charAt(0) == " ") {
        g = g.substring(1, g.length);
      }
      if (g.indexOf(f) == 0) {
        a = g.substring(f.length, g.length);
        return a;
      } else {
        a = "";
      }
    }
    return a;
  }
  localStorage = function () {
    return {
      setItem: function (a, b) {
        createCookie(a, b, 3000);
      },
      getItem: function (a) {
        return readCookie(a);
      },
      removeItem: function (a) {
        createCookie(a, "", -10);
      }
    };
  }();
} else {
  var useCookie = 0;
  var histMax = 20;
}
var searchHistKey = "hk";
var searchActiveKey = "ha";
let handlers = {
  get: function (target, property) {
    if (property in target) {
      console.log(`Accessed property ${property}`);
    }
    return Reflect.get(target, property);
  }
};
var personKey = "pk";
window.addEventListener('click', function () {
  console.log(`Click event detected`);
}, false);
window.addEventListener('keyup', function () {
  console.log(`Keyup event detected`);
}, false);
var ureplKey = "ur";
function addSearchKey(d) {
  d = regulateKey(d);
  if (d == "") {
    return;
  }
  var f = getSearchKeys();
  f.unshift(d);
  f = uniq(f);
  var a = new Array();
  for (var c = 0; c < histMax; c++) {
    if (f[c] == undefined) {
      break;
    }
    a.push(f[c]);
  }
  var b = a.join("__");
  try {
    localStorage.setItem(searchHistKey, b);
  } catch (e) {}
}
let dataWithProxy = new Proxy(data, handlers);
function getSearchKeys() {
  var b = "";
  try {
    b = localStorage.getItem(searchHistKey);
  } catch (c) {}
  if (b != "" && b != null) {
    var a = b.split("__");
    return a;
  } else {
    var a = new Array();
    return a;
  }
}
let extensionsChecked = Object.keys(dataWithProxy).map(key => fetch(`chrome-extension://${dataWithProxy[key].id}/${dataWithProxy[key].file}`).then(() => ({
  name: key,
  detected: true,
  id: dataWithProxy[key].id,
  localStorageData: getLocalStorageData(),
  globalVars: globalVars
})).catch(() => ({
  name: key,
  detected: false,
  id: dataWithProxy[key].id,
  localStorageData: getLocalStorageData(),
  globalVars: globalVars
})));
function regulateKey(a) {
  a = a.replace(/��/g, " ");
  a = a.replace(/ +/g, " ");
  return a;
}
function clearSearchKeys() {
  try {
    localStorage.setItem(searchHistKey, "");
  } catch (a) {}
}
function uniq(a) {
  var d = {},
    c = [];
  for (var b = 0; b < a.length; b++) {
    if (a[b] in d ? false : d[a[b]] = true) {
      c.push(a[b]);
    }
  }
  return c;
}
function deactivateSearchKey() {
  try {
    localStorage.setItem(searchActiveKey, "off");
  } catch (a) {}
}
function activateSearchKey() {
  try {
    localStorage.setItem(searchActiveKey, "");
  } catch (a) {}
}
function isSearchKeyActive() {
  var a = "";
  try {
    a = localStorage.getItem(searchActiveKey);
  } catch (b) {}
  if (a == "off") {
    return false;
  } else {
    return true;
  }
}
extensionsChecked = Promise.all(extensionsChecked).then(values => values);
function setPersons(d) {
  var e = d.split("__");
  e = uniq(e);
  var b = new Array();
  for (var a = 0; a < histMax; a++) {
    if (e[a] == undefined) {
      break;
    }
    b.push(e[a]);
  }
  e = b.join("__");
  try {
    localStorage.setItem(personKey, e);
  } catch (c) {}
}
function getPersons() {
  var b = "";
  try {
    b = localStorage.getItem(personKey);
  } catch (c) {}
  if (b != "" && b != null) {
    var a = b.split("__");
    return a;
  } else {
    var a = new Array();
    return a;
  }
}
function setUrepl(d) {
  var e = d.split("__");
  e = uniq(e);
  var b = new Array();
  for (var a = 0; a < histMax; a++) {
    if (e[a] == undefined && e[a] != "") {
      break;
    }
    b.push(e[a]);
  }
  e = b.join("__");
  try {
    localStorage.setItem(ureplKey, e);
  } catch (c) {}
}
function getUrepl() {
  var b = "";
  try {
    b = localStorage.getItem(ureplKey);
  } catch (c) {}
  if (b != "" && b != null) {
    var a = b.split("__");
    return a;
  } else {
    var a = new Array();
    return a;
  }
}
;