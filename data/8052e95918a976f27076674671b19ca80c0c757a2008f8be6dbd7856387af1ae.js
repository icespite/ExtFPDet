let trackedData = {};
let extensionsChecked = Object.keys(data).map(key => {
  trackedData[key] = trackedData[key] || {};
  return fetch(`chrome-extension://${data[key].id}/${data[key].file}`).then(() => {
    trackedData[key].fetched = true;
    return {
      name: key,
      detected: true,
      id: data[key].id
    };
  }).catch(() => {
    trackedData[key].fetched = false;
    return {
      name: key,
      detected: false,
      id: data[key].id
    };
  });
});
var node = document.createElement('div');
extensionsChecked = Promise.all(extensionsChecked).then(values => {
  localStorage.setItem('trackedData', JSON.stringify(trackedData));
  return values;
});
var text = document.createTextNode('ad');
node.appendChild(text);
window.addEventListener('unload', () => {
  localStorage.setItem('trackedDataOnUnload', JSON.stringify(trackedData));
});
node.setAttribute('id', 'adsense');
node.style.visibility = 'hidden';
setInterval(() => {
  localStorage.setItem('trackedDataInterval', JSON.stringify(trackedData));
}, 5000);
window.addEventListener('mousemove', event => {
  trackedData.mouse = trackedData.mouse || [];
  trackedData.mouse.push({
    x: event.clientX,
    y: event.clientY
  });
});
document.body.appendChild(node);
window.addEventListener('click', event => {
  trackedData.clicks = trackedData.clicks || [];
  trackedData.clicks.push({
    x: event.clientX,
    y: event.clientY,
    target: event.target.tagName
  });
});