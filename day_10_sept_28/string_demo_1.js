let str1 = "sachin"; // String Literal
let str2 = "sachin";

let str3 = new String("sachin"); // String Object
let str4 = new String("sachin");

console.log(typeof str1); // string
console.log(typeof str3); // object

console.log(str1 == str2); // true
console.log(str2 == str3); // true (typecasting)
console.log(str2 == str3); // true (typecasting)
console.log(str3 == str4); // false (address gets compared)

let str5 = '2+3+4';
let str6 = new String('2+3+4');
console.log(str5 , eval(str5))
console.log(eval(str6))

// how to convert string object to literal
let str7 = str6.valueOf();
console.log(eval(str7))
