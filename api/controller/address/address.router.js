const express = require('express')
const router = express.Router()
const multer = require('multer')

const { createAddresses,getAllAddresses,getAddressesByUserId, deleteAddressesById } = require('./address.controller')

const upload = multer()

router.post('/address', upload.none(),createAddresses);

router.get('/address',getAllAddresses);

router.get('/address/:userId',getAddressesByUserId);

router.delete('/address/:id',deleteAddressesById);

module.exports = router; 