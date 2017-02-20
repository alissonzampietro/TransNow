var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const translate = require('google-translate-api');
var languageDetect = require('langdetect');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/:q', function(req,res){
	var q = req.params.q;
	var obj = languageDetect.detect(q);
		translate(q, {from: obj[0].lang,to: 'pt'}).then(response => {
			res.json({"translator":response.text});
		}).catch(err => {
		    console.error(err);
		});
});

app.listen(8080);