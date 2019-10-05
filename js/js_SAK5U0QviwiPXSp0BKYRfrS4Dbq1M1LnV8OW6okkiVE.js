/*
 * jQuery Orbit Plugin 1.4.0
 * www.ZURB.com/playground
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/(function(e){"use strict";e.fn.findFirstImage=function(){return this.first().find("img").andSelf().filter("img").first()};var t={defaults:{animation:"horizontal-push",animationSpeed:600,timer:!0,advanceSpeed:4e3,pauseOnHover:!1,startClockOnMouseOut:!1,startClockOnMouseOutAfter:1e3,directionalNav:!0,directionalNavRightText:"Right",directionalNavLeftText:"Left",captions:!0,captionAnimation:"fade",captionAnimationSpeed:600,resetTimerOnClick:!1,bullets:!1,bulletThumbs:!1,bulletThumbLocation:"",afterSlideChange:e.noop,afterLoadComplete:e.noop,fluid:!0,centerBullets:!0},activeSlide:0,numberSlides:0,orbitWidth:null,orbitHeight:null,locked:null,timerRunning:null,degrees:0,wrapperHTML:'<div class="orbit-wrapper" />',timerHTML:'<div class="timer"><span class="mask"><span class="rotator"></span></span><span class="pause"></span></div>',captionHTML:'<div class="orbit-caption"></div>',directionalNavHTML:'<div class="slider-nav"><span class="right"></span><span class="left"></span></div>',bulletHTML:'<ul class="orbit-bullets"></ul>',init:function(t,n){var r,i=0,s=this;this.clickTimer=e.proxy(this.clickTimer,this),this.addBullet=e.proxy(this.addBullet,this),this.resetAndUnlock=e.proxy(this.resetAndUnlock,this),this.stopClock=e.proxy(this.stopClock,this),this.startTimerAfterMouseLeave=e.proxy(this.startTimerAfterMouseLeave,this),this.clearClockMouseLeaveTimer=e.proxy(this.clearClockMouseLeaveTimer,this),this.rotateTimer=e.proxy(this.rotateTimer,this),this.options=e.extend({},this.defaults,n),this.options.timer==="false"&&(this.options.timer=!1),this.options.captions==="false"&&(this.options.captions=!1),this.options.directionalNav==="false"&&(this.options.directionalNav=!1),this.$element=e(t),this.$wrapper=this.$element.wrap(this.wrapperHTML).parent(),this.$slides=this.$element.children("img, a, div"),this.$element.bind("orbit.next",function(){s.shift("next")}),this.$element.bind("orbit.prev",function(){s.shift("prev")}),this.$element.bind("orbit.goto",function(e,t){s.shift(t)}),this.$element.bind("orbit.start",function(e,t){s.startClock()}),this.$element.bind("orbit.stop",function(e,t){s.stopClock()}),r=this.$slides.filter("img"),r.length===0?this.loaded():r.bind("imageready",function(){i+=1,i===r.length&&s.loaded()})},loaded:function(){this.$element.addClass("orbit").css({width:"1px",height:"1px"}),this.$slides.addClass("orbit-slide"),this.setDimentionsFromLargestSlide(),this.updateOptionsIfOnlyOneSlide(),this.setupFirstSlide(),this.options.timer&&(this.setupTimer(),this.startClock()),this.options.captions&&this.setupCaptions(),this.options.directionalNav&&this.setupDirectionalNav(),this.options.bullets&&(this.setupBulletNav(),this.setActiveBullet()),this.options.afterLoadComplete.call(this)},currentSlide:function(){return this.$slides.eq(this.activeSlide)},setDimentionsFromLargestSlide:function(){var t=this,n;t.$element.add(t.$wrapper).width(this.$slides.first().outerWidth()),t.$element.add(t.$wrapper).height(this.$slides.first().height()),t.orbitWidth=this.$slides.first().outerWidth(),t.orbitHeight=this.$slides.first().height(),n=this.$slides.first().findFirstImage().clone(),this.$slides.each(function(){var r=e(this),i=r.outerWidth(),s=r.height();i>t.$element.outerWidth()&&(t.$element.add(t.$wrapper).width(i),t.orbitWidth=t.$element.outerWidth()),s>t.$element.height()&&(t.$element.add(t.$wrapper).height(s),t.orbitHeight=t.$element.height(),n=e(this).findFirstImage().clone()),t.numberSlides+=1}),this.options.fluid&&(typeof this.options.fluid=="string"&&(n=e('<img src="http://placehold.it/'+this.options.fluid+'" />')),t.$element.prepend(n),n.addClass("fluid-placeholder"),t.$element.add(t.$wrapper).css({width:"inherit"}),t.$element.add(t.$wrapper).css({height:"inherit"}),e(window).bind("resize",function(){t.orbitWidth=t.$element.outerWidth(),t.orbitHeight=t.$element.height()}))},lock:function(){this.locked=!0},unlock:function(){this.locked=!1},updateOptionsIfOnlyOneSlide:function(){this.$slides.length===1&&(this.options.directionalNav=!1,this.options.timer=!1,this.options.bullets=!1)},setupFirstSlide:function(){var e=this;this.$slides.first().css({"z-index":3}).fadeIn(function(){e.$slides.css({display:"block"})})},startClock:function(){var e=this;if(!this.options.timer)return!1;this.$timer.is(":hidden")?this.clock=setInterval(function(){e.$element.trigger("orbit.next")},this.options.advanceSpeed):(this.timerRunning=!0,this.$pause.removeClass("active"),this.clock=setInterval(this.rotateTimer,this.options.advanceSpeed/180,!1))},rotateTimer:function(e){var t="rotate("+this.degrees+"deg)";this.degrees+=2,this.$rotator.css({"-webkit-transform":t,"-moz-transform":t,"-o-transform":t,"-ms-transform":t}),this.degrees>180&&(this.$rotator.addClass("move"),this.$mask.addClass("move"));if(this.degrees>360||e)this.$rotator.removeClass("move"),this.$mask.removeClass("move"),this.degrees=0,this.$element.trigger("orbit.next")},stopClock:function(){if(!this.options.timer)return!1;this.timerRunning=!1,clearInterval(this.clock),this.$pause.addClass("active")},setupTimer:function(){this.$timer=e(this.timerHTML),this.$wrapper.append(this.$timer),this.$rotator=this.$timer.find(".rotator"),this.$mask=this.$timer.find(".mask"),this.$pause=this.$timer.find(".pause"),this.$timer.click(this.clickTimer),this.options.startClockOnMouseOut&&(this.$wrapper.mouseleave(this.startTimerAfterMouseLeave),this.$wrapper.mouseenter(this.clearClockMouseLeaveTimer)),this.options.pauseOnHover&&this.$wrapper.mouseenter(this.stopClock)},startTimerAfterMouseLeave:function(){var e=this;this.outTimer=setTimeout(function(){e.timerRunning||e.startClock()},this.options.startClockOnMouseOutAfter)},clearClockMouseLeaveTimer:function(){clearTimeout(this.outTimer)},clickTimer:function(){this.timerRunning?this.stopClock():this.startClock()},setupCaptions:function(){this.$caption=e(this.captionHTML),this.$wrapper.append(this.$caption),this.setCaption()},setCaption:function(){var t=this.currentSlide().attr("data-caption"),n;if(!this.options.captions)return!1;if(t){if(e.trim(e(t).text()).length<1)return!1;n=e(t).html(),this.$caption.attr("id",t).html(n);switch(this.options.captionAnimation){case"none":this.$caption.show();break;case"fade":this.$caption.fadeIn(this.options.captionAnimationSpeed);break;case"slideOpen":this.$caption.slideDown(this.options.captionAnimationSpeed)}}else switch(this.options.captionAnimation){case"none":this.$caption.hide();break;case"fade":this.$caption.fadeOut(this.options.captionAnimationSpeed);break;case"slideOpen":this.$caption.slideUp(this.options.captionAnimationSpeed)}},setupDirectionalNav:function(){var t=this,n=e(this.directionalNavHTML);n.find(".right").html(this.options.directionalNavRightText),n.find(".left").html(this.options.directionalNavLeftText),this.$wrapper.append(n),this.$wrapper.find(".left").click(function(){t.stopClock(),t.options.resetTimerOnClick&&(t.rotateTimer(!0),t.startClock()),t.$element.trigger("orbit.prev")}),this.$wrapper.find(".right").click(function(){t.stopClock(),t.options.resetTimerOnClick&&(t.rotateTimer(!0),t.startClock()),t.$element.trigger("orbit.next")})},setupBulletNav:function(){this.$bullets=e(this.bulletHTML),this.$wrapper.append(this.$bullets),this.$slides.each(this.addBullet),this.$element.addClass("with-bullets"),this.options.centerBullets&&this.$bullets.css("margin-left",-this.$bullets.outerWidth()/2)},addBullet:function(t,n){var r=t+1,i=e("<li>"+r+"</li>"),s,o=this;this.options.bulletThumbs&&(s=e(n).attr("data-thumb"),s&&i.addClass("has-thumb").css({background:"url("+this.options.bulletThumbLocation+s+") no-repeat"})),this.$bullets.append(i),i.data("index",t),i.click(function(){o.stopClock(),o.options.resetTimerOnClick&&(o.rotateTimer(!0),o.startClock()),o.$element.trigger("orbit.goto",[i.data("index")])})},setActiveBullet:function(){if(!this.options.bullets)return!1;this.$bullets.find("li").removeClass("active").eq(this.activeSlide).addClass("active")},resetAndUnlock:function(){this.$slides.eq(this.prevActiveSlide).css({"z-index":1}),this.unlock(),this.options.afterSlideChange.call(this,this.$slides.eq(this.prevActiveSlide),this.$slides.eq(this.activeSlide))},shift:function(e){var t=e;this.prevActiveSlide=this.activeSlide;if(this.prevActiveSlide==t)return!1;if(this.$slides.length=="1")return!1;this.locked||(this.lock(),e=="next"?(this.activeSlide++,this.activeSlide==this.numberSlides&&(this.activeSlide=0)):e=="prev"?(this.activeSlide--,this.activeSlide<0&&(this.activeSlide=this.numberSlides-1)):(this.activeSlide=e,this.prevActiveSlide<this.activeSlide?t="next":this.prevActiveSlide>this.activeSlide&&(t="prev")),this.setActiveBullet(),this.$slides.eq(this.prevActiveSlide).css({"z-index":2}),this.options.animation=="fade"&&this.$slides.eq(this.activeSlide).css({opacity:0,"z-index":3}).animate({opacity:1},this.options.animationSpeed,this.resetAndUnlock),this.options.animation=="horizontal-slide"&&(t=="next"&&this.$slides.eq(this.activeSlide).css({left:this.orbitWidth,"z-index":3}).animate({left:0},this.options.animationSpeed,this.resetAndUnlock),t=="prev"&&this.$slides.eq(this.activeSlide).css({left:-this.orbitWidth,"z-index":3}).animate({left:0},this.options.animationSpeed,this.resetAndUnlock)),this.options.animation=="vertical-slide"&&(t=="prev"&&this.$slides.eq(this.activeSlide).css({top:this.orbitHeight,"z-index":3}).animate({top:0},this.options.animationSpeed,this.resetAndUnlock),t=="next"&&this.$slides.eq(this.activeSlide).css({top:-this.orbitHeight,"z-index":3}).animate({top:0},this.options.animationSpeed,this.resetAndUnlock)),this.options.animation=="horizontal-push"&&(t=="next"&&(this.$slides.eq(this.activeSlide).css({left:this.orbitWidth,"z-index":3}).animate({left:0},this.options.animationSpeed,this.resetAndUnlock),this.$slides.eq(this.prevActiveSlide).animate({left:-this.orbitWidth},this.options.animationSpeed)),t=="prev"&&(this.$slides.eq(this.activeSlide).css({left:-this.orbitWidth,"z-index":3}).animate({left:0},this.options.animationSpeed,this.resetAndUnlock),this.$slides.eq(this.prevActiveSlide).animate({left:this.orbitWidth},this.options.animationSpeed))),this.options.animation=="vertical-push"&&(t=="next"&&(this.$slides.eq(this.activeSlide).css({top:-this.orbitHeight,"z-index":3}).animate({top:0},this.options.animationSpeed,this.resetAndUnlock),this.$slides.eq(this.prevActiveSlide).animate({top:this.orbitHeight},this.options.animationSpeed)),t=="prev"&&(this.$slides.eq(this.activeSlide).css({top:this.orbitHeight,"z-index":3}).animate({top:0},this.options.animationSpeed,this.resetAndUnlock),this.$slides.eq(this.prevActiveSlide).animate({top:-this.orbitHeight},this.options.animationSpeed))),this.setCaption())}};e.fn.orbit=function(n){return this.each(function(){var r=e.extend({},t);r.init(this,n)})}})(jQuery),function(e){function n(t,n){var r=e(t);r.bind("load.imageready",function(){n.apply(t,arguments),r.unbind("load.imageready")})}var t={};e.event.special.imageready={setup:function(e,n,r){t=e||t},add:function(r){var i=e(this),s;this.nodeType===1&&this.tagName.toLowerCase()==="img"&&this.src!==""&&(t.forceLoad?(s=i.attr("src"),i.attr("src",""),n(this,r.handler),i.attr("src",s)):this.complete||this.readyState===4?r.handler.apply(this,arguments):n(this,r.handler))},teardown:function(t){e(this).unbind(".imageready")}}}(jQuery);;
(function($) {
  Drupal.behaviors.field_orbit = {
    attach: function(context) {

      for (i in Drupal.settings.field_orbit) {
        var settings = Drupal.settings.field_orbit[i] || {};
        var slideshow = $('div.' + i);

        if (!slideshow.hasClass('field-orbit-processed')) {
          slideshow.addClass('field-orbit-processed');
          slideshow.orbit(settings);
        }
      }
    }
  }
})(jQuery);
;
(function ($) {

Drupal.googleanalytics = {};

$(document).ready(function() {

  // Attach mousedown, keyup, touchstart events to document only and catch
  // clicks on all elements.
  $(document.body).bind("mousedown keyup touchstart", function(event) {

    // Catch the closest surrounding link of a clicked element.
    $(event.target).closest("a,area").each(function() {

      // Is the clicked URL internal?
      if (Drupal.googleanalytics.isInternal(this.href)) {
        // Skip 'click' tracking, if custom tracking events are bound.
        if ($(this).is('.colorbox') && (Drupal.settings.googleanalytics.trackColorbox)) {
          // Do nothing here. The custom event will handle all tracking.
          //console.info("Click on .colorbox item has been detected.");
        }
        // Is download tracking activated and the file extension configured for download tracking?
        else if (Drupal.settings.googleanalytics.trackDownload && Drupal.googleanalytics.isDownload(this.href)) {
          // Download link clicked.
          ga("send", {
            "hitType": "event",
            "eventCategory": "Downloads",
            "eventAction": Drupal.googleanalytics.getDownloadExtension(this.href).toUpperCase(),
            "eventLabel": Drupal.googleanalytics.getPageUrl(this.href),
            "transport": "beacon"
          });
        }
        else if (Drupal.googleanalytics.isInternalSpecial(this.href)) {
          // Keep the internal URL for Google Analytics website overlay intact.
          ga("send", {
            "hitType": "pageview",
            "page": Drupal.googleanalytics.getPageUrl(this.href),
            "transport": "beacon"
          });
        }
      }
      else {
        if (Drupal.settings.googleanalytics.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
          // Mailto link clicked.
          ga("send", {
            "hitType": "event",
            "eventCategory": "Mails",
            "eventAction": "Click",
            "eventLabel": this.href.substring(7),
            "transport": "beacon"
          });
        }
        else if (Drupal.settings.googleanalytics.trackOutbound && this.href.match(/^\w+:\/\//i)) {
          if (Drupal.settings.googleanalytics.trackDomainMode !== 2 || (Drupal.settings.googleanalytics.trackDomainMode === 2 && !Drupal.googleanalytics.isCrossDomain(this.hostname, Drupal.settings.googleanalytics.trackCrossDomains))) {
            // External link clicked / No top-level cross domain clicked.
            ga("send", {
              "hitType": "event",
              "eventCategory": "Outbound links",
              "eventAction": "Click",
              "eventLabel": this.href,
              "transport": "beacon"
            });
          }
        }
      }
    });
  });

  // Track hash changes as unique pageviews, if this option has been enabled.
  if (Drupal.settings.googleanalytics.trackUrlFragments) {
    window.onhashchange = function() {
      ga("send", {
        "hitType": "pageview",
        "page": location.pathname + location.search + location.hash
      });
    };
  }

  // Colorbox: This event triggers when the transition has completed and the
  // newly loaded content has been revealed.
  if (Drupal.settings.googleanalytics.trackColorbox) {
    $(document).bind("cbox_complete", function () {
      var href = $.colorbox.element().attr("href");
      if (href) {
        ga("send", {
          "hitType": "pageview",
          "page": Drupal.googleanalytics.getPageUrl(href)
        });
      }
    });
  }

});

/**
 * Check whether the hostname is part of the cross domains or not.
 *
 * @param string hostname
 *   The hostname of the clicked URL.
 * @param array crossDomains
 *   All cross domain hostnames as JS array.
 *
 * @return boolean
 */
Drupal.googleanalytics.isCrossDomain = function (hostname, crossDomains) {
  /**
   * jQuery < 1.6.3 bug: $.inArray crushes IE6 and Chrome if second argument is
   * `null` or `undefined`, http://bugs.jquery.com/ticket/10076,
   * https://github.com/jquery/jquery/commit/a839af034db2bd934e4d4fa6758a3fed8de74174
   *
   * @todo: Remove/Refactor in D8
   */
  if (!crossDomains) {
    return false;
  }
  else {
    return $.inArray(hostname, crossDomains) > -1 ? true : false;
  }
};

/**
 * Check whether this is a download URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isDownload = function (url) {
  var isDownload = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  return isDownload.test(url);
};

/**
 * Check whether this is an absolute internal URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternal = function (url) {
  var isInternal = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return isInternal.test(url);
};

/**
 * Check whether this is a special URL or not.
 *
 * URL types:
 *  - gotwo.module /go/* links.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternalSpecial = function (url) {
  var isInternalSpecial = new RegExp("(\/go\/.*)$", "i");
  return isInternalSpecial.test(url);
};

/**
 * Extract the relative internal URL from an absolute internal URL.
 *
 * Examples:
 * - http://mydomain.com/node/1 -> /node/1
 * - http://example.com/foo/bar -> http://example.com/foo/bar
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   Internal website URL
 */
Drupal.googleanalytics.getPageUrl = function (url) {
  var extractInternalUrl = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return url.replace(extractInternalUrl, '');
};

/**
 * Extract the download file extension from the URL.
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   The file extension of the passed url. e.g. "zip", "txt"
 */
Drupal.googleanalytics.getDownloadExtension = function (url) {
  var extractDownloadextension = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  var extension = extractDownloadextension.exec(url);
  return (extension === null) ? '' : extension[1];
};

})(jQuery);
;

/*
     FILE ARCHIVED ON 19:04:38 Oct 14, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:28:42 Oct 05, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.251
  PetaboxLoader3.datanode: 58.177 (5)
  RedisCDXSource: 25.153
  load_resource: 384.903
  captures_list: 90.545
  esindex: 0.019
  CDXLines.iter: 18.037 (3)
  exclusion.robots: 0.271
  LoadShardBlock: 42.882 (3)
  PetaboxLoader3.resolve: 217.338 (2)
*/
