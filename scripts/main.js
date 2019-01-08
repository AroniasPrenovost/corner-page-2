var modal_elements = ['#modal_t_1', '#modal_t_2', '#modal_t_3', '#modal_t_4'];
var modal_elementss = ['#modal_t_4', '#modal_t_3', '#modal_t_2', '#modal_t_1'];

// smooth scrolling
$(document).ready(function() {

  var scrollLink = $('.scroll');
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

$(window).scroll( $.throttle( 425, animate ) )
function animate() {

  var frontpanel = $('.frontpanel-mh');
  if (window.pageYOffset > 0 && !frontpanel.hasClass('wide')) {
    frontpanel.addClass("wide").stop().animate({width: fullwidth}, 1000);
    $('.left-txt-animation').fadeIn(2000); 
    txtRight.addClass("wide").stop().animate({width: '95%'}, 1000);
  }

  if (window.pageYOffset == 0) {
    console.clear();
    frontpanel.stop().animate({width: smallwidth}, 1000, function() {
      $(this).removeClass('wide');
    });

    $('.left-txt-animation').fadeOut(850); 
    txtRight.stop().animate({width: smallwidth}, 1000, function() {
      $(this).removeClass('wide');
    });
  }   
}

// four-box div animation 
$(window).scroll(function(){
  var four_block_position = Math.min($(window).scrollTop()-2500, 15)
  $('.four-block').css({ right: four_block_position });
});

$(function () {
  $(window).scroll(function () {
    // bottom nav arrows 
    if ($(this).scrollTop() == 0) {
      $('#right-up-arrow').fadeOut();
      $('#left-down-arrow').fadeOut();
    } 

    if ($(this).scrollTop() > 850 && $(this).scrollTop() < 4000) {
      $('#left-down-arrow').fadeIn();
    } 

    if ($(this).scrollTop() > 1650 && $(this).scrollTop() < 4000) {
      $('#right-up-arrow').fadeIn();
    } 

    if ($(this).scrollTop() > 4000) {
      $('#right-up-arrow').fadeOut();
      $('#left-down-arrow').fadeOut();
    } 

    // middle arrow
    if ($(this).scrollTop() == 0) {
      setTimeout(function() {
        $('#mid-intro-masthead').fadeIn();
      }, 800);
    } 

    if ($(this).scrollTop() > 1) {
      $('#mid-intro-masthead').fadeOut();
    } 

    // intro txt animations 
    if ($(this).scrollTop() > 1570) {
      $('.intro-txt-right').hide();
      $('.intro-txt-left').hide();
    } else {
      $('.intro-txt-right').show();
      $('.intro-txt-left').show();
    }

    // background to 'img-container-1'
    /*
    if ($(this).scrollTop() > 0) {
      $('.img-container-1-bg').animate({width: '50%'}, 1);
    }*/
    if ($(this).scrollTop() > 3170) {
      $('.img-container-1').animate({width: '50%'}, 600);
    }

    if ($(this).scrollTop() > 3570) {
      $('.img-container-2').animate({height: '100%'}, 900);
    }

    // footer 
    if ($(this).scrollTop() < 3000) {
        $('.footer').css('display', 'none'); 
    } 

    if ($(this).scrollTop() > 3000) {
      $('.footer').css('display', 'block'); 
    } 
  });
})

setTimeout(function(){ 
  $('#intro-txt').hide().fadeIn('slow');
  $('.intro-txt-wrap').css('display', 'block');
}, 3000); // post intro animation transition

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

  $('#mid-intro-masthead').fadeIn();
}, 2850); // length of full page intro

// 2nd animation elements to .frontpanel-mh 
$('.backpanel-mh').css("height", "250vh"); 

setTimeout(function(){ 
  $(document).ready(function(){  
   $('body').css("height", "100%"); // overwrite paroller style 
  });
}, 2350);

// hamburger, text, and left nav bar hover animation 
$('#nav-toggle-icon-container').hover(function(){  
  $('#icon-rotate span:nth-child(2)').animate({marginRight: '10%'}, 10);
  $('#icon-rotate span').animate({width: '50%'}, 10);
  $('.offset_2').css("verticalAlign", 'bottom'); 
  $('.offset_1').css("verticalAlign", 'top'); 
  $('.left-nav-toggle-container').css('width', '6%');
}, function(){
  $('#icon-rotate span:nth-child(2)').animate({marginRight: '0%'}, 10);
  $('#icon-rotate span').animate({width: '40%'}, 10);
  $('.offset_2').css("verticalAlign", 'middle'); 
  $('.offset_1').css("verticalAlign", 'middle'); 
  $('.left-nav-toggle-container').css('width', '3%');
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
  $('#icon-rotate').toggleClass('open');
  // disable body scroll
  $('body').css('overflow-y', 'hidden');
  $('body').on({
      'mousewheel': function(e) {
          if (e.target.id == 'el') return;
          e.preventDefault();
          e.stopPropagation();
      }
  })

  $('#right-up-arrow').fadeOut();
  $('#left-down-arrow').fadeOut();
  $('#nav-button').css('pointer-events', 'none');
  $('.top-nav-container p:nth-child(2)').animate({'margin-right': '3.5%'}, 350);

  //  $('.nav-modal-content').show();
  $('#icon-label-rotate').fadeOut();

  // add height to bottom-nav-bar, top nav 
  $('.top-nav-container p').animate({'margin-left': '20%'}, 350);

  $('.bottom-nav-bar').animate({'height': '80px'}, 350);
  $('.top-nav-container').animate({'height': '80px'}, 350);

  // right nav items
  $('.right-bar').animate({'width': '50px'}, 350);
  $('#mid_right').animate({'margin-right': '.5%'}, 350);

  // add margin to icon 
  $('#nav-toggle-icon-container').animate({'margin-left': '8%'}, 350);

  $(".mid_left_modal_outline").animate({'width': '80%'}, 200);
  $(".modal-content-shape").css('width', '80%');

  // left side 
  $(".right-modal-overlay").animate({'width': '20%'}, 500);

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

$('.nav-modal-content:nth-child(1)').toggleClass('line-height');

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
    $('#icon-rotate').toggleClass('open');

    setTimeout(function(){
      $('#icon-label-rotate').fadeIn();
    }, 80);

    $('.nav-modal-content').animate({'margin-right': '20%', 'opacity': '0'}, 200);
    $(".right-modal-overlay").animate({'width': '0%'}, 500);
    $('.top-nav-container p:nth-child(2)').animate({'margin-right': '3%'}, 350);
    
    // right and left side 
    $(".mid_left_modal_outline").animate({'width': '0%'}, 80);
    $(".modal-content-shape").animate({'width': '0%'}, 80);
    $(".left-nav-toggle-container").animate({'width': '3%'}, 200)
    $('#nav-toggle-icon-container').animate({'margin-left': '0%'}, 400);
    
    // remove top and bottom margin overlay 
    $('.top-nav-container p').animate({'margin-left': '3%'}, 350);
    $('.bottom-nav-bar').animate({'height': '40px'}, 350);
    $('.top-nav-container').animate({'height': '40px'}, 350);

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

  // enable scroll
  $('body').unbind('mousewheel');
  $('body').css('overflow-y', 'visible');
}, 400)

  setTimeout(function(){
    $('.nav-modal-content').css('margin-right', '0%');
    $('.nav-modal-content').animate({'opacity': '1'}, 400);
  }, 750)  

  setTimeout(function(){
    $('#nav-button').css('pointer-events', 'auto');
    $('#modal_t_1, #modal_t_2, #modal_t_3, #modal_t_4').css('line-height', '3');
    $('.nav-modal-content:nth-child(1)').toggleClass('line-height');
  }, 1050)
}));

$(".modal-cta-btn").on({
  mouseenter: function () {
      $('.footer-arrow h2').animate({'margin-left': '75%'}, 350);
  },
  mouseleave: function () {
    $('.footer-arrow h2').animate({'margin-left': '0%'}, 350);
  }
});
