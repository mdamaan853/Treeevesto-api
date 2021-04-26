const express = require('express')
const router = express.Router()
const multer = require('multer')

const { createCategorys,getAll,getAllCategorys,getSubCatsById,deleteCategorysById } = require('./cat.controller')

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

router.get('/category/all',getAll);

router.get('/subcategory/:id',getSubCatsById);

router.delete('/category/:id',deleteCategorysById);

module.exports = router; 