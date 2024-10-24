const products = require('../../data/products.json')

let getAllproducts = (req, res) => {
    res.send(products)
}
let getProductById = (req, res) => {
    res.send(products.find(prod => prod.id == +req.params.id));
}
let addProduct = (req, res) => {
}
let updateProduct = (req, res) => {
}
let deleteProduct = (req, res) => {
}

module.exports = {
    getAllproducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
}