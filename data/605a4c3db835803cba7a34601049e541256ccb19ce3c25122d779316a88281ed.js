/*! DidYouMean - Mon, 24 Jul 2023 18:10:24 GMT */
"use strict";(self.webpackChunkom_api_js=self.webpackChunkom_api_js||[]).push([[9],{3215:function(t,e,i){i.r(e),i.d(e,{default:function(){return a}});var n=i(2888),o=i(7361),r=i.n(o);function s(t,e,i){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}class a{constructor(t){s(this,"maybeAddListener",(()=>{this.suggestion&&(this.form=r()(this.C,"Form.form"),this.form&&(0,n.each)(this.form.querySelectorAll(".om-dym-button"),((t,e)=>{(0,n.on)(e,"click.omDym",this.handleDidYouMean)})))})),s(this,"removeListener",(()=>{this.form&&(0,n.each)(this.form.querySelectorAll(".om-dym-button"),((t,e)=>{(0,n.off)(e,"click.omDym")}))})),s(this,"off",(()=>{a.prompted=null,this.resetSuggestion(),this.removeListener()})),s(this,"handleDidYouMean",(t=>{if(!t.target)return;a.prompted=!0;"yes"===t.target.dataset.dym&&(0,n.each)(this.C.Form.inputs,((t,e)=>{"email"===e.type&&(e.value=this.suggestion)})),this.C.Form.resetValidation(),this.C.Optin.init()})),s(this,"getConfirmation",(()=>{if(!this.suggestion)return"";const t=r()(this.C,"Optin.data.fields.email",""),e=t?`${(0,n.__)("Keep ")} ${t}`:(0,n.__)("No");return`\n\t\t\t${(0,n.__)("Did you mean")} ${this.suggestion}?\n\t\t\t<a href="#" class="om-dym-button" data-dym="yes" style="color:#aa6463;text-decoration:underline;" aria-live="polite">${(0,n.__)("Yes")}</a> |\n\t\t\t<a href="#" class="om-dym-button" data-dym="no" style="color:#aa6463;text-decoration:underline;" aria-live="polite">${e}</a>\n\t\t`})),s(this,"hasBeenPrompted",(()=>a.prompted)),s(this,"parseOptinResponse",(t=>{const e=r()(t,"dym_suggestion",null);a.prompted=null,e&&(this.suggestion=e)})),s(this,"resetSuggestion",(()=>{this.suggestion=null})),this.C=t,this.suggestion=null,this.form=null}}a.prompted=null}}]);