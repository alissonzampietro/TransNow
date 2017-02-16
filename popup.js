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
      xhttp.open("GET", "http://apiserver/"+selection[0], true);
      xhttp.send();
  });

});

var interrogacao = document.getElementById("messages");

var changeInfos = function(remove, add, message){
    interrogacao.classList.remove(remove);
    interrogacao.classList.add(add);
    interrogacao.innerHTML = message;
}

var toogle = function()
{
  if(interrogacao.classList.contains("help"))
  {
    changeInfos('help','info','Ajuda: Selecione o texto em Inglês e depois clique no meu ícone ;-)');
  }else{
    changeInfos('info','help','?');
  }
}

interrogacao.addEventListener("click", toogle);