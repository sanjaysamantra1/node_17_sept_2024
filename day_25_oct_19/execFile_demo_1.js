const { execFile } = require('child_process');

execFile('demo.bat',{ shell: true },(error, stdout, stderr) => {
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
    console.log(stdout)
})