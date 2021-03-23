const express = require('express')
const router = express.Router()
const multer = require('multer')

// const auth = require('../../middleware/auth')
const {createOrders,getAllOrders,getOrdersById,updateOrdersByUserId,getOrdersByUserId,deleteOrdersById} = require('./order.controller')

const upload = multer()

router.post('/order', upload.none(),createOrders)

router.get('/order', getAllOrders)

router.get('/order/:id', getOrdersById)

router.get('/order/user/:userId',getOrdersByUserId)

router.patch('/order/:id', upload.none(), updateOrdersByUserId)

router.delete('/delete/:id', deleteOrdersById)

module.exports = router