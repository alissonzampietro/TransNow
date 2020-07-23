window.browser = (function () {
  return window.msBrowser ||
    window.browser ||
    window.chrome;
})();

var translateWord = (word, callback, errorCallback) => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var jsonReturned = JSON.parse(this.responseText);
        callback(jsonReturned.translator);
      }else {
        errorCallback(this.status);
      }
    };
    xhttp.open("POST", "http://localhost:8080/"+word, true);
    xhttp.setRequestHeader('Authorization', 'bearer auth');
    xhttp.send();
}

document.addEventListener('DOMContentLoaded', function () {
  window.browser.tabs.executeScript( {
      code: "window.getSelection().toString();"
  }, function(selection) {
      console.log(selection);
      if(selection[0].length > 0){
        document.getElementById("msgMain").innerHTML = "Texto traduzido: ";
        document.getElementById("res").innerHTML = "traduzindo...";
        translateWord(encodeURIComponent(selection[0]), (word) => {
          document.getElementById("res").innerHTML = word;
        }, (status) => {
          document.getElementById("res").innerHTML = "Desculpe, nosso serviço respondeu com um erro " + status.toString();
        });
      }
  });
});

var contextMenuItem = {
  "id"    : "transNow",
  "title"   : "Trans Now!",
  "contexts"  : ["selection"]
}

window.browser.contextMenus.create(contextMenuItem);

window.browser.contextMenus.onClicked.addListener(function(clickData){
  translateWord(encodeURIComponent(clickData.selectionText), (word) => {
    alert(word);
  });
});