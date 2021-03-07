const {createVendor, getAllVendor,getVendorById} = require('./vendor.service')
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
    getAllVendors: (req, res) => {
        getAllVendor(req, (err, data) => {
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
    }
})