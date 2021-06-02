const cartModel = require('../../module/cart/cartModel')
module.exports = ({ 
    checkProduct: (req, res, next) => {
        cartModel.find({ $and: [ { productId:req.body.productId },{userId:req.body.userId }] }).exec((err, data) => {
            if (err) {
             return res.json({
                    success: 0,
                    msg:"error ",
                    err: err
                })
            }
            
            if (data.length > 0) {
                console.log(data)
                    return res.json({
                        success: 0,
                        msg: "product already exist",
                    })
            }
            next();
        })
    }
})