///////////////////////////////////////
// Hardcoding plain text onto a page//
/////////////////////////////////////

var http = require('http');

http.createServer(function(request, response){
	console.log('A request came in');


	// send some data back
	response.writeHead(200,{'Content-Type': 'text/plain'});
	response.end('Hello World');

}).listen(3000);

console.log('Server listening on port 3000');










/////////////////////////////////////
// Harcoding html text onto a page //
/////////////////////////////////////


// var http = require('http');

// http.createServer(function(request, response){
// 	console.log('A request came in');


// 	// send some data back
// 	response.writeHead(200,{'Content-Type': 'html'});
// 	response.end('<h1><i>Hello <br> World</i></h1>');

// }).listen(3000);

// console.log('Server listening on port 3000');



// // OR
 


// var http = require('http');

// http.createServer(function(request, response){
// 	console.log('A request came in');


// 	// send some data back
// 	response.writeHead(200,{'Content-Type': 'text/html'});
// 	response.end('<h1><i>Hello <br> World</i></h1>');

// }).listen(3000);

// console.log('Server listening on port 3000');