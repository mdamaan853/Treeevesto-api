const vendorModel = require('../../module/vendor/vendorModel')
module.exports = ({
    createVendor: (req, res) => {
     new vendorModel({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
        pickupAddress: req.body.pickupAddress,
        pincode: req.body.pincode,
        completeAddress:req.body.completeAddress ,
        gstNo:req.body.gstNo ,
        BankaccType:req.body.BankaccType ,
        ifsc:req.body.ifsc ,
        accNumber:req.body.accNumber ,
        accHolderName:req.body.accHolderName ,
        }).save((err, data) => {
        if (err){
            return res(err)
        };
        return res(null,data)
    })
},

loginVendor: (req, res) => {
    vendorModel.find({phone:req.body.phone}).exec((err, data) => {
        if (err) {
            return res(err);
        }
        return res(null, data[0])
    })
},

getAllVendor: (req, res) => {
    vendorModel.find().exec((err, data) => {
        if (err) throw err;
        return res(null,data)
    })
},
getVendorById: (req, res) => {
    vendorModel.find({_id:req.params.id}).exec((err, data) => {
        if (err) throw err;
        return res(null,data)
    })
},
updateVendorById: (req, res) => {
    vendorModel.updateOne({_id:req.params.id},{$set:req.body}).exec((err, data) => {
        if (err) throw err;
        return res(null,data)
    })
},
deleteVendorById: (req, res) => {
    vendorModel.deleteOne({_id:req.params.id}).exec((err, data) => {
        if (err) throw err;
        return res(null,data)
    })
}

})