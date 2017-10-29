// this code causes the 'TypeError: app.route is not a function' error
//'use strict';

//var path = process.cwd();

//module.exports = function (app){

//var express = require('express');
//var app = express();

//	app.route('/')
//		.get(function (req, res) {
//			res.sendFile(path + '/public/index.html');
//		});

//};

// this code DOES NOT cause the 'TypeError: app.route is not a function' error HOWEVER
// the server cannot find the routes folder now
 'use strict';
 var path = process.cwd();

 module.exports = function (app){
 	
 	var express = require('express');
	var app = express();

    app.get('/',function (req, res) {
            res.sendFile(path + '/public/index.html');
        });

 };
 
 
 // this code causes the 'TypeError: app.route is not a function' error
//  'use strict';
//var express = require('express');
//var app = express();
// var path = process.cwd();
// var router = express.Router()
// module.exports = function (app){
 //  router.get('/', function (req, res) {
 //      res.sendFile(path + '/public/index.html');
 //  })

// };