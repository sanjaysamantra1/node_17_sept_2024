const employees = require('../data/employees.json')

const express = require('express');
const app = express();

const timeLog = function (req, res, next) {
    console.log('time Log Middleware', req.method, req.url);
    console.log(new Date().toLocaleTimeString());
    next();
}

// app.use(timeLog); // register the middleware

// all employees
app.get('/employees',  (req, res) => {
    console.log('/employees route')
    res.send(employees);
});
app.get('/employees/:id',  (req, res) => {
    console.log('/1 employee route')
    res.send(employees[0])
});

app.listen(8080, () => {
    console.log('app running at 8080')
});