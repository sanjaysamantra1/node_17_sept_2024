let user = { firstName: 'sachin', 'last name': 'tendulkar', age: 35, add: 'mumbai' };

console.log(user.firstName); // sanjay
console.log(user['firstName']); // sanjay

// 1. when key contains space
// console.log(user.last name);
console.log(user['last name']);

// 2. when key is stored as a value in another variable
let x = 'add';
console.log(user.x); // undefined
console.log(user[x]); // mumbai

// 3. while iterating an object
for (key in user) {
    console.log(key + " === " + user.key);
    console.log(key + " === " + user[key]);
}