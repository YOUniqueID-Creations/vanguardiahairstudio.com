/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-inlinesvg-svg-svgclippaths-touch-shiv-mq-cssclasses-teststyles-prefixes-ie8compat-load
 */
;window.Modernizr=function(a,b,c){function y(a){j.cssText=a}function z(a,b){return y(m.join(a+";")+(b||""))}function A(a,b){return typeof a===b}function B(a,b){return!!~(""+a).indexOf(b)}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:A(f,"function")?f.bind(d||b):f}return!1}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={svg:"http://www.w3.org/2000/svg"},o={},p={},q={},r=[],s=r.slice,t,u=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},v=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return u("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},w={}.hasOwnProperty,x;!A(w,"undefined")&&!A(w.call,"undefined")?x=function(a,b){return w.call(a,b)}:x=function(a,b){return b in a&&A(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=s.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(s.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(s.call(arguments)))};return e}),o.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:u(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},o.svg=function(){return!!b.createElementNS&&!!b.createElementNS(n.svg,"svg").createSVGRect},o.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==n.svg},o.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(l.call(b.createElementNS(n.svg,"clipPath")))};for(var D in o)x(o,D)&&(t=D.toLowerCase(),e[t]=o[D](),r.push((e[t]?"":"no-")+t));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)x(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},y(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e.mq=v,e.testStyles=u,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+r.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("ie8compat",function(){return!window.addEventListener&&document.documentMode&&document.documentMode===7});
;
/*
 * jQuery Foundation Tooltips 2.0.1
 * http://foundation.zurb.com
 * Copyright 2012, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
/*jslint unparam: true, browser: true, indent: 2 */
(function(e,t,n){"use strict";var r={bodyHeight:0,selector:".has-tip",tooltipClass:".tooltip",tipTemplate:function(e,t){return'<span data-selector="'+e+'" class="'+r.tooltipClass.substring(1)+'">'+t+'<span class="nub"></span></span>'}},i={init:function(t){return r=e.extend(r,t),r.selector=r.targetClass?r.targetClass:r.selector,this.each(function(){var t=e("body");Modernizr.touch?(t.on("click.tooltip touchstart.tooltip touchend.tooltip",r.selector,function(t){t.preventDefault(),e(r.tooltipClass).hide(),i.showOrCreateTip(e(this))}),t.on("click.tooltip touchstart.tooltip touchend.tooltip",r.tooltipClass,function(t){t.preventDefault(),e(this).fadeOut(150)})):t.on("mouseenter.tooltip mouseleave.tooltip",r.selector,function(t){var n=e(this);t.type==="mouseenter"?i.showOrCreateTip(n):t.type==="mouseleave"&&i.hide(n)}),e(this).data("tooltips",!0)})},showOrCreateTip:function(e){var t=i.getTip(e);t&&t.length>0?i.show(e):i.create(e)},getTip:function(t){var n=i.selector(t),s=null;return n&&(s=e("span[data-selector="+n+"]"+r.tooltipClass)),s.length>0?s:!1},selector:function(e){var t=e.attr("id"),r=e.data("selector");return t===n&&r===n&&(r="tooltip"+Math.random().toString(36).substring(7),e.attr("data-selector",r)),t?t:r},create:function(t){var n=e(r.tipTemplate(i.selector(t),e("<div>").html(t.attr("title")).html())),s=i.inheritable_classes(t);n.addClass(s).appendTo("body"),Modernizr.touch&&n.append('<span class="tap-to-close">tap to close </span>'),t.removeAttr("title"),i.show(t)},reposition:function(n,r,i){var s,o,u,a,f,l;r.css("visibility","hidden").show(),s=n.data("width"),o=r.children(".nub"),u=o.outerHeight(),a=o.outerWidth(),l=function(e,t,n,r,i,s){return e.css({top:t,bottom:r,left:i,right:n,width:s?s:"auto"}).end()},l(r,n.offset().top+n.outerHeight()+10,"auto","auto",n.offset().left,s),l(o,-u,"auto","auto",10),e(t).width()<767?(f=n.closest(".columns"),f.length<0&&(f=e("body")),r.width(f.outerWidth()-25).css("left",15).addClass("tip-override"),l(o,-u,"auto","auto",n.offset().left)):i&&i.indexOf("tip-top")>-1?(l(r,n.offset().top-r.outerHeight()-u,"auto","auto",n.offset().left,s).removeClass("tip-override"),l(o,"auto","auto",-u,"auto")):i&&i.indexOf("tip-left")>-1?(l(r,n.offset().top+n.outerHeight()/2-u,"auto","auto",n.offset().left-r.outerWidth()-10,s).removeClass("tip-override"),l(o,r.outerHeight()/2-u/2,-u,"auto","auto")):i&&i.indexOf("tip-right")>-1&&(l(r,n.offset().top+n.outerHeight()/2-u,"auto","auto",n.offset().left+n.outerWidth()+10,s).removeClass("tip-override"),l(o,r.outerHeight()/2-u/2,"auto","auto",-u)),r.css("visibility","visible").hide()},inheritable_classes:function(t){var n=["tip-top","tip-left","tip-bottom","tip-right","noradius"],r=t.attr("class"),i=r?e.map(r.split(" "),function(t,r){if(e.inArray(t,n)!==-1)return t}).join(" "):"";return e.trim(i)},show:function(e){var t=i.getTip(e);i.reposition(e,t,e.attr("class")),t.fadeIn(150)},hide:function(e){var t=i.getTip(e);t.fadeOut(150)},reload:function(){var t=e(this);return t.data("tooltips")?t.foundationTooltips("destroy").foundationTooltips("init"):t.foundationTooltips("init")},destroy:function(){return this.each(function(){e(t).off(".tooltip"),e(r.selector).off(".tooltip"),e(r.tooltipClass).each(function(t){e(e(r.selector).get(t)).attr("title",e(this).text())}).remove()})}};e.fn.foundationTooltips=function(t){if(i[t])return i[t].apply(this,Array.prototype.slice.call(arguments,1));if(typeof t=="object"||!t)return i.init.apply(this,arguments);e.error("Method "+t+" does not exist on jQuery.foundationTooltips")}})(jQuery,this);
(function(e,t,n){"use strict";e.fn.foundationAccordion=function(t){var n=e(".accordion");n.hasClass("hover")&&!Modernizr.touch?e(".accordion li",this).on({mouseenter:function(){console.log("due");var t=e(this).parent(),n=e(this).children(".content").first();e(".content",t).not(n).hide().parent("li").removeClass("active"),n.show(0,function(){n.parent("li").addClass("active")})}}):e(".accordion li",this).on("click.fndtn",function(){var t=e(this),n=e(this).parent(),r=e(this).children(".content").first();t.hasClass("active")?n.find("li").removeClass("active").end().find(".content").hide():(e(".content",n).not(r).hide().parent("li").removeClass("active"),r.show(0,function(){r.parent("li").addClass("active")}))})}})(jQuery,this);
/*! http://mths.be/placeholder v2.0.7 by @mathias */
(function(e,t,n){function f(e){var t={},r=/^jQuery\d+$/;return n.each(e.attributes,function(e,n){n.specified&&!r.test(n.name)&&(t[n.name]=n.value)}),t}function l(e,r){var i=this,s=n(i);if(i.value==s.attr("placeholder")&&s.hasClass("placeholder"))if(s.data("placeholder-password")){s=s.hide().next().show().attr("id",s.removeAttr("id").data("placeholder-id"));if(e===!0)return s[0].value=r;s.focus()}else i.value="",s.removeClass("placeholder"),i==t.activeElement&&i.select()}function c(){var e,t=this,r=n(t),i=r,s=this.id;if(t.value==""){if(t.type=="password"){if(!r.data("placeholder-textinput")){try{e=r.clone().attr({type:"text"})}catch(o){e=n("<input>").attr(n.extend(f(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-password":!0,"placeholder-id":s}).bind("focus.placeholder",l),r.data({"placeholder-textinput":e,"placeholder-id":s}).before(e)}r=r.removeAttr("id").hide().prev().attr("id",s).show()}r.addClass("placeholder"),r[0].value=r.attr("placeholder")}else r.removeClass("placeholder")}var r="placeholder"in t.createElement("input"),i="placeholder"in t.createElement("textarea"),s=n.fn,o=n.valHooks,u,a;r&&i?(a=s.placeholder=function(){return this},a.input=a.textarea=!0):(a=s.placeholder=function(){var e=this;return e.filter((r?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":l,"blur.placeholder":c}).data("placeholder-enabled",!0).trigger("blur.placeholder"),e},a.input=r,a.textarea=i,u={get:function(e){var t=n(e);return t.data("placeholder-enabled")&&t.hasClass("placeholder")?"":e.value},set:function(e,r){var i=n(e);return i.data("placeholder-enabled")?(r==""?(e.value=r,e!=t.activeElement&&c.call(e)):i.hasClass("placeholder")?l.call(e,!0,r)||(e.value=r):e.value=r,i):e.value=r}},r||(o.input=u),i||(o.textarea=u),n(function(){n(t).delegate("form","submit.placeholder",function(){var e=n(".placeholder",this).each(l);setTimeout(function(){e.each(c)},10)})}),n(e).bind("beforeunload.placeholder",function(){n(".placeholder").each(function(){this.value=""})}))})(this,document,jQuery);
(function(e,t,n){"use strict";e.fn.foundationAlerts=function(t){var n=e.extend({callback:e.noop},t);e(document).on("click",".alert-box a.close",function(t){t.preventDefault(),e(this).closest(".alert-box").fadeOut(function(){e(this).remove(),n.callback()})})}})(jQuery,this);
/*
 * jQuery Foundation Clearing 1.0
 * http://foundation.zurb.com
 * Copyright 2012, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
/*jslint unparam: true, browser: true, indent: 2 */
(function(e,t,n){"use strict";var r={templates:{viewing:'<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><img src="#"><p class="clearing-caption"></p><a href="#" class="clearing-main-left"></a><a href="#" class="clearing-main-right"></a></div>'},initialized:!1,locked:!1},i={},s={init:function(t,n){return this.find("ul[data-clearing]").each(function(){var t=e(document),n=e(this),i=i||{},o=o||{},u=n.data("fndtn.clearing.settings");u||(i.$parent=n.parent(),n.data("fndtn.clearing.settings",e.extend({},r,i)),s.extend(s,o),s.assemble(n.find("li")),r.initialized||s.events())})},events:function(){var n=e(document);n.on("click.fndtn.clearing","ul[data-clearing] li",function(t,n,r){var n=n||e(this),r=r||n,i=n.parent().data("fndtn.clearing.settings");t.preventDefault(),i||n.parent().foundationClearing(),s.open(e(t.target),n,r),s.update_paddles(r)}),e(t).on("resize.fndtn.clearing",function(){var t=e(".clearing-blackout .visible-img").find("img");t.length>0&&s.center(t)}),n.on("click.fndtn.clearing",".clearing-main-right",function(t){var n=e(".clearing-blackout").find("ul[data-clearing]");t.preventDefault(),s.go(n,"next")}),n.on("click.fndtn.clearing",".clearing-main-left",function(t){var n=e(".clearing-blackout").find("ul[data-clearing]");t.preventDefault(),s.go(n,"prev")}),n.on("click.fndtn.clearing","a.clearing-close, div.clearing-blackout, div.visible-img",function(t){var n=function(e){return/blackout/.test(e.selector)?e:e.closest(".clearing-blackout")}(e(this)),i,s;return this===t.target&&n&&(i=n.find("div:first"),s=i.find(".visible-img"),r.prev_index=0,n.find("ul[data-clearing]").attr("style",""),n.removeClass("clearing-blackout"),i.removeClass("clearing-container"),s.hide()),!1}),n.on("keydown.fndtn.clearing",function(t){var n=e(".clearing-blackout").find("ul[data-clearing]");t.which===39&&s.go(n,"next"),t.which===37&&s.go(n,"prev"),t.which===27&&e("a.clearing-close").trigger("click")}),n.on("movestart",function(e){(e.distX>e.distY&&e.distX<-e.distY||e.distX<e.distY&&e.distX>-e.distY)&&e.preventDefault()}),n.bind("swipeleft","ul[data-clearing] li",function(){var t=e(".clearing-blackout").find("ul[data-clearing]");s.go(t,"next")}),n.bind("swiperight","ul[data-clearing] li",function(){var t=e(".clearing-blackout").find("ul[data-clearing]");s.go(t,"prev")}),r.initialized=!0},assemble:function(e){var t=e.parent(),n=t.data("fndtn.clearing.settings"),r=t.detach(),i={grid:'<div class="carousel">'+this.outerHTML(r[0])+"</div>",viewing:n.templates.viewing},s='<div class="clearing-assembled"><div>'+i.viewing+i.grid+"</div></div>";return n.$parent.append(s)},open:function(e,t,n){var r=n.closest(".clearing-assembled"),i=r.find("div:first"),o=i.find(".visible-img"),u=o.find("img").not(e);s.locked()||(u.attr("src",this.load(e)),u.is_good(function(){r.addClass("clearing-blackout"),i.addClass("clearing-container"),s.caption(o.find(".clearing-caption"),e),o.show(),s.fix_height(n),s.center(u),s.shift(t,n,function(){n.siblings().removeClass("visible"),n.addClass("visible")})}))},fix_height:function(t){var n=t.siblings();n.each(function(){var t=e(this),n=t.find("img");t.height()>n.outerHeight()&&t.addClass("fix-height")}),n.closest("ul").width(n.length*100+"%")},update_paddles:function(e){var t=e.closest(".carousel").siblings(".visible-img");e.next().length>0?t.find(".clearing-main-right").removeClass("disabled"):t.find(".clearing-main-right").addClass("disabled"),e.prev().length>0?t.find(".clearing-main-left").removeClass("disabled"):t.find(".clearing-main-left").addClass("disabled")},load:function(e){var t=e.parent().attr("href");return this.preload(e),t?t:e.attr("src")},preload:function(e){var t=e.closest("li").next(),n=e.closest("li").prev(),r,i,s,o;t.length>0&&(s=new Image,r=t.find("a"),r.length>0?s.src=r.attr("href"):s.src=t.find("img").attr("src")),n.length>0&&(o=new Image,i=n.find("a"),i.length>0?o.src=i.attr("href"):o.src=n.find("img").attr("src"))},caption:function(e,t){var n=t.data("caption");n?e.text(n).show():e.text("").hide()},go:function(e,t){var n=e.find(".visible"),r=n[t]();r.length>0&&r.find("img").trigger("click",[n,r])},shift:function(e,t,n){var i=t.parent(),o=i.closest(".clearing-container"),u=t.position().left,a=i.position().left,f=r.prev_index,l=this.direction(i,e,t),c=parseInt(i.css("left"),10),h=t.outerWidth(),p;t.index()!==f&&!/skip/.test(l)?/left/.test(l)?(s.lock(),i.animate({left:c+h},300,s.unlock)):/right/.test(l)&&(s.lock(),i.animate({left:c-h},300,s.unlock)):/skip/.test(l)&&(p=t.index()-r.up_count,s.lock(),p>0?i.animate({left:-(p*h)},300,s.unlock):i.animate({left:0},300,s.unlock)),n()},lock:function(){r.locked=!0},unlock:function(){r.locked=!1},locked:function(){return r.locked},direction:function(t,n,i){var s=t.find("li"),o=s.outerWidth()+s.outerWidth()/4,u=e(".clearing-container"),a=Math.floor(u.outerWidth()/o)-1,f=s.length-a,l=s.index(i),c=s.index(n),h;return r.up_count=a,this.adjacent(r.prev_index,l)?l>a&&l>r.prev_index?h="right":l>a-1&&l<=r.prev_index?h="left":h=!1:h="skip",r.prev_index=l,h},adjacent:function(e,t){return t-1===e?!0:t+1===e?!0:t===e?!0:!1},center:function(e){e.css({marginLeft:-(e.outerWidth()/2),marginTop:-(e.outerHeight()/2)})},outerHTML:function(e){return e.outerHTML||(new XMLSerializer).serializeToString(e)},extend:function(t,n){e.each(t,function(e,t){n.hasOwnProperty(e)&&(i[e]=t)}),e.extend(s,n)},_super:function(e,t){return i[e].apply(this,t)}};e.fn.foundationClearing=function(t){if(s[t])return s[t].apply(this,Array.prototype.slice.call(arguments,1));if(typeof t=="object"||!t)return s.init.apply(this,arguments);e.error("Method "+t+" does not exist on jQuery.foundationClearing")},function(e){e.fn.is_good=function(t,n){function o(){s-=1,!s&&t()}function u(){this.one("load",o);if(e.browser.msie){var t=this.attr("src"),n=t.match(/\?/)?"&":"?";n+=r.cachePrefix+"="+(new Date).getTime(),this.attr("src",t+n)}}var r=e.extend({},e.fn.is_good.defaults,n),i=this.find("img").add(this.filter("img")),s=i.length;return i.each(function(){var t=e(this);if(!t.attr("src")){o();return}this.complete||this.readyState===4?o():u.call(t)})},e.fn.is_good.defaults={cachePrefix:"random"}}(jQuery)})(jQuery,this);
;(function ($, window, undefined) {
  'use strict';

  var settings = {
      index : 0,
      initialized : false
    },
    methods = {
      init : function (options) {
        return this.each(function () {
          settings = $.extend(settings, options);
          settings.$w = $(window),
          settings.$topbar = $('nav.top-bar'),
          settings.$section = settings.$topbar.find('section'),
          settings.$titlebar = settings.$topbar.children('ul:first');
          var breakpoint = $("<div class='top-bar-js-breakpoint'/>").appendTo("body");
          settings.breakPoint = breakpoint.width();
          breakpoint.remove();

          if (!settings.initialized) {
            methods.assemble();
            settings.initialized = true;
          }

          if (!settings.height) {
            methods.largestUL();
          }

          if (settings.$topbar.parent().hasClass('fixed')) {
            $('body').css('padding-top',settings.$topbar.outerHeight())
          }

          $('.top-bar .toggle-topbar').die('click.fndtn').live('click.fndtn', function (e) {
            e.preventDefault();

            if (methods.breakpoint()) {
              settings.$topbar.toggleClass('expanded');
              settings.$topbar.css('min-height', '');
            }

            if (!settings.$topbar.hasClass('expanded')) {
              settings.$section.css({left: '0%'});
              settings.$section.find('>.name').css({left: '100%'});
              settings.$section.find('li.moved').removeClass('moved');
              settings.index = 0;
            }
          });

          // Show the Dropdown Levels on Click
          $('.top-bar .has-dropdown>a').die('click.fndtn').live('click.fndtn', function (e) {
            if (Modernizr.touch || methods.breakpoint())
              e.preventDefault();

            if (methods.breakpoint()) {
              var $this = $(this),
                  $selectedLi = $this.closest('li'),
                  $nextLevelUl = $selectedLi.children('ul'),
                  $nextLevelUlHeight = 0,
                  $largestUl;

              settings.index += 1;
              $selectedLi.addClass('moved');
              settings.$section.css({left: -(100 * settings.index) + '%'});
              settings.$section.find('>.name').css({left: 100 * settings.index + '%'});

              $this.siblings('ul').height(settings.height + settings.$titlebar.outerHeight(true));
              settings.$topbar.css('min-height', settings.height + settings.$titlebar.outerHeight(true) * 2)
            }
          });

          $(window).on('resize.fndtn.topbar',function() {
            if (!methods.breakpoint()) {
              settings.$topbar.css('min-height', '');
            }
          });

          // Go up a level on Click
          $('.top-bar .has-dropdown .back').die('click.fndtn').live('click.fndtn', function (e) {
            e.preventDefault();

            var $this = $(this),
              $movedLi = $this.closest('li.moved'),
              $previousLevelUl = $movedLi.parent();

            settings.index -= 1;
            settings.$section.css({left: -(100 * settings.index) + '%'});
            settings.$section.find('>.name').css({'left': 100 * settings.index + '%'});

            if (settings.index === 0) {
              settings.$topbar.css('min-height', 0);
            }

            setTimeout(function () {
              $movedLi.removeClass('moved');
            }, 300);
          });
        });
      },
      breakpoint : function () {
        return settings.$w.width() < settings.breakPoint;
      },
      assemble : function () {
        // Pull element out of the DOM for manipulation
        settings.$section.detach();

        settings.$section.find('.has-dropdown>a').each(function () {
          var $link = $(this),
              $dropdown = $link.siblings('.dropdown'),
              $titleLi = $('<li class="title back js-generated"><h5><a href="#"></a></h5></li>');

          // Copy link to subnav
          $titleLi.find('h5>a').html($link.html());
          $dropdown.prepend($titleLi);
        });

        // Put element back in the DOM
        settings.$section.appendTo(settings.$topbar);
      },
      largestUL : function () {
        var uls = settings.$topbar.find('section ul ul'),
            largest = uls.first(),
            total = 0;

        uls.each(function () {
          if ($(this).children('li').length > largest.children('li').length) {
            largest = $(this);
          }
        });

        largest.children('li').each(function () { total += $(this).outerHeight(true); });

        settings.height = total;
      }
    };

  $.fn.foundationTopBar = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' +  method + ' does not exist on jQuery.foundationTopBar');
    }
  };

}(jQuery, this));
;
;(function (window, document, $) {
  // Set the negative margin on the top menu for slide-menu pages
  var $selector1 = $('#topMenu'),
    events = 'click.fndtn';
  if ($selector1.length > 0) $selector1.css("margin-top", $selector1.height() * -1);

  // Watch for clicks to show the sidebar
  var $selector2 = $('#sidebarButton');
  if ($selector2.length > 0) {
    $('#sidebarButton').on(events, function (e) {
      e.preventDefault();
      $('body').toggleClass('active');
    });
  }

  // Watch for clicks to show the menu for slide-menu pages
  var $selector3 = $('#menuButton');
  if ($selector3.length > 0)  {
    $('#menuButton').on(events, function (e) {
      e.preventDefault();
      $('body').toggleClass('active-menu');
    });
  }

  // // Adjust sidebars and sizes when resized
  // $(window).resize(function() {
  //   // if (!navigator.userAgent.match(/Android/i)) $('body').removeClass('active');
  //   var $selector4 = $('#topMenu');
  //   if ($selector4.length > 0) $selector4.css("margin-top", $selector4.height() * -1);
  // });

  // Switch panels for the paneled nav on mobile
  var $selector5 = $('#switchPanels');
  if ($selector5.length > 0)  {
    $('#switchPanels dd').on(events, function (e) {
      e.preventDefault();
      var switchToPanel = $(this).children('a').attr('href'),
          switchToIndex = $(switchToPanel).index();
      $(this).toggleClass('active').siblings().removeClass('active');
      $(switchToPanel).parent().css("left", (switchToIndex * (-100) + '%'));
    });
  }

  $('#nav li a').on(events, function (e) {
    e.preventDefault();
    var href = $(this).attr('href'),
      $target = $(href);
    $('html, body').animate({scrollTop : $target.offset().top}, 300);
  });
}(this, document, jQuery));
;
