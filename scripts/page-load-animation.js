$('#mid_right').hide();
 $('#mid_left').hide();

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
14, 12, 17, 15, 
8, 8, 9, 8, 
5, 6, 10, 6, 
10, 6, 5, 8, 
4, 3, 4, 8, 
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
}, 100); // runs every 100 milliseconds
}, 720);  // delays start time




// navbars fade in 
setTimeout(function() {  

// right and left
$('.right-bar').animate({width: '40px'}, 300);
$('#mid_right').fadeIn();
$('.mid_left_bar').animate({width: '40px'}, 300);
 $('#mid_left').fadeIn();

$('.top-nav').animate({height: '40px'}, 300);
$('.bottom-nav').animate({height: '40px'}, 300);

}, 2000);  



/*
    .bottom-nav' 
    .right-bar'
        #mid_right

    .navbar 
    .mid_left_bar 
*/

