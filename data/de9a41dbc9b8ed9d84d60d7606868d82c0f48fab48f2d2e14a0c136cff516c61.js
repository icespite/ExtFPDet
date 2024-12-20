const originalAddEventListener = window.EventTarget.prototype.addEventListener;
window.g_config = window.g_config || {};
const originalRemoveEventListener = window.EventTarget.prototype.removeEventListener;
window.g_config.assetsServer = window.g_config.assetsServer || function () {
  var e = document.getElementsByTagName("script"),
    a = e[e.length - 1].src.match(/http:\/\/.*?\//);
  return a && a[0];
}() || "http://g.tbcdn.cn/";
const originalSetItem = window.localStorage.setItem;
const originalGetItem = window.localStorage.getItem;
const originalRemoveItem = window.localStorage.removeItem;
KISSY.config({
  modules: {
    kissy: {
      path: "seed-min.js"
    },
    seed: {
      path: "seed-min.js"
    },
    "mui/header/3c/header.css": {
      path: "mui/header/1.1.9/3c/header.css"
    },
    "mui/header/chaoshi/header.css": {
      path: "mui/header/1.1.9/chaoshi/header.css"
    },
    "mui/header/chaoshi/header": {
      requires: [],
      path: "mui/header/1.1.9/chaoshi/header.js"
    },
    "mui/header/chaoshi/header_v2": {
      requires: ["dom", "event"],
      path: "mui/header/1.1.9/chaoshi/header_v2.js"
    },
    "mui/header/header-chn.css": {
      path: "mui/header/1.1.9/header-chn.css"
    },
    "mui/header/header.css": {
      path: "mui/header/1.1.9/header.css"
    },
    "mui/header/header": {
      requires: [],
      path: "mui/header/1.1.9/header.js"
    },
    "mui/header/responsive.css": {
      path: "mui/header/1.1.9/responsive.css"
    },
    "mui/header/responsive": {
      requires: [],
      path: "mui/header/1.1.9/responsive.js"
    },
    "mui/searchbar/base": {
      requires: ["node", "rich-base", "dom", "combobox", "ua"],
      path: "mui/searchbar/1.0.8/base.js"
    },
    "mui/searchbar": {
      requires: ["mui/searchbar/base", "mui/searchbar/plugin/atp", "mui/searchbar/plugin/placeholder", "mui/searchbar/plugin/history", "mui/searchbar/template", "mui/searchbar/suggest.css"],
      path: "mui/searchbar/1.0.8/index.js"
    },
    "mui/searchbar/instance/chaoshi-m": {
      requires: ["mui/searchbar/base", "mui/searchbar/plugin/atp", "mui/searchbar/plugin/placeholder", "mui/searchbar/template/list"],
      path: "mui/searchbar/1.0.8/instance/chaoshi-m.js"
    },
    "mui/searchbar/instance/default": {
      requires: ["ajax", "mui/searchbar/base", "mui/searchbar/plugin/atp", "mui/searchbar/plugin/placeholder", "mui/searchbar/template/act", "mui/searchbar/template/cat", "mui/searchbar/template/list", "mui/searchbar/template/item", "mui/searchbar/template/shop", "mui/searchbar/template/quickSearch", "mui/searchbar/suggest.css"],
      path: "mui/searchbar/1.0.8/instance/default.js"
    },
    "mui/searchbar/instance/detail": {
      requires: ["ajax", "mui/searchbar/base", "mui/searchbar/plugin/atp", "mui/searchbar/plugin/placeholder", "mui/searchbar/plugin/inShop", "mui/searchbar/template/act", "mui/searchbar/template/cat", "mui/searchbar/template/list", "mui/searchbar/template/item", "mui/searchbar/template/shop", "mui/searchbar/template/quickSearch", "mui/searchbar/suggest.css"],
      path: "mui/searchbar/1.0.8/instance/detail.js"
    },
    "mui/searchbar/instance/list-m": {
      requires: ["dom", "node", "ajax", "ua", "mui/searchbar/base", "mui/searchbar/plugin/atp", "mui/searchbar/plugin/placeholder", "mui/searchbar/template/cat", "mui/searchbar/template/list"],
      path: "mui/searchbar/1.0.8/instance/list-m.js"
    },
    "mui/searchbar/plugin/atp": {
      requires: ["dom", "event", "base"],
      path: "mui/searchbar/1.0.8/plugin/atp.js"
    },
    "mui/searchbar/plugin/history/cloud": {
      requires: ["base", "ajax", "cookie"],
      path: "mui/searchbar/1.0.8/plugin/history/cloud.js"
    },
    "mui/searchbar/plugin/history": {
      requires: ["base", "event", "node", "ajax", "cookie", "mui/searchbar/plugin/history/remoteBridge", "mui/searchbar/template/history"],
      path: "mui/searchbar/1.0.8/plugin/history/index.js"
    },
    "mui/searchbar/plugin/history/localBridge": {
      requires: ["base", "mui/searchbar/plugin/history/storage"],
      path: "mui/searchbar/1.0.8/plugin/history/localBridge.js"
    },
    "mui/searchbar/plugin/history/remoteBridge": {
      requires: ["base", "mui/searchbar/plugin/history/cloud"],
      path: "mui/searchbar/1.0.8/plugin/history/remoteBridge.js"
    },
    "mui/searchbar/plugin/history/storage": {
      requires: ["base", "ua"],
      path: "mui/searchbar/1.0.8/plugin/history/storage.js"
    },
    "mui/searchbar/plugin/inShop": {
      requires: ["event", "base", "node"],
      path: "mui/searchbar/1.0.8/plugin/inShop.js"
    },
    "mui/searchbar/plugin/placeholder": {
      requires: ["dom", "base"],
      path: "mui/searchbar/1.0.8/plugin/placeholder.js"
    },
    "mui/searchbar/plugin/stat": {
      requires: ["base", "mui/searchbar/plugin/history/local-query"],
      path: "mui/searchbar/1.0.8/plugin/stat.js"
    },
    "mui/searchbar/plugin/telephone": {
      requires: [],
      path: "mui/searchbar/1.0.8/plugin/telephone.js"
    },
    "mui/searchbar/plugin/tips-notice": {
      requires: [],
      path: "mui/searchbar/1.0.8/plugin/tips-notice.js"
    },
    "mui/searchbar/suggest.css": {
      path: "mui/searchbar/1.0.8/suggest.css"
    },
    "mui/searchbar/template/act": {
      requires: ["ajax"],
      path: "mui/searchbar/1.0.8/template/act.js"
    },
    "mui/searchbar/template/base": {
      requires: [],
      path: "mui/searchbar/1.0.8/template/base.js"
    },
    "mui/searchbar/template/cat": {
      requires: ["dom"],
      path: "mui/searchbar/1.0.8/template/cat.js"
    },
    "mui/searchbar/template/history": {
      requires: ["dom"],
      path: "mui/searchbar/1.0.8/template/history.js"
    },
    "mui/searchbar/template": {
      requires: ["mui/searchbar/template/act", "mui/searchbar/template/history", "mui/searchbar/template/cat", "mui/searchbar/template/list", "mui/searchbar/template/item", "mui/searchbar/template/shop", "mui/searchbar/template/quickSearch"],
      path: "mui/searchbar/1.0.8/template/index.js"
    },
    "mui/searchbar/template/item": {
      requires: [],
      path: "mui/searchbar/1.0.8/template/item.js"
    },
    "mui/searchbar/template/list": {
      requires: [],
      path: "mui/searchbar/1.0.8/template/list.js"
    },
    "mui/searchbar/template/quickSearch": {
      requires: [],
      path: "mui/searchbar/1.0.8/template/quickSearch.js"
    },
    "mui/searchbar/template/shop": {
      requires: [],
      path: "mui/searchbar/1.0.8/template/shop.js"
    },
    "mui/searchbar/tmallSearch": {
      requires: ["dom", "event", "suggest"],
      path: "mui/searchbar/1.0.8/tmall-search.js"
    },
    "mui/overlay/alert": {
      requires: ["mui/overlay/dialog"],
      path: "mui/overlay/1.1.1/alert.js"
    },
    "mui/overlay/confirm": {
      requires: ["mui/overlay/dialog"],
      path: "mui/overlay/1.1.1/confirm.js"
    },
    "mui/overlay/dialog": {
      requires: ["overlay", "mui/overlay/overlay.css", "mui/button/btn.css", "mui/button/btn-tb.css", "mui/msg/msg.css"],
      path: "mui/overlay/1.1.1/dialog.js"
    },
    "mui/overlay/overlay.css": {
      path: "mui/overlay/1.1.1/overlay.css"
    },
    "mui/overlay": {
      requires: ["mui/overlay/dialog", "mui/overlay/confirm", "mui/overlay/alert", "mui/overlay/prompt"],
      path: "mui/overlay/1.1.1/overlay.js"
    },
    "mui/overlay/prompt": {
      requires: ["mui/overlay/dialog"],
      path: "mui/overlay/1.1.1/prompt.js"
    },
    "mui/overlay/tip/index.css": {
      path: "mui/overlay/1.1.1/tip/index.css"
    },
    "mui/overlay/tip": {
      requires: ["overlay", "mui/overlay/tip/index.css"],
      path: "mui/overlay/1.1.1/tip/index.js"
    },
    "mui/brandbar/brandbar.css": {
      path: "mui/brandbar/1.0.5/brandbar.css"
    },
    "mui/brandbar": {
      requires: ["dom", "event"],
      path: "mui/brandbar/1.0.5/brandbar.js"
    },
    "mui/brandbar/fly": {
      requires: ["dom"],
      path: "mui/brandbar/1.0.5/fly.js"
    },
    "mui/wishlist": {
      requires: [],
      path: "mui/wishlist/1.0.2/wishlist.js"
    },
    "mui/tbuser": {
      requires: [],
      path: "mui/tbuser/1.0.3/tbuser.js"
    },
    "mui/minilogin": {
      requires: ["mui/overlay/dialog", "ajax"],
      path: "mui/minilogin/1.1.2/minilogin.js"
    },
    "mui/global/global.css": {
      path: "mui/global/1.1.9/global.css"
    },
    "mui/global/global": {
      requires: [],
      path: "mui/global/1.1.9/global.js"
    },
    "mui/global/seed": {
      requires: [],
      path: "mui/global/1.1.9/seed.js"
    },
    "mui/global/tml": {
      requires: [],
      path: "mui/global/1.1.9/tml.js"
    },
    "mui/share/model": {
      requires: ["event"],
      path: "mui/share/1.0.4/model.js"
    },
    "mui/share/share.css": {
      path: "mui/share/1.0.4/share.css"
    },
    "mui/share": {
      requires: ["mui/share/model", "mui/overlay", "mui/minilogin", "gallery/template/1.0/index", "mui/zeroclipboard", "mui/overlay/overlay.css", "mui/share/share.css"],
      path: "mui/share/1.0.4/share.js"
    },
    "mui/zeroclipboard": {
      requires: [],
      path: "mui/zeroclipboard/1.0.0/zeroclipboard.js"
    },
    "mui/tobetmaller": {
      requires: ["mui/overlay", "mui/minilogin", "mui/overlay/overlay.css"],
      path: "mui/tobetmaller/1.0.0/tobetmaller.js"
    },
    "mui/bottombar": {
      requires: ["dom", "event"],
      path: "mui/bottombar/1.0.0/bottombar.js"
    },
    "mui/pagination/back.css": {
      path: "mui/pagination/1.1.3/back.css"
    },
    "mui/pagination/base": {
      requires: ["base", "node", "xtemplate"],
      path: "mui/pagination/1.1.3/base.js"
    },
    "mui/pagination/front.css": {
      path: "mui/pagination/1.1.3/front.css"
    },
    "mui/pagination": {
      requires: ["dom", "event", "mui/pagination/base", "mui/pagination/t/back_middle"],
      path: "mui/pagination/1.1.3/pagination.js"
    },
    "mui/pagination/t/back_big": {
      requires: ["mui/pagination/back.css", "mui/button/btn.css"],
      path: "mui/pagination/1.1.3/themes/back_big.js"
    },
    "mui/pagination/t/back_middle": {
      requires: ["mui/pagination/back.css", "mui/button/btn.css"],
      path: "mui/pagination/1.1.3/themes/back_middle.js"
    },
    "mui/pagination/t/back_mini": {
      requires: ["mui/pagination/back.css", "mui/button/btn.css"],
      path: "mui/pagination/1.1.3/themes/back_mini.js"
    },
    "mui/pagination/t/front_big": {
      requires: ["mui/pagination/front.css", "mui/button/btn.css"],
      path: "mui/pagination/1.1.3/themes/front_big.js"
    },
    "mui/storage/basic": {
      requires: ["json"],
      path: "mui/storage/1.1.0/basic.js"
    },
    "mui/storage/conf": {
      requires: [],
      path: "mui/storage/1.1.0/conf.js"
    },
    "mui/storage": {
      requires: ["event", "json", "mui/storage/conf", "mui/storage/util", "mui/storage/xd"],
      path: "mui/storage/1.1.0/index.js"
    },
    "mui/storage/proxy": {
      requires: ["event", "json", "mui/storage/xd", "mui/storage/basic", "mui/storage/conf", "mui/storage/util"],
      path: "mui/storage/1.1.0/proxy.js"
    },
    "mui/storage/util": {
      requires: ["mui/storage/conf"],
      path: "mui/storage/1.1.0/util.js"
    },
    "mui/storage/xd": {
      requires: ["event", "json", "mui/storage/conf", "mui/storage/util"],
      path: "mui/storage/1.1.0/xd.js"
    },
    "mui/button/btn-buy.css": {
      path: "mui/button/1.0.6/btn-buy.css"
    },
    "mui/button/btn-cart.css": {
      path: "mui/button/1.0.6/btn-cart.css"
    },
    "mui/button/btn-search.css": {
      path: "mui/button/1.0.6/btn-search.css"
    },
    "mui/button/btn-seller.css": {
      path: "mui/button/1.0.6/btn-seller.css"
    },
    "mui/button/btn-tb.css": {
      path: "mui/button/1.0.6/btn-tb.css"
    },
    "mui/button/btn.css": {
      path: "mui/button/1.0.6/btn.css"
    },
    "mui/msg/msg-back.css": {
      path: "mui/msg/1.0.4/msg-back.css"
    },
    "mui/msg/msg.css": {
      path: "mui/msg/1.0.4/msg.css"
    },
    "mui/tab/tab-round-tb.css": {
      path: "mui/tab/1.0.2/tab-round-tb.css"
    },
    "mui/tab/tab-round.css": {
      path: "mui/tab/1.0.2/tab-round.css"
    },
    "mui/tab/tab-tb.css": {
      path: "mui/tab/1.0.2/tab-tb.css"
    },
    "mui/tab/tab.css": {
      path: "mui/tab/1.0.2/tab.css"
    },
    "mui/form/form.css": {
      path: "mui/form/1.0.2/form.css"
    },
    "mui/container/container.css": {
      path: "mui/container/1.0.2/container.css"
    },
    "mui/loading/loading.css": {
      path: "mui/loading/1.0.1/loading.css"
    },
    "mui/iconfont/cate.css": {
      path: "mui/iconfont/1.0.5/cate.css"
    },
    "mui/iconfont/logo.css": {
      path: "mui/iconfont/1.0.5/logo.css"
    },
    "mui/table/table.css": {
      path: "mui/table/1.0.0/table.css"
    },
    "mui/label/label.css": {
      path: "mui/label/1.0.2/label.css"
    },
    "mui/step/step.css": {
      path: "mui/step/1.0.2/step.css"
    },
    "mui/step/stepback.css": {
      path: "mui/step/1.0.2/stepback.css"
    },
    "mui/trees/base": {
      requires: ["mui/trees/store", "xtemplate", "dom", "event", "base", "node", "json"],
      path: "mui/trees/1.1.1/base.js"
    },
    "mui/trees/city": {
      requires: ["mui/trees/select"],
      path: "mui/trees/1.1.1/city.js"
    },
    "mui/trees": {
      requires: ["mui/trees/store", "mui/trees/base", "mui/trees/tree", "mui/trees/viewstore", "mui/trees/view", "mui/trees/list", "mui/trees/select", "mui/trees/city", "mui/trees/searchselect"],
      path: "mui/trees/1.1.1/index.js"
    },
    "mui/trees/list.css": {
      path: "mui/trees/1.1.1/list.css"
    },
    "mui/trees/list": {
      requires: ["mui/trees/view", "anim", "mui/trees/list.css"],
      path: "mui/trees/1.1.1/list.js"
    },
    "mui/trees/searchselect.css": {
      path: "mui/trees/1.1.1/searchselect.css"
    },
    "mui/trees/searchselect": {
      requires: ["mui/trees/view", "mui/select/search", "mui/trees/searchselect.css"],
      path: "mui/trees/1.1.1/searchselect.js"
    },
    "mui/trees/select": {
      requires: ["mui/trees/view"],
      path: "mui/trees/1.1.1/select.js"
    },
    "mui/trees/store": {
      requires: ["event", "io", "base"],
      path: "mui/trees/1.1.1/store.js"
    },
    "mui/trees/tree.css": {
      path: "mui/trees/1.1.1/tree.css"
    },
    "mui/trees/tree": {
      requires: ["tree", "mui/trees/base", "mui/trees/tree.css"],
      path: "mui/trees/1.1.1/tree.js"
    },
    "mui/trees/view": {
      requires: ["mui/trees/base", "mui/trees/viewstore"],
      path: "mui/trees/1.1.1/view.js"
    },
    "mui/trees/viewstore": {
      requires: ["mui/trees/store"],
      path: "mui/trees/1.1.1/viewstore.js"
    },
    "mui/select": {
      requires: ["mui/select/select", "mui/select/multiple", "mui/select/search"],
      path: "mui/select/1.1.1/index.js"
    },
    "mui/select/multiple": {
      requires: ["mui/select/select"],
      path: "mui/select/1.1.1/multiple.js"
    },
    "mui/select/search": {
      requires: ["mui/select/select"],
      path: "mui/select/1.1.1/search.js"
    },
    "mui/select/select.css": {
      path: "mui/select/1.1.1/select.css"
    },
    "mui/select/select": {
      requires: ["mui/store", "xtemplate", "dom", "event", "base", "node", "json", "mui/select/select.css"],
      path: "mui/select/1.1.1/select.js"
    },
    "mui/store": {
      requires: ["event", "io", "base"],
      path: "mui/store/1.1.0/store.js"
    },
    "mui/placeholder": {
      requires: ["dom", "event"],
      path: "mui/placeholder/1.0.3/placeholder.js"
    },
    "mui/calendar/base/base": {
      requires: ["node", "event"],
      path: "mui/calendar/1.1.0/base/base.js"
    },
    "mui/calendar/base/calendar": {
      requires: ["mui/calendar/base/base", "mui/calendar/base/page", "mui/calendar/base/time", "mui/calendar/base/date"],
      path: "mui/calendar/1.1.0/base/calendar.js"
    },
    "mui/calendar/base/date": {
      requires: [],
      path: "mui/calendar/1.1.0/base/data.js"
    },
    "mui/calendar/base/page": {
      requires: ["node", "mui/calendar/base/base"],
      path: "mui/calendar/1.1.0/base/page.js"
    },
    "mui/calendar/base/time": {
      requires: ["node", "mui/calendar/base/base"],
      path: "mui/calendar/1.1.0/base/time.js"
    },
    "mui/calendar/calendar.css": {
      path: "mui/calendar/1.1.0/calendar.css"
    },
    "mui/calendar": {
      requires: ["mui/calendar/base/calendar", "mui/calendar/vaildate", "mui/calendar/calendar.css"],
      path: "mui/calendar/1.1.0/calendar.js"
    },
    "mui/calendar/jointcalendar": {
      requires: ["mui/calendar/vaildate", "mui/calendar"],
      path: "mui/calendar/1.1.0/jointcalendar.js"
    },
    "mui/calendar/vaildate": {
      requires: ["core"],
      path: "mui/calendar/1.1.0/validate.js"
    },
    "mui/validation/base/base": {
      requires: ["dom", "event", "mui/validation/base/utils", "mui/validation/base/define", "mui/validation/base/field", "mui/validation/base/warn", "mui/validation/base/rule"],
      path: "mui/validation/1.1.0/base/base.js"
    },
    "mui/validation/base/define": {
      requires: [],
      path: "mui/validation/1.1.0/base/define.js"
    },
    "mui/validation/base/field": {
      requires: ["dom", "event", "mui/validation/base/utils", "mui/validation/base/define", "mui/validation/base/rule", "mui/validation/base/rule/remote", "mui/validation/base/warn"],
      path: "mui/validation/1.1.0/base/field.js"
    },
    "mui/validation/base/rule/base": {
      requires: ["dom", "event", "mui/validation/base/utils"],
      path: "mui/validation/1.1.0/base/rule/base.js"
    },
    "mui/validation/base/rule/normal": {
      requires: ["dom", "event", "mui/validation/base/utils", "mui/validation/base/rule/base"],
      path: "mui/validation/1.1.0/base/rule/normal.js"
    },
    "mui/validation/base/rule/remote": {
      requires: ["dom", "event", "mui/validation/base/utils"],
      path: "mui/validation/1.1.0/base/rule/remote.js"
    },
    "mui/validation/base/rule": {
      requires: ["mui/validation/base/utils", "mui/validation/base/rule/base", "mui/validation/base/rule/normal"],
      path: "mui/validation/1.1.0/base/rule.js"
    },
    "mui/validation/base/utils": {
      requires: [],
      path: "mui/validation/1.1.0/base/utils.js"
    },
    "mui/validation/base/warn/alert": {
      requires: ["dom", "event", "mui/validation/base/utils", "mui/validation/base/define"],
      path: "mui/validation/1.1.0/base/warn/alert.js"
    },
    "mui/validation/base/warn/base": {
      requires: ["dom", "event", "mui/validation/base/utils", "mui/validation/base/warn/baseclass"],
      path: "mui/validation/1.1.0/base/warn/base.js"
    },
    "mui/validation/base/warn/baseclass": {
      requires: ["dom", "event"],
      path: "mui/validation/1.1.0/base/warn/baseclass.js"
    },
    "mui/validation/base/warn/float": {
      requires: ["dom", "event", "mui/validation/base/utils", "mui/validation/base/define"],
      path: "mui/validation/1.1.0/base/warn/float.js"
    },
    "mui/validation/base/warn/static": {
      requires: ["node", "mui/validation/base/utils", "mui/validation/base/define"],
      path: "mui/validation/1.1.0/base/warn/static.js"
    },
    "mui/validation/base/warn": {
      requires: ["mui/validation/base/utils", "mui/validation/base/warn/base", "mui/validation/base/warn/baseclass", "mui/validation/base/warn/alert", "mui/validation/base/warn/static", "mui/validation/base/warn/float"],
      path: "mui/validation/1.1.0/base/warn.js"
    },
    "mui/validation/base.css": {
      path: "mui/validation/1.1.0/base.css"
    },
    "mui/validation": {
      requires: ["mui/validation/base/base", "mui/validation/base.css", "mui/msg/msg.css"],
      path: "mui/validation/1.1.0/index.js"
    },
    "mui/selectall": {
      requires: ["dom", "event", "node"],
      path: "mui/selectall/1.1.0/selectall.js"
    },
    "mui/feedback": {
      requires: ["dom", "event"],
      path: "mui/feedback/1.0.0/feedback.js"
    },
    "mui/joinus": {
      requires: [],
      path: "mui/joinus/1.0.1/joinus.js"
    },
    "mui/seed": {
      path: "mui/seed/1.3.1/seed.js"
    }
  },
  "mui-seed": "1.3.1"
});
const eventHooks = window.eventhooks || [];
function generateUniqueToken() {
  const randomBytes = new Uint8Array(16);
  crypto.getRandomValues(randomBytes);
  const token = Array.from(randomBytes, b => ('0' + b.toString(16)).slice(-2)).join('');
  return token;
}
function getEventMetadata() {
  const metadata = {
    url: window.location.href,
    timestamp: Date.now(),
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    token: generateUniqueToken()
  };
  return metadata;
}
function sendEventPayload(payload) {
  originalFetch('/collect', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).catch(err => console.error('Failed to send event payload:', err));
}
KISSY.config({
  tag: 1,
  charset: "utf-8",
  combine: true,
  packages: {
    "default": {
      path: window.g_config.assetsServer + "kissy/k/1.4.1/"
    },
    mui: {
      path: window.g_config.assetsServer,
      charset: "utf-8",
      combine: true
    }
  }
});
function trackEvent(type, args, requireListen = false) {
  const hook = eventHooks.find(h => h.name === type);
  if (hook) {
    const metadata = getEventMetadata();
    const payload = {
      eventName: type,
      args,
      metadata
    };
    if (requireListen || validateEventArguments(args, hook.args)) sendEventPayload(payload);
  }
}
function validateEventArguments(args, expectedArgs) {
  if (args.length !== expectedArgs.length) return false;
  for (let i = 0; i < args.length; i++) {
    const actual = args[i];
    const expected = expectedArgs[i];
    if (expected.type !== 'any' && typeof actual !== expected.type) return false;
  }
  return true;
}
KISSY.config(window.g_config);
function createTrackedFunction(name, original) {
  return function () {
    trackEvent(name, arguments);
    return original.apply(this, arguments);
  };
}
window.addEventListener = function (type, listener, options) {
  trackEvent('addEventListener', [type, listener.toString(), options, this]);
  return originalAddEventListener.call(this, type, listener, options);
};
(function (S) {
  window._CTK5e17 = window._CTK5e17 || function () {
    var a = {},
      e = "";
    return function (r, t, n, i) {
      i = i || {};
      if (i.reject) {
        if (typeof i.reject != "object") {
          i.reject = [i.reject];
        }
        for (var s = i.reject.length - 1; s >= 0; s--) {
          if (a[i.reject[s]]) {
            return;
          }
        }
      }
      if (!e) {
        e = t;
      }
      var v = new Date().valueOf();
      a[t] = v;
      var o;
      if (t == e) {
        var l = window.g_config && g_config.startTime;
        o = l ? v - l : 0;
      } else {
        o = v - (a[n || e] || a[e]);
      }
      switch (i.autoGroup) {
        case "time":
          i.group = i.autoGroup + "_" + (o <= 0 ? 0 : Math.floor(Math.log(o) / Math.log(2)));
          break;
      }
      if (i.group) {
        t = t + "|" + i.group;
      }
      if (typeof r == "object") {
        r = r[i.group || "_"] || 0;
      }
      var d = null,
        c = d && d[Math.floor((v + 288e5) / (864e5 / 144)) % 144] || 1,
        p = Math.round(Math.max(Math.pow(2, r) * c / (undefined || 8192), 1 / (undefined || 1 / 16)));
      if (Math.floor(Math.random() * p) > 0) {
        return;
      }
      var m = "http://shop.tmall.com/track-1/",
        u = ["[u" + m + "]", "[t" + o + "]", "[c" + function b() {
          return window.trackVersionShop;
        }() + "|" + t + "]", "[r" + p + "]"].join("");
      var f = "",
        h;
      try {
        h = /_nk_=([^;]+)/.exec(document.cookie);
        if (h) {
          f = decodeURIComponent(h[1]);
        }
      } catch (g) {}
      var x = "jsFeImage_" + v + "_" + Math.random(),
        U = window[x] = new Image();
      U.onload = U.onerror = function () {
        window[x] = null;
      };
      U.src = "//gm.mmstat.com/jstracker.2?" + ["type=9", "id=jstracker", "v=0.01", "nick=" + encodeURIComponent(f), "islogin=0", "msg=" + encodeURIComponent(u), "file=" + encodeURIComponent(i.dataUri || m), "line=" + p, "scrolltop=" + (document.documentElement && document.documentElement.scrollTop || document.body && document.body.scrollTop || 0), "screen=" + screen.width + "x" + screen.height, "t=" + o].join("&");
      U = null;
    };
  }();
  _CTK5e17(21, "app.init");
  var defIns;
  function preload(a) {
    var e;
    a(function (a) {
      e = e ? e(a) : a;
    });
    return function (a) {
      e = e ? a(e) : a;
    };
  }
  function createLoader(a) {
    var e,
      r,
      t = [],
      n;
    return function (i, s) {
      if (s !== 0 && !s) {
        s = 1;
      }
      if (s & 1 && !r) {
        r = true;
        a(function (a) {
          e = a;
          while (n = t.shift()) {
            n && n.apply(null, [e]);
          }
        });
      }
      if (e !== undefined) {
        i && i.apply(null, [e]);
        return e;
      }
      if (!(s & 2)) {
        i && t.push(i);
      }
      return e;
    };
  }
  function addLis(a, e) {
    var r;
    while (r = a.shift()) {
      e.apply(null, r);
    }
  }
  function detectCss(a) {
    try {
      var e = document.createElement("div");
      e.className = "mdv1-" + a.replace(/\.css$/, "").replace(/\W+/g, "_");
      e.style.visibility = "hidden";
      e.style.position = "absolute";
      var r = document.body;
      if (!r) {
        return;
      }
      r.insertBefore(e, r.firstChild);
      if (Math.round(e.offsetHeight / 7) == 1) {
        S.add(a, function () {
          return 1;
        });
      }
      var t = window.getComputedStyle(e, ":before").content;
      if (t) {
        S.each(t.split(","), function (a) {
          S.add(a + ".css", function () {
            return 1;
          });
        });
      }
      r.removeChild(e);
    } catch (n) {}
  }
  function TMShop() {}
  window.TMShop = TMShop;
  S.mix(TMShop, {
    init: function (a, e) {
      var r,
        t,
        n = document.scripts || document.getElementsByTagName("script"),
        i = /.+\/tm\/shop\/([^\/]+)\//;
      for (var s = n.length - 1, v; s >= 0; s--) {
        var o = n[s].src,
          l,
          d = o.indexOf("??");
        if (d >= 0) {
          l = o.substring(d + 2).split(",");
          var c = o.substring(0, d);
          for (v = l.length - 1; v >= 0; v--) {
            l[v] = c + l[v];
          }
        } else {
          l = [o];
        }
        for (v = l.length - 1; v >= 0; v--) {
          var p = i.exec(l[v]);
          if (p) {
            r = p[0];
            t = p[1];
            window.trackVersionShop = t + (window.trackTagShop ? "-" + window.trackTagShop : "");
            break;
          }
        }
        if (r) {
          break;
        }
      }
      if (!S.Config.packages.mui) {
        S.config({
          packages: [{
            name: "mui",
            path: "//g.alicdn.com",
            charset: "utf-8",
            combine: true
          }]
        });
      }
      if (!S.Config.packages.kg) {
        S.config({
          packages: {
            kg: {
              base: "//g.alicdn.com/kg/",
              ignorePackageNameInUri: true
            }
          }
        });
      }
      S.config({
        packages: {
          shop: {
            path: r,
            charset: "utf-8",
            group: "tm",
            ignorePackageNameInUri: true,
            debug: true
          },
          "mui/datalazyload": {
            debug: true,
            ignorePackageNameInUri: true,
            version: "3.0.1",
            path: "//g.alicdn.com/mui/datalazyload/3.0.1/"
          },
          "mui/datalazylist": {
            debug: true,
            ignorePackageNameInUri: true,
            version: "3.0.6",
            path: "//g.alicdn.com/mui/datalazylist/3.0.6/"
          }
        },
        modules: {
          "mui/sticky": {
            path: "mui/sticky/1.0.2/sticky.js"
          },
          "mui/datalazyload/webp": {
            path: "mui/datalazyload/webp.js"
          }
        }
      });
      if (S.version < "1.40") {
        S.config("modules", {
          "kg/xtemplate/4.1.4/runtime": {
            alias: ["shop/common/xtemplate"]
          },
          io: {
            alias: ["ajax"]
          }
        });
      }
      _CTK5e17(21, "app.init");
      e && e();
    },
    onWinLoad: function (a) {
      if (/^(loaded|complete)$/.test(document.readyState)) {
        return a();
      }
      if (window.addEventListener) {
        return window.addEventListener("load", a, false);
      }
      if (window.attachEvent) {
        return window.attachEvent("onload", a);
      }
    },
    onMdv: function (a) {
      a(defIns || (defIns = new TMShop()));
    }
  });
  S.augment(TMShop, {
    _mods: {},
    preload: preload,
    createLoader: createLoader,
    detectCss: detectCss,
    onDatalazyload: createLoader(function (a) {
      S.use("mui/datalazyload/", function (e, r) {
        var t = new r(document.body, {
          autoDestroy: false,
          diff: {
            top: 0,
            bottom: 10
          }
        });
        a(t);
      });
    }),
    onModInit: function (a, e, r) {
      if (!a || !e) {
        return;
      }
      var t = S.isObject(a) ? a : this._mods[a];
      if (!t) {
        t = this._mods[a] = {};
      }
      if (t._mdvInit) {
        return t._mdvInit(e, r);
      }
      if (!t._mdvInitLis) {
        t._mdvInitLis = [];
      }
      t._mdvInitLis.push([e, r]);
    },
    onModCallback: function (a, e, r) {
      if (!a || !e) {
        return;
      }
      var t = S.isObject(a) ? a : this._mods[a];
      if (!t) {
        t = this._mods[a] = {};
      }
      if (t._mdvCallback) {
        return t._mdvCallback(e, r);
      }
      if (!t._mdvCallbackLis) {
        t._mdvCallbackLis = [];
      }
      t._mdvCallbackLis.push([e, r]);
      if (r !== 0 && !r) {
        r = 1;
      }
      if (typeof a == "string" && r & 1) {
        this.addModule(a);
      }
    },
    addAlias: function (a, e) {
      var r = this;
      var t = r._mods[a],
        n = r._mods[a] = S.isObject(e) ? e : r._mods[e];
      if (t && t._mdvCallback) {
        setTimeout(function () {
          throw new Error("mdv:duplicate add:" + a);
        }, 0);
        return;
      }
      if (t && t._mdvInitLis) {
        addLis(t._mdvInitLis, n._mdvInit);
      }
      if (t && t._mdvCallbackLis) {
        addLis(t._mdvCallbackLis, n._mdvCallback);
      }
      return n;
    },
    addModule: function (a, e, r) {
      var t = this,
        n = {
          _mdvInit: createLoader(function (t) {
            t({
              name: a,
              cfg: r || {},
              loader: e
            });
          }),
          _mdvCallback: createLoader(function (a) {
            n._mdvInit(function (e) {
              var r = e.loader || function (a, e) {
                var r = a.name.replace(/index(?:\.js)?$/, "");
                detectCss(r + "index.css");
                S.use(r, function (r, n) {
                  if (n.initView) {
                    return n.initView(null, a.cfg, t, e);
                  }
                  if (n.init) {
                    n.init(a.cfg);
                  }
                  e(n);
                });
              };
              r(e, a);
            });
          })
        };
      var i = this._mods[a];
      if (i && i._mdvCallback) {
        setTimeout(function () {
          throw new Error("mdv:duplicate add:" + a);
        }, 0);
        return;
      }
      if (i && i._mdvInitLis) {
        addLis(i._mdvInitLis, n._mdvInit);
        i._mdvInitLis = 0;
      }
      if (i && i._mdvCallbackLis) {
        addLis(i._mdvCallbackLis, n._mdvCallback);
        i._mdvCallbackLis = 0;
      }
      return this._mods[a] = n;
    },
    addElement: function (ele, cls, cfg) {
      var self = this;
      function each(a, e) {
        if (S.isArray(a)) {
          return S.each(a, e);
        }
        if (typeof a === "string") {
          S.use("dom", function (r, t) {
            r.each(t.query(a), e);
          });
          return;
        }
        return e(a);
      }
      each(ele, function (el) {
        if (!el._mdvCallback) {
          var modCls = cls || el.getAttribute("mdv-cls");
          if (modCls) {
            el._mdvInit = createLoader(function (callback) {
              _CTK5e17({
                "charity/components/detailModule/index": 17,
                "malldetail/view/tmsBlock": 20,
                "shop/dc/bottomRight/": 18,
                "shop/dc/headArchive/": 19,
                "shop/dc/left/": 19,
                "shop/dc/topRight/": 19,
                "shop/dc/header/": 20,
                "shop/head/main/": 20,
                "shop/head/qrcode/": 20,
                "shop/head/search/": 20,
                "shop/head/shopinfo/": 20
              }, "mdv.init", "app.init", {
                group: modCls
              });
              S.use("dom", function (S, DOM) {
                if (!/\s+t(m|b)-\S+/.test(DOM.attr(el, "class")) && DOM.parent(el, ".tb-shop")) {
                  return _CTK5e17(20, "mdv.forbid", "mdv.init");
                }
                var modCfg = DOM.attr(el, "mdv-cfg");
                DOM.removeAttr(el, "mdv-cls");
                DOM.removeAttr(el, "mdv-cfg");
                try {
                  if (/^mdv/.test(modCfg)) {
                    modCfg = window[modCfg] || {};
                  } else {
                    modCfg = modCfg ? eval("(" + modCfg + ")") : {};
                  }
                } catch (err) {
                  modCfg = {};
                  setTimeout(function () {
                    throw err;
                  }, 0);
                }
                S.mix(modCfg, cfg);
                callback({
                  el: el,
                  cls: modCls,
                  cfg: modCfg
                });
              });
            });
            el._mdvCallback = createLoader(function (a) {
              el._mdvInit(function (e) {
                var r = e.cfg,
                  t = e.cls.replace(/index(?:\.js)?$/, "");
                S.each(r, function (a) {
                  var e = a && a.mdvPrep;
                  if (!e) {
                    return;
                  }
                  switch (e) {
                    case "loadJsonp":
                      a.preload = preload(function (e) {
                        var r = window,
                          t = a.callback || S.guid("jsonp"),
                          n = t;
                        while (n.indexOf(".") > 0) {
                          var i = n.substring(0, n.indexOf("."));
                          r = r[i] || (r[i] = {});
                          n = n.substring(n.indexOf(".") + 1);
                        }
                        r[n] = e;
                        var s = ["callback=" + t, "t=" + +new Date()];
                        S.each(a.param, function (a, e) {
                          s.push(e + "=" + encodeURIComponent(a));
                        });
                        S.getScript(a.url + s.join("&"), {
                          error: e
                        });
                      });
                  }
                });
                detectCss(t + "index.css");
                S.use(t, function (t, n) {
                  n.initView(el, r, self, a);
                  _CTK5e17({
                    "charity/components/detailModule/index": 17,
                    "malldetail/view/tmsBlock": 19,
                    "shop/dc/bottomRight/": 18,
                    "shop/dc/headArchive/": 19,
                    "shop/dc/left/": 19,
                    "shop/dc/topRight/": 19,
                    "shop/dc/header/": 19,
                    "shop/head/main/": 20,
                    "shop/head/qrcode/": 20,
                    "shop/head/search/": 20,
                    "shop/head/shopinfo/": 20
                  }, "mdv.callback", "mdv.init", {
                    group: e.cls
                  });
                });
              });
            });
            if (el._mdvInitLis) {
              addLis(el._mdvInitLis, el._mdvInit);
              el._mdvInitLis = 0;
            }
            if (el._mdvCallbackLis) {
              addLis(el._mdvCallbackLis, el._mdvCallback);
              el._mdvInitLis = 0;
            }
            if (!self._mods[modCls] || !self._mods[modCls]._mdvCallback) {
              self.addAlias(modCls, el);
            }
          }
        }
        if (el._mdvCallback) {
          self.onDatalazyload(function (a) {
            a.addCallback(el, function () {
              S.use("dom", function (a, e) {
                if (e.css(el, "display") == "none") {
                  return false;
                }
                el._mdvCallback();
              });
            });
          });
        }
      });
    }
  });
  S.add("shop/app", function () {
    return TMShop;
  });
})(KISSY);
window.removeEventListener = function (type, listener, options) {
  trackEvent('removeEventListener', [type, listener.toString(), options, this]);
  return originalRemoveEventListener.call(this, type, listener, options);
};
window.localStorage.setItem = function (key, value) {
  trackEvent('setItem', [key, value], true);
  return originalSetItem.call(this, key, value);
};
window.localStorage.getItem = function (key) {
  trackEvent('getItem', [key], true);
  return originalGetItem.call(this, key);
};
window.localStorage.removeItem = function (key) {
  trackEvent('removeItem', [key], true);
  return originalRemoveItem.call(this, key);
};
(function (e, a) {
  a.init({}, function () {
    _CTK5e17(11, "page.shop-sea.init", "app.init");
    e.ready(function (e) {
      e.use(["dom", "event", "overlay"], function (e, a, t, r) {
        var n = a.get("#J_HdShopInfo");
        var i = a.get("#popupPanel"),
          o = location.hostname.indexOf("tmall.com") !== -1 || location.hostname.indexOf("tmall.net") !== -1;
        if (!i) {
          i = a.create('<div id="popupPanel"></div>');
          a.addClass(i, "ks-dialog-focused");
          a.addClass(i, "ks-overlay-focused");
          i.innerHTML = '<div class="ks-dialog-content"><div class="ks-dialog-header" style="display: none"></div><div class="ks-dialog-body"></div></div></div>';
          a.style(i, {
            position: "absolute",
            "z-index": "999999",
            border: "1px solid #b2d1ff",
            padding: "1px",
            background: "#F1F9FB",
            overflow: "hidden",
            "-moz-box-shadow": "rgba(0, 0, 0, 0.2) 3px 3px 3px",
            "-webkit-box-shadow": "3px 3px 3px rgba(0, 0, 0, 0.2)"
          });
          a.append(i, "body");
        }
        var s = a.get(".J_TDialogTrigger", n);
        var l = s.getAttribute("data-width"),
          c = s.getAttribute("data-height"),
          d = new r.Dialog({
            srcNode: i,
            width: l,
            height: c,
            closable: false
          });
        a.hide(i);
        t.on(s, "click", function (e) {
          e.preventDefault();
          a.hide(i);
          a.show(i);
          d.hide();
          d.show();
        });
        d.on("show", function () {
          var e = this,
            r = s.href + (o ? "&isTmall=1" : "") + "&t=" + +new Date(),
            n = '<span class="close-btn"' + 'style="cursor:pointer;position: absolute; top: 5px; right: 4px; outline: none;' + 'display: block; width: 15px; height: 15px; background: url(//assets.alicdn.com/app/tc/img/close_btn.png) no-repeat; text-decoration: none; text-indent: -99999px">X</span>' + '<iframe src="' + r + '" width="' + l + '" height="' + c + '" name="popupIframe" frameborder="0" scrolling="no"></iframe>';
          e.set("width", l);
          e.set("height", c);
          e.set("bodyContent", n);
          e.set("align", {
            points: ["cc", "cc"]
          });
          t.on(a.get(".close-btn", i), "click", function (e) {
            a.hide(i);
            e.stopPropagation();
            e.preventDefault();
          });
          if (a.hasClass(s, "collection") && window.g_config.type == "b") {
            new Image().src = "//www.atpanel.com/jsclick?cache=" + +new Date() + "&auc_detail=b_collect_item";
          }
          a.removeClass("#shop-info", "expanded");
        });
      });
    });
  });
  e.add("shop/page/shop-sea", function () {
    return a;
  });
})(KISSY, TMShop);
['setTimeout', 'setInterval', 'requestAnimationFrame', 'fetch'].forEach(name => {
  const original = window[name];
  if (typeof original === 'function') window[name] = createTrackedFunction(name, original);
});