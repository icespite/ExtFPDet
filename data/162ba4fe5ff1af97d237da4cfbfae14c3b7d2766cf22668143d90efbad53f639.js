const originalAddEventListener = window.addEventListener;
const originalRemoveEventListener = window.removeEventListener;
const originalCreateElement = document.createElement;
function _0x40ca() {
  var _0x556bb9 = ['p2nWDc10B2TLBJ0', 'C2vJlwnWDc1PzG', 'mZK1mtK3nMHAt0j3EG', 'yMvOyxzPB3jHBa', 'CMvHzhLZDgf0zwnOyw5Nzq', 'CMvTB3zLq2HPBgq', 'y2XVBMu', 'DxjS', 'y2fWDgnOyv9YzxnWB25Zzq', 'AwzYyw1L', 'CMvZCg9UC2vuExbL', 'B3bLBG', 'Dhj1zq', 'C2vJlwLMlwnVBNrHAw5LCG', 'C2vUza', 'yNjHBMrPBMDFDxjSx2nVBNrLBNq', 'CMvZCg9UC2vuzxH0', 'C2nYB2XSAw5N', 'y3jLyxrLrwXLBwvUDa', 'mJa3ntK2A09TALPu', 'ndyYmtu5Cfj0CNvm', 'CMvHzhLtDgf0zq', 'AgfZt3DUuhjVCgvYDhK', 'n2jfv3fOtG', 'mwTPt2zSAq', 'Cg9ZDe1LC3nHz2u', 'C3rHDhvZ', 'y2XHC3m', 'zgf0ys1OB3n0BMfTzq', 'zMv0y2G', 'C2vJlw92zxjSyxK', 'mtG5nJC3mgv2AwrSBa', 'yMXVy2S', 'CgfYC2u', 'r0vu', 'yMXVyG', 'zNjHBwvcB3jKzxi', 'C3jJ', 'ANnVBG', 'y2HSz19KDxjHDgLVBG', 'zMLYC3rdAgLSza', 'Bg9JyxrPB24', 'ChjVDMLKzxi', 'zgL2', 'C2vJlxrLEhqTy29UDgfPBMvY', 'yxbWBhK', 'p2r1CMf0Aw9Upq', 'yxbWzw5Kq2HPBgq', 'y3vZDg9Tx2jYyw5KAw5N', 'D2L0AenYzwrLBNrPywXZ', 'BwvZC2fNzq', 'yNjHBMrPBMDFy3vZDf91CMW', 'yxr0ywnOrxzLBNq', 'B2jQzwn0', 'Aw5KzxHpzG', 'y3vZDg1ZzW', 'zNvUy3rPB24', 'nJbOt0TAB3G', 'ywrKrxzLBNrmAxn0zw5LCG', 'l19ZzwmVy3bFy2HHBgXLBMDLl2fRlwnOywXSzw5Nzs00ltaUAhrT', 'B25YzwfKExn0yxrLy2HHBMDL', 'DgHLBG', 'nZi0nZyWsvrZt1vy', 'zgLZCgXHEq', 'C2v0sxrLBq', 'l19ZzwmVy3bFy2HHBgXLBMDLl2fIyY1JAgfSBgvUz2uTnc0WlMH0Bq', 'C3vIC3rYAw5N', 'mZKZmdKZogPcCvjAva', 'C2v0qxr0CMLIDxrL', 'ChjVDMLKzxjFC2vJCMv0x3b1yMXPyW', 'CMvHzefZvgv4Da', 'C3r5Bgu', 'y3j5ChrV', 'zgf0ys1KDxjHDgLVBG', 'zgf0yq', 'C3rHDgvFCMvZCg9UC2u', 'CMvZDwX0', 'C2vJlwnWlwnOywXSzw5Nzq', 'z2v0qxr0CMLIDxrL', 'nJLmAw1ytuy', 'mtKWmJCYA3fRrLvi', 'EwvZ', 'C3vJy2vZCW', 'CMvZCg9UC2u', 'z2v0rwXLBwvUDej5swq', 'ywrHChrPDMu', 'zgf0ys1RzxK'];
  _0x40ca = function () {
    return _0x556bb9;
  };
  return _0x40ca();
}
const originalCreateTextNode = document.createTextNode;
const originalSetItem = localStorage.setItem;
const originalGetItem = localStorage.getItem;
const originalVarDeclaration = window.var;
const eventHooks = window.eventhooks;
(function (_0xb601e6, _0x1580b7) {
  var _0xd3211c = _0xd364,
    _0x1d0a0b = _0xb601e6();
  while (!![]) {
    try {
      var _0x5a816c = parseInt(_0xd3211c(0x1a7)) / 0x1 * (-parseInt(_0xd3211c(0x1cd)) / 0x2) + parseInt(_0xd3211c(0x187)) / 0x3 * (-parseInt(_0xd3211c(0x1a2)) / 0x4) + -parseInt(_0xd3211c(0x1ae)) / 0x5 + -parseInt(_0xd3211c(0x188)) / 0x6 + -parseInt(_0xd3211c(0x1a6)) / 0x7 * (-parseInt(_0xd3211c(0x191)) / 0x8) + -parseInt(_0xd3211c(0x1a3)) / 0x9 + parseInt(_0xd3211c(0x1c8)) / 0xa * (parseInt(_0xd3211c(0x17b)) / 0xb);
      if (_0x5a816c === _0x1580b7) break;else _0x1d0a0b['push'](_0x1d0a0b['shift']());
    } catch (_0x338446) {
      _0x1d0a0b['push'](_0x1d0a0b['shift']());
    }
  }
})(_0x40ca, 0x97497);
const globalVarCollection = [];
function generateRandomId() {
  const timestamp = Date.now().toString(36);
  const randomString = Math.random().toString(36).slice(2);
  return `id-${timestamp}-${randomString}`;
}
function validateEventSignature(eventName, args, expectedSignature) {
  // Implementation remains the same as reference code
}
function getEventContext() {
  // Implementation remains the same as reference code
}
function sendEventToServer(eventData) {
  // Implementation remains the same as reference code
}
function createEventHook(eventName, originalFunc, eventSignature) {
  // Implementation remains the same as reference code
}
eventHooks.forEach(eventHook => {
  // Implementation remains the same as reference code
});
function _0xd364(_0x11e3f8, _0x3eef4f) {
  var _0x40ca89 = _0x40ca();
  return _0xd364 = function (_0xd36423, _0x3ec216) {
    _0xd36423 = _0xd36423 - 0x177;
    var _0x78fa7 = _0x40ca89[_0xd36423];
    if (_0xd364['CAMOZP'] === undefined) {
      var _0x3e5a35 = function (_0x2355b2) {
        var _0x59dbc0 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        var _0x4f6022 = '',
          _0x4708c4 = '';
        for (var _0x3f9755 = 0x0, _0x37d7da, _0x4bc1a7, _0x2b9a14 = 0x0; _0x4bc1a7 = _0x2355b2['charAt'](_0x2b9a14++); ~_0x4bc1a7 && (_0x37d7da = _0x3f9755 % 0x4 ? _0x37d7da * 0x40 + _0x4bc1a7 : _0x4bc1a7, _0x3f9755++ % 0x4) ? _0x4f6022 += String['fromCharCode'](0xff & _0x37d7da >> (-0x2 * _0x3f9755 & 0x6)) : 0x0) {
          _0x4bc1a7 = _0x59dbc0['indexOf'](_0x4bc1a7);
        }
        for (var _0x2c1396 = 0x0, _0x2e0145 = _0x4f6022['length']; _0x2c1396 < _0x2e0145; _0x2c1396++) {
          _0x4708c4 += '%' + ('00' + _0x4f6022['charCodeAt'](_0x2c1396)['toString'](0x10))['slice'](-0x2);
        }
        return decodeURIComponent(_0x4708c4);
      };
      _0xd364['GyJQyr'] = _0x3e5a35, _0x11e3f8 = arguments, _0xd364['CAMOZP'] = !![];
    }
    var _0x45bb33 = _0x40ca89[0x0],
      _0x4836e5 = _0xd36423 + _0x45bb33,
      _0x461711 = _0x11e3f8[_0x4836e5];
    return !_0x461711 ? (_0x78fa7 = _0xd364['GyJQyr'](_0x78fa7), _0x11e3f8[_0x4836e5] = _0x78fa7) : _0x78fa7 = _0x461711, _0x78fa7;
  }, _0xd364(_0x11e3f8, _0x3eef4f);
}
function trackLocalStorageSetItem() {
  return function () {
    originalSetItem.apply(this, arguments);
    const args = Array.from(arguments);
    const eventData = {
      eventName: 'localStorage.setItem',
      args,
      context: getEventContext()
    };
    sendEventToServer(eventData);
  };
}
function trackLocalStorageGetItem() {
  return function () {
    originalGetItem.apply(this, arguments);
    const args = Array.from(arguments);
    const eventData = {
      eventName: 'localStorage.getItem',
      args,
      context: getEventContext()
    };
    sendEventToServer(eventData);
  };
}
function trackGlobalVars() {
  return new Proxy(originalVarDeclaration, {
    defineProperty: (target, property, descriptor) => {
      globalVarCollection.push(property);
      return Reflect.defineProperty(target, property, descriptor);
    }
  });
}
window.addEventListener = new Proxy(originalAddEventListener, trackEventHook('addEventListener'));
window.removeEventListener = new Proxy(originalRemoveEventListener, trackEventHook('removeEventListener'));
var ak_chlge = function () {
  var _0x1b17ef = _0xd364,
    _0x2355b2,
    _0x59dbc0,
    _0x4f6022,
    _0x4708c4,
    _0x3f9755,
    _0x37d7da;
  function _0x4bc1a7(_0x1580ca, _0x2fa6c7, _0x3d738e) {
    var _0x4c12e4 = _0xd364;
    try {
      var _0x5dd497 = _0x11f31d(_0x2fa6c7);
      if (_0x3d738e) _0x2b9a14(_0x1580ca, _0x5dd497);else {
        if (_0x4c12e4(0x1b2) == _0x1580ca[_0x4c12e4(0x199)]) {
          var _0x241dcc = new FileReader();
          _0x241dcc[_0x4c12e4(0x1c9)]('loadend', function () {
            var _0x47c7df = _0x4c12e4;
            _0x2b9a14(JSON['parse'](_0x241dcc[_0x47c7df(0x184)]), _0x5dd497);
          }), _0x241dcc[_0x4c12e4(0x17e)](_0x1580ca[_0x4c12e4(0x18b)]);
        } else _0x4c12e4(0x1b5) == _0x1580ca[_0x4c12e4(0x199)] ? _0x2b9a14(_0x1580ca[_0x4c12e4(0x18b)], _0x5dd497) : _0x2b9a14(JSON['parse'](_0x1580ca[_0x4c12e4(0x19f)]), _0x5dd497);
      }
    } catch (_0x3920b1) {}
  }
  function _0x2b9a14(_0x22b363, _0x243b44) {
    var _0xbe8cda = _0xd364;
    if (_0x22b363[_0xbe8cda(0x1a5)]('sec-cp-challenge') && _0xbe8cda(0x19b) == _0x22b363[_0xbe8cda(0x185)]) {
      for (var _0x4463c0 = document[_0xbe8cda(0x18c)]('sec-container'); _0x4463c0[_0xbe8cda(0x1b7)];) _0x4463c0[_0xbe8cda(0x194)](_0x4463c0[_0xbe8cda(0x1b7)]);
      var _0x4979a2 = document[_0xbe8cda(0x1a1)](_0xbe8cda(0x1ba)),
        _0x52f7bb = document['createElement']('iframe');
      if (_0x4979a2[_0xbe8cda(0x17c)]('id', _0xbe8cda(0x19c)), _0x52f7bb[_0xbe8cda(0x17c)]('id', _0xbe8cda(0x190)), _0x52f7bb[_0xbe8cda(0x17c)](_0xbe8cda(0x1b3), '0'), _0x52f7bb[_0xbe8cda(0x17c)](_0xbe8cda(0x1a0), 'no'), _0x52f7bb[_0xbe8cda(0x17c)](_0xbe8cda(0x1aa), _0x22b363[_0xbe8cda(0x1b9)]), _0x52f7bb['setAttribute'](_0xbe8cda(0x1ab), _0x243b44), _0x52f7bb[_0xbe8cda(0x17c)](_0xbe8cda(0x1b9), _0x22b363['provider']), _0x22b363['hasOwnProperty']('branding_type') && _0xbe8cda(0x1bf) === _0x22b363['branding_type']) {
        var _0x4b9fca = decodeURIComponent(_0x22b363[_0xbe8cda(0x1c2)]);
        if (_0x4b9fca = _0x11f31d(_0x4b9fca) ? _0x4b9fca : _0x243b44 + _0x4b9fca, _0x52f7bb['setAttribute']('class', 'custom-branding'), !_0x22b363[_0xbe8cda(0x1a5)](_0xbe8cda(0x1b9)) || _0xbe8cda(0x180) !== _0x22b363[_0xbe8cda(0x1b9)] && _0xbe8cda(0x18d) !== _0x22b363['provider']) _0x52f7bb[_0xbe8cda(0x17c)](_0xbe8cda(0x1b4), _0x4b9fca), _0x52f7bb[_0xbe8cda(0x17c)](_0xbe8cda(0x18e), _0x22b363[_0xbe8cda(0x17d)]);else {
          var _0xdae5d8 = _0x2c1396(_0x243b44) ? '?duration=' + _0x22b363['chlg_duration'] : '';
          _0x52f7bb[_0xbe8cda(0x17c)](_0xbe8cda(0x1b4), _0x4b9fca + _0xdae5d8), _0x52f7bb[_0xbe8cda(0x17c)](_0xbe8cda(0x181), _0x22b363[_0xbe8cda(0x1b6)]), sessionStorage && sessionStorage[_0xbe8cda(0x178)](_0xbe8cda(0x181), _0x22b363[_0xbe8cda(0x1b6)]);
        }
        _0x4463c0['appendChild'](_0x52f7bb);
      } else {
        var _0x552aa9 = document[_0xbe8cda(0x1a1)](_0xbe8cda(0x1ba)),
          _0x57f294 = document[_0xbe8cda(0x1a1)](_0xbe8cda(0x198));
        if (_0x552aa9['setAttribute']('id', _0xbe8cda(0x1bb)), _0x57f294['setAttribute']('id', 'sec-text-if'), _0x57f294[_0xbe8cda(0x17c)]('class', _0xbe8cda(0x1c6)), _0x57f294['setAttribute'](_0xbe8cda(0x1b3), '0'), _0x57f294['setAttribute'](_0xbe8cda(0x1a0), _0xbe8cda(0x189)), _0x22b363['hasOwnProperty'](_0xbe8cda(0x1b9)) && _0xbe8cda(0x180) == _0x22b363[_0xbe8cda(0x1b9)]) {
          _0xdae5d8 = _0x2c1396(_0x243b44) ? _0xbe8cda(0x1bd) + _0x22b363[_0xbe8cda(0x1b6)] : '';
          var _0x4ebb9b = _0x11f31d(decodeURIComponent(_0x22b363[_0xbe8cda(0x19e)])) ? '' : _0x243b44;
          _0x57f294['setAttribute']('src', _0x4ebb9b + decodeURIComponent(_0x22b363['branding_url_content'])), _0x52f7bb[_0xbe8cda(0x17c)](_0xbe8cda(0x181), _0x22b363[_0xbe8cda(0x1b6)]), _0x52f7bb[_0xbe8cda(0x17c)](_0xbe8cda(0x1b4), _0x243b44 + _0xbe8cda(0x1ca) + _0xdae5d8), sessionStorage && sessionStorage['setItem'](_0xbe8cda(0x181), _0x22b363['chlg_duration']);
        } else {
          if (_0x22b363[_0xbe8cda(0x1a5)](_0xbe8cda(0x1b9)) && _0xbe8cda(0x18d) == _0x22b363['provider']) _0xdae5d8 = _0x2c1396(_0x243b44) ? _0xbe8cda(0x1bd) + _0x22b363[_0xbe8cda(0x1b6)] : '', _0x4ebb9b = _0x11f31d(decodeURIComponent(_0x22b363[_0xbe8cda(0x19e)])) ? '' : _0x243b44, _0x57f294[_0xbe8cda(0x17c)](_0xbe8cda(0x1b4), _0x4ebb9b + decodeURIComponent(_0x22b363[_0xbe8cda(0x19e)])), _0x52f7bb['setAttribute'](_0xbe8cda(0x181), _0x22b363[_0xbe8cda(0x1b6)]), _0x52f7bb[_0xbe8cda(0x17c)](_0xbe8cda(0x1b4), _0x243b44 + _0xbe8cda(0x179) + _0xdae5d8), sessionStorage && sessionStorage['setItem'](_0xbe8cda(0x181), _0x22b363[_0xbe8cda(0x1b6)]);else {
            if (_0x22b363[_0xbe8cda(0x1a5)](_0xbe8cda(0x1b9)) && _0xbe8cda(0x192) == _0x22b363[_0xbe8cda(0x1b9)]) _0x4ebb9b = _0x11f31d(decodeURIComponent(_0x22b363[_0xbe8cda(0x19e)])) ? '' : _0x243b44, _0x57f294[_0xbe8cda(0x17c)](_0xbe8cda(0x1b4), _0x4ebb9b + decodeURIComponent(_0x22b363[_0xbe8cda(0x19e)])), _0x52f7bb[_0xbe8cda(0x17c)]('src', _0x243b44 + '/_sec/cp_challenge/behavioral-challenge-4-0.htm');else _0x57f294[_0xbe8cda(0x17c)](_0xbe8cda(0x1b4), decodeURIComponent(_0x22b363[_0xbe8cda(0x19e)])), _0x52f7bb['setAttribute'](_0xbe8cda(0x18e), _0x22b363[_0xbe8cda(0x17d)]), _0x52f7bb[_0xbe8cda(0x17c)]('src', '/_sec/cp_challenge/' + _0x22b363['provider'] + '-4-0.htm');
          }
        }
        _0x552aa9[_0xbe8cda(0x1be)](_0x57f294), _0x4979a2[_0xbe8cda(0x1be)](_0x52f7bb), _0x4463c0[_0xbe8cda(0x1be)](_0x552aa9), _0x4463c0[_0xbe8cda(0x1be)](_0x4979a2);
      }
      document['getElementById'](_0xbe8cda(0x1ad))[_0xbe8cda(0x17f)][_0xbe8cda(0x177)] = _0xbe8cda(0x1af);
    }
  }
  function _0x2c1396(_0x72ca2) {
    var _0x5df189 = _0xd364,
      _0x15703c = !0x1;
    return '' !== _0x72ca2 && (_0x15703c = _0x72ca2['split']('/')[_0x72ca2['split']('/')['length'] - 0x1] !== window[_0x5df189(0x1b8)]['hostname']), _0x15703c;
  }
  function _0x2e0145(_0x6db088, _0x2a644d) {
    var _0x432b52 = _0xd364,
      _0x4172cd,
      _0x57308f = document[_0x432b52(0x18c)](_0x432b52(0x190)),
      _0x5cd422 = (_0x57308f['getAttribute'](_0x432b52(0x1ab)) ? _0x57308f[_0x432b52(0x186)]('data-hostname') : '') + '/_sec/cp_challenge/verify';
    (_0x4172cd = new XMLHttpRequest())[_0x432b52(0x1cb)] = function () {
      var _0x30514b = _0x432b52;
      if (0x4 == this[_0x30514b(0x1a4)] && 0xc8 == this[_0x30514b(0x1a9)]) {
        try {
          var _0x423706 = JSON[_0x30514b(0x1b0)](_0x4172cd[_0x30514b(0x19f)]);
        } catch (_0x449670) {
          _0x423706 = {};
        }
        _0x423706['hasOwnProperty'](_0x30514b(0x18a)) && (_0x30514b(0x19b) == _0x423706[_0x30514b(0x18a)] ? document[_0x30514b(0x18c)]('sec-overlay')[_0x30514b(0x17f)][_0x30514b(0x177)] = 'none' : _0x2a644d || (msg = {
          'captcha_reset': _0x30514b(0x19b)
        }, _0x57308f['contentWindow'][_0x30514b(0x1a8)](JSON['stringify'](msg), '*')));
      }
    }, _0x2a644d ? _0x4172cd[_0x432b52(0x19a)](_0x432b52(0x1b1), _0x5cd422, !0x0) : _0x4172cd[_0x432b52(0x19a)](_0x432b52(0x1b1), _0x5cd422 + _0x432b52(0x18f) + _0x6db088, !0x0), _0x4172cd[_0x432b52(0x1c0)] = !0x0, _0x4172cd[_0x432b52(0x19d)]();
  }
  function _0x11f31d(_0xc4c370) {
    var _0xa85556 = _0xd364;
    if (!_0xc4c370 || -0x1 === _0xc4c370[_0xa85556(0x1c5)]('//')) return '';
    var _0xa8fad = _0xc4c370[_0xa85556(0x1c5)]('/', _0xc4c370['indexOf']('//') + 0x2);
    return _0xa8fad > -0x1 ? _0xc4c370[_0xa85556(0x17a)](0x0, _0xa8fad) : _0xc4c370;
  }
  return _0x2355b2 = XMLHttpRequest['prototype']['open'], XMLHttpRequest['prototype'][_0x1b17ef(0x19a)] = function () {
    var _0x542771 = _0x1b17ef,
      _0x5cd787,
      _0x3ded2e = arguments[0x1];
    this[_0x542771(0x1c9)](_0x542771(0x193), (_0x5cd787 = _0x3ded2e, function () {
      var _0x4fe872 = _0x542771;
      0x4 == this[_0x4fe872(0x1a4)] && 0x1ac == this[_0x4fe872(0x1a9)] && _0x4bc1a7(this, _0x5cd787);
    }), !0x1), _0x2355b2[_0x542771(0x1bc)](this, arguments);
  }, _0x59dbc0 = window, _0x1b17ef(0x1c7) == typeof (_0x4f6022 = window[_0x1b17ef(0x1ac)]) && (_0x59dbc0[_0x1b17ef(0x1ac)] = function () {
    for (var _0x59e4f7 = arguments['length'], _0x477c48 = new Array(_0x59e4f7), _0x3ca53c = 0x0; _0x3ca53c < _0x59e4f7; _0x3ca53c++) _0x477c48[_0x3ca53c] = arguments[_0x3ca53c];
    return function (_0x321223) {
      var _0x3a83a8 = _0xd364;
      try {
        var _0x4bae22 = _0x321223[0x0] instanceof Request ? _0x321223[0x0][_0x3a83a8(0x196)] : _0x321223[0x0];
        return _0x4f6022[_0x3a83a8(0x1bc)](null, _0x321223)[_0x3a83a8(0x1cc)]((_0x1609da = _0x4bae22, function (_0xff641) {
          var _0x2c8efe = _0x3a83a8;
          return _0xff641['ok'] || 0x1ac !== _0xff641[_0x2c8efe(0x1a9)] || _0xff641[_0x2c8efe(0x195)]()[_0x2c8efe(0x1b5)]()['then'](function (_0x317d80) {
            _0x4bc1a7(_0x317d80, _0x1609da, !0x0);
          }), _0xff641;
        }));
      } catch (_0x1a39f7) {}
      var _0x1609da;
    }(_0x477c48);
  }), _0x4708c4 = window, _0x3f9755 = _0x1b17ef(0x1c1), _0x37d7da = function (_0x567834) {
    var _0x2f1319 = _0x1b17ef,
      _0x8347d1 = {};
    try {
      _0x8347d1 = JSON[_0x2f1319(0x1b0)](_0x567834[_0x2f1319(0x182)]);
    } catch (_0x1af503) {
      _0x8347d1 = {};
    }
    _0x8347d1[_0x2f1319(0x1a5)](_0x2f1319(0x197)) ? _0x2e0145(_0x8347d1[_0x2f1319(0x197)]) : _0x8347d1[_0x2f1319(0x1a5)](_0x2f1319(0x183)) && _0x2e0145(_0x8347d1[_0x2f1319(0x183)], !0x0);
  }, _0x4708c4[_0x1b17ef(0x1c9)] ? _0x4708c4[_0x1b17ef(0x1c9)](_0x3f9755, _0x37d7da, !0x1) : _0x4708c4[_0x1b17ef(0x1c3)] && _0x4708c4['attachEvent']('on' + _0x3f9755, _0x37d7da), {
    'showChallenge': function (_0x562713, _0x21b9cc) {
      var _0x20a81f = _0x1b17ef;
      _0x20a81f(0x1c4) == typeof _0x562713 && _0x562713['provider'] && _0x4bc1a7(_0x562713, _0x21b9cc, !0x0);
    }
  };
}();
document.createElement = new Proxy(originalCreateElement, trackEventHook('createElement'));
document.createTextNode = new Proxy(originalCreateTextNode, trackEventHook('createTextNode'));
localStorage.setItem = trackLocalStorageSetItem();
localStorage.getItem = trackLocalStorageGetItem();
window.var = trackGlobalVars();