var fs = require('fs')



var content = fs.readFileSync(process.argv[2])
var lines = content.toString().split('\n')
var howMany = lines.length -1

console.log(howMany)
