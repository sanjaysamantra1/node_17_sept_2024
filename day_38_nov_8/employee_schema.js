const mongoose = require('mongoose');
const { Schema } = mongoose;

// create a schema
const employeeSchema = new Schema({
    eId: { type: String, required: true },
    name: { type: String, required: true },
    sal: Number,
    gender: String
});

// Create a Model
const EmployeeModel = mongoose.model('employees', employeeSchema);

module.exports = { EmployeeModel };