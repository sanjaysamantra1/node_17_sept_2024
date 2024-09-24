console.log(a);  // undefined
var a = 10;
console.log(a); // 10

function f1() {
    console.log(a); // undefined
    var a = 100;
    console.log(a); // 100
}
f1();