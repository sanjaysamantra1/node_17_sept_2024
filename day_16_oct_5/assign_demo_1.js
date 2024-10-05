let obj1 = { a: 10, b: 20 };
let obj2 = { c: 30, d: 40 }
let obj3 = { e: 50, f: 60 };
Object.assign(obj1, obj2, obj3); 
console.log(obj1)
console.log(obj2)
console.log(obj3)

let user1 = { name: 'sachin', age: 50, add: 'mumbai' };
let user2 = user1; // reference copy
let user3 = Object.assign({},user1); // shallow copy
let user4 = {...user1}; // shallow copy