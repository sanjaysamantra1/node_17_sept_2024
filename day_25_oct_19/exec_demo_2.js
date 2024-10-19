const { exec } = require('child_process');
const { writeFile } = require('fs');

exec('dir', (error, stdout, stderr) => {
    // error - if the command is not found
    if (error) {
        console.log(error.message);
        return;
    }
    // if error occurs while executing the command
    if (stderr) {
        console.log(stderr);
        return;
    }
    writeFile('abc.txt', stdout, (err, data) => {
        if (err) throw err;
        console.log('data written to abc.txt')
    });
})


// main thread
for (let i = 1; i <= 10000; i++) {
    console.log('Hellooooo  ', i);
}