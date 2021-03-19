const addressModel = require('../../module/address/addressModal')
module.exports = ({
    createAddress: (req, res) => {
     new addressModel({
        userId: req.body.userId,
        address: req.body.address,
        pincode: req.body.pincode,
        state: req.body.state,
        date:new Date(),
        }).save((err, data) => {
        if (err){
            console.log('error...'+err)
        };
        return res(null,data)
    })
},
getAllAddress: (req, res) => {
    addressModel.find().exec((err, data) => {
        if (err) throw err;
        return res(null,data)
    })
},
getAddressByUserId: (req, res) => {
    addressModel.find({userId:req.params.userId}).exec((err, data) => {
        if (err) throw err;
        return res(null,data)
    })
},
deleteAddressById: (req, res) => {
    addressModel.findByIdAndRemove(req.params.id).exec((err, data) => {
        if (err) throw err;
        return res(null,data)
    })
},

})