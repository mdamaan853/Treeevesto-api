const {createProduct, getAllProduct,getProductById} = require('./product.service')
const { hashSync, compareSync } = require('bcrypt')
module.exports = ({
    createProducts:(req, res) => {
        if(req.files){
            console.log(req.files.path)
        }
            createProduct(req, (err, data) => {
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
    },
    getAllProducts: (req, res) => {
        getAllProduct(req, (err, data) => {
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
    getProductsById: (req, res) => {
        getProductById(req, (err, data) => {
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