const express = require('express')
const router = express.Router()
const multer = require('multer')

const { createVendors,getAllVendors,getVendorsById } = require('./vendor.controller')
const {checkMobile} =require('../../middleware/vendor/checkMobile')
const {venderValidation,venderValidationResult} =require('../../middleware/vendor/vendorValidator')
const upload = multer()

router.post('/vendor', upload.none(),checkMobile,venderValidation,venderValidationResult,createVendors);

router.get('/vendor',getAllVendors);

router.get('/vendor/:id',getVendorsById);

module.exports = router; 