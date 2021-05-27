const {createCart,getCartById,getCartByuserId,updateCartById,deleteCartById,getAllCart} = require('./cart.service')
module.exports = ({
    createCarts:(req, res) => {
        createCart(req, (err, data) => {
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
    getAllCarts: (req, res) => {
        getAllCart(req, (err, data) => {
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
    getCartsById: (req, res) => {
        getCartById(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: "error while fetching by Id" + err
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
    getCartByusersId: (req, res) => {
        getCartByuserId(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: "Error while fetching by user Id" + err
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
    updateCartsById: (req, res) => {
        updateCartById(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: "Error while updating" + err
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
    deleteCartsById: (req, res) => {
        deleteCartById(req, (err, data) => {
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