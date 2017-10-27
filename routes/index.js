'use strict';

var path = process.cwd();
var ClickHandler = require(path + '/clickHandler.server.js');

module.exports = function (app) {

	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/index.html');
		});
		

};