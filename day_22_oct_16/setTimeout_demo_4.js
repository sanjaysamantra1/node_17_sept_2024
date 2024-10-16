function f1() {
    console.log('I am f1...')
}
function add(a, b) {
    console.log(`Addition of ${a} & ${b} is ${a + b}`)
}
setTimeout(f1, 2000);
setTimeout(add, 4000, 10, 20);
// setTimeout(handler , timeout , ...arguments)