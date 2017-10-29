//start MongoDB by entering:
//mongod --smallfiles
// in a second terminal get node js running by entering:
//node server.js
//git add -A  git commit -m "schema and mocha unhunh"  git push origin master


var express = require('express');
var app = express();
var session = require('express-session');
var path = require('path');
var mongoose = require('mongoose');
var port = process.env.PORT || 8080;
var mongodb=require("mongodb")
var MongoClient = mongodb.MongoClient;
var routes = require('./app/routes/index.js');

app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/public', express.static(process.cwd() + '/public'));



app.get('/',function(req, res){
  res.sendfile(path.join(__dirname+'/index.html'));
});

var port = process.env.PORT || 8080;

routes(app);

app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});