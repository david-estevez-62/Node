var fs = require('fs');

var loremText = fs.readFileSync('./test.txt', 'utf-8');
console.log(loremText);


var reversedLorem = loremText.split('').reverse().join('');
console.log(reversedLorem);

fs.writeFileSync('./test-modified.txt', reversedLorem);