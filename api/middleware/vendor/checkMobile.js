const vendorModel = require('../../module/vendor/vendorModel')
module.exports = ({
    checkMobile: (req, res, next) => {
        vendorModel.find({phone:req.body.phone}).exec((err, data) => {
            console.log(data)
            if (err) {
                console.log(err)
                res.json({
                    success: 0,
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