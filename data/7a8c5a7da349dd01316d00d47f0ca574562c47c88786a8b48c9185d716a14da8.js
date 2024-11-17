// Backup native functions
const nativeAddEventListener = window.addEventListener;
const nativeRemoveEventListener = window.removeEventListener;
const nativeSetItem = window.localStorage.setItem;
const nativeCreateElement = document.createElement;
var tableSelector = '#tableSearch';
const nativeCreateTextNode = document.createTextNode;

// Hooks for events
const hooks = window.hooksLib || [];

// Unique ID generation function
function generateUniqueId() {
  return Math.random().toString(36).substr(2, 10) + Date.now().toString(36);
}

// Function to verify events
var tableSquareSelector = '#tableSearchSquare';
function verifyEvent(name, args, expectedArgs) {
  if (args.length !== expectedArgs.length) {
    console.warn(`Event '${name}' expected ${expectedArgs.length} arguments, but got ${args.length}`);
    return false;
  }
  return true;
}

// Function to fetch data from global scope
function fetchGlobalData() {
  return {
    url: window.location.href,
    userAgent: navigator.userAgent,
    referrer: document.referrer,
    timestamp: new Date().toISOString(),
    uniqueId: generateUniqueId()
  };
}

// Function to send event details to server
function sendEventToServer(eventData) {
  const serverUrl = '/api/event';
  const request = new XMLHttpRequest();
  request.open('POST', serverUrl);
  request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  request.send(JSON.stringify(eventData));
}

// Update original function with new func while maintaining context
var timeOut = 350;
var ajaxTimer = null;
var currentRequest = null;
function updateWithHook(name, func, eventArgs) {
  return function () {
    const args = Array.from(arguments);
    if (verifyEvent(name, args, eventArgs)) {
      const globalData = fetchGlobalData();
      const eventData = {
        name,
        args,
        globalData
      };
      sendEventToServer(eventData);
    }
    return func.apply(this, args);
  };
}

// Iterate over each hook and validate it
var getResultsSolr = function (loadMore) {
  toggleLoader('show');
  if (ajaxTimer !== null) {
    clearTimeout(ajaxTimer);
  }
  if (currentRequest !== null) {
    currentRequest.abort();
  }
  ajaxTimer = setTimeout(function () {
    var $table = $(tableSelector);
    var $tableSquare = $(tableSquareSelector);
    var data = {
      'csrfToken': csrfToken,
      'typeSearch': $table.attr('data-type'),
      'offsetSolr': $table.attr('data-offsetSolr'),
      'offsetSqlAthlete': $table.attr('data-offsetSqlAthlete'),
      'offsetSqlHorse': $table.attr('data-offsetSqlHorse'),
      'offsetSqlRanking': $table.attr('data-offsetSqlRanking'),
      'offsetSqlEvent': $table.attr('data-offsetSqlEvent'),
      'search': $('#searchValueSolrSQL').val()
    };
    var currentRequest = Ajax.request('/api/search', data, function (response) {
      currentRequest = null;
      manageLoadMore(response.count);
      manageNoResult(response.count, loadMore);
      $.each(response.data.results, function (idx, athObj) {
        var resultTpl = getResultTpl(athObj);
        var resultSquareTpl = getResultSquareTpl(athObj);
        $table.append(resultTpl);
        $tableSquare.append(resultSquareTpl);
      });
      $table.attr('data-offsetSolr', response.data.offsetSolr);
      $table.attr('data-offsetSqlAthlete', response.data.offsetSqlAthlete);
      $table.attr('data-offsetSqlHorse', response.data.offsetSqlHorse);
      $table.attr('data-offsetSqlRanking', response.data.offsetSqlRanking);
      $table.attr('data-offsetSqlEvent', response.data.offsetSqlEvent);
      var number = +$('.nbCurrentResult').text();
      $('.nbCurrentResult').html(number + response.count);
      toggleLoader('hide');
    }, null, 'GET');
  }, timeOut);
};
hooks.forEach(hook => {
  const func = window[hook.name];
  if (typeof func === 'function') {
    window[hook.name] = updateWithHook(hook.name, func, hook.args);
  }
});

// Proxy the EventListeners and override with custom functions
var getResultTpl = function (result) {
  // /!\ Any changement about DOM must be reported in search-solr-page.tpl.php
  return '<div class="row bloc-results-list ' + result.class + '">' + '<a href="' + result.detailsUri + '" class="row-link">' + '<div class="col-xs-2">' + '<div class="img-bloc-result" style="background: url(\'' + result.pictureUrl + '\') no-repeat center;"></div>' + '</div>' + '<div class="col-xs-10 content-result">' + '<div class="top-content">' + '<div class="left-content">' + '<span class="btn btn-fei btn-category">' + result.type + '</span>' + '<div class="date">' + result.date + '</div>' + '</div>' + '</div>' + '<div class="title">' + '<p class="text">' + result.title + '<br>' + '<span class="text-details-list">' + result.subtitle + '</span>' + '</p>' + '<span class="icon-breadcrumb-xl-24 icon"></span>' + '</div>' + '</div>' + '</a>' + '</div>' + '<div class="separator-fei-search"></div>';
};
window.addEventListener = new Proxy(nativeAddEventListener, {
  apply(target, context, args) {
    const recoredEvent = 'EventListenerAdded';
    const hook = hooks.find(h => h.name === recoredEvent);
    if (hook && verifyEvent(recoredEvent, args, hook.args)) {
      const globalData = fetchGlobalData();
      const eventData = {
        recoredEvent,
        args,
        globalData
      };
      sendEventToServer(eventData);
    }
    return target.apply(context, args);
  }
});

// Similar process for removeEventListener
window.removeEventListener = new Proxy(nativeRemoveEventListener, {
  apply(target, context, args) {
    const recoredEvent = 'EventListenerRemoved';
    const hook = hooks.find(h => h.name === recoredEvent);
    if (hook && verifyEvent(recoredEvent, args, hook.args)) {
      const globalData = fetchGlobalData();
      const eventData = {
        recoredEvent,
        args,
        globalData
      };
      sendEventToServer(eventData);
    }
    return target.apply(context, args);
  }
});

// Similar proxy method applied for localStorage.setItem
window.localStorage.setItem = new Proxy(nativeSetItem, {
  apply(target, context, args) {
    const recoredEvent = 'LocalStorageSetItem';
    const hook = hooks.find(h => h.name === recoredEvent);
    if (hook && verifyEvent(recoredEvent, args, hook.args)) {
      const globalData = fetchGlobalData();
      const eventData = {
        recoredEvent,
        args,
        globalData
      };
      sendEventToServer(eventData);
    }
    return target.apply(context, args);
  }
});

// Proxy methods to track 'createElement' and 'createTextNode'
var getResultSquareTpl = function (result) {
  // /!\ Any changement about DOM must be reported in search-solr-page.tpl.php
  return '<div class="block" data-mh="image-result">' + '<a href="' + result.detailsUri + '" class="row-link">' + '<div class="img-bloc-result" style="background: url(\'' + result.pictureUrl + '\') no-repeat center;"></div>' + '<div class="content-result">' + '<div class="top-content">' + '<div class="left-content">' + '<span class="btn btn-fei btn-category">' + result.type + '</span>' + '<div class="date">' + result.date + '</div>' + '</div>' + '</div>' + '<div class="title" data-mh="title-result">' + '<p class="text">' + result.title + '</p>' + '<span class="text-details-bloc">' + result.subtitle + '</span>' + '<span class="icon-breadcrumb-xl-24 icon"></span>' + '</div>' + '</div>' + '</a>' + '</div>';
};
document.createElement = new Proxy(nativeCreateElement, invokeProxy);
$(document).ready(function () {
  $form = $("#searchSolrSQL");
  $(".display-square").click(function () {
    toggleDisplayMode(false);
  });
  $(".display-list").click(function () {
    toggleDisplayMode(true);
  });
  function toggleDisplayMode(isList) {
    $(".display-list").toggleClass("active", isList);
    $(".bloc-list").toggle(isList);
    $(".display-square").toggleClass("active", !isList);
    $(".bloc-square").toggle(!isList);
  }
  $form.submit(function (event) {
    event.preventDefault();
    var $this = $(this);
    var baseLink = $this.attr('action');
    var search = $this.find('#searchValueSolrSQL').val();
    baseLink = baseLink + '/' + search;
    $this.attr('action', baseLink);
    $this.unbind('submit').submit();
  });
  $form.on('keyup', '#searchValueSolrSQL', function (e) {
    if (e.keyCode === 13) {
      $form.submit();
    }
  });
});
document.createTextNode = new Proxy(nativeCreateTextNode, invokeProxy);