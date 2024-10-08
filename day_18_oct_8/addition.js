
console.log(process.argv); // process is a inbuilt module of nodejs
// from process.argv first values are not much required
let a = +process.argv[2]
let b = +process.argv[3]
console.log(`Addition of ${a} & ${b} is ${a + b}`)