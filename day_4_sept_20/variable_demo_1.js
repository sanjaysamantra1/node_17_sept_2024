var a = 10;
let b = 20;
const c = 30;
console.log(`a value is ${a}`)
console.log(`b value is ${b}`)
console.log(`c value is ${c} \n`)

a = 15;
b = 25;
// c = 35; // TypeError: Assignment to constant variable
console.log(`a value is ${a}`)
console.log(`b value is ${b}`)
console.log(`c value is ${c} \n`)

const cars = ['tata', 'honda'];
cars.push('maruti'); // yes, even if the array is declared with const , elements can be pushed
console.log(cars);
// cars = ['hundai', 'toyota']; //  a new array cann't be assigned , TypeError: Assignment to constant variable
console.log(cars);

const user = { name: 'sanjay', age: 50 };
user.add = 'Bangalore';  // Yes, a new property can be added even though user is declared with const
console.log(user);
user = { name: 'sachin', add: 'Mumbai' }; // No , a new object cann't be assigned to that const variable

