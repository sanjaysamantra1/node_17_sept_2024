const express = require('express');
const employeeRouter = require('./routes/employee_routes');
const productRouter = require('./routes/product_routes');
const app = express();

app.use('/employees',employeeRouter);
app.use('/products',productRouter);

app.listen(5000, () => {
    console.log('app running at 5000')
});