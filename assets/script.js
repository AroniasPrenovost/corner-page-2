console.log("hello.coffee <--");
function preventDefault(t){(t=t||window.event).preventDefault&&t.preventDefault(),t.returnValue=!1}function keydown(t){for(var e=keys.length;e--;)if(t.keyCode===keys[e])return void preventDefault(t)}function wheel(t){preventDefault(t)}function disable_scroll(){window.addEventListener&&window.addEventListener("DOMMouseScroll",wheel,!1),window.onmousewheel=document.onmousewheel=wheel,document.onkeydown=keydown}function enable_scroll(){window.removeEventListener&&window.removeEventListener("DOMMouseScroll",wheel,!1),window.onmousewheel=document.onmousewheel=document.onkeydown=null}function animate(){var t=$(".frontpanel-mh");window.pageYOffset>0&&!t.hasClass("wide")&&(disable_scroll(),t.addClass("wide").stop().animate({width:fullwidth},1e3),$(".left-txt-animation").fadeIn(2e3),txtRight.addClass("wide").stop().animate({width:"95%"},1e3),t.hasClass("wide")&&enable_scroll()),0==window.pageYOffset&&(console.clear(),disable_scroll(),t.stop().animate({width:smallwidth},1e3,function(){$(this).removeClass("wide")}),$(".left-txt-animation").fadeOut(850),txtRight.stop().animate({width:smallwidth},1e3,function(){$(this).removeClass("wide"),t.hasClass("wide")||enable_scroll()}))}console.log("main.js <--"),$(document).ready(function(){var t=$(".scroll");t.click(function(t){t.preventDefault(),$("body,html").animate({scrollTop:$(this.hash).offset().top},1e3)}),$(window).scroll(function(){var e=$(this).scrollTop();t.each(function(){$(this.hash).offset().top-20<=e&&($(this).parent().addClass("active"),$(this).parent().siblings().removeClass("active"))})})}),$(".backpanel-mh").css("display","block"),$(window).on("beforeunload",function(){$(window).scrollTop(0)});var fullwidth="100%",smallwidth="52%",txtRight=$(".intro-txt-right");setTimeout(function(){txtRight.addClass("wide").stop().animate({width:fullwidth},500),txtRight.stop().animate({width:smallwidth},500,function(){$(this).removeClass("wide")})},1),$(window).scroll($.throttle(425,animate)),$(window).scroll(function(){var t=Math.min($(window).scrollTop()-2500,15);$(".four-block").css({right:t})});var _window=$(window),footerMargin=$(".footer-top-margin"),max=8,padding=parseFloat(footerMargin.css("padding-top")),currentPadding=padding,scrollPos=_window.scrollTop();_window.scroll(function(){scrollPos<_window.scrollTop()&&currentPadding<max?footerMargin.css("padding",++currentPadding+"px 0"):scrollPos>_window.scrollTop()&&currentPadding>padding&&footerMargin.css("padding",--currentPadding+"px 0"),0==_window.scrollTop()&&footerMargin.css("padding",padding+"px 0"),scrollPos=_window.scrollTop()}),$(function(){$(window).scroll(function(){0==$(this).scrollTop()&&($("#lower_right").fadeOut(),$("#lower_left").fadeOut()),$(this).scrollTop()>850&&$(this).scrollTop()<4e3&&$("#lower_left").fadeIn(),$(this).scrollTop()>1650&&$(this).scrollTop()<4e3&&$("#lower_right").fadeIn(),$(this).scrollTop()>4e3&&($("#lower_right").fadeOut(),$("#lower_left").fadeOut()),0==$(this).scrollTop()&&setTimeout(function(){$("#middle_left").fadeIn()},800),$(this).scrollTop()>1&&$("#middle_left").fadeOut(),$(this).scrollTop()>1570?($(".intro-txt-right").hide(),$(".intro-txt-left").hide()):($(".intro-txt-right").show(),$(".intro-txt-left").show())})}),setTimeout(function(){$(".intro-txt-wrap").css("display","block")},2600),$(function(){$(".frontpanel-mh").animate({width:"110%",marginLeft:"-4%",marginTop:"-10%",height:"200vh"},0)}),setTimeout(function(){$(function(){$(".frontpanel-mh").animate({width:"50%",marginLeft:"0%",marginTop:"-10%",height:"250vh"},650)}),$("#middle_left").fadeIn()},2850),$(".backpanel-mh").css("height","250vh"),$(document).ready(function(){$("body, html").removeClass("hideMyScroll")}),setTimeout(function(){$(document).ready(function(){$("body, html").addClass("showMyScroll")})},2350),$("#mid_left").hover(function(){$("#rot3 span:nth-child(2)").animate({marginRight:"10%"},10),$("#rot3 span").animate({width:"50%"},10),$(".offset_2").css("verticalAlign","bottom"),$(".offset_1").css("verticalAlign","top"),$(".mid_left_bar").css("width","6%")},function(){$("#rot3 span:nth-child(2)").animate({marginRight:"0%"},10),$("#rot3 span").animate({width:"40%"},10),$(".offset_2").css("verticalAlign","middle"),$(".offset_1").css("verticalAlign","middle"),$(".mid_left_bar").css("width","3%")});var open_modal=document.getElementById("nav-button");$("#modal_content_1").hide(),$("#modal_content_2").hide();var toggle=function(t,e){var n=!1;return function(){return(n=!n)?t():e()}};open_modal.addEventListener("click",toggle(function(){$("#lower_right").fadeOut(),$("#lower_left").hide(),$("#nav-button").css("pointer-events","none"),disable_scroll(),$("#rot3").toggleClass("open"),$("#rot_mid").fadeOut(),$(".top-nav p").animate({"margin-left":"20%"},350),$(".bottom-nav").animate({height:"80px"},350),$(".top-nav").animate({height:"80px"},350),$(".right-bar").animate({width:"50px"},350),$("#mid_right").animate({"margin-right":".5%"},350),$("#mid_left").animate({"margin-left":"8%"},350),$(".mid_left_modal_outline").animate({width:"80%"},200),$(".modal-content-shape").css("width","80%"),$(".right_modal_overlay").animate({width:"20%"},500),setTimeout(function(){setTimeout(function(){for(var t=["#modal_t_1","#modal_t_2","#modal_t_3","#modal_t_4"],e=0;e<t.length;e++)!function(e){setTimeout(function(){var n=t[e];$(n).css("visibility","visible")},200*e)}(e)},250)},250),setTimeout(function(){$("#modal_content_1").fadeIn(),$("#modal_content_2").fadeIn(),$("#nav-button").css("pointer-events","auto")},1050)},function(){$("#nav-button").css("pointer-events","none");for(var t=["#modal_t_4","#modal_t_3","#modal_t_2","#modal_t_1"],e=0;e<t.length;e++)!function(e){setTimeout(function(){var n=t[e];$(n).css("visibility","hidden")},200*e)}(e);$("#modal_content_1").fadeOut(),$("#modal_content_2").fadeOut(),setTimeout(function(){$("#rot3").toggleClass("open"),setTimeout(function(){$("#rot_mid").fadeIn()},80),$(".right_modal_overlay").animate({width:"0%"},500),$(".mid_left_modal_outline").animate({width:"0%"},80),$(".modal-content-shape").animate({width:"0%"},80),$(".mid_left_bar").animate({width:"3%"},200),$("#mid_left").animate({"margin-left":"0%"},400),$(".top-nav p").animate({"margin-left":"3%"},350),$(".bottom-nav").animate({height:"40px"},350),$(".top-nav").animate({height:"40px"},350),$(".right-bar").animate({width:"40px"},350),$("#mid_right").animate({"margin-right":"0%"},350),enable_scroll()},600),setTimeout(function(){$("#nav-button").css("pointer-events","auto")},1050)})),$(".testbtn").on({mouseenter:function(){$(".footer-arrow h2").animate({"margin-left":"100%"},350)},mouseleave:function(){$(".footer-arrow h2").animate({"margin-left":"0%"},350)}});
function setIntervalX(e,a,n){var r=0,i=window.setInterval(function(){e(),++r===n&&window.clearInterval(i)},a)}$("#mid_right").hide(),$("#mid_left").hide();var codeBars=["bar1","bar2","bar3","bar4","bar5","bar6","bar7","bar8","bar9","bar10","bar11","bar12","bar13","bar14","bar15","bar16","bar17","bar18","bar19","bar20","bar21","bar22","bar23","bar24","bar25","bar26","bar27","bar28","bar29","bar30","bar31","bar32","bar33","bar34","bar35","bar36","bar37","bar38","bar39","bar40","bar41"],barLengths=[14,12,17,15,8,8,9,8,5,6,10,6,10,6,5,8,4,3,4,8,5,8,9,7,8,10,10,3,12,3,4,11,7,8,6,4,8,6,6,6,6],lines=["line1","line2","line3","line4","line5","line6","line7","line8","line9","line10","line11","line12","line13","line14","line15","line16","line17","line18","line19","line20","line21","line22","line23","line24","line25","done"];setIntervalX(function(){!function(){var e=document.getElementById(codeBars[0]),a=barLengths[0],n=1,r=setInterval(function(){n>=a?clearInterval(r):(n++,e.style.width=n+"%")},1);codeBars.shift(),barLengths.shift()}()},60,41),setTimeout(function(){setInterval(function(){if("done"!==lines[0]){var e=document.getElementById(lines[0]);e.outerHTML="",delete e,lines.shift()}},100)},720),setTimeout(function(){$(".right-bar").animate({width:"40px"},300),$("#mid_right").fadeIn(),$(".mid_left_bar").animate({width:"40px"},300),$("#mid_left").fadeIn(),$(".top-nav").animate({height:"40px"},300),$(".bottom-nav").animate({height:"40px"},300)},2e3);