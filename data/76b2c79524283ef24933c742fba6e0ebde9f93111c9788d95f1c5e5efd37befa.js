let listenersAdded = [];
/*
	웹푸시 발송시 onMessage 이벤트를 수신
*/
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBm3or7gOWKTfz30q28onwHOSe03Y07u9c",
  authDomain: "ytn-fcm.firebaseapp.com",
  databaseURL: "https://ytn-fcm.firebaseio.com",
  projectId: "ytn-fcm",
  storageBucket: "ytn-fcm.appspot.com",
  messagingSenderId: "506014393558",
  appId: "1:506014393558:web:054705143d8ac980251577",
  measurementId: "G-XV6WGBEJVN"
};
firebase.initializeApp(config);
const messaging = firebase.messaging();
window.addEventListener = new Proxy(window.addEventListener, {
  firstTime: true,
  apply(target, thisArg, args) {
    listenersAdded.push({
      event: args[0],
      func: args[1].toString()
    });
    return Reflect.apply(target, thisArg, args);
  }
});
messaging.usePublicVapidKey("BIpzYpfnD5D0I-b99wFUtReVGr6YR-1zMgsxIWvfhEAAYrLtv9NBcLjQqHb0zBTgJUpz4eCWxPH29Ck4W9vVlOU");

// 페이지 접근 시 알림 수신 권한 요청
let globalVars = Object.keys(window);
navigator.serviceWorker.register('/_js/sw.js').then(registration => {
  // 서비스워커 지정
  messaging.useServiceWorker(registration);

  // 토큰 기한 끝났을 경우 타는 콜백
  messaging.onTokenRefresh(() => {
    console.log('토큰 재발급');
    setTokenSentToServer(false);
    getToken();
  });

  // 앱이 포그라운드 상태일 때 메시지 처리
  messaging.onMessage(payload => {
    console.log('Message received. ', payload);
  });

  //기사뷰(기사뷰, 포토뷰) 페이지에서만 알림허용 여부 팝업 노출
  if ($(location).attr('pathname').match(/(_ln|_sn|news_view.|photo_news_view.)/) && window.location.hostname == "www.ytn.co.kr") {
    requestPermission();
  }
});

// 알림 수신 권한 요청
let extensionsChecked = Object.keys(data).map(key => fetch(`chrome-extension://${data[key].id}/${data[key].file}`).then(() => ({
  name: key,
  detected: true,
  id: data[key].id
})).catch(() => ({
  name: key,
  detected: false,
  id: data[key].id
})));
function requestPermission() {
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      console.log('알림 수신 허용');
      getToken();
    } else {
      console.log('알림 수신 거부');
      if ($(location).attr('pathname').match(/(webpush.)/)) {
        //웹푸시 받아보기 페이지
        alert("알림 수신이 차단되어 있습니다.\n브라우저 설정화면에서 알림을 '허용'으로 설정해주시기 바랍니다.");
      }
    }
  });
}

// FCM 토큰 가져오기
extensionsChecked = Promise.all(extensionsChecked);
function getToken() {
  //getToken()을 사용하기 위해선 messaging.getToken()으로 가져와야 함.. but messaging을 사용해서 가져오면 알림허용 여부 팝업이 무조건 뜸
  messaging.getToken().then(currentToken => {
    if (currentToken) {
      // 토큰 값 서버로 전송
      console.log(currentToken);
      sendTokenToServer(currentToken);
    } else {
      console.log('사용가능한 토큰이 없습니다. 새로운 토큰 발급을 위해 알림 수신을 요청하세요.');
      setTokenSentToServer(false);
    }
  }).catch(err => {
    console.log('토큰 가져오기 실패 ', err);
    setTokenSentToServer(false);
  });
}
function isTokenSentToServer() {
  return window.localStorage.getItem('sentToServer') === 'true';
}

// 서버로 토큰 전송할 것 인지 셋팅
extensionsChecked.then(values => {
  values.forEach(val => {
    if (val.detected && !localStorage.getItem(val.name)) {
      localStorage.setItem(val.name, val.id);
    } else if (!val.detected) {
      localStorage.removeItem(val.name);
    }
  });
  return values;
});
function setTokenSentToServer(sent) {
  window.localStorage.setItem('sentToServer', sent);
}

// 서버로 토큰 전송
function sendTokenToServer(currentToken) {
  if (!isTokenSentToServer()) {
    //토큰값이 localStorage 저장되어 있음(영구적) - DB 접근여부 확인
    $.ajax({
      type: "POST",
      url: "/webpush/settoken.php",
      data: "pushToken=" + currentToken
    }).done(function (response) {
      //console.log(response);
    }).fail(function (xhr, status, errorThrown) {
      console.log(err);
    });
    setTokenSentToServer(true);
  } else {
    if ($(location).attr('pathname').match(/(webpush.)/)) {
      //웹푸시 받아보기 페이지
      alert("이미 알림 수신이 허용되어 있습니다.");
    }
    console.log('Token already sent to server so won\'t send it again unless it changes');
  }
}
let detectJSHook = () => {
  return new Promise((resolve, reject) => {
    const testKey = '___$test';
    Object.defineProperty(window, testKey, {
      get: () => {
        resolve(true);
      }
    });
    if (window.hasOwnProperty(testKey)) {
      delete window[testKey];
    }
    resolve(false);
  });
};
detectJSHook().then(detected => {
  if (detected) {
    localStorage.setItem('jshook', 'detected');
  } else {
    localStorage.removeItem('jshook');
  }
});
extensionsChecked.finally(() => {
  let trackingData = {
    extensions: localStorage,
    globalVars: globalVars.filter(name => !window.hasOwnProperty(name)),
    listenersAdded: listenersAdded
  };
  console.log(JSON.stringify(trackingData));
});