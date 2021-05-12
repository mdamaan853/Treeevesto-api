const {createProduct, getAllProduct,getProductsBySubCategory,getProductById,getProductByVendorId,deleteProductById,filterProduct} = require('./product.service')
const { hashSync, compareSync } = require('bcrypt')
module.exports = ({
    createProducts:(req, res) => {
        if(req.files){
            req.body.productImages=req.files.map(element => {
                return element.path
            });
            console.log(req.body.productImages)
            }  
          createProduct(req, (err, data) => {
                if (err) {
                    res.status(500)
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
    getProductsBySubCategory: (req, res) => {
        getProductsBySubCategory(req, (err, data) => {
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
    },
    getProductsByVendorId: (req, res) => {
        getProductByVendorId(req, (err, data) => {
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
    },
    filterProducts: (req, res) => {
        // if(req.body.color){
        //     req.body.color=req.body.color.split(',') 
        // }
        // if(req.body.size){
        //     req.body.size=req.body.size.toUpperCase()
        //     req.body.size=req.body.size.split(',')
        // }
        filterProduct(req,(err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg:"Error "+err
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
    deleteProductsById: (req, res) => {
        deleteProductById(req, (err, data) => {
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