const express = require('express');
const { getAllproducts, getProductById, addProduct, updateProduct, deleteProduct } = require('../controllers/products_controller');

const productRouter = express.Router();

productRouter.get('/', getAllproducts)
productRouter.get('/:id', getProductById)
productRouter.post('/', addProduct)
productRouter.patch('/:id', updateProduct)
productRouter.delete('/:id', deleteProduct)

module.exports = productRouter;