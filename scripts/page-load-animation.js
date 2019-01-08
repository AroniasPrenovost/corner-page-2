$('#right-nav-icons').hide();
$('#nav-toggle-icon-container').hide(); 
$('#nav-toggle-icon-container').hide();

// disable scroll 
$('.intro-animation-container').on({
    'mousewheel': function(e) {
        if (e.target.id == 'el') return;
        e.preventDefault();
        e.stopPropagation();
    }
})

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
 
9, 5, 7, 5, 
9, 9, 5, 4, 
8, 7, 6, 5, 
11, 4, 6, 3, 
4, 9, 7, 5, 
4, 4, 9, 11, 
 
10, 12, 7, 8, 
11, 4, 6, 3, 
6, 5, 5, 7, 
11, 7, 6, 9, 
5, 4, 5, 9, 
6, 9, 10, 8, 
 
9, 11, 11, 4, 
13, 4, 5, 12, 
8, 9, 7, 5, 
9, 7, 7, 7, 
7
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
        if (lines[0] === "done") {return;}
        var element1 = document.getElementById(lines[0]);
        element1.outerHTML = "";
        delete element1;
        lines.shift();
    }, 100);  
}, 720);  

// navbars fade in 
setTimeout(function() {  
    $('.right-nav-container').animate({width: '40px'}, 300);
    $('#right-nav-icons').fadeIn();
    $('.left-nav-toggle-container').animate({width: '40px'}, 300);
    $('#nav-toggle-icon-container').fadeIn(); 
    $('#nav-toggle-icon-container').fadeIn();
    $('.top-nav-container').animate({height: '40px'}, 300);
    $('.bottom-nav-bar').animate({height: '40px'}, 300);
    $('body').css('overflow-y', 'scroll');
}, 2000);  

// remove entire intro container
setTimeout(function() {  
    $('.intro-animation-container').remove();
}, 3250); 
