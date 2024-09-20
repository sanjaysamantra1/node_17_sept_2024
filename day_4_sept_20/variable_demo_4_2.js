let a = 10;  // global
console.log(`Global-${a}`); // 10

function demo() {
    let a = 100;  // function
    console.log(`Function-${a}`); // 100
    if (true) {
        let a = 1000; // block
        console.log(`Block-${a}`); // 1000
    }
}
demo();