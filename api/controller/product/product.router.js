const express = require('express')
const router = express.Router()
const multer = require('multer')

const { createProducts,getAllProducts,getProductsById } = require('./product.controller')

const auth = require('../../middleware/auth')

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

router.get('/product',auth,getAllProducts);

router.get('/product/:id',getProductsById);

module.exports = router; 