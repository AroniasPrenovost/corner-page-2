console.log("hello.coffee <--");
function setIntervalX(e,a,n){var t=0,i=window.setInterval(function(){e(),++t===n&&window.clearInterval(i)},a)}function animate(){var e=$(".frontpanel-mh");$(".mm");window.pageYOffset>150&&!e.hasClass("wide")&&(e.addClass("wide").stop().animate({width:fullwidth},1e3),$(".intro_animation_2").fadeIn(2e3),$(document).scroll(function(){$(this).scrollTop()>1050?$(".ani_bar_right, .ani_bar_left").fadeOut(500):$(".ani_bar_right, .ani_bar_left").fadeIn(500)}),anibar.addClass("wide").stop().animate({width:"95%"},1e3)),0==window.pageYOffset&&(console.clear(),e.stop().animate({width:smallwidth},1e3,function(){$(this).removeClass("wide")}),$(".intro_animation_2").fadeOut(1e3),anibar.stop().animate({width:smallwidth},1e3,function(){$(this).removeClass("wide")}))}console.log("main.js <--"),$(".backpanel-mh").css("display","block"),$(window).on("beforeunload",function(){$(window).scrollTop(0)}),$(window).load(function(){$("body, html").addClass("hideMyScroll"),$(".mid_right_bar").css("display","none"),$(".load_area").css("display","none"),$(".navbar").hide(),$(".navbar-default").hide(),$(".navbar-fixed-top").hide(),$(".navbar-header").hide(),$(".navbar-nav").hide(),$(".post_animation_reveal").css("display","none")});var codeBars=["bar1","bar2","bar3","bar4","bar5","bar6","bar7","bar8","bar9","bar10","bar11","bar12","bar13","bar14","bar15","bar16","bar17","bar18","bar19","bar20","bar21","bar22","bar23","bar24","bar25","bar26","bar27","bar28","bar29","bar30","bar31","bar32","bar33","bar34","bar35","bar36","bar37","bar38","bar39","bar40","bar41"],barLengths=[5,6,6,12,5,5,6,8,5,6,10,6,10,6,5,8,4,7,4,8,5,8,9,7,8,10,10,3,12,3,4,11,7,8,6,4,8,6,6,6,6],lines=["line1","line2","line3","line4","line5","line6","line7","line8","line9","line10","line11","line12","line13","line14","line15","line16","line17","line18","line19","line20","line21","line22","line23","line24","line25","done"];setIntervalX(function(){!function(){var e=document.getElementById(codeBars[0]),a=barLengths[0],n=1,t=setInterval(function(){n>=a?clearInterval(t):(n++,e.style.width=n+"%")},1);codeBars.shift(),barLengths.shift()}()},60,41),setTimeout(function(){setInterval(function(){if("done"!==lines[0]){var e=document.getElementById(lines[0]);e.outerHTML="",delete e,lines.shift()}},100)},720);var fullwidth="100%",smallwidth="52%",anibar=$(".ani_bar_right");setTimeout(function(){anibar.addClass("wide").stop().animate({width:"100%"},500),anibar.stop().animate({width:smallwidth},500,function(){$(this).removeClass("wide")})},1),$(window).scroll($.throttle(425,animate)),$(document).scroll(function(){var e=$(this).scrollTop();e>3e3||e<200?($("#lower_right").hide(),$("#lower_left").hide()):($("#lower_right").fadeIn(),$("#lower_left").fadeIn()),e<1e3?$(".bottom_overlay").css("display","none"):$(".bottom_overlay").css("display","block")}),setTimeout(function(){$(".post_animation_reveal").css("display","block"),$(".ani_bar_wrap").css("display","block")},2600),$(function(){$(".frontpanel-mh").animate({width:"110%",marginLeft:"-4%",marginTop:"-10%",height:"200vh"},0)}),setTimeout(function(){$(function(){$(".frontpanel-mh").animate({opacity:".8",width:"50%",marginLeft:"0%",marginTop:"-10%",height:"250vh"},650)})},2850),setTimeout(function(){$(".mid_right_bar").css("display","block")},2750),$(".backpanel-mh").css("height","250vh"),setTimeout(function(){$(".navbar").fadeIn(),$("#bottom_banner").fadeIn(),$(".navbar-header").fadeIn(),$("#mid_left").fadeIn().css("display","block"),$("#lower_left").fadeIn().css("display","block"),$("#lower_right").fadeIn().css("display","block"),$("#mid_right").fadeIn().css("display","block"),$(".navbar-nav").fadeIn()},2750),$(document).ready(function(){$("body, html").removeClass("hideMyScroll")}),setTimeout(function(){$(document).ready(function(){$("body, html").addClass("showMyScroll")})},2350),$("#mid_left").hover(function(){document.getElementById("rot3").innerHTML='<span style="margin-left:-4px; font-size:1.3em">__</span><br><span style="margin-right:-6px; font-size:1.3em">__</span><br><span style="margin-left:-4px; font-size:1.3em">__</span>',$(".mid_left_bar").css("width","4%"),$(".offset_2").css("verticalAlign","bottom"),$(".offset_1").css("verticalAlign","top")},function(){$(".mid_left_bar").css("width","0%"),$(".offset_2").css("verticalAlign","middle"),$(".offset_1").css("verticalAlign","middle"),document.getElementById("rot3").innerHTML='<span style="margin-right:0px; font-size:1.3em">__</span><br><span style="margin-left:0px; font-size:1.3em">__</span><br><span style="margin-right:0px; font-size:1.3em">__</span>'});var modal=document.getElementById("myModal"),icon=document.getElementById("icon"),b_banner=document.getElementById("bottom_banner"),c_panel=document.getElementById("content-panel"),close_modal=document.getElementsByClassName("close")[0];$(".modal-body, .modal_content, .strike, .footer_arrow, .modal_cta, .arrow_text").css({pointerEvents:"auto"}),modal.style.pointerEvents="none",icon.onclick=function(){$(".bottom_slide").css("marginLeft","0px"),$(".modal-body").css("width","0%"),$(".modal_content").css("display","block"),setTimeout(function(){for(var e=["#modal_t_1","#modal_t_2","#modal_t_3","#modal_t_4"],a=0;a<e.length;a++)!function(a){setTimeout(function(){var n=e[a];$(n).css("visibility","visible")},200*a)}(a)},250),setTimeout(function(){$("#modal_t_5").css("visibility","visible"),$("#modal_t_6, #modal_t_7").css("visibility","visible")},200),$(".mid_left_bar").animate({height:"70vh"},500),$(".backpanel-mh").css("display","block"),$(".backpanel-mh").css("marginLeft","0%"),modal.style.backgroundColor="white",$(".modal").css("background-color","white","height","20%"),$(".bottom_overlay").css("display","none"),setTimeout(function(){$(".close_modal").css("display","none"),$("#lower_right, #lower_left").fadeOut(),$("#content-panel").animate({width:"94%",marginLeft:"3%"},1e3),$("#content-panel").animate({display:"hidden"},1e3),$(".container-fluid").animate({paddingTop:"6%",paddingLeft:"6%"},500),$(".nav.navbar-nav").animate({marginRight:"6%"},500),$("#bottom_banner").animate({minHeight:"60px"},500),$("#lower_left").animate({fontSize:"0px"},0),icon.style.display="none",setTimeout(function(){$(".modal-body").animate({width:"84%",paddingLeft:"10%"},250),modal.style.display="block",modal.style.backgroundColor="#ecf0f1",c_panel.style.display="none",modal.style.height="90vh",document.body.style.overflow="hidden"},2),setTimeout(function(){close_modal.style.display="block",$(".close_modal").css("display","block")},20)},0)},close_modal.onclick=function(){$(".bottom_slide").animate({marginLeft:"-400px",top:"0"},250);for(var e=["#modal_t_4","#modal_t_3","#modal_t_2","#modal_t_1"],a=0;a<e.length;a++)!function(a){setTimeout(function(){var n=e[a];$(n).css("visibility","hidden")},125*a)}(a);setTimeout(function(){$("#modal_t_5").css("visibility","visible"),$("#modal_t_6, #modal_t_7").css("visibility","hidden")},200),c_panel.style.marginTop="0%",$(".ani_bar_wrap").css("margin-top","20%"),$(".bottom_overlay").css("display","none"),setTimeout(function(){$("body").css("overflow-x","hidden"),document.body.style.overflow="visible"},490),$(".load_area").css("display","none"),close_modal.style.display="block",$(".close_modal").css("display","none"),$(".modal-body").animate({paddingLeft:"0%"},500),$(".modal").animate({backgroundColor:"white"},500),$(".modal").css("background-color","white"),$(".modal_content").fadeOut(),$(".container-fluid").animate({paddingTop:"0%",paddingLeft:"0%"},500),$(".nav.navbar-nav").animate({marginRight:"1%"},500),$(".navbar-header").animate({paddingLeft:"15px"},500),$("#content-panel").animate({width:"94%",marginLeft:"3%"},0),$("#content-panel").fadeIn(),$("#bottom_banner").animate({minHeight:"40px"},550),setTimeout(function(){$(".mid_left_bar").css("height","95vh"),$("#lower_left, #lower_right").fadeIn(),$("#lower_left").animate({fontSize:"14px"},0),icon.style.display="block"},950)},window.onclick=function(e){e.target==modal&&(modal.style.display="none",icon.style.display="block")};