const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const translate = require('google-translate-api');
const translationRouter = require("./routes/translationRouter.js");
const morgan = require('morgan');

app.use(morgan('dev'));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use("/", translationRouter);


app.listen(8080);
