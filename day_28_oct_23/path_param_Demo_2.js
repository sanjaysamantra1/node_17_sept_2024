const express = require('express');
const productArr = require('../data/products.json');

const app = express(); // creare express app

// return all products
app.get('/products', (req, res) => {
    res.json(productArr);
});

// 1 product (path param)
app.get('/products/:id([0-9])', (req, res) => {
    const product = productArr.find(product => product.id === +req.params.id); // 1
    if (product) {
        res.json(product); // by default status is 200
    } else {
        res.status(204).json({});
    }
});

// return all the ratings of a product
app.get('/products/:productId([0-9])/ratings', (req, res) => {
    const product = productArr.find(product => product.id === +req.params.productId); // 1
    if (product && product.reviews) {
        res.json(product.reviews); // by default status is 200
    } else {
        res.status(204).json({});
    }
});

app.get('/products/:productId([0-9])/ratings/:ratingId', (req, res) => {
    const product = productArr.find(product => product.id === +req.params.productId); // 1
    const review = product.reviews.find(review => review.rating === +req.params.ratingId); // 1
    if (review) {
        res.json(review); // by default status is 200
    } else {
        res.status(204).json({});
    }
});

app.listen(5000, () => {
    console.log('app running at 5000')
})