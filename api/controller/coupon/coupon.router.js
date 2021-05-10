const express = require('express')
const router = express.Router()
const multer = require('multer')

const {createCoupons,getAllCoupons,getCouponsById,deleteCoupons,deleteCouponsById,updateCouponsById}= require('./coupon.controller')

const upload = multer().none()

router.post('/coupon',upload,createCoupons);

router.get('/coupon',getAllCoupons);

router.get('/coupon/:id',getCouponsById);

router.patch('/coupon/:id',upload,updateCouponsById);

router.delete('/coupon/',deleteCoupons);

router.delete('/coupon/:id',deleteCouponsById);

module.exports = router;