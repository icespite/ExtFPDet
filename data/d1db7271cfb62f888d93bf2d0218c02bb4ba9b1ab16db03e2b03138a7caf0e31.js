"use strict";(self.webpackChunkSHEIN_W=self.webpackChunkSHEIN_W||[]).push([[33501],{340894:function(e,a,t){t(737529),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t(172553);var n=t(378099);a.default={"1-8-4-1":{sendType:["user"],ga:{eventCategory:"",eventAction:"",eventLabel:""},handler:function(e){var a=e.ga,t=e.report;(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).extraData;a.eventCategory="登录注册页",a.eventAction="PopUps",a.eventLabel="ClickLikeReview",t({ga:a})}},"1-8-4-2":{sendType:["user"],ga:{eventCategory:"商品详情页",eventAction:"Load",eventLabel:"",eventValue:"",addProduct:{id:"",name:"",category:"",price:""},setAction:{type:"detail"}},handler:function(e){var a,t=e.ga,n=e.report,s=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).extraData,r=void 0===s?{}:s;t.eventLabel="".concat(r.spu||r.sku,"&").concat(r.color_sum,"&0"),t.eventValue="0",t.addProduct={id:r.spu||r.sku,name:r.sku,category:r.category,price:r.usd_price},null===(a=window.TPM)||void 0===a||a.publish("viewcontent",{id:r.id,sku:r.sku,spu:r.spu,category:r.category,price:r.price,usd_price:r.usd_price,discount:r.discount,img:r.img,url_name:r.url_name,currency:r.currency}),n({ga:t})}},"1-8-4-4":{sendType:["event","user"],sa:{name:"click_find_my_shade"}},"1-8-4-5":{sendType:["event","user"],sa:{name:"expose_find_my_shade"}},"1-8-4-6":{sendType:["event","user"],sa:{name:"expose_popup_find_my_shade_result"},handler:function(e){var a=e.sa,t=e.report,n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).extraData,s=void 0===n?{}:n;a.param=s,t({sa:a})}},"1-8-4-7":{sendType:["event","user"],sa:{name:"click_popup_find_my_shade_close"},handler:function(e){var a=e.sa,t=e.report,n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).extraData,s=void 0===n?{}:n;a.param=s,t({sa:a})}},"1-8-4-8":{sendType:["event","user"],sa:{name:"click_popup_find_my_shade_button",beacon:1},handler:function(e){var a=e.sa,t=e.report,n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).extraData,s=void 0===n?{}:n;a.param=s,t({sa:a})}},"1-8-4-9":{sendType:["event","user"],sa:{name:"click_goods_detail_feedback"},handler:function(e){var a=e.sa,t=e.report,n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).extraData,s=void 0===n?{}:n;a.param=s,t({sa:a})}},"1-8-4-10":{sendType:["event","user"],sa:{name:"expose_goods_detail_feedback"},handler:function(e){var a=e.sa,t=e.report,n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).extraData,s=void 0===n?{}:n;a.param=s,t({sa:a})}},"1-8-4-11":{sendType:["event","user"],sa:{name:"click_goods_detail_feedback_locations"},handler:function(e){var a=e.sa,t=e.report,n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).extraData,s=void 0===n?{}:n;a.param=s,t({sa:a})}},"1-8-4-12":{sendType:["event","user"],sa:{name:"click_goods_detail_feedback_location"},handler:function(e){var a=e.sa,t=e.report,n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).extraData,s=void 0===n?{}:n;a.param=s,t({sa:a})}},"1-8-4-13":{sendType:["event","user"],sa:{name:"click_goods_detail_feedback_size"},handler:function(e){var a=e.sa,t=e.report,n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).extraData,s=void 0===n?{}:n;a.param=s,t({sa:a})}},"1-8-4-14":{sendType:["event","user"],sa:{name:"click_goods_detail_feedback_submit"},handler:function(e){var a=e.sa,t=e.report,n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).extraData,s=void 0===n?{}:n;a.param=s,t({sa:a})}},"1-8-4-15":{sendType:["event","user"],sa:{name:"click_goods_detail_feedback_findsimilar"},handler:function(e){var a=e.sa,t=e.report,n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).extraData,s=void 0===n?{}:n;a.param=s,t({sa:a})}},"1-8-4-16":{sendType:["event","user"],sa:{name:"click_goods_detail_feedback_close"},handler:function(e){var a=e.sa,t=e.report,n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).extraData,s=void 0===n?{}:n;a.param=s,t({sa:a})}},"1-8-4-17":{sendType:["event","user"],sa:{name:"click_goods_detail_success_close"},handler:function(e){var a=e.sa,t=e.report,n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).extraData,s=void 0===n?{}:n;a.param=s,t({sa:a})}},"1-8-4-18":{sendType:["event","user"],sa:{name:"click_find_my_shade_questions"},handler:function(e){var a=e.sa,t=e.report,n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).extraData,s=void 0===n?{}:n;a.param=s,t({sa:a})}},"1-8-4-19":{sendType:["event","user"],sa:{name:"expose_find_my_shade_button"}},"1-8-4-20":{sendType:["event","user"],sa:{name:"click_find_my_shade_button"}},"1-8-4-21":{sendType:["event","user"],sa:{name:"expose_recommend_tab"},handler:function(e){var a=e.sa,t=e.report,s=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).bindData,r=(void 0===s?{}:s)[0]||{},o=r.poskey,d=r.status,i=r.time_recommend,c=r.time_fault,p="";o&&(p=n.abtservice.getUserAbtResultForAnalysis({posKeys:o}).sa||"-`-`-");a.param={abtest:p,status:d,time_recommend:i,time_fault:c},t({sa:a})}},"1-8-4-22":{sendType:["event","user"],sa:{name:"expose_viewmore"},handler:function(e){var a=e.sa,t=e.report,s=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).bindData,r=((void 0===s?{}:s)[0]||{}).poskey,o="";r&&(o=n.abtservice.getUserAbtResultForAnalysis({posKeys:r}).sa||"-`-`-");a.param={abtest:o},t({sa:a})}},"1-8-4-23":{sendType:["event","user"],sa:{name:"expose_recommend_title"},handler:function(e){var a=e.sa,t=e.report,s=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).bindData,r=((void 0===s?{}:s)[0]||{}).poskey,o="";r&&(o=n.abtservice.getUserAbtResultForAnalysis({posKeys:r}).sa||"-`-`-");a.param={abtest:o},t({sa:a})}}}}}]);