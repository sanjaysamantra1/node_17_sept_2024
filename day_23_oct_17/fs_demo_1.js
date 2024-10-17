const fs = require('fs');

fs.readFile('./file_1.txt', 'utf8', (err, data) => {  // non-blocking
    if (err) {
        throw err;
    }
    // console.log(data.toString());
    console.log(data);
})

try {
    let fileData = fs.readFileSync('./file_1.txt', 'utf8');  // blocking 
    console.log(fileData);
} catch (err) {
    console.log(err)
}
