const { Router } = require('express');
const router = Router();
const { createProduct, deleteProductById, updateProductById, getProducts, getProductById } = require('../controllers/productsControllers.js');


router.get('/products/get', getProducts)
router.get('/products/:productId', getProductById)
router.post('/products/create', createProduct)
router.delete('/products/delete/:productId', deleteProductById)
router.put('/products/update/:productId', updateProductById)



module.exports = router;