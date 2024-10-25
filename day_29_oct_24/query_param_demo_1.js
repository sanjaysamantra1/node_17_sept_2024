const express = require('express');
const app = express();

let employeeArr = [
    { id: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { id: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { id: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { id: 102, name: 'sita', sal: 9000, gender: 'female' },
    { id: 105, name: 'deepak', sal: 8000, gender: 'male' }
];

// All Emplyees
app.get('/employees', (req, res) => {
    res.json(employeeArr);
});

// 1 employee (path param)
app.get('/employees/:id', (req, res) => {
    const employee = employeeArr.find(emp => emp.id === +req.params.id);
    res.json(employee);
});

// search employees by gender and salary (query param)
app.get('/employee', (req, res) => {
    const { gender, sal } = req.query;
    const filteredEmps = employeeArr.filter(emp => emp.gender==gender && emp.sal==sal);
    res.json(filteredEmps);
});

app.listen(5000, () => {
    console.log('app running at 5000')
});