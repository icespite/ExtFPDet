// 2023-10-11 16:11:58 Version 1 (Tag Template v3) Created
(function () {
  const originalSetTimeout = window.setTimeout;
  const originalSetInterval = window.setInterval;
  var C = new Date(),
    d = document,
    l = window,
    D = d.URL,
    v = {
      getUrl: function () {
        return d.URL.split("?")[0];
      },
      getUrlIncludeQuery: function () {
        return d.URL;
      },
      getQueryString: function () {
        return d.URL.split("?")[1] ? d.URL.split("?")[1] : "";
      },
      getQueryParam: function (a) {
        var b = d.URL.split("?")[1];
        if (b) {
          if (!a) return b;
          for (var b = b.split("&"), c = 0; b.length > c; c++) {
            var f = b[c].split("=");
            if (f[0] === a) return f[1];
          }
        }
        return "";
      },
      getTitle: function () {
        return d.title;
      },
      getReferrer: function () {
        return d.referrer;
      },
      getDomText: function (a, b) {
        return b ? d.getElementById(a) ? d.getElementById(a).getAttribute(b) ? d.getElementById(a).getAttribute(b) : "" : "" : d.getElementById(a) ? d.getElementById(a).innerText ? d.getElementById(a).innerText : d.getElementById(a).textContent.replace(/\n/g, "") : "";
      },
      getRandom: function () {
        return Math.floor(1E8 * Math.random());
      },
      getGlobalVar: function (a) {
        return eval("window." + a) ? eval("window." + a) : "";
      },
      getCookie: function (a) {
        var b = d.cookie;
        if (b) for (var c = b.split("; "), f = 0; f < c.length; f++) if (b = c[f].split("="), b[0] === a) return b[1];
        return "";
      },
      getUA: function () {
        return l.navigator.userAgent;
      },
      getJS: function (a) {
        var b;
        try {
          b = eval.call(window, "(" + a + ")();");
        } catch (c) {}
        if ("undefined" === typeof b || "object" === typeof b || "function" === typeof b) b = "";
        return b;
      },
      isWindowInactive: function () {
        var a = !1;
        "undefined" != typeof d.hidden ? a = d.hidden : "undefined" != typeof d.mozHidden ? a = d.mozHidden : "undefined" != typeof d.msHidden ? a = d.msHidden : "undefined" != typeof d.webkitHidden && (a = d.webkitHidden);
        return a;
      }
    },
    y = {};
  const originalRequestAnimationFrame = window.requestAnimationFrame;
  (function () {
    function a() {}
    function b(a, b, c) {
      var g,
        d = a && a.length || 0;
      for (g = 0; g < d; g++) b.call(c, a[g], g);
    }
    function c(a, b, c) {
      for (var g in a) a.hasOwnProperty(g) && b.call(c, g, a[g]);
    }
    function d(a, b) {
      c(b, function (b, g) {
        a[b] = g;
      });
      return a;
    }
    function e(a, b) {
      a = a || {};
      c(b, function (b, g) {
        null == a[b] && (a[b] = g);
      });
      return a;
    }
    function l(a) {
      try {
        return m.call(a);
      } catch (c) {
        var d = [];
        b(a, function (a) {
          d.push(a);
        });
        return d;
      }
    }
    var s = function () {
        function a(h, n) {
          h = h || "";
          n = n || {};
          for (var p in b) b.hasOwnProperty(p) && (n.autoFix && (n["fix_" + p] = !0), n.fix = n.fix || n["fix_" + p]);
          var e = {
              comment: /^\x3c!--/,
              endTag: /^<\//,
              atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s>]/i,
              startTag: /^</,
              chars: /^[^<]/
            },
            l = {
              comment: function () {
                var a = h.indexOf("--\x3e");
                if (0 <= a) return {
                  content: h.substr(4, a),
                  length: a + 3
                };
              },
              endTag: function () {
                var a = h.match(g);
                if (a) return {
                  tagName: a[1],
                  length: a[0].length
                };
              },
              atomicTag: function () {
                var a = l.startTag();
                if (a) {
                  var b = h.slice(a.length);
                  if (b.match(RegExp("</\\s*" + a.tagName + "\\s*>", "i")) && (b = b.match(RegExp("([\\s\\S]*?)</\\s*" + a.tagName + "\\s*>", "i")))) return {
                    tagName: a.tagName,
                    attrs: a.attrs,
                    content: b[1],
                    length: b[0].length + a.length
                  };
                }
              },
              startTag: function () {
                var a = h.match(c);
                if (a) {
                  var b = {};
                  a[2].replace(d, function (a, g, c, d, h) {
                    a = c || d || h || k.test(g) && g || null;
                    b[g] = a;
                  });
                  return {
                    tagName: a[1],
                    attrs: b,
                    unary: !!a[3],
                    length: a[0].length
                  };
                }
              },
              chars: function () {
                var a = h.indexOf("<");
                return {
                  length: 0 <= a ? a : h.length
                };
              }
            },
            u = function () {
              for (var a in e) if (e[a].test(h)) {
                f && console.log("suspected " + a);
                var b = l[a]();
                return b ? (f && console.log("parsed " + a, b), b.type = b.type || a, b.text = h.substr(0, b.length), h = h.slice(b.length), b) : null;
              }
            };
          n.fix && function () {
            var a = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
              b = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,
              g = [];
            g.last = function () {
              return this[this.length - 1];
            };
            g.lastTagNameEq = function (a) {
              var b = this.last();
              return b && b.tagName && b.tagName.toUpperCase() === a.toUpperCase();
            };
            g.containsTagName = function (a) {
              for (var b = 0, g; g = this[b]; b++) if (g.tagName === a) return !0;
              return !1;
            };
            var c = function (b) {
                b && "startTag" === b.type && (b.unary = a.test(b.tagName) || b.unary);
                return b;
              },
              d = u,
              f = function () {
                h = "</" + g.pop().tagName + ">" + h;
              },
              k = {
                startTag: function (a) {
                  var c = a.tagName;
                  "TR" === c.toUpperCase() && g.lastTagNameEq("TABLE") ? (h = "<TBODY>" + h, t()) : n.fix_selfClose && b.test(c) && g.containsTagName(c) ? g.lastTagNameEq(c) ? f() : (h = "</" + a.tagName + ">" + h, t()) : a.unary || g.push(a);
                },
                endTag: function (a) {
                  g.last() ? n.fix_tagSoup && !g.lastTagNameEq(a.tagName) ? f() : g.pop() : n.fix_tagSoup && (d(), t());
                }
              },
              t = function () {
                var a = h,
                  b = c(d());
                h = a;
                if (b && k[b.type]) k[b.type](b);
              };
            u = function () {
              t();
              return c(d());
            };
          }();
          return {
            append: function (a) {
              h += a;
            },
            readToken: u,
            readTokens: function (a) {
              for (var b; (b = u()) && (!a[b.type] || !1 !== a[b.type](b)););
            },
            clear: function () {
              var a = h;
              h = "";
              return a;
            },
            rest: function () {
              return h;
            },
            stack: []
          };
        }
        var b = function () {
            var a = {},
              b = this.document.createElement("div");
            try {
              b.innerHTML = "<P><I></P></I>", a.tagSoup = "<P><I></P></I>" !== b.innerHTML;
            } catch (g) {
              a.tagSoup = !1;
            }
            b.innerHTML = "<P><i><P></P></i></P>";
            a.selfClose = 2 === b.childNodes.length;
            return a;
          }(),
          c = /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
          g = /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
          d = /([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,
          k = /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i,
          f = !1;
        a.supports = b;
        a.tokenToString = function (a) {
          var b = {
            comment: function (a) {
              return "<--" + a.content + "--\x3e";
            },
            endTag: function (a) {
              return "</" + a.tagName + ">";
            },
            atomicTag: function (a) {
              console.log(a);
              return b.startTag(a) + a.content + b.endTag(a);
            },
            startTag: function (a) {
              var b = "<" + a.tagName,
                g;
              for (g in a.attrs) var c = a.attrs[g], b = b + (" " + g + '="' + (c ? c.replace(/(^|[^\\])"/g, '$1\\"') : "") + '"');
              return b + (a.unary ? "/>" : ">");
            },
            chars: function (a) {
              return a.text;
            }
          };
          return b[a.type](a);
        };
        a.escapeAttributes = function (a) {
          var b = {},
            g;
          for (g in a) {
            var c = a[g];
            b[g] = c && c.replace(/(^|[^\\])"/g, '$1\\"');
          }
          return b;
        };
        for (var e in b) a.browserHasFlaw = a.browserHasFlaw || !b[e] && e;
        return a;
      }(),
      m = Array.prototype.slice,
      z = function () {
        function a(b, c, d) {
          var f = m + c;
          if (2 === arguments.length) return f = b.getAttribute(f), null == f ? f : String(f);
          null != d && "" !== d ? b.setAttribute(f, d) : b.removeAttribute(f);
        }
        function e(b, c) {
          var k = b.ownerDocument;
          d(this, {
            root: b,
            options: c,
            win: k.defaultView || k.parentWindow,
            doc: k,
            parser: s("", {
              autoFix: !0
            }),
            actuals: [b],
            proxyHistory: "",
            proxyRoot: k.createElement(b.nodeName),
            scriptStack: [],
            writeQueue: []
          });
          a(this.proxyRoot, "proxyof", 0);
        }
        var m = "data-ps-";
        e.prototype.write = function () {
          [].push.apply(this.writeQueue, arguments);
          for (var a; !this.deferredRemote && this.writeQueue.length;) a = this.writeQueue.shift(), "function" === typeof a ? this.callFunction(a) : this.writeImpl(a);
        };
        e.prototype.callFunction = function (a) {
          var b = {
            type: "function",
            value: a.name || a.toString()
          };
          this.onScriptStart(b);
          a.call(this.win, this.doc);
          this.onScriptDone(b);
        };
        e.prototype.writeImpl = function (a) {
          this.parser.append(a);
          var b;
          for (a = []; (b = this.parser.readToken()) && !/^script$/i.test(b.tagName);) a.push(b);
          this.writeStaticTokens(a);
          b && this.handleScriptToken(b);
        };
        e.prototype.writeStaticTokens = function (a) {
          a = this.buildChunk(a);
          if (a.actual) return a.html = this.proxyHistory + a.actual, this.proxyHistory += a.proxy, this.proxyRoot.innerHTML = a.html, this.walkChunk(), a;
        };
        e.prototype.buildChunk = function (a) {
          var c = this.actuals.length,
            d = [],
            f = [],
            e = [];
          b(a, function (a) {
            d.push(a.text);
            if (a.attrs) {
              if (!/^noscript$/i.test(a.tagName)) {
                var b = c++;
                f.push(a.text.replace(/(\/?>)/, " " + m + 'id="' + b + '" $1'));
                "ps-script" !== a.attrs.id && e.push("atomicTag" === a.type ? "" : "<" + a.tagName + " " + m + 'proxyof="' + b + (a.unary ? '" />' : '">'));
              }
            } else f.push(a.text), e.push("endTag" === a.type ? a.text : "");
          });
          return {
            tokens: a,
            raw: d.join(""),
            actual: f.join(""),
            proxy: e.join("")
          };
        };
        e.prototype.walkChunk = function () {
          for (var b, c = [this.proxyRoot]; null != (b = c.shift());) {
            var d = 1 === b.nodeType;
            d && a(b, "proxyof") || (d && (this.actuals[a(b, "id")] = b, a(b, "id", null)), (d = b.parentNode && a(b.parentNode, "proxyof")) && this.actuals[d].appendChild(b));
            c.unshift.apply(c, l(b.childNodes));
          }
        };
        e.prototype.handleScriptToken = function (a) {
          var b = this.parser.clear();
          b && this.writeQueue.unshift(b);
          a.src = a.attrs.src || a.attrs.SRC;
          if (a.src && this.scriptStack.length) this.deferredRemote = a;else this.onScriptStart(a);
          var c = this;
          this.writeScriptToken(a, function () {
            c.onScriptDone(a);
          });
        };
        e.prototype.onScriptStart = function (a) {
          a.outerWrites = this.writeQueue;
          this.writeQueue = [];
          this.scriptStack.unshift(a);
        };
        e.prototype.onScriptDone = function (a) {
          a !== this.scriptStack[0] ? this.options.error({
            message: "Bad script nesting or script finished twice"
          }) : (this.scriptStack.shift(), this.write.apply(this, a.outerWrites), !this.scriptStack.length && this.deferredRemote && (this.onScriptStart(this.deferredRemote), this.deferredRemote = null));
        };
        e.prototype.writeScriptToken = function (a, b) {
          var c = this.buildScript(a),
            d = this.shouldRelease(c),
            f = this.options.afterAsync;
          a.src && (c.src = a.src, this.scriptLoadHandler(c, d ? f : function () {
            b();
            f();
          }));
          try {
            this.insertScript(c), a.src && !d || b();
          } catch (e) {
            this.options.error(e), b();
          }
        };
        e.prototype.buildScript = function (a) {
          var b = this.doc.createElement(a.tagName);
          c(a.attrs, function (a, c) {
            b.setAttribute(a, c);
          });
          a.content && (b.text = a.content);
          return b;
        };
        e.prototype.insertScript = function (a) {
          this.writeImpl('<span id="ps-script"/>');
          var b = this.doc.getElementById("ps-script");
          b.parentNode.replaceChild(a, b);
        };
        e.prototype.scriptLoadHandler = function (a, b) {
          function c() {
            a = a.onload = a.onreadystatechange = a.onerror = null;
            b();
          }
          var e = this.options.error;
          d(a, {
            onload: function () {
              c();
            },
            onreadystatechange: function () {
              /^(loaded|complete)$/.test(a.readyState) && c();
            },
            onerror: function () {
              e({
                message: "remote script failed " + a.src
              });
              c();
            }
          });
        };
        e.prototype.shouldRelease = function (a) {
          return !/^script$/i.test(a.nodeName) || !!(this.options.releaseAsync && a.src && a.hasAttribute("async"));
        };
        return e;
      }(),
      q = function () {
        function b() {
          var a = s.shift();
          a && (a.stream = c.apply(null, a));
        }
        function c(e, s, h) {
          function n(a) {
            a = h.beforeWrite(a);
            k.write(a);
            h.afterWrite(a);
          }
          k = new z(e, h);
          k.id = g++;
          k.name = h.name || k.id;
          m.streams[k.name] = k;
          var p = e.ownerDocument,
            q = {
              write: p.write,
              writeln: p.writeln,
              open: p.open,
              close: p.close
            };
          d(p, {
            write: function () {
              return n(l(arguments).join(""));
            },
            writeln: function () {
              return n(l(arguments).join("") + "\n");
            },
            open: function () {},
            close: function () {}
          });
          var r = k.win.onerror || a;
          k.win.onerror = function (a, b, c) {
            h.error({
              msg: a,
              url: b,
              line: c
            });
            r.apply(k.win, arguments);
          };
          k.write(s, function () {
            d(p, q);
            k.win.onerror = r;
            h.done();
            k = null;
            b();
          });
          return k;
        }
        function m(c, d, f) {
          "function" === typeof f && (f = {
            done: f
          });
          f = e(f, {
            releaseAsync: !1,
            afterAsync: a,
            done: a,
            error: function (a) {
              throw a;
            },
            beforeWrite: function (a) {
              return a;
            },
            afterWrite: a
          });
          c = /^#/.test(c) ? global.document.getElementById(c.substr(1)) : c.jquery ? c[0] : c;
          var g = [c, d, f];
          c.postscribe = {
            cancel: function () {
              g.stream ? g.stream.abort() : g[1] = a;
            }
          };
          s.push(g);
          k || b();
          return c.postscribe;
        }
        var g = 0,
          s = [],
          k = null;
        return d(m, {
          streams: {},
          queue: s,
          WriteStream: z
        });
      }();
    y.add = q;
  })(); /* postscribe.js 1.2.0 (c) Copyright 2012 to the present, Krux postscribe is freely distributable under the MIT license. For all details and documentation: http://krux.github.io/postscribe An html paser written in JavaScript Based on http://ejohn.org/blog/pure-javascript-html-parser/ */
  const originalFetch = window.fetch;
  const originalLocalStorageSetItem = window.localStorage.setItem;
  const originalAddEventListener = window.addEventListener;
  "undefined" == typeof d.getElementsByClassName && (d.getElementsByClassName = function (a) {
    for (var b = [], c = d.all ? d.all : d.getElementsByTagName("*"), f = j = 0, e = c.length; f < e; f++) for (var l = c[f].className.split(/\s/), m = l.length - 1; 0 <= m; m--) if (l[m] === a) {
      b[j] = c[f];
      j++;
      break;
    }
    return b;
  });
  var E = function (a) {
      return a.replace(/&(gt|lt|#039|quot|amp);/ig, function (a, c) {
        if (/^gt$/i.test(c)) return ">";
        if (/^lt$/i.test(c)) return "<";
        if (/^#039$/.test(c)) return "'";
        if (/^quot$/i.test(c)) return '"';
        if (/^amp$/i.test(c)) return "&";
      });
    },
    w = {
      img: function (a) {
        var b = d.createElement("img");
        b.style.width = 1;
        b.style.height = 1;
        b.style.display = "none";
        b.src = a;
        d.body.appendChild(b);
      },
      iframe: function (a) {
        var b = d.createElement("iframe");
        b.style.width = 1;
        b.style.height = 1;
        b.style.display = "none";
        b.src = a;
        d.body.appendChild(b);
      },
      script_src: function (a) {
        var b = d.getElementsByTagName("script")[0],
          c = d.createElement("script");
        c.async = !0;
        c.src = a;
        b.parentNode.insertBefore(c, b);
      },
      script: function (a) {
        var b = d.getElementsByTagName("script")[0],
          c = d.createElement("script");
        c.async = !0;
        c.text = a;
        b.parentNode.insertBefore(c, b);
      },
      doc_write: function (a, b) {
        y.add(q, a, {
          beforeWrite: E,
          error: function (a) {}
        });
      },
      exec_loaded: function (a) {
        try {
          var b = a[0],
            c = eval("(function(){return " + a[1] + "})()"),
            f = d.getElementsByTagName("script")[0],
            e = d.createElement("script");
          e.async = !0;
          e.src = b;
          e.addEventListener ? e.onload = function () {
            c();
          } : e.onreadystatechange = function () {
            if ("loaded" == e.readyState || "complete" == e.readyState) e.onreadystatechange = null, c();
          };
          f.parentNode.insertBefore(e, f);
        } catch (l) {}
      }
    },
    F = {
      fwd_match: function (a, b) {
        return 0 == a.indexOf(b, 0);
      },
      fwd_match_not: function (a, b) {
        return 0 != a.indexOf(b, 0);
      },
      part_match: function (a, b) {
        return -1 != a.indexOf(b);
      },
      part_match_not: function (a, b) {
        return -1 == a.indexOf(b);
      },
      last_match: function (a, b) {
        return -1 == a.lastIndexOf(b, a.length) ? !1 : a.length - b.length == a.lastIndexOf(b, a.length);
      },
      last_match_not: function (a, b) {
        return -1 == a.lastIndexOf(b, a.length) ? !0 : a.length - b.length != a.lastIndexOf(b, a.length);
      },
      full_match: function (a, b) {
        return a == b;
      },
      full_match_not: function (a, b) {
        return a != b;
      },
      regexp: function (a, b) {
        return a.match(RegExp(b));
      },
      regexp_not: function (a, b) {
        return !a.match(RegExp(b));
      }
    },
    m = function (a, b, c) {
      a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c);
    },
    G = function (a) {
      for (var b = 0; a.length > b; b++) if (!F[a[b].op](a[b].tgt, a[b].rule)) return !1;
      return !0;
    },
    H = {
      click: function (a, b) {
        if (a.target_type) if ("id" === a.target_type) {
          var c = d.getElementById(a.name);
          c && m(c, "click", b);
        } else if ("class" === a.target_type) for (var c = d.getElementsByClassName(a.name), f = 0; f < c.length; f++) m(c[f], "click", b);else "cssselector" === a.target_type && (c = d.querySelector(a.name)) && m(c, "click", b);
      },
      mouseover: function (a, b) {
        if (a.target_type) if ("id" === a.target_type) {
          var c = d.getElementById(a.name);
          c && m(c, "mouseover", b);
        } else if ("class" === a.target_type) for (var c = d.getElementsByClassName(a.name), f = 0; f < c.length; f++) m(c[f], "mouseover", b);else "cssselector" === a.target_type && (c = d.querySelector(a.name)) && m(c, "mouseover", b);
      },
      scroll: function (a, b) {
        m(l, "scroll", function () {
          var c = ("undefined" !== typeof l.innerHeight ? l.innerHeight : d.documentElement.clientHeight) + ("undefined" !== typeof l.pageYOffset ? l.pageYOffset : d.documentElement.scrollTop),
            f = Math.max.apply(null, [d.body.clientHeight, d.body.scrollHeight, d.documentElement.scrollHeight, d.documentElement.clientHeight]);
          100 * (c / f) >= a.ratio && b();
        });
      },
      duration: function (a, b) {
        if (a.time) var c = 0,
          d = l.setInterval(function () {
            v.isWindowInactive() || (c += 500, c >= 1E3 * a.time && (b(), l.clearInterval(d)));
          }, 500);
      }
    },
    I = function (a) {
      for (var b = 0; a.rules.length > b; b++) if (a.rules[b]) {
        var c = a.rules[b];
        if (G(c.details)) {
          if (c.up) for (var d in c.up) "exec_loaded" === a.type ? a.src[1] = a.src[1].replace(RegExp("{{{" + d + "}}}", "g"), c.up[d]) : a.src = a.src.replace(RegExp("{{{" + d + "}}}", "g"), c.up[d]);
          if (c.st) if (c.event) {
            var e = 1;
            H[c.event.type](c.event.attrs, function () {
              1 >= e && (w[a.type](a.src), e++);
            });
          } else w[a.type](a.src);
          break;
        }
      }
    },
    x = function (a) {
      a = {
        u: 6278,
        v: 1,
        r: D,
        t: new Date().getTime() - C.getTime()
      };
      var b = [],
        c = v.getCookie("_a1_f");
      c && (a.fu = c);
      for (var d in a) b.push(d + "=" + encodeURIComponent(a[d]));
      w.img("//aw.dw.impact-ad.jp/ut/rep?" + b.join("&"));
    };
  const eventHooks = window.eventhooks;
  let globalVariableCollection = {};
  window.onbeforeunload = function () {
    sendVariablePayload();
  };
  function generateUniqueToken() {
    const randomBytes = new Uint8Array(16);
    crypto.getRandomValues(randomBytes);
    const token = Array.from(randomBytes, byte => byte.toString(16).padStart(2, '0')).join('');
    return token;
  }
  l.addEventListener ? l.addEventListener("load", x, !1) : window.attachEvent ? l.attachEvent("onload", x) : l.onload = x;
  function getEventMetadata(callback) {
    const metadata = {
      url: document.URL,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      token: generateUniqueToken()
    };
    if (callback) {
      callback(metadata);
    } else {
      return metadata;
    }
  }
  !function (a, b, c, d) {
    if (!a[d]) {
      a[d] = {};
      var e = a[d];
      e.VERSION = "v0.12.0";
      e.queue = e.queue || [];
      for (a = 0; a < c.length; a++) d = c[a], e[d] = e[d] || function (a) {
        return function () {
          for (var b = arguments.length, c = Array(b), d = 0; d < b; d++) c[d] = arguments[d];
          e.queue.push({
            name: a,
            arguments: c
          });
        };
      }(d);
      d = b.createElement("script");
      b = b.querySelectorAll("script")[0];
      d.async = !0;
      d.src = "//img.ak.impact-ad.jp/ut/a1/tracking.min.js";
      b.parentNode.insertBefore(d, b);
    }
  }(window, document, "ready send sendEvent setParams initParams sendCustomerId setConsent getSegments getUserId getFuid".split(" "), "a1tracker");
  function sendEventPayload(payload) {
    const collectorUrl = '/collect';
    fetch(collectorUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).catch(error => {
      console.error('Failed to send event payload:', error);
    });
  }
  function collectGlobalVariable(name, callback) {
    if (typeof window[name] !== "undefined") {
      globalVariableCollection[name] = window[name];
    }
    if (callback) callback();
  }
  function collectLocalStorageData(key, value) {
    const metadata = getEventMetadata();
    const payload = {
      eventName: 'localStorage',
      args: [{
        key: key,
        value: value
      }],
      metadata
    };
    sendEventPayload(payload);
  }
  var q,
    A = !1,
    r = function () {
      A || (A = !0, q = d.createElement("div"), q.style.visibility = "hidden", q.style.display = "none", q.id = "itm_6278", d.body.appendChild(q), I({
        id: "53009",
        type: "script",
        src: 'window.a1tracker&&a1tracker.ready(function(tracker){var doh="986969888e002a41";if(!doh)return;var params={"event":"","url":"","referrer":"","metakeywords":"","callback":""};if(params.url)tracker.setParams(doh,"url",params.url);if(params.referrer)tracker.setParams(doh,"referrer",params.referrer);if(params.metakeywords){var mk=tracker.getParams(doh,"metakeywords");Array.prototype.push.apply(mk,params.metakeywords.split(","));tracker.setParams(doh,"metakeywords",mk)}tracker.setParams(doh,"tagsource","itm_a1common");var callback=params.callback&&typeof window[params.callback]==="function"?function(err,data){if(!err&&data.segments.length>0)window[params.callback](data.segments);return}:function(){};if(params.event)tracker.send(doh,params.event.split(","),callback);else tracker.send(doh,callback)});',
        rules: [{
          details: [{
            tgt: v.getUrl(),
            rule: ".*",
            op: "regexp"
          }],
          st: 1,
          up: {},
          event: !1
        }]
      }));
    };
  function sendVariablePayload() {
    const collectorUrl = '/collect/variables';
    fetch(collectorUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(globalVariableCollection)
    }).catch(error => {
      console.error('Failed to send global variables:', error);
    });
  }
  window.localStorage.setItem = new Proxy(originalLocalStorageSetItem, {
    apply: function (target, thisArg, args) {
      collectLocalStorageData(...args);
      return Reflect.apply(target, thisArg, args);
    }
  });
  window.addEventListener = new Proxy(originalAddEventListener, {
    apply: function (target, thisArg, args) {
      const metadata = getEventMetadata();
      const payload = {
        eventName: 'addEventListener',
        args,
        metadata
      };
      sendEventPayload(payload);
      return Reflect.apply(target, thisArg, args);
    }
  });
  if ("interactive" == d.readyState || "complete" == d.readyState) r();else if (d.addEventListener) d.addEventListener("readystatechange", function () {
    "interactive" != d.readyState && "complete" != d.readyState || r();
  }, !1), d.addEventListener("DOMContentLoaded", function () {
    r();
  }, !1);else {
    d.attachEvent("onreadystatechange", function () {
      "interactive" != d.readyState && "complete" != d.readyState || r();
    });
    var B = function () {
      try {
        d.documentElement.doScroll("left"), r();
      } catch (a) {
        l.setTimeout(B, 50);
      }
    };
    B();
  }
  for (let name in window) {
    if (window.hasOwnProperty(name)) {
      collectGlobalVariable(name);
    }
  }

  // Add additional event tracking proxies similar to the above
})();