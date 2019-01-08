!function(r){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=r(require("jquery")):r(jQuery)}(function(r){"use strict";var t=!1,o=function(){t=!1},n={bgVertical:function(r,t){return r.css({"background-position":"center "+-t+"px"})},bgHorizontal:function(r,t){return r.css({"background-position":-t+"px center"})},vertical:function(r,t,o){return"none"!==o||(o=""),r.css({"-webkit-transform":"translateY("+t+"px)"+o,"-moz-transform":"translateY("+t+"px)"+o,transform:"translateY("+t+"px)"+o,transition:"transform linear","will-change":"transform"})},horizontal:function(r,t,o){return"none"!==o||(o=""),r.css({"-webkit-transform":"translateX("+t+"px)"+o,"-moz-transform":"translateX("+t+"px)"+o,transform:"translateX("+t+"px)"+o,transition:"transform linear","will-change":"transform"})}},a={factor:function(r,t,o){var n=r.data("paroller-factor"),a=n||o.factor;if(t<576){var e=r.data("paroller-factor-xs"),i=e||o.factorXs;return i||a}if(t<=768){var c=r.data("paroller-factor-sm"),f=c||o.factorSm;return f||a}if(t<=1024){var l=r.data("paroller-factor-md"),u=l||o.factorMd;return u||a}if(t<=1200){var s=r.data("paroller-factor-lg"),d=s||o.factorLg;return d||a}if(t<=1920){var g=r.data("paroller-factor-xl"),h=g||o.factorXl;return h||a}return a},bgOffset:function(r,t){return Math.round(r*t)},transform:function(r,t,o,n){return Math.round((r-o/2+n)*t)}},e={background:function(r){return r.css({"background-position":"unset"})},foreground:function(r){return r.css({transform:"unset",transition:"unset"})}};r.fn.paroller=function(i){var c=r(window).height(),f=r(document).height(),i=r.extend({factor:0,factorXs:0,factorSm:0,factorMd:0,factorLg:0,factorXl:0,type:"background",direction:"vertical"},i);return this.each(function(){var l=r(this),u=r(window).width(),s=l.offset().top,d=l.outerHeight(),g=l.data("paroller-type"),h=l.data("paroller-direction"),p=l.css("transform"),m=g||i.type,b=h||i.direction,v=a.factor(l,u,i),w=a.bgOffset(s,v),z=a.transform(s,v,c,d);"background"===m?"vertical"===b?n.bgVertical(l,w):"horizontal"===b&&n.bgHorizontal(l,w):"foreground"===m&&("vertical"===b?n.vertical(l,z,p):"horizontal"===b&&n.horizontal(l,z,p)),r(window).on("resize",function(){var g=r(this).scrollTop();u=r(window).width(),s=l.offset().top,d=l.outerHeight(),v=a.factor(l,u,i),w=Math.round(s*v),z=Math.round((s-c/2+d)*v),t||(window.requestAnimationFrame(o),t=!0),"background"===m?(e.background(l),"vertical"===b?n.bgVertical(l,w):"horizontal"===b&&n.bgHorizontal(l,w)):"foreground"===m&&g<=f&&(e.foreground(l),"vertical"===b?n.vertical(l,z):"horizontal"===b&&n.horizontal(l,z))}),r(window).on("scroll",function(){var a=r(this).scrollTop();f=r(document).height(),w=Math.round((s-a)*v),z=Math.round((s-c/2+d-a)*v),t||(window.requestAnimationFrame(o),t=!0),"background"===m?"vertical"===b?n.bgVertical(l,w):"horizontal"===b&&n.bgHorizontal(l,w):"foreground"===m&&a<=f&&("vertical"===b?n.vertical(l,z,p):"horizontal"===b&&n.horizontal(l,z,p))})})}});

$('[data-paroller-factor]').paroller();
$('.paroller').paroller({
	factorXs: 0.1,
	factorSm: 0.1,
	factorMd: -0.4,
	factorLg: -0.5,
	factorXl: -0.6,
	factor: -0.7,
	type: 'foreground',
	direction: 'horizontal'
});

/*
$('.img-container-1').paroller({ 
	factor: -.2, 
	type: 'foreground' 
});
*/

$('.mid-txt-right').paroller({ 
	factor: .2, 
	type: 'foreground' 
});

$('.four-block').paroller({ 
	factor: .4, 
	type: 'foreground' 
});

$('.footer').paroller({
	factor: -.1, 
	type: 'foreground' 
});