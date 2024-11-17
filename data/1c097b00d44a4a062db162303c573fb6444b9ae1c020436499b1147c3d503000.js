/*
var md = new MobileDetect(window.navigator.userAgent);    
var device="Windows PC";

if( md.match(/Mac/i)){
    device="Mac";
}
if( md.match(/Android/i)){
    device="Android";
}
if( md.match(/webOS/i)){
    device="webOS";
}
if( md.match(/iPhone/i)){
    device="iPhone";
}
if( md.match(/iPad/i)){
    device="AndriPadoid";
}
if( md.match(/iPod/i)){
    device="iPod";
}
if( md.match(/BlackBerry/i)){
    device="BlackBerry";
}
if( md.match(/Windows Phone/i)){
    device="Windows Phone";
}
*/
var send_bt_mqtt={
    "checksum":getCookie('mt_checksum'),
    "ip":getCookie('mt_ip'),
    "u_id":getCookie('mt_u_id'),
    "page":getCookie('mt_page'),
    "device":getCookie('mt_device')
}
/*
$.ajax({
        dataType: "json",
        type: 'POST',
        url: "https://www.businesstoday.com.tw:10443/Getip/indexpost",
        data: send_bt_mqtt,
        global: false,
        async:false,
    });
*/
var response = $.ajax({
        dataType: "json",
        url: "https://www.businesstoday.com.tw/Getip/",
        global: false,
        async:false,
        success: function (data) {
            return data;
        }
    }).responseText;

    //var hostname = 'emq.businesstoday.com.tw';
    //var clientId = 'btEmq' + '.' + response + '.' + getCookie('readAgent');
    //var topic = '/' + location.hostname +  location.pathname;
    //    client = new Paho.MQTT.Client(hostname, Number(443), clientId);//建立客户端实例
    //var options= {
    //    timeout: 10,
    //    keepAliveInterval: 60,
    //    cleanSession: false,
    //    useSSL: true,
    //    onSuccess: onConnect,
    //    mqttVersion: 4,
    //    onFailure: function (e) {
    //        //console.log(e);
    //    }
    //};

    //client.connect(options);//连接服务器并注册连接成功处理事件  
    function onConnect() {  
        //console.log("onConnected");  
        //client.subscribe('/' + location.hostname + location.pathname);//订阅主题
        ////console.log("subscribed");  
        ////發送消息  
        //var u_id=getCookie('readAgent');
        //var page=location.hostname +  location.pathname;
        //var checksum=response + '.' + Date.now();
        //var sendMessage={
        //    "checksum": checksum,
        //    "u_id": u_id,
        //    "ip":response,
        //    "page": page,
        //    "device":device
        //};
        //var sMessage=(JSON.stringify(sendMessage));
        //message = new Paho.MQTT.Message(sMessage);
        //message.destinationName = "/pv/";
        //client.send(message);  
        //console.log("sended")
    }  

    //client.onConnectionLost = onConnectionLost;//注册连接断开处理事件  
    //client.onMessageArrived = onMessageArrived;//注册消息接收处理事件 

    function onConnectionLost(responseObject) {  
        if (responseObject.errorCode !== 0) {  
            //console.log("onConnectionLost:"+responseObject.errorMessage);  
            //console.log("连接已断开");  
         }  
    }  

    function onMessageArrived(message) {  
      //console.log("收到消息:"+message.payloadString);  
      //document.getElementById("messageShow").value+=message.payloadString;
      //document.getElementById("messageShow").value+="\n";
    } 

    function sendMsg() {  
       //message = new Paho.MQTT.Message(document.getElementById("msg").value);  
       //message.destinationName = "chat";
       //client.send(message);  
       //console.log("sended")
    }           

    function getCookie(name) {
        //const value = `; ${document.cookie}`;
        //const parts = value.split(`; ${name}=`);
        //if (parts.length === 2) return parts.pop().split(';').shift();
    }            

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    
