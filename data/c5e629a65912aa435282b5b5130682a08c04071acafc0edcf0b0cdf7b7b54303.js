const originalAddEventListener = window.addEventListener;
const originalRemoveEventListener = window.removeEventListener;
const originalCreateElement = document.createElement;
const originalExecuteScript = window.execScript;
window._bttTagInit;
const originalLocalStorage = window.localStorage;
const eventHooks = window.eventhooks;
function generateTestId() {
  return 'test-' + Math.random().toString(36).substr(2, 9) + '-' + Date.now().toString(36);
}
(function (w) {
  if (w._bttTagInit != undefined) {
    return false;
  }
  w._bttTagInit = true;
  w._bttUtil = {
    version: "5.1.2",
    prefix: "mountainhardwear500z",
    WP: window.performance,
    visEvent: false,
    tagVisDelay: 300000,
    tagDelay: 2000,
    tagBeacon: true,
    tagHidden: false,
    tagVars: {},
    tagParm: {},
    parmFlag: false,
    landFlag: false,
    landVars: {},
    landSent: false,
    tagStart: 0,
    tagEnd: 0,
    curBeacon: {},
    curRCV: '',
    curRDY: false,
    sVars: {},
    bVars: {},
    lnst: 0,
    lpn: '',
    lpg: '',
    resP: {},
    ci: 0,
    wcdIntID: 0,
    rm: false,
    changeCheckFlag: true,
    sendDataFlag: true,
    errFlag: false,
    bttVT: false,
    mutObs: false,
    tlg: [],
    tti: 0,
    ftti: 0,
    totFrames: 0,
    sessionID: '',
    xhrActive: [],
    nvgTmg: function () {
      var x = {};
      try {
        x = this.WP.getEntriesByType('navigation')[0];
      } catch (e) {
        x = {};
      }
      return x;
    },
    resTmg: function () {
      var x = {};
      try {
        x = this.WP.getEntriesByType('resource');
      } catch (e) {
        x = false;
      }
      return x;
    },
    wcdHandler: function () {
      var _b = w._bttUtil,
        lastResP = _b.resP,
        c = 0,
        i = 0;
      if (Object.keys(_b.resP).length === 0) {
        return;
      }
      function wcdCheck() {
        if (lastResP != _b.resP) {
          i = 0;
        }
        !_b.changeCheckFlag && clearInterval(_b.wcdIntID);
        if (i < 2) {
          _b.ci = w.bttUT.sendResPost(_b.resP, _b.ci);
          _b.clearWCD();
          lastResP = _b.resP;
          i++;
        }
      }
      wcdCheck();
      _b.wcdIntID = setInterval(wcdCheck, 15000);
    },
    setLastState: function (nst, pn, pg) {
      this.lnst = nst;
      this.lpn = pn;
      this.lpg = pg;
    },
    clearWCD: function () {
      try {
        if (this.resCnt() >= 400) {
          this.WP.clearResourceTimings();
        }
      } catch (e) {}
    },
    fp: function (c) {
      var fp = 0,
        t = this;
      try {
        if (c != undefined && c === "c") {
          if (t.WP.getEntriesByType('paint').length > 1) {
            fp = parseInt(t.WP.getEntriesByType('paint')[1].startTime);
          }
        } else {
          if (t.WP.getEntriesByType('paint').length > 0) {
            fp = parseInt(t.WP.getEntriesByType('paint')[0].startTime);
          }
        }
      } catch (e) {
        fp = 0;
      }
      return fp;
    },
    fmp: function (p) {
      return 0;
    },
    pgSz: function (a) {
      var totalPgEncSize = 0,
        totalPgDecSize = 0,
        imgEncSize = 0,
        jsEncSize = 0;
      if (a == undefined) {
        a = 0;
      }
      try {
        var WP = window.performance;
        var nvgTmg = WP.getEntriesByType('navigation')[0];
        var resTmg = WP.getEntriesByType('resource');
        var pgEncSize = nvgTmg["encodedBodySize"],
          pgDecSize = nvgTmg["decodedBodySize"];
        if (a > 0) {
          resTmg = resTmg.slice(a, resTmg.length);
          pgEncSize = 0;
          pgDecSize = 0;
        }
        for (var i in resTmg) {
          var encSz = resTmg[i].encodedBodySize != undefined ? resTmg[i].encodedBodySize : 0,
            decSz = resTmg[i].decodedBodySize != undefined ? resTmg[i].decodedBodySize : 0,
            init = resTmg[i].initiatorType;
          totalPgEncSize += encSz;
          totalPgDecSize += decSz;
          imgEncSize += init === "img" || init === "image" || init === "icon" ? encSz : 0;
          jsEncSize += init === "script" ? encSz : 0;
        }
      } catch (e) {
        totalPgEncSize = 0, totalPgDecSize = 0, imgEncSize = 0, jsEncSize = 0;
      }
      return {
        pgSzEnc: totalPgEncSize,
        pgSzDec: totalPgDecSize,
        imgSz: imgEncSize,
        jsSz: jsEncSize
      };
    },
    resCnt: function (i) {
      var x;
      try {
        var resTmg = this.resTmg();
        if (resTmg === false) {
          return 0;
        }
        var resLen = resTmg.length;
        if (i == undefined) {
          x = resLen;
        } else {
          x = resTmg.slice(i, resLen).length;
        }
      } catch (e) {
        x = 0;
      }
      return x;
    },
    cors: function (method, url) {
      var bx = new XMLHttpRequest();
      if (bx != null) {
        bx.open(method, url, true);
        bx.withCredentials = true;
      } else if (typeof XDomainRequest != "undefined") {
        bx = new XDomainRequest();
        bx.open(method, url);
      } else {
        bx = null;
      }
      return bx;
    },
    fireBeacon: function (evt) {
      if (!this.curRDY || this.curRCV === "") {
        return false;
      }
      try {
        var jStr = JSON.stringify(this.curBeacon);
        var SnDENC = btoa(jStr);
        if (!this.tagBeacon || !navigator.sendBeacon(this.curRCV, SnDENC)) {
          var bx = this.cors('POST', this.curRCV);
          bx.send(SnDENC);
        }
      } catch (e) {
        return false;
      }
      this.curBeacon = {};
      this.curRCV = "";
      this.curRDY = false;
      return true;
    },
    trfChk: function (srch, url) {
      if (typeof srch != 'undefined' && srch.indexOf('|||') === -1 && url.indexOf(srch) != -1) {
        return true;
      } else if (typeof srch != 'undefined' && srch.indexOf('|||') != -1) {
        var srchArr = srch.split('|||'),
          srchLength = srchArr.length,
          ctr = 0;
        for (var i in srchArr) {
          if (url.indexOf(srchArr[i]) != -1) {
            ctr++;
          }
        }
        if (ctr === srchLength) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    getTTI: function () {
      if (this.ftti > 0 && this.tti > 0) {
        return Math.round(Math.min(this.ftti, this.tti));
      } else {
        if (typeof this.ftti === 'undefined') {
          this.ftti = 0;
        }
        if (typeof this.tti === 'undefined') {
          this.tti = 0;
        }
        return Math.round(Math.max(this.ftti, this.tti));
      }
    },
    getDomain: function (s) {
      var d;
      if (s.match(/\/\//g) === null) {
        d = "NoDomain";
      } else {
        if (s.indexOf("//") > -1) {
          d = s.split('/')[2];
        } else {
          d = s.split('/')[0];
        }
        var nd = d;
        try {
          nd = nd.replace(/\./g, '');
          nd = nd.replace(/\:/g, '');
          if (isNaN(nd)) {
            if (d.match(/\./g).length > 1) {
              d = d.substring(d.indexOf(".") + 1);
            } else if (d.match(/\./g).length == 0) {
              d = "NoDomain";
            }
          }
        } catch (e) {
          d = s.split('://')[0];
        }
      }
      return d;
    },
    rmEnc: function (str) {
      var fStr = "",
        strlen = str.length;
      for (var i = 0; i < strlen; i++) {
        if (str.charCodeAt(i) <= 127) {
          fStr += str.charAt(i);
        }
      }
      return fStr;
    }
  };
  w._bttUACH = {
    uachSupported: false,
    browser: "none",
    bv: "",
    os: "none",
    osVersion: "",
    euos: "",
    bvzn: "",
    device: "none",
    log: {},
    init: function () {
      let _s = this;
      try {
        navigator.userAgentData.getHighEntropyValues(['brands', 'mobile', 'platform', 'platformVersion']).then(function (ua) {
          _s.log = ua;
          _s.uachSupported = true;
          let brandObj = _s.getBrand(ua.brands);
          _s.browser = brandObj["brand"];
          _s.bv = brandObj["version"];
          if (_s.browser === "") {
            _s.reset();
            return false;
          }
          _s.os = ua.platform;
          _s.osVersion = ua.platformVersion.split('.')[0];
          _s.euos = _s.os + " " + _s.osVersion;
          _s.bvzn = _s.browser + "-" + _s.bv;
          _s.device = _s.getDevice(ua.mobile);
        });
      } catch (e) {}
    },
    getBrand: function (brands) {
      let brand = "",
        version = "";
      try {
        for (let i in brands) {
          brand = brands[i]["brand"];
          version = brands[i]["version"];
          if (brand.indexOf("Chrome") !== -1) {
            brand = "Chrome";
            break;
          }
        }
        brand = brand.replace(/\=|\?/g, ' ');
      } catch (e) {}
      return {
        "brand": brand,
        "version": version
      };
    },
    getDevice: function (mobile) {
      if (mobile === true) {
        return "Mobile";
      } else {
        return "Desktop";
      }
    },
    reset: function () {
      let _s = this;
      _s.uachSupported = false;
      _s.browser = "none";
      _s.bv = "";
      _s.os = "none";
      _s.osVersion = "";
      _s.euos = "";
      _s.bvzn = "";
      _s.device = "none";
    }
  };
  w._bttUACH.init();
  w._bttFPS = {
    init: false,
    QW: 4000,
    maxFrameLength: 50,
    totFrames: 0,
    fpsRuntime: 0,
    frmArr: [],
    lf: false,
    lsf: false,
    fps: 0,
    fpsLog: [],
    longFrames: 0,
    start: false,
    stopFps: false,
    frameCheck: function (t) {
      var _BF = _bttFPS;
      if (_BF.stopFps || _BF.totFrames > 2000) {
        _BF.reset();
        return;
      }
      if (!_BF.start) {
        _BF.start = t;
      }
      _BF.totFrames++;
      _BF.frmArr.push(t);
      window.requestAnimationFrame(_BF.frameCheck);
    },
    reset: function () {
      var _BF = _bttFPS;
      _BF.stopFps = false;
      _BF.totFrames = 0;
      _BF.fpsRuntime = 0;
      _BF.frmArr = [];
      _BF.fps = 0;
      _BF.lf = false;
      _BF.lsf = false;
      _BF.longFrames = 0;
    },
    startFps: function () {
      var _BF = _bttFPS;
      if (!_BF.stopFps) {
        _BF.reset();
        window.requestAnimationFrame(_BF.frameCheck);
      }
    },
    calcFps: function (spa, nstDiff) {
      var _BU = window._bttUtil,
        _BF = this,
        frmLen = _BF.frmArr.length;
      _BF.stopFps = false;
      _BF.fpsRuntime = frmLen > 1 ? _BF.frmArr[frmLen - 1] - _BF.frmArr[0] : 0;
      if (_BF.totFrames == 0 || _BF.fpsRuntime == 0) {
        _BF.fps = 0;
      } else {
        _BF.fps = Math.floor(_BF.totFrames / (_BF.fpsRuntime / 1000));
      }
      _BU.ftti = _BF.calcFTTI();
      _BF.reset();
    },
    calcFTTI: function () {
      var frmLen = this.frmArr.length,
        fcp = this.getFCP(),
        start = false;
      for (var i = 0; i < frmLen; i++) {
        var t = this.frmArr[i];
        if (!this.start) this.start = t;
        var secondIndex = Math.floor(t / 1000);
        if (typeof this.fpsLog[secondIndex] === "undefined") {
          this.fpsLog[secondIndex] = 1;
        } else {
          this.fpsLog[secondIndex]++;
        }
        if (t < fcp) {
          continue;
        }
        if (this.lsf && t - this.lsf >= this.QW) {
          var tti = this.lsf;
          return Math.round(tti);
        }
        if (this.lf && t - this.lf >= this.maxFrameLength) {
          this.longFrames++;
          this.lsf = t;
        }
        if (!this.lsf) {
          this.lsf = t;
        }
        this.lf = t;
      }
    },
    getFCP: function () {
      try {
        var p = window.performance;
        if (typeof p == "object") {
          var fp = p.getEntriesByType('paint'),
            fcp;
          if (fp.length === 2) {
            fcp = fp[1].startTime;
          } else if (fp.length === 1) {
            fcp = fp[0].startTime;
          } else {
            fcp = p.timing.domContentLoadedEventEnd - p.timing.navigationStart;
          }
        } else {
          fcp = 0;
        }
      } catch (e) {
        fcp = 0;
      }
      return fcp;
    }
  };
  w._bttWebVitals = {
    lcp: 0,
    inp: 0,
    inpStart: 0,
    fidDur: 0,
    fidStart: 0,
    clsScore: '',
    clsScoreTmp: '',
    clsStart: '',
    clsStartTmp: '',
    reportCLS: true,
    navigationTimings: {},
    lcpLog: [],
    inpLil: [],
    inpLim: {},
    inpEnt: [],
    inpLog: {},
    inpLP: 0,
    inpLPLog: {},
    inpLPSPA: false,
    minEvtID: Infinity,
    maxEvtID: 0,
    eventCount: 0,
    fidEventLog: [],
    fidLog: [],
    clsLog: [],
    clsLogTmp: [],
    init: function () {
      var self = this;
      this.initLCP();
      this.initFID();
      this.initCLS();
      this.initINP();
    },
    getTBT: function () {
      try {
        fcp = _bttFPS.getFCP();
        tti = _bttUtil.getTTI();
        tbt = 0;
        if (tti == 0 || fcp > tti) {
          return 0;
        }
        for (var i = 0; i < _bttUtil.tlg.length; i++) {
          dur = _bttUtil.tlg[i].duration;
          stTm = _bttUtil.tlg[i].startTime;
          if (stTm > fcp && stTm < tti && dur > 50) {
            tbt += dur - 50;
          }
        }
        return Math.round(tbt);
      } catch (e) {
        return 0;
      }
    },
    updateLCP: function (entry) {
      _bttWebVitals.lcp = Math.round(entry.startTime);
      try {
        const navEnt = performance.getEntriesByType("navigation")[0];
        const resEnts = performance.getEntriesByType("resource");
        var resEnt;
        for (let i = 0; i < resEnts.length - 1; i++) {
          if (resEnts[i].name === entry.url) {
            resEnt = resEnts[i];
            break;
          }
        }
        const ttfb = navEnt.responseStart;
        const reqS = Math.max(ttfb, resEnt ? resEnt.requestStart || resEnt.startTime : 0);
        const resE = Math.max(reqS, resEnt ? resEnt.responseEnd : 0);
        const rndT = Math.max(resE, entry ? entry.startTime : 0);
        _bttWebVitals.lcpLog = {
          LCP: rndT,
          URL: entry.url,
          ELE: entry.element
        };
        _bttWebVitals.lcpLog['SUB'] = [{
          name: "ttfb",
          time: ttfb,
          perc: Math.round(1000 * ttfb / rndT) / 10
        }, {
          name: "rld",
          time: reqS - ttfb,
          perc: Math.round(1000 * (reqS - ttfb) / rndT) / 10
        }, {
          name: "rlt",
          time: resE - reqS,
          perc: Math.round(1000 * (resE - reqS) / rndT) / 10
        }, {
          name: "erd",
          time: rndT - resE,
          perc: Math.round(1000 * (rndT - resE) / rndT) / 10
        }];
      } catch (e) {}
    },
    updateCLS: function (entry) {
      var _bWV = _bttWebVitals,
        _bU = _bttUtil;
      if (!entry.hadRecentInput && _bU.fp('c') > 0 && _bWV.reportCLS) {
        var clsEnt = _bWV.clsLogTmp;
        const firstEntry = clsEnt[0];
        const lastEntry = clsEnt[clsEnt.length - 1];
        if (_bttWebVitals.clsScoreTmp && entry.startTime - lastEntry.startTime < 1000 && entry.startTime - firstEntry.startTime < 5000) {
          _bWV.clsScoreTmp += entry.value;
          _bWV.clsLogTmp.push(entry);
        } else {
          _bWV.clsScoreTmp = entry.value;
          _bWV.clsStartTmp = Math.round(entry.startTime);
          _bWV.clsLogTmp = [entry];
        }
        if (_bWV.clsScoreTmp > _bWV.clsScore) {
          _bWV.clsScore = _bWV.clsScoreTmp;
          _bWV.clsStart = _bWV.clsStartTmp;
          _bWV.clsLog = _bWV.clsLogTmp;
        }
        if (_bWV.clsScore > 100) {
          _bWV.clsScore = 0;
          _bWV.clsStart = 0;
        }
      }
    },
    updateFID: function (entry, po) {
      _bttWebVitals.fidDur = Math.round(entry.processingStart - entry.startTime);
      _bttWebVitals.fidStart = Math.round(entry.startTime);
      _bttWebVitals.fidLog = entry;
      var noEntry = !_bttWebVitals.inpLil.some(function (interaction) {
        return interaction.entries.some(function (prevEntry) {
          return entry.duration === prevEntry.duration && entry.startTime === prevEntry.startTime;
        });
      });
      if (noEntry) {
        _bttWebVitals.updateINP(entry);
      }
      po.disconnect();
    },
    initINP: function () {
      var self = this;
      try {
        const po = new PerformanceObserver(function (entryList, po) {
          entryList.getEntries().forEach(self.updateINP);
        });
        po.observe({
          type: 'event',
          buffered: true,
          durationThreshold: 40
        });
      } catch (e) {}
      if (!window.performance.interactionCount) {
        try {
          const po = new PerformanceObserver(function (entryList, po) {
            entryList.getEntries().forEach(self.estEvents);
          });
          po.observe({
            type: 'event',
            buffered: true,
            durationThreshold: 0
          });
        } catch (e) {}
      }
    },
    initLCP: function () {
      var self = this;
      try {
        const po = new PerformanceObserver(function (entryList, po) {
          entryList.getEntries().forEach(self.updateLCP);
        });
        po.observe({
          type: 'largest-contentful-paint',
          buffered: true
        });
      } catch (e) {}
    },
    estEvents: function (entry) {
      try {
        if (!entry.interactionId) {
          return;
        }
        _bttWebVitals.minEvtID = Math.min(_bttWebVitals.minEvtID, entry.interactionId);
        _bttWebVitals.maxEvtID = Math.max(_bttWebVitals.maxEvtID, entry.interactionId);
        _bttWebVitals.eventCount = _bttWebVitals.maxEvtID ? (_bttWebVitals.maxEvtID - _bttWebVitals.minEvtID) / 7 + 1 : 0;
      } catch (e) {}
    },
    updateINP: function (entry) {
      try {
        if (!entry.interactionId) {
          return;
        }
        var minLI = _bttWebVitals.inpLil[_bttWebVitals.inpLil.length - 1];
        var exInt = _bttWebVitals.inpLim[entry.interactionId];
        if (exInt || _bttWebVitals.inpLil.length < 10 || entry.duration > minLI.latency) {
          if (exInt) {
            exInt.entries.push(entry);
            exInt.latency = Math.max(exInt.latency, entry.duration);
          } else {
            var interaction = {
              id: entry.interactionId,
              latency: entry.duration,
              entries: [entry]
            };
            _bttWebVitals.inpLim[interaction.id] = interaction;
            _bttWebVitals.inpLil.push(interaction);
          }
          _bttWebVitals.inpLil.sort(function (a, b) {
            return b.latency - a.latency;
          });
          _bttWebVitals.inpLil.splice(10).forEach(function (i) {
            delete _bttWebVitals.inpLim[i.id];
          });
        }
      } catch (e) {}
    },
    calcINP: function () {
      try {
        var intCount = window.performance.interactionCount ? window.performance.interactionCount : _bttWebVitals.eventCount;
        var candIdx = Math.min(_bttWebVitals.inpLil.length - 1, Math.floor(intCount / 50));
        var inpA = _bttWebVitals.inpLil[candIdx];
        if (inpA && inpA.latency !== _bttWebVitals.inp) {
          _bttWebVitals.inp = inpA.latency;
          _bttWebVitals.inpEnt = inpA.entries;
          try {
            if (inpA.entries.length) {
              var longEnt = inpA.entries.sort(function (a, b) {
                return b.duration - a.duration || b.processingEnd - b.processingStart - (a.processingEnd - a.processingStart);
              })[0];
              _bttWebVitals.inpLog['type'] = longEnt.name;
              _bttWebVitals.inpLog['target'] = longEnt.target;
              _bttWebVitals.inpLog['start'] = longEnt.startTime;
              _bttWebVitals.inpStart = Math.round(longEnt.startTime).toString();
            }
          } catch (e) {}
          ;
        }
        if (_bttWebVitals.inp > _bttWebVitals.inpLP) {
          _bttWebVitals.inpLP = _bttWebVitals.inp;
          _bttWebVitals.inpLPLog = _bttWebVitals.inpLog;
        }
      } catch (e) {}
    },
    initFID: function () {
      var self = this;
      try {
        const po = new PerformanceObserver(function (entryList, po) {
          entryList.getEntries().forEach(function (entry) {
            self.updateFID(entry, po);
          });
        });
        po.observe({
          type: 'first-input',
          buffered: true
        });
      } catch (e) {}
    },
    initCLS: function () {
      try {
        var self = this;
        const po = new PerformanceObserver(function (entryList, po) {
          entryList.getEntries().forEach(self.updateCLS);
        });
        po.observe({
          type: 'layout-shift',
          buffered: true
        });
        if (po && !_bttUtil.visEvent) {
          _bttWebVitals.onHidden();
        }
      } catch (e) {}
    },
    onHidden: function () {
      function onHiddenOrPageHide(event) {
        if (event.type === 'pagehide' || document.visibilityState === 'hidden') {
          _bttWebVitals.reportCLS = false;
          _bttWebVitals.clsScore = '';
          _bttWebVitals.clsStart = '';
          removeEventListener('visibilitychange', onHiddenOrPageHide, true);
          removeEventListener('pagehide', onHiddenOrPageHide, true);
        }
      }
      ;
      addEventListener('visibilitychange', onHiddenOrPageHide, true);
      addEventListener('pagehide', onHiddenOrPageHide, true);
    },
    updateCWV: function () {
      var _bWV = _bttWebVitals,
        _bU = _bttUtil;
      if (!_bU.bttVT && !_bU.landSent) {
        _bU.curBeacon['firstPaint'] = _bU.fp();
        _bU.curBeacon['fCPnt'] = _bU.fp('c');
        _bU.curBeacon['TBT'] = _bWV.getTBT();
        _bU.curBeacon['tti'] = _bU.getTTI();
      }
    }
  };
  _bttWebVitals.init();
  w._bttErr = {
    a: [],
    b: [],
    c: 0,
    post: function (p) {
      try {
        var p = _bttUtil.tagVars;
        var t = window._bttErr,
          jStr = "",
          url = 'https://d.btttag.com/err.rcv?siteID=mountainhardwear500z&nStart=' + p.nStart + '&pageName=' + p.pageName + '&txnName=' + p.txnName + '&sessionID=' + p.sID + '&pgTm=' + p.pgTm + '&pageType=' + p.pageType + '&AB=' + p.AB + '&DCTR=' + p.DCTR + '&CmpN=' + p.CmpN + '&CmpM=' + p.CmpM + '&CmpS=' + p.CmpS,
          c = 0;
        if (t.a.length === 0 || t.c > 30) {
          return false;
        }
        t.a = t.errDup(t.a);
        jStr = JSON.stringify(t.a);
        t.a = [];
        var SnDENC = btoa(jStr);
        var bx = window._bttUtil.cors('POST', url);
        bx.send(SnDENC);
        t.c++;
      } catch (e) {}
      return true;
    },
    errDup: function (b) {
      var c = [],
        m = [];
      try {
        var ln = b.length;
        for (var i = 0; i < ln; i++) {
          k = b[i].msg + String(b[i].line);
          if (m[k] === undefined) {
            c.push(b[i]);
            m[k] = b[i];
          } else {
            m[k].eCnt += 1;
          }
        }
      } catch (e) {
        c = b;
      }
      return c;
    },
    capture: function (msg, url, lineNo, columnNo, error, errorType) {
      try {
        var str = msg.toLowerCase(),
          eTp = "",
          _b = this,
          t = +new Date(),
          st = "";
        if (typeof url === "undefined") {
          url = "";
        }
        if (typeof error != "undefined") {
          if (error.hasOwnProperty('stack') && error.stack.indexOf('\n') != -1) {
            st = error.stack.split('\n    ').join("~~");
          } else if (error.hasOwnProperty('stack')) {
            st = error.stack;
          } else {
            st = error.toString();
          }
        }
        if (str.indexOf("script error") != -1) {
          var message = {
            msg: "Script error",
            url: url,
            eCnt: 1,
            time: t
          };
          _b.a.push(message);
          _b.b.push(message);
        } else {
          if (typeof errorType != "undefined") {
            eTp = errorType;
          } else if (error.name !== undefined) {
            eTp = error.name;
          } else {
            eTp = 'Other';
          }
          var eObj = {
            msg: st,
            eTp: eTp,
            eCnt: 1,
            url: url,
            line: lineNo,
            col: columnNo,
            time: t
          };
          _b.a.push(eObj);
          _b.b.push(eObj);
        }
      } catch (e) {}
    },
    captSec: function (url, lineNo, ts, src, disp) {
      try {
        if (url != "eval" || url.split('//').length > 1) {
          var fqdn = url.split('//')[1].split('?')[0].split('/')[0];
          var fqdnArr = fqdn.split(".");
          var dmn = fqdnArr.length > 2 ? fqdnArr.slice(1).join('.') : fqdn;
        } else {
          var dmn = url;
        }
        var _b = this,
          eTp = "CSPViolation";
        if (typeof disp != 'undefined' && disp == "report") {
          eTp = "CSPReportViolation";
        }
        var eObj = {
          msg: "",
          stack: "",
          eTp: eTp,
          gTp: "security",
          eCnt: 1,
          url: url,
          line: lineNo,
          fNm: dmn,
          col: 0,
          src: src,
          time: ts
        };
        _b.a.push(eObj);
        _b.b.push(eObj);
      } catch (e) {}
    }
  };
})(window);
(function () {
  (function () {
    var TO = new Date(),
      _BU = window._bttUtil,
      _BF = window._bttFPS,
      _BWV = window._bttWebVitals,
      start = new Date(TO.getFullYear(), 0, 0),
      diff = TO - start,
      doy = Math.floor(diff / 86400000),
      doy_diff = 0,
      LTM = TO.getTime(),
      BTT_GUID = 0,
      GUID_N = "BTT_GUID_PV",
      GUIDC = '',
      LPurV = 0,
      LPurD = 0,
      NVSTR = 0,
      LEC = 0,
      LLET = GTM(),
      orderTND = 0,
      LDCT = GTM(),
      LDIT = GTM(),
      NOWT = GTM(),
      SHi = screen.height,
      SWi = screen.width,
      TY = TO.getFullYear(),
      yyyydoy = TY + '',
      TULC = 'BTT_ULTM',
      SIDC = "BTT_X0siD",
      tver = "eRev4.0.1",
      t_ul = LTM,
      t_ul = 0,
      bd = document.getElementsByTagName('BODY')[0],
      TxN = "Unnamed_Pages",
      bttCamp = "",
      CVL = '0',
      CSID = '0',
      WCDp = 2.50000000000,
      WCDctt = 'Onload',
      WCDctv = 0,
      WCDc = 'BTT_WCD_Collect',
      WCDs = 'off',
      wcd = 0,
      WCDtt = 'c',
      cnm = "BTT_Collect",
      BTT_CL = 'on',
      ECL = 0,
      TYP = "",
      PTDB = "",
      PNM = "Unnamed_Page",
      BVL = 0,
      pgTm = 0,
      firstPaint = 0,
      fCPnt = 0,
      fmp = 0,
      tti = 0,
      fps_tti = 0,
      lt_tti = 0,
      avgFPS = 0,
      FIDs = 0,
      FIDd = 0,
      LCP = 0,
      TBT = 0,
      INP = 0,
      INPs = 0,
      CLSe = 0,
      CLS = 0,
      ScrnH = 0,
      ScrnW = 0,
      ZiCd = 0,
      SERank = 0,
      PGV = 0,
      CV6 = '0',
      CV7 = '0',
      CV8 = '0',
      CV9 = '0',
      CV10 = '0',
      ST1 = 0,
      ST2 = 0,
      ST3 = 0,
      ST4 = 0,
      ST5 = 0,
      ECV = new Map(),
      SYSTEMVARS = new Map(),
      VITALSCOPE = new Map(),
      BOTS = new Map(),
      COOKIES = new Map(),
      NATIVEAPP = new Map(),
      c_count = '0',
      co_count = '0',
      ONumBr = '0',
      RTM = 0,
      NTS = 1,
      NvsR = 1,
      btt_URL = window.location.href,
      URLq = GUtQ(btt_URL),
      DM = GtDmn(window.location.href),
      ruleNo = 0,
      AB = "Default",
      CmpS = "Other",
      CmpM = "None",
      CmpN = "",
      DCTR = "Default",
      RefURL = document.referrer.slice(0, 700),
      docRef = document.referrer,
      gCS = {},
      glbCmpMed = {},
      campSrcKey = 'mountainhardwear500z-campSource',
      campMedKey = 'mountainhardwear500z-campMedium';
    try {
      _BU.tagStart = _BU.WP.now();
    } catch (e) {}
    var TM = TO.getTime();
    var TMs = rdm3D() + '' + rdm3D() + '' + rdm3D() + '' + rdm3D() + '' + rdm3D() + '' + rdm3D();
    var BTT_X0siD = TMs.substring(0, 19) + '';
    var EXPs = TM + 1800000;
    var ses_exp = TO.setTime(EXPs);
    try {
      var gCS = JSON.parse('{"1":{"sourceName":"Google","sourceUrlSearch":"google.com","pageUrlSearch":""},"3":{"sourceName":"Bing","sourceUrlSearch":"bing.com","pageUrlSearch":""},"5":{"sourceName":"Yahoo","sourceUrlSearch":"yahoo.com","pageUrlSearch":""},"9":{"sourceName":"Facebook","sourceUrlSearch":"facebook.com","pageUrlSearch":""},"11":{"sourceName":"Yahoo","sourceUrlSearch":"yahoo.com","pageUrlSearch":""},"13":{"sourceName":"Twitter","sourceUrlSearch":"twitter.com","pageUrlSearch":""},"15":{"sourceName":"LinkedIn","sourceUrlSearch":"linkedin.com","pageUrlSearch":""},"17":{"sourceName":"Monetate","sourceUrlSearch":"monetate.com","pageUrlSearch":""},"21":{"sourceName":"Instagram","sourceUrlSearch":"instagram.com","pageUrlSearch":""},"23":{"sourceName":"Facebook","sourceUrlSearch":"","pageUrlSearch":"fbclid"},"25":{"sourceName":"Google","sourceUrlSearch":"","pageUrlSearch":"gclid"}}');
    } catch (e) {}
    var CmpSJson = lclgt(campSrcKey, "json");
    if (CmpSJson == 0) {
      if (RefURL.length === 0) {
        CmpS = "Direct";
        CmpM = "None";
      }
      for (var src in gCS) {
        var refSrch = gCS[src].sourceUrlSearch,
          pgSrch = gCS[src].pageUrlSearch,
          rFlg = false,
          pFlg = false;
        if (refSrch !== null && refSrch != "") {
          rFlg = refSrch;
        } else {
          rFlg = true;
        }
        if (pgSrch !== null && pgSrch != "") {
          pFlg = pgSrch;
        } else {
          pFlg = true;
        }
        if (rFlg === true && pFlg === true) {
          continue;
        }
        if (rFlg != true) {
          rFlg = _BU.trfChk(rFlg, docRef);
        }
        if (pFlg != true) {
          pFlg = _BU.trfChk(pFlg, btt_URL);
        }
        if (rFlg === true && pFlg === true) {
          CmpS = gCS[src].sourceName;
          break;
        }
      }
      if (CmpS === "Other") {
        CmpS = GtDmn(document.referrer);
        if (CmpS === "NoDomain") {
          CmpS = "Other";
        }
      }
    } else {
      CmpS = CmpSJson;
    }
    lclst(campSrcKey, '{"value":"' + CmpS + '","expires":' + EXPs + '}');
    try {
      var glbCmpMed = [{
        "mediumName": "Display",
        "referrerSearch": "",
        "hrefSearch": "fbclid=",
        "customCode": ""
      }, {
        "mediumName": "Affiliate",
        "referrerSearch": "",
        "hrefSearch": "affiliate",
        "customCode": ""
      }, {
        "mediumName": "Email",
        "referrerSearch": "",
        "hrefSearch": "cm_mmc=InternalEmail",
        "customCode": ""
      }, {
        "mediumName": "Email",
        "referrerSearch": "",
        "hrefSearch": "utm_medium=email",
        "customCode": ""
      }, {
        "mediumName": "Email",
        "referrerSearch": "",
        "hrefSearch": "cm_mmc=EMAIL",
        "customCode": ""
      }, {
        "mediumName": "Email",
        "referrerSearch": "",
        "hrefSearch": "utm_medium=Email",
        "customCode": ""
      }, {
        "mediumName": "Paid Search",
        "referrerSearch": "",
        "hrefSearch": "gclid",
        "customCode": ""
      }, {
        "mediumName": "Paid Search",
        "referrerSearch": "bing.com",
        "hrefSearch": "msclkid",
        "customCode": ""
      }, {
        "mediumName": "Paid Search",
        "referrerSearch": "yahoo.com",
        "hrefSearch": "msclkid",
        "customCode": ""
      }, {
        "mediumName": "Paid Search",
        "referrerSearch": "aol.com",
        "hrefSearch": "msclkid",
        "customCode": ""
      }, {
        "mediumName": "Paid Search",
        "referrerSearch": "",
        "hrefSearch": "utm_medium=CPC|||utm_source=",
        "customCode": ""
      }, {
        "mediumName": "Paid Search",
        "referrerSearch": "",
        "hrefSearch": "utm_medium=PPC|||utm_source=",
        "customCode": ""
      }, {
        "mediumName": "Paid Search",
        "referrerSearch": "",
        "hrefSearch": "utm_medium=ppc|||utm_source=",
        "customCode": ""
      }, {
        "mediumName": "Paid Search",
        "referrerSearch": "",
        "hrefSearch": "utm_medium=cpc|||utm_source=",
        "customCode": ""
      }, {
        "mediumName": "Display",
        "referrerSearch": "",
        "hrefSearch": "dclid",
        "customCode": ""
      }, {
        "mediumName": "Display",
        "referrerSearch": "",
        "hrefSearch": "source=fb",
        "customCode": ""
      }, {
        "mediumName": "Display",
        "referrerSearch": "",
        "hrefSearch": "source=ig",
        "customCode": ""
      }, {
        "mediumName": "Display",
        "referrerSearch": "",
        "hrefSearch": "source=mg",
        "customCode": ""
      }, {
        "mediumName": "Display",
        "referrerSearch": "",
        "hrefSearch": "source=an",
        "customCode": ""
      }, {
        "mediumName": "Display",
        "referrerSearch": "",
        "hrefSearch": "utm_medium=CPM|||utm_source=",
        "customCode": ""
      }, {
        "mediumName": "Display",
        "referrerSearch": "",
        "hrefSearch": "utm_medium=banner|||utm_source=",
        "customCode": ""
      }, {
        "mediumName": "Display",
        "referrerSearch": "",
        "hrefSearch": "utm_medium=display|||utm_source=",
        "customCode": ""
      }, {
        "mediumName": "Display",
        "referrerSearch": "",
        "hrefSearch": "utm_medium=cpm|||utm_source=",
        "customCode": ""
      }, {
        "mediumName": "Affiliate",
        "referrerSearch": "rakuten.com/",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Affiliate",
        "referrerSearch": "rakuten.ca",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Affiliate",
        "referrerSearch": "dealsea.com",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Social",
        "referrerSearch": "linkedin.com",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Social",
        "referrerSearch": "facebook.com",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Social",
        "referrerSearch": "tumblr.com",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Social",
        "referrerSearch": "twitter.com",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Social",
        "referrerSearch": "instagram.com",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Social",
        "referrerSearch": "plus.google.com",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Social",
        "referrerSearch": "plus.url.google.com",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Social",
        "referrerSearch": "pinterest.com",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Social",
        "referrerSearch": "https://t.co",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Social",
        "referrerSearch": "like2buy.curalate",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Display",
        "referrerSearch": "",
        "hrefSearch": "cm_mmc=DIS",
        "customCode": ""
      }, {
        "mediumName": "Social",
        "referrerSearch": "",
        "hrefSearch": "cm_mmc=TW",
        "customCode": ""
      }, {
        "mediumName": "Social",
        "referrerSearch": "",
        "hrefSearch": "cm_mmc=FB",
        "customCode": ""
      }, {
        "mediumName": "Social",
        "referrerSearch": "",
        "hrefSearch": "cm_mmc=IG",
        "customCode": ""
      }, {
        "mediumName": "Organic Search",
        "referrerSearch": "bing",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Organic Search",
        "referrerSearch": "google",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Organic Search",
        "referrerSearch": "search.yahoo.com",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Organic Search",
        "referrerSearch": "www.ask.com",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Organic Search",
        "referrerSearch": "isearch.avg.com",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Organic Search",
        "referrerSearch": "baidu.com",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Organic Search",
        "referrerSearch": "yandex",
        "hrefSearch": "",
        "customCode": ""
      }];
    } catch (e) {}
    try {} catch (e) {}
    var CmpMJson = lclgt(campMedKey, "json");
    if (CmpMJson == 0) {
      for (var src in glbCmpMed) {
        var refSrch,
          hrefSrch,
          custCodeSrch,
          custCodeVal,
          refFlag = false,
          hrefFlag = false,
          custCodeFlag = false;
        if (glbCmpMed[src].referrerSearch !== null && glbCmpMed[src].referrerSearch != "") {
          refSrch = glbCmpMed[src].referrerSearch;
        } else {
          refFlag = true;
        }
        if (glbCmpMed[src].hrefSearch !== null && glbCmpMed[src].hrefSearch != "") {
          hrefSrch = glbCmpMed[src].hrefSearch;
        } else {
          hrefFlag = true;
        }
        if (glbCmpMed[src].customCode !== null && glbCmpMed[src].customCode != "") {
          custCodeSrch = glbCmpMed[src].customCode;
        } else {
          custCodeFlag = true;
        }
        if (typeof refSrch != 'undefined' && refSrch.indexOf('|||') === -1 && document.referrer.indexOf(refSrch) != -1) {
          refFlag = true;
        } else if (typeof refSrch != 'undefined' && refSrch.indexOf('|||') != -1) {
          var srchArr = refSrch.split('|||'),
            srchLength = srchArr.length,
            ctr = 0;
          for (var i in srchArr) {
            if (window.location.href.indexOf(srchArr[i]) != -1) {
              ctr++;
            }
          }
          if (ctr === srchLength) {
            refFlag = true;
          }
        }
        if (typeof hrefSrch != 'undefined' && hrefSrch.indexOf('|||') === -1 && window.location.href.indexOf(hrefSrch) != -1) {
          hrefFlag = true;
        } else if (typeof hrefSrch != 'undefined' && hrefSrch.indexOf('|||') != -1) {
          var srchArr = hrefSrch.split('|||'),
            srchLength = srchArr.length,
            ctr = 0;
          for (var i in srchArr) {
            if (window.location.href.indexOf(srchArr[i]) != -1) {
              ctr++;
            }
          }
          if (ctr === srchLength) {
            hrefFlag = true;
          }
        }
        if (typeof custCodeSrch != 'undefined' && custCodeSrch != "") {
          custCodeFlag = true;
          custCodeVal = custCodeSrch;
        }
        if (refFlag === true && hrefFlag === true && custCodeFlag === true) {
          CmpM = glbCmpMed[src].mediumName;
          if (typeof custCodeVal != "undefined") {
            CmpM = custCodeVal;
          }
          break;
        }
      }
    } else {
      CmpM = CmpMJson;
    }
    lclst(campMedKey, '{"value":"' + CmpM + '","expires":' + EXPs + '}');
    var pageURL = window.location.href;
    var rules = {};
    var testURLSource = function (url, ruleset) {
      var rule,
        match,
        success = 0,
        RG;
      for (var key in ruleset) {
        if (ruleset.hasOwnProperty(key)) {
          rule = ruleset[key];
          match = 0;
        }
        for (var idx in rule.t) {
          if (rule.t.hasOwnProperty(idx)) {
            if (url.indexOf(rule.t[idx]) > -1) {
              match++;
            }
          }
        }
        if (match == rule.t.length) {
          success = 1;
          RG = rule.i;
          break;
        }
      }
      ;
      if (success == 1) {
        return RG;
      } else {
        return 0;
      }
    };
    try {
      var ruleNo = testURLSource(pageURL, rules);
    } catch (e) {}
    function RDM() {
      return Math.random() * 100;
    }
    if (cku(TULC) != 0) {
      t_ul = cku(TULC);
    }
    function RND(v) {
      return Math.round(v);
    }
    var BTT_Perf = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {};
    try {
      var PT = performance.timing || {},
        WP = window.performance || {};
    } catch (e) {
      var PT = {},
        WP = {};
    }
    if (PT && PT.navigationStart) {
      var RCd = 'unset';
      try {
        var RL = WP.getEntriesByType("resource");
        if (RL.length > 0) {
          RTM = 1;
          WP.setResourceTimingBufferSize(400);
        }
      } catch (e) {
        console.log("Resource timings not supported");
      }
    } else {
      NTS = 0;
      var SIH = window.setInterval(function () {
        lclst(TULC, '{"value":"' + new Date().getTime() + '"}');
      }, 2000);
    }
    function GtDmn(s) {
      var d;
      if (s.match(/\:\/\//g) === null) {
        d = "NoDomain";
      } else {
        if (s.indexOf("//") > -1) {
          d = s.split('/')[2];
        } else {
          d = s.split('/')[0];
        }
        var nd = d;
        try {
          nd = nd.replace(/\./g, '');
          nd = nd.replace(/\:/g, '');
          if (isNaN(nd)) {
            if (d.match(/\./g).length > 1) {
              d = d.substring(d.indexOf(".") + 1);
            } else if (d.match(/\./g).length == 0) {
              d = "NoDomain";
            }
          }
        } catch (e) {
          d = s.split('://')[0];
        }
      }
      return d;
    }
    function GUtQ(s) {
      try {
        var u = s.split('?')[0];
      } catch (err) {
        return "NoURLtoQMark";
      }
      return u;
    }
    PT.legacyNavigationStart = GTM();
    function rdm3D() {
      var TD = Math.floor(Math.random() * 888 + 100);
      return TD;
    }
    if (lclgt(SIDC, "json") != 0) {
      BTT_X0siD = lclgt(SIDC, "json");
    }
    if (typeof Storage !== "undefined") {
      GUIDC = lclgt(GUID_N, "json");
    } else {
      GUIDC = cku(GUID_N);
    }
    if (GUIDC != 0) {
      try {
        var r = JSON.parse(GUIDC);
        BTT_GUID = r.GUID, LPurD = r.cartValDOY, LPurV = r.cartVal;
        doy_diff = doy - LPurD;
      } catch (e) {
        GUIDC = 0;
      }
    }
    if (typeof window.bttUT != 'undefined') {
      window.bttUT.GUID = BTT_GUID;
      window.bttUT.GUIDC = GUIDC;
    }
    lclst(SIDC, '{"value":"' + BTT_X0siD + '","expires":"' + EXPs + '"}');
    var EXPg = TM + 31536000000;
    var gID_exp = TO.setTime(EXPg);
    window.BTTtag_ssI = BTT_X0siD;
    window._bttUtil.sessionID = BTT_X0siD;
    if (lclgt(cnm, "json") != 0) {
      BTT_CL = lclgt(cnm, "json");
    } else {
      if (RDM() > 100) {
        BTT_CL = 'off';
      }
      lclst(cnm, '{"value":"' + BTT_CL + '","expires":"' + EXPs + '"}');
    }
    if (BTT_CL == 'off') {
      return;
    }
    _bttUtil.tagParm = BG(1);
    window.addEventListener("bttVT", function (e) {
      handleVT();
    }, false);
    if (window.bttTag_Running == undefined) {
      window.bttTag_Running = 'Running';
      if (document.readyState === "complete") {
        BTTGetTMGS();
      } else {
        if (window.addEventListener) {
          window.addEventListener('load', BTTGetTMGS, false);
        } else if (window.attachEvent) {
          window.attachEvent('onload', BTTGetTMGS);
        }
      }
    }
    function EUCi(s) {
      return encodeURIComponent(s);
    }
    function CKI(c_nm) {}
    function cku(c_name) {
      var i,
        x,
        y,
        ARRc = document.cookie.split(";");
      for (i = 0; i < ARRc.length; i++) {
        x = ARRc[i].substr(0, ARRc[i].indexOf("="));
        y = ARRc[i].substr(ARRc[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
          return unescape(y);
        }
      }
      return 0;
    }
    function lclst(k, v) {
      if (typeof Storage !== "undefined") {
        localStorage.setItem(k, v);
      }
    }
    function lclgt(k, t) {
      if (typeof Storage !== "undefined") {
        var r = 0;
        if (localStorage.getItem(k) !== null) {
          if (t == "json") {
            try {
              var lclJSON = JSON.parse(localStorage.getItem(k));
              if (lclJSON.hasOwnProperty('GUID')) {
                r = JSON.stringify(lclJSON);
              } else if (lclJSON.hasOwnProperty('expires')) {
                if (lclJSON.expires > TM) {
                  r = lclJSON.value;
                }
              }
            } catch (e) {
              console.log(1 + " " + e);
              if (k.indexOf("-campaign") != -1) {
                r = 0;
              } else {
                r = localStorage.getItem(k);
              }
            }
          } else {
            r = localStorage.getItem(k);
          }
        }
        return r;
      } else {
        return cku(k);
      }
    }
    function BTTGetTMGS() {
      if (typeof navigator === 'undefined' || navigator === null || typeof navigator.sendBeacon === 'undefined' || navigator.sendBeacon === null || typeof navigator.sendBeacon !== 'function') {
        _bttUtil.tagBeacon = false;
      }
      setTimeout(function () {
        bttBeacon("timeout");
      }, _bttUtil.tagDelay);
      if (RTM == 1) {
        if (lclgt(WCDc, 'json') != 0) {
          WCDs = lclgt(WCDc, 'json');
        } else {
          if (RDM() <= WCDp) {
            WCDs = 'on';
            wcd = 1;
          } else {
            WCDs = 'off';
            wcd = 0;
          }
        }
        if (WCDs == 'off') {
          wcd = 0;
        } else {
          wcd = 1;
        }
        lclst(WCDc, '{"value":"' + WCDs + '","expires":"' + EXPs + '"}');
      }
      var INCLU = "y";
      var Sstr = "";
      if ((WCDs == 'on' || WCDtt == 's') && INCLU == "y") {
        setTimeout(wcdBeacon, 15000);
        setInterval(window._bttErr.post, _bttUtil.tagDelay + 4000);
      }
    }
    function wcdBeacon() {
      var PMs = {};
      if (Object.keys(_bttUtil.tagParm).length !== 0) {
        PMs = _bttUtil.tagParm;
      } else {
        PMs = BG(1);
        _bttUtil.tagParm = PMs;
      }
      var urlNoPrm = btt_URL.split('?')[0],
        b_a = urlNoPrm.indexOf('://') + 3,
        b_b = urlNoPrm.indexOf('.', b_a),
        bLen = urlNoPrm.split('/').length,
        file = urlNoPrm.split('/')[bLen - 1];
      var resParams = {
        nStart: PMs[1],
        pageName: PMs[2],
        pageType: PTDB,
        txnName: PMs[3],
        trig: pgTm,
        pgTm: pgTm,
        sID: BTT_X0siD,
        gID: BTT_GUID,
        WCDtt: "c",
        NVSTR: "0",
        fullPage: "true",
        bRes: {
          URL: urlNoPrm,
          h: urlNoPrm.substring(b_a, b_b),
          dmn: GtDmn(btt_URL),
          f: file,
          rdS: PMs[5],
          rdE: PMs[6],
          fS: PMs[7],
          dLS: PMs[8],
          dLE: PMs[9],
          cS: PMs[10],
          sCS: PMs[11],
          cE: PMs[12],
          rqS: PMs[13],
          rS: PMs[14],
          rE: PMs[15],
          d: PMs[16],
          sT: 0,
          e: "document",
          i: "html",
          dz: 0,
          ez: 0,
          xz: 0
        }
      };
      _bttUtil.resP = resParams;
      _bttUtil.ci = 0;
      _bttUtil.wcdHandler();
    }
    function bttBeacon(tagEv) {
      if (_bttUtil.landSent) {
        return;
      }
      try {
        _bttUtil.tagEnd = window.performance.now();
        _bttUtil.sVars['tagTime'] = Math.round(_bttUtil.tagEnd - _bttUtil.tagStart).toString();
      } catch (e) {
        _bttUtil.sVars['tagTime'] = "0";
      }
      _bttUtil.sVars['tagEvent'] = tagEv;
      NOWT = GTM();
      LEC++;
      ECV = new Map();
      SYSTEMVARS = new Map();
      VITALSCOPE = new Map();
      BOTS = new Map();
      COOKIES = new Map();
      NATIVEAPP = new Map();
      try {
        CV8 = function () {
          function getCWVTrafficLights(cwvString, val, amber, red) {
            if (val > red) {
              return cwvString + ": POOR";
            } else if (val > amber) {
              return cwvString + ": NEEDS IMPROVEMENT";
            } else {
              return cwvString + ": GOOD";
            }
          }
          if (typeof pageName != "undefined") {
            return;
          }
          ;
          if (window._bttWebVitals) {
            var tlString = getCWVTrafficLights("LCP", window._bttWebVitals.lcp, 2500, 4000) + ", " + getCWVTrafficLights("CLS", window._bttWebVitals.clsScore, 0.1, 0.25) + ", " + getCWVTrafficLights("FID", window._bttWebVitals.fidDur, 100, 300);
            if (localStorage.getItem("BTT_last_INP_rating") != null && localStorage.getItem("BTT_last_INP_sessionID") == _bttUtil.sessionID) {
              tlString = tlString + ", INP: " + localStorage.getItem("BTT_last_INP_rating");
            }
            return tlString;
          }
        }();
      } catch (err) {}
      try {
        CV9 = function () {
          function pF(val, bound, op) {
            let str = "PASS";
            if ((op = "GT" && val > bound) || (op = "GTOE" && val >= bound)) {
              str = "FAIL";
            }
            return str;
          }
          function lcpD(sp) {
            return "LCP-Time to First Byte: " + pF(sp[0].perc, 40, "GT") + ", LCP-Resource Load Delay: " + pF(sp[1].perc, 10, "GTOE") + ", LCP-Resource Load Time: " + pF(sp[2].perc, 40, "GT") + ", LCP-Element Render Delay: " + pF(sp[3].perc, 10, "GTE");
          }
          function fidD(fStart) {
            let navEnt = performance.getEntriesByType("navigation")[0];
            let b4DCL = fStart < navEnt.domContentLoadedEventStart;
            let b4Load = fStart < navEnt.loadEventStart;
            return "FID-Before DOM Content Loaded: " + b4DCL.toString() + ", FID-Before Load: " + b4Load.toString() + ", FID-Action: " + wV.fidLog.name;
          }
          if (typeof pageName != "undefined") {
            return;
          }
          ;
          if (window._bttWebVitals) {
            wV = _bttWebVitals;
            let str = "";
            if (wV.lcpLog && wV.lcpLog.SUB) {
              sp = wV.lcpLog.SUB;
              if (sp.length == 4) {
                str = lcpD(sp);
              }
            }
            if (wV.fidStart && wV.fidLog) {
              if (str != "") {
                str += ", ";
              }
              str += fidD(wV.fidStart);
            }
            if (str != "") {
              return str;
            }
          }
        }();
      } catch (err) {}
      try {
        var cvt = function () {
          function getCLSTarget(entries) {
            var lrgEnt = entries.reduce(function (a, b) {
              return a && a.value > b.value ? a : b;
            });
            if (lrgEnt && lrgEnt.sources && lrgEnt.sources.length) {
              var lrgSrc = lrgEnt.sources.reduce(function (a, b) {
                return a.node && a.previousRect.width * a.previousRect.height > b.previousRect.width * b.previousRect.height ? a : b;
              });
              if (lrgSrc && lrgSrc.node && lrgSrc.node.outerHTML) {
                return lrgSrc.node.outerHTML.toString().replace(/=/g, "%26#61").replace(/\</g, "%26lt").replace(/\?/g, "%26#63").replace(/"/g, "%26quot").replace(/&/g, "%26amp");
              } else if (lrgSrc && lrgSrc.node && lrgSrc.node.textContent) {
                return lrgSrc.node.textContent.replace(/\</g, "%26lt").replace(/\?/g, "%26#63").replace(/"/g, "%26quot").replace(/&/g, "%26amp");
              }
            }
          }
          if (typeof pageGroupNoDash != "undefined") {
            return;
          }
          let _b = window._bttWebVitals;
          if (_b && _b.clsLog && _b.clsLog.length != 0) {
            var clsLSE = getCLSTarget(_b.clsLog);
            if (clsLSE && clsLSE.length > 255) {
              clsLSE = clsLSE.substring(0, 255);
            }
            return clsLSE;
          }
        }();
        cvt = _bttUtil.rmEnc(cvt.toString());
        ECV.set('CLSLargestShiftElement', cvt);
      } catch (err) {}
      try {
        var cvt = function () {
          function getSelector(el) {
            if (el.tagName && el.tagName.toLowerCase() == "html") return "html";
            var str = el.tagName ? el.tagName.toLowerCase() : "";
            str += el.id && el.id != "" ? "#" + el.id : "";
            if (el.className) {
              var classes = el.className.trim().split(/\s+/);
              for (var i = 0; i < classes.length; i++) {
                str += "." + classes[i];
              }
            }
            if (str != "" && document.querySelectorAll(str).length == 1) return str;
            return getSelector(el.parentNode) + (str != "" ? " > " + str : "");
          }
          function getTarget(entries) {
            var lrgEnt = entries.reduce(function (a, b) {
              return a && a.value > b.value ? a : b;
            });
            if (lrgEnt && lrgEnt.sources && lrgEnt.sources.length) {
              var lrgSrc = lrgEnt.sources.reduce(function (a, b) {
                return a.node && a.previousRect.width * a.previousRect.height > b.previousRect.width * b.previousRect.height ? a : b;
              });
              if (lrgSrc && lrgSrc.node) {
                return getSelector(lrgSrc.node);
              }
            }
          }
          if (typeof pageGroupNoDash != "undefined") {
            return;
          }
          let _b = window._bttWebVitals;
          if (_b && _b.clsLog && _b.clsLog.length != 0) {
            var lsev = getTarget(_b.clsLog);
            if (lsev && lsev.length > 255) {
              lsev = lsev.substring(0, 255);
            }
            return lsev;
          }
        }();
        cvt = _bttUtil.rmEnc(cvt.toString());
        ECV.set('CLSLargestShiftSelector', cvt);
      } catch (err) {}
      try {
        var cvt = function () {
          function getCLSLargestShiftTime(entries) {
            var largestEntry = entries.reduce(function (a, b) {
              return a && a.value > b.value ? a : b;
            });
            return largestEntry.startTime;
          }
          if (typeof pageGroupNoDash != "undefined") {
            return;
          }
          ;
          if (window._bttWebVitals && _bttWebVitals.clsLog && _bttWebVitals.clsLog.length != 0) {
            clsLST = getCLSLargestShiftTime(_bttWebVitals.clsLog);
            return clsLST;
          }
        }();
        cvt = _bttUtil.rmEnc(cvt.toString());
        ECV.set('CLSLargestShiftStart', cvt);
      } catch (err) {}
      try {
        var cvt = function () {
          if (typeof pageName != "undefined") {
            return;
          }
          ;
          if (!window._bttWebVitals || !_bttWebVitals.clsLog || _bttWebVitals.clsLog.length == 0) {
            return;
          }
          return _bttWebVitals.clsLog.length;
        }();
        cvt = _bttUtil.rmEnc(cvt.toString());
        ECV.set('CLSLayoutShiftCount', cvt);
      } catch (err) {}
      try {
        var cvt = function () {
          if (typeof pageName != "undefined") {
            return;
          }
          ;
          if (!window._bttWebVitals || !_bttWebVitals.clsLog || _bttWebVitals.clsLog.length == 0) {
            return;
          }
          let clsString = "";
          for (i = 0; i <= _bttWebVitals.clsLog.length - 1; i++) {
            clsString = clsString + "{" + i + "," + _bttWebVitals.clsLog[i].value + "," + _bttWebVitals.clsLog[i].startTime + "," + _bttWebVitals.clsLog[i].sources.length + "}";
          }
          if (clsString.length > 255) {
            clsString = clsString.substring(0, 255);
            clsString = clsString.substring(0, clsString.lastIndexOf('}') + 1);
          }
          return clsString;
        }();
        cvt = _bttUtil.rmEnc(cvt.toString());
        ECV.set('CLSShiftLogShiftNumShiftValueShiftStartTimeShiftSourcesCount', cvt);
      } catch (err) {}
      try {
        var cvt = function () {
          if (typeof pageName != "undefined") {
            return;
          }
          ;
          if (window._bttWebVitals && _bttWebVitals.fidStart) {
            return _bttWebVitals.fidStart;
          }
        }();
        cvt = _bttUtil.rmEnc(cvt.toString());
        ECV.set('FIDStart', cvt);
      } catch (err) {}
      try {
        var cvt = function () {
          if (typeof pageName != "undefined") {
            return;
          }
          ;
          if (window._bttWebVitals && _bttWebVitals.fidLog && _bttWebVitals.fidLog.target && _bttWebVitals.fidLog.target.outerHTML) {
            let fidTargetCV = String(_bttWebVitals.fidLog.target.outerHTML).replace(/=/g, "%26#61").replace(/\</g, "%26lt").replace(/\?/g, "%26#63").replace(/"/g, "%26quot").replace(/&/g, "%26amp");
            if (fidTargetCV.length > 255) {
              fidTargetCV = fidTargetCV.substring(0, 255);
            }
            return fidTargetCV;
          }
        }();
        cvt = _bttUtil.rmEnc(cvt.toString());
        ECV.set('FIDTarget', cvt);
      } catch (err) {}
      try {
        var cvt = function () {
          function getSelector(el) {
            if (el.tagName.toLowerCase() == "html") return "html";
            var str = el.tagName.toLowerCase();
            str += el.id != "" ? "#" + el.id : "";
            if (el.className) {
              var classes = el.className.trim().split(/\s+/);
              for (var i = 0; i < classes.length; i++) {
                str += "." + classes[i];
              }
            }
            if (document.querySelectorAll(str).length == 1) return str;
            return getSelector(el.parentNode) + " > " + str;
          }
          if (typeof pageName != "undefined") {
            return;
          }
          ;
          if (window._bttWebVitals && _bttWebVitals.fidLog && _bttWebVitals.fidLog.target && _bttWebVitals.fidLog.target.outerHTML) {
            let fidTargetCV = getSelector(_bttWebVitals.fidLog.target);
            if (fidTargetCV.length > 255) {
              fidTargetCV = fidTargetCV.substring(0, 255);
            }
            return fidTargetCV;
          }
        }();
        cvt = _bttUtil.rmEnc(cvt.toString());
        ECV.set('FIDTargetSelector', cvt);
      } catch (err) {}
      try {
        var cvt = function () {
          if (typeof pageName != "undefined") {
            return;
          }
          ;
          if (window._bttWebVitals && window._bttWebVitals.lcpLog && window._bttWebVitals.lcpLog.ELE && window._bttWebVitals.lcpLog.ELE.outerHTML) {
            let lcpElement = String(window._bttWebVitals.lcpLog.ELE.outerHTML).replace(/=/g, "%26#61").replace(/\</g, "%26lt").replace(/\?/g, "%26#63").replace(/"/g, "%26quot").replace(/&/g, "%26amp");
            if (lcpElement.length > 255) {
              lcpElement = lcpElement.substring(0, 255);
            }
            return lcpElement;
          }
        }();
        cvt = _bttUtil.rmEnc(cvt.toString());
        ECV.set('LCPElement', cvt);
      } catch (err) {}
      try {
        var cvt = function () {
          if (typeof pageName != "undefined") {
            return;
          }
          ;
          if (window._bttWebVitals && _bttWebVitals.lcpLog && _bttWebVitals.lcpLog.SUB && _bttWebVitals.lcpLog.SUB.length == 4) {
            return _bttWebVitals.lcpLog.SUB[3].time;
          }
        }();
        cvt = _bttUtil.rmEnc(cvt.toString());
        ECV.set('LCPElementRenderDelayMS', cvt);
      } catch (err) {}
      try {
        var cvt = function () {
          if (typeof pageName != "undefined") {
            return;
          }
          ;
          if (window._bttWebVitals && _bttWebVitals.lcpLog && _bttWebVitals.lcpLog.SUB && _bttWebVitals.lcpLog.SUB.length == 4) {
            return window._bttWebVitals.lcpLog.SUB[3].perc;
          }
        }();
        cvt = _bttUtil.rmEnc(cvt.toString());
        ECV.set('LCPElementRenderDelayPercentage', cvt);
      } catch (err) {}
      try {
        var cvt = function () {
          if (typeof pageName != "undefined") {
            return;
          }
          ;
          if (window._bttWebVitals && _bttWebVitals.lcpLog && _bttWebVitals.lcpLog.SUB && _bttWebVitals.lcpLog.SUB.length == 4) {
            return _bttWebVitals.lcpLog.SUB[1].time;
          }
        }();
        cvt = _bttUtil.rmEnc(cvt.toString());
        ECV.set('LCPResourceLoadDelayMS', cvt);
      } catch (err) {}
      try {
        var cvt = function () {
          if (typeof pageName != "undefined") {
            return;
          }
          ;
          if (window._bttWebVitals && _bttWebVitals.lcpLog && _bttWebVitals.lcpLog.SUB && _bttWebVitals.lcpLog.SUB.length == 4) {
            return window._bttWebVitals.lcpLog.SUB[1].perc;
          }
        }();
        cvt = _bttUtil.rmEnc(cvt.toString());
        ECV.set('LCPResourceLoadDelayPercentage', cvt);
      } catch (err) {}
      try {
        var cvt = function () {
          if (typeof pageName != "undefined") {
            return;
          }
          ;
          if (window._bttWebVitals && _bttWebVitals.lcpLog && _bttWebVitals.lcpLog.SUB && _bttWebVitals.lcpLog.SUB.length == 4) {
            return _bttWebVitals.lcpLog.SUB[2].time;
          }
        }();
        cvt = _bttUtil.rmEnc(cvt.toString());
        ECV.set('LCPResourceLoadTimeMS', cvt);
      } catch (err) {}
      try {
        var cvt = function () {
          if (typeof pageName != "undefined") {
            return;
          }
          ;
          if (window._bttWebVitals && _bttWebVitals.lcpLog && _bttWebVitals.lcpLog.SUB && _bttWebVitals.lcpLog.SUB.length == 4) {
            return window._bttWebVitals.lcpLog.SUB[2].perc;
          }
        }();
        cvt = _bttUtil.rmEnc(cvt.toString());
        ECV.set('LCPResourceLoadTimePercentage', cvt);
      } catch (err) {}
      try {
        var cvt = function () {
          function getSelector(el) {
            if (el.tagName.toLowerCase() == "html") return "html";
            var str = el.tagName.toLowerCase();
            str += el.id != "" ? "#" + el.id : "";
            if (el.className) {
              var classes = el.className.trim().split(/\s+/);
              for (var i = 0; i < classes.length; i++) {
                str += "." + classes[i];
              }
            }
            if (document.querySelectorAll(str).length == 1) return str;
            return getSelector(el.parentNode) + " > " + str;
          }
          if (typeof pageName != "undefined") {
            return;
          }
          ;
          if (window._bttWebVitals && window._bttWebVitals.lcpLog && window._bttWebVitals.lcpLog.ELE && window._bttWebVitals.lcpLog.ELE.outerHTML) {
            let lcpElement = getSelector(window._bttWebVitals.lcpLog.ELE);
            if (lcpElement.length > 255) {
              lcpElement = lcpElement.substring(0, 255);
            }
            return lcpElement;
          }
        }();
        cvt = _bttUtil.rmEnc(cvt.toString());
        ECV.set('LCPSelector', cvt);
      } catch (err) {}
      try {
        var cvt = function () {
          if (typeof pageName != "undefined") {
            return;
          }
          ;
          if (window._bttWebVitals && _bttWebVitals.lcpLog && _bttWebVitals.lcpLog.SUB && _bttWebVitals.lcpLog.SUB.length == 4) {
            return _bttWebVitals.lcpLog.SUB[0].time;
          }
        }();
        cvt = _bttUtil.rmEnc(cvt.toString());
        ECV.set('LCPTimeToFirstByteMS', cvt);
      } catch (err) {}
      try {
        var cvt = function () {
          if (typeof pageName != "undefined") {
            return;
          }
          ;
          if (window._bttWebVitals && _bttWebVitals.lcpLog && _bttWebVitals.lcpLog.SUB && _bttWebVitals.lcpLog.SUB.length == 4) {
            return window._bttWebVitals.lcpLog.SUB[0].perc;
          }
        }();
        cvt = _bttUtil.rmEnc(cvt.toString());
        ECV.set('LCPTimeToFirstBytePercentage', cvt);
      } catch (err) {}
      try {
        var cvt = function () {
          if (typeof pageName != "undefined") {
            return;
          }
          ;
          if (window._bttWebVitals && window._bttWebVitals.lcpLog) {
            let lcpURLCV = String(window._bttWebVitals.lcpLog.URL);
            if (lcpURLCV.length > 255) {
              lcpURLCV = lcpURLCV.substring(0, 255);
            }
            return lcpURLCV;
          }
        }();
        cvt = _bttUtil.rmEnc(cvt.toString());
        ECV.set('LCPURL', cvt);
      } catch (err) {}
      try {
        var cvt = _bttUACH.euos;
        cvt = _bttUtil.rmEnc(cvt.toString());
        SYSTEMVARS.set('euos', cvt);
      } catch (err) {}
      try {
        var cvt = _bttWebVitals.clsScore;
        cvt = _bttUtil.rmEnc(cvt.toString());
        VITALSCOPE.set('CLSScore', cvt);
      } catch (err) {}
      var PMs = [];
      if (Object.keys(_bttUtil.tagParm).length !== 0) {
        PMs = _bttUtil.tagParm;
      } else {
        PMs = BG(1);
        _bttUtil.tagParm = PMs;
      }
      if (!_bttUtil.bttVT && !_bttUtil.parmFlag) {
        PMs = BG(1);
        _bttUtil.tagParm = PMs;
      }
      if (PMs[0] != 'none') {
        var tU = "//d.btttag.com/btt.gif";
        var pNM = PMs[2];
        if (BTT_GUID === BTT_X0siD || BTT_GUID === 0) {
          NvsR = 0;
        } else {
          NvsR = 1;
        }
        RefURL = encodeURIComponent(RefURL);
        try {
          var sECV = JSON.stringify(Object.fromEntries(ECV));
        } catch (e) {
          sECV = '{\"(ECV)\":\"convErr1\"}';
        }
        try {
          var sSYSTEMVARS = JSON.stringify(Object.fromEntries(SYSTEMVARS));
        } catch (e) {
          sSYSTEMVARS = '{\"(SYSTEMVARS)\":\"convErr1\"}';
        }
        try {
          var sVITALSCOPE = JSON.stringify(Object.fromEntries(VITALSCOPE));
        } catch (e) {
          sVITALSCOPE = '{\"(VITALSCOPE)\":\"convErr1\"}';
        }
        try {
          var sBOTS = JSON.stringify(Object.fromEntries(BOTS));
        } catch (e) {
          sBOTS = '{\"(BOTS)\":\"convErr1\"}';
        }
        try {
          var sCOOKIES = JSON.stringify(Object.fromEntries(COOKIES));
        } catch (e) {
          sCOOKIES = '{\"(COOKIES)\":\"convErr1\"}';
        }
        try {
          var sNATIVEAPP = JSON.stringify(Object.fromEntries(NATIVEAPP));
        } catch (e) {
          sNATIVEAPP = '{\"(NATIVEAPP)\":\"convErr1\"}';
        }
        var NAflg = 0;
        try {
          var bVER = _BU.version;
        } catch (e) {
          bVER = '-1';
        }
        tU += '?' + PMs[0] + "&sID=" + BTT_X0siD + "&gID=" + BTT_GUID + "&SHi=" + SHi + "&SWi=" + SWi + "&CSID=" + CSID + "&CV6=" + CV6 + "&CV7=" + CV7 + "&CV8=" + CV8 + "&CV9=" + CV9 + "&CV10=" + CV10 + "&NAflg=" + NAflg + "&VER=" + bVER + "&wcd=" + wcd + "&LTM=" + LTM + "&WCDtt=" + WCDtt + "&NVSTR=" + NVSTR + "&RV=" + NvsR + "&collectAt=" + 100 + "&CmpS=" + CmpS + "&CmpM=" + CmpM + "&CmpN=" + CmpN + "&RefURL=" + RefURL;
        var tUObj = {
          thisURL: btt_URL
        };
        var tUArr = tU.split("?")[1].split("&");
        var tULen = tUArr.length;
        for (var i = 0; i < tULen; i++) {
          if (typeof tUArr[i] != "undefined" && tUArr[i].indexOf("=") != -1) {
            var pArr = tUArr[i].split("=");
            try {
              tUObj[pArr[0]] = _bttUtil.rmEnc(decodeURIComponent(pArr[1]));
            } catch (e) {
              tUObj[pArr[0]] = _bttUtil.rmEnc(pArr[1]);
            }
          }
        }
        tUObj['ECV'] = sECV;
        tUObj['SYSTEMVARS'] = sSYSTEMVARS;
        tUObj['VITALSCOPE'] = sVITALSCOPE;
        tUObj['BOTS'] = sBOTS;
        tUObj['COOKIES'] = sCOOKIES;
        tUObj['NATIVEAPP'] = sNATIVEAPP;
        _bttUtil.sVars['respCWV'] = "FID";
        (function (pname) {
          var BTT_URL = "https://d.btttag.com/analytics.rcv?pgNm=" + PMs[2] + "&trSeg=" + PMs[3] + "&navStart=" + PMs[1];
          _BU.curBeacon = tUObj;
          _BU.curRCV = BTT_URL;
          _BU.curRDY = true;
          if (tagEv === 'timeout' || !_BU.tagBeacon || !_BU.visEvent) {
            if (!_BU.landSent) {
              if (_BU.fireBeacon('land')) {
                _BU.landSent = true;
                _BU.landVars = _BU.tagVars;
              }
            }
          }
        })(pNM);
      }
    }
    function handleVT() {
      if (_bttUtil.landSent) {
        return;
      }
      if (!_bttUtil.landFlag || !_bttUtil.parmFlag || !_bttUtil.curRDY) {
        bttBeacon('vt');
      }
      if (_bttUtil.fireBeacon('vt')) {
        _bttUtil.landSent = true;
        _bttUtil.landVars = _bttUtil.tagVars;
      }
    }
    function LIM(t) {
      var l = 120000;
      if (t < 0) {
        return 0;
      }
      if (t > l) {
        return l;
      } else {
        return t;
      }
    }
    function BG(eT) {
      if (_bttUtil.parmFlag && _bttUtil.landFlag) {
        return _bttUtil.tagParm;
      }
      if (!_bttUtil.landFlag) {
        _bttUtil.landFlag = true;
      } else {
        _bttUtil.parmFlag = true;
      }
      var p6059 = undefined,
        p6060 = undefined,
        p6061 = undefined,
        p6063 = undefined,
        p8446 = undefined,
        p6066 = undefined,
        p6069 = undefined,
        p6072 = undefined,
        p8449 = undefined,
        p6075 = undefined,
        p8452 = undefined,
        p6078 = undefined;
      try {
        if (typeof function () {
          if (location.href.indexOf("checkout/success?ID=") != -1) {
            return "Order Confirmation";
          }
        }() != 'undefined' && function () {
          if (location.href.indexOf("checkout/success?ID=") != -1) {
            return "Order Confirmation";
          }
        }() != null) {
          p8446 = function () {
            if (location.href.indexOf("checkout/success?ID=") != -1) {
              return "Order Confirmation";
            }
          }();
        }
      } catch (err) {}
      try {
        if (typeof function () {
          if (TagManagerData.PageType.indexOf('NewCHKTThanks') != -1) {
            return "Order Confirmation";
          } else {
            return void 0;
          }
        }() != 'undefined' && function () {
          if (TagManagerData.PageType.indexOf('NewCHKTThanks') != -1) {
            return "Order Confirmation";
          } else {
            return void 0;
          }
        }() != null) {
          p6069 = function () {
            if (TagManagerData.PageType.indexOf('NewCHKTThanks') != -1) {
              return "Order Confirmation";
            } else {
              return void 0;
            }
          }();
        }
      } catch (err) {}
      try {
        if (typeof function () {
          if (TagManagerData.PageType.indexOf('NewSinglePageCHKT') != -1) {
            return "Checkout";
          } else {
            return void 0;
          }
        }() != 'undefined' && function () {
          if (TagManagerData.PageType.indexOf('NewSinglePageCHKT') != -1) {
            return "Checkout";
          } else {
            return void 0;
          }
        }() != null) {
          p6072 = function () {
            if (TagManagerData.PageType.indexOf('NewSinglePageCHKT') != -1) {
              return "Checkout";
            } else {
              return void 0;
            }
          }();
        }
      } catch (err) {}
      try {
        if (typeof function () {
          if (digitalData.page.pageInfo.pageHier == "Home" || digitalData.page.pageInfo.pageHier == "Home:Sites-Prana_US-Site") {
            return "Home Page";
          }
        }() != 'undefined' && function () {
          if (digitalData.page.pageInfo.pageHier == "Home" || digitalData.page.pageInfo.pageHier == "Home:Sites-Prana_US-Site") {
            return "Home Page";
          }
        }() != null) {
          p8449 = function () {
            if (digitalData.page.pageInfo.pageHier == "Home" || digitalData.page.pageInfo.pageHier == "Home:Sites-Prana_US-Site") {
              return "Home Page";
            }
          }();
        }
      } catch (err) {}
      try {
        if (typeof TagManagerData.PageType != 'undefined' && TagManagerData.PageType != null) {
          p6075 = TagManagerData.PageType;
        }
      } catch (err) {}
      try {
        if (typeof digitalData.page.pageInfo.pageType != 'undefined' && digitalData.page.pageInfo.pageType != null) {
          p8452 = digitalData.page.pageInfo.pageType;
        }
      } catch (err) {}
      var PSA = {
        "p6059": {
          pS: "https://www.columbia.com/on/demandware.store/Sites-Columbia_US-Site/en_US/Account-SetNewPassword",
          PNM: "url_search",
          txn: "eCommerce",
          pN: "Reset-Password",
          pT: p6059,
          bV: "0"
        },
        "p6060": {
          pS: "https://www.columbia.com/on/demandware.store/Sites-Columbia_US-Site/en_US/Wishlist-Add",
          PNM: "url_search",
          txn: "eCommerce",
          pN: "Wish-List-Add",
          pT: p6060,
          bV: "0"
        },
        "p6061": {
          pS: "https://www.columbia.com/on/demandware.store/Sites-Columbia_US-Site/en_US/SPCCart-AddToWishlistGuest",
          PNM: "url_search",
          txn: "eCommerce",
          pN: "Whish-List-Add-Guest",
          pT: p6061,
          bV: "0"
        },
        "p6063": {
          pS: "https://www.columbia.com/on/demandware.store/Sites-Columbia_US-Site/en_US/Bazaarvoice-SubmissionContainer",
          PNM: "url_search",
          txn: "eCommerce",
          pN: "Bazaarvoice-SubmissionContainer",
          pT: p6063,
          bV: "0"
        },
        "p8446": {
          pS: "",
          PNM: "JSCode",
          txn: "eCommerce",
          pN: "auto",
          pT: p8446,
          bV: "0"
        },
        "p6066": {
          pS: "https://www.columbia.com/on/demandware.store/Sites-Columbia_US-Site/en_US/Email-Unsubscribe",
          PNM: "url_search",
          txn: "eCommerce",
          pN: "Email-Unsubscribe",
          pT: p6066,
          bV: "0"
        },
        "p6069": {
          pS: "",
          PNM: "JSCode",
          txn: "eCommerce",
          pN: "auto",
          pT: p6069,
          bV: "0"
        },
        "p6072": {
          pS: "",
          PNM: "JSCode",
          txn: "eCommerce",
          pN: "auto",
          pT: p6072,
          bV: "0"
        },
        "p8449": {
          pS: "",
          PNM: "JSCode",
          txn: "eCommerce",
          pN: "auto",
          pT: p8449,
          bV: "0"
        },
        "p6075": {
          pS: "",
          PNM: "JSCode",
          txn: "eCommerce",
          pN: "auto",
          pT: p6075,
          bV: "0"
        },
        "p8452": {
          pS: "",
          PNM: "JSCode",
          txn: "eCommerce",
          pN: "auto",
          pT: p8452,
          bV: "0"
        },
        "p6078": {
          pS: "/CSRF-Fail",
          PNM: "url_search",
          txn: "eCommerce",
          pN: "Error Returned",
          pT: p6078,
          bV: "0"
        }
      };
      for (var aid in PSA) {
        var pS = PSA[aid]["pS"];
        PTDB = PSA[aid]["pT"];
        if (PTDB != undefined && PTDB.length > 0) {
          var PNDB = PTDB;
          var TN = PSA[aid]["txn"];
          BVL = PSA[aid]["bV"];
          break;
        }
        if (pS.length > 0 && btt_URL.indexOf(pS) != -1) {
          var PNDB = PSA[aid]["pN"];
          var TN = PSA[aid]["txn"];
          BVL = PSA[aid]["bV"];
          break;
        }
      }
      if (PNDB != undefined) {
        PNM = PNDB;
      }
      if (window.btttag_TxN == undefined) {
        if (TN == undefined) {} else {
          TxN = TN;
        }
      } else {
        TxN = window.btttag_TxN;
      }
      try {
        if (function () {
          if (typeof TagManagerData !== 'undefined') {
            return 'Legacy';
          } else if (typeof digitalData !== 'undefined') {
            return 'X1';
          } else {
            return void 0;
          }
        }() != undefined) {
          TxN = TxN + '-' + function () {
            if (typeof TagManagerData !== 'undefined') {
              return 'Legacy';
            } else if (typeof digitalData !== 'undefined') {
              return 'X1';
            } else {
              return void 0;
            }
          }();
        }
      } catch (err) {}
      try {
        if (function () {
          try {
            var x = location.href.split("utm_campaign=")[1].split("&")[0];
            var y = decodeURIComponent(x);
            return y;
          } catch (e) {
            return void 0;
          }
        }() != undefined) {
          bttCamp = function () {
            try {
              var x = location.href.split("utm_campaign=")[1].split("&")[0];
              var y = decodeURIComponent(x);
              return y;
            } catch (e) {
              return void 0;
            }
          }();
        }
      } catch (err) {}
      if (lclgt("mountainhardwear500z-campaign", "json") != 0) {
        bttCamp = lclgt("mountainhardwear500z-campaign", "json");
      }
      lclst("mountainhardwear500z-campaign", '{"value":"' + bttCamp + '","expires":"' + EXPs + '"}');
      if (lclgt("mountainhardwear500z-datacenter", "json") != 0) {
        DCTR = lclgt("mountainhardwear500z-datacenter", "json");
      }
      lclst("mountainhardwear500z-datacenter", '{"value":"' + DCTR + '","expires":"' + EXPs + '"}');
      try {
        if (function () {
          try {
            if (Yo.rum.get('optState').optState) {
              return Yo.rum.get('optState').optState;
            } else {
              return void 0;
            }
          } catch (e) {
            return void 0;
          }
        }() != undefined) {
          AB = function () {
            try {
              if (Yo.rum.get('optState').optState) {
                return Yo.rum.get('optState').optState;
              } else {
                return void 0;
              }
            } catch (e) {
              return void 0;
            }
          }();
        }
      } catch (err) {}
      if (lclgt("mountainhardwear500z-abtest", "json") != 0) {
        AB = lclgt("mountainhardwear500z-abtest", "json");
      }
      if (AB != "Default") {
        lclst("mountainhardwear500z-abtest", '{"value":"' + AB + '","expires":"' + EXPs + '"}');
      }
      try {
        if (PNM == "Order Confirmation" || PNM == "Purchase Confirmation") {
          try {
            if (function () {
              PTDB = function () {
                if (typeof TagManagerData !== 'undefined') {
                  return 'Legacy';
                } else if (typeof digitalData !== 'undefined') {
                  return 'X1';
                } else {
                  return void 0;
                }
              }();
              if (typeof TagManagerData !== 'undefined' && TagManagerData.hasOwnProperty('OrderMerchValue')) {
                return TagManagerData.OrderMerchValue;
              } else if (typeof digitalData !== 'undefined' && digitalData.hasOwnProperty('transaction') && digitalData.transaction.hasOwnProperty('subTotal')) {
                return digitalData.transaction.subTotal;
              } else {
                return void 0;
              }
            }() != undefined) {
              CVL = function () {
                PTDB = function () {
                  if (typeof TagManagerData !== 'undefined') {
                    return 'Legacy';
                  } else if (typeof digitalData !== 'undefined') {
                    return 'X1';
                  } else {
                    return void 0;
                  }
                }();
                if (typeof TagManagerData !== 'undefined' && TagManagerData.hasOwnProperty('OrderMerchValue')) {
                  return TagManagerData.OrderMerchValue;
                } else if (typeof digitalData !== 'undefined' && digitalData.hasOwnProperty('transaction') && digitalData.transaction.hasOwnProperty('subTotal')) {
                  return digitalData.transaction.subTotal;
                } else {
                  return void 0;
                }
              }();
            }
          } catch (err) {}
        } else {
          try {
            if (function () {
              PTDB = function () {
                if (typeof TagManagerData !== 'undefined') {
                  return 'Legacy';
                } else if (typeof digitalData !== 'undefined') {
                  return 'X1';
                } else {
                  return void 0;
                }
              }();
              if (typeof TagManagerData !== 'undefined' && TagManagerData.hasOwnProperty('OrderMerchValue')) {
                return TagManagerData.OrderMerchValue;
              } else if (typeof digitalData !== 'undefined' && digitalData.hasOwnProperty('transaction') && digitalData.transaction.hasOwnProperty('subTotal')) {
                return digitalData.transaction.subTotal;
              } else {
                return void 0;
              }
            }() != undefined) {
              PGV = function () {
                PTDB = function () {
                  if (typeof TagManagerData !== 'undefined') {
                    return 'Legacy';
                  } else if (typeof digitalData !== 'undefined') {
                    return 'X1';
                  } else {
                    return void 0;
                  }
                }();
                if (typeof TagManagerData !== 'undefined' && TagManagerData.hasOwnProperty('OrderMerchValue')) {
                  return TagManagerData.OrderMerchValue;
                } else if (typeof digitalData !== 'undefined' && digitalData.hasOwnProperty('transaction') && digitalData.transaction.hasOwnProperty('subTotal')) {
                  return digitalData.transaction.subTotal;
                } else {
                  return void 0;
                }
              }();
            }
          } catch (err) {}
        }
        try {
          if (CVL == "") {
            CVL = 0;
          }
        } catch (e) {
          console.log(3 + " " + e);
        }
        var currencyCode = "";
        if (CVL > 0 || PGV > 0 || BVL > 0) {
          try {
            currencyCode = "USD";
          } catch (e) {}
        }
        try {
          if (function () {
            if (typeof TagManagerData !== 'undefined' && TagManagerData.hasOwnProperty('OrderNumber')) {
              return TagManagerData.OrderNumber;
            } else if (typeof digitalData !== 'undefined' && digitalData.hasOwnProperty('transaction') && digitalData.transaction.hasOwnProperty('transactionID')) {
              return digitalData.transaction.transactionID;
            } else {
              return void 0;
            }
          }() != undefined && parseFloat(CVL) > 0) {
            ONumBr = function () {
              if (typeof TagManagerData !== 'undefined' && TagManagerData.hasOwnProperty('OrderNumber')) {
                return TagManagerData.OrderNumber;
              } else if (typeof digitalData !== 'undefined' && digitalData.hasOwnProperty('transaction') && digitalData.transaction.hasOwnProperty('transactionID')) {
                return digitalData.transaction.transactionID;
              } else {
                return void 0;
              }
            }();
          }
        } catch (e) {}
      } catch (err) {}
      PNM = encodeURIComponent(PNM);
      PTDB = encodeURIComponent(PTDB);
      TxN = ruleNo == 0 ? encodeURIComponent(TxN) : encodeURIComponent(TxN + "|" + ruleNo.toString());
      PNDB = encodeURIComponent(PNDB);
      var params = "",
        RDs = 0,
        RDe = 0,
        btt_FS = 0,
        Fs = 0,
        DLs = 0,
        DLe = 0,
        CsT = 0,
        SCsT = 0,
        CeT = 0,
        RqT = 0,
        RsT = 0,
        ReT = 0,
        dU = 0,
        eT = 5,
        top = 0,
        THR = 0,
        fByte = 0,
        nst = 0,
        UST = 0,
        RDS = 0,
        RE = 0,
        DST = 0,
        DSE = 0,
        CST = 0,
        btt_CE = 0,
        SCS = 0,
        RS = 0,
        RES = 0,
        REE = 0,
        DL = 0,
        DI = 0,
        DLS = 0,
        DLE = 0,
        DC = 0,
        LS = 0,
        LE = 0,
        NT = 0,
        RC = 0,
        totRD = 0,
        dns = 0,
        tcp = 0,
        ttDI = 0,
        dom = 0,
        BPT = 0,
        ssl = 0;
      var today = new Date();
      var NTM = today.getTime();
      if (_bttUtil.parmFlag) {
        if (GUIDC != 0) {
          if (CVL != 0) {
            var orderNum = lclgt("mountainhardwear500z-" + ONumBr);
            if (ONumBr != 0 && orderNum != 0 && orderNum == CVL) {
              PGV = CVL;
              CVL = 0;
            } else if (ONumBr == 0 && CVL > 0 && CVL == LPurV && doy_diff < 3) {
              PGV = CVL;
              CVL = 0;
            } else {
              LPurV = CVL;
              LPurD = doy;
            }
          }
        } else {
          BTT_GUID = BTT_X0siD;
          LPurV = CVL;
          LPurD = doy;
        }
        if (GUIDC != 0) {
          var GUIDCTemp = JSON.parse(GUIDC);
          GUIDCTemp.cartValDOY = LPurD;
          GUIDCTemp.cartVal = LPurV;
          GUIDC = JSON.stringify(GUIDCTemp);
        } else {
          GUIDC = '{"GUID":"' + BTT_GUID + '","cartValDOY":"' + LPurD + '","cartVal":"' + LPurV + '"}';
        }
        if (window.bttUT != undefined) {
          window.bttUT.GUID = BTT_GUID;
          window.bttUT.GUIDC = GUIDC;
        }
        if (typeof Storage !== "undefined") {
          lclst(GUID_N, GUIDC);
          if (lclgt("mountainhardwear500z-" + ONumBr) == 0) {
            lclst("mountainhardwear500z-" + ONumBr, CVL);
          }
        }
      }
      if (NTS == 1) {
        nst = PT.navigationStart, UST = PT.unloadEventStart, RDS = PT.redirectStart, RDs = RDS - nst, RE = PT.redirectEnd, RDe = RE - nst, btt_FS = PT.fetchStart, Fs = btt_FS - nst, DST = PT.domainLookupStart, DLs = DST - nst, DSE = PT.domainLookupEnd, DLe = DSE - nst, CST = PT.connectStart, CsT = CST - nst, btt_CE = PT.connectEnd, CeT = btt_CE - nst, SCS = PT.secureConnectionStart || 0, SCsT = SCS - nst, RS = PT.requestStart, RqT = RS - nst, RES = PT.responseStart, RsT = RES - nst, REE = PT.responseEnd, ReT = REE - nst, dU = REE - nst;
        DL = PT.domLoading, DI = PT.domInteractive, DLS = PT.domContentLoadedEventStart, DLE = PT.domContentLoadedEventEnd, DC = PT.domComplete, LS = PT.loadEventStart, LE = PT.loadEventEnd, NT = 1, RC = BTT_Perf != undefined && BTT_Perf.navigation != undefined ? BTT_Perf.navigation.redirectCount : 0, totRD = LIM(RE - RDS), top = UST - LE, dns = LIM(DSE - DST), tcp = LIM(btt_CE - CST), ttDI = LIM(DI - DL), dom = LIM(DC - DL);
        pgTm = LIM(LS - nst);
        THR = pgTm;
        if (LEC > 1) {
          if (LDCT > DC) {
            DC = LDCT;
            DLE = LDCT;
            dom = LIM(DC - DL);
          }
          if (LDIT > DI) {
            DI = LDIT;
          }
          if (NOWT > LS) {
            LS = NOWT;
            LE = NOWT;
            pgTm = LIM(NOWT - nst);
          }
        }
        if (LS == 0 && LE > LS) {
          pgTm = LIM(LE - nst);
        }
        if (SCS > 0) {
          ssl = LIM(RS - SCS);
        }
        fByte = LIM(RES - RS);
        BPT = LIM(REE - RES);
        firstPaint = _BU.fp();
        fCPnt = _BU.fp('c');
        fmp = _BU.fmp(PNM);
        _BF.calcFps();
        avgFPS = _BF.fps;
        tti = _BU.getTTI();
        lt_tti = _BU.tti;
        fps_tti = _BU.ftti;
        FIDs = _BWV.fidStart;
        FIDd = _BWV.fidDur;
        LCP = _BWV.lcp;
        CLSe = _BWV.clsStart;
        CLS = _BWV.clsScore;
        TBT = _BWV.getTBT();
        ScrnH = screen.height;
        ScrnW = screen.width;
        if (LCP > 0 && fCPnt > 0 && LCP < fCPnt) {
          LCP = fCPnt;
        }
        var szObj = _BU.pgSz();
        var totalPgEncSize = szObj.pgSzEnc;
        var totalPgDecSize = szObj.pgSzDec;
        var imgEncSize = szObj.imgSz;
        var jsEncSize = szObj.jsSz;
        if (PTDB == "undefined" || PTDB == undefined || typeof PTDB == "undefined" || PTDB.trim().length < 1) {
          PTDB = encodeURIComponent("Main Group");
        }
        try {
          if (typeof window.bttUT != 'undefined') {
            var _b = window.bttUT;
            _b.txnName = TxN;
            _b.pageGroup = PTDB;
            _b.pageName = PNM;
            _b.campaign = bttCamp;
            _b.datacenter = DCTR;
            _b.abtesting = AB;
            _b.guid = BTT_GUID;
            _b.sessionID = BTT_X0siD;
            _b.CmpM = CmpM;
            _b.CmpS = CmpS;
            _b.rdy = 1;
          }
        } catch (e) {}
        let _bUA = _bttUACH;
        params = "pageName=" + PNM + "&nst=" + nst + "&unloadEventStart=" + UST + "&redirectStart=" + RDS + "&c_count=" + c_count + "&co_count=" + co_count + "&totRD=" + totRD + "&fetchStart=" + btt_FS + "&domainLookupStart=" + DST + "&connectStart=" + CST + "&secureConnectionStart=" + SCS + "&requestStart=" + RS + "&responseStart=" + RES + "&REE=" + REE + "&BPT=" + BPT + "&domLoading=" + DL + "&domInteractive=" + DI + "&domContentLoadedStart=" + DLS + "&domContentLoadedEnd=" + DLE + "&loadEventStart=" + LS + "&navigationType=" + NT + "&redirectCount=" + RC + "&pageType=" + PTDB + "&pageValue=" + PGV + "&pgTm=" + pgTm + "&dns=" + dns + "&tcp=" + tcp + "&dom=" + dom + "&fByte=" + fByte + "&ssl=" + ssl + "&firstPaint=" + firstPaint + "&fCPnt=" + fCPnt + "&fmp=" + fmp + "&tti=" + tti + "&lt_tti=" + lt_tti + "&fps_tti=" + fps_tti + "&fps=" + avgFPS + "&FIDs=" + FIDs + "&FIDd=" + FIDd + "&LCP=" + LCP + "&CLSe=" + CLSe + "&CLS=" + CLS + "&TBT=" + TBT + "&INP=" + INP + "&ScrnH=" + ScrnH + "&ScrnW=" + ScrnW + "&pWSz=" + totalPgEncSize + "&pSz=" + totalPgDecSize + "&IMAGE_SIZE=" + imgEncSize + "&JS_SIZE=" + jsEncSize + "&elementCount=" + _BU.resCnt() + "&cartValue=" + CVL + "&ONumBr=" + ONumBr + "&orderTND=" + orderTND + "&eT=" + eT + "&siteID=mountainhardwear500z&txnName=" + TxN + "&campaign=" + bttCamp + "&AB=" + AB + "&DCTR=" + DCTR + "&top=" + top + "&bv=" + BVL + "&bvzn=" + _bUA.bvzn + "&os=" + _bUA.os + "&device=" + _bUA.device + "&browser=" + _bUA.browser + "&tul=" + t_ul + "&EUOS=" + _bUA.euos + "&currencyCode=" + currencyCode;
        THR = pgTm;
      } else {
        pgTM = 0;
        THR = pgTm;
        if (t_ul > 0) {
          pgTM = NTM - t_ul;
        } else {
          pgTM = NTM - LTM;
        }
        let _bUA = _bttUACH;
        params = "pageName=" + PNM + "&nst=" + t_ul + "&unloadEventStart=" + t_ul + "&pageType=" + PTDB + "&pageValue=" + PGV + "&pgTm=" + pgTM + "&navigationType=1" + "&cartValue=" + CVL + "&ONumBr=" + ONumBr + "&eT=" + eT + "&siteID=mountainhardwear500z&txnName=" + TxN + "&campaign=" + bttCamp + "&top=" + top + "&bv=" + BVL + "&bvzn=" + _bUA.bvzn + "&os=" + _bUA.os + "&device=" + _bUA.device + "&browser=" + _bUA.browser + "&EUOS=" + _bUA.euos;
      }
      if (RDs < 0) {
        RDs = 0;
      }
      if (RDe < 0) {
        RDe = 0;
      }
      if (SCsT < 0) {
        SCsT = 0;
      }
      _bttUtil.tagVars = {
        pageName: PNM,
        pageType: PTDB,
        txnName: TxN,
        AB: AB,
        DCTR: DCTR,
        CmpN: CmpN,
        CmpS: CmpS,
        CmpM: CmpM,
        nStart: nst,
        sID: BTT_X0siD,
        gID: BTT_GUID,
        pgTm: pgTm,
        URL: btt_URL
      };
      return [params, nst, PNM, TxN, THR, RDs, RDe, Fs, DLs, DLe, CsT, SCsT, CeT, RqT, RsT, ReT, dU, bttCamp, PTDB];
    }
    function GTM() {
      var m = new Date().getTime();
      return m;
    }
  })();
})();
(function () {
  var _bE = window._bttErr;
  var origErr = window.onerror;
  if (typeof _bttErrorListener === 'undefined') {
    window.onerror = function (msg, url, lineNo, columnNo, error) {
      origErr && origErr(msg, url, lineNo, columnNo, error);
      _bE.capture(msg, url, lineNo, columnNo, error);
      return false;
    };
    try {
      document.addEventListener('securitypolicyviolation', function (e) {
        window._bttErr.captSec(e.blockedURI, e.lineNumber, +new Date(), e.sourceFile, e.disposition);
      });
    } catch (e) {}
  }
  if (typeof _bttErrorListener !== "undefined") {
    var e = _bttErrorListener,
      a = e.get('a'),
      b = e.get('b'),
      aL = a.length,
      bL = b.length;
    if (aL > 0) {
      for (var i = 0; i < aL; i++) {
        _bE.capture(a[i].message, a[i].filename, a[i].lineno, a[i].colno, a[i].error);
      }
    }
    if (bL > 0) {
      for (var i = 0; i < bL; i++) {
        _bE.captSec(b[i][0], b[i][1], b[i][2], b[i][3], b[i][4]);
      }
    }
  }
})();
const originalLocalStorageSetItem = localStorage.setItem;
window.bttUT = {
  rdy: 0,
  GUID: 0,
  GUIDC: 0,
  doy_diff: 0,
  lclst: function (k, v) {
    if (typeof Storage !== "undefined") {
      localStorage.setItem(k, v);
    }
  },
  lclgt: function (k, t) {
    if (typeof Storage !== "undefined") {
      var r = 0;
      if (localStorage.getItem(k) !== null) {
        if (t == "json") {
          try {
            var lclJSON = JSON.parse(localStorage.getItem(k));
            var thisTM = new Date().getTime();
            if (lclJSON.hasOwnProperty('GUID')) {
              r = JSON.stringify(lclJSON);
            } else if (lclJSON.hasOwnProperty('expires')) {
              if (lclJSON.expires > thisTM) {
                r = lclJSON.value;
              }
            }
          } catch (e) {
            console.log(19 + " " + e);
            if (k.indexOf("-campaign") != -1) {
              r = 0;
            } else {
              r = localStorage.getItem(k);
            }
          }
        } else {
          r = localStorage.getItem(k);
        }
      }
      return r;
    }
  },
  timingObj: {},
  measuredMarksArray: [],
  mark: function (key) {
    window.bttUT.timingObj[key] = new Date().getTime();
  },
  measure: function (name, startKey, endKey) {
    if (window.bttUT.timingObj.hasOwnProperty(endKey) && window.bttUT.timingObj.hasOwnProperty(startKey) && name != undefined) {
      var duration = window.bttUT.timingObj[endKey] - window.bttUT.timingObj[startKey];
      window.bttUT.measuredMarksArray.push({
        "duration": duration,
        "name": name
      });
    }
  },
  checkUT: function () {
    var pm;
    try {
      var p = window.performance;
      pm = p.getEntriesByType("measure");
    } catch (e) {
      pm = undefined;
    }
    if (window.hasOwnProperty('performance') && pm != undefined && p.mark != undefined && p.measure != undefined) {
      return true;
    } else {
      return false;
    }
  },
  GTM: function () {
    var m = new Date().getTime();
    return m;
  },
  resIndex: 0,
  resObj: {},
  vtNaming: function (arg) {
    try {
      var pageGroup = "Custom Timer",
        pageName,
        txnName,
        ajaxUrl = "",
        postData = "";
      if (arg.hasOwnProperty('ajaxUrl')) {
        ajaxUrl = arg.ajaxUrl;
      }
      if (arg.hasOwnProperty('postData')) {
        postData = arg.postData;
      }
      if (arg.hasOwnProperty('type') && arg.type === "start") {
        if (ajaxUrl.indexOf('Sites-MountainHardwear_US-Site/en_US/CheckoutServices-SubmitPayment') != -1) {
          pageName = 'Checkout Payment - VT';
          txnName = 'eCommerce';
          pageGroup = 'Virtual Turn';
        } else if (ajaxUrl.indexOf('Sites-MountainHardwear_US-Site/en_US/CheckoutShippingServices-SubmitShipping') != -1) {
          pageName = 'Checkout Shipping - VT';
          txnName = 'eCommerce';
          pageGroup = 'Virtual Turn';
        } else if (ajaxUrl.indexOf('Sites-MountainHardwear_US-Site/en_US/Cart-AddProduct') != -1) {
          pageName = 'Add to Cart - VT';
          txnName = 'eCommerce';
          pageGroup = 'Virtual Turn';
        } else if (ajaxUrl.indexOf('Cart-MiniCartShow') != -1) {
          pageName = 'Mini-Cart-VT';
          txnName = 'eCommerce';
          pageGroup = 'Virtual Turn';
        }
      } else if (arg.hasOwnProperty('type') && arg.type === "end") {
        if (ajaxUrl.indexOf('Sites-MountainHardwear_US-Site/en_US/CheckoutServices-SubmitPayment') != -1) {
          pageName = 'Checkout Payment - VT';
          txnName = 'eCommerce';
          pageGroup = 'Virtual Turn';
        } else if (ajaxUrl.indexOf('Sites-MountainHardwear_US-Site/en_US/CheckoutShippingServices-SubmitShipping') != -1) {
          pageName = 'Checkout Shipping - VT';
          txnName = 'eCommerce';
          pageGroup = 'Virtual Turn';
        } else if (ajaxUrl.indexOf('Sites-MountainHardwear_US-Site/en_US/Cart-AddProduct') != -1) {
          pageName = 'Add to Cart - VT';
          txnName = 'eCommerce';
          pageGroup = 'Virtual Turn';
        } else if (ajaxUrl.indexOf('Cart-MiniCartShow') != -1) {
          pageName = 'Mini-Cart-VT';
          txnName = 'eCommerce';
          pageGroup = 'Virtual Turn';
        }
      }
      if (pageName != undefined && txnName != undefined) {
        return {
          pageName: pageName,
          txnName: txnName,
          pageGroup: pageGroup
        };
      } else {
        return {
          pageName: undefined,
          txnName: undefined,
          pageGroup: undefined
        };
      }
    } catch (e) {
      console.log("23 " + e);
    }
  },
  vtFetchNaming: function (arg) {
    try {
      var pageGroup = "Custom Timer",
        pageName,
        txnName,
        ajaxUrl = "",
        postData = "";
      if (arg.hasOwnProperty('ajaxUrl')) {
        ajaxUrl = arg.ajaxUrl;
      }
      if (arg.hasOwnProperty('postData')) {
        postData = arg.postData;
      }
      if (arg.hasOwnProperty('type') && arg.type === "start") {} else if (arg.hasOwnProperty('type') && arg.type === "end") {}
      if (pageName != undefined && txnName != undefined) {
        return {
          pageName: pageName,
          txnName: txnName,
          pageGroup: pageGroup
        };
      } else {
        return {
          pageName: undefined,
          txnName: undefined,
          pageGroup: undefined
        };
      }
    } catch (e) {
      console.log("23 " + e);
    }
  },
  cors: function (method, url) {
    var bx = new XMLHttpRequest();
    if (bx != null) {
      bx.open(method, url, true);
      bx.withCredentials = true;
    } else if (typeof XDomainRequest != "undefined") {
      bx = new XDomainRequest();
      bx.open(method, url);
    } else {
      bx = null;
    }
    return bx;
  },
  getIndex: function (arr, objKey, objVal) {
    var arrLen = arr.length,
      searchIndex = 0;
    for (var i = 0; i < arrLen; i++) {
      if (arr[i][objKey] === objVal) {
        return i;
      }
    }
  },
  getResIndex: function () {
    try {
      var resLen = performance.getEntriesByType('resource').length;
    } catch (e) {
      resLen = false;
    }
    if (resLen === false) {
      return resLen;
    }
    return resLen - 1;
  },
  getNstDif: function (v, d) {
    return v - d > 0 ? v - d : 0;
  },
  sendResPost: function (p, thisIndex) {
    try {
      var startUrl,
        _b = bttUT,
        resIndex;
      if (p.hasOwnProperty('startUrl')) {
        startUrl = p.startUrl;
      }
      var url = 'https://d.btttag.com/wcdv02.rcv?siteID=mountainhardwear500z&nStart=' + p.nStart + '&pageName=' + p.pageName + '&txnName=' + p.txnName + "&trig=" + p.trig + "&sessionID=" + p.sID + "&WCDtt=" + p.WCDtt + "&pgTm=" + p.pgTm + "&NVSTR=" + p.NVSTR + "&pageType=" + p.pageType;
      var RL = performance.getEntriesByType("resource");
      var nstDif = p.nStart - performance.timing.navigationStart;
      if (typeof thisIndex != 'undefined') {
        resIndex = thisIndex;
      } else if (typeof startUrl != 'undefined') {
        resIndex = this.getIndex(RL, "name", startUrl);
      }
      var RSi = [],
        c = 0;
      if (p.hasOwnProperty('fullPage') && p.fullPage === 'true' && p.hasOwnProperty('bRes') && thisIndex == 0) {
        RSi[0] = {};
        for (var i in p.bRes) {
          RSi[0][i] = p.bRes[i];
        }
        c++;
      }
      for (var i = resIndex; i < RL.length - 1; i++) {
        resIndex++;
        var b = RL[i].name.split('?')[0];
        var b_a = b.indexOf('://') + 3,
          b_b = b.indexOf('.', b_a),
          bLen = b.split('/').length,
          f = b.split('/')[bLen - 1],
          jStr = '',
          dsz = 0,
          esz = 0,
          xsz = 0;
        var z = _bttUtil.getDomain(b);
        if (f.length < 1) {
          f = '...' + b.substring(b.length - 125, b.length);
        }
        if (RL[i].decodedBodySize) {
          dsz = RL[i].decodedBodySize;
        }
        if (RL[i].encodedBodySize) {
          esz = RL[i].encodedBodySize;
        }
        if (RL[i].transferSize) {
          xsz = RL[i].transferSize;
        }
        RSi[c] = {
          dmn: z,
          f: f,
          URL: b,
          cE: Math.round(_b.getNstDif(RL[i].connectEnd, nstDif)),
          cS: Math.round(_b.getNstDif(RL[i].connectStart, nstDif)),
          dLE: Math.round(_b.getNstDif(RL[i].domainLookupEnd, nstDif)),
          dLS: Math.round(_b.getNstDif(RL[i].domainLookupStart, nstDif)),
          d: Math.round(RL[i].duration),
          fS: Math.round(_b.getNstDif(RL[i].fetchStart, nstDif)),
          rdE: Math.round(_b.getNstDif(RL[i].redirectEnd, nstDif)),
          rdS: Math.round(_b.getNstDif(RL[i].redirectStart, nstDif)),
          rqS: Math.round(_b.getNstDif(RL[i].requestStart, nstDif)),
          rE: Math.round(_b.getNstDif(RL[i].responseEnd, nstDif)),
          rS: Math.round(_b.getNstDif(RL[i].responseStart, nstDif)),
          sCS: Math.round(_b.getNstDif(RL[i].secureConnectionStart, nstDif)),
          sT: Math.round(_b.getNstDif(RL[i].startTime, nstDif)),
          e: RL[i].entryType,
          i: RL[i].initiatorType,
          h: b.substring(b_a, b_b),
          dz: dsz,
          ez: esz,
          xz: xsz
        };
        c++;
      }
      var RSobj = {
        url: location.href,
        data: RSi
      };
      jStr = JSON.stringify(RSobj);
      var SnDENC = btoa(jStr);
      var bx = this.cors('POST', url);
      bx.send(SnDENC);
    } catch (e) {}
    return resIndex;
  },
  pTNaming: function (url) {
    var pageGroup = "Custom Timer",
      pageName,
      txnName;
    if (pageName != undefined && txnName != undefined) {
      return {
        pageName: pageName,
        txnName: txnName,
        pageGroup: pageGroup
      };
    } else {
      return {
        pageName: undefined,
        txnName: undefined,
        pageGroup: undefined
      };
    }
  },
  pTFetchNaming: function (url) {
    var pageGroup = "Custom Timer",
      pageName,
      txnName;
    if (pageName != undefined && txnName != undefined) {
      return {
        pageName: pageName,
        txnName: txnName,
        pageGroup: pageGroup
      };
    } else {
      return {
        pageName: undefined,
        txnName: undefined,
        pageGroup: undefined
      };
    }
  },
  ptNamingLogicCheck: function (sub, srchStr) {
    var flg = false;
    if (sub.length > 0) {
      if (Array.isArray(sub)) {
        for (i = 0; i < sub.length; i++) {
          flg = srchStr.indexOf(sub[i]) != -1 ? true : false;
        }
      } else {
        flg = srchStr.indexOf(sub) != -1 ? true : false;
      }
    } else {
      flg = true;
    }
    return flg;
  },
  pTNamingOBJ: function (searchObj) {
    var pageGroup = "AJAX";
    try {
      var rulesJSON = JSON.parse('{}');
      for (var index in rulesJSON) {
        var rule = rulesJSON[index],
          xhrURL = "",
          pstDt = "",
          pgUrl = window.location.href,
          pgFlg = false,
          xhrFlg = false,
          pstFlg = false,
          pgSb = rule['page_url_substring'],
          xhrSb = rule['ajax_substring'],
          pstSb = rule['post_data_substring'],
          pageName,
          txnName,
          pageGroup;
        if (searchObj.hasOwnProperty('ajaxURL')) {
          xhrURL = searchObj.ajaxURL;
        }
        if (searchObj.hasOwnProperty('postData')) {
          pstDt = searchObj.postData;
        }
        if (typeof xhrURL == 'undefined') {
          xhrURL = '';
        }
        if (typeof pstDt == 'undefined') {
          pstDt = '';
        }
        pgFlg = window.bttUT.ptNamingLogicCheck(pgSb, pgUrl);
        xhrFlg = window.bttUT.ptNamingLogicCheck(xhrSb, xhrURL);
        pstFlg = window.bttUT.ptNamingLogicCheck(pstSb, pstDt);
        if (pgFlg == true && xhrFlg == true && pstFlg == true) {
          pageName = rule['pageName'];
          txnName = rule['txnName'];
          pageGroup = rule['pageGroup'];
          break;
        }
      }
    } catch (e) {
      console.log(5 + " " + e);
    }
    if (pageName != undefined && txnName != undefined) {
      return {
        pageName: pageName,
        txnName: txnName,
        pageGroup: pageGroup
      };
    } else {
      return {
        pageName: undefined,
        txnName: undefined,
        pageGroup: undefined
      };
    }
  },
  start: function (arg) {
    if (typeof arg !== 'object') {
      return false;
    }
    var pageName = arg.pageName,
      txnName = arg.txnName,
      pageGroup = "--Custom Timer",
      type = arg.type,
      key = "",
      captureResources = true,
      uniqueKey = arg.uniqueKey,
      _BF = _bttFPS;
    if (arg.hasOwnProperty('captureResources')) {
      captureResources = arg.captureResources;
    }
    if (!_bttUtil.bttVT) {
      _bttUtil.bttVT = true;
      if (!_bttUtil.landSent) {
        const vtEvent = new Event("bttVT");
        window.dispatchEvent(vtEvent);
      }
    }
    if (pageName && txnName) {
      if (_bttUtil.curRDY) {
        _bttUtil.fireBeacon('vt');
      }
      if (arg.hasOwnProperty('key')) {
        key = "--" + arg.key;
      }
      if (arg.hasOwnProperty('pageGroup')) {
        pageGroup = "--" + arg.pageGroup;
      }
      if (captureResources === true) {
        if (this.getResIndex() != false) {
          this.resObj[txnName + "--" + pageName + pageGroup + key] = this.getResIndex();
        }
      }
      try {
        if (window.bttUT.checkUT()) {
          performance.mark(txnName + "--" + pageName + pageGroup + key + "--start");
        } else {
          window.bttUT.mark(txnName + "--" + pageName + pageGroup + key + "--start");
        }
        _BF.startFps();
      } catch (e) {
        console.log("6a " + e);
      }
    } else if (uniqueKey) {
      if (_bttUtil.curRDY) {
        _bttUtil.fireBeacon('vt');
      }
      if (captureResources === true) {
        if (this.getResIndex() != false) {
          this.resObj[uniqueKey] = this.getResIndex();
        }
      }
      try {
        if (window.bttUT.checkUT()) {
          performance.mark(uniqueKey + "--start");
        } else {
          window.bttUT.mark(uniqueKey + "--start");
        }
        _BF.startFps();
      } catch (e) {
        console.log("6b " + e);
      }
    }
  },
  update: function (arg) {
    if (typeof arg !== 'object') {
      return false;
    }
    var pageName = arg.pageName,
      txnName = arg.txnName,
      pageGroup = "--Custom Timer",
      type = arg.type,
      key = "",
      uniqueKey = arg.uniqueKey;
    if (pageName && txnName && type) {
      if (arg.hasOwnProperty('key')) {
        key = "--" + arg.key;
      }
      if (arg.hasOwnProperty('pageGroup')) {
        pageGroup = "--" + arg.pageGroup;
      }
      try {
        if (window.bttUT.checkUT()) {
          performance.mark(txnName + "--" + pageName + pageGroup + key + "--" + type);
        } else {
          window.bttUT.mark(txnName + "--" + pageName + pageGroup + key + "--" + type);
        }
      } catch (e) {
        console.log("7a " + e);
      }
    } else if (uniqueKey) {
      try {
        if (window.bttUT.checkUT()) {
          performance.mark(uniqueKey + "--" + type);
        } else {
          window.bttUT.mark(uniqueKey + "--" + type);
        }
      } catch (e) {
        console.log("7b " + e);
      }
    }
  },
  end: function (arg) {
    if (typeof arg !== 'object') {
      return false;
    }
    var pageName = arg.pageName,
      txnName = arg.txnName,
      pageGroup = "--Custom Timer",
      key = "",
      PGV = 0,
      CVL = 0,
      brandVal = 0,
      pageURL = arg.pageURL === undefined ? window.location.href : arg.pageURL;
    var pageVal = PGV != 0 && arg.pageVal === undefined ? PGV : arg.pageVal;
    var cartVal = CVL != 0 && arg.cartVal === undefined ? CVL : arg.cartVal;
    var brandVal = arg.brandVal === undefined ? 0 : arg.brandVal;
    if (pageName && txnName) {
      var optionalArgs = {};
      if (arg.hasOwnProperty('key')) {
        key = "--" + arg.key;
        optionalArgs.key = arg.key;
      }
      if (arg.hasOwnProperty('pageGroup')) {
        pageGroup = "--" + arg.pageGroup;
        optionalArgs.pageGroup = arg.pageGroup;
      } else {
        optionalArgs.pageGroup = "Custom Timer";
      }
      try {
        if (arg.hasOwnProperty('uniqueKey') && arg.uniqueKey.length > 0) {
          var uniqueKey = optionalArgs.uniqueKey = arg.uniqueKey;
          if (window.bttUT.checkUT()) {
            performance.mark(uniqueKey + "--end");
          } else {
            window.bttUT.mark(uniqueKey + "--end");
          }
        } else {
          if (window.bttUT.checkUT()) {
            performance.mark(txnName + "--" + pageName + pageGroup + key + "--end");
          } else {
            window.bttUT.mark(txnName + "--" + pageName + pageGroup + key + "--end");
          }
        }
        setTimeout(function () {
          try {
            window.bttUT.bttMeasure(pageName, txnName, pageURL, pageVal, cartVal, brandVal, optionalArgs);
          } catch (e) {
            console.log("30" + e);
          }
        }, 2000);
      } catch (e) {
        console.log("8 " + e);
      }
    }
  },
  checkMark: function (v) {
    try {
      if (performance.getEntriesByName(v, 'mark').length > 0) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  },
  cku: function (c_name) {
    var i,
      x,
      y,
      ARRc = document.cookie.split(";");
    for (i = 0; i < ARRc.length; i++) {
      x = ARRc[i].substr(0, ARRc[i].indexOf("="));
      y = ARRc[i].substr(ARRc[i].indexOf("=") + 1);
      x = x.replace(/^\s+|\s+$/g, "");
      if (x == c_name) {
        return unescape(y);
      }
    }
    return 0;
  },
  bttMeasure: function (name, txn, pageURL, pageVal, cartVal, brandVal, optionalArgs) {
    var key = "",
      pageGroup = "",
      pageGroupNoDash = "AJAX",
      measureKey = "",
      perfMeasure,
      _BU = window._bttUtil,
      _BF = window._bttFPS;
    if (typeof optionalArgs != 'undefined') {
      if (optionalArgs.hasOwnProperty('key')) {
        key = "--" + optionalArgs.key;
      }
      if (optionalArgs.hasOwnProperty('pageGroup')) {
        pageGroup = "--" + optionalArgs.pageGroup;
        pageGroupNoDash = optionalArgs.pageGroup;
      }
    }
    if (typeof optionalArgs != 'undefined' && optionalArgs.hasOwnProperty('uniqueKey')) {
      measureKey = optionalArgs.uniqueKey;
    } else {
      measureKey = txn + "--" + name + pageGroup + key;
    }
    if (this.checkUT()) {
      try {
        performance.measure(measureKey + "--domInteractive", measureKey + "--start", measureKey + "--domInt");
      } catch (e) {}
      try {
        performance.measure(measureKey + "--domContentLoaded", measureKey + "--start", measureKey + "--domContLoaded");
      } catch (e) {}
      try {
        if (window.bttUT.checkMark(measureKey + "--start") && window.bttUT.checkMark(measureKey + "--end")) {
          performance.measure(measureKey, measureKey + "--start", measureKey + "--end");
        } else {
          return false;
        }
      } catch (e) {
        return false;
      }
      try {
        perfMeasure = performance.getEntriesByType("measure");
      } catch (e) {
        return false;
      }
    } else {
      try {
        window.bttUT.measure(measureKey + "--domInteractive", measureKey + "--start", measureKey + "--domInt");
      } catch (e) {}
      try {
        window.bttUT.measure(measureKey + "--domContentLoaded", measureKey + "--start", measureKey + "--domContLoaded");
      } catch (e) {}
      window.bttUT.measure(measureKey, measureKey + "--start", measureKey + "--end");
      var perfMeasure = window.bttUT.measuredMarksArray;
    }
    var perfName,
      perfDuration,
      perfStartTime = 0,
      domContentLoadedEnd = "",
      domInteractive = "",
      dclEpoch = 0,
      domIntEpoch = 0,
      dclDuration,
      domIntDuration,
      wcd = 0,
      bttCamp = "",
      AB = "Default",
      CmpS = "Other",
      CmpM = "None",
      CmpN = "",
      DCTR = "Default",
      RefURL = document.referrer.slice(0, 700),
      gCS = {},
      campSrcKey = 'mountainhardwear500z-campSource',
      campMedKey = 'mountainhardwear500z-campMedium',
      elementCount = 0,
      szObj = {},
      totalPgEncSize = 0,
      totalPgDecSize = 0,
      imgEncSize = 0,
      jsEncSize = 0;
    for (var i = 0; i < perfMeasure.length; i++) {
      if (perfMeasure[i].name === measureKey) {
        perfName = perfMeasure[i].name;
        perfDuration = Math.round(perfMeasure[i].duration);
        perfStartTime = Math.round(perfMeasure[i].startTime);
      }
      if (perfMeasure[i].name === measureKey + "--domInteractive") {
        domIntDuration = Math.round(perfMeasure[i].duration);
      }
      if (perfMeasure[i].name === measureKey + "--domContentLoaded") {
        dclDuration = Math.round(perfMeasure[i].duration);
      }
    }
    var BTT_Before = window._bttUtil.WP.timing.navigationStart + perfStartTime;
    if (domIntDuration != undefined) {
      domIntEpoch = BTT_Before + domIntDuration;
      domInteractive = "&domInteractive=" + domIntEpoch;
    }
    if (dclDuration != undefined) {
      dclEpoch = BTT_Before + dclDuration;
      domContentLoadedEnd = "&domContentLoadedEnd=" + dclEpoch;
    }
    if (performance.clearMarks != undefined) {
      performance.clearMarks(measureKey + "--start");
      performance.clearMarks(measureKey + "--end");
    }
    try {
      if (function () {
        try {
          var x = location.href.split("utm_campaign=")[1].split("&")[0];
          var y = decodeURIComponent(x);
          return y;
        } catch (e) {
          return void 0;
        }
      }() != undefined) {
        bttCamp = function () {
          try {
            var x = location.href.split("utm_campaign=")[1].split("&")[0];
            var y = decodeURIComponent(x);
            return y;
          } catch (e) {
            return void 0;
          }
        }();
      }
    } catch (err) {}
    if (window.bttUT.lclgt("mountainhardwear500z-campaign", "json") != 0) {
      bttCamp = window.bttUT.lclgt("mountainhardwear500z-campaign", "json");
    }
    var thisEXPs = new Date().getTime() + 1800000;
    window.bttUT.lclst("mountainhardwear500z-campaign", '{"value":"' + bttCamp + '","expires":"' + thisEXPs + '"}');
    if (window.bttUT.lclgt("mountainhardwear500z-datacenter", "json") != 0) {
      DCTR = window.bttUT.lclgt("mountainhardwear500z-datacenter", "json");
    }
    window.bttUT.lclst("mountainhardwear500z-datacenter", '{"value":"' + DCTR + '","expires":"' + thisEXPs + '"}');
    try {
      if (function () {
        try {
          if (Yo.rum.get('optState').optState) {
            return Yo.rum.get('optState').optState;
          } else {
            return void 0;
          }
        } catch (e) {
          return void 0;
        }
      }() != undefined) {
        AB = function () {
          try {
            if (Yo.rum.get('optState').optState) {
              return Yo.rum.get('optState').optState;
            } else {
              return void 0;
            }
          } catch (e) {
            return void 0;
          }
        }();
      }
    } catch (err) {}
    if (window.bttUT.lclgt("mountainhardwear500z-abtest", "json") != 0) {
      AB = window.bttUT.lclgt("mountainhardwear500z-abtest", "json");
    }
    if (AB != "Default") {
      window.bttUT.lclst("mountainhardwear500z-abtest", '{"value":"' + AB + '","expires":"' + thisEXPs + '"}');
    }
    var pageName = name;
    var txnName = txn;
    var siteID = "mountainhardwear500z";
    var PGV = pageVal === undefined ? 0 : pageVal;
    var CVL = cartVal === undefined ? 0 : cartVal;
    var BVL = brandVal === undefined ? 0 : brandVal;
    var ONumBr = 0;
    var orderTND = 0;
    var CV4 = 0;
    var orders = 0;
    var currencyCode = "";
    if (CVL > 0 || PGV > 0 || BVL > 0) {
      try {
        currencyCode = "USD";
      } catch (e) {}
    }
    var bttssI = "undefined" != typeof window.BTTtag_ssI ? window.BTTtag_ssI : "22222222";
    var TO = new Date(),
      start = new Date(TO.getFullYear(), 0, 0),
      diff = TO - start,
      doy = Math.floor(diff / 86400000),
      doy_diff = 0;
    var bttGUID = bttssI;
    var r = JSON.parse(window.bttUT.lclgt("BTT_GUID_PV"));
    if (r.hasOwnProperty('ajaxCartValDOY') && r.hasOwnProperty('ajaxCartVal')) {
      var bttGUID = r.GUID,
        LPurD = r.ajaxCartValDOY,
        LPurV = r.ajaxCartVal;
    } else {
      var bttGUID = r.GUID,
        LPurD = doy,
        LPurV = 0;
    }
    doy_diff = doy - LPurD;
    try {
      var prsdGUIDC = window.bttUT.GUIDC;
      if (CVL != 0) {
        var orderNum = window.bttUT.lclgt("mountainhardwear500z-" + ONumBr);
        if (ONumBr != 0 && orderNum != 0 && orderNum == CVL) {
          PGV = CVL;
          CVL = 0;
        } else if (ONumBr == 0 && CVL > 0 && CVL == LPurV && doy_diff < 3) {
          PGV = CVL;
          CVL = 0;
        } else {
          LPurV = CVL;
          LPurD = doy;
        }
      }
      r.ajaxCartVal = LPurV;
      r.ajaxCartValDOY = LPurD;
      window.bttUT.GUIDC = JSON.stringify(r);
      if (typeof Storage !== "undefined") {
        window.bttUT.lclst("BTT_GUID_PV", window.bttUT.GUIDC);
        if (window.bttUT.lclgt("mountainhardwear500z-" + ONumBr) == 0) {
          window.bttUT.lclst("mountainhardwear500z-" + ONumBr, CVL);
        }
      }
    } catch (e) {
      console.log(20 + " " + e);
    }
    var BTT_After = window.bttUT.GTM(),
      pgTM = perfDuration,
      docRef = document.referrer,
      btt_URL = location.href,
      PNDB_enc = pageName,
      BTT_TxName_enc = txnName;
    var NvsR = 0;
    if (bttGUID === bttssI) {
      NvsR = 0;
    } else {
      NvsR = 1;
    }
    try {
      var gCS = JSON.parse('{"1":{"sourceName":"Google","sourceUrlSearch":"google.com","pageUrlSearch":""},"3":{"sourceName":"Bing","sourceUrlSearch":"bing.com","pageUrlSearch":""},"5":{"sourceName":"Yahoo","sourceUrlSearch":"yahoo.com","pageUrlSearch":""},"9":{"sourceName":"Facebook","sourceUrlSearch":"facebook.com","pageUrlSearch":""},"11":{"sourceName":"Yahoo","sourceUrlSearch":"yahoo.com","pageUrlSearch":""},"13":{"sourceName":"Twitter","sourceUrlSearch":"twitter.com","pageUrlSearch":""},"15":{"sourceName":"LinkedIn","sourceUrlSearch":"linkedin.com","pageUrlSearch":""},"17":{"sourceName":"Monetate","sourceUrlSearch":"monetate.com","pageUrlSearch":""},"21":{"sourceName":"Instagram","sourceUrlSearch":"instagram.com","pageUrlSearch":""},"23":{"sourceName":"Facebook","sourceUrlSearch":"","pageUrlSearch":"fbclid"},"25":{"sourceName":"Google","sourceUrlSearch":"","pageUrlSearch":"gclid"}}');
    } catch (e) {}
    var CmpSJson = window.bttUT.lclgt(campSrcKey, "json");
    if (CmpSJson == 0) {
      if (RefURL.length === 0) {
        CmpS = "Direct";
        CmpM = "None";
      }
      for (var src in gCS) {
        var refSrch = gCS[src].sourceUrlSearch,
          pgSrch = gCS[src].pageUrlSearch,
          rFlg = false,
          pFlg = false;
        if (refSrch !== null && refSrch != "") {
          rFlg = refSrch;
        } else {
          rFlg = true;
        }
        if (pgSrch !== null && pgSrch != "") {
          pFlg = pgSrch;
        } else {
          pFlg = true;
        }
        if (rFlg === true && pFlg === true) {
          continue;
        }
        if (rFlg != true) {
          rFlg = _BU.trfChk(rFlg, docRef);
        }
        if (pFlg != true) {
          pFlg = _BU.trfChk(pFlg, btt_URL);
        }
        if (rFlg === true && pFlg === true) {
          CmpS = gCS[src].sourceName;
          break;
        }
      }
      if (CmpS === "Other") {
        CmpS = window._bttUtil.getDomain(document.referrer);
        if (CmpS === "NoDomain") {
          CmpS = "Other";
        }
      }
    } else {
      CmpS = CmpSJson;
    }
    window.bttUT.lclst(campSrcKey, '{"value":"' + CmpS + '","expires":' + thisEXPs + '}');
    try {
      var glbCmpMed = [{
        "mediumName": "Display",
        "referrerSearch": "",
        "hrefSearch": "fbclid=",
        "customCode": ""
      }, {
        "mediumName": "Affiliate",
        "referrerSearch": "",
        "hrefSearch": "affiliate",
        "customCode": ""
      }, {
        "mediumName": "Email",
        "referrerSearch": "",
        "hrefSearch": "cm_mmc=InternalEmail",
        "customCode": ""
      }, {
        "mediumName": "Email",
        "referrerSearch": "",
        "hrefSearch": "utm_medium=email",
        "customCode": ""
      }, {
        "mediumName": "Email",
        "referrerSearch": "",
        "hrefSearch": "cm_mmc=EMAIL",
        "customCode": ""
      }, {
        "mediumName": "Email",
        "referrerSearch": "",
        "hrefSearch": "utm_medium=Email",
        "customCode": ""
      }, {
        "mediumName": "Paid Search",
        "referrerSearch": "",
        "hrefSearch": "gclid",
        "customCode": ""
      }, {
        "mediumName": "Paid Search",
        "referrerSearch": "bing.com",
        "hrefSearch": "msclkid",
        "customCode": ""
      }, {
        "mediumName": "Paid Search",
        "referrerSearch": "yahoo.com",
        "hrefSearch": "msclkid",
        "customCode": ""
      }, {
        "mediumName": "Paid Search",
        "referrerSearch": "aol.com",
        "hrefSearch": "msclkid",
        "customCode": ""
      }, {
        "mediumName": "Paid Search",
        "referrerSearch": "",
        "hrefSearch": "utm_medium=CPC|||utm_source=",
        "customCode": ""
      }, {
        "mediumName": "Paid Search",
        "referrerSearch": "",
        "hrefSearch": "utm_medium=PPC|||utm_source=",
        "customCode": ""
      }, {
        "mediumName": "Paid Search",
        "referrerSearch": "",
        "hrefSearch": "utm_medium=ppc|||utm_source=",
        "customCode": ""
      }, {
        "mediumName": "Paid Search",
        "referrerSearch": "",
        "hrefSearch": "utm_medium=cpc|||utm_source=",
        "customCode": ""
      }, {
        "mediumName": "Display",
        "referrerSearch": "",
        "hrefSearch": "dclid",
        "customCode": ""
      }, {
        "mediumName": "Display",
        "referrerSearch": "",
        "hrefSearch": "source=fb",
        "customCode": ""
      }, {
        "mediumName": "Display",
        "referrerSearch": "",
        "hrefSearch": "source=ig",
        "customCode": ""
      }, {
        "mediumName": "Display",
        "referrerSearch": "",
        "hrefSearch": "source=mg",
        "customCode": ""
      }, {
        "mediumName": "Display",
        "referrerSearch": "",
        "hrefSearch": "source=an",
        "customCode": ""
      }, {
        "mediumName": "Display",
        "referrerSearch": "",
        "hrefSearch": "utm_medium=CPM|||utm_source=",
        "customCode": ""
      }, {
        "mediumName": "Display",
        "referrerSearch": "",
        "hrefSearch": "utm_medium=banner|||utm_source=",
        "customCode": ""
      }, {
        "mediumName": "Display",
        "referrerSearch": "",
        "hrefSearch": "utm_medium=display|||utm_source=",
        "customCode": ""
      }, {
        "mediumName": "Display",
        "referrerSearch": "",
        "hrefSearch": "utm_medium=cpm|||utm_source=",
        "customCode": ""
      }, {
        "mediumName": "Affiliate",
        "referrerSearch": "rakuten.com/",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Affiliate",
        "referrerSearch": "rakuten.ca",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Affiliate",
        "referrerSearch": "dealsea.com",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Social",
        "referrerSearch": "linkedin.com",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Social",
        "referrerSearch": "facebook.com",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Social",
        "referrerSearch": "tumblr.com",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Social",
        "referrerSearch": "twitter.com",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Social",
        "referrerSearch": "instagram.com",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Social",
        "referrerSearch": "plus.google.com",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Social",
        "referrerSearch": "plus.url.google.com",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Social",
        "referrerSearch": "pinterest.com",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Social",
        "referrerSearch": "https://t.co",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Social",
        "referrerSearch": "like2buy.curalate",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Display",
        "referrerSearch": "",
        "hrefSearch": "cm_mmc=DIS",
        "customCode": ""
      }, {
        "mediumName": "Social",
        "referrerSearch": "",
        "hrefSearch": "cm_mmc=TW",
        "customCode": ""
      }, {
        "mediumName": "Social",
        "referrerSearch": "",
        "hrefSearch": "cm_mmc=FB",
        "customCode": ""
      }, {
        "mediumName": "Social",
        "referrerSearch": "",
        "hrefSearch": "cm_mmc=IG",
        "customCode": ""
      }, {
        "mediumName": "Organic Search",
        "referrerSearch": "bing",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Organic Search",
        "referrerSearch": "google",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Organic Search",
        "referrerSearch": "search.yahoo.com",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Organic Search",
        "referrerSearch": "www.ask.com",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Organic Search",
        "referrerSearch": "isearch.avg.com",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Organic Search",
        "referrerSearch": "baidu.com",
        "hrefSearch": "",
        "customCode": ""
      }, {
        "mediumName": "Organic Search",
        "referrerSearch": "yandex",
        "hrefSearch": "",
        "customCode": ""
      }];
    } catch (e) {}
    try {} catch (e) {}
    var CmpMJson = window.bttUT.lclgt(campMedKey, "json");
    if (CmpMJson == 0) {
      for (var src in glbCmpMed) {
        var refSrch,
          hrefSrch,
          custCodeSrch,
          custCodeVal,
          refFlag = false,
          hrefFlag = false,
          custCodeFlag = false;
        if (glbCmpMed[src].referrerSearch !== null && glbCmpMed[src].referrerSearch != "") {
          refSrch = glbCmpMed[src].referrerSearch;
        } else {
          refFlag = true;
        }
        if (glbCmpMed[src].hrefSearch !== null && glbCmpMed[src].hrefSearch != "") {
          hrefSrch = glbCmpMed[src].hrefSearch;
        } else {
          hrefFlag = true;
        }
        if (glbCmpMed[src].customCode !== null && glbCmpMed[src].customCode != "") {
          custCodeSrch = glbCmpMed[src].customCode;
        } else {
          custCodeFlag = true;
        }
        if (typeof refSrch != 'undefined' && refSrch.indexOf('|||') === -1 && document.referrer.indexOf(refSrch) != -1) {
          refFlag = true;
        } else if (typeof refSrch != 'undefined' && refSrch.indexOf('|||') != -1) {
          var srchArr = refSrch.split('|||'),
            srchLength = srchArr.length,
            ctr = 0;
          for (var i in srchArr) {
            if (window.location.href.indexOf(srchArr[i]) != -1) {
              ctr++;
            }
          }
          if (ctr === srchLength) {
            refFlag = true;
          }
        }
        if (typeof hrefSrch != 'undefined' && hrefSrch.indexOf('|||') === -1 && window.location.href.indexOf(hrefSrch) != -1) {
          hrefFlag = true;
        } else if (typeof hrefSrch != 'undefined' && hrefSrch.indexOf('|||') != -1) {
          var srchArr = hrefSrch.split('|||'),
            srchLength = srchArr.length,
            ctr = 0;
          for (var i in srchArr) {
            if (window.location.href.indexOf(srchArr[i]) != -1) {
              ctr++;
            }
          }
          if (ctr === srchLength) {
            hrefFlag = true;
          }
        }
        if (typeof custCodeSrch != 'undefined' && custCodeSrch != "") {
          custCodeFlag = true;
          custCodeVal = custCodeSrch;
        }
        if (refFlag === true && hrefFlag === true && custCodeFlag === true) {
          CmpM = glbCmpMed[src].mediumName;
          if (typeof custCodeVal != "undefined") {
            CmpM = custCodeVal;
          }
          break;
        }
      }
    } else {
      CmpM = CmpMJson;
    }
    window.bttUT.lclst(campMedKey, '{"value":"' + CmpM + '","expires":' + thisEXPs + '}');
    var CV6 = '0',
      CV7 = '0',
      CV8 = '0',
      CV9 = '0',
      CV10 = '0';
    var ECV = new Map();
    var SYSTEMVARS = new Map();
    var VITALSCOPE = new Map();
    var BOTS = new Map();
    var COOKIES = new Map();
    var NATIVEAPP = new Map();
    try {
      CV8 = function () {
        function getCWVTrafficLights(cwvString, val, amber, red) {
          if (val > red) {
            return cwvString + ": POOR";
          } else if (val > amber) {
            return cwvString + ": NEEDS IMPROVEMENT";
          } else {
            return cwvString + ": GOOD";
          }
        }
        if (typeof pageName != "undefined") {
          return;
        }
        ;
        if (window._bttWebVitals) {
          var tlString = getCWVTrafficLights("LCP", window._bttWebVitals.lcp, 2500, 4000) + ", " + getCWVTrafficLights("CLS", window._bttWebVitals.clsScore, 0.1, 0.25) + ", " + getCWVTrafficLights("FID", window._bttWebVitals.fidDur, 100, 300);
          if (localStorage.getItem("BTT_last_INP_rating") != null && localStorage.getItem("BTT_last_INP_sessionID") == _bttUtil.sessionID) {
            tlString = tlString + ", INP: " + localStorage.getItem("BTT_last_INP_rating");
          }
          return tlString;
        }
      }();
    } catch (err) {}
    try {
      CV9 = function () {
        function pF(val, bound, op) {
          let str = "PASS";
          if ((op = "GT" && val > bound) || (op = "GTOE" && val >= bound)) {
            str = "FAIL";
          }
          return str;
        }
        function lcpD(sp) {
          return "LCP-Time to First Byte: " + pF(sp[0].perc, 40, "GT") + ", LCP-Resource Load Delay: " + pF(sp[1].perc, 10, "GTOE") + ", LCP-Resource Load Time: " + pF(sp[2].perc, 40, "GT") + ", LCP-Element Render Delay: " + pF(sp[3].perc, 10, "GTE");
        }
        function fidD(fStart) {
          let navEnt = performance.getEntriesByType("navigation")[0];
          let b4DCL = fStart < navEnt.domContentLoadedEventStart;
          let b4Load = fStart < navEnt.loadEventStart;
          return "FID-Before DOM Content Loaded: " + b4DCL.toString() + ", FID-Before Load: " + b4Load.toString() + ", FID-Action: " + wV.fidLog.name;
        }
        if (typeof pageName != "undefined") {
          return;
        }
        ;
        if (window._bttWebVitals) {
          wV = _bttWebVitals;
          let str = "";
          if (wV.lcpLog && wV.lcpLog.SUB) {
            sp = wV.lcpLog.SUB;
            if (sp.length == 4) {
              str = lcpD(sp);
            }
          }
          if (wV.fidStart && wV.fidLog) {
            if (str != "") {
              str += ", ";
            }
            str += fidD(wV.fidStart);
          }
          if (str != "") {
            return str;
          }
        }
      }();
    } catch (err) {}
    try {
      var cvt = function () {
        function getCLSTarget(entries) {
          var lrgEnt = entries.reduce(function (a, b) {
            return a && a.value > b.value ? a : b;
          });
          if (lrgEnt && lrgEnt.sources && lrgEnt.sources.length) {
            var lrgSrc = lrgEnt.sources.reduce(function (a, b) {
              return a.node && a.previousRect.width * a.previousRect.height > b.previousRect.width * b.previousRect.height ? a : b;
            });
            if (lrgSrc && lrgSrc.node && lrgSrc.node.outerHTML) {
              return lrgSrc.node.outerHTML.toString().replace(/=/g, "%26#61").replace(/\</g, "%26lt").replace(/\?/g, "%26#63").replace(/"/g, "%26quot").replace(/&/g, "%26amp");
            } else if (lrgSrc && lrgSrc.node && lrgSrc.node.textContent) {
              return lrgSrc.node.textContent.replace(/\</g, "%26lt").replace(/\?/g, "%26#63").replace(/"/g, "%26quot").replace(/&/g, "%26amp");
            }
          }
        }
        if (typeof pageGroupNoDash != "undefined") {
          return;
        }
        let _b = window._bttWebVitals;
        if (_b && _b.clsLog && _b.clsLog.length != 0) {
          var clsLSE = getCLSTarget(_b.clsLog);
          if (clsLSE && clsLSE.length > 255) {
            clsLSE = clsLSE.substring(0, 255);
          }
          return clsLSE;
        }
      }();
      cvt = _bttUtil.rmEnc(cvt.toString());
      ECV.set('CLSLargestShiftElement', cvt);
    } catch (err) {}
    try {
      var cvt = function () {
        function getSelector(el) {
          if (el.tagName && el.tagName.toLowerCase() == "html") return "html";
          var str = el.tagName ? el.tagName.toLowerCase() : "";
          str += el.id && el.id != "" ? "#" + el.id : "";
          if (el.className) {
            var classes = el.className.trim().split(/\s+/);
            for (var i = 0; i < classes.length; i++) {
              str += "." + classes[i];
            }
          }
          if (str != "" && document.querySelectorAll(str).length == 1) return str;
          return getSelector(el.parentNode) + (str != "" ? " > " + str : "");
        }
        function getTarget(entries) {
          var lrgEnt = entries.reduce(function (a, b) {
            return a && a.value > b.value ? a : b;
          });
          if (lrgEnt && lrgEnt.sources && lrgEnt.sources.length) {
            var lrgSrc = lrgEnt.sources.reduce(function (a, b) {
              return a.node && a.previousRect.width * a.previousRect.height > b.previousRect.width * b.previousRect.height ? a : b;
            });
            if (lrgSrc && lrgSrc.node) {
              return getSelector(lrgSrc.node);
            }
          }
        }
        if (typeof pageGroupNoDash != "undefined") {
          return;
        }
        let _b = window._bttWebVitals;
        if (_b && _b.clsLog && _b.clsLog.length != 0) {
          var lsev = getTarget(_b.clsLog);
          if (lsev && lsev.length > 255) {
            lsev = lsev.substring(0, 255);
          }
          return lsev;
        }
      }();
      cvt = _bttUtil.rmEnc(cvt.toString());
      ECV.set('CLSLargestShiftSelector', cvt);
    } catch (err) {}
    try {
      var cvt = function () {
        function getCLSLargestShiftTime(entries) {
          var largestEntry = entries.reduce(function (a, b) {
            return a && a.value > b.value ? a : b;
          });
          return largestEntry.startTime;
        }
        if (typeof pageGroupNoDash != "undefined") {
          return;
        }
        ;
        if (window._bttWebVitals && _bttWebVitals.clsLog && _bttWebVitals.clsLog.length != 0) {
          clsLST = getCLSLargestShiftTime(_bttWebVitals.clsLog);
          return clsLST;
        }
      }();
      cvt = _bttUtil.rmEnc(cvt.toString());
      ECV.set('CLSLargestShiftStart', cvt);
    } catch (err) {}
    try {
      var cvt = function () {
        if (typeof pageName != "undefined") {
          return;
        }
        ;
        if (!window._bttWebVitals || !_bttWebVitals.clsLog || _bttWebVitals.clsLog.length == 0) {
          return;
        }
        return _bttWebVitals.clsLog.length;
      }();
      cvt = _bttUtil.rmEnc(cvt.toString());
      ECV.set('CLSLayoutShiftCount', cvt);
    } catch (err) {}
    try {
      var cvt = function () {
        if (typeof pageName != "undefined") {
          return;
        }
        ;
        if (!window._bttWebVitals || !_bttWebVitals.clsLog || _bttWebVitals.clsLog.length == 0) {
          return;
        }
        let clsString = "";
        for (i = 0; i <= _bttWebVitals.clsLog.length - 1; i++) {
          clsString = clsString + "{" + i + "," + _bttWebVitals.clsLog[i].value + "," + _bttWebVitals.clsLog[i].startTime + "," + _bttWebVitals.clsLog[i].sources.length + "}";
        }
        if (clsString.length > 255) {
          clsString = clsString.substring(0, 255);
          clsString = clsString.substring(0, clsString.lastIndexOf('}') + 1);
        }
        return clsString;
      }();
      cvt = _bttUtil.rmEnc(cvt.toString());
      ECV.set('CLSShiftLogShiftNumShiftValueShiftStartTimeShiftSourcesCount', cvt);
    } catch (err) {}
    try {
      var cvt = function () {
        if (typeof pageName != "undefined") {
          return;
        }
        ;
        if (window._bttWebVitals && _bttWebVitals.fidStart) {
          return _bttWebVitals.fidStart;
        }
      }();
      cvt = _bttUtil.rmEnc(cvt.toString());
      ECV.set('FIDStart', cvt);
    } catch (err) {}
    try {
      var cvt = function () {
        if (typeof pageName != "undefined") {
          return;
        }
        ;
        if (window._bttWebVitals && _bttWebVitals.fidLog && _bttWebVitals.fidLog.target && _bttWebVitals.fidLog.target.outerHTML) {
          let fidTargetCV = String(_bttWebVitals.fidLog.target.outerHTML).replace(/=/g, "%26#61").replace(/\</g, "%26lt").replace(/\?/g, "%26#63").replace(/"/g, "%26quot").replace(/&/g, "%26amp");
          if (fidTargetCV.length > 255) {
            fidTargetCV = fidTargetCV.substring(0, 255);
          }
          return fidTargetCV;
        }
      }();
      cvt = _bttUtil.rmEnc(cvt.toString());
      ECV.set('FIDTarget', cvt);
    } catch (err) {}
    try {
      var cvt = function () {
        function getSelector(el) {
          if (el.tagName.toLowerCase() == "html") return "html";
          var str = el.tagName.toLowerCase();
          str += el.id != "" ? "#" + el.id : "";
          if (el.className) {
            var classes = el.className.trim().split(/\s+/);
            for (var i = 0; i < classes.length; i++) {
              str += "." + classes[i];
            }
          }
          if (document.querySelectorAll(str).length == 1) return str;
          return getSelector(el.parentNode) + " > " + str;
        }
        if (typeof pageName != "undefined") {
          return;
        }
        ;
        if (window._bttWebVitals && _bttWebVitals.fidLog && _bttWebVitals.fidLog.target && _bttWebVitals.fidLog.target.outerHTML) {
          let fidTargetCV = getSelector(_bttWebVitals.fidLog.target);
          if (fidTargetCV.length > 255) {
            fidTargetCV = fidTargetCV.substring(0, 255);
          }
          return fidTargetCV;
        }
      }();
      cvt = _bttUtil.rmEnc(cvt.toString());
      ECV.set('FIDTargetSelector', cvt);
    } catch (err) {}
    try {
      var cvt = function () {
        if (typeof pageName != "undefined") {
          return;
        }
        ;
        if (window._bttWebVitals && window._bttWebVitals.lcpLog && window._bttWebVitals.lcpLog.ELE && window._bttWebVitals.lcpLog.ELE.outerHTML) {
          let lcpElement = String(window._bttWebVitals.lcpLog.ELE.outerHTML).replace(/=/g, "%26#61").replace(/\</g, "%26lt").replace(/\?/g, "%26#63").replace(/"/g, "%26quot").replace(/&/g, "%26amp");
          if (lcpElement.length > 255) {
            lcpElement = lcpElement.substring(0, 255);
          }
          return lcpElement;
        }
      }();
      cvt = _bttUtil.rmEnc(cvt.toString());
      ECV.set('LCPElement', cvt);
    } catch (err) {}
    try {
      var cvt = function () {
        if (typeof pageName != "undefined") {
          return;
        }
        ;
        if (window._bttWebVitals && _bttWebVitals.lcpLog && _bttWebVitals.lcpLog.SUB && _bttWebVitals.lcpLog.SUB.length == 4) {
          return _bttWebVitals.lcpLog.SUB[3].time;
        }
      }();
      cvt = _bttUtil.rmEnc(cvt.toString());
      ECV.set('LCPElementRenderDelayMS', cvt);
    } catch (err) {}
    try {
      var cvt = function () {
        if (typeof pageName != "undefined") {
          return;
        }
        ;
        if (window._bttWebVitals && _bttWebVitals.lcpLog && _bttWebVitals.lcpLog.SUB && _bttWebVitals.lcpLog.SUB.length == 4) {
          return window._bttWebVitals.lcpLog.SUB[3].perc;
        }
      }();
      cvt = _bttUtil.rmEnc(cvt.toString());
      ECV.set('LCPElementRenderDelayPercentage', cvt);
    } catch (err) {}
    try {
      var cvt = function () {
        if (typeof pageName != "undefined") {
          return;
        }
        ;
        if (window._bttWebVitals && _bttWebVitals.lcpLog && _bttWebVitals.lcpLog.SUB && _bttWebVitals.lcpLog.SUB.length == 4) {
          return _bttWebVitals.lcpLog.SUB[1].time;
        }
      }();
      cvt = _bttUtil.rmEnc(cvt.toString());
      ECV.set('LCPResourceLoadDelayMS', cvt);
    } catch (err) {}
    try {
      var cvt = function () {
        if (typeof pageName != "undefined") {
          return;
        }
        ;
        if (window._bttWebVitals && _bttWebVitals.lcpLog && _bttWebVitals.lcpLog.SUB && _bttWebVitals.lcpLog.SUB.length == 4) {
          return window._bttWebVitals.lcpLog.SUB[1].perc;
        }
      }();
      cvt = _bttUtil.rmEnc(cvt.toString());
      ECV.set('LCPResourceLoadDelayPercentage', cvt);
    } catch (err) {}
    try {
      var cvt = function () {
        if (typeof pageName != "undefined") {
          return;
        }
        ;
        if (window._bttWebVitals && _bttWebVitals.lcpLog && _bttWebVitals.lcpLog.SUB && _bttWebVitals.lcpLog.SUB.length == 4) {
          return _bttWebVitals.lcpLog.SUB[2].time;
        }
      }();
      cvt = _bttUtil.rmEnc(cvt.toString());
      ECV.set('LCPResourceLoadTimeMS', cvt);
    } catch (err) {}
    try {
      var cvt = function () {
        if (typeof pageName != "undefined") {
          return;
        }
        ;
        if (window._bttWebVitals && _bttWebVitals.lcpLog && _bttWebVitals.lcpLog.SUB && _bttWebVitals.lcpLog.SUB.length == 4) {
          return window._bttWebVitals.lcpLog.SUB[2].perc;
        }
      }();
      cvt = _bttUtil.rmEnc(cvt.toString());
      ECV.set('LCPResourceLoadTimePercentage', cvt);
    } catch (err) {}
    try {
      var cvt = function () {
        function getSelector(el) {
          if (el.tagName.toLowerCase() == "html") return "html";
          var str = el.tagName.toLowerCase();
          str += el.id != "" ? "#" + el.id : "";
          if (el.className) {
            var classes = el.className.trim().split(/\s+/);
            for (var i = 0; i < classes.length; i++) {
              str += "." + classes[i];
            }
          }
          if (document.querySelectorAll(str).length == 1) return str;
          return getSelector(el.parentNode) + " > " + str;
        }
        if (typeof pageName != "undefined") {
          return;
        }
        ;
        if (window._bttWebVitals && window._bttWebVitals.lcpLog && window._bttWebVitals.lcpLog.ELE && window._bttWebVitals.lcpLog.ELE.outerHTML) {
          let lcpElement = getSelector(window._bttWebVitals.lcpLog.ELE);
          if (lcpElement.length > 255) {
            lcpElement = lcpElement.substring(0, 255);
          }
          return lcpElement;
        }
      }();
      cvt = _bttUtil.rmEnc(cvt.toString());
      ECV.set('LCPSelector', cvt);
    } catch (err) {}
    try {
      var cvt = function () {
        if (typeof pageName != "undefined") {
          return;
        }
        ;
        if (window._bttWebVitals && _bttWebVitals.lcpLog && _bttWebVitals.lcpLog.SUB && _bttWebVitals.lcpLog.SUB.length == 4) {
          return _bttWebVitals.lcpLog.SUB[0].time;
        }
      }();
      cvt = _bttUtil.rmEnc(cvt.toString());
      ECV.set('LCPTimeToFirstByteMS', cvt);
    } catch (err) {}
    try {
      var cvt = function () {
        if (typeof pageName != "undefined") {
          return;
        }
        ;
        if (window._bttWebVitals && _bttWebVitals.lcpLog && _bttWebVitals.lcpLog.SUB && _bttWebVitals.lcpLog.SUB.length == 4) {
          return window._bttWebVitals.lcpLog.SUB[0].perc;
        }
      }();
      cvt = _bttUtil.rmEnc(cvt.toString());
      ECV.set('LCPTimeToFirstBytePercentage', cvt);
    } catch (err) {}
    try {
      var cvt = function () {
        if (typeof pageName != "undefined") {
          return;
        }
        ;
        if (window._bttWebVitals && window._bttWebVitals.lcpLog) {
          let lcpURLCV = String(window._bttWebVitals.lcpLog.URL);
          if (lcpURLCV.length > 255) {
            lcpURLCV = lcpURLCV.substring(0, 255);
          }
          return lcpURLCV;
        }
      }();
      cvt = _bttUtil.rmEnc(cvt.toString());
      ECV.set('LCPURL', cvt);
    } catch (err) {}
    try {
      var cvt = _bttUACH.euos;
      cvt = _bttUtil.rmEnc(cvt.toString());
      SYSTEMVARS.set('euos', cvt);
    } catch (err) {}
    try {
      var cvt = _bttWebVitals.clsScore;
      cvt = _bttUtil.rmEnc(cvt.toString());
      VITALSCOPE.set('CLSScore', cvt);
    } catch (err) {}
    if (window.bttUT.resObj.hasOwnProperty(measureKey)) {
      var resObjKey = window.bttUT.resObj[measureKey];
      var wcdCollect = "off";
      if (window.bttUT.lclgt('BTT_WCD_Collect') != 0) {
        wcdCollect = JSON.parse(window.bttUT.lclgt('BTT_WCD_Collect'))['value'];
      } else if (document.cookie.indexOf('BTT_WCD_Collect=on') != -1) {
        wcdCollect = "on";
      }
      try {
        elementCount = _BU.resCnt(resObjKey);
        szObj = _BU.pgSz(resObjKey);
        totalPgEncSize = szObj.pgSzEnc;
        totalPgDecSize = szObj.pgSzDec;
        imgEncSize = szObj.imgSz;
        jsEncSize = szObj.jsSz;
      } catch (e) {}
    }
    if (wcdCollect === "on") {
      wcd = 1;
    }
    var nstDif = BTT_Before - _BU.WP.timing.navigationStart;
    _BF.calcFps();
    var lt_tti = 0;
    var fps_tti = _BU.ftti > 0 && _BU.ftti - nstDif > 0 ? _BU.ftti - nstDif : 0;
    var tti = fps_tti;
    try {
      var sECV = JSON.stringify(Object.fromEntries(ECV));
    } catch (e) {
      sECV = '{\"(ECV)\":\"convErr2\"}';
    }
    try {
      var sSYSTEMVARS = JSON.stringify(Object.fromEntries(SYSTEMVARS));
    } catch (e) {
      sSYSTEMVARS = '{\"(SYSTEMVARS)\":\"convErr2\"}';
    }
    try {
      var sVITALSCOPE = JSON.stringify(Object.fromEntries(VITALSCOPE));
    } catch (e) {
      sVITALSCOPE = '{\"(VITALSCOPE)\":\"convErr2\"}';
    }
    try {
      var sBOTS = JSON.stringify(Object.fromEntries(BOTS));
    } catch (e) {
      sBOTS = '{\"(BOTS)\":\"convErr2\"}';
    }
    try {
      var sCOOKIES = JSON.stringify(Object.fromEntries(COOKIES));
    } catch (e) {
      sCOOKIES = '{\"(COOKIES)\":\"convErr2\"}';
    }
    try {
      var sNATIVEAPP = JSON.stringify(Object.fromEntries(NATIVEAPP));
    } catch (e) {
      sNATIVEAPP = '{\"(NATIVEAPP)\":\"convErr2\"}';
    }
    var NAflg = 0;
    try {
      var bVER = _BU.version;
    } catch (e) {
      bVER = '-1';
    }
    let _bUA = _bttUACH;
    var jsonPst = {
      "pageName": PNDB_enc,
      "nst": BTT_Before,
      "unloadEventStart": BTT_Before,
      "pageType": pageGroupNoDash,
      "pageValue": PGV,
      "pgTm": pgTM,
      domContentLoadedEnd: dclEpoch,
      domInteractive: domIntEpoch,
      "navigationType": 3,
      "cartValue": CVL,
      "currencyCode": currencyCode,
      "ONumBr": ONumBr,
      "orderTND": orderTND,
      "eventType": 5,
      "siteID": siteID,
      "txnName": BTT_TxName_enc,
      "campaign": bttCamp,
      "top": 0,
      "bv": BVL,
      "thisURL": pageURL,
      "bvzn": _bUA.bvzn,
      "os": _bUA.os,
      "browser": _bUA.browser,
      "device": _bUA.device,
      "EUOS": _bUA.euos,
      "sID": bttssI,
      "gID": bttGUID,
      "RV": NvsR,
      "wcd": wcd,
      "AB": AB,
      "CmpS": CmpS,
      "CmpM": CmpM,
      "CmpN": CmpN,
      "DCTR": DCTR,
      "RefURL": RefURL,
      "orders": orders,
      "pWSz": totalPgEncSize,
      "pSz": totalPgDecSize,
      "IMAGE_SIZE": imgEncSize,
      "JS_SIZE": jsEncSize,
      "elementCount": elementCount,
      "tti": tti,
      "lt_tti": lt_tti,
      "fps_tti": fps_tti,
      "CV6": CV6,
      "CV7": CV7,
      "CV8": CV8,
      "CV9": CV9,
      "CV10": CV10,
      "ECV": sECV,
      "SYSTEMVARS": sSYSTEMVARS,
      "VITALSCOPE": sVITALSCOPE,
      "BOTS": sBOTS,
      "COOKIES": sCOOKIES,
      "NATIVEAPP": sNATIVEAPP,
      "NAflg": NAflg,
      "VER": bVER
    };
    _bttUtil.tagVars = {
      pageName: PNDB_enc,
      pageType: pageGroupNoDash,
      txnName: BTT_TxName_enc,
      AB: AB,
      DCTR: DCTR,
      CmpN: CmpN,
      CmpS: CmpS,
      CmpM: CmpM,
      nStart: BTT_Before,
      sID: bttssI,
      gID: bttGUID,
      pgTm: pgTM,
      URL: btt_URL
    };
    var BTT_URL = "https://d.btttag.com/analytics.rcv?pgNm=" + PNDB_enc + "&trSeg=" + BTT_TxName_enc + "&navStart=" + BTT_Before;
    if (_bttUtil.curRDY) {
      _BU.fireBeacon('vt');
    }
    _BU.curBeacon = jsonPst;
    _BU.curRCV = BTT_URL;
    _BU.curRDY = true;
    if (!_BU.tagBeacon || !_BU.visEvent) {
      _BU.fireBeacon('vt');
    }
    if (wcdCollect === "on") {
      var currentResIndex = resObjKey;
      var resParams = {
        nStart: BTT_Before,
        pageName: PNDB_enc,
        pageType: pageGroupNoDash,
        txnName: BTT_TxName_enc,
        trig: pgTM,
        pgTm: pgTM,
        sID: bttssI,
        gID: bttGUID,
        WCDtt: "c",
        NVSTR: "0"
      };
      var ctr = 1;
      window._bttUtil.ci = currentResIndex;
      window._bttUtil.resP = resParams;
    }
  },
  sendGif: function (pageName, requiredArgs, optionalArgs) {
    var sessionID,
      guid,
      campaign = "",
      txnName = "",
      timing = 100,
      pageGroup = "",
      orderNumber = "",
      excluded = 0,
      cartValue = 0,
      brandValue = 0,
      pageValue = 0,
      datacenter = "",
      abtesting = "",
      pgTm = 0,
      CmpM = "",
      CmpS = "",
      nvSt = 0,
      ldEvtSt = 0,
      wcd = 0,
      totalPgEncSize = 0,
      totalPgDecSize = 0,
      imgEncSize = 0,
      jsEncSize = 0,
      elementCount = 0,
      rstSess = 0,
      tti = 0,
      lt_tti = 0,
      fps_tti = 0,
      siteID = "mountainhardwear500z",
      CSID = "",
      optArray = [],
      optString = "",
      sECV = "",
      ECV = new Map(),
      sSYSTEMVARS = "",
      SYSTEMVARS = new Map(),
      sVITALSCOPE = "",
      VITALSCOPE = new Map(),
      sBOTS = "",
      BOTS = new Map(),
      sCOOKIES = "",
      COOKIES = new Map(),
      sNATIVEAPP = "",
      NATIVEAPP = new Map();
    try {
      if (typeof requiredArgs != 'undefined') {
        var rArgs = requiredArgs;
        rArgs.a = rArgs.hasOwnProperty;
        if (rArgs.a('sessionID')) {
          sessionID = rArgs.sessionID;
        } else if (bttUT.lclgt('BTT_X0siD', 'json') != 0) {
          sessionID = bttUT.lclgt('BTT_X0siD', 'json');
        }
        if (rArgs.a('guid')) {
          guid = rArgs.guid;
        } else if (bttUT.lclgt('BTT_GUID_PV', 'json') != 0) {
          guid = JSON.parse(bttUT.lclgt('BTT_GUID_PV', 'json'))["GUID"];
        }
        if (rArgs.a('campaign')) {
          campaign = rArgs.campaign;
        } else if (bttUT.lclgt(siteID + '-campaign', 'json') != 0) {
          campaign = bttUT.lclgt(siteID + '-campaign', 'json');
        }
        if (rArgs.a('txnName')) {
          txnName = rArgs.txnName;
        }
      } else {
        console.log("Unable to send gif");
        return false;
      }
      if (typeof optionalArgs != 'undefined') {
        var oArgs = optionalArgs;
        oArgs.a = oArgs.hasOwnProperty;
        if (_bttUtil.visEvent && _bttUtil.curRDY && oArgs.a('MUTOBS')) {
          _bttUtil.fireBeacon('sendGif');
        }
        if (oArgs.a('timing')) {
          timing = oArgs.timing;
        }
        if (oArgs.a('pageGroup')) {
          pageGroup = decodeURIComponent(oArgs.pageGroup);
        }
        if (oArgs.a('orderNumber')) {
          orderNumber = oArgs.orderNumber;
        }
        if (oArgs.a('excluded')) {
          excluded = oArgs.excluded;
        }
        if (oArgs.a('cartValue')) {
          cartValue = oArgs.cartValue;
        }
        if (oArgs.a('brandValue')) {
          brandValue = oArgs.brandValue;
        }
        if (oArgs.a('datacenter')) {
          datacenter = oArgs.datacenter;
        }
        if (oArgs.a('abtesting')) {
          abtesting = oArgs.abtesting;
        }
        if (oArgs.a('pgTm')) {
          pgTm = oArgs.pgTm;
        }
        if (oArgs.a('CmpM')) {
          CmpM = oArgs.CmpM;
        }
        if (oArgs.a('CmpS')) {
          CmpS = oArgs.CmpS;
        }
        if (oArgs.a('nvSt')) {
          nvSt = oArgs.nvSt;
        }
        if (oArgs.a('ldEvtSt')) {
          ldEvtSt = oArgs.ldEvtSt;
        }
        if (oArgs.a('pageValue')) {
          pageValue = oArgs.pageValue;
        }
        if (oArgs.a('rstSess')) {
          rstSess = oArgs.rstSess;
        }
        if (oArgs.a('tti')) {
          tti = oArgs.tti;
        }
        if (oArgs.a('lt_tti')) {
          lt_tti = oArgs.lt_tti;
        }
        if (oArgs.a('fps_tti')) {
          fps_tti = oArgs.fps_tti;
        }
        if (oArgs.a('CSID')) {
          CSID = oArgs.CSID;
        }
        if (oArgs.a('ECV')) {
          sECV = oArgs.ECV;
        }
        if (oArgs.a('SYSTEMVARS')) {
          sSYSTEMVARS = oArgs.SYSTEMVARS;
        }
        if (oArgs.a('VITALSCOPE')) {
          sVITALSCOPE = oArgs.VITALSCOPE;
        }
        if (oArgs.a('BOTS')) {
          sBOTS = oArgs.BOTS;
        }
        if (oArgs.a('COOKIES')) {
          sCOOKIES = oArgs.COOKIES;
        }
        if (oArgs.a('NATIVEAPP')) {
          sNATIVEAPP = oArgs.NATIVEAPP;
        }
        for (var key in oArgs) {
          if (key.substring(0, 2) == "CN") {
            optArray.push(key + "=" + oArgs[key]);
            try {
              if (sECV == "") {
                ECV.set(key.replace('CN', 'CUSTOMNUM'), oArgs[key].toString());
              }
            } catch (e) {}
          } else if (key.substring(0, 2) == "CV") {
            optArray.push(key + "=" + oArgs[key]);
            try {
              if (sECV == "" && key != 'CV6' && key != 'CV7' && key != 'CV8' && key != 'CV9' && key != 'CV10') {
                ECV.set(key.replace('CV', 'CUSTOMVAR'), oArgs[key].toString());
              }
            } catch (e) {}
          }
        }
        optString = "&" + optArray.join("&");
        try {
          if (sECV != "") {
            sECV = JSON.stringify(Object.fromEntries(sECV));
          } else {
            sECV = JSON.stringify(Object.fromEntries(ECV));
          }
        } catch (e) {
          sECV = '{\"(ECV)\":\"convErr3\"}';
        }
        try {
          if (sSYSTEMVARS != "") {
            sSYSTEMVARS = JSON.stringify(sSYSTEMVARS);
          } else {
            sSYSTEMVARS = JSON.stringify(Object.fromEntries(SYSTEMVARS));
          }
        } catch (e) {
          sSYSTEMVARS = '{\"(SYSTEMVARS)\":\"convErr3\"}';
        }
        try {
          if (sVITALSCOPE != "") {
            sVITALSCOPE = JSON.stringify(sVITALSCOPE);
          } else {
            sVITALSCOPE = JSON.stringify(Object.fromEntries(VITALSCOPE));
          }
        } catch (e) {
          sVITALSCOPE = '{\"(VITALSCOPE)\":\"convErr3\"}';
        }
        try {
          if (sBOTS != "") {
            sBOTS = JSON.stringify(sBOTS);
          } else {
            sBOTS = JSON.stringify(Object.fromEntries(BOTS));
          }
        } catch (e) {
          sBOTS = '{\"(BOTS)\":\"convErr3\"}';
        }
        try {
          if (sCOOKIES != "") {
            sCOOKIES = JSON.stringify(sCOOKIES);
          } else {
            sCOOKIES = JSON.stringify(Object.fromEntries(COOKIES));
          }
        } catch (e) {
          sCOOKIES = '{\"(COOKIES)\":\"convErr3\"}';
        }
        try {
          if (sNATIVEAPP != "") {
            sNATIVEAPP = JSON.stringify(sNATIVEAPP);
          } else {
            sNATIVEAPP = JSON.stringify(Object.fromEntries(NATIVEAPP));
          }
        } catch (e) {
          sNATIVEAPP = '{\"(NATIVEAPP)\":\"convErr3\"}';
        }
      }
    } catch (e) {
      console.log("Error sending beacon");
      return false;
    }
    var NAflg = 0;
    try {
      var bVER = _bttUtil.version;
    } catch (e) {
      bVER = '-1';
    }
    var nowTime = window.bttUT.GTM();
    if (nvSt > 0) {
      var BTT_Before = nvSt;
    } else {
      var BTT_Before = nowTime - timing;
    }
    var pageURL = window.location.href,
      PNDB_enc = pageName,
      pageGroupEnc = pageGroup,
      BTT_TxName_enc = txnName;
    var pgTmVal = timing,
      nvStVal = BTT_Before,
      unldVal = BTT_Before,
      ldEvtStVal = "0";
    if (pgTm > 0) {
      pgTmVal = pgTm;
    }
    if (nvSt > 0) {
      nvStVal = nvSt;
      unldVal = nvSt;
    }
    if (ldEvtSt > 0) {
      ldEvtStVal = ldEvtSt;
    }
    _bttUtil.tagVars = {
      pageName: PNDB_enc,
      pageType: pageGroupEnc,
      txnName: BTT_TxName_enc,
      AB: abtesting,
      DCTR: datacenter,
      CmpN: campaign,
      CmpS: CmpS,
      CmpM: CmpM,
      nStart: nvStVal,
      sID: sessionID,
      gID: guid,
      pgTm: pgTmVal,
      URL: pageURL
    };
    if (window.bttUT.resObj.hasOwnProperty(nvSt)) {
      var resObjKey = window.bttUT.resObj[nvSt];
      window.bttUT.resObj = {};
      var wcdCollect = "off";
      if (window.bttUT.lclgt('BTT_WCD_Collect') != 0) {
        wcdCollect = JSON.parse(window.bttUT.lclgt('BTT_WCD_Collect'))['value'];
      } else if (document.cookie.indexOf('BTT_WCD_Collect=on') != -1) {
        wcdCollect = "on";
      }
      try {
        elementCount = _BU.resCnt(resObjKey);
        szObj = _BU.pgSz(resObjKey);
        totalPgEncSize = szObj.pgSzEnc;
        totalPgDecSize = szObj.pgSzDec;
        imgEncSize = szObj.imgSz;
        jsEncSize = szObj.jsSz;
      } catch (e) {}
    }
    if (wcdCollect === "on") {
      wcd = 1;
    }
    var BTT_URL = "https://d.btttag.com/analytics.rcv?pgNm=" + PNDB_enc + "&trSeg=" + BTT_TxName_enc + "&navStart=" + BTT_Before;
    var tU = "pageName=" + PNDB_enc + "&nst=" + nvStVal + "&unloadEventStart=" + unldVal + "&loadEventStart=" + ldEvtStVal + "&pageType=" + pageGroupEnc + "&pgTm=" + pgTmVal + "&tti=" + tti + "&lt_tti=" + lt_tti + "&fps_tti=" + fps_tti + "&navigationType=3" + "&eventType=5" + "&siteID=" + siteID + "&wcd=" + wcd + "&txnName=" + BTT_TxName_enc + "&campaign=" + campaign + "&CmpS=" + CmpS + "&CmpM=" + CmpM + "&AB=" + abtesting + "&DCTR=" + datacenter + "&top=0" + "&thisURL=" + encodeURIComponent(pageURL) + "&sID=" + sessionID + "&gID=" + guid + "&excluded=" + excluded + "&bv=" + brandValue + "&cartValue=" + cartValue + "&pageValue=" + pageValue + "&ONumBr=" + orderNumber + "&pWSz=" + totalPgEncSize + "&pSz=" + totalPgDecSize + "&IMAGE_SIZE=" + imgEncSize + "&JS_SIZE=" + jsEncSize + "&elementCount=" + elementCount + "&rstSess=" + rstSess + "&CSID=" + CSID + "&ECV=" + sECV + "&NAflg=" + NAflg + "&VER=" + bVER + optString;
    var tUObj = {};
    var tUArr = tU.split("&");
    var tULen = tUArr.length;
    for (var i = 0; i < tULen; i++) {
      if (typeof tUArr[i] != "undefined" && tUArr[i].indexOf("=") != -1) {
        var pArr = tUArr[i].split("=");
        try {
          tUObj[pArr[0]] = _bttUtil.rmEnc(decodeURIComponent(pArr[1]));
        } catch (e) {
          tUObj[pArr[0]] = _bttUtil.rmEnc(pArr[1]);
        }
      }
    }
    tUObj['ECV'] = sECV;
    tUObj['SYSTEMVARS'] = sSYSTEMVARS;
    tUObj['VITALSCOPE'] = sVITALSCOPE;
    tUObj['BOTS'] = sBOTS;
    tUObj['COOKIES'] = sCOOKIES;
    tUObj['NATIVEAPP'] = sNATIVEAPP;
    if (!oArgs || !oArgs.a('MUTOBS')) {
      var jStr = JSON.stringify(tUObj);
      var SnDENC = btoa(jStr);
      if (!_bttUtil.tagBeacon || !navigator.sendBeacon(BTT_URL, SnDENC)) {
        var bx = window._bttUtil.cors('POST', BTT_URL);
        bx.send(SnDENC);
      }
    } else {
      _bttUtil.curBeacon = tUObj;
      _bttUtil.curRCV = BTT_URL;
      _bttUtil.curRDY = true;
      if (!_bttUtil.tagBeacon || !_bttUtil.visEvent) {
        _bttUtil.fireBeacon('sendGif');
      }
    }
    if (wcdCollect === "on") {
      var currentResIndex = resObjKey;
      var resParams = {
        nStart: nvSt,
        pageName: PNDB_enc,
        pageType: pageGroupEnc,
        txnName: BTT_TxName_enc,
        trig: pgTm,
        pgTm: pgTm,
        sID: sessionID,
        gID: guid,
        WCDtt: "c",
        NVSTR: "0"
      };
      var ctr = 1;
      window._bttUtil.ci = currentResIndex;
      window._bttUtil.resP = resParams;
    }
  },
  getValue: function (key) {
    try {
      guid = JSON.parse(window.bttUT.lclgt(key)).value;
    } catch (e) {
      guid = window.bttUT.cku(key);
    }
  }
};
localStorage.setItem = function (key, value) {
  const eventContext = getEventContext();
  const eventData = {
    eventName: "localStorage.setItem",
    args: [key, value],
    context: eventContext
  };
  originalLocalStorageSetItem.apply(this, arguments);
  sendEventToServer(eventData);
};
if (typeof window._bttMgcCntr == "undefined") {
  window._bttMgcCntr = 0;
} else {
  window._bttMgcCntr++;
}
function validateEventSignature(eventName, args, expectedSignature) {
  if (args.length !== expectedSignature.length) {
    console.warn('Event ${eventName} expected ${expectedSignature.length} parameters, but received ${args.length}.');
    return false;
  }
  for (let i = 0; i < args.length; i++) {
    if (typeof argparse[i] !== expectedSignature[i]) {
      console.warn(`Event '${eventName}': Argument number ${i + 1} should be of type ${expectedSignature[i]}. Received type: ${typeof argparse[i]} instead.`);
      return false;
    }
  }
  return true;
}
function getEventContext() {
  const eventContext = {
    url: document.URL,
    userAgent: navigator.userAgent,
    referrer: document.referrer,
    date: new Date(),
    id: generateTestId()
  };
  return eventContext;
}
if (window._bttMgcCntr == 0) {
  window.btt_ajaxListener = new Object();
  window.btt_ajaxListener.tempOpen = XMLHttpRequest.prototype.open;
  window.btt_ajaxListener.tempSend = XMLHttpRequest.prototype.send;
  window.btt_ajaxListener.tempstate = {};
  XMLHttpRequest.prototype.open = function (a, b) {
    if (!a) {
      var a = '';
    }
    if (!b) {
      var b = '';
    }
    var xhrApply = window.btt_ajaxListener.tempOpen.apply(this, arguments);
    try {
      this.tempError = new Error(xhrApply);
      this.bttXhrVerb = a;
      this.bttXhrUrl = b;
      var pageName,
        txnName,
        url = b;
      var pTObj = window.bttUT.pTNaming(url);
      if (pTObj.pageName !== undefined && pTObj.txnName !== undefined) {
        var key = +new Date();
        this.bttStartKey = key;
        this.pageName = pTObj.pageName;
        this.txnName = pTObj.txnName;
        this.pageGroup = "Custom Timer";
        window.bttUT.start({
          pageName: pTObj.pageName,
          txnName: pTObj.txnName,
          pageGroup: pTObj.pageGroup,
          key: key,
          captureResources: false
        });
      }
    } catch (e) {
      console.log(21 + " " + e);
    }
  };
  XMLHttpRequest.prototype.send = function () {
    window.btt_ajaxListener.tempSend.apply(this, arguments);
    try {
      var pageName,
        txnName,
        method = this.bttXhrVerb,
        vtStartArgs = {};
      vtStartArgs["ajaxUrl"] = this.bttXhrUrl;
      vtStartArgs["type"] = "start";
      if (method === "POST") {
        vtStartArgs["postData"] = arguments[0];
        this.bttPostData = arguments[0];
      }
      var vtStartObj = window.bttUT.vtNaming(vtStartArgs);
      if (vtStartObj.pageName !== undefined && vtStartObj.txnName !== undefined) {
        window.bttUT.start({
          pageName: vtStartObj.pageName,
          txnName: vtStartObj.txnName,
          pageGroup: vtStartObj.pageGroup,
          captureResources: true
        });
      }
      var dtIndx = +(Math.floor(Math.random() * (99999 - 10000)) + 10000).toString() + (+new Date()).toString() + (Math.floor(Math.random() * (9999 - 1000)) + 1000).toString();
      window.btt_ajaxListener.tempstate[dtIndx] = this.onreadystatechange;
      this.onreadystatechange = function () {
        if (window.btt_ajaxListener.tempstate[dtIndx] != null) {
          window.btt_ajaxListener.tempstate[dtIndx].apply(this, arguments);
        }
        if (this.readyState == 4 && this.status >= 200 && this.status < 300) {
          var pageName,
            txnName,
            method = this.bttXhrVerb,
            vtEndArgs = {};
          var url = this.responseURL;
          vtEndArgs["ajaxUrl"] = this.bttXhrUrl;
          vtEndArgs["type"] = "end";
          if (method === "POST") {
            if (this.hasOwnProperty('bttPostData')) {
              vtEndArgs["postData"] = this.bttPostData;
            } else {
              vtEndArgs["postData"] = "";
            }
          }
          var vtEndObj = window.bttUT.vtNaming(vtEndArgs);
          if (vtEndObj.pageName !== undefined && vtEndObj.txnName !== undefined) {
            window.bttUT.end({
              pageName: vtEndObj.pageName,
              pageGroup: vtEndObj.pageGroup,
              txnName: vtEndObj.txnName,
              pageURL: location.href
            });
          }
          if (this.hasOwnProperty('pageName') && this.hasOwnProperty('txnName') && this.hasOwnProperty('bttStartKey')) {
            var url = this.responseURL;
            var key = this.bttStartKey;
            window.bttUT.end({
              pageName: this.pageName,
              pageGroup: this.pageGroup,
              txnName: this.txnName,
              pageURL: url,
              key: key
            });
          }
        } else if (this.readyState == 4 && this.status >= 400) {
          try {
            var msg = this.bttXhrVerb + " " + this.responseURL + " " + this.status + " (" + this.statusText + ")";
            _bttErr.capture(msg, this.responseURL, 0, 0, msg, "XHRError");
          } catch (e) {}
        }
      };
    } catch (e) {
      console.log(22 + " " + e);
    }
  };
  if (typeof fetch != "undefined") {
    window.btt_fetchReq = fetch;
    fetch = function (url, opt) {
      var promise = window.btt_fetchReq.apply(this, arguments);
      try {
        if (typeof url === "object") {
          url = url.url != undefined ? url.url : '';
        } else if (typeof url != "string") {
          url = '';
        }
      } catch (e) {
        url = '';
      }
      try {
        var pageName, txnName;
        var pTObj = window.bttUT.pTFetchNaming(url);
        if (pTObj.pageName !== undefined && pTObj.txnName !== undefined) {
          var key = +new Date();
          var f_bttStartKey = key;
          var f_pageName = pTObj.pageName;
          var f_txnName = pTObj.txnName;
          var f_pageGroup = "Custom Timer";
          window.bttUT.start({
            pageName: pTObj.pageName,
            txnName: pTObj.txnName,
            pageGroup: pTObj.pageGroup,
            key: key,
            captureResources: false
          });
        }
      } catch (e) {
        console.log(21 + " " + e);
      }
      try {
        var vtArgs = {};
        vtArgs["ajaxUrl"] = url;
        vtArgs["type"] = "start";
        if (typeof opt != "undefined" && opt.hasOwnProperty('method') && opt.method.toLowerCase() === "post" && opt.hasOwnProperty('body')) {
          vtArgs["postData"] = opt.body;
        }
        var vtStartObj = window.bttUT.vtFetchNaming(vtArgs);
        if (vtStartObj.pageName !== undefined && vtStartObj.txnName !== undefined) {
          window.bttUT.start({
            pageName: vtStartObj.pageName,
            txnName: vtStartObj.txnName,
            pageGroup: vtStartObj.pageGroup,
            captureResources: true
          });
        }
      } catch (e) {
        console.log(22 + " " + e);
      }
      return promise.then(function (response) {
        if (response.status >= 200 && response.status < 300) {
          if (typeof f_pageName != 'undefined' && typeof f_txnName != 'undefined' && typeof f_bttStartKey != 'undefined') {
            window.bttUT.end({
              pageName: f_pageName,
              pageGroup: f_pageGroup,
              txnName: f_txnName,
              pageURL: response.url,
              key: f_bttStartKey
            });
          }
          vtArgs["type"] = "end";
          var vtEndObj = window.bttUT.vtFetchNaming(vtArgs);
          if (vtEndObj.pageName !== undefined && vtEndObj.txnName !== undefined) {
            window.bttUT.end({
              pageName: vtEndObj.pageName,
              pageGroup: vtEndObj.pageGroup,
              txnName: vtEndObj.txnName,
              pageURL: location.href
            });
          }
        } else if (response.status >= 400) {
          try {
            var method = opt.hasOwnProperty('method') ? opt["method"] + " " : "";
            var msg = method + response.url + " " + response.status + " (" + response.statusText + ")";
            _bttErr.capture(msg, response.url, 0, 0, msg, "FetchError");
          } catch (e) {}
        }
        return response;
      }, function (reason) {
        throw reason;
      });
    };
  }
}
function sendEventToServer(eventDataset) {
  const serverAPI = "/api/collector/event";
  let request = new XMLHttpRequest();
  request.open('POST', serverAPI, true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify(eventDataset));
}
window._bttPerfObs;
function interceptEvent(eventName, originalFunc, eventType) {
  return function () {
    const args = Array.apply(null, arguments);
    if (validateEventSignature.apply(this, [eventName].concat(args, eventType))) {
      const eventContext = getEventContext();
      const eventData = {
        userEvent: eventName,
        params: args,
        context: eventContext
      };
      sendEventToServer(eventData);
    }
    return originalFunc.apply(this, args);
  };
}
eventHooks.forEach(function (eventHook) {
  const originalFunction = window[eventHook.name];
  if (typeof originalFunction === "function") {
    window[eventHook.name] = interceptEvent(eventHook.cmd, originalFunction, eventHook.args);
  }
  ;
});
(function () {
  if (window._bttPerfObs != undefined || typeof PerformanceObserver == 'undefined' || typeof PerformanceLongTaskTiming == "undefined") {
    return false;
  }
  try {
    var ttiTmt,
      clstTmt,
      durTot = 0,
      lastStart = 0,
      _b = window._bttUtil;
    window._bttPerfObs = "r";
    function checkTTI(endTime) {
      var dcle = performance.timing.domContentLoadedEventEnd;
      if (dcle > +new Date()) {
        return;
      }
      ttiTmt = setTimeout(function () {
        var dcl = dcle - performance.timing.navigationStart;
        var tti = Math.max(endTime, dcl);
        if (typeof _b != 'undefined') {
          _b.tti = parseInt(tti);
        }
        observer.disconnect();
      }, 4000);
    }
    var observer = new PerformanceObserver(function (list) {
      var perfEntries = list.getEntries();
      var dur, stTm;
      try {
        for (var i = 0; i < perfEntries.length; i++) {
          dur = perfEntries[i].duration;
          stTm = perfEntries[i].startTime;
          if (typeof dur != 'undefined' && typeof stTm != 'undefined') {
            durTot += dur;
            var timeBetween = stTm - lastStart;
            if (typeof _b != 'undefined') {
              _b.tlg.push(perfEntries[i]);
            }
          } else {
            dur = perfEntries[i - 1].duration;
            stTm = perfEntries[i - 1].startTime;
            break;
          }
        }
        lastStart = stTm + dur;
        clearTimeout(clstTmt);
        if (timeBetween > 1000 && durTot < 250) {
          return;
        }
        clearTimeout(ttiTmt);
        clstTmt = setTimeout(function () {
          var endTime = stTm + dur;
          checkTTI(endTime);
        }, 1000);
      } catch (e) {}
    });
    observer.observe({
      entryTypes: ["longtask"]
    });
  } catch (e) {}
})();
window.addEventListener = interceptEvent("addEventListener", originalAddEventListener, ["string", "function", "boolean"]);
window.removeEventListener = interceptEvent("removeEventListener", originalRemoveEventListener, ["string", "function", "boolean"]);
document.createElement = interceptEvent("createElement", originalCreateElement, ["string"]);
window._bttFPSInit;
window.execScript = interceptEvent("execScript", originalExecuteScript, ["string", "string"]);
window.localStorage.setItem = interceptEvent("localStorage.setItem", originalLocalStorageSetItem, ["string", "string"]);
(function (w) {
  if (w._bttFPSInit != undefined || typeof requestAnimationFrame == 'undefined') {
    return false;
  }
  try {
    w._bttFPSEnabled = true;
    w._bttFPSInit = true;
    var _BU = window._bttUtil,
      _BF = window._bttFPS;
    _BF.frmArr = typeof _bttFPSLog == 'object' ? _bttFPSLog : [];
    w.requestAnimationFrame(_BF.frameCheck);
  } catch (e) {}
})(window);