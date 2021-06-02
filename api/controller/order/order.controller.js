var nodemailer = require('nodemailer');
const { createOrder,getAllOrder,getOrderById,getOrderByUserId,deleteOrderById,updateOrderById} = require('./order.service')
module.exports = ({
    createOrders: (req, res) => {
        createOrder(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: "error while inserting " + err
                })
            } else {
                res.json({
                    success: 1,
                    result: data
                })
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
        if(req.body.emailContent){
            console.log(req.body.emailContent)
      var transporter =nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'mr.devil27102001@gmail.com',
          pass: 'Idontthicksoo'
        }
      });
      
      var mailOptions = {
        from: 'mr.devil27102001@gmail.com',
        to: 'mdamaan853@gmail.com',
        subject:'order Placed...',
        html:`${req.body.emailContent}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
        }
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