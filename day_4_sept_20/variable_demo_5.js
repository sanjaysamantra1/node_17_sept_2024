var a = 10; // global

function demo1() {
    var b = 20; // function 
    d = 40;  // even though it's declared inside a function, it;s a global variable
    console.log(`inside demo-1 a value is-${a}`); // yes
    console.log(`inside demo-1 b value is-${b}`); // yes
    // console.log(`inside demo-1 c value is-${c}`); // No
    console.log(`inside demo-1 d value is-${d} \n`); // yes
}
function demo2() {
    var c = 30; // function 
    console.log(`inside demo-2 a value is-${a}`); // yes
    // console.log(`inside demo-2 b value is-${b}`); // No
    console.log(`inside demo-2 c value is-${c}`); // Yes
    console.log(`inside demo-2 d value is-${d} \n`); // yes
}
demo1();
demo2();

console.log(`in global scope , a value is-${a}`); // yes
// console.log(`b value is-${b}`); // No
// console.log(`c value is-${c}`); // No

// Note: when a variable is declared without var/let/const , the scope of that variable is global, no matter where that is declared