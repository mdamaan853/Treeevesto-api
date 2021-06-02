const sizeChartModal = require('../../module/sizeChart/sizeChartModel')
module.exports = ({
    createSizeChart: (req, res) => {
     new sizeChartModal({
        columns: req.body.columns,
        columnsData: req.body.columnsData,
        productId: req.body.productId,
        }).save((err, data) => {
        if (err){
            return res(err); 
        };
        return res(null,data)
    })
},
getAllSizeChart: (req, res) => {
    sizeChartModal.find().exec((err, data) => {
        if (err) return res(err);
        return res(null,data)
    })
},
getSizeChartById: (req, res) => {
    sizeChartModal.findById(req.params.id).exec((err, data) => {
        if (err) return res(err);
        return res(null,data)
    })
},
getSizeChartProduct: (req, res) => {
    sizeChartModal.find({productId:req.params.productId}).exec((err, data) => {
        if (err) return res(err);
        return res(null,data)
    })
},
updateSizeChart: (req, res) => {
    sizeChartModal.updateOne({_id:req.params.id},{$set:req.body}).exec((err, data) => {
        if (err) return res(err);
        return res(null,data)
    })
},
deleteSizeChart: (req, res) => {
    sizeChartModal.deleteOne({_id:req.params.id}).exec((err, data) => {
        if (err) return res(err);
        return res(null,data)
    })
}
})