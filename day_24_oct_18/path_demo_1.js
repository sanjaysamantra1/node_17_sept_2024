const path = require('path');

console.log(path.sep)
console.log(path.delimiter)
console.log(path.basename('C:/Users/SANJAY/OneDrive/Desktop/NareshIT/node_17_sept_2024/day_24_oct_18/path_demo_1.js'))
console.log(path.dirname('C:/Users/SANJAY/OneDrive/Desktop/NareshIT/node_17_sept_2024/day_24_oct_18/path_demo_1.js'))
console.log(path.extname('C:/Users/SANJAY/OneDrive/Desktop/NareshIT/node_17_sept_2024/day_24_oct_18/path_demo_1.js'))
console.log(path.isAbsolute('C:/Users/SANJAY/OneDrive/Desktop/NareshIT/node_17_sept_2024/day_24_oct_18/path_demo_1.js'))
console.log((path.join('/abc/','/pqr/'))); 
console.log((''.concat('/abc/','/pqr/'))); 
console.log(path.normalize('day_24_oct_18/path_demo_1.js/..'))
