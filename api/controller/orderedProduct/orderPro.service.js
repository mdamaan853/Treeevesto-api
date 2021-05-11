const orderedProModel = require('../../module/product/orderedProducts')
module.exports = ({
    createOrderProduct: (req, res) => {
     new orderedProModel({
        productId: req.body.productId,
        vendorId: req.body.vendorId,
        image: req.body.image,
        name: req.body.name,
        price: req.body.price,
        qty:req.body.qty,
        size:req.body.size,
        userId: req.body.userId,
        address: req.body.address,
        orderedStatus:req.body.orderedStatus
        }).save((err, data) => {
        if (err){
            return res(err); 
        };
        return res(null,data)
    })
},
getAllOrderProduct: (req, res) => {
    orderedProModel.find().exec((err, data) => {
        if (err) return res(err);
        return res(null,data)
    })
},
getOrderProductByVendorId: (req, res) => {
    orderedProModel.find({vendorId:req.params.vendorid}).exec((err, data) => {
        if (err) return res(err);
        return res(null,data)
    })
},
getOrderProductById: (req, res) => {
    orderedProModel.findById(req.params.id).exec((err, data) => {
        if (err) return res(err);
        return res(null,data)
    })
},
updateOrderProductById: (req, res) => {
    orderedProModel.updateOne({_id:req.params.id},{$set:req.body}).exec((err, data) => {
        if (err) return res(err);
        return res(null,data)
    })
},
deleteOrderProductById: (req, res) => {
    orderedProModel.deleteOne({_id:req.params.id}).exec((err, data) => {
        if (err) return res(err);
        return res(null,data)
    })
}
})