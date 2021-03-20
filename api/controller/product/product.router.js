const express = require('express')
const router = express.Router()
const multer = require('multer')

const { createProducts,getAllProducts,getProductsBySubCategory,getProductsById,getProductsByVendorId,deleteProductsById } = require('./product.controller')

const auth = require('../../middleware/Auth')

const storage = multer.diskStorage({
    destination: './upload/category_img',
    filename: (req, file, cb) => {
        return cb(null, file.fieldname + Date.now() + file.originalname)
    }
})
const upload = multer({
    storage: storage
})

router.post('/product', upload.array('productImages', 12),createProducts);

router.get('/product',getAllProducts);
// <<<<<<< HEAD
// =======

router.get('/product/subcat/:id',getProductsBySubCategory);
// >>>>>>> 11b5b97f16d18f8196b83c56e6e6a1cad57c5643

router.get('/product/:id',getProductsById);

router.get('/product/vendor/:id',getProductsByVendorId);

router.delete('/product',deleteProductsById);

module.exports = router; 