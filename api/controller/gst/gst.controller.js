const {createGst,getAllGst,getGstById,updateGstById,deleteGstById} = require('./gst.service')
module.exports = ({
    createGsts:(req, res) => {
        createGst(req, (err, data) => {
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
    getAllGsts: (req, res) => {
        getAllGst(req, (err, data) => {
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
    getGstsById: (req, res) => {
        getGstById(req, (err, data) => {
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
    updateGstsById: (req, res) => {
        updateGstById(req, (err, data) => {
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
    deleteGstsById: (req, res) => {
        deleteGstById(req, (err, data) => {
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