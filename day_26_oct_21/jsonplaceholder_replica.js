const http = require('http');
const users = require('./users.json')
const comments = require('./comments.json')
const posts = require('./posts.json')

// 3 APIs  - users , posts , comments

let server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write('<h1>Server Running Fine</h1>')
    } else if (req.url == '/users') {
        res.write(JSON.stringify(users))
    } else if (req.url == '/comments') {
        res.write(JSON.stringify(comments))
    } else if (req.url == '/posts') {
        res.write(JSON.stringify(posts))
    }
    res.end();
});

server.listen(8080, () => {
    console.log('NodeJs Server Started at port 8080')
})
