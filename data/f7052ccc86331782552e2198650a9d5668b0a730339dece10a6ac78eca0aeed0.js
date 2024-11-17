
		function loadSyncPixel(pixelUrl){
			var avImgSync = document.createElement('img');
			avImgSync.width = "1";
			avImgSync.height = "1";
			avImgSync.style.width = "0px";
			avImgSync.style.height = "0px";
			avImgSync.style.cssFloat = "left";
			avImgSync.src = pixelUrl;
			document.body.appendChild(avImgSync);	
		}
		
		function loadSyncScript(pixelUrl){
			var raSrcSync = document.createElement("script");
			raSrcSync.src = pixelUrl;
			raSrcSync.type = "text/javascript";
			document.body.appendChild(raSrcSync);		
		}
		
		function loadSyncIframe(pixelUrl){
			var raIfSync = document.createElement("iframe");
			raIfSync.src = pixelUrl;
			raIfSync.setAttribute('frameborder','0');
			raIfSync.setAttribute('scrolling','no');
			raIfSync.setAttribute('width','0');
			raIfSync.setAttribute('height','0');
			document.body.appendChild(raIfSync);		
		}	
		;


			loadSyncIframe('https://us-u.openx.net/w/1.0/cm?id=5263ff89-48b7-4624-96e0-06c74faea01d&ph=2eba3060-f578-4886-93a0-d9a2346966ea&gdpr=0&gdpr_consent=&r=https%3A%2F%2Fsync.richaudience.com%2Fa9b03dc9bdef0bcb818e9c4110ca0368%2F%3Fuid%3D');

			loadSyncIframe('https://ads.pubmatic.com/AdServer/js/user_sync.html?p=156538&gdpr=0&gdpr_consent=&predirect=https%3A%2F%2Fsync.richaudience.com%2Fa8c1b6a2754b510b088f624c91944bf3%2F%3Fgdpr%3D0%26euconsent%3D%26uid%3D');

			loadSyncPixel('https://id5-sync.com/s/286/9.gif?puid=6da944a7-949b-448f-8d31-1zz1703402628&gdpr=0&gdpr_consent=&callback=https%3A%2F%2Fsync.richaudience.com%2Fa6c163b098d05a413cd1682e26fae172%2F%3Fgdpr%3D0%26euconsent%3D%26uid%3D%7BID5UID%7D');

			loadSyncPixel('https://match.adsrvr.org/track/cmf/generic?ttd_pid=id0lh84&ttd_tpi=1&gdpr=0&gdpr_consent=');

		