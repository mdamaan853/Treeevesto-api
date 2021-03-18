const express = require('express')
const router = express.Router()
const multer = require('multer')

const { createVendors,getAllVendors,getVendorsById,updateVendorById,loginVendors,deleteVendorsById} = require('./vendor.controller')
const {checkMobile} =require('../../middleware/vendor/checkMobile')
const {venderValidation,venderValidationResult} =require('../../middleware/vendor/vendorValidator')
const upload = multer()

router.post('/vendor', upload.none(),checkMobile,venderValidation,venderValidationResult,createVendors);

router.post('/vendor/login',upload.none(),loginVendors);

router.get('/vendor',getAllVendors);

router.get('/vendor/:id',getVendorsById);

router.patch('/vendor/:id',updateVendorById);

router.delete('/vendor/:id',deleteVendorsById);



module.exports = router; 