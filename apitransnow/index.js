var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const translate = require('google-translate-api');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/:q', function(req,res){
	var q = req.params.q;
		translate(q, {from: 'en',to: 'pt'}).then(response => {
			res.json({"translator":response.text});
		}).catch(err => {
		    console.error(err);
		});
});

app.listen(8080);
