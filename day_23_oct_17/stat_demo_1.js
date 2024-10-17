const fs = require('fs');

fs.stat('./file_1.txt', 'utf8', (err, data) => {  // non-blocking
    if (err) {
        throw err;
    }
    // console.log(data.toString());
    console.log(data);
})

