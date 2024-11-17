/* eslint-disable */

'use strict';
(function() {
	var debounce = function debounce(func, wait, immediate) {
		var timeout = void 0;
		return function () {
			var _this = this;

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			var later = function later() {
				timeout = null;
				!immediate && func.apply(_this, args);
			};

			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			callNow && func.apply(this, args);
		};
	};

	var cssVarPoly = {
		test: function test() {
			return window.CSS && window.CSS.supports && window.CSS.supports('(--foo: red)');
		},
		init: function init() {
			if (this.test()) {
				return;
			}

			console.time('cssVarPoly');
			cssVarPoly.ratifiedVars = {};
			cssVarPoly.varsByBlock = [];
			cssVarPoly.oldCSS = [];
			cssVarPoly.findCSS();
			cssVarPoly.updateCSS();
			console.timeEnd('cssVarPoly');
		},
		findCSS: function findCSS() {
			var styleBlocks = Array.prototype.concat.apply([], document.querySelectorAll('#css-variables, link[type="text/css"].__meteor-css__'));
			var counter = 1;
			styleBlocks.map(function (block) {
				if (block.nodeName === 'STYLE') {
					var theCSS = block.innerHTML;
					cssVarPoly.findSetters(theCSS, counter);
					cssVarPoly.oldCSS[counter++] = theCSS;
				} else if (block.nodeName === 'LINK') {
					var url = block.getAttribute('href');
					cssVarPoly.oldCSS[counter] = '';
					cssVarPoly.getLink(url, counter, function (counter, request) {
						cssVarPoly.findSetters(request.responseText, counter);
						cssVarPoly.oldCSS[counter++] = request.responseText;
						cssVarPoly.updateCSS();
					});
				}
			});
		},
		findSetters: function findSetters(theCSS, counter) {
			cssVarPoly.varsByBlock[counter] = theCSS.match(/(--[^:; ]+:..*?;)/g);
		},


		updateCSS: debounce(function () {
			cssVarPoly.ratifySetters(cssVarPoly.varsByBlock);
			cssVarPoly.oldCSS.filter(function (e) {
				return e;
			}).forEach(function (css, id) {
				var newCSS = cssVarPoly.replaceGetters(css, cssVarPoly.ratifiedVars);
				var el = document.querySelector('#inserted' + id);

				if (el) {
					el.innerHTML = newCSS;
				} else {
					var style = document.createElement('style');
					style.type = 'text/css';
					style.innerHTML = newCSS;
					style.classList.add('inserted');
					style.id = 'inserted' + id;
					document.getElementsByTagName('head')[0].appendChild(style);
				}
			});
		}, 100),

		replaceGetters: function replaceGetters(oldCSS, varList) {
			return oldCSS.replace(/var\((--.*?)\)/gm, function (all, variable) {
				return varList[variable];
			});
		},
		ratifySetters: function ratifySetters(varList) {
			varList.filter(function (curVars) {
				return curVars;
			}).forEach(function (curVars) {
				curVars.forEach(function (theVar) {
					var matches = theVar.split(/:\s*/);
					cssVarPoly.ratifiedVars[matches[0]] = matches[1].replace(/;/, '');
				});
			});
			Object.keys(cssVarPoly.ratifiedVars).filter(function (key) {
				return cssVarPoly.ratifiedVars[key].indexOf('var') > -1;
			}).forEach(function (key) {
				cssVarPoly.ratifiedVars[key] = cssVarPoly.ratifiedVars[key].replace(/var\((--.*?)\)/gm, function (all, variable) {
					return cssVarPoly.ratifiedVars[variable];
				});
			});
		},
		getLink: function getLink(url, counter, success) {
			var request = new XMLHttpRequest();
			request.open('GET', url, true);
			request.overrideMimeType('text/css;');

			request.onload = function () {
				if (request.status >= 200 && request.status < 400) {
					if (typeof success === 'function') {
						success(counter, request);
					}
				} else {
					console.warn('an error was returned from:', url);
				}
			};

			request.onerror = function () {
				console.warn('we could not get anything from:', url);
			};

			request.send();
		}
	};
	var stateCheck = setInterval(function () {
		if (document.readyState === 'complete' && typeof Meteor !== 'undefined') {
			clearInterval(stateCheck);
			cssVarPoly.init();
		}
	}, 100);

	var DynamicCss = {};

	DynamicCss.test = function () {
		return window.CSS && window.CSS.supports && window.CSS.supports('(--foo: red)');
	};

	DynamicCss.run = debounce(function () {
		var replace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
		var settings = arguments.length && arguments[1];

		if (replace && !settings) {
			console.error('You must provide settings to the "run" function in DynamicCss');
		}

		if (replace) {
			var colors = settings.collection.find({
				_id: /theme-color-rc/i
			}, {
				fields: {
					value: 1,
					editor: 1
				}
			}).fetch().filter(function (color) {
				return color && color.value;
			});

			if (!colors) {
				return;
			}

			var css = colors.map(function (_ref) {
				var _id = _ref._id,
						value = _ref.value,
						editor = _ref.editor;

				if (editor === 'expression') {
					return '--' + _id.replace('theme-color-', '') + ': var(--' + value + ');';
				}

				return '--' + _id.replace('theme-color-', '') + ': ' + value + ';';
			}).join('\n');
			document.querySelector('#css-variables').innerHTML = ':root {' + css + '}';
		}

		cssVarPoly.init();
	}, 1000);
})();
;

__meteor_runtime_config__ = JSON.parse(decodeURIComponent("%7B%22meteorRelease%22%3A%22METEOR%401.8.1%22%2C%22gitCommitHash%22%3A%22e7334ab4daca0301ed53865f6f7822b46c295d22%22%2C%22meteorEnv%22%3A%7B%22NODE_ENV%22%3A%22production%22%2C%22TEST_METADATA%22%3A%22%7B%7D%22%7D%2C%22PUBLIC_SETTINGS%22%3A%7B%7D%2C%22ROOT_URL%22%3A%22https%3A%2F%2Fchat.vps-server.ru%22%2C%22ROOT_URL_PATH_PREFIX%22%3A%22%22%2C%22autoupdate%22%3A%7B%22versions%22%3A%7B%22web.browser%22%3A%7B%22version%22%3A%22a32f4b8b46379f71fa3fa53e54d59ada99dc8a49%22%2C%22versionRefreshable%22%3A%2263bc36b43e3cd43cf5fdb0af1262eabd8079f677%22%2C%22versionNonRefreshable%22%3A%22751ae57ba26606e183b3326154c974df91f2adb6%22%7D%2C%22web.browser.legacy%22%3A%7B%22version%22%3A%226c704ff301bfc2d252ca3f2c9eb9d22ccc1e4346%22%2C%22versionRefreshable%22%3A%22717e43aa438981700de93acb9ad05f9e7bfb85f7%22%2C%22versionNonRefreshable%22%3A%2248b0a4ea709a6794b66012f6fc0661ee885413a9%22%7D%7D%2C%22autoupdateVersion%22%3Anull%2C%22autoupdateVersionRefreshable%22%3Anull%2C%22autoupdateVersionCordova%22%3Anull%2C%22appId%22%3A%22qdb534hg3np8.pype8is35hof%22%7D%2C%22appId%22%3A%22qdb534hg3np8.pype8is35hof%22%2C%22accountsConfigCalled%22%3Atrue%2C%22isModern%22%3Atrue%7D"))