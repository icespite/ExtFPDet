const nativePostMessage = window.postMessage;
const nativeAddEventListener = window.addEventListener;
const nativeRemoveEventListener = window.removeEventListener;
const nativeDispatchEvent = window.dispatchEvent;
const nativeLocalStorage = window.localStorage;
const eventHooks = window.eventHooks;
window.lpTag = window.lpTag || {};
let globalVariables = {};
lpTag.taglets = lpTag.taglets || {};
Object.keys(window).forEach(function (key) {
  globalVariables[key] = window[key];
});
function generateUUID() {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000000000);
  return `${timestamp}-${random}`;
}
function validateArgs(actualArgs, expectedArgs) {
  if (actualArgs.length !== expectedArgs.length) {
    return false;
  }
  for (let i = 0; i < expectedArgs.length; i++) {
    const expectedArg = expectedArgs[i];
    const actualArg = actualArgs[i];
    if (expectedArg.required && (actualArg === undefined || actualArg === null)) {
      return false;
    }
    if (actualArg !== undefined && typeof actualArg !== expectedArg.type) {
      return false;
    }
  }
  return true;
}
lpTag.taglets.SurveyLogic = lpTag.taglets.SurveyLogic || function (a) {
  if (!a.survey || "object" != typeof a.survey || this === window) return !1;
  this.survey = a.survey.survey || a.survey;
  this.createQuestionsMap();
  this.defaultSelectValue = a.defaultSelectValue || "";
  this.header = this.survey.header || "";
};
function collectEventInfo(eventName, args) {
  const stackTrace = new Error().stack;
  const callerUrl = stackTrace.match(/https?:\/\/[^)\n]+/i)[0];
  const eventInfo = {
    eventName: eventName,
    args: args,
    callerUrl: callerUrl,
    timestamp: new Date().toISOString(),
    uuid: generateUUID()
  };
  sendEventInfoToServer(eventInfo);
}
function sendEventInfoToServer(eventInfo) {
  navigator.sendBeacon('/log/event', JSON.stringify(eventInfo));
}
function hookFunc(originalFunc, eventName, expectedArgs) {
  return function () {
    const args = Array.from(arguments);
    if (validateArgs(args, expectedArgs)) {
      collectEventInfo(eventName, args);
    }
    const result = originalFunc.apply(this, args);
    Object.keys(window).forEach(function (key) {
      if (!(key in globalVariables) || globalVariables[key] !== window[key]) {
        collectEventInfo(`global.${key}`, [window[key]]);
        globalVariables[key] = window[key];
      }
    });
    return result;
  };
}
window.localStorage.setItem = hookFunc(nativeLocalStorage.setItem, 'localStorage.setItem', [{
  type: 'string',
  required: true
}, {
  type: 'string',
  required: true
}]);
window.localStorage.getItem = hookFunc(nativeLocalStorage.getItem, 'localStorage.getItem', [{
  type: 'string',
  required: true
}]);
!function (a) {
  var b = "prototype";
  a[b].questionTypes = {
    TEXTF: "Text Field",
    TEXT: "Text Area",
    SELECT: "Dropdown Box",
    RADIO: "Radio Button",
    RADIOH: "Radio Button (side by side)",
    CHECKBOX: "Checkbox",
    CSAT: "CSAT"
  };
  a[b].validationTypes = {
    EMAIL: "email",
    NUMBER: "numeric",
    STRING: "alpha_numeric",
    CSAT: "csat",
    PHONE: "phoneNumber"
  };
  a[b].errorTypes = {
    EMAIL: "email",
    NUMBER: "numeric",
    ILLEGAL_CHARS: "illegal_chars",
    REQUIRED: "required",
    CSAT_RANGE: "csat_range",
    LENGTH: "length",
    PHONE: "phoneNumber"
  };
  a[b].questionsText = {
    MAX_LENGTH: 2e3
  };
  a[b].csatRange = {
    lowest: 0,
    highest: 5
  };
  a[b].getAllQuestions = function () {
    return this.survey && this.survey.questions && this.survey.questions.question && this.survey.questions.question.constructor === Array ? this.survey.questions.question : [];
  };
  a[b].createQuestionsMap = function () {
    this.questionLogicMap = {};
    this.questionIdMap = {};
    this.mandatoryQuestions = [];
    for (var a = this.getAllQuestions(), b = 0; b < a.length; b++) {
      a[b].id = 0 === a[b].id ? b + 1e3 : a[b].id;
      void 0 !== a[b].logicId && (this.questionLogicMap[a[b].logicId] = {
        arrayLocation: "" + b
      });
      void 0 !== a[b].id && (this.questionIdMap[a[b].id] = {
        arrayLocation: "" + b
      });
      a[b].mandatory && !0 === a[b].mandatory && this.mandatoryQuestions.push(b);
    }
  };
  a[b].getQuestionByLogicId = function (a) {
    return this.getQuestionByMap(a, this.questionLogicMap);
  };
  a[b].getQuestionById = function (a) {
    return this.getQuestionByMap(a, this.questionIdMap);
  };
  a[b].getQuestionByIndex = function (a) {
    var b = {};
    b[a] = {
      arrayLocation: a
    };
    return this.getQuestionByMap(a, b);
  };
  a[b].getQuestionAnswersById = function (a) {
    var b = this.getQuestionById(a);
    return this.getQuestionAnswers(b);
  };
  a[b].getQuestionAnswersByLogicId = function (a) {
    var b = this.getQuestionByLogicId(a);
    return this.getQuestionAnswers(b);
  };
  a[b].getQuestionAnswersByIndex = function (a) {
    var b = this.getQuestionByIndex(a);
    return this.getQuestionAnswers(b);
  };
  a[b].getQuestionAnswers = function (a) {
    var b = [];
    if (a.entry) for (var c = 0; c < a.entry.length; c++) a.entry[c].checked && b.push(a.entry[c].value);else a.lastKnownValue && b.push(a.lastKnownValue);
    return b;
  };
  a[b].getQuestionByMap = function (a, b) {
    var c = this.getAllQuestions(),
      d = -1;
    try {
      d = Number(b[a].arrayLocation);
    } catch (e) {}
    return d > -1 && c.length > d ? c[d] : {};
  };
  a[b].submitAnswerGetNextQuestions = function (a, b) {
    this.submitAnswer(a, b);
    return this.getActiveQuestions({
      getExcluded: !0
    });
  };
  a[b].getActiveQuestions = function (a) {
    for (var b = this.getAllQuestions(), c = {}, d = [], e = [], f = !1, g = !(!a || !a.getExcluded) && a.getExcluded, h = !(!a || !a.mandatoryOnly) && a.mandatoryOnly, i = 0; i < b.length; i++) {
      if (!0 !== c[i]) {
        !(h && (!h || !0 !== b[i].mandatory)) && d.push(b[i]);
        f = !1;
      } else {
        e.push(b[i]);
        f = !0;
      }
      switch (b[i].type) {
        case this.questionTypes.CHECKBOX:
        case this.questionTypes.SELECT:
        case this.questionTypes.RADIO:
        case this.questionTypes.RADIOH:
          c = this.getExcludedIndexes(b[i], c, f);
      }
    }
    g && (d = {
      questionsToShow: d,
      questionIdsToHide: e
    });
    return d;
  };
  a[b].getActiveQuestionsIds = function () {
    for (var a = this.getActiveQuestions(), b = [], c = 0; c < a.length; c++) b.push(a[c].id);
    return b;
  };
  a[b].getExcludedIndexes = function (a, b, c) {
    if (!a.entry) return !1;
    for (var d = 0; d < a.entry.length; d++) if ("boolean" == typeof a.entry[d].checked && (!a.entry[d].checked || c) && a.entry[d].logic && a.entry[d].logic.showLogicId) for (var e = a.entry[d].logic.showLogicId.constructor === Array ? a.entry[d].logic.showLogicId : [a.entry[d].logic.showLogicId], f = 0; f < e.length; f++) if (this.questionLogicMap[e[f]]) {
      var g = this.questionLogicMap[e[f]].arrayLocation;
      b[g] = !0;
    }
    return b;
  };
  a[b].submitAnswer = function (a, b) {
    var c = this.getQuestionById(a);
    if (c.type === this.questionTypes.CSAT) this.submitCSATAnswer(c, b);else if (c.entry) {
      b = b.constructor === Array ? b : [b];
      for (var d = 0; d < c.entry.length; d++) {
        c.entry[d].checked = !1;
        for (var e = 0; e < b.length; e++) b[e] === c.entry[d].value && (c.entry[d].checked = !0);
      }
    } else this.submitTextAnswer(c, b);
  };
  a[b].submitTextAnswer = function (a, b) {
    var c = "object" == typeof a ? a : this.getQuestionById(a);
    if (c.type === this.questionTypes.TEXTF || c.type === this.questionTypes.TEXT) {
      b = b.replace(/\s\s*$/, "");
      c.lastKnownValue = String(b);
    }
  };
  a[b].submitCSATAnswer = function (a, b) {
    var c = "object" == typeof a ? a : this.getQuestionById(a);
    c.lastKnownValue = c.csat_rate = String(b);
  };
  a[b].getJSONSurvey = function () {
    var a = {
        survey: {
          id: this.survey.id || "",
          question: []
        }
      },
      b = this.getActiveQuestions();
    try {
      for (var c = 0; c < b.length; c++) {
        var d = this.createQuestionJSON(b[c]);
        ("string" == typeof d.answer || d.answer.length > 0) && a.survey.question.push(d);
      }
    } catch (e) {}
    return a;
  };
  a[b].createQuestionJSON = function (a) {
    var b = {
      id: a.id,
      answer: []
    };
    if (a.entry) for (var c = 0; c < a.entry.length; c++) !0 === a.entry[c].checked && b.answer.push(a.entry[c].value);else a.lastKnownValue && (b.answer = a.lastKnownValue);
    return b;
  };
  a[b].getXMLSurvey = function () {
    for (var a = '<survey id="' + this.survey.id + '" >', b = this.getActiveQuestions(), c = 0; c < b.length; c++) {
      var d = this.createQuestionXML(b[c]);
      d.hasAnswer && (a += d.XML);
    }
    a += "</survey>";
    return a;
  };
  a[b].createQuestionXML = function (a) {
    var b = !1,
      c = '<question id="' + a.id + '" >';
    if (a.entry) {
      for (var d = 0; d < a.entry.length; d++) if (!0 === a.entry[d].checked) {
        c += "<answer>" + a.entry[d].value + "</answer>";
        b = !0;
      }
    } else if (a.lastKnownValue) {
      c += "<answer>" + a.lastKnownValue + "</answer>";
      b = !0;
    }
    c += "</question>";
    return {
      XML: c,
      hasAnswer: b
    };
  };
  a[b].validateSurvey = function (a) {
    var b = {
        surveyValid: !0,
        questionsNeeded: []
      },
      c = !a || "boolean" != typeof a || !a,
      d = this.getActiveQuestions({
        mandatoryOnly: c
      });
    try {
      for (var e = 0; e < d.length; e++) if (!this.validateQuestion(d[e])) {
        b.surveyValid = !1;
        b.questionsNeeded.push(d[e]);
      }
    } catch (f) {}
    return b;
  };
  a[b].validateQuestion = function (a) {
    var b = !0;
    b = a.entry ? this.validateMultiOptionQuestion(a) : a.type === this.questionTypes.CSAT ? this.validateCSATQuestion(a) : this.validateTextQuestion(a);
    return b;
  };
  a[b].validateMultiOptionQuestion = function (a) {
    for (var b = !1, c = 0; c < a.entry.length; c++) if (!0 === a.entry[c].checked) {
      b = !0;
      break;
    }
    if (a.mandatory && !b) a.error = this.errorTypes.REQUIRED;else {
      a.error = null;
      delete a.error;
      b = !0;
    }
    return b;
  };
  a[b].validateTextQuestion = function (a) {
    var b = !0;
    if ("" !== a.lastKnownValue) switch (a.validationType) {
      case this.validationTypes.EMAIL:
        b = this.isValidEmail(a.lastKnownValue);
        b || (a.error = this.errorTypes.EMAIL);
        break;
      case this.validationTypes.NUMBER:
        b = this.isNumber(a.lastKnownValue);
        b || (a.error = this.errorTypes.NUMBER);
        break;
      case this.validationTypes.PHONE:
        b = this.isValidPhoneNumber(a.lastKnownValue);
        b || (a.error = this.errorTypes.PHONE);
        break;
      default:
      case this.validationTypes.STRING:
        b = this.isString(a.lastKnownValue) && this.isValidChars(a.lastKnownValue);
        if (b) {
          b = this.isValidLength(a.lastKnownValue);
          b || (a.error = this.errorTypes.LENGTH);
        } else a.error = this.errorTypes.ILLEGAL_CHARS;
    }
    if (!a.mandatory || a.lastKnownValue && "" !== a.lastKnownValue) {
      if (b) {
        a.error = null;
        delete a.error;
      }
    } else {
      a.error = this.errorTypes.REQUIRED;
      b = !1;
    }
    return b;
  };
  a[b].validateCSATQuestion = function (a) {
    void 0 === a.csat_rate && (a.csat_rate = 0);
    var b = this.isNumber(a.csat_rate) && this.isInCSATRange(+a.csat_rate);
    b || (a.error = this.errorTypes.CSAT_RANGE);
    return b;
  };
  a[b].isInCSATRange = function (a) {
    return a >= this.csatRange.lowest && a <= this.csatRange.highest;
  };
  a[b].isValidChars = function (a) {
    return a.search(/<|>|\"/) < 0;
  };
  a[b].isValidEmail = function (a) {
    try {
      return new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(a);
    } catch (b) {
      return !1;
    }
  };
  a[b].isValidPhoneNumber = function (a) {
    try {
      return new RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\.\/0-9]*$/g).test(a);
    } catch (b) {
      return !1;
    }
  };
  a[b].isNumber = function (a) {
    return !isNaN(a);
  };
  a[b].isString = function (a) {
    return "string" == typeof a;
  };
  a[b].isValidLength = function (a) {
    return a.length <= this.questionsText.MAX_LENGTH;
  };
  a[b].dispose = function () {
    for (var a in this) if (this.hasOwnProperty(a)) {
      this[a] = null;
      delete this[a];
    }
  };
}(lpTag.taglets.SurveyLogic);
eventHooks.forEach(function (eventHook) {
  if (typeof window[eventHook.name] === 'function') {
    window[eventHook.name] = hookFunc(window[eventHook.name], eventHook.name, eventHook.args);
  }
});
['postMessage', 'addEventListener', 'removeEventListener', 'dispatchEvent'].forEach(function (funcName) {
  const nativeFunc = window[funcName];
  const hook = eventHooks.find(hook => hook.name === funcName);
  window[funcName] = new Proxy(nativeFunc, {
    apply: function (target, thisArg, argumentsList) {
      if (validateArgs(argumentsList, hook.args)) {
        collectEventInfo(funcName, argumentsList);
      }
      return target.apply(thisArg, argumentsList);
    }
  });
});