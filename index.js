// restores elements 
$('.backpanel-mh').css("display", "block");
$('.bottom_overlay').css("display", "block");

// delays the page load on refresh 
$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

// remove all elements except intro animation 
$(window).load(function(){
    $('body, html').addClass('hideMyScroll');
    $('.load_area').css("display", "none");
    $('.navbar').hide();
    $('.navbar-default').hide();
    $('.navbar-fixed-top').hide();
    $('.navbar-header').hide();  
    $('.navbar-nav').hide();
    $('.post_animation_reveal').css("display", "none");
});

// load in message 
$('.load_area').css("display", "none");
setTimeout(function(){ 
    $('.load_area').fadeIn().css("display", "block");
},3965);

setTimeout(function(){ 
    $('.post_animation_reveal').css("display", "block");
},2600); // post intro animation transition

// intro full screen 
$(function() {
    $('.frontpanel-mh').animate({
        width: '110%',
        marginLeft: '-4%',
        marginTop: '-10%',
        height: '110vh'
    }, 0);
});

setTimeout(function(){ 
    $(function() {
        $('.frontpanel-mh').animate({
            width: '50%',
            marginLeft: '0%',
            marginTop: '-10%',
            height: '110vh'
}, 550); // left masthead slide in
    });

}, 2500); // length of full page intro

//____________________________________________________________________________
// scroll triggers 100% scroll

/*
$(function() {
$('.frontpanel-mh').animate({
width: '110%',
marginLeft: '-4%',
marginTop: '-10%',
height: '110vh'
}, 0);
});
*/


$(document).scroll(function () {

    var s = $(this).scrollTop();
// console.log(typeof s) to double checks value type
var str_Number = s.toString();
// convert to string for sanity's sake
//  console.log(str_Number);
if (str_Number == 8) {
//  console.log(s + " is above 10.")
$('.frontpanel-mh').animate({width: '50%'}, 550);
// break;
}

if (str_Number == 12) {
//  console.log(s + " is above 10.")
$('.frontpanel-mh').animate({width: '100%'}, 550);
// break;
}
});

// scroll pushes intro message to the right 

/// message in left bar scrolls in (because it's fixed to .frontpanel-mh)

//____________________________________________________________________________

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
},2500);

// initialize vertical scrollbar 
$(document).ready(function(){
    $('body, html').removeClass('hideMyScroll');
});

setTimeout(function(){ 
    $(document).ready(function(){  
        $('body, html').addClass('showMyScroll');
    });
}, 2350);

// hide left icon prior to footer reveal
$(document).scroll(function () {
    var x = $(this).scrollTop();   
    if (x > 3000 || x < 200) {
        $('#lower_right').fadeOut();
        $('#lower_left').fadeOut();
    }  else {
        $('#lower_right').fadeIn();
        $('#lower_left').fadeIn();
    }
});

// reveal bottom overlay (footer) 
$('.bottom_overlay').hide();
$(document).scroll(function () {
    var z = $(this).scrollTop();   
    if (z > 3200) {
        $('.bottom_overlay').show();
    }  else {
        $('.bottom_overlay').hide();
    }
});

// Menu hover animation
$('#icon').hover(function(){   
    document.getElementById("rot3").innerHTML = "<span style=\"margin-left:-4px; font-size:1.3em\">__</span><br><span style=\"margin-right:-6px; font-size:1.3em\">__</span><br><span style=\"margin-left:-4px; font-size:1.3em\">__</span>";
    $('.mid_left_bar').animate({width:'4%'}, 220);
    $('.offset_2').css("verticalAlign", 'bottom'); 
    $('.offset_1').css("verticalAlign", 'top'); 

}, function(){
    $('.mid_left_bar').animate({width:'0%'}, 220);
    $('.offset_2').css("verticalAlign", 'middle'); 
    $('.offset_1').css("verticalAlign", 'middle'); 
    document.getElementById("rot3").innerHTML = "<span style=\"margin-right:0px; font-size:1.3em\">__</span><br><span style=\"margin-left:0px; font-size:1.3em\">__</span><br><span style=\"margin-right:0px; font-size:1.3em\">__</span>";
});

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var icon = document.getElementById("icon");

var b_banner = document.getElementById('bottom_banner');

var c_panel = document.getElementById('content-panel');

// Get the <span> element that closes the modal
var close_modal = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
icon.onclick = function() {
    modal.style.backgroundColor = "white";
    $('.modal').css("background-color", 'white', 'height', '20%');
    $('.bottom_overlay').css("display", 'none');
    setTimeout(function(){
        $('.close_modal').css("display", "none");
        $('#lower_right').fadeOut();
        $('#lower_left').fadeOut();
        $('#content-panel').animate({width: '94%', marginLeft: '3%'}, 1000);
        $('#content-panel').animate({display: 'hidden'}, 1000);
        $('.container-fluid').animate({paddingTop: '6%', paddingLeft: '6%'}, 500);
        $('.nav.navbar-nav').animate({marginRight: '6%'}, 500);
        $('#bottom_banner').animate({minHeight: '60px'}, 500);
        $('#lower_left').animate({fontSize: '0px'}, 0);
        icon.style.display = "none";
        close_modal.style.display = "none";
        setTimeout(function(){
            $('.modal-body').animate({width: '94%', paddingLeft: '10%'}, 350);
            $('.modal_content').fadeIn();
            modal.style.display = "block";
            modal.style.backgroundColor = "grey";
            c_panel.style.display = "none";
            modal.style.height = "90vh";
            document.body.style.overflow = 'hidden';   
        }, 20);

        setTimeout(function(){
            close_modal.style.display = "block";
            $('.close_modal').css("display", "block");
}, 4500); // allow elements to fade out behind the scenes 

}, 100); // modal load delay
}

// When the user clicks on <close_modal> (x), close the modal
close_modal.onclick = function() {

    setTimeout(function(){
// restore scroll bar and remove horizontal scrollbar  
$('body').css("overflow-x", "hidden");
document.body.style.overflow = 'visible'; 
},490);
    $('.load_area').css("display", "none");
    close_modal.style.display = "block";
    $('.close_modal').css("display", "none");
    $('.modal_content').css("display", "none");
    $('.modal-body').animate({width: '0%', paddingLeft: '0%'}, 500);
    $('.modal').animate({backgroundColor: 'white'}, 500);
    $('.modal').css("background-color", 'white');
$('.modal_content').fadeOut(); //.animate({marginRight: '0%'}, 500);
$('.container-fluid').animate({paddingTop: '0%', paddingLeft: '0%'}, 500);
$('.nav.navbar-nav').animate({marginRight: '0%'}, 500);
$('#content-panel').animate({width: '94%', marginLeft: '3%'}, 0);
$('#content-panel').fadeIn();
icon.style.display = "block";
$('#bottom_banner').animate({minHeight: '40px'}, 550);
$('#lower_left').fadeIn();
$('#lower_left').animate({fontSize: '14px'}, 0);
$('#lower_right').fadeIn();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        icon.style.display = "block";
    }
}
