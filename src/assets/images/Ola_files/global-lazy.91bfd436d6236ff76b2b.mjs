(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{"./bd/utils/globalLazy.js":function(e,t,r){"use strict";r.r(t),t.default={thirdPartytrackingHit:function(e){if(void 0!==e){var t="<img src='"+e+"' class='hide' id='sponsoredCompareTempImg'>";$("body").append(t),$("#sponsoredCompareTempImg").detach()}},getLazyComponent:function(e,t){"function"==typeof t&&t(n(e))},getRoutePopup:function(e,t){var r=a(e);if(this.isEmptyObject(r))t({popupComponent:[],params:{},paramsRequired:!1,close:!0});else{switch(e){case"#city":return void t(r)}n(e).then((function(e){var n=e.default;t({popupComponent:[{component:n,propAttr:r.propAttr||{},children:r.children||""}],paramsRequired:r.paramsRequired||!1})}))}},APIDBCount:function(e,t,r){var n=e.replace(configs.baseUrl+"/","");this.API.postWithJson("postShareApi",{url:n,shareCount:t.toString(),fbCommentCount:r.toString()},!1).then((function(e){}))},changeCityUrlOnPageReload:function(e,t,r,n,a){if(e.includes("showrooms")&&3===n.length)e=configs.baseUrl+"/"+n[0]+"/"+n[1]+"/"+t.replace(r,"-").toLowerCase();else if(e.includes("/price-in-"))e=e.replace(/price-in-(.*)/g,"price-in-"+t.toLowerCase().replace(r,"-"));else if(e.includes("offer"))e=e.replace(/offer-in-(.*).html/g,"offer-in-"+t.toLowerCase().replace(r,"-")+".html");else if(e.includes("electric-charging-station")&&2===n.length)e="/"+n[0]+"/"+t.replace(r,"_");else if(e.includes("electric-charging-station")&&3===n.length)e="/"+n[0]+"/"+n[1]+"/"+t.toLowerCase().replace(r,"-");else if(e.includes("test-ride")||e.includes("booking"))e=e.replace(/-in-(.*)/g,"-in-"+t.toLowerCase().replace(r,"-"));else if(e.includes("/used-"))if(e.includes("india"))e=e.replace("india",t.toLowerCase().replace(r,"-"));else if(e.includes("in+")){if(e.includes("in+")){var o=e.split("+in+");e=o[0]+"+in+"+t.toLowerCase().replace(r,"-")}}else e=e+"+in+"+t.toLowerCase().replace(r,"-");else if(e.includes("/online-"))if(e.includes("india"))if(e.includes("in-")){if(e.includes("in-")){var s=e.split("-in-");e=s[0]+"-in-"+t.toLowerCase().replace(r,"-")}}else e=e+"-in-"+t.toLowerCase().replace(r,"-");else e=e.replace("india",t.toLowerCase().replace(r,"-"));a(e)}};var n=function(e){switch(e){case"CarComparisons":return r.e(20).then(r.bind(null,"./girnarsoft-react-common/widgets/CarComparisons.js"));case"CompareCarPopup":return r.e(30).then(r.bind(null,"./bd/widgets/CompareCarPopup.js"));case"DCBDealers":return r.e(35).then(r.bind(null,"./girnarsoft-react-common/widgets/DCBDealers.js"));case"EmiCalculate":return r.e(41).then(r.bind(null,"./bd/widgets/model/EmiCalculate.js"));case"ThankyouScreen":return r.e(114).then(r.bind(null,"./bd/widgets/ThankyouScreen.js"));case"BookTestDrive":return r.e(14).then(r.bind(null,"./girnarsoft-react-common/widgets/BookTestDrive.js"));case"ModelScreen":return r.e(66).then(r.bind(null,"./bd/widgets/ModelScreen.js"));case"AddCompareCarCard":return r.e(8).then(r.bind(null,"./girnarsoft-react-common/widgets/card/AddCompareCarCard.js"));case"CrossSellCarousal":return r.e(34).then(r.bind(null,"./girnarsoft-react-common/widgets/CrossSellCarousal.js"));case"OfferWidget":return r.e(84).then(r.bind(null,"./girnarsoft-react-common/widgets/OfferWidget.js"));case"SpareParts":return r.e(108).then(r.bind(null,"./girnarsoft-react-common/widgets/SpareParts.js"));case"MileageTable":return r.e(60).then(r.bind(null,"./girnarsoft-react-common/widgets/model/MileageTable.js"));case"MonthlyFuelCost":return r.e(69).then(r.bind(null,"./bd/widgets/model/monthlyFuelCost.js"));case"RecommendedTabbinCarousel":return r.e(100).then(r.bind(null,"./girnarsoft-react-common/widgets/home/RecommendedTabbinCarousel.js"));case"MoreReviewTag":return r.e(93).then(r.bind(null,"./girnarsoft-react-common/widgets/MoreReviewTag.js"));case"SellCarWidget":return r.e(119).then(r.bind(null,"./girnarsoft-react-common/widgets/SellCarWidget.js"));case"ThankyouPopup":return r.e(121).then(r.bind(null,"./bd/widgets/ThankyouPopup.js"));case"RecommendedUsedCar":return r.e(117).then(r.bind(null,"./girnarsoft-react-common/widgets/RecommendedUsedCar.js"));case"RecommendedUsedCarV2":return r.e(118).then(r.bind(null,"./girnarsoft-react-common/widgets/RecommendedUsedCarV2.js"));case"WhatsappEntryWidget":return r.e(122).then(r.bind(null,"./girnarsoft-react-common/widgets/WhatsappEntryWidget.js"));case"UsedCarRefinance":return r.e(129).then(r.bind(null,"./girnarsoft-react-common/widgets/usedCarDetails/UsedCarRefinance.js"));case"SelllerLocation":return r.e(120).then(r.bind(null,"./girnarsoft-react-common/widgets/usedCarDetails/SelllerLocation.js"));case"Leadcomponent":return r.e(116).then(r.bind(null,"./bd/widgets/Leadcomponent.js"));case"UsedCarLeadPopup":return r.e(126).then(r.bind(null,"./bd/widgets/UsedCarLeadPopup.js"));case"LanguageChange":return r.e(55).then(r.bind(null,"./girnarsoft-react-common/widgets/LanguageChange.js"));case"NotificationPopUp":return r.e(81).then(r.bind(null,"./girnarsoft-react-common/widgets/NotificationPopUp.js"));case"Footer":return r.e(47).then(r.bind(null,"./bd/widgets/Footer.js"));case"FooterMobi":return r.e(48).then(r.bind(null,"./bd/widgets/FooterMobi.js"));case"QuestionAndAnswers":return r.e(98).then(r.bind(null,"./girnarsoft-react-common/widgets/model/QuestionAndAnswers.js"));case"offerSidebar":return r.e(161).then(r.bind(null,"./girnarsoft-react-common/widgets/model/offerSidebar.js"));case"CommonTabbinCarousel":return r.e(29).then(r.bind(null,"./girnarsoft-react-common/widgets/CommonTabbinCarousel.js"));case"AddToHomeScreen":return r.e(9).then(r.bind(null,"./girnarsoft-react-common/widgets/AddToHomeScreen.js"));case"RecommendedNextStep":return r.e(99).then(r.bind(null,"./girnarsoft-react-common/widgets/RecommendedNextStep.js"));case"HomeNewsTab":return r.e(50).then(r.bind(null,"./girnarsoft-react-common/widgets/home/HomeNewsTab.js"));case"View360":return r.e(136).then(r.bind(null,"./girnarsoft-react-common/widgets/model/View360.js"));case"emiStart":return r.e(145).then(r.bind(null,"./girnarsoft-react-common/widgets/model/emiStart.js"));case"costOfOwnerShip":return r.e(144).then(r.bind(null,"./girnarsoft-react-common/widgets/model/costOfOwnerShip.js"));case"UsedCarsByCity":return r.e(130).then(r.bind(null,"./bd/widgets/usedCarDetails/UsedCarsByCity.js"));case"FeedBackForm":return r.e(1).then(r.bind(null,"./girnarsoft-react-common/widgets/FeedBackForm.js"));case"ColorsExplore":return r.e(27).then(r.bind(null,"./girnarsoft-react-common/widgets/animationMG/ColorsExplore.js"));case"Comments":return r.e(28).then(r.bind(null,"./girnarsoft-react-common/widgets/model/Comments.js"));case"MoreBelow":return r.e(70).then(r.bind(null,"./girnarsoft-react-common/widgets/MoreBelow.js"));case"WhatsappUsedCar":return r.e(28).then(r.bind(null,"./girnarsoft-react-common/widgets/WhatsappUsedCar.js"));case"loginPopup":return r.e(157).then(r.bind(null,"./girnarsoft-react-common/widgets/loginPopup.js"));case"DealerWidget":return r.e(39).then(r.bind(null,"./girnarsoft-react-common/widgets/DealerWidget.js"));case"CityTypeahead":return Promise.resolve().then(r.bind(null,"./bd/widgets/CityTypeahead.js"));case"MastHeadVideo":return r.e(59).then(r.bind(null,"./girnarsoft-react-common/widgets/home/MastHeadVideo.js"));case"ShimmerType":return r.e(107).then(r.bind(null,"./girnarsoft-react-common/elements/ShimmerType.js"));case"#advertise":return r.e(139).then(r.bind(null,"./girnarsoft-react-common/widgets/AdvertiseWithUs.js"));case"#feedback":return r.e(91).then(r.bind(null,"./girnarsoft-react-common/widgets/PopUpFeedback.js"));case"#leadForm":return r.e(156).then(r.bind(null,"./bd/widgets/NewLeadForm.js"));case"#usedCarCity":return r.e(128).then(r.bind(null,"./bd/widgets/UsedCarPopUpCity.js"));case"#ucLeadForm":return r.e(126).then(r.bind(null,"./bd/widgets/UsedCarLeadPopup.js"));case"#ucthankyou":return r.e(121).then(r.bind(null,"./bd/widgets/ThankyouPopup.js"));case"#thankyou":return r.e(113).then(r.bind(null,"./girnarsoft-react-common/widgets/ThankyouPopupUsedCarDealer.js"));case"#dealerconnect":return r.e(38).then(r.bind(null,"./bd/widgets/DealerConnectPopup.js"));case"#pictureNewgallery":return r.e(2).then(r.bind(null,"./bd/widgets/model/PopUpNewPictureGallery.js"));case"#searchbrand":return r.e(102).then(r.bind(null,"./girnarsoft-react-common/widgets/SearchBrand.js"));case"#morelink":return r.e(159).then(r.bind(null,"./girnarsoft-react-common/widgets/home/moreLinkPopup.js"));case"#loginPopup":return r.e(157).then(r.bind(null,"./girnarsoft-react-common/widgets/loginPopup.js"));case"#testdriveform":return r.e(165).then(r.bind(null,"./girnarsoft-react-common/widgets/BookTestDriveForm.js"));case"#comments":return r.e(142).then(r.bind(null,"./girnarsoft-react-common/widgets/UserCommentsForm.js"));case"#ucFeedBack":return r.e(1).then(r.bind(null,"./girnarsoft-react-common/widgets/FeedBackForm.js"));case"#reportPrice":return r.e(162).then(r.bind(null,"./girnarsoft-react-common/widgets/PopupReportPrice.js"));case"#reportSpecs":return r.e(163).then(r.bind(null,"./girnarsoft-react-common/widgets/PopupReportSpecs.js"));case"#gaadi-store":return r.e(49).then(r.bind(null,"./girnarsoft-react-common/widgets/gaadi/GaadiLeadformPopup.js"));case"#online-booking":return r.e(36).then(r.bind(null,"./girnarsoft-react-common/widgets/model/DealBookingForm.js"));case"#myaccount":return r.e(72).then(r.bind(null,"./girnarsoft-react-common/widgets/MyAccountPop.js"));case"#service-booking":return r.e(106).then(r.bind(null,"./girnarsoft-react-common/widgets/ServiceForm.js"));case"#insurance":return r.e(52).then(r.bind(null,"./girnarsoft-react-common/widgets/InsuranceForm.js"));case"#inventory-booking":return r.e(82).then(r.bind(null,"./girnarsoft-react-common/widgets/model/OCBInventoryForm.js"));case"#deal-booking":return r.e(53).then(r.bind(null,"./girnarsoft-react-common/widgets/model/InventoryBookingForm.js"));case"#alert":return r.e(90).then(r.bind(null,"./girnarsoft-react-common/widgets/PopUpAlert.js"));case"JwVideoPlayerLazy":return r.e(54).then(r.bind(null,"./girnarsoft-react-common/elements/JwVideoPlayerLazy.js"));case"#testdrive-booking":return r.e(79).then(r.bind(null,"./bd/widgets/testDrive/BuyUsedCarTestDrive.js"));case"#bookingCancel":return r.e(17).then(r.bind(null,"./bd/widgets/obb/CancelConfirmScreen.js"));case"#obbCashBackInfo":return r.e(160).then(r.bind(null,"./bd/widgets/obb/ObbCashBackInfo.js"))}},a=function(e){return{"#advertise":{paramsRequired:!1},"#feedback":{propAttr:{id:"feedpopup",popup:!0},paramsRequired:!1},"#leadForm":{propAttr:{popup:!0,settings:[{prop:"LFObj",apiKey:"params"}]},paramsRequired:!0},"#city":{cityCls:"show",routepopup:!0},"#usedCarCity":{propAttr:{settings:[{prop:"cities",apiKey:"params.cities"}]},paramsRequired:!0},"#ucLeadForm":{propAttr:{settings:[{prop:"leadData",apiKey:"params.leadData"},{prop:"heading",apiKey:"params.heading"},{prop:"subHead",apiKey:"params.subHead"},{prop:"leadLocation",apiKey:"params.leadLocation"},{prop:"cbWhatsAppOtpIn",apiKey:"params.cbWhatsAppOtpIn"},{prop:"cbUcDCB",apiKey:"params.cbUcDCB"},{prop:"isFeatured",apiKey:"params.isFeatured"}]},paramsRequired:!0},"#ucthankyou":{propAttr:{settings:[{prop:"leadResult",apiKey:"params.leadData"},{prop:"leadLocation",apiKey:"params.leadLocation"}]},paramsRequired:!0},"#thankyou":{propAttr:{settings:[{prop:"leadResult",apiKey:"params.leadData"}]},paramsRequired:!0},"#dealerconnect":{propAttr:{settings:[{prop:"dcbDto",apiKey:"params"}]},paramsRequired:!0},"#pictureNewgallery":{propAttr:{id:"gallerypopup",popup:!0,settings:[{prop:"galleryObj",apiKey:"params"},{prop:"usedcar",apiKey:"params.usedCar"},{prop:"cta",apiKey:"params.cta"}]},paramsRequired:!0},"#searchbrand":{propAttr:{settings:[{prop:"searchObj",apiKey:"params"},{prop:"handleOEMSearch",funcName:"handleOEMSearch"}]},paramsRequired:!0},"#morelink":{propAttr:{settings:[{prop:"moreLinkObj",apiKey:"params"}]},paramsRequired:!0},"#loginPopup":{propAttr:{popup:!0,settings:[{prop:"popupParams",apiKey:"params"}]},paramsRequired:!0},"#testdriveform":{propAttr:{popup:!0,settings:[{prop:"popupParams",apiKey:"params"}]},paramsRequired:!0},"#comments":{propAttr:{settings:[{prop:"params",apiKey:"params"}]},paramsRequired:!0},"#ucFeedBack":{propAttr:{settings:[{prop:"usedCarId",apiKey:"params.usedCarId"}],popup:!0,id:"ucFeedBack"},paramsRequired:!0},"#reportPrice":{propAttr:{settings:[{prop:"popupType",apiKey:"params"}]},paramsRequired:!0},"#reportSpecs":{propAttr:{settings:[{prop:"params",apiKey:"params"}]},paramsRequired:!0},"#gaadi-store":{propAttr:{settings:[{prop:"domain",apiKey:"domain"},{prop:"baseUrl",apiKey:"baseUrl"},{prop:"logoUrl",apiKey:"logoUrl"},{prop:"page_location",apiKey:"page_location"},{prop:"skipRegNu",apiKey:"skipRegNu"}]},paramsRequired:!0},"#online-booking":{propAttr:{},paramsRequired:!1},"#myaccount":{propAttr:{id:"myaccountpopup",popup:!0,settings:[{prop:"loginCB",apiKey:"loginCB"},{prop:"intent",apiKey:"intent"},{prop:"category",apiKey:"category"},{prop:"isWhatsappEnabled",apiKey:"isWhatsappEnabled"},{prop:"closePopupCB",apiKey:"closePopupCB"}]},paramsRequired:!1},"#service-booking":{propAttr:{id:"ServiceForm",popup:!0,settings:[{prop:"params",apiKey:"params"}]},paramsRequired:!0},"#insurance":{propAttr:{id:"InsuranceForm",popup:!0,settings:[{prop:"params",apiKey:"params"}]},paramsRequired:!0},"#inventory-booking":{propAttr:{},paramsRequired:!1},"#deal-booking":{propAttr:{settings:[{prop:"carVariantId",apiKey:"carVariantId"},{prop:"modelId",apiKey:"modelId"}]},paramsRequired:!1},"#alert":{propAttr:{settings:[{prop:"message",apiKey:"params"}]},paramsRequired:!0},"#testdrive-booking":{propAttr:{id:"testdriveflow",popup:!0,settings:[{prop:"testDriveObj",apiKey:"params"}]},paramsRequired:!0},"#bookingCancel":{propAttr:{settings:[{prop:"txnId",apiKey:"params.txnId"}],popup:!0,id:"bookingCancel"},paramsRequired:!0},"#obbCashBackInfo":{propAttr:{settings:[{prop:"txnId",apiKey:"params.txnId"},{prop:"successCard",apiKey:"params.successCard"}],popup:!0,id:"obbCashBackInfo"},paramsRequired:!0}}[e]||{}}},"./girnarsoft-react-common/utils/globalLazy.js":function(e,t,r){"use strict";var n;r.r(t),t.default={openAlertPopup:function(e){this.openHashPopup("alert");var t=document.getElementsByClassName("hashPopup");t.length&&this.getReactElement(t[0]).setState({params:e})},fetchCount:function(e){var t=configs.PiUrl+e,r=configs.FbUrl+e;this.APIPiCount(t,r,e)},APIPiCount:function(e,t,r){var n=this;this.API.getShares(e,"PI").then((function(e){n.APIFBCount(t,e,r)}))},APIFBCount:function(e,t,r){var n=this;this.API.getShares(e,"FB").then((function(e){var a=e.share_count+t;n.APIDBCount(r,a,e.comment_count)}))},afterPageView:function(){var e=this;setTimeout((function(){window.__floaterAd=void 0,document.getElementById("main-css")&&(document.getElementById("main-css").onload=function(){$("#deferred-styles").detach()}),$("#criticalcss,[data-temp-styles]").detach();try{if(void 0!==window.backComponent&&(window.history.state&&window.history.state.key==window.backStateKey||null==window.history.state||""==window.history.state)){var t=$('[data-backid="'+window.backComponent+'"]');0==t.length&&(t=$('[data-track-component="'+window.backComponent+'"]')),window.scrollTo(0,t.offset().top),delete window.backComponent}}catch(e){}e.loadAdOnScroll(),e.removeClsOnScroll()}),10),setTimeout((function(){try{e.callConnecto()}catch(e){console.log("connecto error",e)}}),500),e.customGAPageViews();var t=document.getElementById("sponsoredHeaderAd");if(t){var r=t.getAttribute("data-page");r&&"string"==typeof r&&(r.includes(dataLayerObj.page_type)||"All"==r?t.classList.add("show"):t.classList.remove("show"))}},sendDataToGa:function(e,t,r,n,a){try{n=n||0,ga("set","page",document.location.pathname),a?ga("send","event",e,t,r,0,!0):ga("send","event",e,t,r,n,!1)}catch(e){}},setMetaTags:function(e){$("title").html(e.title),e.url&&$('link[rel="canonical"]').attr("href",e.url),$('meta[property="og:title"]').attr("content",e.title),$('meta[property="og:image"]').attr("content",e.ogImage?e.ogImage:""),$('meta[property="og:description"], meta[name="description"]').attr("content",e.metaDescription),$('meta[property="og:url"]').attr("content",window.location.href)},clearAndSetTargetsForAd:function(){var e=$('div[data-type="pixelTracking"]');e.length>0&&e.attr("data-slot-def",e.data("sdef"));var t=$("aside.doodleAd>div");t.length>0&&t.attr("data-load-initially","false");try{googletag.cmd.push((function(){googletag.destroySlots(),googletag.pubads().clear(),googletag.pubads().clearTargeting(),connectoSegments.setAdTargetFromSegments((function(e){if(e.length>0)for(var t=0;t<e.length;t++)googletag.pubads().setTargeting(e[t].key,e[t].value)}))}))}catch(e){console.log(e)}},getPincodeLocality:function(e,t,r){var n=this;this.API.getAPI("NewLocality",t,!0).then((function(t){var a=t.data;if(!n.isEmptyObject(a))for(var o in a)a[o].regionId&&e.push({text:a[o].displayName,value:a[o].regionName,"group-child":!0,"group-parent":a[o].city,id:"".concat(a[o].cityId,"#").concat(a[o].regionId),RID:a[o].regionId,pincode:a[o].pincode});r(e)}))},upAndDownScroll:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:530,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=this,o=function(e,t){var r=arguments,a=this;return function(){clearTimeout(n),n=setTimeout((function(){return e.apply(a,r)}),t)}};o((function(){var n=document.body.getBoundingClientRect().top;if(n<a.lastScroll&&n-a.lastScroll<-20){if(n<-e){if(n<-t&&n>-r)return globals.lastScroll=n,$(".mobibuttonbox").removeClass("active"),void $(".stickInMobi").css("transform","translateY(70px)");$(".mobibuttonbox").addClass("active"),$(".stickInMobi").css("transform","translateY(0px)")}$(".compareAddpopup").length>0&&$(".compareAddpopup").css("top","0px").addClass("open"),a.lastScroll=n}else n>a.lastScroll&&n-a.lastScroll>20&&($(".mobibuttonbox").removeClass("active"),$(".stickInMobi").css("transform","translateY(70px)"),$(".compareAddpopup").length>0&&$(".compareAddpopup").css("top","105px"),a.lastScroll=n)}),300)(e,t,r)}}}}]);