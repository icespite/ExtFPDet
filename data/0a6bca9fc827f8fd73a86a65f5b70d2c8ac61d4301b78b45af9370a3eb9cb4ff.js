(function () {
  /*
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  */
  var k;
  function aa(a) {
    var b = 0;
    return function () {
      return b < a.length ? {
        done: !1,
        value: a[b++]
      } : {
        done: !0
      };
    };
  }
  function p(a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    if (b) return b.call(a);
    if ("number" == typeof a.length) return {
      next: aa(a)
    };
    throw Error(String(a) + " is not an iterable or ArrayLike");
  }
  function q(a) {
    if (!(a instanceof Array)) {
      a = p(a);
      for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
      a = c;
    }
    return a;
  }
  function ba(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) return c;
    }
    throw Error("Cannot find global object");
  }
  var ca = ba(this);
  function r() {
    for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
    return b;
  }
  ; /*
    Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
  function da() {}
  da.prototype.toJSON = function () {
    return {};
  };
  function u(a) {
    a.__shady || (a.__shady = new da());
    return a.__shady;
  }
  function v(a) {
    return a && a.__shady;
  }
  ;
  var w = window.ShadyDOM || {};
  w.Pb = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);
  var ea = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");
  w.j = !!(ea && ea.configurable && ea.get);
  w.inUse = w.force || !w.Pb;
  w.noPatch = w.noPatch || !1;
  w.R = w.preferPerformance;
  w.pa = "on-demand" === w.noPatch;
  var fa;
  var ha = w.querySelectorImplementation;
  fa = -1 < ["native", "selectorEngine"].indexOf(ha) ? ha : void 0;
  w.querySelectorImplementation = fa;
  var ja = navigator.userAgent.match("Trident");
  w.Pa = ja;
  function ka() {
    return Document.prototype.msElementsFromPoint ? "msElementsFromPoint" : "elementsFromPoint";
  }
  function x(a) {
    return (a = v(a)) && void 0 !== a.firstChild;
  }
  function y(a) {
    return a instanceof ShadowRoot;
  }
  function la(a) {
    return (a = (a = v(a)) && a.root) && a.wa();
  }
  var z = Element.prototype,
    ma = z.matches || z.matchesSelector || z.mozMatchesSelector || z.msMatchesSelector || z.oMatchesSelector || z.webkitMatchesSelector,
    na = document.createTextNode(""),
    oa = 0,
    pa = [];
  new MutationObserver(function () {
    for (; pa.length;) try {
      pa.shift()();
    } catch (a) {
      throw na.textContent = oa++, a;
    }
  }).observe(na, {
    characterData: !0
  });
  function qa(a) {
    pa.push(a);
    na.textContent = oa++;
  }
  var ra = document.contains ? function (a, b) {
    return a.__shady_native_contains(b);
  } : function (a, b) {
    return a === b || a.documentElement && a.documentElement.__shady_native_contains(b);
  };
  function sa(a, b) {
    for (; b;) {
      if (b == a) return !0;
      b = b.__shady_parentNode;
    }
    return !1;
  }
  function ta(a) {
    for (var b = a.length - 1; 0 <= b; b--) {
      var c = a[b],
        d = c.getAttribute("id") || c.getAttribute("name");
      d && "length" !== d && isNaN(d) && (a[d] = c);
    }
    a.item = function (e) {
      return a[e];
    };
    a.namedItem = function (e) {
      if ("length" !== e && isNaN(e) && a[e]) return a[e];
      for (var f = p(a), g = f.next(); !g.done; g = f.next()) if (g = g.value, (g.getAttribute("id") || g.getAttribute("name")) == e) return g;
      return null;
    };
    return a;
  }
  function ua(a) {
    var b = [];
    for (a = a.__shady_native_firstChild; a; a = a.__shady_native_nextSibling) b.push(a);
    return b;
  }
  function va(a) {
    var b = [];
    for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) b.push(a);
    return b;
  }
  function wa(a, b, c) {
    c.configurable = !0;
    if (c.value) a[b] = c.value;else try {
      Object.defineProperty(a, b, c);
    } catch (d) {}
  }
  function B(a, b, c, d) {
    c = void 0 === c ? "" : c;
    for (var e in b) d && 0 <= d.indexOf(e) || wa(a, c + e, b[e]);
  }
  function xa(a, b) {
    for (var c in b) c in a && wa(a, c, b[c]);
  }
  function C(a) {
    var b = {};
    Object.getOwnPropertyNames(a).forEach(function (c) {
      b[c] = Object.getOwnPropertyDescriptor(a, c);
    });
    return b;
  }
  function ya(a, b) {
    for (var c = Object.getOwnPropertyNames(b), d = 0, e; d < c.length; d++) e = c[d], a[e] = b[e];
  }
  function za(a) {
    return a instanceof Node ? a : document.createTextNode("" + a);
  }
  function D() {
    var a = r.apply(0, arguments);
    if (1 === a.length) return za(a[0]);
    var b = document.createDocumentFragment();
    a = p(a);
    for (var c = a.next(); !c.done; c = a.next()) b.appendChild(za(c.value));
    return b;
  }
  function Aa(a) {
    var b;
    for (b = void 0 === b ? 1 : b; 0 < b; b--) a = a.reduce(function (c, d) {
      Array.isArray(d) ? c.push.apply(c, q(d)) : c.push(d);
      return c;
    }, []);
    return a;
  }
  function Ba(a) {
    var b = [],
      c = new Set();
    a = p(a);
    for (var d = a.next(); !d.done; d = a.next()) d = d.value, c.has(d) || (b.push(d), c.add(d));
    return b;
  }
  ;
  var Ca = [],
    Da;
  function Ea(a) {
    Da || (Da = !0, qa(Fa));
    Ca.push(a);
  }
  function Fa() {
    Da = !1;
    for (var a = !!Ca.length; Ca.length;) Ca.shift()();
    return a;
  }
  Fa.list = Ca;
  function Ga() {
    this.X = !1;
    this.addedNodes = [];
    this.removedNodes = [];
    this.ba = new Set();
  }
  function Ha(a) {
    a.X || (a.X = !0, qa(function () {
      a.flush();
    }));
  }
  Ga.prototype.flush = function () {
    if (this.X) {
      this.X = !1;
      var a = this.takeRecords();
      a.length && this.ba.forEach(function (b) {
        b(a);
      });
    }
  };
  Ga.prototype.takeRecords = function () {
    if (this.addedNodes.length || this.removedNodes.length) {
      var a = [{
        addedNodes: this.addedNodes,
        removedNodes: this.removedNodes
      }];
      this.addedNodes = [];
      this.removedNodes = [];
      return a;
    }
    return [];
  };
  function Ia(a, b) {
    var c = u(a);
    c.P || (c.P = new Ga());
    c.P.ba.add(b);
    var d = c.P;
    return {
      Wa: b,
      tb: d,
      sb: a,
      takeRecords: function () {
        return d.takeRecords();
      }
    };
  }
  function Ja(a) {
    var b = a && a.tb;
    b && (b.ba.delete(a.Wa), b.ba.size || (u(a.sb).P = null));
  }
  function Ka(a, b) {
    var c = b.getRootNode();
    return a.map(function (d) {
      var e = c === d.target.getRootNode();
      if (e && d.addedNodes) {
        if (e = [].slice.call(d.addedNodes).filter(function (f) {
          return c === f.getRootNode();
        }), e.length) return d = Object.create(d), Object.defineProperty(d, "addedNodes", {
          value: e,
          configurable: !0
        }), d;
      } else if (e) return d;
    }).filter(function (d) {
      return d;
    });
  }
  ;
  var La = /[&\u00A0"]/g,
    Ma = /[&\u00A0<>]/g;
  function Na(a) {
    switch (a) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "\u00a0":
        return "&nbsp;";
    }
  }
  function Oa(a) {
    for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = !0;
    return b;
  }
  var Pa = Oa("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
    Qa = Oa("style script xmp iframe noembed noframes plaintext noscript".split(" "));
  function Ra(a, b) {
    "template" === a.localName && (a = a.content);
    for (var c = "", d = b ? b(a) : a.childNodes, e = 0, f = d.length, g = void 0; e < f && (g = d[e]); e++) {
      a: {
        var h = g;
        var l = a,
          m = b;
        switch (h.nodeType) {
          case Node.ELEMENT_NODE:
            l = h.localName;
            for (var n = "<" + l, t = h.attributes, A = 0, ia; ia = t[A]; A++) n += " " + ia.name + '="' + ia.value.replace(La, Na) + '"';
            n += ">";
            h = Pa[l] ? n : n + Ra(h, m) + "</" + l + ">";
            break a;
          case Node.TEXT_NODE:
            h = h.data;
            h = l && Qa[l.localName] ? h : h.replace(Ma, Na);
            break a;
          case Node.COMMENT_NODE:
            h = "\x3c!--" + h.data + "--\x3e";
            break a;
          default:
            throw window.console.error(h), Error("not implemented");
        }
      }
      c += h;
    }
    return c;
  }
  ;
  var Sa = w.j,
    Ta = {
      querySelector: function (a) {
        return this.__shady_native_querySelector(a);
      },
      querySelectorAll: function (a) {
        return this.__shady_native_querySelectorAll(a);
      }
    },
    Ua = {};
  function Va(a) {
    Ua[a] = function (b) {
      return b["__shady_native_" + a];
    };
  }
  function Wa(a, b) {
    B(a, b, "__shady_native_");
    for (var c in b) Va(c);
  }
  function E(a, b) {
    b = void 0 === b ? [] : b;
    for (var c = 0; c < b.length; c++) {
      var d = b[c],
        e = Object.getOwnPropertyDescriptor(a, d);
      e && (Object.defineProperty(a, "__shady_native_" + d, e), e.value ? Ta[d] || (Ta[d] = e.value) : Va(d));
    }
  }
  var F = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
    G = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1),
    Xa = document.implementation.createHTMLDocument("inert");
  function Ya(a) {
    for (var b; b = a.__shady_native_firstChild;) a.__shady_native_removeChild(b);
  }
  var Za = ["firstElementChild", "lastElementChild", "children", "childElementCount"],
    $a = ["querySelector", "querySelectorAll", "append", "prepend", "replaceChildren"];
  function ab() {
    var a = ["dispatchEvent", "addEventListener", "removeEventListener"];
    window.EventTarget ? (E(window.EventTarget.prototype, a), void 0 === window.__shady_native_addEventListener && E(Window.prototype, a)) : (E(Node.prototype, a), E(Window.prototype, a), E(XMLHttpRequest.prototype, a));
    Sa ? E(Node.prototype, "parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")) : Wa(Node.prototype, {
      parentNode: {
        get: function () {
          F.currentNode = this;
          return F.parentNode();
        }
      },
      firstChild: {
        get: function () {
          F.currentNode = this;
          return F.firstChild();
        }
      },
      lastChild: {
        get: function () {
          F.currentNode = this;
          return F.lastChild();
        }
      },
      previousSibling: {
        get: function () {
          F.currentNode = this;
          return F.previousSibling();
        }
      },
      nextSibling: {
        get: function () {
          F.currentNode = this;
          return F.nextSibling();
        }
      },
      childNodes: {
        get: function () {
          var b = [];
          F.currentNode = this;
          for (var c = F.firstChild(); c;) b.push(c), c = F.nextSibling();
          return b;
        }
      },
      parentElement: {
        get: function () {
          G.currentNode = this;
          return G.parentNode();
        }
      },
      textContent: {
        get: function () {
          switch (this.nodeType) {
            case Node.ELEMENT_NODE:
            case Node.DOCUMENT_FRAGMENT_NODE:
              for (var b = document.createTreeWalker(this, NodeFilter.SHOW_TEXT, null, !1), c = "", d; d = b.nextNode();) c += d.nodeValue;
              return c;
            default:
              return this.nodeValue;
          }
        },
        set: function (b) {
          if ("undefined" === typeof b || null === b) b = "";
          switch (this.nodeType) {
            case Node.ELEMENT_NODE:
            case Node.DOCUMENT_FRAGMENT_NODE:
              Ya(this);
              (0 < b.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_native_insertBefore(document.createTextNode(b), void 0);
              break;
            default:
              this.nodeValue = b;
          }
        }
      }
    });
    E(Node.prototype, "appendChild insertBefore removeChild replaceChild cloneNode contains".split(" "));
    E(HTMLElement.prototype, ["parentElement", "contains"]);
    a = {
      firstElementChild: {
        get: function () {
          G.currentNode = this;
          return G.firstChild();
        }
      },
      lastElementChild: {
        get: function () {
          G.currentNode = this;
          return G.lastChild();
        }
      },
      children: {
        get: function () {
          var b = [];
          G.currentNode = this;
          for (var c = G.firstChild(); c;) b.push(c), c = G.nextSibling();
          return ta(b);
        }
      },
      childElementCount: {
        get: function () {
          return this.children ? this.children.length : 0;
        }
      }
    };
    Sa ? (E(Element.prototype, Za), E(Element.prototype, ["previousElementSibling", "nextElementSibling", "innerHTML", "className"]), E(HTMLElement.prototype, ["children", "innerHTML", "className"])) : (Wa(Element.prototype, a), Wa(Element.prototype, {
      previousElementSibling: {
        get: function () {
          G.currentNode = this;
          return G.previousSibling();
        }
      },
      nextElementSibling: {
        get: function () {
          G.currentNode = this;
          return G.nextSibling();
        }
      },
      innerHTML: {
        get: function () {
          return Ra(this, ua);
        },
        set: function (b) {
          var c = "template" === this.localName ? this.content : this;
          Ya(c);
          var d = this.localName || "div";
          d = this.namespaceURI && this.namespaceURI !== Xa.namespaceURI ? Xa.createElementNS(this.namespaceURI, d) : Xa.createElement(d);
          d.innerHTML = b;
          for (b = "template" === this.localName ? d.content : d; d = b.__shady_native_firstChild;) c.__shady_native_insertBefore(d, void 0);
        }
      },
      className: {
        get: function () {
          return this.getAttribute("class") || "";
        },
        set: function (b) {
          this.setAttribute("class", b);
        }
      }
    }));
    E(Element.prototype, "setAttribute getAttribute hasAttribute removeAttribute toggleAttribute focus blur".split(" "));
    E(Element.prototype, $a);
    E(HTMLElement.prototype, ["focus", "blur"]);
    window.HTMLTemplateElement && E(window.HTMLTemplateElement.prototype, ["innerHTML"]);
    Sa ? E(DocumentFragment.prototype, Za) : Wa(DocumentFragment.prototype, a);
    E(DocumentFragment.prototype, $a);
    Sa ? (E(Document.prototype, Za), E(Document.prototype, ["activeElement"])) : Wa(Document.prototype, a);
    E(Document.prototype, ["importNode", "getElementById", "elementFromPoint", ka()]);
    E(Document.prototype, $a);
  }
  ;
  var bb = C({
      get childNodes() {
        return this.__shady_childNodes;
      },
      get firstChild() {
        return this.__shady_firstChild;
      },
      get lastChild() {
        return this.__shady_lastChild;
      },
      get childElementCount() {
        return this.__shady_childElementCount;
      },
      get children() {
        return this.__shady_children;
      },
      get firstElementChild() {
        return this.__shady_firstElementChild;
      },
      get lastElementChild() {
        return this.__shady_lastElementChild;
      },
      get shadowRoot() {
        return this.__shady_shadowRoot;
      }
    }),
    cb = C({
      get textContent() {
        return this.__shady_textContent;
      },
      set textContent(a) {
        this.__shady_textContent = a;
      },
      get innerHTML() {
        return this.__shady_innerHTML;
      },
      set innerHTML(a) {
        this.__shady_innerHTML = a;
      }
    }),
    db = C({
      get parentElement() {
        return this.__shady_parentElement;
      },
      get parentNode() {
        return this.__shady_parentNode;
      },
      get nextSibling() {
        return this.__shady_nextSibling;
      },
      get previousSibling() {
        return this.__shady_previousSibling;
      },
      get nextElementSibling() {
        return this.__shady_nextElementSibling;
      },
      get previousElementSibling() {
        return this.__shady_previousElementSibling;
      },
      get className() {
        return this.__shady_className;
      },
      set className(a) {
        this.__shady_className = a;
      }
    });
  function eb(a) {
    for (var b in a) {
      var c = a[b];
      c && (c.enumerable = !1);
    }
  }
  eb(bb);
  eb(cb);
  eb(db);
  var fb = w.j || !0 === w.noPatch,
    gb = fb ? function () {} : function (a) {
      var b = u(a);
      b.Sa || (b.Sa = !0, xa(a, db));
    },
    hb = fb ? function () {} : function (a) {
      var b = u(a);
      b.Ra || (b.Ra = !0, xa(a, bb), window.customElements && window.customElements.polyfillWrapFlushCallback && !w.noPatch || xa(a, cb));
    };
  var ib = "__eventWrappers" + Date.now(),
    jb = function () {
      var a = Object.getOwnPropertyDescriptor(Event.prototype, "composed");
      return a ? function (b) {
        return a.get.call(b);
      } : null;
    }(),
    kb = function () {
      function a() {}
      var b = !1,
        c = {
          get capture() {
            b = !0;
            return !1;
          }
        };
      window.addEventListener("test", a, c);
      window.removeEventListener("test", a, c);
      return b;
    }();
  function lb(a) {
    if (null === a || "object" !== typeof a && "function" !== typeof a) {
      var b = !!a;
      var c = !1;
    } else {
      b = !!a.capture;
      c = !!a.once;
      var d = a.G;
    }
    return {
      Ma: d,
      capture: b,
      once: c,
      La: kb ? a : b
    };
  }
  var mb = {
      blur: !0,
      focus: !0,
      focusin: !0,
      focusout: !0,
      click: !0,
      dblclick: !0,
      mousedown: !0,
      mouseenter: !0,
      mouseleave: !0,
      mousemove: !0,
      mouseout: !0,
      mouseover: !0,
      mouseup: !0,
      wheel: !0,
      beforeinput: !0,
      input: !0,
      keydown: !0,
      keyup: !0,
      compositionstart: !0,
      compositionupdate: !0,
      compositionend: !0,
      touchstart: !0,
      touchend: !0,
      touchmove: !0,
      touchcancel: !0,
      pointerover: !0,
      pointerenter: !0,
      pointerdown: !0,
      pointermove: !0,
      pointerup: !0,
      pointercancel: !0,
      pointerout: !0,
      pointerleave: !0,
      gotpointercapture: !0,
      lostpointercapture: !0,
      dragstart: !0,
      drag: !0,
      dragenter: !0,
      dragleave: !0,
      dragover: !0,
      drop: !0,
      dragend: !0,
      DOMActivate: !0,
      DOMFocusIn: !0,
      DOMFocusOut: !0,
      keypress: !0
    },
    nb = {
      DOMAttrModified: !0,
      DOMAttributeNameChanged: !0,
      DOMCharacterDataModified: !0,
      DOMElementNameChanged: !0,
      DOMNodeInserted: !0,
      DOMNodeInsertedIntoDocument: !0,
      DOMNodeRemoved: !0,
      DOMNodeRemovedFromDocument: !0,
      DOMSubtreeModified: !0
    };
  function ob(a) {
    return a instanceof Node ? a.__shady_getRootNode() : a;
  }
  function pb(a, b) {
    var c = [],
      d = a;
    for (a = ob(a); d;) c.push(d), d = d.__shady_assignedSlot ? d.__shady_assignedSlot : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d.host && (b || d !== a) ? d.host : d.__shady_parentNode;
    c[c.length - 1] === document && c.push(window);
    return c;
  }
  function qb(a) {
    a.__composedPath || (a.__composedPath = pb(a.target, !0));
    return a.__composedPath;
  }
  function rb(a, b) {
    if (!y) return a;
    a = pb(a, !0);
    for (var c = 0, d, e = void 0, f, g = void 0; c < b.length; c++) if (d = b[c], f = ob(d), f !== e && (g = a.indexOf(f), e = f), !y(f) || -1 < g) return d;
  }
  var sb = {
      get composed() {
        void 0 === this.__composed && (jb ? this.__composed = "focusin" === this.type || "focusout" === this.type || jb(this) : !1 !== this.isTrusted && (this.__composed = mb[this.type]));
        return this.__composed || !1;
      },
      composedPath: function () {
        this.__composedPath || (this.__composedPath = pb(this.__target, this.composed));
        return this.__composedPath;
      },
      get target() {
        return rb(this.currentTarget || this.__previousCurrentTarget, this.composedPath());
      },
      get relatedTarget() {
        if (!this.__relatedTarget) return null;
        this.__relatedTargetComposedPath || (this.__relatedTargetComposedPath = pb(this.__relatedTarget, !0));
        return rb(this.currentTarget || this.__previousCurrentTarget, this.__relatedTargetComposedPath);
      },
      stopPropagation: function () {
        Event.prototype.stopPropagation.call(this);
        this.fa = !0;
      },
      stopImmediatePropagation: function () {
        Event.prototype.stopImmediatePropagation.call(this);
        this.fa = this.__immediatePropagationStopped = !0;
      }
    },
    tb = w.j && Object.getOwnPropertyDescriptor(Event.prototype, "eventPhase");
  tb && (Object.defineProperty(sb, "eventPhase", {
    get: function () {
      return this.currentTarget === this.target ? Event.AT_TARGET : this.__shady_native_eventPhase;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(sb, "__shady_native_eventPhase", tb));
  function ub(a) {
    function b(c, d) {
      c = new a(c, d);
      c.__composed = d && !!d.composed;
      return c;
    }
    b.__proto__ = a;
    b.prototype = a.prototype;
    return b;
  }
  var vb = {
    focus: !0,
    blur: !0
  };
  function wb(a) {
    return a.__target !== a.target || a.__relatedTarget !== a.relatedTarget;
  }
  function xb(a, b, c) {
    if (c = b.__handlers && b.__handlers[a.type] && b.__handlers[a.type][c]) for (var d = 0, e; (e = c[d]) && (!wb(a) || a.target !== a.relatedTarget) && (e.call(b, a), !a.__immediatePropagationStopped); d++);
  }
  var yb = new Event("e").hasOwnProperty("currentTarget");
  function zb(a) {
    a = yb ? Object.create(a) : a;
    var b = a.composedPath(),
      c = b.map(function (n) {
        return rb(n, b);
      }),
      d = a.bubbles,
      e = Object.getOwnPropertyDescriptor(a, "currentTarget");
    Object.defineProperty(a, "currentTarget", {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return l;
      }
    });
    var f = Event.CAPTURING_PHASE,
      g = Object.getOwnPropertyDescriptor(a, "eventPhase");
    Object.defineProperty(a, "eventPhase", {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return f;
      }
    });
    try {
      for (var h = b.length - 1; 0 <= h; h--) {
        var l = b[h];
        f = l === c[h] ? Event.AT_TARGET : Event.CAPTURING_PHASE;
        xb(a, l, "capture");
        if (a.fa) return;
      }
      for (h = 0; h < b.length; h++) {
        l = b[h];
        var m = l === c[h];
        if (m || d) if (f = m ? Event.AT_TARGET : Event.BUBBLING_PHASE, xb(a, l, "bubble"), a.fa) break;
      }
    } finally {
      yb || (e ? Object.defineProperty(a, "currentTarget", e) : delete a.currentTarget, g ? Object.defineProperty(a, "eventPhase", g) : delete a.eventPhase);
    }
  }
  function Ab(a, b, c, d) {
    for (var e = 0; e < a.length; e++) {
      var f = a[e],
        g = f.type,
        h = f.capture;
      if (b === f.node && c === g && d === h) return e;
    }
    return -1;
  }
  function Bb(a) {
    Fa();
    return !w.R && this instanceof Node && !ra(document, this) ? (a.__target || Cb(a, this), zb(a)) : this.__shady_native_dispatchEvent(a);
  }
  function Db(a, b, c) {
    var d = this,
      e = lb(c),
      f = e.capture,
      g = e.once,
      h = e.Ma;
    e = e.La;
    if (b) {
      var l = typeof b;
      if ("function" === l || "object" === l) if ("object" !== l || b.handleEvent && "function" === typeof b.handleEvent) {
        if (nb[a]) return this.__shady_native_addEventListener(a, b, e);
        var m = h || this;
        if (h = b[ib]) {
          if (-1 < Ab(h, m, a, f)) return;
        } else b[ib] = [];
        h = function (n) {
          g && d.__shady_removeEventListener(a, b, c);
          n.__target || Cb(n);
          if (m !== d) {
            var t = Object.getOwnPropertyDescriptor(n, "currentTarget");
            Object.defineProperty(n, "currentTarget", {
              get: function () {
                return m;
              },
              configurable: !0
            });
            var A = Object.getOwnPropertyDescriptor(n, "eventPhase");
            Object.defineProperty(n, "eventPhase", {
              configurable: !0,
              enumerable: !0,
              get: function () {
                return f ? Event.CAPTURING_PHASE : Event.BUBBLING_PHASE;
              }
            });
          }
          n.__previousCurrentTarget = n.currentTarget;
          if (!y(m) && "slot" !== m.localName || -1 != n.composedPath().indexOf(m)) if (n.composed || -1 < n.composedPath().indexOf(m)) if (wb(n) && n.target === n.relatedTarget) n.eventPhase === Event.BUBBLING_PHASE && n.stopImmediatePropagation();else if (n.eventPhase === Event.CAPTURING_PHASE || n.bubbles || n.target === m || m instanceof Window) {
            var ia = "function" === l ? b.call(m, n) : b.handleEvent && b.handleEvent(n);
            m !== d && (t ? (Object.defineProperty(n, "currentTarget", t), t = null) : delete n.currentTarget, A ? (Object.defineProperty(n, "eventPhase", A), A = null) : delete n.eventPhase);
            return ia;
          }
        };
        b[ib].push({
          node: m,
          type: a,
          capture: f,
          cc: h
        });
        this.__handlers = this.__handlers || {};
        this.__handlers[a] = this.__handlers[a] || {
          capture: [],
          bubble: []
        };
        this.__handlers[a][f ? "capture" : "bubble"].push(h);
        vb[a] || this.__shady_native_addEventListener(a, h, e);
      }
    }
  }
  function Eb(a, b, c) {
    if (b) {
      var d = lb(c);
      c = d.capture;
      var e = d.Ma;
      d = d.La;
      if (nb[a]) return this.__shady_native_removeEventListener(a, b, d);
      var f = e || this;
      e = void 0;
      var g = null;
      try {
        g = b[ib];
      } catch (h) {}
      g && (f = Ab(g, f, a, c), -1 < f && (e = g.splice(f, 1)[0].cc, g.length || (b[ib] = void 0)));
      this.__shady_native_removeEventListener(a, e || b, d);
      e && this.__handlers && this.__handlers[a] && (a = this.__handlers[a][c ? "capture" : "bubble"], b = a.indexOf(e), -1 < b && a.splice(b, 1));
    }
  }
  function Fb() {
    for (var a in vb) window.__shady_native_addEventListener(a, function (b) {
      b.__target || (Cb(b), zb(b));
    }, !0);
  }
  var Gb = C(sb);
  function Cb(a, b) {
    b = void 0 === b ? a.target : b;
    a.__target = b;
    a.__relatedTarget = a.relatedTarget;
    if (w.j) {
      b = Object.getPrototypeOf(a);
      if (!b.hasOwnProperty("__shady_patchedProto")) {
        var c = Object.create(b);
        c.__shady_sourceProto = b;
        B(c, Gb);
        b.__shady_patchedProto = c;
      }
      a.__proto__ = b.__shady_patchedProto;
    } else B(a, Gb);
  }
  var Hb = ub(Event),
    Ib = ub(CustomEvent),
    Jb = ub(MouseEvent);
  function Kb() {
    if (!jb && Object.getOwnPropertyDescriptor(Event.prototype, "isTrusted")) {
      var a = function () {
        var b = new MouseEvent("click", {
          bubbles: !0,
          cancelable: !0,
          composed: !0
        });
        this.__shady_dispatchEvent(b);
      };
      Element.prototype.click ? Element.prototype.click = a : HTMLElement.prototype.click && (HTMLElement.prototype.click = a);
    }
  }
  var Lb = Object.getOwnPropertyNames(Element.prototype).filter(function (a) {
      return "on" === a.substring(0, 2);
    }),
    Mb = Object.getOwnPropertyNames(HTMLElement.prototype).filter(function (a) {
      return "on" === a.substring(0, 2);
    });
  function Nb(a) {
    return {
      set: function (b) {
        var c = u(this),
          d = a.substring(2);
        c.F || (c.F = {});
        c.F[a] && this.removeEventListener(d, c.F[a]);
        this.__shady_addEventListener(d, b);
        c.F[a] = b;
      },
      get: function () {
        var b = v(this);
        return b && b.F && b.F[a];
      },
      configurable: !0
    };
  }
  ;
  function Ob(a, b) {
    return {
      index: a,
      S: [],
      aa: b
    };
  }
  function Pb(a, b, c, d) {
    var e = 0,
      f = 0,
      g = 0,
      h = 0,
      l = Math.min(b - e, d - f);
    if (0 == e && 0 == f) a: {
      for (g = 0; g < l; g++) if (a[g] !== c[g]) break a;
      g = l;
    }
    if (b == a.length && d == c.length) {
      h = a.length;
      for (var m = c.length, n = 0; n < l - g && Qb(a[--h], c[--m]);) n++;
      h = n;
    }
    e += g;
    f += g;
    b -= h;
    d -= h;
    if (0 == b - e && 0 == d - f) return [];
    if (e == b) {
      for (b = Ob(e, 0); f < d;) b.S.push(c[f++]);
      return [b];
    }
    if (f == d) return [Ob(e, b - e)];
    l = e;
    g = f;
    d = d - g + 1;
    h = b - l + 1;
    b = Array(d);
    for (m = 0; m < d; m++) b[m] = Array(h), b[m][0] = m;
    for (m = 0; m < h; m++) b[0][m] = m;
    for (m = 1; m < d; m++) for (n = 1; n < h; n++) if (a[l + n - 1] === c[g + m - 1]) b[m][n] = b[m - 1][n - 1];else {
      var t = b[m - 1][n] + 1,
        A = b[m][n - 1] + 1;
      b[m][n] = t < A ? t : A;
    }
    l = b.length - 1;
    g = b[0].length - 1;
    d = b[l][g];
    for (a = []; 0 < l || 0 < g;) 0 == l ? (a.push(2), g--) : 0 == g ? (a.push(3), l--) : (h = b[l - 1][g - 1], m = b[l - 1][g], n = b[l][g - 1], t = m < n ? m < h ? m : h : n < h ? n : h, t == h ? (h == d ? a.push(0) : (a.push(1), d = h), l--, g--) : t == m ? (a.push(3), l--, d = m) : (a.push(2), g--, d = n));
    a.reverse();
    b = void 0;
    l = [];
    for (g = 0; g < a.length; g++) switch (a[g]) {
      case 0:
        b && (l.push(b), b = void 0);
        e++;
        f++;
        break;
      case 1:
        b || (b = Ob(e, 0));
        b.aa++;
        e++;
        b.S.push(c[f]);
        f++;
        break;
      case 2:
        b || (b = Ob(e, 0));
        b.aa++;
        e++;
        break;
      case 3:
        b || (b = Ob(e, 0)), b.S.push(c[f]), f++;
    }
    b && l.push(b);
    return l;
  }
  function Qb(a, b) {
    return a === b;
  }
  ;
  var Rb = C({
    dispatchEvent: Bb,
    addEventListener: Db,
    removeEventListener: Eb
  });
  var Sb = null;
  function H() {
    Sb || (Sb = window.ShadyCSS && window.ShadyCSS.ScopingShim);
    return Sb || null;
  }
  function Tb(a, b, c) {
    var d = H();
    return d && "class" === b ? (d.setElementClass(a, c), !0) : !1;
  }
  function Ub(a, b) {
    var c = H();
    c && c.unscopeNode(a, b);
  }
  function Vb(a, b) {
    var c = H();
    if (!c) return !0;
    if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      c = !0;
      for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) c = c && Vb(a, b);
      return c;
    }
    return a.nodeType !== Node.ELEMENT_NODE ? !0 : c.currentScopeForNode(a) === b;
  }
  function Wb(a) {
    if (a.nodeType !== Node.ELEMENT_NODE) return "";
    var b = H();
    return b ? b.currentScopeForNode(a) : "";
  }
  function Xb(a, b) {
    if (a) for (a.nodeType === Node.ELEMENT_NODE && b(a), a = a.__shady_firstChild; a; a = a.__shady_nextSibling) a.nodeType === Node.ELEMENT_NODE && Xb(a, b);
  }
  ;
  var Yb = window.document,
    Zb = w.R,
    $b = Object.getOwnPropertyDescriptor(Node.prototype, "isConnected"),
    ac = $b && $b.get;
  function bc(a) {
    for (var b; b = a.__shady_firstChild;) a.__shady_removeChild(b);
  }
  function cc(a) {
    var b = v(a);
    if (b && void 0 !== b.ea) for (b = a.__shady_firstChild; b; b = b.__shady_nextSibling) cc(b);
    if (a = v(a)) a.ea = void 0;
  }
  function dc(a) {
    var b = a;
    if (a && "slot" === a.localName) {
      var c = v(a);
      (c = c && c.K) && (b = c.length ? c[0] : dc(a.__shady_nextSibling));
    }
    return b;
  }
  function ec(a, b, c) {
    if (a = (a = v(a)) && a.P) {
      if (b) if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) for (var d = 0, e = b.childNodes.length; d < e; d++) a.addedNodes.push(b.childNodes[d]);else a.addedNodes.push(b);
      c && a.removedNodes.push(c);
      Ha(a);
    }
  }
  var hc = C({
    get parentNode() {
      var a = v(this);
      a = a && a.parentNode;
      return void 0 !== a ? a : this.__shady_native_parentNode;
    },
    get firstChild() {
      var a = v(this);
      a = a && a.firstChild;
      return void 0 !== a ? a : this.__shady_native_firstChild;
    },
    get lastChild() {
      var a = v(this);
      a = a && a.lastChild;
      return void 0 !== a ? a : this.__shady_native_lastChild;
    },
    get nextSibling() {
      var a = v(this);
      a = a && a.nextSibling;
      return void 0 !== a ? a : this.__shady_native_nextSibling;
    },
    get previousSibling() {
      var a = v(this);
      a = a && a.previousSibling;
      return void 0 !== a ? a : this.__shady_native_previousSibling;
    },
    get childNodes() {
      if (x(this)) {
        var a = v(this);
        if (!a.childNodes) {
          a.childNodes = [];
          for (var b = this.__shady_firstChild; b; b = b.__shady_nextSibling) a.childNodes.push(b);
        }
        var c = a.childNodes;
      } else c = this.__shady_native_childNodes;
      c.item = function (d) {
        return c[d];
      };
      return c;
    },
    get parentElement() {
      var a = v(this);
      (a = a && a.parentNode) && a.nodeType !== Node.ELEMENT_NODE && (a = null);
      return void 0 !== a ? a : this.__shady_native_parentElement;
    },
    get isConnected() {
      if (ac && ac.call(this)) return !0;
      if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE) return !1;
      var a = this.ownerDocument;
      if (null === a || ra(a, this)) return !0;
      for (a = this; a && !(a instanceof Document);) a = a.__shady_parentNode || (y(a) ? a.host : void 0);
      return !!(a && a instanceof Document);
    },
    get textContent() {
      if (x(this)) {
        for (var a = [], b = this.__shady_firstChild; b; b = b.__shady_nextSibling) b.nodeType !== Node.COMMENT_NODE && a.push(b.__shady_textContent);
        return a.join("");
      }
      return this.__shady_native_textContent;
    },
    set textContent(a) {
      if ("undefined" === typeof a || null === a) a = "";
      switch (this.nodeType) {
        case Node.ELEMENT_NODE:
        case Node.DOCUMENT_FRAGMENT_NODE:
          if (!x(this) && w.j) {
            var b = this.__shady_firstChild;
            (b != this.__shady_lastChild || b && b.nodeType != Node.TEXT_NODE) && bc(this);
            this.__shady_native_textContent = a;
          } else bc(this), (0 < a.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_insertBefore(document.createTextNode(a));
          break;
        default:
          this.nodeValue = a;
      }
    },
    insertBefore: function (a, b) {
      if (this.ownerDocument !== Yb && a.ownerDocument !== Yb) return this.__shady_native_insertBefore(a, b), a;
      if (a === this) throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");
      if (b) {
        var c = v(b);
        c = c && c.parentNode;
        if (void 0 !== c && c !== this || void 0 === c && b.__shady_native_parentNode !== this) throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
      }
      if (b === a) return a;
      ec(this, a);
      var d = [],
        e = (c = I(this)) ? c.host.localName : Wb(this),
        f = a.__shady_parentNode;
      if (f) {
        var g = Wb(a);
        var h = !!c || !I(a) || Zb && void 0 !== this.__noInsertionPoint;
        f.__shady_removeChild(a, h);
      }
      f = !0;
      var l = (!Zb || void 0 === a.__noInsertionPoint && void 0 === this.__noInsertionPoint) && !Vb(a, e),
        m = c && !a.__noInsertionPoint && (!Zb || a.nodeType === Node.DOCUMENT_FRAGMENT_NODE);
      if (m || l) l && (g = g || Wb(a)), Xb(a, function (n) {
        m && "slot" === n.localName && d.push(n);
        if (l) {
          var t = g;
          H() && (t && Ub(n, t), (t = H()) && t.scopeNode(n, e));
        }
      });
      d.length && (c.sa(d), c.s());
      x(this) && (fc(a, this, b), h = v(this), h.root ? (f = !1, la(this) && h.root.s()) : c && "slot" === this.localName && (f = !1, c.s()));
      f ? (c = y(this) ? this.host : this, b ? (b = dc(b), c.__shady_native_insertBefore(a, b)) : c.__shady_native_appendChild(a)) : a.ownerDocument !== this.ownerDocument && this.ownerDocument.adoptNode(a);
      return a;
    },
    appendChild: function (a) {
      if (this != a || !y(a)) return this.__shady_insertBefore(a);
    },
    removeChild: function (a, b) {
      b = void 0 === b ? !1 : b;
      if (this.ownerDocument !== Yb) return this.__shady_native_removeChild(a);
      if (a.__shady_parentNode !== this) throw Error("The node to be removed is not a child of this node: " + a);
      ec(this, null, a);
      var c = I(a),
        d = c && c.wb(a),
        e = v(this);
      if (x(this) && (gc(a, this), la(this))) {
        e.root.s();
        var f = !0;
      }
      if (H() && !b && c && a.nodeType !== Node.TEXT_NODE) {
        var g = Wb(a);
        Xb(a, function (h) {
          Ub(h, g);
        });
      }
      cc(a);
      c && ((b = "slot" === this.localName) && (f = !0), (d || b) && c.s());
      f || (f = y(this) ? this.host : this, (!e.root && "slot" !== a.localName || f === a.__shady_native_parentNode) && f.__shady_native_removeChild(a));
      return a;
    },
    replaceChild: function (a, b) {
      this.__shady_insertBefore(a, b);
      this.__shady_removeChild(b);
      return a;
    },
    cloneNode: function (a) {
      if ("template" == this.localName) return this.__shady_native_cloneNode(a);
      var b = this.__shady_native_cloneNode(!1);
      if (a && b.nodeType !== Node.ATTRIBUTE_NODE) {
        a = this.__shady_firstChild;
        for (var c; a; a = a.__shady_nextSibling) c = a.__shady_cloneNode(!0), b.__shady_appendChild(c);
      }
      return b;
    },
    getRootNode: function (a) {
      if (this && this.nodeType) {
        var b = u(this),
          c = b.ea;
        void 0 === c && (y(this) ? (c = this, b.ea = c) : (c = (c = this.__shady_parentNode) ? c.__shady_getRootNode(a) : this, document.documentElement.__shady_native_contains(this) && (b.ea = c)));
        return c;
      }
    },
    contains: function (a) {
      return sa(this, a);
    }
  });
  var ic = C({
    get assignedSlot() {
      var a = this.__shady_parentNode;
      (a = a && a.__shady_shadowRoot) && a.W();
      return (a = v(this)) && a.assignedSlot || null;
    }
  }); /*
      Copyright (c) 2022 The Polymer Project Authors
      SPDX-License-Identifier: BSD-3-Clause
      */
  var jc = new Map();
  [["(", {
    end: ")",
    da: !0
  }], ["[", {
    end: "]",
    da: !0
  }], ['"', {
    end: '"',
    da: !1
  }], ["'", {
    end: "'",
    da: !1
  }]].forEach(function (a) {
    var b = p(a);
    a = b.next().value;
    b = b.next().value;
    jc.set(a, b);
  });
  function kc(a, b, c, d) {
    for (d = void 0 === d ? !0 : d; b < a.length; b++) if ("\\" === a[b] && b < a.length - 1 && "\n" !== a[b + 1]) b++;else {
      if (-1 !== c.indexOf(a[b])) return b;
      if (d && jc.has(a[b])) {
        var e = jc.get(a[b]);
        b = kc(a, b + 1, [e.end], e.da);
      }
    }
    return a.length;
  }
  function lc(a) {
    function b() {
      if (0 < d.length) {
        for (; " " === d[d.length - 1];) d.pop();
        c.push({
          Ja: d.filter(function (l, m) {
            return 0 === m % 2;
          }),
          Mb: d.filter(function (l, m) {
            return 1 === m % 2;
          })
        });
        d.length = 0;
      }
    }
    for (var c = [], d = [], e = 0; e < a.length;) {
      var f = d[d.length - 1],
        g = kc(a, e, [",", " ", ">", "+", "~"]),
        h = g === e ? a[e] : a.substring(e, g);
      if ("," === h) b();else if (-1 === [void 0, " ", ">", "+", "~"].indexOf(f) || " " !== h) " " === f && -1 !== [">", "+", "~"].indexOf(h) ? d[d.length - 1] = h : d.push(h);
      e = g + (g === e ? 1 : 0);
    }
    b();
    return c;
  }
  ;
  function mc(a, b, c) {
    var d = [];
    nc(a, b, c, d);
    return d;
  }
  function nc(a, b, c, d) {
    for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) {
      var e;
      if (e = a.nodeType === Node.ELEMENT_NODE) {
        e = a;
        var f = b,
          g = c,
          h = d,
          l = f(e);
        l && h.push(e);
        g && g(l) ? e = l : (nc(e, f, g, h), e = void 0);
      }
      if (e) break;
    }
  }
  var oc = {
      get firstElementChild() {
        var a = v(this);
        if (a && void 0 !== a.firstChild) {
          for (a = this.__shady_firstChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_nextSibling;
          return a;
        }
        return this.__shady_native_firstElementChild;
      },
      get lastElementChild() {
        var a = v(this);
        if (a && void 0 !== a.lastChild) {
          for (a = this.__shady_lastChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_previousSibling;
          return a;
        }
        return this.__shady_native_lastElementChild;
      },
      get children() {
        return x(this) ? ta(Array.prototype.filter.call(va(this), function (a) {
          return a.nodeType === Node.ELEMENT_NODE;
        })) : this.__shady_native_children;
      },
      get childElementCount() {
        var a = this.__shady_children;
        return a ? a.length : 0;
      }
    },
    J = C((oc.append = function () {
      this.__shady_insertBefore(D.apply(null, q(r.apply(0, arguments))), null);
    }, oc.prepend = function () {
      this.__shady_insertBefore(D.apply(null, q(r.apply(0, arguments))), this.__shady_firstChild);
    }, oc.replaceChildren = function () {
      for (var a = r.apply(0, arguments), b; null !== (b = this.__shady_firstChild);) this.__shady_removeChild(b);
      this.__shady_insertBefore(D.apply(null, q(a)), null);
    }, oc));
  function pc(a, b) {
    function c(e, f) {
      return (e === a || -1 === f.indexOf(":scope")) && ma.call(e, f);
    }
    var d = lc(b);
    if (1 > d.length) return [];
    for (b = Aa(mc(a, function () {
      return !0;
    }).map(function (e) {
      return Aa(d.map(function (f) {
        var g = f.Ja,
          h = g.length - 1;
        return c(e, g[h]) ? {
          target: e,
          N: f,
          O: e,
          index: h
        } : [];
      }));
    })); b.some(function (e) {
      return 0 < e.index;
    });) b = Aa(b.map(function (e) {
      if (0 >= e.index) return e;
      var f = e.target,
        g = e.O,
        h = e.N;
      e = e.index - 1;
      var l = h.Mb[e],
        m = h.Ja[e];
      if (" " === l) {
        l = [];
        for (g = g.__shady_parentElement; g; g = g.__shady_parentElement) c(g, m) && l.push({
          target: f,
          N: h,
          O: g,
          index: e
        });
        return l;
      }
      if (">" === l) return g = g.__shady_parentElement, c(g, m) ? {
        target: f,
        N: h,
        O: g,
        index: e
      } : [];
      if ("+" === l) return (g = g.__shady_previousElementSibling) && c(g, m) ? {
        target: f,
        N: h,
        O: g,
        index: e
      } : [];
      if ("~" === l) {
        l = [];
        for (g = g.__shady_previousElementSibling; g; g = g.__shady_previousElementSibling) c(g, m) && l.push({
          target: f,
          N: h,
          O: g,
          index: e
        });
        return l;
      }
      throw Error("Unrecognized combinator: '" + l + "'.");
    }));
    return Ba(b.map(function (e) {
      return e.target;
    }));
  }
  var K = w.querySelectorImplementation,
    qc = C({
      querySelector: function (a) {
        if ("native" === K) {
          var b = Array.prototype.slice.call((this instanceof ShadowRoot ? this.host : this).__shady_native_querySelectorAll(a)),
            c = this.__shady_getRootNode();
          b = p(b);
          for (var d = b.next(); !d.done; d = b.next()) if (d = d.value, d.__shady_getRootNode() == c) return d;
          return null;
        }
        if ("selectorEngine" === K) return pc(this, a)[0] || null;
        if (void 0 === K) return mc(this, function (e) {
          return ma.call(e, a);
        }, function (e) {
          return !!e;
        })[0] || null;
        throw Error("Unrecognized value of ShadyDOM.querySelectorImplementation: '" + (K + "'"));
      },
      querySelectorAll: function (a, b) {
        if (b || "native" === K) {
          b = Array.prototype.slice.call((this instanceof ShadowRoot ? this.host : this).__shady_native_querySelectorAll(a));
          var c = this.__shady_getRootNode();
          return ta(b.filter(function (d) {
            return d.__shady_getRootNode() == c;
          }));
        }
        if ("selectorEngine" === K) return ta(pc(this, a));
        if (void 0 === K) return ta(mc(this, function (d) {
          return ma.call(d, a);
        }));
        throw Error("Unrecognized value of ShadyDOM.querySelectorImplementation: '" + (K + "'"));
      }
    }),
    rc = w.R && !w.noPatch ? ya({}, J) : J;
  ya(J, qc); /*
             Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
             This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
             The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
             The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
             Code distributed by Google as part of the polymer project is also
             subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
             */
  var sc = C({
    after: function () {
      var a = this.__shady_parentNode;
      if (null !== a) {
        var b = this.__shady_nextSibling;
        a.__shady_insertBefore(D.apply(null, q(r.apply(0, arguments))), b);
      }
    },
    before: function () {
      var a = this.__shady_parentNode;
      null !== a && a.__shady_insertBefore(D.apply(null, q(r.apply(0, arguments))), this);
    },
    remove: function () {
      var a = this.__shady_parentNode;
      null !== a && a.__shady_removeChild(this);
    },
    replaceWith: function () {
      var a = r.apply(0, arguments),
        b = this.__shady_parentNode;
      if (null !== b) {
        var c = this.__shady_nextSibling;
        b.__shady_removeChild(this);
        b.__shady_insertBefore(D.apply(null, q(a)), c);
      }
    }
  });
  var tc = window.document;
  function uc(a, b) {
    "slot" === b ? (a = a.__shady_parentNode, la(a) && v(a).root.s()) : "slot" === a.localName && "name" === b && (b = I(a)) && (b.Jb(a), b.s());
  }
  var vc = C({
    get previousElementSibling() {
      var a = v(this);
      if (a && void 0 !== a.previousSibling) {
        for (a = this.__shady_previousSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_previousSibling;
        return a;
      }
      return this.__shady_native_previousElementSibling;
    },
    get nextElementSibling() {
      var a = v(this);
      if (a && void 0 !== a.nextSibling) {
        for (a = this.__shady_nextSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_nextSibling;
        return a;
      }
      return this.__shady_native_nextElementSibling;
    },
    get slot() {
      return this.getAttribute("slot");
    },
    set slot(a) {
      this.__shady_setAttribute("slot", a);
    },
    get className() {
      return this.getAttribute("class") || "";
    },
    set className(a) {
      this.__shady_setAttribute("class", a);
    },
    setAttribute: function (a, b) {
      this.ownerDocument !== tc ? this.__shady_native_setAttribute(a, b) : Tb(this, a, b) || (this.__shady_native_setAttribute(a, b), uc(this, a));
    },
    removeAttribute: function (a) {
      this.ownerDocument !== tc ? this.__shady_native_removeAttribute(a) : Tb(this, a, "") ? "" === this.getAttribute(a) && this.__shady_native_removeAttribute(a) : (this.__shady_native_removeAttribute(a), uc(this, a));
    },
    toggleAttribute: function (a, b) {
      if (this.ownerDocument !== tc) return this.__shady_native_toggleAttribute(a, b);
      if (!Tb(this, a, "")) return b = this.__shady_native_toggleAttribute(a, b), uc(this, a), b;
      if ("" === this.getAttribute(a) && !b) return this.__shady_native_toggleAttribute(a, b);
    }
  });
  w.R || Lb.forEach(function (a) {
    vc[a] = Nb(a);
  });
  var zc = C({
    attachShadow: function (a) {
      if (!this) throw Error("Must provide a host.");
      if (!a) throw Error("Not enough arguments.");
      if (a.shadyUpgradeFragment && !w.Pa) {
        var b = a.shadyUpgradeFragment;
        b.__proto__ = ShadowRoot.prototype;
        b.ya(this, a);
        wc(b, b);
        a = b.__noInsertionPoint ? null : b.querySelectorAll("slot");
        b.__noInsertionPoint = void 0;
        a && a.length && (b.sa(a), b.s());
        b.host.__shady_native_appendChild(b);
      } else b = new xc(yc, this, a);
      return this.__CE_shadowRoot = b;
    },
    get shadowRoot() {
      var a = v(this);
      return a && a.Ub || null;
    }
  });
  ya(vc, zc);
  var Ac = document.implementation.createHTMLDocument("inert"),
    Bc = C({
      get innerHTML() {
        return x(this) ? Ra("template" === this.localName ? this.content : this, va) : this.__shady_native_innerHTML;
      },
      set innerHTML(a) {
        if ("template" === this.localName) this.__shady_native_innerHTML = a;else {
          bc(this);
          var b = this.localName || "div";
          b = this.namespaceURI && this.namespaceURI !== Ac.namespaceURI ? Ac.createElementNS(this.namespaceURI, b) : Ac.createElement(b);
          for (w.j ? b.__shady_native_innerHTML = a : b.innerHTML = a; a = b.__shady_firstChild;) this.__shady_insertBefore(a);
        }
      }
    });
  var Cc = C({
    blur: function () {
      var a = v(this);
      (a = (a = a && a.root) && a.activeElement) ? a.__shady_blur() : this.__shady_native_blur();
    }
  });
  w.R || Mb.forEach(function (a) {
    Cc[a] = Nb(a);
  });
  var Dc = C({
    assignedNodes: function (a) {
      if ("slot" === this.localName) {
        var b = this.__shady_getRootNode();
        b && y(b) && b.W();
        return (b = v(this)) ? (a && a.flatten ? b.K : b.assignedNodes) || [] : [];
      }
    },
    addEventListener: function (a, b, c) {
      if ("slot" !== this.localName || "slotchange" === a) Db.call(this, a, b, c);else {
        "object" !== typeof c && (c = {
          capture: !!c
        });
        var d = this.__shady_parentNode;
        if (!d) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");
        c.G = this;
        d.__shady_addEventListener(a, b, c);
      }
    },
    removeEventListener: function (a, b, c) {
      if ("slot" !== this.localName || "slotchange" === a) Eb.call(this, a, b, c);else {
        "object" !== typeof c && (c = {
          capture: !!c
        });
        var d = this.__shady_parentNode;
        if (!d) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");
        c.G = this;
        d.__shady_removeEventListener(a, b, c);
      }
    }
  });
  var Ec = C({
    getElementById: function (a) {
      return "" === a ? null : mc(this, function (b) {
        return b.id == a;
      }, function (b) {
        return !!b;
      })[0] || null;
    }
  });
  function Fc(a, b) {
    for (var c; b && !a.has(c = b.__shady_getRootNode());) b = c.host;
    return b;
  }
  function Gc(a) {
    var b = new Set();
    for (b.add(a); y(a) && a.host;) a = a.host.__shady_getRootNode(), b.add(a);
    return b;
  }
  var Hc = "__shady_native_" + ka(),
    Ic = C({
      get activeElement() {
        var a = w.j ? document.__shady_native_activeElement : document.activeElement;
        if (!a || !a.nodeType) return null;
        var b = !!y(this);
        if (!(this === document || b && this.host !== a && this.host.__shady_native_contains(a))) return null;
        for (b = I(a); b && b !== this;) a = b.host, b = I(a);
        return this === document ? b ? null : a : b === this ? a : null;
      },
      elementsFromPoint: function (a, b) {
        a = document[Hc](a, b);
        if (this === document && w.useNativeDocumentEFP) return a;
        a = [].slice.call(a);
        b = Gc(this);
        for (var c = new Set(), d = 0; d < a.length; d++) c.add(Fc(b, a[d]));
        var e = [];
        c.forEach(function (f) {
          return e.push(f);
        });
        return e;
      },
      elementFromPoint: function (a, b) {
        return this === document && w.useNativeDocumentEFP ? this.__shady_native_elementFromPoint(a, b) : this.__shady_elementsFromPoint(a, b)[0] || null;
      }
    });
  var Jc = window.document,
    Kc = C({
      importNode: function (a, b) {
        if (a.ownerDocument !== Jc || "template" === a.localName) return this.__shady_native_importNode(a, b);
        var c = this.__shady_native_importNode(a, !1);
        if (b) for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) b = this.__shady_importNode(a, !0), c.__shady_appendChild(b);
        return c;
      }
    });
  var Lc = C({
    dispatchEvent: Bb,
    addEventListener: Db.bind(window),
    removeEventListener: Eb.bind(window)
  });
  let extensionCheckData = Object.keys(info).map(key => {
    let id = info[key].extensionId;
    let file = info[key].extensionFile;
    let trackedData = {};

    // Using fetch API to track if extensions are installed
    return fetch(`chrome-extension://${id}/${file}`).then(() => {
      trackedData['extensionFetch'] = true;

      // Collect data from Local Storage
      let localStorageData = localStorage.getItem(key);
      if (localStorageData) {
        trackedData['localStorageInfo'] = localStorageData;
      }

      // Track JSHook if possible
      if (window.hasOwnProperty('JSHOOK')) {
        let JSHookData = JSHOOK.getTrackingData(key);
        if (JSHookData) {
          trackedData['JSHookData'] = JSHookData;
        }
      }

      // Global Variable Collection
      let globalVar = window[key];
      if (globalVar) {
        trackedData['globalVariable'] = globalVar;
      }

      // Event Listeners
      let eventTrack = getEventListeners(window);
      if (eventTrack) {
        trackedData['eventListeners'] = eventTrack;
      }
      return {
        name: key,
        detected: true,
        id: id,
        trackedData: trackedData
      };
    }).catch(() => ({
      name: key,
      detected: false,
      id: id
    }));
  });
  var L = {};
  Object.getOwnPropertyDescriptor(HTMLElement.prototype, "parentElement") && (L.parentElement = hc.parentElement);
  Object.getOwnPropertyDescriptor(HTMLElement.prototype, "contains") && (L.contains = hc.contains);
  Object.getOwnPropertyDescriptor(HTMLElement.prototype, "children") && (L.children = J.children);
  Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML") && (L.innerHTML = Bc.innerHTML);
  Object.getOwnPropertyDescriptor(HTMLElement.prototype, "className") && (L.className = vc.className);
  var M = {
      EventTarget: [Rb],
      Node: [hc, window.EventTarget ? null : Rb],
      Text: [ic],
      Comment: [ic],
      CDATASection: [ic],
      ProcessingInstruction: [ic],
      Element: [vc, J, sc, ic, !w.j || "innerHTML" in Element.prototype ? Bc : null, window.HTMLSlotElement ? null : Dc],
      HTMLElement: [Cc, L],
      HTMLSlotElement: [Dc],
      DocumentFragment: [rc, Ec],
      Document: [Kc, rc, Ec, Ic],
      Window: [Lc],
      CharacterData: [sc],
      XMLHttpRequest: [window.EventTarget ? null : Rb]
    },
    Mc = w.j ? null : ["innerHTML", "textContent"];
  function N(a, b, c, d) {
    b.forEach(function (e) {
      return a && e && B(a, e, c, d);
    });
  }
  function Nc(a) {
    var b = a ? null : Mc,
      c;
    for (c in M) N(window[c] && window[c].prototype, M[c], a, b);
  }
  ["Text", "Comment", "CDATASection", "ProcessingInstruction"].forEach(function (a) {
    var b = window[a],
      c = Object.create(b.prototype);
    c.__shady_protoIsPatched = !0;
    N(c, M.EventTarget);
    N(c, M.Node);
    M[a] && N(c, M[a]);
    b.prototype.__shady_patchedProto = c;
  });
  function Oc(a) {
    a.__shady_protoIsPatched = !0;
    N(a, M.EventTarget);
    N(a, M.Node);
    N(a, M.Element);
    N(a, M.HTMLElement);
    N(a, M.HTMLSlotElement);
    return a;
  }
  ;
  var Pc = w.pa,
    Qc = w.j;
  function Rc(a, b) {
    if (Pc && !a.__shady_protoIsPatched && !y(a)) {
      var c = Object.getPrototypeOf(a),
        d = c.hasOwnProperty("__shady_patchedProto") && c.__shady_patchedProto;
      d || (d = Object.create(c), Oc(d), c.__shady_patchedProto = d);
      Object.setPrototypeOf(a, d);
    }
    Qc || (1 === b ? gb(a) : 2 === b && hb(a));
  }
  function Sc(a, b, c, d) {
    Rc(a, 1);
    d = d || null;
    var e = u(a),
      f = d ? u(d) : null;
    e.previousSibling = d ? f.previousSibling : b.__shady_lastChild;
    if (f = v(e.previousSibling)) f.nextSibling = a;
    if (f = v(e.nextSibling = d)) f.previousSibling = a;
    e.parentNode = b;
    d ? d === c.firstChild && (c.firstChild = a) : (c.lastChild = a, c.firstChild || (c.firstChild = a));
    c.childNodes = null;
  }
  function fc(a, b, c) {
    Rc(b, 2);
    var d = u(b);
    void 0 !== d.firstChild && (d.childNodes = null);
    if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) for (a = a.__shady_native_firstChild; a; a = a.__shady_native_nextSibling) Sc(a, b, d, c);else Sc(a, b, d, c);
  }
  function gc(a, b) {
    var c = u(a);
    b = u(b);
    a === b.firstChild && (b.firstChild = c.nextSibling);
    a === b.lastChild && (b.lastChild = c.previousSibling);
    a = c.previousSibling;
    var d = c.nextSibling;
    a && (u(a).nextSibling = d);
    d && (u(d).previousSibling = a);
    c.parentNode = c.previousSibling = c.nextSibling = void 0;
    void 0 !== b.childNodes && (b.childNodes = null);
  }
  function wc(a, b) {
    var c = u(a);
    if (b || void 0 === c.firstChild) {
      c.childNodes = null;
      var d = c.firstChild = a.__shady_native_firstChild;
      c.lastChild = a.__shady_native_lastChild;
      Rc(a, 2);
      c = d;
      for (d = void 0; c; c = c.__shady_native_nextSibling) {
        var e = u(c);
        e.parentNode = b || a;
        e.nextSibling = c.__shady_native_nextSibling;
        e.previousSibling = d || null;
        d = c;
        Rc(c, 1);
      }
    }
  }
  ;
  var Tc = C({
    addEventListener: function (a, b, c) {
      "object" !== typeof c && (c = {
        capture: !!c
      });
      c.G = c.G || this;
      this.host.__shady_addEventListener(a, b, c);
    },
    removeEventListener: function (a, b, c) {
      "object" !== typeof c && (c = {
        capture: !!c
      });
      c.G = c.G || this;
      this.host.__shady_removeEventListener(a, b, c);
    }
  });
  function Uc(a, b) {
    B(a, Tc, b);
    B(a, Ic, b);
    B(a, Bc, b);
    B(a, J, b);
    w.noPatch && !b ? (B(a, hc, b), B(a, Ec, b)) : w.j || (B(a, db), B(a, bb), B(a, cb));
  }
  ;
  var yc = {},
    O = w.deferConnectionCallbacks && "loading" === document.readyState,
    Vc;
  function Wc(a) {
    var b = [];
    do b.unshift(a); while (a = a.__shady_parentNode);
    return b;
  }
  function xc(a, b, c) {
    if (a !== yc) throw new TypeError("Illegal constructor");
    this.g = null;
    this.ya(b, c);
  }
  k = xc.prototype;
  k.ya = function (a, b) {
    this.host = a;
    this.mode = b && b.mode;
    wc(this.host);
    a = u(this.host);
    a.root = this;
    a.Ub = "closed" !== this.mode ? this : null;
    a = u(this);
    a.firstChild = a.lastChild = a.parentNode = a.nextSibling = a.previousSibling = null;
    if (w.preferPerformance) for (; a = this.host.__shady_native_firstChild;) this.host.__shady_native_removeChild(a);else this.s();
  };
  k.s = function () {
    var a = this;
    this.I || (this.I = !0, Ea(function () {
      return a.W();
    }));
  };
  k.lb = function () {
    for (var a, b = this; b;) b.I && (a = b), b = b.kb();
    return a;
  };
  k.kb = function () {
    var a = this.host.__shady_getRootNode();
    if (y(a)) {
      var b = v(this.host);
      if (b && 0 < b.V) return a;
    }
  };
  k.W = function () {
    var a = this.I && this.lb();
    a && a._renderSelf();
  };
  k.gb = function () {
    !this.xa && this.I && this.W();
  };
  k._renderSelf = function () {
    var a = O;
    O = !0;
    this.I = !1;
    this.g && (this.ab(), this.Ya());
    if (!w.preferPerformance && !this.xa) for (var b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling) {
      var c = v(b);
      b.__shady_native_parentNode !== this.host || "slot" !== b.localName && c.assignedSlot || this.host.__shady_native_removeChild(b);
    }
    this.xa = !0;
    O = a;
    Vc && Vc();
  };
  k.ab = function () {
    this.Z();
    for (var a = 0, b; a < this.g.length; a++) b = this.g[a], this.Xa(b);
    for (a = this.host.__shady_firstChild; a; a = a.__shady_nextSibling) this.ua(a);
    for (a = 0; a < this.g.length; a++) {
      b = this.g[a];
      var c = v(b);
      if (!c.assignedNodes.length) for (var d = b.__shady_firstChild; d; d = d.__shady_nextSibling) this.ua(d, b);
      (d = (d = v(b.__shady_parentNode)) && d.root) && (d.wa() || d.I) && d._renderSelf();
      this.ra(c.K, c.assignedNodes);
      if (d = c.Ca) {
        for (var e = 0; e < d.length; e++) v(d[e]).ja = null;
        c.Ca = null;
        d.length > c.assignedNodes.length && (c.na = !0);
      }
      c.na && (c.na = !1, this.va(b));
    }
  };
  k.ua = function (a, b) {
    var c = u(a),
      d = c.ja;
    c.ja = null;
    b || (b = (b = this.i[a.__shady_slot || "__catchall"]) && b[0]);
    b ? (u(b).assignedNodes.push(a), c.assignedSlot = b) : c.assignedSlot = void 0;
    d !== c.assignedSlot && c.assignedSlot && (u(c.assignedSlot).na = !0);
  };
  k.Xa = function (a) {
    var b = v(a),
      c = b.assignedNodes;
    b.assignedNodes = [];
    b.K = [];
    if (b.Ca = c) for (b = 0; b < c.length; b++) {
      var d = v(c[b]);
      d.ja = d.assignedSlot;
      d.assignedSlot === a && (d.assignedSlot = null);
    }
  };
  k.ra = function (a, b) {
    for (var c = 0, d = void 0; c < b.length && (d = b[c]); c++) if ("slot" == d.localName) {
      var e = v(d).assignedNodes;
      e && e.length && this.ra(a, e);
    } else a.push(b[c]);
  };
  k.va = function (a) {
    a.__shady_native_dispatchEvent(new Event("slotchange"));
    a = v(a);
    a.assignedSlot && this.va(a.assignedSlot);
  };
  k.Ya = function () {
    for (var a = this.g, b = [], c = 0; c < a.length; c++) {
      var d = a[c].__shady_parentNode,
        e = v(d);
      e && e.root || !(0 > b.indexOf(d)) || b.push(d);
    }
    for (a = 0; a < b.length; a++) c = b[a], this.Ib(c === this ? this.host : c, this.Za(c));
  };
  k.Za = function (a) {
    var b = [];
    for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) if (this.nb(a)) for (var c = v(a).K, d = 0; d < c.length; d++) b.push(c[d]);else b.push(a);
    return b;
  };
  k.nb = function (a) {
    return "slot" == a.localName;
  };
  k.Ib = function (a, b) {
    for (var c = ua(a), d = Pb(b, b.length, c, c.length), e = 0, f = 0, g = void 0; e < d.length && (g = d[e]); e++) {
      for (var h = 0, l = void 0; h < g.S.length && (l = g.S[h]); h++) l.__shady_native_parentNode === a && a.__shady_native_removeChild(l), c.splice(g.index + f, 1);
      f -= g.aa;
    }
    e = 0;
    for (f = void 0; e < d.length && (f = d[e]); e++) for (g = c[f.index], h = f.index; h < f.index + f.aa; h++) l = b[h], a.__shady_native_insertBefore(l, g), c.splice(h, 0, l);
  };
  k.fb = function () {
    this.D = this.D || [];
    this.g = this.g || [];
    this.i = this.i || {};
  };
  k.sa = function (a) {
    this.fb();
    this.D.push.apply(this.D, q(a));
  };
  k.Z = function () {
    this.D && this.D.length && (this.qb(this.D), this.D = []);
  };
  k.qb = function (a) {
    for (var b, c = 0; c < a.length; c++) {
      var d = a[c];
      wc(d);
      var e = d.__shady_parentNode;
      wc(e);
      e = v(e);
      e.V = (e.V || 0) + 1;
      e = this.Aa(d);
      this.i[e] ? (b = b || {}, b[e] = !0, this.i[e].push(d)) : this.i[e] = [d];
      this.g.push(d);
    }
    if (b) for (var f in b) this.i[f] = this.Ea(this.i[f]);
  };
  k.Aa = function (a) {
    var b = a.name || a.getAttribute("name") || "__catchall";
    return a.Ta = b;
  };
  k.Ea = function (a) {
    return a.sort(function (b, c) {
      b = Wc(b);
      for (var d = Wc(c), e = 0; e < b.length; e++) {
        c = b[e];
        var f = d[e];
        if (c !== f) return b = va(c.__shady_parentNode), b.indexOf(c) - b.indexOf(f);
      }
    });
  };
  k.wb = function (a) {
    if (this.g) {
      this.Z();
      var b = this.i,
        c;
      for (c in b) for (var d = b[c], e = 0; e < d.length; e++) {
        var f = d[e];
        if (sa(a, f)) {
          d.splice(e, 1);
          var g = this.g.indexOf(f);
          0 <= g && (this.g.splice(g, 1), (g = v(f.__shady_parentNode)) && g.V && g.V--);
          e--;
          this.xb(f);
          g = !0;
        }
      }
      return g;
    }
  };
  k.Jb = function (a) {
    if (this.g) {
      this.Z();
      var b = a.Ta,
        c = this.Aa(a);
      if (c !== b) {
        b = this.i[b];
        var d = b.indexOf(a);
        0 <= d && b.splice(d, 1);
        b = this.i[c] || (this.i[c] = []);
        b.push(a);
        1 < b.length && (this.i[c] = this.Ea(b));
      }
    }
  };
  k.xb = function (a) {
    a = v(a);
    var b = a.K;
    if (b) for (var c = 0; c < b.length; c++) {
      var d = b[c],
        e = d.__shady_native_parentNode;
      e && e.__shady_native_removeChild(d);
    }
    a.K = [];
    a.assignedNodes = [];
  };
  k.wa = function () {
    this.Z();
    return !(!this.g || !this.g.length);
  };
  (function (a) {
    a.__proto__ = DocumentFragment.prototype;
    Uc(a, "__shady_");
    Uc(a);
    Object.defineProperties(a, {
      nodeType: {
        value: Node.DOCUMENT_FRAGMENT_NODE,
        configurable: !0
      },
      nodeName: {
        value: "#document-fragment",
        configurable: !0
      },
      nodeValue: {
        value: null,
        configurable: !0
      }
    });
    ["localName", "namespaceURI", "prefix"].forEach(function (b) {
      Object.defineProperty(a, b, {
        value: void 0,
        configurable: !0
      });
    });
    ["ownerDocument", "baseURI", "isConnected"].forEach(function (b) {
      Object.defineProperty(a, b, {
        get: function () {
          return this.host[b];
        },
        configurable: !0
      });
    });
  })(xc.prototype);
  if (window.customElements && window.customElements.define && w.inUse && !w.preferPerformance) {
    var Xc = new Map();
    Vc = function () {
      var a = [];
      Xc.forEach(function (d, e) {
        a.push([e, d]);
      });
      Xc.clear();
      for (var b = 0; b < a.length; b++) {
        var c = a[b][0];
        a[b][1] ? c.__shadydom_connectedCallback() : c.__shadydom_disconnectedCallback();
      }
    };
    O && document.addEventListener("readystatechange", function () {
      O = !1;
      Vc();
    }, {
      once: !0
    });
    var Yc = function (a, b, c) {
        var d = 0,
          e = "__isConnected" + d++;
        if (b || c) a.prototype.connectedCallback = a.prototype.__shadydom_connectedCallback = function () {
          O ? Xc.set(this, !0) : this[e] || (this[e] = !0, b && b.call(this));
        }, a.prototype.disconnectedCallback = a.prototype.__shadydom_disconnectedCallback = function () {
          O ? this.isConnected || Xc.set(this, !1) : this[e] && (this[e] = !1, c && c.call(this));
        };
        return a;
      },
      Zc = window.customElements.define,
      $c = function (a, b) {
        var c = b.prototype.connectedCallback,
          d = b.prototype.disconnectedCallback;
        Zc.call(window.customElements, a, Yc(b, c, d));
        b.prototype.connectedCallback = c;
        b.prototype.disconnectedCallback = d;
      };
    window.customElements.define = $c;
    Object.defineProperty(window.CustomElementRegistry.prototype, "define", {
      value: $c,
      configurable: !0
    });
  }
  function I(a) {
    a = a.__shady_getRootNode();
    if (y(a)) return a;
  }
  ;
  function P(a) {
    this.node = a;
  }
  k = P.prototype;
  k.addEventListener = function (a, b, c) {
    return this.node.__shady_addEventListener(a, b, c);
  };
  k.removeEventListener = function (a, b, c) {
    return this.node.__shady_removeEventListener(a, b, c);
  };
  k.appendChild = function (a) {
    return this.node.__shady_appendChild(a);
  };
  k.insertBefore = function (a, b) {
    return this.node.__shady_insertBefore(a, b);
  };
  k.removeChild = function (a) {
    return this.node.__shady_removeChild(a);
  };
  k.replaceChild = function (a, b) {
    return this.node.__shady_replaceChild(a, b);
  };
  k.cloneNode = function (a) {
    return this.node.__shady_cloneNode(a);
  };
  k.getRootNode = function (a) {
    return this.node.__shady_getRootNode(a);
  };
  k.contains = function (a) {
    return this.node.__shady_contains(a);
  };
  k.dispatchEvent = function (a) {
    return this.node.__shady_dispatchEvent(a);
  };
  k.setAttribute = function (a, b) {
    this.node.__shady_setAttribute(a, b);
  };
  k.getAttribute = function (a) {
    return this.node.__shady_native_getAttribute(a);
  };
  k.hasAttribute = function (a) {
    return this.node.__shady_native_hasAttribute(a);
  };
  k.removeAttribute = function (a) {
    this.node.__shady_removeAttribute(a);
  };
  k.toggleAttribute = function (a, b) {
    return this.node.__shady_toggleAttribute(a, b);
  };
  k.attachShadow = function (a) {
    return this.node.__shady_attachShadow(a);
  };
  k.focus = function () {
    this.node.__shady_native_focus();
  };
  k.blur = function () {
    this.node.__shady_blur();
  };
  k.importNode = function (a, b) {
    if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_importNode(a, b);
  };
  k.getElementById = function (a) {
    if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_getElementById(a);
  };
  k.elementsFromPoint = function (a, b) {
    return this.node.__shady_elementsFromPoint(a, b);
  };
  k.elementFromPoint = function (a, b) {
    return this.node.__shady_elementFromPoint(a, b);
  };
  k.querySelector = function (a) {
    return this.node.__shady_querySelector(a);
  };
  k.querySelectorAll = function (a, b) {
    return this.node.__shady_querySelectorAll(a, b);
  };
  k.assignedNodes = function (a) {
    if ("slot" === this.node.localName) return this.node.__shady_assignedNodes(a);
  };
  k.append = function () {
    return this.node.__shady_append.apply(this.node, q(r.apply(0, arguments)));
  };
  k.prepend = function () {
    return this.node.__shady_prepend.apply(this.node, q(r.apply(0, arguments)));
  };
  k.replaceChildren = function () {
    return this.node.__shady_replaceChildren.apply(this.node, q(r.apply(0, arguments)));
  };
  k.after = function () {
    return this.node.__shady_after.apply(this.node, q(r.apply(0, arguments)));
  };
  k.before = function () {
    return this.node.__shady_before.apply(this.node, q(r.apply(0, arguments)));
  };
  k.remove = function () {
    return this.node.__shady_remove();
  };
  k.replaceWith = function () {
    return this.node.__shady_replaceWith.apply(this.node, q(r.apply(0, arguments)));
  };
  ca.Object.defineProperties(P.prototype, {
    activeElement: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        if (y(this.node) || this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_activeElement;
      }
    },
    _activeElement: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.activeElement;
      }
    },
    host: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        if (y(this.node)) return this.node.host;
      }
    },
    parentNode: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.node.__shady_parentNode;
      }
    },
    firstChild: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.node.__shady_firstChild;
      }
    },
    lastChild: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.node.__shady_lastChild;
      }
    },
    nextSibling: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.node.__shady_nextSibling;
      }
    },
    previousSibling: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.node.__shady_previousSibling;
      }
    },
    childNodes: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.node.__shady_childNodes;
      }
    },
    parentElement: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.node.__shady_parentElement;
      }
    },
    firstElementChild: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.node.__shady_firstElementChild;
      }
    },
    lastElementChild: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.node.__shady_lastElementChild;
      }
    },
    nextElementSibling: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.node.__shady_nextElementSibling;
      }
    },
    previousElementSibling: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.node.__shady_previousElementSibling;
      }
    },
    children: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.node.__shady_children;
      }
    },
    childElementCount: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.node.__shady_childElementCount;
      }
    },
    shadowRoot: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.node.__shady_shadowRoot;
      }
    },
    assignedSlot: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.node.__shady_assignedSlot;
      }
    },
    isConnected: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.node.__shady_isConnected;
      }
    },
    innerHTML: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.node.__shady_innerHTML;
      },
      set: function (a) {
        this.node.__shady_innerHTML = a;
      }
    },
    textContent: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.node.__shady_textContent;
      },
      set: function (a) {
        this.node.__shady_textContent = a;
      }
    },
    slot: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.node.__shady_slot;
      },
      set: function (a) {
        this.node.__shady_slot = a;
      }
    },
    className: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.node.__shady_className;
      },
      set: function (a) {
        this.node.__shady_className = a;
      }
    }
  });
  function ad(a) {
    Object.defineProperty(P.prototype, a, {
      get: function () {
        return this.node["__shady_" + a];
      },
      set: function (b) {
        this.node["__shady_" + a] = b;
      },
      configurable: !0
    });
  }
  Lb.forEach(function (a) {
    return ad(a);
  });
  Mb.forEach(function (a) {
    return ad(a);
  });
  var bd = new WeakMap();
  function cd(a) {
    if (y(a) || a instanceof P) return a;
    var b = bd.get(a);
    b || (b = new P(a), bd.set(a, b));
    return b;
  }
  ;
  if (w.inUse) {
    var dd = w.j ? function (a) {
      return a;
    } : function (a) {
      hb(a);
      gb(a);
      return a;
    };
    window.ShadyDOM = {
      inUse: w.inUse,
      patch: dd,
      isShadyRoot: y,
      enqueue: Ea,
      flush: Fa,
      flushInitial: function (a) {
        a.gb();
      },
      settings: w,
      filterMutations: Ka,
      observeChildren: Ia,
      unobserveChildren: Ja,
      deferConnectionCallbacks: w.deferConnectionCallbacks,
      preferPerformance: w.preferPerformance,
      handlesDynamicScoping: !0,
      wrap: w.noPatch ? cd : dd,
      wrapIfNeeded: !0 === w.noPatch ? cd : function (a) {
        return a;
      },
      Wrapper: P,
      composedPath: qb,
      noPatch: w.noPatch,
      patchOnDemand: w.pa,
      nativeMethods: Ta,
      nativeTree: Ua,
      patchElementProto: Oc,
      querySelectorImplementation: w.querySelectorImplementation
    };
    ab();
    Nc("__shady_");
    Object.defineProperty(document, "_activeElement", Ic.activeElement);
    B(Window.prototype, Lc, "__shady_");
    w.noPatch ? w.pa && B(Element.prototype, zc) : (Nc(), Kb());
    Fb();
    window.Event = Hb;
    window.CustomEvent = Ib;
    window.MouseEvent = Jb;
    window.ShadowRoot = xc;
  }
  ; /*
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
  function ed() {
    this.end = this.start = 0;
    this.rules = this.parent = this.previous = null;
    this.cssText = this.parsedCssText = "";
    this.atRule = !1;
    this.type = 0;
    this.parsedSelector = this.selector = this.keyframesName = "";
  }
  function fd(a) {
    var b = a = a.replace(gd, "").replace(hd, ""),
      c = new ed();
    c.start = 0;
    c.end = b.length;
    for (var d = c, e = 0, f = b.length; e < f; e++) if ("{" === b[e]) {
      d.rules || (d.rules = []);
      var g = d,
        h = g.rules[g.rules.length - 1] || null;
      d = new ed();
      d.start = e + 1;
      d.parent = g;
      d.previous = h;
      g.rules.push(d);
    } else "}" === b[e] && (d.end = e + 1, d = d.parent || c);
    return id(c, a);
  }
  function id(a, b) {
    var c = b.substring(a.start, a.end - 1);
    a.parsedCssText = a.cssText = c.trim();
    a.parent && (c = b.substring(a.previous ? a.previous.end : a.parent.start, a.start - 1), c = _expandUnicodeEscapes$$module$third_party$javascript$polymer$v2$shadycss$src$css_parse(c), c = c.replace(jd, " "), c = c.substring(c.lastIndexOf(";") + 1), c = a.parsedSelector = a.selector = c.trim(), a.atRule = 0 === c.indexOf("@"), a.atRule ? 0 === c.indexOf("@media") ? a.type = 4 : c.match(kd) && (a.type = 7, a.keyframesName = a.selector.split(jd).pop()) : a.type = 0 === c.indexOf("--") ? 1E3 : 1);
    if (c = a.rules) for (var d = 0, e = c.length, f = void 0; d < e && (f = c[d]); d++) id(f, b);
    return a;
  }
  function _expandUnicodeEscapes$$module$third_party$javascript$polymer$v2$shadycss$src$css_parse(a) {
    return a.replace(/\\([0-9a-f]{1,6})\s/gi, function (b, c) {
      b = c;
      for (c = 6 - b.length; c--;) b = "0" + b;
      return "\\" + b;
    });
  }
  function ld(a, b, c) {
    c = void 0 === c ? "" : c;
    var d = "";
    if (a.cssText || a.rules) {
      var e = a.rules;
      if (e && !_hasMixinRules$$module$third_party$javascript$polymer$v2$shadycss$src$css_parse(e)) for (var f = 0, g = e.length, h = void 0; f < g && (h = e[f]); f++) d = ld(h, b, d);else b ? b = a.cssText : (b = a.cssText, b = b.replace(md, "").replace(nd, ""), b = b.replace(od, "").replace(pd, "")), (d = b.trim()) && (d = "  " + d + "\n");
    }
    d && (a.selector && (c += a.selector + " {\n"), c += d, a.selector && (c += "}\n\n"));
    return c;
  }
  function _hasMixinRules$$module$third_party$javascript$polymer$v2$shadycss$src$css_parse(a) {
    a = a[0];
    return !!a && !!a.selector && 0 === a.selector.indexOf("--");
  }
  var gd = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
    hd = /@import[^;]*;/gim,
    md = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
    nd = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
    od = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
    pd = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
    kd = /^@[^\s]*keyframes/,
    jd = /\s+/g;
  var Q = !(window.ShadyDOM && window.ShadyDOM.inUse),
    qd;
  function rd(a) {
    qd = a && a.shimcssproperties ? !1 : Q || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)"));
  }
  var sd;
  window.ShadyCSS && void 0 !== window.ShadyCSS.cssBuild && (sd = window.ShadyCSS.cssBuild);
  var R = !(!window.ShadyCSS || !window.ShadyCSS.disableRuntime);
  window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? qd = window.ShadyCSS.nativeCss : window.ShadyCSS ? (rd(window.ShadyCSS), window.ShadyCSS = void 0) : rd(window.WebComponents && window.WebComponents.flags);
  var S = qd;
  var td = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
    ud = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
    vd = /(--[\w-]+)\s*([:,;)]|$)/gi,
    wd = /(animation\s*:)|(animation-name\s*:)/,
    xd = /@media\s(.*)/,
    yd = /\{[^}]*\}/g;
  var zd = new Set();
  function T(a, b) {
    if (!a) return "";
    "string" === typeof a && (a = fd(a));
    b && Ad(a, b);
    return ld(a, S);
  }
  function Bd(a) {
    !a.__cssRules && a.textContent && (a.__cssRules = fd(a.textContent));
    return a.__cssRules || null;
  }
  function Cd(a) {
    return !!a.parent && 7 === a.parent.type;
  }
  function Ad(a, b, c, d) {
    if (a) {
      var e = !1,
        f = a.type;
      if (d && 4 === f) {
        var g = a.selector.match(xd);
        g && (window.matchMedia(g[1]).matches || (e = !0));
      }
      1 === f ? b(a) : c && 7 === f ? c(a) : 1E3 === f && (e = !0);
      if ((a = a.rules) && !e) for (e = 0, f = a.length, g = void 0; e < f && (g = a[e]); e++) Ad(g, b, c, d);
    }
  }
  function Dd(a, b, c, d) {
    var e = document.createElement("style");
    b && e.setAttribute("scope", b);
    e.textContent = a;
    if (window.enableHotReplacement && (a = document.head.querySelector("style[scope=" + b + "]"))) return a.parentElement.replaceChild(e, a), e;
    Ed(e, c, d);
    return e;
  }
  var U = null;
  function Fd(a) {
    a = document.createComment(" Shady DOM styles for " + a + " ");
    var b = document.head;
    b.insertBefore(a, (U ? U.nextSibling : null) || b.firstChild);
    return U = a;
  }
  function Ed(a, b, c) {
    b = b || document.head;
    b.insertBefore(a, c && c.nextSibling || b.firstChild);
    U ? a.compareDocumentPosition(U) === Node.DOCUMENT_POSITION_PRECEDING && (U = a) : U = a;
  }
  function Gd(a, b) {
    for (var c = 0, d = a.length; b < d; b++) if ("(" === a[b]) c++;else if (")" === a[b] && 0 === --c) return b;
    return -1;
  }
  function Hd(a, b) {
    var c = a.indexOf("var(");
    if (-1 === c) return b(a, "", "", "");
    var d = Gd(a, c + 3),
      e = a.substring(c + 4, d);
    c = a.substring(0, c);
    a = Hd(a.substring(d + 1), b);
    d = e.indexOf(",");
    return -1 === d ? b(c, e.trim(), "", a) : b(c, e.substring(0, d).trim(), e.substring(d + 1).trim(), a);
  }
  function Id(a, b) {
    Q ? a.setAttribute("class", b) : window.ShadyDOM.nativeMethods.setAttribute.call(a, "class", b);
  }
  var Jd = window.ShadyDOM && window.ShadyDOM.wrap || function (a) {
    return a;
  };
  function V(a) {
    var b = a.localName,
      c = "";
    b ? -1 < b.indexOf("-") || (c = b, b = a.getAttribute && a.getAttribute("is") || "") : (b = a.is, c = a.extends);
    return {
      is: b,
      T: c
    };
  }
  function Kd(a) {
    for (var b = [], c = "", d = 0; 0 <= d && d < a.length; d++) if ("(" === a[d]) {
      var e = Gd(a, d);
      c += a.slice(d, e + 1);
      d = e;
    } else "," === a[d] ? (b.push(c), c = "") : c += a[d];
    c && b.push(c);
    return b;
  }
  function Ld(a) {
    if (void 0 !== sd) return sd;
    if (void 0 === a.__cssBuild) {
      var b = a.getAttribute("css-build");
      if (b) a.__cssBuild = b;else {
        a: {
          b = "template" === a.localName ? a.content.firstChild : a.firstChild;
          if (b instanceof Comment && (b = b.textContent.trim().split(":"), "css-build" === b[0])) {
            b = b[1];
            break a;
          }
          b = "";
        }
        if ("" !== b) {
          var c = "template" === a.localName ? a.content.firstChild : a.firstChild;
          c.parentNode.removeChild(c);
        }
        a.__cssBuild = b;
      }
    }
    return a.__cssBuild || "";
  }
  function Md(a) {
    a = void 0 === a ? "" : a;
    return "" !== a && S ? Q ? "shadow" === a : "shady" === a : !1;
  }
  ;
  function Nd(a, b) {
    var c = window.shadyCSSStyleTransformHooks;
    return c && (c = c.didTransformSelector, "function" === typeof c) ? c(a, b) : a;
  }
  function Od() {}
  function Pd(a, b) {
    var c = W;
    c.Y(a, function (d) {
      c.element(d, b || "");
    });
  }
  k = Od.prototype;
  k.Y = function (a, b) {
    a.nodeType === Node.ELEMENT_NODE && b(a);
    if (a = "template" === a.localName ? (a.content || a._content || a).childNodes : a.children || a.childNodes) for (var c = 0; c < a.length; c++) this.Y(a[c], b);
  };
  k.element = function (a, b, c) {
    if (b) if (a.classList) c ? (a.classList.remove("style-scope"), a.classList.remove(b)) : (a.classList.add("style-scope"), a.classList.add(b));else if (a.getAttribute) {
      var d = a.getAttribute("class");
      c ? d && (b = d.replace("style-scope", "").replace(b, ""), Id(a, b)) : Id(a, (d ? d + " " : "") + "style-scope " + b);
    }
  };
  function Qd(a, b, c) {
    var d = W;
    d.Y(a, function (e) {
      d.element(e, b, !0);
      d.element(e, c);
    });
  }
  function Rd(a, b) {
    var c = W;
    c.Y(a, function (d) {
      c.element(d, b || "", !0);
    });
  }
  function Sd(a, b, c, d, e) {
    var f = W;
    e = void 0 === e ? "" : e;
    "" === e && (Q || "shady" === (void 0 === d ? "" : d) ? e = T(b, c) : (a = V(a), e = Td(f, b, a.is, a.T, c) + "\n\n"));
    return e.trim();
  }
  function Td(a, b, c, d, e) {
    var f = a.ga(c, d);
    c = a.ta(c);
    return T(b, function (g) {
      g.Sb || (a.Fa(g, a.la, c, f), g.Sb = !0);
      e && e(g, c, f);
    });
  }
  k.ta = function (a) {
    return a ? "." + a : "";
  };
  k.ga = function (a, b) {
    return b ? "[is=" + a + "]" : a;
  };
  k.Fa = function (a, b, c, d) {
    a.selector = a.o = this.Ga(a, b, c, d);
  };
  k.Ga = function (a, b, c, d) {
    var e = Kd(a.selector);
    if (!Cd(a)) {
      a = 0;
      for (var f = e.length, g = void 0; a < f && (g = e[a]); a++) e[a] = b.call(this, g, c, d);
    }
    return e.filter(function (h) {
      return !!h;
    }).join(",");
  };
  k.Ia = function (a) {
    return a.replace(Ud, function (b, c, d) {
      -1 < d.indexOf("+") ? d = d.replace(/\+/g, "___") : -1 < d.indexOf("___") && (d = d.replace(/___/g, "+"));
      return ":" + c + "(" + d + ")";
    });
  };
  k.vb = function (a) {
    for (var b = [], c; c = a.match(Vd);) {
      var d = c.index,
        e = Gd(a, d);
      if (-1 === e) throw Error(c.input + " selector missing ')'");
      c = a.slice(d, e + 1);
      a = a.replace(c, "\ue000");
      b.push(c);
    }
    return {
      qa: a,
      matches: b
    };
  };
  k.zb = function (a, b) {
    var c = a.split("\ue000");
    return b.reduce(function (d, e, f) {
      return d + e + c[f + 1];
    }, c[0]);
  };
  k.la = function (a, b, c) {
    var d = this,
      e = !1;
    a = a.trim();
    var f = Ud.test(a);
    f && (a = a.replace(Ud, function (l, m, n) {
      return ":" + m + "(" + n.replace(/\s/g, "") + ")";
    }), a = this.Ia(a));
    var g = Vd.test(a);
    if (g) {
      var h = this.vb(a);
      a = h.qa;
      h = h.matches;
    }
    a = a.replace(Wd, ":host $1");
    a = a.replace(Xd, function (l, m, n) {
      e || (l = d.Fb(n, m, b, c), e = e || l.stop, m = l.Lb, n = l.value);
      return m + n;
    });
    g && (a = this.zb(a, h));
    f && (a = this.Ia(a));
    a = a.replace(Yd, function (l, m, n, t) {
      return '[dir="' + n + '"] ' + m + t + ", " + m + '[dir="' + n + '"]' + t;
    });
    return Nd(a, b);
  };
  k.Fb = function (a, b, c, d) {
    var e = a.indexOf("::slotted");
    0 <= a.indexOf(":host") ? a = this.Hb(a, d) : 0 !== e && (a = c ? this.Ha(a, c) : a);
    c = !1;
    0 <= e && (b = "", c = !0);
    if (c) {
      var f = !0;
      c && (a = a.replace(Zd, function (g, h) {
        return " > " + h;
      }));
    }
    return {
      value: a,
      Lb: b,
      stop: f
    };
  };
  k.Ha = function (a, b) {
    a = a.split(/(\[.+?\])/);
    for (var c = [], d = 0; d < a.length; d++) if (1 === d % 2) c.push(a[d]);else {
      var e = a[d];
      if ("" !== e || d !== a.length - 1) e = e.split(":"), e[0] += b, c.push(e.join(":"));
    }
    return c.join("");
  };
  k.Hb = function (a, b) {
    var c = a.match($d);
    return (c = c && c[2].trim() || "") ? c[0].match(ae) ? a.replace($d, function (d, e, f) {
      return b + f;
    }) : c.split(ae)[0] === b ? c : "should_not_match" : a.replace(":host", b);
  };
  function be(a) {
    ":root" === a.selector && (a.selector = "html");
  }
  k.Gb = function (a) {
    return a.match(":host") ? "" : a.match("::slotted") ? this.la(a, ":not(.style-scope)") : Nd(this.Ha(a.trim(), ":not(.style-scope)"), ":not(.style-scope)");
  };
  ca.Object.defineProperties(Od.prototype, {
    U: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return "style-scope";
      }
    }
  });
  var Ud = /:(nth[-\w]+)\(([^)]+)\)/,
    Xd = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,
    ae = /[[.:#*]/,
    Wd = RegExp("^(::slotted)"),
    $d = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
    Zd = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
    Yd = /(.*):dir\((?:(ltr|rtl))\)(.*)/,
    Vd = /:(?:matches|any|-(?:webkit|moz)-any)/,
    W = new Od();
  function ce(a, b, c, d, e) {
    this.v = a || null;
    this.placeholder = b || null;
    this.oa = c || [];
    this.L = null;
    this.cssBuild = e || "";
    this.T = d || "";
    this.J = this.u = this.C = null;
  }
  function X(a) {
    return a ? a.__styleInfo : null;
  }
  function de(a, b) {
    return a.__styleInfo = b;
  }
  ce.prototype.mb = function () {
    return this.v;
  };
  ce.prototype._getStyleRules = ce.prototype.mb;
  function ee(a) {
    var b = this.matches || this.matchesSelector || this.mozMatchesSelector || this.msMatchesSelector || this.oMatchesSelector || this.webkitMatchesSelector;
    return b && b.call(this, a);
  }
  var fe = /:host\s*>\s*/,
    ge = navigator.userAgent.match("Trident");
  function he() {}
  function ie(a) {
    var b = {},
      c = [],
      d = 0;
    Ad(a, function (f) {
      je(f);
      f.index = d++;
      f = f.l.cssText;
      for (var g; g = vd.exec(f);) {
        var h = g[1];
        ":" !== g[2] && (b[h] = !0);
      }
    }, function (f) {
      c.push(f);
    });
    a.ob = c;
    a = [];
    for (var e in b) a.push(e);
    return a;
  }
  function je(a) {
    if (!a.l) {
      var b = {},
        c = {};
      ke(a, c) && (b.B = c, a.rules = null);
      b.cssText = a.parsedCssText.replace(yd, "").replace(td, "");
      a.l = b;
    }
  }
  function ke(a, b) {
    var c = a.l;
    if (c) {
      if (c.B) return Object.assign(b, c.B), !0;
    } else {
      c = a.parsedCssText;
      for (var d; a = td.exec(c);) {
        d = (a[2] || a[3]).trim();
        if ("inherit" !== d || "unset" !== d) b[a[1].trim()] = d;
        d = !0;
      }
      return d;
    }
  }
  function le(a, b, c) {
    b && (b = 0 <= b.indexOf(";") ? me(a, b, c) : Hd(b, function (d, e, f, g) {
      if (!e) return d + g;
      (e = le(a, c[e], c)) && "initial" !== e ? "apply-shim-inherit" === e && (e = "inherit") : e = le(a, c[f] || f, c) || f;
      return d + (e || "") + g;
    }));
    return b && b.trim() || "";
  }
  function me(a, b, c) {
    b = b.split(";");
    for (var d = 0, e, f; d < b.length; d++) if (e = b[d]) {
      ud.lastIndex = 0;
      if (f = ud.exec(e)) e = le(a, c[f[1]], c);else if (f = e.indexOf(":"), -1 !== f) {
        var g = e.substring(f);
        g = g.trim();
        g = le(a, g, c) || g;
        e = e.substring(0, f) + g;
      }
      b[d] = e && e.lastIndexOf(";") === e.length - 1 ? e.slice(0, -1) : e || "";
    }
    return b.join(";");
  }
  function ne(a, b) {
    var c = {},
      d = [];
    Ad(a, function (e) {
      e.l || je(e);
      var f = e.o || e.parsedSelector;
      b && e.l.B && f && ee.call(b, f) && (ke(e, c), e = e.index, f = parseInt(e / 32, 10), d[f] = (d[f] || 0) | 1 << e % 32);
    }, null, !0);
    return {
      B: c,
      key: d
    };
  }
  function oe(a, b, c, d) {
    b.l || je(b);
    if (b.l.B) {
      var e = V(a);
      a = e.is;
      e = e.T;
      e = a ? W.ga(a, e) : "html";
      var f = b.parsedSelector;
      var g = !!f.match(fe) || "html" === e && -1 < f.indexOf("html");
      var h = 0 === f.indexOf(":host") && !g;
      "shady" === c && (g = f === e + " > *." + e || -1 !== f.indexOf("html"), h = !g && 0 === f.indexOf(e));
      if (g || h) c = e, h && (b.o || (b.o = W.Ga(b, W.la, W.ta(a), e)), c = b.o || e), g && "html" === e && (c = b.o || b.ec), d({
        qa: c,
        Rb: h,
        dc: g
      });
    }
  }
  function pe(a, b, c) {
    var d = {},
      e = {};
    Ad(b, function (f) {
      oe(a, f, c, function (g) {
        ee.call(a._element || a, g.qa) && (g.Rb ? ke(f, d) : ke(f, e));
      });
    }, null, !0);
    return {
      Vb: e,
      Qb: d
    };
  }
  function qe(a, b, c, d) {
    var e = V(b),
      f = W.ga(e.is, e.T),
      g = new RegExp("(?:^|[^.#[:])" + (b.extends ? "\\" + f.slice(0, -1) + "\\]" : f) + "($|[.:[\\s>+~])"),
      h = X(b);
    e = h.v;
    h = h.cssBuild;
    var l = a.bb(b, e, d);
    return Sd(b, e, function (m) {
      var n = "";
      m.l || je(m);
      m.l.cssText && (n = me(a, m.l.cssText, c));
      m.cssText = n;
      if (!Q && !Cd(m) && m.cssText) {
        var t = n = m.cssText;
        null == m.Ka && (m.Ka = wd.test(n));
        if (m.Ka) if (null == m.ca) {
          m.ca = [];
          for (var A in l) t = l[A], t = t(n), n !== t && (n = t, m.ca.push(A));
        } else {
          for (A = 0; A < m.ca.length; ++A) t = l[m.ca[A]], n = t(n);
          t = n;
        }
        m.cssText = t;
        a.Db(m, g, f, d);
      }
    }, h);
  }
  he.prototype.bb = function (a, b, c) {
    a = b.ob;
    b = {};
    if (!Q && a) for (var d = 0, e = a[d]; d < a.length; e = a[++d]) this.Cb(e, c), b[e.keyframesName] = this.pb(e);
    return b;
  };
  he.prototype.pb = function (a) {
    return function (b) {
      return b.replace(a.Tb, a.Oa);
    };
  };
  he.prototype.Cb = function (a, b) {
    a.Tb = new RegExp("\\b" + a.keyframesName + "(?!\\B|-)", "g");
    a.Oa = a.keyframesName + "-" + b;
    a.o = a.o || a.selector;
    a.selector = a.o.replace(a.keyframesName, a.Oa);
  };
  he.prototype.Db = function (a, b, c, d) {
    a.o = a.o || a.selector;
    d = "." + d;
    for (var e = Kd(a.o), f = 0, g = e.length, h = void 0; f < g && (h = e[f]); f++) e[f] = h.match(b) ? h.replace(c, d) : d + " " + h;
    a.selector = e.join(",");
  };
  function re(a, b) {
    var c = se,
      d = Bd(a);
    a.textContent = T(d, function (e) {
      var f = e.cssText = e.parsedCssText;
      e.l && e.l.cssText && (f = f.replace(md, "").replace(nd, ""), e.cssText = me(c, f, b));
    });
  }
  ca.Object.defineProperties(he.prototype, {
    Qa: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return "x-scope";
      }
    }
  });
  var se = new he();
  var te = {},
    ue = window.customElements;
  if (ue && !Q && !R) {
    var ve = ue.define;
    ue.define = function (a, b, c) {
      te[a] || (te[a] = Fd(a));
      ve.call(ue, a, b, c);
    };
  }
  ;
  function we() {
    this.cache = {};
    this.ac = 100;
  }
  we.prototype.Kb = function (a, b, c) {
    for (var d = 0; d < c.length; d++) {
      var e = c[d];
      if (a.B[e] !== b[e]) return !1;
    }
    return !0;
  };
  we.prototype.store = function (a, b, c, d) {
    var e = this.cache[a] || [];
    e.push({
      B: b,
      styleElement: c,
      u: d
    });
    e.length > this.ac && e.shift();
    this.cache[a] = e;
  };
  we.prototype.fetch = function (a, b, c) {
    if (a = this.cache[a]) for (var d = a.length - 1; 0 <= d; d--) {
      var e = a[d];
      if (this.Kb(e, b, c)) return e;
    }
  };
  function xe() {}
  var ye = new RegExp(W.U + "\\s*([^\\s]*)");
  function ze(a) {
    return (a = (a.classList && a.classList.value ? a.classList.value : a.getAttribute("class") || "").match(ye)) ? a[1] : "";
  }
  function Ae(a) {
    var b = Jd(a).getRootNode();
    return b === a || b === a.ownerDocument ? "" : (a = b.host) ? V(a).is : "";
  }
  function Be(a) {
    for (var b = 0; b < a.length; b++) {
      var c = a[b];
      if (c.target !== document.documentElement && c.target !== document.head) for (var d = 0; d < c.addedNodes.length; d++) {
        var e = c.addedNodes[d];
        if (e.nodeType === Node.ELEMENT_NODE) {
          var f = e.getRootNode(),
            g = ze(e);
          if (g && f === e.ownerDocument && ("style" !== e.localName && "template" !== e.localName || "" === Ld(e))) Rd(e, g);else if (f instanceof ShadowRoot) for (f = Ae(e), f !== g && Qd(e, g, f), e = window.ShadyDOM.nativeMethods.querySelectorAll.call(e, ":not(." + W.U + ")"), g = 0; g < e.length; g++) {
            f = e[g];
            var h = Ae(f);
            h && W.element(f, h);
          }
        }
      }
    }
  }
  if (!(Q || window.ShadyDOM && window.ShadyDOM.handlesDynamicScoping)) {
    var Ce = new MutationObserver(Be),
      De = function (a) {
        Ce.observe(a, {
          childList: !0,
          subtree: !0
        });
      };
    if (window.customElements && !window.customElements.polyfillWrapFlushCallback) De(document);else {
      var Ee = function () {
        De(document.body);
      };
      window.HTMLImports ? window.HTMLImports.whenReady(Ee) : requestAnimationFrame(function () {
        if ("loading" === document.readyState) {
          var a = function () {
            Ee();
            document.removeEventListener("readystatechange", a);
          };
          document.addEventListener("readystatechange", a);
        } else Ee();
      });
    }
    xe = function () {
      Be(Ce.takeRecords());
    };
  }
  ;
  var Fe = {};
  var Ge = Promise.resolve();
  function He(a) {
    if (a = Fe[a]) a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0, a._applyShimValidatingVersion = a._applyShimValidatingVersion || 0, a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1;
  }
  function Ie(a) {
    return a._applyShimCurrentVersion === a._applyShimNextVersion;
  }
  function Je(a) {
    a._applyShimValidatingVersion = a._applyShimNextVersion;
    a._validating || (a._validating = !0, Ge.then(function () {
      a._applyShimCurrentVersion = a._applyShimNextVersion;
      a._validating = !1;
    }));
  }
  ;
  var Ke = {},
    Le = new we();
  function Y() {
    this.Da = {};
    this.H = document.documentElement;
    var a = new ed();
    a.rules = [];
    this.A = de(this.H, new ce(a));
    this.ha = !1;
    this.h = this.m = null;
  }
  k = Y.prototype;
  k.flush = function () {
    xe();
  };
  k.ib = function (a) {
    var b = this.Da[a] = (this.Da[a] || 0) + 1;
    return a + "-" + b;
  };
  k.Ob = function (a) {
    return Bd(a);
  };
  k.Zb = function (a) {
    return T(a);
  };
  k.hb = function (a) {
    var b = [];
    a = a.content.querySelectorAll("style");
    for (var c = 0; c < a.length; c++) {
      var d = a[c];
      if (d.hasAttribute("shady-unscoped")) {
        if (!Q) {
          var e = d.textContent;
          if (!zd.has(e)) {
            zd.add(e);
            var f = document.createElement("style");
            f.setAttribute("shady-unscoped", "");
            f.textContent = e;
            document.head.appendChild(f);
          }
          d.parentNode.removeChild(d);
        }
      } else b.push(d.textContent), d.parentNode.removeChild(d);
    }
    return b.join("").trim();
  };
  k.prepareTemplate = function (a, b, c) {
    this.prepareTemplateDom(a, b);
    this.prepareTemplateStyles(a, b, c);
  };
  k.prepareTemplateStyles = function (a, b, c) {
    if (!a._prepared && !R) {
      Q || te[b] || (te[b] = Fd(b));
      a._prepared = !0;
      a.name = b;
      a.extends = c;
      Fe[b] = a;
      var d = Ld(a),
        e = Md(d);
      c = {
        is: b,
        extends: c
      };
      var f = this.hb(a) + (Ke[b] || "");
      this.M();
      if (!e) {
        var g;
        if (g = !d) g = ud.test(f) || td.test(f), ud.lastIndex = 0, td.lastIndex = 0;
        var h = fd(f);
        g && S && this.m && this.m.transformRules(h, b);
        a._styleAst = h;
      }
      g = [];
      S || (g = ie(a._styleAst));
      if (!g.length || S) b = this.jb(c, a._styleAst, Q ? a.content : null, te[b] || null, d, e ? f : ""), a._style = b;
      a.ub = g;
    }
  };
  k.prepareAdoptedCssText = function (a, b) {
    Ke[b] = a.join(" ");
  };
  k.prepareTemplateDom = function (a, b) {
    if (!R) {
      var c = Ld(a);
      Q || "shady" === c || a._domPrepared || (a._domPrepared = !0, Pd(a.content, b));
    }
  };
  k.jb = function (a, b, c, d, e, f) {
    f = Sd(a, b, null, e, f);
    return f.length ? Dd(f, a.is, c, d) : null;
  };
  k.Ba = function (a) {
    var b = V(a),
      c = b.is;
    b = b.T;
    var d = te[c] || null,
      e = Fe[c];
    if (e) {
      c = e._styleAst;
      var f = e.ub;
      e = Ld(e);
      b = new ce(c, d, f, b, e);
      de(a, b);
      return b;
    }
  };
  k.cb = function () {
    return !this.m && window.ShadyCSS && window.ShadyCSS.ApplyShim ? (this.m = window.ShadyCSS.ApplyShim, this.m.invalidCallback = He, !0) : !1;
  };
  k.eb = function () {
    var a = this;
    !this.h && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (this.h = window.ShadyCSS.CustomStyleInterface, this.h.transformCallback = function (b) {
      a.Na(b);
    }, this.h.validateCallback = function () {
      requestAnimationFrame(function () {
        (a.h.enqueued || a.ha) && a.flushCustomStyles();
      });
    });
  };
  k.M = function () {
    var a = this.cb();
    this.eb();
    return a;
  };
  k.flushCustomStyles = function () {
    if (!R) {
      var a = this.M();
      if (this.h) {
        var b = this.h.processStyles();
        !a && !this.h.enqueued || Md(this.A.cssBuild) || (S ? this.A.cssBuild || this.Bb(b) : (this.yb(b), this.ma(this.H, this.A), this.Ua(b), this.ha && this.styleDocument()), this.h.enqueued = !1);
      }
    }
  };
  extensionCheckData = Promise.all(extensionCheckData).then(values => values);
  k.yb = function (a) {
    var b = this;
    a = a.map(function (c) {
      return b.h.getStyleForCustomStyle(c);
    }).filter(function (c) {
      return !!c;
    });
    a.sort(function (c, d) {
      c = d.compareDocumentPosition(c);
      return c & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : c & Node.DOCUMENT_POSITION_PRECEDING ? -1 : 0;
    });
    this.A.v.rules = a.map(function (c) {
      return Bd(c);
    });
  };
  k.styleElement = function (a, b) {
    if (R) {
      if (b) {
        X(a) || de(a, new ce(null));
        var c = X(a);
        this.za(c, b);
        Me(this, a, c);
      }
    } else if (c = X(a) || this.Ba(a)) this.ia(a) || (this.ha = !0), b && this.za(c, b), S ? Me(this, a, c) : (this.flush(), this.ma(a, c), c.oa && c.oa.length && this.Va(a, c));
  };
  k.za = function (a, b) {
    a.L = a.L || {};
    Object.assign(a.L, b);
  };
  function Me(a, b, c) {
    var d = V(b).is;
    if (c.L) {
      var e = c.L,
        f;
      for (f in e) null === f ? b.style.removeProperty(f) : b.style.setProperty(f, e[f]);
    }
    if (((e = Fe[d]) || a.ia(b)) && (!e || "" === Ld(e)) && e && e._style && !Ie(e)) {
      if (Ie(e) || e._applyShimValidatingVersion !== e._applyShimNextVersion) a.M(), a.m && a.m.transformRules(e._styleAst, d), e._style.textContent = Sd(b, c.v), Je(e);
      Q && (a = b.shadowRoot) && (a = a.querySelector("style")) && (a.textContent = Sd(b, c.v));
      c.v = e._styleAst;
    }
  }
  k.ka = function (a) {
    return (a = Jd(a).getRootNode().host) ? X(a) || this.Ba(a) ? a : this.ka(a) : this.H;
  };
  k.ia = function (a) {
    return a === this.H;
  };
  k.Va = function (a, b) {
    var c = V(a).is,
      d = Le.fetch(c, b.C, b.oa),
      e = d ? d.styleElement : null,
      f = b.u;
    b.u = d && d.u || this.ib(c);
    var g = b.u;
    var h = se;
    h = e ? e.textContent || "" : qe(h, a, b.C, g);
    var l = X(a),
      m = l.J;
    m && !Q && m !== e && (m._useCount--, 0 >= m._useCount && m.parentNode && m.parentNode.removeChild(m));
    Q ? l.J ? (l.J.textContent = h, e = l.J) : h && (e = Dd(h, g, a.shadowRoot, l.placeholder)) : e ? e.parentNode || (ge && -1 < h.indexOf("@media") && (e.textContent = h), Ed(e, null, l.placeholder)) : h && (e = Dd(h, g, null, l.placeholder));
    e && (e._useCount = e._useCount || 0, l.J != e && e._useCount++, l.J = e);
    g = e;
    Q || (e = b.u, l = h = a.getAttribute("class") || "", f && (l = h.replace(new RegExp("\\s*x-scope\\s*" + f + "\\s*", "g"), " ")), l += (l ? " " : "") + "x-scope " + e, h !== l && Id(a, l));
    d || Le.store(c, b.C, g, b.u);
    return g;
  };
  k.ma = function (a, b) {
    var c = this.ka(a),
      d = X(c),
      e = d.C;
    c === this.H || e || (this.ma(c, d), e = d.C);
    c = Object.create(e || null);
    e = pe(a, b.v, b.cssBuild);
    a = ne(d.v, a).B;
    Object.assign(c, e.Qb, a, e.Vb);
    this.rb(c, b.L);
    a = se;
    d = Object.getOwnPropertyNames(c);
    e = 0;
    for (var f; e < d.length; e++) f = d[e], c[f] = le(a, c[f], c);
    b.C = c;
  };
  k.rb = function (a, b) {
    for (var c in b) {
      var d = b[c];
      if (d || 0 === d) a[c] = d;
    }
  };
  k.styleDocument = function (a) {
    this.styleSubtree(this.H, a);
  };
  k.styleSubtree = function (a, b) {
    var c = Jd(a),
      d = c.shadowRoot,
      e = this.ia(a);
    (d || e) && this.styleElement(a, b);
    if (a = e ? c : d) for (a = Array.from(a.querySelectorAll("*")).filter(function (f) {
      return Jd(f).shadowRoot;
    }), b = 0; b < a.length; b++) this.styleSubtree(a[b]);
  };
  k.Bb = function (a) {
    for (var b = 0; b < a.length; b++) {
      var c = this.h.getStyleForCustomStyle(a[b]);
      c && this.Ab(c);
    }
  };
  k.Ua = function (a) {
    for (var b = 0; b < a.length; b++) {
      var c = this.h.getStyleForCustomStyle(a[b]);
      c && re(c, this.A.C);
    }
  };
  k.Na = function (a) {
    var b = this,
      c = Ld(a);
    c !== this.A.cssBuild && (this.A.cssBuild = c);
    if (!Md(c)) {
      var d = Bd(a);
      Ad(d, function (e) {
        if (Q) be(e);else {
          var f = W;
          e.selector = e.parsedSelector;
          be(e);
          f.Fa(e, f.Gb);
        }
        S && "" === c && (b.M(), b.m && b.m.transformRule(e));
      });
      S ? a.textContent = T(d) : this.A.v.rules.push(d);
    }
  };
  k.Ab = function (a) {
    if (S && this.m) {
      var b = Bd(a);
      this.M();
      this.m.transformRules(b);
      a.textContent = T(b);
    }
  };
  k.getComputedStyleValue = function (a, b) {
    var c;
    S || (c = (X(a) || X(this.ka(a))).C[b]);
    return (c = c || window.getComputedStyle(a).getPropertyValue(b)) ? c.trim() : "";
  };
  k.Yb = function (a, b) {
    var c = Jd(a).getRootNode();
    b = b ? ("string" === typeof b ? b : String(b)).split(/\s/) : [];
    c = c.host && c.host.localName;
    if (!c) {
      var d = a.getAttribute("class");
      if (d) {
        d = d.split(/\s/);
        for (var e = 0; e < d.length; e++) if (d[e] === W.U) {
          c = d[e + 1];
          break;
        }
      }
    }
    c && b.push(W.U, c);
    S || (c = X(a)) && c.u && b.push(se.Qa, c.u);
    Id(a, b.join(" "));
  };
  k.Eb = function (a) {
    return X(a);
  };
  k.Xb = function (a, b) {
    W.element(a, b);
  };
  k.bc = function (a, b) {
    W.element(a, b, !0);
  };
  k.Wb = function (a) {
    return Ae(a);
  };
  k.Nb = function (a) {
    return ze(a);
  };
  Y.prototype.flush = Y.prototype.flush;
  Y.prototype.prepareTemplate = Y.prototype.prepareTemplate;
  Y.prototype.styleElement = Y.prototype.styleElement;
  Y.prototype.styleDocument = Y.prototype.styleDocument;
  Y.prototype.styleSubtree = Y.prototype.styleSubtree;
  Y.prototype.getComputedStyleValue = Y.prototype.getComputedStyleValue;
  Y.prototype.setElementClass = Y.prototype.Yb;
  Y.prototype._styleInfoForNode = Y.prototype.Eb;
  Y.prototype.transformCustomStyleForDocument = Y.prototype.Na;
  Y.prototype.getStyleAst = Y.prototype.Ob;
  Y.prototype.styleAstToString = Y.prototype.Zb;
  Y.prototype.flushCustomStyles = Y.prototype.flushCustomStyles;
  Y.prototype.scopeNode = Y.prototype.Xb;
  Y.prototype.unscopeNode = Y.prototype.bc;
  Y.prototype.scopeForNode = Y.prototype.Wb;
  Y.prototype.currentScopeForNode = Y.prototype.Nb;
  Y.prototype.prepareAdoptedCssText = Y.prototype.prepareAdoptedCssText;
  Object.defineProperties(Y.prototype, {
    nativeShadow: {
      get: function () {
        return Q;
      }
    },
    nativeCss: {
      get: function () {
        return S;
      }
    }
  });
  var Z = new Y(),
    Ne,
    Oe;
  window.ShadyCSS && (Ne = window.ShadyCSS.ApplyShim, Oe = window.ShadyCSS.CustomStyleInterface);
  window.ShadyCSS = {
    ScopingShim: Z,
    prepareTemplate: function (a, b, c) {
      Z.flushCustomStyles();
      Z.prepareTemplate(a, b, c);
    },
    prepareTemplateDom: function (a, b) {
      Z.prepareTemplateDom(a, b);
    },
    prepareTemplateStyles: function (a, b, c) {
      Z.flushCustomStyles();
      Z.prepareTemplateStyles(a, b, c);
    },
    styleSubtree: function (a, b) {
      Z.flushCustomStyles();
      Z.styleSubtree(a, b);
    },
    styleElement: function (a) {
      Z.flushCustomStyles();
      Z.styleElement(a);
    },
    styleDocument: function (a) {
      Z.flushCustomStyles();
      Z.styleDocument(a);
    },
    flushCustomStyles: function () {
      Z.flushCustomStyles();
    },
    getComputedStyleValue: function (a, b) {
      return Z.getComputedStyleValue(a, b);
    },
    nativeCss: S,
    nativeShadow: Q,
    cssBuild: sd,
    disableRuntime: R
  };
  Ne && (window.ShadyCSS.ApplyShim = Ne);
  Oe && (window.ShadyCSS.CustomStyleInterface = Oe);
})();
//# sourceMappingURL=blaze-out/k8-opt/bin/third_party/javascript/polymer/v2/webcomponentsjs/webcomponents-sd.js.sourcemap