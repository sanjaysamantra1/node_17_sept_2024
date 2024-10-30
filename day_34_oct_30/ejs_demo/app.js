const products = require('../../data/products.json');
const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
    res.render("pages/home")
});
app.get('/about', (req, res, next) => {
    res.render("pages/about")
});
app.get('/careers', (req, res, next) => {
    res.render("pages/careers")
});
app.get('/products', (req, res, next) => {
    res.render("pages/products", { products })
});
app.listen(5001, () => {
    console.log('app running at 5001')
});