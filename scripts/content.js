// get local JSON
function loadJSON(callback) {   
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', '../data/pageData.json', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(JSON.parse(xobj.responseText));
    }
  };
  xobj.send(null);  
}

var introTxt = document.getElementById('intro-txt');
var introH5 = document.getElementById('intro-h5');
var introH4 = document.getElementById('intro-h4');

var toggle = document.getElementsByClassName('toggleContent');
for (var i = 0; i < toggle.length; i++) {
    toggle[i].onclick = function() {
        var id = this.id; 
        var data;
        loadJSON(function(json) {

            data = json;
            // select JSON page id 
            // data[0] = home, [1] = about, [2] = staff, [3] = projects
            data = data[id];

            // intro masthead 
            introTxt.innerHTML = data.intro_masthead.header[0].content;
            introH5.innerHTML = data.intro_masthead.header[1].content;  
            introH4.innerHTML = data.intro_masthead.header[2].content;

            // panel 2
            // to do... 
            
        });
    };
}
