const fs = require('fs');

fs.rename('file_1.txt', 'file_2.txt', (err, data) => {
    if (err) {
        console.log('Sorry, there is something wrong')
    } else {
        console.log('rename done')
    }
});
