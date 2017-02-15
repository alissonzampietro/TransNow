document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.executeScript( {
      code: "window.getSelection().toString();"
  }, function(selection) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var jsonReturned = JSON.parse(this.responseText);
          document.getElementById("res").innerHTML = jsonReturned.translator;
        }
      };
      xhttp.open("GET", "http://www.alzaro.com.br:8080/"+selection[0], true);
      xhttp.send();
  });

});