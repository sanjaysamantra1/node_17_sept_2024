const express = require('express');
const app = express(); // creare express app

let userArr = [
    { id: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { id: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { id: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { id: 102, name: 'sita', sal: 9000, gender: 'female' },
    { id: 105, name: 'deepak', sal: 8000, gender: 'male' }
];


// return all users
app.get('/users', (req, res) => {
    res.json(userArr);
});

// 1 user (path param)
app.get('/users/:id([0-9]{1,3})', (req, res) => {
    console.log(req.params.id)
    const user = userArr.find(user => user.id === parseInt(req.params.id)); // "101"
    if (user) {
        res.json(user); // by default status is 200
    } else {
        res.status(204).json({});
    }
});

app.listen(5000, () => {
    console.log('app running at 5000')
})