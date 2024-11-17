const originalSetTimeout = window.setTimeout;
const originalSetInterval = window.setInterval;
const originalRequestAnimationFrame = window.requestAnimationFrame;
var is_regexp = window.RegExp ? true : false;
const originalFetch = window.fetch;
function fetch_object(idname) {
  if (document.getElementById) {
    return document.getElementById(idname);
  } else if (document.all) {
    return document.all[idname];
  } else if (document.layers) {
    return document.layers[idname];
  } else {
    return null;
  }
}
const originalAddEventListener = window.addEventListener;
const originalLocalStorage = window.localStorage;
const eventHooks = window.eventhooks;
const trackedVariables = {};
function generateUniqueToken() {
  const randomBytes = new Uint8Array(16);
  crypto.getRandomValues(randomBytes);
  const token = Array.from(randomBytes, byte => byte.toString(16).padStart(2, '0')).join('');
  return token;
}
function toggle_collapse(objid) {
  if (!is_regexp) {
    return false;
  }
  obj = fetch_object('collapseobj_' + objid);
  img = fetch_object('collapseimg_' + objid);
  cel = fetch_object('collapsecel_' + objid);
  if (!obj) {
    // nothing to collapse!
    if (img) {
      // hide the clicky image if there is one
      img.style.display = 'none';
    }
    return false;
  }
  if (obj.style.display == 'none') {
    obj.style.display = '';
    save_collapsed(objid, false);
    if (img) {
      img_re = new RegExp("_collapsed\\.gif$");
      img.src = img.src.replace(img_re, '.gif');
    }
    if (cel) {
      cel_re = new RegExp("^(thead|tcat)(_collapsed)$");
      cel.className = cel.className.replace(cel_re, '$1');
    }
  } else {
    obj.style.display = 'none';
    save_collapsed(objid, true);
    if (img) {
      img_re = new RegExp("\\.gif$");
      img.src = img.src.replace(img_re, '_collapsed.gif');
    }
    if (cel) {
      cel_re = new RegExp("^(thead|tcat)$");
      cel.className = cel.className.replace(cel_re, '$1_collapsed');
    }
  }
  return false;
}
function validateEventArguments(eventName, args, expectedArgs) {
  if (args.length !== expectedArgs.length) {
    console.warn(`Invalid number of arguments for event '${eventName}'. Expected ${expectedArgs.length}, but got ${args.length}.`);
    return false;
  }
  for (let i = 0; i < expectedArgs.length; i++) {
    const expectedType = expectedArgs[i].type;
    const actualArg = args[i];
    if (expectedType === 'any') {
      continue;
    }
    if (typeof actualArg !== expectedType) {
      console.warn(`Invalid argument type for event '${eventName}' at index ${i}. Expected '${expectedType}', but got '${typeof actualArg}'.`);
      return false;
    }
  }
  return true;
}
function getEventMetadata() {
  return {
    url: window.location.href,
    timestamp: Date.now(),
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    token: generateUniqueToken()
  };
}
function sendEventPayload(payload) {
  const collectorUrl = '/collect';
  if (typeof originalFetch === 'function') {
    originalFetch(collectorUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).catch(error => {
      console.error('Failed to send event payload:', error);
    });
  } else {
    const request = new XMLHttpRequest();
    request.open('POST', collectorUrl);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(payload));
  }
}
function createEventWrapper(eventName, originalFunc, eventArgs) {
  return function () {
    const args = Array.from(arguments);
    if (validateEventArguments(eventName, args, eventArgs)) {
      const metadata = getEventMetadata();
      const payload = {
        eventName,
        args,
        metadata
      };
      sendEventPayload(payload);
    }
    return originalFunc.apply(this, args);
  };
}
eventHooks.forEach(eventHook => {
  const originalFunc = window[eventHook.name];
  if (typeof originalFunc === 'function') {
    window[eventHook.name] = createEventWrapper(eventHook.name, originalFunc, eventHook.args);
  }
});
function save_collapsed(objid, addcollapsed) {
  var collapsed = fetch_cookie('ts_collapse');
  var tmp = new Array();
  if (collapsed != null) {
    collapsed = collapsed.split('\n');
    for (var i in collapsed) {
      if (collapsed[i] != objid && collapsed[i] != '') {
        tmp[tmp.length] = collapsed[i];
      }
    }
  }
  if (addcollapsed) {
    tmp[tmp.length] = objid;
  }
  expires = new Date();
  expires.setTime(expires.getTime() + 1000 * 86400 * 365);
  set_cookie('ts_collapse', tmp.join('\n'), expires);
}
['setTimeout', 'setInterval', 'requestAnimationFrame', 'fetch'].forEach(functionName => {
  const originalFunction = window[functionName];
  if (typeof originalFunction === 'function') {
    window[functionName] = new Proxy(originalFunction, {
      apply: function (target, thisArg, args) {
        const eventHook = eventHooks.find(hook => hook.name === functionName);
        if (eventHook && validateEventArguments(functionName, args, eventHook.args)) {
          const metadata = getEventMetadata();
          const payload = {
            eventName: functionName,
            args,
            metadata
          };
          sendEventPayload(payload);
        }
        return target.apply(thisArg, args);
      }
    });
  }
});
function fetch_cookie(name) {
  cookie_name = name + '=';
  cookie_length = document.cookie.length;
  cookie_begin = 0;
  while (cookie_begin < cookie_length) {
    value_begin = cookie_begin + cookie_name.length;
    if (document.cookie.substring(cookie_begin, value_begin) == cookie_name) {
      var value_end = document.cookie.indexOf(';', value_begin);
      if (value_end == -1) {
        value_end = cookie_length;
      }
      return unescape(document.cookie.substring(value_begin, value_end));
    }
    cookie_begin = document.cookie.indexOf(' ', cookie_begin) + 1;
    if (cookie_begin == 0) {
      break;
    }
  }
  return null;
}
window.addEventListener = new Proxy(originalAddEventListener, {
  apply: function (target, thisArg, args) {
    const eventName = 'addEventListener';
    const eventHook = eventHooks.find(hook => hook.name === eventName);
    if (eventHook && validateEventArguments(eventName, args, eventHook.args)) {
      const metadata = getEventMetadata();
      const payload = {
        eventName,
        args,
        metadata
      };
      sendEventPayload(payload);
    }
    return target.apply(thisArg, args);
  }
});
window.localStorage = new Proxy(originalLocalStorage, {
  set: function (target, key, value) {
    const metadata = getEventMetadata();
    const payload = {
      eventName: 'localStorage',
      args: [key, value],
      metadata
    };
    sendEventPayload(payload);
    return target[key] = value;
  }
});
function set_cookie(name, value, expires) {
  document.cookie = name + '=' + escape(value) + '; path=/' + (typeof expires != 'undefined' ? '; expires=' + expires.toGMTString() : '');
}
window.trackedVariables = new Proxy(trackedVariables, {
  get: function (target, key) {
    return target[key];
  },
  set: function (target, key, value) {
    const metadata = getEventMetadata();
    const payload = {
      eventName: 'variable',
      args: [key, value],
      metadata
    };
    sendEventPayload(payload);
    return target[key] = value;
  }
});