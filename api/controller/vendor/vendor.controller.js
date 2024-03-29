const {createVendor, getAllVendor,getVendorById,updateVendorById,deleteVendorById,loginVendor} = require('./vendor.service')
const jwt = require('jsonwebtoken')
const { hashSync, compareSync } = require('bcrypt')
module.exports = ({
    createVendors:(req, res) => {
        if (req.body.password == req.body.cpassword) {
            req.body.password = hashSync(req.body.password, 10)
            createVendor(req, (err, data) => {
                if (err) {
                    res.json({
                        success: 0,
                        msg: "error while inserting " + err
                    })
                } else {
                    res.json({
                        success: 1,
                        msg: "successfully regestred",
                        result:data
                    })
                }
            })
        } else {
            res.json({
                success: 0,
                msg: "password did't match"
            })
        }
    },

    loginVendors:(req,res)=>{
    loginVendor(req,(err,data)=>{
    if (err) {
        res.json({
            success: 0,
            msg: "error while login " + err
        })
    }
    if (!data) {
        res.json({
            success: 0,
            msg: "you have not regestred yet"
        })
    } else {
        var result = compareSync(req.body.password, data.password)
        if (result) {
            var token = jwt.sign({
                email: data.email,
                mobile: data.mobile
            }, 'mySecretKey', {
                expiresIn: '24h'
            })
            res.json({
                success: 0,
                msg: "you are loggedin",
                token: token,
                email:data.email,
                userId:data._id
            })
        } else {
            res.json({
                success: 0,
                msg: 'invalid credentials'
            })
        }
    }
  })
    },
    getAllVendors: (req, res) => {
        getAllVendor(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: "error while fetching " + err
                })
            }
             else {
                res.json({
                    success: 1,
                    result: data
                })
            }
        })
    },
    getVendorsById: (req, res) => {
        getVendorById(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: "Error while fetching by id " + err
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
    updateVendorById: (req, res) => {
        if(req.file){
          console.log(req.file)
          req.body.signature_docs=req.file.path;
            }  
        updateVendorById(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: "Error while fetching by id " + err
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
    deleteVendorsById: (req, res) => {
        deleteVendorById(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: "Error while deleting" + err
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
    }
})