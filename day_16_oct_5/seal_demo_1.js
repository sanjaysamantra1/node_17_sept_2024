let obj1 = { a: 10, b: 20 };
obj1.c = 30; // add a new prop - yes
delete obj1.b; // delete prop - yes
obj1.a = 15; // change value - yes
console.log(obj1); // {a:15,c:30}

let obj2 = { a: 100, b: 200 };
Object.seal(obj2);
obj2.c = 300; // add a new prop - no
delete obj2.b; // delete prop - no
obj2.a = 150; // change value - yes
console.log(obj2); // {a:150,b:200}

console.log(Object.isSealed(obj1)) // false
console.log(Object.isSealed(obj2)) // true