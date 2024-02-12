const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController');


router.get('/active', productController.activeProducts);


router.post('/create', productController.createProduct);


router.get('/:product_id', productController.getProduct);


router.delete('/archive/:product_id', productController.archiveProduct);






module.exports = router;