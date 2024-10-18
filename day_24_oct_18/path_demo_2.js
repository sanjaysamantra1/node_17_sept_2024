const path = require('path');

let pathObj = path.parse('d://nodejs/day24/javascript/abc.js')
console.log(pathObj);

let pathStr = path.format(
    {
        root: 'd:/',
        dir: 'd://nodejs/day24/javascript',
        base: 'abc.js',
        ext: '.js',
        name: 'abc'
      }
)
console.log(pathStr)