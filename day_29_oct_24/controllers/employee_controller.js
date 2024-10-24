const employees = require('../../data/employees.json')

let getAllEmployees = (req, res) => {
    res.send(employees)
}
let getEmployeeById = (req, res) => {
    res.send(employees.find(emp => emp.id == +req.params.id));
}
let addEmployee = (req, res) => {
    return employees;
}
let updateEmployee = (req, res) => {
    return employees;
}
let deleteEmployee = (req, res) => {
    return employees;
}

module.exports = {
    getAllEmployees,
    getEmployeeById,
    addEmployee,
    updateEmployee,
    deleteEmployee
}