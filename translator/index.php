<?php header('Access-Control-Allow-Origin: *'); ?>
<!DOCTYPE html>
<html>
<head>
	<title>Testando Requisição</title>
	<script type="text/javascript">
		(function(){
			var jsonRequest = {
			  'q': 'The quick brown fox jumped over the lazy dog.',
			  'source': 'en',
			  'target': 'es',
			  'format': 'text'
			};

			var request = new XMLHttpRequest();

			request.onreadystatechange = function() {
			   if (request.readyState == XMLHttpRequest.DONE ) {
		           if (request.status == 200) {
		               document.getElementById("myDiv").innerHTML = request.responseText;
		           }
		           else if (request.status == 400) {
		              console.log('There was an error 400');
		           }
		           else {
		               console.log('something else other than 200 was returned');
		           }
		        }
			};
			request.open("GET", "https://translation.googleapis.com/language/translate/v2", true);
			request.setRequestHeader("Content-Type", "application/json");
			request.setRequestHeader("Authorization", "Bearer TJmyQcKXVRpHRjNhBAFVB0Si");
			request.setRequestHeader("Header", jsonRequest);
			// request.setRequestHeader('Access-Control-Allow-Origin', '*');
			// request.setRequestHeader('Access-Control-Allow-Methods','DELETE, HEAD, GET, OPTIONS, POST, PUT');
			// request.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Range, Content-Disposition, Content-Description');
			// request.setRequestHeader('Access-Control-Max-Age','1728000');
			request.send();
// 

		})();
	</script>
</head>
<body>
<div id="myDiv"></div>
</body>
</html>