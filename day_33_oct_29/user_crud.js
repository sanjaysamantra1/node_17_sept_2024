const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const app = express(); // creare express app
app.use(express.json()); // to read request body in json format
app.use(cors());
app.use(helmet());

let userArr = [
    { id: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { id: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { id: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { id: 102, name: 'sita', sal: 9000, gender: 'female' },
    { id: 105, name: 'deepak', sal: 8000, gender: 'male' }
];
// endPoints
app.get('/', (req, res) => {
    const { params, body, ip, prototcol, hostname, method } = req; // object de-structuring
    res.send({ params, body, ip, prototcol, hostname, method })
});

// return all users
app.get('/users', (req, res) => {
    res.json(userArr);
});

// 1 user (path param)
app.get('/users/:myid([0-9]{1,3})', (req, res) => {
    console.log(req.params.myid)
    const user = userArr.find(user => user.id === parseInt(req.params.myid)); // "101"
    if (user) {
        res.json(user); // by default status is 200
    } else {
        res.status(204).json({});
    }
});

// insert user (collect the payload, insert the datat to array)
app.post('/users', (req, res) => {
    const newUser = req.body;
    userArr.push(newUser);
    res.status(201).json(newUser);
});

// update user
app.patch('/users/:id', (req, res) => {
    const user = userArr.find(user => user.id === parseInt(req.params.id));
    let updatedUser = {};
    userArr = userArr.map(user => {
        if (user.id === +req.params.id) {
            updatedUser = { ...user, ...req.body };
            return updatedUser
        } else {
            return user;
        }
    })

    if (user) {
        res.json(updatedUser);
    } else {
        res.status(204).json({});
    }
});

app.listen(5000, () => {
    console.log('app running at 5000')
})