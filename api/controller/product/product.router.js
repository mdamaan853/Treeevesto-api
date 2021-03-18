const express = require('express')
const router = express.Router()
const multer = require('multer')

const { createProducts,getAllProducts,getProductsBySubCategory,getProductsById,deleteProductsById } = require('./product.controller')

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

router.get('/product/subcat/:id',getProductsBySubCategory);

router.get('/product/:id',getProductsById);

router.delete('/product',deleteProductsById);

module.exports = router; 