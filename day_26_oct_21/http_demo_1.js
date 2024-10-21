const http = require('http');

let server = http.createServer((req, res) => {
    res.write('<h1>This is a Response From nodeJS Server</h1>');
    res.end();
});

server.listen(5001,()=>{
    console.log('NodeJs Server Started at port 5001')
})
