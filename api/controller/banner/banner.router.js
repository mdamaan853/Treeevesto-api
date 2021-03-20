const express = require('express')
const router = express.Router()
const multer = require('multer')

const {createBanners,getAllBanners,getBannersById,updateBannersById,deleteBannersById}= require('./banner.controller')

const storage = multer.diskStorage({
    destination: './upload/banner_img',
    filename: (req, file, cb) => {
        return cb(null, file.fieldname + Date.now() + file.originalname)
    }
})

const upload = multer({
    storage: storage
}).single('image')

router.post('/banner',upload,createBanners);

router.get('/banner',getAllBanners);

router.get('/banner/:id',getBannersById);

router.patch('/banner/:id',upload,updateBannersById);

router.delete('/banner/:id',deleteBannersById);

module.exports = router;