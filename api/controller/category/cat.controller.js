const {createCategory,getAll, getAllCategory,getSubCatById, deleteCategoryById} = require('./cat.service')
module.exports = ({
    createCategorys:(req, res) => {
        if(req.file){
            console.log(req.file)
        }
        createCategory(req, (err, data) => {
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
    getAll: (req, res) => {
        getAll(req, (err, data) => {
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
    getAllCategorys: (req, res) => {
        getAllCategory(req, (err, data) => {
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
    getSubCatsById: (req, res) => {
        getSubCatById(req, (err, data) => {
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
    deleteCategorysById: (req, res) => {
        deleteCategoryById(req, (err, data) => {
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