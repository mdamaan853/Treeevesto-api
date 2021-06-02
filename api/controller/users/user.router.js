const express = require('express')
const router = express.Router()
const multer = require('multer')

const { createUsers,getAllUsers,getUsersById,loginUsers, updateUsers, deleteUsers} = require('./user.controller')
const {checkMobile} =require('../../middleware/user/checkUnique')
// const {venderValidation,venderValidationResult} =require('../../middleware/vendor/vendorValidator')
const upload = multer()

router.post('/user/register', upload.none(),checkMobile,createUsers);

router.post('/user/login',upload.none(),loginUsers);

router.get('/user',getAllUsers);

router.get('/user/:id',getUsersById);

router.patch('/user/:id',upload.none(),updateUsers);

router.delete('/user/:id',deleteUsers);


module.exports = router; 