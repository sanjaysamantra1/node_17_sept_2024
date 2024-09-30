let cars = ['Tata', 'Honda'];

cars.push('Maruti');
console.log('after push', cars); // [ 'Tata', 'Honda', 'Maruti' ]

cars.pop();
console.log('after pop', cars); // [ 'Tata', 'Honda' ]

cars.unshift('Maruti');
console.log('after unshift', cars); // ['Maruti', 'Tata', 'Honda' ]

cars.shift();
console.log('after shift', cars); // ['Tata', 'Honda' ]

// splice(index,#elements to delete , elements to insert)
cars.splice(1, 1, 'Maruti', 'Hundai'); // both delete and insert
console.log('after splice', cars)// ['Tata', 'Maruti', 'Hundai' ]
cars.splice(2, 0, 'Toyota'); // only insert
console.log('after splice', cars)// ['Tata', 'Maruti','Toyota', 'Hundai' ]
cars.splice(1, 2); // only delete
console.log('after splice', cars)// ['Tata',  'Hundai' ]

let boys = ['suryavanshi','ajay']
let girls = ['subhada','simran']
let students = boys.concat(girls);
console.log(students)

