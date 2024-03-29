const {createOrderProduct,getAllOrderProduct,getOrderProductById,updateOrderProductById,deleteOrderProductById,getOrderProductByVendorId,getOrderedProductDetail} = require('./orderPro.service')
module.exports = ({
    createOrderProducts:(req, res) => {
        if(req.file){
            req.body.file=req.file.path;
        }
        createOrderProduct(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: "error while inserting" + err
                })
            } else {
                res.json({
                    success: 1,
                    result: data
                })
            }
        })
    },
    getAllOrderProducts: (req, res) => {
        getAllOrderProduct(req, (err, data) => {
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
    getOrderProductsByVendorId: (req, res) => {
        getOrderProductByVendorId(req, (err, data) => {
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
    getOrderProductsById: (req, res) => {
        getOrderProductById(req, (err, data) => {
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
    getOrderedProductDetails: (req, res) => {
        getOrderedProductDetail(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: "Error while fetching by id " + err
                })
            }
            if (data.length == 0) {
                res.json({
                    success: 0,
                    msg: "no records found",
                    result:0
                })
            } else {
                res.json({
                    success: 1,
                    msg:"Product found",
                    result:1
                })
            }
        })
    },
    updateOrderProductsById: (req, res) => {
        if(req.file){
            req.body.file=req.file.path;
        }
        updateOrderProductById(req, (err, data) => {
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
    deleteOrderProductsById: (req, res) => {
        deleteOrderProductById(req, (err, data) => {
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