'use strict'

let arr = [10, 20, 30];
delete arr[1];
console.log(arr);

let obj = { a: 10, b: 20, c: 30 };
delete obj.c;
console.log(obj)
// delete operator can be used with array and objects

let num = 5;
delete num; // SyntaxError: Delete of an unqualified identifier in strict mode.
console.log(num)


