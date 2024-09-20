// var variables work fine with global & function scope
// we cann't maintain block scope using var variables

function varTest() {
    if (true) {
        var a = 10; // declared inside a block
        console.log(`inside block a value-${a}`); // 10
    }
    console.log(`inside function a value-${a}`); // 10
}
varTest();
// even though 'a' variable is declared inside a block, we are not able restrict the scope of this variable to that block, it is visible outside the block

function letTest() {
    if (true) {
        let name = 'sachin'; // declared inside a block
        console.log(`inside block name value-${name}`); // sachin
    }
    // console.log(`inside function name value-${name}`); // ReferenceError: name is not defined
}
letTest();
// using 'let' when we declare a block variables, it's not visible outside the block