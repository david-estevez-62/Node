var express = require('express');
var addNumbers = require('/controllers/num.js')
var averageStringNumbers = require('/controllers/num.js')
var longestWord = require('/controllers/num.js')

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
	res.render('index');
});

var server = app.listen(3996, function() {
	console.log('Express server listening on port ' + server.address().port);
});
