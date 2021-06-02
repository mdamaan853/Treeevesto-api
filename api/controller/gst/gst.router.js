const express = require('express')
const router = express.Router()
const multer = require('multer')

const {createGsts,getAllGsts,getGstsById,updateGstsById,deleteGstsById}= require('./gst.controller')

const upload = multer()

router.post('/gst',upload.none(),createGsts);

router.get('/gst',getAllGsts);

router.get('/gst/:id',getGstsById);

router.patch('/gst/:id',upload.none(),updateGstsById);

router.delete('/gst/:id',deleteGstsById);

module.exports = router;