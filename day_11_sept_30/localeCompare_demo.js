// localeCompare(); // compares 2 strings , returns 1 / -1 / 0

let str1 = 'ajay';
let str2 = 'akash';

console.log(str1 - str2); // NaN
console.log(str1.localeCompare(str2)); // -1
console.log(str2.localeCompare(str1)); // 1
console.log('hello'.localeCompare('hello')); // 0
console.log('h'.localeCompare('H')); // -1
console.log('h' > 'H'); 