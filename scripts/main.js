console.log("main.js <--");

// constants 
var modal_elements = ['#modal_t_1', '#modal_t_2', '#modal_t_3', '#modal_t_4'];
var modal_elementss = ['#modal_t_4', '#modal_t_3', '#modal_t_2', '#modal_t_1'];

/* smooth scroll */
$(document).ready(function() {

  var scrollLink = $('.scroll');

// Smooth scrolling
scrollLink.click(function(e) {
  e.preventDefault();
  $('body,html').animate({
    scrollTop: $(this.hash).offset().top
  }, 1000 );
});

// Active link switching
$(window).scroll(function() {
  var scrollbarLocation = $(this).scrollTop();

  scrollLink.each(function() {

    var sectionOffset = $(this.hash).offset().top - 20;
    if ( sectionOffset <= scrollbarLocation ) {
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
    }
  })

})

})
/* end smooth scroll */

// Restores elements 
$('.backpanel-mh').css("display", "block");

// delays the page load on refresh 
$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});

// intro masthead animation
var fullwidth = '100%';
var smallwidth = '50%';
var txtRight = $('.intro-txt-right');

setTimeout(function(){
  txtRight.addClass("wide").stop().animate({width: fullwidth}, 500);
  txtRight.stop().animate({width: smallwidth}, 500, function() {
    $(this).removeClass('wide');
  });
}, 1); 

// intro animation scrolling glitch prevention
function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
    e.preventDefault();
  e.returnValue = false;  
}

function keydown(e) {
  for (var i = keys.length; i--;) {
    if (e.keyCode === keys[i]) {
      preventDefault(e);
      return;
    }
  }
}

function wheel(e) {
  preventDefault(e);
}

function disable_scroll() {
  if (window.addEventListener) {
    window.addEventListener('DOMMouseScroll', wheel, false);
  }
  window.onmousewheel = document.onmousewheel = wheel;
  document.onkeydown = keydown;
}

function enable_scroll() {
  if (window.removeEventListener) {
    window.removeEventListener('DOMMouseScroll', wheel, false);
  }
  window.onmousewheel = document.onmousewheel = document.onkeydown = null;  
}// end intro animation scrolling glitch prevention

$(window).scroll( $.throttle( 425, animate ) )
function animate() {

  var frontpanel = $('.frontpanel-mh');
  if (window.pageYOffset > 0 && !frontpanel.hasClass('wide')) {
    disable_scroll();
    frontpanel.addClass("wide").stop().animate({width: fullwidth}, 1000);
    $('.left-txt-animation').fadeIn(2000); 
    txtRight.addClass("wide").stop().animate({width: '95%'}, 1000);

    if (frontpanel.hasClass('wide')) {
      enable_scroll();
    }
  }

  if (window.pageYOffset == 0) {
    console.clear();
    disable_scroll();
    frontpanel.stop().animate({width: smallwidth}, 1000, function() {
      $(this).removeClass('wide');
    });

    $('.left-txt-animation').fadeOut(850); 
    txtRight.stop().animate({width: smallwidth}, 1000, function() {
      $(this).removeClass('wide');
      if (!frontpanel.hasClass('wide')) {
        enable_scroll();
      }
    });

  }   
}

// four-box div animation 
$(window).scroll(function(){
  var position = Math.min($(window).scrollTop()-2500, 15)
  $('.four-block').css({ right: position });
});

// footer margin-top animation 
var _window = $(window),
footerMargin = $('.footer-top-margin'),
max = 8,
padding = parseFloat(footerMargin.css('padding-top')),
currentPadding = padding,
scrollPos = _window.scrollTop();

_window.scroll(function() {  

  if (scrollPos < _window.scrollTop() && currentPadding < max) {
    footerMargin.css('padding', ++currentPadding + 'px 0');
  } else if (scrollPos > _window.scrollTop() && currentPadding > padding) {
    footerMargin.css('padding', --currentPadding + 'px 0');
  }

  if (_window.scrollTop() == 0)
    footerMargin.css('padding', padding + 'px 0');

  scrollPos = _window.scrollTop();
});

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() == 0) {
      $('#lower_right').fadeOut();
      $('#lower_left').fadeOut();
    } 

    if ($(this).scrollTop() > 850 && $(this).scrollTop() < 4000) {
      $('#lower_left').fadeIn();
    } 

    if ($(this).scrollTop() > 1650 && $(this).scrollTop() < 4000) {
      $('#lower_right').fadeIn();
    } 

    if ($(this).scrollTop() > 4000) {
      $('#lower_right').fadeOut();
      $('#lower_left').fadeOut();
    } 

// middle arrow
if ($(this).scrollTop() == 0) {
  setTimeout(function() {
    $('#middle_left').fadeIn();
  }, 800);

} 
if ($(this).scrollTop() > 1) {
  $('#middle_left').fadeOut();
} 

// intro txt animations 
if ($(this).scrollTop() > 1570) {
  $('.intro-txt-right').hide();
  $('.intro-txt-left').hide();
} else {
  $('.intro-txt-right').show();
  $('.intro-txt-left').show();
}

});
})



setTimeout(function(){ 
  $('.intro-txt-wrap').css('display', 'block');
}, 2600); // post intro animation transition

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
      width: '50%',
      marginLeft: '0%',
      marginTop: '-10%',
      height: '250vh'
}, 650); // left masthead slide in
  });

  $('#middle_left').fadeIn();
}, 2850); // length of full page intro

// 2nd animation elements to .frontpanel-mh 
$('.backpanel-mh').css("height", "250vh"); 

// Initialize vertical scrollbar 
$(document).ready(function(){
  $('body, html').removeClass('hideMyScroll');
});

setTimeout(function(){ 
  $(document).ready(function(){  
    $('body, html').addClass('showMyScroll');
  });
}, 2350);

// hamburger, text, and left nav bar hover animation 
$('#mid_left').hover(function(){  
  $('#rot3 span:nth-child(2)').animate({marginRight: '10%'}, 10);
  $('#rot3 span').animate({width: '50%'}, 10);
  $('.offset_2').css("verticalAlign", 'bottom'); 
  $('.offset_1').css("verticalAlign", 'top'); 
  $('.mid_left_bar').css('width', '6%');
}, function(){
  $('#rot3 span:nth-child(2)').animate({marginRight: '0%'}, 10);
  $('#rot3 span').animate({width: '40%'}, 10);
  $('.offset_2').css("verticalAlign", 'middle'); 
  $('.offset_1').css("verticalAlign", 'middle'); 
  $('.mid_left_bar').css('width', '3%');
});

var open_modal = document.getElementById("nav-button");

// hide the modal content unless the mobile button gets pressed 
$('#modal_content_1').hide();
$('#modal_content_2').hide();

var toggle = function (a, b) {
  var togg = false;
  return function () {
// passreturn value back to caller
return (togg = !togg) ? a() : b();
};
};

open_modal.addEventListener('click', toggle(function () {
  $('#lower_right').fadeOut();
  $('#lower_left').hide();
  $('#nav-button').css('pointer-events', 'none');
  disable_scroll();
  $('.top-nav p:nth-child(2)').animate({'margin-right': '3.5%'}, 350);

//  $('.modal_content').show();
$('#rot3').toggleClass('open');
$('#rot_mid').fadeOut();

// add height to bottom-nav, top nav 
$('.top-nav p').animate({'margin-left': '20%'}, 350);

$('.bottom-nav').animate({'height': '80px'}, 350);
$('.top-nav').animate({'height': '80px'}, 350);

// right nav items
$('.right-bar').animate({'width': '50px'}, 350);
$('#mid_right').animate({'margin-right': '.5%'}, 350);

// add margin to icon 
$('#mid_left').animate({'margin-left': '8%'}, 350);

$(".mid_left_modal_outline").animate({'width': '80%'}, 200);
$(".modal-content-shape").css('width', '80%');

// left side 
$(".right_modal_overlay").animate({'width': '20%'}, 500);

// elements load in 
setTimeout(function(){
  setTimeout(function(){
    for (var n = 0; n < modal_elements.length; n++){
      (function(n){
        setTimeout(function(){
          var elem = modal_elements[n];
          $(elem).css('visibility', 'visible');
          $(elem).animate({'line-height': '1.1'}, 90);
        }, 100 * n);
      }(n));
    }
  }, 250);
}, 250);

$('.modal_content:nth-child(1)').toggleClass('line-height');

// 2 bottom elements 
setTimeout(function(){

  $('#modal_content_1').fadeIn();  
  $('#modal_content_2').fadeIn();  
  $('#nav-button').css('pointer-events', 'auto');
}, 1050);
}, function () { 
  $('#nav-button').css('pointer-events', 'none');


  $('#modal_content_1').fadeOut();
  $('#modal_content_2').fadeOut();

  setTimeout(function(){
    $('#rot3').toggleClass('open');

    setTimeout(function(){

      $('#rot_mid').fadeIn();
    }, 80);
    $('.modal_content').animate({'margin-right': '20%', 'opacity': '0'}, 200);
    $(".right_modal_overlay").animate({'width': '0%'}, 500);
    $('.top-nav p:nth-child(2)').animate({'margin-right': '3%'}, 350);
// right and left side 
$(".mid_left_modal_outline").animate({'width': '0%'}, 80);
$(".modal-content-shape").animate({'width': '0%'}, 80);
$(".mid_left_bar").animate({'width': '3%'}, 200)
$('#mid_left').animate({'margin-left': '0%'}, 400);
// remove top and bottom margin overlay 
$('.top-nav p').animate({'margin-left': '3%'}, 350);
$('.bottom-nav').animate({'height': '40px'}, 350);
$('.top-nav').animate({'height': '40px'}, 350);

// right nav items
$('.right-bar').animate({'width': '40px'}, 350);
$('#mid_right').animate({'margin-right': '0%'}, 350);


for (var nn = 0; nn < modal_elementss.length; nn++){
  (function(nn){
    setTimeout(function(){
      var elemx = modal_elementss[nn];
      $(elemx).animate({'line-height': '3'}, 40);
      $(elemx).css('visibility', 'hidden');
    }, 50 * nn);
  }(nn));
}
enable_scroll();
}, 400)

  setTimeout(function(){
    $('.modal_content').css('margin-right', '0%');
    $('.modal_content').animate({'opacity': '1'}, 400);
  }, 750)  

  setTimeout(function(){
    $('#nav-button').css('pointer-events', 'auto');
    $('#modal_t_1, #modal_t_2, #modal_t_3, #modal_t_4').css('line-height', '3');
    $('.modal_content:nth-child(1)').toggleClass('line-height');
  }, 1050)
}));

$(".modal-cta-btn").on({
  mouseenter: function () {
    $('.footer-arrow h2').animate({'margin-left': '75%'}, 350);
//   $('h2').animate({'width': '110%'}, 750);
},
mouseleave: function () {
  $('.footer-arrow h2').animate({'margin-left': '0%'}, 350);
}
});

