var express = require('express');
var fs = require('fs');


var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');


app.get('/:filename', function(req, res){
	console.log(req.params)
	fs.readFile('public/'+req.params.filename, function(err, data){
		res.setHeader('content-type', 'text/html')
		res.send(data)
	})
})

var server = app.listen(7597, function() {
	console.log('Express server listening on port ' + server.address().port);
});
