
				var em_version = '7.6.0';
				var em_track_user = true;
				var em_no_track_reason = '';
				
								var disableStrs = [
															'ga-disable-UA-111711959-1',
									];

				/* Function to detect opted out users */
				function __gtagTrackerIsOptedOut() {
					for ( var index = 0; index < disableStrs.length; index++ ) {
						if ( document.cookie.indexOf( disableStrs[ index ] + '=true' ) > -1 ) {
							return true;
						}
					}

					return false;
				}

				/* Disable tracking if the opt-out cookie exists. */
				if ( __gtagTrackerIsOptedOut() ) {
					for ( var index = 0; index < disableStrs.length; index++ ) {
						window[ disableStrs[ index ] ] = true;
					}
				}

				/* Opt-out function */
				function __gtagTrackerOptout() {
					for ( var index = 0; index < disableStrs.length; index++ ) {
						document.cookie = disableStrs[ index ] + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
						window[ disableStrs[ index ] ] = true;
					}
				}

				if ( 'undefined' === typeof gaOptout ) {
					function gaOptout() {
						__gtagTrackerOptout();
					}
				}
								window.dataLayer = window.dataLayer || [];

				window.ExactMetricsDualTracker = {
					helpers: {},
					trackers: {},
				};
				if ( em_track_user ) {
					function __gtagDataLayer() {
						dataLayer.push( arguments );
					}

					function __gtagTracker( type, name, parameters ) {
						if (!parameters) {
							parameters = {};
						}

						if (parameters.send_to) {
							__gtagDataLayer.apply( null, arguments );
							return;
						}

						if ( type === 'event' ) {
							
															parameters.send_to = exactmetrics_frontend.ua;
								__gtagDataLayer( type, name, parameters );
													} else {
							__gtagDataLayer.apply( null, arguments );
						}
					}
					__gtagTracker( 'js', new Date() );
					__gtagTracker( 'set', {
						'developer_id.dNDMyYj' : true,
											} );
															__gtagTracker( 'config', 'UA-111711959-1', {"forceSSL":"true"} );
										window.gtag = __gtagTracker;											(function () {
							/* https://developers.google.com/analytics/devguides/collection/analyticsjs/ */
							/* ga and __gaTracker compatibility shim. */
							var noopfn = function () {
								return null;
							};
							var newtracker = function () {
								return new Tracker();
							};
							var Tracker = function () {
								return null;
							};
							var p = Tracker.prototype;
							p.get = noopfn;
							p.set = noopfn;
							p.send = function (){
								var args = Array.prototype.slice.call(arguments);
								args.unshift( 'send' );
								__gaTracker.apply(null, args);
							};
							var __gaTracker = function () {
								var len = arguments.length;
								if ( len === 0 ) {
									return;
								}
								var f = arguments[len - 1];
								if ( typeof f !== 'object' || f === null || typeof f.hitCallback !== 'function' ) {
									if ( 'send' === arguments[0] ) {
										var hitConverted, hitObject = false, action;
										if ( 'event' === arguments[1] ) {
											if ( 'undefined' !== typeof arguments[3] ) {
												hitObject = {
													'eventAction': arguments[3],
													'eventCategory': arguments[2],
													'eventLabel': arguments[4],
													'value': arguments[5] ? arguments[5] : 1,
												}
											}
										}
										if ( 'pageview' === arguments[1] ) {
											if ( 'undefined' !== typeof arguments[2] ) {
												hitObject = {
													'eventAction': 'page_view',
													'page_path' : arguments[2],
												}
											}
										}
										if ( typeof arguments[2] === 'object' ) {
											hitObject = arguments[2];
										}
										if ( typeof arguments[5] === 'object' ) {
											Object.assign( hitObject, arguments[5] );
										}
										if ( 'undefined' !== typeof arguments[1].hitType ) {
											hitObject = arguments[1];
											if ( 'pageview' === hitObject.hitType ) {
												hitObject.eventAction = 'page_view';
											}
										}
										if ( hitObject ) {
											action = 'timing' === arguments[1].hitType ? 'timing_complete' : hitObject.eventAction;
											hitConverted = mapArgs( hitObject );
											__gtagTracker( 'event', action, hitConverted );
										}
									}
									return;
								}

								function mapArgs( args ) {
									var arg, hit = {};
									var gaMap = {
										'eventCategory': 'event_category',
										'eventAction': 'event_action',
										'eventLabel': 'event_label',
										'eventValue': 'event_value',
										'nonInteraction': 'non_interaction',
										'timingCategory': 'event_category',
										'timingVar': 'name',
										'timingValue': 'value',
										'timingLabel': 'event_label',
										'page' : 'page_path',
										'location' : 'page_location',
										'title' : 'page_title',
									};
									for ( arg in args ) {
																				if ( ! ( ! args.hasOwnProperty(arg) || ! gaMap.hasOwnProperty(arg) ) ) {
											hit[gaMap[arg]] = args[arg];
										} else {
											hit[arg] = args[arg];
										}
									}
									return hit;
								}

								try {
									f.hitCallback();
								} catch ( ex ) {
								}
							};
							__gaTracker.create = newtracker;
							__gaTracker.getByName = newtracker;
							__gaTracker.getAll = function () {
								return [];
							};
							__gaTracker.remove = noopfn;
							__gaTracker.loaded = true;
							window['__gaTracker'] = __gaTracker;
						})();
									} else {
										console.log( "" );
					( function () {
							function __gtagTracker() {
								return null;
							}
							window['__gtagTracker'] = __gtagTracker;
							window['gtag'] = __gtagTracker;
					} )();
									}
			;


window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/","svgExt":".svg","source":{"concatemoji":"http:\/\/www.ellipse.net\/wp-includes\/js\/wp-emoji-release.min.js?ver=91a0ecfb359e25aa3ee904d9a04e2008"}};
/*! This file is auto-generated */
!function(e,a,t){var n,r,o,i=a.createElement("canvas"),p=i.getContext&&i.getContext("2d");function s(e,t){var a=String.fromCharCode,e=(p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,e),0,0),i.toDataURL());return p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,t),0,0),e===i.toDataURL()}function c(e){var t=a.createElement("script");t.src=e,t.defer=t.type="text/javascript",a.getElementsByTagName("head")[0].appendChild(t)}for(o=Array("flag","emoji"),t.supports={everything:!0,everythingExceptFlag:!0},r=0;r<o.length;r++)t.supports[o[r]]=function(e){if(!p||!p.fillText)return!1;switch(p.textBaseline="top",p.font="600 32px Arial",e){case"flag":return s([127987,65039,8205,9895,65039],[127987,65039,8203,9895,65039])?!1:!s([55356,56826,55356,56819],[55356,56826,8203,55356,56819])&&!s([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]);case"emoji":return!s([129777,127995,8205,129778,127999],[129777,127995,8203,129778,127999])}return!1}(o[r]),t.supports.everything=t.supports.everything&&t.supports[o[r]],"flag"!==o[r]&&(t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&t.supports[o[r]]);t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&!t.supports.flag,t.DOMReady=!1,t.readyCallback=function(){t.DOMReady=!0},t.supports.everything||(n=function(){t.readyCallback()},a.addEventListener?(a.addEventListener("DOMContentLoaded",n,!1),e.addEventListener("load",n,!1)):(e.attachEvent("onload",n),a.attachEvent("onreadystatechange",function(){"complete"===a.readyState&&t.readyCallback()})),(e=t.source||{}).concatemoji?c(e.concatemoji):e.wpemoji&&e.twemoji&&(c(e.twemoji),c(e.wpemoji)))}(window,document,window._wpemojiSettings);
;

/* <![CDATA[ */
var exactmetrics_frontend = {"js_events_tracking":"true","download_extensions":"zip,mp3,mpeg,pdf,docx,pptx,xlsx,rar","inbound_paths":"[{\"path\":\"\\\/go\\\/\",\"label\":\"affiliate\"},{\"path\":\"\\\/recommend\\\/\",\"label\":\"affiliate\"}]","home_url":"http:\/\/www.ellipse.net","hash_tracking":"false","ua":"UA-111711959-1","v4_id":""};/* ]]> */
;


(function(url){
	if(/(?:Chrome\/26\.0\.1410\.63 Safari\/537\.31|WordfenceTestMonBot)/.test(navigator.userAgent)){ return; }
	var addEvent = function(evt, handler) {
		if (window.addEventListener) {
			document.addEventListener(evt, handler, false);
		} else if (window.attachEvent) {
			document.attachEvent('on' + evt, handler);
		}
	};
	var removeEvent = function(evt, handler) {
		if (window.removeEventListener) {
			document.removeEventListener(evt, handler, false);
		} else if (window.detachEvent) {
			document.detachEvent('on' + evt, handler);
		}
	};
	var evts = 'contextmenu dblclick drag dragend dragenter dragleave dragover dragstart drop keydown keypress keyup mousedown mousemove mouseout mouseover mouseup mousewheel scroll'.split(' ');
	var logHuman = function() {
		if (window.wfLogHumanRan) { return; }
		window.wfLogHumanRan = true;
		var wfscr = document.createElement('script');
		wfscr.type = 'text/javascript';
		wfscr.async = true;
		wfscr.src = url + '&r=' + Math.random();
		(document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(wfscr);
		for (var i = 0; i < evts.length; i++) {
			removeEvent(evts[i], logHuman);
		}
	};
	for (var i = 0; i < evts.length; i++) {
		addEvent(evts[i], logHuman);
	}
})('//www.ellipse.net/?wordfence_lh=1&hid=2B61DE9033AD27F6D726E4A8BEA657BF');
