const catModel = require('../../module/category/catModel')
module.exports = ({
    createCategory: (req, res) => {
     new catModel({
        catName: req.body.catName,
        slug: req.body.slug,
        desc: req.body.desc,
        imgUrl: req.body.imgUrl,
        parentCatId: req.body.parentCatId,
        metaKeyword:req.body.metaKeyword,
        }).save((err, data) => {
        if (err){
            return res(err); 
        };
        return res(null,data)
    })
},
getAll: (req, res) => {
    catModel.find().exec((err, data) => {
        if (err) throw err;
        return res(null,data)
    })
},
getAllCategory: (req, res) => {
    catModel.find({parentCatId:0}).exec((err, data) => {
        if (err) throw err;
        return res(null,data)
    })
},
getSubCatById: (req, res) => {
    catModel.find({parentCatId:req.params.id}).exec((err, data) => {
        if (err) throw err;
        return res(null,data)
    })
},
deleteCategoryById: (req, res) => {
    catModel.deleteOne({_id:req.params.id}).exec((err, data) => {
        if (err) throw err;
        return res(null,data)
    })
}
})