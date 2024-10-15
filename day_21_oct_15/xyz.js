const { a, b } = require('./abc.js');

console.log(a)
console.log(b)
console.log(c); // can be used with out require

console.log(global.c)
console.log(globalThis.c)