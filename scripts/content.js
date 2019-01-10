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

// footer 
var leftFooterContent = document.getElementById('panel-7-txt');
var rightFooterContent = document.getElementById('modal-address');

var toggleNav = document.getElementsByClassName('toggleNavigation');
for (var i = 0; i < toggleNav.length; i++) {
    toggleNav[i].onclick = function() {
        var id = this.id; 
        var data;
        loadJSON(function(json) {

            data = json;
            // select JSON page id 
            // data[0] = home, [1] = about, [2] = staff, [3] = projects
            data = data[id];

            /*
            switch (id) {
              case 'home':
              // if id = home
                // ...generate page elements 
                  // ...import content

                  // masthead = .backpanel-mh 
                    // import = .frontpanel-mh 

                  console.log('test');

              break;
              case 'about':
              // if id = about 
                // ...generate page elements 
                  // ...import content

                  // masthead = .backpanel-mh 
                    // import = .frontpanel-mh

                  console.log('test');

              break;
              case 'projects':
              // if id = projects 
                // ...generate page elements 
                  // ...import content

                  console.log('test');

              break;
              case 'contact':
              // if id = contact 
                // ...generate page elements 
                  // ...import content 

                  console.log('test');
            }
            */

            // intro masthead 
            introTxt.innerHTML = data.intro_masthead.header[0].content;
            introH5.innerHTML = data.intro_masthead.header[1].content;  
            introH4.innerHTML = data.intro_masthead.header[2].content;

            // panel 2
            // to do... 

            // footer 
            /*
            leftFooterContent = data.footer[0].content;
            rightFooterContent = data.footer[1].content;
            */

            // close nav modal
            open_modal.click();
        });
    };
}
