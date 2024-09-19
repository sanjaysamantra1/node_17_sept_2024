const fs = require('fs');

let fileContent = fs.readFileSync('abc.txt', 'utf8');
console.log(fileContent);