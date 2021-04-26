const {createTable,getAllTable,deleteTableById, updateTableById,getTableById} = require('./specTable.service')
module.exports = ({
    createTables:(req, res) => {
        if(req.body.field){
        console.log(req.body.field.split(','))
        req.body.field=req.body.field.split(',')
        }
        createTable(req, (err, data) => {
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
    getAllTables: (req, res) => {
        getAllTable(req, (err, data) => {
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
    getTablesById: (req, res) => {
        getTableById(req, (err, data) => {
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
    updateTablesById: (req, res) => {
        if(req.body.field){
            console.log(req.body.field.split(','))
            req.body.field=req.body.field.split(',')
            }
        updateTableById(req, (err, data) => {
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
    deleteTablesById: (req, res) => {
        deleteTableById(req, (err, data) => {
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