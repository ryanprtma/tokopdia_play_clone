const express = require('express');
const router = express.Router();
const ProductsController = require('../../api/products/controller')
const productsController = new ProductsController()

router.post('/products', async (req, res) => {
    await productsController.postProductsController(req, res);
});

module.exports =  router;