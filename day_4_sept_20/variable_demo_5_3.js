for (var i = 1; i <= 3; i++) {
    console.log(`inside for loop i value-${i}`)
}
console.log(`outside for loop i value-${i} \n`); // i value is accessible even outside the loop, this was not expected


for (let j = 1; j <= 3; j++) {
    console.log(`inside for loop j value-${j}`)
}
// console.log(`outside for loop j value-${j}`);  // ReferenceError: j is not defined