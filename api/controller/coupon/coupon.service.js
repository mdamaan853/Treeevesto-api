const couponModal = require('../../module/coupon/coupon.model')
module.exports = ({
    createCoupon: (req, res) => {
     new couponModal({
        couponCode: req.body.couponCode,
        couponName: req.body.couponName,
        couponDesc: req.body.couponDesc,
        discountPercent: req.body.discountPercent,
        discountPrice: req.body.discountPrice,
        }).save((err, data) => {
        if (err){
        return res(err) 
        };
        return res(null,data)
    })
},
getAllCoupon: (req, res) => {
    couponModal.find().exec((err, data) => {
        if (err)  return res(err) ;
        return res(null,data)
    })
},
getCouponById: (req, res) => {
    couponModal.findById(req.params.id).exec((err, data) => {
        if (err)  return res(err) ;
        return res(null,data)
    })
},
updateCouponById: (req, res) => {
    couponModal.updateOne({_id:req.params.id},{$set:req.body}).exec((err, data) => {
        if (err)  return res(err) ;
        return res(null,data)
    })
},
deleteCouponById: (req, res) => {
    couponModal.deleteOne({_id:req.params.id}).exec((err, data) => {
        if (err)  return res(err) ;
        return res(null,data)
    })
},
deleteCoupon: (req, res) => {
    couponModal.deleteMany().exec((err, data) => {
        if (err)  return res(err) ;
        return res(null,data)
    })
}

})