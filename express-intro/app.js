var express = require('express');

//Initialize the express applicatin(all we need to set up)
var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// Handling any get request to Home page(/) will execute this callback
app.get('/', function(req, res) {
	res.render('index');
});

app.get('/about', function(req, res){
	res.render('about');
})

var server = app.listen(8323, function() {
	console.log('Express server listening on port ' + server.address().port);
});
