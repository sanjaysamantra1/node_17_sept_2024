const fs = require('fs');

fs.readFile('./file_1.txt', 'utf-8', function (err, data1) {
    if (err) {
        throw err;
    }
    console.log(data1);
    fs.readFile('./file_2.txt', 'utf-8', function (err, data2) {
        if (err) {
            throw err;
        }
        console.log(data2);

        fs.writeFile('./file_3.txt', `${data1} ${data2}`,'utf-8', function (err, data2) {
            if (err) {
                throw err;
            }
            console.log(data2);
            
        })
        
    })
})