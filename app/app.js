var express = require('express');
var mongoose = require('mongoose');
var body_parser =  require('body-parser');
var routes = require('../routes/routes');
mongoose.connect("mongodb://localhost:27017/Doc-Pharm");
var app = module.exports = express();
var environments = 'development';
app.set('env', process.env.environments || 'production');
app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json());
app.use('/api', routes);
app.use(function(req, res, next) {
});
var port = process.env.port || 2000;
app.listen(2000);
    console.log('App listening on port 2000!');