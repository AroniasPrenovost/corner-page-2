console.log("main.js <--");

// Restores elements 
$('.backpanel-mh').css("display", "block");
// delays the page load on refresh 
$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

// Remove all elements except intro animation 
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

// 
var codeBars = [
"bar1", "bar2", "bar3", 
"bar4", "bar5", "bar6", 
"bar7", "bar8", "bar9", 
"bar10", "bar11", "bar12", 
"bar13", "bar14", "bar15", 
"bar16", "bar17", "bar18", 
"bar19", "bar20", "bar21", 
"bar22", "bar23", "bar24", 
"bar25", "bar26", "bar27", 
"bar28", "bar29", "bar30", 
"bar31", "bar32", "bar33", 
"bar34", "bar35", "bar36", 
"bar37", "bar38", "bar39", 
"bar40", "bar41"
];

var barLengths = [
5, 6, 6, 12, 
5, 5, 6, 8, 
5, 6, 10, 6, 
10, 6, 5, 8, 
4, 7, 4, 8, 
5, 8, 9, 7, 
8, 10, 10, 3, 
12, 3, 4, 11, 
7, 8, 6, 4, 
8, 6, 6, 6, 
6
];

var lines = [
"line1", "line2", "line3", "line4",
"line5", "line6", "line7", "line8",
"line9", "line10", "line11", "line12",
"line13", "line14", "line15", "line16",
"line17", "line18", "line19", "line20",
"line21", "line22", "line23", "line24",
"line25", "done"
];

function setIntervalX(callback, delay, repetitions) {
    var x = 0;
    var intervalID = window.setInterval(function () {

        callback();

        if (++x === repetitions) {
            window.clearInterval(intervalID);
        }
    }, delay);
}

setIntervalX(function () {
    function move() {
        var element = document.getElementById(codeBars[0]);
        var barWidth = barLengths[0];
        var width = 1;
        var id = setInterval(frame, 1);
        function frame() {
            if (width >= barWidth ) {
                clearInterval(id);
            } else {
                width++;
                element.style.width = width + '%';
            }
        }
        codeBars.shift();
        barLengths.shift();
    }
    move();

}, 60, 41); // runs every 60 milliseconds, 41 times

// removes div elements
setTimeout(function() {     
    setInterval(function() {
        if (lines[0] === "done") {
            return;
        }
        var element1 = document.getElementById(lines[0]);
        element1.outerHTML = "";
        delete element1;
        lines.shift();
}, 100); // runs every 50 milliseconds
}, 720);  // delays start time

/* 
var s = document.getElementById('code-loader').style;
s.opacity = 1;
(function fade(){
(s.opacity-=.09)<0?s.display="none":setTimeout(fade,500)
}
)();
// removes code-container 
setTimeout(function() {
var element = document.getElementById("code-container");
element.outerHTML = "";
delete element;
}, 2850);
*/
//

// On scroll animation
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
    $('.post_animation_reveal').css('display', 'block');
    $('.ani_bar_wrap').css('display', 'block');
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

// Fade in navigation items 
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

// Initialize vertical scrollbar 
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
    $('.bottom_slide').css('marginLeft', '0px');
    $('.modal-body').css('width', '0%');
// generate modal elements 
$('.modal_content').css('display', 'block');
setTimeout(function(){
    var modal_elements = ['#modal_t_1', '#modal_t_2', '#modal_t_3', '#modal_t_4'];
    for (var n = 0; n < modal_elements.length; n++){
        (function(n){
            setTimeout(function(){
                var elem = modal_elements[n];
                $(elem).css('visibility', 'visible');
            }, 200 * n);
        }(n));
    }
}, 250);

setTimeout(function(){
    $('#modal_t_5').css('visibility', 'visible');
    $('#modal_t_6, #modal_t_7').css('visibility', 'visible');
}, 200);

$('.mid_left_bar').animate({height: '70vh'}, 500); // animates bar down as nav elements fade down 
$('.backpanel-mh').css('display', 'block');
$('.backpanel-mh').css('marginLeft', '0%');
modal.style.backgroundColor = 'white';
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
        modal.style.display = "block";
        modal.style.backgroundColor = '#ecf0f1';     
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
// fade out nav elements
$('.bottom_slide').animate({marginLeft: '-400px', top: '0'}, 250);
var modal_elements = ['#modal_t_4', '#modal_t_3', '#modal_t_2', '#modal_t_1'];
for (var n = 0; n < modal_elements.length; n++){
    (function(n){
        setTimeout(function(){
            var elem = modal_elements[n];
            $(elem).css("visibility", "hidden");
        }, 125 * n);
    }(n));
}

setTimeout(function(){
    $('#modal_t_5').css('visibility', 'visible');
    $('#modal_t_6, #modal_t_7').css('visibility', 'hidden');
}, 200);

c_panel.style.marginTop = '0%'; // removes edge case overflow
$('.ani_bar_wrap').css('margin-top', '20%'); // weird edge case on reload 
$('.bottom_overlay').css("display", 'none');
setTimeout(function(){ // restore scroll bar and remove horizontal scrollbar  
    $('body').css('overflow-x', 'hidden');
    document.body.style.overflow = 'visible'; 
},490);
$('.load_area').css('display', 'none');
close_modal.style.display = 'block';
$('.close_modal').css('display', 'none');
$('.modal-body').animate({paddingLeft: '0%'}, 500);
$('.modal').animate({backgroundColor: 'white'}, 500);
$('.modal').css("background-color", 'white');
$('.modal_content').fadeOut(); //.animate({marginRight: '0%'}, 500);
$('.container-fluid').animate({paddingTop: '0%', paddingLeft: '0%'}, 500);
$('.nav.navbar-nav').animate({marginRight: '1%'}, 500);
$('.navbar-header').animate({paddingLeft: '15px'}, 500);
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
        modal.style.display = 'none';
        icon.style.display = 'block';
    }
}