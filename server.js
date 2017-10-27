//start MongoDB by entering:
//mongod --smallfiles
// in a second terminal get node js running by entering:
//node server.js


var express = require('express');
var app = express();
var session = require('express-session');
var path = require('path');
var port = process.env.PORT || 8080;
var mongodb=require("mongodb")
var MongoClient = mongodb.MongoClient;
var routes = require('./routes/index.js');



app.get('/',function(req, res){
  res.sendfile(path.join(__dirname+'/index.html'));
});

var port = process.env.PORT || 8080;

app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});