console.log("main.js <--");

// restores elements 
$('.backpanel-mh').css("display", "block");
// delays the page load on refresh 
$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

// remove all elements except intro animation 
$(window).load(function(){
    $('body, html').addClass('hideMyScroll');
    $('.mid_right_bar').css("display", "none");
    $('.load_area').css("display", "none");
    $('.navbar').hide();
    $('.navbar-default').hide();
    $('.navbar-fixed-top').hide();
    $('.navbar-header').hide();  
    $('.navbar-nav').hide();
    $('.post_animation_reveal').css("display", "none");
});

// on scroll animation
var fullwidth = '100%';
var smallwidth = '52%';
var anibar = $('.ani_bar_right');

setTimeout(function(){
    anibar.addClass("wide").stop().animate({width: '100%'}, 500);
    anibar.stop().animate({width: smallwidth}, 500, function() {
        $(this).removeClass('wide');
    });
}, 1); 

$(window).scroll( $.throttle( 425, animate ) )
function animate() {
    var frontpanel = $('.frontpanel-mh');

    var intromessage = $('.mm');
    if (window.pageYOffset > 150 && !frontpanel.hasClass('wide')) {
        frontpanel.addClass("wide").stop().animate({width: fullwidth}, 1000);
        $('.intro_animation_2').fadeIn(2000); 
        $(document).scroll(function () {
            var t = $(this).scrollTop();   
            if (t > 1050) {
                $('.ani_bar_right, .ani_bar_left').fadeOut(500); 
            } else {
                $('.ani_bar_right, .ani_bar_left').fadeIn(500); 
            }
        });
        anibar.addClass("wide").stop().animate({width: '95%'}, 1000);
    }
    if (window.pageYOffset == 0 ) {
        console.clear();
        frontpanel.stop().animate({width: smallwidth}, 1000, function() {
            $(this).removeClass('wide');
        });
        $('.intro_animation_2').fadeOut(1000); 
        anibar.stop().animate({width: smallwidth}, 1000, function() {
            $(this).removeClass('wide');
        });
    }        
}

$(document).scroll(function () {
    var x = $(this).scrollTop();   
    if (x > 3000 || x < 200) {
        $('#lower_right').hide();
        $('#lower_left').hide();
    }  else {
        $('#lower_right').fadeIn();
        $('#lower_left').fadeIn();
    }

    if (x < 1000) {
        $('.bottom_overlay').css("display", 'none');
    }  else {
        $('.bottom_overlay').css("display", 'block');
    }
});

setTimeout(function(){ 
    $('.post_animation_reveal').css("display", "block");
},2600); // post intro animation transition

// intro full screen 
$(function() {
    $('.frontpanel-mh').animate({
        width: '110%',
        marginLeft: '-4%',
        marginTop: '-10%',
        height: '200vh'
    }, 0);
});

setTimeout(function(){ 
    $(function() {
        $('.frontpanel-mh').animate({
            opacity: '.8',
            width: '50%',
            marginLeft: '0%',
            marginTop: '-10%',
            height: '250vh'
}, 650); // left masthead slide in
    });
}, 2850); // length of full page intro


setTimeout(function(){ 
    $('.mid_right_bar').css("display", "block");
}, 2750);

// 2nd animation elements to .frontpanel-mh 
$('.backpanel-mh').css("height", "250vh"); 

// fade in navigation items 
setTimeout(function(){ 
    $('.navbar').fadeIn();
    $('#bottom_banner').fadeIn();  
    $('.navbar-header').fadeIn();  
    $('#mid_left').fadeIn().css("display", "block");     
    $('#lower_left').fadeIn().css("display", "block");   
    $('#lower_right').fadeIn().css("display", "block"); 
    $('#mid_right').fadeIn().css("display", "block");  
    $('.navbar-nav').fadeIn();
},2750);

// initialize vertical scrollbar 
$(document).ready(function(){
    $('body, html').removeClass('hideMyScroll');
});

setTimeout(function(){ 
    $(document).ready(function(){  
        $('body, html').addClass('showMyScroll');
    });
}, 2350);

// Menu hover animation (previously ('#icon')
$('#mid_left').hover(function(){   
    document.getElementById("rot3").innerHTML = "<span style=\"margin-left:-4px; font-size:1.3em\">__</span><br><span style=\"margin-right:-6px; font-size:1.3em\">__</span><br><span style=\"margin-left:-4px; font-size:1.3em\">__</span>";
    $('.mid_left_bar').css('width', '4%');
    $('.offset_2').css("verticalAlign", 'bottom'); 
    $('.offset_1').css("verticalAlign", 'top'); 
}, function(){
    $('.mid_left_bar').css('width', '0%');
    $('.offset_2').css("verticalAlign", 'middle'); 
    $('.offset_1').css("verticalAlign", 'middle'); 
    document.getElementById("rot3").innerHTML = "<span style=\"margin-right:0px; font-size:1.3em\">__</span><br><span style=\"margin-left:0px; font-size:1.3em\">__</span><br><span style=\"margin-right:0px; font-size:1.3em\">__</span>";
});

var modal = document.getElementById('myModal');
var icon = document.getElementById("icon");
var b_banner = document.getElementById('bottom_banner');
var c_panel = document.getElementById('content-panel');
var close_modal = document.getElementsByClassName("close")[0];

// eliminates overlay bug in modal 
$('.modal-body, .modal_content, .strike, .footer_arrow, .modal_cta, .arrow_text').css({
    pointerEvents: 'auto'
});
modal.style.pointerEvents = "none";

// open modal 
icon.onclick = function() {

// generate modal elements 
var modal_elements = ['modal_t_1', 'modal_t_2', 'modal_t_3', 'modal_t_4', 'modal_t_5', 'modal_t_6', 'modal_t_7'];
for (var n = 0; n < modal_elements.length; n++){
    (function(n){
        setTimeout(function(){
            var elem = modal_elements[n];
            document.getElementById(elem).style.visibility = 'visible';
        }, 500 * n);
    }(n));
}

$('.mid_left_bar').animate({height: '70vh'}, 500); // animates bar down as nav elements fade down 
$('.backpanel-mh').css("display", "block");
$('.backpanel-mh').css("marginLeft", "0%");
modal.style.backgroundColor = "white";
$('.modal').css("background-color", 'white', 'height', '20%');
$('.bottom_overlay').css("display", 'none');
setTimeout(function(){
    $('.close_modal').css("display", "none");
    $('#lower_right, #lower_left').fadeOut();
    $('#content-panel').animate({width: '94%', marginLeft: '3%'}, 1000);
    $('#content-panel').animate({display: 'hidden'}, 1000);
    $('.container-fluid').animate({paddingTop: '6%', paddingLeft: '6%'}, 500);
    $('.nav.navbar-nav').animate({marginRight: '6%'}, 500);
    $('#bottom_banner').animate({minHeight: '60px'}, 500);
    $('#lower_left').animate({fontSize: '0px'}, 0);
    icon.style.display = "none";

    setTimeout(function(){
        $('.modal-body').animate({width: '84%', paddingLeft: '10%'}, 250);
// $('.modal_content').fadeIn();
modal.style.display = "block";
modal.style.backgroundColor = '#ecf0f1';
//  modal.style.backgroundImage = "url('images/bag2.jpg')";        
c_panel.style.display = "none";
modal.style.height = "90vh";
document.body.style.overflow = 'hidden';   
}, 2);

    setTimeout(function(){
        close_modal.style.display = "block";
        $('.close_modal').css("display", "block");
}, 20); // allow elements to fade out behind the scenes 
}, 0); // modal load delay
}

// close the modal 
close_modal.onclick = function() {
c_panel.style.marginTop = "0%"; // removes edge case overflow
$('.ani_bar_wrap').css("margin-top", "20%"); // weird edge case on reload 
$('.bottom_overlay').css("display", "none");
setTimeout(function(){ // restore scroll bar and remove horizontal scrollbar  
    $('body').css("overflow-x", "hidden");
    document.body.style.overflow = 'visible'; 
},490);
$('.load_area').css("display", "none");
close_modal.style.display = "block";
$('.close_modal, modal_content').css("display", "none");
$('.modal-body').animate({width: '0%', paddingLeft: '0%'}, 500);
$('.modal').animate({backgroundColor: 'white'}, 500);
$('.modal').css("background-color", 'white');
$('.modal_content').fadeOut(); //.animate({marginRight: '0%'}, 500);
$('.container-fluid').animate({paddingTop: '0%', paddingLeft: '0%'}, 500);
$('.nav.navbar-nav').animate({marginRight: '0%'}, 500);
$('#content-panel').animate({width: '94%', marginLeft: '3%'}, 0);
$('#content-panel').fadeIn();
$('#bottom_banner').animate({minHeight: '40px'}, 550);

setTimeout(function(){
    $('.mid_left_bar').css("height", '95vh');
    $('#lower_left, #lower_right').fadeIn();
    $('#lower_left').animate({fontSize: '14px'}, 0);
    icon.style.display = "block";
}, 950);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        icon.style.display = "block";
    }
}