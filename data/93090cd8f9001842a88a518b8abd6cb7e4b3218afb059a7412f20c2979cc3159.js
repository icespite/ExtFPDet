
    var tcblock = {
        // Required and steady
        'container': 'tc',
        'type': 'relatedsearch',
        'colorBackground': 'transparent',
        
        'number': 3,
        
        // Font-Sizes and Line-Heights
        'fontSizeAttribution': 14,
        'fontSizeTitle': 24,
        'lineHeightTitle': 34,
        // Colors
        'colorAttribution': '#aaa',
        'colorTitleLink': '#0277bd',
        // Alphabetically
        'horizontalAlignment': 'center',
        'noTitleUnderline': false,
        'rolloverLinkColor': '#01579b',
        'verticalSpacing': 10
    };
    var searchboxBlock = {
        'container': 'search',
        'type': 'searchbox',
        'fontSizeSearchInput': 12,
        'hideSearchInputBorder': false,
        'hideSearchButtonBorder': true,
        'fontSizeSearchButton': 13,
        'colorBackground': 'transparent',
        'colorSearchButton': '#0b3279',
        'colorSearchButtonText': '#fff'
    };
    ;

var isAdult=false;     var containerNames=[];     var uniqueTrackingID='MTcwMjAyOTY0OS4zODE2OmIzNDJkODJiYWRkMWFiYzkzY2I1YWZlZGI0MTc4YzY4ZmI4ODdhYTcyZjliNDM4ODg2Mzg0YzA3MzE2ZTU1ZGU6NjU3MmU5NTE1ZDI3NA==';     var search='';     var themedata='fENsZWFuUGVwcGVybWludEJsYWNrfHw1Y2U4NHxidWNrZXQwMDN8fHx8fHw2NTcyZTk1MTVkMjU4fHx8MTcwMjAyOTY0OS4zOTI2fDJlNjBhZTdmNGExNjU1ZjkwMzhmNmJlNGJkYzJiNWZiYmQ2OWNjYTJ8fHx8fDF8fDB8MHx8fHwxfHx8fHwwfDB8fHx8fHx8fFpIQXRkR1ZoYldsdWRHVnlibVYwTURSZk0zQm98ZDgyZjM2MWZiZjFhMmNkYjk1Y2Y3NmRjNjczMTAzZDYzZWVlNTdiZHwwfDB8fDB8fHwwfDB8VzEwPXx8MXxXMTA9fGFiOWMxNTk4YTkzOTk4MDY4Njk2NzE3OGZhMmRjNDcyYmQxZTEwNDJ8MHxkcC10ZWFtaW50ZXJuZXQwNF8zcGh8MHwwfA==';     var domain='filmxy.live';     var scriptPath='';     var adtest='off'; ;

if(top.location!==location) { top.location.href=location.protocol + '//' + location.host + location.pathname + (location.search ? location.search + '&' : '?') + '_xafvr=YzcwMzJhNjY4ZmI1ZTYyY2Y0YjU2NThlMDM4ZTQ1M2RjYzc1OGFiYSw2NTcyZTk1MTVmZGI0'; } ;


var pageLoadedCallbackTriggered = false;
var fallbackTriggered = false;
var formerCalledArguments = false;

var pageOptions = {
    'pubId': 'dp-teaminternet01',
    'resultsPageBaseUrl': '//' + location.host + '/?ts=',
    'fontFamily': 'arial',
    'optimizeTerms': true,
    'maxTermLength': 40,
    'adtest': true,
    'clicktrackUrl': '//' + location.host + '/track.php?',
    'attributionText': 'Ads',
    'colorAttribution': '#b7b7b7',
    'fontSizeAttribution': 16,
    'attributionBold': false,
    'rolloverLinkBold': false,
    'fontFamilyAttribution': 'arial',
    'adLoadedCallback': function(containerName, adsLoaded, isExperimentVariant, callbackOptions) {
        if (!adsLoaded) {
            try {
                var ele = document.getElementById(container).getElementsByTagName('iframe')[0];
                var vars = JSON.parse(ele.name.substr(ele.id.length + 1));
                if (typeof vars[ele.id].type == "string" && vars[ele.id].type == "relatedsearch") {
                    relatedFallback((function () {
                        relatedCallback(vars[ele.id]);
                    }));
                }
            } catch (err) {
                if (!(err instanceof SyntaxError)) {
                    throw err;
                }
            }
        } else if (containerName in containerNames) {

            var data = {
                containerName: containerName,
                adsLoaded: adsLoaded,
                isExperimentVariant: isExperimentVariant,
                callbackOptions: callbackOptions,
                terms: pageOptions.terms
            }

            ajaxQuery(
                scriptPath + "/track.php"
                + "?toggle=adloaded"
                + "&uid=" + encodeURIComponent(uniqueTrackingID)
                + "&domain=" + encodeURIComponent(domain)
                + "&data=" + encodeURIComponent(JSON.stringify(data))
            );
        }
    },
    'pageLoadedCallback': function (requestAccepted, status) {

        document.body.style.visibility = 'visible';
        pageLoadedCallbackTriggered = true;

        if ((status.faillisted === true || status.faillisted == "true" || status.blocked === true || status.blocked == "true" ) && status.error_code != 25) {
            ajaxQuery(scriptPath + "/track.php?domain=" + encodeURIComponent(domain) + "&caf=1&toggle=block&reason=other&uid=" + encodeURIComponent(uniqueTrackingID));
        }

        if (status.errorcode && !status.error_code) {
            status.error_code = status.errorcode;
        }

        if (status.error_code) {
            ajaxQuery(scriptPath + "/track.php?domain=" + encodeURIComponent(domain) + "&caf=1&toggle=errorcode&code=" + encodeURIComponent(status.error_code) + "&uid=" + encodeURIComponent(uniqueTrackingID));

            if ([18, 19].indexOf(parseInt(status.error_code)) != -1 && fallbackTriggered == false) {
                fallbackTriggered = true;
                if (typeof loadFeed === "function") {
                    window.location.href = '//' + location.host;
                }
            }

            if (status.error_code == 20) {
                window.location.replace("//dp.g.doubleclick.net/apps/domainpark/domainpark.cgi?client=" + encodeURIComponent((pageOptions.pubid.match(/^ca-/i) ? "" : "ca-") + pageOptions.pubid) + "&domain_name=" + encodeURIComponent(domain) + "&output=html&drid=" + encodeURIComponent(pageOptions.domainRegistrant));
            }
        }

        if (status.needsreview === true || status.needsreview == "true") {
            ajaxQuery(scriptPath + "/track.php?domain=" + encodeURIComponent(domain) + "&caf=1&toggle=needsreview&uid=" + encodeURIComponent(uniqueTrackingID));
        }

        if ((status.adult === true || status.adult == "true") && !isAdult) {
            ajaxQuery(scriptPath + "/track.php?domain=" + encodeURIComponent(domain) + "&caf=1&toggle=adult&uid=" + encodeURIComponent(uniqueTrackingID));
        } else if ((status.adult === false || status.adult == "false") && isAdult) {
            ajaxQuery(scriptPath + "/track.php?domain=" + encodeURIComponent(domain) + "&caf=1&toggle=nonadult&uid=" + encodeURIComponent(uniqueTrackingID));
        }

        // -- google parking
        if (requestAccepted) {
            if (status.feed) {
                ajaxQuery(scriptPath + "/track.php?domain=" + encodeURIComponent(domain) + "&caf=1&toggle=feed&feed=" + encodeURIComponent(status.feed) + "&uid=" + encodeURIComponent(uniqueTrackingID));
            }
            if (status.error_code) {
                ajaxQuery(scriptPath + "/track.php?domain=" + encodeURIComponent(domain) + "&caf=1&toggle=answercheck&answer=error_" + encodeURIComponent(status.error_code) + "&uid=" + encodeURIComponent(uniqueTrackingID));
            } else {
                ajaxQuery(scriptPath + "/track.php?domain=" + encodeURIComponent(domain) + "&caf=1&toggle=answercheck&answer=yes&uid=" + encodeURIComponent(uniqueTrackingID));
            }
        } else {
            ajaxQuery(scriptPath + "/track.php?domain=" + encodeURIComponent(domain) + "&caf=1&toggle=answercheck&answer=rejected&uid=" + encodeURIComponent(uniqueTrackingID));
        }
    }
}

var x = function (obj1, obj2) {
    if (typeof obj1 != "object")
        obj1 = {};

    for (var key in obj2)
        obj1[key] = obj2[key];

    return obj1;
};

function getXMLhttp() {
    var xmlHttp = null;
    try {
        xmlHttp = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (ex) {
            try {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (exc) {
            }
        }
    }
    return xmlHttp;
}

function ajaxQuery(url) {
    if (adtest == 'on') return false;
    xmlHttp = getXMLhttp();
    if (!xmlHttp) return ajaxBackfill(url);
    xmlHttp.open("GET", url, false);
    return xmlHttp.send(null);
}

function ajaxBackfill(url) {
    if (adtest == 'on') return false;
    if (url.indexOf("&toggle=browserjs") > -1) return false;
    try {
        var img = document.createElement('img');
        img.style.visibility = 'hidden';
        img.style.width = '1px';
        img.style.height = '1px';
        img.src = url + "&_t=" + new Date().getTime();
        document.body.appendChild(img);
    } catch (e) {
    }
}

var waitTime = 0;
var timeout = 2000;
var waitStep = 1000;
function listenFor1TierResponse() {

    if (typeof pageLoadedCallbackTriggered == 'undefined') {
        return;
    }

    if (waitTime < timeout && pageLoadedCallbackTriggered == false) {
        waitTime = waitTime + waitStep;
        setTimeout(listenFor1TierResponse, waitStep);
        return;
    }

    if (pageLoadedCallbackTriggered == false) {
        document.body.style.visibility = 'visible';
    }
}
listenFor1TierResponse();


ajaxQuery(scriptPath + "/track.php?domain=" + encodeURIComponent(domain) + "&toggle=browserjs&uid=" + encodeURIComponent(uniqueTrackingID));
;

x(pageOptions, {resultsPageBaseUrl: 'http://ww1.filmxy.live/?ts=fENsZWFuUGVwcGVybWludEJsYWNrfHw1Y2U4NHxidWNrZXQwMDN8fHx8fHw2NTcyZTk1MTVkMjU4fHx8MTcwMjAyOTY0OS4zOTI3fDk3NTQ0NWRkZTllZTQ1N2M0YTk0ZWRhNjljYTE4ZDk1NzhkNTk3NzB8fHx8fDF8fDB8MHx8fHwxfHx8fHwwfDB8fHx8fHx8fFpIQXRkR1ZoYldsdWRHVnlibVYwTURSZk0zQm98ZDgyZjM2MWZiZjFhMmNkYjk1Y2Y3NmRjNjczMTAzZDYzZWVlNTdiZHwwfDB8fDB8fHwwfDB8VzEwPXx8MXxXMTA9fGFiOWMxNTk4YTkzOTk4MDY4Njk2NzE3OGZhMmRjNDcyYmQxZTEwNDJ8MHxkcC10ZWFtaW50ZXJuZXQwNF8zcGh8MHwwfA%3D%3D',hl: 'en',kw: '',terms: '',uiOptimize: true, channel: '000001,bucket003', pubId: 'dp-teaminternet04_3ph',adtest: 'off',personalizedAds: false,clicktrackUrl: 'https://parking-crew.com/track.' + 'php?click=caf' + '&domain=filmxy.live&uid=MTcwMjAyOTY0OS4zODE2OmIzNDJkODJiYWRkMWFiYzkzY2I1YWZlZGI0MTc4YzY4ZmI4ODdhYTcyZjliNDM4ODg2Mzg0YzA3MzE2ZTU1ZGU6NjU3MmU5NTE1ZDI3NA%3D%3D&ts=fENsZWFuUGVwcGVybWludEJsYWNrfHw1Y2U4NHxidWNrZXQwMDN8fHx8fHw2NTcyZTk1MTVkMjU4fHx8MTcwMjAyOTY0OS4zOTI2fDJlNjBhZTdmNGExNjU1ZjkwMzhmNmJlNGJkYzJiNWZiYmQ2OWNjYTJ8fHx8fDF8fDB8MHx8fHwxfHx8fHwwfDB8fHx8fHx8fFpIQXRkR1ZoYldsdWRHVnlibVYwTURSZk0zQm98ZDgyZjM2MWZiZjFhMmNkYjk1Y2Y3NmRjNjczMTAzZDYzZWVlNTdiZHwwfDB8fDB8fHwwfDB8VzEwPXx8MXxXMTA9fGFiOWMxNTk4YTkzOTk4MDY4Njk2NzE3OGZhMmRjNDcyYmQxZTEwNDJ8MHxkcC10ZWFtaW50ZXJuZXQwNF8zcGh8MHwwfA%3D%3D&adtest=off' });;

x(pageOptions, [] );;

x(pageOptions, { domainRegistrant:'as-drid-2719855883814808' } );;


                function loadFeed() { var c = google.ads.domains.Caf;var a=Array.prototype.slice.call(arguments);switch(a.length) { case 1:return new c(a[0]);case 2:return new c(a[0],a[1]);case 3:return new c(a[0],a[1],a[2]);case 4:return new c(a[0],a[1],a[2],a[3]);case 5:return new c(a[0],a[1],a[2],a[3],a[4]); } return c.apply(null,a); }
                function relatedCallback(options) { return false; } function relatedFallback(callback) { return callback(); }
    ;

var ls = function(xhr, path, token) {
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status >= 200 && xhr.status <= 400) {
                if (xhr.responseText.trim() === '') {
                    return;
                }
    
                console.log(JSON.parse(xhr.responseText))
            } else {
                console.log('There was a problem with the request.');
            }
        }
    }
    
    xhr.open('GET', path + '/ls.p' + 'hp?t=6572e951&token=' + encodeURI(token), true);
    xhr.send();
};
ls(new XMLHttpRequest(), scriptPath, 'ab9c1598a939980686967178fa2dc472bd1e1042');;

x(pageOptions, { "styleId":1167268112});;

x(pageOptions);
    new loadFeed(pageOptions, tcblock, searchboxBlock);