
// remove all elements except intro animation 
$(window).load(function(){
    $('body, html').addClass('hideMyScroll');
    $('.navbar').hide();
    $('.navbar-default').hide();
    $('.navbar-fixed-top').hide();
    $('#bottom_banner').hide();
    $('#lower_left').hide();
    $('#lower_right').hide();
    $('#mid_left').hide();
    $('#mid_right').hide();
    $('.post_animation_reveal').css("display", "none");
});

// reveal navbar and display remaining body content 
setTimeout(function(){ 
    $('#content-panel').css("marginTop", "4%"); 
},2700);
setTimeout(function(){ 
    $('.post_animation_reveal').css("display", "block");
},3000);

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
            marginTop: '-5%',
            height: '110vh'
        }, 1000);
    });
}, 2500); // length of full page intro

// fade in navigation items 
setTimeout(function(){ 
    $('.navbar').fadeIn();
    $('#bottom_banner').fadeIn();
    $('#mid_left').fadeIn();
    $('#mid_right').fadeIn();
    $('#lower_left').fadeIn();
    $('#lower_right').fadeIn();
},2500);


// replace vertical scrollbar 
$(document).ready(function(){
    $('body, html').removeClass('hideMyScroll');
});
setTimeout(function(){ 
    $(document).ready(function(){
        $('body, html').addClass('showMyScroll');
    });
},3200);


// slide in middle services section on scroll 
jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 1400) {
        jQuery('.four_container').stop().animate({ right: '0px' }, 80);
    } else {
        jQuery('.four_container').stop().animate({ right: '-300px' }, 100);
    }
});

// reveal lower left as you scroll down 
$(document).scroll(function () {
    var y = $(this).scrollTop();   
    if (y > 200) {
        $('#lower_left').fadeIn();
    } else {
        $('#lower_left').fadeOut();
    }
});

// reveal lower right as you scroll down 
$(document).scroll(function () {
    var y = $(this).scrollTop();   
    if (y > 100) {
        $('#lower_right').fadeIn();
    } else {
        $('#lower_right').fadeOut();
    }
});

// Change icon interior on hover 
document.getElementById("icon").onmouseover = function() {
    document.getElementById("rot3").innerHTML = "____<br>_____<br>___";
}

document.getElementById("icon").onmouseleave = function() {
    document.getElementById("rot3").innerHTML = "___<br>___<br>___";
}

// Menu hover animation
$('#icon').hover(function(){
    $('#content-panel').animate({marginLeft: '10%', width:'86%'}, 500)
}, function(){
    $('#content-panel').animate({width: '94%', marginLeft: '3%'}, 500)
});

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var icon = document.getElementById("icon");

var b_banner = document.getElementById('bottom_banner');

var c_banner = document.getElementById('content-panel');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
icon.onclick = function() {
    $('#lower_right').fadeOut();
    $('#lower_left').fadeOut();
    $('#content-panel').animate({width: '94%', marginLeft: '3%'}, 500);
    $('#content-panel').animate({display: 'hidden'}, 500);
    $('.container-fluid').animate({paddingTop: '6%', paddingLeft: '6%'}, 500);
    $('.nav.navbar-nav').animate({marginRight: '6%'}, 500);
    $('#bottom_banner').animate({minHeight: '60px'}, 500);
    $('#lower_left').animate({fontSize: '0px'}, 0);
    icon.style.display = "none";
    setTimeout(function(){
        $('.modal-body').animate({width: '94%'}, 350); 
        modal.style.display = "block";
        c_banner.style.display = "none";
        modal.style.height = "90vh";
document.body.style.overflow = 'hidden'; // hide scroll bar 
}, 20);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    $('.modal-body').animate({width: '40%'}, 500); 
    $('.container-fluid').animate({paddingTop: '0%', paddingLeft: '0%'}, 500);
    $('.nav.navbar-nav').animate({marginRight: '0%'}, 500);
    $('#content-panel').animate({width: '94%', marginLeft: '3%'}, 0);
    $('#content-panel').fadeIn();
    icon.style.display = "block";

    $('#bottom_banner').animate({minHeight: '40px'}, 500);
    $('#lower_left').fadeIn();
    $('#lower_left').animate({fontSize: '14px'}, 0);
    $('#lower_right').fadeIn();

document.body.style.overflow = 'visible'; // restore scroll bar 
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        icon.style.display = "block";
    }
}
