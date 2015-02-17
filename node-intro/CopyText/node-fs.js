var fs = require('fs');

var loremText = fs.readFileSync('./test.txt', 'utf-8');
console.log(loremText);


fs.writeFileSync('./test-modified.txt', loremText);