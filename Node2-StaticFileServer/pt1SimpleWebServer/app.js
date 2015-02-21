var express = require('express');
var fs = require('fs');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.header('Content-Type', 'text/html');
	res.send(fileContents);
});

var server = app.listen(4350, function() {
	console.log('Express server listening on port ' + server.address().port);
});

var fileContents = fs.readFileSync('data.txt');
