var scripts = [
	'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js', 
	'https://prinzhorn.github.io/skrollr/dist/skrollr.min.js', 
	'https://cdnjs.cloudflare.com/ajax/libs/skrollr/0.6.30/skrollr.min.js', 
	'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js', 
	'https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/ScrollToPlugin.min.js'
];

function appendScripts(url) {
	var script   = document.createElement('script');
	script.type  = 'text/javascript';
	script.src   = url; 
	document.body.appendChild(script);
}

for (var x = 0; x < scripts.length; x++) {
	appendScripts(scripts[x]);
}

$(function(){
	var $window = $(window);	 

	var scrollTime = 1.9; 
	var scrollDistance = 300; // distance - smaller value = shorter scroll 

	$window.on("mousewheel DOMMouseScroll", function(event){

		event.preventDefault();	

		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);

		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true, onAutoKill:myAutoKillFunction },
			ease: Power1.easeOut,	
			autoKill: true,
			overwrite: 5							
		});
		function myAutoKillFunction(){}
	});
});