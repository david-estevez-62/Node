#!/usr/bin/env node


// console.log(process.argv);

var inputStr = process.argv[2];
console.log(process.argv);

var reverseStr = inputStr.split(' ').reverse().join('');
console.log(reverseStr);