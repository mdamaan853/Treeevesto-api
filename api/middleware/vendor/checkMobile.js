const vendorModel = require('../../module/vendor/vendorModel')
module.exports = ({
    checkMobile: (req, res, next) => {
        // console.log(req.body.phone)
        vendorModel.find({phone:req.body.phone}).exec((err, data) => {
            if (err) {
             return res.json({
                    success: 0,
                    msg:"error ",
                    err: err
                })
            }
            if (data.length > 0) {
                return res.json({
                    success: 0,
                    msg: "Mobile number already registred"
                })
            }
            next();
        })
    }
})