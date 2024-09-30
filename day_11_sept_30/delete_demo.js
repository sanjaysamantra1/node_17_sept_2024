let cars = ['Tata', 'Honda', 'Maruti', 'Hundai'];

console.log(cars, cars.length);  // 4
delete cars[2];  // 'maruti' deleted
console.log(cars, cars.length);  // 4

// Note: delete , deletes the value but not the placeholder, there wont be any change in length
