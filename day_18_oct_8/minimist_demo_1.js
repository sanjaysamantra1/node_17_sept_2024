const minimist = require('minimist');
// minimist is an NPM package, not an inbuilt package of nodejs
const argsArr = process.argv.slice(2);
console.log(argsArr); // array

let argsObj = minimist(argsArr);
console.log(argsObj.name , argsObj.age, argsObj.add);

