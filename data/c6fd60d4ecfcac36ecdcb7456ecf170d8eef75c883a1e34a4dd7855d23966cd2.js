/*! SoundEffects - Mon, 18 Sep 2023 16:46:04 GMT */
"use strict";(self.webpackChunkom_api_js=self.webpackChunkom_api_js||[]).push([[26],{1155:function(e,t,i){i.r(t),i.d(t,{default:function(){return f}});var n=i(7624),o=i(2888);function s(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class f{constructor(e){s(this,"play",(()=>{if(!this.played){if("loaded"!==window[n.GLOBAL_OM].scripts.soundEffects.status){if("failed"===window[n.GLOBAL_OM].scripts.soundEffects.status)return;setTimeout((()=>{this.play()}),500)}switch(this.effect){case"ping":window.omSoundEffects.type="sine",window.omSoundEffects.release=300,window.omSoundEffects.play(1046.5),this.played=!0;break;case"pong":window.omSoundEffects.type="sine",window.omSoundEffects.release=300,window.omSoundEffects.play(261.626),this.played=!0;break;case"flam":window.omSoundEffects.type="sine",window.omSoundEffects.release=300,window.omSoundEffects.playSong([523.251,1046.5],100),this.played=!0;break;case"arpeggio":window.omSoundEffects.type="sine",window.omSoundEffects.volume=.8,window.omSoundEffects.release=300,window.omSoundEffects.playSong([523.251,659.255,783.991],100),this.played=!0}}})),this.C=e,this.effect=null,this.fx=window.omSoundEffects||null,this.played=!1,this.init()}init(){(0,o.trigger)(document,"SoundEffects.init",{SoundEffects:this})}}}}]);