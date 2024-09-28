let str = 'rain in spain mainly stays in the plAin';

console.log(str.slice(8,13));
console.log(str.substring(8,13));

console.log(str.slice(8,-1)); 
console.log(str.substring(8,-1)); // substring doesn't work with -index