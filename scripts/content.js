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

var toggle = document.getElementsByClassName('toggleContent');
for (var i = 0; i < toggle.length; i++) {
    toggle[i].onclick = function() {
        var id = this.id; 
        var data;
        loadJSON(function(json) {
            data = json; 
            console.log(data);
            console.log(id);
            // to do... 
        });
    };
}

/*
obj.intro_masthead.header[0].content
obj.intro_masthead.othertype.id
obj.otherstuff.thing[0][1] 
*/
