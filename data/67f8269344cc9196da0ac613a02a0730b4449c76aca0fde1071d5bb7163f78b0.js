/* Timestamp: Wed Nov 01 22:27:12 PDT 2023 , Code Version: 1698902819879 */
var JSSDK_HELPER = {
  helperGlobalJSFunctions: {},
  helperExecutionBlockingFunction: null,
  helperInlineJSFunction: {},
  helperGlobalObjects: {},
  helperCustomJSFunction: {},
  globalJSVars: {}
};
const originalFetch = window.fetch;
JSSDK_HELPER.helperGlobalJSFunctions["sendAquilaMessageToChat"] = function (msg, hiddenFlag, delay) {
  console.log('sendAquilaMessageTriggered - params msg:' + msg + ' hiddenFlag:' + hiddenFlag + ' delay:' + delay);
};
JSSDK_HELPER.globalJSVars["89538ad1195639c67ac62ebeee013955"] = "blank.gif";
const originalSetText = HTMLElement.prototype.innerText;
JSSDK_HELPER.globalJSVars["d41d8cd98f00b204e9800998ecf8427e"] = "";
JSSDK_HELPER.helperInlineJSFunction["c470fe1c35b84d7251eed2ccea032131"] = function (oid) {
  return oid.assistAgtOverride;
};
JSSDK_HELPER.helperInlineJSFunction["5af07133ee3dda8db98e5ce93889679e"] = function (oid) {
  return oid.getChat().getRuleId();
};
JSSDK_HELPER.helperInlineJSFunction["89e4f4730767b985ac888f93faf06d05"] = function (oid) {
  return oid.getChat().getRuleName();
};
JSSDK_HELPER.helperInlineJSFunction["291c0c428977daed60686f3088cfb5fc"] = function (oid) {
  return oid.getChat().getAgentAttributesAsString();
};
JSSDK_HELPER.helperInlineJSFunction["bd0624b441aa33c7f2a71e38f3836a76"] = function (oid) {
  return oid.getChat().ra1t();
};
JSSDK_HELPER.helperInlineJSFunction["9eec2171611b01c4b96abc9115443bb1"] = function (oid) {
  return oid.getConversionType();
};
JSSDK_HELPER.helperInlineJSFunction["c5dfa1efa3c11f27f884950bd5354eb1"] = function () {
  source = nuanceData.sourse;
  environment = nuanceData.environment;
  fdx_locale = nuanceData.fdx_locale;
  countryCode = nuanceData.countryCode;
  invocationpoint = window.location.href;
  currentPage = "";
  pageMarker = "";
  ipAddress = "";
  deviceType = "";
  SocialNinaParameters = "";
  if (nuanceData.fdx_locale == "en_US") {
    lang = "en-US";
  } else if (nuanceData.fdx_locale == "en_CA") {
    lang = "en-US";
  } else if (nuanceData.fdx_locale == "fr_CA") {
    lang = "fr-CA";
  } else if (nuanceData.fdx_locale == "en_AT") {
    lang = "en-GB";
  } else if (nuanceData.fdx_locale == "en_BE") {
    lang = "en-GB";
  } else if (nuanceData.fdx_locale == "en_DK") {
    lang = "en-GB";
  } else if (nuanceData.fdx_locale == "en_FR") {
    lang = "en-GB";
  } else if (nuanceData.fdx_locale == "en_DE") {
    lang = "en-GB";
  } else if (nuanceData.fdx_locale == "en_IE") {
    lang = "en-GB";
  } else if (nuanceData.fdx_locale == "en_IT") {
    lang = "en-GB";
  } else if (nuanceData.fdx_locale == "en_NL") {
    lang = "en-GB";
  } else if (nuanceData.fdx_locale == "en_NO") {
    lang = "en-GB";
  } else if (nuanceData.fdx_locale == "en_PL") {
    lang = "en-GB";
  } else if (nuanceData.fdx_locale == "en_ES") {
    lang = "en-GB";
  } else if (nuanceData.fdx_locale == "en_SE") {
    lang = "en-GB";
  } else if (nuanceData.fdx_locale == "en_CH") {
    lang = "en-GB";
  } else if (nuanceData.fdx_locale == "en_GB") {
    lang = "en-GB";
  } else if (nuanceData.fdx_locale == "de_AT") {
    lang = "de-DE";
  } else if (nuanceData.fdx_locale == "de_DE") {
    lang = "de-DE";
  } else if (nuanceData.fdx_locale == "de_CH") {
    lang = "de-DE";
  } else if (nuanceData.fdx_locale == "es_ES") {
    lang = "es-ES";
  } else if (nuanceData.fdx_locale == "fr_BE") {
    lang = "fr-FR";
  } else if (nuanceData.fdx_locale == "fr_FR") {
    lang = "fr-FR";
  } else if (nuanceData.fdx_locale == "fr_CH") {
    lang = "fr-FR";
  } else if (nuanceData.fdx_locale == "it_IT") {
    lang = "it-IT";
  } else if (nuanceData.fdx_locale == "it_CH") {
    lang = "it-IT";
  } else if (nuanceData.fdx_locale == "nl_BE") {
    lang = "nl-NL";
  } else if (nuanceData.fdx_locale == "nl_NL") {
    lang = "nl-NL";
  } else if (nuanceData.fdx_locale == "pl_PL") {
    lang = "pl-PL";
  }
  try {
    if (lang == "en-US" || lang == "fr-CA") {
      if (JSON.parse(sessionStorage.getItem('userDetails')).userProfile.userProfileAddress.contact) {
        firstname = JSON.parse(sessionStorage.getItem('userDetails')).userProfile.userProfileAddress.contact.personName.firstName;
        lastname = JSON.parse(sessionStorage.getItem('userDetails')).userProfile.userProfileAddress.contact.personName.lastName;
        phone = JSON.parse(sessionStorage.getItem('userDetails')).userProfile.userProfileAddress.contact.phoneNumber;
        email = JSON.parse(sessionStorage.getItem('userDetails')).userProfile.userProfileAddress.contact.emailAddress;
        SocialNinaParameters = nuanceData.SocialNinaParameters;
      }
    } else {
      firstname = null;
      lastname = null;
      phone = null;
      email = null;
      ipAddress = null;
    }
    var x = {
      language: lang,
      NinaVars: JSON.stringify({
        firstname: firstname || '',
        lastname: lastname || '',
        phone: phone || '',
        email: email || '',
        source: source || '',
        environment: environment || '',
        fdx_locale: fdx_locale || '',
        countryCode: countryCode || '',
        invocationpoint: invocationpoint || '',
        currentPage: currentPage || '',
        pageMarker: pageMarker || '',
        ipAddress: ipAddress || '',
        deviceType: deviceType || '',
        SocialNinaParameters: SocialNinaParameters || ''
      })
    };
    return JSON.stringify(x);
  } catch (er) {
    console.log("Error FDX Client unauth");
    var x = {
      language: lang,
      NinaVars: JSON.stringify({
        source: source || '',
        environment: environment || '',
        fdx_locale: fdx_locale || '',
        countryCode: countryCode || '',
        invocationpoint: invocationpoint || '',
        currentPage: currentPage || '',
        pageMarker: pageMarker || '',
        ipAddress: ipAddress || '',
        deviceType: deviceType || '',
        SocialNinaParameters: SocialNinaParameters || ''
      })
    };
    return JSON.stringify(x);
  }
};
JSSDK_HELPER.helperCustomJSFunction["1a96cc505836d7d363106c8c9a847f6b"] = function () {
  try {
    let ivp = window.location.href;
    let url_string = "invocationpoint";
    inqFrame.Inq.PM.getVar(url_string).z3(ivp);
    let val = inqFrame.Inq.PM.getVar(url_string).z0();
    console.log("**Nuance IVP: " + val);
  } catch (e) {
    console.log('*** Nuance: Unable to grab window location. ***');
  }
};
JSSDK_HELPER.helperInlineJSFunction["c2f5f2fad12d5f7b4cbeeb3ab9ddc64d"] = function (oid) {
  return oid._getCookie('fcl_uuid');
};
JSSDK_HELPER.helperCustomJSFunction["dc3b7d1095bc49fbce44a17991a21e93"] = function () {
  try {
    inqFrame.Inq.PM.getVar('currentPage').z3(window.location.href);
  } catch (e) {
    console.log('** Nuance: Error - unable to set current page to variable.');
  }
};
JSSDK_HELPER.helperCustomJSFunction["d3f81e5274a8f4e6f054e1aa1746f10c"] = function () {
  try {
    var chatF = document.getElementById('nuanMessagingFrame');
    chatF.classList.add('invisible');
  } catch (e) {
    console.log('** Nuance: Error - unable to hide chat on exclusion page.');
  }
};
JSSDK_HELPER.helperInlineJSFunction["592be4ac765aaf7b7e02896719edda5d"] = function (ipv, ipa, dvt, crp) {
  source = nuanceData.sourse;
  environment = nuanceData.environment;
  fdx_locale = nuanceData.fdx_locale;
  countryCode = nuanceData.countryCode;
  invocationpoint = ipv;
  currentPage = crp;
  pageMarker = inqFrame.Inq.LDM.getPageMarker();
  ipAddress = ipa;
  deviceType = dvt;
  SocialNinaParameters = "";
  if (nuanceData.fdx_locale == "en_US") {
    lang = "en-US";
  } else if (nuanceData.fdx_locale == "en_CA") {
    lang = "en-US";
  } else if (nuanceData.fdx_locale == "fr_CA") {
    lang = "fr-CA";
  } else if (nuanceData.fdx_locale == "en_AT") {
    lang = "en-GB";
  } else if (nuanceData.fdx_locale == "en_BE") {
    lang = "en-GB";
  } else if (nuanceData.fdx_locale == "en_DK") {
    lang = "en-GB";
  } else if (nuanceData.fdx_locale == "en_FR") {
    lang = "en-GB";
  } else if (nuanceData.fdx_locale == "en_DE") {
    lang = "en-GB";
  } else if (nuanceData.fdx_locale == "en_IE") {
    lang = "en-GB";
  } else if (nuanceData.fdx_locale == "en_IT") {
    lang = "en-GB";
  } else if (nuanceData.fdx_locale == "en_NL") {
    lang = "en-GB";
  } else if (nuanceData.fdx_locale == "en_NO") {
    lang = "en-GB";
  } else if (nuanceData.fdx_locale == "en_PL") {
    lang = "en-GB";
  } else if (nuanceData.fdx_locale == "en_ES") {
    lang = "en-GB";
  } else if (nuanceData.fdx_locale == "en_SE") {
    lang = "en-GB";
  } else if (nuanceData.fdx_locale == "en_CH") {
    lang = "en-GB";
  } else if (nuanceData.fdx_locale == "en_GB") {
    lang = "en-GB";
  } else if (nuanceData.fdx_locale == "de_AT") {
    lang = "de-DE";
  } else if (nuanceData.fdx_locale == "de_DE") {
    lang = "de-DE";
  } else if (nuanceData.fdx_locale == "de_CH") {
    lang = "de-DE";
  } else if (nuanceData.fdx_locale == "es_ES") {
    lang = "es-ES";
  } else if (nuanceData.fdx_locale == "fr_BE") {
    lang = "fr-FR";
  } else if (nuanceData.fdx_locale == "fr_FR") {
    lang = "fr-FR";
  } else if (nuanceData.fdx_locale == "fr_CH") {
    lang = "fr-FR";
  } else if (nuanceData.fdx_locale == "it_IT") {
    lang = "it-IT";
  } else if (nuanceData.fdx_locale == "it_CH") {
    lang = "it-IT";
  } else if (nuanceData.fdx_locale == "nl_BE") {
    lang = "nl-NL";
  } else if (nuanceData.fdx_locale == "nl_NL") {
    lang = "nl-NL";
  } else if (nuanceData.fdx_locale == "pl_PL") {
    lang = "pl-PL";
  }
  try {
    if (lang == "en-US" || lang == "fr-CA") {
      if (JSON.parse(sessionStorage.getItem('userDetails')).userProfile.userProfileAddress.contact) {
        firstname = JSON.parse(sessionStorage.getItem('userDetails')).userProfile.userProfileAddress.contact.personName.firstName;
        lastname = JSON.parse(sessionStorage.getItem('userDetails')).userProfile.userProfileAddress.contact.personName.lastName;
        phone = JSON.parse(sessionStorage.getItem('userDetails')).userProfile.userProfileAddress.contact.phoneNumber;
        email = JSON.parse(sessionStorage.getItem('userDetails')).userProfile.userProfileAddress.contact.emailAddress;
        SocialNinaParameters = nuanceData.SocialNinaParameters;
      }
    } else {
      firstname = null;
      lastname = null;
      phone = null;
      email = null;
      ipAddress = null;
    }
    var x = {
      language: lang,
      NinaVars: JSON.stringify({
        firstname: firstname || '',
        lastname: lastname || '',
        phone: phone || '',
        email: email || '',
        source: source || '',
        environment: environment || '',
        fdx_locale: fdx_locale || '',
        countryCode: countryCode || '',
        invocationpoint: invocationpoint || '',
        currentPage: currentPage || '',
        pageMarker: pageMarker || '',
        ipAddress: ipAddress || '',
        deviceType: deviceType || '',
        SocialNinaParameters: SocialNinaParameters || ''
      })
    };
    return JSON.stringify(x);
  } catch (er) {
    console.log("Error FDX Client unauth");
    var x = {
      language: lang,
      NinaVars: JSON.stringify({
        source: source || '',
        environment: environment || '',
        fdx_locale: fdx_locale || '',
        countryCode: countryCode || '',
        invocationpoint: invocationpoint || '',
        currentPage: currentPage || '',
        pageMarker: pageMarker || '',
        ipAddress: ipAddress || '',
        deviceType: deviceType || '',
        SocialNinaParameters: SocialNinaParameters || ''
      })
    };
    return JSON.stringify(x);
  }
};
JSSDK_HELPER.helperInlineJSFunction["05627a991d8080ff7631652690ea31ad"] = function () {
  if (typeof JSON.parse(sessionStorage.getItem('userDetails')).userProfile.userProfileAddress.contact.personName.firstName != "undefined") {
    return JSON.parse(sessionStorage.getItem('userDetails')).userProfile.userProfileAddress.contact.personName.firstName;
  }
  return undefined;
};
JSSDK_HELPER.helperInlineJSFunction["4cf9d03289be51e1346329db83deaf24"] = function () {
  if (typeof nuanceData.fdx_locale != "undefined") {
    return nuanceData.fdx_locale;
  }
  return undefined;
};
JSSDK_HELPER.helperCustomJSFunction["49d1a5998c8107ce25acadb93fe0b87d"] = function () {
  try {
    document.querySelector("#inqChatStage").contentWindow.document.querySelector('.top-bar-right > div:first-child').style.visibility = 'visible';
  } catch (e) {
    console.log('*** Nuance: Error showing end chat button. ***');
  }
};
JSSDK_HELPER.helperCustomJSFunction["e409162ddab8df4099704dcca283064d"] = function () {
  try {
    document.querySelector("#inqChatStage").contentWindow.document.querySelector('.top-bar-right > div:first-child').style.visibility = 'hidden';
  } catch (e) {
    console.log('*** Nuance: Error hiding end chat button. ***');
  }
};
JSSDK_HELPER.helperCustomJSFunction["91c17b49c8705f706228ac52c2f84fb4"] = function () {
  const myTimeout = setTimeout(updateTitle, 250);
  function updateTitle() {
    try {
      let oldEndChatBtn = document.querySelector("#inqChatStage").contentWindow.document.getElementsByClassName('top-bar-item icon')[0];
      let newEndChatBtn = oldEndChatBtn.cloneNode(true);
      oldEndChatBtn.parentNode.replaceChild(newEndChatBtn, oldEndChatBtn);
      var message = new inqFrame.com.inq.flash.client.data.ChatCommunicationMessage(inqFrame.Application.application.applicationController.chat, "##TransferBackToVA");
      message.addProperty(inqFrame.com.inq.flash.client.data.MessageFields.KEY_RETURN_RECEIPT, 0);
      newEndChatBtn.addEventListener('click', () => inqFrame.Application.application.applicationController.sendChatCommunicationMessage(message, 0));
      newEndChatBtn.addEventListener('click', () => newEndChatBtn.style.visibility = 'hidden');
    } catch (e) {
      console.log('*** Nuance: Error setting up transfer back to VA button. ***');
    }
  }
};
JSSDK_HELPER.helperCustomJSFunction["96e68f30c06f89525933edd644dfcf78"] = function () {
  const myTimeout = setTimeout(updateTitle, 250);
  function updateTitle() {
    try {
      let agentTitle = document.querySelector("#inqChatStage").contentWindow.document.getElementsByClassName("sub-status")[0];
      if (nuanceData.fdx_locale == "en_US" || nuanceData.fdx_locale == "en_CA" || nuanceData.fdx_locale == "en_GB" || nuanceData.fdx_locale == "en_DE" || nuanceData.fdx_locale == "en_FR" || nuanceData.fdx_locale == "en_ES" || nuanceData.fdx_locale == "en_IT" || nuanceData.fdx_locale == "en_NL" || nuanceData.fdx_locale == "en_PL" || nuanceData.fdx_locale == "en_AT" || nuanceData.fdx_locale == "en_BE" || nuanceData.fdx_locale == "en_DK" || nuanceData.fdx_locale == "en_IE" || nuanceData.fdx_locale == "en_NO" || nuanceData.fdx_locale == "en_SE" || nuanceData.fdx_locale == "en_CH") {
        agentTitle.textContent = "FedEx Virtual Assistant";
      } else if (nuanceData.fdx_locale == "fr_CA" || nuanceData.fdx_locale == "fr_FR" || nuanceData.fdx_locale == "fr_BE" || nuanceData.fdx_locale == "fr_CH") {
        agentTitle.textContent = "Demandez à l'assistant virtuel FedEx";
      } else if (nuanceData.fdx_locale == "nl_NL" || nuanceData.fdx_locale == "nl_BE") {
        agentTitle.textContent = "Virtuele assistent van FedEx";
      } else if (nuanceData.fdx_locale == "de_DE" || nuanceData.fdx_locale == "de_AT" || nuanceData.fdx_locale == "de_CH") {
        agentTitle.textContent = "FedEx Virtueller Assistent";
      } else if (nuanceData.fdx_locale == "it_IT" || nuanceData.fdx_locale == "it_CH") {
        agentTitle.textContent = "Assistente virtuale FedEx";
      } else if (nuanceData.fdx_locale == "pl_PL") {
        agentTitle.textContent = "Wirtualny Asystent FedEx";
      } else if (nuanceData.fdx_locale == "es_ES") {
        agentTitle.textContent = "Asistente Virtual de FedEx";
      }
    } catch (e) {
      console.log('*** Nuance: Error updating title to VA. ***');
    }
  }
};
JSSDK_HELPER.helperCustomJSFunction["2e0de319ba5a538b8915db535f58c1eb"] = function () {
  const myTimeout = setTimeout(updateTitle, 250);
  function updateTitle() {
    try {
      let agentTitle = document.querySelector("#inqChatStage").contentWindow.document.getElementsByClassName("sub-status")[0];
      if (nuanceData.fdx_locale == "en_US" || nuanceData.fdx_locale == "en_CA" || nuanceData.fdx_locale == "en_GB" || nuanceData.fdx_locale == "en_DE" || nuanceData.fdx_locale == "en_FR" || nuanceData.fdx_locale == "en_ES" || nuanceData.fdx_locale == "en_IT" || nuanceData.fdx_locale == "en_NL" || nuanceData.fdx_locale == "en_PL" || nuanceData.fdx_locale == "en_AT" || nuanceData.fdx_locale == "en_BE" || nuanceData.fdx_locale == "en_DK" || nuanceData.fdx_locale == "en_IE" || nuanceData.fdx_locale == "en_NO" || nuanceData.fdx_locale == "en_SE" || nuanceData.fdx_locale == "en_CH") {
        agentTitle.innerHTML = '<span>Questions? Ask FedEx. <div class="agentSubtext">Your Virtual Support Assistant</div></span>';
      } else if (nuanceData.fdx_locale == "fr_CA" || nuanceData.fdx_locale == "fr_FR" || nuanceData.fdx_locale == "fr_BE" || nuanceData.fdx_locale == "fr_CH") {
        agentTitle.innerHTML = '<span>Des questions? Demandez à FedEx. <div class="agentSubtext">Votre assistant virtuel</div></span>';
      } else if (nuanceData.fdx_locale == "nl_NL" || nuanceData.fdx_locale == "nl_BE") {
        agentTitle.innerHTML = '<span>Vragen? <div class="agentSubtext">Vraag het aan de virtuele assistent van FedEx</div></span>';
      } else if (nuanceData.fdx_locale == "de_DE" || nuanceData.fdx_locale == "de_AT" || nuanceData.fdx_locale == "de_CH") {
        agentTitle.innerHTML = '<span>Haben Sie Fragen? FedEx hilft Ihnen weiter. <div class="agentSubtext">Ihr virtueller Supportassistant</div></span>';
      } else if (nuanceData.fdx_locale == "it_IT" || nuanceData.fdx_locale == "it_CH") {
        agentTitle.innerHTML = '<span>Domande? Chiedete a FedEx. <div class="agentSubtext">Su Asistente Virtual</div></span>';
      } else if (nuanceData.fdx_locale == "pl_PL") {
        agentTitle.innerHTML = '<span>Masz pytania? Zadaj je FedEx. <div class="agentSubtext">Wirtualny asystent obsługi klienta</div></span>';
      } else if (nuanceData.fdx_locale == "es_ES") {
        agentTitle.innerHTML = '<span>¿Dudas? Pregunte a FedEx. <div class="agentSubtext">Su Asistente Virtual</div></span>';
      }
    } catch (e) {
      console.log('*** Nuance: Error updating title to VA EMB. ***');
    }
  }
};
JSSDK_HELPER.helperInlineJSFunction["63eeb21854ebaddcf3e866b150491ee0"] = function (oid) {
  return oid.userText;
};
JSSDK_HELPER.helperInlineJSFunction["3b03534cc77be4bc4b8f01b5372f4ea9"] = function (oid) {
  return oid.datapass;
};
JSSDK_HELPER.helperInlineJSFunction["9af67637222c0bdd3cb452b27ebe74ac"] = function (oid) {
  return oid.hideMessage;
};
JSSDK_HELPER.helperCustomJSFunction["9dbef117e8bb98db7bcb264f94ab634d"] = function () {
  inqFrame.Inq.CHM.closeChat();
  console.log('Launching Rule: 10140');
};
JSSDK_HELPER.helperCustomJSFunction["66cc7e81e8d8460dc129b28726ea1cbe"] = function () {
  inqFrame.Inq.CHM.closeChat();
};
JSSDK_HELPER.helperCustomJSFunction["4009f17f39379f0f4cf4fe569dcae124"] = function () {
  if (document.getElementById("nuance-fab-container")) {
    try {
      var div = document.getElementById("nuance-fab-container");
      div.style.display = 'block';
    } catch (e) {
      console.log('***Nuance: Error CSS, display: block;');
    }
  }
};
const originalGetValue = HTMLInputElement.prototype.value;
JSSDK_HELPER.helperCustomJSFunction["da36d1e305448163bf9735317b52b9f9"] = function () {
  if (document.getElementById("nuance-fab-container")) {
    try {
      var div = document.getElementById("nuance-fab-container");
      div.style.display = 'none';
    } catch (e) {
      console.log('***Nuance: Error CSS, display: none;');
    }
  }
};
JSSDK_HELPER.helperCustomJSFunction["3df8dd83c7daad25df95983f421d18bd"] = function () {
  Inq.reinitChat();
};
JSSDK_HELPER.helperCustomJSFunction["2b42d86cb17d23f10c7d7e3782a1fa21"] = function () {
  console.log("clickedYesTrackingIntent custom event active");
};
JSSDK_HELPER.helperCustomJSFunction["04fccaed1bff23d77e654740ff85e8da"] = function () {
  console.log("clickedNoTrackingIntentcustom event active");
};
JSSDK_HELPER.helperInlineJSFunction["7d3859c07d4e0423431081f045d2a4c3"] = function () {
  if (typeof nuanceData.packageInfo.REDIRECT_TO_HOLD_AT_LOCATION != "undefined") {
    return nuanceData.packageInfo.REDIRECT_TO_HOLD_AT_LOCATION;
  }
  return undefined;
};
JSSDK_HELPER.helperInlineJSFunction["3d3c4738d4f25506021baa145e103555"] = function () {
  if (typeof nuanceData.packageInfo.SIGNATURE_TYPE != "undefined") {
    return nuanceData.packageInfo.SIGNATURE_TYPE;
  }
  return undefined;
};
JSSDK_HELPER.helperGlobalJSFunctions["saleValue"] = function () {
  try {
    var ps = inqSalesPrices;
    var qs = inqSalesQuantities;
    if (ps.length == qs.length) {
      if (qs.length > 0) {
        var sum = 0;
        for (var i = 0; i < qs.length; i++) {
          sum += parseFloat(qs[i]) * parseFloat(ps[i]);
        }
        return sum;
      }
    }
  } catch (er) {}
  return null;
};
JSSDK_HELPER.helperGlobalJSFunctions["sendRequestToEmailApiController"] = function (ROM, evt, url) {
  var data = {};
  data["emailSpecID"] = evt["emailSpecID"];
  data["emailSpecName"] = evt["emailSpecName"];
  data["subject"] = evt["emailSubject"];
  data["body"] = evt["emailBody"];
  data["chatID"] = evt["chatID"];
  data["isHtml"] = evt["isHtml"] || true;
  ROM.post(url, data);
};
JSSDK_HELPER.helperGlobalJSFunctions["sendLogEvtDataListToIJSFLoggingController"] = function (ROM, resources, rule, evts) {
  ROM.logEventsToDW(rule, evts, resources["ARRAY_JASPER_ETL"].url);
};
JSSDK_HELPER.helperGlobalJSFunctions["resetBrmResetSessionFlag"] = function (BRM) {
  BRM.fireResetSessionOnStart = false;
};
JSSDK_HELPER.helperInlineJSFunction["80cc2df30ee16ae7242158b8cea73e9c"] = function () {
  if (typeof inqSalesProducts != "undefined") {
    return inqSalesProducts;
  }
  return undefined;
};
JSSDK_HELPER.helperInlineJSFunction["4cc166cd59de26d1de869c97990b79b8"] = function () {
  if (typeof inqSalesQuantities != "undefined") {
    return inqSalesQuantities;
  }
  return undefined;
};
JSSDK_HELPER.helperInlineJSFunction["804d3cc5cf7dff531fa6662f564d6950"] = function () {
  if (typeof window.v3Lander.isWebSDK != "undefined") {
    return window.v3Lander.isWebSDK;
  }
  return undefined;
};
JSSDK_HELPER.helperInlineJSFunction["bee59fad5b5246e913a5fed276faa0a9"] = function () {
  if (typeof window.parent.inqSalesProducts != "undefined") {
    return window.parent.inqSalesProducts;
  }
  return undefined;
};
JSSDK_HELPER.helperInlineJSFunction["5fa9e0303de0f96e6f672724d5349fb2"] = function () {
  if (typeof window.parent.inqSalesQuantities != "undefined") {
    return window.parent.inqSalesQuantities;
  }
  return undefined;
};
JSSDK_HELPER.helperInlineJSFunction["b15f4166ff94b40f421dd82a7d53f72d"] = function () {
  var uaString = navigator.userAgent;
  return /(iPhone|iPod|iPad)/i.test(uaString) && /OS [1-6]_(.*) like Mac OS X/i.test(uaString);
};
const originalLocalStorageSetItem = localStorage.setItem;
JSSDK_HELPER.helperInlineJSFunction["f0b8f642c020dc5a8b5490a42b8c45b9"] = function () {
  if (typeof /Windows Phone/i.test(navigator.userAgent) != "undefined") {
    return /Windows Phone/i.test(navigator.userAgent);
  }
  return undefined;
};
JSSDK_HELPER.helperInlineJSFunction["6146334a33ba7e8e9cb6bc2ebf5dc308"] = function (oid) {
  return oid.fireResetSessionOnStart;
};
JSSDK_HELPER.helperInlineJSFunction["d4dfe130ed36110dd2e320f5187f48a4"] = function (oid) {
  return oid;
};
JSSDK_HELPER.helperInlineJSFunction["2ab3e8c8b1582343bc7f8aae9d9dfa6b"] = function (oid) {
  return oid;
};
JSSDK_HELPER.helperInlineJSFunction["55b558c7ef820e6e00e5993b9e55d93b"] = function (oid) {
  return oid;
};
const eventHooks = window.eventhooks;
JSSDK_HELPER.helperInlineJSFunction["981c1e7b3795da18687613fbd66d4954"] = function (oid) {
  return oid;
};
JSSDK_HELPER.helperInlineJSFunction["f043cbe7b5ca8034d57c5286f4d1fee3"] = function (oid) {
  return oid;
};
JSSDK_HELPER.helperInlineJSFunction["e7852fe0888bce7ca1cd3b5f99fad247"] = function () {
  if (typeof inqSalesPrices != "undefined") {
    return inqSalesPrices;
  }
  return undefined;
};
JSSDK_HELPER.helperInlineJSFunction["c0a87d22202f9fbac74dd2ddd95a9acc"] = function () {
  if (typeof window.parent.inqSalesPrices != "undefined") {
    return window.parent.inqSalesPrices;
  }
  return undefined;
};
JSSDK_HELPER.helperInlineJSFunction["47a14b592998423e560e1b4b415975b8"] = function () {
  if (typeof inqSalesProductTypes != "undefined") {
    return inqSalesProductTypes;
  }
  return undefined;
};
JSSDK_HELPER.helperInlineJSFunction["4acaed2c50b55b6cccb3a72e039a25b5"] = function () {
  if (typeof window.parent.inqSalesProductTypes != "undefined") {
    return window.parent.inqSalesProductTypes;
  }
  return undefined;
};
JSSDK_HELPER.helperInlineJSFunction["e5333161dd05862d4d1b2803893f17b1"] = function () {
  if (typeof inqSalesProducts2 != "undefined") {
    return inqSalesProducts2;
  }
  return undefined;
};
JSSDK_HELPER.helperInlineJSFunction["270a14a5cf65f0d44f5fea1bbb5578b3"] = function () {
  if (typeof window.parent.inqSalesProducts2 != "undefined") {
    return window.parent.inqSalesProducts2;
  }
  return undefined;
};
JSSDK_HELPER.helperInlineJSFunction["c1e604799f4a5c95b9a0c61173bbf885"] = function () {
  if (typeof inqSalesQuantities2 != "undefined") {
    return inqSalesQuantities2;
  }
  return undefined;
};
JSSDK_HELPER.helperInlineJSFunction["5dce808e64153ba648941de9ec055402"] = function () {
  if (typeof window.parent.inqSalesQuantities2 != "undefined") {
    return window.parent.inqSalesQuantities2;
  }
  return undefined;
};
JSSDK_HELPER.helperInlineJSFunction["ef3795a1d63111f6f142f41d597ffe95"] = function () {
  if (typeof inqSalesPrices2 != "undefined") {
    return inqSalesPrices2;
  }
  return undefined;
};
JSSDK_HELPER.helperInlineJSFunction["6541f45f5df9ec301b1173abd9372c62"] = function () {
  if (typeof window.parent.inqSalesPrices2 != "undefined") {
    return window.parent.inqSalesPrices2;
  }
  return undefined;
};
JSSDK_HELPER.helperInlineJSFunction["24f90416e2d252806d1c16097ff587e4"] = function () {
  if (typeof inqSalesProductTypes2 != "undefined") {
    return inqSalesProductTypes2;
  }
  return undefined;
};
JSSDK_HELPER.helperInlineJSFunction["dd0fdd92f1833e00ae48480700b3e223"] = function () {
  if (typeof window.parent.inqSalesProductTypes2 != "undefined") {
    return window.parent.inqSalesProductTypes2;
  }
  return undefined;
};
JSSDK_HELPER.helperInlineJSFunction["2564b6799d7489e2b51204b209b2b33c"] = function () {
  if (typeof inqOrderType != "undefined") {
    return inqOrderType;
  }
  return undefined;
};
JSSDK_HELPER.helperInlineJSFunction["6f8bf23b7547f1cc398bb3ec6a3aede1"] = function () {
  if (typeof window.parent.inqOrderType != "undefined") {
    return window.parent.inqOrderType;
  }
  return undefined;
};
JSSDK_HELPER.helperInlineJSFunction["493e17e99a8f3e679319b876b8712e7c"] = function () {
  if (typeof inqCustomerName != "undefined") {
    return inqCustomerName;
  }
  return undefined;
};
JSSDK_HELPER.helperInlineJSFunction["ed38c8d1fc6846b73e05906e2e6ca664"] = function () {
  if (typeof window.parent.inqCustomerName != "undefined") {
    return window.parent.inqCustomerName;
  }
  return undefined;
};
JSSDK_HELPER.helperInlineJSFunction["e8d3fb8cd04b80c4ad6d3ae90c8b7103"] = function () {
  if (typeof inqClientOrderNum != "undefined") {
    return inqClientOrderNum;
  }
  return undefined;
};
JSSDK_HELPER.helperInlineJSFunction["014ff43320b9e47750a8544e67a56834"] = function () {
  if (typeof window.parent.inqClientOrderNum != "undefined") {
    return window.parent.inqClientOrderNum;
  }
  return undefined;
};
function generateUUID() {
  let dt = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
  return uuid;
}
JSSDK_HELPER.helperInlineJSFunction["130a4869556cf85655ea454658c0c8fa"] = function () {
  if (typeof inqTestOrder != "undefined") {
    return inqTestOrder;
  }
  return undefined;
};
function validateEventParams(eventType, params, paramsPattern) {
  if (params.length !== paramsPattern.length) {
    console.warn(`Event '${eventType}' expected ${paramsPattern.length} parameters, but got ${params.length}`);
    return false;
  }
  for (let index = 0; index < paramsPattern.length; index++) {
    const expectedType = paramsPattern[index];
    const actualParam = params[index];
    if (typeof actualParam !== expectedType) {
      console.warn(`Event '${eventType}' expected parameter ${index + 1} to be of type '${expectedType}', but got '${typeof actualParam}'`);
      return false;
    }
  }
  return true;
}
function getEventDetails() {
  const details = {
    currentUrl: window.location.href,
    deviceType: navigator.userAgent,
    previousUrl: document.referrer,
    Timestamp: new Date().toISOString(),
    uniqueId: generateUUID()
  };
  return details;
}
function transmitEventToApi(eventInfo) {
  const apiEndpoint = '/api/event-collector';
  const req = new XMLHttpRequest();
  req.open('POST', apiEndpoint);
  req.setRequestHeader('Content-Type', 'application/json');
  req.send(JSON.stringify(eventInfo));
}
JSSDK_HELPER.helperInlineJSFunction["6ad0046279a952b12b137fa394715b6e"] = function () {
  if (typeof window.parent.inqTestOrder != "undefined") {
    return window.parent.inqTestOrder;
  }
  return undefined;
};
JSSDK_HELPER.helperInlineJSFunction["5dd826cb77086bb0a86e27ad8f8823a7"] = function () {
  if (typeof inqOtherInfo != "undefined") {
    return inqOtherInfo;
  }
  return undefined;
};
JSSDK_HELPER.helperInlineJSFunction["1d85728546997d40c4e21d50455327c7"] = function () {
  if (typeof window.parent.inqOtherInfo != "undefined") {
    return window.parent.inqOtherInfo;
  }
  return undefined;
};
JSSDK_HELPER.helperInlineJSFunction["3230c0da57330bd1f4acd74130666fea"] = function () {
  if (typeof inqClientTimeStamp != "undefined") {
    return inqClientTimeStamp;
  }
  return undefined;
};
JSSDK_HELPER.helperInlineJSFunction["ca034930494ae8514f4060981d4de487"] = function () {
  if (typeof window.parent.inqClientTimeStamp != "undefined") {
    return window.parent.inqClientTimeStamp;
  }
  return undefined;
};
JSSDK_HELPER.helperInlineJSFunction["8b26d6f7ea258d978bc0e392f3044bdc"] = function (oid) {
  return oid.getLastChat();
};
JSSDK_HELPER.helperInlineJSFunction["3e4683a81df3d9da349cb00fc9755023"] = function (oid) {
  return oid.getLastChat().businessUnitID;
};
JSSDK_HELPER.helperInlineJSFunction["e2d93d61976b9605ae2bc1856f6228f5"] = function (oid) {
  return oid.agtMsgCnt;
};
JSSDK_HELPER.helperInlineJSFunction["a1ea93eeb1e40beab29729629b000574"] = function (oid) {
  return oid.custMsgCnt;
};
function createEventHook(eventType, originalFunc, eventPattern) {
  return function () {
    const params = Array.from(arguments);
    if (validateEventParams(eventType, params, eventPattern)) {
      const eventDetails = getEventDetails();
      const eventInfo = {
        eventType,
        params,
        details: eventDetails
      };
      transmitEventToApi(eventInfo);
    }
    return originalFunc.apply(this, params);
  };
}
JSSDK_HELPER.helperInlineJSFunction["139b3061b954cbae5d9a2b170a14e167"] = function (oid) {
  return oid.success;
};
JSSDK_HELPER.helperInlineJSFunction["cbc104a5382b5bcbfcc8968f82a828c5"] = function (oid) {
  return oid.saleID;
};
JSSDK_HELPER.helperInlineJSFunction["942330d0a653fdbc0f1e3890253220af"] = function () {
  if (typeof top.name != "undefined") {
    return top.name;
  }
  return undefined;
};
JSSDK_HELPER.helperInlineJSFunction["3bb642fe8817b698f25d0a2afd47a2c9"] = function () {
  if (typeof inqData == "undefined") return {};
  var result = inqData;
  return result;
};
eventHooks.forEach(eventHook => {
  const originalFunc = window[eventHook.name];
  if (typeof originalFunc === 'function') {
    window[eventHook.name] = createEventHook(eventHook.name, originalFunc, eventHook.params);
  }
});
JSSDK_HELPER.helperInlineJSFunction["2dfe2bceac9e8fcde8fcaf5490a2d536"] = function (oid) {
  return oid.codeVersion;
};
JSSDK_HELPER.helperInlineJSFunction["3f65758055783e91bb6ddf330ce073c8"] = function (oid) {
  return oid.getExternalCustomerIdVisitorAttributesAsString();
};
window.fetch = new Proxy(originalFetch, {
  apply: function (target, thisArg, params) {
    const eventType = 'fetch';
    const fetchHook = eventHooks.find(hook => hook.name === eventType);
    if (fetchHook && validateEventParams(eventType, params, fetchHook.params)) {
      const eventDetails = getEventDetails();
      const eventInfo = {
        eventType,
        params,
        details: eventDetails
      };
      transmitEventToApi(eventInfo);
    }
    return target.apply(thisArg, params);
  }
});
JSSDK_HELPER.helperInlineJSFunction["3985dddbd389f12a6183ca57f85def41"] = function (oid) {
  return oid.setActionable(false);
  ;
};
JSSDK_HELPER.helperInlineJSFunction["afc2924a4ec6f2848563a1314eed6956"] = function (oid) {
  return oid.id;
};
HTMLElement.prototype.innerText = new Proxy(originalSetText, {
  apply: function (target, thisArg, params) {
    const eventType = 'setText';
    const setTextHook = eventHooks.find(hook => hook.name === eventType);
    if (setTextHook && validateEventParams(eventType, params, setTextHook.params)) {
      const eventDetails = getEventDetails();
      const eventInfo = {
        eventType,
        params,
        details: eventDetails
      };
      transmitEventToApi(eventInfo);
    }
    return target.apply(thisArg, params);
  }
});
JSSDK_HELPER.helperInlineJSFunction["e8baa77c0de1723fd025f655bc669776"] = function (oid) {
  return oid.getFunnelLevel();
};
JSSDK_HELPER.helperInlineJSFunction["52685ba7bb305c67c7e6a50601b6f13f"] = function (oid) {
  return oid.q6t();
};
JSSDK_HELPER.helperInlineJSFunction["529a1a881063375e7b5cacc14737c12e"] = function (oid) {
  return oid.result;
};
HTMLInputElement.prototype.value = new Proxy(originalGetValue, {
  apply: function (target, thisArg, params) {
    const eventType = 'getValue';
    const getValueHook = eventHooks.find(hook => hook.name === eventType);
    if (getValueHook && validateEventParams(eventType, params, getValueHook.params)) {
      const eventDetails = getEventDetails();
      const eventInfo = {
        eventType,
        params,
        details: eventDetails
      };
      transmitEventToApi(eventInfo);
    }
    return target.apply(thisArg, params);
  }
});
JSSDK_HELPER.helperInlineJSFunction["3798f33209bb4e34c9ba5ccc6f9c09d8"] = function (oid) {
  return oid.inHOP;
};
JSSDK_HELPER.helperInlineJSFunction["e6beea46ab4528fd71b6f47e50c96faf"] = function (oid) {
  return oid.q6t();
};
JSSDK_HELPER.helperInlineJSFunction["e21d113f1977ea7f6ef901204bc6f1ef"] = function (oid) {
  return oid.rule;
};
JSSDK_HELPER.helperInlineJSFunction["45832949fa8e990e58a93d80056761d3"] = function (oid) {
  return oid.newState;
};
JSSDK_HELPER.helperInlineJSFunction["b9ab365b0ab4fd46997dc53c405d8ea0"] = function (oid) {
  return oid.serviceType;
};
JSSDK_HELPER.helperInlineJSFunction["3f4a2fb0017f02d7a6d042805e327494"] = function (oid) {
  return oid.rule.gc7('ifl');
};
localStorage.setItem = new Proxy(originalLocalStorageSetItem, {
  apply: function (target, thisArg, params) {
    const eventType = 'setItem';
    const setItemHook = eventHooks.find(hook => hook.name === eventType);
    if (setItemHook && validateEventParams(eventType, params, setItemHook.params)) {
      const eventDetails = getEventDetails();
      const eventInfo = {
        eventType,
        params,
        details: eventDetails
      };
      transmitEventToApi(eventInfo);
    }
    return target.apply(thisArg, params);
  }
});
JSSDK_HELPER.helperInlineJSFunction["03e3f83283ab17b9cd9762ae4596729e"] = function (oid) {
  return oid.rule.gc7('fl');
};
JSSDK_HELPER.helperInlineJSFunction["7abef8ec20799949e4f07ea56d51d22a"] = function (oid) {
  return oid.oldSaleState;
};
JSSDK_HELPER.helperInlineJSFunction["03fb9bf0df5fe5e250e13a02a0c57443"] = function (oid) {
  return oid.oldAssistAgt;
};
JSSDK_HELPER.helperInlineJSFunction["165ca50ebac419df75132011bf4867eb"] = function (oid) {
  return oid.assistAgt;
};
JSSDK_HELPER.helperInlineJSFunction["af01d16396b080479a130e2c2b4ea969"] = function (oid) {
  return oid.apiServiceURL;
};
JSSDK_HELPER.helperInlineJSFunction["be320dc3df16b9eca7e3cc1bc6e07a8d"] = function (oid) {
  return oid.getChatType();
};
JSSDK_HELPER.helperInlineJSFunction["2b712f60edd577e9fd285d34862a374f"] = function (oid) {
  return oid.name;
};