
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


			var raAdfSync = document.createElement('script'); raAdfSync.src = 'https://track.adform.net/Serving/Cookie/?adfaction=getjs;adfcookname=uid'; raAdfSync.type = 'text/javascript'; document.body.appendChild(raAdfSync); raAdfSync.onload = function() { loadSyncPixel('https://sync.richaudience.com/502e2341fac2c140295d7b3b0c915c8c/?gdpr=0&gdpr_consent=&uid='+window.Adform._uid) };
			
			loadSyncIframe('https://ads.pubmatic.com/AdServer/js/user_sync.html?p=156538&gdpr=0&gdpr_consent=&predirect=https%3A%2F%2Fsync.richaudience.com%2Fa8c1b6a2754b510b088f624c91944bf3%2F%3Fgdpr%3D0%26euconsent%3D%26uid%3D');

			loadSyncPixel('https://x.bidswitch.net/sync?ssp=richaudience&gdpr=0&gdpr_consent=&user_id=6da944a7-949b-448f-8d31-1zz1703402628');

			loadSyncPixel('https://match.adsrvr.org/track/cmf/generic?ttd_pid=id0lh84&ttd_tpi=1&gdpr=0&gdpr_consent=');

		