import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
];
const app = express();
app.use(cors()); // middleware
app.use(cookieParser()); // middleware
app.use(morgan('short'));

app.get('/employees', (req, res) => {
    console.log('/employees route');
    res.send(employees);
});
app.get('/employees/:id', (req, res) => {
    console.log('1 employee route.........');
    const employee = employees.find((emp) => emp.id === +req.params.id);
    res.json(employee);
});
app.listen(5001, () => {
    console.log('app running at 5001');
});
