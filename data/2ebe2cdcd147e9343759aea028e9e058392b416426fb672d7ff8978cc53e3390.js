

    var syncPixels = "https://pbs.optidigital.com/setuid?bidder=onetag&gdpr=&gdpr_consent=&gpp=&gpp_sid=&f=b&uid=";
    var syncIframes = "";

    var GDPR_APPLIES = "gdpr=";
    var GDPR = "gdpr_consent=";
    var US_PRIVACY = "us_privacy=";


    var params = location.search.substring(1);
    var consentString = "";
    var usPrivacy = "";
    var gdprAppliesValue = "1";

    try {

        var index = params.indexOf(GDPR);
        if (index >= 0) {
            consentString = params.substring(index + GDPR.length).split("&")[0];
        }

        index = params.indexOf(GDPR_APPLIES);
        if (index >= 0) {
            var tmp = params.substring(index + GDPR_APPLIES.length).split("&")[0];
            gdprAppliesValue = (tmp == null || tmp === "" || tmp === "1") ? "1" : "0";
        }

        index = params.indexOf(US_PRIVACY);
        if (index >= 0) {
            usPrivacy = params.substring(index + US_PRIVACY.length).split("&")[0];
        }

    } catch (e) {
        console.log("Can't detect gdpr consent string");
    }

    if (syncPixels) {

        var sync = syncPixels.split(" ");
        if (sync != null) {
            sync.forEach(function(url) {

                url = url.replace("${GDPR}",gdprAppliesValue);
                url = url.replace("${GDPR_STRING}", consentString);
                url = url.replace("${US_PRIVACY}", usPrivacy);

                new Image().src = url;

            });
        }
    }

    if (syncIframes) {

        var syncF = syncIframes.split(",");
        if (syncF != null) {
            syncF.forEach(function(url) {

                url = url.replace("${GDPR}",gdprAppliesValue);
                url = url.replace("${GDPR_STRING}", consentString);
                url = url.replace("${US_PRIVACY}", usPrivacy);

                var iframe = document.createElement("iframe");
                iframe.src = url;
                iframe.style.display = "none";
                iframe.style.width = "0px";
                iframe.style.height = "0px";
                document.body.appendChild(iframe);

            });
        }
    }

