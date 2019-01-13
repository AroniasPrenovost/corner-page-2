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

var open_modal = document.getElementById('nav-button');
var introTxt = document.getElementById('intro-txt');
var introH5 = document.getElementById('intro-h5');
var introH4 = document.getElementById('intro-h4');

var toggleNav = document.getElementsByClassName('toggleNavigation');
for (var i = 0; i < toggleNav.length; i++) {
    toggleNav[i].onclick = function() {
        var id = this.id; 
        var data;
        loadJSON(function(json) {

            // select JSON page id - data[0] = home, [1] = about, [2] = staff, [3] = projects
            data = json;
            data = data[id];
            
            switch (id) {
              case 'home':
              // to do... 

              break;
              case 'about':
                introTxt.innerHTML = data.intro_masthead.header[0].content;
                introH5.innerHTML = data.intro_masthead.header[1].content;  
                introH4.innerHTML = data.intro_masthead.header[2].content;
              break;
              case 'projects':
              // to do... 

              break;
              case 'contact':
              // to do... 

            }

            // close nav modal
            open_modal.click();
        });
    };
}
