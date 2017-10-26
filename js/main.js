// function getTimeRemaining(a){var b=Date.parse(a)-Date.parse(new Date),c=Math.floor(b/1e3%60),d=Math.floor(b/1e3/60%60),e=Math.floor(b/36e5%24),f=Math.floor(b/864e5);return{total:b,days:f,hours:e,minutes:d,seconds:c}}function initializeClock(a,b){function c(){var a=getTimeRemaining(b);e.innerHTML=("0"+a.days).slice(-2),f.innerHTML=("0"+a.hours).slice(-2),g.innerHTML=("0"+a.minutes).slice(-2),h.innerHTML=("0"+a.seconds).slice(-2),a.total<=0&&clearInterval(i)}var d=document.getElementById(a),e=d.querySelector(".days"),f=d.querySelector(".hours"),g=d.querySelector(".minutes"),h=d.querySelector(".seconds");c();var i=setInterval(c,1e3)}function initialize(a,b,c){myLatlng=new google.maps.LatLng(b[0],b[1]);var d={scrollwheel:!1,zoom:17,center:myLatlng,mapTypeId:google.maps.MapTypeId.ROADMAP},e=new google.maps.LatLng(a[0],a[1]);map=new google.maps.Map(document.getElementById("map"),d);var f=new google.maps.Marker({position:e,map:map,title:c}),g=new google.maps.InfoWindow,h=function(){var a=this,b=(a.getPosition(),a.title);g.setContent('<div class="scrollFix">'+b+"</div>"),g.open(map,a)};google.maps.event.addListener(map,"click",function(){g.close()}),google.maps.event.addListener(f,"click",h)}function getParameterByName(a,b){b||(b=window.location.href),a=a.replace(/[\[\]]/g,"\\$&");var c=new RegExp("[?&]"+a+"(=([^&#]*)|&|#|$)"),d=c.exec(b);return d?d[2]?decodeURIComponent(d[2].replace(/\+/g," ")):"":null}var map,myLatlng,career_sider=null,cost_sider=null,fe_page=getParameterByName("c");"frontend"===fe_page&&(window.location.href="http://prog.kiev.ua/fe.html"),$(document).ready(function(){function a(){var a=document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop;a>600?$(".menu-fix").stop().animate({opacity:"0.8",top:"0"}):$(".menu-fix").stop().animate({opacity:"0",top:"-400"})}a(),$(window).scroll(function(){a()})}),$(document).ready(function(){$("video").on("ended",function(){this.load(),this.play()}),$(".wrapper").mouseup(function(a){var b=$(".faq-item-modal");b.has(a.target).length||$(".close-faq").trigger("click")}),$(".close-faq").on("click",function(){$(".faq-modal-wrap").removeClass("active"),$(".faq").removeClass("modal-open-type")});var a=new Date,b=new Date($("#timer-1").data("dead")),c=new Date($("#timer-2").data("dead"));Date.parse(b)>Date.parse(a)&&initializeClock("timer-1",b),Date.parse(c)>Date.parse(a)&&initializeClock("timer-2",c),$(".faq-item-link").on("click",function(){var a=$(this).html(),b=$(this).closest(".faq-item").find(".faq-answer").html();if($(".faq-item-modal .faq-modal-header-item").html(a),$(".faq-item-modal .faq-modal-content").html(b),$(window).width()<767){var c=$(this).offset().top,d=$(".faq").offset().top;c-=d,$(".faq-modal-wrap").css("top",c+"px")}$(".faq-modal-wrap").addClass("active"),$(".faq").addClass("modal-open-type")}),$("body").on("click",".active .detail-bars",function(){$(this).closest(".section").find(".detail-menu").removeClass("active-menu"),$(this).closest(".menu").removeClass("active")}),$("body").on("click",".shedule .detail-bars",function(){$(this).closest(".section").find(".detail-menu").removeClass("active-menu"),$(this).closest(".menu").removeClass("active")}),$(".menu-detail a").on("click",function(){$(this).closest(".menu-wrap").hasClass("active")||$(this).closest(".menu").hasClass("active")||($(this).closest(".section").find(".detail-menu").toggleClass("active-menu"),$(this).closest(".menu").toggleClass("active"))}),$(".menu-detail a").click(function(){$(".submenu-fix").addClass("active")}),$(".detail-bars").addClass("det"),$(".det").click(function(){$(".submenu-fix").removeClass("active")}),$(".open-menu").on("click",function(){$(this).closest(".section").find(".detail-menu").toggleClass("active-menu")}),$(".close-bars").on("click",function(){$(this).closest(".section").find(".detail-menu").removeClass("active-menu")}),$(".contacts-item").on("click",function(a){if(a.preventDefault(),!$(this).hasClass("active")){$(".contacts-item").removeClass("active");var b=$(this),c=b.data("xy-p").split(","),d=b.data("xy-c").split(","),e=b.data("hint");initialize(c,d,e),$(this).addClass("active")}}),$(".contacts-item").on("tap",function(a){a.preventDefault(),$(".contacts-item").removeClass("active");var b=$(this),c=b.data("xy-p").split(","),d=b.data("xy-c").split(","),e=b.data("hint");initialize(c,d,e),$(this).addClass("active")}),$(".contacts-item").on("taphold",function(a){a.preventDefault(),$(".contacts-item").removeClass("active");var b=$(this),c=b.data("xy-p").split(","),d=b.data("xy-c").split(","),e=b.data("hint");initialize(c,d,e),$(this).addClass("active")}),$(".reviews-slider").bxSlider({pager:!1,prevSelector:".reviews-prev",nextSelector:".reviews-next",mode:"fade",auto:!1,minSlides:1,maxSlides:1,slideMargin:0,adaptiveHeight:!0,moveSlides:1,onSliderLoad:function(){},onSlideBefore:function(a,b,c){}}),$(".modal-open").fancybox({autoSize:!0,type:"inline",closeBtn:!1,padding:0,scrolling:"no",fixed:!1,autoCenter:!1,helpers:{overlay:{css:{overflow:"hidden"}}},beforeShow:function(){$("form").find("input[type=text]").val(""),$("form").find("input[type=text]").parents(".form-field").removeClass("correct incorrect"),this.element.hasClass("order-link")&&($("#order-modal .main-form-title").html(this.element.data("title")),$('#order-modal [name="from"]').val(this.element.data("from")),$("#order-modal textarea").val(""),$("#order-modal textarea").html(""),$("#order-modal .send").text(this.element.data("btn"))),$(".fancybox-skin").css("background-color","transparent")},afterClose:function(){$("form").find("input[type=text]").val(""),$("form").find("input[type=text]").parents(".form-field").removeClass("correct incorrect")}}).click(function(){"undefined"!=typeof $(this).data("from")}),$(".modal-close, .close-btn, .close-modal").click(function(){return $.fancybox.close(),!1}),$("body").on("click",".scroll",function(a){$(".detail-menu").removeClass("active-menu"),$(".menu").removeClass("active"),$(".menu-wrap").removeClass("active"),$(".mobile-nav").removeClass("active"),$(".wrapper").removeClass("over-no");var b=$(this);$("html, body").stop().animate({scrollTop:$(b.data("scroll")).offset().top+"px"},1200,"easeInOutExpo"),a.preventDefault()}),$(".mobile-nav").on("click",function(){$(this).toggleClass("active"),$(".menu-wrap").toggleClass("active"),$(".wrapper").toggleClass("over-no")}),$(".fancybox").fancybox({helpers:{overlay:{locked:!1}}}),$(".send").on("click",function(){$(this).parents("form").submit(),dataLayer.push({event:"form-ok"})}),$("form").submit(function(){if(!$(this).closest("div").hasClass("liqpay-form"))return $(this).isCorrectRequest(),!1}),$(".pay-btn").on("click",function(){var a=$(this).data("amount"),b=$(this).data("descr");$('.liqpay-form [name="amount"]').val(Math.round(a+.02*a)),$('.liqpay-form [name="descr"]').val(b),$(".liqpay-form form").submit()}),$(window).width()<1030&&$(".menu-wrap .menu").scrollbar(),$(window).resize(function(){$(".detail-menu").removeClass("active-menu"),$(".menu").removeClass("active"),$(".menu-wrap").removeClass("active"),$(".mobile-nav").removeClass("active"),$(".wrapper").removeClass("over-no"),setTimeout(function(){$(window).width()<1030?($(".menu-wrap .menu").scrollbar(),career_sider=$(".career-list").slick({dots:!0,infinite:!1,arrows:!1,speed:500,fade:!0,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:1029,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".cost-item").length>1&&(cost_sider=$(".cost-list").slick({dots:!0,infinite:!1,arrows:!1,speed:500,fade:!0,adaptiveHeight:!0,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:1029,settings:{slidesToShow:1,slidesToScroll:1}}]}))):($(".cost-item").length>1&&cost_sider.slick("unslick"),career_sider.slick("unslick"),$(".menu-wrap .menu").scrollbar("destroy"))},100)})}),$(window).scroll(function(){}),$(window).load(function(){$(window).width()>1070&&setTimeout(function(){var a='<video id="homescreen_video" preload="auto" muted="true" loop autoplay="autoplay" poster="/images/bg/poster.jpg"><source src="/video/bg_2.mp4" type="video/mp4"></video>';$(".video-wrap").prepend(a).addClass("active")},3e3);var a=$(".contacts-item").eq(0),b=a.data("xy-p").split(","),c=a.data("xy-c").split(","),d=a.data("hint");initialize(b,c,d),$(window).width()<1030&&(career_sider=$(".career-list").slick({dots:!0,infinite:!1,arrows:!1,speed:500,fade:!0,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:1029,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".cost-item").length>1&&(cost_sider=$(".cost-list").slick({dots:!0,infinite:!1,arrows:!1,speed:500,fade:!0,adaptiveHeight:!0,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:1029,settings:{slidesToShow:1,slidesToScroll:1}}]})))}),function(a){a.fn.isCorrectRequest=function(){this.find("input[type=text]").parents(".form-field").removeClass("correct incorrect");var b=a(this).find("[name = name]"),c=a(this).find("[name = phone]"),d=a(this).find("[name = email]");if(b.val(a.trim(b.val())),d.val(a.trim(d.val())),void 0!=b.val()){if(0===b.val().length)return b.parents(".form-field").addClass("incorrect"),b.focus(),!1;b.parents(".form-field").addClass("correct")}if(void 0!=c.val()){if(0===c.val().length)return c.parents(".form-field").addClass("incorrect"),c.focus(),!1;c.parents(".form-field").addClass("correct")}var e=a(this),f=new FormData(a(this)[0]),g=e.attr("action");a.ajax({type:"POST",url:g,data:f,cache:!1,contentType:!1,processData:!1,async:!1,success:function(b){a("form").find("input[type=text]").val(""),a("form textarea").val(""),a("form textarea").html(""),a("form").find("input[type=text]").parents(".form-field").removeClass("correct incorrect"),a(".thanks-link").trigger("click"),setTimeout(function(){a("#thanks-modal .close-modal").trigger("click")},3500)},error:function(a){alert("Please, try again!")}})}}(jQuery),$(document).ready(function(){$("#share").ayoshare({facebook:!0})});

function getTimeRemaining(a) {
    var b = Date.parse(a) - Date.parse(new Date),
        c = Math.floor(b / 1e3 % 60),
        d = Math.floor(b / 1e3 / 60 % 60),
        e = Math.floor(b / 36e5 % 24),
        f = Math.floor(b / 864e5);
    return {
        total: b,
        days: f,
        hours: e,
        minutes: d,
        seconds: c
    }
}

function initializeClock(a, b) {
    function c() {
        var a = getTimeRemaining(b);
        e.innerHTML = ("0" + a.days).slice(-2), f.innerHTML = ("0" + a.hours).slice(-2), g.innerHTML = ("0" + a.minutes).slice(-2), h.innerHTML = ("0" + a.seconds).slice(-2), a.total <= 0 && clearInterval(i)
    }
    var d = document.getElementById(a),
        e = d.querySelector(".days"),
        f = d.querySelector(".hours"),
        g = d.querySelector(".minutes"),
        h = d.querySelector(".seconds");
    c();
    var i = setInterval(c, 1e3)
}

// function initialize(a, b, c) {
//     myLatlng = new google.maps.LatLng(b[0], b[1]);
//     var d = {
//             scrollwheel: !1,
//             zoom: 17,
//             center: myLatlng,
//             mapTypeId: google.maps.MapTypeId.ROADMAP
//         },
//         e = new google.maps.LatLng(a[0], a[1]);
//     map = new google.maps.Map(document.getElementById("map"), d);
//     var f = new google.maps.Marker({
//             position: e,
//             map: map,
//             title: c
//         }),
//         g = new google.maps.InfoWindow,
//         h = function() {
//             var a = this,
//                 b = (a.getPosition(), a.title);
//             g.setContent('<div class="scrollFix">' + b + "</div>"), g.open(map, a)
//         };
//     google.maps.event.addListener(map, "click", function() {
//         g.close()
//     }), google.maps.event.addListener(f, "click", h)
// }

function getParameterByName(a, b) {
    b || (b = window.location.href), a = a.replace(/[\[\]]/g, "\\$&");
    var c = new RegExp("[?&]" + a + "(=([^&#]*)|&|#|$)"),
        d = c.exec(b);
    return d ? d[2] ? decodeURIComponent(d[2].replace(/\+/g, " ")) : "" : null
}
var map, myLatlng, career_sider = null,
    cost_sider = null,
    fe_page = getParameterByName("c");
"frontend" === fe_page && (window.location.href = "http://prog.kiev.ua/fe.html"), $(document).ready(function() {
    function a() {
        var a = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
        a > 600 ? $(".menu-fix").stop().animate({
                opacity: "0.8",
                top: "0"
            }) : $(".menu-fix").stop().animate({
                opacity: "0",
                top: "-400"
            })
    }
    a(), $(window).scroll(function() {
        a()
    })
}), $(document).ready(function() {
    $("video").on("ended", function() {
        this.load(), this.play()
    }), $(".wrapper").mouseup(function(a) {
        var b = $(".faq-item-modal");
        b.has(a.target).length || $(".close-faq").trigger("click")
    }), $(".close-faq").on("click", function() {
        $(".faq-modal-wrap").removeClass("active"), $(".faq").removeClass("modal-open-type")
    });
    var a = new Date,
        b = new Date($("#timer-1").data("dead")),
        c = new Date($("#timer-2").data("dead"));
    Date.parse(b) > Date.parse(a) && initializeClock("timer-1", b), Date.parse(c) > Date.parse(a) && initializeClock("timer-2", c), $(".faq-item-link").on("click", function() {
        var a = $(this).html(),
            b = $(this).closest(".faq-item").find(".faq-answer").html();
        if ($(".faq-item-modal .faq-modal-header-item").html(a), $(".faq-item-modal .faq-modal-content").html(b), $(window).width() < 767) {
            var c = $(this).offset().top,
                d = $(".faq").offset().top;
            c -= d, $(".faq-modal-wrap").css("top", c + "px")
        }
        $(".faq-modal-wrap").addClass("active"), $(".faq").addClass("modal-open-type")
    }), $("body").on("click", ".active .detail-bars", function() {
        $(this).closest(".section").find(".detail-menu").removeClass("active-menu"), $(this).closest(".menu").removeClass("active")
    }), $("body").on("click", ".shedule .detail-bars", function() {
        $(this).closest(".section").find(".detail-menu").removeClass("active-menu"), $(this).closest(".menu").removeClass("active")
    }), $(".menu-detail a").on("click", function() {
        $(this).closest(".menu-wrap").hasClass("active") || $(this).closest(".menu").hasClass("active") || ($(this).closest(".section").find(".detail-menu").toggleClass("active-menu"), $(this).closest(".menu").toggleClass("active"))
    }), $(".menu-detail a").click(function() {
        $(".submenu-fix").addClass("active")
    }), $(".detail-bars").addClass("det"), $(".det").click(function() {
        $(".submenu-fix").removeClass("active")
    }), $(".open-menu").on("click", function() {
        $(this).closest(".section").find(".detail-menu").toggleClass("active-menu")
    }), $(".close-bars").on("click", function() {
        $(this).closest(".section").find(".detail-menu").removeClass("active-menu")
    }), $(".contacts-item").on("click", function(a) {
        if (a.preventDefault(), !$(this).hasClass("active")) {
            $(".contacts-item").removeClass("active");
            var b = $(this),
                c = b.data("xy-p").split(","),
                d = b.data("xy-c").split(","),
                e = b.data("hint");
            initialize(c, d, e), $(this).addClass("active")
        }
    }), $(".contacts-item").on("tap", function(a) {
        a.preventDefault(), $(".contacts-item").removeClass("active");
        var b = $(this),
            c = b.data("xy-p").split(","),
            d = b.data("xy-c").split(","),
            e = b.data("hint");
        initialize(c, d, e), $(this).addClass("active")
    }), $(".contacts-item").on("taphold", function(a) {
        a.preventDefault(), $(".contacts-item").removeClass("active");
        var b = $(this),
            c = b.data("xy-p").split(","),
            d = b.data("xy-c").split(","),
            e = b.data("hint");
        initialize(c, d, e), $(this).addClass("active")
    }), $(".reviews-slider").bxSlider({
        pager: !1,
        prevSelector: ".reviews-prev",
        nextSelector: ".reviews-next",
        mode: "fade",
        auto: !1,
        minSlides: 1,
        maxSlides: 1,
        slideMargin: 0,
        adaptiveHeight: !0,
        moveSlides: 1,
        onSliderLoad: function() {},
        onSlideBefore: function(a, b, c) {}
    }), $(".modal-open").fancybox({
        autoSize: !0,
        type: "inline",
        closeBtn: !1,
        padding: 0,
        scrolling: "no",
        fixed: !1,
        autoCenter: !1,
        helpers: {
            overlay: {
                css: {
                    overflow: "hidden"
                }
            }
        },
        beforeShow: function() {
            $("form").find("input[type=text]").val(""), $("form").find("input[type=text]").parents(".form-field").removeClass("correct incorrect"), this.element.hasClass("order-link") && ($("#order-modal .main-form-title").html(this.element.data("title")), $('#order-modal [name="from"]').val(this.element.data("from")), $("#order-modal textarea").val(""), $("#order-modal textarea").html(""), $("#order-modal .send").text(this.element.data("btn"))), $(".fancybox-skin").css("background-color", "transparent")
        },
        afterClose: function() {
            $("form").find("input[type=text]").val(""), $("form").find("input[type=text]").parents(".form-field").removeClass("correct incorrect")
        }
    }).click(function() {
        "undefined" != typeof $(this).data("from")
    }), $(".modal-close, .close-btn, .close-modal").click(function() {
        return $.fancybox.close(), !1
    }), $("body").on("click", ".scroll", function(a) {
        $(".detail-menu").removeClass("active-menu"), $(".menu").removeClass("active"), $(".menu-wrap").removeClass("active"), $(".mobile-nav").removeClass("active"), $(".wrapper").removeClass("over-no");
        var b = $(this);
        $("html, body").stop().animate({
            scrollTop: $(b.data("scroll")).offset().top + "px"
        }, 1200, "easeInOutExpo"), a.preventDefault()
    }), $(".mobile-nav").on("click", function() {
        $(this).toggleClass("active"), $(".menu-wrap").toggleClass("active"), $(".wrapper").toggleClass("over-no")
    }), $(".fancybox").fancybox({
        helpers: {
            overlay: {
                locked: !1
            }
        }
    }), $(".send").on("click", function() {
        $(this).parents("form").submit(), dataLayer.push({
            event: "form-ok"
        })
    }), $("form").submit(function() {
        if (!$(this).closest("div").hasClass("liqpay-form")) return $(this).isCorrectRequest(), !1
    }), $(".pay-btn").on("click", function() {
        var a = $(this).data("amount"),
            b = $(this).data("descr");
        $('.liqpay-form [name="amount"]').val(Math.round(a + .02 * a)), $('.liqpay-form [name="descr"]').val(b), $(".liqpay-form form").submit()
    }), $(window).width() < 1030 && $(".menu-wrap .menu").scrollbar(), $(window).resize(function() {
        $(".detail-menu").removeClass("active-menu"), $(".menu").removeClass("active"), $(".menu-wrap").removeClass("active"), $(".mobile-nav").removeClass("active"), $(".wrapper").removeClass("over-no"), setTimeout(function() {
            $(window).width() < 1030 ? ($(".menu-wrap .menu").scrollbar(), career_sider = $(".career-list").slick({
                    dots: !0,
                    infinite: !1,
                    arrows: !1,
                    speed: 500,
                    fade: !0,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    responsive: [{
                        breakpoint: 1029,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }]
                }), $(".cost-item").length > 1 && (cost_sider = $(".cost-list").slick({
                    dots: !0,
                    infinite: !1,
                    arrows: !1,
                    speed: 500,
                    fade: !0,
                    adaptiveHeight: !0,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    responsive: [{
                        breakpoint: 1029,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }]
                }))) : ($(".cost-item").length > 1 && cost_sider.slick("unslick"), career_sider.slick("unslick"), $(".menu-wrap .menu").scrollbar("destroy"))
        }, 100)
    })
}), $(window).scroll(function() {}), $(window).load(function() {
    $(window).width() > 1070 && setTimeout(function() {
        var a = '<video id="homescreen_video" preload="auto" muted="true" loop autoplay="autoplay" poster="/images/bg/poster.jpg"><source src="/video/bg_2.mp4" type="video/mp4"></video>';
        $(".video-wrap").prepend(a).addClass("active")
    }, 3e3);
    var a = $(".contacts-item").eq(0),
        b = a.data("xy-p").split(","),
        c = a.data("xy-c").split(","),
        d = a.data("hint");
    initialize(b, c, d), $(window).width() < 1030 && (career_sider = $(".career-list").slick({
        dots: !0,
        infinite: !1,
        arrows: !1,
        speed: 500,
        fade: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1029,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), $(".cost-item").length > 1 && (cost_sider = $(".cost-list").slick({
        dots: !0,
        infinite: !1,
        arrows: !1,
        speed: 500,
        fade: !0,
        adaptiveHeight: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1029,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    })))
}),
    function(a) {
        a.fn.isCorrectRequest = function() {
            this.find("input[type=text]").parents(".form-field").removeClass("correct incorrect");
            var b = a(this).find("[name = name]"),
                c = a(this).find("[name = phone]"),
                d = a(this).find("[name = email]");
            if (b.val(a.trim(b.val())), d.val(a.trim(d.val())), void 0 != b.val()) {
                if (0 === b.val().length) return b.parents(".form-field").addClass("incorrect"), b.focus(), !1;
                b.parents(".form-field").addClass("correct")
            }
            if (void 0 != c.val()) {
                if (0 === c.val().length) return c.parents(".form-field").addClass("incorrect"), c.focus(), !1;
                c.parents(".form-field").addClass("correct")
            }
            var e = a(this),
                f = new FormData(a(this)[0]),
                g = e.attr("action");
            a.ajax({
                type: "POST",
                url: g,
                data: f,
                cache: !1,
                contentType: !1,
                processData: !1,
                async: !1,
                success: function(b) {
                    a("form").find("input[type=text]").val(""), a("form textarea").val(""), a("form textarea").html(""), a("form").find("input[type=text]").parents(".form-field").removeClass("correct incorrect"), a(".thanks-link").trigger("click"), setTimeout(function() {
                        a("#thanks-modal .close-modal").trigger("click")
                    }, 3500)
                },
                error: function(a) {
                    alert("Please, try again!")
                }
            })
        }
    }(jQuery), $(document).ready(function() {
    $("#share").ayoshare({
        facebook: !0
    })
});