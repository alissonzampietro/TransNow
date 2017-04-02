var contextMenuItem = {
	"id" 		: "transNow",
	"title" 	: "Trans Now!",
	"contexts"  : ["selection"]  
}

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var jsonReturned = JSON.parse(this.responseText);
            alert(jsonReturned.translator);
          }
        };
  xhttp.open("GET", "http://apitransnow/" + encodeURIComponent(clickData.selectionText), true);
  xhttp.send();
});
