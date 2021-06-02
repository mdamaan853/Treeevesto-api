const gstModel = require('../../module/gst/gstModel')
module.exports = ({
    createGst: (req, res) => {
     new gstModel({
        gstName: req.body.gstName,
        gstPercent:req.body.gstPercent,
        date:new Date(),
        }).save((err, data) => {
        if (err){
        return res(err) 
        };
        return res(null,data)
    })
},
getAllGst: (req, res) => {
    gstModel.find().exec((err, data) => {
        if (err)return res(err) ;
        return res(null,data)
    })
},
getGstById: (req, res) => {
    gstModel.findById(req.params.id).exec((err, data) => {
        if (err)return res(err);
        return res(null,data)
    })
},
updateGstById: (req, res) => {
    gstModel.updateOne({_id:req.params.id},{$set:req.body}).exec((err, data) => {
        if (err) return res(err) ;
        return res(null,data)
    })
},
deleteGstById: (req, res) => {
    gstModel.findByIdAndRemove(req.params.id).exec((err, data) => {
        if (err) return res(err) ;
        return res(null,data)
    })
}
})