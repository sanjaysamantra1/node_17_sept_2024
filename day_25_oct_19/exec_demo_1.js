const { exec } = require('child_process');


exec('start chrome https://www.w3schools.com/')
exec('start chrome https://www.tutorialspoint.com/')
exec('start chrome https://www.tutorialsteacher.com/')

// main thread
for (let i = 1; i <= 100000; i++) {
    console.log('Hellooooo  ', i);
}