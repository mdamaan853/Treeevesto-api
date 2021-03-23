const orderModel = require('../../module/order/orderModal')
module.exports = ({
    createOrder: (req, res) => {
     new orderModel({
        userId:req.body.userId,
        transactionNo:req.body.transactionNo,
        cart:req.body.cart,
        orderType:req.body.orderType,
        totalAmount:req.body.totalAmount,
        address:req.body.address,
        transactionNo:req.body.transactionNo,
        transactionStatus:req.body.transactionStatus,
        orderDetails:req.body.orderDetails,
        orderStatus:req.body.orderStatus,
        couponsUsed:req.body.couponsUsed,
        couponID:req.body.couponID,
        customerPhone:req.body.customerPhone,
        customerCity:req.body.customerCity,
        customerPincode:req.body.customerPincode,
        customerState:req.body.customerState,
        refund:req.body.refund,
        date:new Date(),
        }).save((err, data) => {
        if (err){
        return res(err) 
        };
        return res(null,data)
    })
},
getAllOrder: (req, res) => {
    orderModel.find().exec((err, data) => {
        if (err) throw err;
        return res(null,data)
    })
},
getOrderById: (req, res) => {
    orderModel.findById(req.params.id).exec((err, data) => {
        if (err) throw err;
        return res(null,data)
    })
},
getOrderByUserId: (req, res) => {
    orderModel.find({userId:req.params.userId}).exec((err, data) => {
        if (err) throw err;
        return res(null,data)
    })
},
updateOrderById: (req, res) => {
    orderModel.updateOne({_id:req.params.id},{$set:req.body}).exec((err, data) => {
        if (err) throw err;
        return res(null,data)
    })
},
deleteOrderById: (req, res) => {
    sectionModel.findByIdAndRemove(req.params.id).exec((err, data) => {
        if (err) throw err;
        return res(null,data)
    })
}
})