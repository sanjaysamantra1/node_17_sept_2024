const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { EmployeeModel } = require('./employee_schema');

const app = express();

// middlewares
app.use(express.json());
app.use(cors());


async function connectToDB() {
    await mongoose.connect('mongodb://127.0.0.1/sept_2024');
    console.log('Database connection established')
}

app.get('/employees', async (req, res) => {
    let employees = await EmployeeModel.find();
    res.json(employees);
})
app.get('/employees/:id', async (req, res) => {
    let empId = req.params.id;
    let employee = await EmployeeModel.findById(empId);
    res.json(employee);
})
app.get('/employeesByeId/:id', async (req, res) => {
    let empId = +req.params.id;
    console.log(empId)
    let employee = await EmployeeModel.findOne({"eId": "101" }).exec();
    res.json(employee);
})
app.post('/employees', async (req, res) => {
    const payload = req.body;
    try{
        let createResponse = await EmployeeModel.create(payload);
        res.json(createResponse);
    }catch(err){
        res.json(err)
    }
})

app.listen(5000, async () => {
    await connectToDB();
    console.log('app running at 5000')
});

