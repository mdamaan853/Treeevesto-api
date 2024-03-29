const express = require('express')
const router = express.Router()
const multer = require('multer')

const {createCarts,getAllCarts,getCartByusersId,getCartsById,updateCartsById,deleteCartsById} = require('./cart.controller')

const {checkProduct} = require('../../middleware/cart/checkUnique')

const upload = multer().none() 

router.post('/cart', upload,checkProduct,createCarts);

router.get('/cart',getAllCarts);

router.get('/cart/:id',getCartsById);

router.get('/cart/user/:userId',getCartByusersId);  

router.patch('/cart/:id',upload,updateCartsById);

router.delete('/cart/:id',deleteCartsById);

module.exports = router; 