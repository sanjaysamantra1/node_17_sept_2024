let str1 = "helllo";

console.log(str1.charAt(1)); // L
console.log(str1.at(1)); // L

console.log(str1.charAt(-1)); // doesn't work with -ve index
console.log(str1.at(-1)); // 0 

console.log(str1.charCodeAt(1)); // e - 101
console.log('sachin'.concat(' tendulkar'));

console.log(str1.indexOf('e')); // 1
console.log(str1.indexOf('l')); // 2
console.log(str1.lastIndexOf('l')); // 2

console.log(str1.includes('lo')); // true
