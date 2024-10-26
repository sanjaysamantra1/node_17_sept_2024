'use strict'

let a = 10;
console.log('a value ', a);

a = 'sachin';
console.log('a value ', a);

a = true;
console.log('a value ', a);

let cars = ['Tata', 'Honda']
cars.push(100);
cars.push(false);
console.log(cars);

function add(a, b) {
    console.log(`addition of ${a} and ${b} is ${a+b}`)
}
add(2, 3);
add(2, 'sachin');