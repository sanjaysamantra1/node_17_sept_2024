const fs = require('fs');

fs.watch('./file_2.txt', (event, fileName) => {
    console.log(`${event} operation was done for ${fileName}`);
})

