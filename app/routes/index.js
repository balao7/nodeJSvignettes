'use strict';

//var path = process.cwd();

//module.exports = function (app){

//var express = require('express');
//var app = express();

//	app.route('/')
//		.get(function (req, res) {
//			res.sendFile(path + '/public/index.html');
//		});

//};


 'use strict';
 var path = process.cwd();

 module.exports = function (app){
 	
 	var express = require('express');
	var app = express();

    app.get('/',function (req, res) {
            res.sendFile(path + '/public/index.html');
        });

 };
 
 
 
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