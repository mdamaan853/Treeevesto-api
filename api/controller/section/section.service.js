const sectionModel = require('../../module/section/sectionModal')
module.exports = ({
    createSection: (req, res) => {
     new sectionModel({
        title: req.body.title,
        grid:req.body.grid,
        date:new Date(),
        }).save((err, data) => {
        if (err){
        return res(err) 
        };
        return res(null,data)
    })
},
getAllSection: (req, res) => {
    sectionModel.find().exec((err, data) => {
        if (err)return res(err) ;
        return res(null,data)
    })
},
getSectionById: (req, res) => {
    sectionModel.findById(req.params.id).exec((err, data) => {
        if (err)return res(err);
        return res(null,data)
    })
},
updateSectionById: (req, res) => {
    sectionModel.updateOne({_id:req.params.id},{$set:req.body}).exec((err, data) => {
        if (err) return res(err) ;
        return res(null,data)
    })
},
deleteSectionById: (req, res) => {
    sectionModel.findByIdAndRemove(req.params.id).exec((err, data) => {
        if (err) return res(err) ;
        return res(null,data)
    })
}
})