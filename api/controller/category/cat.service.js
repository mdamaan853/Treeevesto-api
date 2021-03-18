const catModel = require('../../module/category/catModel')
module.exports = ({
    createCategory: (req, res) => {
     new catModel({
        catName: req.body.catName,
        slug: req.body.slug,
        desc: req.body.desc,
        imgUrl: req.file.path,
        parentCatId: req.body.parentCatId,
        productId: req.body.productId,
        metaKeyword:req.body.metaKeyword,
        }).save((err, data) => {
        if (err){
            console.log('error...'+err)
        };
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
})