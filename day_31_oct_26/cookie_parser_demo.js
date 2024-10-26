const employees = require('../data/employees.json')
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cors()); // middleware
app.use(cookieParser()); // middleware

app.get('/employees', (req, res,next) => {
    console.log('/employees route')
    res.send(employees);
});
app.get('/employees/:id', (req, res) => {
    console.log('1 employee route.........')
    const employee = employeeArr.find(emp => emp.id === +req.params.id);
    res.json(employee);
});

app.get('/setCookie', (req, res) => {
    res.cookie('name','sanjay')
    res.cookie('add','bangalore')
    res.send('Cookies are saved.....');
});
app.get('/getCookie', (req, res,next) => {
    res.send(req.cookies)
});
app.get('/deleteCookie', (req, res,next) => {
    res.clearCookie('add')
    res.send(`add is delete from cookie list`)
});

app.listen(5001, () => {
    console.log('app running at 5001')
});