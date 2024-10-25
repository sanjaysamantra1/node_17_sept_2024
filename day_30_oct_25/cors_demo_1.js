const employees = require('../data/employees.json')
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors()); // middleware

app.get('/employees', (req, res,next) => {
    console.log('/employees route')
    res.send(employees);
});

app.listen(5001, () => {
    console.log('app running at 5001')
});