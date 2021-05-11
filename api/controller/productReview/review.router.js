const express = require('express')
const router = express.Router()
const multer = require('multer')

const {createReviews,getAllReviews,getReviewsById,updateReviewsById,deleteReviewsById, deleteReviews}= require('./review.controller')

const storage = multer.diskStorage({
    destination: './upload/reviewProduct_img',
    filename: (req, file, cb) => {
        return cb(null, file.fieldname + Date.now() + file.originalname)
    }
})
const upload = multer({
    storage: storage
})

router.post('/review',upload.array("reviewImages",6),createReviews);

router.get('/review',getAllReviews);

router.get('/review/:id',getReviewsById);

router.patch('/review/:id',upload.none(),updateReviewsById);

router.delete('/review/:id',deleteReviewsById);

router.delete('/review/',deleteReviews);

module.exports = router;