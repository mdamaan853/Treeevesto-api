const express = require('express')
const router = express.Router()
const multer = require('multer')

const { createCategorys,getAllCategorys,getSubCatsById } = require('./cat.controller')

const storage = multer.diskStorage({
    destination: './upload/category_img',
    filename: (req, file, cb) => {
        return cb(null, file.fieldname + Date.now() + file.originalname)
    }
})
const upload = multer({
    storage: storage
}).single('catImage') 

router.post('/category', upload,createCategorys);

router.get('/category',getAllCategorys);

router.get('/subcategory/:id',getSubCatsById);

module.exports = router; 