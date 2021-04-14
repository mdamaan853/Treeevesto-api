var nodemailer = require('nodemailer');
const { createOrder,getAllOrder,getOrderById,getOrderByUserId,deleteOrderById,updateOrderById} = require('./order.service')
module.exports = ({
    createOrders: (req, res) => {
        createOrder(req, (err, data) => {
            if (err) {
                console.log(err)
                res.json({
                    success: 0,
                    msg: "error while inserting " + err
                })
            } else {
                res.json({
                    success: 1,
                    result: data
                })
                console.log(data)
                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                      user: 'mdamaan853@gmail.com',
                      pass: 'Jamshedpur_123'
                    }
                  });
                  
                  var mailOptions = {
                    from: 'mdamaan853@gmail.com',
                    to:data.customerEmail,
                    subject: 'Order placed ',
                    text: `hello ${data.customerName} your order for  
                    ${data.cart} is placed it will be deliver at 
                    ${data.address}
                    order Id: ${data._id}
                    Total amount is ${data.totalAmount}
                    it will be delivered soon 
                    `
                  };
                  
                  transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                      console.log(error);
                    } else {
                      console.log('Email sent: ' + info.response);
                    }
                  });
            }
        })
    },
    getAllOrders: (req, res) => {
        getAllOrder(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: "error while fetching " + err
                })
            } else {
                res.json({
                    success: 1,
                    result: data
                })
            }
        })
    },
    getOrdersByUserId: (req, res) => {
        getOrderByUserId(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: "error while fetching by id " + err
                })
            }
            if (!data) {
                res.json({
                    success: 0,
                    msg: "no records found"
                })
            } else {
                res.json({
                    success: 1,
                    result: data
                })
            }
        })
    },
    getOrdersById: (req, res) => {
        getOrderById(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: "error while fetching by id " + err
                })
            }
            if (!data) {
                res.json({
                    success: 0,
                    msg: "no records found"
                })
            } else {
                res.json({
                    success: 1,
                    result: data
                })
            }
        })
    },
    updateOrdersByUserId: (req, res) => {
        updateOrderById(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: "error while updateing " + err
                })
            } else {
                res.json({
                    success: 1,
                    result: data
                })
            }
        })
    },
    deleteOrdersById: (req, res) => {
        deleteOrderById(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: "unable to delete " + err
                })
            } else {
                res.json({
                    success: 1,
                    msg: "successfully deleted"
                })
            }
        })
    }
})