var fs = require('fs');

var input = [];

for (var i = 2; i < process.argv.length; i++) {
	var contents = fs.readFileSync(process.argv[i], 'utf-8');

	input.push(contents);
};

fs.writeFileSync('output.txt', input.join('\n'));








// var fs = require('fs');

// var targetFileName = process.argv[2];

// var inputFiles = process.argv.slice(3);

// var combined = inputFiles.map(function(fileName){
// 	return fs read.FileSync(fileName, 'utf-8');
// }).join('\n');

// fs.writeFileSync(targetFileName, combined)