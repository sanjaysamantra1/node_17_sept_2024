function fun1() { // regular - this : how the function is called (window)
    console.log(this); // this = global
}
fun1();

let fun2 = () => { // arrow - this : where the function is written (window)
    console.log(this); // this = {}
}
fun2();