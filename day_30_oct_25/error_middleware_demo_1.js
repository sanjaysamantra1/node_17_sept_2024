const employees = require('../data/employees.json')
const express = require('express');
const app = express();

let myErrorHandler1 = (err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || 'Something went wrong, Try again!';

    res.status(errorStatus).json({
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
        success: false,
    });
};
app.use(myErrorHandler1);

// all employees
app.get('/employees', (req, res,next) => {
    console.log('/employees route')
    res.send(employees);
});
// 1 employee
app.get('/employees/:id', (req, res) => {
    console.log('/1 employee route')
    if(+req.params.id <= 10){
        res.send(employees[0])
    }else{
        next(new Error('Something went wrong........'))
    }
});

app.listen(5001, () => {
    console.log('app running at 5001')
});