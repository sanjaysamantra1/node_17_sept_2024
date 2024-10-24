const employees = require('../data/employees.json')

const express = require('express');
const app = express();

const timeLog = function (req, res, next) {
    console.log('time Log Middleware', req.method, req.url);
    console.log(new Date().toLocaleTimeString());
    next();
}

app.use(timeLog); // register the middleware

// all employees
app.get('/employees', async (req, res) => {
    console.log('/employees route')
    res.send(employees);
});
app.get('/employees/:id', async (req, res) => {
    console.log('/1 employee route')
    res.send(employees[0])
});

app.listen(5000, () => {
    console.log('app running at 5000')
});