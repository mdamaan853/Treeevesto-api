const specTableModal = require('../../module/specTable/specTableModal')
module.exports = ({
    createTable: (req, res) => {
     new specTableModal({
        field: req.body.field,
        catId: req.body.catId,
        }).save((err, data) => {
        if (err){
            return res(err); 
        };
        return res(null,data)
    })
},
getAllTable: (req, res) => {
    specTableModal.find().exec((err, data) => {
        if (err) throw err;
        return res(null,data)
    })
},
getTableById: (req, res) => {
    specTableModal.findById(req.params.id).exec((err, data) => {
        if (err) throw err;
        return res(null,data)
    })
},
updateTableById: (req, res) => {
    specTableModal.updateOne({_id:req.params.id},{$set:req.body}).exec((err, data) => {
        if (err) throw err;
        return res(null,data)
    })
},
deleteTableById: (req, res) => {
    specTableModal.deleteOne({_id:req.params.id}).exec((err, data) => {
        if (err) throw err;
        return res(null,data)
    })
}
})