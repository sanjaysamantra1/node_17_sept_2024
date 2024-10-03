// reverse a string using reduce

let str = 'Hello World';

let result = str.split('').reduce((rev, char) => {
    return char + rev;
})
console.log(result);