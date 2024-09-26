// 1. Function Declaration
add(2, 3);
function add(a, b) {
    console.log(a + b);
}
add(2, 3);


// 2. Function Expression
// sub(20, 10);
let sub = function (a, b) {
    console.log(`subtraction of ${a} and ${b} is ${a - b}`);
}
sub(20, 10);
sub(20, 15);
sub(20, 18);


// 3. Self Invoked  (Immediately Invoked Function expression - IIFE)
(function (a, b) {
    console.log(`multiplication of ${a} and ${b} is ${a * b}`);
})(4, 5);


// 4. Arrow Function  (ES-6 2015)
let div = (a, b) => {
    console.log(`Division of ${a} and ${b} is ${a / b}`);
}
div(20, 10);