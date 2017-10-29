//start MongoDB by entering:
//mongod --smallfiles
// in a second terminal get node js running by entering:
//node server.js
//git add -A  git commit -m "schema and mocha unhunh"  git push origin master


var express = require('express');
var routes = require('./app/routes/index.js');


var app = express();

app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/public', express.static(process.cwd() + '/public'));


routes(app);

app.on('listening',function(){
    console.log('ok, server is running');
});

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});