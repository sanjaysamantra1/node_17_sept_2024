let cars = ['Tata', 'Honda', 'Maruti', 'Hundai'];

// 1. loop
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}
console.log('==================')

// 2. for-in loop
for (i in cars) {
    console.log(cars[i])
}
console.log('==================')

// 3. for-of loop
for (car of cars) {
    console.log(car);
}
console.log('==================')

// 4. forEach()  HigherOrder Function
cars.forEach((val,ind,arr)=>{
    console.log(val,ind,arr)
})
