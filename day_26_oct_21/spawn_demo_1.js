const { spawn } = require('child_process');

for (let i = 1; i <= 3; i++) {
    const fileName = `test_${i}.js`; // test_1.js test_2.js test_3.js
    const childProcess = spawn('node', [fileName]);

    childProcess.stdout.on('data', (data) => {
        console.log('stdout : ', data.toString())
    })
    childProcess.stderr.on('data', (data) => {
        console.log('stderr : ', data)
    })
    childProcess.on('close', (code) => {
        console.log('child process exited with code ', code)
    })
}