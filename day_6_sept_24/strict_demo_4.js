'use strict'

function add(a, a, a) { // SyntaxError: Duplicate parameter name not allowed in this context
    console.log(a + a + a); // 12
}

add(2, 3, 4); // a = 4;