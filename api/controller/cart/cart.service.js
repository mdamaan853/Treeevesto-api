const cartModel = require('../../module/cart/cartModel')
module.exports = ({
    createCart: (req, res) => {
     new cartModel({
        productId: req.body.productId,
        vendorId: req.body.vendorId,
        userId: req.body.userId,
        image: req.body.image,
        name: req.body.name,
        qty: req.body.qty,
        size:req.body.size,
        price:req.body.price
        }).save((err, data) => {
        if (err){
            return res(err); 
        };
        return res(null,data)
    })
},
getAllCart: (req, res) => {
    cartModel.find().exec((err, data) => {
        if (err) return res(err);
        return res(null,data)
    })
},
getCartById: (req, res) => {
    cartModel.find({_id:req.params.id}).exec((err, data) => {
        if (err) return res(err);
        return res(null,data[0])
    })
},
getCartByuserId: (req, res) => {
    cartModel.find({userId:req.params.userId}).exec((err, data) => {
        if (err) return res(err);
        return res(null,data)
    })
},
updateCartById: (req, res) => {
    cartModel.updateOne({_id:req.params.id},{$set:req.body}).exec((err, data) => {
        if (err) return res(err);
        return res(null,data)
    })
},
deleteCartById: (req, res) => {
    cartModel.deleteOne({_id:req.params.id}).exec((err, data) => {
        if (err) return res(err);
        return res(null,data)
    })
}
})