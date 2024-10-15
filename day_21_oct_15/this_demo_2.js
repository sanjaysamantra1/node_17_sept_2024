function f1() {
    console.log(this); // this = global
}
let f2 = () => {
    console.log(this); // this = {} (where it is written)
}
function f3(){
    'use strict'
    console.log(this); // undefined
}
let f4 = () => {
    'use strict'
    console.log(this);  // {}
}

f1();
f2();
f3();
f4();