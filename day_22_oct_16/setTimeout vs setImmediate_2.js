const fs = require('fs');

fs.readFile('./abc.txt', 'utf-8', (err, data) => {
    console.log(data);
    setTimeout(console.log, 0, 'SetTimeout...');
    setImmediate(console.log, 'setImmediate...');
})