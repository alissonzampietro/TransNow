window.browser = (function () {
  return window.msBrowser ||
    window.browser ||
    window.chrome;
})();

var translateWord = (word, callback) => {
    var xhttp = new XMLHttpRequest();
    xhttp.setRequestHeader('Authorization', 'bearer AA60265CFDCAF954B3042885FB420662');
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var jsonReturned = JSON.parse(this.responseText);
        callback(jsonReturned.translator);
      }
    };
    xhttp.open("POST", "http://localhost:8080/"+word, true);
    xhttp.send();
}

document.addEventListener('DOMContentLoaded', function () {
  browser.tabs.executeScript( {
      code: "window.getSelection().toString();"
  }, function(selection) {
      if(selection[0].length > 0){
        let showText = document.getElementById("res");
        document.getElementById("msgMain").innerHTML = "Texto traduzido: ";
        showText.innerHTML = "traduzindo...";
        translateWord(encodeURIComponent(selection[0]), (word) => {
          showText.innerHTML = word;
        });

      }
  });
});

var contextMenuItem = {
  "id"    : "transNow",
  "title"   : "Trans Now!",
  "contexts"  : ["selection"]
}

browser.contextMenus.create(contextMenuItem);

browser.contextMenus.onClicked.addListener(function(clickData){
  translateWord(encodeURIComponent(clickData.selectionText), (word) => {
    alert(word);
  });
});
