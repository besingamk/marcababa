window["WIDGETKIT_URL"]="/projects/showroom/media/widgetkit";
function wk_ajax_render_url(widgetid){return"/projects/showroom/index.php/component/widgetkit/?format=raw&amp;id="+widgetid}
(function(g,f){var a={};f.$widgetkit={lazyloaders:{},load:function(b){a[b]||(a[b]=g.getScript(b));return a[b]},lazyload:function(a){a=a||document;g("[data-widgetkit]",a).each(function(){var a=g(this),b=a.data("widgetkit"),c=a.data("options")||{};!a.data("wk-loaded")&&$widgetkit.lazyloaders[b]&&($widgetkit.lazyloaders[b](a,c),a.data("wk-loaded",!0))})}};g(function(){$widgetkit.lazyload()});for(var b=document.createElement("div"),c=b.style,b=!1,d=["-webkit-","-moz-","-o-","-ms-","-khtml-"],e=["Webkit","Moz","O","ms","Khtml"],h="",i=0;i<e.length;i++)if(""===c[e[i]+"Transition"]){b=e[i]+"Transition";h=d[i];break}$widgetkit.prefix=h;c=$widgetkit;b=(d=b)&&"WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix&&!navigator.userAgent.match(/Chrome/i);e=document.createElement("canvas");e=!(!e.getContext||!e.getContext("2d"));c.support={transition:d,css3d:b,canvas:e};$widgetkit.css3=function(a){a=a||{};a.transition&&(a[h+"transition"]=a.transition);a.transform&&(a[h+"transform"]=a.transform);a["transform-origin"]&&(a[h+"transform-origin"]=a["transform-origin"]);return a};if(!(b=g.browser))c=navigator.userAgent,c=c.toLowerCase(),b={},c=/(chrome)[ \/]([\w.]+)/.exec(c)||/(webkit)[ \/]([\w.]+)/.exec(c)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(c)||/(msie) ([\w.]+)/.exec(c)||0>c.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(c)||[],b[c[1]]=!0,b.version=c[2]||"0";g.browser=b;b=null})(jQuery,window);(function(g){var f;a:{try{f=parseInt(navigator.appVersion.match(/MSIE (\d\.\d)/)[1],10);break a}catch(a){}f=!1}f&&9>f&&(g(document).ready(function(){g("body").addClass("wk-ie wk-ie"+f)}),g.each("abbr article aside audio canvas details figcaption figure footer header hgroup mark meter nav output progress section summary time video".split(" "),function(){document.createElement(this)}))})(jQuery);(function(g,f){f.$widgetkit.trans={__data:{},addDic:function(a){g.extend(this.__data,a)},add:function(a,b){this.__data[a]=b},get:function(a){if(!this.__data[a])return a;var b=1==arguments.length?[]:Array.prototype.slice.call(arguments,1);return this.printf(String(this.__data[a]),b)},printf:function(a,b){if(!b)return a;var c="",d=a.split("%s");if(1==d.length)return a;for(var e=0;e<b.length;e++)d[e].lastIndexOf("%")==d[e].length-1&&e!=b.length-1&&(d[e]+="s"+d.splice(e+1,1)[0]),c+=d[e]+b[e];return c+
d[d.length-1]}}})(jQuery,window);(function(g){g.easing.jswing=g.easing.swing;g.extend(g.easing,{def:"easeOutQuad",swing:function(f,a,b,c,d){return g.easing[g.easing.def](f,a,b,c,d)},easeInQuad:function(f,a,b,c,d){return c*(a/=d)*a+b},easeOutQuad:function(f,a,b,c,d){return-c*(a/=d)*(a-2)+b},easeInOutQuad:function(f,a,b,c,d){return 1>(a/=d/2)?c/2*a*a+b:-c/2*(--a*(a-2)-1)+b},easeInCubic:function(f,a,b,c,d){return c*(a/=d)*a*a+b},easeOutCubic:function(f,a,b,c,d){return c*((a=a/d-1)*a*a+1)+b},easeInOutCubic:function(f,a,b,c,d){return 1>(a/=d/2)?c/2*a*a*a+b:c/2*((a-=2)*a*a+2)+b},easeInQuart:function(f,a,b,c,d){return c*(a/=d)*a*a*a+b},easeOutQuart:function(f,a,b,c,d){return-c*((a=a/d-1)*a*a*a-1)+b},easeInOutQuart:function(f,a,b,c,d){return 1>(a/=d/2)?c/2*a*a*a*a+b:-c/2*((a-=2)*a*a*a-2)+b},easeInQuint:function(f,a,b,c,d){return c*(a/=d)*a*a*a*a+b},easeOutQuint:function(f,a,b,c,d){return c*((a=a/d-1)*a*a*a*a+1)+b},easeInOutQuint:function(f,a,b,c,d){return 1>(a/=d/2)?c/2*a*a*a*a*a+b:c/2*((a-=2)*a*a*a*a+2)+b},easeInSine:function(f,a,b,c,d){return-c*Math.cos(a/d*(Math.PI/2))+c+b},easeOutSine:function(f,a,b,c,d){return c*Math.sin(a/d*(Math.PI/2))+b},easeInOutSine:function(f,a,b,c,d){return-c/2*(Math.cos(Math.PI*a/d)-1)+b},easeInExpo:function(f,a,b,c,d){return 0==a?b:c*Math.pow(2,10*(a/d-1))+b},easeOutExpo:function(f,a,b,c,d){return a==d?b+c:c*(-Math.pow(2,-10*a/d)+1)+b},easeInOutExpo:function(f,a,b,c,d){return 0==a?b:a==d?b+c:1>(a/=d/2)?c/2*Math.pow(2,10*(a-1))+b:c/2*(-Math.pow(2,-10*--a)+2)+b},easeInCirc:function(f,a,b,c,d){return-c*(Math.sqrt(1-(a/=d)*a)-1)+b},easeOutCirc:function(f,a,b,c,d){return c*Math.sqrt(1-(a=a/d-1)*a)+b},easeInOutCirc:function(f,a,b,c,d){return 1>(a/=d/2)?-c/2*(Math.sqrt(1-a*a)-1)+b:c/2*(Math.sqrt(1-(a-=2)*a)+1)+b},easeInElastic:function(f,a,b,c,d){var f=1.70158,e=0,h=c;if(0==a)return b;if(1==(a/=d))return b+c;e||(e=0.3*d);h<Math.abs(c)?(h=c,f=e/4):f=e/(2*Math.PI)*Math.asin(c/h);return-(h*Math.pow(2,10*(a-=1))*Math.sin((a*d-f)*2*Math.PI/e))+b},easeOutElastic:function(f,a,b,c,d){var f=1.70158,e=0,h=c;if(0==a)return b;if(1==(a/=d))return b+c;e||(e=0.3*d);h<Math.abs(c)?(h=c,f=e/4):f=e/(2*Math.PI)*Math.asin(c/h);return h*Math.pow(2,-10*a)*Math.sin((a*d-f)*2*Math.PI/e)+c+b},easeInOutElastic:function(f,a,b,c,d){var f=1.70158,e=0,h=c;if(0==a)return b;if(2==(a/=d/2))return b+c;e||(e=d*0.3*1.5);h<Math.abs(c)?(h=c,f=e/4):f=e/(2*Math.PI)*Math.asin(c/h);return 1>a?-0.5*h*Math.pow(2,10*(a-=1))*Math.sin((a*d-f)*2*Math.PI/e)+b:0.5*h*Math.pow(2,-10*(a-=1))*Math.sin((a*d-f)*2*Math.PI/e)+c+b},easeInBack:function(f,a,b,c,d,e){void 0==e&&(e=1.70158);return c*(a/=d)*a*((e+1)*a-e)+b},easeOutBack:function(f,a,b,c,d,e){void 0==e&&(e=1.70158);return c*((a=a/d-1)*a*((e+1)*a+e)+1)+b},easeInOutBack:function(f,a,b,c,d,e){void 0==e&&(e=1.70158);return 1>(a/=d/2)?c/2*a*a*(((e*=1.525)+1)*a-e)+b:c/2*((a-=2)*a*(((e*=1.525)+1)*a+e)+2)+b},easeInBounce:function(f,a,b,c,d){return c-g.easing.easeOutBounce(f,d-a,0,c,d)+b},easeOutBounce:function(f,a,b,c,d){return(a/=d)<1/2.75?c*7.5625*a*a+b:a<2/2.75?c*(7.5625*(a-=1.5/2.75)*a+0.75)+
b:a<2.5/2.75?c*(7.5625*(a-=2.25/2.75)*a+0.9375)+b:c*(7.5625*(a-=2.625/2.75)*a+0.984375)+b},easeInOutBounce:function(f,a,b,c,d){return a<d/2?0.5*g.easing.easeInBounce(f,2*a,0,c,d)+b:0.5*g.easing.easeOutBounce(f,2*a-d,0,c,d)+0.5*c+b}})})(jQuery);(function(g){function f(a){var c=a||window.event,d=[].slice.call(arguments,1),e=0,f=0,i=0,a=g.event.fix(c);a.type="mousewheel";a.wheelDelta&&(e=a.wheelDelta/120);a.detail&&(e=-a.detail/3);i=e;void 0!==c.axis&&c.axis===c.HORIZONTAL_AXIS&&(i=0,f=-1*e);void 0!==c.wheelDeltaY&&(i=c.wheelDeltaY/120);void 0!==c.wheelDeltaX&&(f=-1*c.wheelDeltaX/120);d.unshift(a,e,f,i);return g.event.handle.apply(this,d)}var a=["DOMMouseScroll","mousewheel"];g.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var b=a.length;b;)this.addEventListener(a[--b],f,!1);else this.onmousewheel=f},teardown:function(){if(this.removeEventListener)for(var b=a.length;b;)this.removeEventListener(a[--b],f,!1);else this.onmousewheel=null}};g.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);(function(g){var f=g.support;var a=document.createElement("INPUT");a.type="file";if(a="files"in a)a=new XMLHttpRequest,a=!(!a||!("upload"in a&&"onprogress"in a.upload))&&!!window.FormData;f.ajaxupload=a;g.support.ajaxupload&&g.event.props.push("dataTransfer");g.fn.uploadOnDrag=function(a){return!g.support.ajaxupload?this:this.each(function(){var c=g(this),d=g.extend({action:"",single:!1,method:"POST",params:{},loadstart:function(){},load:function(){},loadend:function(){},progress:function(){},complete:function(){},allcomplete:function(){},readystatechange:function(){}},a);c.on("drop",function(a){function c(a,b){for(var d=new FormData,e=new XMLHttpRequest,f=0,h;h=a[f];f++)d.append("files[]",h);for(var i in b.params)d.append(i,b.params[i]);e.upload.addEventListener("progress",function(a){b.progress(100*(a.loaded/a.total),a)},!1);e.addEventListener("loadstart",function(a){b.loadstart(a)},!1);e.addEventListener("load",function(a){b.load(a)},!1);e.addEventListener("loadend",function(a){b.loadend(a)},!1);e.addEventListener("error",function(a){b.error(a)},!1);e.addEventListener("abort",function(a){b.abort(a)},!1);e.open(b.method,b.action,!0);e.onreadystatechange=function(){b.readystatechange(e);if(4==e.readyState){var a=e.responseText;if("json"==b.type)try{a=g.parseJSON(a)}catch(c){a=!1}b.complete(a,e)}};e.send(d)}a.stopPropagation();a.preventDefault();var b=a.dataTransfer.files;if(d.single){var f=a.dataTransfer.files.length,j=0,k=d.complete;d.complete=function(a,e){j+=1;k(a,e);j<f?c([b[j]],d):d.allcomplete()};c([b[0]],d)}else c(b,d)}).on("dragover",function(a){a.stopPropagation();a.preventDefault()})})};g.fn.ajaxform=function(a){return!g.support.ajaxupload?this:this.each(function(){var c=g(this),d=g.extend({action:c.attr("action"),method:c.attr("method"),loadstart:function(){},load:function(){},loadend:function(){},progress:function(){},complete:function(){},readystatechange:function(){}},a);c.on("submit",function(a){a.preventDefault();var a=new FormData(this),b=new XMLHttpRequest;a.append("formdata","1");b.upload.addEventListener("progress",function(a){d.progress(100*(a.loaded/a.total),a)},!1);b.addEventListener("loadstart",function(a){d.loadstart(a)},!1);b.addEventListener("load",function(a){d.load(a)},!1);b.addEventListener("loadend",function(a){d.loadend(a)},!1);b.addEventListener("error",function(a){d.error(a)},!1);b.addEventListener("abort",function(a){d.abort(a)},!1);b.open(d.method,d.action,!0);b.onreadystatechange=function(){d.readystatechange(b);if(4==b.readyState){var a=b.responseText;if("json"==d.type)try{a=g.parseJSON(a)}catch(c){a=!1}d.complete(a,b)}};b.send(a)})})}})(jQuery);
(function(b,e,f){function d(d){g.innerHTML='&shy;<style media="'+d+'"> #mq-test-1 { width: 42px; }</style>';h.insertBefore(i,c);a=42==g.offsetWidth;h.removeChild(i);return a}function j(a){var b=d(a.media);if(a._listeners&&a.matches!=b){a.matches=b;for(var b=0,c=a._listeners.length;b<c;b++)a._listeners[b](a)}}if(!e.matchMedia||b.userAgent.match(/(iPhone|iPod|iPad)/i)){var a,h=f.documentElement,c=h.firstElementChild||h.firstChild,i=f.createElement("body"),g=f.createElement("div");g.id="mq-test-1";g.style.cssText="position:absolute;top:-100em";i.style.background="none";i.appendChild(g);e.matchMedia=function(a){var b,c=[];b={matches:d(a),media:a,_listeners:c,addListener:function(a){"function"===typeof a&&c.push(a)},removeListener:function(a){for(var b=0,d=c.length;b<d;b++)c[b]===a&&delete c[b]}};e.addEventListener&&e.addEventListener("resize",function(){j(b)},!1);f.addEventListener&&f.addEventListener("orientationchange",function(){j(b)},!1);return b}}})(navigator,window,document);(function(b,e,f){if(!b.onMediaQuery){var d={},j=e.matchMedia&&e.matchMedia("only all").matches;b(f).ready(function(){for(var a in d)b(d[a]).trigger("init"),d[a].matches&&b(d[a]).trigger("valid")});b(e).bind("load",function(){for(var a in d)d[a].matches&&b(d[a]).trigger("valid")});b.onMediaQuery=function(a,f){var c=a&&d[a];c||(c=d[a]=e.matchMedia(a),c.supported=j,c.addListener(function(){b(c).trigger(c.matches?"valid":"invalid")}));b(c).bind(f);return c}}})(jQuery,window,document);
(function(d){var a=function(){};a.prototype=d.extend(a.prototype,{name:"accordion",options:{index:0,duration:500,easing:"easeOutQuart",animated:"slide",event:"click",collapseall:!0,matchheight:!0,toggler:".toggler",content:".content"},initialize:function(a,b){var b=d.extend({},this.options,b),c=a.find(b.toggler),g=function(a){var f=c.eq(a).hasClass("active")?d([]):c.eq(a),e=c.eq(a).hasClass("active")?c.eq(a):d([]);f.hasClass("active")&&(e=f,f=d([]));b.collapseall&&(e=c.filter(".active"));switch(b.animated){case"slide":f.next().stop().show().animate({height:f.next().data("height")},{easing:b.easing,duration:b.duration});e.next().stop().animate({height:0},{easing:b.easing,duration:b.duration,complete:function(){e.next().hide()}});break;default:f.next().show().css("height",f.next().data("height")),e.next().hide().css("height",0)}f.addClass("active");e.removeClass("active")},j=function(){var i=0;b.matchheight&&a.find(b.content).css("min-height","").css("height","").each(function(){i=Math.max(i,d(this).height())}).css("min-height",i);c.each(function(){var b=d(this),a=b.next();a.data("height",a.css("height","").show().height());b.hasClass("active")?a.show():a.hide().css("height",0)})};c.each(function(a){var c=d(this).bind(b.event,function(){g(a)}),e=c.next().css("overflow","hidden").addClass("content-wrapper");a==b.index||"all"==b.index?(c.addClass("active"),e.show()):e.hide().css("height",0)});j();d(window).bind("resize",function(){j()})}});d.fn[a.prototype.name]=function(){var h=arguments,b=h[0]?h[0]:null;return this.each(function(){var c=d(this);if(a.prototype[b]&&c.data(a.prototype.name)&&"initialize"!=b)c.data(a.prototype.name)[b].apply(c.data(a.prototype.name),Array.prototype.slice.call(h,1));else if(!b||d.isPlainObject(b)){var g=new a;a.prototype.initialize&&g.initialize.apply(g,d.merge([c],h));c.data(a.prototype.name,g)}else d.error("Method "+b+" does not exist on jQuery."+a.name)})};window.$widgetkit&&($widgetkit.lazyloaders.accordion=function(a,b){d(a).accordion(b)})})(jQuery);
(function(){$widgetkit.lazyloaders["gallery-slider"]=function(b,a){var f=b.find(".slides:first"),d=f.children(),e="auto"==a.total_width?b.width():a.total_width>b.width()?b.width():a.total_width,h=e/d.length-a.spacing,g=a.width,c=a.height;if("auto"==a.total_width||a.total_width>=e)c=a.width/(e/2),g=a.width/c,c=a.height/c,d.css("background-size",g+"px "+c+"px");d.css({width:h,"margin-right":a.spacing});f.width(2*d.eq(0).width()*d.length);b.css({width:e,height:c});$widgetkit.load(WIDGETKIT_URL+"/widgets/gallery/js/slider.js").done(function(){b.galleryslider(a)})}})(jQuery);
$widgetkit.load('/projects/showroom/media/widgetkit/widgets/lightbox/js/lightbox.js').done(function(){jQuery(function($){$('a[data-lightbox]').lightbox({"titlePosition":"float","transitionIn":"fade","transitionOut":"fade","overlayShow":1,"overlayColor":"#777","overlayOpacity":0.7});});});
(function(){$widgetkit.lazyloaders.googlemaps=function(a,b){$widgetkit.load(WIDGETKIT_URL+"/widgets/map/js/map.js").done(function(){a.googlemaps(b)})}})(jQuery);
$widgetkit.trans.addDic({"FROM_ADDRESS":"From address: ","GET_DIRECTIONS":"Get directions","FILL_IN_ADDRESS":"Please fill in your address.","ADDRESS_NOT_FOUND":"Sorry, address not found!","LOCATION_NOT_FOUND":", not found!"});
if(!window['mejs']){$widgetkit.load('/projects/showroom/media/widgetkit/widgets/mediaplayer/mediaelement/mediaelement-and-player.js').done(function(){jQuery(function($){mejs.MediaElementDefaults.pluginPath='/projects/showroom/media/widgetkit/widgets/mediaplayer/mediaelement/';$('video,audio').each(function(){var ele=$(this);if(!ele.parent().hasClass('mejs-mediaelement')){ele.data('mediaelement',new mejs.MediaElementPlayer(this,{"pluginPath":"\/projects\/showroom\/media\/widgetkit\/widgets\/mediaplayer\/mediaelement\/"}));var w=ele.data('mediaelement').width,h=ele.data('mediaelement').height;$.onMediaQuery('(max-width: 767px)',{valid:function(){ele.data('mediaelement').setPlayerSize('100%',ele.is('video')?'100%':h);},invalid:function(){var parent_width=ele.parent().width();if(w>parent_width){ele.css({width:'',height:''}).data('mediaelement').setPlayerSize('100%','100%');}else{ele.css({width:'',height:''}).data('mediaelement').setPlayerSize(w,h);}}});if($(window).width()<=767){ele.data('mediaelement').setPlayerSize('100%',ele.is('video')?'100%':h);}}});});});}else{jQuery(function($){mejs.MediaElementDefaults.pluginPath='/projects/showroom/media/widgetkit/widgets/mediaplayer/mediaelement/';$('video,audio').each(function(){var ele=$(this);if(!ele.parent().hasClass('mejs-mediaelement')){ele.data('mediaelement',new mejs.MediaElementPlayer(this,{"pluginPath":"\/projects\/showroom\/media\/widgetkit\/widgets\/mediaplayer\/mediaelement\/"}));var w=ele.data('mediaelement').width,h=ele.data('mediaelement').height;$.onMediaQuery('(max-width: 767px)',{valid:function(){ele.data('mediaelement').setPlayerSize('100%',ele.is('video')?'100%':h);},invalid:function(){var parent_width=ele.parent().width();if(w>parent_width){ele.css({width:'',height:''}).data('mediaelement').setPlayerSize('100%','100%');}else{ele.css({width:'',height:''}).data('mediaelement').setPlayerSize(w,h);}}});if($(window).width()<=767){ele.data('mediaelement').setPlayerSize('100%',ele.is('video')?'100%':h);}}});});;}
(function(e){$widgetkit.lazyloaders.slideset=function(a,f){a.css("visibility","hidden");var h=a.find(".sets:first"),c=h.css({width:""}).width(),d=a.find("ul.set").show(),g=0;"auto"==f.width&&a.width();var i="auto"==f.height?d.eq(0).children().eq(0).outerHeight(!0):f.height;d.each(function(){var a=e(this).show(),b=0;e(this).children().each(function(){var a=e(this);a.css("left",b);b+=a.width()});g=Math.max(g,b);a.css("width",b).data("width",b).hide()});d.eq(0).show();h.css({height:i});g>c&&(c=g/c,d.css($widgetkit.css3({transform:"scale("+
1/c+")"})),h.css("height",i/c));d.css({height:i});$widgetkit.load(WIDGETKIT_URL+"/widgets/slideset/js/slideset.js").done(function(){a.slideset(f).css("visibility","visible");a.find("img[data-src]").each(function(){var a=e(this),b=a.data("src");setTimeout(function(){a.attr("src",b)},1)})})}})(jQuery);
(function(f){$widgetkit.lazyloaders.slideshow=function(a,c){$widgetkit.support.canvas&&a.find("img[data-src]").each(function(){var a=f(this),b=document.createElement("canvas"),c=b.getContext("2d");b.width=a.attr("width");b.height=a.attr("height");c.drawImage(this,0,0);a.attr("src",b.toDataURL("image/png"))});a.css("visibility","hidden");var b=c.width,d=c.height,e=a.find("ul.slides:first"),g=e.children();g.css("width","");g.css("height","");e.css("height","");a.css("width","");"auto"!=b&&a.width()<b&&(d=b="auto");a.css({width:"auto"==b?a.width():b});e.width();b=d;"auto"==b&&(b=g.eq(0).show().height());g.css({height:b});e.css("height",b);$widgetkit.load(WIDGETKIT_URL+"/widgets/slideshow/js/slideshow.js").done(function(){a.find("img[data-src]").each(function(){var a=f(this),b=a.data("src");setTimeout(function(){a.attr("src",b)},1)});a.slideshow(c).css("visibility","visible")})};$widgetkit.lazyloaders.showcase=function(a,c){var b=a.find(".wk-slideshow").css("visibility","hidden"),d=a.find(".wk-slideset").css("visibility","hidden"),e=d.find("ul.set > li");$widgetkit.lazyloaders.slideshow(b,c);$widgetkit.lazyloaders.slideset(d,f.extend({},c,{width:"auto",height:"auto",autoplay:!1,duration:c.slideset_effect_duration,index:parseInt(c.index/c.items_per_set)}));f(window).bind("resize",function(){var b=function(){a.css("width","");"auto"==c.width||c.width>a.width()?a.width(a.width()):a.width(c.width)};b();return b}());f.when($widgetkit.load(WIDGETKIT_URL+"/widgets/slideset/js/slideset.js"),$widgetkit.load(WIDGETKIT_URL+"/widgets/slideshow/js/slideshow.js")).done(function(){b.css("visibility","visible");d.css("visibility","visible");var a=b.data("slideshow"),c=d.data("slideset");e.eq(a.index).addClass("active");b.bind("slideshow-show",function(a,b,d){if(!e.removeClass("active").eq(d).addClass("active").parent().is(":visible"))switch(d){case 0:c.show(0);break;case e.length-1:c.show(c.sets.length-1);break;default:c[d>b?"next":"previous"]()}});e.each(function(b){f(this).bind("click",function(){a.stop();a.show(b)})})})}})(jQuery);
$widgetkit.load('/projects/showroom/media/widgetkit/widgets/spotlight/js/spotlight.js').done(function(){jQuery(function($){$('[data-spotlight]').spotlight({"duration":300});});});
jQuery(function(b){var f=function(b){var a=new Date(Date.parse(b.replace(/(\d+)-(\d+)-(\d+)T(.+)([-\+]\d+):(\d+)/g,"$1/$2/$3 $4 UTC$5$6"))),a=parseInt(((1<arguments.length?arguments[1]:new Date).getTime()-a)/1E3);return 60>a?$widgetkit.trans.get("LESS_THAN_A_MINUTE_AGO"):120>a?$widgetkit.trans.get("ABOUT_A_MINUTE_AGO"):2700>a?$widgetkit.trans.get("X_MINUTES_AGO",parseInt(a/60).toString()):5400>a?$widgetkit.trans.get("ABOUT_AN_HOUR_AGO"):86400>a?$widgetkit.trans.get("X_HOURS_AGO",parseInt(a/3600).toString()):172800>a?$widgetkit.trans.get("ONE_DAY_AGO"):$widgetkit.trans.get("X_DAYS_AGO",parseInt(a/86400).toString())};b(".wk-twitter time").each(function(){b(this).html(f(b(this).attr("datetime")))});var d=b(".wk-twitter-bubbles");if(d.length){var e=function(){d.each(function(){var c=0;b(this).find("p.content").each(function(){var a=b(this).height();a>c&&(c=a)}).css("min-height",c)})};e();b(window).bind("load",e)}});
$widgetkit.trans.addDic({"LESS_THAN_A_MINUTE_AGO":"less than a minute ago","ABOUT_A_MINUTE_AGO":"about a minute ago","X_MINUTES_AGO":"%s minutes ago","ABOUT_AN_HOUR_AGO":"about an hour ago","X_HOURS_AGO":"about %s hours ago","ONE_DAY_AGO":"1 day ago","X_DAYS_AGO":"%s days ago"});