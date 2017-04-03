var translateWord = (word, callback) => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var jsonReturned = JSON.parse(this.responseText);
        callback(jsonReturned.translator);
      }
    };
    xhttp.open("GET", "http://localhost:8080/"+word, true);
    xhttp.send();
}

document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.executeScript( {
      code: "window.getSelection().toString();"
  }, function(selection) {
      if(selection[0].length > 0){
        document.getElementById("msgMain").innerHTML = "Texto traduzido: ";
        document.getElementById("res").innerHTML = "traduzindo...";
        translateWord(encodeURIComponent(selection[0]), (word) => {
          document.getElementById("res").innerHTML = word;
        });

      }
  });
});

var contextMenuItem = {
  "id"    : "transNow",
  "title"   : "Trans Now!",
  "contexts"  : ["selection"]
}

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
  translateWord(encodeURIComponent(clickData.selectionText), (word) => {
    alert(word);
  });
});
