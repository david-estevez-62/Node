var express = require('express');
var bodyParser = require('body-parser');

var formController = require('./controllers/form.js')

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded([extended: false]));


app.get('/', function(req, res) {
	// fs.readFile('public/data.txt', function(err, data){
	// 	res.setHeader('content-type', 'text')
			res.send('index')
	// })
	// res.send('index');
});

app.post('/formsubmit', formController.handle);


app.get('/success', function(req,res){
	res.render('success');
})

var server = app.listen(5785, function() {
	console.log('Express server listening on port ' + server.address().port);
});
