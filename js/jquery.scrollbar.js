!function(a,b,c){"use strict";function m(b){if(g.webkit&&!b)return{height:0,width:0};if(!g.data.outer){var c={border:"none","box-sizing":"content-box",height:"200px",margin:"0",padding:"0",width:"200px"};g.data.inner=a("<div>").css(a.extend({},c)),g.data.outer=a("<div>").css(a.extend({left:"-1000px",overflow:"scroll",position:"absolute",top:"-1000px"},c)).append(g.data.inner).appendTo("body")}return g.data.outer.scrollLeft(1e3).scrollTop(1e3),{height:Math.ceil(g.data.outer.offset().top-g.data.inner.offset().top||0),width:Math.ceil(g.data.outer.offset().left-g.data.inner.offset().left||0)}}function n(c,d){return a(b).on({"blur.scrollbar":function(){a(b).add("body").off(".scrollbar"),c&&c()},"dragstart.scrollbar":function(a){return a.preventDefault(),!1},"mouseup.scrollbar":function(){a(b).add("body").off(".scrollbar"),c&&c()}}),a("body").on({"selectstart.scrollbar":function(a){return a.preventDefault(),!1}}),d&&d.preventDefault(),!1}function o(){var a=m(!0);return!(a.height||a.width)}function p(a){var b=a.originalEvent;return(!b.axis||b.axis!==b.HORIZONTAL_AXIS)&&!b.wheelDeltaX}var d=!1,e=1,f="px",g={data:{},macosx:c.navigator.platform.toLowerCase().indexOf("mac")!==-1,mobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(c.navigator.userAgent),overlay:null,scroll:null,scrolls:[],webkit:/WebKit/.test(c.navigator.userAgent),log:d?function(b,d){var e=b;d&&"string"!=typeof b&&(e=[],a.each(b,function(a,b){e.push('"'+a+'": '+b)}),e=e.join(", ")),c.console&&c.console.log?c.console.log(e):alert(e)}:function(){}},h={autoScrollSize:!0,autoUpdate:!0,debug:!1,disableBodyScroll:!1,duration:200,ignoreMobile:!1,ignoreOverlay:!1,scrollStep:30,showArrows:!1,stepScrolling:!0,type:"simple",scrollx:null,scrolly:null,onDestroy:null,onInit:null,onScroll:null,onUpdate:null},i=function(b,d){g.scroll||(g.log("Init jQuery Scrollbar v0.2.5"),g.overlay=o(),g.scroll=m(),l(),a(c).resize(function(){var a=!1;if(g.scroll&&(g.scroll.height||g.scroll.width)){var b=m();b.height==g.scroll.height&&b.width==g.scroll.width||(g.scroll=b,a=!0)}l(a)})),this.container=b,this.options=a.extend({},h,c.jQueryScrollbarOptions||{}),this.scrollTo=null,this.scrollx={},this.scrolly={},this.init(d)};i.prototype={destroy:function(){if(this.wrapper){var c=this.container.scrollLeft(),d=this.container.scrollTop();this.container.insertBefore(this.wrapper).css({height:"",margin:""}).removeClass("scroll-content").removeClass("scroll-scrollx_visible").removeClass("scroll-scrolly_visible").off(".scrollbar").scrollLeft(c).scrollTop(d),this.scrollx.scrollbar.removeClass("scroll-scrollx_visible").find("div").andSelf().off(".scrollbar"),this.scrolly.scrollbar.removeClass("scroll-scrolly_visible").find("div").andSelf().off(".scrollbar"),this.wrapper.remove(),a(b).add("body").off(".scrollbar"),a.isFunction(this.options.onDestroy)&&this.options.onDestroy.apply(this,[this.container])}},getScrollbar:function(b){var c=this.options["scroll"+b],d={advanced:'<div class="scroll-element_corner"></div><div class="scroll-arrow scroll-arrow_less"></div><div class="scroll-arrow scroll-arrow_more"></div><div class="scroll-element_outer">    <div class="scroll-element_size"></div>    <div class="scroll-element_inner-wrapper">        <div class="scroll-element_inner scroll-element_track">            <div class="scroll-element_inner-bottom"></div>        </div>    </div>    <div class="scroll-bar">        <div class="scroll-bar_body">            <div class="scroll-bar_body-inner"></div>        </div>        <div class="scroll-bar_bottom"></div>        <div class="scroll-bar_center"></div>    </div></div>',simple:'<div class="scroll-element_outer">    <div class="scroll-element_size"></div>    <div class="scroll-element_track"></div>    <div class="scroll-bar"></div></div>'},e=d[this.options.type]?this.options.type:"advanced";return c=c?"string"==typeof c?a(c).appendTo(this.wrapper):a(c):a("<div>").addClass("scroll-element").html(d[e]).appendTo(this.wrapper),this.options.showArrows&&c.addClass("scroll-element_arrows_visible"),c.addClass("scroll-"+b)},init:function(c){var d=this,h=this.container,i=this.containerWrapper||h,j=a.extend(this.options,c||{}),k={x:this.scrollx,y:this.scrolly},l=this.wrapper,m={scrollLeft:h.scrollLeft(),scrollTop:h.scrollTop()};if(g.mobile&&j.ignoreMobile||g.overlay&&j.ignoreOverlay||g.macosx&&!g.webkit)return!1;if(l)i.css({height:"","margin-bottom":g.scroll.height*-1+f,"margin-right":g.scroll.width*-1+f});else{if(this.wrapper=l=a("<div>").addClass("scroll-wrapper").addClass(h.attr("class")).css("position","absolute"==h.css("position")?"absolute":"relative").insertBefore(h).append(h),h.is("textarea")&&(this.containerWrapper=i=a("<div>").insertBefore(h).append(h),l.addClass("scroll-textarea")),i.addClass("scroll-content").css({height:"","margin-bottom":g.scroll.height*-1+f,"margin-right":g.scroll.width*-1+f}),h.on("scroll.scrollbar",function(b){a.isFunction(j.onScroll)&&j.onScroll.call(d,{maxScroll:k.y.maxScrollOffset,scroll:h.scrollTop(),size:k.y.size,visible:k.y.visible},{maxScroll:k.x.maxScrollOffset,scroll:h.scrollLeft(),size:k.x.size,visible:k.x.visible}),k.x.isVisible&&k.x.scroller.css("left",h.scrollLeft()*k.x.kx+f),k.y.isVisible&&k.y.scroller.css("top",h.scrollTop()*k.y.kx+f)}),l.on("scroll",function(){l.scrollTop(0).scrollLeft(0)}),j.disableBodyScroll){var o=function(a){p(a)?k.y.isVisible&&k.y.mousewheel(a):k.x.isVisible&&k.x.mousewheel(a)};l.on({"MozMousePixelScroll.scrollbar":o,"mousewheel.scrollbar":o}),g.mobile&&l.on("touchstart.scrollbar",function(c){var d=c.originalEvent.touches&&c.originalEvent.touches[0]||c,e={pageX:d.pageX,pageY:d.pageY},f={left:h.scrollLeft(),top:h.scrollTop()};a(b).on({"touchmove.scrollbar":function(a){var b=a.originalEvent.targetTouches&&a.originalEvent.targetTouches[0]||a;h.scrollLeft(f.left+e.pageX-b.pageX),h.scrollTop(f.top+e.pageY-b.pageY),a.preventDefault()},"touchend.scrollbar":function(){a(b).off(".scrollbar")}})})}a.isFunction(j.onInit)&&j.onInit.apply(this,[h])}a.each(k,function(c,f){var g=null,i=1,l="x"==c?"scrollLeft":"scrollTop",m=j.scrollStep,o=function(){var a=h[l]();h[l](a+m),1==i&&a+m>=q&&(a=h[l]()),i==-1&&a+m<=q&&(a=h[l]()),h[l]()==a&&g&&g()},q=0;f.scrollbar||(f.scrollbar=d.getScrollbar(c),f.scroller=f.scrollbar.find(".scroll-bar"),f.mousewheel=function(a){if(!f.isVisible||"x"==c&&p(a))return!0;if("y"==c&&!p(a))return k.x.mousewheel(a),!0;var b=a.originalEvent.wheelDelta*-1||a.originalEvent.detail,e=f.size-f.visible-f.offset;return q<=0&&b<0||q>=e&&b>0||(q+=b,q<0&&(q=0),q>e&&(q=e),d.scrollTo=d.scrollTo||{},d.scrollTo[l]=q,setTimeout(function(){d.scrollTo&&(h.stop().animate(d.scrollTo,240,"linear",function(){q=h[l]()}),d.scrollTo=null)},1)),a.preventDefault(),!1},f.scrollbar.on({"MozMousePixelScroll.scrollbar":f.mousewheel,"mousewheel.scrollbar":f.mousewheel,"mouseenter.scrollbar":function(){q=h[l]()}}),f.scrollbar.find(".scroll-arrow, .scroll-element_track").on("mousedown.scrollbar",function(b){if(b.which!=e)return!0;i=1;var k={eventOffset:b["x"==c?"pageX":"pageY"],maxScrollValue:f.size-f.visible-f.offset,scrollbarOffset:f.scroller.offset()["x"==c?"left":"top"],scrollbarSize:f.scroller["x"==c?"outerWidth":"outerHeight"]()},p=0,r=0;return a(this).hasClass("scroll-arrow")?(i=a(this).hasClass("scroll-arrow_more")?1:-1,m=j.scrollStep*i,q=i>0?k.maxScrollValue:0):(i=k.eventOffset>k.scrollbarOffset+k.scrollbarSize?1:k.eventOffset<k.scrollbarOffset?-1:0,m=Math.round(.75*f.visible)*i,q=k.eventOffset-k.scrollbarOffset-(j.stepScrolling?1==i?k.scrollbarSize:0:Math.round(k.scrollbarSize/2)),q=h[l]()+q/f.kx),d.scrollTo=d.scrollTo||{},d.scrollTo[l]=j.stepScrolling?h[l]()+m:q,j.stepScrolling&&(g=function(){q=h[l](),clearInterval(r),clearTimeout(p),p=0,r=0},p=setTimeout(function(){r=setInterval(o,40)},j.duration+100)),setTimeout(function(){d.scrollTo&&(h.animate(d.scrollTo,j.duration),d.scrollTo=null)},1),n(g,b)}),f.scroller.on("mousedown.scrollbar",function(d){if(d.which!=e)return!0;var g=d["x"==c?"pageX":"pageY"],i=h[l]();return f.scrollbar.addClass("scroll-draggable"),a(b).on("mousemove.scrollbar",function(a){var b=parseInt((a["x"==c?"pageX":"pageY"]-g)/f.kx,10);h[l](i+b)}),n(function(){f.scrollbar.removeClass("scroll-draggable"),q=h[l]()},d)}))}),a.each(k,function(a,b){var c="scroll-scroll"+a+"_visible",d="x"==a?k.y:k.x;b.scrollbar.removeClass(c),d.scrollbar.removeClass(c),i.removeClass(c)}),a.each(k,function(b,c){a.extend(c,"x"==b?{offset:parseInt(h.css("left"),10)||0,size:h.prop("scrollWidth"),visible:l.width()}:{offset:parseInt(h.css("top"),10)||0,size:h.prop("scrollHeight"),visible:l.height()})});var q=function(b,c){var d="scroll-scroll"+b+"_visible",e="x"==b?k.y:k.x,j=parseInt(h.css("x"==b?"left":"top"),10)||0,m=c.size,n=c.visible+j;c.isVisible=m-n>1,c.isVisible?(c.scrollbar.addClass(d),e.scrollbar.addClass(d),i.addClass(d)):(c.scrollbar.removeClass(d),e.scrollbar.removeClass(d),i.removeClass(d)),"y"==b&&(c.isVisible||c.size<c.visible)&&i.css("height",n+g.scroll.height+f),k.x.size==h.prop("scrollWidth")&&k.y.size==h.prop("scrollHeight")&&k.x.visible==l.width()&&k.y.visible==l.height()&&k.x.offset==(parseInt(h.css("left"),10)||0)&&k.y.offset==(parseInt(h.css("top"),10)||0)||(a.each(k,function(b,c){a.extend(c,"x"==b?{offset:parseInt(h.css("left"),10)||0,size:h.prop("scrollWidth"),visible:l.width()}:{offset:parseInt(h.css("top"),10)||0,size:h.prop("scrollHeight"),visible:l.height()})}),q("x"==b?"y":"x",e))};a.each(k,q),a.isFunction(j.onUpdate)&&j.onUpdate.apply(this,[h]),a.each(k,function(a,b){var c="x"==a?"left":"top",d="x"==a?"outerWidth":"outerHeight",e="x"==a?"width":"height",g=parseInt(h.css(c),10)||0,i=b.size,k=b.visible+g,l=b.scrollbar.find(".scroll-element_size");l=l[d]()+(parseInt(l.css(c),10)||0),j.autoScrollSize&&(b.scrollbarSize=parseInt(l*k/i,10),b.scroller.css(e,b.scrollbarSize+f)),b.scrollbarSize=b.scroller[d](),b.kx=(l-b.scrollbarSize)/(i-k)||1,b.maxScrollOffset=i-k}),h.scrollLeft(m.scrollLeft).scrollTop(m.scrollTop).trigger("scroll")}},a.fn.scrollbar=function(b,c){var d=this;return"get"===b&&(d=null),this.each(function(){var e=a(this);if(e.hasClass("scroll-wrapper")||"body"==e.get(0).nodeName)return!0;var f=e.data("scrollbar");if(f){if("get"===b)return d=f,!1;var h="string"==typeof b&&f[b]?b:"init";if(f[h].apply(f,a.isArray(c)?c:[]),"destroy"===b)for(e.removeData("scrollbar");a.inArray(f,g.scrolls)>=0;)g.scrolls.splice(a.inArray(f,g.scrolls),1)}else"string"!=typeof b&&(f=new i(e,b),e.data("scrollbar",f),g.scrolls.push(f));return!0}),d},a.fn.scrollbar.options=h,c.angular&&!function(a){var b=a.module("jQueryScrollbar",[]);b.directive("jqueryScrollbar",function(){return{link:function(a,b){b.scrollbar(a.options).on("$destroy",function(){b.scrollbar("destroy")})},restring:"AC",scope:{options:"=jqueryScrollbar"}}})}(c.angular);var j=0,k=0,l=function(a){var b,c,e,f,h,i,m;for(b=0;b<g.scrolls.length;b++)f=g.scrolls[b],c=f.container,e=f.options,h=f.wrapper,i=f.scrollx,m=f.scrolly,(a||e.autoUpdate&&h&&h.is(":visible")&&(c.prop("scrollWidth")!=i.size||c.prop("scrollHeight")!=m.size||h.width()!=i.visible||h.height()!=m.visible))&&(f.init(),d&&(g.log({scrollHeight:c.prop("scrollHeight")+":"+f.scrolly.size,scrollWidth:c.prop("scrollWidth")+":"+f.scrollx.size,visibleHeight:h.height()+":"+f.scrolly.visible,visibleWidth:h.width()+":"+f.scrollx.visible},!0),k++));d&&k>10?(g.log("Scroll updates exceed 10"),l=function(){}):(clearTimeout(j),j=setTimeout(l,300))}}(jQuery,document,window);