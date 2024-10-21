const http = require('http');

const userArr = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
];

const server = http.createServer((req, res) => {
    const url = req.url;
    const userId = url.split('/').pop();

    if (url == '/') {
        res.write('<h1>Server running fine</h1>')
    } else if (url == '/users') {
        res.write(JSON.stringify(userArr))
    } else if (url.includes('/users') && userId) {
        let user = userArr.find(user => user.eId == userId);
        res.write(JSON.stringify(user));
    } else if (url.includes('/users') && userId) {

    }
    res.end();
});

server.listen(8080, () => {
    console.log('Server Running at port 8080')
})